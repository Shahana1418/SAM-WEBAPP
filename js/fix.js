const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, '../data/syllabus_details.js');
let text = fs.readFileSync(file, 'utf8');

// Replace: "COURSE_CODE": "name": "NAME",
// With: "COURSE_CODE": { "name": "NAME",
text = text.replace(/"([A-Z0-9]+)":\s+"name":\s+"([^"]*)",/g, '"$1": {\n        "name": "$2",');

// The objects currently end with the "units" array:
//         ]
//
//     "ANOTHER_COURSE": { ...
//
// We need to inject `    },` before `"ANOTHER_COURSE"` and before the final `}` of `SYLLABUS_DETAILS`.

// Let's split on the new `"`COURSE_CODE`": {` and add `    },` at the end of every previous segment (except the first one).
// Because the regex below matches the new structure.
const segments = text.split(/\n\s+"([A-Z0-9]+)": \{\n\s+"name":/);
let output = segments[0];

for (let i = 1; i < segments.length; i += 2) {
    const courseCode = segments[i];
    const rest = segments[i + 1];
    
    // For all segments but the first course, we need to append a closing `}` for the previous course.
    if (i === 1) {
        output += `\n    "${courseCode}": {\n        "name":` + rest;
    } else {
        // Find the last `],` in the output and replace it with `]\n    },`
        output = output.replace(/],\s*$/, ']\n    },\n');
        output += `    "${courseCode}": {\n        "name":` + rest;
    }
}

// Add final closing brace for the last course
output = output.replace(/],\s*};\s*$/, ']\n    }\n};\n');

fs.writeFileSync(file, output);
console.log('Fixed syllabus_details.js syntax!');
