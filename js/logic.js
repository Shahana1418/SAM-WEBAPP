/**
 * SAM System — Core Generation Logic
 * Ports algorithms from the old SAM app (Assignment Generation & Session Scheduling)
 */

// ── Assignment Templates (Rich Content) ─────────────────────────────────────
const ASSIGN_TPL = {
    mini_project: (t, s, code) => `<strong>🔧 Mini Project — ${t}</strong><br><em>${code}: ${s}</em><br><br>` +
        `Build a <strong>small but complete working project</strong> that solves a real problem using concepts from <em>${t}</em>.<br><br>` +
        `<strong>Deliverables:</strong><ul>` +
        `<li>Problem statement &amp; scope (1 page)</li>` +
        `<li>Architecture / block diagram with component justification</li>` +
        `<li>Working implementation (source code + executable/demo)</li>` +
        `<li>Test plan with ≥5 test cases and observed results</li>` +
        `<li>Project report (8–12 pages) + 5-min demo video</li></ul>` +
        `<strong>Marks:</strong> Design 25% · Implementation 35% · Testing 20% · Report 10% · Demo 10%`,

    case_study: (t, s, code) => `<strong>🔍 Case Study — ${t}</strong><br><em>${code}: ${s}</em><br><br>` +
        `Select a published or industry case where <strong>${t}</strong> played a central role. Analyse it through the lens of <em>${s}</em>.<br><br>` +
        `<strong>Report structure (2,000–2,500 words):</strong><ul>` +
        `<li>Background &amp; context</li>` +
        `<li>Problem / challenge identified</li>` +
        `<li>Solution approach &amp; technologies used</li>` +
        `<li>Quantitative outcomes &amp; key metrics</li>` +
        `<li>Lessons learned &amp; recommendations</li></ul>` +
        `Cite ≥3 credible sources (IEEE, Springer, official reports).`,

    literature_review: (t, s, code) => `<strong>📚 Literature Review — ${t}</strong><br><em>${code}: ${s}</em><br><br>` +
        `Survey recent research on <strong>${t}</strong> within the domain of <em>${s}</em>.<br><br>` +
        `<strong>Requirements:</strong><ul>` +
        `<li>Review ≥6 papers (2018–present) from IEEE, ACM, Springer or Elsevier</li>` +
        `<li>Comparison table: authors, year, method, dataset, results, limitations</li>` +
        `<li>Identify 2–3 open research gaps</li>` +
        `<li>Propose a future research direction</li></ul>` +
        `Length: 2,500–3,000 words + reference list.`,

    practical: (t, s, code) => `<strong>⚗️ Practical Exercise — ${t}</strong><br><em>${code}: ${s}</em><br><br>` +
        `Conduct a structured hands-on exercise on <strong>${t}</strong> as covered in <em>${s}</em>.<br><br>` +
        `<strong>Lab record must include:</strong><ul>` +
        `<li>Aim &amp; theoretical background</li>` +
        `<li>Materials / software / tools used</li>` +
        `<li>Step-by-step procedure (with screenshots)</li>` +
        `<li>Observations &amp; data table</li>` +
        `<li>Results, analysis &amp; error discussion</li>` +
        `<li>Conclusion &amp; real-world relevance</li></ul>` +
        `Viva questions will test underlying theory from ${s}.`,

    problem_solve: (t, s, code) => `<strong>🧮 Problem Set — ${t}</strong><br><em>${code}: ${s}</em><br><br>` +
        `Solve <strong>8–10 curated problems</strong> on <strong>${t}</strong> drawn from past papers and industry scenarios in <em>${s}</em>.<br><br>` +
        `<strong>Submission rules:</strong><ul>` +
        `<li>Show complete working — no step may be skipped</li>` +
        `<li>State the formula / theorem before each solution</li>` +
        `<li>Verify answers (substitute back / unit check)</li>` +
        `<li>Include 1 self-composed problem with full solution</li></ul>` +
        `<strong>Bonus (+5%):</strong> Solve one extension problem from a competitive exam.`,

    presentation: (t, s, code) => `<strong>🎤 Topic Presentation — ${t}</strong><br><em>${code}: ${s}</em><br><br>` +
        `Prepare and deliver a <strong>10-minute presentation</strong> on <strong>${t}</strong>, explaining its principles and applications in <em>${s}</em>.<br><br>` +
        `<strong>Slide deck (10–12 slides):</strong><ul>` +
        `<li>Title slide: topic, team, date</li>` +
        `<li>2 slides: Introduction &amp; motivation</li>` +
        `<li>4 slides: Core concepts, diagrams &amp; worked example</li>` +
        `<li>2 slides: Real-world applications &amp; recent advances</li>` +
        `<li>1 slide: Summary &amp; Q&amp;A prompt</li></ul>` +
        `<strong>Marks:</strong> Content 40% · Clarity 25% · Visuals 15% · Q&amp;A 20%`
};

