/**
 * SAM System — Hierarchical Drill-Down Navigation
 * College → Department → Batch → Teams → Students
 */

// ===== Academic Cycle Management =====
let cycleStore = JSON.parse(localStorage.getItem('sam_cycles') || '[]');

function saveCycles() {
    localStorage.setItem('sam_cycles', JSON.stringify(cycleStore));
}

function getActiveCycle() {
    const today = new Date().toISOString().slice(0, 10);
    return cycleStore.find(c => c.startDate <= today && c.endDate >= today) || null;
}

function renderCycleDisplay() {
    const ac = getActiveCycle();
    const cDisp = document.getElementById('home-cycle-display');
    if (!cDisp) return;

    if (ac) {
        cDisp.innerHTML = `<div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;padding:12px 16px;">
      <div style="display:flex;flex-wrap:wrap;gap:16px;font-size:.85rem;margin-bottom:8px;">
        <div><span style="font-size:.7rem;color:#6b7280;text-transform:uppercase;letter-spacing:.05em;">Active Cycle</span><div style="font-weight:700;color:#166534;">${ac.name}</div></div>
        <div><span style="font-size:.7rem;color:#6b7280;text-transform:uppercase;letter-spacing:.05em;">Start</span><div style="font-weight:600;color:#374151;">${ac.startDate}</div></div>
        <div><span style="font-size:.7rem;color:#6b7280;text-transform:uppercase;letter-spacing:.05em;">End</span><div style="font-weight:600;color:#374151;">${ac.endDate}</div></div>
      </div>
    </div>`;
    } else {
        cDisp.innerHTML = '<div style="font-size:.8rem;color:#9ca3af;padding:8px 0;font-style:italic;">No active academic cycle. Create one to scope teams and sessions.</div>';
    }
}

function openCycleCreateModal() {
    let m = document.getElementById('cycle-modal');
    if (!m) {
        m = document.createElement('div');
        m.id = 'cycle-modal';
        m.innerHTML = `
        <div style="position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.5);display:flex;align-items:center;justify-content:center;z-index:9999;">
            <div style="background:#fff;border-radius:12px;width:400px;max-width:90vw;box-shadow:0 10px 25px rgba(0,0,0,.2);">
                <div style="background:linear-gradient(135deg,var(--primary),var(--primary-dk));padding:16px 20px;border-radius:12px 12px 0 0;color:#fff;">
                    <h3 style="margin:0;font-size:1.1rem;font-family:'Playfair Display',serif;">Create Academic Cycle</h3>
                </div>
                <div style="padding:20px;">
                    <div id="cycle-err" style="display:none;background:#fef2f2;color:#991b1b;padding:8px;border-radius:6px;font-size:.8rem;margin-bottom:12px;"></div>
                    <div style="margin-bottom:12px;">
                        <label style="display:block;font-size:.75rem;font-weight:600;color:#4b5563;margin-bottom:4px;">Cycle Name</label>
                        <input type="text" id="cycle-name" style="width:100%;padding:8px;border:1px solid #d1d5db;border-radius:6px;font-size:.9rem;" placeholder="e.g. Even Semester 2026">
                    </div>
                    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:16px;">
                        <div>
                            <label style="display:block;font-size:.75rem;font-weight:600;color:#4b5563;margin-bottom:4px;">Start Date</label>
                            <input type="date" id="cycle-start" style="width:100%;padding:8px;border:1px solid #d1d5db;border-radius:6px;font-size:.9rem;">
                        </div>
                        <div>
                            <label style="display:block;font-size:.75rem;font-weight:600;color:#4b5563;margin-bottom:4px;">End Date</label>
                            <input type="date" id="cycle-end" style="width:100%;padding:8px;border:1px solid #d1d5db;border-radius:6px;font-size:.9rem;">
                        </div>
                    </div>
                    <div style="display:flex;justify-content:flex-end;gap:8px;">
                        <button class="btn" onclick="closeCycleModal()" style="padding:8px 16px;background:#f3f4f6;color:#374151;border:none;">Cancel</button>
                        <button class="btn" onclick="saveCycle()" style="padding:8px 16px;background:var(--accent);color:#2C2416;border:none;">Save Cycle</button>
                    </div>
                </div>
            </div>
        </div>`;
        document.body.appendChild(m);
    }
    document.getElementById('cycle-name').value = '';
    document.getElementById('cycle-start').value = '';
    document.getElementById('cycle-end').value = '';
    document.getElementById('cycle-err').style.display = 'none';
    m.style.display = 'flex';
}

function closeCycleModal() {
    const m = document.getElementById('cycle-modal');
    if (m) m.style.display = 'none';
}

function saveCycle() {
    const n = document.getElementById('cycle-name').value.trim();
    const s = document.getElementById('cycle-start').value;
    const e = document.getElementById('cycle-end').value;
    const err = document.getElementById('cycle-err');
    if (!n) { err.textContent = 'Name required'; err.style.display = 'block'; return; }
    if (!s || !e) { err.textContent = 'Dates required'; err.style.display = 'block'; return; }
    if (e <= s) { err.textContent = 'End must be after start'; err.style.display = 'block'; return; }

    cycleStore.push({ id: 'C' + Date.now(), name: n, startDate: s, endDate: e });
    saveCycles();
    closeCycleModal();
    renderCycleDisplay();

    const list = document.getElementById('home-cycle-list');
    if (list && list.style.display !== 'none') renderCycleList();
    showToast('Cycle saved successfully', 'success');
}

function toggleCycleList() {
    const el = document.getElementById('home-cycle-list');
    const btn = document.getElementById('btn-toggle-cycles');
    if (!el || !btn) return;

    if (el.style.display === 'none') {
        el.style.display = 'block';
        btn.textContent = '🔼 Hide';
        renderCycleList();
    } else {
        el.style.display = 'none';
        btn.textContent = '📋 View All';
    }
}

function renderCycleList() {
    const el = document.getElementById('home-cycle-list');
    if (!el) return;
    if (!cycleStore.length) {
        el.innerHTML = '<div style="font-size:.75rem;color:#9ca3af;padding-top:8px;">No cycles created yet.</div>';
        return;
    }
    const today = new Date().toISOString().slice(0, 10);
    el.innerHTML = '<div style="overflow-x:auto;"><table class="dt" style="width:100%;font-size:.8rem;margin-top:10px;">' +
        '<thead><tr><th>Name</th><th>Start</th><th>End</th><th>Status</th><th colspan="2">Actions</th></tr></thead><tbody>' +
        cycleStore.map(c => `
        <tr>
            <td style="font-weight:600;">${c.name}</td>
            <td>${c.startDate}</td>
            <td>${c.endDate}</td>
            <td>${(c.startDate <= today && c.endDate >= today) ? '<span class="badge" style="background:#dcfce3;color:#166534;font-size:.65rem;">Active</span>' : '<span class="badge" style="background:#f3f4f6;color:#6b7280;font-size:.65rem;">Inactive</span>'}</td>
            <td><button class="btn" onclick="editCycle('${c.id}')" style="background:#eff6ff;color:#1d4ed8;padding:4px 8px;font-size:.7rem;border:1px solid #bfdbfe;">✏️ Edit</button></td>
            <td><button class="btn" onclick="deleteCycle('${c.id}')" style="background:#fef2f2;color:#b91c1c;padding:4px 8px;font-size:.7rem;border:1px solid #fecaca;">🗑</button></td>
        </tr>`).join('') +
        '</tbody></table></div>';
}

function editCycle(id) {
    const idx = cycleStore.findIndex(c => c.id === id);
    if (idx < 0) return;
    const c = cycleStore[idx];
    const nm = prompt('Cycle name:', c.name); if (!nm || !nm.trim()) return;
    const sd = prompt('Start date (YYYY-MM-DD):', c.startDate) || c.startDate;
    const ed = prompt('End date (YYYY-MM-DD):', c.endDate) || c.endDate;
    cycleStore[idx] = { ...c, name: nm.trim(), startDate: sd, endDate: ed };
    saveCycles();
    renderCycleDisplay();
    renderCycleList();
    showToast('Cycle updated ✓', 'success');
}

function deleteCycle(id) {
    if (!confirm('Are you sure you want to delete this cycle?')) return;
    cycleStore = cycleStore.filter(c => c.id !== id);
    saveCycles();
    renderCycleDisplay();
    renderCycleList();
    showToast('Cycle deleted', 'info');
}


// ===== Premium Toast Notifications =====
function showToast(message, type = 'info') {
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;

    // Icons based on type
    let icon = 'ℹ️';
    if (type === 'success') icon = '✅';
    if (type === 'warning') icon = '⚠️';
    if (type === 'error') icon = '🚨';

    toast.innerHTML = `<span class="toast-icon">${icon}</span><span class="toast-message">${message}</span>`;
    container.appendChild(toast);

    // Trigger animation
    setTimeout(() => toast.classList.add('toast-show'), 10);

    // Remove after 3.5s
    setTimeout(() => {
        toast.classList.remove('toast-show');
        setTimeout(() => toast.remove(), 300);
    }, 3500);
}

// ===== Global State =====
const API_BASE = 'https://sam-webapp.onrender.com';
let appData = null;
let currentUser = null; // null or { role: string, dept: string|null, canGenerate: boolean }

// Database Aggregation Helpers
function getSubjectSpec(code) {
    if (!code) return null;
    const dbs = [
        typeof ATE_SUBJECTS !== 'undefined' ? ATE_SUBJECTS : null,
        typeof CSE_SUBJECTS !== 'undefined' ? CSE_SUBJECTS : null,
        typeof CVE_SUBJECTS !== 'undefined' ? CVE_SUBJECTS : null,
        typeof ECE_SUBJECTS !== 'undefined' ? ECE_SUBJECTS : null,
        typeof EEE_SUBJECTS !== 'undefined' ? EEE_SUBJECTS : null,
        typeof IMT_SUBJECTS !== 'undefined' ? IMT_SUBJECTS : null,
        typeof MCE_SUBJECTS !== 'undefined' ? MCE_SUBJECTS : null,
        typeof CDS_SUBJECTS !== 'undefined' ? CDS_SUBJECTS : null
    ];
    let spec = null;
    for (const db of dbs) {
        if (db && db[code]) {
            spec = db[code];
            break;
        }
    }

    // If not found in primary subject array, create a dummy object
    if (!spec) spec = { name: code };

    // Merge rich syllabus details if available
    if (typeof SYLLABUS_DETAILS !== 'undefined' && SYLLABUS_DETAILS[code]) {
        const details = SYLLABUS_DETAILS[code];
        if (details.objectives && details.objectives.length > 0) {
            spec.objective = details.objectives.join(' ');
        }
        if (details.outcomes && details.outcomes.length > 0) {
            spec.cos = {};
            details.outcomes.forEach((co, idx) => {
                let coName = co.id || ('CO' + (idx + 1));
                if (co.desc) spec.cos[coName] = co.desc;
            });
        }
        if (details.units && details.units.length > 0) {
            spec.unit_descs = true;
            spec.units = {};
            details.units.forEach(u => {
                spec.units[u.id] = {
                    title: u.title,
                    desc: (u.topics || []).join(', ')
                };
            });
        }
    }

    return Object.keys(spec).length > 1 ? spec : null;
}

function getLabsGen(deptCode) {
    if (deptCode === 'ATE' && typeof ATE_LABS !== 'undefined') return ATE_LABS;
    if (deptCode === 'CSE' && typeof CSE_LABS !== 'undefined') return CSE_LABS;
    if (deptCode === 'CVE' && typeof CVE_LABS !== 'undefined') return CVE_LABS;
    if (deptCode === 'ECE' && typeof ECE_LABS !== 'undefined') return ECE_LABS;
    if (deptCode === 'EEE' && typeof EEE_LABS !== 'undefined') return EEE_LABS;
    if (deptCode === 'IMT' && typeof IMT_LABS !== 'undefined') return IMT_LABS;
    if (deptCode === 'MCE' && typeof MCE_LABS !== 'undefined') return MCE_LABS;
    if (deptCode === 'CDS' && typeof CDS_LABS !== 'undefined') return CDS_LABS;
    return null;
}

/* ── Department-themed team names ── */
const TEAM_NAMES = {
    ATE: ['Turbo Chargers', 'Piston Kings', 'Gear Heads', 'Axle Force', 'Torque Titans',
        'Clutch Masters', 'Rev Riders', 'Crank Crew', 'Fuel Blaze', 'Drift Dynamos',
        'Valve Strikers', 'Engine Eagles', 'Boost Brigade', 'Nitro Knights', 'Cam Warriors'],
    CSE: ['Code Titans', 'Binary Bulls', 'Cyber Wolves', 'Data Dragons', 'Logic Legends',
        'Algo Aces', 'Kernel Kings', 'Byte Blasters', 'Stack Strikers', 'Cloud Crusaders',
        'Debug Devils', 'Pixel Panthers', 'Script Sharks', 'Hash Hawks', 'Neural Ninjas'],
    CVE: ['Concrete Kings', 'Steel Pillars', 'Bridge Builders', 'Geo Titans', 'Truss Masters',
        'Arch Angels', 'Site Spartans', 'Foundation Force', 'Beam Blazers', 'Survey Stars',
        'Drain Dynamos', 'Mortar Mavericks', 'Level Leaders', 'Plumb Pros', 'Gravel Guards'],
    ECE: ['Signal Snipers', 'Circuit Sharks', 'Wave Riders', 'Chip Champions', 'Frequency Force',
        'Antenna Aces', 'Pulse Pirates', 'Diode Dragons', 'Amplifier Army', 'Radar Rangers',
        'Oscillator Owls', 'Bandwidth Bulls', 'Transistor Titans', 'Modem Mavericks', 'Relay Rockets'],
    EEE: ['Volt Vipers', 'Watt Warriors', 'Spark Strikers', 'Current Crushers', 'Power Panthers',
        'Ohm Owls', 'Dynamo Devils', 'Fuse Fighters', 'Grid Guardians', 'Transformer Titans',
        'Coil Commanders', 'Amp Avengers', 'Switch Sharks', 'Breaker Bulls', 'Motor Mavericks'],
    IMT: ['Info Titans', 'Tech Troopers', 'Data Drifters', 'Net Ninjas', 'System Sharks',
        'Cloud Cobras', 'Query Kings', 'Server Strikers', 'Link Lions', 'Matrix Masters',
        'Firewall Force', 'Protocol Panthers', 'Cache Crushers', 'Router Rockets', 'Domain Dragons'],
    MCE: ['Mech Mavericks', 'Robo Rangers', 'Thermo Titans', 'Fluid Force', 'Weld Warriors',
        'Lathe Lions', 'CAD Crusaders', 'Forge Falcons', 'Turbine Tigers', 'Grind Gladiators',
        'Piston Pros', 'Drill Demons', 'Press Panthers', 'Alloy Aces', 'Shaft Sharks'],
    CDS: ['Data Wizards', 'Stat Strikers', 'Model Masters', 'Insight Ions', 'Cluster Kings',
        'Tensor Titans', 'Feature Force', 'Pipeline Panthers', 'Epoch Eagles', 'Vector Vipers',
        'Gradient Gurus', 'Matrix Mavericks', 'Neuron Knights', 'Bias Busters', 'Spark Scholars'],
};

function getTeamName(deptCode, teamIndex) {
    const names = TEAM_NAMES[deptCode];
    if (names && teamIndex < names.length) {
        return `${names[teamIndex]}`;
    }
    return `${deptCode}-T${teamIndex + 1}`;
}

// Single admin password for all roles: sam@admin
const ADMIN_HASH = '460fed869984ad2465122a0841a35c62c493f5e92c07499fa9c0c57fe86cc146';
// Faculty password: sam@faculty
const FACULTY_HASH = '5c7673add8b18969b0cd28dbf21371babfa912efe212234d0dc8e69ef323762d';
const ROLE_PASSWORDS = {
    'principal': ADMIN_HASH,
    'alumni': ADMIN_HASH,
    'hod_ATE': ADMIN_HASH,
    'hod_CSE': ADMIN_HASH,
    'hod_CVE': ADMIN_HASH,
    'hod_CDS': ADMIN_HASH,
    'hod_ECE': ADMIN_HASH,
    'hod_EEE': ADMIN_HASH,
    'hod_IMT': ADMIN_HASH,
    'hod_MCE': ADMIN_HASH,
    'faculty_ATE': ADMIN_HASH,
    'faculty_CSE': ADMIN_HASH,
    'faculty_CVE': ADMIN_HASH,
    'faculty_CDS': ADMIN_HASH,
    'faculty_ECE': ADMIN_HASH,
    'faculty_EEE': ADMIN_HASH,
    'faculty_IMT': ADMIN_HASH,
    'faculty_MCE': ADMIN_HASH,
};


// Navigation state
let navState = {
    level: 'college',   // college | department | batch | teams | sessions | assessments | grading | reveal
    dept: null,
    batch: null,
    teams: null,
};

// ── GRADING CONSTANTS ────────────────────────────────────────────────────────
const RUBRICS = {
    P: {
        label: 'Presenter', color: 'role-p', icon: '🎤',
        dims: ['Technical Accuracy', 'Communication', 'Collaboration', 'Critical Thinking', 'Problem Solving']
    },
    TR: {
        label: 'Technical Reviewer', color: 'role-tr', icon: '🔍',
        dims: ['Technical Critique', 'Question Depth', 'Analysis & Evidence', 'Peer Learning']
    },
    FP: {
        label: 'Feedback Provider', color: 'role-fp', icon: '💬',
        dims: ['Feedback Quality & Specificity', 'Empathy & Tone', 'Actionable Suggestions', 'Balanced Critique']
    }
};

const SCALE_LABELS = ['—', 'Needs Improvement', 'Developing', 'Proficient', 'Exemplary'];

const RUBRIC_ANCHORS = {
    P: [
        ['Not demonstrated — inaccurate or missing content', 'Major errors; key concepts misunderstood', 'Mostly correct; minor gaps in accuracy', 'Accurate and well-structured explanation', 'Precise, insightful — goes beyond syllabus'],
        ['Unclear; audience cannot follow', 'Difficult to follow; poor structure', 'Understandable with some unclear parts', 'Clear, logical and well-paced delivery', 'Exceptionally clear; engaging and confident'],
        ['No peer engagement', 'Minimal interaction with team', 'Some coordination; works independently', 'Active collaboration; supports team', 'Leads collaboration; elevates whole team'],
        ['No analysis beyond recall', 'Limited analysis; mostly descriptive', 'Some analysis with partial reasoning', 'Sound reasoning; considers alternatives', 'Deep analysis; synthesises multiple perspectives'],
        ['No attempt to solve problem', 'Identifies problem but no solution path', 'Attempts solution; partially successful', 'Clear solution with valid reasoning', 'Creative, efficient solution; anticipates edge cases'],
    ],
    TR: [
        ['No critique offered', 'Surface-level observations only', 'Identifies some issues; limited depth', 'Substantive critique with clear justification', 'Incisive, evidence-backed critique that adds value'],
        ['No questions asked', 'Trivial or yes/no questions', 'Reasonable questions but not probing', 'Probing questions that advance discussion', 'Challenging questions that reveal new insights'],
        ['No analysis; assertions only', 'Claims without supporting evidence', 'Some evidence; partial analysis', 'Evidence-backed analysis; logically structured', 'Rigorous analysis with multiple sources of evidence'],
        ['No engagement with peers', 'Passive; does not build on others', 'Occasionally references peers\' ideas', 'Actively builds on peers\' contributions', 'Synthesises team insights; enriches group learning'],
    ],
    FP: [
        ['No feedback given', 'Vague or generic feedback', 'Partially specific; some actionable points', 'Specific, clear feedback tied to observable behaviour', 'Highly specific, nuanced feedback with examples'],
        ['Dismissive or harmful tone', 'Blunt; lacks consideration for recipient', 'Neutral tone; respectful but impersonal', 'Warm, respectful and considerate', 'Empathetic, encouraging; builds psychological safety'],
        ['No suggestions provided', 'Suggestions too vague to act on', 'Some actionable points; not fully developed', 'Clear, concrete improvement suggestions', 'Specific, prioritised action plan with next steps'],
        ['Critique is biased or personal', 'Unbalanced; focus on negatives only', 'Fairly balanced but shallow', 'Constructive and well-balanced critique', 'Deeply insightful, constructive and highly actionable'],
    ]
};

// ===== Academic Info Helper =====
function getBatchAcademicInfo(batchYear) {
    const joiningYear = batchYear - 4;
    const passingYear = batchYear;
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth() + 1; // 1-12

    // Semester calculation (Aug = odd sem start, Jan = even sem start)
    let semester;
    if (currentMonth >= 7) {
        semester = (currentYear - joiningYear) * 2 + 1;
    } else {
        semester = (currentYear - joiningYear - 1) * 2 + 2;
    }
    semester = Math.max(1, Math.min(8, semester)); // Clamp 1-8

    const academicYear = Math.ceil(semester / 2); // 1st, 2nd, 3rd, 4th year
    const yearSuffix = ['', '1st', '2nd', '3rd', '4th'][academicYear] || `${academicYear}th`;

    return { joiningYear, passingYear, semester, academicYear, yearSuffix };
}

// ===== Initialization =====
document.addEventListener('DOMContentLoaded', () => {
    loadData();
});

// ===== Data Loading =====
async function loadData() {
    if (isBackendAvailable()) {
        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 2000);
            const resp = await fetch(API_BASE + '/api/data', { signal: controller.signal });
            clearTimeout(timeoutId);
            if (resp.ok) {
                appData = await resp.json();
                console.log('✅ Data loaded from Rust backend');
            } else {
                throw new Error('Backend returned ' + resp.status);
            }
        } catch (err) {
            console.warn('⚠️ Backend unreachable, using static data');
            useStaticData();
        }
    } else {
        console.info('🌐 Hosted environment or GitHub, using static data.');
        useStaticData();
    }

    // Hide splash screen
    setTimeout(() => {
        const splash = document.getElementById('splash-screen');
        if (splash) {
            splash.style.opacity = '0';
            setTimeout(() => splash.remove(), 500);
        }
    }, 300);

    render();
}

function useStaticData() {
    if (typeof STUDENT_DATA !== 'undefined') {
        appData = STUDENT_DATA;
        console.log('✅ Using static STUDENT_DATA from data/students_data.js');
    } else {
        appData = { college: 'GCE Erode', batches: [] };
        console.error('❌ STUDENT_DATA not found, using empty state');
    }
}

