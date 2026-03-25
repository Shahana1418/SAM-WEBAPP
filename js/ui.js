/**
 * SAM Platform — UI Bridge & New Design Renderer  v2.0
 * Adapts the legacy app.js render calls to the new Premium Dark UI
 */

/* ══════════════════════════════════════════════════════════
   SIDEBAR / MENU CONTROLS
══════════════════════════════════════════════════════════ */
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    sidebar.classList.toggle('open');
    overlay.classList.toggle('open');
}
function closeSidebar() {
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('sidebar-overlay').classList.remove('open');
}
function closeSidebarOnMobile() {
    if (window.innerWidth < 1024) closeSidebar();
}
function handleModalBackdropClick(e) {
    if (e.target.id === 'admin-modal') closeAdminLogin();
}

/* ══════════════════════════════════════════════════════════
   OVERRIDE updateUserBadge — syncs all header + sidebar buttons
══════════════════════════════════════════════════════════ */
const _origUpdateUserBadge = window.updateUserBadge;
window.updateUserBadge = function() {
    const badge        = document.getElementById('user-badge');
    const facultyBtns  = document.querySelectorAll('#faculty-login-btn, #faculty-login-btn-header');
    const adminBtns    = document.querySelectorAll('#admin-login-btn, #admin-login-btn-header');
    const logoutBtns   = document.querySelectorAll('#logout-btn, #logout-btn-header');
    const userNameEl   = document.getElementById('sidebar-user-name');
    const userRoleEl   = document.getElementById('sidebar-user-role');

    if (currentUser) {
        if (badge) {
            badge.innerHTML = `<span>🔑</span> ${currentUser.role}`;
            badge.style.display = 'inline-flex';
        }
        facultyBtns.forEach(b => { if(b) b.style.display='none'; });
        adminBtns.forEach(b =>   { if(b) b.style.display='none'; });
        logoutBtns.forEach(b =>  { if(b) b.style.display='inline-flex'; });
        if (userNameEl) userNameEl.textContent = currentUser.role;
        if (userRoleEl) userRoleEl.textContent = currentUser.dept ? `Dept: ${currentUser.dept}` : 'All Departments';
        const av = document.querySelector('.user-avatar');
        if (av) av.textContent = currentUser.role[0];
    } else {
        if (badge) badge.style.display = 'none';
        facultyBtns.forEach(b => { if(b) b.style.display='inline-flex'; });
        adminBtns.forEach(b =>   { if(b) b.style.display='inline-flex'; });
        logoutBtns.forEach(b =>  { if(b) b.style.display='none'; });
        if (userNameEl) userNameEl.textContent = 'Not logged in';
        if (userRoleEl) userRoleEl.textContent = 'Guest';
        const av = document.querySelector('.user-avatar');
        if (av) av.textContent = '?';
    }
};

