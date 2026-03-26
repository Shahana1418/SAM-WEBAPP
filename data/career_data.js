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
                    freeResources: ['web.dev (Google)', 'The Odin Project'], paidCourses: ['Zero To Mastery']
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

    'MCE': [{ domain: 'Robotics & CAD', roles: [{ title: 'Robotics Engineer', companies: ['Boston Dynamics'], growth: 'Very High', salaryRange: '₹7L-₹18L', skills: ['ROS', 'Mechatronics'] }] }],
    'CVE': [{ domain: 'BIM & Structures', roles: [{ title: 'BIM Coordinator', companies: ['L&T'], growth: 'High', salaryRange: '₹5L-₹18L', skills: ['Revit', 'Navisworks'] }] }],
    'ATE': [{ domain: 'EV Diagnostics', roles: [{ title: 'EV Calibration Engineer', companies: ['Bosch'], growth: 'Very High', salaryRange: '₹6L-₹18L', skills: ['BMS', 'OBD'] }] }],
    'CDS': [{ domain: 'Analytics', roles: [{ title: 'BI Developer', companies: ['Deloitte'], growth: 'High', salaryRange: '₹6L-₹18L', skills: ['Power BI', 'SQL'] }] }],
    'IMT': [{ domain: 'Cloud', roles: [{ title: 'Cloud Architect', companies: ['Google Cloud'], growth: 'Very High', salaryRange: '₹12L-₹45L+', skills: ['AWS/GCP', 'K8s'] }] }]
};
