// Question Data
const questionsData = {
    oops: {
        title: "Object-Oriented Programming",
        description: "Master OOP concepts including inheritance, polymorphism, and encapsulation",
        questions: [
            { id: "oops_1", question: "What is Object-Oriented Programming?", answer: "Object-Oriented Programming (OOP) is a programming paradigm based on the concept of 'objects', which can contain data in the form of fields (attributes or properties) and code in the form of procedures (methods). OOP focuses on organizing software design around data, or objects, rather than functions and logic.\n\nKey principles include:\n1. Encapsulation: Bundling data and methods that operate on that data within a single unit\n2. Abstraction: Hiding complex implementation details and showing only necessary features\n3. Inheritance: Creating new classes based on existing classes\n4. Polymorphism: Ability of objects to take on multiple forms" },
            { id: "oops_2", question: "What is a Class and Object?", answer: "A Class is a blueprint or template for creating objects. It defines the properties (attributes) and behaviors (methods) that objects of that class will have.\n\nAn Object is an instance of a class. It is a concrete entity based on the class definition that occupies memory and has actual values for its attributes.\n\nExample:\n- Class: Car (blueprint)\n- Objects: Toyota Camry, Honda Civic (specific instances)\n\nA class defines what a car should have (color, model, speed), while objects are actual cars with specific values (red color, Camry model, 120 mph speed)." },
            { id: "oops_3", question: "What is Encapsulation?", answer: "Encapsulation is the bundling of data (attributes) and methods (functions) that operate on that data within a single unit (class), and restricting direct access to some of the object's components.\n\nKey aspects:\n1. Data Hiding: Internal state is hidden from outside access\n2. Access Modifiers: Public, private, protected control visibility\n3. Getters/Setters: Controlled access to private data\n\nBenefits:\n- Protects data integrity\n- Reduces complexity\n- Increases flexibility and maintainability\n- Allows changing internal implementation without affecting external code" },
            { id: "oops_4", question: "What is Inheritance?", answer: "Inheritance is a mechanism where a new class (child/derived class) inherits properties and behaviors from an existing class (parent/base class). It promotes code reusability and establishes a hierarchical relationship between classes.\n\nTypes of Inheritance:\n1. Single: Child inherits from one parent\n2. Multiple: Child inherits from multiple parents\n3. Multilevel: Chain of inheritance (A→B→C)\n4. Hierarchical: Multiple children inherit from one parent\n5. Hybrid: Combination of multiple types\n\nBenefits:\n- Code reusability\n- Method overriding\n- Establishing IS-A relationship" },
            { id: "oops_5", question: "What is Polymorphism?", answer: "Polymorphism means 'many forms' and allows objects of different classes to be treated as objects of a common parent class. It enables a single interface to represent different underlying forms (data types).\n\nTypes:\n1. Compile-time (Static) Polymorphism:\n   - Method Overloading: Same method name, different parameters\n   - Operator Overloading: Same operator, different behaviors\n\n2. Runtime (Dynamic) Polymorphism:\n   - Method Overriding: Child class provides specific implementation of parent class method\n\nBenefits:\n- Flexibility and extensibility\n- Code reusability\n- Loose coupling" },
            { id: "oops_6", question: "What is Abstraction?", answer: "Abstraction is the process of hiding implementation details and showing only essential features of an object. It focuses on what an object does rather than how it does it.\n\nImplementation:\n1. Abstract Classes: Cannot be instantiated, may contain abstract and concrete methods\n2. Interfaces: Define contracts that implementing classes must follow\n\nExample: A TV remote provides buttons (abstract interface) without exposing internal circuits (hidden implementation).\n\nBenefits:\n- Reduces complexity\n- Increases security\n- Enhances code maintainability\n- Allows focusing on high-level functionality" },
            { id: "oops_7", question: "What is the difference between Abstract Class and Interface?", answer: "Abstract Class:\n- Can have both abstract and concrete methods\n- Can have constructors\n- Can have member variables with any access modifier\n- Supports single inheritance\n- Use when: Classes share common code and have IS-A relationship\n\nInterface:\n- All methods are abstract (before Java 8)\n- Cannot have constructors\n- Variables are public, static, final by default\n- Supports multiple inheritance\n- Use when: Define contracts, achieve multiple inheritance, unrelated classes need same functionality\n\nKey Difference: Abstract classes represent 'what it is', interfaces represent 'what it can do'." },
            { id: "oops_8", question: "What is Method Overloading and Overriding?", answer: "Method Overloading (Compile-time Polymorphism):\n- Same method name, different parameters (number, type, or order)\n- Occurs within the same class\n- Return type may or may not be different\n- Resolved at compile time\n\nMethod Overriding (Runtime Polymorphism):\n- Same method signature in parent and child class\n- Child class provides specific implementation\n- Return type must be same or covariant\n- Requires inheritance\n- Resolved at runtime\n\nKey Difference: Overloading is about multiple methods with same name, overriding is about replacing parent's method implementation." },
            { id: "oops_9", question: "What are Access Modifiers?", answer: "Access Modifiers control the visibility and accessibility of classes, methods, and variables.\n\nTypes:\n1. Public: Accessible from anywhere\n2. Private: Accessible only within the same class\n3. Protected: Accessible within package and by subclasses\n4. Default (Package-private): Accessible only within the same package\n\nPurpose:\n- Enforce encapsulation\n- Control access to class members\n- Implement data hiding\n- Define clear interfaces\n\nBest Practice: Use the most restrictive access level that makes sense." },
            { id: "oops_10", question: "What is Constructor and its types?", answer: "A Constructor is a special method called when an object is instantiated. It initializes the object's state and has the same name as the class with no return type.\n\nTypes:\n1. Default Constructor: No parameters, created automatically if no constructor is defined\n2. Parameterized Constructor: Accepts parameters to initialize object with specific values\n3. Copy Constructor: Creates object by copying another object of the same class\n\nCharacteristics:\n- Same name as class\n- No return type\n- Called automatically during object creation\n- Can be overloaded\n- Cannot be inherited or overridden" }
        ]
    },

    sql: {
        title: "SQL Database",
        description: "Learn SQL queries, joins, indexes, and database optimization",
        questions: [
            { id: "sql_1", question: "What is SQL and its types?", answer: "SQL (Structured Query Language) is a standard language for managing and manipulating relational databases.\n\nTypes of SQL Commands:\n1. DDL (Data Definition Language): CREATE, ALTER, DROP, TRUNCATE - Define database structure\n2. DML (Data Manipulation Language): SELECT, INSERT, UPDATE, DELETE - Manipulate data\n3. DCL (Data Control Language): GRANT, REVOKE - Control access permissions\n4. TCL (Transaction Control Language): COMMIT, ROLLBACK, SAVEPOINT - Manage transactions\n\nSQL is declarative (specify what to retrieve, not how) and works with relational database management systems like MySQL, PostgreSQL, Oracle, SQL Server." },
            
            { id: "sql_2", question: "What are SQL Joins?", answer: "SQL Joins combine rows from two or more tables based on related columns.\n\nTypes:\n1. INNER JOIN: Returns matching rows from both tables\n2. LEFT JOIN (LEFT OUTER JOIN): All rows from left table + matching from right\n3. RIGHT JOIN (RIGHT OUTER JOIN): All rows from right table + matching from left\n4. FULL JOIN (FULL OUTER JOIN): All rows from both tables\n5. CROSS JOIN: Cartesian product of both tables\n6. SELF JOIN: Table joined with itself\n\nSyntax: SELECT * FROM table1 INNER JOIN table2 ON table1.id = table2.id\n\nUse cases: Retrieve related data from multiple tables based on relationships." },

            { id: "sql_3", question: "What is Primary Key and Foreign Key?", answer: "Primary Key:\n- Uniquely identifies each record in a table\n- Cannot contain NULL values\n- Each table can have only one primary key\n- Can consist of single or multiple columns (composite key)\n- Automatically creates a clustered index\n\nForeign Key:\n- Links two tables together\n- References primary key of another table\n- Enforces referential integrity\n- Can contain NULL values\n- Multiple foreign keys allowed in a table\n\nRelationship: Foreign key in child table references primary key in parent table, establishing relationships and maintaining data consistency." },

            { id: "sql_4", question: "What is Normalization?", answer: "Normalization is the process of organizing data in a database to reduce redundancy and improve data integrity.\n\nNormal Forms:\n1. 1NF (First Normal Form): Eliminate repeating groups, atomic values\n2. 2NF (Second Normal Form): 1NF + Remove partial dependencies\n3. 3NF (Third Normal Form): 2NF + Remove transitive dependencies\n4. BCNF (Boyce-Codd Normal Form): Stricter version of 3NF\n5. 4NF (Fourth Normal Form): Remove multi-valued dependencies\n6. 5NF (Fifth Normal Form): Remove join dependencies\n\nBenefits: Reduces redundancy, prevents anomalies (insertion, update, deletion), improves data consistency." },

            { id: "sql_5", question: "What are Indexes?", answer: "An Index is a database object that improves the speed of data retrieval operations on a table at the cost of additional storage and slower writes.\n\nTypes:\n1. Clustered Index: Determines physical order of data, one per table\n2. Non-Clusterhed Index: Separate structure from data, multiple allowed\n3. Unique Index: Ensures uniqueness of values\n4. Composite Index: Index on multiple columns\n\nBenefits:\n- Faster SELECT queries\n- Efficient sorting and filtering\n\nDrawbacks:\n- Slower INSERT, UPDATE, DELETE\n- Additional storage space\n\nBest Practice: Index columns used in WHERE, JOIN, ORDER BY clauses." },

            { id: "sql_6", question: "What is the difference between DELETE, TRUNCATE, and DROP?", answer: "DELETE:\n- Removes specific rows based on WHERE condition\n- Can be rolled back (if in transaction)\n- Slower, logs individual row deletions\n- Triggers are fired\n- Identity counter not reset\n\nTRUNCATE:\n- Removes all rows from table\n- Cannot be rolled back (in most databases)\n- Faster, minimal logging\n- Triggers not fired\n- Resets identity counter\n- Cannot use WHERE clause\n\nDROP:\n- Removes entire table structure and data\n- Cannot be rolled back\n- Frees storage space completely\n- All indexes, constraints, triggers removed" },

            { id: "sql_7", question: "What are Stored Procedures and Functions?", answer: "Stored Procedure:\n- Precompiled SQL statements stored in database\n- Can have input and output parameters\n- Can return multiple values\n- Can contain DML statements\n- Cannot be used in SELECT statement\n- Does not require RETURN statement\n\nFunction:\n- Returns a single value\n- Can only have input parameters\n- Must return a value\n- Cannot contain DML statements (in most cases)\n- Can be used in SELECT statements\n- Requires RETURN statement\n\nBenefits: Reusability, better performance, security, reduced network traffic." },

            { id: "sql_8", question: "What are Triggers?", answer: "A Trigger is a special type of stored procedure that automatically executes when specific events occur in the database.\n\nTypes:\n1. DML Triggers: Fired on INSERT, UPDATE, DELETE\n   - BEFORE trigger: Executes before the event\n   - AFTER trigger: Executes after the event\n   - INSTEAD OF trigger: Replaces the triggering action\n\n2. DDL Triggers: Fired on CREATE, ALTER, DROP\n\n3. Logon Triggers: Fired on user logon events\n\nUse Cases:\n- Audit logging\n- Data validation\n- Maintaining referential integrity\n- Automatic calculations\n- Enforcing business rules" },

            { id: "sql_9", question: "What is a Transaction and ACID properties?", answer: "A Transaction is a sequence of database operations treated as a single unit of work that must be completed entirely or not at all.\n\nACID Properties:\n1. Atomicity: All or nothing - transaction completely succeeds or fails\n2. Consistency: Database remains in valid state before and after transaction\n3. Isolation: Concurrent transactions don't interfere with each other\n4. Durability: Committed changes are permanent, survive system failures\n\nTransaction Commands:\n- BEGIN/START TRANSACTION: Start transaction\n- COMMIT: Save changes permanently\n- ROLLBACK: Undo changes\n- SAVEPOINT: Create checkpoint within transaction" },

            { id: "sql_10", question: "What are Views?", answer: "A View is a virtual table based on the result of a SELECT query. It doesn't store data itself but presents data from one or more tables.\n\nTypes:\n1. Simple View: Based on single table, allows DML operations\n2. Complex View: Based on multiple tables or contains functions/group by\n3. Materialized View: Stores query results physically for performance\n\nBenefits:\n- Simplifies complex queries\n- Provides data security (hide sensitive columns)\n- Presents consistent interface\n- Logical data independence\n\nSyntax: CREATE VIEW view_name AS SELECT columns FROM table WHERE condition\n\nViews are updated when underlying tables change." }
        ]
    },

    networking: {
        title: "Computer Networking",
        description: "Understand protocols, OSI model, TCP/IP, and network security",
        questions: [
            { id: "net_1", question: "What is Computer Networking?", answer: "Computer Networking is the practice of connecting computers and devices to share resources, data, and applications. It enables communication between devices through various transmission media.\n\nKey Components:\n1. Nodes: Devices like computers, servers, routers\n2. Links: Physical or wireless connections\n3. Protocols: Rules governing communication\n4. Topology: Physical or logical arrangement\n\nTypes:\n- LAN (Local Area Network): Small geographic area\n- WAN (Wide Area Network): Large geographic area\n- MAN (Metropolitan Area Network): City-wide\n- PAN (Personal Area Network): Individual workspace" },

            { id: "net_2", question: "What is the OSI Model?", answer: "The OSI (Open Systems Interconnection) Model is a conceptual framework with 7 layers that standardizes network communication.\n\nLayers (Top to Bottom):\n7. Application: User interface, HTTP, FTP, SMTP\n6. Presentation: Data formatting, encryption, compression\n5. Session: Establishes, manages, terminates connections\n4. Transport: End-to-end delivery, TCP, UDP\n3. Network: Routing, IP addressing\n2. Data Link: Frame transmission, MAC addressing, switches\n1. Physical: Physical transmission, cables, signals\n\nEach layer serves the layer above and is served by the layer below." },

            { id: "net_3", question: "What is TCP/IP Model?", answer: "TCP/IP (Transmission Control Protocol/Internet Protocol) is a practical 4-layer model used in the internet.\n\nLayers:\n4. Application: Combines OSI layers 5-7, protocols like HTTP, FTP, DNS\n3. Transport: TCP (reliable) and UDP (fast, unreliable)\n2. Internet: IP addressing, routing, ICMP, ARP\n1. Network Access: Combines OSI layers 1-2, physical transmission\n\nDifferences from OSI:\n- Fewer layers (4 vs 7)\n- More practical and widely implemented\n- Developed before OSI\n- OSI is theoretical, TCP/IP is practical\n\nTCP/IP is the foundation of internet communication." },

            { id: "net_4", question: "What is the difference between TCP and UDP?", answer: "TCP (Transmission Control Protocol):\n- Connection-oriented\n- Reliable delivery guaranteed\n- Ordered data delivery\n- Error checking and recovery\n- Slower due to overhead\n- Flow control and congestion control\n- Use cases: Web, email, file transfer\n\nUDP (User Datagram Protocol):\n- Connectionless\n- No delivery guarantee\n- No ordering of data\n- Minimal error checking\n- Faster, lower overhead\n- No flow control\n- Use cases: Video streaming, gaming, DNS, VoIP\n\nKey Difference: TCP prioritizes reliability, UDP prioritizes speed." },

            { id: "net_5", question: "What is an IP Address?", answer: "An IP (Internet Protocol) Address is a unique numerical identifier assigned to each device on a network.\n\nIPv4:\n- 32-bit address (e.g., 192.168.1.1)\n- 4 billion possible addresses\n- Format: xxx.xxx.xxx.xxx (0-255)\n\nIPv6:\n- 128-bit address\n- Vast number of addresses\n- Format: xxxx:xxxx:xxxx:xxxx:xxxx:xxxx:xxxx:xxxx\n\nTypes:\n- Public IP: Internet-facing, globally unique\n- Private IP: Internal network, reusable\n- Static IP: Permanently assigned\n- Dynamic IP: Temporarily assigned (DHCP)\n\nClasses: A (large networks), B (medium), C (small)" },

            { id: "net_6", question: "What is DNS?", answer: "DNS (Domain Name System) is the internet's phonebook that translates human-readable domain names into IP addresses.\n\nProcess:\n1. User enters domain (www.example.com)\n2. DNS query sent to DNS resolver\n3. Resolver queries root server\n4. Root directs to TLD server (.com)\n5. TLD directs to authoritative nameserver\n6. Returns IP address to resolver\n7. Browser connects to IP address\n\nDNS Record Types:\n- A: Maps domain to IPv4\n- AAAA: Maps domain to IPv6\n- CNAME: Alias of another domain\n- MX: Mail exchange servers\n- TXT: Text information\n\nDNS caching improves performance." },

            { id: "net_7", question: "What is a Subnet Mask?", answer: "A Subnet Mask divides an IP address into network and host portions, defining which part identifies the network and which identifies the device.\n\nFormat: 255.255.255.0 (decimal) or /24 (CIDR notation)\n\nPurpose:\n- Divides large networks into smaller subnetworks\n- Improves network performance and security\n- Efficient IP address allocation\n- Reduces broadcast traffic\n\nExample:\nIP: 192.168.1.100\nSubnet: 255.255.255.0\nNetwork: 192.168.1.0\nHost: 100\n\nCommon Masks:\n- Class A: 255.0.0.0 (/8)\n- Class B: 255.255.0.0 (/16)\n- Class C: 255.255.255.0 (/24)" },

            { id: "net_8", question: "What is a Router and Switch?", answer: "Router:\n- Layer 3 (Network Layer) device\n- Connects different networks\n- Routes data between networks using IP addresses\n- Provides NAT, firewall capabilities\n- Determines best path for data\n- Connects LAN to WAN/Internet\n\nSwitch:\n- Layer 2 (Data Link Layer) device\n- Connects devices within same network\n- Forwards data using MAC addresses\n- Creates separate collision domains\n- Faster than hub, more efficient\n- Learns and stores MAC addresses\n\nKey Difference: Router connects networks, switch connects devices within a network." },

            { id: "net_9", question: "What are Network Protocols?", answer: "Network Protocols are standardized rules that govern data communication between devices.\n\nCommon Protocols:\n1. HTTP/HTTPS: Web page transfer (port 80/443)\n2. FTP: File transfer (port 21)\n3. SMTP: Email sending (port 25)\n4. POP3/IMAP: Email receiving (port 110/143)\n5. DNS: Domain name resolution (port 53)\n6. DHCP: Dynamic IP assignment (port 67/68)\n7. SSH: Secure remote access (port 22)\n8. Telnet: Unsecure remote access (port 23)\n9. ICMP: Network diagnostics (ping)\n10. ARP: Maps IP to MAC address\n\nProtocols ensure devices from different manufacturers can communicate." },

            { id: "net_10", question: "What is Network Security?", answer: "Network Security protects network infrastructure and data from unauthorized access, misuse, and threats.\n\nKey Components:\n1. Firewall: Monitors and controls network traffic\n2. VPN: Secure encrypted connections\n3. IDS/IPS: Intrusion Detection/Prevention Systems\n4. Antivirus/Antimalware: Threat detection\n5. Authentication: User verification (passwords, MFA)\n6. Encryption: Data protection (SSL/TLS)\n7. Access Control: Permission management\n\nThreats:\n- Malware, viruses, ransomware\n- Phishing, social engineering\n- DDoS attacks\n- Man-in-the-middle attacks\n- Unauthorized access\n\nBest Practices: Regular updates, strong passwords, network segmentation, monitoring." }
        ]
    },

    cloud: {
        title: "Cloud Computing",
        description: "Explore cloud services, AWS, Azure, and cloud architecture",
        questions: [
            { id: "cloud_1", question: "What is Cloud Computing?", answer: "Cloud Computing is the delivery of computing services (servers, storage, databases, networking, software) over the internet ('the cloud') on a pay-as-you-go basis.\n\nKey Characteristics:\n1. On-demand self-service\n2. Broad network access\n3. Resource pooling\n4. Rapid elasticity\n5. Measured service\n\nBenefits:\n- Cost savings (no hardware investment)\n- Scalability and flexibility\n- Accessibility from anywhere\n- Disaster recovery\n- Automatic updates\n- Reduced maintenance\n\nMajor Providers: AWS, Microsoft Azure, Google Cloud Platform" },

            { id: "cloud_2", question: "What are Cloud Service Models?", answer: "Cloud Service Models define the level of control and responsibility:\n\n1. IaaS (Infrastructure as a Service):\n   - Provides: Virtualized computing resources\n   - Examples: AWS EC2, Azure VMs\n   - Control: OS, applications, middleware\n   - Use case: Full control over infrastructure\n\n2. PaaS (Platform as a Service):\n   - Provides: Development platform and tools\n   - Examples: Heroku, Google App Engine\n   - Control: Applications and data\n   - Use case: Application development without infrastructure management\n\n3. SaaS (Software as a Service):\n   - Provides: Complete software applications\n   - Examples: Gmail, Salesforce, Office 365\n   - Control: Only application data\n   - Use case: Ready-to-use applications" },

            { id: "cloud_3", question: "What are Cloud Deployment Models?", answer: "Cloud Deployment Models define where and how cloud services are deployed:\n\n1. Public Cloud:\n   - Owned by third-party provider\n   - Shared infrastructure\n   - Most cost-effective\n   - Examples: AWS, Azure, GCP\n\n2. Private Cloud:\n   - Dedicated to single organization\n   - On-premises or hosted\n   - More control and security\n   - Higher cost\n\n3. Hybrid Cloud:\n   - Combination of public and private\n   - Data and applications shared between them\n   - Flexibility and optimization\n\n4. Multi-Cloud:\n   - Uses multiple cloud providers\n   - Avoid vendor lock-in\n   - Best services from each provider" },

            { id: "cloud_4", question: "What is AWS?", answer: "AWS (Amazon Web Services) is the world's most comprehensive cloud platform with over 200 services.\n\nCore Services:\n1. Compute: EC2 (virtual servers), Lambda (serverless)\n2. Storage: S3 (object storage), EBS (block storage)\n3. Database: RDS (relational), DynamoDB (NoSQL)\n4. Networking: VPC, Route 53, CloudFront (CDN)\n5. Security: IAM, KMS, Shield\n\nKey Features:\n- Global infrastructure (regions and availability zones)\n- Pay-as-you-go pricing\n- High availability and scalability\n- Extensive service portfolio\n- Market leader in cloud computing\n\nPopular Services: EC2, S3, RDS, Lambda, CloudFront, IAM" },

            { id: "cloud_5", question: "What is Virtualization?", answer: "Virtualization creates virtual versions of computing resources (servers, storage, networks) on a single physical system.\n\nTypes:\n1. Server Virtualization: Multiple virtual servers on one physical server\n2. Storage Virtualization: Pooling physical storage from multiple devices\n3. Network Virtualization: Combining hardware and software network resources\n4. Desktop Virtualization: Remote desktop environments\n\nHypervisor Types:\n- Type 1 (Bare Metal): Runs directly on hardware (VMware ESXi, Hyper-V)\n- Type 2 (Hosted): Runs on host OS (VirtualBox, VMware Workstation)\n\nBenefits: Resource optimization, cost reduction, easier management, isolation, disaster recovery" },

            { id: "cloud_6", question: "What is Auto Scaling?", answer: "Auto Scaling automatically adjusts computing resources based on demand to maintain performance and optimize costs.\n\nHow it Works:\n1. Define scaling policies and thresholds\n2. Monitor metrics (CPU, memory, network)\n3. Scale out (add instances) when demand increases\n4. Scale in (remove instances) when demand decreases\n\nTypes:\n- Horizontal Scaling: Add/remove instances\n- Vertical Scaling: Increase/decrease instance size\n\nScaling Policies:\n1. Target Tracking: Maintain specific metric\n2. Step Scaling: Scale based on alarm thresholds\n3. Scheduled Scaling: Scale at specific times\n\nBenefits: Cost optimization, high availability, automatic response to demand" },

            { id: "cloud_7", question: "What is a Load Balancer?", answer: "A Load Balancer distributes incoming network traffic across multiple servers to ensure no single server is overwhelmed.\n\nTypes:\n1. Application Load Balancer (Layer 7): HTTP/HTTPS traffic, content-based routing\n2. Network Load Balancer (Layer 4): TCP/UDP traffic, ultra-high performance\n3. Classic Load Balancer: Legacy, basic load balancing\n\nAlgorithms:\n- Round Robin: Sequential distribution\n- Least Connections: Route to server with fewest connections\n- IP Hash: Based on client IP\n- Weighted: Based on server capacity\n\nBenefits: High availability, scalability, fault tolerance, improved performance" },

            { id: "cloud_8", question: "What is CDN (Content Delivery Network)?", answer: "CDN is a geographically distributed network of servers that delivers content to users from the nearest server location.\n\nHow it Works:\n1. Content cached at edge locations worldwide\n2. User request routed to nearest edge server\n3. Content served from cache (faster)\n4. If not cached, retrieved from origin server\n\nExamples:\n- AWS CloudFront\n- Cloudflare\n- Akamai\n- Google Cloud CDN\n\nBenefits:\n- Faster content delivery\n- Reduced latency\n- Lower bandwidth costs\n- Better availability\n- DDoS protection\n\nUse Cases: Websites, video streaming, software downloads, gaming" },

            { id: "cloud_9", question: "What is Serverless Computing?", answer: "Serverless Computing allows running code without managing servers. The cloud provider automatically handles infrastructure.\n\nKey Services:\n- AWS Lambda\n- Azure Functions\n- Google Cloud Functions\n\nCharacteristics:\n1. No server management\n2. Pay only for execution time\n3. Automatic scaling\n4. Event-driven execution\n5. Stateless functions\n\nBenefits:\n- Zero administration\n- Cost-effective (pay per use)\n- Automatic scaling\n- Faster time to market\n\nUse Cases: API backends, data processing, scheduled tasks, real-time file processing, IoT\n\nLimitations: Cold starts, execution time limits, vendor lock-in" },

            { id: "cloud_10", question: "What is Cloud Security?", answer: "Cloud Security protects cloud-based systems, data, and infrastructure from threats and vulnerabilities.\n\nShared Responsibility Model:\n- Cloud Provider: Security OF the cloud (physical infrastructure, networking)\n- Customer: Security IN the cloud (data, applications, access control)\n\nKey Components:\n1. Identity and Access Management (IAM)\n2. Data encryption (at rest and in transit)\n3. Network security (VPC, security groups, firewalls)\n4. Compliance and governance\n5. Monitoring and logging\n6. Backup and disaster recovery\n\nBest Practices:\n- Principle of least privilege\n- Multi-factor authentication\n- Regular security audits\n- Data encryption\n- Network segmentation\n- Continuous monitoring\n- Incident response plan" }
        ]
    }
};

