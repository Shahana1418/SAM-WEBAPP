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

const ASGN_TYPE_ORDER = ['presentation', 'mini_project', 'practical', 'problem_solve'];

// ── Assignment Generation ───────────────────────────────────────────────────
function logicGenerateAssignments(teams, unitData, mode = 'auto', selectedType = 'presentation', config = {}) {
    if (!teams || !teams.length || !unitData || !unitData.length) return [];

    const { courseName = '', courseCode = '' } = config;
    
    // Flatten unitData into a unified topic pool with unit context
    let topicPool = [];
    unitData.forEach(u => {
        const topics = u.topics || [];
        topics.forEach(t => {
            topicPool.push({ title: t, unit: `Unit ${u.id || 1}`, co: `CO${u.id || 1}` });
        });
    });

    if (topicPool.length === 0) {
        // Fallback to unit titles if no topics found
        topicPool = unitData.map(u => ({ title: u.title, unit: `Unit ${u.id || 1}`, co: `CO${u.id || 1}` }));
    }

    // Shuffle pool
    const shuffledPool = [...topicPool].sort(() => Math.random() - 0.5);
    
    let assignments = [];

    if (mode === 'auto') {
        const pool = [];
        let typeIdx = 0;

        while (pool.length < teams.length) {
            const curType = ASGN_TYPE_ORDER[typeIdx % ASGN_TYPE_ORDER.length];
            // Take one topic from the shuffled pool for this type
            const topicEntry = shuffledPool[pool.length % shuffledPool.length];
            pool.push({ topic: topicEntry.title, type: curType, unit: topicEntry.unit, co: topicEntry.co });
            typeIdx++;
        }

        assignments = teams.map((t, i) => {
            const entry = pool[i];
            const tpl = ASSIGN_TPL[entry.type] || ASSIGN_TPL.presentation;
            return {
                teamId: t.id,
                teamLabel: t.name || `Team ${i+1}`,
                subject: courseName,
                code: courseCode,
                topic: entry.topic,
                unit: entry.unit,
                co: entry.co,
                type: entry.type,
                objective: `To demonstrate proficiency in ${entry.topic} through ${entry.type}.`,
                description: `Complete the ${entry.type} as specified in the template.`,
                deliverables: ['Detailed Report', 'Sample Output/Demo', 'Team Discussion Summary'],
                criteria: ['Technical Accuracy (40%)', 'Clarity of Presentation (30%)', 'Peer Engagement (30%)'],
                text: tpl(entry.topic, courseName, courseCode)
            };
        });
    } else {
        const type = selectedType !== 'auto' ? selectedType : 'presentation';
        const typeKey = Object.keys(ASSIGN_TPL).find(k => k.toLowerCase().replace('_','') === type.toLowerCase().replace(' ','')) || 'presentation';
        
        assignments = teams.map((t, i) => {
            const topicEntry = shuffledPool[i % shuffledPool.length];
            const tpl = ASSIGN_TPL[typeKey] || ASSIGN_TPL.presentation;
            return {
                teamId: t.id,
                teamLabel: t.name || `Team ${i+1}`,
                subject: courseName,
                code: courseCode,
                topic: topicEntry.title,
                unit: topicEntry.unit,
                co: topicEntry.co,
                type: type,
                objective: `To explore ${topicEntry.title} via ${type}.`,
                description: `Focus on the application of ${topicEntry.title} in real-world scenarios.`,
                deliverables: ['Comprehensive Report', 'Visual Presentation', 'Q&A session record'],
                criteria: ['Involvement (20%)', 'Technical Depth (50%)', 'Articulation (30%)'],
                text: tpl(topicEntry.title, courseName, courseCode)
            };
        });
    }
    return assignments;
}

// ── Session Scheduling (Blocks of 3) ─────────────────────────────────────────
function logicComputePairings(teams) {
    if (!teams || !teams.length) return [];
    
    const k = teams.length;
    const shuffle = a => {
        const b = [...a];
        for (let i = b.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [b[i], b[j]] = [b[j], b[i]];
        }
        return b;
    };
    
    const order = shuffle([...teams]);
    const blocks = [];
    let globalSid = 1;
    
    const fullRounds = Math.floor(k / 3);
    const rem = k % 3;
    
    for (let b = 0; b < fullRounds; b++) {
        const sessions = [];
        for (let s = 0; s < 3; s++) {
            const pIdx = b * 3 + s;
            // Rotation: P, TR (Reviewer), FP (Feedback)
            sessions.push({
                sid: globalSid++,
                P: order[pIdx],
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
            completed: false,
            revealed: false
        });
    }
    
    if (rem > 0) {
        const sessions = [];
        for (let s = 0; s < rem; s++) {
            const pIdx = fullRounds * 3 + s;
            sessions.push({
                sid: globalSid++,
                P: order[pIdx],
                TR: order[(pIdx + 1) % k],
                FP: order[(pIdx + 2) % k]
            });
        }
        blocks.push({
            blockIdx: fullRounds + 1,
            sessions,
            date: '',
            period: '',
            scheduled: false,
            completed: false,
            revealed: false,
            isPartial: true
        });
    }
    
    return blocks;
}

// Export to window
window.ASSIGN_TPL = ASSIGN_TPL;
window.ASGN_TYPE_ORDER = ASGN_TYPE_ORDER;
window.logicGenerateAssignments = logicGenerateAssignments;
window.logicComputePairings = logicComputePairings;
