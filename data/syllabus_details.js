/**
 * SYLLABUS_DETAILS — Full syllabus info per subject
 * Includes: Course Objectives, Course Outcomes (COs), Units with titles & subtopics
 * Keyed by subject code (e.g. "CS3401")
 */
const SYLLABUS_DETAILS = {

    /* ═══════════════════════════════════════════════════════════
       R2021 — CSE SUBJECTS
    ═══════════════════════════════════════════════════════════ */

    "CS3401": {
        name: "Algorithms",
        regulation: "R2021",
        department: "CSE",
        credits: 4,
        ltp: "3-0-2",
        objectives: [
            "To understand and apply the algorithm analysis techniques on searching and sorting algorithms",
            "To critically analyze the efficiency of graph algorithms",
            "To understand different algorithm design techniques",
            "To solve programming problems using state space tree",
            "To understand the concepts behind NP Completeness, Approximation algorithms and randomized algorithms"
        ],
        outcomes: [
            { id: "CO1", desc: "Analyze the efficiency of algorithms using various frameworks" },
            { id: "CO2", desc: "Apply graph algorithms to solve problems and analyze their efficiency" },
            { id: "CO3", desc: "Make use of algorithm design techniques like divide and conquer, dynamic programming and greedy techniques to solve problems" },
            { id: "CO4", desc: "Use the state space tree method for solving problems" },
            { id: "CO5", desc: "Solve problems using approximation algorithms and randomized algorithms" }
        ],
        units: [
            {
                id: 1, title: "Introduction",
                topics: [
                    "Algorithm analysis: Time and space complexity",
                    "Asymptotic Notations and its properties",
                    "Best case, Worst case and average case analysis",
                    "Recurrence relation: substitution method",
                    "Searching: linear search, binary search, Interpolation Search",
                    "Pattern search: Naïve string-matching, Rabin-Karp, Knuth-Morris-Pratt",
                    "Sorting: Insertion sort, Heap sort"
                ]
            },
            {
                id: 2, title: "Graph Algorithms",
                topics: [
                    "Representations of graphs",
                    "Graph traversal: DFS, BFS and applications",
                    "Connectivity, strong connectivity, bi-connectivity",
                    "Minimum spanning tree: Kruskal's and Prim's algorithm",
                    "Shortest path: Bellman-Ford, Dijkstra's, Floyd-Warshall",
                    "Network flow: Flow networks, Ford-Fulkerson method",
                    "Matching: Maximum bipartite matching"
                ]
            },
            {
                id: 3, title: "Algorithm Design Techniques",
                topics: [
                    "Divide and Conquer: Finding max and min, Merge sort, Quick sort",
                    "Dynamic programming: Matrix-chain multiplication, Multi stage graph, Optimal BST",
                    "Greedy Technique: Activity-selection problem, Optimal Merge pattern, Huffman Trees"
                ]
            },
            {
                id: 4, title: "State Space Search Algorithms",
                topics: [
                    "Backtracking: n-Queens problem, Hamiltonian Circuit, Subset Sum, Graph colouring",
                    "Branch and Bound: 15-Puzzle problem, Assignment problem, Knapsack, TSP"
                ]
            },
            {
                id: 5, title: "NP-Complete and Approximation Algorithm",
                topics: [
                    "Tractable and intractable problems",
                    "Polynomial time algorithms, NP-algorithms",
                    "NP-hardness and NP-completeness",
                    "Bin Packing problem, Problem reduction: TSP, 3-CNF",
                    "Approximation Algorithms: TSP",
                    "Randomized Algorithms: primality testing, randomized quick sort, Finding kth smallest number"
                ]
            }
        ]
    },

    "CS3452": {
        name: "Theory of Computation",
        regulation: "R2021",
        department: "CSE",
        credits: 4,
        ltp: "3-1-0",
        objectives: [
            "To construct automata for any given pattern and find its equivalent regular expression",
            "To understand the design of context free grammar for any given language",
            "To understand the design of push down automata for any CFL",
            "To understand Turing machines and their capability",
            "To understand undecidable problems and NP class problems"
        ],
        outcomes: [
            { id: "CO1", desc: "Write a regular expression for a given pattern and construct finite automata for the same" },
            { id: "CO2", desc: "Design a context free grammar for any given language" },
            { id: "CO3", desc: "Design push down automata for any context free language" },
            { id: "CO4", desc: "Design Turing machines for any language" },
            { id: "CO5", desc: "Identify undecidable problems and NP class problems" }
        ],
        units: [
            {
                id: 1, title: "Finite Automata",
                topics: [
                    "Introduction to Formal Proof, Additional forms of Proof",
                    "Finite Automata: Deterministic FA (DFA)",
                    "Non-deterministic FA (NFA)",
                    "Equivalence of NFA and DFA",
                    "Finite Automata with Epsilon transitions"
                ]
            },
            {
                id: 2, title: "Regular Expressions and Languages",
                topics: [
                    "Regular Expression, FA and Regular expressions",
                    "Proving Languages not to be regular (Pumping Lemma)",
                    "Closure properties of regular languages",
                    "Decision properties of regular languages",
                    "Equivalence and minimization of Automata"
                ]
            },
            {
                id: 3, title: "Context Free Grammar and Push Down Automata",
                topics: [
                    "Context Free Grammar (CFG): Parse trees, Ambiguity",
                    "Normal forms: CNF, GNF",
                    "Pumping lemma for CFL",
                    "Closure properties of CFL",
                    "Push Down Automata (PDA)",
                    "Equivalence of PDA and CFG"
                ]
            },
            {
                id: 4, title: "Turing Machine",
                topics: [
                    "Definition of Turing Machine (TM)",
                    "TM as a computer of integer functions",
                    "Universal Turing Machine",
                    "Church's Thesis",
                    "Recursive and Recursively enumerable languages",
                    "Halting problem, Post's correspondence problem"
                ]
            },
            {
                id: 5, title: "Undecidability and Computational Complexity",
                topics: [
                    "Undecidable problems about Turing Machines",
                    "Undecidable problems about CFLs",
                    "Classes P and NP",
                    "NP-completeness, Cook's theorem",
                    "Some NP-complete problems"
                ]
            }
        ]
    },

    "CS3491": {
        name: "Artificial Intelligence and Machine Learning",
        regulation: "R2021",
        department: "CSE",
        credits: 4,
        ltp: "3-0-2",
        objectives: [
            "To learn the basic concepts of AI and its applications",
            "To learn various search algorithms and problem solving approaches",
            "To understand probabilistic reasoning and Bayesian networks",
            "To learn supervised, unsupervised, and ensemble learning techniques",
            "To understand neural network architectures and deep learning"
        ],
        outcomes: [
            { id: "CO1", desc: "Use appropriate search algorithms for problem solving" },
            { id: "CO2", desc: "Apply reasoning under uncertainty" },
            { id: "CO3", desc: "Build supervised learning models" },
            { id: "CO4", desc: "Build ensembling and unsupervised models" },
            { id: "CO5", desc: "Build deep learning neural network models" }
        ],
        units: [
            {
                id: 1, title: "Problem Solving",
                topics: [
                    "Introduction to AI, AI Applications",
                    "Problem solving agents",
                    "Search algorithms: Uninformed search strategies",
                    "Heuristic search strategies",
                    "Local search and optimization problems",
                    "Adversarial search",
                    "Constraint satisfaction problems (CSP)"
                ]
            },
            {
                id: 2, title: "Probabilistic Reasoning",
                topics: [
                    "Acting under uncertainty",
                    "Bayesian inference, Naïve Bayes models",
                    "Probabilistic reasoning, Bayesian networks",
                    "Exact inference in BN",
                    "Approximate inference in BN",
                    "Causal networks"
                ]
            },
            {
                id: 3, title: "Supervised Learning",
                topics: [
                    "Introduction to Machine Learning",
                    "Linear Regression: Least squares, Bayesian linear regression, Gradient descent",
                    "Linear Classification: Discriminant function, Logistic regression",
                    "Probabilistic generative model: Naive Bayes",
                    "Maximum margin classifier: SVM",
                    "Decision Tree, Random forests"
                ]
            },
            {
                id: 4, title: "Ensemble Techniques and Unsupervised Learning",
                topics: [
                    "Model combination schemes, Voting",
                    "Ensemble Learning: Bagging, Boosting, Stacking",
                    "Unsupervised learning: K-means",
                    "Instance Based Learning: KNN",
                    "Gaussian mixture models and Expectation maximization"
                ]
            },
            {
                id: 5, title: "Neural Networks",
                topics: [
                    "Perceptron, Multilayer perceptron, Activation functions",
                    "Network training: Gradient descent, Stochastic gradient descent",
                    "Error backpropagation",
                    "From shallow networks to deep networks",
                    "Vanishing gradient problem, ReLU",
                    "Hyperparameter tuning, Batch normalization, Regularization, Dropout"
                ]
            }
        ]
    },

    "CS3492": {
        name: "Database Management Systems",
        regulation: "R2021",
        department: "CSE",
        credits: 3,
        ltp: "3-0-0",
        objectives: [
            "To learn the fundamentals of data models, relational algebra and SQL",
            "To represent a database system using ER diagrams and to learn normalization techniques",
            "To understand the fundamental concepts of transaction, concurrency and recovery processing",
            "To understand internal storage structures using different file and indexing techniques for physical DB design",
            "To have introductory knowledge about Distributed databases, NoSQL and database security"
        ],
        outcomes: [
            { id: "CO1", desc: "Construct SQL Queries using relational algebra" },
            { id: "CO2", desc: "Design database using ER model and normalize the database" },
            { id: "CO3", desc: "Construct queries to handle transaction processing and maintain consistency of the database" },
            { id: "CO4", desc: "Compare and contrast various indexing strategies and apply the knowledge to tune the performance of the database" },
            { id: "CO5", desc: "Appraise how advanced databases differ from Relational Databases and find a suitable database for the given requirement" }
        ],
        units: [
            {
                id: 1, title: "Relational Databases",
                topics: [
                    "Purpose of Database System, Views of data, Data Models",
                    "Database System Architecture",
                    "Introduction to Relational databases, Relational Model, Keys",
                    "Relational Algebra",
                    "SQL fundamentals, Advanced SQL features",
                    "Embedded SQL, Dynamic SQL"
                ]
            },
            {
                id: 2, title: "Database Design",
                topics: [
                    "Entity-Relationship model, E-R Diagrams",
                    "Enhanced-ER Model, ER-to-Relational Mapping",
                    "Functional Dependencies, Non-loss Decomposition",
                    "Normal Forms: 1NF, 2NF, 3NF",
                    "Dependency Preservation, Boyce/Codd Normal Form",
                    "Multi-valued Dependencies (4NF), Join Dependencies (5NF)"
                ]
            },
            {
                id: 3, title: "Transactions",
                topics: [
                    "Transaction Concepts, ACID Properties",
                    "Schedules, Serializability",
                    "Concurrency control: Two Phase Locking, Timestamp, Multiversion",
                    "Validation and Snapshot isolation",
                    "Multiple Granularity locking, Deadlock Handling",
                    "Recovery Concepts: Deferred and immediate update, Shadow paging, ARIES"
                ]
            },
            {
                id: 4, title: "Implementation Techniques",
                topics: [
                    "RAID, File Organization, Organization of Records",
                    "Data dictionary Storage, Column Oriented Storage",
                    "Indexing and Hashing: Ordered Indices, B+ tree, B tree",
                    "Static Hashing, Dynamic Hashing",
                    "Query Processing Overview",
                    "Algorithms for Selection, Sorting, Join operations",
                    "Query optimization using Heuristics, Cost Estimation"
                ]
            },
            {
                id: 5, title: "Advanced Topics",
                topics: [
                    "Distributed Databases: Architecture, Data Storage, Transaction Processing",
                    "NoSQL Databases: CAP Theorem, Document Based, Key-value Stores, Column Based, Graph DBs",
                    "Database Security: Access control, Role Based access control",
                    "SQL Injection, Statistical Database security",
                    "Encryption and Public Key infrastructures"
                ]
            }
        ]
    },

    "CS3451": {
        name: "Introduction to Operating Systems",
        regulation: "R2021",
        department: "CSE",
        credits: 3,
        ltp: "3-0-0",
        objectives: [
            "To understand the basics and functions of operating systems",
            "To understand processes and threads",
            "To analyze scheduling algorithms and process synchronization",
            "To understand the concept of deadlocks",
            "To analyze various memory management schemes",
            "To be familiar with I/O management and file systems",
            "To be familiar with the basics of virtual machines and Mobile OS like iOS and Android"
        ],
        outcomes: [
            { id: "CO1", desc: "Analyze various scheduling algorithms and process synchronization" },
            { id: "CO2", desc: "Explain deadlock prevention and avoidance algorithms" },
            { id: "CO3", desc: "Compare and contrast various memory management schemes" },
            { id: "CO4", desc: "Explain the functionality of file systems, I/O systems, and Virtualization" },
            { id: "CO5", desc: "Compare iOS and Android Operating Systems" }
        ],
        units: [
            {
                id: 1, title: "Introduction",
                topics: [
                    "Computer System: Elements and organization",
                    "Operating System Overview: Objectives and Functions",
                    "Evolution of Operating System",
                    "OS Structures: Services, User Interface, System Calls",
                    "System Programs, Design and Implementation, Structuring methods"
                ]
            },
            {
                id: 2, title: "Process Management",
                topics: [
                    "Processes: Process Concept, Process Scheduling, Operations on Processes",
                    "Inter-process Communication",
                    "CPU Scheduling: Scheduling criteria and algorithms",
                    "Threads: Multithread Models, Threading issues",
                    "Process Synchronization: Critical-Section problem, Semaphores, Mutex, Monitors",
                    "Deadlock: Prevention, Avoidance, Detection, Recovery"
                ]
            },
            {
                id: 3, title: "Memory Management",
                topics: [
                    "Main Memory: Swapping, Contiguous Memory Allocation",
                    "Paging: Structure of the Page Table",
                    "Segmentation, Segmentation with paging",
                    "Virtual Memory: Demand Paging, Copy on Write",
                    "Page Replacement, Allocation of Frames, Thrashing"
                ]
            },
            {
                id: 4, title: "Storage Management",
                topics: [
                    "Mass Storage system: Disk Structure, Disk Scheduling",
                    "File-System Interface: File concept, Access methods, Directory Structure",
                    "File system mounting, File Sharing and Protection",
                    "File System Implementation: Allocation Methods, Free Space Management",
                    "I/O Systems: I/O Hardware, Application I/O interface, Kernel I/O subsystem"
                ]
            },
            {
                id: 5, title: "Virtual Machines and Mobile OS",
                topics: [
                    "Virtual Machines: History, Benefits and Features",
                    "Building Blocks, Types of VMs and their Implementations",
                    "Virtualization and Operating-System Components",
                    "Mobile OS: iOS and Android"
                ]
            }
        ]
    },

    "CCS356": {
        name: "Object Oriented Software Engineering",
        regulation: "R2021",
        department: "CSE",
        credits: 3,
        ltp: "3-0-0",
        objectives: [
            "To understand the fundamentals of object oriented software engineering",
            "To learn about software requirements and specification",
            "To understand software design methodologies",
            "To learn about software testing techniques",
            "To understand software project management"
        ],
        outcomes: [
            { id: "CO1", desc: "Apply the concepts of object oriented software engineering" },
            { id: "CO2", desc: "Analyze software requirements and prepare SRS document" },
            { id: "CO3", desc: "Apply design methodologies and design principles for system design" },
            { id: "CO4", desc: "Apply testing techniques for software quality assurance" },
            { id: "CO5", desc: "Apply project management skills to plan and track software projects" }
        ],
        units: [
            {
                id: 1, title: "Software Process and Agile Development",
                topics: [
                    "Software Products, Software Process Models",
                    "Agile Software Development",
                    "Requirements engineering",
                    "System modeling"
                ]
            },
            {
                id: 2, title: "Design Engineering",
                topics: [
                    "Design concepts and principles",
                    "Architectural Design",
                    "Component-level design",
                    "User Interface Design"
                ]
            },
            {
                id: 3, title: "Testing Strategies",
                topics: [
                    "Software testing fundamentals",
                    "Black-box and White-box testing",
                    "Unit testing, Integration testing",
                    "System testing, Acceptance testing"
                ]
            },
            {
                id: 4, title: "Quality Management",
                topics: [
                    "Software Quality Assurance",
                    "Quality metrics and measurements",
                    "Software Configuration Management",
                    "Risk Management"
                ]
            },
            {
                id: 5, title: "Project Management",
                topics: [
                    "Project planning, Estimation techniques",
                    "COCOMO model, Function Point Analysis",
                    "Software maintenance and reengineering",
                    "DevOps and continuous delivery"
                ]
            }
        ]
    },

    "CS3691": {
        name: "Embedded Systems and IoT",
        regulation: "R2021",
        department: "CSE",
        credits: 4,
        ltp: "3-0-2",
        objectives: [
            "To understand the basics of embedded systems architecture",
            "To learn about embedded system design methodologies",
            "To understand the fundamentals of IoT",
            "To learn about IoT protocols and communication",
            "To understand IoT applications and case studies"
        ],
        outcomes: [
            { id: "CO1", desc: "Identify the components and architecture of embedded systems" },
            { id: "CO2", desc: "Design embedded systems using appropriate methodologies" },
            { id: "CO3", desc: "Apply IoT concepts for building smart applications" },
            { id: "CO4", desc: "Implement IoT communication protocols" },
            { id: "CO5", desc: "Develop IoT applications using suitable platforms" }
        ],
        units: [
            {
                id: 1, title: "Introduction to Embedded Systems",
                topics: [
                    "Definition, Classification and Applications of Embedded Systems",
                    "Overview of Processors and Hardware units",
                    "Embedded Software: Firmware, RTOS",
                    "Devices and buses for devices network"
                ]
            },
            {
                id: 2, title: "Embedded System Design",
                topics: [
                    "Embedded System Design Process",
                    "Design with Microcontrollers (ARM/Arduino)",
                    "Interfacing: Memory, I/O, Sensors, Actuators",
                    "Real-Time Operating Systems"
                ]
            },
            {
                id: 3, title: "Introduction to IoT",
                topics: [
                    "IoT Definition, Characteristics, and Architecture",
                    "Physical design of IoT: Things & devices",
                    "Logical design of IoT: Functional blocks",
                    "IoT enabling technologies, IoT Levels"
                ]
            },
            {
                id: 4, title: "IoT Protocols and Communication",
                topics: [
                    "IoT Communication Models: Request-Response, Publish-Subscribe",
                    "IoT Communication APIs: REST, WebSocket",
                    "IoT Protocols: MQTT, CoAP, AMQP",
                    "Data handling and analytics in IoT"
                ]
            },
            {
                id: 5, title: "IoT Applications",
                topics: [
                    "Smart Home/City applications",
                    "Industrial IoT, Connected Vehicles",
                    "Healthcare IoT, Agriculture IoT",
                    "IoT Cloud platforms: AWS IoT, Azure IoT, ThingSpeak"
                ]
            }
        ]
    },

    /* ═══════════════════════════════════════════════════════════
       R2025 — CSE SEMESTER 2 SUBJECTS
    ═══════════════════════════════════════════════════════════ */

    "MA25C02": {
        name: "Linear Algebra",
        regulation: "R2025",
        department: "CSE",
        credits: 4,
        ltp: "3-1-0",
        objectives: [
            "To provide understanding of systems of linear equations and matrix operations",
            "To introduce vector spaces and linear transformations",
            "To understand eigenvalue problems and their applications"
        ],
        outcomes: [
            { id: "CO1", desc: "Solve systems of linear equations using matrix methods" },
            { id: "CO2", desc: "Apply concepts of vector spaces and subspaces" },
            { id: "CO3", desc: "Compute eigenvalues and eigenvectors and apply to engineering problems" },
            { id: "CO4", desc: "Use computational tools to solve linear algebra problems" }
        ],
        units: [
            { id: 1, title: "Matrices and Systems of Equations", topics: ["Matrix operations", "Row echelon form", "Gaussian elimination", "Solution of systems of equations"] },
            { id: 2, title: "Vector Spaces", topics: ["Definition and examples", "Subspaces", "Linear independence", "Basis and dimension"] },
            { id: 3, title: "Linear Transformations", topics: ["Definition and properties", "Matrix representation", "Rank and Nullity theorem"] },
            { id: 4, title: "Eigenvalues and Eigenvectors", topics: ["Characteristic equation", "Eigenvalue computation", "Diagonalization", "Applications"] },
            { id: 5, title: "Inner Product Spaces", topics: ["Inner products", "Orthogonality", "Gram-Schmidt process", "Least squares approximation"] }
        ]
    },

    "CS25C06": {
        name: "Digital Principles and Computer Organization",
        regulation: "R2025",
        department: "CSE",
        credits: 4,
        ltp: "3-1-0",
        objectives: [
            "To understand combinational and sequential digital circuits",
            "To learn the basics of computer organization and architecture",
            "To understand memory hierarchy and I/O organization"
        ],
        outcomes: [
            { id: "CO1", desc: "Design combinational and sequential circuits" },
            { id: "CO2", desc: "Explain the organization and architecture of computer systems" },
            { id: "CO3", desc: "Analyze the memory hierarchy and I/O systems" },
            { id: "CO4", desc: "Implement basic processor design concepts" }
        ],
        units: [
            { id: 1, title: "Digital Fundamentals", topics: ["Number systems", "Boolean algebra", "Logic gates", "K-map simplification"] },
            { id: 2, title: "Combinational Circuits", topics: ["Adders, Subtractors", "Multiplexers, Demultiplexers", "Encoders, Decoders", "Code converters"] },
            { id: 3, title: "Sequential Circuits", topics: ["Flip-flops: SR, JK, D, T", "Registers and Counters", "Shift registers", "Sequence detectors"] },
            { id: 4, title: "Processor Organization", topics: ["CPU architecture", "Instruction set architecture", "Addressing modes", "Micro-operations, ALU"] },
            { id: 5, title: "Memory and I/O", topics: ["Memory hierarchy", "Cache memory", "Virtual memory concepts", "I/O interfaces and buses"] }
        ]
    },

    "CS25C07": {
        name: "Object Oriented Programming",
        regulation: "R2025",
        department: "CSE",
        credits: 5,
        ltp: "3-0-4",
        objectives: [
            "To understand object oriented programming concepts",
            "To learn classes, objects, inheritance and polymorphism",
            "To apply exception handling and I/O techniques"
        ],
        outcomes: [
            { id: "CO1", desc: "Apply OOP concepts to solve problems" },
            { id: "CO2", desc: "Design classes using inheritance and polymorphism" },
            { id: "CO3", desc: "Handle exceptions and implement file I/O" },
            { id: "CO4", desc: "Develop applications using collections and generics" }
        ],
        units: [
            { id: 1, title: "Introduction to OOP", topics: ["OOP principles", "Classes and Objects", "Constructors and Destructors", "Access specifiers"] },
            { id: 2, title: "Inheritance and Polymorphism", topics: ["Types of inheritance", "Method overriding", "Abstract classes and interfaces", "Dynamic binding"] },
            { id: 3, title: "Exception Handling", topics: ["Try, catch, throw", "Multiple catch blocks", "Custom exceptions", "Finally block"] },
            { id: 4, title: "Collections and Generics", topics: ["ArrayList, LinkedList", "HashMap, TreeMap", "Iterators", "Generic classes and methods"] },
            { id: 5, title: "I/O and Multithreading", topics: ["File I/O: Byte and Character streams", "Serialization", "Thread lifecycle", "Synchronization"] }
        ]
    },

    "EE25C01": {
        name: "Basic Electrical and Electronics Engineering",
        regulation: "R2025",
        department: "CSE",
        credits: 3,
        ltp: "3-0-0",
        objectives: [
            "To understand basic electrical circuits and their analysis",
            "To learn about electrical machines and transformers",
            "To understand basics of semiconductor devices and digital electronics"
        ],
        outcomes: [
            { id: "CO1", desc: "Analyze basic electrical circuits using Kirchhoff's laws" },
            { id: "CO2", desc: "Explain the working principle of transformers and electrical machines" },
            { id: "CO3", desc: "Describe semiconductor devices and their applications" },
            { id: "CO4", desc: "Design basic digital logic circuits" }
        ],
        units: [
            { id: 1, title: "DC Circuits", topics: ["Ohm's law, KVL, KCL", "Series and parallel circuits", "Star-Delta transformation", "Network theorems"] },
            { id: 2, title: "AC Circuits", topics: ["AC fundamentals, Phasors", "RLC circuits", "Power in AC circuits", "Resonance"] },
            { id: 3, title: "Electrical Machines", topics: ["Transformers: principle and types", "DC motors and generators", "Induction motors", "Applications"] },
            { id: 4, title: "Semiconductor Devices", topics: ["PN junction diode", "Bipolar Junction Transistor", "FET and MOSFET", "Rectifiers and regulators"] },
            { id: 5, title: "Digital Electronics", topics: ["Number systems and codes", "Logic gates and Boolean algebra", "Combinational circuits", "Sequential circuits basics"] }
        ]
    },

    "PH25C03": {
        name: "Applied Physics (CSIE) – II",
        regulation: "R2025",
        department: "CSE",
        credits: 3,
        ltp: "2-1-0",
        objectives: [
            "To understand the principles of quantum mechanics and their applications",
            "To learn about semiconductor physics and devices",
            "To introduce photonics and fiber optic communication"
        ],
        outcomes: [
            { id: "CO1", desc: "Apply quantum mechanical concepts to solve engineering problems" },
            { id: "CO2", desc: "Explain semiconductor physics and device operation" },
            { id: "CO3", desc: "Describe optical fiber principles and laser applications" },
            { id: "CO4", desc: "Analyze nanoscale materials and their properties" }
        ],
        units: [
            { id: 1, title: "Quantum Mechanics", topics: ["Wave-particle duality", "Schrödinger equation", "Particle in a box", "Quantum tunneling"] },
            { id: 2, title: "Semiconductor Physics", topics: ["Band theory of solids", "Intrinsic and extrinsic semiconductors", "Hall effect", "Junction diodes"] },
            { id: 3, title: "Photonics", topics: ["Laser: Principle and types", "Fiber optics: Total internal reflection", "Types of optical fibers", "Applications in communication"] },
            { id: 4, title: "Magnetic and Dielectric Materials", topics: ["Magnetic properties of materials", "Ferro, Para, Diamagnetic materials", "Dielectric polarization", "Applications"] },
            { id: 5, title: "Nanoscience", topics: ["Nanomaterials: properties and synthesis", "Carbon nanotubes", "Quantum dots", "Applications of nanotechnology"] }
        ]
    },
    "AU3601": {
    "name": "Automotive Pollution and Control",
    "regulation": "R2021",
    "department": "Common",
    "credits": 3,
    "ltp": "3-0-0",
    "objectives": [
        "To understand the fundamental concepts of Automotive Pollution and Control",
        "To apply principles and analytical techniques to Automotive Pollution and Control problems",
        "To develop problem-solving skills in relevant domains",
        "To analyze complex systems associated with the subject",
        "To design solutions using state-of-the-art methods"
    ],
    "outcomes": [
        {
            "id": "CO1",
            "desc": "Understand the basic concepts and principles."
        },
        {
            "id": "CO2",
            "desc": "Apply theoretical methods to practical scenarios."
        },
        {
            "id": "CO3",
            "desc": "Analyze system performance and behavior."
        },
        {
            "id": "CO4",
            "desc": "Evaluate different implementations and approaches."
        },
        {
            "id": "CO5",
            "desc": "Design simple models or complete systems."
        }
    ],
    "units": [
        {
            "id": 1,
            "title": "Introduction and Basic Concepts",
            "topics": [
                "Definition and scope",
                "Fundamental theories",
                "Basic definitions",
                "Overview of applications"
            ]
        },
        {
            "id": 2,
            "title": "Analysis and Principles",
            "topics": [
                "Analytical methods",
                "Core principles",
                "Mathematical modeling",
                "Key algorithms"
            ]
        },
        {
            "id": 3,
            "title": "Design and Implementation",
            "topics": [
                "Design methodologies",
                "Architecture overview",
                "Implementation steps",
                "Case studies"
            ]
        },
        {
            "id": 4,
            "title": "Advanced Topics",
            "topics": [
                "Complex scenarios",
                "Advanced techniques",
                "Performance evaluation",
                "Optimization"
            ]
        },
        {
            "id": 5,
            "title": "Applications and Future Trends",
            "topics": [
                "Recent advancements",
                "Industry applications",
                "Emerging technologies",
                "Future scope"
            ]
        }
    ]
},
    "AU3401": {
    "name": "Fuels and Lubricants",
    "regulation": "R2021",
    "department": "Common",
    "credits": 3,
    "ltp": "3-0-0",
    "objectives": [
        "To understand the fundamental concepts of Fuels and Lubricants",
        "To apply principles and analytical techniques to Fuels and Lubricants problems",
        "To develop problem-solving skills in relevant domains",
        "To analyze complex systems associated with the subject",
        "To design solutions using state-of-the-art methods"
    ],
    "outcomes": [
        {
            "id": "CO1",
            "desc": "Understand the basic concepts and principles."
        },
        {
            "id": "CO2",
            "desc": "Apply theoretical methods to practical scenarios."
        },
        {
            "id": "CO3",
            "desc": "Analyze system performance and behavior."
        },
        {
            "id": "CO4",
            "desc": "Evaluate different implementations and approaches."
        },
        {
            "id": "CO5",
            "desc": "Design simple models or complete systems."
        }
    ],
    "units": [
        {
            "id": 1,
            "title": "Introduction and Basic Concepts",
            "topics": [
                "Definition and scope",
                "Fundamental theories",
                "Basic definitions",
                "Overview of applications"
            ]
        },
        {
            "id": 2,
            "title": "Analysis and Principles",
            "topics": [
                "Analytical methods",
                "Core principles",
                "Mathematical modeling",
                "Key algorithms"
            ]
        },
        {
            "id": 3,
            "title": "Design and Implementation",
            "topics": [
                "Design methodologies",
                "Architecture overview",
                "Implementation steps",
                "Case studies"
            ]
        },
        {
            "id": 4,
            "title": "Advanced Topics",
            "topics": [
                "Complex scenarios",
                "Advanced techniques",
                "Performance evaluation",
                "Optimization"
            ]
        },
        {
            "id": 5,
            "title": "Applications and Future Trends",
            "topics": [
                "Recent advancements",
                "Industry applications",
                "Emerging technologies",
                "Future scope"
            ]
        }
    ]
},
    "AU3402": {
    "name": "Automotive Chassis",
    "regulation": "R2021",
    "department": "Common",
    "credits": 3,
    "ltp": "3-0-0",
    "objectives": [
        "To understand the fundamental concepts of Automotive Chassis",
        "To apply principles and analytical techniques to Automotive Chassis problems",
        "To develop problem-solving skills in relevant domains",
        "To analyze complex systems associated with the subject",
        "To design solutions using state-of-the-art methods"
    ],
    "outcomes": [
        {
            "id": "CO1",
            "desc": "Understand the basic concepts and principles."
        },
        {
            "id": "CO2",
            "desc": "Apply theoretical methods to practical scenarios."
        },
        {
            "id": "CO3",
            "desc": "Analyze system performance and behavior."
        },
        {
            "id": "CO4",
            "desc": "Evaluate different implementations and approaches."
        },
        {
            "id": "CO5",
            "desc": "Design simple models or complete systems."
        }
    ],
    "units": [
        {
            "id": 1,
            "title": "Introduction and Basic Concepts",
            "topics": [
                "Definition and scope",
                "Fundamental theories",
                "Basic definitions",
                "Overview of applications"
            ]
        },
        {
            "id": 2,
            "title": "Analysis and Principles",
            "topics": [
                "Analytical methods",
                "Core principles",
                "Mathematical modeling",
                "Key algorithms"
            ]
        },
        {
            "id": 3,
            "title": "Design and Implementation",
            "topics": [
                "Design methodologies",
                "Architecture overview",
                "Implementation steps",
                "Case studies"
            ]
        },
        {
            "id": 4,
            "title": "Advanced Topics",
            "topics": [
                "Complex scenarios",
                "Advanced techniques",
                "Performance evaluation",
                "Optimization"
            ]
        },
        {
            "id": 5,
            "title": "Applications and Future Trends",
            "topics": [
                "Recent advancements",
                "Industry applications",
                "Emerging technologies",
                "Future scope"
            ]
        }
    ]
},
    "AU3403": {
    "name": "Vehicle Body Engineering",
    "regulation": "R2021",
    "department": "Common",
    "credits": 3,
    "ltp": "3-0-0",
    "objectives": [
        "To understand the fundamental concepts of Vehicle Body Engineering",
        "To apply principles and analytical techniques to Vehicle Body Engineering problems",
        "To develop problem-solving skills in relevant domains",
        "To analyze complex systems associated with the subject",
        "To design solutions using state-of-the-art methods"
    ],
    "outcomes": [
        {
            "id": "CO1",
            "desc": "Understand the basic concepts and principles."
        },
        {
            "id": "CO2",
            "desc": "Apply theoretical methods to practical scenarios."
        },
        {
            "id": "CO3",
            "desc": "Analyze system performance and behavior."
        },
        {
            "id": "CO4",
            "desc": "Evaluate different implementations and approaches."
        },
        {
            "id": "CO5",
            "desc": "Design simple models or complete systems."
        }
    ],
    "units": [
        {
            "id": 1,
            "title": "Introduction and Basic Concepts",
            "topics": [
                "Definition and scope",
                "Fundamental theories",
                "Basic definitions",
                "Overview of applications"
            ]
        },
        {
            "id": 2,
            "title": "Analysis and Principles",
            "topics": [
                "Analytical methods",
                "Core principles",
                "Mathematical modeling",
                "Key algorithms"
            ]
        },
        {
            "id": 3,
            "title": "Design and Implementation",
            "topics": [
                "Design methodologies",
                "Architecture overview",
                "Implementation steps",
                "Case studies"
            ]
        },
        {
            "id": 4,
            "title": "Advanced Topics",
            "topics": [
                "Complex scenarios",
                "Advanced techniques",
                "Performance evaluation",
                "Optimization"
            ]
        },
        {
            "id": 5,
            "title": "Applications and Future Trends",
            "topics": [
                "Recent advancements",
                "Industry applications",
                "Emerging technologies",
                "Future scope"
            ]
        }
    ]
},
    "AU3404": {
    "name": "Automotive Transmission",
    "regulation": "R2021",
    "department": "Common",
    "credits": 3,
    "ltp": "3-0-0",
    "objectives": [
        "To understand the fundamental concepts of Automotive Transmission",
        "To apply principles and analytical techniques to Automotive Transmission problems",
        "To develop problem-solving skills in relevant domains",
        "To analyze complex systems associated with the subject",
        "To design solutions using state-of-the-art methods"
    ],
    "outcomes": [
        {
            "id": "CO1",
            "desc": "Understand the basic concepts and principles."
        },
        {
            "id": "CO2",
            "desc": "Apply theoretical methods to practical scenarios."
        },
        {
            "id": "CO3",
            "desc": "Analyze system performance and behavior."
        },
        {
            "id": "CO4",
            "desc": "Evaluate different implementations and approaches."
        },
        {
            "id": "CO5",
            "desc": "Design simple models or complete systems."
        }
    ],
    "units": [
        {
            "id": 1,
            "title": "Introduction and Basic Concepts",
            "topics": [
                "Definition and scope",
                "Fundamental theories",
                "Basic definitions",
                "Overview of applications"
            ]
        },
        {
            "id": 2,
            "title": "Analysis and Principles",
            "topics": [
                "Analytical methods",
                "Core principles",
                "Mathematical modeling",
                "Key algorithms"
            ]
        },
        {
            "id": 3,
            "title": "Design and Implementation",
            "topics": [
                "Design methodologies",
                "Architecture overview",
                "Implementation steps",
                "Case studies"
            ]
        },
        {
            "id": 4,
            "title": "Advanced Topics",
            "topics": [
                "Complex scenarios",
                "Advanced techniques",
                "Performance evaluation",
                "Optimization"
            ]
        },
        {
            "id": 5,
            "title": "Applications and Future Trends",
            "topics": [
                "Recent advancements",
                "Industry applications",
                "Emerging technologies",
                "Future scope"
            ]
        }
    ]
},
    "ML3391": {
    "name": "Mechanics of Solids",
    "regulation": "R2021",
    "department": "Common",
    "credits": 3,
    "ltp": "3-0-0",
    "objectives": [
        "To understand the fundamental concepts of Mechanics of Solids",
        "To apply principles and analytical techniques to Mechanics of Solids problems",
        "To develop problem-solving skills in relevant domains",
        "To analyze complex systems associated with the subject",
        "To design solutions using state-of-the-art methods"
    ],
    "outcomes": [
        {
            "id": "CO1",
            "desc": "Understand the basic concepts and principles."
        },
        {
            "id": "CO2",
            "desc": "Apply theoretical methods to practical scenarios."
        },
        {
            "id": "CO3",
            "desc": "Analyze system performance and behavior."
        },
        {
            "id": "CO4",
            "desc": "Evaluate different implementations and approaches."
        },
        {
            "id": "CO5",
            "desc": "Design simple models or complete systems."
        }
    ],
    "units": [
        {
            "id": 1,
            "title": "Introduction and Basic Concepts",
            "topics": [
                "Definition and scope",
                "Fundamental theories",
                "Basic definitions",
                "Overview of applications"
            ]
        },
        {
            "id": 2,
            "title": "Analysis and Principles",
            "topics": [
                "Analytical methods",
                "Core principles",
                "Mathematical modeling",
                "Key algorithms"
            ]
        },
        {
            "id": 3,
            "title": "Design and Implementation",
            "topics": [
                "Design methodologies",
                "Architecture overview",
                "Implementation steps",
                "Case studies"
            ]
        },
        {
            "id": 4,
            "title": "Advanced Topics",
            "topics": [
                "Complex scenarios",
                "Advanced techniques",
                "Performance evaluation",
                "Optimization"
            ]
        },
        {
            "id": 5,
            "title": "Applications and Future Trends",
            "topics": [
                "Recent advancements",
                "Industry applications",
                "Emerging technologies",
                "Future scope"
            ]
        }
    ]
},
    "ME3301": {
    "name": "Fluid Mechanics and Machinery",
    "regulation": "R2021",
    "department": "Common",
    "credits": 3,
    "ltp": "3-0-0",
    "objectives": [
        "To understand the fundamental concepts of Fluid Mechanics and Machinery",
        "To apply principles and analytical techniques to Fluid Mechanics and Machinery problems",
        "To develop problem-solving skills in relevant domains",
        "To analyze complex systems associated with the subject",
        "To design solutions using state-of-the-art methods"
    ],
    "outcomes": [
        {
            "id": "CO1",
            "desc": "Understand the basic concepts and principles."
        },
        {
            "id": "CO2",
            "desc": "Apply theoretical methods to practical scenarios."
        },
        {
            "id": "CO3",
            "desc": "Analyze system performance and behavior."
        },
        {
            "id": "CO4",
            "desc": "Evaluate different implementations and approaches."
        },
        {
            "id": "CO5",
            "desc": "Design simple models or complete systems."
        }
    ],
    "units": [
        {
            "id": 1,
            "title": "Introduction and Basic Concepts",
            "topics": [
                "Definition and scope",
                "Fundamental theories",
                "Basic definitions",
                "Overview of applications"
            ]
        },
        {
            "id": 2,
            "title": "Analysis and Principles",
            "topics": [
                "Analytical methods",
                "Core principles",
                "Mathematical modeling",
                "Key algorithms"
            ]
        },
        {
            "id": 3,
            "title": "Design and Implementation",
            "topics": [
                "Design methodologies",
                "Architecture overview",
                "Implementation steps",
                "Case studies"
            ]
        },
        {
            "id": 4,
            "title": "Advanced Topics",
            "topics": [
                "Complex scenarios",
                "Advanced techniques",
                "Performance evaluation",
                "Optimization"
            ]
        },
        {
            "id": 5,
            "title": "Applications and Future Trends",
            "topics": [
                "Recent advancements",
                "Industry applications",
                "Emerging technologies",
                "Future scope"
            ]
        }
    ]
},
    "ME3302": {
    "name": "Manufacturing Technology \u2013 II",
    "regulation": "R2021",
    "department": "Common",
    "credits": 3,
    "ltp": "3-0-0",
    "objectives": [
        "To understand the fundamental concepts of Manufacturing Technology \u2013 II",
        "To apply principles and analytical techniques to Manufacturing Technology \u2013 II problems",
        "To develop problem-solving skills in relevant domains",
        "To analyze complex systems associated with the subject",
        "To design solutions using state-of-the-art methods"
    ],
    "outcomes": [
        {
            "id": "CO1",
            "desc": "Understand the basic concepts and principles."
        },
        {
            "id": "CO2",
            "desc": "Apply theoretical methods to practical scenarios."
        },
        {
            "id": "CO3",
            "desc": "Analyze system performance and behavior."
        },
        {
            "id": "CO4",
            "desc": "Evaluate different implementations and approaches."
        },
        {
            "id": "CO5",
            "desc": "Design simple models or complete systems."
        }
    ],
    "units": [
        {
            "id": 1,
            "title": "Introduction and Basic Concepts",
            "topics": [
                "Definition and scope",
                "Fundamental theories",
                "Basic definitions",
                "Overview of applications"
            ]
        },
        {
            "id": 2,
            "title": "Analysis and Principles",
            "topics": [
                "Analytical methods",
                "Core principles",
                "Mathematical modeling",
                "Key algorithms"
            ]
        },
        {
            "id": 3,
            "title": "Design and Implementation",
            "topics": [
                "Design methodologies",
                "Architecture overview",
                "Implementation steps",
                "Case studies"
            ]
        },
        {
            "id": 4,
            "title": "Advanced Topics",
            "topics": [
                "Complex scenarios",
                "Advanced techniques",
                "Performance evaluation",
                "Optimization"
            ]
        },
        {
            "id": 5,
            "title": "Applications and Future Trends",
            "topics": [
                "Recent advancements",
                "Industry applications",
                "Emerging technologies",
                "Future scope"
            ]
        }
    ]
},
    "ME3303": {
    "name": "Engineering Thermodynamics",
    "regulation": "R2021",
    "department": "Common",
    "credits": 3,
    "ltp": "3-0-0",
    "objectives": [
        "To understand the fundamental concepts of Engineering Thermodynamics",
        "To apply principles and analytical techniques to Engineering Thermodynamics problems",
        "To develop problem-solving skills in relevant domains",
        "To analyze complex systems associated with the subject",
        "To design solutions using state-of-the-art methods"
    ],
    "outcomes": [
        {
            "id": "CO1",
            "desc": "Understand the basic concepts and principles."
        },
        {
            "id": "CO2",
            "desc": "Apply theoretical methods to practical scenarios."
        },
        {
            "id": "CO3",
            "desc": "Analyze system performance and behavior."
        },
        {
            "id": "CO4",
            "desc": "Evaluate different implementations and approaches."
        },
        {
            "id": "CO5",
            "desc": "Design simple models or complete systems."
        }
    ],
    "units": [
        {
            "id": 1,
            "title": "Introduction and Basic Concepts",
            "topics": [
                "Definition and scope",
                "Fundamental theories",
                "Basic definitions",
                "Overview of applications"
            ]
        },
        {
            "id": 2,
            "title": "Analysis and Principles",
            "topics": [
                "Analytical methods",
                "Core principles",
                "Mathematical modeling",
                "Key algorithms"
            ]
        },
        {
            "id": 3,
            "title": "Design and Implementation",
            "topics": [
                "Design methodologies",
                "Architecture overview",
                "Implementation steps",
                "Case studies"
            ]
        },
        {
            "id": 4,
            "title": "Advanced Topics",
            "topics": [
                "Complex scenarios",
                "Advanced techniques",
                "Performance evaluation",
                "Optimization"
            ]
        },
        {
            "id": 5,
            "title": "Applications and Future Trends",
            "topics": [
                "Recent advancements",
                "Industry applications",
                "Emerging technologies",
                "Future scope"
            ]
        }
    ]
},
    "ME3401": {
    "name": "Applied Thermodynamics",
    "regulation": "R2021",
    "department": "Common",
    "credits": 3,
    "ltp": "3-0-0",
    "objectives": [
        "To understand the fundamental concepts of Applied Thermodynamics",
        "To apply principles and analytical techniques to Applied Thermodynamics problems",
        "To develop problem-solving skills in relevant domains",
        "To analyze complex systems associated with the subject",
        "To design solutions using state-of-the-art methods"
    ],
    "outcomes": [
        {
            "id": "CO1",
            "desc": "Understand the basic concepts and principles."
        },
        {
            "id": "CO2",
            "desc": "Apply theoretical methods to practical scenarios."
        },
        {
            "id": "CO3",
            "desc": "Analyze system performance and behavior."
        },
        {
            "id": "CO4",
            "desc": "Evaluate different implementations and approaches."
        },
        {
            "id": "CO5",
            "desc": "Design simple models or complete systems."
        }
    ],
    "units": [
        {
            "id": 1,
            "title": "Introduction and Basic Concepts",
            "topics": [
                "Definition and scope",
                "Fundamental theories",
                "Basic definitions",
                "Overview of applications"
            ]
        },
        {
            "id": 2,
            "title": "Analysis and Principles",
            "topics": [
                "Analytical methods",
                "Core principles",
                "Mathematical modeling",
                "Key algorithms"
            ]
        },
        {
            "id": 3,
            "title": "Design and Implementation",
            "topics": [
                "Design methodologies",
                "Architecture overview",
                "Implementation steps",
                "Case studies"
            ]
        },
        {
            "id": 4,
            "title": "Advanced Topics",
            "topics": [
                "Complex scenarios",
                "Advanced techniques",
                "Performance evaluation",
                "Optimization"
            ]
        },
        {
            "id": 5,
            "title": "Applications and Future Trends",
            "topics": [
                "Recent advancements",
                "Industry applications",
                "Emerging technologies",
                "Future scope"
            ]
        }
    ]
},
    "ME3402": {
    "name": "Design of Machine Elements",
    "regulation": "R2021",
    "department": "Common",
    "credits": 3,
    "ltp": "3-0-0",
    "objectives": [
        "To understand the fundamental concepts of Design of Machine Elements",
        "To apply principles and analytical techniques to Design of Machine Elements problems",
        "To develop problem-solving skills in relevant domains",
        "To analyze complex systems associated with the subject",
        "To design solutions using state-of-the-art methods"
    ],
    "outcomes": [
        {
            "id": "CO1",
            "desc": "Understand the basic concepts and principles."
        },
        {
            "id": "CO2",
            "desc": "Apply theoretical methods to practical scenarios."
        },
        {
            "id": "CO3",
            "desc": "Analyze system performance and behavior."
        },
        {
            "id": "CO4",
            "desc": "Evaluate different implementations and approaches."
        },
        {
            "id": "CO5",
            "desc": "Design simple models or complete systems."
        }
    ],
    "units": [
        {
            "id": 1,
            "title": "Introduction and Basic Concepts",
            "topics": [
                "Definition and scope",
                "Fundamental theories",
                "Basic definitions",
                "Overview of applications"
            ]
        },
        {
            "id": 2,
            "title": "Analysis and Principles",
            "topics": [
                "Analytical methods",
                "Core principles",
                "Mathematical modeling",
                "Key algorithms"
            ]
        },
        {
            "id": 3,
            "title": "Design and Implementation",
            "topics": [
                "Design methodologies",
                "Architecture overview",
                "Implementation steps",
                "Case studies"
            ]
        },
        {
            "id": 4,
            "title": "Advanced Topics",
            "topics": [
                "Complex scenarios",
                "Advanced techniques",
                "Performance evaluation",
                "Optimization"
            ]
        },
        {
            "id": 5,
            "title": "Applications and Future Trends",
            "topics": [
                "Recent advancements",
                "Industry applications",
                "Emerging technologies",
                "Future scope"
            ]
        }
    ]
},
    "ME3403": {
    "name": "Metrology and Measurements",
    "regulation": "R2021",
    "department": "Common",
    "credits": 3,
    "ltp": "3-0-0",
    "objectives": [
        "To understand the fundamental concepts of Metrology and Measurements",
        "To apply principles and analytical techniques to Metrology and Measurements problems",
        "To develop problem-solving skills in relevant domains",
        "To analyze complex systems associated with the subject",
        "To design solutions using state-of-the-art methods"
    ],
    "outcomes": [
        {
            "id": "CO1",
            "desc": "Understand the basic concepts and principles."
        },
        {
            "id": "CO2",
            "desc": "Apply theoretical methods to practical scenarios."
        },
        {
            "id": "CO3",
            "desc": "Analyze system performance and behavior."
        },
        {
            "id": "CO4",
            "desc": "Evaluate different implementations and approaches."
        },
        {
            "id": "CO5",
            "desc": "Design simple models or complete systems."
        }
    ],
    "units": [
        {
            "id": 1,
            "title": "Introduction and Basic Concepts",
            "topics": [
                "Definition and scope",
                "Fundamental theories",
                "Basic definitions",
                "Overview of applications"
            ]
        },
        {
            "id": 2,
            "title": "Analysis and Principles",
            "topics": [
                "Analytical methods",
                "Core principles",
                "Mathematical modeling",
                "Key algorithms"
            ]
        },
        {
            "id": 3,
            "title": "Design and Implementation",
            "topics": [
                "Design methodologies",
                "Architecture overview",
                "Implementation steps",
                "Case studies"
            ]
        },
        {
            "id": 4,
            "title": "Advanced Topics",
            "topics": [
                "Complex scenarios",
                "Advanced techniques",
                "Performance evaluation",
                "Optimization"
            ]
        },
        {
            "id": 5,
            "title": "Applications and Future Trends",
            "topics": [
                "Recent advancements",
                "Industry applications",
                "Emerging technologies",
                "Future scope"
            ]
        }
    ]
},
    "ME3501": {
    "name": "Computer Aided Design and Manufacturing",
    "regulation": "R2021",
    "department": "Common",
    "credits": 3,
    "ltp": "3-0-0",
    "objectives": [
        "To understand the fundamental concepts of Computer Aided Design and Manufacturing",
        "To apply principles and analytical techniques to Computer Aided Design and Manufacturing problems",
        "To develop problem-solving skills in relevant domains",
        "To analyze complex systems associated with the subject",
        "To design solutions using state-of-the-art methods"
    ],
    "outcomes": [
        {
            "id": "CO1",
            "desc": "Understand the basic concepts and principles."
        },
        {
            "id": "CO2",
            "desc": "Apply theoretical methods to practical scenarios."
        },
        {
            "id": "CO3",
            "desc": "Analyze system performance and behavior."
        },
        {
            "id": "CO4",
            "desc": "Evaluate different implementations and approaches."
        },
        {
            "id": "CO5",
            "desc": "Design simple models or complete systems."
        }
    ],
    "units": [
        {
            "id": 1,
            "title": "Introduction and Basic Concepts",
            "topics": [
                "Definition and scope",
                "Fundamental theories",
                "Basic definitions",
                "Overview of applications"
            ]
        },
        {
            "id": 2,
            "title": "Analysis and Principles",
            "topics": [
                "Analytical methods",
                "Core principles",
                "Mathematical modeling",
                "Key algorithms"
            ]
        },
        {
            "id": 3,
            "title": "Design and Implementation",
            "topics": [
                "Design methodologies",
                "Architecture overview",
                "Implementation steps",
                "Case studies"
            ]
        },
        {
            "id": 4,
            "title": "Advanced Topics",
            "topics": [
                "Complex scenarios",
                "Advanced techniques",
                "Performance evaluation",
                "Optimization"
            ]
        },
        {
            "id": 5,
            "title": "Applications and Future Trends",
            "topics": [
                "Recent advancements",
                "Industry applications",
                "Emerging technologies",
                "Future scope"
            ]
        }
    ]
},
    "ME3601": {
    "name": "Mechatronics",
    "regulation": "R2021",
    "department": "Common",
    "credits": 3,
    "ltp": "3-0-0",
    "objectives": [
        "To understand the fundamental concepts of Mechatronics",
        "To apply principles and analytical techniques to Mechatronics problems",
        "To develop problem-solving skills in relevant domains",
        "To analyze complex systems associated with the subject",
        "To design solutions using state-of-the-art methods"
    ],
    "outcomes": [
        {
            "id": "CO1",
            "desc": "Understand the basic concepts and principles."
        },
        {
            "id": "CO2",
            "desc": "Apply theoretical methods to practical scenarios."
        },
        {
            "id": "CO3",
            "desc": "Analyze system performance and behavior."
        },
        {
            "id": "CO4",
            "desc": "Evaluate different implementations and approaches."
        },
        {
            "id": "CO5",
            "desc": "Design simple models or complete systems."
        }
    ],
    "units": [
        {
            "id": 1,
            "title": "Introduction and Basic Concepts",
            "topics": [
                "Definition and scope",
                "Fundamental theories",
                "Basic definitions",
                "Overview of applications"
            ]
        },
        {
            "id": 2,
            "title": "Analysis and Principles",
            "topics": [
                "Analytical methods",
                "Core principles",
                "Mathematical modeling",
                "Key algorithms"
            ]
        },
        {
            "id": 3,
            "title": "Design and Implementation",
            "topics": [
                "Design methodologies",
                "Architecture overview",
                "Implementation steps",
                "Case studies"
            ]
        },
        {
            "id": 4,
            "title": "Advanced Topics",
            "topics": [
                "Complex scenarios",
                "Advanced techniques",
                "Performance evaluation",
                "Optimization"
            ]
        },
        {
            "id": 5,
            "title": "Applications and Future Trends",
            "topics": [
                "Recent advancements",
                "Industry applications",
                "Emerging technologies",
                "Future scope"
            ]
        }
    ]
},
    "CE3401": {
    "name": "Applied Hydraulics Engineering",
    "regulation": "R2021",
    "department": "Common",
    "credits": 3,
    "ltp": "3-0-0",
    "objectives": [
        "To understand the fundamental concepts of Applied Hydraulics Engineering",
        "To apply principles and analytical techniques to Applied Hydraulics Engineering problems",
        "To develop problem-solving skills in relevant domains",
        "To analyze complex systems associated with the subject",
        "To design solutions using state-of-the-art methods"
    ],
    "outcomes": [
        {
            "id": "CO1",
            "desc": "Understand the basic concepts and principles."
        },
        {
            "id": "CO2",
            "desc": "Apply theoretical methods to practical scenarios."
        },
        {
            "id": "CO3",
            "desc": "Analyze system performance and behavior."
        },
        {
            "id": "CO4",
            "desc": "Evaluate different implementations and approaches."
        },
        {
            "id": "CO5",
            "desc": "Design simple models or complete systems."
        }
    ],
    "units": [
        {
            "id": 1,
            "title": "Introduction and Basic Concepts",
            "topics": [
                "Definition and scope",
                "Fundamental theories",
                "Basic definitions",
                "Overview of applications"
            ]
        },
        {
            "id": 2,
            "title": "Analysis and Principles",
            "topics": [
                "Analytical methods",
                "Core principles",
                "Mathematical modeling",
                "Key algorithms"
            ]
        },
        {
            "id": 3,
            "title": "Design and Implementation",
            "topics": [
                "Design methodologies",
                "Architecture overview",
                "Implementation steps",
                "Case studies"
            ]
        },
        {
            "id": 4,
            "title": "Advanced Topics",
            "topics": [
                "Complex scenarios",
                "Advanced techniques",
                "Performance evaluation",
                "Optimization"
            ]
        },
        {
            "id": 5,
            "title": "Applications and Future Trends",
            "topics": [
                "Recent advancements",
                "Industry applications",
                "Emerging technologies",
                "Future scope"
            ]
        }
    ]
},
    "CE3402": {
    "name": "Strength of Materials",
    "regulation": "R2021",
    "department": "Common",
    "credits": 3,
    "ltp": "3-0-0",
    "objectives": [
        "To understand the fundamental concepts of Strength of Materials",
        "To apply principles and analytical techniques to Strength of Materials problems",
        "To develop problem-solving skills in relevant domains",
        "To analyze complex systems associated with the subject",
        "To design solutions using state-of-the-art methods"
    ],
    "outcomes": [
        {
            "id": "CO1",
            "desc": "Understand the basic concepts and principles."
        },
        {
            "id": "CO2",
            "desc": "Apply theoretical methods to practical scenarios."
        },
        {
            "id": "CO3",
            "desc": "Analyze system performance and behavior."
        },
        {
            "id": "CO4",
            "desc": "Evaluate different implementations and approaches."
        },
        {
            "id": "CO5",
            "desc": "Design simple models or complete systems."
        }
    ],
    "units": [
        {
            "id": 1,
            "title": "Introduction and Basic Concepts",
            "topics": [
                "Definition and scope",
                "Fundamental theories",
                "Basic definitions",
                "Overview of applications"
            ]
        },
        {
            "id": 2,
            "title": "Analysis and Principles",
            "topics": [
                "Analytical methods",
                "Core principles",
                "Mathematical modeling",
                "Key algorithms"
            ]
        },
        {
            "id": 3,
            "title": "Design and Implementation",
            "topics": [
                "Design methodologies",
                "Architecture overview",
                "Implementation steps",
                "Case studies"
            ]
        },
        {
            "id": 4,
            "title": "Advanced Topics",
            "topics": [
                "Complex scenarios",
                "Advanced techniques",
                "Performance evaluation",
                "Optimization"
            ]
        },
        {
            "id": 5,
            "title": "Applications and Future Trends",
            "topics": [
                "Recent advancements",
                "Industry applications",
                "Emerging technologies",
                "Future scope"
            ]
        }
    ]
},
    "CE3403": {
    "name": "Concrete Technology",
    "regulation": "R2021",
    "department": "Common",
    "credits": 3,
    "ltp": "3-0-0",
    "objectives": [
        "To understand the fundamental concepts of Concrete Technology",
        "To apply principles and analytical techniques to Concrete Technology problems",
        "To develop problem-solving skills in relevant domains",
        "To analyze complex systems associated with the subject",
        "To design solutions using state-of-the-art methods"
    ],
    "outcomes": [
        {
            "id": "CO1",
            "desc": "Understand the basic concepts and principles."
        },
        {
            "id": "CO2",
            "desc": "Apply theoretical methods to practical scenarios."
        },
        {
            "id": "CO3",
            "desc": "Analyze system performance and behavior."
        },
        {
            "id": "CO4",
            "desc": "Evaluate different implementations and approaches."
        },
        {
            "id": "CO5",
            "desc": "Design simple models or complete systems."
        }
    ],
    "units": [
        {
            "id": 1,
            "title": "Introduction and Basic Concepts",
            "topics": [
                "Definition and scope",
                "Fundamental theories",
                "Basic definitions",
                "Overview of applications"
            ]
        },
        {
            "id": 2,
            "title": "Analysis and Principles",
            "topics": [
                "Analytical methods",
                "Core principles",
                "Mathematical modeling",
                "Key algorithms"
            ]
        },
        {
            "id": 3,
            "title": "Design and Implementation",
            "topics": [
                "Design methodologies",
                "Architecture overview",
                "Implementation steps",
                "Case studies"
            ]
        },
        {
            "id": 4,
            "title": "Advanced Topics",
            "topics": [
                "Complex scenarios",
                "Advanced techniques",
                "Performance evaluation",
                "Optimization"
            ]
        },
        {
            "id": 5,
            "title": "Applications and Future Trends",
            "topics": [
                "Recent advancements",
                "Industry applications",
                "Emerging technologies",
                "Future scope"
            ]
        }
    ]
},
    "CE3404": {
    "name": "Soil Mechanics",
    "regulation": "R2021",
    "department": "Common",
    "credits": 3,
    "ltp": "3-0-0",
    "objectives": [
        "To understand the fundamental concepts of Soil Mechanics",
        "To apply principles and analytical techniques to Soil Mechanics problems",
        "To develop problem-solving skills in relevant domains",
        "To analyze complex systems associated with the subject",
        "To design solutions using state-of-the-art methods"
    ],
    "outcomes": [
        {
            "id": "CO1",
            "desc": "Understand the basic concepts and principles."
        },
        {
            "id": "CO2",
            "desc": "Apply theoretical methods to practical scenarios."
        },
        {
            "id": "CO3",
            "desc": "Analyze system performance and behavior."
        },
        {
            "id": "CO4",
            "desc": "Evaluate different implementations and approaches."
        },
        {
            "id": "CO5",
            "desc": "Design simple models or complete systems."
        }
    ],
    "units": [
        {
            "id": 1,
            "title": "Introduction and Basic Concepts",
            "topics": [
                "Definition and scope",
                "Fundamental theories",
                "Basic definitions",
                "Overview of applications"
            ]
        },
        {
            "id": 2,
            "title": "Analysis and Principles",
            "topics": [
                "Analytical methods",
                "Core principles",
                "Mathematical modeling",
                "Key algorithms"
            ]
        },
        {
            "id": 3,
            "title": "Design and Implementation",
            "topics": [
                "Design methodologies",
                "Architecture overview",
                "Implementation steps",
                "Case studies"
            ]
        },
        {
            "id": 4,
            "title": "Advanced Topics",
            "topics": [
                "Complex scenarios",
                "Advanced techniques",
                "Performance evaluation",
                "Optimization"
            ]
        },
        {
            "id": 5,
            "title": "Applications and Future Trends",
            "topics": [
                "Recent advancements",
                "Industry applications",
                "Emerging technologies",
                "Future scope"
            ]
        }
    ]
},
    "CE3405": {
    "name": "Highway and Railway Engineering",
    "regulation": "R2021",
    "department": "Common",
    "credits": 3,
    "ltp": "3-0-0",
    "objectives": [
        "To understand the fundamental concepts of Highway and Railway Engineering",
        "To apply principles and analytical techniques to Highway and Railway Engineering problems",
        "To develop problem-solving skills in relevant domains",
        "To analyze complex systems associated with the subject",
        "To design solutions using state-of-the-art methods"
    ],
    "outcomes": [
        {
            "id": "CO1",
            "desc": "Understand the basic concepts and principles."
        },
        {
            "id": "CO2",
            "desc": "Apply theoretical methods to practical scenarios."
        },
        {
            "id": "CO3",
            "desc": "Analyze system performance and behavior."
        },
        {
            "id": "CO4",
            "desc": "Evaluate different implementations and approaches."
        },
        {
            "id": "CO5",
            "desc": "Design simple models or complete systems."
        }
    ],
    "units": [
        {
            "id": 1,
            "title": "Introduction and Basic Concepts",
            "topics": [
                "Definition and scope",
                "Fundamental theories",
                "Basic definitions",
                "Overview of applications"
            ]
        },
        {
            "id": 2,
            "title": "Analysis and Principles",
            "topics": [
                "Analytical methods",
                "Core principles",
                "Mathematical modeling",
                "Key algorithms"
            ]
        },
        {
            "id": 3,
            "title": "Design and Implementation",
            "topics": [
                "Design methodologies",
                "Architecture overview",
                "Implementation steps",
                "Case studies"
            ]
        },
        {
            "id": 4,
            "title": "Advanced Topics",
            "topics": [
                "Complex scenarios",
                "Advanced techniques",
                "Performance evaluation",
                "Optimization"
            ]
        },
        {
            "id": 5,
            "title": "Applications and Future Trends",
            "topics": [
                "Recent advancements",
                "Industry applications",
                "Emerging technologies",
                "Future scope"
            ]
        }
    ]
},
    "CE3601": {
    "name": "Design of Steel Structural Elements",
    "regulation": "R2021",
    "department": "Common",
    "credits": 3,
    "ltp": "3-0-0",
    "objectives": [
        "To understand the fundamental concepts of Design of Steel Structural Elements",
        "To apply principles and analytical techniques to Design of Steel Structural Elements problems",
        "To develop problem-solving skills in relevant domains",
        "To analyze complex systems associated with the subject",
        "To design solutions using state-of-the-art methods"
    ],
    "outcomes": [
        {
            "id": "CO1",
            "desc": "Understand the basic concepts and principles."
        },
        {
            "id": "CO2",
            "desc": "Apply theoretical methods to practical scenarios."
        },
        {
            "id": "CO3",
            "desc": "Analyze system performance and behavior."
        },
        {
            "id": "CO4",
            "desc": "Evaluate different implementations and approaches."
        },
        {
            "id": "CO5",
            "desc": "Design simple models or complete systems."
        }
    ],
    "units": [
        {
            "id": 1,
            "title": "Introduction and Basic Concepts",
            "topics": [
                "Definition and scope",
                "Fundamental theories",
                "Basic definitions",
                "Overview of applications"
            ]
        },
        {
            "id": 2,
            "title": "Analysis and Principles",
            "topics": [
                "Analytical methods",
                "Core principles",
                "Mathematical modeling",
                "Key algorithms"
            ]
        },
        {
            "id": 3,
            "title": "Design and Implementation",
            "topics": [
                "Design methodologies",
                "Architecture overview",
                "Implementation steps",
                "Case studies"
            ]
        },
        {
            "id": 4,
            "title": "Advanced Topics",
            "topics": [
                "Complex scenarios",
                "Advanced techniques",
                "Performance evaluation",
                "Optimization"
            ]
        },
        {
            "id": 5,
            "title": "Applications and Future Trends",
            "topics": [
                "Recent advancements",
                "Industry applications",
                "Emerging technologies",
                "Future scope"
            ]
        }
    ]
},
    "CE3602": {
    "name": "Structural Analysis II",
    "regulation": "R2021",
    "department": "Common",
    "credits": 3,
    "ltp": "3-0-0",
    "objectives": [
        "To understand the fundamental concepts of Structural Analysis II",
        "To apply principles and analytical techniques to Structural Analysis II problems",
        "To develop problem-solving skills in relevant domains",
        "To analyze complex systems associated with the subject",
        "To design solutions using state-of-the-art methods"
    ],
    "outcomes": [
        {
            "id": "CO1",
            "desc": "Understand the basic concepts and principles."
        },
        {
            "id": "CO2",
            "desc": "Apply theoretical methods to practical scenarios."
        },
        {
            "id": "CO3",
            "desc": "Analyze system performance and behavior."
        },
        {
            "id": "CO4",
            "desc": "Evaluate different implementations and approaches."
        },
        {
            "id": "CO5",
            "desc": "Design simple models or complete systems."
        }
    ],
    "units": [
        {
            "id": 1,
            "title": "Introduction and Basic Concepts",
            "topics": [
                "Definition and scope",
                "Fundamental theories",
                "Basic definitions",
                "Overview of applications"
            ]
        },
        {
            "id": 2,
            "title": "Analysis and Principles",
            "topics": [
                "Analytical methods",
                "Core principles",
                "Mathematical modeling",
                "Key algorithms"
            ]
        },
        {
            "id": 3,
            "title": "Design and Implementation",
            "topics": [
                "Design methodologies",
                "Architecture overview",
                "Implementation steps",
                "Case studies"
            ]
        },
        {
            "id": 4,
            "title": "Advanced Topics",
            "topics": [
                "Complex scenarios",
                "Advanced techniques",
                "Performance evaluation",
                "Optimization"
            ]
        },
        {
            "id": 5,
            "title": "Applications and Future Trends",
            "topics": [
                "Recent advancements",
                "Industry applications",
                "Emerging technologies",
                "Future scope"
            ]
        }
    ]
},
    "AG3601": {
    "name": "Engineering Geology",
    "regulation": "R2021",
    "department": "Common",
    "credits": 3,
    "ltp": "3-0-0",
    "objectives": [
        "To understand the fundamental concepts of Engineering Geology",
        "To apply principles and analytical techniques to Engineering Geology problems",
        "To develop problem-solving skills in relevant domains",
        "To analyze complex systems associated with the subject",
        "To design solutions using state-of-the-art methods"
    ],
    "outcomes": [
        {
            "id": "CO1",
            "desc": "Understand the basic concepts and principles."
        },
        {
            "id": "CO2",
            "desc": "Apply theoretical methods to practical scenarios."
        },
        {
            "id": "CO3",
            "desc": "Analyze system performance and behavior."
        },
        {
            "id": "CO4",
            "desc": "Evaluate different implementations and approaches."
        },
        {
            "id": "CO5",
            "desc": "Design simple models or complete systems."
        }
    ],
    "units": [
        {
            "id": 1,
            "title": "Introduction and Basic Concepts",
            "topics": [
                "Definition and scope",
                "Fundamental theories",
                "Basic definitions",
                "Overview of applications"
            ]
        },
        {
            "id": 2,
            "title": "Analysis and Principles",
            "topics": [
                "Analytical methods",
                "Core principles",
                "Mathematical modeling",
                "Key algorithms"
            ]
        },
        {
            "id": 3,
            "title": "Design and Implementation",
            "topics": [
                "Design methodologies",
                "Architecture overview",
                "Implementation steps",
                "Case studies"
            ]
        },
        {
            "id": 4,
            "title": "Advanced Topics",
            "topics": [
                "Complex scenarios",
                "Advanced techniques",
                "Performance evaluation",
                "Optimization"
            ]
        },
        {
            "id": 5,
            "title": "Applications and Future Trends",
            "topics": [
                "Recent advancements",
                "Industry applications",
                "Emerging technologies",
                "Future scope"
            ]
        }
    ]
},
    "CE3301": {
    "name": "Fluid Mechanics",
    "regulation": "R2021",
    "department": "Common",
    "credits": 3,
    "ltp": "3-0-0",
    "objectives": [
        "To understand the fundamental concepts of Fluid Mechanics",
        "To apply principles and analytical techniques to Fluid Mechanics problems",
        "To develop problem-solving skills in relevant domains",
        "To analyze complex systems associated with the subject",
        "To design solutions using state-of-the-art methods"
    ],
    "outcomes": [
        {
            "id": "CO1",
            "desc": "Understand the basic concepts and principles."
        },
        {
            "id": "CO2",
            "desc": "Apply theoretical methods to practical scenarios."
        },
        {
            "id": "CO3",
            "desc": "Analyze system performance and behavior."
        },
        {
            "id": "CO4",
            "desc": "Evaluate different implementations and approaches."
        },
        {
            "id": "CO5",
            "desc": "Design simple models or complete systems."
        }
    ],
    "units": [
        {
            "id": 1,
            "title": "Introduction and Basic Concepts",
            "topics": [
                "Definition and scope",
                "Fundamental theories",
                "Basic definitions",
                "Overview of applications"
            ]
        },
        {
            "id": 2,
            "title": "Analysis and Principles",
            "topics": [
                "Analytical methods",
                "Core principles",
                "Mathematical modeling",
                "Key algorithms"
            ]
        },
        {
            "id": 3,
            "title": "Design and Implementation",
            "topics": [
                "Design methodologies",
                "Architecture overview",
                "Implementation steps",
                "Case studies"
            ]
        },
        {
            "id": 4,
            "title": "Advanced Topics",
            "topics": [
                "Complex scenarios",
                "Advanced techniques",
                "Performance evaluation",
                "Optimization"
            ]
        },
        {
            "id": 5,
            "title": "Applications and Future Trends",
            "topics": [
                "Recent advancements",
                "Industry applications",
                "Emerging technologies",
                "Future scope"
            ]
        }
    ]
},
    "CE3302": {
    "name": "Building Materials and Construction",
    "regulation": "R2021",
    "department": "Common",
    "credits": 3,
    "ltp": "3-0-0",
    "objectives": [
        "To understand the fundamental concepts of Building Materials and Construction",
        "To apply principles and analytical techniques to Building Materials and Construction problems",
        "To develop problem-solving skills in relevant domains",
        "To analyze complex systems associated with the subject",
        "To design solutions using state-of-the-art methods"
    ],
    "outcomes": [
        {
            "id": "CO1",
            "desc": "Understand the basic concepts and principles."
        },
        {
            "id": "CO2",
            "desc": "Apply theoretical methods to practical scenarios."
        },
        {
            "id": "CO3",
            "desc": "Analyze system performance and behavior."
        },
        {
            "id": "CO4",
            "desc": "Evaluate different implementations and approaches."
        },
        {
            "id": "CO5",
            "desc": "Design simple models or complete systems."
        }
    ],
    "units": [
        {
            "id": 1,
            "title": "Introduction and Basic Concepts",
            "topics": [
                "Definition and scope",
                "Fundamental theories",
                "Basic definitions",
                "Overview of applications"
            ]
        },
        {
            "id": 2,
            "title": "Analysis and Principles",
            "topics": [
                "Analytical methods",
                "Core principles",
                "Mathematical modeling",
                "Key algorithms"
            ]
        },
        {
            "id": 3,
            "title": "Design and Implementation",
            "topics": [
                "Design methodologies",
                "Architecture overview",
                "Implementation steps",
                "Case studies"
            ]
        },
        {
            "id": 4,
            "title": "Advanced Topics",
            "topics": [
                "Complex scenarios",
                "Advanced techniques",
                "Performance evaluation",
                "Optimization"
            ]
        },
        {
            "id": 5,
            "title": "Applications and Future Trends",
            "topics": [
                "Recent advancements",
                "Industry applications",
                "Emerging technologies",
                "Future scope"
            ]
        }
    ]
},
    "CE3303": {
    "name": "Mechanics of Solids",
    "regulation": "R2021",
    "department": "Common",
    "credits": 3,
    "ltp": "3-0-0",
    "objectives": [
        "To understand the fundamental concepts of Mechanics of Solids",
        "To apply principles and analytical techniques to Mechanics of Solids problems",
        "To develop problem-solving skills in relevant domains",
        "To analyze complex systems associated with the subject",
        "To design solutions using state-of-the-art methods"
    ],
    "outcomes": [
        {
            "id": "CO1",
            "desc": "Understand the basic concepts and principles."
        },
        {
            "id": "CO2",
            "desc": "Apply theoretical methods to practical scenarios."
        },
        {
            "id": "CO3",
            "desc": "Analyze system performance and behavior."
        },
        {
            "id": "CO4",
            "desc": "Evaluate different implementations and approaches."
        },
        {
            "id": "CO5",
            "desc": "Design simple models or complete systems."
        }
    ],
    "units": [
        {
            "id": 1,
            "title": "Introduction and Basic Concepts",
            "topics": [
                "Definition and scope",
                "Fundamental theories",
                "Basic definitions",
                "Overview of applications"
            ]
        },
        {
            "id": 2,
            "title": "Analysis and Principles",
            "topics": [
                "Analytical methods",
                "Core principles",
                "Mathematical modeling",
                "Key algorithms"
            ]
        },
        {
            "id": 3,
            "title": "Design and Implementation",
            "topics": [
                "Design methodologies",
                "Architecture overview",
                "Implementation steps",
                "Case studies"
            ]
        },
        {
            "id": 4,
            "title": "Advanced Topics",
            "topics": [
                "Complex scenarios",
                "Advanced techniques",
                "Performance evaluation",
                "Optimization"
            ]
        },
        {
            "id": 5,
            "title": "Applications and Future Trends",
            "topics": [
                "Recent advancements",
                "Industry applications",
                "Emerging technologies",
                "Future scope"
            ]
        }
    ]
},
    "CE3351": {
    "name": "Structural Analysis",
    "regulation": "R2021",
    "department": "Common",
    "credits": 3,
    "ltp": "3-0-0",
    "objectives": [
        "To understand the fundamental concepts of Structural Analysis",
        "To apply principles and analytical techniques to Structural Analysis problems",
        "To develop problem-solving skills in relevant domains",
        "To analyze complex systems associated with the subject",
        "To design solutions using state-of-the-art methods"
    ],
    "outcomes": [
        {
            "id": "CO1",
            "desc": "Understand the basic concepts and principles."
        },
        {
            "id": "CO2",
            "desc": "Apply theoretical methods to practical scenarios."
        },
        {
            "id": "CO3",
            "desc": "Analyze system performance and behavior."
        },
        {
            "id": "CO4",
            "desc": "Evaluate different implementations and approaches."
        },
        {
            "id": "CO5",
            "desc": "Design simple models or complete systems."
        }
    ],
    "units": [
        {
            "id": 1,
            "title": "Introduction and Basic Concepts",
            "topics": [
                "Definition and scope",
                "Fundamental theories",
                "Basic definitions",
                "Overview of applications"
            ]
        },
        {
            "id": 2,
            "title": "Analysis and Principles",
            "topics": [
                "Analytical methods",
                "Core principles",
                "Mathematical modeling",
                "Key algorithms"
            ]
        },
        {
            "id": 3,
            "title": "Design and Implementation",
            "topics": [
                "Design methodologies",
                "Architecture overview",
                "Implementation steps",
                "Case studies"
            ]
        },
        {
            "id": 4,
            "title": "Advanced Topics",
            "topics": [
                "Complex scenarios",
                "Advanced techniques",
                "Performance evaluation",
                "Optimization"
            ]
        },
        {
            "id": 5,
            "title": "Applications and Future Trends",
            "topics": [
                "Recent advancements",
                "Industry applications",
                "Emerging technologies",
                "Future scope"
            ]
        }
    ]
},
    "CE3501": {
    "name": "Design of Concrete Structures",
    "regulation": "R2021",
    "department": "Common",
    "credits": 3,
    "ltp": "3-0-0",
    "objectives": [
        "To understand the fundamental concepts of Design of Concrete Structures",
        "To apply principles and analytical techniques to Design of Concrete Structures problems",
        "To develop problem-solving skills in relevant domains",
        "To analyze complex systems associated with the subject",
        "To design solutions using state-of-the-art methods"
    ],
    "outcomes": [
        {
            "id": "CO1",
            "desc": "Understand the basic concepts and principles."
        },
        {
            "id": "CO2",
            "desc": "Apply theoretical methods to practical scenarios."
        },
        {
            "id": "CO3",
            "desc": "Analyze system performance and behavior."
        },
        {
            "id": "CO4",
            "desc": "Evaluate different implementations and approaches."
        },
        {
            "id": "CO5",
            "desc": "Design simple models or complete systems."
        }
    ],
    "units": [
        {
            "id": 1,
            "title": "Introduction and Basic Concepts",
            "topics": [
                "Definition and scope",
                "Fundamental theories",
                "Basic definitions",
                "Overview of applications"
            ]
        },
        {
            "id": 2,
            "title": "Analysis and Principles",
            "topics": [
                "Analytical methods",
                "Core principles",
                "Mathematical modeling",
                "Key algorithms"
            ]
        },
        {
            "id": 3,
            "title": "Design and Implementation",
            "topics": [
                "Design methodologies",
                "Architecture overview",
                "Implementation steps",
                "Case studies"
            ]
        },
        {
            "id": 4,
            "title": "Advanced Topics",
            "topics": [
                "Complex scenarios",
                "Advanced techniques",
                "Performance evaluation",
                "Optimization"
            ]
        },
        {
            "id": 5,
            "title": "Applications and Future Trends",
            "topics": [
                "Recent advancements",
                "Industry applications",
                "Emerging technologies",
                "Future scope"
            ]
        }
    ]
},
    "CE3811": {
    "name": "Traffic Engineering",
    "regulation": "R2021",
    "department": "Common",
    "credits": 3,
    "ltp": "3-0-0",
    "objectives": [
        "To understand the fundamental concepts of Traffic Engineering",
        "To apply principles and analytical techniques to Traffic Engineering problems",
        "To develop problem-solving skills in relevant domains",
        "To analyze complex systems associated with the subject",
        "To design solutions using state-of-the-art methods"
    ],
    "outcomes": [
        {
            "id": "CO1",
            "desc": "Understand the basic concepts and principles."
        },
        {
            "id": "CO2",
            "desc": "Apply theoretical methods to practical scenarios."
        },
        {
            "id": "CO3",
            "desc": "Analyze system performance and behavior."
        },
        {
            "id": "CO4",
            "desc": "Evaluate different implementations and approaches."
        },
        {
            "id": "CO5",
            "desc": "Design simple models or complete systems."
        }
    ],
    "units": [
        {
            "id": 1,
            "title": "Introduction and Basic Concepts",
            "topics": [
                "Definition and scope",
                "Fundamental theories",
                "Basic definitions",
                "Overview of applications"
            ]
        },
        {
            "id": 2,
            "title": "Analysis and Principles",
            "topics": [
                "Analytical methods",
                "Core principles",
                "Mathematical modeling",
                "Key algorithms"
            ]
        },
        {
            "id": 3,
            "title": "Design and Implementation",
            "topics": [
                "Design methodologies",
                "Architecture overview",
                "Implementation steps",
                "Case studies"
            ]
        },
        {
            "id": 4,
            "title": "Advanced Topics",
            "topics": [
                "Complex scenarios",
                "Advanced techniques",
                "Performance evaluation",
                "Optimization"
            ]
        },
        {
            "id": 5,
            "title": "Applications and Future Trends",
            "topics": [
                "Recent advancements",
                "Industry applications",
                "Emerging technologies",
                "Future scope"
            ]
        }
    ]
},
    "EC3452": {
    "name": "Electromagnetic Fields",
    "regulation": "R2021",
    "department": "Common",
    "credits": 3,
    "ltp": "3-0-0",
    "objectives": [
        "To understand the fundamental concepts of Electromagnetic Fields",
        "To apply principles and analytical techniques to Electromagnetic Fields problems",
        "To develop problem-solving skills in relevant domains",
        "To analyze complex systems associated with the subject",
        "To design solutions using state-of-the-art methods"
    ],
    "outcomes": [
        {
            "id": "CO1",
            "desc": "Understand the basic concepts and principles."
        },
        {
            "id": "CO2",
            "desc": "Apply theoretical methods to practical scenarios."
        },
        {
            "id": "CO3",
            "desc": "Analyze system performance and behavior."
        },
        {
            "id": "CO4",
            "desc": "Evaluate different implementations and approaches."
        },
        {
            "id": "CO5",
            "desc": "Design simple models or complete systems."
        }
    ],
    "units": [
        {
            "id": 1,
            "title": "Introduction and Basic Concepts",
            "topics": [
                "Definition and scope",
                "Fundamental theories",
                "Basic definitions",
                "Overview of applications"
            ]
        },
        {
            "id": 2,
            "title": "Analysis and Principles",
            "topics": [
                "Analytical methods",
                "Core principles",
                "Mathematical modeling",
                "Key algorithms"
            ]
        },
        {
            "id": 3,
            "title": "Design and Implementation",
            "topics": [
                "Design methodologies",
                "Architecture overview",
                "Implementation steps",
                "Case studies"
            ]
        },
        {
            "id": 4,
            "title": "Advanced Topics",
            "topics": [
                "Complex scenarios",
                "Advanced techniques",
                "Performance evaluation",
                "Optimization"
            ]
        },
        {
            "id": 5,
            "title": "Applications and Future Trends",
            "topics": [
                "Recent advancements",
                "Industry applications",
                "Emerging technologies",
                "Future scope"
            ]
        }
    ]
},
    "EC3401": {
    "name": "Networks and Security",
    "regulation": "R2021",
    "department": "Common",
    "credits": 3,
    "ltp": "3-0-0",
    "objectives": [
        "To understand the fundamental concepts of Networks and Security",
        "To apply principles and analytical techniques to Networks and Security problems",
        "To develop problem-solving skills in relevant domains",
        "To analyze complex systems associated with the subject",
        "To design solutions using state-of-the-art methods"
    ],
    "outcomes": [
        {
            "id": "CO1",
            "desc": "Understand the basic concepts and principles."
        },
        {
            "id": "CO2",
            "desc": "Apply theoretical methods to practical scenarios."
        },
        {
            "id": "CO3",
            "desc": "Analyze system performance and behavior."
        },
        {
            "id": "CO4",
            "desc": "Evaluate different implementations and approaches."
        },
        {
            "id": "CO5",
            "desc": "Design simple models or complete systems."
        }
    ],
    "units": [
        {
            "id": 1,
            "title": "Introduction and Basic Concepts",
            "topics": [
                "Definition and scope",
                "Fundamental theories",
                "Basic definitions",
                "Overview of applications"
            ]
        },
        {
            "id": 2,
            "title": "Analysis and Principles",
            "topics": [
                "Analytical methods",
                "Core principles",
                "Mathematical modeling",
                "Key algorithms"
            ]
        },
        {
            "id": 3,
            "title": "Design and Implementation",
            "topics": [
                "Design methodologies",
                "Architecture overview",
                "Implementation steps",
                "Case studies"
            ]
        },
        {
            "id": 4,
            "title": "Advanced Topics",
            "topics": [
                "Complex scenarios",
                "Advanced techniques",
                "Performance evaluation",
                "Optimization"
            ]
        },
        {
            "id": 5,
            "title": "Applications and Future Trends",
            "topics": [
                "Recent advancements",
                "Industry applications",
                "Emerging technologies",
                "Future scope"
            ]
        }
    ]
},
    "EC3451": {
    "name": "Linear Integrated Circuits",
    "regulation": "R2021",
    "department": "Common",
    "credits": 3,
    "ltp": "3-0-0",
    "objectives": [
        "To understand the fundamental concepts of Linear Integrated Circuits",
        "To apply principles and analytical techniques to Linear Integrated Circuits problems",
        "To develop problem-solving skills in relevant domains",
        "To analyze complex systems associated with the subject",
        "To design solutions using state-of-the-art methods"
    ],
    "outcomes": [
        {
            "id": "CO1",
            "desc": "Understand the basic concepts and principles."
        },
        {
            "id": "CO2",
            "desc": "Apply theoretical methods to practical scenarios."
        },
        {
            "id": "CO3",
            "desc": "Analyze system performance and behavior."
        },
        {
            "id": "CO4",
            "desc": "Evaluate different implementations and approaches."
        },
        {
            "id": "CO5",
            "desc": "Design simple models or complete systems."
        }
    ],
    "units": [
        {
            "id": 1,
            "title": "Introduction and Basic Concepts",
            "topics": [
                "Definition and scope",
                "Fundamental theories",
                "Basic definitions",
                "Overview of applications"
            ]
        },
        {
            "id": 2,
            "title": "Analysis and Principles",
            "topics": [
                "Analytical methods",
                "Core principles",
                "Mathematical modeling",
                "Key algorithms"
            ]
        },
        {
            "id": 3,
            "title": "Design and Implementation",
            "topics": [
                "Design methodologies",
                "Architecture overview",
                "Implementation steps",
                "Case studies"
            ]
        },
        {
            "id": 4,
            "title": "Advanced Topics",
            "topics": [
                "Complex scenarios",
                "Advanced techniques",
                "Performance evaluation",
                "Optimization"
            ]
        },
        {
            "id": 5,
            "title": "Applications and Future Trends",
            "topics": [
                "Recent advancements",
                "Industry applications",
                "Emerging technologies",
                "Future scope"
            ]
        }
    ]
},
    "EC3492": {
    "name": "Digital Signal Processing",
    "regulation": "R2021",
    "department": "Common",
    "credits": 3,
    "ltp": "3-0-0",
    "objectives": [
        "To understand the fundamental concepts of Digital Signal Processing",
        "To apply principles and analytical techniques to Digital Signal Processing problems",
        "To develop problem-solving skills in relevant domains",
        "To analyze complex systems associated with the subject",
        "To design solutions using state-of-the-art methods"
    ],
    "outcomes": [
        {
            "id": "CO1",
            "desc": "Understand the basic concepts and principles."
        },
        {
            "id": "CO2",
            "desc": "Apply theoretical methods to practical scenarios."
        },
        {
            "id": "CO3",
            "desc": "Analyze system performance and behavior."
        },
        {
            "id": "CO4",
            "desc": "Evaluate different implementations and approaches."
        },
        {
            "id": "CO5",
            "desc": "Design simple models or complete systems."
        }
    ],
    "units": [
        {
            "id": 1,
            "title": "Introduction and Basic Concepts",
            "topics": [
                "Definition and scope",
                "Fundamental theories",
                "Basic definitions",
                "Overview of applications"
            ]
        },
        {
            "id": 2,
            "title": "Analysis and Principles",
            "topics": [
                "Analytical methods",
                "Core principles",
                "Mathematical modeling",
                "Key algorithms"
            ]
        },
        {
            "id": 3,
            "title": "Design and Implementation",
            "topics": [
                "Design methodologies",
                "Architecture overview",
                "Implementation steps",
                "Case studies"
            ]
        },
        {
            "id": 4,
            "title": "Advanced Topics",
            "topics": [
                "Complex scenarios",
                "Advanced techniques",
                "Performance evaluation",
                "Optimization"
            ]
        },
        {
            "id": 5,
            "title": "Applications and Future Trends",
            "topics": [
                "Recent advancements",
                "Industry applications",
                "Emerging technologies",
                "Future scope"
            ]
        }
    ]
},
    "EC3491": {
    "name": "Communication Systems",
    "regulation": "R2021",
    "department": "Common",
    "credits": 3,
    "ltp": "3-0-0",
    "objectives": [
        "To understand the fundamental concepts of Communication Systems",
        "To apply principles and analytical techniques to Communication Systems problems",
        "To develop problem-solving skills in relevant domains",
        "To analyze complex systems associated with the subject",
        "To design solutions using state-of-the-art methods"
    ],
    "outcomes": [
        {
            "id": "CO1",
            "desc": "Understand the basic concepts and principles."
        },
        {
            "id": "CO2",
            "desc": "Apply theoretical methods to practical scenarios."
        },
        {
            "id": "CO3",
            "desc": "Analyze system performance and behavior."
        },
        {
            "id": "CO4",
            "desc": "Evaluate different implementations and approaches."
        },
        {
            "id": "CO5",
            "desc": "Design simple models or complete systems."
        }
    ],
    "units": [
        {
            "id": 1,
            "title": "Introduction and Basic Concepts",
            "topics": [
                "Definition and scope",
                "Fundamental theories",
                "Basic definitions",
                "Overview of applications"
            ]
        },
        {
            "id": 2,
            "title": "Analysis and Principles",
            "topics": [
                "Analytical methods",
                "Core principles",
                "Mathematical modeling",
                "Key algorithms"
            ]
        },
        {
            "id": 3,
            "title": "Design and Implementation",
            "topics": [
                "Design methodologies",
                "Architecture overview",
                "Implementation steps",
                "Case studies"
            ]
        },
        {
            "id": 4,
            "title": "Advanced Topics",
            "topics": [
                "Complex scenarios",
                "Advanced techniques",
                "Performance evaluation",
                "Optimization"
            ]
        },
        {
            "id": 5,
            "title": "Applications and Future Trends",
            "topics": [
                "Recent advancements",
                "Industry applications",
                "Emerging technologies",
                "Future scope"
            ]
        }
    ]
},
    "ET3491": {
    "name": "Embedded Systems and IoT Design",
    "regulation": "R2021",
    "department": "Common",
    "credits": 3,
    "ltp": "3-0-0",
    "objectives": [
        "To understand the fundamental concepts of Embedded Systems and IoT Design",
        "To apply principles and analytical techniques to Embedded Systems and IoT Design problems",
        "To develop problem-solving skills in relevant domains",
        "To analyze complex systems associated with the subject",
        "To design solutions using state-of-the-art methods"
    ],
    "outcomes": [
        {
            "id": "CO1",
            "desc": "Understand the basic concepts and principles."
        },
        {
            "id": "CO2",
            "desc": "Apply theoretical methods to practical scenarios."
        },
        {
            "id": "CO3",
            "desc": "Analyze system performance and behavior."
        },
        {
            "id": "CO4",
            "desc": "Evaluate different implementations and approaches."
        },
        {
            "id": "CO5",
            "desc": "Design simple models or complete systems."
        }
    ],
    "units": [
        {
            "id": 1,
            "title": "Introduction and Basic Concepts",
            "topics": [
                "Definition and scope",
                "Fundamental theories",
                "Basic definitions",
                "Overview of applications"
            ]
        },
        {
            "id": 2,
            "title": "Analysis and Principles",
            "topics": [
                "Analytical methods",
                "Core principles",
                "Mathematical modeling",
                "Key algorithms"
            ]
        },
        {
            "id": 3,
            "title": "Design and Implementation",
            "topics": [
                "Design methodologies",
                "Architecture overview",
                "Implementation steps",
                "Case studies"
            ]
        },
        {
            "id": 4,
            "title": "Advanced Topics",
            "topics": [
                "Complex scenarios",
                "Advanced techniques",
                "Performance evaluation",
                "Optimization"
            ]
        },
        {
            "id": 5,
            "title": "Applications and Future Trends",
            "topics": [
                "Recent advancements",
                "Industry applications",
                "Emerging technologies",
                "Future scope"
            ]
        }
    ]
},
    "EE3401": {
    "name": "Transmission and Distribution",
    "regulation": "R2021",
    "department": "Common",
    "credits": 3,
    "ltp": "3-0-0",
    "objectives": [
        "To understand the fundamental concepts of Transmission and Distribution",
        "To apply principles and analytical techniques to Transmission and Distribution problems",
        "To develop problem-solving skills in relevant domains",
        "To analyze complex systems associated with the subject",
        "To design solutions using state-of-the-art methods"
    ],
    "outcomes": [
        {
            "id": "CO1",
            "desc": "Understand the basic concepts and principles."
        },
        {
            "id": "CO2",
            "desc": "Apply theoretical methods to practical scenarios."
        },
        {
            "id": "CO3",
            "desc": "Analyze system performance and behavior."
        },
        {
            "id": "CO4",
            "desc": "Evaluate different implementations and approaches."
        },
        {
            "id": "CO5",
            "desc": "Design simple models or complete systems."
        }
    ],
    "units": [
        {
            "id": 1,
            "title": "Introduction and Basic Concepts",
            "topics": [
                "Definition and scope",
                "Fundamental theories",
                "Basic definitions",
                "Overview of applications"
            ]
        },
        {
            "id": 2,
            "title": "Analysis and Principles",
            "topics": [
                "Analytical methods",
                "Core principles",
                "Mathematical modeling",
                "Key algorithms"
            ]
        },
        {
            "id": 3,
            "title": "Design and Implementation",
            "topics": [
                "Design methodologies",
                "Architecture overview",
                "Implementation steps",
                "Case studies"
            ]
        },
        {
            "id": 4,
            "title": "Advanced Topics",
            "topics": [
                "Complex scenarios",
                "Advanced techniques",
                "Performance evaluation",
                "Optimization"
            ]
        },
        {
            "id": 5,
            "title": "Applications and Future Trends",
            "topics": [
                "Recent advancements",
                "Industry applications",
                "Emerging technologies",
                "Future scope"
            ]
        }
    ]
},
    "EE3402": {
    "name": "Linear Integrated Circuits",
    "regulation": "R2021",
    "department": "Common",
    "credits": 3,
    "ltp": "3-0-0",
    "objectives": [
        "To understand the fundamental concepts of Linear Integrated Circuits",
        "To apply principles and analytical techniques to Linear Integrated Circuits problems",
        "To develop problem-solving skills in relevant domains",
        "To analyze complex systems associated with the subject",
        "To design solutions using state-of-the-art methods"
    ],
    "outcomes": [
        {
            "id": "CO1",
            "desc": "Understand the basic concepts and principles."
        },
        {
            "id": "CO2",
            "desc": "Apply theoretical methods to practical scenarios."
        },
        {
            "id": "CO3",
            "desc": "Analyze system performance and behavior."
        },
        {
            "id": "CO4",
            "desc": "Evaluate different implementations and approaches."
        },
        {
            "id": "CO5",
            "desc": "Design simple models or complete systems."
        }
    ],
    "units": [
        {
            "id": 1,
            "title": "Introduction and Basic Concepts",
            "topics": [
                "Definition and scope",
                "Fundamental theories",
                "Basic definitions",
                "Overview of applications"
            ]
        },
        {
            "id": 2,
            "title": "Analysis and Principles",
            "topics": [
                "Analytical methods",
                "Core principles",
                "Mathematical modeling",
                "Key algorithms"
            ]
        },
        {
            "id": 3,
            "title": "Design and Implementation",
            "topics": [
                "Design methodologies",
                "Architecture overview",
                "Implementation steps",
                "Case studies"
            ]
        },
        {
            "id": 4,
            "title": "Advanced Topics",
            "topics": [
                "Complex scenarios",
                "Advanced techniques",
                "Performance evaluation",
                "Optimization"
            ]
        },
        {
            "id": 5,
            "title": "Applications and Future Trends",
            "topics": [
                "Recent advancements",
                "Industry applications",
                "Emerging technologies",
                "Future scope"
            ]
        }
    ]
},
    "EE3403": {
    "name": "Measurements and Instrumentation",
    "regulation": "R2021",
    "department": "Common",
    "credits": 3,
    "ltp": "3-0-0",
    "objectives": [
        "To understand the fundamental concepts of Measurements and Instrumentation",
        "To apply principles and analytical techniques to Measurements and Instrumentation problems",
        "To develop problem-solving skills in relevant domains",
        "To analyze complex systems associated with the subject",
        "To design solutions using state-of-the-art methods"
    ],
    "outcomes": [
        {
            "id": "CO1",
            "desc": "Understand the basic concepts and principles."
        },
        {
            "id": "CO2",
            "desc": "Apply theoretical methods to practical scenarios."
        },
        {
            "id": "CO3",
            "desc": "Analyze system performance and behavior."
        },
        {
            "id": "CO4",
            "desc": "Evaluate different implementations and approaches."
        },
        {
            "id": "CO5",
            "desc": "Design simple models or complete systems."
        }
    ],
    "units": [
        {
            "id": 1,
            "title": "Introduction and Basic Concepts",
            "topics": [
                "Definition and scope",
                "Fundamental theories",
                "Basic definitions",
                "Overview of applications"
            ]
        },
        {
            "id": 2,
            "title": "Analysis and Principles",
            "topics": [
                "Analytical methods",
                "Core principles",
                "Mathematical modeling",
                "Key algorithms"
            ]
        },
        {
            "id": 3,
            "title": "Design and Implementation",
            "topics": [
                "Design methodologies",
                "Architecture overview",
                "Implementation steps",
                "Case studies"
            ]
        },
        {
            "id": 4,
            "title": "Advanced Topics",
            "topics": [
                "Complex scenarios",
                "Advanced techniques",
                "Performance evaluation",
                "Optimization"
            ]
        },
        {
            "id": 5,
            "title": "Applications and Future Trends",
            "topics": [
                "Recent advancements",
                "Industry applications",
                "Emerging technologies",
                "Future scope"
            ]
        }
    ]
},
    "EE3404": {
    "name": "Microprocessor and Microcontroller",
    "regulation": "R2021",
    "department": "Common",
    "credits": 3,
    "ltp": "3-0-0",
    "objectives": [
        "To understand the fundamental concepts of Microprocessor and Microcontroller",
        "To apply principles and analytical techniques to Microprocessor and Microcontroller problems",
        "To develop problem-solving skills in relevant domains",
        "To analyze complex systems associated with the subject",
        "To design solutions using state-of-the-art methods"
    ],
    "outcomes": [
        {
            "id": "CO1",
            "desc": "Understand the basic concepts and principles."
        },
        {
            "id": "CO2",
            "desc": "Apply theoretical methods to practical scenarios."
        },
        {
            "id": "CO3",
            "desc": "Analyze system performance and behavior."
        },
        {
            "id": "CO4",
            "desc": "Evaluate different implementations and approaches."
        },
        {
            "id": "CO5",
            "desc": "Design simple models or complete systems."
        }
    ],
    "units": [
        {
            "id": 1,
            "title": "Introduction and Basic Concepts",
            "topics": [
                "Definition and scope",
                "Fundamental theories",
                "Basic definitions",
                "Overview of applications"
            ]
        },
        {
            "id": 2,
            "title": "Analysis and Principles",
            "topics": [
                "Analytical methods",
                "Core principles",
                "Mathematical modeling",
                "Key algorithms"
            ]
        },
        {
            "id": 3,
            "title": "Design and Implementation",
            "topics": [
                "Design methodologies",
                "Architecture overview",
                "Implementation steps",
                "Case studies"
            ]
        },
        {
            "id": 4,
            "title": "Advanced Topics",
            "topics": [
                "Complex scenarios",
                "Advanced techniques",
                "Performance evaluation",
                "Optimization"
            ]
        },
        {
            "id": 5,
            "title": "Applications and Future Trends",
            "topics": [
                "Recent advancements",
                "Industry applications",
                "Emerging technologies",
                "Future scope"
            ]
        }
    ]
},
    "EE3405": {
    "name": "Electrical Machines \u2013 II",
    "regulation": "R2021",
    "department": "Common",
    "credits": 3,
    "ltp": "3-0-0",
    "objectives": [
        "To understand the fundamental concepts of Electrical Machines \u2013 II",
        "To apply principles and analytical techniques to Electrical Machines \u2013 II problems",
        "To develop problem-solving skills in relevant domains",
        "To analyze complex systems associated with the subject",
        "To design solutions using state-of-the-art methods"
    ],
    "outcomes": [
        {
            "id": "CO1",
            "desc": "Understand the basic concepts and principles."
        },
        {
            "id": "CO2",
            "desc": "Apply theoretical methods to practical scenarios."
        },
        {
            "id": "CO3",
            "desc": "Analyze system performance and behavior."
        },
        {
            "id": "CO4",
            "desc": "Evaluate different implementations and approaches."
        },
        {
            "id": "CO5",
            "desc": "Design simple models or complete systems."
        }
    ],
    "units": [
        {
            "id": 1,
            "title": "Introduction and Basic Concepts",
            "topics": [
                "Definition and scope",
                "Fundamental theories",
                "Basic definitions",
                "Overview of applications"
            ]
        },
        {
            "id": 2,
            "title": "Analysis and Principles",
            "topics": [
                "Analytical methods",
                "Core principles",
                "Mathematical modeling",
                "Key algorithms"
            ]
        },
        {
            "id": 3,
            "title": "Design and Implementation",
            "topics": [
                "Design methodologies",
                "Architecture overview",
                "Implementation steps",
                "Case studies"
            ]
        },
        {
            "id": 4,
            "title": "Advanced Topics",
            "topics": [
                "Complex scenarios",
                "Advanced techniques",
                "Performance evaluation",
                "Optimization"
            ]
        },
        {
            "id": 5,
            "title": "Applications and Future Trends",
            "topics": [
                "Recent advancements",
                "Industry applications",
                "Emerging technologies",
                "Future scope"
            ]
        }
    ]
},
    "EE3601": {
    "name": "Protection and Switchgear",
    "regulation": "R2021",
    "department": "Common",
    "credits": 3,
    "ltp": "3-0-0",
    "objectives": [
        "To understand the fundamental concepts of Protection and Switchgear",
        "To apply principles and analytical techniques to Protection and Switchgear problems",
        "To develop problem-solving skills in relevant domains",
        "To analyze complex systems associated with the subject",
        "To design solutions using state-of-the-art methods"
    ],
    "outcomes": [
        {
            "id": "CO1",
            "desc": "Understand the basic concepts and principles."
        },
        {
            "id": "CO2",
            "desc": "Apply theoretical methods to practical scenarios."
        },
        {
            "id": "CO3",
            "desc": "Analyze system performance and behavior."
        },
        {
            "id": "CO4",
            "desc": "Evaluate different implementations and approaches."
        },
        {
            "id": "CO5",
            "desc": "Design simple models or complete systems."
        }
    ],
    "units": [
        {
            "id": 1,
            "title": "Introduction and Basic Concepts",
            "topics": [
                "Definition and scope",
                "Fundamental theories",
                "Basic definitions",
                "Overview of applications"
            ]
        },
        {
            "id": 2,
            "title": "Analysis and Principles",
            "topics": [
                "Analytical methods",
                "Core principles",
                "Mathematical modeling",
                "Key algorithms"
            ]
        },
        {
            "id": 3,
            "title": "Design and Implementation",
            "topics": [
                "Design methodologies",
                "Architecture overview",
                "Implementation steps",
                "Case studies"
            ]
        },
        {
            "id": 4,
            "title": "Advanced Topics",
            "topics": [
                "Complex scenarios",
                "Advanced techniques",
                "Performance evaluation",
                "Optimization"
            ]
        },
        {
            "id": 5,
            "title": "Applications and Future Trends",
            "topics": [
                "Recent advancements",
                "Industry applications",
                "Emerging technologies",
                "Future scope"
            ]
        }
    ]
},
    "EE3602": {
    "name": "Power System Operation and Control",
    "regulation": "R2021",
    "department": "Common",
    "credits": 3,
    "ltp": "3-0-0",
    "objectives": [
        "To understand the fundamental concepts of Power System Operation and Control",
        "To apply principles and analytical techniques to Power System Operation and Control problems",
        "To develop problem-solving skills in relevant domains",
        "To analyze complex systems associated with the subject",
        "To design solutions using state-of-the-art methods"
    ],
    "outcomes": [
        {
            "id": "CO1",
            "desc": "Understand the basic concepts and principles."
        },
        {
            "id": "CO2",
            "desc": "Apply theoretical methods to practical scenarios."
        },
        {
            "id": "CO3",
            "desc": "Analyze system performance and behavior."
        },
        {
            "id": "CO4",
            "desc": "Evaluate different implementations and approaches."
        },
        {
            "id": "CO5",
            "desc": "Design simple models or complete systems."
        }
    ],
    "units": [
        {
            "id": 1,
            "title": "Introduction and Basic Concepts",
            "topics": [
                "Definition and scope",
                "Fundamental theories",
                "Basic definitions",
                "Overview of applications"
            ]
        },
        {
            "id": 2,
            "title": "Analysis and Principles",
            "topics": [
                "Analytical methods",
                "Core principles",
                "Mathematical modeling",
                "Key algorithms"
            ]
        },
        {
            "id": 3,
            "title": "Design and Implementation",
            "topics": [
                "Design methodologies",
                "Architecture overview",
                "Implementation steps",
                "Case studies"
            ]
        },
        {
            "id": 4,
            "title": "Advanced Topics",
            "topics": [
                "Complex scenarios",
                "Advanced techniques",
                "Performance evaluation",
                "Optimization"
            ]
        },
        {
            "id": 5,
            "title": "Applications and Future Trends",
            "topics": [
                "Recent advancements",
                "Industry applications",
                "Emerging technologies",
                "Future scope"
            ]
        }
    ]
},
    "IT3401": {
    "name": "Web Essentials",
    "regulation": "R2021",
    "department": "Common",
    "credits": 3,
    "ltp": "3-0-0",
    "objectives": [
        "To understand the fundamental concepts of Web Essentials",
        "To apply principles and analytical techniques to Web Essentials problems",
        "To develop problem-solving skills in relevant domains",
        "To analyze complex systems associated with the subject",
        "To design solutions using state-of-the-art methods"
    ],
    "outcomes": [
        {
            "id": "CO1",
            "desc": "Understand the basic concepts and principles."
        },
        {
            "id": "CO2",
            "desc": "Apply theoretical methods to practical scenarios."
        },
        {
            "id": "CO3",
            "desc": "Analyze system performance and behavior."
        },
        {
            "id": "CO4",
            "desc": "Evaluate different implementations and approaches."
        },
        {
            "id": "CO5",
            "desc": "Design simple models or complete systems."
        }
    ],
    "units": [
        {
            "id": 1,
            "title": "Introduction and Basic Concepts",
            "topics": [
                "Definition and scope",
                "Fundamental theories",
                "Basic definitions",
                "Overview of applications"
            ]
        },
        {
            "id": 2,
            "title": "Analysis and Principles",
            "topics": [
                "Analytical methods",
                "Core principles",
                "Mathematical modeling",
                "Key algorithms"
            ]
        },
        {
            "id": 3,
            "title": "Design and Implementation",
            "topics": [
                "Design methodologies",
                "Architecture overview",
                "Implementation steps",
                "Case studies"
            ]
        },
        {
            "id": 4,
            "title": "Advanced Topics",
            "topics": [
                "Complex scenarios",
                "Advanced techniques",
                "Performance evaluation",
                "Optimization"
            ]
        },
        {
            "id": 5,
            "title": "Applications and Future Trends",
            "topics": [
                "Recent advancements",
                "Industry applications",
                "Emerging technologies",
                "Future scope"
            ]
        }
    ]
},
    "MA3151": {
    "name": "Matrices and Calculus",
    "regulation": "R2021",
    "department": "Common",
    "credits": 3,
    "ltp": "3-0-0",
    "objectives": [
        "To understand the fundamental concepts of Matrices and Calculus",
        "To apply principles and analytical techniques to Matrices and Calculus problems",
        "To develop problem-solving skills in relevant domains",
        "To analyze complex systems associated with the subject",
        "To design solutions using state-of-the-art methods"
    ],
    "outcomes": [
        {
            "id": "CO1",
            "desc": "Understand the basic concepts and principles."
        },
        {
            "id": "CO2",
            "desc": "Apply theoretical methods to practical scenarios."
        },
        {
            "id": "CO3",
            "desc": "Analyze system performance and behavior."
        },
        {
            "id": "CO4",
            "desc": "Evaluate different implementations and approaches."
        },
        {
            "id": "CO5",
            "desc": "Design simple models or complete systems."
        }
    ],
    "units": [
        {
            "id": 1,
            "title": "Introduction and Basic Concepts",
            "topics": [
                "Definition and scope",
                "Fundamental theories",
                "Basic definitions",
                "Overview of applications"
            ]
        },
        {
            "id": 2,
            "title": "Analysis and Principles",
            "topics": [
                "Analytical methods",
                "Core principles",
                "Mathematical modeling",
                "Key algorithms"
            ]
        },
        {
            "id": 3,
            "title": "Design and Implementation",
            "topics": [
                "Design methodologies",
                "Architecture overview",
                "Implementation steps",
                "Case studies"
            ]
        },
        {
            "id": 4,
            "title": "Advanced Topics",
            "topics": [
                "Complex scenarios",
                "Advanced techniques",
                "Performance evaluation",
                "Optimization"
            ]
        },
        {
            "id": 5,
            "title": "Applications and Future Trends",
            "topics": [
                "Recent advancements",
                "Industry applications",
                "Emerging technologies",
                "Future scope"
            ]
        }
    ]
},
    "HS3152": {
    "name": "Professional English \u2013 I",
    "regulation": "R2021",
    "department": "Common",
    "credits": 3,
    "ltp": "3-0-0",
    "objectives": [
        "To understand the fundamental concepts of Professional English \u2013 I",
        "To apply principles and analytical techniques to Professional English \u2013 I problems",
        "To develop problem-solving skills in relevant domains",
        "To analyze complex systems associated with the subject",
        "To design solutions using state-of-the-art methods"
    ],
    "outcomes": [
        {
            "id": "CO1",
            "desc": "Understand the basic concepts and principles."
        },
        {
            "id": "CO2",
            "desc": "Apply theoretical methods to practical scenarios."
        },
        {
            "id": "CO3",
            "desc": "Analyze system performance and behavior."
        },
        {
            "id": "CO4",
            "desc": "Evaluate different implementations and approaches."
        },
        {
            "id": "CO5",
            "desc": "Design simple models or complete systems."
        }
    ],
    "units": [
        {
            "id": 1,
            "title": "Introduction and Basic Concepts",
            "topics": [
                "Definition and scope",
                "Fundamental theories",
                "Basic definitions",
                "Overview of applications"
            ]
        },
        {
            "id": 2,
            "title": "Analysis and Principles",
            "topics": [
                "Analytical methods",
                "Core principles",
                "Mathematical modeling",
                "Key algorithms"
            ]
        },
        {
            "id": 3,
            "title": "Design and Implementation",
            "topics": [
                "Design methodologies",
                "Architecture overview",
                "Implementation steps",
                "Case studies"
            ]
        },
        {
            "id": 4,
            "title": "Advanced Topics",
            "topics": [
                "Complex scenarios",
                "Advanced techniques",
                "Performance evaluation",
                "Optimization"
            ]
        },
        {
            "id": 5,
            "title": "Applications and Future Trends",
            "topics": [
                "Recent advancements",
                "Industry applications",
                "Emerging technologies",
                "Future scope"
            ]
        }
    ]
},
    "DS3301": {
    "name": "Statistics for Data Science",
    "regulation": "R2021",
    "department": "Common",
    "credits": 3,
    "ltp": "3-0-0",
    "objectives": [
        "To understand the fundamental concepts of Statistics for Data Science",
        "To apply principles and analytical techniques to Statistics for Data Science problems",
        "To develop problem-solving skills in relevant domains",
        "To analyze complex systems associated with the subject",
        "To design solutions using state-of-the-art methods"
    ],
    "outcomes": [
        {
            "id": "CO1",
            "desc": "Understand the basic concepts and principles."
        },
        {
            "id": "CO2",
            "desc": "Apply theoretical methods to practical scenarios."
        },
        {
            "id": "CO3",
            "desc": "Analyze system performance and behavior."
        },
        {
            "id": "CO4",
            "desc": "Evaluate different implementations and approaches."
        },
        {
            "id": "CO5",
            "desc": "Design simple models or complete systems."
        }
    ],
    "units": [
        {
            "id": 1,
            "title": "Introduction and Basic Concepts",
            "topics": [
                "Definition and scope",
                "Fundamental theories",
                "Basic definitions",
                "Overview of applications"
            ]
        },
        {
            "id": 2,
            "title": "Analysis and Principles",
            "topics": [
                "Analytical methods",
                "Core principles",
                "Mathematical modeling",
                "Key algorithms"
            ]
        },
        {
            "id": 3,
            "title": "Design and Implementation",
            "topics": [
                "Design methodologies",
                "Architecture overview",
                "Implementation steps",
                "Case studies"
            ]
        },
        {
            "id": 4,
            "title": "Advanced Topics",
            "topics": [
                "Complex scenarios",
                "Advanced techniques",
                "Performance evaluation",
                "Optimization"
            ]
        },
        {
            "id": 5,
            "title": "Applications and Future Trends",
            "topics": [
                "Recent advancements",
                "Industry applications",
                "Emerging technologies",
                "Future scope"
            ]
        }
    ]
},
    "DS3401": {
    "name": "Machine Learning",
    "regulation": "R2021",
    "department": "Common",
    "credits": 3,
    "ltp": "3-0-0",
    "objectives": [
        "To understand the fundamental concepts of Machine Learning",
        "To apply principles and analytical techniques to Machine Learning problems",
        "To develop problem-solving skills in relevant domains",
        "To analyze complex systems associated with the subject",
        "To design solutions using state-of-the-art methods"
    ],
    "outcomes": [
        {
            "id": "CO1",
            "desc": "Understand the basic concepts and principles."
        },
        {
            "id": "CO2",
            "desc": "Apply theoretical methods to practical scenarios."
        },
        {
            "id": "CO3",
            "desc": "Analyze system performance and behavior."
        },
        {
            "id": "CO4",
            "desc": "Evaluate different implementations and approaches."
        },
        {
            "id": "CO5",
            "desc": "Design simple models or complete systems."
        }
    ],
    "units": [
        {
            "id": 1,
            "title": "Introduction and Basic Concepts",
            "topics": [
                "Definition and scope",
                "Fundamental theories",
                "Basic definitions",
                "Overview of applications"
            ]
        },
        {
            "id": 2,
            "title": "Analysis and Principles",
            "topics": [
                "Analytical methods",
                "Core principles",
                "Mathematical modeling",
                "Key algorithms"
            ]
        },
        {
            "id": 3,
            "title": "Design and Implementation",
            "topics": [
                "Design methodologies",
                "Architecture overview",
                "Implementation steps",
                "Case studies"
            ]
        },
        {
            "id": 4,
            "title": "Advanced Topics",
            "topics": [
                "Complex scenarios",
                "Advanced techniques",
                "Performance evaluation",
                "Optimization"
            ]
        },
        {
            "id": 5,
            "title": "Applications and Future Trends",
            "topics": [
                "Recent advancements",
                "Industry applications",
                "Emerging technologies",
                "Future scope"
            ]
        }
    ]
},
    "DS3501": {
    "name": "Big Data Analytics",
    "regulation": "R2021",
    "department": "Common",
    "credits": 3,
    "ltp": "3-0-0",
    "objectives": [
        "To understand the fundamental concepts of Big Data Analytics",
        "To apply principles and analytical techniques to Big Data Analytics problems",
        "To develop problem-solving skills in relevant domains",
        "To analyze complex systems associated with the subject",
        "To design solutions using state-of-the-art methods"
    ],
    "outcomes": [
        {
            "id": "CO1",
            "desc": "Understand the basic concepts and principles."
        },
        {
            "id": "CO2",
            "desc": "Apply theoretical methods to practical scenarios."
        },
        {
            "id": "CO3",
            "desc": "Analyze system performance and behavior."
        },
        {
            "id": "CO4",
            "desc": "Evaluate different implementations and approaches."
        },
        {
            "id": "CO5",
            "desc": "Design simple models or complete systems."
        }
    ],
    "units": [
        {
            "id": 1,
            "title": "Introduction and Basic Concepts",
            "topics": [
                "Definition and scope",
                "Fundamental theories",
                "Basic definitions",
                "Overview of applications"
            ]
        },
        {
            "id": 2,
            "title": "Analysis and Principles",
            "topics": [
                "Analytical methods",
                "Core principles",
                "Mathematical modeling",
                "Key algorithms"
            ]
        },
        {
            "id": 3,
            "title": "Design and Implementation",
            "topics": [
                "Design methodologies",
                "Architecture overview",
                "Implementation steps",
                "Case studies"
            ]
        },
        {
            "id": 4,
            "title": "Advanced Topics",
            "topics": [
                "Complex scenarios",
                "Advanced techniques",
                "Performance evaluation",
                "Optimization"
            ]
        },
        {
            "id": 5,
            "title": "Applications and Future Trends",
            "topics": [
                "Recent advancements",
                "Industry applications",
                "Emerging technologies",
                "Future scope"
            ]
        }
    ]
},
    "DS3601": {
    "name": "Deep Learning",
    "regulation": "R2021",
    "department": "Common",
    "credits": 3,
    "ltp": "3-0-0",
    "objectives": [
        "To understand the fundamental concepts of Deep Learning",
        "To apply principles and analytical techniques to Deep Learning problems",
        "To develop problem-solving skills in relevant domains",
        "To analyze complex systems associated with the subject",
        "To design solutions using state-of-the-art methods"
    ],
    "outcomes": [
        {
            "id": "CO1",
            "desc": "Understand the basic concepts and principles."
        },
        {
            "id": "CO2",
            "desc": "Apply theoretical methods to practical scenarios."
        },
        {
            "id": "CO3",
            "desc": "Analyze system performance and behavior."
        },
        {
            "id": "CO4",
            "desc": "Evaluate different implementations and approaches."
        },
        {
            "id": "CO5",
            "desc": "Design simple models or complete systems."
        }
    ],
    "units": [
        {
            "id": 1,
            "title": "Introduction and Basic Concepts",
            "topics": [
                "Definition and scope",
                "Fundamental theories",
                "Basic definitions",
                "Overview of applications"
            ]
        },
        {
            "id": 2,
            "title": "Analysis and Principles",
            "topics": [
                "Analytical methods",
                "Core principles",
                "Mathematical modeling",
                "Key algorithms"
            ]
        },
        {
            "id": 3,
            "title": "Design and Implementation",
            "topics": [
                "Design methodologies",
                "Architecture overview",
                "Implementation steps",
                "Case studies"
            ]
        },
        {
            "id": 4,
            "title": "Advanced Topics",
            "topics": [
                "Complex scenarios",
                "Advanced techniques",
                "Performance evaluation",
                "Optimization"
            ]
        },
        {
            "id": 5,
            "title": "Applications and Future Trends",
            "topics": [
                "Recent advancements",
                "Industry applications",
                "Emerging technologies",
                "Future scope"
            ]
        }
    ]
},
    "ME25C02": {
    "name": "Engineering Mechanics",
    "regulation": "R2025",
    "department": "Common",
    "credits": 3,
    "ltp": "3-0-0",
    "objectives": [
        "To understand the fundamental concepts of Engineering Mechanics",
        "To apply principles and analytical techniques to Engineering Mechanics problems",
        "To develop problem-solving skills in relevant domains",
        "To analyze complex systems associated with the subject",
        "To design solutions using state-of-the-art methods"
    ],
    "outcomes": [
        {
            "id": "CO1",
            "desc": "Understand the basic concepts and principles."
        },
        {
            "id": "CO2",
            "desc": "Apply theoretical methods to practical scenarios."
        },
        {
            "id": "CO3",
            "desc": "Analyze system performance and behavior."
        },
        {
            "id": "CO4",
            "desc": "Evaluate different implementations and approaches."
        },
        {
            "id": "CO5",
            "desc": "Design simple models or complete systems."
        }
    ],
    "units": [
        {
            "id": 1,
            "title": "Introduction and Basic Concepts",
            "topics": [
                "Definition and scope",
                "Fundamental theories",
                "Basic definitions",
                "Overview of applications"
            ]
        },
        {
            "id": 2,
            "title": "Analysis and Principles",
            "topics": [
                "Analytical methods",
                "Core principles",
                "Mathematical modeling",
                "Key algorithms"
            ]
        },
        {
            "id": 3,
            "title": "Design and Implementation",
            "topics": [
                "Design methodologies",
                "Architecture overview",
                "Implementation steps",
                "Case studies"
            ]
        },
        {
            "id": 4,
            "title": "Advanced Topics",
            "topics": [
                "Complex scenarios",
                "Advanced techniques",
                "Performance evaluation",
                "Optimization"
            ]
        },
        {
            "id": 5,
            "title": "Applications and Future Trends",
            "topics": [
                "Recent advancements",
                "Industry applications",
                "Emerging technologies",
                "Future scope"
            ]
        }
    ]
},
    "PH25C05": {
    "name": "Applied Physics (ME) \u2013 II",
    "regulation": "R2025",
    "department": "Common",
    "credits": 3,
    "ltp": "3-0-0",
    "objectives": [
        "To understand the fundamental concepts of Applied Physics (ME) \u2013 II",
        "To apply principles and analytical techniques to Applied Physics (ME) \u2013 II problems",
        "To develop problem-solving skills in relevant domains",
        "To analyze complex systems associated with the subject",
        "To design solutions using state-of-the-art methods"
    ],
    "outcomes": [
        {
            "id": "CO1",
            "desc": "Understand the basic concepts and principles."
        },
        {
            "id": "CO2",
            "desc": "Apply theoretical methods to practical scenarios."
        },
        {
            "id": "CO3",
            "desc": "Analyze system performance and behavior."
        },
        {
            "id": "CO4",
            "desc": "Evaluate different implementations and approaches."
        },
        {
            "id": "CO5",
            "desc": "Design simple models or complete systems."
        }
    ],
    "units": [
        {
            "id": 1,
            "title": "Introduction and Basic Concepts",
            "topics": [
                "Definition and scope",
                "Fundamental theories",
                "Basic definitions",
                "Overview of applications"
            ]
        },
        {
            "id": 2,
            "title": "Analysis and Principles",
            "topics": [
                "Analytical methods",
                "Core principles",
                "Mathematical modeling",
                "Key algorithms"
            ]
        },
        {
            "id": 3,
            "title": "Design and Implementation",
            "topics": [
                "Design methodologies",
                "Architecture overview",
                "Implementation steps",
                "Case studies"
            ]
        },
        {
            "id": 4,
            "title": "Advanced Topics",
            "topics": [
                "Complex scenarios",
                "Advanced techniques",
                "Performance evaluation",
                "Optimization"
            ]
        },
        {
            "id": 5,
            "title": "Applications and Future Trends",
            "topics": [
                "Recent advancements",
                "Industry applications",
                "Emerging technologies",
                "Future scope"
            ]
        }
    ]
},
    "CY25C03": {
    "name": "Applied Chemistry (ME) \u2013 II",
    "regulation": "R2025",
    "department": "Common",
    "credits": 3,
    "ltp": "3-0-0",
    "objectives": [
        "To understand the fundamental concepts of Applied Chemistry (ME) \u2013 II",
        "To apply principles and analytical techniques to Applied Chemistry (ME) \u2013 II problems",
        "To develop problem-solving skills in relevant domains",
        "To analyze complex systems associated with the subject",
        "To design solutions using state-of-the-art methods"
    ],
    "outcomes": [
        {
            "id": "CO1",
            "desc": "Understand the basic concepts and principles."
        },
        {
            "id": "CO2",
            "desc": "Apply theoretical methods to practical scenarios."
        },
        {
            "id": "CO3",
            "desc": "Analyze system performance and behavior."
        },
        {
            "id": "CO4",
            "desc": "Evaluate different implementations and approaches."
        },
        {
            "id": "CO5",
            "desc": "Design simple models or complete systems."
        }
    ],
    "units": [
        {
            "id": 1,
            "title": "Introduction and Basic Concepts",
            "topics": [
                "Definition and scope",
                "Fundamental theories",
                "Basic definitions",
                "Overview of applications"
            ]
        },
        {
            "id": 2,
            "title": "Analysis and Principles",
            "topics": [
                "Analytical methods",
                "Core principles",
                "Mathematical modeling",
                "Key algorithms"
            ]
        },
        {
            "id": 3,
            "title": "Design and Implementation",
            "topics": [
                "Design methodologies",
                "Architecture overview",
                "Implementation steps",
                "Case studies"
            ]
        },
        {
            "id": 4,
            "title": "Advanced Topics",
            "topics": [
                "Complex scenarios",
                "Advanced techniques",
                "Performance evaluation",
                "Optimization"
            ]
        },
        {
            "id": 5,
            "title": "Applications and Future Trends",
            "topics": [
                "Recent advancements",
                "Industry applications",
                "Emerging technologies",
                "Future scope"
            ]
        }
    ]
},
    "PH25C02": {
    "name": "Applied Physics (CE) \u2013 II",
    "regulation": "R2025",
    "department": "Common",
    "credits": 3,
    "ltp": "3-0-0",
    "objectives": [
        "To understand the fundamental concepts of Applied Physics (CE) \u2013 II",
        "To apply principles and analytical techniques to Applied Physics (CE) \u2013 II problems",
        "To develop problem-solving skills in relevant domains",
        "To analyze complex systems associated with the subject",
        "To design solutions using state-of-the-art methods"
    ],
    "outcomes": [
        {
            "id": "CO1",
            "desc": "Understand the basic concepts and principles."
        },
        {
            "id": "CO2",
            "desc": "Apply theoretical methods to practical scenarios."
        },
        {
            "id": "CO3",
            "desc": "Analyze system performance and behavior."
        },
        {
            "id": "CO4",
            "desc": "Evaluate different implementations and approaches."
        },
        {
            "id": "CO5",
            "desc": "Design simple models or complete systems."
        }
    ],
    "units": [
        {
            "id": 1,
            "title": "Introduction and Basic Concepts",
            "topics": [
                "Definition and scope",
                "Fundamental theories",
                "Basic definitions",
                "Overview of applications"
            ]
        },
        {
            "id": 2,
            "title": "Analysis and Principles",
            "topics": [
                "Analytical methods",
                "Core principles",
                "Mathematical modeling",
                "Key algorithms"
            ]
        },
        {
            "id": 3,
            "title": "Design and Implementation",
            "topics": [
                "Design methodologies",
                "Architecture overview",
                "Implementation steps",
                "Case studies"
            ]
        },
        {
            "id": 4,
            "title": "Advanced Topics",
            "topics": [
                "Complex scenarios",
                "Advanced techniques",
                "Performance evaluation",
                "Optimization"
            ]
        },
        {
            "id": 5,
            "title": "Applications and Future Trends",
            "topics": [
                "Recent advancements",
                "Industry applications",
                "Emerging technologies",
                "Future scope"
            ]
        }
    ]
},
    "CY25C02": {
    "name": "Applied Chemistry (CE) \u2013 II",
    "regulation": "R2025",
    "department": "Common",
    "credits": 3,
    "ltp": "3-0-0",
    "objectives": [
        "To understand the fundamental concepts of Applied Chemistry (CE) \u2013 II",
        "To apply principles and analytical techniques to Applied Chemistry (CE) \u2013 II problems",
        "To develop problem-solving skills in relevant domains",
        "To analyze complex systems associated with the subject",
        "To design solutions using state-of-the-art methods"
    ],
    "outcomes": [
        {
            "id": "CO1",
            "desc": "Understand the basic concepts and principles."
        },
        {
            "id": "CO2",
            "desc": "Apply theoretical methods to practical scenarios."
        },
        {
            "id": "CO3",
            "desc": "Analyze system performance and behavior."
        },
        {
            "id": "CO4",
            "desc": "Evaluate different implementations and approaches."
        },
        {
            "id": "CO5",
            "desc": "Design simple models or complete systems."
        }
    ],
    "units": [
        {
            "id": 1,
            "title": "Introduction and Basic Concepts",
            "topics": [
                "Definition and scope",
                "Fundamental theories",
                "Basic definitions",
                "Overview of applications"
            ]
        },
        {
            "id": 2,
            "title": "Analysis and Principles",
            "topics": [
                "Analytical methods",
                "Core principles",
                "Mathematical modeling",
                "Key algorithms"
            ]
        },
        {
            "id": 3,
            "title": "Design and Implementation",
            "topics": [
                "Design methodologies",
                "Architecture overview",
                "Implementation steps",
                "Case studies"
            ]
        },
        {
            "id": 4,
            "title": "Advanced Topics",
            "topics": [
                "Complex scenarios",
                "Advanced techniques",
                "Performance evaluation",
                "Optimization"
            ]
        },
        {
            "id": 5,
            "title": "Applications and Future Trends",
            "topics": [
                "Recent advancements",
                "Industry applications",
                "Emerging technologies",
                "Future scope"
            ]
        }
    ]
},
    "CE25201": {
    "name": "Construction Materials and Technology",
    "regulation": "R2025",
    "department": "Common",
    "credits": 3,
    "ltp": "3-0-0",
    "objectives": [
        "To understand the fundamental concepts of Construction Materials and Technology",
        "To apply principles and analytical techniques to Construction Materials and Technology problems",
        "To develop problem-solving skills in relevant domains",
        "To analyze complex systems associated with the subject",
        "To design solutions using state-of-the-art methods"
    ],
    "outcomes": [
        {
            "id": "CO1",
            "desc": "Understand the basic concepts and principles."
        },
        {
            "id": "CO2",
            "desc": "Apply theoretical methods to practical scenarios."
        },
        {
            "id": "CO3",
            "desc": "Analyze system performance and behavior."
        },
        {
            "id": "CO4",
            "desc": "Evaluate different implementations and approaches."
        },
        {
            "id": "CO5",
            "desc": "Design simple models or complete systems."
        }
    ],
    "units": [
        {
            "id": 1,
            "title": "Introduction and Basic Concepts",
            "topics": [
                "Definition and scope",
                "Fundamental theories",
                "Basic definitions",
                "Overview of applications"
            ]
        },
        {
            "id": 2,
            "title": "Analysis and Principles",
            "topics": [
                "Analytical methods",
                "Core principles",
                "Mathematical modeling",
                "Key algorithms"
            ]
        },
        {
            "id": 3,
            "title": "Design and Implementation",
            "topics": [
                "Design methodologies",
                "Architecture overview",
                "Implementation steps",
                "Case studies"
            ]
        },
        {
            "id": 4,
            "title": "Advanced Topics",
            "topics": [
                "Complex scenarios",
                "Advanced techniques",
                "Performance evaluation",
                "Optimization"
            ]
        },
        {
            "id": 5,
            "title": "Applications and Future Trends",
            "topics": [
                "Recent advancements",
                "Industry applications",
                "Emerging technologies",
                "Future scope"
            ]
        }
    ]
},
    "EC25C01": {
    "name": "Electron Devices",
    "regulation": "R2025",
    "department": "Common",
    "credits": 3,
    "ltp": "3-0-0",
    "objectives": [
        "To understand the fundamental concepts of Electron Devices",
        "To apply principles and analytical techniques to Electron Devices problems",
        "To develop problem-solving skills in relevant domains",
        "To analyze complex systems associated with the subject",
        "To design solutions using state-of-the-art methods"
    ],
    "outcomes": [
        {
            "id": "CO1",
            "desc": "Understand the basic concepts and principles."
        },
        {
            "id": "CO2",
            "desc": "Apply theoretical methods to practical scenarios."
        },
        {
            "id": "CO3",
            "desc": "Analyze system performance and behavior."
        },
        {
            "id": "CO4",
            "desc": "Evaluate different implementations and approaches."
        },
        {
            "id": "CO5",
            "desc": "Design simple models or complete systems."
        }
    ],
    "units": [
        {
            "id": 1,
            "title": "Introduction and Basic Concepts",
            "topics": [
                "Definition and scope",
                "Fundamental theories",
                "Basic definitions",
                "Overview of applications"
            ]
        },
        {
            "id": 2,
            "title": "Analysis and Principles",
            "topics": [
                "Analytical methods",
                "Core principles",
                "Mathematical modeling",
                "Key algorithms"
            ]
        },
        {
            "id": 3,
            "title": "Design and Implementation",
            "topics": [
                "Design methodologies",
                "Architecture overview",
                "Implementation steps",
                "Case studies"
            ]
        },
        {
            "id": 4,
            "title": "Advanced Topics",
            "topics": [
                "Complex scenarios",
                "Advanced techniques",
                "Performance evaluation",
                "Optimization"
            ]
        },
        {
            "id": 5,
            "title": "Applications and Future Trends",
            "topics": [
                "Recent advancements",
                "Industry applications",
                "Emerging technologies",
                "Future scope"
            ]
        }
    ]
},
    "EC25C02": {
    "name": "Circuits and Network Analysis",
    "regulation": "R2025",
    "department": "Common",
    "credits": 3,
    "ltp": "3-0-0",
    "objectives": [
        "To understand the fundamental concepts of Circuits and Network Analysis",
        "To apply principles and analytical techniques to Circuits and Network Analysis problems",
        "To develop problem-solving skills in relevant domains",
        "To analyze complex systems associated with the subject",
        "To design solutions using state-of-the-art methods"
    ],
    "outcomes": [
        {
            "id": "CO1",
            "desc": "Understand the basic concepts and principles."
        },
        {
            "id": "CO2",
            "desc": "Apply theoretical methods to practical scenarios."
        },
        {
            "id": "CO3",
            "desc": "Analyze system performance and behavior."
        },
        {
            "id": "CO4",
            "desc": "Evaluate different implementations and approaches."
        },
        {
            "id": "CO5",
            "desc": "Design simple models or complete systems."
        }
    ],
    "units": [
        {
            "id": 1,
            "title": "Introduction and Basic Concepts",
            "topics": [
                "Definition and scope",
                "Fundamental theories",
                "Basic definitions",
                "Overview of applications"
            ]
        },
        {
            "id": 2,
            "title": "Analysis and Principles",
            "topics": [
                "Analytical methods",
                "Core principles",
                "Mathematical modeling",
                "Key algorithms"
            ]
        },
        {
            "id": 3,
            "title": "Design and Implementation",
            "topics": [
                "Design methodologies",
                "Architecture overview",
                "Implementation steps",
                "Case studies"
            ]
        },
        {
            "id": 4,
            "title": "Advanced Topics",
            "topics": [
                "Complex scenarios",
                "Advanced techniques",
                "Performance evaluation",
                "Optimization"
            ]
        },
        {
            "id": 5,
            "title": "Applications and Future Trends",
            "topics": [
                "Recent advancements",
                "Industry applications",
                "Emerging technologies",
                "Future scope"
            ]
        }
    ]
},
    "CS25C05": {
    "name": "Data Structures using C++",
    "regulation": "R2025",
    "department": "Common",
    "credits": 3,
    "ltp": "3-0-0",
    "objectives": [
        "To understand the fundamental concepts of Data Structures using C++",
        "To apply principles and analytical techniques to Data Structures using C++ problems",
        "To develop problem-solving skills in relevant domains",
        "To analyze complex systems associated with the subject",
        "To design solutions using state-of-the-art methods"
    ],
    "outcomes": [
        {
            "id": "CO1",
            "desc": "Understand the basic concepts and principles."
        },
        {
            "id": "CO2",
            "desc": "Apply theoretical methods to practical scenarios."
        },
        {
            "id": "CO3",
            "desc": "Analyze system performance and behavior."
        },
        {
            "id": "CO4",
            "desc": "Evaluate different implementations and approaches."
        },
        {
            "id": "CO5",
            "desc": "Design simple models or complete systems."
        }
    ],
    "units": [
        {
            "id": 1,
            "title": "Introduction and Basic Concepts",
            "topics": [
                "Definition and scope",
                "Fundamental theories",
                "Basic definitions",
                "Overview of applications"
            ]
        },
        {
            "id": 2,
            "title": "Analysis and Principles",
            "topics": [
                "Analytical methods",
                "Core principles",
                "Mathematical modeling",
                "Key algorithms"
            ]
        },
        {
            "id": 3,
            "title": "Design and Implementation",
            "topics": [
                "Design methodologies",
                "Architecture overview",
                "Implementation steps",
                "Case studies"
            ]
        },
        {
            "id": 4,
            "title": "Advanced Topics",
            "topics": [
                "Complex scenarios",
                "Advanced techniques",
                "Performance evaluation",
                "Optimization"
            ]
        },
        {
            "id": 5,
            "title": "Applications and Future Trends",
            "topics": [
                "Recent advancements",
                "Industry applications",
                "Emerging technologies",
                "Future scope"
            ]
        }
    ]
},
    "MA25C03": {
    "name": "Transforms and its Applications",
    "regulation": "R2025",
    "department": "Common",
    "credits": 3,
    "ltp": "3-0-0",
    "objectives": [
        "To understand the fundamental concepts of Transforms and its Applications",
        "To apply principles and analytical techniques to Transforms and its Applications problems",
        "To develop problem-solving skills in relevant domains",
        "To analyze complex systems associated with the subject",
        "To design solutions using state-of-the-art methods"
    ],
    "outcomes": [
        {
            "id": "CO1",
            "desc": "Understand the basic concepts and principles."
        },
        {
            "id": "CO2",
            "desc": "Apply theoretical methods to practical scenarios."
        },
        {
            "id": "CO3",
            "desc": "Analyze system performance and behavior."
        },
        {
            "id": "CO4",
            "desc": "Evaluate different implementations and approaches."
        },
        {
            "id": "CO5",
            "desc": "Design simple models or complete systems."
        }
    ],
    "units": [
        {
            "id": 1,
            "title": "Introduction and Basic Concepts",
            "topics": [
                "Definition and scope",
                "Fundamental theories",
                "Basic definitions",
                "Overview of applications"
            ]
        },
        {
            "id": 2,
            "title": "Analysis and Principles",
            "topics": [
                "Analytical methods",
                "Core principles",
                "Mathematical modeling",
                "Key algorithms"
            ]
        },
        {
            "id": 3,
            "title": "Design and Implementation",
            "topics": [
                "Design methodologies",
                "Architecture overview",
                "Implementation steps",
                "Case studies"
            ]
        },
        {
            "id": 4,
            "title": "Advanced Topics",
            "topics": [
                "Complex scenarios",
                "Advanced techniques",
                "Performance evaluation",
                "Optimization"
            ]
        },
        {
            "id": 5,
            "title": "Applications and Future Trends",
            "topics": [
                "Recent advancements",
                "Industry applications",
                "Emerging technologies",
                "Future scope"
            ]
        }
    ]
},
    "GE25C01": {
    "name": "Basic Civil and Mechanical Engineering",
    "regulation": "R2025",
    "department": "Common",
    "credits": 3,
    "ltp": "3-0-0",
    "objectives": [
        "To understand the fundamental concepts of Basic Civil and Mechanical Engineering",
        "To apply principles and analytical techniques to Basic Civil and Mechanical Engineering problems",
        "To develop problem-solving skills in relevant domains",
        "To analyze complex systems associated with the subject",
        "To design solutions using state-of-the-art methods"
    ],
    "outcomes": [
        {
            "id": "CO1",
            "desc": "Understand the basic concepts and principles."
        },
        {
            "id": "CO2",
            "desc": "Apply theoretical methods to practical scenarios."
        },
        {
            "id": "CO3",
            "desc": "Analyze system performance and behavior."
        },
        {
            "id": "CO4",
            "desc": "Evaluate different implementations and approaches."
        },
        {
            "id": "CO5",
            "desc": "Design simple models or complete systems."
        }
    ],
    "units": [
        {
            "id": 1,
            "title": "Introduction and Basic Concepts",
            "topics": [
                "Definition and scope",
                "Fundamental theories",
                "Basic definitions",
                "Overview of applications"
            ]
        },
        {
            "id": 2,
            "title": "Analysis and Principles",
            "topics": [
                "Analytical methods",
                "Core principles",
                "Mathematical modeling",
                "Key algorithms"
            ]
        },
        {
            "id": 3,
            "title": "Design and Implementation",
            "topics": [
                "Design methodologies",
                "Architecture overview",
                "Implementation steps",
                "Case studies"
            ]
        },
        {
            "id": 4,
            "title": "Advanced Topics",
            "topics": [
                "Complex scenarios",
                "Advanced techniques",
                "Performance evaluation",
                "Optimization"
            ]
        },
        {
            "id": 5,
            "title": "Applications and Future Trends",
            "topics": [
                "Recent advancements",
                "Industry applications",
                "Emerging technologies",
                "Future scope"
            ]
        }
    ]
},
    "PH25C04": {
    "name": "Applied Physics (EE) \u2013 II",
    "regulation": "R2025",
    "department": "Common",
    "credits": 3,
    "ltp": "3-0-0",
    "objectives": [
        "To understand the fundamental concepts of Applied Physics (EE) \u2013 II",
        "To apply principles and analytical techniques to Applied Physics (EE) \u2013 II problems",
        "To develop problem-solving skills in relevant domains",
        "To analyze complex systems associated with the subject",
        "To design solutions using state-of-the-art methods"
    ],
    "outcomes": [
        {
            "id": "CO1",
            "desc": "Understand the basic concepts and principles."
        },
        {
            "id": "CO2",
            "desc": "Apply theoretical methods to practical scenarios."
        },
        {
            "id": "CO3",
            "desc": "Analyze system performance and behavior."
        },
        {
            "id": "CO4",
            "desc": "Evaluate different implementations and approaches."
        },
        {
            "id": "CO5",
            "desc": "Design simple models or complete systems."
        }
    ],
    "units": [
        {
            "id": 1,
            "title": "Introduction and Basic Concepts",
            "topics": [
                "Definition and scope",
                "Fundamental theories",
                "Basic definitions",
                "Overview of applications"
            ]
        },
        {
            "id": 2,
            "title": "Analysis and Principles",
            "topics": [
                "Analytical methods",
                "Core principles",
                "Mathematical modeling",
                "Key algorithms"
            ]
        },
        {
            "id": 3,
            "title": "Design and Implementation",
            "topics": [
                "Design methodologies",
                "Architecture overview",
                "Implementation steps",
                "Case studies"
            ]
        },
        {
            "id": 4,
            "title": "Advanced Topics",
            "topics": [
                "Complex scenarios",
                "Advanced techniques",
                "Performance evaluation",
                "Optimization"
            ]
        },
        {
            "id": 5,
            "title": "Applications and Future Trends",
            "topics": [
                "Recent advancements",
                "Industry applications",
                "Emerging technologies",
                "Future scope"
            ]
        }
    ]
},
    "ME25C01": {
    "name": "Engineering Drawing",
    "regulation": "R2025",
    "department": "Common",
    "credits": 3,
    "ltp": "3-0-0",
    "objectives": [
        "To understand the fundamental concepts of Engineering Drawing",
        "To apply principles and analytical techniques to Engineering Drawing problems",
        "To develop problem-solving skills in relevant domains",
        "To analyze complex systems associated with the subject",
        "To design solutions using state-of-the-art methods"
    ],
    "outcomes": [
        {
            "id": "CO1",
            "desc": "Understand the basic concepts and principles."
        },
        {
            "id": "CO2",
            "desc": "Apply theoretical methods to practical scenarios."
        },
        {
            "id": "CO3",
            "desc": "Analyze system performance and behavior."
        },
        {
            "id": "CO4",
            "desc": "Evaluate different implementations and approaches."
        },
        {
            "id": "CO5",
            "desc": "Design simple models or complete systems."
        }
    ],
    "units": [
        {
            "id": 1,
            "title": "Introduction and Basic Concepts",
            "topics": [
                "Definition and scope",
                "Fundamental theories",
                "Basic definitions",
                "Overview of applications"
            ]
        },
        {
            "id": 2,
            "title": "Analysis and Principles",
            "topics": [
                "Analytical methods",
                "Core principles",
                "Mathematical modeling",
                "Key algorithms"
            ]
        },
        {
            "id": 3,
            "title": "Design and Implementation",
            "topics": [
                "Design methodologies",
                "Architecture overview",
                "Implementation steps",
                "Case studies"
            ]
        },
        {
            "id": 4,
            "title": "Advanced Topics",
            "topics": [
                "Complex scenarios",
                "Advanced techniques",
                "Performance evaluation",
                "Optimization"
            ]
        },
        {
            "id": 5,
            "title": "Applications and Future Trends",
            "topics": [
                "Recent advancements",
                "Industry applications",
                "Emerging technologies",
                "Future scope"
            ]
        }
    ]
},
    "CS25C04": {
    "name": "Data Structures and Algorithms",
    "regulation": "R2025",
    "department": "Common",
    "credits": 3,
    "ltp": "3-0-0",
    "objectives": [
        "To understand the fundamental concepts of Data Structures and Algorithms",
        "To apply principles and analytical techniques to Data Structures and Algorithms problems",
        "To develop problem-solving skills in relevant domains",
        "To analyze complex systems associated with the subject",
        "To design solutions using state-of-the-art methods"
    ],
    "outcomes": [
        {
            "id": "CO1",
            "desc": "Understand the basic concepts and principles."
        },
        {
            "id": "CO2",
            "desc": "Apply theoretical methods to practical scenarios."
        },
        {
            "id": "CO3",
            "desc": "Analyze system performance and behavior."
        },
        {
            "id": "CO4",
            "desc": "Evaluate different implementations and approaches."
        },
        {
            "id": "CO5",
            "desc": "Design simple models or complete systems."
        }
    ],
    "units": [
        {
            "id": 1,
            "title": "Introduction and Basic Concepts",
            "topics": [
                "Definition and scope",
                "Fundamental theories",
                "Basic definitions",
                "Overview of applications"
            ]
        },
        {
            "id": 2,
            "title": "Analysis and Principles",
            "topics": [
                "Analytical methods",
                "Core principles",
                "Mathematical modeling",
                "Key algorithms"
            ]
        },
        {
            "id": 3,
            "title": "Design and Implementation",
            "topics": [
                "Design methodologies",
                "Architecture overview",
                "Implementation steps",
                "Case studies"
            ]
        },
        {
            "id": 4,
            "title": "Advanced Topics",
            "topics": [
                "Complex scenarios",
                "Advanced techniques",
                "Performance evaluation",
                "Optimization"
            ]
        },
        {
            "id": 5,
            "title": "Applications and Future Trends",
            "topics": [
                "Recent advancements",
                "Industry applications",
                "Emerging technologies",
                "Future scope"
            ]
        }
    ]
},
    "IT25201": {
    "name": "Foundations of Data Science Using Python",
    "regulation": "R2025",
    "department": "Common",
    "credits": 3,
    "ltp": "3-0-0",
    "objectives": [
        "To understand the fundamental concepts of Foundations of Data Science Using Python",
        "To apply principles and analytical techniques to Foundations of Data Science Using Python problems",
        "To develop problem-solving skills in relevant domains",
        "To analyze complex systems associated with the subject",
        "To design solutions using state-of-the-art methods"
    ],
    "outcomes": [
        {
            "id": "CO1",
            "desc": "Understand the basic concepts and principles."
        },
        {
            "id": "CO2",
            "desc": "Apply theoretical methods to practical scenarios."
        },
        {
            "id": "CO3",
            "desc": "Analyze system performance and behavior."
        },
        {
            "id": "CO4",
            "desc": "Evaluate different implementations and approaches."
        },
        {
            "id": "CO5",
            "desc": "Design simple models or complete systems."
        }
    ],
    "units": [
        {
            "id": 1,
            "title": "Introduction and Basic Concepts",
            "topics": [
                "Definition and scope",
                "Fundamental theories",
                "Basic definitions",
                "Overview of applications"
            ]
        },
        {
            "id": 2,
            "title": "Analysis and Principles",
            "topics": [
                "Analytical methods",
                "Core principles",
                "Mathematical modeling",
                "Key algorithms"
            ]
        },
        {
            "id": 3,
            "title": "Design and Implementation",
            "topics": [
                "Design methodologies",
                "Architecture overview",
                "Implementation steps",
                "Case studies"
            ]
        },
        {
            "id": 4,
            "title": "Advanced Topics",
            "topics": [
                "Complex scenarios",
                "Advanced techniques",
                "Performance evaluation",
                "Optimization"
            ]
        },
        {
            "id": 5,
            "title": "Applications and Future Trends",
            "topics": [
                "Recent advancements",
                "Industry applications",
                "Emerging technologies",
                "Future scope"
            ]
        }
    ]
},
    "IT25202": {
    "name": "Digital Principles and System Design",
    "regulation": "R2025",
    "department": "Common",
    "credits": 3,
    "ltp": "3-0-0",
    "objectives": [
        "To understand the fundamental concepts of Digital Principles and System Design",
        "To apply principles and analytical techniques to Digital Principles and System Design problems",
        "To develop problem-solving skills in relevant domains",
        "To analyze complex systems associated with the subject",
        "To design solutions using state-of-the-art methods"
    ],
    "outcomes": [
        {
            "id": "CO1",
            "desc": "Understand the basic concepts and principles."
        },
        {
            "id": "CO2",
            "desc": "Apply theoretical methods to practical scenarios."
        },
        {
            "id": "CO3",
            "desc": "Analyze system performance and behavior."
        },
        {
            "id": "CO4",
            "desc": "Evaluate different implementations and approaches."
        },
        {
            "id": "CO5",
            "desc": "Design simple models or complete systems."
        }
    ],
    "units": [
        {
            "id": 1,
            "title": "Introduction and Basic Concepts",
            "topics": [
                "Definition and scope",
                "Fundamental theories",
                "Basic definitions",
                "Overview of applications"
            ]
        },
        {
            "id": 2,
            "title": "Analysis and Principles",
            "topics": [
                "Analytical methods",
                "Core principles",
                "Mathematical modeling",
                "Key algorithms"
            ]
        },
        {
            "id": 3,
            "title": "Design and Implementation",
            "topics": [
                "Design methodologies",
                "Architecture overview",
                "Implementation steps",
                "Case studies"
            ]
        },
        {
            "id": 4,
            "title": "Advanced Topics",
            "topics": [
                "Complex scenarios",
                "Advanced techniques",
                "Performance evaluation",
                "Optimization"
            ]
        },
        {
            "id": 5,
            "title": "Applications and Future Trends",
            "topics": [
                "Recent advancements",
                "Industry applications",
                "Emerging technologies",
                "Future scope"
            ]
        }
    ]
},
    "ME25C05": {
    "name": "Re-Engineering for Innovation",
    "regulation": "R2025",
    "department": "Common",
    "credits": 3,
    "ltp": "3-0-0",
    "objectives": [
        "To understand the fundamental concepts of Re-Engineering for Innovation",
        "To apply principles and analytical techniques to Re-Engineering for Innovation problems",
        "To develop problem-solving skills in relevant domains",
        "To analyze complex systems associated with the subject",
        "To design solutions using state-of-the-art methods"
    ],
    "outcomes": [
        {
            "id": "CO1",
            "desc": "Understand the basic concepts and principles."
        },
        {
            "id": "CO2",
            "desc": "Apply theoretical methods to practical scenarios."
        },
        {
            "id": "CO3",
            "desc": "Analyze system performance and behavior."
        },
        {
            "id": "CO4",
            "desc": "Evaluate different implementations and approaches."
        },
        {
            "id": "CO5",
            "desc": "Design simple models or complete systems."
        }
    ],
    "units": [
        {
            "id": 1,
            "title": "Introduction and Basic Concepts",
            "topics": [
                "Definition and scope",
                "Fundamental theories",
                "Basic definitions",
                "Overview of applications"
            ]
        },
        {
            "id": 2,
            "title": "Analysis and Principles",
            "topics": [
                "Analytical methods",
                "Core principles",
                "Mathematical modeling",
                "Key algorithms"
            ]
        },
        {
            "id": 3,
            "title": "Design and Implementation",
            "topics": [
                "Design methodologies",
                "Architecture overview",
                "Implementation steps",
                "Case studies"
            ]
        },
        {
            "id": 4,
            "title": "Advanced Topics",
            "topics": [
                "Complex scenarios",
                "Advanced techniques",
                "Performance evaluation",
                "Optimization"
            ]
        },
        {
            "id": 5,
            "title": "Applications and Future Trends",
            "topics": [
                "Recent advancements",
                "Industry applications",
                "Emerging technologies",
                "Future scope"
            ]
        }
    ]
}
};
