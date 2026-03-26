const express = require('express');
const router  = express.Router();
const { Student, Team, Cycle, Session, Assignment, Grade, Sac, AuthLog } = require('./models');
const axios = require('axios'); // For calling external AI APIs securely

/* ═══════════════════════════════════════════════════
   AI SECURITY GUARD (Input Check)
═══════════════════════════════════════════════════ */
const securityGuard = async (req, res, next) => {
    const userInput = JSON.stringify(req.body);
    // 1. Rule-based security (Fast)
    const maliciousPatterns = [/<script>/i, /javascript:/i, /SELECT \* FROM/i, /UNION ALL/i];
    if (maliciousPatterns.some(pattern => pattern.test(userInput))) {
        return res.status(403).json({ error: 'AI Security Guard: Malicious input detected and blocked.' });
    }
    
    // 2. AI-based context check (placeholder logic for now)
    // Could call a classification model here
    next();
};


/* ═══════════════════════════════════════════════════
   STUDENTS
═══════════════════════════════════════════════════ */

// GET /api/students?dept=CSE&batch=2027
router.get('/students', async (req, res) => {
    try {
        const filter = {};
        if (req.query.dept)  filter.department = req.query.dept.toUpperCase();
        if (req.query.batch) filter.batch = parseInt(req.query.batch);
        const students = await Student.find(filter).sort({ rollNo: 1 });
        res.json(students);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

// POST /api/students (single or bulk)
router.post('/students', async (req, res) => {
    try {
        const data = Array.isArray(req.body) ? req.body : [req.body];
        const result = await Student.insertMany(data, { ordered: false });
        res.status(201).json({ inserted: result.length });
    } catch (e) {
        if (e.code === 11000) {
            res.status(409).json({ error: 'Duplicate roll numbers found', details: e.message });
        } else {
            res.status(500).json({ error: e.message });
        }
    }
});

// GET /api/students/:rollNo
router.get('/students/:rollNo', async (req, res) => {
    try {
        const s = await Student.findOne({ rollNo: req.params.rollNo.toUpperCase() });
        if (!s) return res.status(404).json({ error: 'Student not found' });
        res.json(s);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

// PUT /api/students/:rollNo
router.put('/students/:rollNo', securityGuard, async (req, res) => {
    try {
        const s = await Student.findOneAndUpdate(
            { rollNo: req.params.rollNo.toUpperCase() },
            req.body,
            { new: true }
        );
        if (!s) return res.status(404).json({ error: 'Student not found' });
        res.json(s);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

/* ═══════════════════════════════════════════════════
   STUDENT AUTH (Roll No + DOB)
═══════════════════════════════════════════════════ */
router.post('/auth/student', securityGuard, async (req, res) => {
    try {
        const { rollNo, dob } = req.body;
        if (!rollNo) return res.status(400).json({ error: 'Roll number required' });

        const student = await Student.findOne({ rollNo: rollNo.toUpperCase() });
        if (!student) return res.status(404).json({ error: 'Student not found' });

        // Verify DOB if provided and stored
        if (student.dob && dob && student.dob !== dob) {
            return res.status(401).json({ error: 'Date of birth does not match' });
        }

        // Log the login
        await AuthLog.create({
            role: 'Student',
            rollNo: student.rollNo,
            department: student.department,
            ipAddress: req.ip
        });

        res.json({
            success: true,
            student: {
                rollNo:     student.rollNo,
                name:       student.name,
                department: student.department,
                batch:      student.batch,
                gender:     student.gender,
                cgpa:       student.cgpa,
                email:      student.email
            }
        });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

/* ═══════════════════════════════════════════════════
   TEAMS
═══════════════════════════════════════════════════ */
router.get('/teams', async (req, res) => {
    try {
        const filter = {};
        if (req.query.dept)  filter.department = req.query.dept.toUpperCase();
        if (req.query.batch) filter.batch = parseInt(req.query.batch);
        const teams = await Team.find(filter).sort({ teamName: 1 });
        res.json(teams);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

router.post('/teams', securityGuard, async (req, res) => {
    try {
        const data = Array.isArray(req.body) ? req.body : [req.body];
        const result = await Team.insertMany(data);
        res.status(201).json({ inserted: result.length, teams: result });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

router.put('/teams/:id', async (req, res) => {
    try {
        const t = await Team.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!t) return res.status(404).json({ error: 'Team not found' });
        res.json(t);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

router.delete('/teams', async (req, res) => {
    try {
        const filter = {};
        if (req.query.dept)  filter.department = req.query.dept.toUpperCase();
        if (req.query.batch) filter.batch = parseInt(req.query.batch);
        const result = await Team.deleteMany(filter);
        res.json({ deleted: result.deletedCount });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

/* ═══════════════════════════════════════════════════
   CYCLES
═══════════════════════════════════════════════════ */
router.get('/cycles', async (req, res) => {
    try {
        const cycles = await Cycle.find().sort({ createdAt: -1 });
        res.json(cycles);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

router.post('/cycles', async (req, res) => {
    try {
        const cycle = await Cycle.create(req.body);
        res.status(201).json(cycle);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

router.put('/cycles/:id', async (req, res) => {
    try {
        const c = await Cycle.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!c) return res.status(404).json({ error: 'Cycle not found' });
        res.json(c);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

router.delete('/cycles/:id', async (req, res) => {
    try {
        await Cycle.findByIdAndDelete(req.params.id);
        res.json({ deleted: true });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

/* ═══════════════════════════════════════════════════
   SESSIONS / SCHEDULE
═══════════════════════════════════════════════════ */
router.get('/sessions', async (req, res) => {
    try {
        const filter = {};
        if (req.query.dept)  filter.department = req.query.dept.toUpperCase();
        if (req.query.batch) filter.batch = parseInt(req.query.batch);
        const sessions = await Session.find(filter).sort({ sessionNumber: 1 });
        res.json(sessions);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

router.post('/sessions', async (req, res) => {
    try {
        const data = Array.isArray(req.body) ? req.body : [req.body];
        const result = await Session.insertMany(data);
        res.status(201).json({ inserted: result.length });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

router.put('/sessions/:id', async (req, res) => {
    try {
        const s = await Session.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!s) return res.status(404).json({ error: 'Session not found' });
        res.json(s);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

/* ═══════════════════════════════════════════════════
   ASSIGNMENTS
═══════════════════════════════════════════════════ */
router.get('/assignments', async (req, res) => {
    try {
        const filter = {};
        if (req.query.dept)  filter.department = req.query.dept.toUpperCase();
        if (req.query.batch) filter.batch = parseInt(req.query.batch);
        const assignments = await Assignment.find(filter).sort({ createdAt: -1 });
        res.json(assignments);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

router.post('/assignments', async (req, res) => {
    try {
        const assignment = await Assignment.create(req.body);
        res.status(201).json(assignment);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

/* ═══════════════════════════════════════════════════
   GRADES
═══════════════════════════════════════════════════ */
router.get('/grades', async (req, res) => {
    try {
        const filter = {};
        if (req.query.rollNo) filter.rollNo = req.query.rollNo.toUpperCase();
        if (req.query.dept)   filter.department = req.query.dept.toUpperCase();
        if (req.query.batch)  filter.batch = parseInt(req.query.batch);
        const grades = await Grade.find(filter).sort({ createdAt: -1 });
        res.json(grades);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

router.post('/grades', async (req, res) => {
    try {
        const data = Array.isArray(req.body) ? req.body : [req.body];
        const result = await Grade.insertMany(data);
        res.status(201).json({ inserted: result.length });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

/* ═══════════════════════════════════════════════════
   SAC COORDINATORS
═══════════════════════════════════════════════════ */
router.get('/sac', async (req, res) => {
    try {
        const filter = {};
        if (req.query.dept) filter.department = req.query.dept.toUpperCase();
        const sacs = await Sac.find(filter).sort({ department: 1, rollNo: 1 });
        res.json(sacs);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

router.post('/sac', async (req, res) => {
    try {
        const data = Array.isArray(req.body) ? req.body : [req.body];
        const result = await Sac.insertMany(data);
        res.status(201).json({ inserted: result.length });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

/* ═══════════════════════════════════════════════════
   AUTH LOGS
═══════════════════════════════════════════════════ */
router.get('/auth/logs', async (req, res) => {
    try {
        const logs = await AuthLog.find().sort({ loginTime: -1 }).limit(100);
        res.json(logs);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

/* ═══════════════════════════════════════════════════
   STATS / DASHBOARD
═══════════════════════════════════════════════════ */
router.get('/stats', async (req, res) => {
    try {
        const [totalStudents, totalTeams, totalCycles, totalSessions, totalSac] = await Promise.all([
            Student.countDocuments(),
            Team.countDocuments(),
            Cycle.countDocuments(),
            Session.countDocuments(),
            Sac.countDocuments()
        ]);

        const deptStats = await Student.aggregate([
            { $group: { _id: '$department', count: { $sum: 1 } } },
            { $sort: { _id: 1 } }
        ]);

        const batchStats = await Student.aggregate([
            { $group: { _id: { dept: '$department', batch: '$batch' }, count: { $sum: 1 } } },
            { $sort: { '_id.dept': 1, '_id.batch': 1 } }
        ]);

        res.json({
            totals: { students: totalStudents, teams: totalTeams, cycles: totalCycles, sessions: totalSessions, sac: totalSac },
            byDepartment: deptStats,
            byBatch: batchStats
        });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

router.get('/check', (req, res) => res.json({ status: 'Backend is Online!', time: new Date() }));

/* ═══════════════════════════════════════════════════
   SECURE AI CHATBOT (Backend Proxy)
═══════════════════════════════════════════════════ */
router.post('/ai/chat', async (req, res) => {
    try {
        const { message, history } = req.body;
        const apiKey = process.env.GEMINI_API_KEY;

        if (!apiKey || apiKey === 'PLACEHOLDER') {
             return res.json({ response: "I'm in safe-mode! Add a GEMINI_API_KEY to the backend .env file to enable my full brain." });
        }

        // Calling Google Gemini API (or similar) securely from the backend
        const response = await axios.post(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
            contents: [{ parts: [{ text: `You are SAM-AI, a helpful security-aware academic assistant for GCE Erode. User says: ${message}` }] }]
        });

        const aiText = response.data?.candidates?.[0]?.content?.parts?.[0]?.text || "I'm thinking... but couldn't find an answer.";
        res.json({ response: aiText });
    } catch (e) {
        res.status(500).json({ error: 'AI Backend Error: ' + e.message });
    }
});

module.exports = router;