// --------------------------------
// State Management
// --------------------------------
let currentSection = null;
let currentFilter = 'all';
let isDarkTheme = false;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initializeTheme();
    setupEventListeners();
});

// --------------------------------
// Theme Management
// --------------------------------
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        enableDarkTheme();
    }
}

function enableDarkTheme() {
    document.body.classList.add('dark-theme');
    isDarkTheme = true;
    document.querySelector('.sun-icon').style.display = 'none';
    document.querySelector('.moon-icon').style.display = 'block';
    localStorage.setItem('theme', 'dark');
}

function disableDarkTheme() {
    document.body.classList.remove('dark-theme');
    isDarkTheme = false;
    document.querySelector('.sun-icon').style.display = 'block';
    document.querySelector('.moon-icon').style.display = 'none';
    localStorage.setItem('theme', 'light');
}

// --------------------------------
// Event Listeners
// --------------------------------
function setupEventListeners() {

    document.getElementById('themeToggle').addEventListener('click', () => {
        if (isDarkTheme) disableDarkTheme();
        else enableDarkTheme();
    });

    document.querySelectorAll('.section-card').forEach(card => {
        card.addEventListener('click', (e) => {
            const sectionId = e.currentTarget.dataset.section;
            showSection(sectionId);
        });
    });

    document.getElementById('backBtn').addEventListener('click', showHome);
    document.getElementById('filterBtn').addEventListener('click', toggleFilter);
}

