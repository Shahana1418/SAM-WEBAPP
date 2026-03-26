/**
 * Career Path & Job Roles Data for SAM WEBAPP
 * Expanded ECE & EEE Editions with AI-Generated Roadmaps and Global Company Lists
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
                    roadmap: ['Phase 1: HTML5, CSS3 & JS (ES6+)', 'Phase 2: Framework Mastery (React/Next.js)', 'Phase 3: Backend & DevOps'],
                    steps: [
                        { week: '1-4', topic: 'Modern HTML5 & Advanced CSS', details: 'Semantic Tags, Flexbox, Grid, and Responsive Web Design.' },
                        { week: '5-8', topic: 'JavaScript Mastery', details: 'ES6+, Async, DOM Manipulation, and Functional Concepts.' },
                        { week: '9-12', topic: 'Frontend Frameworks', details: 'React, State Management (Redux/Zustand), and Performance.' },
                        { week: '13-16', topic: 'Backend Engineering', details: 'Node.js, Express, and Database Design (PostgreSQL/MongoDB).' },
                        { week: '17-20', topic: 'Full Stack Integration', details: 'Auth, REST/GraphQL APIs, and Server-Side Rendering.' },
                        { week: '21-24', topic: 'Cloud & Deployment', details: 'Docker, CI/CD, and Google Cloud Run.' }
                    ],
                    companies: ['Google', 'Meta', 'Amazon', 'Netflix', 'Airbnb', 'Zomato'],
                    growth: 'Exponential', salaryRange: '₹8L - ₹35L+', complexity: 'Moderate',
                    skills: ['TypeScript', 'React', 'Node.js', 'Next.js', 'PostgreSQL'],
                    studyStrategy: {
                        daily: "• 2h: Core Logic (JS/TS)\n• 1h: UI/UX Building (CSS/React)\n• 30m: Open Source Code Review",
                        weekly: "• Build 1 feature-complete module\n• Write technical documentation\n• 20 High-Quality LeetCode problems",
                        practice: "Build clones of popular apps (Uber, Slack) to master complex state and real-time features.",
                        projectBased: "Focus on Full-Stack CRUD apps initially, then move to highly distributed systems."
                    },
                    projects: {
                        beginner: ["Task Management Dashboard", "Weather App with API", "Personal Branding Portfolio"],
                        intermediate: ["E-Commerce Site with Stripe", "Real-time Chat via Socket.io", "SaaS Landing Page"],
                        finalYear: ["AI-Powered Learning Management System", "Blockchain Based Voting Portal", "Microservices E-Marketplace"]
                    },
                    freeResources: ['web.dev (Google)', 'The Odin Project', 'FreeCodeCamp YouTube'], paidCourses: ['Udemy: Zero To Mastery', 'Coursera: Meta Full Stack Certificate']
                }
            ]
        },
        {
            domain: 'AI, Machine Learning & Data Science',
            roles: [
                {
                    title: 'Machine Learning Engineer',
                    googleComparison: 'Aligns with Google AI Research standards. Focus on TensorFlow and Vertex AI.',
                    steps: [
                        { week: '1-4', topic: 'Advanced Mathematics', details: 'Linear Algebra, Calculus, and Probability for ML.' },
                        { week: '5-8', topic: 'Data Processing with Python', details: 'NumPy, Pandas, and Matplotlib mastery.' },
                        { week: '9-12', topic: 'Supervised Learning', details: 'Regression, Classification, and Model Evaluation.' },
                        { week: '13-16', topic: 'Deep Learning', details: 'Neural Networks, CNNs, and TensorFlow/PyTorch.' },
                        { week: '17-20', topic: 'LLMs & Transformers', details: 'Attention mechanisms and Generative AI patterns.' },
                        { week: '21-24', topic: 'MLOps', details: 'Model Deployment and Vertex AI Pipelines.' }
                    ],
                    companies: ['Google DeepMind', 'OpenAI', 'NVIDIA', 'Tesla'],
                    growth: 'Very High', salaryRange: '₹12L - ₹45L+', complexity: 'Very High',
                    skills: ['Python', 'TensorFlow', 'Vertex AI', 'Statistics'],
                    freeResources: ['Google ML Crash Course'], paidCourses: ['DeepLearning.AI']
                },
                {
                    title: 'Data Science & Analytics',
                    steps: [
                        { week: '1-4', topic: 'SQL & Statistics', details: 'Relational DBs, Complex Queries, and Descriptive Stats.' },
                        { week: '5-8', topic: 'Python Analytics', details: 'Data Wrangling and Exploratory Data Analysis (EDA).' },
                        { week: '9-12', topic: 'Predictive Modeling', details: 'Regression and Time Series Analysis.' },
                        { week: '13-16', topic: 'Big Data Tools', details: 'BigQuery, Apache Spark, and Hadoop.' },
                        { week: '17-20', topic: 'BI & Visualization', details: 'Tableau, Power BI, and Looker.' },
                        { week: '21-24', topic: 'A/B Testing & Storytelling', details: 'Experimental Design and Business Communication.' }
                    ],
                    companies: ['Netflix', 'Amazon', 'Uber', 'LinkedIn'],
                    growth: 'High', salaryRange: '₹10L - ₹38L', complexity: 'High',
                    skills: ['SQL', 'Python', 'BigQuery', 'Power BI'],
                    freeResources: ['Kaggle Learn'], paidCourses: ['DataCamp']
                }
            ]
        },
        {
            domain: 'Security, Cloud & Systems',
            roles: [
                {
                    title: 'Cybersecurity Analyst',
                    steps: [
                        { week: '1-4', topic: 'Networking Basics', details: 'TCP/IP, OSI, and Network Security Fundamentals.' },
                        { week: '5-8', topic: 'Linux & Scripting', details: 'Linux Administration and Bash/Python Automation.' },
                        { week: '9-12', topic: 'Defensive Security', details: 'Firewalls, SIEM, and Vulnerability Assessment.' },
                        { week: '13-16', topic: 'Ethical Hacking', details: 'Penetration Testing and Social Engineering.' },
                        { week: '17-20', topic: 'Cloud Security', details: 'IAM, VPC Security, and GRC.' },
                        { week: '21-24', topic: 'Incident Response', details: 'Digital Forensics and Threat Hunting.' }
                    ],
                    companies: ['CrowdStrike', 'Palo Alto Networks', 'Mandiant (Google)'],
                    growth: 'High', salaryRange: '₹9L - ₹32L', complexity: 'High',
                    skills: ['Linux', 'Network Security', 'Python', 'SIEM'],
                    freeResources: ['TryHackMe', 'HackTheBox'], paidCourses: ['CompTIA Security+']
                },
                {
                    title: 'Cloud Computing & DevOps',
                    steps: [
                        { week: '1-4', topic: 'Cloud Basics', details: 'GCP/AWS Architecture and Compute services.' },
                        { week: '5-8', topic: 'Linux Systems', details: 'Advanced OS concepts and Shell scripting.' },
                        { week: '9-12', topic: 'Containerization', details: 'Docker and Container Registry.' },
                        { week: '13-16', topic: 'Orchestration', details: 'Kubernetes (GKE) and Helm.' },
                        { week: '17-20', topic: 'IaC & CI/CD', details: 'Terraform, Ansible, and Jenkins/GitHub Actions.' },
                        { week: '21-24', topic: 'Site Reliability (SRE)', details: 'Monitoring, Logging, and SLIs/SLOs.' }
                    ],
                    companies: ['Google Cloud', 'AWS', 'HashiCorp', 'Red Hat'],
                    growth: 'Very High', salaryRange: '₹12L - ₹48L+', complexity: 'High',
                    skills: ['Kubernetes', 'Docker', 'Terraform', 'GCP'],
                    freeResources: ['Google Cloud Skills Boost'], paidCourses: ['A Cloud Guru']
                }
            ]
        },
        {
            domain: 'Specialized Development',
            roles: [
                {
                    title: 'Mobile App Developer',
                    steps: [
                        { week: '1-4', topic: 'Dart Fundamentals', details: 'Variables, Collections, and Async Programming.' },
                        { week: '5-8', topic: 'Flutter UI', details: 'Widgets, Layouts, and Material Design 3.' },
                        { week: '9-12', topic: 'State Management', details: 'Provider, Bloc, or Riverpod.' },
                        { week: '13-16', topic: 'Network & Persistence', details: 'REST APIs and SQLite/Hive.' },
                        { week: '17-20', topic: 'Firebase Integration', details: 'Auth, Firestore, and Analytics.' },
                        { week: '21-24', topic: 'App Store Dev', details: 'Optimization, Testing, and Play Store Release.' }
                    ],
                    companies: ['Google', 'Swiggy', 'Zomato', 'PhonePe'],
                    growth: 'High', salaryRange: '₹7L - ₹28L', complexity: 'Moderate',
                    skills: ['Flutter', 'Kotlin', 'Firebase', 'Mobile UI'],
                    freeResources: ['Flutter.dev'], paidCourses: ['Udemy Flutter Guide']
                },
                {
                    title: 'Game Development',
                    steps: [
                        { week: '1-4', topic: 'C# Programming', details: 'Data Types, OOP, and Logic.' },
                        { week: '5-8', topic: 'Unity 2D/3D', details: 'Scenes, Prefabs, and Physics.' },
                        { week: '9-12', topic: 'Game Mechanics', details: 'Input, Collisions, and Mechanics.' },
                        { week: '13-16', topic: 'Graphics & VFX', details: 'Shaders, Particles, and Lighting.' },
                        { week: '17-20', topic: 'Advanced AI', details: 'NavMesh and Behavior Trees.' },
                        { week: '21-24', topic: 'Multiplayer & Polish', details: 'Networking and UI Optimization.' }
                    ],
                    companies: ['EA', 'Ubisoft', 'Epic Games', 'Unity'],
                    growth: 'Medium', salaryRange: '₹6L - ₹24L', complexity: 'High',
                    skills: ['Unity', 'C#', '3D Math', 'Shaders'],
                    freeResources: ['Brackeys (YouTube)'], paidCourses: ['Gamedev.tv']
                },
                {
                    title: 'Software Development (Core)',
                    steps: [
                        { week: '1-6', topic: 'DSA Mastery', details: 'Arrays, Linked Lists, Trees, and DP.' },
                        { week: '7-12', topic: 'Advanced C++/Java', details: 'Pointers, Memory, and Concurrency.' },
                        { week: '13-16', topic: 'Operating Systems', details: 'Threads, Networking, and File Systems.' },
                        { week: '17-20', topic: 'System Design', details: 'Scalability, HLD, LLD.' },
                        { week: '21-24', topic: 'Engineering Capstone', details: 'Building a Compiler or Database.' }
                    ],
                    companies: ['Google', 'Microsoft', 'Adobe', 'Oracle'],
                    growth: 'Steady', salaryRange: '₹12L - ₹50L+', complexity: 'Very High',
                    skills: ['C++', 'Algorithms', 'System Design'],
                    freeResources: ['NeetCode.io'], paidCourses: ['AlgoExpert']
                }
            ]
        },
        {
            domain: 'Design & Emerging Tech',
            roles: [
                {
                    title: 'UI/UX Design',
                    steps: [
                        { week: '1-4', topic: 'Design Principles', details: 'Colors, Typography, and Visual Hierarchy.' },
                        { week: '5-8', topic: 'Figma Mastery', details: 'Components, Auto-layout, and Dev Handoff.' },
                        { week: '9-12', topic: 'User Research', details: 'Interviews, Personas, and Affinity Mapping.' },
                        { week: '13-16', topic: 'Wireframing', details: 'Low-fi to High-fi Prototypes.' },
                        { week: '17-20', topic: 'Interaction Design', details: 'Micro-animations and Transitions.' },
                        { week: '21-24', topic: 'Design Systems', details: 'Building and documenting a library.' }
                    ],
                    companies: ['Google (Design)', 'Spotify', 'Canva'],
                    growth: 'High', salaryRange: '₹6L - ₹22L', complexity: 'Moderate',
                    skills: ['Figma', 'Prototyping', 'Accessibility'],
                    freeResources: ['Google UX Certificate'], paidCourses: ['Designlab']
                },
                {
                    title: 'Blockchain Development',
                    steps: [
                        { week: '1-4', topic: 'Web3 Basics', details: 'Cryptography, Nodes, and Decentralization.' },
                        { week: '5-8', topic: 'Solidity Mastery', details: 'Smart Contracts, EVM, and Security.' },
                        { week: '9-12', topic: 'Web3 Integration', details: 'Ethers.js and Wallet integration.' },
                        { week: '13-16', topic: 'DeFi & NFTs', details: 'Liquidity Pools, AMMs, and Standards.' },
                        { week: '17-20', topic: 'Rust & Solana', details: 'High-speed chain development.' },
                        { week: '21-24', topic: 'Auditing', details: 'Smart Contract Auditing and Formal Verification.' }
                    ],
                    companies: ['Coinbase', 'Polygon', 'Binance'],
                    growth: 'High', salaryRange: '₹12L - ₹40L', complexity: 'High',
                    skills: ['Solidity', 'Rust', 'Web3.js'],
                    freeResources: ['CryptoZombies'], paidCourses: ['Alchemy Univ']
                },
                {
                    title: 'AR/VR Development',
                    steps: [
                        { week: '1-4', topic: '3D Foundations', details: 'Blender Modeling and Texturing.' },
                        { week: '5-8', topic: 'XR Toolkit', details: 'Unity and VR controllers integration.' },
                        { week: '9-12', topic: 'AR Core/Kit', details: 'Plane detection and Image tracking.' },
                        { week: '13-16', topic: 'Spatial UI', details: 'Designing for immersive spaces.' },
                        { week: '17-20', topic: 'Optimization', details: 'Draw calls, Shaders, and Frame rate.' },
                        { week: '21-24', topic: 'Deployment', details: 'Quest/Mobile releases.' }
                    ],
                    companies: ['Meta (Reality Labs)', 'Snap Inc', 'Niantic'],
                    growth: 'Medium', salaryRange: '₹8L - ₹26L', complexity: 'High',
                    skills: ['Unity', 'C#', 'Spatial Design'],
                    freeResources: ['Google ARCore Docs'], paidCourses: ['Coursera XR']
                },
                {
                    title: 'Internet of Things (IoT)',
                    steps: [
                        { week: '1-4', topic: 'Microcontrollers', details: 'Arduino, ESP32, and Raspberry Pi basics.' },
                        { week: '5-8', topic: 'Sensors & Actuators', details: 'Digital/Analog interfaces, I2C, SPI.' },
                        { week: '9-12', topic: 'IoT Protocols', details: 'MQTT, CoAP, HTTP, and WebSockets.' },
                        { week: '13-16', topic: 'Edge Computing', details: 'Local processing and TinyML.' },
                        { week: '17-20', topic: 'Cloud IoT Platforms', details: 'AWS IoT Core, Azure IoT Hub.' },
                        { week: '21-24', topic: 'Security', details: 'Device authentication and TLS.' }
                    ],
                    companies: ['Cisco', 'Amazon', 'Bosch', 'Samsung'],
                    growth: 'High', salaryRange: '₹8L - ₹28L', complexity: 'High',
                    skills: ['C/C++', 'Python', 'MQTT', 'AWS IoT'],
                    freeResources: ['IoT For All', 'Arduino Docs'], paidCourses: ['Coursera IoT Specialization']
                },
                {
                    title: 'Quantum Computing',
                    steps: [
                        { week: '1-4', topic: 'Quantum Physics Basics', details: 'Superposition, Entanglement, and Qubits.' },
                        { week: '5-8', topic: 'Linear Algebra Review', details: 'Vectors, Matrices, and Dirac Notation.' },
                        { week: '9-12', topic: 'Quantum Gates', details: 'Pauli, Hadamard, CNOT, and Bell States.' },
                        { week: '13-16', topic: 'Quantum Algorithms', details: 'Deutsch-Jozsa, Grover’s, and Shor’s Algorithm.' },
                        { week: '17-20', topic: 'Quantum Frameworks', details: 'IBM Qiskit and Pennylane.' },
                        { week: '21-24', topic: 'Quantum Machine Learning', details: 'VQC, Quantum Neural Networks.' }
                    ],
                    companies: ['IBM', 'Google Quantum AI', 'Microsoft', 'IonQ'],
                    growth: 'Exponential', salaryRange: '₹18L - ₹60L+', complexity: 'Extreme',
                    skills: ['Python', 'Qiskit', 'Linear Algebra', 'Algorithms'],
                    freeResources: ['IBM Quantum Learning'], paidCourses: ['MIT xPro Quantum Computing']
                }
            ]
        }
    ],

    'ECE': [
        {
            domain: 'Semiconductors & VLSI Design',
            description: 'Designing the heart of electronic devices from microchips to high-speed circuits.',
            roles: [
                {
                    title: 'VLSI Design Engineer',
                    googleComparison: 'Aligns with Google Devices & Services (Gpixel/Pixel Chip teams). Focus on ASIC/FPGA design.',
                    steps: [
                        { week: '1-4', topic: 'Digital Fundamentals', details: 'Boolean Algebra, K-Maps, FSMs, and CMOS Logic.' },
                        { week: '5-8', topic: 'HDL Mastery (Verilog/VHDL)', details: 'RTL Coding, Testbench Writing, and Simulation.' },
                        { week: '9-12', topic: 'FPGA Prototyping', details: 'Xilinx/Vivado toolchain and Hardware testing.' },
                        { week: '13-16', topic: 'ASIC Design Flow', details: 'Synthesis, Place & Route, and LVS/DRC checks.' },
                        { week: '17-20', topic: 'Static Timing Analysis (STA)', details: 'Cycles, Clocks, and Timing Constraints.' },
                        { week: '21-24', topic: 'SystemVerilog & UVM', details: 'Verification methodologies for complex chips.' }
                    ],
                    companies: ['Intel', 'NVIDIA', 'Qualcomm', 'AMD', 'Apple', 'Texas Instruments'],
                    growth: 'Exponential', salaryRange: '₹12L - ₹45L+', complexity: 'Very High',
                    skills: ['Verilog', 'SystemVerilog', 'ASIC', 'FPGA', 'EDA Tools'],
                    freeResources: ['VLSIFirst', 'NPTEL VLSI'], paidCourses: ['Sandeepani VLSI']
                },
                {
                    title: 'PCB Design Engineer',
                    steps: [
                        { week: '1-4', topic: 'Schematic Capture', details: 'Component selection and symbol creation.' },
                        { week: '5-8', topic: 'Layout Fundamentals', details: 'Component placement and basic routing.' },
                        { week: '9-12', topic: 'High-Speed Design', details: 'Signal Integrity and Impedance matching.' },
                        { week: '13-16', topic: 'Manufacturing (CAM)', details: 'Gerber files and DFM principles.' },
                        { week: '17-20', topic: 'Multi-layer Routing', details: 'Via management and Power planes.' },
                        { week: '21-24', topic: 'Assembly & Testing', details: 'Soldering and hardware debugging.' }
                    ],
                    companies: ['Tesla', 'Bosch', 'Apple', 'Samsung', 'Altium'],
                    growth: 'High', salaryRange: '₹6L - ₹22L', complexity: 'Moderate',
                    skills: ['Altium Designer', 'KiCad', 'Hardware Design', 'Eagle'],
                    freeResources: ['Altium Academy'], paidCourses: ['Udemy PCB Design']
                },
                {
                    title: 'RF & Microwave Engineer',
                    steps: [
                        { week: '1-4', topic: 'EM Theory', details: 'Maxwell equations and wave propagation.' },
                        { week: '5-8', topic: 'Transmission Lines', details: 'Smith Charts and matching networks.' },
                        { week: '9-12', topic: 'RF Circuits', details: 'Mixers, Filters, and Amplifiers.' },
                        { week: '13-16', topic: 'Antenna Design', details: 'Patch, Horn, and Array antennas.' },
                        { week: '17-20', topic: 'RF Simulation', details: 'HFSS or CST Microwave Studio.' },
                        { week: '21-24', topic: 'RF Measurements', details: 'VNA and Spectrum Analyzer usage.' }
                    ],
                    companies: ['Qualcomm', 'SpaceX', 'Lockheed Martin', 'Nokia', 'Ericsson'],
                    growth: 'High', salaryRange: '₹10L - ₹38L', complexity: 'Very High',
                    skills: ['HFSS', 'CST', 'ADS', 'RF Circuits'],
                    freeResources: ['Microwave101'], paidCourses: ['IEEE RF Certification']
                }
            ]
        },
        {
            domain: 'Embedded, IoT & Robotics',
            description: 'Intelligent hardware systems with integrated software layers.',
            roles: [
                {
                    title: 'Embedded Systems Engineer',
                    googleComparison: 'Matches Google Nest & Pixel Firmware teams. Hardcore C and RTOS focus.',
                    steps: [
                        { week: '1-4', topic: 'Embedded C', details: 'Bit manipulation, Memory mapping, and Pointers.' },
                        { week: '5-8', topic: 'MCU Architecture', details: 'ARM Cortex-M, Registers, and Peripherals (GPIO, UART).' },
                        { week: '9-12', topic: 'Protocols', details: 'I2C, SPI, CAN, and USB communication.' },
                        { week: '13-16', topic: 'RTOS Fundamentals', details: 'Tasks, Semaphores, Queues, and FreeRTOS.' },
                        { week: '17-20', topic: 'Embedded Linux', details: 'Kernel compilation and Device drivers.' },
                        { week: '21-24', topic: 'Testing & Debugging', details: 'JTAG, Oscilloscopes, and Logic Analyzers.' }
                    ],
                    companies: ['Bosch', 'Intel', 'Robert Bosch', 'NXP', 'Garmin'],
                    growth: 'Very High', salaryRange: '₹8L - ₹32L', complexity: 'High',
                    skills: ['Embedded C', 'ARM', 'FreeRTOS', 'Linux Kernel'],
                    freeResources: ['Embedded.fm'], paidCourses: ['FastBit Academy']
                },
                {
                    title: 'Internet of Things (IoT)',
                    steps: [
                        { week: '1-4', topic: 'Sensors & Interfacing', details: 'Analog/Digital sensors and signal conditioning.' },
                        { week: '5-8', topic: 'Wireless Protocols', details: 'Wi-Fi, BLE, LoRaWAN, and Zigbee.' },
                        { week: '9-12', topic: 'Messaging Protocols', details: 'MQTT, HTTP, and CoAP.' },
                        { week: '13-16', topic: 'Edge Computing', details: 'ESP32/Raspberry Pi and Edge AI.' },
                        { week: '17-20', topic: 'Cloud Backend', details: 'GCP IoT Core, AWS IoT, and Dashboards.' },
                        { week: '21-24', topic: 'IoT Security', details: 'Encryption and Secure Boot.' }
                    ],
                    companies: ['Amazon (Ring)', 'Google Home', 'Philips Hue', 'Cisco'],
                    growth: 'Exponential', salaryRange: '₹7L - ₹26L', complexity: 'Moderate',
                    skills: ['Python', 'MQTT', 'Espressif', 'Node-RED'],
                    freeResources: ['Arduino Hub'], paidCourses: ['Udacity IoT']
                },
                {
                    title: 'Robotics & Automation',
                    steps: [
                        { week: '1-4', topic: 'Robot Kinematics', details: 'Forward/Inverse kinematics and Jacobians.' },
                        { week: '5-8', topic: 'Control Theory', details: 'PID, LQR, and Stability analysis.' },
                        { week: '9-12', topic: 'ROS 2 (Robot OS)', details: 'Nodes, Topics, Services, and Actions.' },
                        { week: '13-16', topic: 'Computer Vision', details: 'OpenCV and Perception for Robots.' },
                        { week: '17-20', topic: 'Path Planning', details: 'A*, RRT*, and SLAM algorithms.' },
                        { week: '21-24', topic: 'Hardware Integration', details: 'Actuators, Motors, and IMUs.' }
                    ],
                    companies: ['Boston Dynamics', 'Tesla (Optimus)', 'Amazon Robotics', 'Fanuc'],
                    growth: 'Very High', salaryRange: '₹10L - ₹35L', complexity: 'High',
                    skills: ['ROS 2', 'C++', 'Control Systems', 'Python'],
                    freeResources: ['The Construct ROS'], paidCourses: ['Udacity Robotics']
                },
                {
                    title: 'Automotive Electronics',
                    steps: [
                        { week: '1-4', topic: 'Auto Standards', details: 'CAN, LIN, and FlexRay protocols.' },
                        { week: '5-8', topic: 'Safety (ISO 26262)', details: 'MISRA C and Functional Safety.' },
                        { week: '9-12', topic: 'ADAS Systems', details: 'Lidar, Radar, and Ultrasonic sensors.' },
                        { week: '13-16', topic: 'Infotainment', details: 'Android Automotive and QNX.' },
                        { week: '17-20', topic: 'EV Powertrains', details: 'BMS and Motor Controllers.' },
                        { week: '21-24', topic: 'V2X Comm', details: 'Vehicle-to-Everything communication.' }
                    ],
                    companies: ['Mercedes-Benz', 'BMW', 'Tata Motors', 'Tesla'],
                    growth: 'High', salaryRange: '₹8L - ₹30L', complexity: 'High',
                    skills: ['CAN', 'MISRA C', 'Autosar', 'Simulink'],
                    freeResources: ['Vector Academy'], paidCourses: ['Coursera Automotive']
                }
            ]
        },
        {
            domain: 'Communications & Signal Processing',
            description: 'The science of information transmission and analysis.',
            roles: [
                {
                    title: 'Wireless Communication Engineer',
                    steps: [
                        { week: '1-4', topic: 'Physical Layer', details: 'Modulation (OFDM, QAM) and Channel coding.' },
                        { week: '5-8', topic: 'MIMO Systems', details: 'Massive MIMO and beamforming.' },
                        { week: '9-12', topic: '5G Architecture', details: 'RAN, Core networks, and slicing.' },
                        { week: '13-16', topic: 'Protocol Stack', details: 'MAC, RLC, and PDCP layers.' },
                        { week: '17-20', topic: 'RF Planning', details: 'Link budgets and coverage analysis.' },
                        { week: '21-24', topic: 'Standards', details: '3GPP and IEEE 802.11.' }
                    ],
                    companies: ['Qualcomm', 'Ericsson', 'Nokia', 'Samsung', 'Reliance Jio'],
                    growth: 'High', salaryRange: '₹10L - ₹40L', complexity: 'Very High',
                    skills: ['MATLAB', 'Python', '5G', 'Wireless Protocols'],
                    freeResources: ['Wireless Pi'], paidCourses: ['Coursera 5G']
                },
                {
                    title: 'Digital Signal Processing (DSP)',
                    steps: [
                        { week: '1-4', topic: 'Transform Theory', details: 'FFT, Z-Transform, and Wavelets.' },
                        { week: '5-8', topic: 'Filter Design', details: 'FIR, IIR filters, and Windowing.' },
                        { week: '9-12', topic: 'Audio Processing', details: 'Noise cancellation and Audio codecs.' },
                        { week: '13-16', topic: 'Image Processing', details: 'Spatial filters and edge detection.' },
                        { week: '17-20', topic: 'Radar Signal Proc', details: 'Doppler effect and Pulse compression.' },
                        { week: '21-24', topic: 'DSP Implementations', details: 'TI DSPs, FPGAs, and fixed-point math.' }
                    ],
                    companies: ['Texas Instruments', 'Bose', 'Harman', 'Raytheon'],
                    growth: 'Steady', salaryRange: '₹8L - ₹28L', complexity: 'High',
                    skills: ['MATLAB', 'C', 'DSP Processors', 'Python'],
                    freeResources: ['DSPGuide.com'], paidCourses: ['MIT OCW DSP']
                },
                {
                    title: 'Image Processing Engineer',
                    steps: [
                        { week: '1-4', topic: 'Computer Vision', details: 'Geometry, Filters, and Features.' },
                        { week: '5-8', topic: 'Feature Extraction', details: 'SIFT, SURF, and HOG.' },
                        { week: '9-12', topic: 'Deep Learning Vision', details: 'CNNs, YOLO, and Segmentation.' },
                        { week: '13-16', topic: 'Video Analytics', details: 'Object tracking and motion estimation.' },
                        { week: '17-20', topic: 'Medical Imaging', details: 'MRI, CT scan processing.' },
                        { week: '21-24', topic: 'CV Deployments', details: 'TensorRT and OpenCV Mobile.' }
                    ],
                    companies: ['Google (Photos)', 'SnapChat', 'Adobe', 'GE Healthcare'],
                    growth: 'High', salaryRange: '₹12L - ₹42L', complexity: 'High',
                    skills: ['OpenCV', 'PyTorch', 'Python', 'Mathematics'],
                    freeResources: ['PyImageSearch'], paidCourses: ['Udacity Computer Vision']
                }
            ]
        },
        {
            domain: 'Software & Modern Tech Roles',
            description: 'Cross-functional software roles for electronics engineers.',
            roles: [
                { title: 'Software Development', companies: ['Google', 'Microsoft', 'Amazon'], growth: 'Steady', salaryRange: '₹12L-₹50L', skills: ['C++', 'Java', 'DSA'] },
                { title: 'AI & Machine Learning', companies: ['OpenAI', 'Google', 'Meta'], growth: 'Very High', salaryRange: '₹15L-₹60L', skills: ['Python', 'TensorFlow', 'Stats'] },
                { title: 'Web Development', companies: ['Netflix', 'Meta', 'Airbnb'], growth: 'High', salaryRange: '₹8L-₹35L', skills: ['React', 'Node.js', 'PostgreSQL'] },
                { title: 'Mobile App Development', companies: ['Google', 'Apple', 'Uber'], growth: 'High', salaryRange: '₹7L-₹28L', skills: ['Flutter', 'Kotlin', 'Firebase'] },
                { title: 'Data Science & Analytics', companies: ['Google', 'Spotify', 'Amazon'], growth: 'High', salaryRange: '₹10L-₹38L', skills: ['SQL', 'Python', 'BigQuery'] },
                { title: 'Cybersecurity', companies: ['CrowdStrike', 'Cisco'], growth: 'High', salaryRange: '₹9L-₹32L', skills: ['Linux', 'Network Sec', 'SIEM'] },
                { title: 'Cloud Computing & DevOps', companies: ['GCP', 'AWS', 'Azure'], growth: 'Very High', salaryRange: '₹12L-₹48L', skills: ['K8s', 'Docker', 'Terraform'] },
                { title: 'UI/UX Design', companies: ['Google', 'Figma', 'Adobe'], growth: 'High', salaryRange: '₹6L-₹22L', skills: ['Figma', 'Prototyping'] },
                { title: 'Blockchain Development', companies: ['Coinbase', 'Polygon'], growth: 'High', salaryRange: '₹12L-₹40L', skills: ['Solidity', 'Rust'] },
                { title: 'AR/VR Development', companies: ['Meta', 'Unity', 'Apple'], growth: 'Medium', salaryRange: '₹8L-₹26L', skills: ['Unity', 'C#', '3D Math'] },
                { title: 'Game Development', companies: ['Epic', 'Ubisoft', 'EA'], growth: 'Medium', salaryRange: '₹6L-₹24L', skills: ['Unity', 'C#'] }
            ]
        }
    ],

    'EEE': [
        {
            domain: 'Power Systems & Smart Grids',
            description: 'Generation, transmission, and distribution of electrical energy.',
            roles: [
                {
                    title: 'Power Systems Engineer',
                    googleComparison: 'Matches Google Data Center Power Infrastructure teams. Massive scale energy management.',
                    steps: [
                        { week: '1-4', topic: 'Circuit Analysis', details: '3-phase systems and Phasor diagrams.' },
                        { week: '5-8', topic: 'Grid Components', details: 'Transformers, Switchgears, and Protection.' },
                        { week: '9-12', topic: 'Power Flow Analysis', details: 'Newton-Raphson and Gauss-Seidel methods.' },
                        { week: '13-16', topic: 'Stability & Control', details: 'Voltage/Frequency stability and Reactive power.' },
                        { week: '17-20', topic: 'Digital Relaying', details: 'Protection logic and coordination.' },
                        { week: '21-24', topic: 'Network Simulation', details: 'ETAP or MiPower software mastery.' }
                    ],
                    companies: ['ABB', 'Siemens', 'GE Power', 'Schneider Electric', 'PGCIL'],
                    growth: 'Steady', salaryRange: '₹6L - ₹24L', complexity: 'High',
                    skills: ['ETAP', 'Power Systems', 'Circuit Design', 'Protection'],
                    freeResources: ['All About Circuits'], paidCourses: ['NPTEL Power Systems']
                },
                {
                    title: 'Smart Grid Technology',
                    steps: [
                        { week: '1-4', topic: 'Grid Modernization', details: 'AMI, SCADA, and Demand response.' },
                        { week: '5-8', topic: 'Communication', details: 'IEC 61850 and PMUs.' },
                        { week: '9-12', topic: 'DER Integration', details: 'Solar/Wind integration to grid.' },
                        { week: '13-16', topic: 'Microgrids', details: 'Islanded mode and controller design.' },
                        { week: '17-20', topic: 'Big Data Analytics', details: 'Predicting load and outage management.' },
                        { week: '21-24', topic: 'Grid Security', details: 'Cyber-physical security for utilities.' }
                    ],
                    companies: ['Itron', 'Xcel Energy', 'NextEra Energy', 'Oracle Utilities'],
                    growth: 'Very High', salaryRange: '₹9L - ₹32L', complexity: 'High',
                    skills: ['SCADA', 'Python', 'Grid Mgmt', 'Networking'],
                    freeResources: ['SmartGrid.gov'], paidCourses: ['EdX Smart Grid']
                },
                {
                    title: 'High Voltage Engineering',
                    steps: [
                        { week: '1-4', topic: 'Insulation Theory', details: 'Breakdown in gases, liquids, and solids.' },
                        { week: '5-8', topic: 'Generation of HV', details: 'Impulse generators and Cascaded transformers.' },
                        { week: '9-12', topic: 'HV Measurements', details: 'Sphere gaps and Dividers.' },
                        { week: '13-16', topic: 'Testing Tech', details: 'Non-destructive testing and Partial discharge.' },
                        { week: '17-20', topic: 'Equipment Design', details: 'Insulators, Bushings, and Arresters.' },
                        { week: '21-24', topic: 'Lab Management', details: 'Safety protocols and standards (IEC).' }
                    ],
                    companies: ['Mitsubishi Electric', 'Hitachi Energy', 'KEMA', 'Teshmont'],
                    growth: 'Steady', salaryRange: '₹7L - ₹26L', complexity: 'Extreme',
                    skills: ['HV Testing', 'Field Theory', 'Insulation'],
                    freeResources: ['EE Power'], paidCourses: ['Professional Certs']
                }
            ]
        },
        {
            domain: 'Renewable Tech & EV',
            description: 'The future of clean energy and transportation.',
            roles: [
                {
                    title: 'Renewable Energy Systems',
                    steps: [
                        { week: '1-4', topic: 'Solar PV Tech', details: 'Cell physics, Tilt, and Irradiance modeling.' },
                        { week: '5-8', topic: 'Wind Energy', details: 'Betz law, Turbines, and Pitch control.' },
                        { week: '9-12', topic: 'Energy Storage', details: 'Batteries, Pumped Hydro, and Flywheels.' },
                        { week: '13-16', topic: 'System Sizing', details: 'PVSyst and Homer Pro software.' },
                        { week: '17-20', topic: 'Grid Connection', details: 'Inverters and Net Metering.' },
                        { week: '21-24', topic: 'Policy & Markets', details: 'Carbon credits and PPA contracts.' }
                    ],
                    companies: ['Ørsted', 'Vestas', 'First Solar', 'NextEra', 'Adani Green'],
                    growth: 'Exponential', salaryRange: '₹8L - ₹30L', complexity: 'Moderate',
                    skills: ['PVSyst', 'Homer Pro', 'Sustainability', 'Inverters'],
                    freeResources: ['NREL Learning'], paidCourses: ['Coursera Renewables']
                },
                {
                    title: 'Electric Vehicles (EV Technology)',
                    steps: [
                        { week: '1-4', topic: 'EV Architecture', details: 'HEV, BEV, and PHEV configurations.' },
                        { week: '5-8', topic: 'Motors & Drives', details: 'BLDC, PMSM, and IM control.' },
                        { week: '9-12', topic: 'BMS (Battery Mgmt)', details: 'SOC/SOH estimation and Cell balancing.' },
                        { week: '13-16', topic: 'Charging Infrastructure', details: 'AC vs DC charging and CCS/CHAdeMO.' },
                        { week: '17-20', topic: 'Vehicle Dynamics', details: 'Torque modeling and Regenerative braking.' },
                        { week: '21-24', topic: 'Testing & Safety', details: 'Crash norms and HV safety.' }
                    ],
                    companies: ['Tesla', 'Rivian', 'Tata Motors', 'Ola Electric', 'Lucid'],
                    growth: 'Very High', salaryRange: '₹10L - ₹35L', complexity: 'High',
                    skills: ['BMS', 'Simulink', 'Power Electronics', 'Motors'],
                    freeResources: ['EE Times EV'], paidCourses: ['Skill-Lync EV Masterclass']
                },
                {
                    title: 'Energy Management Systems',
                    steps: [
                        { week: '1-4', topic: 'Energy Auditing', details: 'Mapping flows and identifying waste.' },
                        { week: '5-8', topic: 'Building Automation', details: 'HVAC and Lighting control.' },
                        { week: '9-12', topic: 'Industrial EMS', details: 'Compressed air and Steam system optimization.' },
                        { week: '13-16', topic: 'IoT for Energy', details: 'Smart meters and data loggers.' },
                        { week: '17-20', topic: 'ISO 50001', details: 'Compliance and standard implementation.' },
                        { week: '21-24', topic: 'ROI Analysis', details: 'LCOE and Payback period modeling.' }
                    ],
                    companies: ['Honeywell', 'Johnson Controls', 'Engie', 'Siemens'],
                    growth: 'High', salaryRange: '₹7L - ₹25L', complexity: 'Moderate',
                    skills: ['Auditing', 'Data Analytics', 'HVAC Control', 'ISO 50001'],
                    freeResources: ['DOE Energy.gov'], paidCourses: ['Certified Energy Manager']
                }
            ]
        },
        {
            domain: 'Industrial Automation & Control',
            description: 'Managing complex machinery and production lines.',
            roles: [
                {
                    title: 'Industrial Automation Engineer',
                    steps: [
                        { week: '1-4', topic: 'Electrical Panels', details: 'Relay logic, Contactors, and Wiring.' },
                        { week: '5-8', topic: 'VFDs & Motors', details: 'Speed control and Parameter tuning.' },
                        { week: '9-12', topic: 'Sensor Fusion', details: 'Proximity, Pressure, and Flow sensors.' },
                        { week: '13-16', topic: 'Pneumatics & Hydraulics', details: 'Valves, Cylinders, and Actuators.' },
                        { week: '17-20', topic: 'Industrial IoT (IIoT)', details: 'Edge devices and OPC UA.' },
                        { week: '21-24', topic: 'System Integration', details: 'Project documentation and commissioning.' }
                    ],
                    companies: ['Rockwell Automation', 'Fanuc', 'Kuka', 'Danfoss'],
                    growth: 'Steady', salaryRange: '₹6L - ₹22L', complexity: 'Moderate',
                    skills: ['VFD', 'AutoCAD Electrical', 'Control Panels'],
                    freeResources: ['Automation.com'], paidCourses: ['PLC Academy']
                },
                {
                    title: 'PLC & SCADA Systems',
                    steps: [
                        { week: '1-4', topic: 'PLC Hardware', details: 'I/O modules, CPUs, and Power supply.' },
                        { week: '5-8', topic: 'Programming (Ladder)', details: 'Timers, Counters, and Logic blocks.' },
                        { week: '9-12', topic: 'Advanced Languages', details: 'FBD, ST, and STL formatting.' },
                        { week: '13-16', topic: 'HMI Design', details: 'Screen navigation and Alarms.' },
                        { week: '17-20', topic: 'SCADA Architecture', details: 'Data logging and Historians.' },
                        { week: '21-24', topic: 'Communication', details: 'Modbus, Profinet, and Profibus.' }
                    ],
                    companies: ['Rockwell', 'Siemens', 'ABB', 'Mitsubishi'],
                    growth: 'High', salaryRange: '₹7L - ₹28L', complexity: 'Moderate',
                    skills: ['Ladder Logic', 'Profinet', 'TIA Portal', 'Ignition'],
                    freeResources: ['LogixPro Simulator'], paidCourses: ['RealPars']
                },
                {
                    title: 'Instrumentation Engineering',
                    steps: [
                        { week: '1-4', topic: 'Metrology', details: 'Calibration and Error analysis.' },
                        { week: '5-8', topic: 'Process Variable', details: 'Temp, Pressure, Level, Flow measurement.' },
                        { week: '9-12', topic: 'Signal Conditioning', details: 'Op-amps and 4-20mA loops.' },
                        { week: '13-16', topic: 'Final Control', details: 'Control valves and Positioners.' },
                        { week: '17-20', topic: 'P&IDs', details: 'Reading/Drawing Piping & Instrument diagrams.' },
                        { week: '21-24', topic: 'Safety Instrumented Sys', details: 'SIL levels and SIS design.' }
                    ],
                    companies: ['Emerson', 'Yokogawa', 'Endress+Hauser', 'Honeywell'],
                    growth: 'Steady', salaryRange: '₹6L - ₹24L', complexity: 'High',
                    skills: ['Calibration', 'P&ID', 'DCS', 'HART Protocol'],
                    freeResources: ['Instrumentation Tools'], paidCourses: ['ISA Certifications']
                },
                {
                    title: 'Electrical Machines & Power Electronics',
                    steps: [
                        { week: '1-4', topic: 'Converter Topology', details: 'Buck, Boost, and Flyback circuits.' },
                        { week: '5-8', topic: 'Inverter Design', details: 'PWM control and Gate drivers.' },
                        { week: '9-12', topic: 'Machine Modeling', details: 'dq-axis modeling of AC machines.' },
                        { week: '13-16', topic: 'Thermal Mgmt', details: 'Heatsinks and cooling for FETs.' },
                        { week: '17-20', topic: 'Vector Control', details: 'FOC and Sensorless control.' },
                        { week: '21-24', topic: 'Magnetic Design', details: 'Transformers and Inductor sizing.' }
                    ],
                    companies: ['Infineon', 'Semikron', 'Danfoss', 'Delta'],
                    growth: 'High', salaryRange: '₹9L - ₹35L', complexity: 'Very High',
                    skills: ['Power Electronics', 'PSIM', 'LTSpice', 'Motors'],
                    freeResources: ['Learn Power Electronics'], paidCourses: ['Coursera Power']
                }
            ]
        },
        {
            domain: 'Software & Modern Tech Roles',
            description: 'Cross-functional software roles for electrical engineers.',
            roles: [
                { title: 'Software Development', companies: ['Google', 'Microsoft', 'Amazon'], growth: 'Steady', salaryRange: '₹12L-₹50L', skills: ['C++', 'Java', 'DSA'] },
                { title: 'AI & Machine Learning', companies: ['OpenAI', 'Google', 'Meta'], growth: 'Very High', salaryRange: '₹15L-₹60L', skills: ['Python', 'TensorFlow', 'Stats'] },
                { title: 'Web Development', companies: ['Netflix', 'Meta', 'Airbnb'], growth: 'High', salaryRange: '₹8L-₹35L', skills: ['React', 'Node.js', 'PostgreSQL'] },
                { title: 'Mobile App Development', companies: ['Google', 'Apple', 'Uber'], growth: 'High', salaryRange: '₹7L-₹28L', skills: ['Flutter', 'Kotlin', 'Firebase'] },
                { title: 'Data Science & Analytics', companies: ['Google', 'Spotify', 'Amazon'], growth: 'High', salaryRange: '₹10L-₹38L', skills: ['SQL', 'Python', 'BigQuery'] },
                { title: 'Cybersecurity', companies: ['CrowdStrike', 'Cisco'], growth: 'High', salaryRange: '₹9L-₹32L', skills: ['Linux', 'Network Sec', 'SIEM'] },
                { title: 'Cloud Computing & DevOps', companies: ['GCP', 'AWS', 'Azure'], growth: 'Very High', salaryRange: '₹12L-₹48L', skills: ['K8s', 'Docker', 'Terraform'] },
                { title: 'UI/UX Design', companies: ['Google', 'Figma', 'Adobe'], growth: 'High', salaryRange: '₹6L-₹22L', skills: ['Figma', 'Prototyping'] },
                { title: 'Blockchain Development', companies: ['Coinbase', 'Polygon'], growth: 'High', salaryRange: '₹12L-₹40L', skills: ['Solidity', 'Rust'] },
                { title: 'AR/VR Development', companies: ['Meta', 'Unity', 'Apple'], growth: 'Medium', salaryRange: '₹8L-₹26L', skills: ['Unity', 'C#', '3D Math'] },
                { title: 'Game Development', companies: ['Epic', 'Ubisoft', 'EA'], growth: 'Medium', salaryRange: '₹6L-₹24L', skills: ['Unity', 'C#'] }
            ]
        }
    ],

    'MCE': [
        {
            domain: 'Design & Simulation',
            description: 'Computer-aided product design and engineering analysis.',
            roles: [
                { title: 'CAD Design & Modeling', steps: [
                    { week: '1-4', topic: 'Sketching & Part Modeling', details: 'SolidWorks/CATIA basics and parametric design.' },
                    { week: '5-8', topic: 'Assembly & Sheet Metal', details: 'Multi-body parts and flat patterns.' },
                    { week: '9-12', topic: 'Surface Modeling', details: 'Complex geometry and A-class surfaces.' },
                    { week: '13-16', topic: 'GD&T', details: 'Geometric Dimensioning and Tolerancing (ASME Y14.5).' },
                    { week: '17-20', topic: 'Drafting Standards', details: 'Production drawings and BOMs.' },
                    { week: '21-24', topic: 'PLM Integration', details: 'Teamcenter/Windchill workflows.' }
                ], companies: ['Bosch', 'Siemens', 'Dassault', 'Tata Motors', 'Mahindra'], growth: 'High', salaryRange: '₹5L-₹18L', complexity: 'Moderate', skills: ['SolidWorks', 'CATIA', 'AutoCAD', 'GD&T'], freeResources: ['GrabCAD Tutorials'], paidCourses: ['Skill-Lync CAD'] },
                { title: 'CAE (Computer Aided Engineering)', steps: [
                    { week: '1-4', topic: 'FEA Concepts', details: 'Meshing, boundary conditions, and solvers.' },
                    { week: '5-8', topic: 'Structural Analysis', details: 'Static, dynamic, and fatigue in ANSYS/Abaqus.' },
                    { week: '9-12', topic: 'Thermal Analysis', details: 'Heat transfer and conjugate simulations.' },
                    { week: '13-16', topic: 'CFD Basics', details: 'Fluid flow, turbulence models, and meshing.' },
                    { week: '17-20', topic: 'Optimization', details: 'Topology and shape optimization.' },
                    { week: '21-24', topic: 'Correlation & Validation', details: 'Test vs simulation comparison.' }
                ], companies: ['Altair', 'ANSYS', 'Siemens', 'L&T', 'TATA Tech'], growth: 'High', salaryRange: '₹7L-₹25L', complexity: 'High', skills: ['ANSYS', 'Abaqus', 'HyperMesh', 'FEA'], freeResources: ['SimScale'], paidCourses: ['Skill-Lync CAE'] }
            ]
        },
        {
            domain: 'Manufacturing & Production',
            description: 'Core manufacturing processes and quality engineering.',
            roles: [
                { title: 'Manufacturing Engineering', steps: [
                    { week: '1-4', topic: 'Machining', details: 'Turning, Milling, Drilling, and CNC programming.' },
                    { week: '5-8', topic: 'Casting & Forming', details: 'Sand casting, Die casting, and Forging.' },
                    { week: '9-12', topic: 'Welding & Joining', details: 'TIG, MIG, Laser welding, and NDT.' },
                    { week: '13-16', topic: 'Additive Mfg', details: '3D Printing: FDM, SLA, SLS technologies.' },
                    { week: '17-20', topic: 'Process Planning', details: 'Routing, Cycle time, and Cost estimation.' },
                    { week: '21-24', topic: 'Industry 4.0', details: 'Digital twin and smart factory concepts.' }
                ], companies: ['Bosch', 'Tata Motors', 'L&T', 'Toyota', 'Caterpillar'], growth: 'Steady', salaryRange: '₹5L-₹18L', complexity: 'Moderate', skills: ['CNC', 'GD&T', 'Lean', '3D Printing'], freeResources: ['MIT OCW Mfg'], paidCourses: ['NPTEL Manufacturing'] },
                { title: 'Production Engineering', steps: [
                    { week: '1-4', topic: 'Production Planning', details: 'MRP, MPS, and Capacity planning.' },
                    { week: '5-8', topic: 'Lean Manufacturing', details: '5S, Kaizen, Value Stream Mapping.' },
                    { week: '9-12', topic: 'Six Sigma', details: 'DMAIC methodology and statistical tools.' },
                    { week: '13-16', topic: 'ERP Systems', details: 'SAP/Oracle for production management.' },
                    { week: '17-20', topic: 'Automation', details: 'PLC, Robotics in production lines.' },
                    { week: '21-24', topic: 'Supply Chain', details: 'Logistics and inventory optimization.' }
                ], companies: ['Toyota', 'Ford', 'Hyundai', 'Samsung', 'ABB'], growth: 'Steady', salaryRange: '₹5L-₹16L', complexity: 'Moderate', skills: ['Lean', 'Six Sigma', 'SAP', 'ERP'], freeResources: ['Lean.org'], paidCourses: ['ASQ Six Sigma'] },
                { title: 'Quality Control & Assurance', steps: [
                    { week: '1-4', topic: 'QC Fundamentals', details: 'SPC, Control charts, and Sampling.' },
                    { week: '5-8', topic: 'Metrology', details: 'CMM, Gauges, and Calibration.' },
                    { week: '9-12', topic: 'ISO Standards', details: 'ISO 9001, IATF 16949 compliance.' },
                    { week: '13-16', topic: 'FMEA & PPAP', details: 'Risk analysis and process validation.' },
                    { week: '17-20', topic: 'Auditing', details: 'Internal and supplier auditing.' },
                    { week: '21-24', topic: 'Root Cause Analysis', details: '8D, Fishbone, and 5-Why methods.' }
                ], companies: ['Bosch', 'TUV', 'Bureau Veritas', 'SKF'], growth: 'Steady', salaryRange: '₹5L-₹20L', complexity: 'Moderate', skills: ['Six Sigma', 'ISO', 'FMEA', 'SPC'], freeResources: ['ASQ Resources'], paidCourses: ['ASQ CQE'] },
                { title: 'Tool Design', steps: [
                    { week: '1-4', topic: 'Press Tool Basics', details: 'Blanking, Piercing, and Bending dies.' },
                    { week: '5-8', topic: 'Injection Molding', details: 'Mold design, Runner systems, and Cooling.' },
                    { week: '9-12', topic: 'Jigs & Fixtures', details: 'Locating and clamping principles.' },
                    { week: '13-16', topic: 'Die Casting Tools', details: 'Core/cavity, Ejection, and Gating.' },
                    { week: '17-20', topic: 'Simulation', details: 'Moldflow and AutoForm analysis.' },
                    { week: '21-24', topic: 'CNC Tooling', details: 'Tool paths and fixture design for CNC.' }
                ], companies: ['Godrej', 'Bharat Forge', 'Sundaram Clayton', 'JBM'], growth: 'Steady', salaryRange: '₹5L-₹16L', complexity: 'High', skills: ['CATIA', 'Moldflow', 'Die Design'], freeResources: ['MiTech Tutorials'], paidCourses: ['Skill-Lync Tool'] },
                { title: 'Maintenance Engineering', steps: [
                    { week: '1-4', topic: 'Preventive Maintenance', details: 'PM schedules and checklists.' },
                    { week: '5-8', topic: 'Predictive Maintenance', details: 'Vibration analysis and thermography.' },
                    { week: '9-12', topic: 'CMMS', details: 'Computerized maintenance management.' },
                    { week: '13-16', topic: 'Reliability', details: 'MTBF, MTTR, and Weibull analysis.' },
                    { week: '17-20', topic: 'TPM', details: 'Total Productive Maintenance pillars.' },
                    { week: '21-24', topic: 'Root Cause', details: 'RCA for equipment failures.' }
                ], companies: ['Siemens', 'ABB', 'GE', 'TATA Steel'], growth: 'Steady', salaryRange: '₹4L-₹14L', complexity: 'Moderate', skills: ['CMMS', 'Vibration Analysis', 'TPM'], freeResources: ['Reliabilityweb'], paidCourses: ['SMRP Cert'] }
            ]
        },
        {
            domain: 'Thermal, Fluids & Energy',
            description: 'Heat transfer, fluid mechanics, and sustainable energy.',
            roles: [
                { title: 'Thermal Engineering', steps: [
                    { week: '1-4', topic: 'Thermodynamics', details: 'Laws, Cycles (Carnot, Rankine, Brayton).' },
                    { week: '5-8', topic: 'Heat Transfer', details: 'Conduction, Convection, and Radiation.' },
                    { week: '9-12', topic: 'IC Engines', details: 'Combustion, Performance, and Emissions.' },
                    { week: '13-16', topic: 'Refrigeration & AC', details: 'VCR, VAR, and Psychrometry.' },
                    { week: '17-20', topic: 'Simulation', details: 'Thermal CFD in ANSYS Fluent.' },
                    { week: '21-24', topic: 'Power Plant', details: 'Steam/Gas turbine design.' }
                ], companies: ['GE', 'Honeywell', 'Daikin', 'Carrier', 'Thermax'], growth: 'Steady', salaryRange: '₹6L-₹22L', complexity: 'High', skills: ['ANSYS Fluent', 'HVAC', 'Thermo'], freeResources: ['LearnThermo'], paidCourses: ['NPTEL Thermal'] },
                { title: 'Fluid Mechanics & CFD', steps: [
                    { week: '1-4', topic: 'Fluid Statics & Dynamics', details: 'Bernoulli, Navier-Stokes equations.' },
                    { week: '5-8', topic: 'Turbulence Modeling', details: 'k-epsilon, k-omega, and LES models.' },
                    { week: '9-12', topic: 'CFD Software', details: 'ANSYS Fluent/CFX and OpenFOAM.' },
                    { week: '13-16', topic: 'Meshing', details: 'Structured/unstructured meshes and quality.' },
                    { week: '17-20', topic: 'Aerodynamics', details: 'External flow, Drag, and Lift.' },
                    { week: '21-24', topic: 'Multiphase Flow', details: 'VOF, Lagrangian, and cavitation.' }
                ], companies: ['Airbus', 'Boeing', 'Rolls-Royce', 'ANSYS'], growth: 'High', salaryRange: '₹8L-₹30L', complexity: 'Very High', skills: ['ANSYS Fluent', 'OpenFOAM', 'MATLAB'], freeResources: ['CFD Online'], paidCourses: ['Skill-Lync CFD'] },
                { title: 'HVAC Engineering', steps: [
                    { week: '1-4', topic: 'Load Calculation', details: 'Cooling/Heating load estimation.' },
                    { week: '5-8', topic: 'Duct Design', details: 'Equal friction and static regain.' },
                    { week: '9-12', topic: 'Piping Design', details: 'Chilled water and refrigerant piping.' },
                    { week: '13-16', topic: 'Equipment Selection', details: 'AHU, Chiller, and FCU sizing.' },
                    { week: '17-20', topic: 'BMS Integration', details: 'Building automation and DDC.' },
                    { week: '21-24', topic: 'Green Buildings', details: 'LEED and IGBC standards.' }
                ], companies: ['Daikin', 'Carrier', 'Johnson Controls', 'Voltas'], growth: 'High', salaryRange: '₹5L-₹20L', complexity: 'Moderate', skills: ['HAP', 'Revit MEP', 'AutoCAD'], freeResources: ['ASHRAE Learning'], paidCourses: ['ASHRAE Cert'] },
                { title: 'Energy & Renewable Systems', steps: [
                    { week: '1-4', topic: 'Solar PV', details: 'Cell physics and System sizing.' },
                    { week: '5-8', topic: 'Wind Energy', details: 'Turbine aerodynamics and controls.' },
                    { week: '9-12', topic: 'Energy Storage', details: 'Battery tech and Compressed air.' },
                    { week: '13-16', topic: 'Grid Integration', details: 'Net metering and Inverters.' },
                    { week: '17-20', topic: 'Energy Auditing', details: 'Industrial & commercial audits.' },
                    { week: '21-24', topic: 'Policy & Carbon', details: 'Carbon credits and ESG.' }
                ], companies: ['Vestas', 'First Solar', 'Adani Green', 'Siemens Gamesa'], growth: 'Exponential', salaryRange: '₹7L-₹28L', complexity: 'Moderate', skills: ['PVSyst', 'Homer Pro', 'Sustainability'], freeResources: ['NREL Learning'], paidCourses: ['Coursera Renewables'] }
            ]
        },
        {
            domain: 'Robotics & Mechatronics',
            description: 'Intelligent mechanical systems with integrated electronics and software.',
            roles: [
                { title: 'Robotics & Automation', steps: [
                    { week: '1-4', topic: 'Kinematics', details: 'DH parameters and forward/inverse kinematics.' },
                    { week: '5-8', topic: 'Actuators & Sensors', details: 'Servo motors, encoders, and LIDAR.' },
                    { week: '9-12', topic: 'ROS 2', details: 'Nodes, Topics, and Nav2 stack.' },
                    { week: '13-16', topic: 'Path Planning', details: 'A*, Dijkstra, and RRT algorithms.' },
                    { week: '17-20', topic: 'Computer Vision', details: 'OpenCV and object detection for robots.' },
                    { week: '21-24', topic: 'Integration', details: 'Full robot build and deployment.' }
                ], companies: ['Boston Dynamics', 'Fanuc', 'ABB', 'KUKA', 'Tesla Bot'], growth: 'Very High', salaryRange: '₹8L-₹30L', complexity: 'High', skills: ['ROS', 'Python', 'C++', 'MATLAB'], freeResources: ['The Construct'], paidCourses: ['Udacity Robotics'] },
                { title: 'Mechatronics', steps: [
                    { week: '1-4', topic: 'Sensors & Transducers', details: 'Types, signal conditioning, and DAQ.' },
                    { week: '5-8', topic: 'Microcontrollers', details: 'Arduino/STM32 and Embedded C.' },
                    { week: '9-12', topic: 'Control Systems', details: 'PID, State-space, and MATLAB/Simulink.' },
                    { week: '13-16', topic: 'Pneumatics', details: 'Cylinders, valves, and circuit design.' },
                    { week: '17-20', topic: 'PLC Programming', details: 'Ladder logic and HMI design.' },
                    { week: '21-24', topic: 'System Integration', details: 'Complete mechatronic system project.' }
                ], companies: ['Siemens', 'Bosch Rexroth', 'Festo', 'Rockwell'], growth: 'High', salaryRange: '₹6L-₹24L', complexity: 'High', skills: ['PLC', 'Simulink', 'Embedded C', 'Pneumatics'], freeResources: ['Festo Didactic'], paidCourses: ['Udemy Mechatronics'] },
                { title: 'Industrial Engineering', steps: [
                    { week: '1-4', topic: 'Work Study', details: 'Time study and method study.' },
                    { week: '5-8', topic: 'Operations Research', details: 'LP, Queuing, and Simulation.' },
                    { week: '9-12', topic: 'Facility Layout', details: 'SLP and material handling design.' },
                    { week: '13-16', topic: 'Ergonomics', details: 'Human factors and workplace design.' },
                    { week: '17-20', topic: 'Scheduling', details: 'Job shop, Flow shop, and ERP.' },
                    { week: '21-24', topic: 'Lean & Six Sigma', details: 'Green/Black belt methodologies.' }
                ], companies: ['Amazon', 'Toyota', 'Samsung', 'Deloitte'], growth: 'High', salaryRange: '₹6L-₹24L', complexity: 'Moderate', skills: ['Lean', 'Six Sigma', 'SAP', 'OR'], freeResources: ['IIE Resources'], paidCourses: ['ASQ Green Belt'] }
            ]
        },
        {
            domain: 'Software & Modern Tech',
            description: 'Cross-functional software roles for mechanical engineers.',
            roles: [
                { title: 'Software Development', companies: ['Google', 'Microsoft'], growth: 'Steady', salaryRange: '₹12L-₹50L', skills: ['C++', 'DSA'] },
                { title: 'Web Development', companies: ['Netflix', 'Meta'], growth: 'High', salaryRange: '₹8L-₹35L', skills: ['React', 'Node.js'] },
                { title: 'Mobile App Development', companies: ['Google', 'Uber'], growth: 'High', salaryRange: '₹7L-₹28L', skills: ['Flutter', 'Kotlin'] },
                { title: 'AI & Machine Learning', companies: ['OpenAI', 'NVIDIA'], growth: 'Very High', salaryRange: '₹15L-₹60L', skills: ['Python', 'TensorFlow'] },
                { title: 'Data Science & Analytics', companies: ['Amazon', 'Spotify'], growth: 'High', salaryRange: '₹10L-₹38L', skills: ['SQL', 'Python'] },
                { title: 'Cybersecurity', companies: ['CrowdStrike', 'Cisco'], growth: 'High', salaryRange: '₹9L-₹32L', skills: ['Linux', 'SIEM'] },
                { title: 'Cloud Computing & DevOps', companies: ['GCP', 'AWS'], growth: 'Very High', salaryRange: '₹12L-₹48L', skills: ['K8s', 'Docker'] },
                { title: 'UI/UX Design', companies: ['Google', 'Adobe'], growth: 'High', salaryRange: '₹6L-₹22L', skills: ['Figma'] },
                { title: 'Blockchain Development', companies: ['Coinbase', 'Polygon'], growth: 'High', salaryRange: '₹12L-₹40L', skills: ['Solidity'] },
                { title: 'AR/VR Development', companies: ['Meta', 'Unity'], growth: 'Medium', salaryRange: '₹8L-₹26L', skills: ['Unity', 'C#'] },
                { title: 'Game Development', companies: ['Epic', 'EA'], growth: 'Medium', salaryRange: '₹6L-₹24L', skills: ['Unity', 'C#'] }
            ]
        }
    ],
    'ATE': [
        {
            domain: 'Vehicle Design & Engineering',
            description: 'Core automotive design from concept to production.',
            roles: [
                { title: 'Automobile Design', steps: [
                    { week: '1-4', topic: 'Sketching & Concept', details: 'Proportion, Perspective, and Ideation.' },
                    { week: '5-8', topic: 'Surface Modeling', details: 'CATIA/Alias A-class surfaces.' },
                    { week: '9-12', topic: 'Packaging', details: 'Ergonomic layout and component placement.' },
                    { week: '13-16', topic: 'Aero Styling', details: 'Wind tunnel concepts and Cd optimization.' },
                    { week: '17-20', topic: 'Color & Trim', details: 'Material selection and CMF.' },
                    { week: '21-24', topic: 'Clay & Digital', details: 'Physical and VR model review.' }
                ], companies: ['BMW', 'Mercedes-Benz', 'Tata Design', 'Mahindra'], growth: 'High', salaryRange: '₹8L-₹30L', complexity: 'High', skills: ['CATIA', 'Alias', 'Blender', 'Clay Modeling'], freeResources: ['Car Design News'], paidCourses: ['SPD Milano Online'] },
                { title: 'Vehicle Dynamics', steps: [
                    { week: '1-4', topic: 'Tire Mechanics', details: 'Pacejka model and slip angles.' },
                    { week: '5-8', topic: 'Suspension', details: 'MacPherson, Double Wishbone, and Multi-link.' },
                    { week: '9-12', topic: 'Ride & Handling', details: 'Roll stiffness and understeer gradient.' },
                    { week: '13-16', topic: 'Steering Systems', details: 'EPS, rack geometry, and Ackermann.' },
                    { week: '17-20', topic: 'Simulation', details: 'Adams/Car and CarSim models.' },
                    { week: '21-24', topic: 'Testing', details: 'Track testing and data acquisition.' }
                ], companies: ['Ferrari', 'Porsche', 'Tesla', 'Toyota', 'Mahindra'], growth: 'Steady', salaryRange: '₹7L-₹28L', complexity: 'Very High', skills: ['Adams', 'CarSim', 'MATLAB'], freeResources: ['SAE Papers'], paidCourses: ['Skill-Lync VD'] },
                { title: 'Powertrain Engineering', steps: [
                    { week: '1-4', topic: 'Engine Fundamentals', details: 'SI & CI combustion and thermodynamics.' },
                    { week: '5-8', topic: 'Transmission', details: 'Manual, AT, DCT, and CVT design.' },
                    { week: '9-12', topic: 'Drivetrain', details: 'Differential, Axles, and 4WD systems.' },
                    { week: '13-16', topic: 'Calibration', details: 'ECU mapping and emissions compliance.' },
                    { week: '17-20', topic: 'NVH', details: 'Vibration, Noise, and Harshness reduction.' },
                    { week: '21-24', topic: 'Electrification', details: 'Hybrid architectures and e-axles.' }
                ], companies: ['Cummins', 'Dana', 'ZF', 'BorgWarner', 'Ashok Leyland'], growth: 'Steady', salaryRange: '₹7L-₹26L', complexity: 'High', skills: ['GT-Suite', 'Simulink', 'ETAS INCA'], freeResources: ['SAE International'], paidCourses: ['NPTEL IC Engines'] },
                { title: 'Automotive Manufacturing', steps: [
                    { week: '1-4', topic: 'Body Shop', details: 'Spot welding, hemming, and BIW.' },
                    { week: '5-8', topic: 'Paint Shop', details: 'E-coating, primer, and clear coat.' },
                    { week: '9-12', topic: 'Trim & Final', details: 'Assembly line balancing and torque tools.' },
                    { week: '13-16', topic: 'Quality', details: 'APQP, PPAP, and Audit processes.' },
                    { week: '17-20', topic: 'Lean Systems', details: 'TPS, Kanban, and Andon systems.' },
                    { week: '21-24', topic: 'Automation', details: 'Robotic cells and AGV integration.' }
                ], companies: ['Toyota', 'Hyundai', 'Maruti Suzuki', 'Ford'], growth: 'Steady', salaryRange: '₹5L-₹18L', complexity: 'Moderate', skills: ['TPS', 'Lean', 'Robotics', 'APQP'], freeResources: ['Lean.org'], paidCourses: ['ASQ Automotive'] }
            ]
        },
        {
            domain: 'EV, Hybrid & Future Mobility',
            description: 'Electric, hybrid, and autonomous vehicle technologies.',
            roles: [
                { title: 'Electric Vehicles (EV Technology)', steps: [
                    { week: '1-4', topic: 'EV Architecture', details: 'BEV, HEV, PHEV configurations.' },
                    { week: '5-8', topic: 'Battery Systems', details: 'Li-ion chemistry, SOC/SOH, and BMS.' },
                    { week: '9-12', topic: 'Motors & Drives', details: 'BLDC, PMSM, and Inverter design.' },
                    { week: '13-16', topic: 'Charging', details: 'AC/DC charging, CCS, and standards.' },
                    { week: '17-20', topic: 'Regen Braking', details: 'Energy recovery and control strategy.' },
                    { week: '21-24', topic: 'Testing & Safety', details: 'ECE R100 and crash norms.' }
                ], companies: ['Tesla', 'Rivian', 'Ola Electric', 'Tata Motors', 'Lucid'], growth: 'Exponential', salaryRange: '₹10L-₹40L', complexity: 'High', skills: ['BMS', 'Simulink', 'Power Electronics'], freeResources: ['EV Academy'], paidCourses: ['Skill-Lync EV'] },
                { title: 'Hybrid Vehicle Systems', steps: [
                    { week: '1-4', topic: 'Hybrid Architectures', details: 'Series, Parallel, and Series-Parallel.' },
                    { week: '5-8', topic: 'Energy Management', details: 'Rule-based and DP controllers.' },
                    { week: '9-12', topic: 'Component Sizing', details: 'Motor and battery pack optimization.' },
                    { week: '13-16', topic: 'Simulation', details: 'ADVISOR and Autonomie tools.' },
                    { week: '17-20', topic: 'Integration', details: 'Coupling ICE with e-motor.' },
                    { week: '21-24', topic: 'Emissions', details: 'BS-VI/Euro 7 compliance.' }
                ], companies: ['Toyota', 'Honda', 'Volvo', 'BMW', 'Hyundai'], growth: 'High', salaryRange: '₹8L-₹30L', complexity: 'High', skills: ['Simulink', 'MATLAB', 'Controls'], freeResources: ['Argonne GREET'], paidCourses: ['Coursera HEV'] },
                { title: 'Autonomous Vehicles', steps: [
                    { week: '1-4', topic: 'Perception', details: 'Camera, LiDAR, and Radar fusion.' },
                    { week: '5-8', topic: 'Localization', details: 'GPS, HD Maps, and SLAM.' },
                    { week: '9-12', topic: 'Planning', details: 'Path & Motion planning algorithms.' },
                    { week: '13-16', topic: 'Control', details: 'Lateral/Longitudinal vehicle control.' },
                    { week: '17-20', topic: 'Simulation', details: 'CARLA, Autoware, and LGSVL.' },
                    { week: '21-24', topic: 'Safety & Ethics', details: 'SAE Levels, V2X, and regulations.' }
                ], companies: ['Waymo', 'Tesla Autopilot', 'Argo AI', 'Cruise', 'Mobileye'], growth: 'Exponential', salaryRange: '₹15L-₹60L+', complexity: 'Extreme', skills: ['Python', 'ROS', 'Deep Learning', 'LiDAR'], freeResources: ['Udacity OpenSource'], paidCourses: ['Udacity Self-Driving'] },
                { title: 'Automotive Electronics', steps: [
                    { week: '1-4', topic: 'Vehicle Bus', details: 'CAN, LIN, FlexRay protocols.' },
                    { week: '5-8', topic: 'ECU Design', details: 'Microcontrollers and firmware.' },
                    { week: '9-12', topic: 'ADAS', details: 'Sensors and driver-assistance algorithms.' },
                    { week: '13-16', topic: 'Infotainment', details: 'Android Auto, CarPlay, and QNX.' },
                    { week: '17-20', topic: 'Safety (ISO 26262)', details: 'Functional safety and ASIL levels.' },
                    { week: '21-24', topic: 'OTA Updates', details: 'Over-the-air software deployment.' }
                ], companies: ['Bosch', 'Continental', 'Aptiv', 'Visteon', 'HARMAN'], growth: 'High', salaryRange: '₹8L-₹32L', complexity: 'High', skills: ['CAN', 'AUTOSAR', 'Embedded C', 'Simulink'], freeResources: ['Vector Academy'], paidCourses: ['Udemy Automotive'] },
                { title: 'Motorsports Engineering', steps: [
                    { week: '1-4', topic: 'Race Car Design', details: 'Chassis, Aero packages, and Weight.' },
                    { week: '5-8', topic: 'Data Acquisition', details: 'Sensors, Lap time analysis, and Telemetry.' },
                    { week: '9-12', topic: 'Suspension Tuning', details: 'Spring/Damper setup and anti-roll.' },
                    { week: '13-16', topic: 'Aero (CFD)', details: 'Wings, diffusers, and ground effect.' },
                    { week: '17-20', topic: 'Engine Tuning', details: 'ECU calibration and dyno testing.' },
                    { week: '21-24', topic: 'Race Strategy', details: 'Tire strategy and pit stop optimization.' }
                ], companies: ['Red Bull Racing', 'McLaren', 'Mercedes AMG', 'Mahindra Racing'], growth: 'Medium', salaryRange: '₹10L-₹45L', complexity: 'Extreme', skills: ['CFD', 'Adams', 'MATLAB', 'Telemetry'], freeResources: ['F1 Technical'], paidCourses: ['Cranfield Motorsport'] }
            ]
        },
        {
            domain: 'Software & Modern Tech',
            description: 'Cross-functional software roles for automobile engineers.',
            roles: [
                { title: 'Software Development', companies: ['Google', 'Microsoft'], growth: 'Steady', salaryRange: '₹12L-₹50L', skills: ['C++', 'DSA'] },
                { title: 'Web Development', companies: ['Netflix', 'Meta'], growth: 'High', salaryRange: '₹8L-₹35L', skills: ['React', 'Node.js'] },
                { title: 'Mobile App Development', companies: ['Google', 'Uber'], growth: 'High', salaryRange: '₹7L-₹28L', skills: ['Flutter', 'Kotlin'] },
                { title: 'AI & Machine Learning', companies: ['OpenAI', 'NVIDIA'], growth: 'Very High', salaryRange: '₹15L-₹60L', skills: ['Python', 'TensorFlow'] },
                { title: 'Data Science & Analytics', companies: ['Amazon', 'Spotify'], growth: 'High', salaryRange: '₹10L-₹38L', skills: ['SQL', 'Python'] },
                { title: 'Cybersecurity', companies: ['CrowdStrike', 'Cisco'], growth: 'High', salaryRange: '₹9L-₹32L', skills: ['Linux', 'SIEM'] },
                { title: 'Cloud Computing & DevOps', companies: ['GCP', 'AWS'], growth: 'Very High', salaryRange: '₹12L-₹48L', skills: ['K8s', 'Docker'] },
                { title: 'UI/UX Design', companies: ['Google', 'Adobe'], growth: 'High', salaryRange: '₹6L-₹22L', skills: ['Figma'] },
                { title: 'Blockchain Development', companies: ['Coinbase', 'Polygon'], growth: 'High', salaryRange: '₹12L-₹40L', skills: ['Solidity'] },
                { title: 'AR/VR Development', companies: ['Meta', 'Unity'], growth: 'Medium', salaryRange: '₹8L-₹26L', skills: ['Unity', 'C#'] },
                { title: 'Game Development', companies: ['Epic', 'EA'], growth: 'Medium', salaryRange: '₹6L-₹24L', skills: ['Unity', 'C#'] }
            ]
        }
    ],
    'CVE': [
        {
            domain: 'Structural & Geotechnical',
            description: 'The science of building safe and durable structures.',
            roles: [
                { title: 'Structural Engineering', steps: [
                    { week: '1-4', topic: 'Structural Mechanics', details: 'Bending, Shear, and Axial loads.' },
                    { week: '5-8', topic: 'RCC Design', details: 'IS 456 code, Beam/Column/Slab design.' },
                    { week: '9-12', topic: 'Steel Design', details: 'IS 800 connections and trusses.' },
                    { week: '13-16', topic: 'Analysis Software', details: 'STAAD Pro, ETABS, and SAP2000.' },
                    { week: '17-20', topic: 'Seismic Design', details: 'Response spectrum and base isolation.' },
                    { week: '21-24', topic: 'Pre-stressed Concrete', details: 'Tendon profiles and losses.' }
                ], companies: ['L&T', 'Arup', 'WSP', 'Jacobs', 'Shapoorji'], growth: 'Steady', salaryRange: '₹6L-₹24L', complexity: 'High', skills: ['STAAD', 'ETABS', 'AutoCAD', 'IS Codes'], freeResources: ['NPTEL Structures'], paidCourses: ['Skillcivil'] },
                { title: 'Geotechnical Engineering', steps: [
                    { week: '1-4', topic: 'Soil Mechanics', details: 'Classification, Permeability, and Shear.' },
                    { week: '5-8', topic: 'Foundation Design', details: 'Shallow and Deep foundations.' },
                    { week: '9-12', topic: 'Slope Stability', details: 'Limit equilibrium and FEM.' },
                    { week: '13-16', topic: 'Earth Retention', details: 'Sheet piles and Diaphragm walls.' },
                    { week: '17-20', topic: 'Ground Improvement', details: 'Grouting, Compaction, and Geosynthetics.' },
                    { week: '21-24', topic: 'Software', details: 'PLAXIS and GeoStudio analysis.' }
                ], companies: ['Mott MacDonald', 'Fugro', 'AECOM', 'SMEC'], growth: 'Steady', salaryRange: '₹5L-₹20L', complexity: 'High', skills: ['PLAXIS', 'GeoStudio', 'Soil Testing'], freeResources: ['Geoengineer.org'], paidCourses: ['NPTEL Geotech'] }
            ]
        },
        {
            domain: 'Construction & Project Mgmt',
            description: 'Planning, executing, and managing construction projects.',
            roles: [
                { title: 'Construction Management', steps: [
                    { week: '1-4', topic: 'Project Lifecycle', details: 'Initiation, Planning, Execution, and Closure.' },
                    { week: '5-8', topic: 'Scheduling', details: 'CPM, PERT, and MS Project/Primavera.' },
                    { week: '9-12', topic: 'Cost Estimation', details: 'BOQ, Rate analysis, and Tendering.' },
                    { week: '13-16', topic: 'Contracts', details: 'FIDIC, EPC, and Claims management.' },
                    { week: '17-20', topic: 'Quality & Safety', details: 'ISO 9001, Safety audits, and PPE.' },
                    { week: '21-24', topic: 'Lean Construction', details: 'Last Planner System and IPD.' }
                ], companies: ['L&T', 'Shapoorji', 'Tata Projects', 'Bechtel'], growth: 'High', salaryRange: '₹6L-₹28L', complexity: 'Moderate', skills: ['Primavera', 'MS Project', 'Contracts'], freeResources: ['PMI.org'], paidCourses: ['PMP Certification'] },
                { title: 'Construction Technology', steps: [
                    { week: '1-4', topic: 'Concrete Tech', details: 'Mix design, admixtures, and curing.' },
                    { week: '5-8', topic: 'Formwork & Scaffolding', details: 'Mivan, slip-form, and safety.' },
                    { week: '9-12', topic: 'Pre-fabrication', details: 'Precast elements and modular construction.' },
                    { week: '13-16', topic: 'Heavy Equipment', details: 'Cranes, Excavators, and TBMs.' },
                    { week: '17-20', topic: '3D Printing', details: 'Additive manufacturing in construction.' },
                    { week: '21-24', topic: 'Green Building', details: 'LEED, IGBC, and sustainable materials.' }
                ], companies: ['Ultratech', 'ACC', 'Godrej Construction', 'Afcons'], growth: 'Steady', salaryRange: '₹5L-₹18L', complexity: 'Moderate', skills: ['Concrete', 'Formwork', 'Green Build'], freeResources: ['ConstructionManual'], paidCourses: ['LEED GA'] },
                { title: 'Project Management', steps: [
                    { week: '1-4', topic: 'PM Fundamentals', details: 'Scope, Time, Cost, and Quality.' },
                    { week: '5-8', topic: 'Risk Management', details: 'Risk identification and Monte Carlo.' },
                    { week: '9-12', topic: 'Stakeholder Mgmt', details: 'Communication and conflict resolution.' },
                    { week: '13-16', topic: 'EVM', details: 'Earned Value Management and KPIs.' },
                    { week: '17-20', topic: 'Digital PM', details: 'Procore, Aconex, and dashboards.' },
                    { week: '21-24', topic: 'PMP Prep', details: 'Practice exams and PMBOK study.' }
                ], companies: ['Bechtel', 'Fluor', 'AECOM', 'Turner'], growth: 'High', salaryRange: '₹8L-₹35L', complexity: 'Moderate', skills: ['Primavera', 'EVM', 'Procore'], freeResources: ['PMI MOOC'], paidCourses: ['PMP/CAPM'] },
                { title: 'Quantity Surveying', steps: [
                    { week: '1-4', topic: 'Measurement', details: 'IS 1200 and Modes of measurement.' },
                    { week: '5-8', topic: 'Rate Analysis', details: 'Material, Labour, and Overhead costing.' },
                    { week: '9-12', topic: 'BOQ Preparation', details: 'Detailed and abstract estimates.' },
                    { week: '13-16', topic: 'Valuation', details: 'Running bills and Final accounts.' },
                    { week: '17-20', topic: 'Claims & Variations', details: 'Change orders and dispute resolution.' },
                    { week: '21-24', topic: 'Cost Control', details: 'Budget tracking and variance analysis.' }
                ], companies: ['Turner & Townsend', 'Currie Brown', 'Mace', 'L&T'], growth: 'Steady', salaryRange: '₹5L-₹22L', complexity: 'Moderate', skills: ['BOQ', 'Estimation', 'Contracts'], freeResources: ['RICS Learning'], paidCourses: ['RICS Certification'] },
                { title: 'Building Information Modeling (BIM)', steps: [
                    { week: '1-4', topic: 'BIM Fundamentals', details: 'LOD, CDE, and BIM Execution Plan.' },
                    { week: '5-8', topic: 'Revit Architecture', details: 'Modeling walls, floors, and roofs.' },
                    { week: '9-12', topic: 'Revit Structure', details: 'Structural framing and rebar.' },
                    { week: '13-16', topic: 'Revit MEP', details: 'HVAC, Plumbing, and Electrical.' },
                    { week: '17-20', topic: 'Clash Detection', details: 'Navisworks and coordination.' },
                    { week: '21-24', topic: '4D/5D BIM', details: 'Scheduling and cost integration.' }
                ], companies: ['Autodesk', 'Arup', 'Bechtel', 'HOK', 'Gensler'], growth: 'Exponential', salaryRange: '₹7L-₹30L', complexity: 'Moderate', skills: ['Revit', 'Navisworks', 'Dynamo'], freeResources: ['Autodesk Academy'], paidCourses: ['BIM Manager Cert'] }
            ]
        },
        {
            domain: 'Transport, Water & Environment',
            description: 'Infrastructure for transportation, water, and sustainability.',
            roles: [
                { title: 'Transportation Engineering', steps: [
                    { week: '1-4', topic: 'Highway Design', details: 'Geometric design and IRC codes.' },
                    { week: '5-8', topic: 'Pavement Design', details: 'Flexible/Rigid pavements and CBR.' },
                    { week: '9-12', topic: 'Traffic Engineering', details: 'Signal design and LOS analysis.' },
                    { week: '13-16', topic: 'Rail Systems', details: 'Metro, HSR, and track geometry.' },
                    { week: '17-20', topic: 'Simulation', details: 'VISSIM and TransCAD.' },
                    { week: '21-24', topic: 'Urban Mobility', details: 'TOD, NMT, and ITS.' }
                ], companies: ['NHAI', 'IRB Infra', 'Cube Highways', 'DMRC'], growth: 'High', salaryRange: '₹5L-₹22L', complexity: 'High', skills: ['AutoCAD Civil 3D', 'VISSIM', 'IRC Codes'], freeResources: ['FHWA Courses'], paidCourses: ['NPTEL Transport'] },
                { title: 'Environmental Engineering', steps: [
                    { week: '1-4', topic: 'Water Treatment', details: 'Coagulation, Filtration, and Disinfection.' },
                    { week: '5-8', topic: 'Wastewater', details: 'Activated sludge, UASB, and SBR.' },
                    { week: '9-12', topic: 'Air Pollution', details: 'Emission control and AQI monitoring.' },
                    { week: '13-16', topic: 'Solid Waste', details: 'SWM rules, Composting, and Landfill.' },
                    { week: '17-20', topic: 'EIA', details: 'Environmental Impact Assessment process.' },
                    { week: '21-24', topic: 'Climate Change', details: 'Carbon footprint and Adaptation.' }
                ], companies: ['VA Tech WABAG', 'Suez', 'Veolia', 'L&T Water'], growth: 'High', salaryRange: '₹5L-₹22L', complexity: 'Moderate', skills: ['EIA', 'Water Treatment', 'GIS'], freeResources: ['EPA Resources'], paidCourses: ['Coursera Environment'] },
                { title: 'Water Resources Engineering', steps: [
                    { week: '1-4', topic: 'Hydrology', details: 'Rainfall analysis and Runoff estimation.' },
                    { week: '5-8', topic: 'Open Channel Flow', details: 'Mannings equation and Hydraulic jump.' },
                    { week: '9-12', topic: 'Dam Engineering', details: 'Gravity and Arch dam design.' },
                    { week: '13-16', topic: 'Irrigation Design', details: 'Canal design and crop water need.' },
                    { week: '17-20', topic: 'Flood Management', details: 'Flood routing and levee design.' },
                    { week: '21-24', topic: 'HEC-RAS', details: 'River modeling and GIS integration.' }
                ], companies: ['Central Water Commission', 'WAPCOS', 'NHPC', 'SJVN'], growth: 'Steady', salaryRange: '₹5L-₹18L', complexity: 'High', skills: ['HEC-RAS', 'GIS', 'Hydrology'], freeResources: ['USACE Learning'], paidCourses: ['NPTEL Water Resources'] },
                { title: 'Surveying & Geomatics', steps: [
                    { week: '1-4', topic: 'Chain & Compass Survey', details: 'Bearing, Traversing and errors.' },
                    { week: '5-8', topic: 'Total Station', details: 'Coordinate geometry and stake-out.' },
                    { week: '9-12', topic: 'GPS/GNSS', details: 'RTK, DGPS, and Network solutions.' },
                    { week: '13-16', topic: 'GIS & Remote Sensing', details: 'ArcGIS, QGIS, and Satellite imagery.' },
                    { week: '17-20', topic: 'Drone Surveying', details: 'Photogrammetry and LiDAR mapping.' },
                    { week: '21-24', topic: '3D Modeling', details: 'Point clouds and Digital Terrain Models.' }
                ], companies: ['Trimble', 'Leica', 'Survey of India', 'NRSC'], growth: 'High', salaryRange: '₹5L-₹20L', complexity: 'Moderate', skills: ['Total Station', 'ArcGIS', 'AutoCAD'], freeResources: ['ESRI MOOC'], paidCourses: ['ArcGIS Pro Cert'] },
                { title: 'Urban Planning', steps: [
                    { week: '1-4', topic: 'Planning Concepts', details: 'Zoning, Land use, and Master plans.' },
                    { week: '5-8', topic: 'Policy & Bye-laws', details: 'UDPFI guidelines and DCR.' },
                    { week: '9-12', topic: 'GIS for Planning', details: 'Spatial analysis and suitability mapping.' },
                    { week: '13-16', topic: 'Smart Cities', details: 'ICT, IoT, and Urban analytics.' },
                    { week: '17-20', topic: 'Sustainable Mobility', details: 'TOD, NMT corridors, and ITS.' },
                    { week: '21-24', topic: 'Housing & Infrastr', details: 'PMAY, Smart city projects.' }
                ], companies: ['CEPT', 'TERI', 'WRI India', 'Smart Cities Mission'], growth: 'High', salaryRange: '₹5L-₹22L', complexity: 'Moderate', skills: ['ArcGIS', 'SketchUp', 'AutoCAD'], freeResources: ['WRI Ross Center'], paidCourses: ['AITP Cert'] },
                { title: 'Smart Cities Development', companies: ['Cisco', 'IBM', 'Siemens', 'Schneider'], growth: 'Exponential', salaryRange: '₹8L-₹30L', skills: ['IoT', 'GIS', 'Data Analytics'] },
                { title: 'Disaster Management Engineering', companies: ['NDMA', 'UNDP', 'UNICEF', 'Red Cross'], growth: 'High', salaryRange: '₹6L-₹24L', skills: ['Risk Assessment', 'GIS', 'Remote Sensing'] }
            ]
        },
        {
            domain: 'Software & Modern Tech',
            description: 'Cross-functional software roles for civil engineers.',
            roles: [
                { title: 'Software Development', companies: ['Google', 'Microsoft'], growth: 'Steady', salaryRange: '₹12L-₹50L', skills: ['C++', 'DSA'] },
                { title: 'Web Development', companies: ['Netflix', 'Meta'], growth: 'High', salaryRange: '₹8L-₹35L', skills: ['React', 'Node.js'] },
                { title: 'Mobile App Development', companies: ['Google', 'Uber'], growth: 'High', salaryRange: '₹7L-₹28L', skills: ['Flutter', 'Kotlin'] },
                { title: 'AI & Machine Learning', companies: ['OpenAI', 'NVIDIA'], growth: 'Very High', salaryRange: '₹15L-₹60L', skills: ['Python', 'TensorFlow'] },
                { title: 'Data Science & Analytics', companies: ['Amazon', 'Spotify'], growth: 'High', salaryRange: '₹10L-₹38L', skills: ['SQL', 'Python'] },
                { title: 'Cybersecurity', companies: ['CrowdStrike', 'Cisco'], growth: 'High', salaryRange: '₹9L-₹32L', skills: ['Linux', 'SIEM'] },
                { title: 'Cloud Computing & DevOps', companies: ['GCP', 'AWS'], growth: 'Very High', salaryRange: '₹12L-₹48L', skills: ['K8s', 'Docker'] },
                { title: 'UI/UX Design', companies: ['Google', 'Adobe'], growth: 'High', salaryRange: '₹6L-₹22L', skills: ['Figma'] },
                { title: 'Blockchain Development', companies: ['Coinbase', 'Polygon'], growth: 'High', salaryRange: '₹12L-₹40L', skills: ['Solidity'] },
                { title: 'AR/VR Development', companies: ['Meta', 'Unity'], growth: 'Medium', salaryRange: '₹8L-₹26L', skills: ['Unity', 'C#'] },
                { title: 'Game Development', companies: ['Epic', 'EA'], growth: 'Medium', salaryRange: '₹6L-₹24L', skills: ['Unity', 'C#'] }
            ]
        }
    ],
    'CDS': [
        {
            domain: 'Data Science & ML',
            description: 'Extracting insights from data using statistics and machine learning.',
            roles: [
                { title: 'Data Science', steps: [
                    { week: '1-4', topic: 'Statistics & Probability', details: 'Distributions, Bayes, and Hypothesis Testing.' },
                    { week: '5-8', topic: 'Python for Data', details: 'Pandas, NumPy, and EDA best practices.' },
                    { week: '9-12', topic: 'Machine Learning', details: 'Sklearn: Regression, Classification, Clustering.' },
                    { week: '13-16', topic: 'Feature Engineering', details: 'Encoding, Scaling, and Selection.' },
                    { week: '17-20', topic: 'Model Evaluation', details: 'Cross-validation, AUC, and Bias-Variance.' },
                    { week: '21-24', topic: 'Case Studies', details: 'End-to-end business projects.' }
                ], companies: ['Google', 'Netflix', 'Amazon', 'McKinsey', 'Tiger Analytics'], growth: 'Exponential', salaryRange: '₹10L-₹40L', complexity: 'High', skills: ['Python', 'Statistics', 'Sklearn', 'SQL'], freeResources: ['Kaggle Learn'], paidCourses: ['DataCamp'] },
                { title: 'Data Analytics', steps: [
                    { week: '1-4', topic: 'Excel Advanced', details: 'Pivot, VLOOKUP, and Power Query.' },
                    { week: '5-8', topic: 'SQL Mastery', details: 'Joins, Window Functions, and CTEs.' },
                    { week: '9-12', topic: 'Visualization', details: 'Tableau, Power BI dashboards.' },
                    { week: '13-16', topic: 'Statistical Analysis', details: 'Descriptive/Inferential stats.' },
                    { week: '17-20', topic: 'A/B Testing', details: 'Experimental design and p-values.' },
                    { week: '21-24', topic: 'Business Strategy', details: 'Storytelling with data.' }
                ], companies: ['Google', 'Uber', 'Flipkart', 'Accenture'], growth: 'High', salaryRange: '₹6L-₹28L', complexity: 'Moderate', skills: ['SQL', 'Tableau', 'Excel', 'Power BI'], freeResources: ['Google Data Analytics'], paidCourses: ['Coursera DA'] },
                { title: 'Business Analytics', steps: [
                    { week: '1-4', topic: 'Business Fundamentals', details: 'KPIs, Metrics, and Dashboards.' },
                    { week: '5-8', topic: 'SQL for Business', details: 'Revenue, Retention, and Cohort analysis.' },
                    { week: '9-12', topic: 'Forecasting', details: 'Time Series and Regression models.' },
                    { week: '13-16', topic: 'Optimization', details: 'Linear Programming and Simulation.' },
                    { week: '17-20', topic: 'BI Tools', details: 'Looker, Power BI, and Sisense.' },
                    { week: '21-24', topic: 'Consulting Skills', details: 'Frameworks and Case interviews.' }
                ], companies: ['McKinsey', 'BCG', 'Deloitte', 'EY', 'KPMG'], growth: 'High', salaryRange: '₹8L-₹35L', complexity: 'Moderate', skills: ['SQL', 'Excel', 'Power BI', 'Python'], freeResources: ['HBR Analytics'], paidCourses: ['ISB BAi'] },
                { title: 'Statistical Analysis', steps: [
                    { week: '1-4', topic: 'Descriptive Stats', details: 'Central tendency and Dispersion.' },
                    { week: '5-8', topic: 'Inferential Stats', details: 'Confidence intervals and Hypothesis tests.' },
                    { week: '9-12', topic: 'Regression', details: 'Linear, Logistic, and Multivariate.' },
                    { week: '13-16', topic: 'Bayesian Methods', details: 'Prior, Posterior, and MCMC.' },
                    { week: '17-20', topic: 'R Programming', details: 'tidyverse, ggplot2, and Shiny.' },
                    { week: '21-24', topic: 'Experimental Design', details: 'DOE and Randomized trials.' }
                ], companies: ['Pfizer', 'IQVIA', 'SAS Institute', 'Nielsen'], growth: 'Steady', salaryRange: '₹8L-₹30L', complexity: 'High', skills: ['R', 'SAS', 'Python', 'Statistics'], freeResources: ['Khan Academy Stats'], paidCourses: ['Coursera Statistical Learning'] },
                { title: 'Data Visualization', companies: ['Tableau', 'Google', 'Spotify', 'Adobe'], growth: 'High', salaryRange: '₹7L-₹25L', skills: ['Tableau', 'D3.js', 'Power BI'] }
            ]
        },
        {
            domain: 'AI, Deep Learning & Research',
            description: 'Cutting-edge AI research and deployment.',
            roles: [
                { title: 'Machine Learning', steps: [
                    { week: '1-4', topic: 'Math for ML', details: 'Linear Algebra, Calculus, and Optimization.' },
                    { week: '5-8', topic: 'Classical ML', details: 'SVM, Random Forest, and XGBoost.' },
                    { week: '9-12', topic: 'Feature Engineering', details: 'PCA, Embeddings, and Pipeline design.' },
                    { week: '13-16', topic: 'Model Tuning', details: 'Grid/Bayesian search and Regularization.' },
                    { week: '17-20', topic: 'End-to-End Pipelines', details: 'Sklearn pipelines and MLflow.' },
                    { week: '21-24', topic: 'Deployment', details: 'FastAPI and Docker containerization.' }
                ], companies: ['Google', 'Meta', 'NVIDIA', 'Amazon'], growth: 'Very High', salaryRange: '₹12L-₹50L', complexity: 'High', skills: ['Python', 'Sklearn', 'XGBoost', 'MLflow'], freeResources: ['Fast.ai'], paidCourses: ['Andrew Ng ML'] },
                { title: 'Deep Learning', steps: [
                    { week: '1-4', topic: 'Neural Networks', details: 'Perceptrons, Backpropagation, and Activations.' },
                    { week: '5-8', topic: 'CNNs', details: 'Image classification and Object detection.' },
                    { week: '9-12', topic: 'RNNs & Sequence', details: 'LSTM, GRU, and Seq2Seq models.' },
                    { week: '13-16', topic: 'Transformers', details: 'Attention, BERT, and GPT architectures.' },
                    { week: '17-20', topic: 'GANs', details: 'Image generation and Style transfer.' },
                    { week: '21-24', topic: 'Deployment', details: 'ONNX, TensorRT, and Edge AI.' }
                ], companies: ['OpenAI', 'Google DeepMind', 'Meta FAIR', 'NVIDIA'], growth: 'Exponential', salaryRange: '₹15L-₹60L+', complexity: 'Very High', skills: ['PyTorch', 'TensorFlow', 'CUDA'], freeResources: ['d2l.ai'], paidCourses: ['DeepLearning.AI'] },
                { title: 'Natural Language Processing (NLP)', steps: [
                    { week: '1-4', topic: 'Text Preprocessing', details: 'Tokenization, Stemming, and TF-IDF.' },
                    { week: '5-8', topic: 'Word Embeddings', details: 'Word2Vec, GloVe, and FastText.' },
                    { week: '9-12', topic: 'Sequence Models', details: 'RNNs and Attention for NLP.' },
                    { week: '13-16', topic: 'Transformers', details: 'BERT, GPT, and T5 fine-tuning.' },
                    { week: '17-20', topic: 'RAG & LLMs', details: 'Retrieval Augmented Generation and prompting.' },
                    { week: '21-24', topic: 'Production NLP', details: 'Hugging Face and LangChain.' }
                ], companies: ['Google', 'OpenAI', 'Cohere', 'Anthropic'], growth: 'Exponential', salaryRange: '₹15L-₹60L+', complexity: 'Very High', skills: ['Python', 'Transformers', 'Hugging Face'], freeResources: ['Hugging Face Course'], paidCourses: ['Stanford NLP'] },
                { title: 'Computer Vision', steps: [
                    { week: '1-4', topic: 'Image Basics', details: 'Pixels, Color spaces, and Filters.' },
                    { week: '5-8', topic: 'Feature Detection', details: 'SIFT, HOG, and Contour analysis.' },
                    { week: '9-12', topic: 'Deep Vision', details: 'ResNet, EfficientNet, and YOLO.' },
                    { week: '13-16', topic: 'Segmentation', details: 'U-Net and Mask R-CNN.' },
                    { week: '17-20', topic: 'Video Analysis', details: 'Tracking, Action recognition.' },
                    { week: '21-24', topic: 'Deployment', details: 'TensorRT and OpenCV DNN.' }
                ], companies: ['Tesla', 'Google (Photos)', 'Snap', 'Adobe'], growth: 'Very High', salaryRange: '₹12L-₹50L', complexity: 'High', skills: ['OpenCV', 'PyTorch', 'TensorFlow'], freeResources: ['PyImageSearch'], paidCourses: ['Udacity CV'] },
                { title: 'AI Research', companies: ['Google DeepMind', 'OpenAI', 'Meta FAIR', 'Microsoft Research'], growth: 'Very High', salaryRange: '₹20L-₹80L+', skills: ['Math', 'PyTorch', 'Papers'] },
                { title: 'Artificial Intelligence', companies: ['Google', 'IBM Watson', 'Amazon AI'], growth: 'Exponential', salaryRange: '₹15L-₹55L', skills: ['Python', 'ML', 'Deep Learning'] }
            ]
        },
        {
            domain: 'Data Engineering & MLOps',
            description: 'Building and scaling data infrastructure.',
            roles: [
                { title: 'Data Engineering', steps: [
                    { week: '1-4', topic: 'SQL Mastery', details: 'Advanced queries and Database design.' },
                    { week: '5-8', topic: 'Python for Data', details: 'ETL scripting and API integration.' },
                    { week: '9-12', topic: 'Big Data', details: 'Apache Spark, Kafka, and Hive.' },
                    { week: '13-16', topic: 'Cloud Warehousing', details: 'BigQuery, Snowflake, and Redshift.' },
                    { week: '17-20', topic: 'Orchestration', details: 'Apache Airflow and dbt.' },
                    { week: '21-24', topic: 'Data Governance', details: 'Lineage, Quality, and Security.' }
                ], companies: ['Google', 'Meta', 'Netflix', 'Snowflake', 'Databricks'], growth: 'Very High', salaryRange: '₹12L-₹50L', complexity: 'High', skills: ['Spark', 'Airflow', 'SQL', 'Python'], freeResources: ['DataEngineering.wiki'], paidCourses: ['Udacity DE'] },
                { title: 'Big Data Engineering', steps: [
                    { week: '1-4', topic: 'Hadoop Ecosystem', details: 'HDFS, MapReduce, and YARN.' },
                    { week: '5-8', topic: 'Spark Deep Dive', details: 'RDDs, DataFrames, and Spark SQL.' },
                    { week: '9-12', topic: 'Stream Processing', details: 'Kafka Streams and Flink.' },
                    { week: '13-16', topic: 'NoSQL', details: 'MongoDB, Cassandra, and HBase.' },
                    { week: '17-20', topic: 'Data Lakes', details: 'Delta Lake and Iceberg tables.' },
                    { week: '21-24', topic: 'Performance', details: 'Partitioning, Caching, and Tuning.' }
                ], companies: ['Cloudera', 'Databricks', 'Palantir', 'LinkedIn'], growth: 'High', salaryRange: '₹12L-₹45L', complexity: 'High', skills: ['Spark', 'Hadoop', 'Kafka', 'Scala'], freeResources: ['Spark Docs'], paidCourses: ['Databricks Academy'] },
                { title: 'MLOps', steps: [
                    { week: '1-4', topic: 'Version Control', details: 'Git, DVC, and experiment tracking.' },
                    { week: '5-8', topic: 'CI/CD for ML', details: 'GitHub Actions and automated testing.' },
                    { week: '9-12', topic: 'Model Registry', details: 'MLflow and Weights & Biases.' },
                    { week: '13-16', topic: 'Serving', details: 'TFServing, Seldon, and BentoML.' },
                    { week: '17-20', topic: 'Monitoring', details: 'Data drift and Model degradation.' },
                    { week: '21-24', topic: 'Cloud ML Platforms', details: 'Vertex AI and SageMaker.' }
                ], companies: ['Google', 'Amazon', 'DataRobot', 'Weights & Biases'], growth: 'Exponential', salaryRange: '₹15L-₹55L', complexity: 'High', skills: ['MLflow', 'Docker', 'Kubernetes', 'Python'], freeResources: ['Made With ML'], paidCourses: ['Coursera MLOps'] }
            ]
        },
        {
            domain: 'Software & Modern Tech',
            description: 'Cross-functional software roles for data science graduates.',
            roles: [
                { title: 'Software Development', companies: ['Google', 'Microsoft'], growth: 'Steady', salaryRange: '₹12L-₹50L', skills: ['C++', 'DSA'] },
                { title: 'Web Development', companies: ['Netflix', 'Meta'], growth: 'High', salaryRange: '₹8L-₹35L', skills: ['React', 'Node.js'] },
                { title: 'Mobile App Development', companies: ['Google', 'Uber'], growth: 'High', salaryRange: '₹7L-₹28L', skills: ['Flutter', 'Kotlin'] },
                { title: 'Cybersecurity', companies: ['CrowdStrike', 'Cisco'], growth: 'High', salaryRange: '₹9L-₹32L', skills: ['Linux', 'SIEM'] },
                { title: 'Cloud Computing & DevOps', companies: ['GCP', 'AWS'], growth: 'Very High', salaryRange: '₹12L-₹48L', skills: ['K8s', 'Docker'] },
                { title: 'UI/UX Design', companies: ['Google', 'Adobe'], growth: 'High', salaryRange: '₹6L-₹22L', skills: ['Figma'] },
                { title: 'Blockchain Development', companies: ['Coinbase', 'Polygon'], growth: 'High', salaryRange: '₹12L-₹40L', skills: ['Solidity'] },
                { title: 'AR/VR Development', companies: ['Meta', 'Unity'], growth: 'Medium', salaryRange: '₹8L-₹26L', skills: ['Unity', 'C#'] },
                { title: 'Game Development', companies: ['Epic', 'EA'], growth: 'Medium', salaryRange: '₹6L-₹24L', skills: ['Unity', 'C#'] }
            ]
        }
    ],
    'IMT': [
        {
            domain: 'IT Infrastructure & Security',
            description: 'Designing, maintaining, and securing enterprise networks and cloud infrastructure.',
            roles: [
                {
                    title: 'Cloud Computing & DevOps',
                    steps: [
                        { week: '1-4', topic: 'Linux & Scripting', details: 'Bash scripting, Cron jobs, and User Management.' },
                        { week: '5-8', topic: 'Networking & Cloud Basics', details: 'DNS, TCP/IP, VPC, and AWS/Azure fundamentals.' },
                        { week: '9-12', topic: 'Containerization', details: 'Docker files, volumes, and networks.' },
                        { week: '13-16', topic: 'Orchestration', details: 'Kubernetes (K8s) pods, deployments, and services.' },
                        { week: '17-20', topic: 'CI/CD Pipelines', details: 'Jenkins, GitHub Actions, and Gitlab CI.' },
                        { week: '21-24', topic: 'Infrastructure as Code', details: 'Terraform and Ansible automation.' }
                    ],
                    companies: ['Amazon Web Services', 'Microsoft', 'Google Cloud', 'IBM'],
                    growth: 'Exponential', salaryRange: '₹12L - ₹45L', complexity: 'High',
                    skills: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
                    freeResources: ['KodeKloud (Free Tier)'], paidCourses: ['CKA Certification']
                },
                {
                    title: 'Cybersecurity Operations',
                    steps: [
                        { week: '1-4', topic: 'Networking Security', details: 'Firewalls, VPNs, and OSI Model.' },
                        { week: '5-8', topic: 'Vulnerability Assessment', details: 'Scanning, Nmap, and Nessus.' },
                        { week: '9-12', topic: 'Threat Intelligence', details: 'Zero-day exploits, CVEs, and MITRE ATT&CK.' },
                        { week: '13-16', topic: 'SIEM Tools', details: 'Splunk, ELK stack, and Log analysis.' },
                        { week: '17-20', topic: 'Incident Response', details: 'Forensics, Containment, and Recovery.' },
                        { week: '21-24', topic: 'Penetration Testing', details: 'Burp Suite, Metasploit, and Kali Linux.' }
                    ],
                    companies: ['CrowdStrike', 'Palo Alto Networks', 'Cisco', 'Symantec'],
                    growth: 'Very High', salaryRange: '₹10L - ₹40L', complexity: 'High',
                    skills: ['SIEM', 'Network Auth', 'Pen-Testing', 'Linux'],
                    freeResources: ['TryHackMe'], paidCourses: ['CompTIA Security+', 'CEH']
                },
                {
                    title: 'Network Administration',
                    steps: [
                        { week: '1-4', topic: 'Network Fundamentals', details: 'Switches, Routers, and Subnetting.' },
                        { week: '5-8', topic: 'Routing Protocols', details: 'OSPF, BGP, and EIGRP.' },
                        { week: '9-12', topic: 'Wireless & WAN', details: 'Wi-Fi standards, SD-WAN.' },
                        { week: '13-16', topic: 'Network Security', details: 'ACLs, IPS/IDS, and NAT.' },
                        { week: '17-20', topic: 'Network Programmability', details: 'Python for network automation (Netmiko).' },
                        { week: '21-24', topic: 'Monitoring', details: 'SNMP, Wireshark, and SolarWinds.' }
                    ],
                    companies: ['Cisco', 'Juniper', 'AT&T', 'Verizon'],
                    growth: 'Steady', salaryRange: '₹6L - ₹20L', complexity: 'Moderate',
                    skills: ['Routing', 'Switching', 'Python', 'Wireshark'],
                    freeResources: ['Cisco Packet Tracer Labs'], paidCourses: ['CCNA Certification']
                }
            ]
        },
        {
            domain: 'Enterprise Data & Applications',
            description: 'Managing and optimizing organizational data and core application systems.',
            roles: [
                {
                    title: 'Database Administration (DBA)',
                    steps: [
                        { week: '1-4', topic: 'RDBMS Fundamentals', details: 'SQL queries, Normalization, and ACID properties.' },
                        { week: '5-8', topic: 'Indexing & Tuning', details: 'Query execution plans and performance optimization.' },
                        { week: '9-12', topic: 'Backup & Recovery', details: 'Point-in-time recovery, logs, and disaster recovery.' },
                        { week: '13-16', topic: 'High Availability', details: 'Replication, Clustering, and Sharding.' },
                        { week: '17-20', topic: 'Cloud Databases', details: 'Amazon RDS, Azure SQL, and Migration.' },
                        { week: '21-24', topic: 'NoSQL DBs', details: 'MongoDB, Cassandra for unstructured data.' }
                    ],
                    companies: ['Oracle', 'Microsoft', 'MongoDB', 'EnterpriseDB'],
                    growth: 'Steady', salaryRange: '₹8L - ₹28L', complexity: 'High',
                    skills: ['SQL', 'Oracle/PostgreSQL', 'Performance Tuning'],
                    freeResources: ['PostgreSQL Docs'], paidCourses: ['Oracle DBA Cert']
                },
                {
                    title: 'Systems Analysis & Architecture',
                    steps: [
                        { week: '1-4', topic: 'Requirements Gathering', details: 'Stakeholder interviews, BRDs, and FRDs.' },
                        { week: '5-8', topic: 'UML & Modeling', details: 'Use-case, Sequence, and Class diagrams.' },
                        { week: '9-12', topic: 'System Design Patterns', details: 'Monoliths, Microservices, and Event-driven architecture.' },
                        { week: '13-16', topic: 'API Design', details: 'RESTful constraints, GraphQL, and Open API specs.' },
                        { week: '17-20', topic: 'Enterprise Integrations', details: 'ESB, Message Brokers (Kafka/RabbitMQ).' },
                        { week: '21-24', topic: 'Cloud Architectures', details: 'Serverless computing and AWS Well-Architected Framework.' }
                    ],
                    companies: ['Accenture', 'TCS', 'Capgemini', 'IBM Consulting'],
                    growth: 'High', salaryRange: '₹10L - ₹30L', complexity: 'High',
                    skills: ['System Design', 'UML', 'Microservices', 'REST'],
                    freeResources: ['System Design Primer (GitHub)'], paidCourses: ['TOGAF Certification']
                },
                {
                    title: 'IT Project Management',
                    steps: [
                        { week: '1-4', topic: 'Agile & Scrum', details: 'Sprints, ceremonies, and artifacts.' },
                        { week: '5-8', topic: 'Project Tracking', details: 'Jira, Confluence, and Trello.' },
                        { week: '9-12', topic: 'Risk Management', details: 'Identifying dependencies and mitigating risks.' },
                        { week: '13-16', topic: 'Resource Allocation', details: 'Capacity planning and budgeting.' },
                        { week: '17-20', topic: 'Stakeholder Comms', details: 'Reporting KPIs, velocity, and burndown charts.' },
                        { week: '21-24', topic: 'Release Management', details: 'Coordinating deployments and go-live phases.' }
                    ],
                    companies: ['Deloitte', 'Cognizant', 'Infosys', 'Tech Mahindra'],
                    growth: 'High', salaryRange: '₹9L - ₹25L', complexity: 'Moderate',
                    skills: ['Agile', 'Jira', 'Scrum', 'Risk Mgmt'],
                    freeResources: ['Scrum Guide'], paidCourses: ['Certified ScrumMaster (CSM)']
                }
            ]
        },
        {
            domain: 'Software & Core Development',
            description: 'Core software engineering and full-stack integration.',
            roles: [
                { title: 'Software Development', companies: ['Google', 'Microsoft'], growth: 'Steady', salaryRange: '₹12L-₹50L', skills: ['Java', 'Python', 'DSA'] },
                { title: 'Web Development', companies: ['Netflix', 'Meta'], growth: 'High', salaryRange: '₹8L-₹35L', skills: ['React', 'Node.js', 'TypeScript'] },
                { title: 'Mobile App Development', companies: ['Google', 'Uber'], growth: 'High', salaryRange: '₹7L-₹28L', skills: ['Flutter', 'React Native'] },
                { title: 'Data Analytics & BI', companies: ['Tableau', 'Mu Sigma'], growth: 'High', salaryRange: '₹8L-₹24L', skills: ['SQL', 'Power BI', 'Python'] },
                { title: 'AI & Machine Learning', companies: ['OpenAI', 'Amazon'], growth: 'Very High', salaryRange: '₹15L-₹60L', skills: ['Python', 'TensorFlow', 'LLMs'] }
            ]
        }
    ]
};