/* ══════════════════════════════════════════════════════════
   OVERRIDE renderCollege — New Premium College Page
══════════════════════════════════════════════════════════ */
window.renderCollege = function(container) {
    let totalStudents = 0, totalMales = 0, totalFemales = 0;
    const deptSet = new Set();

    appData.batches.forEach(b => {
        b.students.forEach(s => {
            totalStudents++;
            if (s.gender === 'M') totalMales++;
            if (s.gender === 'F') totalFemales++;
        });
        b.departments.forEach(d => { if (d.totalStudents > 0) deptSet.add(d.code); });
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
    if (currentUser && currentUser.dept) {
        activeDepts = activeDepts.filter(d => d.code === currentUser.dept);
        if (activeDepts.length === 1) { navigateTo('department', activeDepts[0].code); return; }
    }

    const deptColors = { ATE:'--dept-ate', CSE:'--dept-cse', CVE:'--dept-cve', ECE:'--dept-ece', EEE:'--dept-eee', IMT:'--dept-imt', MCE:'--dept-mce', CDS:'--dept-cds' };
    const deptIcons  = { ATE:'🚗', CSE:'💻', CVE:'🏗️', ECE:'📡', EEE:'⚡', IMT:'🌐', MCE:'⚙️', CDS:'📊' };

    const deptCards = activeDepts.map(d => {
        const colorVar = deptColors[d.code] || '--primary';
        const icon = deptIcons[d.code] || '🎓';
        const gendPct = d.students ? Math.round(d.females / d.students * 100) : 0;
        return `
        <div class="dept-card" style="--dept-color:var(${colorVar})" onclick="navigateTo('department','${d.code}')">
            <div class="dept-card-icon">${icon}</div>
            <div class="dept-card-code">${d.code}</div>
            <div class="dept-card-name">${d.name}</div>
            <div class="dept-card-stats">
                <div class="dept-stat-item">
                    <div class="dept-stat-val">${d.students}</div>
                    Students
                </div>
                <div class="dept-stat-item">
                    <div class="dept-stat-val">${d.batches}</div>
                    Batches
                </div>
                <div class="dept-stat-item">
                    <div class="dept-stat-val">${gendPct}%</div>
                    Female
                </div>
            </div>
            <div class="dept-card-arrow">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
            </div>
        </div>`;
    }).join('');

    container.innerHTML = `
    <div class="page-header">
        <div class="hero">
            <div class="hero-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="12" height="12"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
                Government College of Engineering, Erode
            </div>
            <h1 class="hero-title">Student Activity<br><span>Monitoring Platform</span></h1>
            <p class="hero-sub">Team-based academic mentorship, peer assessment, and session management — all in one place.</p>
            <div class="hero-actions">
                <button class="btn btn-primary" onclick="openCycleCreateModal()">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                    New Academic Cycle
                </button>
                <button class="btn btn-secondary" onclick="toggleCycleList()">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                    View Cycles
                </button>
                <button class="btn btn-secondary" onclick="navigateTo('sac')">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
                    SAC Coordinators
                </button>
            </div>
        </div>
    </div>

    <!-- Stats -->
    <div class="stats-grid">
        <div class="stat-card c-indigo">
            <div class="stat-value">${totalStudents}</div>
            <div class="stat-label">Total Students</div>
            <div class="stat-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/></svg></div>
        </div>
        <div class="stat-card c-cyan">
            <div class="stat-value">${totalMales}</div>
            <div class="stat-label">Male Students</div>
            <div class="stat-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="4"/><path d="M20 21a8 8 0 10-16 0"/></svg></div>
        </div>
        <div class="stat-card c-violet">
            <div class="stat-value">${totalFemales}</div>
            <div class="stat-label">Female Students</div>
            <div class="stat-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="4"/><path d="M20 21a8 8 0 10-16 0"/></svg></div>
        </div>
        <div class="stat-card c-emerald">
            <div class="stat-value">${activeDepts.length}</div>
            <div class="stat-label">Departments</div>
            <div class="stat-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg></div>
        </div>
    </div>

    <!-- Academic Cycles -->
    <div class="card mb-6">
        <div class="flex items-center justify-between mb-3">
            <div>
                <div class="section-title">📅 Academic Cycles</div>
                <div class="section-sub">Manage semesters, exam periods, and grading windows.</div>
            </div>
            <div class="flex gap-2">
                <button class="btn btn-sm btn-primary" onclick="openCycleCreateModal()">+ New</button>
                <button class="btn btn-sm btn-secondary" id="btn-toggle-cycles" onclick="toggleCycleList()">View All</button>
            </div>
        </div>
        <div id="home-cycle-display"></div>
        <div id="home-cycle-list" style="display:none;margin-top:12px;"></div>
    </div>

    <!-- Departments -->
    <div class="section-divider">Select Department</div>
    <div class="dept-grid">${deptCards}</div>
    `;

    renderCycleDisplay();
};

/* ══════════════════════════════════════════════════════════
   OVERRIDE renderDepartment
══════════════════════════════════════════════════════════ */
window.renderDepartment = function(container) {
    const deptCode = navState.dept;
    const deptColors = { ATE:'var(--dept-ate)', CSE:'var(--dept-cse)', CVE:'var(--dept-cve)', ECE:'var(--dept-ece)', EEE:'var(--dept-eee)', IMT:'var(--dept-imt)', MCE:'var(--dept-mce)', CDS:'var(--dept-cds)' };
    const deptIcons  = { ATE:'🚗', CSE:'💻', CVE:'🏗️', ECE:'📡', EEE:'⚡', IMT:'🌐', MCE:'⚙️', CDS:'📊' };
    const color = deptColors[deptCode] || 'var(--primary)';
    const icon  = deptIcons[deptCode]  || '🎓';

    // Aggregate per batch
    const batchCards = appData.batches.map(b => {
        const deptInfo = b.departments.find(d => d.code === deptCode);
        if (!deptInfo || deptInfo.totalStudents === 0) return '';
        const students = b.students.filter(s => s.department === deptCode && s.batch === b.year);
        const males   = students.filter(s => s.gender === 'M').length;
        const females = students.filter(s => s.gender === 'F').length;
        const info = getBatchAcademicInfo(b.year);
        return `
        <div class="batch-pill" onclick="navigateTo('batch','${deptCode}',${b.year})">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
            <div>
                <div style="font-size:.82rem;font-weight:700;color:var(--text)">${b.year} Batch</div>
                <div style="font-size:.68rem;color:var(--text-muted)">${info.yearSuffix} Year · Sem ${info.semester} · ${students.length} students</div>
            </div>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14" style="margin-left:auto;color:var(--text-dim)"><polyline points="9 18 15 12 9 6"/></svg>
        </div>`;
    }).join('');

    container.innerHTML = `
    <div class="page-header">
        <div class="page-header-row">
            <div class="flex items-center gap-3">
                <div style="font-size:2.5rem">${icon}</div>
                <div>
                    <div class="page-title" style="color:${color}">${getDeptName(deptCode)}</div>
                    <div class="page-sub font-mono">${deptCode} Department · GCE Erode</div>
                </div>
            </div>
            <button class="btn btn-secondary" onclick="navigateTo('college')">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
                Back
            </button>
        </div>
    </div>
    <div class="section-divider">Select Batch</div>
    <div class="flex flex-wrap gap-3">${batchCards || '<div class="text-sm text-muted">No batches found.</div>'}</div>
    `;
};

/* ══════════════════════════════════════════════════════════
   OVERRIDE renderBatch — Premium Batch Page
══════════════════════════════════════════════════════════ */
window.renderBatch = function(container) {
    const deptCode  = navState.dept;
    const batchYear = navState.batch;
    const batchData = appData.batches.find(b => b.year === batchYear);
    if (!batchData) { container.innerHTML = '<div class="text-muted text-sm">Batch data not found.</div>'; return; }

    const students = batchData.students.filter(s => s.department === deptCode);
    const males    = students.filter(s => s.gender === 'M').length;
    const females  = students.filter(s => s.gender === 'F').length;
    const info     = getBatchAcademicInfo(batchYear);

    const canGenerate = !currentUser || currentUser.canGenerate !== false;

    container.innerHTML = `
    <div class="page-header">
        <div class="page-header-row">
            <div>
                <div class="page-title">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
                    ${batchYear} Batch — ${getDeptName(deptCode)}
                </div>
                <div class="page-sub">${info.yearSuffix} Year · Semester ${info.semester} · ${students.length} students enrolled</div>
            </div>
            <button class="btn btn-secondary" onclick="navigateTo('department','${deptCode}')">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
                Back
            </button>
        </div>
    </div>

    <!-- Quick stats -->
    <div class="stats-grid mb-6" style="grid-template-columns:repeat(auto-fill,minmax(120px,1fr))">
        <div class="stat-card c-indigo">
            <div class="stat-value">${students.length}</div>
            <div class="stat-label">Students</div>
        </div>
        <div class="stat-card c-cyan">
            <div class="stat-value">${males}</div>
            <div class="stat-label">Male</div>
        </div>
        <div class="stat-card c-violet">
            <div class="stat-value">${females}</div>
            <div class="stat-label">Female</div>
        </div>
        <div class="stat-card c-amber">
            <div class="stat-value">${info.semester}</div>
            <div class="stat-label">Semester</div>
        </div>
    </div>

    ${canGenerate ? `
    <!-- Team Generation -->
    <div class="card mb-6">
        <div class="section-title mb-2">⚡ Generate Teams</div>
        <div class="section-sub mb-4">Create balanced teams using gender-balanced or CGPA-based algorithms. Teams will be divisible by 3 with 4–5 members each.</div>
        <div class="tab-bar" id="gen-tab-bar">
            <button class="tab-btn active" onclick="selectGenMode('random', this)">🔀 Random Balanced</button>
            <button class="tab-btn" onclick="selectGenMode('cgpa', this)">📊 CGPA Based</button>
            <button class="tab-btn" onclick="selectGenMode('manual', this)">✋ Manual Arrange</button>
        </div>
        <div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap">
            <button class="btn btn-primary btn-lg" id="gen-teams-btn"
                onclick="generateAndShowTeams('${deptCode}', ${batchYear}, 5, currentGenMode)">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
                Generate Teams
            </button>
            <span class="text-sm text-muted">${students.length} students → ~${Math.ceil(students.length / 5)} teams of 4–5</span>
        </div>
    </div>
    ` : '<div class="info-banner"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>Login as Faculty or Admin to generate teams.</div>'}

    <!-- Student Roster -->
    <div class="card">
        <div class="flex items-center justify-between mb-3">
            <div class="section-title">👥 Student Roster</div>
            <span class="badge" style="background:var(--primary)20;color:var(--primary)">${students.length} students</span>
        </div>
        <div class="dt-wrap">
            <table class="dt">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>CGPA</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    ${students.map((s, i) => `
                    <tr>
                        <td class="text-muted text-xs">${i + 1}</td>
                        <td class="font-mono text-xs" style="color:var(--text-mid)">${s.id}</td>
                        <td style="font-weight:600">${s.name}</td>
                        <td><span class="chip ${s.gender === 'M' ? 'chip-m' : 'chip-f'}">${s.gender}</span></td>
                        <td class="font-mono text-xs">${s.cgpa !== null && s.cgpa !== undefined ? s.cgpa.toFixed(2) : '—'}</td>
                        <td class="text-xs text-muted">${s.email || '—'}</td>
                    </tr>`).join('')}
                </tbody>
            </table>
        </div>
    </div>`;

    // Set currentGenMode global
    window.currentGenMode = 'random';
};

window.selectGenMode = function(mode, btn) {
    window.currentGenMode = mode;
    document.querySelectorAll('#gen-tab-bar .tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
};

/* ══════════════════════════════════════════════════════════
   OVERRIDE renderTeams
══════════════════════════════════════════════════════════ */
window.renderTeams = function(container) {
    const teams = navState.teams;
    const deptCode  = navState.dept;
    const batchYear = navState.batch;

    if (!teams || teams.length === 0) {
        container.innerHTML = `
        <div class="card text-center" style="padding:48px">
            <div style="font-size:3rem;margin-bottom:16px">⚠️</div>
            <div class="section-title">No teams found</div>
            <div class="section-sub">Please go back and generate teams first.</div>
            <button class="btn btn-primary" style="margin-top:16px" onclick="navigateTo('batch','${deptCode}',${batchYear})">← Generate Teams</button>
        </div>`;
        return;
    }

    const batchData = appData.batches.find(b => b.year === batchYear);
    const isLocked  = batchData && batchData.isLocked;
    const totalStudents = teams.reduce((a, t) => a + (t.members ? t.members.length : 0), 0);

    const teamCards = teams.map((t, i) => {
        const members = t.members || [];
        return `
        <div class="team-card">
            <div class="team-card-header">
                <div>
                    <div class="team-name">${t.name || 'Team ' + (i+1)}</div>
                    <div style="font-size:.65rem;color:var(--text-muted);margin-top:2px">${members.length} members</div>
                </div>
                <span class="team-badge">T-${i+1}</span>
            </div>
            <div class="team-card-body">
                ${members.map(m => `
                <div class="team-member">
                    <div class="member-avatar ${m.gender === 'M' ? 'm' : 'f'}">${m.name ? m.name[0] : '?'}</div>
                    <div class="member-name">${m.name}</div>
                    <div class="member-id">${m.id}</div>
                    <span class="chip ${m.gender === 'M' ? 'chip-m' : 'chip-f'}" style="font-size:.6rem">${m.gender}</span>
                </div>`).join('')}
            </div>
        </div>`;
    }).join('');

    container.innerHTML = `
    <div class="page-header">
        <div class="page-header-row">
            <div>
                <div class="page-title">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
                    Teams — ${getDeptName(deptCode)} · ${batchYear}
                </div>
                <div class="page-sub">${teams.length} teams · ${totalStudents} students · Formation: ${navState.formationMode || 'random'}</div>
            </div>
            <div class="flex gap-2 flex-wrap">
                ${isLocked ? `<span class="chip chip-locked">🔒 Locked</span>` : ''}
                ${currentUser && currentUser.canGenerate ? `
                <button class="btn btn-secondary" onclick="navigateTo('batch','${deptCode}',${batchYear})">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="1" y1="4" x2="1" y2="19"/><line x1="23" y1="4" x2="23" y2="19"/><path d="M4 4h16a2 2 0 012 2v6a10 10 0 01-10 10A10 10 0 012 12V6a2 2 0 012-2z"/></svg>
                    Regenerate
                </button>
                <button class="btn btn-primary" onclick="navigateToAssessments()">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                    Assign Topics
                </button>
                <button class="btn btn-secondary" onclick="navigateToSessions()">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                    Schedule Sessions
                </button>` : ''}
            </div>
        </div>
    </div>
    <div class="teams-grid">${teamCards}</div>`;
};

/* ══════════════════════════════════════════════════════════
   OVERRIDE isBackendAvailable
══════════════════════════════════════════════════════════ */
window.isBackendAvailable = function() {
    return window.location.hostname === 'localhost' && window.location.port === '8080';
};

/* ══════════════════════════════════════════════════════════
   CYCLE DISPLAY — new style
══════════════════════════════════════════════════════════ */
const _origRenderCycleDisplay = window.renderCycleDisplay;
window.renderCycleDisplay = function() {
    const ac = getActiveCycle();
    const cDisp = document.getElementById('home-cycle-display');
    if (!cDisp) return;

    if (ac) {
        cDisp.innerHTML = `
        <div class="cycle-card">
            <div class="cycle-dot"></div>
            <div style="flex:1">
                <div style="font-weight:700;color:var(--text);font-size:.88rem">${ac.name}</div>
                <div style="font-size:.72rem;color:var(--text-muted);margin-top:2px">${ac.startDate} → ${ac.endDate}</div>
            </div>
            <span class="chip chip-active">Active</span>
        </div>`;
    } else {
        cDisp.innerHTML = `<div class="text-sm text-muted" style="padding:8px 0;font-style:italic">No active academic cycle. Create one to scope teams and sessions.</div>`;
    }
};

/* ══════════════════════════════════════════════════════════
   CYCLE MODAL — new dark style
══════════════════════════════════════════════════════════ */
window.openCycleCreateModal = function() {
    let m = document.getElementById('cycle-modal');
    if (!m) {
        m = document.createElement('div');
        m.id = 'cycle-modal';
        m.className = 'modal-backdrop';
        m.style.display = 'none';
        m.onclick = (e) => { if(e.target === m) closeCycleModal(); };
        m.innerHTML = `
        <div class="modal-box">
            <div class="modal-header">
                <div class="modal-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                </div>
                <div>
                    <div class="modal-title">Create Academic Cycle</div>
                    <div class="modal-sub">Define a new semester or exam period</div>
                </div>
                <button class="modal-close" onclick="closeCycleModal()">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                </button>
            </div>
            <div class="modal-body">
                <div id="cycle-err" class="form-error" style="display:none;margin-bottom:12px"></div>
                <div class="form-group">
                    <label class="form-label">Cycle Name</label>
                    <input type="text" id="cycle-name" class="form-input" placeholder="e.g. Even Semester 2026">
                </div>
                <div class="grid-2">
                    <div class="form-group">
                        <label class="form-label">Start Date</label>
                        <input type="date" id="cycle-start" class="form-input">
                    </div>
                    <div class="form-group">
                        <label class="form-label">End Date</label>
                        <input type="date" id="cycle-end" class="form-input">
                    </div>
                </div>
                <div class="flex gap-2 justify-between" style="margin-top:8px">
                    <button class="btn btn-secondary" onclick="closeCycleModal()">Cancel</button>
                    <button class="btn btn-primary" onclick="saveCycle()">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>
                        Save Cycle
                    </button>
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
};

window.closeCycleModal = function() {
    const m = document.getElementById('cycle-modal');
    if (m) m.style.display = 'none';
};

/* ══════════════════════════════════════════════════════════
   INIT
══════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
    // keyboard close
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') { closeSidebar(); closeAdminLogin(); closeCycleModal(); }
        if (e.key === 'Enter' && document.getElementById('admin-modal').style.display !== 'none') {
            attemptLogin();
        }
    });
});
