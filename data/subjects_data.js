/**
 * SUBJECTS_DATA — Department × Regulation subject lists
 * Code and name for each subject appear in the Step 1 dropdown.
 */
const SUBJECTS_DATA = {

    /* ─── R2021 (Batches 2027, 2028) ─────────────────────────────── */
    "R2021": {

        "ATE": [
            { code: "AU3601", name: "Automotive Pollution and Control", sem: 6 },
            { code: "AU3401", name: "Fuels and Lubricants", sem: 4 },
            { code: "AU3402", name: "Automotive Chassis", sem: 4 },
            { code: "AU3403", name: "Vehicle Body Engineering", sem: 4 },
            { code: "AU3404", name: "Automotive Transmission", sem: 4 },
            { code: "ML3391", name: "Mechanics of Solids", sem: 4 }
        ],

        "MCE": [
            { code: "ME3301", name: "Fluid Mechanics and Machinery", sem: 3 },
            { code: "ME3302", name: "Manufacturing Technology – II", sem: 3 },
            { code: "ME3303", name: "Engineering Thermodynamics", sem: 3 },
            { code: "ME3401", name: "Applied Thermodynamics", sem: 4 },
            { code: "ME3402", name: "Design of Machine Elements", sem: 4 },
            { code: "ME3403", name: "Metrology and Measurements", sem: 4 },
            { code: "ME3501", name: "Computer Aided Design and Manufacturing", sem: 5 },
            { code: "ME3601", name: "Mechatronics", sem: 6 }
        ],

        "CSE": [
            { code: "CS3452", name: "Theory of Computation", sem: 4 },
            { code: "CS3491", name: "Artificial Intelligence and Machine Learning", sem: 4 },
            { code: "CS3492", name: "Database Management Systems", sem: 4 },
            { code: "CS3401", name: "Algorithms", sem: 4 },
            { code: "CS3451", name: "Introduction to Operating Systems", sem: 4 },
            { code: "CCS356", name: "Object Oriented Software Engineering", sem: 6 },
            { code: "CS3691", name: "Embedded Systems and IoT", sem: 6 }
        ],

        "CVE": [
            { code: "CE3401", name: "Applied Hydraulics Engineering", sem: 4 },
            { code: "CE3402", name: "Strength of Materials", sem: 4 },
            { code: "CE3403", name: "Concrete Technology", sem: 4 },
            { code: "CE3404", name: "Soil Mechanics", sem: 4 },
            { code: "CE3405", name: "Highway and Railway Engineering", sem: 4 },
            { code: "CE3601", name: "Design of Steel Structural Elements", sem: 6 },
            { code: "CE3602", name: "Structural Analysis II", sem: 6 },
            { code: "AG3601", name: "Engineering Geology", sem: 6 }
        ],

        "ECE": [
            { code: "EC3452", name: "Electromagnetic Fields", sem: 4 },
            { code: "EC3401", name: "Networks and Security", sem: 4 },
            { code: "EC3451", name: "Linear Integrated Circuits", sem: 4 },
            { code: "EC3492", name: "Digital Signal Processing", sem: 4 },
            { code: "EC3491", name: "Communication Systems", sem: 4 },
            { code: "ET3491", name: "Embedded Systems and IoT Design", sem: 6 },
            { code: "CS3491", name: "Artificial Intelligence and Machine Learning", sem: 6 }
        ],

        "EEE": [
            { code: "EE3401", name: "Transmission and Distribution", sem: 4 },
            { code: "EE3402", name: "Linear Integrated Circuits", sem: 4 },
            { code: "EE3403", name: "Measurements and Instrumentation", sem: 4 },
            { code: "EE3404", name: "Microprocessor and Microcontroller", sem: 4 },
            { code: "EE3405", name: "Electrical Machines – II", sem: 4 },
            { code: "EE3601", name: "Protection and Switchgear", sem: 6 },
            { code: "EE3602", name: "Power System Operation and Control", sem: 6 }
        ],

        "CVE": [
            { code: "CE3301", name: "Fluid Mechanics" },
            { code: "CE3302", name: "Building Materials and Construction" },
            { code: "CE3303", name: "Mechanics of Solids" },
            { code: "CE3351", name: "Structural Analysis" },
            { code: "CE3401", name: "Concrete Technology" },
            { code: "CE3501", name: "Design of Concrete Structures" },
            { code: "CE3601", name: "Environmental Engineering" },
            { code: "CE3811", name: "Traffic Engineering" }
        ],

        "IMT": [
            { code: "CS3452", name: "Theory of Computation", sem: 4 },
            { code: "CS3491", name: "Artificial Intelligence and Machine Learning", sem: 4 },
            { code: "CS3492", name: "Database Management Systems", sem: 4 },
            { code: "IT3401", name: "Web Essentials", sem: 4 },
            { code: "CS3451", name: "Introduction to Operating Systems", sem: 4 },
            { code: "CCS356", name: "Object Oriented Software Engineering", sem: 6 }
        ],

        "CDS": [
            { code: "MA3151", name: "Matrices and Calculus", sem: 1 },
            { code: "HS3152", name: "Professional English – I", sem: 1 },
            { code: "DS3301", name: "Statistics for Data Science", sem: 3 },
            { code: "DS3401", name: "Machine Learning", sem: 4 },
            { code: "DS3501", name: "Big Data Analytics", sem: 5 },
            { code: "DS3601", name: "Deep Learning", sem: 6 }
        ]
    },

    /* ─── R2025 (Batch 2029+, Semester 2 common subjects) ────────── */
    "R2025": {

        "ATE": [
            { code: "MA25C02", name: "Linear Algebra", sem: 2 },
            { code: "ME25C02", name: "Engineering Mechanics", sem: 2 },
            { code: "EE25C01", name: "Basic Electrical and Electronics Engineering", sem: 2 },
            { code: "PH25C05", name: "Applied Physics (ME) – II", sem: 2 },
            { code: "CY25C03", name: "Applied Chemistry (ME) – II", sem: 2 }
        ],

        "MCE": [
            { code: "MA25C02", name: "Linear Algebra", sem: 2 },
            { code: "ME25C02", name: "Engineering Mechanics", sem: 2 },
            { code: "EE25C01", name: "Basic Electrical and Electronics Engineering", sem: 2 },
            { code: "PH25C05", name: "Applied Physics (ME) – II", sem: 2 },
            { code: "CY25C03", name: "Applied Chemistry (ME) – II", sem: 2 }
        ],

        "CSE": [
            { code: "MA25C02", name: "Linear Algebra", sem: 2 },
            { code: "EE25C01", name: "Basic Electrical and Electronics Engineering", sem: 2 },
            { code: "CS25C06", name: "Digital Principles and Computer Organization", sem: 2 },
            { code: "PH25C03", name: "Applied Physics (CSIE) – II", sem: 2 },
            { code: "CS25C07", name: "Object Oriented Programming", sem: 2 }
        ],

        "CVE": [
            { code: "MA25C02", name: "Linear Algebra", sem: 2 },
            { code: "ME25C02", name: "Engineering Mechanics", sem: 2 },
            { code: "PH25C02", name: "Applied Physics (CE) – II", sem: 2 },
            { code: "EE25C01", name: "Basic Electrical and Electronics Engineering", sem: 2 },
            { code: "CY25C02", name: "Applied Chemistry (CE) – II", sem: 2 },
            { code: "CE25201", name: "Construction Materials and Technology", sem: 2 }
        ],

        "ECE": [
            { code: "MA25C02", name: "Linear Algebra", sem: 2 },
            { code: "EE25C01", name: "Basic Electrical and Electronics Engineering", sem: 2 },
            { code: "EC25C01", name: "Electron Devices", sem: 2 },
            { code: "EC25C02", name: "Circuits and Network Analysis", sem: 2 },
            { code: "CS25C05", name: "Data Structures using C++", sem: 2 }
        ],

        "EEE": [
            { code: "MA25C03", name: "Transforms and its Applications", sem: 2 },
            { code: "GE25C01", name: "Basic Civil and Mechanical Engineering", sem: 2 },
            { code: "PH25C04", name: "Applied Physics (EE) – II", sem: 2 },
            { code: "ME25C01", name: "Engineering Drawing", sem: 2 },
            { code: "CS25C04", name: "Data Structures and Algorithms", sem: 2 }
        ],

        "IMT": [
            { code: "MA25C02", name: "Linear Algebra", sem: 2 },
            { code: "PH25C03", name: "Applied Physics (CSIE) – II", sem: 2 },
            { code: "IT25201", name: "Foundations of Data Science Using Python", sem: 2 },
            { code: "IT25202", name: "Digital Principles and System Design", sem: 2 },
            { code: "ME25C05", name: "Re-Engineering for Innovation", sem: 2 }
        ],

        "CDS": [
            { code: "MA25C02", name: "Linear Algebra", sem: 2 },
            { code: "EE25C01", name: "Basic Electrical and Electronics Engineering", sem: 2 },
            { code: "CS25C06", name: "Digital Principles and Computer Organization", sem: 2 },
            { code: "PH25C03", name: "Applied Physics (CSIE) – II", sem: 2 },
            { code: "CS25C07", name: "Object Oriented Programming", sem: 2 }
        ]
    }
};
