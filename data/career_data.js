/**
 * Career Path & Job Roles Data for SAM WEBAPP
 * Expanded CSE Edition with Google-Integrated Roadmaps
 */

const CAREER_RESOURCES = {
    'CSE': [
        {
            domain: 'Web Development',
            description: 'Building high-performance applications using Google-standard web vitals and modern frameworks.',
            roles: [
                {
                    title: 'Full Stack Web Engineer',
                    googleComparison: 'Equivalent to Google L3 Software Engineer (Web). Focuses on Core Web Vitals, accessible UI, and scalable Cloud Run backends.',
                    roadmap: [
                        'Phase 1: HTML5, CSS3 & JS (ES6+) - Foundation of the modern web.',
                        'Phase 2: Framework Mastery (React/Next.js or Angular) + State Management.',
                        'Phase 3: Backend & DevOps (Node.js, PostgreSQL, Docker, Google Cloud Run).'
                    ],
                    growth: 'Exponential',
                    salaryRange: '₹8L - ₹35L+',
                    complexity: 'Moderate',
                    skills: ['TypeScript', 'React', 'Node.js', 'Next.js', 'PostgreSQL'],
                    freeResources: ['web.dev (Google)', 'The Odin Project', 'FullStackOpen'],
                    paidCourses: ['Udemy: Complete Web Dev Bootcamp', 'Zero To Mastery']
                }
            ]
        },
        {
            domain: 'AI, Machine Learning & Data Science',
            description: 'Intelligent systems and data-driven insights using Google TensorFlow and Vertex AI.',
            roles: [
                {
                    title: 'Machine Learning Engineer',
                    googleComparison: 'Aligns with Google AI Research standards. Heavy emphasis on TensorFlow, JAX, and large-scale model training on TPUs.',
                    roadmap: [
                        'Phase 1: Linear Algebra, Calculus & Python for Data Science.',
                        'Phase 2: Supervised/Unsupervised Learning & Deep Learning with TensorFlow.',
                        'Phase 3: LLMs, Transformers & MLOps with Google Vertex AI.'
                    ],
                    growth: 'Very High',
                    salaryRange: '₹12L - ₹45L+',
                    complexity: 'Very High',
                    skills: ['Python', 'TensorFlow', 'PyTorch', 'Mathematics', 'Vertex AI'],
                    freeResources: ['Google ML Crash Course', 'Andrew Ng (Coursera)', 'Fast.ai'],
                    paidCourses: ['DeepLearning.AI Specialization', 'Udacity: ML Engineer']
                },
                {
                    title: 'Data Science & Analytics',
                    googleComparison: 'Mirroring Google Data Analyst roles. Focuses on BigQuery, Looker, and predictive modeling for business intelligence.',
                    roadmap: [
                        'Phase 1: Advanced SQL & Statistics for Business.',
                        'Phase 2: Python (Pandas/NumPy) & Data Visualization (Matplotlib, Tableau).',
                        'Phase 3: Big Data Analytics (Spark, BigQuery) & A/B Testing.'
                    ],
                    growth: 'High',
                    salaryRange: '₹10L - ₹38L',
                    complexity: 'High',
                    skills: ['SQL', 'Python', 'BigQuery', 'Statistics', 'Power BI'],
                    freeResources: ['Kaggle Learn', 'Google Data Analytics Certificate (Financial Aid)', 'Mode SQL Tutorial'],
                    paidCourses: ['DataCamp Premium', 'Coursera: IBM Data Science']
                }
            ]
        },
        {
            domain: 'Security & Infrastructure',
            description: 'Securing the world’s data and managing massive cloud networks.',
            roles: [
                {
                    title: 'Cybersecurity Analyst',
                    googleComparison: 'Follows Google Security Operations (SecOps) frameworks and Zero Trust Architecture standards.',
                    roadmap: [
                        'Phase 1: Networking Basics, Linux Command Line & Bash Scripting.',
                        'Phase 2: Threat Detection, Vulnerability Assessment & SIEM Tools.',
                        'Phase 3: Ethical Hacking, Cloud Security (GCP) & Incident Response.'
                    ],
                    growth: 'High',
                    salaryRange: '₹9L - ₹32L',
                    complexity: 'High',
                    skills: ['Linux', 'Network Security', 'Python', 'SIEM', 'Cloud Security'],
                    freeResources: ['Google Cybersecurity Certificate (Coursera)', 'TryHackMe', 'HackTheBox'],
                    paidCourses: ['CompTIA Security+', 'SANS Institute Training']
                },
                {
                    title: 'Cloud Computing & DevOps',
                    googleComparison: 'Focused on Google Cloud Platform (GCP). Heavy use of Kubernetes (GKE), Terraform, and SRE principles.',
                    roadmap: [
                        'Phase 1: Cloud Fundamentals (GCP/AWS) & Linux Administration.',
                        'Phase 2: Containerization (Docker) & Orchestration (Kubernetes).',
                        'Phase 3: CI/CD Pipelines, Infrastructure as Code (Terraform) & Monitoring.'
                    ],
                    growth: 'Very High',
                    salaryRange: '₹12L - ₹48L+',
                    complexity: 'High',
                    skills: ['Kubernetes', 'Docker', 'Terraform', 'GCP', 'Jenkins'],
                    freeResources: ['Google Cloud Skills Boost', 'Cloud Gurus YouTube', 'DevOps Roadmap (roadmap.sh)'],
                    paidCourses: ['Udemy: AWS/GCP Certifications', 'A Cloud Guru']
                }
            ]
        },
        {
            domain: 'Development & Design',
            description: 'Creating professional software across mobile, game, and system platforms.',
            roles: [
                {
                    title: 'Mobile App Developer',
                    googleComparison: 'Industry standard for Android/Cross-platform. Focuses on Flutter, Material Design 3, and Kotlin.',
                    roadmap: [
                        'Phase 1: Dart Programming (for Flutter) or Kotlin Fundamentals.',
                        'Phase 2: UI/UX Design with Material 3 & Navigation Patterns.',
                        'Phase 3: State Management (Provider/Bloc) & App Store Deployment.'
                    ],
                    growth: 'High',
                    salaryRange: '₹7L - ₹28L',
                    complexity: 'Moderate',
                    skills: ['Flutter', 'Kotlin', 'Firebase', 'Mobile UI', 'API Integration'],
                    freeResources: ['Android Dev Documentation', 'Flutter.dev', 'YouTube: Flutterly'],
                    paidCourses: ['Udemy: Flutter & Dart Complete Guide', 'iOS Academy']
                },
                {
                    title: 'Game Development',
                    googleComparison: 'Focus on high-performance C++ and graphics optimization, similar to Google’s internal graphics engineering teams.',
                    roadmap: [
                        'Phase 1: C# for Unity or C++ for Unreal Engine.',
                        'Phase 2: 3D Math, Physics Engines & Asset Management.',
                        'Phase 3: Shaders, Advanced AI & Network Multiplayer Logic.'
                    ],
                    growth: 'Medium',
                    salaryRange: '₹6L - ₹24L',
                    complexity: 'High',
                    skills: ['Unity/Unreal', 'C++', 'C#', 'Computer Graphics', 'Game Design'],
                    freeResources: ['Unity Learn', 'Unreal Online Learning', 'Brackeys YouTube'],
                    paidCourses: ['Gamedev.tv', 'Coursera: Game Development Specialization']
                },
                {
                    title: 'Software Development (Core)',
                    googleComparison: 'The quintessential "Google SWE" role. Mastery of Data Structures, Algorithms, and System Design.',
                    roadmap: [
                        'Phase 1: Mastery of C++/Java/Go & Advanced DS/Algo.',
                        'Phase 2: Operating Systems, Computer Architecture & DBMS.',
                        'Phase 3: Distributed Systems, Scalability & System Design.'
                    ],
                    growth: 'Steady',
                    salaryRange: '₹12L - ₹50L+',
                    complexity: 'Very High',
                    skills: ['Data Structures', 'Algorithms', 'System Design', 'C++', 'Go'],
                    freeResources: ['LeetCode', 'NeetCode.io', 'MIT OpenCourseWare'],
                    paidCourses: ['Educative: Grokking System Design', 'AlgoExpert']
                },
                {
                    title: 'UI/UX Design',
                    googleComparison: 'Strictly following Google Material Design System and User-Centered Research methodologies.',
                    roadmap: [
                        'Phase 1: Design Principles (Color Theory, Typography) & Figma.',
                        'Phase 2: User Research, Wireframing & Prototyping.',
                        'Phase 3: Design Systems, Accessibility & Interaction Design.'
                    ],
                    growth: 'High',
                    salaryRange: '₹6L - ₹22L',
                    complexity: 'Moderate',
                    skills: ['Figma', 'User Research', 'Material Design', 'Prototyping', 'Accessibility'],
                    freeResources: ['Google UX Design Certificate (Coursera)', 'Figma Academy', 'UX Collective'],
                    paidCourses: ['Interaction Design Foundation', 'Designlab']
                }
            ]
        },
        {
            domain: 'Emerging Technologies',
            description: 'The frontier of engineering including Web3, AR/VR, and Quantum systems.',
            roles: [
                {
                    title: 'Blockchain Development',
                    googleComparison: 'Alignable with Google Cloud’s Web3 initiative. Focus on Decentralized Storage and Smart Contract security.',
                    roadmap: [
                        'Phase 1: Web Development Basics & Solidity (for Ethereum).',
                        'Phase 2: Smart Contracts, DeFi Protocols & Web3.js/Ethers.js.',
                        'Phase 3: Layer 2 Scaling, dApp Security & Rust (for Solana).'
                    ],
                    growth: 'High',
                    salaryRange: '₹12L - ₹40L',
                    complexity: 'High',
                    skills: ['Solidity', 'Rust', 'Web3.js', 'Smart Contracts', 'Cryptography'],
                    freeResources: ['CryptoZombies', 'BuildSpace', 'EatTheBlocks'],
                    paidCourses: ['Alchemy University', 'Moralis Academy']
                },
                {
                    title: 'AR/VR Development',
                    googleComparison: 'Focuses on Google Poly, ARCore, and high-performance WebXR experiences.',
                    roadmap: [
                        'Phase 1: 3D Modeling (Blender) & Game Engine Basics (Unity).',
                        'Phase 2: ARCore/ARKit Integration & VR Interaction Design.',
                        'Phase 3: Spatial Computing, Haptics & Optimization for Mobile AR.'
                    ],
                    growth: 'Medium',
                    salaryRange: '₹8L - ₹26L',
                    complexity: 'High',
                    skills: ['Unity', 'ARCore', 'C#', 'Blender', 'Spatial Design'],
                    freeResources: ['Google ARCore Documentation', 'Circuit Stream Webinars', 'YouTube: Valem VR'],
                    paidCourses: ['Udacity: VR Developer Nanodegree', 'Coursera: AR/VR Specialization']
                },
                {
                    title: 'Internet of Things (IoT)',
                    googleComparison: 'Integration with Google Cloud IoT Core and edge computing paradigms.',
                    roadmap: [
                        'Phase 1: Electronics Basics, Microcontrollers (Arduino/ESP32).',
                        'Phase 2: IoT Protocols (MQTT, CoAP) & Embedded C/C++.',
                        'Phase 3: Edge AI, IoT Security & Cloud Integration (GCP IoT).'
                    ],
                    growth: 'Steady',
                    salaryRange: '₹6L - ₹18L',
                    complexity: 'High',
                    skills: ['Embedded C', 'Protocols (MQTT)', 'Arduino', 'Python', 'Sensors'],
                    freeResources: ['Arduino Project Hub', 'Coursera: IoT Specialization (Audit)', 'Hackster.io'],
                    paidCourses: ['Udemy: IoT Masterclass', 'LinkedIn Learning: IoT Systems']
                },
                {
                    title: 'Quantum Computing Engineer',
                    googleComparison: 'State-of-the-art research as seen in Google Quantum AI. Mastery of Cirq and Qubits.',
                    roadmap: [
                        'Phase 1: Linear Algebra, Complex Numbers & Probability Theory.',
                        'Phase 2: Quantum Mechanics Basics & Qubits (Superposition/Entanglement).',
                        'Phase 3: Quantum Algorithms & Programming with Cirq (Google) or Qiskit.'
                    ],
                    growth: 'Future-High',
                    salaryRange: '₹15L - ₹60L+',
                    complexity: 'Extreme',
                    skills: ['Quantum Mechanics', 'Linear Algebra', 'Cirq/Qiskit', 'Python', 'Physics'],
                    freeResources: ['Google Quantum AI Cirq Tutorials', 'IBM Quantum Learning', 'Quantum Country'],
                    paidCourses: ['MIT: Quantum Computing Fundamentals', 'edX: Quantum Mechanics']
                }
            ]
        }
    ],
    // ... Keeping other departments as they were but could be expanded similarly
    'ECE': [
        {
            domain: 'Embedded Systems & IoT',
            roles: [
                {
                    title: 'Embedded Firmware Engineer',
                    growth: 'Steady',
                    salaryRange: '₹5L - ₹15L',
                    complexity: 'High',
                    skills: ['Embedded C', 'RTOS', 'STM32', 'Communication Protocols'],
                    freeResources: ['Embedded.fm', 'Quantum Leaps'],
                    paidCourses: ['FastBit Academy']
                }
            ]
        }
    ],
    'EEE': [
        {
            domain: 'Power & EV',
            roles: [
                {
                    title: 'EV System Engineer',
                    growth: 'Exponential',
                    salaryRange: '₹6L - ₹20L',
                    complexity: 'High',
                    skills: ['BMS', 'Motors', 'Simulink', 'CAN'],
                    freeResources: ['TI EV Resources', 'BloombergNEF'],
                    paidCourses: ['Skill-Lync: EV Design']
                }
            ]
        }
    ],
    'MCE': [
        {
            domain: 'Robotics & CAD',
            roles: [
                {
                    title: 'Robotics Engineer',
                    growth: 'Very High',
                    salaryRange: '₹7L - ₹18L',
                    complexity: 'High',
                    skills: ['ROS', 'Mechatronics', 'Control Theory'],
                    freeResources: ['ROS Wiki', 'MIT OCW'],
                    paidCourses: ['Udacity Robotics']
                }
            ]
        }
    ],
    'CVE': [
        {
            domain: 'BIM & Structures',
            roles: [
                {
                    title: 'BIM Coordinator',
                    growth: 'High',
                    salaryRange: '₹5L - ₹18L',
                    complexity: 'Moderate',
                    skills: ['Revit', 'Navisworks', 'Scheduling'],
                    freeResources: ['Revit Pure', 'Autodesk Academy'],
                    paidCourses: ['LinkedIn Learning BIM']
                }
            ]
        }
    ],
    'ATE': [
        {
            domain: 'EV Diagnostics',
            roles: [
                {
                    title: 'EV Calibration Engineer',
                    growth: 'Very High',
                    salaryRange: '₹6L - ₹18L',
                    complexity: 'High',
                    skills: ['BMS', 'OBD', 'Dynamics'],
                    freeResources: ['Engineering Explained'],
                    paidCourses: ['Skill-Lync']
                }
            ]
        }
    ],
    'CDS': [
        {
            domain: 'Analytics',
            roles: [
                {
                    title: 'BI Developer',
                    growth: 'High',
                    salaryRange: '₹6L - ₹18L',
                    complexity: 'Moderate',
                    skills: ['Power BI', 'SQL', 'ETL'],
                    freeResources: ['Microsoft Learn', 'SQLZoo'],
                    paidCourses: ['Maven Analytics']
                }
            ]
        }
    ],
    'IMT': [
        {
            domain: 'Cloud',
            roles: [
                {
                    title: 'Cloud Architect',
                    growth: 'Very High',
                    salaryRange: '₹12L - ₹45L+',
                    complexity: 'Very High',
                    skills: ['AWS/GCP', 'Kubernetes', 'Terraform'],
                    freeResources: ['AWS Skills Boost'],
                    paidCourses: ['A Cloud Guru']
                }
            ]
        }
    ]
};
