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
window.toggleRoleDropdown = function(e) {
    if (e) e.stopPropagation();
    const drop = document.getElementById('role-dropdown');
    if (drop) {
        drop.style.display = drop.style.display === 'none' ? 'block' : 'none';
    }
};

document.addEventListener('click', (e) => {
    const drop = document.getElementById('role-dropdown');
    if (drop && !e.target.closest('#login-dropdown-container')) {
        drop.style.display = 'none';
    }
});

const _origUpdateUserBadge = window.updateUserBadge;
window.updateUserBadge = function() {
    const badge        = document.getElementById('user-badge');
    const headerDrop   = document.getElementById('login-dropdown-container');
    const sidebarAuth  = document.getElementById('sidebar-auth-buttons');
    const logoutBtns   = document.querySelectorAll('#logout-btn, #logout-btn-header');
    const userNameEl   = document.getElementById('sidebar-user-name');
    const userRoleEl   = document.getElementById('sidebar-user-role');

    if (currentUser) {
        if (badge) {
            badge.innerHTML = `<span>🔑</span> ${currentUser.role}`;
            badge.style.display = 'inline-flex';
        }
        if (headerDrop) headerDrop.style.display = 'none';
        if (sidebarAuth) sidebarAuth.style.display = 'none';
        logoutBtns.forEach(b =>  { if(b) b.style.display='inline-flex'; });
        
        if (userNameEl) userNameEl.textContent = currentUser.role;
        if (userRoleEl) userRoleEl.textContent = currentUser.dept ? `Dept: ${currentUser.dept}` : 'All Departments';
        const av = document.querySelector('.user-avatar');
        if (av) av.textContent = currentUser.role[0];
    } else {
        if (badge) badge.style.display = 'none';
        if (headerDrop) headerDrop.style.display = 'block';
        if (sidebarAuth) sidebarAuth.style.display = 'block';
        logoutBtns.forEach(b =>  { if(b) b.style.display='none'; });
        
        if (userNameEl) userNameEl.textContent = 'Not logged in';
        if (userRoleEl) userRoleEl.textContent = 'Guest';
        const av = document.querySelector('.user-avatar');
        if (av) av.textContent = '?';
    }
};



