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
const PORT = process.env.PORT || 5000;

/* ═══════════════════════════════════════════════════
   MIDDLEWARE
═══════════════════════════════════════════════════ */
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
   STATIC FILES — serve the frontend
═══════════════════════════════════════════════════ */
app.use(express.static(path.join(__dirname, '..')));

/* ═══════════════════════════════════════════════════
   API ROUTES
═══════════════════════════════════════════════════ */
app.use('/api', routes);

/* ═══════════════════════════════════════════════════
   HEALTH CHECK
═══════════════════════════════════════════════════ */
app.get('/api/health', (req, res) => {
    res.json({
        status: 'ok',
        uptime: process.uptime(),
        mongodb: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected',
        timestamp: new Date().toISOString()
    });
});

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
const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/sam_platform';

mongoose.connect(MONGO_URI)
    .then(() => {
        console.log('✅ MongoDB connected successfully');
        console.log(`   Database: ${mongoose.connection.name}`);
        app.listen(PORT, () => {
            console.log(`🚀 SAM Backend running on http://localhost:${PORT}`);
            console.log(`📡 API available at http://localhost:${PORT}/api`);
        });
    })
    .catch(err => {
        console.error('❌ MongoDB connection failed:', err.message);
        console.log('⚠️  Starting server without database (limited functionality)...');
        app.listen(PORT, () => {
            console.log(`🚀 SAM Backend running on http://localhost:${PORT} (NO DB)`);
        });
    });

module.exports = app;