// ===== SHA-256 hash =====
async function sha256(message) {
    const msgBuffer = new TextEncoder().encode(message);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

// ===== Role-based Admin Auth =====
let loginState = { role: null, dept: null };
let selectedLoginRole = 'Faculty';

function openLoginModal(role) {
    selectedLoginRole = role;
    document.getElementById('login-modal-title').textContent = role + ' Login';
    document.getElementById('login-modal-subtitle').textContent = 'Enter ' + role + ' password to continue';

    document.getElementById('admin-modal').style.display = 'flex';
    document.getElementById('admin-password').value = '';
    document.getElementById('login-error').style.display = 'none';
}

function logout() {
    currentUser = null;
    updateUserBadge();
    navState = { level: 'college', dept: null, batch: null, teams: null };
    render();
}

async function attemptLogin() {
    const pw = document.getElementById('admin-password').value.trim();
    const unField = document.getElementById('admin-username');
    const un = unField ? unField.value.trim().toUpperCase() : '';
    let roleMatched = false;
    let fallbackNav = 'college';

    if (selectedLoginRole === 'Admin' && pw === 'admin') {
        currentUser = { role: 'Admin', dept: null, canGenerate: true, canLock: false };
        roleMatched = true;
    } else if (selectedLoginRole === 'Faculty' && pw === 'faculty') {
        currentUser = { role: 'Faculty', dept: null, canGenerate: true, canLock: true };
        roleMatched = true;
    } else if (selectedLoginRole === 'HOD' && (pw === 'hod' || pw === 'default')) {
        currentUser = { role: 'HOD', dept: 'CSE', canGenerate: true, canLock: true };
        roleMatched = true;
    } else if (selectedLoginRole === 'Student' && (un || pw === 'student' || pw === 'default')) {
        const isTest = (pw === 'student' || pw === 'default');
        const match = un.match(/^(\d{2})([A-Z]+)(\d+)$/);

        let sDept = 'CSE';
        let sBatch = 2027;

        if (match) {
            sDept = match[2];
            sBatch = 2000 + parseInt(match[1]) + 4;
        } else if (!isTest) {
            const err = document.getElementById('login-error');
            if (err) { err.textContent = 'Invalid Roll No format. Use e.g. 23CSE12'; err.style.display = 'block'; }
            return;
        }

        // Try backend authentication first
        if (typeof SAM_API !== 'undefined' && SAM_API.isConnected() && match) {
            try {
                const result = await SAM_API.authenticateStudent(un, pw);
                if (result.success && result.student) {
                    sDept = result.student.department;
                    sBatch = result.student.batch;
                    showToast(`Welcome, ${result.student.name}!`, 'success');
                }
            } catch (e) {
                console.log('[SAM] Backend auth failed, using local parsing');
            }
        }

        currentUser = { role: 'Student', dept: sDept, batch: sBatch, rollNo: un, canGenerate: false, canLock: false };
        roleMatched = true;

        // Redirection to Selection Screen
        navState.dept = sDept;
        navState.batch = sBatch;
        navState.level = 'selection';
        fallbackNav = null;

    } else if (selectedLoginRole === 'Alumni' && (pw === 'alumni' || pw === 'default')) {
        currentUser = { role: 'Alumni', dept: 'CSE', canGenerate: false, canLock: false };
        roleMatched = true;
    }

    if (!roleMatched && typeof sha256 === 'function') {
        try {
            const hash = await sha256(pw);
            if (selectedLoginRole === 'Admin' && hash === (typeof ADMIN_HASH !== 'undefined' ? ADMIN_HASH : '')) {
                currentUser = { role: 'Admin', dept: null, canGenerate: true, canLock: false };
                roleMatched = true;
            } else if (selectedLoginRole === 'Faculty' && hash === (typeof FACULTY_HASH !== 'undefined' ? FACULTY_HASH : '')) {
                currentUser = { role: 'Faculty', dept: null, canGenerate: true, canLock: true };
                roleMatched = true;
            }
        } catch (e) { }
    }

    if (roleMatched) {
        updateUserBadge();
        closeAdminLogin();
        if (fallbackNav) navigateTo(fallbackNav);
        else render();
    } else {
        const err = document.getElementById('login-error');
        if (err) {
            if (selectedLoginRole === 'Student') {
                err.textContent = 'Incorrect credentials for ' + selectedLoginRole;
            } else {
                err.textContent = 'Incorrect password for ' + selectedLoginRole + '. Please try again.';
            }
            err.style.display = 'block';
        }
    }
}

function closeAdminLogin() {
    document.getElementById('admin-modal').style.display = 'none';
    document.getElementById('admin-password').value = '';
    const inp = document.getElementById('admin-password');
    if (inp) inp.type = 'password';
    const svg = document.getElementById('eye-icon');
    if (svg) svg.innerHTML = '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>';
}

function togglePwEye() {
    const inp = document.getElementById('admin-password');
    const svg = document.getElementById('eye-icon');
    if (!inp || !svg) return;
    if (inp.type === 'password') {
        inp.type = 'text';
        svg.innerHTML = '<path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/>';
    } else {
        inp.type = 'password';
        svg.innerHTML = '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>';
    }
}

function updateUserBadge() {
    const badge = document.getElementById('user-badge');
    const facultyBtn = document.getElementById('faculty-login-btn');
    const adminBtn = document.getElementById('admin-login-btn');
    const logoutBtn = document.getElementById('logout-btn');

    if (currentUser) {
        badge.innerHTML = `<span>🔑</span> ${currentUser.role}`;
        badge.style.display = 'inline-flex';

        if (facultyBtn) facultyBtn.style.display = 'none';
        if (adminBtn) adminBtn.style.display = 'none';
        if (logoutBtn) logoutBtn.style.display = 'inline-flex';
    } else {
        badge.style.display = 'none';

        if (facultyBtn) facultyBtn.style.display = 'inline-flex';
        if (adminBtn) adminBtn.style.display = 'inline-flex';
        if (logoutBtn) logoutBtn.style.display = 'none';
    }
}

// ===== Navigation =====
function navigateTo(level, dept, batch) {
    // When moving to a different batch or department, reset the wizard state
    const batchChanging = (level === 'batch' && (dept !== navState.dept || batch !== navState.batch));
    const levelGoingBack = (level === 'college' || level === 'department' || level === 'batch');
    if (batchChanging || levelGoingBack) {
        navState.assignStep = 1;
        navState.assignConfig = {};
    }
    // If student and tries to go to college, redirect to selection
    if (currentUser && currentUser.role === 'Student' && (level === 'college' || level === 'department')) {
        level = 'selection';
    }
    navState.level = level;
    navState.dept = dept || null;
    navState.batch = batch || null;
    // Keep teams data when navigating to sessions or back to teams
    if (level !== 'sessions' && level !== 'teams') navState.teams = null;
    render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function navigateToSessions() {
    navState.level = 'sessions';
    render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function navigateToAssessments() {
    // Reset wizard to step 1 so it shows fresh for the current batch
    navState.assignStep = 1;
    navState.assignConfig = {};
    navState.level = 'assessments';
    render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function navigateBackToTeams() {
    // Clear wizard state so re-entering starts fresh
    navState.assignStep = 1;
    navState.assignConfig = {};
    navState.level = 'teams';
    render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function generateAndShowTeams(deptCode, batchYear, teamSize, mode) {
    const batchData = appData.batches.find(b => b.year === batchYear);
    if (!batchData) return;
    const students = batchData.students.filter(s => s.department === deptCode);

    mode = mode || 'random';

    // For CGPA mode: check if any student has CGPA data
    if (mode === 'cgpa') {
        const hasCgpa = students.some(s => s.cgpa !== null && s.cgpa !== undefined);
        if (!hasCgpa) {
            showToast('⚠️ CGPA data is not available for this batch. Falling back to Random Balanced mode.', 'warning');
            mode = 'random';
        }
    }

    navState.teams = buildTeams(students, teamSize || 5, mode, deptCode, batchYear);
    navState.level = 'teams';
    navState.dept = deptCode;
    navState.batch = batchYear;
    navState.editMode = (mode === 'manual'); // Auto-open edit mode for manual arrange
    navState.formationMode = mode;
    render();
}

// ===== Breadcrumb =====
function renderBreadcrumb() {
    const bc = document.getElementById('nav-breadcrumb');
    let items = [];

    items.push(`<span class="breadcrumb-item ${navState.level === 'college' ? 'active' : 'clickable'}" 
        onclick="navigateTo('college')">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
        </svg>
        GCE Erode
    </span>`);

    if (navState.dept) {
        const deptName = getDeptName(navState.dept);
        items.push(`<span class="breadcrumb-sep">›</span>`);
        items.push(`<span class="breadcrumb-item ${navState.level === 'department' ? 'active' : 'clickable'}" 
            onclick="navigateTo('department','${navState.dept}')">${deptName}</span>`);
    }

    if (navState.batch) {
        items.push(`<span class="breadcrumb-sep">›</span>`);
        const isOnBatch = navState.level === 'batch';
        items.push(`<span class="breadcrumb-item ${isOnBatch ? 'active' : 'clickable'}" 
            onclick="navigateTo('batch','${navState.dept}',${navState.batch})">${navState.batch} Batch</span>`);
    }

    if (navState.level === 'teams' || navState.level === 'sessions' || navState.level === 'assessments') {
        items.push(`<span class="breadcrumb-sep">›</span>`);
        items.push(`<span class="breadcrumb-item ${navState.level === 'teams' ? 'active' : 'clickable'}" 
            onclick="navigateBackToTeams()">Teams</span>`);
    }

    if (navState.level === 'assessments' || navState.level === 'sessions' || navState.level === 'grading' || navState.level === 'reveal') {
        items.push(`<span class="breadcrumb-sep">›</span>`);
        items.push(`<span class="breadcrumb-item ${navState.level === 'assessments' ? 'active' : 'clickable'}" 
            onclick="navigateToAssessments()">Assignment Generation</span>`);
    }

    if (navState.level === 'sessions') {
        items.push(`<span class="breadcrumb-sep">›</span>`);
        items.push(`<span class="breadcrumb-item active">Session Schedule</span>`);
    } else if (navState.level === 'grading') {
        items.push(`<span class="breadcrumb-sep">›</span>`);
        items.push(`<span class="breadcrumb-item active">Grading</span>`);
    } else if (navState.level === 'reveal') {
        items.push(`<span class="breadcrumb-sep">›</span>`);
        items.push(`<span class="breadcrumb-item active">Reveal</span>`);
    }

    if (navState.level === 'career') {
        items.push(`<span class="breadcrumb-sep">›</span>`);
        items.push(`<span class="breadcrumb-item active">🚀 Career Dashboard</span>`);
    } else if (navState.level === 'selection') {
        items.push(`<span class="breadcrumb-sep">›</span>`);
        items.push(`<span class="breadcrumb-item active">Dashboard Selection</span>`);
    }

    if (currentUser && currentUser.role === 'Student' && items.length > 0) {
        // More descriptive root for students
        items[0] = items[0].replace('GCE Erode', 'SAM Portal');
    }

    bc.innerHTML = items.join('');
}

function getDeptName(code) {
    const names = {
        'ATE': 'Automobile Engineering',
        'CSE': 'Computer Science & Engineering',
        'CVE': 'Civil Engineering',
        'CDS': 'Data Science',
        'ECE': 'Electronics & Communication Engineering',
        'EEE': 'Electrical & Electronics Engineering',
        'IMT': 'Information Technology',
        'MCE': 'Mechanical Engineering',
    };
    return names[code] || code;
}

function getDeptShortName(code) {
    const names = {
        'ATE': 'Automobile Engg.',
        'CSE': 'Computer Science',
        'CVE': 'Civil Engg.',
        'CDS': 'Data Science',
        'ECE': 'ECE',
        'EEE': 'EEE',
        'IMT': 'Info. Technology',
        'MCE': 'Mechanical Engg.',
    };
    return names[code] || code;
}

// ===== Main Render =====
function render() {
    renderBreadcrumb();
    const main = document.getElementById('main-content');

    switch (navState.level) {
        case 'college': renderCollege(main); break;
        case 'department': renderDepartment(main); break;
        case 'batch': renderBatch(main); break;
        case 'teams': renderTeams(main); break;
        case 'sessions': renderSessions(main); break;
        case 'assessments': renderAssessments(main); break;
        case 'grading': renderGrading(main); break;
        case 'reveal': renderReveal(main); break;
        case 'sac': renderSac(main); break;
        case 'selection': if (typeof renderSelection === 'function') renderSelection(main); break;
        case 'career': if (typeof renderCareer === 'function') renderCareer(main); break;
    }
}

// ===== Level 1: College Overview =====
function renderCollege(container) {
    // Aggregate stats across all batches
    let totalStudents = 0, totalMales = 0, totalFemales = 0;
    const deptSet = new Set();
    let totalSacs = 88; // Placeholder based on prototype
    let totalFaculty = 18; // Placeholder based on prototype

    appData.batches.forEach(b => {
        b.students.forEach(s => {
            totalStudents++;
            if (s.gender === 'M') totalMales++;
            if (s.gender === 'F') totalFemales++;
        });
        b.departments.forEach(d => {
            if (d.totalStudents > 0) deptSet.add(d.code);
        });
    });

    const deptTotals = {};
    appData.batches.forEach(b => {
        b.departments.forEach(d => {
            if (!deptTotals[d.code]) deptTotals[d.code] = { code: d.code, name: d.name, students: 0, males: 0, females: 0, batches: 0 };
            if (d.totalStudents > 0) {
                deptTotals[d.code].students += d.totalStudents;
                deptTotals[d.code].males += d.males;
                deptTotals[d.code].females += d.females;
                deptTotals[d.code].batches++;
            }
        });
    });

    let activeDepts = Object.values(deptTotals).filter(d => d.students > 0);

    // Filter departments if user has department-level restriction (HOD/Faculty)
    if (currentUser && currentUser.dept) {
        activeDepts = activeDepts.filter(d => d.code === currentUser.dept);
    }

    // If user is restricted to a single department, go straight to it
    if (currentUser && currentUser.dept && activeDepts.length === 1) {
        navigateTo('department', activeDepts[0].code);
        return;
    }

    container.innerHTML = `
        <div class="py-4">
            <!-- ── Role-switcher / Institution Panel ─────────────────────── -->
            <div id="home-role-panel" style="background:linear-gradient(135deg,var(--primary) 0%,#3D0E0E 100%);border-radius:12px;padding:16px 20px;margin-bottom:16px;box-shadow:0 4px 20px rgba(0,0,0,.25)">
                <div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12px">
                <div>
                    <div style="color:#f8fafc;font-size:1.05rem;font-weight:800;display:flex;align-items:center;gap:8px;flex-wrap:wrap">
                    🎓 SAM Platform — Student Activity Monitoring
                    <span id="home-role-badge" style="background:#C9A84C;color:#2C2416;font-size:.65rem;padding:2px 9px;border-radius:20px;font-weight:700;letter-spacing:.04em">FACULTY</span>
                    </div>
                    <div id="home-role-desc" style="color:#94a3b8;font-size:.72rem;margin-top:4px">Navigate: Department → Faculty → Batch → Course → (Teams · Schedule · Grade)</div>
                </div>
                <div style="display:flex;flex-wrap:wrap;gap:8px;align-items:center">
                    <select id="role-selector" onchange="switchRole(this.value)"
                    style="background:#3D0E0E;color:#F5E6E6;border:1px solid #5C1515;border-radius:.4rem;padding:6px 10px;font-size:.75rem;cursor:pointer">
                    <option value="faculty">👨‍🏫 Faculty View</option>
                    <option value="hod">🏢 Head of Department</option>
                    <option value="principal">🏛️ Principal / Admin</option>
                    </select>
                    <button onclick="showToast('Institution Dashboard coming soon', 'info')"
                    style="background:#C9A84C;color:#2C2416;border:none;border-radius:.4rem;padding:7px 15px;font-size:.72rem;font-weight:700;cursor:pointer;display:flex;align-items:center;gap:5px">
                    🏛️ Institution Dashboard
                    </button>
                    <button id="btn-data-mgmt" onclick="showAdminLogin()" 
                    style="background:#2D6A4F;color:#fff;border:none;border-radius:.4rem;padding:7px 15px;font-size:.72rem;font-weight:700;cursor:pointer;display:none;align-items:center;gap:5px">
                    ⚙️ Data Management
                    </button>
                </div>
                </div>
            </div>

            <!-- Stats -->
            <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                <div class="card text-center py-3" style="border-top:3px solid var(--primary)">
                <div style="font-family:'Playfair Display',serif;font-size:1.6rem;font-weight:800;color:var(--primary)">${totalStudents}</div>
                <div style="font-size:.72rem;color:#8C7B6B;margin-top:4px;text-transform:uppercase;letter-spacing:.06em">Students</div>
                </div>
                <div class="card text-center py-3" style="border-top:3px solid #2D6A4F">
                <div style="font-family:'Playfair Display',serif;font-size:1.6rem;font-weight:800;color:#2D6A4F">${activeDepts.length}</div>
                <div style="font-size:.72rem;color:#8C7B6B;margin-top:4px;text-transform:uppercase;letter-spacing:.06em">Departments</div>
                </div>
                <div class="card text-center py-3" style="border-top:3px solid #C9A84C">
                <div style="font-family:'Playfair Display',serif;font-size:1.6rem;font-weight:800;color:#C9A84C">${totalSacs}</div>
                <div style="font-size:.72rem;color:#8C7B6B;margin-top:4px;text-transform:uppercase;letter-spacing:.06em">SAC Members</div>
                </div>
                <div class="card text-center py-3" style="border-top:3px solid var(--primary)">
                <div style="font-family:'Playfair Display',serif;font-size:1.6rem;font-weight:800;color:var(--primary)">${totalFaculty}</div>
                <div style="font-size:.72rem;color:#8C7B6B;margin-top:4px;text-transform:uppercase;letter-spacing:.06em">Faculty</div>
                </div>
            </div>

            <!-- ── Academic Cycles ── -->
            <div class="card mb-4" style="border-left:4px solid var(--accent);">
                <div style="padding:14px 16px;">
                    <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px;">
                        <div>
                            <h3 style="margin:0;font-size:1rem;color:var(--primary);">📅 Academic Cycles</h3>
                            <div style="font-size:.72rem;color:var(--text-muted);margin-top:2px;" id="home-cycle-info">Manage semesters, exam periods, and grading windows.</div>
                        </div>
                        <div style="display:flex;gap:6px;">
                            <button class="btn" style="background:var(--accent);color:#2C2416;font-size:.72rem;font-weight:700;padding:6px 14px;border:none;border-radius:6px;cursor:pointer;" onclick="openCycleCreateModal()">➕ New Cycle</button>
                            <button class="btn" style="background:var(--base-dk);color:var(--text-mid);font-size:.72rem;font-weight:600;padding:6px 14px;border:1px solid var(--border);border-radius:6px;cursor:pointer;" id="btn-toggle-cycles" onclick="toggleCycleList()">📋 View All</button>
                        </div>
                    </div>
                    <div id="home-cycle-display" style="margin-top:10px;"></div>
                    <div id="home-cycle-list" style="display:none;margin-top:10px;"></div>
                </div>
            </div>

            <h2 style="font-size:.7rem;font-weight:700;color:#8C7B6B;text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px;font-family:'Source Sans 3',sans-serif">— Select Department —</h2>
            <div id="home-dept-cards" style="display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-top:8px;">
                ${activeDepts.map(d => `
                    <div class="dept-card" onclick="navigateTo('department', '${d.code}')" style="cursor:pointer;border:1.5px solid var(--border-strong);border-radius:10px;padding:16px 12px;background:#fff;text-align:center;transition:all .15s;box-shadow:0 1px 3px rgba(0,0,0,.06);overflow:hidden;" onmouseover="this.style.boxShadow='0 4px 12px rgba(123,28,28,.12)';this.style.borderColor='var(--primary)'" onmouseout="this.style.boxShadow='0 1px 3px rgba(0,0,0,.06)';this.style.borderColor='var(--border-strong)'">
                        <div style="font-size:2rem;margin-bottom:6px;">${getDeptIcon(d.code)}</div>
                        <div style="font-size:11px;font-weight:700;color:var(--primary);letter-spacing:.05em;text-transform:uppercase;">${d.code}</div>
                        <div style="font-size:11px;color:#5C4F3D;margin:4px 0 6px;line-height:1.3;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;" title="${d.name}">${d.name}</div>
                        <div style="font-size:11px;color:#8C7B6B;">👥 ${d.students} students</div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    // Render active cycle info
    renderCycleDisplay();
}

// Helper to check if running in a local-only backend environment
function isBackendAvailable() {
    const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
    const isGitHub = window.location.hostname.includes('github.io');
    return isLocal && !isGitHub;
}
function getDeptIcon(code) {
    const icons = {
        'CSE': '💻',
        'ECE': '📡',
        'EEE': '⚡',
        'MCE': '⚙️',
        'CVE': '🏗️',
        'ATE': '🚗',
        'IMT': '🖥️',
        'CDS': '📊' // Changed 'DSC' to 'CDS' to match the data
    };
    return icons[code] || '🏢';
}

function switchRole(role) {
    const badge = document.getElementById('home-role-badge');
    const desc = document.getElementById('home-role-desc');
    const btnData = document.getElementById('btn-data-mgmt');

    if (role === 'faculty') {
        badge.innerText = 'FACULTY';
        badge.style.background = '#C9A84C';
        badge.style.color = '#2C2416';
        desc.innerText = 'Navigate: Department → Faculty → Batch → Course → (Teams · Schedule · Grade)';
        btnData.style.display = 'none';
    } else if (role === 'hod') {
        badge.innerText = 'HOD';
        badge.style.background = 'var(--bg-main)';
        badge.style.color = 'var(--primary)';
        desc.innerText = 'Departmental oversight, performance metrics, and faculty coordination.';
        btnData.style.display = 'none';
    } else if (role === 'principal') {
        badge.innerText = 'PRINCIPAL';
        badge.style.background = 'var(--primary)';
        badge.style.color = '#fff';
        desc.innerText = 'Institutional dashboard, global session monitoring, and data management.';
        btnData.style.display = 'inline-flex';
    }
    showToast(`Switched to ${role.toUpperCase()} view`, 'success');
}

function renderStepWizard(activeStep) {
    const steps = [
        { id: 'teams', label: 'Teams', num: 1 },
        { id: 'sessions', label: 'Schedule', num: 2 },
        { id: 'assessments', label: 'Assessments', num: 3 },
        { id: 'grading', label: 'Grading', num: 4 },
        { id: 'reveal', label: 'Final Reveal', num: 5 }
    ];

    return `
        <div class="wiz-bar">
            ${steps.map(s => {
        let cls = 'wiz-step';
        if (s.num === activeStep) cls += ' wiz-active';
        if (s.num < activeStep) cls += ' wiz-done';

        const attr = (s.num < activeStep || s.num === activeStep)
            ? `onclick="navigateTo('${s.id}')"`
            : '';

        return `<div class="${cls}" ${attr}><span class="wiz-num">${s.num}</span>${s.label}</div>`;
    }).join('')}
        </div>
    `;
}

function renderDepartmentGrid() {
    const activeDepts = window.currentActiveDepts || [];
    const container = document.getElementById('dept-grid-container');
    const grid = document.getElementById('dept-grid');
    if (!container || !grid) return;

    container.style.display = 'block';
    grid.innerHTML = '';

    const colors = ['blue', 'green', 'purple', 'orange', 'cyan', 'blue', 'green', 'purple'];

    // Render department cards
    activeDepts.forEach((dept, i) => {
        const color = colors[i % colors.length];
        const card = document.createElement('div');
        card.className = 'dept-card';
        card.style.animationDelay = `${i * 0.06}s`;
        card.onclick = () => navigateTo('department', dept.code);
        card.innerHTML = `
            <div class="dept-card-accent-left" style="background: var(--primary)"></div>
            <div class="dept-card-main">
                <div class="dept-card-body">
                    <div class="dept-card-icon" style="background: var(--primary-dk)">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
                            <polyline points="9 22 9 12 15 12 15 22"/>
                        </svg>
                    </div>
                    <div class="dept-card-info">
                        <div class="dept-card-name">${dept.name}</div>
                        <div class="dept-card-code">${dept.code} · ${dept.batches} batch${dept.batches > 1 ? 'es' : ''}</div>
                    </div>
                </div>
                <div class="dept-card-footer">
                    <div class="dept-card-stat-pills">
                        <span class="dept-pill dept-pill-total">${dept.students} Students</span>
                        <span class="dept-pill dept-pill-male">♂ ${dept.males}</span>
                        <span class="dept-pill dept-pill-female">♀ ${dept.females}</span>
                    </div>
                    <svg class="dept-card-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="9 18 15 12 9 6"/>
                    </svg>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });

    // Scroll down to show it
    window.scrollBy({ top: 400, behavior: 'smooth' });
}

// ===== Level 2: Department → Batch Cards =====
function renderDepartment(container) {
    const deptCode = navState.dept;
    const deptName = getDeptName(deptCode);

    // Find batches that have this department with students
    const batchesWithDept = [];
    let totalStudents = 0, totalMales = 0, totalFemales = 0;

    appData.batches.forEach(b => {
        const deptInfo = b.departments.find(d => d.code === deptCode);
        if (deptInfo && deptInfo.totalStudents > 0) {
            batchesWithDept.push({ year: b.year, ...deptInfo });
            totalStudents += deptInfo.totalStudents;
            totalMales += deptInfo.males;
            totalFemales += deptInfo.females;
        }
    });

    const colors = ['blue', 'green', 'purple', 'orange', 'cyan'];

    container.innerHTML = `
            <div class="page-header">
            <h2 class="page-title">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
                    <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
                ${deptName}
            </h2>
            <p class="page-subtitle">${deptCode} · ${totalStudents} students across ${batchesWithDept.length} batch${batchesWithDept.length > 1 ? 'es' : ''}</p>
        </div>

        <div class="stats-grid">
            <div class="stat-card stat-blue">
                <div class="stat-info">
                    <span class="stat-label">Total Students</span>
                    <span class="stat-value">${totalStudents}</span>
                    <span class="stat-detail">M: ${totalMales} | F: ${totalFemales}</span>
                </div>
                <div class="stat-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
                        <circle cx="9" cy="7" r="4"/>
                    </svg>
                </div>
            </div>
            <div class="stat-card stat-green">
                <div class="stat-info">
                    <span class="stat-label">Batches</span>
                    <span class="stat-value">${batchesWithDept.length}</span>
                    <span class="stat-detail">${batchesWithDept.map(b => b.year).join(', ')}</span>
                </div>
                <div class="stat-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="3" y="4" width="18" height="18" rx="2"/>
                        <line x1="16" y1="2" x2="16" y2="6"/>
                        <line x1="8" y1="2" x2="8" y2="6"/>
                        <line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                </div>
            </div>
        </div>

        <h3 class="section-title">Select a Batch</h3>
        <div class="batch-grid" id="batch-grid"></div>
        `;

    const grid = document.getElementById('batch-grid');
    batchesWithDept.forEach((batch, i) => {
        const color = colors[i % colors.length];
        const info = getBatchAcademicInfo(batch.year);
        const card = document.createElement('div');
        card.className = 'dept-card';
        card.style.animationDelay = `${i * 0.06}s`;
        card.onclick = () => navigateTo('batch', deptCode, batch.year);
        card.innerHTML = `
            <div class="dept-card-accent-left" style="background: var(--gradient-${color})"></div>
                <div class="dept-card-main">
                    <div class="dept-card-body">
                        <div class="dept-card-icon" style="background: var(--gradient-${color})">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <rect x="3" y="4" width="18" height="18" rx="2" />
                                <line x1="16" y1="2" x2="16" y2="6" />
                                <line x1="8" y1="2" x2="8" y2="6" />
                                <line x1="3" y1="10" x2="21" y2="10" />
                            </svg>
                        </div>
                        <div class="dept-card-info">
                            <div class="dept-card-name">${batch.year} Batch — ${info.yearSuffix} Year</div>
                            <div class="dept-card-code">Joined ${info.joiningYear} · Passing ${info.passingYear} · Sem ${info.semester}</div>
                        </div>
                    </div>
                    <div class="dept-card-footer">
                        <div class="dept-card-stat-pills">
                            <span class="dept-pill dept-pill-total">${batch.totalStudents} Students</span>
                            <span class="dept-pill dept-pill-male">♂ ${batch.males}</span>
                            <span class="dept-pill dept-pill-female">♀ ${batch.females}</span>
                            <span class="dept-pill" style="background:rgba(234,88,12,0.08);color:#ea580c">Sem ${info.semester}</span>
                        </div>
                        <svg class="dept-card-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="9 18 15 12 9 6" />
                        </svg>
                    </div>
                </div>
        `;
        grid.appendChild(card);
    });
}

// ===== Level 3: Batch → Student List + Team Generation =====
function renderBatch(container) {
    const deptCode = navState.dept;
    const batchYear = navState.batch;
    const batchData = appData.batches.find(b => b.year === batchYear);
    if (!batchData) return;

    const students = batchData.students.filter(s => s.department === deptCode);
    const males = students.filter(s => s.gender === 'M').length;
    const females = students.filter(s => s.gender === 'F').length;
    const batchInfo = getBatchAcademicInfo(batchYear);

    const adminActions = `
        <div class="admin-actions" style="border-top: 3px solid var(--primary); background: #fdfaf7;">
            <div style="display:flex; justify-content:space-between; align-items:center;">
                <div>
                    <h3 class="section-title" style="margin-bottom:4px; color:var(--primary);">🛠️ Team & Session Management</h3>
                    <p style="font-size:0.75rem; color:#8C7B6B;">Map students to teams, schedule sessions, and generate assignments.</p>
                </div>
                <button class="btn btn-primary" style="width:auto; padding:12px 24px; background:var(--primary);" 
                    onclick="if(!navState.teams) { generateAndShowTeams('${deptCode}',${batchYear}, 4, 'random'); } else { navigateTo('teams'); }">
                    Enter Management Flow &rarr;
                </button>
            </div>
        </div>
    `;

    container.innerHTML = `
            <div class="page-header">
            <h2 class="page-title">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 00-3-3.87"/>
                    <path d="M16 3.13a4 4 0 010 7.75"/>
                </svg>
                ${getDeptShortName(deptCode)} — ${batchYear} Batch (${batchInfo.yearSuffix} Year)
            </h2>
            <p class="page-subtitle">${students.length} students · ${deptCode} · Joined ${batchInfo.joiningYear} · Passing ${batchInfo.passingYear} · Semester ${batchInfo.semester}</p>
        </div>

            <div class="stats-grid">
                <div class="stat-card stat-blue">
                    <div class="stat-info">
                        <span class="stat-label">Students</span>
                        <span class="stat-value">${students.length}</span>
                        <span class="stat-detail">${deptCode} · ${batchYear}</span>
                    </div>
                    <div class="stat-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                            <circle cx="9" cy="7" r="4" />
                        </svg>
                    </div>
                </div>
                <div class="stat-card stat-green">
                    <div class="stat-info">
                        <span class="stat-label">Male</span>
                        <span class="stat-value">${males}</span>
                        <span class="stat-detail">${Math.round(males / students.length * 100)}%</span>
                    </div>
                    <div class="stat-icon">♂</div>
                </div>
                <div class="stat-card stat-purple">
                    <div class="stat-info">
                        <span class="stat-label">Female</span>
                        <span class="stat-value">${females}</span>
                        <span class="stat-detail">${Math.round(females / students.length * 100)}%</span>
                    </div>
                    <div class="stat-icon">♀</div>
                </div>
                <div class="stat-card stat-orange">
                    <div class="stat-info">
                        <span class="stat-label">Current Semester</span>
                        <span class="stat-value">Sem ${batchInfo.semester}</span>
                        <span class="stat-detail">${batchInfo.yearSuffix} Year · ${batchInfo.joiningYear}–${batchInfo.passingYear}</span>
                    </div>
                    <div class="stat-icon">📚</div>
                </div>
            </div>

        ${adminActions}

        <h3 class="section-title">Student Roster</h3>

        <div class="filter-bar">
            <div class="filter-group search-group">
                <label for="search-input">Search</label>
                <input type="text" id="search-input" class="filter-input" placeholder="Search by name or ID..." oninput="filterStudentTable()">
            </div>
            <div class="filter-group">
                <label for="gender-filter">Gender</label>
                <select id="gender-filter" class="filter-select" onchange="filterStudentTable()">
                    <option value="all">All</option>
                    <option value="M">Male</option>
                    <option value="F">Female</option>
                </select>
            </div>
            <div class="filter-stats">
                <span class="badge badge-blue" id="filter-count">${students.length} students</span>
            </div>
        </div>

        <div class="table-container">
            <table class="data-table" id="student-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Student ID</th>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody id="student-tbody"></tbody>
            </table>
        </div>
        `;

    renderStudentRows(students);
}

function renderStudentRows(students) {
    const tbody = document.getElementById('student-tbody');
    tbody.innerHTML = students.map((s, i) => `
            <tr>
            <td>${i + 1}</td>
            <td><strong>${s.id}</strong></td>
            <td>${s.name}</td>
            <td><span class="gender-badge gender-${s.gender.toLowerCase()}">${s.gender === 'M' ? '♂ Male' : '♀ Female'}</span></td>
            <td>${s.email || '—'}</td>
        </tr>
            `).join('');
}

function filterStudentTable() {
    const search = (document.getElementById('search-input')?.value || '').toLowerCase();
    const gender = document.getElementById('gender-filter')?.value || 'all';
    const batchData = appData.batches.find(b => b.year === navState.batch);
    if (!batchData) return;

    let students = batchData.students.filter(s => s.department === navState.dept);
    if (gender !== 'all') students = students.filter(s => s.gender === gender);
    if (search) students = students.filter(s => s.name.toLowerCase().includes(search) || s.id.toLowerCase().includes(search));

    renderStudentRows(students);
    const countEl = document.getElementById('filter-count');
    if (countEl) countEl.textContent = `${students.length} students`;
}

// ===== Level 4: Teams View (Rosters only) =====
function renderTeams(container) {
    const teams = navState.teams;
    if (!teams || teams.length === 0) return;

    const deptCode = navState.dept;
    const batchYear = navState.batch;
    const totalStudents = teams.reduce((s, t) => s + t.members.length, 0);
    const colors = ['blue', 'green', 'purple', 'orange', 'cyan'];
    const numSessions = teams.length;
    const perRoundMin = 30;
    const totalMin = numSessions * perRoundMin;
    const hrs = Math.floor(totalMin / 60);
    const remMin = totalMin % 60;

    const editBtnLabel = navState.editMode ? '✅ Done Editing' : '✏️ Edit Teams';
    const editBtnStyle = navState.editMode
        ? 'background:var(--gradient-green);width:auto;padding:10px 20px'
        : 'background:var(--gradient-orange);width:auto;padding:10px 20px';

    const batchData = appData.batches.find(b => b.year === batchYear);
    const isLocked = batchData ? batchData.isLocked : false;

    let adminBtns = '';

    if (currentUser) {
        if (currentUser.canLock) {
            adminBtns += `
                <button class="btn-primary" style="width:auto;padding:10px 20px;background:var(--card-bg);border:1px solid #d97706;color:#d97706;" onclick="toggleLockTeams('${deptCode}', ${batchYear})">
                    ${isLocked ? '🔓 Unlock Teams' : '🔒 Lock Teams'}
                </button>
            `;
        }

        if (currentUser.canGenerate && !isLocked) {
            adminBtns += `
                <button class="btn-primary" style="${editBtnStyle}" onclick="toggleEditMode()">
                    ${editBtnLabel}
                </button>
            `;
        }
    }

    adminBtns += `
        <button class="btn-secondary" style="width:auto;padding:10px 20px;display:flex;align-items:center;gap:6px;" onclick="exportCSV()">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Export CSV
        </button>
    `;

    container.innerHTML = `
        ${renderStepWizard(1)}
        <div class="page-header">
            <h2 class="page-title">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 00-3-3.87"/>
                    <path d="M16 3.13a4 4 0 010 7.75"/>
                </svg>
                Team Rosters — ${getDeptShortName(deptCode)} · ${batchYear}
            </h2>
            <p class="page-subtitle">${teams.length} teams · ${totalStudents} students · ${numSessions} sessions</p>
        </div>

        <div class="stats-grid">
            <div class="stat-card stat-purple">
                <div class="stat-info">
                    <span class="stat-label">Teams</span>
                    <span class="stat-value">${teams.length}</span>
                    <span class="stat-detail">${teams[0]?.members.length || 0} members/team</span>
                </div>
                <div class="stat-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                        <path d="M2 17l10 5 10-5"/>
                    </svg>
                </div>
            </div>
            <div class="stat-card stat-blue">
                <div class="stat-info">
                    <span class="stat-label">Students</span>
                    <span class="stat-value">${totalStudents}</span>
                    <span class="stat-detail">${deptCode} · ${batchYear}</span>
                </div>
                <div class="stat-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
                        <circle cx="9" cy="7" r="4"/>
                    </svg>
                </div>
            </div>
            <div class="stat-card stat-green">
                <div class="stat-info">
                    <span class="stat-label">Sessions</span>
                    <span class="stat-value">${numSessions}</span>
                    <span class="stat-detail">Each team presents once</span>
                </div>
                <div class="stat-icon">🔄</div>
            </div>
            <div class="stat-card stat-orange">
                <div class="stat-info">
                    <span class="stat-label">Total Duration</span>
                    <span class="stat-value">${hrs > 0 ? hrs + 'h ' : ''}${remMin}m</span>
                    <span class="stat-detail">${perRoundMin} min per session</span>
                </div>
                <div class="stat-icon">⏱️</div>
            </div>
        </div>

        <!-- Team Rosters -->
        <div class="rt-section">
            <div class="rt-section-header">
                <div class="rt-section-title">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
                        <circle cx="9" cy="7" r="4"/>
                        <path d="M23 21v-2a4 4 0 00-3-3.87"/>
                        <path d="M16 3.13a4 4 0 010 7.75"/>
                    </svg>
                    Team Rosters
                </div>
                <div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;">
                    ${adminBtns}
                    <button class="btn-primary" style="background:var(--gradient-purple);width:auto;padding:10px 20px;" onclick="navigateToAssessments()">
                        📋 View Assignment Generation
                    </button>
                </div>
            </div>
            <div class="teams-container" id="teams-container"></div>
        </div>
    `;

    // Build a map: teamIndex -> presenter session number (1-indexed)
    const presenterSession = {};
    for (let s = 0; s < teams.length; s++) {
        presenterSession[s] = s + 1; // team s is presenter in session s+1
    }

    const tc = document.getElementById('teams-container');
    teams.forEach((team, i) => {
        const color = colors[i % colors.length];
        const maleCount = team.members.filter(m => m.gender === 'M').length;
        const femaleCount = team.members.filter(m => m.gender === 'F').length;
        const sessNum = String(presenterSession[i]).padStart(2, '0');
        const card = document.createElement('div');
        card.className = 'team-card';
        card.innerHTML = `
        <div class="team-card-top-accent" style="background: var(--primary)"></div>
        <div class="team-card-header">
            <span class="team-card-title">${getTeamName(deptCode, i)}</span>
            <span class="team-sess-id" style="color:var(--primary); background:var(--base-dk);">Session ${sessNum}</span>
        </div>
        <div class="team-card-role-row">
            <span class="team-member-count">${team.members.length} Members</span>
            <div class="team-gender-ratio">
                <span class="male">♂ ${maleCount}</span>
                <span class="female">♀ ${femaleCount}</span>
            </div>
        </div>
            ${team.members.map(m => {
            const moveDropdown = navState.editMode ? `
                    <select class="move-select" onchange="moveStudent('${m.id}', ${i}, parseInt(this.value))">
                        <option value="${i}">${getTeamName(deptCode, i)}</option>
                        ${teams.map((_, ti) => ti !== i ? `<option value="${ti}">→ ${getTeamName(deptCode, ti)}</option>` : '').join('')}
                    </select>
                ` : '';
            return `
                    <div class="team-member ${navState.editMode ? 'edit-mode' : ''}">
                        <div class="member-avatar avatar-${m.gender.toLowerCase()}">
                            ${m.gender === 'M' ? '♂' : '♀'}
                        </div>
                        <div class="member-info">
                            <div class="member-name">${m.name}</div>
                            <div class="member-id">${m.id}</div>
                        </div>
                        ${moveDropdown}
                    </div>
                `;
        }).join('')}
    `;
        tc.appendChild(card);
    });
}

// ===== Level 5: Session Schedule =====

// Period time slots — each option = 3 sessions in that slot
const PERIOD_TYPES = {
    morning1: { label: 'Morning (Periods 1-2)', shortLabel: 'P1-2', startH: 9, startM: 0, durMins: 100, color: '#2563eb' },
    morning2: { label: 'Morning (Periods 3-4)', shortLabel: 'P3-4', startH: 11, startM: 0, durMins: 90, color: '#0891b2' },
    afternoon1: { label: 'Afternoon (Periods 5-6)', shortLabel: 'P5-6', startH: 13, startM: 45, durMins: 90, color: '#7c3aed' },
    afternoon2: { label: 'Afternoon (Periods 7-8)', shortLabel: 'P7-8', startH: 15, startM: 30, durMins: 90, color: '#d97706' },
};
const SESSIONS_PER_SLOT = 3;
const DAY_NAMES_SHORT = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const DAY_NAMES_FULL = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];

function addMins(h, m, mins) {
    const t = h * 60 + m + mins;
    return String(Math.floor(t / 60)).padStart(2, '0') + ':' + String(t % 60).padStart(2, '0');
}

/* Fisher-Yates shuffle to randomize presenter order */
function shuffleArray(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function generateSessionCalendar(teams, config) {
    const { startDate, endDate, periodSlot, presenterOrder, reviewerMap } = config;
    const N = teams.length;
    const order = presenterOrder || shuffleArray(Array.from({ length: N }, (_, i) => i));
    const reviewers = reviewerMap ? reviewerMap.reviewers : {};
    const feedbacks = reviewerMap ? reviewerMap.feedbacks : {};
    const pt = PERIOD_TYPES[periodSlot] || PERIOD_TYPES.morning1;
    const todayStr = new Date().toISOString().slice(0, 10);
    const sessions = [];
    let idx = 0;
    const cur = new Date(startDate + 'T00:00:00'), endD = new Date(endDate + 'T00:00:00');
    let dayCount = 0;

    while (cur <= endD && idx < N) {
        const dow = cur.getDay();
        if (dow >= 1 && dow <= 5) { // Mon-Fri only
            const dateStr = cur.toISOString().slice(0, 10);
            const isPast = dateStr < todayStr, isToday = dateStr === todayStr;
            // Each day gets SESSIONS_PER_SLOT sessions in the chosen period
            for (let s = 0; s < SESSIONS_PER_SLOT && idx < N; s++) {
                const presIdx = order[idx];
                // Random reviewer and feedback for this session (different from presenter and each other)
                let revIdx, fbIdx;
                if (reviewers[idx] !== undefined) {
                    revIdx = reviewers[idx];
                    fbIdx = feedbacks[idx];
                } else {
                    // Generate random reviewer (not presenter)
                    do { revIdx = Math.floor(Math.random() * N); } while (revIdx === presIdx);
                    // Generate random feedback (not presenter, not reviewer)
                    do { fbIdx = Math.floor(Math.random() * N); } while (fbIdx === presIdx || fbIdx === revIdx);
                    reviewers[idx] = revIdx;
                    feedbacks[idx] = fbIdx;
                }

                sessions.push({
                    sessNum: idx + 1, date: new Date(cur), dateStr,
                    dayName: DAY_NAMES_SHORT[dow], dayFull: DAY_NAMES_FULL[dow],
                    periodKey: periodSlot,
                    startTime: String(pt.startH).padStart(2, '0') + ':' + String(pt.startM).padStart(2, '0'),
                    endTime: addMins(pt.startH, pt.startM, pt.durMins),
                    presenterIdx: presIdx, reviewerIdx: revIdx, feedbackIdx: fbIdx,
                    revealed: isPast || isToday,
                    slotIndex: s,
                });
                idx++;
            }
            dayCount++;
        }
        cur.setDate(cur.getDate() + 1);
    }
    // Store the maps back
    config.reviewerMap = { reviewers, feedbacks };
    config.presenterOrder = order;
    return sessions;
}

function renderSessions(container) {
    const teams = navState.teams;
    if (!teams || teams.length === 0) { navigateBackToTeams(); return; }
    const deptCode = navState.dept, batchYear = navState.batch, N = teams.length;

    // Header & Wizard
    let headerHTML = `
        ${renderStepWizard(2)}
        <div class="page-header">
            <h2 class="page-title">
                📅 Session Schedule & Logic — ${getDeptShortName(deptCode)} · ${batchYear}
            </h2>
            <p class="page-subtitle">Configure dates, reshuffle teams, and manage presentation rounds.</p>
        </div>
    `;

    const cal = navState.calendarConfig || null;
    const todayStr = new Date().toISOString().slice(0, 10);
    const hasBlocks = cal && cal.blocks && cal.blocks.length > 0;
    const genAssign = navState.assignConfig || null;

    /* ===== Config Panel ===== */
    let configPanel = '';
    if (!cal || !cal.isLocked) {
        const defEnd = new Date(); defEnd.setMonth(defEnd.getMonth() + 3);
        const defEndStr = defEnd.toISOString().slice(0, 10);
        const savedSlot = cal ? (cal.periodSlot || 'morning1') : 'morning1';

        configPanel = `<div class="cal-config-panel">
            <div class="cal-config-title">⚙️ Quick Auto-Schedule (Standard)</div>
            <div class="cal-config-grid">
                <div class="cal-field"><label>Start Date</label>
                    <input type="date" id="calStartDate" value="${cal ? cal.startDate : todayStr}"></div>
                <div class="cal-field"><label>End Date</label>
                    <input type="date" id="calEndDate" value="${cal ? cal.endDate : defEndStr}"></div>
                <div class="cal-field"><label>Period Slot</label>
                    <select id="calPeriodSlot">
                        <option value="morning1">Morning P1-2</option>
                        <option value="morning2">Morning P3-4</option>
                        <option value="afternoon1">Afternoon P5-6</option>
                        <option value="afternoon2">Afternoon P7-8</option>
                    </select></div>
            </div>
            <div class="cal-actions">
                <button class="btn btn-primary" style="width:auto;padding:10px 28px;" onclick="applyCalendarConfig()">📅 Generate Schedule</button>
                <span class="text-xs text-dim">Or use the <em>Assignment Wizard</em> for full Phase 3 control.</span>
            </div>
        </div>`;
    } else {
        configPanel = `
        <div class="card p-4 mb-6" style="border-left:4px solid var(--success); background:rgba(16,185,129,0.05);">
            <div class="flex justify-between items-center">
                <div>
                    <div class="font-bold text-main">🔒 Academic Schedule Locked</div>
                    <div class="text-xs text-dim">Finalized on ${new Date(cal.finalizedAt).toLocaleDateString()} via Assessment Wizard.</div>
                </div>
                <button class="btn btn-sm btn-ghost" onclick="navState.calendarConfig.isLocked = false; render()">🔓 Unlock & Edit</button>
            </div>
        </div>`;
    }

    /* ===== Schedule Table & Day Cards ===== */
    let scheduleHTML = '', dayCardsHTML = '';

    if (hasBlocks) {
        // Render block-based schedule
        const dayCards = cal.blocks.map((b, bi) => {
            const isToday = b.date === todayStr, isPast = b.date < todayStr;
            const dl = new Date(b.date).toLocaleDateString('en-IN', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' });

            const sItems = b.sessions.map((s, si) => {
                const cycleNum = s.sid <= 15 ? 1 : 2;
                const cad = (genAssign?.cycleData || {})[cycleNum];
                const asgn = cad?.assignments?.find(a => a.teamId === s.P.id) || null;
                const bloom = asgn ? BLOOM_LEVELS[asgn.bloomLevel] : null;
                const isRevealed = s.revealed || isPast || isToday;

                return `
                <div class="sched-sess-item" style="border-left:3px solid ${isPast ? 'var(--border)' : (bloom ? (bloom.icon === '🔵' ? '#3B82F6' : '#10B981') : 'var(--primary)')};">
                    <div class="flex justify-between items-center mb-2">
                        <div class="text-[10px] font-bold text-dim uppercase tracking-tighter">Session S${s.sid} · P${b.period} · ${s.sessNumInBlock || (si + 1)}/3</div>
                        <div class="flex gap-1 items-center">
                            ${bloom ? `<span class="text-[9px] font-bold px-1.5 py-0.5 rounded bg-surface border border-border">${bloom.icon} ${bloom.label}</span>` : ''}
                            ${!isRevealed ? `<button class="btn btn-xs btn-ghost text-[9px] p-0 px-1" onclick="toggleSessionReveal(${bi}, ${si})">🔒 Reveal</button>` : '<span class="text-[9px] opacity-40">🔓</span>'}
                        </div>
                    </div>
                    <div class="flex flex-col gap-2">
                        <div class="flex items-center gap-2">
                            <span class="chip chip-xs bg-blue-100 text-blue-700 font-bold">P</span>
                            <span class="text-xs font-bold text-main">${s.P.name || s.P.id}</span>
                        </div>
                        ${asgn ? `<div class="text-[10px] font-semibold text-primary ml-7">📝 Title: ${asgn.topic}</div>` : ''}
                        
                        <div class="flex gap-4 ml-7">
                            <div class="flex items-center gap-1.5 ${!isRevealed ? 'blur-[3px] pointer-events-none' : ''}">
                                <span class="chip chip-xs bg-green-100 text-green-700">TR</span>
                                <span class="text-[10px] text-dim">${s.TR.name || s.TR.id}</span>
                            </div>
                            <div class="flex items-center gap-1.5 ${!isRevealed ? 'blur-[3px] pointer-events-none' : ''}">
                                <span class="chip chip-xs bg-yellow-100 text-yellow-700">FP</span>
                                <span class="text-[10px] text-dim">${s.FP.name || s.FP.id}</span>
                            </div>
                        </div>
                        ${!isRevealed ? `<div class="text-[9px] text-dim italic ml-7 mt-1">Reviewer details hidden until session day.</div>` : ''}
                    </div>
                </div>`;
            }).join('');

            return `
            <div class="sched-day-card ${isToday ? 'sched-day-today' : ''}" style="animation-delay:${bi * 0.05}s">
                <div class="sched-day-header">
                    <div>
                        <div class="sched-day-name">${dl}</div>
                        <div class="sched-day-meta">Block #${b.blockIdx} — Period ${b.period} — 3 Sessions</div>
                    </div>
                    ${isToday ? '<span class="sched-day-badge sched-badge-today">TODAY</span>' : ''}
                    ${isPast ? '<span class="sched-day-badge sched-badge-done">COMPLETED</span>' : ''}
                </div>
                <div class="sched-sess-list">${sItems}</div>
            </div>`;
        }).join('');

        dayCardsHTML = `
        <div class="rt-section">
            <div class="rt-section-header">
                <div class="rt-section-title">🗓️ Finalized Session Blocks</div>
                <div class="flex gap-2">
                    <button class="btn btn-sm btn-ghost" onclick="exportFullScheduleCSV()">📊 Report</button>
                    ${genAssign ? `<button class="btn btn-sm btn-secondary" onclick="moveAssignStep(4)">📝 View Cycle Details</button>` : ''}
                </div>
            </div>
            <div class="sched-day-cards">${dayCards}</div>
        </div>`;

    } else if (cal && cal.sessions && cal.sessions.length > 0) {
        const sessions = cal.sessions;
        const pt = PERIOD_TYPES[cal.periodSlot || 'morning1'];
        const byDay = {};
        sessions.forEach(s => { if (!byDay[s.dateStr]) byDay[s.dateStr] = []; byDay[s.dateStr].push(s); });
        const dayKeys = Object.keys(byDay).sort();
        const genAssignFlat = genAssign?.generatedAssignments || null;

        const dCards = dayKeys.map((dateStr, di) => {
            const daySess = byDay[dateStr];
            const first = daySess[0];
            const isToday = dateStr === todayStr, isPast = dateStr < todayStr;
            const dl2 = first.date.toLocaleDateString('en-IN', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' });

            const sItems = daySess.map(s => {
                const dayTopicObj = genAssignFlat && genAssignFlat[s.presenterIdx] ? genAssignFlat[s.presenterIdx] : null;
                const dayTopicHTML = dayTopicObj ? `<div style="margin-top:4px;font-size:.78rem;color:var(--accent-blue);font-weight:600;padding-left:4px;">📝 Topic: ${dayTopicObj.title}</div>` : '';
                return `<div class="sched-sess-item">
                    <div class="sched-sess-item-header" style="border-left:3px solid ${pt.color};">
                        <div class="sched-sess-item-num" style="background:${pt.color}18;color:${pt.color};">#${String(s.sessNum).padStart(2, '0')}</div>
                        <div style="font-size:.82rem;font-weight:700;color:var(--text-primary);">${pt.label} &nbsp;·&nbsp; ${s.startTime} – ${s.endTime}</div>
                    </div>
                    <div class="sched-roles-inline">
                        <span class="sched-chip sched-presenter">🎤 ${getTeamName(navState.dept, s.presenterIdx)} — Presenter</span>
                        ${s.revealed
                        ? `<span class="sched-chip sched-reviewer">🔍 ${getTeamName(navState.dept, s.reviewerIdx)} — Reviewer</span><span class="sched-chip sched-feedback">💬 ${getTeamName(navState.dept, s.feedbackIdx)} — Feedback</span>`
                        : `<span class="sched-chip sched-locked">🔒 Reviewer &amp; Feedback revealed on ${dateStr}</span>`}
                    </div>
                    ${dayTopicHTML}
                </div>`;
            }).join('');
            return `<div class="sched-day-card ${isToday ? 'sched-day-today' : ''}" style="animation-delay:${di * .04}s">
                <div class="sched-day-header">
                    <div><div class="sched-day-name">${dl2}</div>
                        <div class="sched-day-meta">${daySess.length} session${daySess.length > 1 ? 's' : ''} scheduled</div></div>
                    ${isToday ? '<span class="sched-day-badge sched-badge-today">TODAY</span>' : ''}
                    ${isPast ? '<span class="sched-day-badge sched-badge-done">COMPLETED</span>' : ''}
                </div>
                <div class="sched-sess-list">${sItems}</div>
            </div>`;
        }).join('');
        dayCardsHTML = `<div class="rt-section"><div class="sched-day-cards">${dCards}</div></div>`;
    }

    /* ===== Presenter Order Reference ===== */
    const sessionColors = ['blue', 'green', 'purple', 'orange', 'cyan'];
    let orderRows = '';
    if (cal && cal.sessions && cal.sessions.length > 0) {
        cal.sessions.forEach((s, i) => {
            const c = sessionColors[i % sessionColors.length];
            const p = s.presenterIdx, r = s.reviewerIdx, fb = s.feedbackIdx;
            orderRows += `<tr class="rt-row">
                <td><span class="rt-sess-badge rt-badge-${c}">${String(s.sessNum).padStart(2, '0')}</span></td>
                <td>${s.dateStr} (${s.dayName})</td>
                <td><span class="rt-team-chip rt-presenter">🎤 ${getTeamName(deptCode, p)}</span></td>
                <td>${s.revealed ? `<span class="rt-team-chip rt-reviewer">🔍 ${getTeamName(deptCode, r)}</span>` : '<span class="rt-team-chip sched-locked">🔒</span>'}</td>
                <td>${s.revealed ? `<span class="rt-team-chip rt-feedback">💬 ${getTeamName(deptCode, fb)}</span>` : '<span class="rt-team-chip sched-locked">🔒</span>'}</td>
            </tr>`;
        });
    } else {
        for (let s = 0; s < N; s++) {
            const c = sessionColors[s % sessionColors.length];
            orderRows += `<tr class="rt-row">
                <td><span class="rt-sess-badge rt-badge-${c}">${String(s + 1).padStart(2, '0')}</span></td>
                <td>—</td>
                <td><span class="rt-team-chip rt-presenter">🎤 ${getTeamName(deptCode, s)}</span></td>
                <td><span class="rt-team-chip sched-locked">🔒</span></td>
                <td><span class="rt-team-chip sched-locked">🔒</span></td>
            </tr>`;
        }
    }

    // Navigation footer — appears when schedule is generated
    const navFooterHTML = (cal && cal.sessions && cal.sessions.length > 0) ? `
        <div class="step-nav-footer">
            <button class="btn-step-back" onclick="navigateTo('teams')">← Back to Teams</button>
            <span class="nav-info">${cal.sessions.length} sessions · ${Math.ceil(N / SESSIONS_PER_SLOT)} days</span>
            <div style="display:flex;gap:8px;">
                <button class="btn-step-next" onclick="navigateTo('assessments')" style="background:linear-gradient(135deg,var(--accent),#A88B2D);">📝 Assessments →</button>
                <button class="btn-step-next" onclick="navigateTo('grading')">✏️ Proceed to Grading →</button>
            </div>
        </div>` : '';

    container.innerHTML = `
    ${headerHTML}
    ${configPanel}
    ${scheduleHTML}
    ${dayCardsHTML}
    <div class="rt-section" style="margin-bottom:1.5rem;">
        <div class="rt-section-header">
            <div class="rt-section-title">🔄 Session Order Reference</div>
            <div class="rt-legend">
                <span class="rt-legend-chip rt-presenter">🎤 Presenter</span>
                <span class="rt-legend-chip rt-reviewer">🔍 Reviewer</span>
                <span class="rt-legend-chip rt-feedback">💬 Feedback</span>
            </div>
        </div>
        <div class="rt-table-wrap">
            <table class="rt-table">
                <thead><tr><th>Session</th><th>Date</th><th>🎤 Presenter</th><th>🔍 Reviewer</th><th>💬 Feedback</th></tr></thead>
                <tbody>${orderRows}</tbody>
            </table>
        </div>
    </div>
    ${navFooterHTML}
`;
}

// ── Session Control (New from Old App) ──────────────────────────────────────

function toggleSessionReveal(blockIdx, sessIdx) {
    const cal = navState.calendarConfig;
    if (!cal || !cal.blocks || !cal.blocks[blockIdx]) return;
    const s = cal.blocks[blockIdx].sessions[sessIdx];
    s.revealed = !s.revealed;
    saveData();
    render();
    showToast(`${s.revealed ? '🔓 Roles Revealed' : '🔒 Roles Hidden'} for Session S${s.sid}`, 'success');
}

function exportFullScheduleCSV() {
    const cal = navState.calendarConfig;
    if (!cal || (!cal.blocks && !cal.sessions)) { showToast('No schedule to export', 'error'); return; }

    let csv = "Session,Date,Period,Presenter,Reviewer,Feedback,Status\n";
    if (cal.blocks) {
        cal.blocks.forEach(b => {
            b.sessions.forEach(s => {
                csv += `S${s.sid},${b.date},P${b.period},"${s.P.name || s.P.id}","${s.TR.name || s.TR.id}","${s.FP.name || s.FP.id}",${s.revealed ? 'Revealed' : 'Locked'}\n`;
            });
        });
    } else {
        cal.sessions.forEach(s => {
            csv += `S${s.sessNum},${s.dateStr},P${s.periodKey},"${getTeamName(navState.dept, s.presenterIdx)}","${getTeamName(navState.dept, s.reviewerIdx)}","${getTeamName(navState.dept, s.feedbackIdx)}",${s.revealed ? 'Revealed' : 'Locked'}\n`;
        });
    }

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `schedule_${navState.dept}_${navState.batch}.csv`;
    a.click();
}

function applyCalendarConfig() {
    const startDate = document.getElementById('calStartDate')?.value;
    const endDate = document.getElementById('calEndDate')?.value;
    const periodSlot = document.getElementById('calPeriodSlot')?.value || 'morning1';
    if (!startDate || !endDate || endDate < startDate) {
        showToast('⚠️ Please set a valid start and end date.', 'error');
        return;
    }
    const teams = navState.teams;
    // Generate random presenter order
    const presenterOrder = shuffleArray(Array.from({ length: teams.length }, (_, i) => i));
    const config = { startDate, endDate, periodSlot, activeDays: [1, 2, 3, 4, 5], presenterOrder, reviewerMap: null };
    config.sessions = generateSessionCalendar(teams, config);
    navState.calendarConfig = config;
    render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function reshuffleSchedule() {
    if (!navState.calendarConfig) return;
    const cal = navState.calendarConfig;
    // New random order and new random reviewer/feedback
    cal.presenterOrder = shuffleArray(Array.from({ length: navState.teams.length }, (_, i) => i));
    cal.reviewerMap = null;
    cal.sessions = generateSessionCalendar(navState.teams, cal);
    render();
    showToast('🔀 Teams reshuffled with new random order!', 'success');
}

function buildTeams(students, teamSize, mode, deptCode, batchYear) {
    if (students.length === 0) return [];

    const allStudents = [...students];
    shuffle(allStudents);

    const males = allStudents.filter(s => s.gender === 'M');
    const females = allStudents.filter(s => s.gender === 'F');
    shuffle(males);
    shuffle(females);

    const n = allStudents.length;
    let numTeams;

    if ((deptCode === 'ATE' && batchYear === 2029) || (deptCode === 'CVE' && batchYear === 2027)) {
        numTeams = 12;
    } else if (deptCode === 'CSE' && (batchYear === 2027 || batchYear === 2028)) {
        numTeams = 15;
    } else {
        // Dynamic team generation for other departments
        // Rules: team sizes must be 4 or 5, teams divisible by 3, max 15 teams
        let validT = [];
        for (let t = 3; t <= 15; t += 3) {
            if (n >= 4 * t && n <= 5 * t) validT.push(t);
        }
        if (validT.length > 0) {
            numTeams = Math.max(...validT); // Maximize T → mostly size-4 teams
        } else if (n > 75) {
            numTeams = 15;
        } else if (n < 12) {
            numTeams = 3;
        } else {
            // Fallback: find best T that avoids size 3 teams
            let minPenalty = Infinity;
            numTeams = 3;
            for (let t = 3; t <= 15; t += 3) {
                let base = Math.floor(n / t);
                let ext = n % t;
                let p1 = (base < 4) ? (4 - base) * 1000 : ((base > 5) ? (base - 5) * 10 : 0);
                let p2 = (base + 1 < 4) ? (4 - base) * 1000 : ((base + 1 > 5) ? (base - 4) * 10 : 0);
                if (base <= 3) p1 += 50000;
                if (base + 1 <= 3) p2 += 50000;
                let penalty = (p1 * (t - ext)) + (p2 * ext) - t * 0.1;
                if (penalty < minPenalty) { minPenalty = penalty; numTeams = t; }
            }
        }
        if (numTeams === 0) numTeams = 3;
    }

    const baseSize = Math.floor(n / numTeams);
    const extra = n % numTeams;

    // We will have `extra` teams of size `baseSize + 1` and `numTeams - extra` teams of size `baseSize`
    const sizes = [
        ...Array(extra).fill(baseSize + 1),
        ...Array(numTeams - extra).fill(baseSize)
    ];

    let teams = Array.from({ length: numTeams }, (_, i) => ({ id: i + 1, members: [] }));

    // Prepare gender pairs
    const pairsM = [];
    const pairsF = [];
    while (males.length >= 2) pairsM.push([males.pop(), males.pop()]);
    while (females.length >= 2) pairsF.push([females.pop(), females.pop()]);

    const leftovers = [...males, ...females];

    for (let t = 0; t < numTeams; t++) {
        let neededPairs = Math.floor(sizes[t] / 2);
        let pairsAdded = 0;

        while (pairsAdded < neededPairs) {
            if (pairsM.length > 0 && pairsF.length > 0) {
                // Balance genders by alternating pairs
                if (pairsAdded % 2 === 0) teams[t].members.push(...pairsM.pop());
                else teams[t].members.push(...pairsF.pop());
            } else if (pairsM.length > 0) {
                teams[t].members.push(...pairsM.pop());
            } else if (pairsF.length > 0) {
                teams[t].members.push(...pairsF.pop());
            } else {
                break;
            }
            pairsAdded++;
        }
    }

    // Flatten remaining pairs back into leftovers
    while (pairsM.length > 0) leftovers.push(...pairsM.pop());
    while (pairsF.length > 0) leftovers.push(...pairsF.pop());

    // Fill the remaining spots up to sizes[t] for each team
    for (let t = 0; t < numTeams; t++) {
        let needed = sizes[t] - teams[t].members.length;
        while (needed > 0 && leftovers.length > 0) {
            teams[t].members.push(leftovers.pop());
            needed--;
        }
    }

    // Safety fallback for math boundary conditions
    let overflowIdx = 0;
    while (leftovers.length > 0) {
        teams[overflowIdx % numTeams].members.push(leftovers.pop());
        overflowIdx++;
    }

    // If a class is very small, sizes could be 1 or 2 (or even 0). We allow that to preserve the multiple-of-3 rule.
    return enforceMinSize(teams, 0, 6);
}

function enforceMinSize(teams, min, max) {
    // Remove empty teams. Teams with 1–2 members have their students redistributed.
    const ok = teams.filter(t => t.members.length >= min);
    const tooSmall = teams.filter(t => t.members.length < min);
    const orphans = [];
    tooSmall.forEach(t => orphans.push(...t.members));
    shuffle(orphans);
    orphans.forEach(s => {
        if (ok.length > 0) {
            // Add to the smallest existing team (up to max size)
            const smallest = ok.reduce((a, b) => a.members.length <= b.members.length ? a : b);
            smallest.members.push(s);
        }
    });
    ok.forEach((t, i) => t.id = i + 1);
    return ok;
}

function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

// ===== Manual Team Editing =====
function toggleEditMode() {
    navState.editMode = !navState.editMode;
    render();
}

function moveStudent(studentId, fromTeamIdx, toTeamIdx) {
    const teams = navState.teams;
    if (!teams || fromTeamIdx === toTeamIdx) return;
    const fromTeam = teams[fromTeamIdx];
    const toTeam = teams[toTeamIdx];
    const si = fromTeam.members.findIndex(m => m.id === studentId);
    if (si === -1) return;
    toTeam.members.push(fromTeam.members.splice(si, 1)[0]);
    render();
}

// ===== CSV Export =====
function exportCSV() {
    const teams = navState.teams;
    if (!teams) return;

    let csv = 'Team,Student ID,Name,Gender,Email\n';
    teams.forEach((team, i) => {
        team.members.forEach(m => {
            csv += `${getTeamName(navState.dept, i)},${m.id}, "${m.name}", ${m.gender},${m.email || ''} \n`;
        });
    });

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `teams_${navState.dept}_${navState.batch}.csv`;
    a.click();
    URL.revokeObjectURL(url);
}

// ===== Syllabus Data (Unit-wise assessment topics per dept + regulation) =====
const SYLLABUS_DATA = {
    R2021: {
        ATE: [
            { unit: 1, title: 'Engine Components & Working Principles', co: 'CO1', complexity: 'Medium' },
            { unit: 1, title: 'Fuel Systems and Carburetion', co: 'CO1', complexity: 'Medium' },
            { unit: 1, title: 'Air Intake and Exhaust Systems', co: 'CO1', complexity: 'Hard' },
            { unit: 2, title: 'Power Transmission Systems', co: 'CO2', complexity: 'Medium' },
            { unit: 2, title: 'Clutch and Gearbox Mechanisms', co: 'CO2', complexity: 'Hard' },
            { unit: 2, title: 'Differential and Drive Shaft', co: 'CO2', complexity: 'Medium' },
            { unit: 3, title: 'Steering Geometry and Alignment', co: 'CO3', complexity: 'Medium' },
            { unit: 3, title: 'Suspension System Types', co: 'CO3', complexity: 'Easy' },
            { unit: 3, title: 'Braking Systems and ABS', co: 'CO3', complexity: 'Hard' },
            { unit: 4, title: 'Vehicle Dynamics and Handling', co: 'CO4', complexity: 'Hard' },
            { unit: 4, title: 'Automotive Electrical Systems', co: 'CO4', complexity: 'Medium' },
            { unit: 5, title: 'EV Technologies and Hybrid Vehicles', co: 'CO5', complexity: 'Hard' }
        ],
        CSE: [
            { unit: 1, title: 'Operating System Concepts & Process Management', co: 'CO1', complexity: 'Medium' },
            { unit: 1, title: 'CPU Scheduling Algorithms', co: 'CO1', complexity: 'Hard' },
            { unit: 1, title: 'Deadlock Detection and Prevention', co: 'CO1', complexity: 'Hard' },
            { unit: 2, title: 'Memory Management and Paging', co: 'CO2', complexity: 'Medium' },
            { unit: 2, title: 'Virtual Memory and Thrashing', co: 'CO2', complexity: 'Hard' },
            { unit: 2, title: 'File System Organization', co: 'CO2', complexity: 'Medium' },
            { unit: 3, title: 'Computer Networks – OSI Model', co: 'CO3', complexity: 'Medium' },
            { unit: 3, title: 'TCP/IP Protocol Stack', co: 'CO3', complexity: 'Medium' },
            { unit: 3, title: 'Routing Protocols (RIP, OSPF, BGP)', co: 'CO3', complexity: 'Hard' },
            { unit: 4, title: 'Database Normalization and ER Diagrams', co: 'CO4', complexity: 'Medium' },
            { unit: 4, title: 'SQL Queries and Transactions', co: 'CO4', complexity: 'Easy' },
            { unit: 5, title: 'Cloud Computing and Virtualization', co: 'CO5', complexity: 'Hard' }
        ],
        CVE: [
            { unit: 1, title: 'Stress, Strain and Elasticity Concepts', co: 'CO1', complexity: 'Medium' },
            { unit: 1, title: 'Types of Beams and Loads', co: 'CO1', complexity: 'Easy' },
            { unit: 1, title: 'Shear Force and Bending Moment Diagrams', co: 'CO1', complexity: 'Hard' },
            { unit: 2, title: 'Torsion in Circular Shafts', co: 'CO2', complexity: 'Hard' },
            { unit: 2, title: 'Columns and Struts – Euler\'s Theory', co: 'CO2', complexity: 'Medium' },
            { unit: 2, title: 'Slope and Deflection in Beams', co: 'CO2', complexity: 'Hard' },
            { unit: 3, title: 'Soil Classification and Compaction', co: 'CO3', complexity: 'Medium' },
            { unit: 3, title: 'Seepage and Permeability', co: 'CO3', complexity: 'Medium' },
            { unit: 3, title: 'Bearing Capacity of Soil', co: 'CO3', complexity: 'Hard' },
            { unit: 4, title: 'Design of RCC Beams and Slabs', co: 'CO4', complexity: 'Hard' },
            { unit: 4, title: 'Design of Columns and Footings', co: 'CO4', complexity: 'Hard' },
            { unit: 5, title: 'Surveying Techniques and Instruments', co: 'CO5', complexity: 'Medium' }
        ],
        CDS: [
            { unit: 1, title: 'Python for Data Science – NumPy & Pandas', co: 'CO1', complexity: 'Medium' },
            { unit: 1, title: 'Data Wrangling and Preprocessing', co: 'CO1', complexity: 'Medium' },
            { unit: 1, title: 'Exploratory Data Analysis (EDA)', co: 'CO1', complexity: 'Medium' },
            { unit: 2, title: 'Supervised Learning – Regression Models', co: 'CO2', complexity: 'Medium' },
            { unit: 2, title: 'Classification Algorithms (KNN, SVM, Trees)', co: 'CO2', complexity: 'Hard' },
            { unit: 2, title: 'Model Evaluation Metrics and Cross-Validation', co: 'CO2', complexity: 'Hard' },
            { unit: 3, title: 'Unsupervised Learning – Clustering', co: 'CO3', complexity: 'Medium' },
            { unit: 3, title: 'Dimensionality Reduction (PCA, t-SNE)', co: 'CO3', complexity: 'Hard' },
            { unit: 3, title: 'Association Rule Mining', co: 'CO3', complexity: 'Medium' },
            { unit: 4, title: 'Deep Learning Fundamentals and CNNs', co: 'CO4', complexity: 'Hard' },
            { unit: 4, title: 'Natural Language Processing Basics', co: 'CO4', complexity: 'Hard' },
            { unit: 5, title: 'Big Data Technologies – Hadoop & Spark', co: 'CO5', complexity: 'Hard' }
        ],
        ECE: [
            { unit: 1, title: 'Semiconductor Devices – Diodes and BJT', co: 'CO1', complexity: 'Medium' },
            { unit: 1, title: 'FET and MOSFET Characteristics', co: 'CO1', complexity: 'Medium' },
            { unit: 1, title: 'Amplifier Circuit Analysis', co: 'CO1', complexity: 'Hard' },
            { unit: 2, title: 'Op-Amp Configurations and Applications', co: 'CO2', complexity: 'Medium' },
            { unit: 2, title: 'Oscillators and Signal Generators', co: 'CO2', complexity: 'Hard' },
            { unit: 2, title: 'Filters – Active and Passive', co: 'CO2', complexity: 'Hard' },
            { unit: 3, title: 'Analog Modulation Techniques (AM, FM)', co: 'CO3', complexity: 'Medium' },
            { unit: 3, title: 'Digital Modulation (ASK, FSK, PSK)', co: 'CO3', complexity: 'Hard' },
            { unit: 3, title: 'Multiplexing and Spread Spectrum', co: 'CO3', complexity: 'Medium' },
            { unit: 4, title: 'Microprocessor Architecture (8085)', co: 'CO4', complexity: 'Medium' },
            { unit: 4, title: 'Microcontroller Programming (8051)', co: 'CO4', complexity: 'Hard' },
            { unit: 5, title: 'Embedded Systems and IoT Applications', co: 'CO5', complexity: 'Hard' }
        ],
        EEE: [
            { unit: 1, title: 'Circuit Analysis – KVL, KCL, Thevenin', co: 'CO1', complexity: 'Medium' },
            { unit: 1, title: 'AC Circuit Analysis and Phasors', co: 'CO1', complexity: 'Hard' },
            { unit: 1, title: 'Three Phase Circuits and Power', co: 'CO1', complexity: 'Hard' },
            { unit: 2, title: 'Transformers – Construction and Operation', co: 'CO2', complexity: 'Medium' },
            { unit: 2, title: 'DC Machines – Motors and Generators', co: 'CO2', complexity: 'Hard' },
            { unit: 2, title: 'Induction Motor Characteristics', co: 'CO2', complexity: 'Hard' },
            { unit: 3, title: 'Power Electronics – Rectifiers and Inverters', co: 'CO3', complexity: 'Hard' },
            { unit: 3, title: 'DC-DC Converters and Choppers', co: 'CO3', complexity: 'Hard' },
            { unit: 3, title: 'AC Drives and Variable Speed Control', co: 'CO3', complexity: 'Medium' },
            { unit: 4, title: 'Power Systems – Transmission and Distribution', co: 'CO4', complexity: 'Medium' },
            { unit: 4, title: 'Protection Systems and Circuit Breakers', co: 'CO4', complexity: 'Hard' },
            { unit: 5, title: 'Renewable Energy Systems and Smart Grid', co: 'CO5', complexity: 'Hard' }
        ],
        IMT: [
            { unit: 1, title: 'Web Technologies – HTML, CSS, JavaScript', co: 'CO1', complexity: 'Easy' },
            { unit: 1, title: 'React.js Fundamentals and Component Model', co: 'CO1', complexity: 'Medium' },
            { unit: 1, title: 'RESTful API Design and Integration', co: 'CO1', complexity: 'Medium' },
            { unit: 2, title: 'Database Design and SQL Optimization', co: 'CO2', complexity: 'Medium' },
            { unit: 2, title: 'NoSQL Databases – MongoDB', co: 'CO2', complexity: 'Medium' },
            { unit: 2, title: 'ORM Frameworks and Query Building', co: 'CO2', complexity: 'Hard' },
            { unit: 3, title: 'Network Security and Cryptography', co: 'CO3', complexity: 'Hard' },
            { unit: 3, title: 'Firewall, VPN and Intrusion Detection', co: 'CO3', complexity: 'Hard' },
            { unit: 3, title: 'Ethical Hacking Concepts', co: 'CO3', complexity: 'Medium' },
            { unit: 4, title: 'Cloud Platforms – AWS / GCP / Azure', co: 'CO4', complexity: 'Hard' },
            { unit: 4, title: 'DevOps – CI/CD Pipelines and Docker', co: 'CO4', complexity: 'Hard' },
            { unit: 5, title: 'Machine Learning Applications in IT', co: 'CO5', complexity: 'Hard' }
        ],
        MCE: [
            { unit: 1, title: 'Thermodynamics Laws and Applications', co: 'CO1', complexity: 'Medium' },
            { unit: 1, title: 'Properties of Steam and Rankine Cycle', co: 'CO1', complexity: 'Hard' },
            { unit: 1, title: 'Gas Cycles – Otto, Diesel, Brayton', co: 'CO1', complexity: 'Hard' },
            { unit: 2, title: 'Fluid Mechanics – Bernoulli and Flow', co: 'CO2', complexity: 'Medium' },
            { unit: 2, title: 'Pumps and Turbines – Selection & Analysis', co: 'CO2', complexity: 'Hard' },
            { unit: 2, title: 'Hydraulic Machines and Losses', co: 'CO2', complexity: 'Medium' },
            { unit: 3, title: 'Kinematics of Mechanisms', co: 'CO3', complexity: 'Medium' },
            { unit: 3, title: 'Gear Trains and Velocity Ratio', co: 'CO3', complexity: 'Hard' },
            { unit: 3, title: 'Balancing of Rotating Masses', co: 'CO3', complexity: 'Hard' },
            { unit: 4, title: 'Metal Cutting and Machining Processes', co: 'CO4', complexity: 'Medium' },
            { unit: 4, title: 'CNC Machining and CAD/CAM', co: 'CO4', complexity: 'Hard' },
            { unit: 5, title: 'Robotics and Automation in Manufacturing', co: 'CO5', complexity: 'Hard' }
        ]
    },
    R2025: {
        ATE: [
            { unit: 1, title: 'Advanced Engine Technologies – GDI & HCCI', co: 'CO1', complexity: 'Hard' },
            { unit: 1, title: 'Alternative Fuels and Combustion Analysis', co: 'CO1', complexity: 'Hard' },
            { unit: 1, title: 'Emission Control and EURO VI Norms', co: 'CO1', complexity: 'Medium' },
            { unit: 2, title: 'Advanced Transmission – CVT and DCT', co: 'CO2', complexity: 'Hard' },
            { unit: 2, title: 'Electronic Control Units in Drivetrain', co: 'CO2', complexity: 'Medium' },
            { unit: 2, title: 'AWD and Torque Vectoring Systems', co: 'CO2', complexity: 'Hard' },
            { unit: 3, title: 'ADAS – Lane Keeping and Collision Avoidance', co: 'CO3', complexity: 'Hard' },
            { unit: 3, title: 'Vehicle Telematics and V2X Communication', co: 'CO3', complexity: 'Hard' },
            { unit: 3, title: 'Automotive Cybersecurity', co: 'CO3', complexity: 'Medium' },
            { unit: 4, title: 'Battery Technology for EVs', co: 'CO4', complexity: 'Hard' },
            { unit: 4, title: 'Electric Motor Drives – BLDC and PMSM', co: 'CO4', complexity: 'Hard' },
            { unit: 5, title: 'Hydrogen Fuel Cell Vehicles', co: 'CO5', complexity: 'Hard' }
        ],
        CSE: [
            { unit: 1, title: 'Modern OS – Containerization with Docker', co: 'CO1', complexity: 'Hard' },
            { unit: 1, title: 'Real-Time Systems Scheduling', co: 'CO1', complexity: 'Hard' },
            { unit: 1, title: 'Distributed Computing Concepts', co: 'CO1', complexity: 'Hard' },
            { unit: 2, title: 'Advanced AI – Transformers and LLMs', co: 'CO2', complexity: 'Hard' },
            { unit: 2, title: 'Computer Vision and Object Detection', co: 'CO2', complexity: 'Hard' },
            { unit: 2, title: 'Reinforcement Learning Algorithms', co: 'CO2', complexity: 'Hard' },
            { unit: 3, title: 'Blockchain Technology and Smart Contracts', co: 'CO3', complexity: 'Hard' },
            { unit: 3, title: 'Quantum Computing Fundamentals', co: 'CO3', complexity: 'Hard' },
            { unit: 3, title: '5G Networks and Edge Computing', co: 'CO3', complexity: 'Medium' },
            { unit: 4, title: 'Software Architecture Patterns – Microservices', co: 'CO4', complexity: 'Hard' },
            { unit: 4, title: 'Agile Methodologies and DevOps', co: 'CO4', complexity: 'Medium' },
            { unit: 5, title: 'AI Ethics and Responsible Computing', co: 'CO5', complexity: 'Medium' }
        ],
        CVE: [
            { unit: 1, title: 'Finite Element Analysis Fundamentals', co: 'CO1', complexity: 'Hard' },
            { unit: 1, title: 'Advanced Structural Analysis Methods', co: 'CO1', complexity: 'Hard' },
            { unit: 1, title: 'Composite Materials in Construction', co: 'CO1', complexity: 'Medium' },
            { unit: 2, title: 'Geotechnical Earthquake Engineering', co: 'CO2', complexity: 'Hard' },
            { unit: 2, title: 'Deep Foundations and Pile Design', co: 'CO2', complexity: 'Hard' },
            { unit: 2, title: 'Ground Improvement Techniques', co: 'CO2', complexity: 'Medium' },
            { unit: 3, title: 'Smart Infrastructure and Digital Twin', co: 'CO3', complexity: 'Hard' },
            { unit: 3, title: 'BIM – Building Information Modelling', co: 'CO3', complexity: 'Medium' },
            { unit: 3, title: 'Green Building Design and LEED', co: 'CO3', complexity: 'Medium' },
            { unit: 4, title: 'Water Resource Management', co: 'CO4', complexity: 'Medium' },
            { unit: 4, title: 'Environmental Impact Assessment', co: 'CO4', complexity: 'Hard' },
            { unit: 5, title: 'Disaster Risk Reduction in Construction', co: 'CO5', complexity: 'Hard' }
        ],
        CDS: [
            { unit: 1, title: 'Advanced NLP – Transformers and BERT', co: 'CO1', complexity: 'Hard' },
            { unit: 1, title: 'Generative AI and Diffusion Models', co: 'CO1', complexity: 'Hard' },
            { unit: 1, title: 'Feature Engineering – Advanced Methods', co: 'CO1', complexity: 'Hard' },
            { unit: 2, title: 'Graph Neural Networks', co: 'CO2', complexity: 'Hard' },
            { unit: 2, title: 'Time Series Forecasting Models', co: 'CO2', complexity: 'Hard' },
            { unit: 2, title: 'Model Explainability and XAI', co: 'CO2', complexity: 'Medium' },
            { unit: 3, title: 'Real-Time Streaming Data with Kafka', co: 'CO3', complexity: 'Hard' },
            { unit: 3, title: 'Data Lakehouse Architecture', co: 'CO3', complexity: 'Hard' },
            { unit: 3, title: 'MLOps Pipelines and Model Deployment', co: 'CO3', complexity: 'Hard' },
            { unit: 4, title: 'AI-Powered Business Intelligence Tools', co: 'CO4', complexity: 'Medium' },
            { unit: 4, title: 'Recommender System Design', co: 'CO4', complexity: 'Hard' },
            { unit: 5, title: 'Ethics, Privacy and Bias in AI/ML', co: 'CO5', complexity: 'Medium' }
        ],
        ECE: [
            { unit: 1, title: 'Advanced VLSI Design and FinFET', co: 'CO1', complexity: 'Hard' },
            { unit: 1, title: 'FPGA Architecture and Programming', co: 'CO1', complexity: 'Hard' },
            { unit: 1, title: 'RF and Microwave Circuits', co: 'CO1', complexity: 'Hard' },
            { unit: 2, title: '5G Signal Processing and Beamforming', co: 'CO2', complexity: 'Hard' },
            { unit: 2, title: 'OFDM and Massive MIMO Systems', co: 'CO2', complexity: 'Hard' },
            { unit: 2, title: 'Channel Coding – LDPC and Turbo Codes', co: 'CO2', complexity: 'Medium' },
            { unit: 3, title: 'Image and Video Processing with DL', co: 'CO3', complexity: 'Hard' },
            { unit: 3, title: 'Radar and LIDAR Systems', co: 'CO3', complexity: 'Hard' },
            { unit: 3, title: 'Satellite Communication Systems', co: 'CO3', complexity: 'Medium' },
            { unit: 4, title: 'Wearable IoT Devices and Sensors', co: 'CO4', complexity: 'Medium' },
            { unit: 4, title: 'Edge AI for Embedded Devices', co: 'CO4', complexity: 'Hard' },
            { unit: 5, title: 'Quantum Communication and Cryptography', co: 'CO5', complexity: 'Hard' }
        ],
        EEE: [
            { unit: 1, title: 'Smart Grid Architecture and Technologies', co: 'CO1', complexity: 'Hard' },
            { unit: 1, title: 'Power Quality and Harmonics Mitigation', co: 'CO1', complexity: 'Hard' },
            { unit: 1, title: 'FACTS Devices – SVC and STATCOM', co: 'CO1', complexity: 'Hard' },
            { unit: 2, title: 'High Voltage Engineering and Insulation', co: 'CO2', complexity: 'Hard' },
            { unit: 2, title: 'Advanced Switchgear and Protection', co: 'CO2', complexity: 'Hard' },
            { unit: 2, title: 'Condition Monitoring of Electrical Equipment', co: 'CO2', complexity: 'Medium' },
            { unit: 3, title: 'Solar PV System Design and Optimization', co: 'CO3', complexity: 'Hard' },
            { unit: 3, title: 'Wind Energy Systems and Grid Integration', co: 'CO3', complexity: 'Hard' },
            { unit: 3, title: 'Battery Energy Storage Systems', co: 'CO3', complexity: 'Medium' },
            { unit: 4, title: 'IoT Applications in Energy Management', co: 'CO4', complexity: 'Medium' },
            { unit: 4, title: 'AI in Power Systems – Load Forecasting', co: 'CO4', complexity: 'Hard' },
            { unit: 5, title: 'Electric Vehicles and Charging Infrastructure', co: 'CO5', complexity: 'Hard' }
        ],
        IMT: [
            { unit: 1, title: 'Full Stack Development – MERN/MEAN', co: 'CO1', complexity: 'Hard' },
            { unit: 1, title: 'Microservices and API Gateway Patterns', co: 'CO1', complexity: 'Hard' },
            { unit: 1, title: 'GraphQL and Modern API Design', co: 'CO1', complexity: 'Medium' },
            { unit: 2, title: 'Advanced Cloud – Serverless and FaaS', co: 'CO2', complexity: 'Hard' },
            { unit: 2, title: 'Kubernetes and Container Orchestration', co: 'CO2', complexity: 'Hard' },
            { unit: 2, title: 'Site Reliability Engineering (SRE)', co: 'CO2', complexity: 'Medium' },
            { unit: 3, title: 'Zero Trust Security Architecture', co: 'CO3', complexity: 'Hard' },
            { unit: 3, title: 'Penetration Testing and Red Teaming', co: 'CO3', complexity: 'Hard' },
            { unit: 3, title: 'Compliance – GDPR, ISO 27001', co: 'CO3', complexity: 'Medium' },
            { unit: 4, title: 'AI Governance and Model Risk Management', co: 'CO4', complexity: 'Medium' },
            { unit: 4, title: 'Digital Transformation Strategies', co: 'CO4', complexity: 'Hard' },
            { unit: 5, title: 'Metaverse and Extended Reality (XR)', co: 'CO5', complexity: 'Hard' }
        ],
        MCE: [
            { unit: 1, title: 'Additive Manufacturing – 3D Printing', co: 'CO1', complexity: 'Hard' },
            { unit: 1, title: 'Advanced Materials and Nanotechnology', co: 'CO1', complexity: 'Hard' },
            { unit: 1, title: 'Design for Manufacturing and Assembly (DFMA)', co: 'CO1', complexity: 'Medium' },
            { unit: 2, title: 'Computational Fluid Dynamics (CFD)', co: 'CO2', complexity: 'Hard' },
            { unit: 2, title: 'Heat Transfer in Electronic Cooling', co: 'CO2', complexity: 'Hard' },
            { unit: 2, title: 'Renewable Energy Heat Transfer Applications', co: 'CO2', complexity: 'Medium' },
            { unit: 3, title: 'Industrial Robotics and Path Planning', co: 'CO3', complexity: 'Hard' },
            { unit: 3, title: 'Industry 4.0 and Cyber-Physical Systems', co: 'CO3', complexity: 'Hard' },
            { unit: 3, title: 'Autonomous Mobile Robots (AMR)', co: 'CO3', complexity: 'Medium' },
            { unit: 4, title: 'Smart Manufacturing and IIoT', co: 'CO4', complexity: 'Hard' },
            { unit: 4, title: 'Sustainable Manufacturing Practices', co: 'CO4', complexity: 'Medium' },
            { unit: 5, title: 'Electric Vehicle Thermal Management', co: 'CO5', complexity: 'Hard' }
        ]
    }
};

/**
 * Get auto-assigned assessments for all teams.
 * Distributes 12 assessment topics across N teams cyclically.
 * Each team index gets 1 assessment (their presentation topic).
 * @param {string} deptCode
 * @param {number} batchYear
 * @param {number} numTeams
 * @returns {Array} - array of assessment objects (length = numTeams)
 */
function getAutoAssignedAssessments(deptCode, batchYear, numTeams) {
    const regulation = batchYear >= 2029 ? 'R2025' : 'R2021';
    const topics = (SYLLABUS_DATA[regulation] && SYLLABUS_DATA[regulation][deptCode])
        ? SYLLABUS_DATA[regulation][deptCode]
        : [];

    const result = [];
    for (let i = 0; i < numTeams; i++) {
        const topic = topics[i % topics.length]; // cycle if more than 12 teams
        result.push({
            teamIndex: i,
            assessId: `ASSESS_${String(i + 1).padStart(3, '0')}`,
            unit: topic ? `Unit ${topic.unit}` : 'Unit 1',
            title: topic ? topic.title : `Presentation Topic ${i + 1}`,
            co: topic ? topic.co : 'CO1',
            complexity: topic ? topic.complexity : 'Medium',
            duration: '15–20 mins',
            type: 'Team Presentation'
        });
    }
    return result;
}

// ===== Level 6: Assessment Configuration =====
function getSyllabusPdfPath(deptCode, batchYear) {
    const isR2025 = batchYear >= 2029; // 2029 batch joins in 2025 (2029 - 4)
    const folder = isR2025 ? 'R2025' : 'R2021';

    // Mapping object to filenames based on observed folder structures
    let filename = '';

    if (folder === 'R2021') {
        const fileMap = {
            'ATE': 'B.E.Automobile.pdf',
            'CSE': 'B.E.CSE(R-2021).pdf',
            'CVE': 'BE.Civil.pdf regulation 2021.pdf',
            'CDS': 'B.E. CSE(Data Science).pdf',
            'ECE': 'B.E.ECE.pdf',
            'EEE': 'BE-EEE (21 reg).pdf',
            'IMT': 'B.Tech.IT.pdf',
            'MCE': 'B.E. Mechanical Engineering.pdf'
        };
        filename = fileMap[deptCode];
    } else {
        const fileMap = {
            'ATE': 'Padeepz App B.E. Automobile Engineering.pdf',
            'CSE': 'Padeepz App B.E. CSE.pdf',
            'CVE': 'Padeepz App B.E. Civil Engineering.pdf',
            'CDS': 'Padeepz App B.E. CSE (DS).pdf',
            'ECE': 'Padeepz App B.E. ECE.pdf',
            'EEE': 'Padeepz App B.E. EEE.pdf',
            'IMT': 'Padeepz App B.Tech. IT .pdf',
            'MCE': 'Padeepz App B.E. Mechanical Engineering.pdf'
        };
        filename = fileMap[deptCode];
    }

    return `Syllabus/${folder}/${filename}`;
}

function renderAssessments(container) {
    const deptCode = navState.dept;
    const batchYear = navState.batch;

    // Header & Wizard
    let headerHTML = `
        ${renderStepWizard(3)}
        <div class="page-header" style="margin-bottom:1rem;">
            <h2 class="page-title">
                📊 Assessment Matrix & Syllabus — ${getDeptShortName(deptCode)} · ${batchYear}
            </h2>
            <p class="page-subtitle">Subject selection, syllabus extraction, and rubric-based assignment generation.</p>
        </div>
    `;

    const isR2025 = batchYear >= 2029;
    const regulation = isR2025 ? 'R2025' : 'R2021';
    const admYear = batchYear - 4;
    const teams = navState.teams || [];
    const numTeams = teams.length || 12;
    const pdfPath = getSyllabusPdfPath(deptCode, batchYear);
    const step = navState.assignStep || 1;
    const cfg = navState.assignConfig || {};

    const syllTopics = (SYLLABUS_DATA[regulation] && SYLLABUS_DATA[regulation][deptCode])
        ? SYLLABUS_DATA[regulation][deptCode] : [];

    const unitMap = {};
    syllTopics.forEach(t => {
        if (!unitMap[t.unit]) unitMap[t.unit] = { title: '', topics: [] };
        unitMap[t.unit].topics.push(t.title);
    });
    const defaultUnitTitles = {
        1: 'Unit 1 - Fundamentals & Core Concepts',
        2: 'Unit 2 - Analysis & Design Principles',
        3: 'Unit 3 - Systems & Applications',
        4: 'Unit 4 - Advanced Topics & Technologies',
        5: 'Unit 5 - Emerging Trends & Case Studies'
    };

    const steps = [
        { n: 1, label: 'Step 1', title: 'Course Selection' },
        { n: 2, label: 'Step 2', title: 'Regulation' },
        { n: 3, label: 'Step 3', title: 'Syllabus & Units' },
        { n: 4, label: 'Step 4', title: 'Configure & Generate' },
    ];
    const stepperHTML = '<div class="wiz-stepper">' +
        steps.map(s => {
            const cls = s.n < step ? 'done' : s.n === step ? 'active' : '';
            const numIcon = s.n < step ? '&#10003;' : s.n;
            const click = s.n < step ? 'onclick="moveAssignStep(' + s.n + ')"' : '';
            return '<div class="wiz-step ' + cls + '" ' + click + '>' +
                '<div class="wiz-step-num">' + numIcon + '</div>' +
                '<div class="wiz-step-text"><span class="wiz-step-label">' + s.label + '</span>' +
                '<span class="wiz-step-title">' + s.title + '</span></div></div>';
        }).join('') + '</div>';

    let panelHTML = '';

    if (step === 1) {
        const batchInfo = getBatchAcademicInfo(batchYear);
        // Show Course Objective (not COs) after subject selection
        let objectiveHTML = '';
        if (cfg.courseCode && getSubjectSpec(cfg.courseCode)) {
            const spec = getSubjectSpec(cfg.courseCode);
            if (spec.objective) {
                objectiveHTML = `<div style="margin-top:1.2rem;background:linear-gradient(135deg,rgba(37,99,235,0.07),rgba(124,58,237,0.07));border:1px solid rgba(37,99,235,0.18);border-radius:12px;padding:16px 20px;">
                    <div style="font-size:.72rem;font-weight:800;color:var(--accent-blue);text-transform:uppercase;letter-spacing:.8px;margin-bottom:8px;">&#127919; Course Objective</div>
                    <p style="font-size:.88rem;color:var(--text-secondary);line-height:1.6;margin:0;">${spec.objective}</p>
                </div>`;
            }
        }

        panelHTML = `<div class="wiz-panel">
            <div class="wiz-panel-title">&#128218; Step 1 &mdash; Course Selection</div>
            <div class="wiz-form-grid">
                <div class="wiz-field"><label>Department</label>
                    <input type="text" readonly value="${getDeptName(deptCode)}" class="wiz-prefill"></div>
                <div class="wiz-field"><label>Batch Year</label>
                    <input type="text" readonly value="${batchYear}" class="wiz-prefill"></div>
                <div class="wiz-field full"><label>Auto-detected Semester</label>
                    <input type="text" readonly value="Semester ${batchInfo.semester}" class="wiz-prefill"></div>
                <div class="wiz-field full"><label>Core Subject (Anna Univ Syllabus)</label>
                    <select id="wiz-core-subject" onchange="
                        if(!navState.assignConfig) navState.assignConfig={};
                        let opt = this.options[this.selectedIndex];
                        if(opt && opt.value) {
                            navState.assignConfig.courseCode = opt.value;
                            navState.assignConfig.courseName = opt.text.replace(opt.value + ' - ', '');
                            navState.assignConfig.customizedFor = null;
                        } else {
                            navState.assignConfig.courseCode = '';
                            navState.assignConfig.courseName = '';
                            navState.assignConfig.customizedFor = null;
                        }
                        render();
                    ">
                        <option value="" disabled ${!cfg.courseCode ? 'selected' : ''}>Select a subject...</option>
                        ${(function () {
                let list = (SUBJECTS_DATA[regulation] && SUBJECTS_DATA[regulation][deptCode] ? SUBJECTS_DATA[regulation][deptCode] : []);
                if (deptCode === 'ATE') {
                    if (batchYear == 2029) list = ["MA25C02", "ME25C02", "EE25C01", "PH25C05", "CY25C03"].map(c => ({ code: c, name: (typeof ATE_SUBJECTS !== 'undefined' && ATE_SUBJECTS[c]) ? ATE_SUBJECTS[c].name : c }));
                    else if (batchYear == 2028) list = ["AU3401", "AU3402", "AU3403", "AU3404", "ML3391"].map(c => ({ code: c, name: (typeof ATE_SUBJECTS !== 'undefined' && ATE_SUBJECTS[c]) ? ATE_SUBJECTS[c].name : c }));
                    else if (batchYear == 2027) list = ["AU3601"].map(c => ({ code: c, name: (typeof ATE_SUBJECTS !== 'undefined' && ATE_SUBJECTS[c]) ? ATE_SUBJECTS[c].name : c }));
                }
                if (deptCode === 'CSE') {
                    if (batchYear == 2029) list = ["MA25C02", "EE25C01", "CS25C06", "PH25C03", "CS25C07"].map(c => ({ code: c, name: (typeof CSE_SUBJECTS !== 'undefined' && CSE_SUBJECTS[c]) ? CSE_SUBJECTS[c].name : c }));
                    else if (batchYear == 2028) list = ["CS3452", "CS3491", "CS3492", "CS3401", "CS3451"].map(c => ({ code: c, name: (typeof CSE_SUBJECTS !== 'undefined' && CSE_SUBJECTS[c]) ? CSE_SUBJECTS[c].name : c }));
                    else if (batchYear == 2027) list = ["CCS356", "CS3691"].map(c => ({ code: c, name: (typeof CSE_SUBJECTS !== 'undefined' && CSE_SUBJECTS[c]) ? CSE_SUBJECTS[c].name : c }));
                }
                if (deptCode === 'CVE') {
                    if (batchYear == 2029) list = ["MA25C02", "ME25C02", "PH25C02", "EE25C01", "CY25C02", "CE25201"].map(c => ({ code: c, name: (typeof CVE_SUBJECTS !== 'undefined' && CVE_SUBJECTS[c]) ? CVE_SUBJECTS[c].name : c }));
                    else if (batchYear == 2028) list = ["CE3401", "CE3402", "CE3403", "CE3404", "CE3405"].map(c => ({ code: c, name: (typeof CVE_SUBJECTS !== 'undefined' && CVE_SUBJECTS[c]) ? CVE_SUBJECTS[c].name : c }));
                    else if (batchYear == 2027) list = ["CE3601", "CE3602", "AG3601"].map(c => ({ code: c, name: (typeof CVE_SUBJECTS !== 'undefined' && CVE_SUBJECTS[c]) ? CVE_SUBJECTS[c].name : c }));
                }
                if (deptCode === 'ECE') {
                    if (batchYear == 2029) list = ["MA25C02", "EE25C01", "EC25C01", "EC25C02", "CS25C05"].map(c => ({ code: c, name: (typeof ECE_SUBJECTS !== 'undefined' && ECE_SUBJECTS[c]) ? ECE_SUBJECTS[c].name : c }));
                    else if (batchYear == 2028) list = ["EC3452", "EC3401", "EC3451", "EC3492", "EC3491"].map(c => ({ code: c, name: (typeof ECE_SUBJECTS !== 'undefined' && ECE_SUBJECTS[c]) ? ECE_SUBJECTS[c].name : c }));
                    else if (batchYear == 2027) list = ["ET3491", "CS3491"].map(c => ({ code: c, name: (typeof ECE_SUBJECTS !== 'undefined' && ECE_SUBJECTS[c]) ? ECE_SUBJECTS[c].name : c }));
                }
                if (deptCode === 'EEE') {
                    if (batchYear == 2029) list = ["MA25C03", "GE25C01", "PH25C04", "ME25C01", "CS25C04"].map(c => ({ code: c, name: (typeof EEE_SUBJECTS !== 'undefined' && EEE_SUBJECTS[c]) ? EEE_SUBJECTS[c].name : c }));
                    else if (batchYear == 2028) list = ["EE3401", "EE3402", "EE3403", "EE3404", "EE3405"].map(c => ({ code: c, name: (typeof EEE_SUBJECTS !== 'undefined' && EEE_SUBJECTS[c]) ? EEE_SUBJECTS[c].name : c }));
                    else if (batchYear == 2027) list = ["EE3601", "EE3602"].map(c => ({ code: c, name: (typeof EEE_SUBJECTS !== 'undefined' && EEE_SUBJECTS[c]) ? EEE_SUBJECTS[c].name : c }));
                }
                if (deptCode === 'IMT') {
                    if (batchYear == 2029) list = ["MA25C02", "PH25C03", "IT25201", "IT25202", "ME25C05"].map(c => ({ code: c, name: (typeof IMT_SUBJECTS !== 'undefined' && IMT_SUBJECTS[c]) ? IMT_SUBJECTS[c].name : c }));
                    else if (batchYear == 2028) list = ["CS3452", "CS3491", "CS3492", "IT3401", "CS3451"].map(c => ({ code: c, name: (typeof IMT_SUBJECTS !== 'undefined' && IMT_SUBJECTS[c]) ? IMT_SUBJECTS[c].name : c }));
                    else if (batchYear == 2027) list = ["CCS356"].map(c => ({ code: c, name: (typeof IMT_SUBJECTS !== 'undefined' && IMT_SUBJECTS[c]) ? IMT_SUBJECTS[c].name : c }));
                }
                if (cfg.courseCode && !list.find(s => s.code === cfg.courseCode)) {
                    cfg.courseCode = '';
                    cfg.courseName = '';
                    cfg.customizedFor = null;
                }
                return list;
            })().map(s =>
                `<option value="${s.code}" ${(cfg.courseCode === s.code) ? 'selected' : ''}>${s.code} - ${s.name}</option>`
            ).join('')}
                    </select>
                </div>
            </div>
            ${objectiveHTML}
            <div class="wiz-nav-row">
                <button class="btn-primary" style="width:auto;padding:10px 28px;" onclick="moveAssignStep(2)">Next &rarr;</button>
            </div>
        </div>`;
    }

    if (step === 2) {
        const baseReg = isR2025 ? 'R2021' : 'R2018';
        const type = isR2025 ? 'Incremental' : 'Standard';
        panelHTML = `<div class="wiz-panel">
            <div class="wiz-panel-title">&#9878;&#65039; Step 2 &mdash; Regulation Determination</div>
            <div class="wiz-reg-card">
                <div class="wiz-reg-title">${regulation} &#10003;</div>
                <div class="wiz-reg-grid">
                    <div class="wiz-reg-item"><label>Regulation</label><span>${regulation}</span></div>
                    <div class="wiz-reg-item"><label>Admission Year</label><span>${admYear}</span></div>
                    <div class="wiz-reg-item"><label>Passing Year</label><span>${batchYear}</span></div>
                    <div class="wiz-reg-item"><label>Type</label><span>${type}</span></div>
                </div>
                <div class="wiz-reg-logic">Admission Year = Passing Year &minus; 4 &nbsp;&middot;&nbsp; Admission ${admYear} &rarr; ${regulation} (based on ${baseReg})</div>
            </div>
            <div style="background:rgba(5,150,105,.06);border:1px solid rgba(5,150,105,.2);border-radius:var(--radius-sm);padding:10px 14px;font-size:.82rem;color:var(--text-secondary);">
                Syllabus topics for <strong>${getDeptName(deptCode)}</strong> under <strong>${regulation}</strong> have been pre-loaded for the next step.
            </div>
            <div class="wiz-nav-row">
                <button class="btn-secondary" style="width:auto;padding:10px 20px;" onclick="moveAssignStep(1)">&larr; Previous</button>
                <button class="btn-primary"   style="width:auto;padding:10px 28px;" onclick="moveAssignStep(3)">Next &rarr;</button>
            </div>
        </div>`;
        let topicStatsHTML = '';
        if (cfg.courseCode && getSubjectSpec(cfg.courseCode)) {
            const spec = getSubjectSpec(cfg.courseCode);
            const totalUnits = Object.keys(spec.units || {}).length;
            const presTopics = spec.topics?.presentation?.length || 0;
            const miniprojTopics = spec.topics?.miniproject?.length || 0;

            topicStatsHTML = `<div style="margin: 1.2rem 0; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 12px 16px; display: flex; gap: 24px;">`;
        }
    }

    if (step === 3) {
        if (cfg.courseCode && getSubjectSpec(cfg.courseCode)) {
            const spec = getSubjectSpec(cfg.courseCode);
            let needsUpdate = (cfg.customizedFor !== cfg.courseCode);
            if (!needsUpdate && spec.unit_descs && (!cfg.units || !cfg.units[1] || !cfg.units[1].desc)) {
                needsUpdate = true;
            }
            if (needsUpdate) {
                cfg.courseOutcomes = Object.assign({}, spec.cos);
                cfg.units = {};
                for (let i = 1; i <= 5; i++) {
                    const uData = spec.units[String(i)] || spec.units[i] || {};
                    cfg.units[i] = {
                        title: (typeof uData === 'string') ? uData : (uData.title || 'Unit ' + i),
                        desc: (typeof uData === 'string') ? '' : (uData.desc || '')
                    };
                }
                if (spec.objective) cfg.courseDesc = spec.objective;
                cfg.customizedFor = cfg.courseCode;
            }
        }

        const defaultCOs = {
            CO1: 'Understand and apply fundamental concepts of the subject.',
            CO2: 'Analyse and solve domain-specific problems using appropriate methods.',
            CO3: 'Design and implement solutions integrating relevant systems.',
            CO4: 'Evaluate and compare advanced techniques and technologies.',
            CO5: 'Demonstrate awareness of emerging trends and professional responsibility.'
        };
        const savedCOs = cfg.courseOutcomes || defaultCOs;
        const coAccents = [
            { bg: '#2563eb', light: 'rgba(37,99,235,0.07)', border: 'rgba(37,99,235,0.18)' },
            { bg: '#7c3aed', light: 'rgba(124,58,237,0.07)', border: 'rgba(124,58,237,0.18)' },
            { bg: '#059669', light: 'rgba(5,150,105,0.07)', border: 'rgba(5,150,105,0.18)' },
            { bg: '#d97706', light: 'rgba(217,119,6,0.07)', border: 'rgba(217,119,6,0.18)' },
            { bg: '#dc2626', light: 'rgba(220,38,38,0.07)', border: 'rgba(220,38,38,0.18)' }
        ];
        const coHTML = Object.entries(savedCOs).map(([k, v], idx) => {
            const acc = coAccents[idx % 5];
            return '<div style="background:' + acc.light + ';border:1.5px solid ' + acc.border + ';border-radius:14px;padding:16px 20px;margin-bottom:12px;">' +
                '<div style="display:flex;align-items:center;gap:10px;margin-bottom:8px;">' +
                '<span style="display:inline-flex;align-items:center;justify-content:center;width:36px;height:36px;border-radius:50%;background:' + acc.bg + ';color:#fff;font-size:.75rem;font-weight:900;flex-shrink:0;">' + (idx + 1) + '</span>' +
                '<span style="font-size:.78rem;font-weight:800;color:' + acc.bg + ';text-transform:uppercase;letter-spacing:.7px;">' + k + ' \u2014 Course Outcome ' + (idx + 1) + '</span>' +
                '</div>' +
                '<textarea id="co-' + k + '" data-co="' + k + '" rows="2" ' +
                'oninput="(navState.assignConfig.courseOutcomes=navState.assignConfig.courseOutcomes||{})[this.dataset.co]=this.value;" ' +
                'style="width:100%;border:1px solid ' + acc.border + ';border-radius:8px;padding:8px 12px;font-size:.82rem;line-height:1.55;color:var(--text-primary);background:rgba(255,255,255,0.6);resize:none;font-family:inherit;box-sizing:border-box;max-height:70px;overflow-y:auto;">' + v + '</textarea>' +
                '</div>';
        }).join('');


        const savedUnits = cfg.units || {};
        const unitRows = [1, 2, 3, 4, 5].map(u => {
            const topics = unitMap[u] ? unitMap[u].topics : [];
            const savedTitle = (savedUnits[u] || {}).title || topics[0] || defaultUnitTitles[u];
            const savedDesc = (savedUnits[u] || {}).desc || topics.join(' - ');
            return '<div class="wiz-unit-row" id="unit-row-' + u + '">' +
                '<div class="wiz-unit-header" onclick="toggleWizUnit(' + u + ')">' +
                '<div class="wiz-unit-badge">U' + u + '</div>' +
                '<div class="wiz-unit-name" id="unit-name-preview-' + u + '">' + savedTitle + '</div>' +
                '<span class="wiz-unit-expand" id="unit-expand-' + u + '">&darr; ' + topics.length + ' topics</span>' +
                '</div>' +
                '<div class="wiz-unit-body" id="unit-body-' + u + '" style="display:none;">' +
                '<input type="text" id="unit-title-' + u + '" placeholder="Unit title" value="' + savedTitle + '" ' +
                'oninput="document.getElementById(\\"unit-name-preview-' + u + '\\").textContent=this.value;" style="font-weight:600;color:var(--accent-blue);">' +
                '<textarea id="unit-desc-' + u + '" rows="4" placeholder="Describe key topics...">' + savedDesc + '</textarea>' +
                '<div style="font-size:.72rem;color:var(--text-muted);">Tip: More detail = richer assignments</div>' +
                '</div></div>';
        }).join('');

        panelHTML = `<div class="wiz-panel">
            <div class="wiz-panel-title">&#128218; Step 3 &mdash; Syllabus &amp; Units
                <button onclick="openSyllabusPdf('${pdfPath}')" style="margin-left:auto;background:none;border:1px solid rgba(37,99,235,.3);border-radius:6px;padding:4px 12px;font-size:.75rem;font-weight:600;color:var(--accent-blue);cursor:pointer;">
                    &#128196; Open ${regulation} Syllabus PDF
                </button>
            </div>
            <div style="font-size:.82rem;font-weight:700;color:var(--text-secondary);margin-bottom:8px;">
                Course: <span style="color:var(--accent-blue)">${cfg.courseCode || '—'}</span> &nbsp;&middot;&nbsp; ${cfg.courseName || getDeptName(deptCode) + ' Core Subject'}
            </div>
            <div style="font-size:.78rem;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px;">Course Outcomes (CO1–CO5)</div>
            <div class="wiz-co-grid">${coHTML}</div>
            <div style="font-size:.78rem;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px;margin-top:1rem;">Unit Details — click to expand &amp; edit</div>
            <div class="wiz-unit-list">${unitRows}</div>
            <div class="wiz-nav-row">
                <button class="btn-secondary" style="width:auto;padding:10px 20px;" onclick="moveAssignStep(2)">&larr; Previous</button>
                <button class="btn-primary"   style="width:auto;padding:10px 28px;" onclick="saveWizardUnitsAndProceed()">Next &rarr;</button>
            </div>
        </div>`;
    }

    if (step === 4) {
        const assignTypes = [
            { id: 'presentation', icon: '&#127908;', name: 'Team Presentation', desc: '15-20 min live presentation' },
            { id: 'assignment', icon: '&#128221;', name: 'Individual Assignment', desc: 'Written/typed submission' },
            { id: 'miniproject', icon: '&#128295;', name: 'Mini Project', desc: 'Working prototype or implementation' },
            { id: 'viva', icon: '&#128172;', name: 'Viva Voce', desc: 'Oral Q&A examination' },
        ];
        const savedType = cfg.assignType || 'presentation';

        // Focus Units as checkboxes (multi-select)
        const focusUnitsHTML = [1, 2, 3, 4, 5].map(u => {
            const unitTitle = (cfg.units && cfg.units[u]) ? cfg.units[u].title : ('Unit ' + u);
            const checked = (!cfg.focusUnits || !cfg.focusUnits.length || cfg.focusUnits.includes(u)) ? 'checked' : '';
            return `<label style="display:flex;align-items:center;gap:8px;padding:8px 10px;border-radius:8px;cursor:pointer;background:var(--card-bg);border:1px solid var(--border);font-size:.85rem;">
                <input type="checkbox" class="focus-unit-cb" value="${u}" ${checked} style="width:16px;height:16px;accent-color:var(--accent-blue);">
                <span><strong>Unit ${u}</strong> — ${unitTitle}</span>
            </label>`;
        }).join('');

        let resultHTML = '';
        if (cfg.generatedAssignments && cfg.generatedAssignments.length > 0) {
            const cColors = {
                Easy: 'background:rgba(5,150,105,.12);color:#059669',
                Medium: 'background:rgba(245,158,11,.12);color:#d97706',
                Hard: 'background:rgba(220,38,38,.12);color:#dc2626'
            };
            const cards = cfg.generatedAssignments.map((a, i) =>
                '<div class="assign-card" style="animation-delay:' + (i * .03) + 's">' +
                '<div class="assign-card-header">' +
                '<div class="assign-team-badge">T' + (i + 1) + '</div>' +
                '<div class="assign-card-info">' +
                '<div class="assign-topic-title" style="font-weight:600; color:var(--text-dark);">' + a.title + '</div>' +
                '<div class="assign-meta-row" style="margin-top:8px;">' +
                '<span class="assign-pill" style="background:rgba(37,99,235,.1);color:var(--accent-blue);">' + a.unit + '</span>' +
                '<span class="assign-pill" style="' + (cColors[a.complexity] || cColors.Medium) + '">' + a.complexity + '</span>' +
                '<span class="assign-pill" style="background:rgba(124,58,237,.1);color:#7c3aed;">' + a.type + '</span>' +
                '<span style="font-size:.72rem;color:var(--text-muted);">' + a.co + ' &middot; ' + a.duration + '</span>' +
                '</div></div>' +
                '</div></div>'
            ).join('');
            resultHTML = '<div class="rt-section" style="margin-top:1.5rem;">' +
                '<div class="rt-section-header">' +
                '<div class="rt-section-title">Generated Assignments (' + cfg.generatedAssignments.length + ')</div>' +
                '<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;">' +
                '<button class="btn-primary" style="width:auto;padding:8px 18px;font-size:.82rem;background:var(--gradient-purple);" onclick="navigateToSessions()">🗓️ Proceed to Session Schedule</button>' +
                '<button class="btn-primary" style="width:auto;padding:8px 18px;font-size:.82rem;" onclick="generateAssignments()">Regenerate</button>' +
                '<button class="btn-secondary" style="width:auto;padding:8px 18px;font-size:.82rem;" onclick="exportAssignmentsCSV()">Export CSV</button>' +
                '</div></div>' +
                '<div class="assign-result-grid">' + cards + '</div></div>';
        }

        const units = cfg.units || {};
        const unitList = [1, 2, 3, 4, 5].map(u => (units[u] || {}).title || 'Unit ' + u).join(', ');
        // Build lab dropdown HTML for ATE practicals (shows AU3611 / AU3612 / All)
        const spec = getSubjectSpec(cfg.courseCode);
        const _labsSource = getLabsGen(deptCode);
        const semLabs = (spec && spec.semester && _labsSource) ? (_labsSource[spec.semester] || []) : [];
        const showLabDropdown = (semLabs.length > 0 && (cfg.assignType === 'practicals' || savedType === 'practicals'));
        const labDropdownHTML = showLabDropdown ? `
            <div class="wiz-field" id="lab-select-field">
                <label>&#128203; Select Lab</label>
                <select id="wiz-lab-select" style="font-weight:600;">
                    <option value="all" ${(!cfg.selectedLab || cfg.selectedLab === 'all') ? 'selected' : ''}>All Labs (combined)</option>
                    ${semLabs.map(l => `<option value="${l.code}" ${cfg.selectedLab === l.code ? 'selected' : ''}>${l.code} — ${l.name}</option>`).join('')}
                </select>
            </div>` : '';

        panelHTML = `<div class="wiz-panel">
            <div class="wiz-panel-title">&#9881;&#65039; Step 4 &mdash; Assignment Configuration</div>
            <div class="wiz-form-grid">
                <div class="wiz-field"><label>Assignment Type</label>
                    <select id="wiz-type" onchange="if(!navState.assignConfig)navState.assignConfig={};navState.assignConfig.assignType=this.value;navState.assignConfig.selectedLab='all';render();">
                        <option value="presentation" ${savedType === 'presentation' ? 'selected' : ''}>&#127908; Team Presentation</option>
                        <option value="practicals" ${savedType === 'practicals' ? 'selected' : ''}>&#128203; Practicals</option>
                        <option value="miniproject" ${savedType === 'miniproject' ? 'selected' : ''}>&#128295; Mini Project</option>
                        <option value="case_study" ${savedType === 'case_study' ? 'selected' : ''}>&#128216; Case Studies</option>
                        <option value="problem_solving" ${savedType === 'problem_solving' ? 'selected' : ''}>&#129518; Problem Solving</option>
                    </select>
                </div>
                ${labDropdownHTML}
                <div class="wiz-field"><label>Complexity</label>
                    <select id="wiz-complexity">
                        <option value="mixed" ${(!cfg.complexity || cfg.complexity === 'mixed') ? 'selected' : ''}>Mixed (Easy/Medium/Hard)</option>
                        <option value="Easy"   ${cfg.complexity === 'Easy' ? 'selected' : ''}>All Easy</option>
                        <option value="Medium" ${cfg.complexity === 'Medium' ? 'selected' : ''}>All Medium</option>
                        <option value="Hard"   ${cfg.complexity === 'Hard' ? 'selected' : ''}>All Hard</option>
                    </select></div>
                <div class="wiz-field"><label>Duration per Assignment</label>
                    <select id="wiz-duration" onchange="if(!navState.assignConfig)navState.assignConfig={};navState.assignConfig.duration=this.value;">
                        <option value="10-15 min" ${(!cfg.duration || cfg.duration === '10-15 min') ? 'selected' : ''}>10-15 minutes</option>
                        <option value="15-20 min" ${cfg.duration === '15-20 min' ? 'selected' : ''}>15-20 minutes</option>
                    </select></div>
            </div>
            <div style="margin-top:1rem;">
                <div style="font-size:.78rem;font-weight:800;color:var(--text-muted);text-transform:uppercase;letter-spacing:.5px;margin-bottom:10px;">&#9989; Focus Units (tick to include)</div>
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;" id="focus-units-grid">${focusUnitsHTML}</div>
            </div>
            <div class="wiz-ready-card">
                <div class="wiz-ready-icon">&#9999;&#65039;</div>
                <div class="wiz-ready-title">Ready to Generate ${numTeams} Assignments</div>
                <ul class="wiz-ready-bullets">
                    <li>${cfg.assignType === 'practicals' ? 'Lab experiments from official Anna University syllabus' : 'Curated topic list from official Anna University syllabus'}</li>
                    <li>${cfg.assignType === 'practicals' ? 'Semester lab experiments mapped to each team' : (cfg.assignType === 'miniproject' ? '12 distinct Mini Project ideas derived from unit content' : '12 distinct Presentation topics derived from unit content')}</li>
                    <li>Each team gets a unique ${cfg.assignType === 'practicals' ? 'experiment' : 'topic'} with objectives &amp; deliverables</li>
                    <li>Export as CSV to share with faculty</li>
                </ul>
                <button class="btn-primary" style="width:auto;padding:12px 36px;font-size:1rem;" onclick="generateAssignments()">
                    Generate ${numTeams} Assignments
                </button>
            </div>
            <div class="wiz-nav-row" style="border-top:none;padding-top:0;">
                <button class="btn-secondary" style="width:auto;padding:10px 20px;" onclick="moveAssignStep(3)">&larr; Previous</button>
            </div>
        </div>
        ${resultHTML}`;
    }

    container.innerHTML = `
        ${headerHTML}
        ${panelHTML}
    `;
}

// ===== Level 4: Grading — Prototype-Quality Chip-Based Assessment =====
function renderGrading(container) {
    const { dept, batch, calendarConfig, teams } = navState;
    if (!dept || !batch) {
        container.innerHTML = `<div class="card p-4">⚠️ No batch selected. Navigate from a department/batch view.</div>`;
        return;
    }
    if (!calendarConfig || !calendarConfig.sessions || calendarConfig.sessions.length === 0) {
        container.innerHTML = `
            ${renderStepWizard(4)}
            <div class="card" style="text-align:center; padding:4rem; color:var(--text-muted);">
                <span style="font-size:3rem; display:block; margin-bottom:1rem;">📅</span>
                <p style="font-size:.9rem;">No schedule found. Generate a schedule in the <b>Schedule</b> step first.</p>
                <button class="btn btn-primary mt-3" onclick="navigateTo('sessions')">Go to Schedule</button>
            </div>`;
        return;
    }
    if (!teams || teams.length === 0) {
        container.innerHTML = `${renderStepWizard(4)}<div class="card p-4">⚠️ No teams built. Go to <b>Teams</b> step first.</div>`;
        return;
    }

    const sessions = calendarConfig.sessions;
    const key = `${dept.code}_${batch.year}`;
    const todayStr = new Date().toISOString().slice(0, 10);

    // Group sessions by date
    const byDay = {};
    sessions.forEach(s => { if (!byDay[s.dateStr]) byDay[s.dateStr] = []; byDay[s.dateStr].push(s); });
    const dayKeys = Object.keys(byDay).sort();

    container.innerHTML = `
        ${renderStepWizard(4)}
        <div class="page-header">
            <h2 class="page-title" style="display:flex; align-items:center; gap:10px;">
                ✏️ Assessment & Grading — ${getDeptShortName(dept.code)} · ${batch.year}
            </h2>
            <p class="page-subtitle" style="font-size:.8rem; color:var(--text-muted); margin-top:4px;">
                Evaluate each team's presentation, technical review, and feedback using rubric-based chip scoring.
            </p>
        </div>

        <div class="card mb-4" style="background:var(--accent-lt); border:1px solid var(--accent); border-left:4px solid var(--accent);">
            <div style="padding:14px; display:flex; gap:1.5rem; align-items:center; flex-wrap:wrap;">
                <div style="flex:1; min-width:200px;">
                    <label style="font-size:.65rem; color:var(--accent); font-weight:700; text-transform:uppercase; letter-spacing:.06em; margin-bottom:4px; display:block;">Select Scheduled Date</label>
                    <select id="grade-day-sel" class="form-control" onchange="onGradeDayChange()" style="width:100%; padding:8px 10px; font-size:.82rem;">
                        <option value="">— Select Date —</option>
                        ${dayKeys.map(dk => {
        const d = byDay[dk][0];
        const isPast = dk < todayStr, isToday = dk === todayStr;
        const dl = new Date(dk + 'T00:00:00').toLocaleDateString('en-IN', { weekday: 'short', day: '2-digit', month: 'short' });
        const icon = isToday ? '📍' : isPast ? '✅' : '🔒';
        return `<option value="${dk}">${icon} ${dl} (${dk}) ${d.revealed ? '🔓' : '🔒'}</option>`;
    }).join('')}
                    </select>
                </div>
                <div style="flex:1; min-width:200px;">
                    <label style="font-size:.65rem; color:var(--accent); font-weight:700; text-transform:uppercase; letter-spacing:.06em; margin-bottom:4px; display:block;">Select Session</label>
                    <select id="grade-sess-sel" class="form-control" onchange="onGradeSessionChange()" style="width:100%; padding:8px 10px; font-size:.82rem;">
                        <option value="">— Select Session —</option>
                    </select>
                </div>
                <div style="min-width:150px; text-align:right;">
                    <div style="font-size:.62rem; color:var(--text-muted); text-transform:uppercase; letter-spacing:.05em;">Current Grader</div>
                    <div style="font-weight:700; color:var(--primary); font-size:.9rem;">${currentUser ? currentUser.role : 'Faculty'}</div>
                </div>
            </div>
        </div>

        <div id="grade-content-area">
            <div class="card" style="text-align:center; padding:4rem; color:var(--text-muted);">
                <span style="font-size:3rem; display:block; margin-bottom:1rem;">📋</span>
                <p>Select a date and session above to begin evaluation.</p>
            </div>
        </div>

        <div class="step-nav-footer">
            <button class="btn-step-back" onclick="navigateTo('assessments')">← Back to Assessments</button>
            <span class="nav-info">${sessions.length} sessions · ${teams.length} teams</span>
            <button class="btn-step-next" onclick="navigateTo('reveal')">Final Reveal →</button>
        </div>
    `;

    window.onGradeDayChange = () => {
        const dk = document.getElementById('grade-day-sel').value;
        const seSel = document.getElementById('grade-sess-sel');
        seSel.innerHTML = '<option value="">— Select Session —</option>';
        if (dk === '') return;
        const daySess = byDay[dk];
        daySess.forEach((s, si) => {
            const p = getTeamName(dept.code, s.presenterIdx);
            seSel.innerHTML += `<option value="${si}">S${s.sessNum} · 🎤 ${p}</option>`;
        });
    };

    window.onGradeSessionChange = () => {
        const dk = document.getElementById('grade-day-sel').value;
        const si = document.getElementById('grade-sess-sel').value;
        const content = document.getElementById('grade-content-area');
        if (dk === '' || si === '') return;

        const sess = byDay[dk][si];
        if (!sess.revealed) {
            content.innerHTML = `<div class="card p-4" style="color:#B45309; background:var(--accent-lt); border:1px solid var(--accent);">
                🔒 This session has not been revealed yet. Roles are only visible on the scheduled day.
            </div>`;
            return;
        }
        renderGradePhases(content, sess, key);
    };
}

function renderGradePhases(container, sess, key) {
    const teams = navState.teams;
    const deptCode = navState.dept.code;
    const gKey = `sam_grades_${key}_S${sess.sessNum}`;
    const saved = JSON.parse(localStorage.getItem(gKey) || '{}');
    const isSubmitted = !!(saved._submitted);

    const phases = [
        { rk: 'P', team: teams[sess.presenterIdx], label: 'Presenter' },
        { rk: 'TR', team: teams[sess.reviewerIdx], label: 'Tech Reviewer' },
        { rk: 'FP', team: teams[sess.feedbackIdx], label: 'Feedback Provider' }
    ];

    // Check phase completion
    const checkDone = (rk) => !!(saved[rk] && Object.keys(saved[rk]).length > 0);

    // Session info header
    const sidStr = `S${String(sess.sessNum).padStart(2, '0')}`;
    const sessionInfoHtml = `<div style="background:#f0f9ff; border:1px solid #bae6fd; border-radius:8px; padding:10px 14px; margin-bottom:12px; display:flex; flex-wrap:wrap; gap:10px; align-items:center;">
        <span class="session-id-badge" style="font-size:.85rem; background:#e0f2fe; color:#0369a1; border:1px solid #7dd3fc; padding:3px 10px;">${sidStr}</span>
        <span style="font-size:.78rem; color:#475569;">Session <strong>${sess.sessNum}</strong> · ${sess.dateStr}</span>
    </div>`;

    // Submitted banner
    let submittedBanner = '';
    if (isSubmitted) {
        const ts = saved._submittedAt ? new Date(saved._submittedAt).toLocaleString() : '';
        submittedBanner = `<div class="grade-submitted-banner">
            <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                <span class="badge-ok">✅ Session Submitted</span>
                <span style="font-size:.75rem; color:#475569;">Submitted${ts ? ' on ' + ts : ''}</span>
            </div>
        </div>`;
    }

    // Phase bar
    const phaseBarHtml = `<div class="phase-bar mb-3">
        <div class="phase-item ${checkDone('P') ? 'done' : 'active'}" onclick="scrollToPhase('phase-P')">
            <span>${checkDone('P') ? '✅' : '1'}</span> Presenter
        </div>
        <div class="phase-item ${checkDone('TR') ? 'done' : 'active'}" onclick="scrollToPhase('phase-TR')">
            <span>${checkDone('TR') ? '✅' : '2'}</span> Tech Review
        </div>
        <div class="phase-item ${checkDone('FP') ? 'done' : 'active'}" onclick="scrollToPhase('phase-FP')">
            <span>${checkDone('FP') ? '✅' : '3'}</span> Feedback
        </div>
    </div>`;

    // Build each phase accordion
    let phasesHtml = '';
    phases.forEach(ph => {
        const rb = RUBRICS[ph.rk];
        const anchors = RUBRIC_ANCHORS[ph.rk] || [];
        const savedRole = saved[ph.rk] || {};
        const maxScore = rb.dims.length * 4;
        const safeKey = gKey.replace(/[^a-z0-9]/gi, '_');

        // Rubric reference panel
        const scaleBarHtml = SCALE_LABELS.map((lbl, s) =>
            `<div class="rubric-scale-cell s${s}">${s === 0 ? '✗' : s} — ${lbl}</div>`
        ).join('');
        const dimRowsHtml = rb.dims.map((dim, di) => {
            const cells = [0, 1, 2, 3, 4].map(s => {
                const txt = (anchors[di] && anchors[di][s]) || SCALE_LABELS[s];
                return `<div class="rubric-dim-cell s${s}">${txt}</div>`;
            }).join('');
            return `<div class="rubric-dim-row"><div class="rubric-dim-label">${dim}</div>${cells}</div>`;
        }).join('');

        const refPanelId = `rubric-ref-body-${ph.rk}`;
        const rubricRefHtml = `<div class="rubric-ref-panel">
            <div class="rubric-ref-header" onclick="toggleRubricRef('${refPanelId}')">
                <span>📋 ${rb.icon} ${rb.label} — Rubric Reference <span style="font-size:.65rem; color:#94a3b8; font-weight:400">(click to expand)</span></span>
                <span id="${refPanelId}-icon">▼</span>
            </div>
            <div class="rubric-ref-body" id="${refPanelId}">
                <div class="rubric-scale-bar">${scaleBarHtml}</div>
                ${dimRowsHtml}
            </div>
        </div>`;

        // Per-student rows with chip buttons
        const memberRowsHtml = ph.team.members.map((s, mi) => {
            const sr = savedRole[s.id] || {};
            const dimVals = rb.dims.map((_, di) => (sr.dims && sr.dims[di] !== undefined) ? sr.dims[di] : 2);
            const isUntouched = dimVals.every(v => v === 2) && !sr._touched;
            const total = dimVals.reduce((a, b) => a + b, 0);

            const chipInputsHtml = rb.dims.map((dim, di) => {
                const val = dimVals[di];
                const chipsHtml = [0, 1, 2, 3, 4].map(v =>
                    `<button type="button" class="chip-btn${v === val ? ' active' : ''}" data-score="${v}"
                        title="${v === 0 ? 'Not demonstrated' : SCALE_LABELS[v]}"
                        onclick="setChipScore('${gKey}','${ph.rk}',${mi},${di},${v},${rb.dims.length},'${s.id}')">
                        ${v === 0 ? '✗' : v}
                    </button>`
                ).join('');
                return `<td class="score-cell" title="${dim}">
                    <div class="chip-group" id="cg_${safeKey}_${ph.rk}_${mi}_${di}">${chipsHtml}</div>
                </td>`;
            }).join('');

            // Quick-fill per student
            const qfBtns = [2, 3, 4].map(v =>
                `<button class="quick-fill-btn" onclick="quickFillStudent('${gKey}','${ph.rk}',${mi},${v},${rb.dims.length},'${s.id}')" title="Set all criteria to ${v} (${SCALE_LABELS[v]})">${v === 2 ? 'All Dev' : v === 3 ? 'All Pro' : 'All ★'}</button>`
            ).join('');

            return `<tr class="grade-row${isUntouched ? ' grade-row-untouched' : ''}" id="grade-row_${safeKey}_${ph.rk}_${mi}">
                <td style="color:var(--text-muted); font-size:.72rem;">${mi + 1}</td>
                <td style="font-weight:600; font-size:.82rem; white-space:nowrap;">
                    ${s.name}${isUntouched ? '<span style="color:#f59e0b; font-size:.6rem; margin-left:3px;" title="All criteria at default">⚠ default</span>' : ''}
                </td>
                <td style="font-family:monospace; font-size:.68rem; color:var(--text-muted); white-space:nowrap;">${s.id}</td>
                ${chipInputsHtml}
                <td style="font-weight:800; color:var(--primary); font-size:.85rem; white-space:nowrap;" id="st_total_${safeKey}_${ph.rk}_${mi}">${total}/${maxScore}</td>
                <td style="white-space:nowrap;">${qfBtns}</td>
            </tr>`;
        }).join('');

        // Role-level quick-fill
        const roleQfHtml = `<tr class="quick-fill-row">
            <td colspan="3" style="font-size:.62rem; color:#94a3b8; font-weight:600;">SET ALL STUDENTS →</td>
            <td colspan="${rb.dims.length}" style="padding:4px 6px;">
                ${[1, 2, 3, 4].map(v => `<button class="quick-fill-btn" style="font-size:.62rem;"
                    onclick="quickFillRole('${gKey}','${ph.rk}',${v},${rb.dims.length})"
                    title="Set every student to ${v}">
                    ${v} — ${SCALE_LABELS[v]}
                </button>`).join('')}
            </td>
            <td colspan="2"></td>
        </tr>`;

        const bgColor = ph.rk === 'P' ? '#FEF2F2' : ph.rk === 'TR' ? 'var(--accent-lt)' : 'var(--secondary-lt)';

        phasesHtml += `<div class="grade-phase" id="phase-${ph.rk}">
            <div class="grade-phase-header" style="background:${bgColor};" onclick="togglePhase('phase-body-${ph.rk}')">
                <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                    <span class="badge ${rb.color}" style="font-size:.82rem; padding:3px 10px;">${rb.icon} ${rb.label}: ${ph.team.label}</span>
                    <span style="font-size:.72rem; color:var(--text-muted);">${ph.team.members.length} students · max ${maxScore} pts each</span>
                </div>
                <span style="color:var(--text-muted); font-size:.85rem;" id="phase-toggle-${ph.rk}">▼</span>
            </div>
            <div class="grade-phase-body" id="phase-body-${ph.rk}">
                ${rubricRefHtml}
                <div style="overflow-x:auto; -webkit-overflow-scrolling:touch;">
                    <table class="dt">
                        <thead><tr>
                            <th style="width:28px;">#</th>
                            <th>Student</th>
                            <th style="font-size:.65rem;">ID</th>
                            ${rb.dims.map(d => `<th class="score-cell" title="${d}" style="min-width:148px; font-size:.65rem;">${d}</th>`).join('')}
                            <th style="width:52px;">Total</th>
                            <th style="width:100px; font-size:.62rem;">Quick Fill</th>
                        </tr></thead>
                        <tbody>
                            ${memberRowsHtml}
                            ${roleQfHtml}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>`;
    });

    // Submit button
    const submitHtml = isSubmitted
        ? ''
        : `<div style="margin-top:16px; display:flex; justify-content:flex-end; gap:8px;">
            <button class="btn-submit-session" onclick="submitSessionGrade('${gKey}')">✅ Submit Session Grades</button>
        </div>`;

    container.innerHTML = sessionInfoHtml + submittedBanner + phaseBarHtml + phasesHtml + submitHtml;
}

// ── Chip Scoring ─────────────────────────────────────────────────
window.setChipScore = (gKey, rk, mi, di, score, nDims, sid) => {
    const saved = JSON.parse(localStorage.getItem(gKey) || '{}');
    if (!saved[rk]) saved[rk] = {};
    if (!saved[rk][sid]) saved[rk][sid] = { dims: Array(nDims).fill(2), total: nDims * 2 };
    saved[rk][sid].dims[di] = score;
    saved[rk][sid]._touched = true;
    saved[rk][sid].total = saved[rk][sid].dims.reduce((a, b) => a + b, 0);
    localStorage.setItem(gKey, JSON.stringify(saved));

    // Update chip visual
    const safeKey = gKey.replace(/[^a-z0-9]/gi, '_');
    const cg = document.getElementById(`cg_${safeKey}_${rk}_${mi}_${di}`);
    if (cg) {
        cg.querySelectorAll('.chip-btn').forEach(btn => {
            const bScore = parseInt(btn.getAttribute('data-score'));
            btn.classList.toggle('active', bScore === score);
        });
    }
    // Update total
    const totalEl = document.getElementById(`st_total_${safeKey}_${rk}_${mi}`);
    if (totalEl) totalEl.textContent = `${saved[rk][sid].total}/${nDims * 4}`;

    // Remove untouched tag
    const row = document.getElementById(`grade-row_${safeKey}_${rk}_${mi}`);
    if (row) row.classList.remove('grade-row-untouched');
};

// ── Quick Fill Student ───────────────────────────────────────────
window.quickFillStudent = (gKey, rk, mi, score, nDims, sid) => {
    for (let di = 0; di < nDims; di++) {
        setChipScore(gKey, rk, mi, di, score, nDims, sid);
    }
    showToast(`Set all criteria to ${score} (${SCALE_LABELS[score]})`, 'info');
};

// ── Quick Fill Role ──────────────────────────────────────────────
window.quickFillRole = (gKey, rk, score, nDims) => {
    const teams = navState.teams;
    const sess = navState.calendarConfig.sessions.find(s => gKey.includes(`_S${s.sessNum}`));
    if (!sess) return;
    const teamIdx = rk === 'P' ? sess.presenterIdx : rk === 'TR' ? sess.reviewerIdx : sess.feedbackIdx;
    const team = teams[teamIdx];
    team.members.forEach((m, mi) => {
        for (let di = 0; di < nDims; di++) {
            setChipScore(gKey, rk, mi, di, score, nDims, m.id);
        }
    });
    showToast(`Set all ${RUBRICS[rk].label} students to ${score}`, 'success');
};

// ── Submit Session ───────────────────────────────────────────────
window.submitSessionGrade = (gKey) => {
    const saved = JSON.parse(localStorage.getItem(gKey) || '{}');
    saved._submitted = true;
    saved._submittedAt = new Date().toISOString();
    saved._submittedBy = currentUser ? currentUser.role : 'Faculty';
    localStorage.setItem(gKey, JSON.stringify(saved));
    showToast('✅ Session grades submitted successfully!', 'success');

    // Re-render to show submitted banner
    const dk = document.getElementById('grade-day-sel').value;
    const si = document.getElementById('grade-sess-sel').value;
    if (dk && si !== '') {
        const byDay = {};
        navState.calendarConfig.sessions.forEach(s => { if (!byDay[s.dateStr]) byDay[s.dateStr] = []; byDay[s.dateStr].push(s); });
        const sess = byDay[dk][si];
        const key = `${navState.dept.code}_${navState.batch.year}`;
        renderGradePhases(document.getElementById('grade-content-area'), sess, key);
    }
};

// ── Phase accordion toggle ───────────────────────────────────────
window.togglePhase = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const isHidden = el.style.display === 'none';
    el.style.display = isHidden ? 'block' : 'none';
    const rk = id.replace('phase-body-', '');
    const icon = document.getElementById('phase-toggle-' + rk);
    if (icon) icon.textContent = isHidden ? '▼' : '▶';
};

window.scrollToPhase = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

window.toggleRubricRef = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.classList.toggle('open');
    const icon = document.getElementById(id + '-icon');
    if (icon) icon.textContent = el.classList.contains('open') ? '▲' : '▼';
};


function renderReveal(container) {
    const deptCode = navState.dept;
    const batchYear = navState.batch;

    container.innerHTML = `
        ${renderStepWizard(4)}
        <div class="page-header" style="margin-bottom:2rem; text-align:center;">
            <div class="academic-crest" style="margin: 0 auto 1rem;">GOVERNMENT COLLEGE OF ENGINEERING, ERODE</div>
            <h2 class="page-title" style="justify-content:center;">
                ✨ Final Academic Reveal — ${getDeptShortName(deptCode)} · ${batchYear}
            </h2>
            <p class="page-subtitle" style="margin-left:0;">All assessments generated, sessions scheduled, and rosters finalized.</p>
        </div>

        <div class="card" style="max-width:800px; margin: 0 auto; text-align:center; padding: 3rem 2rem;">
            <div style="font-size:4rem; margin-bottom:1.5rem;">🎓</div>
            <h3 style="font-family:'Playfair Display', serif; color:var(--primary); font-size:1.8rem; margin-bottom:1rem;">Ready for Academic Cycle</h3>
            <p style="color:var(--text-mid); line-height:1.7; margin-bottom:2rem;">
                The SAM system has successfully mapped the Anna University syllabus to team-based mentorship sessions. 
                All rosters, schedules, and assignment topics are now locked and ready for the semester.
            </p>
            
            <div style="display:flex; justify-content:center; gap:12px;">
                <button class="btn btn-primary" onclick="window.print()" style="padding:10px 24px;">🖨️ Print Batch Record</button>
                <button class="btn btn-secondary" onclick="exportBatchData()" style="padding:10px 24px;">📊 Export Data Package</button>
            </div>
        </div>

        <div class="section-divider">Academic Summary</div>
        
        <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
            <div class="card text-center py-3">
                <div style="font-weight:700; color:var(--primary);">${navState.teams.length}</div>
                <div style="font-size:.65rem; color:var(--text-muted); text-transform:uppercase;">Teams Active</div>
            </div>
            <div class="card text-center py-3">
                <div style="font-weight:700; color:var(--secondary);">${navState.calendarConfig ? navState.calendarConfig.sessions.length : 0}</div>
                <div style="font-size:.65rem; color:var(--text-muted); text-transform:uppercase;">Scheduled Sessions</div>
            </div>
            <div class="card text-center py-3">
                <div style="font-weight:700; color:var(--accent);">${navState.assignConfig ? navState.assignConfig.generatedAssignments.length : 0}</div>
                <div style="font-size:.65rem; color:var(--text-muted); text-transform:uppercase;">Topics Generated</div>
            </div>
            <div class="card text-center py-3">
                <div style="font-weight:700; color:var(--primary);">COMPLETED</div>
                <div style="font-size:.65rem; color:var(--text-muted); text-transform:uppercase;">Status</div>
            </div>
        </div>
    `;
}

function exportBatchData() {
    showToast('Preparing academic data package...', 'info');
    setTimeout(() => {
        showToast('Data package ready for download!', 'success');
    }, 1500);
}

function moveAssignStep(n) {
    if (!navState.assignConfig) navState.assignConfig = {};
    navState.assignStep = n;
    render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function saveWizardUnitsAndProceed() {
    if (!navState.assignConfig) navState.assignConfig = {};
    const units = {};
    for (let u = 1; u <= 5; u++) {
        units[u] = {
            title: document.getElementById('unit-title-' + u)?.value || 'Unit ' + u,
            desc: document.getElementById('unit-desc-' + u)?.value || ''
        };
    }
    navState.assignConfig.units = units;
    const cos = {};
    ['CO1', 'CO2', 'CO3', 'CO4', 'CO5'].forEach(co => {
        cos[co] = document.getElementById('co-' + co)?.value || '';
    });
    navState.assignConfig.courseOutcomes = cos;
    moveAssignStep(4);
}

function toggleWizUnit(u) {
    const body = document.getElementById('unit-body-' + u);
    const exp = document.getElementById('unit-expand-' + u);
    if (!body) return;
    if (body.style.display === 'none') {
        body.style.display = 'flex';
        if (exp) exp.innerHTML = '&uarr; collapse';
    } else {
        body.style.display = 'none';
        if (exp) exp.innerHTML = '&darr; expand';
    }
}

function toggleAssignCard(i) {
    const body = document.getElementById('assign-body-' + i);
    const expand = document.getElementById('assign-expand-' + i);
    if (!body) return;
    const isOpen = body.classList.toggle('open');
    if (expand) expand.style.transform = isOpen ? 'rotate(180deg)' : '';
}

function generateEnrichedAssignment(unitNum, unitTitle, unitDesc, config, coKey, teamIdx, courseName = '') {
    const { assignType } = config;
    const typeLabel = { presentation: 'Team Presentation', case_study: 'Case Studies', problem_solving: 'Problem Solving', miniproject: 'Mini Project', practicals: 'Practicals' }[assignType] || 'Team Presentation';
    const dur = config.duration || '10-15 min';
    const descMap = {
        presentation: `Prepare and deliver a ${dur} live presentation on <strong>"${unitTitle}"</strong> from <strong>${courseName}</strong>. Topics must cover Anna University important questions, previous year board questions, and core concepts.`,
        case_study: `Analyze and present a comprehensive case study related to <strong>"${unitTitle}"</strong> from <strong>${courseName}</strong>. Research important Anna University case study topics from Google and propose analytical solutions. Duration: ${dur}.`,
        problem_solving: `Solve and present analytical problems based on <strong>"${unitTitle}"</strong> from <strong>${courseName}</strong>. Focus on Anna University repeated problems, numericals, derivations, or algorithmic challenges. Duration: ${dur}.`,
        miniproject: `Design, build or simulate a mini project based on Google research and Anna University important topics from <strong>"${unitTitle}"</strong> relevant to <strong>${courseName}</strong>. Present findings to the team. Duration: ${dur}.`,
        practicals: `Perform laboratory experiments related to <strong>"${unitTitle}"</strong> exactly as per the Anna University syllabus in <strong>${courseName}</strong>. Record observations and analyse results. Duration: ${dur}.`,
    };
    const objectiveMap = {
        presentation: `To understand and communicate key concepts of "${unitTitle}" from ${courseName}, with emphasis on Anna University syllabus topics and exam-relevant questions.`,
        case_study: `To research and evaluate Anna University important case studies related to "${unitTitle}" from ${courseName}, developing analytical thinking and problem-solving skills.`,
        problem_solving: `To apply theoretical knowledge and solve Anna University critical problems and derivations based on "${unitTitle}" from ${courseName}.`,
        miniproject: `To apply theoretical knowledge of "${unitTitle}" from ${courseName} in a practical, hands-on mini project based on Anna University important concepts.`,
        practicals: `To practically verify syllabus concepts of "${unitTitle}" through hands-on benchmark experiments in ${courseName}.`,
    };
    const deliverableMap = {
        presentation: [
            'Slide deck covering Anna University important questions.',
            `Live ${dur} presentation to the team.`,
            'Reference list citing syllabus and external resources.'
        ],
        case_study: [
            'Detailed case study report mapping real-world issues to Anna University topics.',
            `Live ${dur} presentation explaining problem and solution.`,
            'References to relevant Google research.'
        ],
        problem_solving: [
            'Typed or neatly written solutions to 3+ Anna University problems/derivations.',
            `Live ${dur} explanation of the problem-solving steps.`,
            'Correctness in applying formulas/theorems.'
        ],
        miniproject: [
            'Working prototype, simulation output or experimental data.',
            'Mini project report defining the Anna University concept targeted.',
            `Live ${dur} demonstration to reviewing team.`
        ],
        practicals: [
            'Completed observation book entry (aim, apparatus, procedure, result).',
            'Syllabus-aligned graphs/calculations.',
            'Viva responses covering theory.'
        ],
    };
    const criteriaMap = {
        presentation: [
            'Coverage of Anna University repeated questions (30%)',
            'Clarity of slides and visual aids (20%)',
            'Delivery, confidence and time management (25%)',
            'Handling of Q&A (25%)'
        ],
        case_study: [
            'Depth of Anna University case study research (30%)',
            'Logical flow and structural analysis (25%)',
            'Practical application of concepts (20%)',
            'Presentation clarity (25%)'
        ],
        problem_solving: [
            'Accuracy of derivations and Anna Univ problem solutions (40%)',
            'Step-by-step clarity (20%)',
            'Understanding of formulas (20%)',
            'Explanation to peers during presentation (20%)'
        ],
        miniproject: [
            'Working functionality based on Anna Univ syllabus (35%)',
            'Innovation and logic (25%)',
            'Documentation and report quality (20%)',
            'Demonstration skills (20%)'
        ],
        practicals: [
            'Successful execution of the experiment (40%)',
            'Knowledge of underlying concepts (viva) (30%)',
            'Observation quality and calculations (20%)',
            'Syllabus alignment (10%)'
        ],
    };
    const complexityCycle = ['Easy', 'Medium', 'Hard', 'Medium', 'Easy', 'Hard', 'Medium', 'Easy', 'Hard', 'Medium', 'Hard', 'Easy'];
    const usedComplexity = config.complexity === 'mixed'
        ? complexityCycle[teamIdx % complexityCycle.length]
        : config.complexity;
    return {
        assessId: 'ASSIGN_' + String(teamIdx + 1).padStart(3, '0'),
        unit: 'Unit ' + unitNum, unitTitle, title: unitTitle,
        co: coKey, complexity: usedComplexity, duration: config.duration, type: typeLabel,
        objective: objectiveMap[assignType] || objectiveMap.presentation,
        description: descMap[assignType] || descMap.presentation,
        deliverables: deliverableMap[assignType] || deliverableMap.presentation,
        criteria: criteriaMap[assignType] || criteriaMap.presentation,
    };
}

function generateAssignments() {
    if (!navState.assignConfig) navState.assignConfig = {};
    const cfg = navState.assignConfig;
    const typeEl = document.getElementById('wiz-type');
    cfg.assignType = typeEl ? typeEl.value : (cfg.assignType || 'presentation');
    cfg.complexity = document.getElementById('wiz-complexity')?.value || cfg.complexity || 'mixed';
    cfg.duration = document.getElementById('wiz-duration')?.value || cfg.duration || '15-20 min';

    // Read checked focus units (checkboxes)
    const cbAll = document.querySelectorAll('.focus-unit-cb');
    if (cbAll.length > 0) {
        const sel = Array.from(cbAll).filter(cb => cb.checked).map(cb => parseInt(cb.value));
        cfg.focusUnits = sel.length ? sel : [1, 2, 3, 4, 5];
    } else {
        cfg.focusUnits = cfg.focusUnits || [];
    }

    const teams = navState.teams || [];
    const numTeams = teams.length || 12;
    const deptCode = navState.dept;
    const batchYear = navState.batch;
    const units = cfg.units || {};
    const cos = cfg.courseOutcomes || { CO1: 'CO1', CO2: 'CO2', CO3: 'CO3', CO4: 'CO4', CO5: 'CO5' };
    const coKeys = Object.keys(cos);
    const useUnits = cfg.focusUnits && cfg.focusUnits.length ? cfg.focusUnits : [1, 2, 3, 4, 5];

    /* ── Try curated topic list from respective SUBJECTS first ── */
    const spec = getSubjectSpec(cfg.courseCode);

    /* ── If Practicals type → pull experiments from respective LABS, filtered by selected lab ── */
    let curatedList = null;
    const _labsGen = getLabsGen(deptCode);
    if (cfg.assignType === 'practicals' && _labsGen && spec && spec.semester) {
        const semLabs = _labsGen[spec.semester];
        if (semLabs && semLabs.length > 0) {
            // Read selected lab from dropdown (AU3611, AU3612, or 'all')
            const labSel = document.getElementById('wiz-lab-select');
            const selectedLab = labSel ? labSel.value : (cfg.selectedLab || 'all');
            cfg.selectedLab = selectedLab;

            curatedList = [];
            semLabs.forEach(lab => {
                if (selectedLab === 'all' || lab.code === selectedLab) {
                    (lab.experiments || []).forEach(exp => {
                        curatedList.push(lab.code + ': ' + exp);
                    });
                }
            });
            // Fallback: all labs if selection yields nothing
            if (curatedList.length === 0) {
                semLabs.forEach(lab => {
                    (lab.experiments || []).forEach(exp => curatedList.push(lab.code + ': ' + exp));
                });
            }
        }
    }

    /* ── For non-practicals: filter SYLLABUS_DATA by focusUnits AND complexity ── */
    if (!curatedList) {
        if (spec && spec.topics && spec.topics[cfg.assignType] && spec.topics[cfg.assignType].length > 0) {
            // First Priority: explicitly curated topics in SUBJECTS data matching the assignType
            curatedList = spec.topics[cfg.assignType];
        } else {
            // Second Priority: use generic SYLLABUS_DATA topics
            const isR2025 = batchYear >= 2029;
            const regulation = isR2025 ? 'R2025' : 'R2021';
            let syllTopics = (typeof SYLLABUS_DATA !== 'undefined' &&
                SYLLABUS_DATA[regulation] && SYLLABUS_DATA[regulation][deptCode])
                ? SYLLABUS_DATA[regulation][deptCode] : [];

            // Keep only topics from checked/selected units
            syllTopics = syllTopics.filter(t => useUnits.includes(t.unit));

            // Filter by complexity when not 'mixed'
            if (cfg.complexity !== 'mixed' && syllTopics.length > 0) {
                const complexFiltered = syllTopics.filter(t => t.complexity === cfg.complexity);
                // Only apply filter if we get at least one match; otherwise keep all focusUnit topics
                if (complexFiltered.length > 0) syllTopics = complexFiltered;
            }

            if (syllTopics.length > 0) {
                curatedList = syllTopics.map(t => t.title);
            }
        }
    }

    let pool = [];

    if (curatedList && curatedList.length > 0) {
        const coUnits = [1, 2, 3, 4, 5];
        for (let i = 0; i < curatedList.length; i++) {
            const uIdx = Math.floor(i / curatedList.length * 5);
            const uNum = coUnits[uIdx] || 1;
            // Only include this topic if its mapped unit is among selected focus units
            if (useUnits.includes(uNum)) {
                pool.push({
                    unitNum: uNum,
                    title: curatedList[i],
                    co: coKeys[(uNum - 1) % coKeys.length] || 'CO1'
                });
            }
        }
    } else {
        /* ── Fallback: derive topics only from selected unit descriptions ── */
        const allTopics = [];
        useUnits.forEach(u => {
            const uObj = units[u] || {};
            const uTitle = uObj.title || 'Unit ' + u;
            const uDesc = uObj.desc || '';
            let subtopics = [];
            if (uDesc.trim().length > 10) {
                subtopics = uDesc.split(/[-—–.,;]+/).map(s => s.trim()).filter(s => s.length > 5 && s.toLowerCase() !== 'and');
            }
            if (subtopics.length === 0) subtopics = [uTitle];
            subtopics.forEach(sub => {
                allTopics.push({ unitNum: u, title: sub, co: coKeys[(u - 1) % coKeys.length] || 'CO1' });
            });
        });
        if (allTopics.length > numTeams) {
            const buckets = Array.from({ length: numTeams }, () => []);
            allTopics.forEach((t, i) => {
                const bIdx = Math.min(Math.floor(i / (allTopics.length / numTeams)), numTeams - 1);
                buckets[bIdx].push(t);
            });
            buckets.forEach(b => { if (b.length > 0) pool.push({ unitNum: b[0].unitNum, title: b.map(x => x.title).join(' & '), co: b[0].co }); });
        } else {
            pool = allTopics;
        }
        if (pool.length === 0) useUnits.forEach(u => pool.push({ unitNum: u, title: (units[u] || {}).title || 'Unit ' + u, co: coKeys[(u - 1) % coKeys.length] || 'CO1' }));
    }

    const generated = [];
    for (let i = 0; i < numTeams; i++) {
        const topic = pool[i % pool.length];
        generated.push(generateEnrichedAssignment(topic.unitNum, topic.title, (units[topic.unitNum] || {}).desc || '', cfg, topic.co, i, cfg.courseName));
    }
    cfg.generatedAssignments = generated;
    navState.assignStep = 4;
    render();
    setTimeout(() => {
        const res = document.querySelector('.assign-result-grid');
        if (res) res.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
}

function exportAssignmentsCSV() {
    const cfg = navState.assignConfig || {};
    const assignments = cfg.generatedAssignments;
    if (!assignments || !assignments.length) { showToast('⚠️ Please generate assignments first.', 'warning'); return; }
    const deptCode = navState.dept, batchYear = navState.batch;
    let csv = 'Assignment ID,Team,Course Code,Course Name,Topic Title,Unit,Complexity,Course Outcome,Duration,Type,Objective\n';
    assignments.forEach((a, i) => {
        csv += [a.assessId, getTeamName(deptCode, i), cfg.courseCode || '', '"' + (cfg.courseName || '') + '"', '"' + a.title + '"', a.unit, a.complexity, a.co, a.duration, a.type, '"' + a.objective + '"'].join(',') + '\n';
    });
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = 'assignments_' + deptCode + '_' + batchYear + '_' + (cfg.courseCode || 'course') + '.csv'; a.click();
    URL.revokeObjectURL(url);
}

// ===== Team Locking =====
function toggleLockTeams(deptCode, batchYear) {
    if (!currentUser || !currentUser.canLock) return;
    const batchData = appData.batches.find(b => b.year === batchYear);
    if (!batchData) return;

    batchData.isLocked = !batchData.isLocked;

    // Check if we are in Edit Mode and it's being locked
    if (batchData.isLocked && navState.editMode) {
        navState.editMode = false;
    }

    render();
    if (batchData.isLocked) {
        showToast('🔒 Teams have been locked.', 'success');
    } else {
        showToast('🔓 Teams have been unlocked.', 'info');
    }
}


function openSyllabusPdf(path) {
    if (!path) { showToast('⚠️ Syllabus PDF not available for this regulation.', 'error'); return; }
    window.open(path, '_blank');
}

// ===== Level 4: SAC Coordinators View =====
async function renderSac(container) {
    container.innerHTML = `
        <div class="page-header">
            <h2 class="page-title">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 00-3-3.87"/>
                    <path d="M16 3.13a4 4 0 010 7.75"/>
                </svg>
                Student Alumni Coordinators (SAC)
            </h2>
            <p class="page-subtitle">Contact details for department coordinators (2027, 2028, 2029 Batches)</p>
        </div>

        <div id="sac-loading" style="text-align:center; padding:3rem;">
            <div class="loader" style="margin:0 auto 1rem;"></div>
            <p style="color:#8C7B6B">Loading coordinator data...</p>
        </div>
        <div id="sac-content" style="display:none"></div>
    `;

    const sacLoading = document.getElementById('sac-loading');
    const sacContent = document.getElementById('sac-content');

    if (isBackendAvailable()) {
        try {
            const resp = await fetch(API_BASE + '/api/sacs');
            if (!resp.ok) throw new Error('Failed to fetch SAC data');
            const sacs = await resp.json();
            renderSacList(sacs);
        } catch (err) {
            console.warn('⚠️ SAC backend unreachable, using static fallback');
            renderSacList(typeof SAC_DATA !== 'undefined' ? SAC_DATA : []);
        }
    } else {
        console.info('🌐 Using static SAC data');
        renderSacList(typeof SAC_DATA !== 'undefined' ? SAC_DATA : []);
    }
}

function renderSacList(sacs) {
    const loader = document.getElementById('sac-loading');
    const content = document.getElementById('sac-content');
    if (loader) loader.style.display = 'none';
    if (!content) return;
    content.style.display = 'block';

    if (!sacs || sacs.length === 0) {
        content.innerHTML = `<div style="text-align:center; padding:2rem; color:#8C7B6B;">No coordinator data available in offline mode.</div>`;
        return;
    }

    // Group by department
    const grouped = {};
    sacs.forEach(s => {
        if (!grouped[s.department]) grouped[s.department] = [];
        grouped[s.department].push(s);
    });

    let html = '';
    const depts = Object.keys(grouped).sort();

    depts.forEach(dept => {
        const deptSacs = grouped[dept];
        html += `
                    <div class="card" style="margin-bottom:2rem; overflow:hidden; border-top:4px solid var(--primary);">
                        <div style="background:var(--bg-main); padding:12px 18px; border-bottom:1px solid var(--border-strong); display:flex; justify-content:space-between; align-items:center;">
                            <h3 style="margin:0; font-size:1.1rem; color:var(--primary); font-family:'Playfair Display', serif;">${getDeptName(dept)} (${dept})</h3>
                            <span class="chip chip-sac" style="background:#E8F5EE; color:#2D6A4F;">${deptSacs.length} SACs</span>
                        </div>
                        <div class="grade-matrix-wrap">
                            <table class="dt" style="width:100%">
                                <thead>
                                    <tr>
                                        <th style="background:var(--primary); color:#fff;">Name</th>
                                        <th style="background:var(--primary); color:#fff;">Batch</th>
                                        <th style="background:var(--primary); color:#fff;">Gender</th>
                                        <th style="background:var(--primary); color:#fff;">WhatsApp</th>
                                        <th style="background:var(--primary); color:#fff;">Email</th>
                                        <th style="background:var(--primary); color:#fff;">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${deptSacs.map(s => `
                                        <tr>
                                            <td style="font-weight:700; color:var(--primary)">${s.student_name}</td>
                                            <td>${s.passing_year}</td>
                                            <td>
                                                <span class="chip ${s.gender === 'M' ? 'chip-m' : 'chip-f'}">${s.gender}</span>
                                            </td>
                                            <td>
                                                <a href="${s.whatsapp_link}" target="_blank" class="btn btn-ghost" style="color:#2D6A4F; font-size:.7rem; padding:4px 8px; border:1px solid var(--border-strong);">
                                                    🟢 WhatsApp
                                                </a>
                                            </td>
                                            <td style="font-size:.7rem; color:#5C4F3D;">${s.email || 'N/A'}</td>
                                            <td>
                                                <span class="badge" style="background:#E8F5EE; color:#2D6A4F; font-size:.65rem;">ACTIVE</span>
                                            </td>
                                        </tr>
                                    `).join('')}
                                </tbody>
                            </table>
                        </div>
                    </div>
                `;
    });
    content.innerHTML = html;
}
