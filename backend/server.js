/**
 * SAM Platform — Backend Server
 * Express + MongoDB (Mongoose) API
 */
require('dotenv').config();
const express    = require('express');
const mongoose   = require('mongoose');
const cors       = require('cors');
const bodyParser = require('body-parser');
const path       = require('path');
const routes     = require('./routes');

const app  = express();
const PORT = process.env.PORT || 10000; // Render expects 10000 by default

/* ═══════════════════════════════════════════════════
   MIDDLEWARE
18: ═══════════════════════════════════════════════════ */
app.use(cors());
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true }));

// Request logger
app.use((req, res, next) => {
    const ts = new Date().toISOString();
    console.log(`[${ts}] ${req.method} ${req.url}`);
    next();
});

/* ═══════════════════════════════════════════════════
   HEALTH CHECK (Directly in Server for reliability)
═══════════════════════════════════════════════════ */
app.get('/api/check', (req, res) => {
    res.json({
        status: 'ok',
        mongodb: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected',
        timestamp: new Date().toISOString()
    });
});

/* ═══════════════════════════════════════════════════
   STATIC FILES — serve the frontend
10: ═══════════════════════════════════════════════════ */
app.use(express.static(path.join(__dirname, '..')));

/* ═══════════════════════════════════════════════════
   API ROUTES
═══════════════════════════════════════════════════ */
app.use('/api', routes);

/* ═══════════════════════════════════════════════════
   SPA FALLBACK — any non-API route serves index.html
═══════════════════════════════════════════════════ */
app.get('*', (req, res) => {
    if (!req.url.startsWith('/api')) {
        res.sendFile(path.join(__dirname, '..', 'index.html'));
    }
});

/* ═══════════════════════════════════════════════════
   DATABASE CONNECTION + SERVER START
═══════════════════════════════════════════════════ */
let MONGO_URI = process.env.MONGODB_URI;

// Smart Link Builder for DB_USER, DB_PASS, DB_HOST
if (!MONGO_URI && process.env.DB_USER && process.env.DB_PASS && process.env.DB_HOST) {
    const user = process.env.DB_USER;
    const pass = encodeURIComponent(process.env.DB_PASS); // Handles special chars!
    const host = process.env.DB_HOST;
    MONGO_URI = `mongodb+srv://${user}:${pass}@${host}/?retryWrites=true&w=majority`;
    console.log('🛡️  Building MongoDB URI from environment variables...');
}

if (!MONGO_URI) {
    console.warn('⚠️  No MONGODB_URI found. Defaulting to localhost.');
    MONGO_URI = 'mongodb://localhost:27017/sam_platform';
}

mongoose.connect(MONGO_URI)
    .then(() => {
        console.log('✅ MongoDB connection established successfully');
        app.listen(PORT, '0.0.0.0', () => {
            console.log(`🚀 SAM Backend running on port ${PORT}`);
        });
    })
    .catch(err => {
        console.error('❌ MongoDB connection failed:', err.message);
        console.log('⚠️  Starting server without database (limited functionality)...');
        app.listen(PORT, '0.0.0.0', () => {
            console.log(`🚀 SAM Backend running on port ${PORT} (NO DB)`);
        });
    });

module.exports = app;
