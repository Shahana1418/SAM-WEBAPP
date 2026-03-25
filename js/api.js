/**
 * SAM Platform — API Client
 * Bridges frontend to the Express + MongoDB backend
 * Falls back to local data if backend is unavailable
 */
const SAM_API = (() => {
    const BASE = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
        ? `${window.location.protocol}//${window.location.hostname}:5000/api`
        : '/api';

    let backendAvailable = false;

    /* ═══════════════════════════════════════════════
       CORE FETCH WRAPPER
    ═══════════════════════════════════════════════ */
    async function apiFetch(endpoint, options = {}) {
        try {
            const res = await fetch(`${BASE}${endpoint}`, {
                headers: { 'Content-Type': 'application/json', ...options.headers },
                ...options
            });
            if (!res.ok) {
                const err = await res.json().catch(() => ({ error: res.statusText }));
                throw new Error(err.error || res.statusText);
            }
            return await res.json();
        } catch (e) {
            console.warn(`[SAM_API] ${endpoint} failed:`, e.message);
            throw e;
        }
    }

    /* ═══════════════════════════════════════════════
       HEALTH CHECK
    ═══════════════════════════════════════════════ */
    async function checkBackend() {
        try {
            const data = await apiFetch('/health');
            backendAvailable = data.status === 'ok';
            console.log(`[SAM_API] Backend: ${backendAvailable ? '✅ Connected' : '❌ Unavailable'}`);
        } catch {
            backendAvailable = false;
            console.log('[SAM_API] Backend unavailable — using local data');
        }
        return backendAvailable;
    }

    /* ═══════════════════════════════════════════════
       STUDENTS
    ═══════════════════════════════════════════════ */
    async function getStudents(dept, batch) {
        const params = new URLSearchParams();
        if (dept)  params.set('dept', dept);
        if (batch) params.set('batch', batch);
        return apiFetch(`/students?${params}`);
    }

    async function getStudent(rollNo) {
        return apiFetch(`/students/${rollNo}`);
    }

    async function saveStudents(students) {
        return apiFetch('/students', {
            method: 'POST',
            body: JSON.stringify(students)
        });
    }

    /* ═══════════════════════════════════════════════
       STUDENT AUTH
    ═══════════════════════════════════════════════ */
    async function authenticateStudent(rollNo, dob) {
        return apiFetch('/auth/student', {
            method: 'POST',
            body: JSON.stringify({ rollNo, dob })
        });
    }

    /* ═══════════════════════════════════════════════
       TEAMS
    ═══════════════════════════════════════════════ */
    async function getTeams(dept, batch) {
        const params = new URLSearchParams();
        if (dept)  params.set('dept', dept);
        if (batch) params.set('batch', batch);
        return apiFetch(`/teams?${params}`);
    }

    async function saveTeams(teams) {
        return apiFetch('/teams', {
            method: 'POST',
            body: JSON.stringify(teams)
        });
    }

    async function deleteTeams(dept, batch) {
        const params = new URLSearchParams();
        if (dept)  params.set('dept', dept);
        if (batch) params.set('batch', batch);
        return apiFetch(`/teams?${params}`, { method: 'DELETE' });
    }

    /* ═══════════════════════════════════════════════
       CYCLES
    ═══════════════════════════════════════════════ */
    async function getCycles() {
        return apiFetch('/cycles');
    }

    async function saveCycle(cycle) {
        return apiFetch('/cycles', {
            method: 'POST',
            body: JSON.stringify(cycle)
        });
    }

    async function updateCycle(id, data) {
        return apiFetch(`/cycles/${id}`, {
            method: 'PUT',
            body: JSON.stringify(data)
        });
    }

    async function deleteCycle(id) {
        return apiFetch(`/cycles/${id}`, { method: 'DELETE' });
    }

    /* ═══════════════════════════════════════════════
       SESSIONS
    ═══════════════════════════════════════════════ */
    async function getSessions(dept, batch) {
        const params = new URLSearchParams();
        if (dept)  params.set('dept', dept);
        if (batch) params.set('batch', batch);
        return apiFetch(`/sessions?${params}`);
    }

    async function saveSessions(sessions) {
        return apiFetch('/sessions', {
            method: 'POST',
            body: JSON.stringify(sessions)
        });
    }

    /* ═══════════════════════════════════════════════
       ASSIGNMENTS
    ═══════════════════════════════════════════════ */
    async function getAssignments(dept, batch) {
        const params = new URLSearchParams();
        if (dept)  params.set('dept', dept);
        if (batch) params.set('batch', batch);
        return apiFetch(`/assignments?${params}`);
    }

    async function saveAssignment(assignment) {
        return apiFetch('/assignments', {
            method: 'POST',
            body: JSON.stringify(assignment)
        });
    }

    /* ═══════════════════════════════════════════════
       GRADES
    ═══════════════════════════════════════════════ */
    async function getGrades(filters) {
        const params = new URLSearchParams(filters);
        return apiFetch(`/grades?${params}`);
    }

    async function saveGrades(grades) {
        return apiFetch('/grades', {
            method: 'POST',
            body: JSON.stringify(grades)
        });
    }

    /* ═══════════════════════════════════════════════
       SAC
    ═══════════════════════════════════════════════ */
    async function getSac(dept) {
        const params = dept ? `?dept=${dept}` : '';
        return apiFetch(`/sac${params}`);
    }

    /* ═══════════════════════════════════════════════
       STATS
    ═══════════════════════════════════════════════ */
    async function getStats() {
        return apiFetch('/stats');
    }

    /* ═══════════════════════════════════════════════
       PUBLIC API
    ═══════════════════════════════════════════════ */
    return {
        checkBackend,
        isConnected: () => backendAvailable,

        // Students
        getStudents, getStudent, saveStudents,
        authenticateStudent,

        // Teams
        getTeams, saveTeams, deleteTeams,

        // Cycles
        getCycles, saveCycle, updateCycle, deleteCycle,

        // Sessions
        getSessions, saveSessions,

        // Assignments
        getAssignments, saveAssignment,

        // Grades
        getGrades, saveGrades,

        // SAC & Stats
        getSac, getStats
    };
})();

// Auto-check backend on load
document.addEventListener('DOMContentLoaded', () => {
    SAM_API.checkBackend().then(connected => {
        if (connected) {
            console.log('[SAM] Backend API connected — data will persist to MongoDB');
        } else {
            console.log('[SAM] Running in offline mode — using local data only');
        }
    });
});