// --------------------------------
// Navigation
// --------------------------------
function showSection(sectionId) {
    currentSection = sectionId;
    currentFilter = 'all';

    document.getElementById('homeView').style.display = 'none';
    document.getElementById('sectionView').style.display = 'block';
    document.getElementById('backBtn').style.display = 'block';
    document.getElementById('filterBtn').style.display = 'flex';

    renderSection();
}

// <<< YOUR INCOMPLETE PART — NOW COMPLETED >>>

function showHome() {
    document.getElementById('homeView').style.display = 'block';
    document.getElementById('sectionView').style.display = 'none';
    document.getElementById('backBtn').style.display = 'none';
    document.getElementById('filterBtn').style.display = 'none';
    currentSection = null;
}

// --------------------------------
// Rendering
// --------------------------------
function renderSection() {
    const section = questionsData[currentSection];

    document.getElementById('sectionTitle').textContent = section.title;
    document.getElementById('sectionDescription').textContent = section.description;

    renderQuestions();
}

function renderQuestions() {
    const container = document.getElementById('questionsContainer');
    container.innerHTML = '';

    const questions = questionsData[currentSection].questions;

    questions.forEach((q, idx) => {
        const card = document.createElement('div');
        card.className = 'question-card';

        card.innerHTML = `
            <div class="question-header">
                <div class="question-controls">
                    <div class="question-number">${idx + 1}</div>
                </div>

                <div class="question-content">
                    <div class="question-title-row">
                        <div class="question-text">${q.question}</div>
                    </div>
                    <button class="toggle-answer-btn">Show answer</button>
                    <div class="answer-content" style="display:none;">${q.answer}</div>
                </div>
            </div>
        `;

        // toggle answer
        const btn = card.querySelector(".toggle-answer-btn");
        const ans = card.querySelector(".answer-content");

        btn.addEventListener("click", () => {
            if (ans.style.display === "none") {
                ans.style.display = "block";
                btn.textContent = "Hide answer";
            } else {
                ans.style.display = "none";
                btn.textContent = "Show answer";
            }
        });

        container.appendChild(card);
    });
}

// --------------------------------
// Filter Handler (Simple)
// --------------------------------
function toggleFilter() {
    alert("Filter button clicked, but simple version has no mark feature.");
}