window.openLoginModal = function(role) {
    selectedLoginRole = role;
    const err = document.getElementById('login-error');
    if (err) err.style.display = 'none';

    const unGroup = document.getElementById('username-group');
    const pwField = document.getElementById('admin-password');
    const unField = document.getElementById('admin-username');
    const modal   = document.getElementById('admin-modal');

    if (role === 'Student') {
        // STUDENT: username (Roll No) + password (DOB)
        document.getElementById('login-modal-title').textContent = 'Student Login';
        document.getElementById('login-modal-subtitle').textContent = 'Enter your Roll No and Date of Birth';
        if (unGroup) unGroup.style.display = 'block';
        if (unField) { unField.value = ''; unField.placeholder = 'e.g. 23CSE12'; }
        if (pwField) { pwField.value = ''; pwField.placeholder = 'Date of Birth (DD-MM-YYYY)'; }
    } else {
        // ALL OTHER ROLES: password only
        document.getElementById('login-modal-title').textContent = role + ' Login';
        document.getElementById('login-modal-subtitle').textContent = 'Enter ' + role + ' password to continue';
        if (unGroup) unGroup.style.display = 'none';
        if (pwField) { pwField.value = ''; pwField.placeholder = 'Enter password'; }
    }

    if (typeof closeSidebar === 'function') closeSidebar();
    if (modal) modal.style.display = 'flex';
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

    const facList = (typeof FACULTY_DATA !== 'undefined' ? FACULTY_DATA : []).filter(f => f.dept === deptCode && f.name !== 'TBD');
    const facCards = facList.map(f => {
        const cls = f.role === 'HOD' ? 'role-hod' : 'role-staff';
        const icon = f.role === 'HOD' ? `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>` 
                                      : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`;
        return `
        <div class="profile-card ${cls}">
            <div class="profile-card-top">
                <div class="profile-avatar">${f.name.charAt(0)}</div>
                <div class="profile-info">
                    <div class="profile-name">${f.name}</div>
                    <div class="profile-role">${icon} ${f.role}</div>
                </div>
                <div class="profile-chevron"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><polyline points="9 18 15 12 9 6"/></svg></div>
            </div>
            <div class="profile-card-bottom">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                ${f.email || 'No email provided'}
            </div>
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
    <div class="flex flex-wrap gap-3 mb-6">${batchCards || '<div class="text-sm text-muted">No batches found.</div>'}</div>
    
    <div class="section-divider mt-8">Faculty — Select A Profile To Continue</div>
    <div class="grid-2 mt-4">${facCards || '<div class="text-sm text-muted">No faculty profiles found.</div>'}</div>
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
            <button class="btn btn-secondary" onclick="${currentUser && currentUser.role === 'Student' ? 'navigateTo(\'selection\')' : `navigateTo('department','${deptCode}')`}">
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

    ${(() => {
        const sacList = (typeof SAC_DATA !== 'undefined' ? SAC_DATA : []).filter(s => s.dept === deptCode && s.batch == batchYear && s.name !== 'TBD');
        if (!sacList.length) return '';
        const sacCards = sacList.map(s => `
        <div class="profile-card role-sac">
            <div class="profile-card-top">
                <div class="profile-avatar">${s.name.charAt(0)}</div>
                <div class="profile-info">
                    <div class="profile-name">${s.name}</div>
                    <div class="profile-role">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                        SAC Coordinator
                    </div>
                </div>
            </div>
            <div class="profile-card-bottom">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                ${s.email || 'No email provided'}
            </div>
        </div>`).join('');
        return `<div class="section-divider mt-4">SAC Coordinators</div><div class="grid-2 mt-4 mb-6">${sacCards}</div>`;
    })()}

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
                    <div class="team-name" style="font-size:1.15rem;">${t.name || getTeamName(deptCode, i)}</div>
                    <div style="font-size:.65rem;color:var(--text-muted);margin-top:2px">${members.length} members</div>
                </div>
                <span class="team-badge">${deptCode}-${i+1}</span>
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
            ${isLocked ? `<span class="chip chip-locked">🔒 Locked</span>` : ''}
        </div>
        ${currentUser && currentUser.canGenerate ? `
        <div class="flex gap-3 flex-wrap mt-4">
            <button class="btn btn-secondary" style="background:#fff; border-color:var(--border-strong);" onclick="navigateTo('batch','${deptCode}',${batchYear})">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>
                Regenerate
            </button>
            <button class="btn btn-primary" onclick="navigateToAssessments()">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                Assign Topics
            </button>
            <button class="btn btn-secondary" style="background:#fff; border-color:var(--border-strong);" onclick="navigateToSessions()">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                Schedule Sessions
            </button>
        </div>` : ''}
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
   OVERRIDE SAC RENDER
══════════════════════════════════════════════════════════ */
window.renderSac = async function(container) {
    container.innerHTML = `
    <div class="page-header">
        <div class="page-title">🤝 Student Alumni Coordinators</div>
        <div class="page-subtitle">Department representatives and activity facilitators.</div>
    </div>
    <div id="sac-content"></div>`;
    
    // We already loaded data/sac_data.js in index.html which defines SAC_DATA
    if (typeof SAC_DATA !== 'undefined' && SAC_DATA.length > 0) {
        window.renderSacList(SAC_DATA);
    } else {
        document.getElementById('sac-content').innerHTML = `
        <div class="card text-center p-6">
            <div class="text-muted text-sm my-4">No SAC data found.</div>
        </div>`;
    }
};

window.renderSacList = function(sacs) {
    const content = document.getElementById('sac-content');
    if (!content) return;

    // Group sacs by department
    const grouped = {};
    sacs.forEach(s => {
        // Map data/sac_data.js format
        const d = s.dept || s.department || 'Other';
        if (!grouped[d]) grouped[d] = [];
        grouped[d].push(s);
    });

    const depts = Object.keys(grouped).sort();
    
    const html = depts.map(dept => {
        const deptSacs = grouped[dept];
        return `
        <div class="card mb-6" style="padding:0; overflow:hidden;">
            <div class="flex items-center justify-between" style="padding: 16px 20px; background: var(--surface-inset); border-bottom: 1px solid var(--border);">
                <div class="flex items-center gap-3">
                    <h3 class="font-bold" style="color:var(--text-main); font-family:'Playfair Display', serif; font-size:1.1rem;">${window.getDeptName ? window.getDeptName(dept) : dept} (${dept})</h3>
                    <span class="chip chip-m" style="background:#e0e7ff; color:#4338ca;">${deptSacs.length} Co-ords</span>
                </div>
            </div>
            
            <div style="overflow-x:auto;">
                <table class="dt">
                    <thead>
                        <tr>
                            <th>Roll No</th>
                            <th>Name</th>
                            <th>Batch</th>
                            <th>Gender</th>
                            <th>Contact</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${deptSacs.map(s => `
                        <tr>
                            <td class="font-mono text-sm text-dim">${s.roll || '—'}</td>
                            <td class="font-bold" style="color:var(--text-main);">${s.name || s.student_name}</td>
                            <td>${s.batch || s.passing_year}</td>
                            <td><span class="chip ${s.gender === 'M' ? 'chip-m' : 'chip-f'}">${s.gender}</span></td>
                            <td class="font-mono text-xs">${s.phone || '—'}</td>
                            <td class="text-sm text-muted">${s.email || s.email_id || '—'}</td>
                        </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>`;
    }).join('');

    content.innerHTML = html;
};

/* ══════════════════════════════════════════════════════════
   OVERRIDE renderAssessments - New Assignment Wizard UI
══════════════════════════════════════════════════════════ */
window.renderAssessments = function(container) {
    const deptCode = navState.dept;
    const batchYear = navState.batch;
    const step = navState.assignStep || 1;
    const cfg = navState.assignConfig || {};

    const steps = [
        { n: 1, label: 'Step 1', title: 'Course Selection' },
        { n: 2, label: 'Step 2', title: 'Regulation Setup' },
        { n: 3, label: 'Step 3', title: 'Syllabus Prep' },
        { n: 4, label: 'Step 4', title: 'Assignment Config' }
    ];

    const stepperHTML = '<div class="wiz-stepper">' + steps.map(s => {
        const cls = s.n < step ? 'done' : s.n === step ? 'active' : '';
        const icon = s.n < step ? '✓' : s.n;
        return `
        <div class="wiz-step ${cls}" ${s.n < step ? 'onclick="moveAssignStep('+s.n+')"' : ''}>
            <div class="wiz-step-num">${icon}</div>
            <div class="wiz-step-text">
                <span class="wiz-step-label">${s.label}</span>
                <span class="wiz-step-title">${s.title}</span>
            </div>
        </div>`;
    }).join('') + '</div>';

    let panelHTML = '';

    if (step === 1) {
        panelHTML = `
        <div class="wiz-panel">
            <h3 class="wiz-panel-title">📚 Course Selection</h3>
            <div class="wiz-form-grid">
                <div class="wiz-field">
                    <label>Department</label>
                    <input type="text" class="wiz-prefill" value="${window.getDeptName ? window.getDeptName(deptCode) : deptCode}" readonly>
                </div>
                <div class="wiz-field">
                    <label>Batch Year</label>
                    <input type="text" class="wiz-prefill" value="${batchYear}" readonly>
                </div>
                <div class="wiz-field full">
                    <label>Core Subject for Assignment</label>
                    ${(() => {
                        const r = batchYear >= 2029 ? 'R2025' : 'R2021';
                        const info = getBatchAcademicInfo(batchYear);
                        const sem = info.semester;
                        const sList = (typeof SUBJECTS_DATA !== 'undefined' && SUBJECTS_DATA[r] && SUBJECTS_DATA[r][deptCode]) 
                            ? SUBJECTS_DATA[r][deptCode].filter(s => s.sem === sem) 
                            : [];
                        const opts = sList.map(s => `<option value="${s.name}" ${cfg.courseName === s.name ? 'selected' : ''}>${s.code} — ${s.name}</option>`).join('');
                        
                        return `
                        <select class="form-input" style="padding-right: 32px;" id="course-name-input" onchange="(navState.assignConfig = navState.assignConfig || {}).courseName = this.value">
                            <option value="">-- Select ${info.yearSuffix} Year (Sem ${sem}) Subject --</option>
                            ${opts}
                            <option value="Custom Subject" ${cfg.courseName === 'Custom Subject' ? 'selected' : ''}>+ Other / Custom Subject</option>
                        </select>
                        `;
                    })()}
                </div>
            </div>
            <div class="wiz-nav-row" style="justify-content: flex-end;">
                <button class="btn btn-primary" onclick="
                    const val = document.getElementById('course-name-input').value;
                    if(!val) { alert('Please select a Core Subject first.'); return; }
                    (navState.assignConfig = navState.assignConfig || {}).courseName = val;
                    moveAssignStep(2);
                ">Next Step →</button>
            </div>
        </div>`;
    } else if (step === 2) {
        const reg = batchYear >= 2029 ? 'R2025' : 'R2021';
        const rData = (typeof SUBJECTS_DATA !== 'undefined' && SUBJECTS_DATA[reg] && SUBJECTS_DATA[reg][deptCode]) ? SUBJECTS_DATA[reg][deptCode] : [];
        const matchedSubj = rData.find(s => s.name === cfg.courseName);
        const subjCode = matchedSubj ? matchedSubj.code : '';
        const syl = (typeof SYLLABUS_DETAILS !== 'undefined' && subjCode && SYLLABUS_DETAILS[subjCode]) ? SYLLABUS_DETAILS[subjCode] : null;
        if (subjCode) {
            cfg.courseCode = subjCode;
            cfg.syllabus = syl; // Persist for logic.js
        }

        const objHTML = syl && syl.objectives ? syl.objectives.map((o, i) => `
            <div class="flex gap-3 items-start" style="padding:8px 0; border-bottom:1px solid var(--border-light);">
                <span class="w-6 h-6 rounded-full flex items-center justify-center font-bold" style="background:var(--primary-light); color:var(--primary); font-size:.7rem; min-width:24px;">O${i+1}</span>
                <span class="text-sm" style="color:var(--text-main);">${o}</span>
            </div>`).join('') : '<p class="text-muted text-sm">Objectives not available for this subject.</p>';

        const coHTML = syl && syl.outcomes ? syl.outcomes.map(co => `
            <div class="flex gap-3 items-start" style="padding:8px 0; border-bottom:1px solid var(--border-light);">
                <span class="chip chip-m" style="font-size:.65rem; min-width:36px; text-align:center;">${co.id}</span>
                <span class="text-sm" style="color:var(--text-main);">${co.desc}</span>
            </div>`).join('') : '<p class="text-muted text-sm">Course Outcomes not available for this subject.</p>';

        panelHTML = `
        <div class="wiz-panel">
            <h3 class="wiz-panel-title">⚙️ Regulation & Course Info</h3>
            <div class="card bg-surface-inset mb-4" style="padding:16px;">
                <div class="flex justify-between items-center">
                    <div>
                        <div class="text-sm font-bold text-main">${subjCode ? subjCode + ' — ' : ''}${cfg.courseName}</div>
                        <div class="text-muted text-sm">${syl ? 'Credits: ' + syl.credits + ' | L-T-P: ' + syl.ltp : ''}</div>
                    </div>
                    <span class="chip chip-m">${reg}</span>
                </div>
            </div>
            <h4 style="font-size:.9rem; font-weight:700; color:var(--primary); margin-bottom:8px;">🎯 Course Objectives</h4>
            <div class="card mb-4" style="padding:12px 16px;">${objHTML}</div>
            <h4 style="font-size:.9rem; font-weight:700; color:var(--primary); margin-bottom:8px;">🎓 Course Outcomes (COs)</h4>
            <div class="card mb-4" style="padding:12px 16px;">${coHTML}</div>
            <div class="wiz-nav-row">
                <button class="btn btn-secondary" onclick="moveAssignStep(1)">← Back</button>
                <button class="btn btn-primary" onclick="moveAssignStep(3)">Proceed to Syllabus →</button>
            </div>
        </div>`;
    } else if (step === 3) {
        const reg3 = batchYear >= 2029 ? 'R2025' : 'R2021';
        const rData3 = (typeof SUBJECTS_DATA !== 'undefined' && SUBJECTS_DATA[reg3] && SUBJECTS_DATA[reg3][deptCode]) ? SUBJECTS_DATA[reg3][deptCode] : [];
        const matchedSubj3 = rData3.find(s => s.name === cfg.courseName);
        const subjCode3 = matchedSubj3 ? matchedSubj3.code : '';
        const syl3 = (typeof SYLLABUS_DETAILS !== 'undefined' && subjCode3 && SYLLABUS_DETAILS[subjCode3]) ? SYLLABUS_DETAILS[subjCode3] : null;

        const unitsHTML = syl3 && syl3.units ? syl3.units.map(u => `
            <div class="card mb-3" style="padding:16px; border-left:4px solid var(--primary);">
                <div class="flex gap-3 items-center mb-2">
                    <span class="w-8 h-8 rounded-full flex items-center justify-center font-bold" style="background:var(--primary); color:#fff; font-size:.8rem;">U${u.id}</span>
                    <strong style="font-size:1rem; color:var(--text-main);">${u.title}</strong>
                </div>
                <ul style="margin:0; padding-left:24px; list-style:disc;">
                    ${u.topics.map(t => `<li style="font-size:.85rem; color:var(--text-muted); padding:2px 0;">${t}</li>`).join('')}
                </ul>
            </div>`).join('') : [1,2,3,4,5].map(u => `
            <div class="card p-3 flex gap-3 items-center" style="padding:16px;">
                <div class="w-8 h-8 rounded-full bg-primary-light text-primary flex items-center justify-center font-bold">U${u}</div>
                <input type="text" class="form-input flex-1" value="Unit ${u} Details" style="margin:0;">
            </div>`).join('');

        panelHTML = `
        <div class="wiz-panel">
            <h3 class="wiz-panel-title">📚 Syllabus & Units</h3>
            <p class="text-muted text-sm mb-4">Detailed syllabus units for <strong>${subjCode3 ? subjCode3 + ' — ' : ''}${cfg.courseName}</strong></p>
            <div style="max-height:420px; overflow-y:auto; padding-right:8px;">
                ${unitsHTML}
            </div>
            <div class="wiz-nav-row">
                <button class="btn btn-secondary" onclick="moveAssignStep(2)">← Back</button>
                <button class="btn btn-primary" onclick="generateCycleAssignments(1); moveAssignStep(4);">Generate Assignments →</button>
            </div>
        </div>`;
    } else if (step === 4) {
        // --- Step 4: Configure & Generate Topics (Phase 3 Engine) ---
        const cfg = navState.assignConfig || {};
        const cycleNum = navState.currentCycle || 1;
        const cad = (cfg.cycleData || {})[cycleNum];
        const numTeams = (navState.teams || []).length || 1;

        // --- Course Metadata Header (Removed as per user request) ---
        let courseInfoHTML = '';

        const tabActive = "flex-1 text-xs py-2 px-3 rounded-lg border-2 border-primary bg-primary-light text-primary font-bold";
        const tabInactive = "flex-1 text-xs py-2 px-3 rounded-lg border-2 border-border bg-surface text-dim font-medium hover:bg-surface-inset transition-colors";

        let resultHTML = '';
        if (cad && cad.assignments && cad.assignments.length > 0) {
            const active = cad.assignments.filter(a => !a.isReserve);
            const reserve = cad.assignments.filter(a => a.isReserve);

            const gridCards = active.map((a, i) => `
                <div class="card p-3" style="border-left:4px solid ${BLOOM_LEVELS[a.bloomLevel].icon === '🔵' ? '#3B82F6' : (BLOOM_LEVELS[a.bloomLevel].icon === '🟢' ? '#10B981' : '#F59E0B')};">
                    <div class="flex justify-between items-start mb-2">
                        <span class="chip chip-xs" style="background:#f1f5f9; color:#475569; font-weight:700;">S-${String(i+1).padStart(2,'0')}</span>
                        <span class="text-[10px] font-bold px-1.5 py-0.5 rounded ${a.approved ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}">
                            ${a.approved ? '✓ APPROVED' : '⏳ PENDING'}
                        </span>
                    </div>
                    <div class="font-bold text-xs mb-1" style="color:var(--text-main); line-height:1.4;">${a.topic}</div>
                    <div class="text-[10px] text-dim mb-2">${a.unit}</div>
                    <div class="flex justify-between items-center">
                        <span class="text-[10px] font-bold" style="color:var(--primary);">${BLOOM_LEVELS[a.bloomLevel].icon} L${a.bloomLevel} ${a.bloomLabel}</span>
                        <div class="flex gap-1">
                            <button class="btn btn-xs btn-ghost" title="Preview" onclick="viewAssignmentDetailsInCycle(${cycleNum}, ${i})">👁️</button>
                            ${!a.approved ? `<button class="btn btn-xs btn-primary" style="padding:2px 6px;" onclick="approveAssignment(${cycleNum}, '${a.id}')">Approve</button>` : ''}
                        </div>
                    </div>
                </div>`).join('');

            resultHTML = `
            <div class="mt-6">
                <div class="flex justify-between items-center mb-4">
                    <h4 class="font-bold text-main">📌 Active Assignments (${active.length}/12)</h4>
                    <div class="flex gap-2">
                        <button class="btn btn-sm btn-secondary" onclick="exportCycleCSV(${cycleNum})">💾 Team CSV</button>
                        <button class="btn btn-sm btn-secondary" onclick="exportStudentSheetCSV(${cycleNum})">📤 Student Sheet</button>
                    </div>
                </div>
                <div class="grid-3" style="gap:10px;">
                    ${gridCards}
                </div>
                <div class="mt-4 p-3 rounded-lg bg-surface-inset border border-border">
                    <div class="text-xs font-bold text-dim mb-2 uppercase">📦 Reserve Pool (${reserve.length})</div>
                    <div class="flex gap-2 flex-wrap">
                        ${reserve.map(r => `<span class="chip chip-s cursor-pointer" onclick="viewAssignmentDetailsInCycle(${cycleNum}, -1, '${r.id}')" style="background:var(--card-bg); border:1px solid var(--border);">${r.id}: ${r.type}</span>`).join('')}
                    </div>
                </div>
            </div>`;
        }

        panelHTML = `
        <div class="wiz-panel">
            <h3 class="wiz-panel-title">📚 Configuration — Phase 3 Engine</h3>
            
            ${courseInfoHTML}

            <div class="wiz-form-grid" style="margin-bottom: 24px;">
                <div class="wiz-field"><label style="font-size: 0.8rem; font-weight: 700;">Assignment Type</label>
                    <select id="wiz-type-new" class="form-input" onchange="(navState.assignConfig=navState.assignConfig||{}).assignType=this.value;">
                        <option value="mixed" ${cfg.assignType === 'mixed' ? 'selected' : ''}>🔀 Mixed Types (Default)</option>
                        <option value="presentation" ${cfg.assignType === 'presentation' ? 'selected' : ''}>&#127908; Team Presentation</option>
                        <option value="practical" ${cfg.assignType === 'practical' ? 'selected' : ''}>&#128203; Practicals</option>
                        <option value="mini_project" ${cfg.assignType === 'mini_project' ? 'selected' : ''}>&#128295; Mini Project</option>
                        <option value="case_study" ${cfg.assignType === 'case_study' ? 'selected' : ''}>&#128216; Case Studies</option>
                        <option value="problem_solve" ${cfg.assignType === 'problem_solve' ? 'selected' : ''}>&#129518; Problem Solving</option>
                    </select>
                </div>
                <div class="wiz-field"><label style="font-size: 0.8rem; font-weight: 700;">Duration per Assignment</label>
                    <select id="wiz-duration-new" class="form-input" onchange="(navState.assignConfig=navState.assignConfig||{}).duration=this.value;">
                        <option value="10-15 min" ${(!cfg.duration || cfg.duration === '10-15 min') ? 'selected' : ''}>10-15 minutes</option>
                        <option value="15-20 min" ${cfg.duration === '15-20 min' ? 'selected' : ''}>15-20 minutes</option>
                    </select>
                </div>
            </div>

            <div style="margin-bottom: 24px;">
                <label style="font-size: 0.8rem; font-weight: 700; color:var(--text-muted); display:block; margin-bottom: 8px;">Focus Units (untick to skip)</label>
                <div style="display:grid; grid-template-columns: 1fr 1fr; gap: 8px;" id="new-focus-units">
                    ${[1,2,3,4,5].map(u => {
                        const isChecked = (!cfg.focusUnits || !cfg.focusUnits.length || cfg.focusUnits.includes(u)) ? 'checked' : '';
                        const utitle = (cfg.units && cfg.units[u]) ? cfg.units[u].title : ('Unit ' + u);
                        return `<label class="flex items-center gap-2 p-2 bg-surface text-main border border-border rounded text-sm cursor-pointer" style="background:var(--surface);">
                            <input type="checkbox" class="focus-unit-cb" value="${u}" ${isChecked} style="accent-color:var(--primary);">
                            <span style="font-weight: 600;">Unit ${u}</span>
                        </label>`;
                    }).join('')}
                </div>
            </div>

            <div class="flex gap-3 mb-6">
                <button onclick="switchWizardCycle(1)" class="${cycleNum === 1 ? tabActive : tabInactive}">
                    Cycle 1 (S1-6) ${cfg.cycleData && cfg.cycleData[1] ? '✅' : ''}
                </button>
                <button onclick="switchWizardCycle(2)" class="${cycleNum === 2 ? tabActive : tabInactive}">
                    Cycle 2 (S7-12) ${cfg.cycleData && cfg.cycleData[2] ? '✅' : ''}
                </button>
            </div>

            <div class="card p-4 mb-6" style="background:${cycleNum === 1 ? 'rgba(59,130,246,0.05)' : 'rgba(139,92,246,0.05)'}; border:1px solid ${cycleNum === 1 ? '#bfdbfe' : '#ddd6fe'};">
                <div class="flex justify-between items-start mb-3">
                    <div>
                        <div class="font-bold text-main" style="color:${cycleNum === 1 ? '#1D4ED8' : '#7C3AED'};">
                            ${cycleNum === 1 ? '🔵' : '🟣'} Cycle ${cycleNum} — Sessions ${cycleNum === 1 ? '1-6' : '7-12'}
                        </div>
                        <div class="text-xs text-dim">Bloom Levels: ${cycleNum === 1 ? 'Remember → Understand → Apply' : 'Understand → Apply → Analyse'}</div>
                    </div>
                    <button class="btn btn-primary btn-sm" onclick="generateWizardPhase3Assignments(${cycleNum})">⚡ Generate Assignments</button>
                </div>
                <div class="text-[11px] text-dim leading-relaxed">
                    Automatically pulls unit-wise topics from the Anna University Syllabus. Generates 12 active + 3 reserve assignments with complex verbs and cognitive mapping.
                </div>
            </div>

            ${resultHTML}

            <div class="wiz-nav-row mt-8">
                <button class="btn btn-secondary" onclick="moveAssignStep(3)">← Back</button>
                <button class="btn btn-primary" ${!cad ? 'disabled' : ''} onclick="moveAssignStep(5)">Proceed to Scheduling →</button>
            </div>
        </div>`;
    } else if (step === 5) {
        // --- Step 5: Manual/Auto Block Scheduling ---
        const cfg = navState.assignConfig || {};
        const pairings = navState.pairings || [];
        const scheduledCnt = (navState.scheduledBlocks || []).length;
        const totalTotal = pairings.length;

        let scheduledHTML = '';
        if (scheduledCnt > 0) {
            scheduledHTML = `
            <div class="mt-8">
                <h4 class="font-bold text-main mb-4">🗓️ Scheduled Blocks (${scheduledCnt}/${totalTotal})</h4>
                <div class="overflow-x-auto">
                    <table class="dt" style="font-size:.75rem;">
                        <thead>
                            <tr>
                                <th>Block</th>
                                <th>Date</th>
                                <th>Period</th>
                                <th>Sessions</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${navState.scheduledBlocks.map((b, i) => `
                            <tr>
                                <td class="font-bold">#${b.blockIdx}</td>
                                <td>${b.date}</td>
                                <td>P${b.period}</td>
                                <td>${b.sessions.length} sessions (S${(b.blockIdx-1)*3+1}–S${(b.blockIdx-1)*3+b.sessions.length})</td>
                                <td>
                                    <button class="btn btn-xs btn-ghost" onclick="deleteScheduledBlock(${i})">🗑️</button>
                                </td>
                            </tr>`).join('')}
                        </tbody>
                    </table>
                </div>
            </div>`;
        }

        panelHTML = `
        <div class="wiz-panel">
            <h3 class="wiz-panel-title">🗓️ Session Scheduling</h3>
            
            <div class="card bg-surface-inset p-4 mb-6 border-dashed border-2">
                <div class="flex gap-4 items-center mb-4">
                    <div class="text-3xl">🧩</div>
                    <div>
                        <div class="font-bold text-main">1. Compute Block Pairings</div>
                        <div class="text-xs text-dim">Generates deterministic rotational pairings for TR and FP roles.</div>
                    </div>
                    <button class="btn btn-secondary btn-sm ml-auto" onclick="generateWizardPairings()">${pairings.length ? '🔄 Reshuffle' : 'Compute Pairings'}</button>
                </div>
                
                ${pairings.length ? `
                <div class="p-3 bg-surface rounded border border-border">
                    <div class="text-xs font-bold text-dim mb-3 uppercase">2. Assign Dates to Blocks</div>
                    <div class="grid-2 gap-4">
                        <div class="wiz-field">
                            <label>Next Block Date</label>
                            <input type="date" class="form-input" id="wiz-sched-date" value="${new Date().toISOString().split('T')[0]}">
                        </div>
                        <div class="wiz-field">
                            <label>Period Slot</label>
                            <select class="form-input" id="wiz-sched-period">
                                <option value="1">Period 1 (09:00 - 09:50)</option>
                                <option value="2">Period 2 (09:50 - 10:40)</option>
                                <option value="3">Period 3 (11:00 - 11:50)</option>
                                <option value="4">Period 4 (11:50 - 12:40)</option>
                                <option value="5">Period 5 (01:40 - 02:30)</option>
                                <option value="6">Period 6 (02:30 - 03:20)</option>
                                <option value="7">Period 7 (03:30 - 04:20)</option>
                                <option value="8">Period 8 (04:20 - 05:10)</option>
                            </select>
                        </div>
                    </div>
                    <div class="flex gap-2 mt-4">
                        <button class="btn btn-primary flex-1" onclick="scheduleNextBlock()">📌 Schedule Block #${scheduledCnt + 1}</button>
                        <button class="btn btn-secondary" onclick="autoScheduleAllBlocks()">⚡ Auto-Fill All</button>
                    </div>
                </div>` : ''}
            </div>

            ${scheduledHTML}

            <div class="wiz-nav-row mt-8">
                <button class="btn btn-secondary" onclick="moveAssignStep(4)">← Back</button>
                <button class="btn btn-success" ${scheduledCnt === 0 ? 'disabled' : ''} onclick="finalizeAcademicSetup()">Finalize & Lock Setup ✨</button>
            </div>
        </div>`;
    }

    container.innerHTML = `
    <div class="page-header" style="justify-content: flex-start; align-items:flex-start; flex-direction:column; gap:8px;">
        <h2 class="page-title">Assignment & Schedule Wizard</h2>
        <p class="page-subtitle">Configure academic sessions, map syllabus topics, and organize team-based peer assessments.</p>
    </div>
    ${stepperHTML}
    ${panelHTML}
    `;

    // Re-highlight active step in wizard bar if needed
    if (typeof updateWizBar === 'function') updateWizBar('assessments');
};

/* ══════════════════════════════════════════════════════════
   WIZARD HELPERS
   Connects UI to logic.js algorithms
══════════════════════════════════════════════════════════ */

window.moveAssignStep = function(step) {
    navState.assignStep = step;
    render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

window.switchWizardCycle = function(num) {
    navState.currentCycle = num;
    render();
};

window.generateWizardPhase3Assignments = function(cycleNum) {
    const teams = navState.teams || [];
    if (!teams.length) { showToast('⚠️ No teams found.', 'error'); return; }
    
    // Get unit data from Step 3 selected subjects
    const cfg = navState.assignConfig || {};
    const reg = navState.batch >= 2029 ? 'R2025' : 'R2021';
    const rData = (typeof SUBJECTS_DATA !== 'undefined' && SUBJECTS_DATA[reg] && SUBJECTS_DATA[reg][navState.dept]) ? SUBJECTS_DATA[reg][navState.dept] : [];
    const matchedSubj = rData.find(s => s.name === cfg.courseName);
    const subjCode = matchedSubj ? matchedSubj.code : '';
    const syl = (typeof SYLLABUS_DETAILS !== 'undefined' && subjCode && SYLLABUS_DETAILS[subjCode]) ? SYLLABUS_DETAILS[subjCode] : null;

    if (!syl || !syl.units) { showToast('⚠️ Syllabus details not found.', 'error'); return; }

    const cbAll = document.querySelectorAll('.focus-unit-cb');
    if (cbAll.length > 0) {
        const sel = Array.from(cbAll).filter(cb => cb.checked).map(cb => parseInt(cb.value));
        cfg.focusUnits = sel.length ? sel : [1, 2, 3, 4, 5];
    } else {
        cfg.focusUnits = cfg.focusUnits || [];
    }
    
    cfg.assignType = document.getElementById('wiz-type-new') ? document.getElementById('wiz-type-new').value : (cfg.assignType || 'mixed');
    cfg.duration = document.getElementById('wiz-duration-new') ? document.getElementById('wiz-duration-new').value : (cfg.duration || '10-15 min');

    const generated = logicGeneratePhase3Assignments(teams, syl.units, cycleNum, {
        courseName: cfg.courseName,
        courseCode: subjCode,
        assignType: cfg.assignType,
        duration: cfg.duration,
        focusUnits: cfg.focusUnits
    });

    cfg.cycleData = cfg.cycleData || {};
    cfg.cycleData[cycleNum] = {
        assignments: generated,
        approved: false,
        generatedAt: new Date().toISOString()
    };
    cfg.courseCode = subjCode;
    navState.assignConfig = cfg;
    showToast(`⚡ Cycle ${cycleNum} assignments generated!`, 'success');
    render();
};

window.approveAssignment = function(cycleNum, id) {
    const cfg = navState.assignConfig || {};
    const cad = (cfg.cycleData || {})[cycleNum];
    if (!cad) return;
    const asgn = cad.assignments.find(a => a.id === id);
    if (asgn) {
        asgn.approved = true;
        showToast(`Assignment ${id} Approved`, 'success');
        render();
    }
};

window.generateWizardPairings = function() {
    const teams = navState.teams || [];
    if (!teams.length) { showToast('⚠️ No teams found.', 'error'); return; }
    navState.pairings = logicComputePairings(teams);
    navState.scheduledBlocks = []; // reset
    showToast('📅 Schedule blocks computed!', 'success');
    render();
};

window.scheduleNextBlock = function() {
    const date = document.getElementById('wiz-sched-date').value;
    const period = parseInt(document.getElementById('wiz-sched-period').value);
    if (!date) { showToast('⚠️ Select a date.', 'error'); return; }

    const pairings = navState.pairings || [];
    const scheduled = navState.scheduledBlocks || [];
    if (scheduled.length >= pairings.length) { showToast('⚠️ All blocks already scheduled.', 'warn'); return; }

    const block = { ...pairings[scheduled.length], date, period };
    navState.scheduledBlocks = [...scheduled, block];
    showToast(`Block ${block.blockIdx} Scheduled ✓`, 'success');
    render();
};

window.autoScheduleAllBlocks = function() {
    const dateStr = document.getElementById('wiz-sched-date').value;
    if (!dateStr) { showToast('⚠️ Select a start date.', 'error'); return; }
    
    let date = new Date(dateStr);
    const pairings = navState.pairings || [];
    const scheduled = [];

    pairings.forEach((p, i) => {
        // Core Logic: 1 Week per Assignment Block
        // We move by 7 days for every new block to ensure subjects don't overlap
        if (i > 0) {
            date.setDate(date.getDate() + 7);
        }
        
        // Skip Sunday — if the weekly date lands on Sunday, move to Monday
        if (date.getDay() === 0) {
            date.setDate(date.getDate() + 1);
        }

        scheduled.push({ 
            ...p, 
            date: date.toISOString().split('T')[0], 
            period: 1 
        });
    });

    navState.scheduledBlocks = scheduled;
    showToast(`⚡ Weekly staggered schedule generated (${scheduled.length} blocks)!`, 'success');
    render();
};

window.deleteScheduledBlock = function(idx) {
    navState.scheduledBlocks.splice(idx, 1);
    render();
};

window.finalizeAcademicSetup = function() {
    if (!navState.scheduledBlocks || !navState.scheduledBlocks.length) {
        showToast('⚠️ No blocks scheduled.', 'error'); return;
    }

    const batchKey = `${navState.dept}_${navState.batch}`;
    const batchData = appData.batches[batchKey];
    if (!batchData) return;

    // Persist into permanent batch data
    batchData.teams = navState.teams;
    batchData.assignments = navState.assignConfig;
    batchData.calendarConfig = {
        blocks: navState.scheduledBlocks,
        isLocked: true,
        finalizedAt: new Date().toISOString()
    };

    saveData();
    showToast('✨ Academic Cycle Finalized & Locked!', 'success');
    navigateTo('department', { dept: navState.dept, batch: navState.batch });
};

window.generateCycleAssignments = function(cycleNum) {
    const cfg = navState.assignConfig;
    if (!cfg) return;
    const syl = cfg.syllabus || null;
    const units = syl ? syl.units : (cfg.units || []);
    
    cfg.cycleData = cfg.cycleData || {};
    cfg.cycleData[cycleNum] = {
        assignments: logicGeneratePhase3Assignments(navState.teams, units, cycleNum, { 
            courseName: cfg.courseName, 
            courseCode: cfg.courseCode,
            syllabus: syl
        }),
        approved: false,
        generatedAt: new Date().toISOString()
    };
    render();
    showToast(`Cycle ${cycleNum} Assignments Generated!`, 'success');
};

window.switchWizardCycle = function(cycleNum) {
    navState.currentCycle = cycleNum;
    render();
};

window.approveAssignment = function(cycleNum, id) {
    const cad = (navState.assignConfig.cycleData || {})[cycleNum];
    if (!cad) return;
    const a = cad.assignments.find(x => x.id === id);
    if (a) {
        a.approved = true;
        showToast(`Assignment ${id} Approved!`, 'success');
        render();
    }
};

window.exportCycleCSV = function(num) {
    const cfg = navState.assignConfig || {};
    const asgns = (cfg.cycleData || {})[num]?.assignments || [];
    if (!asgns.length) return;
    
    let csv = "ID,Team,Unit,Topic,Type,Bloom,Status\n";
    asgns.forEach(a => {
        csv += `${a.id},"${a.teamLabel}","${a.unit}","${a.topic}","${a.type}",${a.bloomLevel},${a.status}\n`;
    });
    
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `SAM_Cycle${num}_Assignments.csv`;
    a.click();
};

window.exportStudentSheetCSV = function(num) {
    const cfg = navState.assignConfig || {};
    const asgns = (cfg.cycleData || {})[num]?.assignments || [];
    if (!asgns.length) return;
    
    const rows = logicBuildStudentSheetCSV(asgns, navState.teams, {
        courseCode: cfg.courseCode,
        courseName: cfg.courseName,
        dept: navState.dept,
        batch: navState.batch
    });
    
    let csv = rows.map(r => r.map(cell => `"${cell}"`).join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `SAM_StudentSheet_${cfg.courseCode}_Cycle${num}.csv`;
    a.click();
};

window.viewAssignmentDetailsInCycle = function(cycleNum, idx, id) {
    const cfg = navState.assignConfig || {};
    const asgns = (cfg.cycleData || {})[cycleNum]?.assignments || [];
    const a = id ? asgns.find(x => x.id === id) : asgns.filter(x => !x.isReserve)[idx];
    if (!a) return;

    const modal = document.createElement('div');
    modal.className = 'modal-backdrop';
    modal.innerHTML = `
    <div class="modal-card" style="max-width:600px;">
        <div class="flex justify-between items-center mb-4">
            <h3 class="font-bold text-lg">${a.id}: ${a.bloomLabel} Assessment</h3>
            <button class="btn btn-sm btn-ghost" onclick="this.closest('.modal-backdrop').remove()">✕</button>
        </div>
        <div class="space-y-4">
            <div class="p-3 bg-surface-inset rounded border border-border">
                <div class="text-xs font-bold text-dim mb-1 uppercase">Unit / Module</div>
                <div class="text-sm font-semibold">${a.unit}</div>
            </div>
            <div class="p-3 bg-surface-inset rounded border border-border">
                <div class="text-xs font-bold text-dim mb-1 uppercase">Topic / Title</div>
                <div class="text-sm font-semibold">${a.topic}</div>
            </div>
            <div class="p-4 bg-surface rounded border border-primary-light" style="max-height:200px; overflow-y:auto; line-height:1.6; font-size:13px;">
                ${a.description}
            </div>
            <div class="flex gap-2">
                <span class="chip chip-m bg-indigo-50 text-indigo-700 font-bold">${a.type.toUpperCase()}</span>
                <span class="chip chip-m bg-blue-50 text-blue-700 font-bold">BLOOM LEVEL ${a.bloomLevel}</span>
            </div>
        </div>
        <div class="mt-6 flex justify-end">
            <button class="btn btn-secondary" onclick="this.closest('.modal-backdrop').remove()">Close</button>
        </div>
    </div>`;
    document.body.appendChild(modal);
};

window.viewAssignmentDetails = function(idx) {
    const a = navState.assignConfig.generatedAssignments[idx];
    if (!a) return;
    
    const detailsHTML = `
    <div class="p-4" style="max-height: 400px; overflow-y:auto;">
        <div class="mb-4">
            <h5 class="text-dim uppercase tracking-tighter text-[10px] font-bold">Goal</h5>
            <p class="text-sm text-main font-bold">${a.objective}</p>
        </div>
        <div class="mb-4">
            <h5 class="text-dim uppercase tracking-tighter text-[10px] font-bold">Description</h5>
            <p class="text-sm text-main">${a.description}</p>
        </div>
        <div class="grid-2 gap-4">
            <div>
                <h5 class="text-dim uppercase tracking-tighter text-[10px] font-bold">Deliverables</h5>
                <ul class="text-[11px] text-main list-disc pl-3">
                    ${a.deliverables.map(d => `<li>${d}</li>`).join('')}
                </ul>
            </div>
            <div>
                <h5 class="text-dim uppercase tracking-tighter text-[10px] font-bold">Evaluation Criteria</h5>
                <ul class="text-[11px] text-main list-disc pl-3">
                    ${a.criteria.map(c => `<li>${c}</li>`).join('')}
                </ul>
            </div>
        </div>
    </div>`;

    // Simple modal-like alert or custom popup
    const overlay = document.createElement('div');
    overlay.className = 'modal-backdrop';
    overlay.style.display = 'flex';
    overlay.innerHTML = `
        <div class="modal-box" style="max-width: 600px;">
            <div class="modal-header">
                <div class="modal-title">Team ${idx+1} Assignment Details</div>
                <button class="modal-close" onclick="this.closest('.modal-backdrop').remove()">✕</button>
            </div>
            <div class="modal-body">${detailsHTML}</div>
        </div>
    `;
    document.body.appendChild(overlay);
};

window.exportAssignmentsToCSV = function() {
    const cfg = navState.assignConfig;
    if (!cfg || !cfg.generatedAssignments) return;
    
    let csv = "Team,Topic,Unit,Type,Objective\n";
    cfg.generatedAssignments.forEach((a, i) => {
        csv += `Team ${i+1},"${a.title.replace(/"/g, '""')}","${a.unit}","${a.type}","${a.objective.replace(/"/g, '""')}"\n`;
    });
    
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('hidden', '');
    a.setAttribute('href', url);
    a.setAttribute('download', `assignments_${navState.dept}_${navState.batch}.csv`);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
};

/* ══════════════════════════════════════════════════════════
   STUDENT DASHBOARD SELECTION
   Allows student to choose between Academic and Career dashboards
══════════════════════════════════════════════════════════ */
window.renderSelection = function(container) {
    const sDept = navState.dept;
    const sBatch = navState.batch;
    const rollNo = currentUser ? (currentUser.rollNo || 'Student') : 'Student';
    
    // Aesthetic Gradient & Glass Cards
    container.innerHTML = `
    <div class="selection-container" style="min-height: 80vh; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 2rem;">
        <div class="selection-header" style="text-align: center; margin-bottom: 3rem; animation: fadeInDown 0.8s ease;">
            <div style="font-size: 0.9rem; color: var(--primary); font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 0.5rem;">Welcome back, ${rollNo}</div>
            <h1 style="font-size: 2.5rem; color: var(--text-main); font-family: 'Playfair Display', serif; margin-bottom: 1rem;">Choose Your Journey</h1>
            <p style="color: var(--text-muted); max-width: 500px;">Select the portal you'd like to access today. Both systems co-exist to support your academic and professional growth.</p>
        </div>
        
        <div class="selection-cards" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 2rem; width: 100%; max-width: 900px;">
            <!-- Academic Dashboard Card -->
            <div class="select-card group" onclick="navigateTo('batch', '${sDept}', ${sBatch})" 
                style="background: var(--surface); border: 1px solid var(--border); border-radius: 20px; padding: 2.5rem; cursor: pointer; transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); position: relative; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.05); text-align: center;"
                onmouseover="this.style.transform='translateY(-10px)'; this.style.borderColor='var(--primary)'; this.style.boxShadow='0 20px 40px rgba(123, 28, 28, 0.15)';"
                onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='var(--border)'; this.style.boxShadow='0 10px 30px rgba(0,0,0,0.05)';">
                
                <div class="card-glow" style="position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: radial-gradient(circle, rgba(123, 28, 28, 0.03) 0%, transparent 70%); transition: 0.5s;"></div>
                
                <div class="card-icon" style="font-size: 4rem; margin-bottom: 1.5rem; display: inline-block; transition: 0.5s;">🎓</div>
                <h3 style="font-size: 1.5rem; color: var(--text-main); font-weight: 700; margin-bottom: 1rem;">Academic Dashboard</h3>
                <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 2rem;">Access your curriculum, assignments, team activities, and academic performance metrics.</p>
                
                <div class="btn-select" style="display: inline-flex; align-items: center; gap: 0.5rem; color: var(--primary); font-weight: 700; font-size: 0.9rem;">
                    Enter Portal
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </div>
            </div>
            
            <!-- Career Dashboard Card -->
            <div class="select-card group" onclick="navigateTo('career', '${sDept}', ${sBatch})" 
                style="background: var(--surface); border: 1px solid var(--border); border-radius: 20px; padding: 2.5rem; cursor: pointer; transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); position: relative; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.05); text-align: center;"
                onmouseover="this.style.transform='translateY(-10px)'; this.style.borderColor='#06b6d4'; this.style.boxShadow='0 20px 40px rgba(6, 182, 212, 0.15)';"
                onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='var(--border)'; this.style.boxShadow='0 10px 30px rgba(0,0,0,0.05)';">
                
                <div class="card-glow" style="position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: radial-gradient(circle, rgba(6, 182, 212, 0.03) 0%, transparent 70%); transition: 0.5s;"></div>
                
                <div class="card-icon" style="font-size: 4rem; margin-bottom: 1.5rem; display: inline-block; transition: 0.5s;">🚀</div>
                <h3 style="font-size: 1.5rem; color: var(--text-main); font-weight: 700; margin-bottom: 1rem;">Career Dashboard</h3>
                <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 2rem;">Explore placement opportunities, build your portfolio, connect with mentors, and track industry readiness.</p>
                
                <div class="btn-select" style="display: inline-flex; align-items: center; gap: 0.5rem; color: #06b6d4; font-weight: 700; font-size: 0.9rem;">
                    Launch Career
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </div>
                
                <div style="position: absolute; top: 1rem; right: 1rem; background: #06b6d4; color: white; font-size: 0.65rem; font-weight: 800; padding: 0.2rem 0.6rem; border-radius: 10px; letter-spacing: 0.05em; text-transform: uppercase;">New Feature</div>
            </div>
        </div>
    </div>
    
    <style>
        @keyframes fadeInDown {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
        }
    </style>
    `;
};

/* ══════════════════════════════════════════════════════════
   CAREER DASHBOARD SCREEN
══════════════════════════════════════════════════════════ */
window.renderCareer = function(container) {
    const sDept = navState.dept || 'CSE';
    const deptInfo = (typeof CAREER_RESOURCES !== 'undefined' ? CAREER_RESOURCES[sDept] : null) || [];
    
    // Header
    let content = `
    <div class="career-container" style="padding: 1.5rem; animation: fadeIn 0.5s ease; max-width: 1200px; margin: 0 auto; min-height: 100vh; background: #fff;">
        <div class="page-header" style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 2rem; border-bottom: 1.5px solid var(--border); padding-bottom: 2rem;">
            <div style="flex: 1;">
                <div class="hero-badge" style="background: rgba(30, 64, 175, 0.08); color: var(--primary); display: inline-flex; align-items: center; gap: 0.6rem; padding: 0.5rem 1rem; border-radius: 30px; font-size: 0.75rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 1.2rem;">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="14" height="14"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>
                    Future Ready Portal — ${sDept} Department
                </div>
                <h1 style="font-size: 2.8rem; color: var(--text-main); font-family: 'Playfair Display', serif; margin: 0; line-height: 1.1;">Blueprint Your<br>Industry Journey</h1>
                <p style="color: var(--text-muted); margin-top: 0.8rem; font-size: 1.05rem; max-width: 600px;">Compare job roles, identify critical skills, and access curated resources for your academic department.</p>
            </div>
            <button class="btn btn-secondary" onclick="navigateTo('selection')" style="white-space:nowrap; padding: 12px 24px; border-radius: 12px; height: fit-content; font-weight: 700;">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16" style="margin-right:0.4rem;"><polyline points="15 18 9 12 15 6"></polyline></svg>
                Switch Portal
            </button>
        </div>

        <div class="career-content">
            <!-- Domain Selection -->
            <div class="section-divider" style="margin-bottom: 24px;">Explore Career Domains</div>
            <div class="domain-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin-bottom: 3rem;">
                ${deptInfo.map((domainObj, idx) => `
                    <div class="domain-card card" style="border-left: 4px solid var(--primary); border-radius: 12px; transition: transform 0.3s; cursor:pointer;" onclick="scrollToDomain('domain-${idx}')">
                        <div style="font-size: 1.25rem; font-weight: 800; color: var(--text-main); margin-bottom: 0.5rem;">${domainObj.domain}</div>
                        <p style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.5;">${domainObj.description}</p>
                        <div style="margin-top: 1rem; color: var(--primary); font-size: 0.75rem; font-weight: 700; display: flex; align-items: center; gap: 4px;">
                            View ${domainObj.roles.length} roles <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="12" height="12"><polyline points="6 9 12 15 18 9"></polyline></svg>
                        </div>
                    </div>
                `).join('')}
            </div>

            <!-- Role Comparison Table -->
            <div class="section-divider" style="margin-bottom: 24px;">Market Comparison Matrix</div>
            <div class="card" style="padding: 0; overflow: hidden; margin-bottom: 3rem; border: 1px solid var(--border-strong);">
                <table class="dt" style="width: 100%; border: none; border-radius: 0;">
                    <thead style="background: var(--surface-inset);">
                        <tr>
                            <th style="padding: 1.25rem;">Industry Role</th>
                            <th>Growth Trajectory</th>
                            <th>Starting Salary</th>
                            <th>Complexity</th>
                            <th>Primary Skills</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${deptInfo.flatMap(d => d.roles).map(role => `
                            <tr style="border-bottom: 1px solid var(--border-light);">
                                <td style="padding: 1rem 1.25rem; font-weight: 700; color: var(--primary);">${role.title}</td>
                                <td><span class="chip" style="background: var(--success-light); color: var(--success); font-weight: 800;">${role.growth}</span></td>
                                <td class="mono-text" style="font-size: 0.85rem;">${role.salaryRange}</td>
                                <td><span class="chip" style="background: #fff; border: 1px solid var(--border-strong); color: var(--text-main);">${role.complexity}</span></td>
                                <td style="font-size: 0.75rem; color: var(--text-dim); max-width: 200px;">${role.skills.slice(0,2).join(', ')}...</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>

            <!-- Detailed Breakdowns -->
            ${deptInfo.map((domainObj, dIdx) => `
                <div id="domain-${dIdx}" style="margin-bottom: 3rem; animation: slideInUp 0.6s ease both;">
                    <h2 class="serif-title" style="font-size: 1.8rem; margin-bottom: 1.5rem; display: flex; align-items: center; gap: 12px; color: var(--text-main);">
                        ${domainObj.domain}
                        <div style="flex:1; height:1px; background: linear-gradient(to right, var(--border-strong), transparent);"></div>
                    </h2>
                    
                    <div class="roles-breakdown" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 2rem;">
                        ${domainObj.roles.map(role => `
                            <div class="role-detail-card card" style="padding: 0; display: flex; flex-direction: column; height: 100%; border-radius: 20px; border: 1px solid var(--border); overflow: hidden; background: #fff; box-shadow: var(--shadow-sm); transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);">
                                <div style="background: linear-gradient(145deg, var(--surface-inset), #fff); padding: 1.5rem; border-bottom: 2px solid var(--border-light); position: relative;">
                                    <div style="position: absolute; top: 1.5rem; right: 1.5rem; background: #E8F0FE; color: #1967D2; padding: 4px 12px; border-radius: 30px; font-size: 0.65rem; font-weight: 800; display: flex; align-items: center; gap: 4px;">
                                        <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9v-2h2v2zm0-4H9V7h2v5zm4 4h-2v-5h2v5zm0-7h-2V7h2v2z"/></svg>
                                        GOOGLE ALIGNED
                                    </div>
                                    <h3 style="margin: 0; font-size: 1.25rem; color: var(--text-main); font-weight: 800;">${role.title}</h3>
                                    <p style="margin-top: 0.6rem; font-size: 0.8rem; color: var(--text-muted); line-height: 1.5; font-style: italic; background: rgba(0,0,0,0.03); padding: 8px 12px; border-radius: 8px;">
                                        ${role.googleComparison || 'Matches Google Technical Standards for SDE Roles.'}
                                    </p>
                                </div>
                                
                                <div style="padding: 1.5rem; flex: 1; display: grid; gap: 1.5rem;">
                                    <!-- Roadmap Section -->
                                    <div class="roadmap-section">
                                        <div style="font-size: 0.7rem; font-weight: 900; color: var(--text-dim); text-transform: uppercase; letter-spacing: 0.12em; margin-bottom: 1rem; display: flex; align-items: center; gap: 8px;">
                                            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>
                                            Detailed Learning Roadmap
                                        </div>
                                        <div class="roadmap-steps" style="display: grid; gap: 12px;">
                                            ${(role.roadmap || ['Phase 1: Foundations', 'Phase 2: Core Expertise', 'Phase 3: Advanced Deployment']).map((step, sIdx) => `
                                                <div style="display: flex; gap: 12px;">
                                                    <div style="flex-shrink: 0; width: 24px; height: 24px; border-radius: 50%; background: ${sIdx === 0 ? 'var(--primary)' : 'var(--surface-inset)'}; color: ${sIdx === 0 ? '#fff' : 'var(--text-muted)'}; font-size: 0.7rem; font-weight: 800; display: flex; align-items: center; justify-content: center; border: 1.5px solid ${sIdx === 0 ? 'transparent' : 'var(--border)'};">
                                                        ${sIdx + 1}
                                                    </div>
                                                    <div style="font-size: 0.82rem; color: ${sIdx === 0 ? 'var(--text-main)' : 'var(--text-muted)'}; line-height: 1.4; font-weight: ${sIdx === 0 ? '600' : '400'};">
                                                        ${step}
                                                    </div>
                                                </div>
                                            `).join('')}
                                        </div>
                                    </div>

                                    <div>
                                        <div style="font-size: 0.7rem; font-weight: 900; color: var(--text-dim); text-transform: uppercase; letter-spacing: 0.12em; margin-bottom: 1rem; border-left: 2px solid var(--primary); padding-left: 8px;">Top Competencies</div>
                                        <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                                            ${role.skills.map(skill => `<span class="chip" style="background: var(--bg-main); color: var(--text-main); border: 1px solid var(--border); font-size: 0.7rem; font-weight: 600;">${skill}</span>`).join('')}
                                        </div>
                                    </div>

                                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.2rem;">
                                        <div>
                                            <div style="font-size: 0.65rem; font-weight: 800; color: #059669; text-transform: uppercase; margin-bottom: 0.6rem; display: flex; align-items: center; gap: 5px;">
                                                <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="3"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                                Open Access
                                            </div>
                                            <div style="font-size: 0.8rem; color: var(--text-muted); line-height: 1.6;">
                                                ${role.freeResources.slice(0,3).map(r => `• ${r}<br>`).join('')}
                                            </div>
                                        </div>
                                        <div>
                                            <div style="font-size: 0.65rem; font-weight: 800; color: #7c3aed; text-transform: uppercase; margin-bottom: 0.6rem; display: flex; align-items: center; gap: 5px;">
                                                <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="3"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                                                Certifications
                                            </div>
                                            <div style="font-size: 0.8rem; color: var(--text-muted); line-height: 1.6;">
                                                ${role.paidCourses.slice(0,3).map(r => `• ${r}<br>`).join('')}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button class="btn btn-primary w-full" style="border-radius: 0; padding: 1rem; font-size: 0.8rem; letter-spacing: 0.05em;" onclick="showToast('Loading full roadmap from Google AI Learning library...', 'info')">
                                    ACCESS FULL GOOGLE AI ROADMAP
                                </button>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `).join('')}
        </div>
    </div>
    
    <style>
        @keyframes slideInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .career-container { font-family: 'Inter', sans-serif !important; }
        .hero-badge { box-shadow: 0 2px 10px rgba(0,0,0,0.03); }
        .domain-card:hover { transform: translateY(-5px); border-color: var(--secondary); box-shadow: var(--shadow-lg); }
        .role-detail-card:hover { border-color: var(--primary); box-shadow: var(--shadow-lg); }
    </style>
    `;
    
    container.innerHTML = content;
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

window.scrollToDomain = function(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

document.addEventListener('DOMContentLoaded', () => {
    // keyboard close
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') { closeSidebar(); closeAdminLogin(); closeCycleModal(); }
        if (e.key === 'Enter' && document.getElementById('admin-modal').style.display !== 'none') {
            attemptLogin();
        }
    });
});
