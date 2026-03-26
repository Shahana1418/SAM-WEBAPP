const fs = require('fs');
const path = require('path');

// 1. Read existing data
const subjPath = path.join(__dirname, 'subjects_data.js');
const sylPath = path.join(__dirname, 'syllabus_details.js');

let subjContent = fs.readFileSync(subjPath, 'utf8');
let sylContent = fs.readFileSync(sylPath, 'utf8');

// Use eval to safely get the objects
let SUBJECTS_DATA = {};
eval(subjContent + "\n SUBJECTS_DATA = arguments[0];")(SUBJECTS_DATA);
var evalSubjStr = subjContent.replace(/const SUBJECTS_DATA\s*=\s*/, 'module.exports = ');
const sDataFunc = new Function('module', evalSubjStr);
const subjMod = {exports: {}};
sDataFunc(subjMod);
const sData = subjMod.exports;

var evalSylStr = sylContent.replace(/const SYLLABUS_DETAILS\s*=\s*/, 'module.exports = ');
const sylMod = {exports: {}};
new Function('module', evalSylStr)(sylMod);
const sylData = sylMod.exports;

// 2. Generator for details
function genDef(code, name, reg) {
    return {
        name: name,
        regulation: reg,
        department: "Common",
        credits: 3,
        ltp: "3-0-0",
        objectives: [
            `To understand the fundamental concepts of ${name}`,
            `To apply principles and analytical techniques to ${name} problems`,
            `To develop problem-solving skills in relevant domains`,
            `To analyze complex systems associated with the subject`,
            `To design solutions using state-of-the-art methods`
        ],
        outcomes: [
            { id: "CO1", desc: "Understand the basic concepts and principles." },
            { id: "CO2", desc: "Apply theoretical methods to practical scenarios." },
            { id: "CO3", "desc": "Analyze system performance and behavior." },
            { id: "CO4", "desc": "Evaluate different implementations and approaches." },
            { id: "CO5", "desc": "Design simple models or complete systems." }
        ],
        units: [
            {
                id: 1,
                title: "Introduction and Basic Concepts",
                topics: ["Definition and scope", "Fundamental theories", "Basic definitions", "Overview of applications"]
            },
            {
                id: 2,
                title: "Analysis and Principles",
                topics: ["Analytical methods", "Core principles", "Mathematical modeling", "Key algorithms"]
            },
            {
                id: 3,
                title: "Design and Implementation",
                topics: ["Design methodologies", "Architecture overview", "Implementation steps", "Case studies"]
            },
            {
                id: 4,
                title: "Advanced Topics",
                topics: ["Complex scenarios", "Advanced techniques", "Performance evaluation", "Optimization"]
            },
            {
                id: 5,
                title: "Applications and Future Trends",
                topics: ["Recent advancements", "Industry applications", "Emerging technologies", "Future scope"]
            }
        ]
    };
}

// 3. Populate missing
for (let reg in sData) {
    for (let dept in sData[reg]) {
        for (let subj of sData[reg][dept]) {
            if (!sylData[subj.code]) {
                sylData[subj.code] = genDef(subj.code, subj.name, reg);
            }
        }
    }
}

// 4. Write back
const finalStr = `/**
 * SYLLABUS_DETAILS — Full syllabus info per subject
 * Includes: Course Objectives, Course Outcomes (COs), Units with titles & subtopics
 * Keyed by subject code (e.g. "CS3401")
 */
const SYLLABUS_DETAILS = ${JSON.stringify(sylData, null, 4)};
`;

fs.writeFileSync(sylPath, finalStr);
console.log(`Successfully generated syllabus info for ${Object.keys(sylData).length} subjects!`);
