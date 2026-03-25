/**
 * SAM Platform — Database Seeder
 * Migrates existing student + SAC data from frontend JS files into MongoDB
 * 
 * Usage: node seed.js
 */
require('dotenv').config();
const mongoose = require('mongoose');
const path     = require('path');
const fs       = require('fs');
const { Student, Sac } = require('./models');

const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/sam_platform';

/* ═══════════════════════════════════════════════════
   LOAD FRONTEND DATA FILES
═══════════════════════════════════════════════════ */
function loadStudentData() {
    const dataDir = path.join(__dirname, '..', 'data', 'students');
    const allStudents = [];

    if (!fs.existsSync(dataDir)) {
        console.log('⚠️  No data/students directory found. Skipping student seed.');
        return allStudents;
    }

    const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.js'));

    for (const file of files) {
        const content = fs.readFileSync(path.join(dataDir, file), 'utf-8');

        // Extract department code from variable name pattern
        const deptMatch = content.match(/const\s+(\w+)_STUDENTS/i) || content.match(/var\s+(\w+)_STUDENTS/i);
        if (!deptMatch) continue;

        const deptCode = deptMatch[1].toUpperCase();

        // Extract the data array using regex
        const arrMatch = content.match(/=\s*(\[[\s\S]*?\]);/);
        if (!arrMatch) continue;

        try {
            const data = eval(arrMatch[1]);
            if (Array.isArray(data)) {
                for (const item of data) {
                    // Handle different data shapes
                    allStudents.push({
                        rollNo:     (item.id || item.rollNo || item.roll_no || '').toString().toUpperCase(),
                        name:       item.name || item.student_name || '',
                        department: deptCode,
                        batch:      parseInt(item.batch || item.passing_year || 2027),
                        gender:     (item.gender || 'M')[0].toUpperCase(),
                        dob:        item.dob || item.date_of_birth || '',
                        cgpa:       item.cgpa !== undefined ? parseFloat(item.cgpa) : null,
                        email:      item.email || '',
                        whatsapp:   item.whatsapp || item.contact || '',
                        status:     item.status || 'Active'
                    });
                }
            }
        } catch (e) {
            console.log(`⚠️  Could not parse ${file}: ${e.message}`);
        }
    }

    return allStudents;
}

function loadSacData() {
    const sacFile = path.join(__dirname, '..', 'data', 'sac_data.js');
    const allSac = [];

    if (!fs.existsSync(sacFile)) {
        console.log('⚠️  No data/sac_data.js found. Skipping SAC seed.');
        return allSac;
    }

    const content = fs.readFileSync(sacFile, 'utf-8');
    const arrMatch = content.match(/=\s*(\{[\s\S]*?\});/);
    if (!arrMatch) return allSac;

    try {
        const data = eval('(' + arrMatch[1] + ')');
        for (const [dept, members] of Object.entries(data)) {
            if (Array.isArray(members)) {
                for (const m of members) {
                    allSac.push({
                        rollNo:     m.rollNo || m.id || '',
                        name:       m.name || '',
                        department: dept.toUpperCase(),
                        batch:      parseInt(m.batch || 2027),
                        gender:     (m.gender || 'M')[0].toUpperCase(),
                        whatsapp:   m.whatsapp || m.contact || '',
                        email:      m.email || ''
                    });
                }
            }
        }
    } catch (e) {
        console.log(`⚠️  Could not parse SAC data: ${e.message}`);
    }

    return allSac;
}

/* ═══════════════════════════════════════════════════
   SEED DATABASE
═══════════════════════════════════════════════════ */
async function seed() {
    console.log('🌱 SAM Platform — Database Seeder');
    console.log('═'.repeat(50));

    try {
        await mongoose.connect(MONGO_URI);
        console.log('✅ Connected to MongoDB');

        // Seed Students
        const students = loadStudentData();
        if (students.length > 0) {
            await Student.deleteMany({});
            await Student.insertMany(students, { ordered: false });
            console.log(`📚 Seeded ${students.length} students`);
        }

        // Seed SAC
        const sacs = loadSacData();
        if (sacs.length > 0) {
            await Sac.deleteMany({});
            await Sac.insertMany(sacs, { ordered: false });
            console.log(`👥 Seeded ${sacs.length} SAC coordinators`);
        }

        console.log('═'.repeat(50));
        console.log('✅ Seeding complete!');

    } catch (e) {
        console.error('❌ Seeding failed:', e.message);
    } finally {
        await mongoose.disconnect();
        process.exit(0);
    }
}

seed();
