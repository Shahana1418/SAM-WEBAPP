/**
 * Career Path & Job Roles Data for SAM WEBAPP
 * Providing department-specific guidance, skills, and resources.
 */

const CAREER_RESOURCES = {
    'CSE': [
        {
            domain: 'Software Development',
            description: 'Building applications, systems, and platforms using modern programming paradigms.',
            roles: [
                {
                    title: 'Full Stack Developer',
                    growth: 'Very High',
                    salaryRange: '₹6L - ₹25L+',
                    complexity: 'High',
                    skills: ['JavaScript/TypeScript', 'React/Next.js', 'Node.js/Python', 'Database (SQL/NoSQL)'],
                    freeResources: ['The Odin Project', 'FreeCodeCamp', 'FullStackOpen (Helsinki University)'],
                    paidCourses: ['Udemy: Complete Web Development Bootcamps', 'Zero To Mastery: Full Stack Developer']
                },
                {
                    title: 'Mobile App Developer',
                    growth: 'High',
                    salaryRange: '₹5L - ₹18L',
                    complexity: 'Moderate',
                    skills: ['Flutter', 'React Native', 'Swift/Kotlin', 'Mobile UI Patterns'],
                    freeResources: ['Flutter Dev Documentation', 'YouTube: Flutterly', 'Android Basics (Google)'],
                    paidCourses: ['Udemy: Flutter & Dart - The Complete Guide', 'iOS Academy']
                }
            ]
        },
        {
            domain: 'AI & Data Science',
            description: 'Analyzing data and building intelligent models to solve complex problems.',
            roles: [
                {
                    title: 'Data Scientist',
                    growth: 'Exponential',
                    salaryRange: '₹8L - ₹35L+',
                    complexity: 'Very High',
                    skills: ['Python/R', 'Machine Learning', 'Statistics', 'Pandas/NumPy', 'Data Visualization'],
                    freeResources: ['Kaggle Courses', 'YouTube: Sentdex', 'Python for Everybody (Coursera Audit)'],
                    paidCourses: ['Coursera: Machine Learning Specialization (Andrew Ng)', 'DataCamp Premium']
                },
                {
                    title: 'Machine Learning Engineer',
                    growth: 'Very High',
                    salaryRange: '₹10L - ₹40L+',
                    complexity: 'High',
                    skills: ['TensorFlow/PyTorch', 'Model Deployment', 'AWS/GCP MLOps', 'Deep Learning'],
                    freeResources: ['Fast.ai', 'Google AI Courses', 'PyTorch Documentation Tutorials'],
                    paidCourses: ['Udemy: Deep Learning A-Z', 'DeepLearning.AI Specializations']
                }
            ]
        }
    ],
    'ECE': [
        {
            domain: 'Embedded Systems & IoT',
            description: 'Designing and programming hardware-focused systems for smart devices.',
            roles: [
                {
                    title: 'Embedded Firmware Engineer',
                    growth: 'Steady',
                    salaryRange: '₹5L - ₹15L',
                    complexity: 'High',
                    skills: ['Embedded C/C++', 'RTOS', 'Microcontrollers (STM32/ESP32)', 'Protocol Communication'],
                    freeResources: ['Embedded.fm', 'YouTube: Quantum Leaps', 'Arduino Projects'],
                    paidCourses: ['FastBit Embedded Brain Academy', 'Udemy: Mastering RTOS']
                },
                {
                    title: 'VLSI Design Engineer',
                    growth: 'Moderate',
                    salaryRange: '₹7L - ₹22L',
                    complexity: 'Very High',
                    skills: ['Verilog/VHDL', 'ASIC/FPGA Design', 'Digital Electronics', 'EDA Tools'],
                    freeResources: ['VLSI Expert Blog', 'NPTEL Courses (IIT Madres)', 'EDA Playground'],
                    paidCourses: ['Cadence Certification', 'Skill-Lync: VLSI Design Course']
                }
            ]
        }
    ],
    'EEE': [
        {
            domain: 'Power Systems & Renewable Energy',
            description: 'Managing electrical grids and transitioning to sustainable energy solutions.',
            roles: [
                {
                    title: 'Solar Power Plant Engineer',
                    growth: 'High',
                    salaryRange: '₹4L - ₹12L',
                    complexity: 'Moderate',
                    skills: ['Solar PV Design', 'Power Electronics', 'AutoCAD Electrical', 'Grid Integration'],
                    freeResources: ['IRENA Reports', 'EDX: Solar Energy Basics', 'YouTube: Engineering Mindset'],
                    paidCourses: ['Udemy: Solar Energy System Design', 'Pantech Solutions: EV Design']
                },
                {
                    title: 'EV System Engineer',
                    growth: 'Exponential',
                    salaryRange: '₹6L - ₹20L',
                    complexity: 'High',
                    skills: ['Battery Management Systems (BMS)', 'Motor Control', 'CAN Protocol', 'MATLAB/Simulink'],
                    freeResources: ['Texas Instruments EV Resources', 'BloombergNEF Insights'],
                    paidCourses: ['Coursera: Electric Vehicles and Mobility', 'Skill-Lync: EV Design']
                }
            ]
        }
    ],
    'MCE': [
        {
            domain: 'Design & Robotics',
            description: 'Mechanical design and automaton using advanced CAD and control systems.',
            roles: [
                {
                    title: 'CAD Designer (Automotive/Aero)',
                    growth: 'Steady',
                    salaryRange: '₹4L - ₹12L',
                    complexity: 'Moderate',
                    skills: ['SolidWorks/CATIA', 'Finite Element Analysis (FEA)', 'Design for Manufacturing', 'GD&T'],
                    freeResources: ['GrabCAD Tutorials', 'YouTube: SolidWorks Tutorials', 'AutoDesk Academy'],
                    paidCourses: ['SolidWorks Certification Pro', 'Skill-Lync: Automotive Chassis Design']
                },
                {
                    title: 'Robotics Engineer',
                    growth: 'Very High',
                    salaryRange: '₹7L - ₹18L',
                    complexity: 'High',
                    skills: ['ROS (Robot Operating System)', 'Mechatronics', 'Kinematics', 'Control Theory'],
                    freeResources: ['ROS Wiki Tutorials', 'YouTube: ConstructSim', 'MIT OpenCourseWare: Robotics'],
                    paidCourses: ['Udacity: Robotics Software Engineer Nanodegree', 'Coursera: Modern Robotics']
                }
            ]
        }
    ],
    'CVE': [
        {
            domain: 'Structural Engineering & BIM',
            description: 'Designing safe structures and using digital information modeling for infrastructure.',
            roles: [
                {
                    title: 'Structural Design Engineer',
                    growth: 'Steady',
                    salaryRange: '₹4L - ₹15L',
                    complexity: 'High',
                    skills: ['STAAD.Pro/ETABS', 'Eurocodes/IS Codes', 'Reinforced Concrete Design', 'Seismic Analysis'],
                    freeResources: ['Learn Structural Engineering', 'YouTube: Civil Mentors', 'CivilDigital.com'],
                    paidCourses: ['Udemy: Structural Analysis with ETABS', 'Bentley Systems Training']
                },
                {
                    title: 'BIM Coordinator',
                    growth: 'High',
                    salaryRange: '₹5L - ₹18L',
                    complexity: 'Moderate',
                    skills: ['Autodesk Revit', 'Navisworks', 'Construction Scheduling', 'Project Management'],
                    freeResources: ['Revit Pure', 'AEC Magazine', 'Autodesk BIM Learning Path'],
                    paidCourses: ['LinkedIn Learning: BIM Management', 'Coursera: BIM Fundamentals']
                }
            ]
        }
    ],
    'ATE': [
        {
            domain: 'Electric Vehicles & Diagnostics',
            description: 'Leading the transition to electric mobility and smart vehicle diagnostics.',
            roles: [
                {
                    title: 'EV Calibration Engineer',
                    growth: 'Very High',
                    salaryRange: '₹6L - ₹18L',
                    complexity: 'High',
                    skills: ['Battery Characterization', 'Thermal Management', 'Vehicle Dynamics Control', 'OBD Diagnostics'],
                    freeResources: ['AVERE - EV Research', 'YouTube: Engineering Explained', 'Green Car Reports'],
                    paidCourses: ['Skill-Lync: EV Diagnostics & Maintenance', 'Udemy: Hybrid Electric Vehicles']
                }
            ]
        }
    ],
    'CDS': [
        {
            domain: 'Advanced Analytics',
            description: 'Extracting deep insights from large-scale data systems.',
            roles: [
                {
                    title: 'Business Intelligence Developer',
                    growth: 'High',
                    salaryRange: '₹6L - ₹18L',
                    complexity: 'Moderate',
                    skills: ['Power BI/Tableau', 'SQL (Advanced)', 'ETL Pipelines', 'DAX/MDX'],
                    freeResources: ['Microsoft Power BI Learning Path', 'SQLZoo', 'Tableau Public'],
                    paidCourses: ['Maven Analytics: Power BI Desktop', 'Coursera: Google BI Professional']
                }
            ]
        }
    ],
    'IMT': [
        {
            domain: 'Cloud & DevOps',
            description: 'Scalable infrastructure management and automation of software delivery.',
            roles: [
                {
                    title: 'Cloud Architect',
                    growth: 'Very High',
                    salaryRange: '₹12L - ₹45L+',
                    complexity: 'Very High',
                    skills: ['AWS/Azure/GCP', 'Kubernetes/Docker', 'Terraform (IaC)', 'Networking & Security'],
                    freeResources: ['AWS Training Portal (Free Tier)', 'Cloud Gurus YouTube', 'DigitalOcean Community Tutorials'],
                    paidCourses: ['A Cloud Guru', 'Udemy: AWS Certified Solutions Architect']
                }
            ]
        }
    ]
};