// ── Phase 3: Regulation & Bloom Level Constants ──────────────────────────────
const BLOOM_LEVELS = {
    1: { label: 'Remember', icon: '🔵', desc: 'Recall, define, list, identify' },
    2: { label: 'Understand', icon: '🟢', desc: 'Summarise, classify, explain' },
    3: { label: 'Apply', icon: '🟡', desc: 'Solve, demonstrate, execute' },
    4: { label: 'Analyse', icon: '🟠', desc: 'Differentiate, compare, organise' },
    5: { label: 'Evaluate', icon: '🔴', desc: 'Judge, justify, critique, defend' }
};

const ASGN_TYPE_ORDER = ['presentation', 'mini_project', 'practical', 'problem_solve'];

// ── Phase 3 Helper Functions ───────────────────────────────────────────────

function buildPhase3Title(aType, unit) {
    const verbs = {
        presentation: ['Present & Explain:', 'Deliver a Talk on:', 'Demonstrate:', 'Explain with Examples:'],
        mini_project: ['Mini Project — Design & Build:', 'Prototype Development:', 'Working Implementation of:', 'Build a Solution for:'],
        practical: ['Conduct a Hands-On Exercise on:', 'Perform and Document:', 'Execute and Analyse:', 'Lab Experiment:'],
        problem_solve: ['Solve a Problem Set on:', 'Apply Concepts from:', 'Work Through Challenges in:', 'Analyse and Solve:']
    };
    const pool = verbs[aType] || ['Study and Analyse:'];
    let h = 0; for (let i = 0; i < unit.length; i++) h = (h * 31 + unit.charCodeAt(i)) & 0xffff;
    const verb = pool[h % pool.length];
    return `${verb} ${unit.length > 50 ? unit.substring(0, 47) + '...' : unit}`;
}

function buildPhase3Description(aType, topic, code, subject, bloomLevel) {
    const b = BLOOM_LEVELS[bloomLevel];
    const baseTpl = (ASSIGN_TPL[aType] || ASSIGN_TPL.presentation)(topic, subject, code);
    return baseTpl +
        `<br><br><strong>📊 Bloom's Level ${bloomLevel} — ${b.label}:</strong> ` +
        `Target <em>${b.desc}</em>. Students must operate at the <strong>${b.label}</strong> cognitive level.`;
}

// ── Assignment Generation (Phase 3 Engine) ──────────────────────────────────

