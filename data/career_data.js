/**
 * Career Path & Job Roles Data for SAM WEBAPP
 * Expanded CSE Edition with AI-Generated Roadmaps and Global Company Lists
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
                    steps: [
                        { week: '1-2', topic: 'Modern HTML5 & Semantic Web', details: 'Accessibility, SEO, Meta Tags, and Microdata.' },
                        { week: '3-4', topic: 'Advanced CSS3 & Modern Layouts', details: 'CSS Grid, Flexbox, Containers, and Responsive Design Systems.' },
                        { week: '5-8', topic: 'JavaScript Mastery (ES6-ESNext)', details: 'Async/Await, Closures, Prototypes, and Functional Programming.' },
                        { week: '9-12', topic: 'React/Next.js Framework Architecture', details: 'Server Actions, SSR/SSG, Hooks, and Component Patterns.' },
                        { week: '13-16', topic: 'Backend Systems & Database Design', details: 'Node.js, PostgreSQL (Prisma), Redis, and API Security.' },
                        { week: '17-24', topic: 'Cloud Deployment & DevOps', details: 'Docker, CI/CD Pipelines, and Google Cloud Platform (GCP).' }
                    ],
                    companies: ['Google', 'Meta', 'Amazon', 'Netflix', 'Airbnb', 'Razorpay', 'Zomato', 'Microsoft'],
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
                    steps: [
                        { week: '1-4', topic: 'Mathematics for AI', details: 'Linear Algebra, Calculus, Probability, and Optimization.' },
                        { week: '5-8', topic: 'Python & Data Wrangling', details: 'NumPy, Pandas, Scikit-Learn, and Feature Engineering.' },
                        { week: '9-12', topic: 'Classical Machine Learning', details: 'Regression, Classification, SVMs, and Decision Trees.' },
                        { week: '13-16', topic: 'Deep Learning with TensorFlow', details: 'Neural Networks, CNNs (Vision), and RNNs.' },
                        { week: '17-20', topic: 'NLP & LLMs (Transformers)', details: 'BERT, GPT Architectures, and Fine-tuning Models.' },
                        { week: '21-24', topic: 'MLOps & Deployment', details: 'Model Serving, Vertex AI Pipelines, and Monitoring.' }
                    ],
                    companies: ['Google DeepMind', 'OpenAI', 'NVIDIA', 'Tesla', 'IBM Watson', 'Microsoft Research', 'Meta AI'],
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
                    steps: [
                        { week: '1-3', topic: 'Professional SQL', details: 'Complex Joins, Window Functions, and Query Optimization.' },
                        { week: '4-6', topic: 'Statistical Modeling', details: 'Hypothesis Testing, Regression Analysis, and A/B Tests.' },
                        { week: '7-10', topic: 'Python Data Ecosystem', details: 'Pandas, NumPy, and Seaborn for Exploratory Data Analysis (EDA).' },
                        { week: '11-14', topic: 'Data Visualization & Storytelling', details: 'Tableau, Power BI, and Looker Studio.' },
                        { week: '15-18', topic: 'Predictive Analytics', details: 'Time Series Forecasting and Clustering.' },
                        { week: '19-24', topic: 'Big Data & Cloud Warehousing', details: 'BigQuery, Snowflake, and Apache Spark.' }
                    ],
                    companies: ['Google Cloud', 'Netflix', 'Amazon', 'Spotify', 'Uber', 'LinkedIn', 'McKinsey', 'Accenture'],
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
                    steps: [
                        { week: '1-4', topic: 'Networking & OS Basics', details: 'TCP/IP, OSI, Linux SysAdmin, and Windows Security.' },
                        { week: '5-8', topic: 'Defense Fundamentals', details: 'Firewalls, VPNs, Cryptography, and Access Control.' },
                        { week: '9-12', topic: 'Threat Identification', details: 'Vulnerability Scanning, SIEM (Splunk), and Log Analysis.' },
                        { week: '13-16', topic: 'Attack Vectors & Hacking', details: 'Metasploit, Nmap, Reconnaissance, and Web Exploits.' },
                        { week: '17-20', topic: 'Cloud Security', details: 'IAM, VPC Service Controls, and Kubernetes Security.' },
                        { week: '21-24', topic: 'Incident Response (DFIR)', details: 'Forensics, Malware Analysis, and SOC Operations.' }
                    ],
                    companies: ['CrowdStrike', 'Palo Alto Networks', 'FireEye', 'Google (Mandiant)', 'Cisco', 'Cloudflare'],
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
                    steps: [
                        { week: '1-4', topic: 'Cloud Foundations', details: 'Virtual Machines, VPCs, IAM, and Serverless Basics (GCP).' },
                        { week: '5-8', topic: 'Linux & Scripting', details: 'Shell Scripting, Regex, and Python for Automation.' },
                        { week: '9-12', topic: 'Docker Containers', details: 'Dockerfiles, Images, Networking, and Persistent Storage.' },
                        { week: '13-16', topic: 'Kubernetes (K8s) Mastery', details: 'Pods, Deployments, Services, and Helm Charts.' },
                        { week: '17-20', topic: 'Infrastructure as Code (IaC)', details: 'Terraform, Ansible, and CloudFormation.' },
                        { week: '21-24', topic: 'CI/CD & Monitoring', details: 'Jenkins/GitLab CI, Prometheus, and Grafana.' }
                    ],
                    companies: ['Google Cloud', 'AWS', 'Microsoft Azure', 'Red Hat', 'HashiCorp', 'DataDog', 'Atlassian'],
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
                    steps: [
                        { week: '1-4', topic: 'Language Mastery', details: 'Dart Fundamentals (for Flutter) or Kotlin for Native Android.' },
                        { week: '5-8', topic: 'UI & Layouts', details: 'Widgets/Views, Material Design 3, and Responsive Layouts.' },
                        { week: '9-12', topic: 'Data & Networking', details: 'REST APIs, JSON Parsing, and Local Persistence (SQLite).' },
                        { week: '13-16', topic: 'State Management', details: 'Provider, Bloc, or Redux for Scalable Architecture.' },
                        { week: '17-20', topic: 'Hardware Integration', details: 'Camera, GPS, Biometrics, and Push Notifications.' },
                        { week: '21-24', topic: 'Testing & Launch', details: 'Unit/Widget Testing, App Store/Play Store Submission.' }
                    ],
                    companies: ['Google', 'Meta (React Native)', 'Apple (Swift)', 'Uber', 'Swiggy', 'PhonePe', 'Adobe'],
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
                    steps: [
                        { week: '1-4', topic: 'C# / C++ Programming', details: 'Basics of Game Logic, OOP, and Memory Management.' },
                        { week: '5-8', topic: 'Unity/Unreal Engine Fundamentals', details: 'Editor, Scenes, GameObjects, and Scripting.' },
                        { week: '9-12', topic: 'Mathematics for Gamedev', details: 'Vectors, Matrices, Quaternions, and Physics Simulation.' },
                        { week: '13-16', topic: 'Graphics & Assets', details: 'Meshes, Materials, Shaders (HLSL/GLSL), and Lighting.' },
                        { week: '17-20', topic: 'Game Systems AI', details: 'Pathfinding, State Machines, and Behavior Trees.' },
                        { week: '21-24', topic: 'Multiplayer & Audio', details: 'Networking (Photon/Mirror) and Sound Design.' }
                    ],
                    companies: ['Electronic Arts (EA)', 'Ubisoft', 'Epic Games', 'Rockstar Games', 'Sony Interactive', 'Nintendo', 'Unity'],
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
                    steps: [
                        { week: '1-6', topic: 'Master of One Language', details: 'Deep dive into C++, Java, or Go. Advanced Memory & Concurrency.' },
                        { week: '7-12', topic: 'DS & Algo Mastery', details: 'Graphs, Dynamic Programming, Greedy Algos, and Bit Manipulation.' },
                        { week: '13-16', topic: 'CS Theory Foundations', details: 'OS (Multi-threading, Scheduling), DBMS, and Networking.' },
                        { week: '17-20', topic: 'System Design (HLD/LLD)', details: 'Scalability, Load Balancing, Caching, and Microservices.' },
                        { week: '21-24', topic: 'Core Engineering Projects', details: 'Build a Compiler, Web Server, or Database Engine from scratch.' }
                    ],
                    companies: ['Google', 'Microsoft', 'Amazon', 'Adobe', 'Oracle', 'Intel', 'AMD', 'Quora'],
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
                    steps: [
                        { week: '1-3', topic: 'Design Fundamentals', details: 'Color Theory, Typography, Grid Systems, and Visual Hierarchy.' },
                        { week: '4-6', topic: 'Figma Mastery', details: 'Auto-layout, Components, Prototyping, and Design Tokens.' },
                        { week: '7-10', topic: 'User Research', details: 'Persona, Journey Mapping, Surveys, and Competitive Analysis.' },
                        { week: '11-14', topic: 'Wireframing & UX Laws', details: 'Lows-Fidelity to High-Fidelity Design and UX Psychology.' },
                        { week: '15-18', topic: 'Interaction Design', details: 'Micro-animations, Transitions, and Motion Design.' },
                        { week: '19-24', topic: 'Case Study & Portfolio', details: 'End-to-end design documentation and showcase.' }
                    ],
                    companies: ['Google (Design)', 'Apple', 'Meta', 'Airbnb', 'Pinterest', 'Spotify', 'Canva', 'Razorpay'],
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
                    steps: [
                        { week: '1-4', topic: 'Introduction to Web3', details: 'Demos, Wallets, Nodes, and Decentralization Concepts.' },
                        { week: '5-8', topic: 'Solidity Programming', details: 'Smart Contracts, EVM, GAS Optimization, and Security.' },
                        { week: '9-12', topic: 'Frontend Integration', details: 'Web3.js, Ethers.js, wagmi, and Infura/Alchemy.' },
                        { week: '13-16', topic: 'DeFi & NFTs', details: 'ERC20, ERC721, DEXs, and Liquidity Pools.' },
                        { week: '17-20', topic: 'Solana & Rust', details: 'Move to speed-focused chains with Rust and Anchor.' },
                        { week: '21-24', topic: 'Auditing & L2', details: 'Smart Contract Auditing, ZK-Rollups, and L2 Scaling.' }
                    ],
                    companies: ['Coinbase', 'Binance', 'ConsenSys', 'Polygon', 'Chainlink', 'Solana Labs', 'OpenSea'],
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
                    steps: [
                        { week: '1-4', topic: '3D Creation Foundations', details: 'Modeling in Blender, Texturing, and Exporting Assets.' },
                        { week: '5-8', topic: 'Unity for XR', details: 'XR Interaction Toolkit, Oculus Integration, and Scripting.' },
                        { week: '9-12', topic: 'AR Core (Google)', details: 'Motion Tracking, Environmental Understanding, and Light Estimation.' },
                        { week: '13-16', topic: 'Spatial UI/UX Design', details: 'Designing for 3D Space, Eye-tracking, and Gesture Controls.' },
                        { week: '17-20', topic: 'WebXR & Metaverses', details: 'A-Frame, Three.js, and browser-based immersive apps.' },
                        { week: '21-24', topic: 'System Optimization', details: 'Performance profiling for Quest/Mobile headsets.' }
                    ],
                    companies: ['Meta (Reality Labs)', 'Apple (Vision Pro)', 'Unity', 'Microsoft (HoloLens)', 'Snap Inc', 'Niantic'],
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
                    steps: [
                        { week: '1-4', topic: 'Electronics & Hardware', details: 'Circuits, Resistors, Sensors, and Breadboard Prototyping.' },
                        { week: '5-8', topic: 'Microcontroller Scripting', details: 'Arduino C++, ESP32 Features, and GPIO Control.' },
                        { week: '9-12', topic: 'Connectivity Protocols', details: 'MQTT, LoRaWAN, HTTP, and BLE Communication.' },
                        { week: '13-16', topic: 'Embedded OS (RTOS)', details: 'FreeRTOS, Memory Management, and Task Scheduling.' },
                        { week: '17-20', topic: 'Edge AI & Cloud', details: 'TinyML, Google Cloud IoT integration, and Data Logging.' },
                        { week: '21-24', topic: 'IoT Security', details: 'End-to-end Encryption and Device Authentication.' }
                    ],
                    companies: ['Google', 'Tesla', 'Intel', 'Samsung SmartThings', 'Philips Hue', 'Bosch', 'Siemens'],
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
                    steps: [
                        { week: '1-6', topic: 'The Math Foundation', details: 'Linear Algebra (Complex Spaces), Probability, and Unitary Matrices.' },
                        { week: '7-12', topic: 'Quantum Physics Fundamental', details: 'Superposition, Entanglement, and Quantum Interference.' },
                        { week: '13-16', topic: 'Quantum Circuits', details: 'Gates (H, CNOT, T), Bloch Sphere, and Circuit Measurement.' },
                        { week: '17-20', topic: 'Algorithms & Coding', details: 'Shor’s, Grover’s, and programming with Cirq (Google Cloud).' },
                        { week: '21-24', topic: 'Error Correction & Hardware', details: 'Fault Tolerance and working with real NPUs.' }
                    ],
                    companies: ['Google Quantum AI', 'IBM Quantum', 'Microsoft Quantum', 'IonQ', 'Rigetti', 'D-Wave', 'Xanadu'],
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
    // Keep consistent for other departments
    'ECE': [
        {
            domain: 'Embedded Systems & IoT',
            roles: [
                {
                    title: 'Embedded Firmware Engineer',
                    companies: ['Intel', 'Qualcomm', 'NVIDIA', 'ARM', 'Texas Instruments'],
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
                    companies: ['Tesla', 'Ola Electric', 'Rivian', 'Tata Motors', 'ABB'],
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
                    companies: ['Boston Dynamics', 'NASA', 'Fanuc', 'Tesla Bot', 'Amazon Prep'],
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
                    companies: ['L&T', 'Arup', 'Aecom', 'Autodesk', 'Shapoorji Pallonji'],
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
                    companies: ['Bosch', 'Continental', 'Mahindra Electric', 'Hyundai'],
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
                    companies: ['Deloitte', 'EY', 'KPMG', 'Target', 'Walmart Global'],
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
                    companies: ['Google Cloud', 'Microsoft Azure', 'AWS', 'Oracle Cloud', 'IBM'],
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