function logicGeneratePhase3Assignments(teams, unitData, cycleNum, config = {}) {
    if (!teams || !teams.length || !unitData || !unitData.length) return [];
    
    const { courseName = '', courseCode = '' } = config;
    const bloomRange = cycleNum === 1 ? [1, 2, 3] : [2, 3, 4];
    const totalActive = 12;
    const totalReserve = 3;
    const totalNeeded = totalActive + totalReserve;
    
    // Flatten topics from unitData
    let topicPool = [];
    unitData.forEach(u => {
        const topics = u.topics || [];
        topics.forEach(t => topicPool.push({ title: t, unitId: u.id, unitTitle: u.title }));
    });
    if (!topicPool.length) topicPool = unitData.map(u => ({ title: u.title, unitId: u.id, unitTitle: u.title }));

    const assignments = [];
    const usedCombos = new Set();
    let uIdx = 0, tIdx = 0, bIdx = 0;
    
    while (assignments.length < totalNeeded) {
        const topic = topicPool[uIdx % topicPool.length];
        const aType = ASGN_TYPE_ORDER[tIdx % ASGN_TYPE_ORDER.length];
        const bloom = bloomRange[bIdx % bloomRange.length];
        const combo = `${topic.title}|${aType}|${bloom}`;
        
        if (!usedCombos.has(combo)) {
            usedCombos.add(combo);
            const isReserve = assignments.length >= totalActive;
            const team = isReserve ? null : teams[assignments.length % teams.length];
            const title = buildPhase3Title(aType, topic.title);
            const bInfo = BLOOM_LEVELS[bloom];
            
            assignments.push({
                id: `A${cycleNum}-${String(assignments.length + 1).padStart(2, '0')}`,
                teamId: team ? team.id : null,
                teamLabel: team ? (team.name || team.id) : null,
                unit: `Unit ${topic.unitId}: ${topic.unitTitle}`,
                topic: title,
                type: aType,
                bloomLevel: bloom,
                bloomLabel: bInfo.label,
                cycle: cycleNum,
                loText: `LO: Students will be able to ${bInfo.desc.split(',')[0].toLowerCase()} concepts from Unit ${topic.unitId}.`,
                description: buildPhase3Description(aType, topic.title, courseCode, courseName, bloom),
                isReserve,
                status: isReserve ? 'reserve' : 'active',
                approved: false
            });
        }
        
        uIdx++;
        if (uIdx % topicPool.length === 0) tIdx++;
        if (tIdx % ASGN_TYPE_ORDER.length === 0) bIdx++;
        if (uIdx > topicPool.length * 20) usedCombos.clear(); // Safety break
    }
    
    return assignments;
}

// ── Session Scheduling (Blocks of 3 with Deterministic Rotation) ──────────────

function logicComputePairings(teams) {
    if (!teams || !teams.length) return [];
    
    const k = teams.length;
    // Shuffle the global order once for this "set"
    const order = [...teams].sort(() => Math.random() - 0.5);
    const blocks = [];
    let globalSid = 1;
    
    // Total sessions needed = teams.length (every team presents once)
    const numBlocksRequired = Math.ceil(k / 3);
    
    for (let b = 0; b < numBlocksRequired; b++) {
        const sessions = [];
        for (let s = 0; s < 3; s++) {
            const pIdx = b * 3 + s;
            if (pIdx >= k) break; // All teams scheduled to present
            
            // Rotation: P, TR (Reviewer), FP (Feedback)
            sessions.push({
                sid: globalSid++,
                sessNumInBlock: s + 1,
                P: order[pIdx],
                // TR and FP are deterministic offsets from P in the global order
                TR: order[(pIdx + 1) % k],
                FP: order[(pIdx + 2) % k]
            });
        }
        blocks.push({
            blockIdx: b + 1,
            sessions,
            date: '',
            period: '',
            scheduled: false,
            revealed: false,
            completed: false
        });
    }
    return blocks;
}

// ── CSV Export Logic (replicated from old app for parity) ─────────────────────

function logicBuildStudentSheetCSV(assignments, teams, courseConfig = {}) {
    const { courseCode, courseName, dept, batch } = courseConfig;
    const meta = [
        ['SAM — Student Assignment Sheet'],
        ['Course', courseCode, courseName],
        ['Department', dept, 'Batch', batch],
        []
    ];
    const headers = ['Roll Number', 'Student Name', 'Gender', 'Team', 'Assignment ID', 'Unit/Topic', 'Type', 'Bloom Level'];
    const rows = [...meta, headers];
    
    assignments.filter(a => !a.isReserve).forEach(a => {
        const team = teams.find(t => t.id === a.teamId);
        const members = team ? (team.members || []) : [];
        members.forEach(m => {
            rows.push([
                m.id || '—',
                m.name || '—',
                m.gender || '—',
                a.teamLabel || '—',
                a.id,
                a.unit,
                a.type,
                `L${a.bloomLevel} ${a.bloomLabel}`
            ]);
        });
    });
    return rows;
}

// ── Exports ───────────────────────────────────────────────────────────────────

window.BLOOM_LEVELS = BLOOM_LEVELS;
window.ASGN_TYPE_ORDER = ASGN_TYPE_ORDER;
window.logicGeneratePhase3Assignments = logicGeneratePhase3Assignments;
window.logicComputePairings = logicComputePairings;
window.logicBuildStudentSheetCSV = logicBuildStudentSheetCSV;
