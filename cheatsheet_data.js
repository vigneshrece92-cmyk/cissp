// CISSP COMPREHENSIVE INTERACTIVE CHEAT SHEET DATABASE
const CHEATSHEET_TERMS = [
  // ==========================================
  // --- DOMAIN 1: SECURITY & RISK MANAGEMENT ---
  // ==========================================
  {
    title: "CIA Triad",
    domain: 1,
    tags: ["model"],
    formula: "Confidentiality, Integrity, Availability",
    explanation: "The foundational framework of all cybersecurity design. Confidentiality prevents unauthorized disclosure; Integrity prevents unauthorized alteration; Availability ensures reliable and timely access for authorized personnel.",
    exam_context: "Every security decision must balance these three. Choosing the 'most secure' option might violate availability, resulting in a wrong exam choice."
  },
  {
    title: "Risk Appetite vs. Tolerance",
    domain: 1,
    tags: ["model"],
    formula: "Appetite = Strategic Goal | Tolerance = Acceptable Deviation",
    explanation: "Risk Appetite is the high-level amount of risk senior management is willing to accept to pursue strategic objectives. Risk Tolerance is the specific, measurable variation limit allowed around those objectives.",
    exam_context: "Appetite is defined at the board/executive level. Tolerance is applied at the project/operation level (e.g. system downtime tolerance is 4 hours)."
  },
  {
    title: "Due Care vs. Due Diligence",
    domain: 1,
    tags: ["model"],
    formula: "Due Care = Acting responsibly | Due Diligence = Verifying controls",
    explanation: "Due Care is the act of taking reasonable steps to protect an organization's assets (e.g. installing firewalls, locking servers). Due Diligence is the research, investigation, and testing done to verify that the Due Care controls are actually working.",
    exam_context: "Due Diligence is the homework/gathering of proof (e.g., performing a vendor assessment). Due Care is the actual physical action/implementation."
  },
  {
    title: "STRIDE Threat Modeling",
    domain: 1,
    tags: ["model"],
    formula: "Spoofing, Tampering, Repudiation, Info Disclosure, DoS, Elevation of Privilege",
    explanation: "Microsoft's developer threat modeling model. Identifies attacks: Spoofing (identity), Tampering (data alteration), Repudiation (denying action), Information Disclosure (data leak), Denial of Service (availability), and Elevation of Privilege (unauthorized auth).",
    exam_context: "Maps directly to security principles: Spoofing violates Authentication, Tampering violates Integrity, Repudiation violates Non-Repudiation, Information Disclosure violates Confidentiality, DoS violates Availability, Elevation of Privilege violates Authorization."
  },
  {
    title: "Quantitative Risk Assessment",
    domain: 1,
    tags: ["formula"],
    formula: "SLE = AV * EF | ALE = SLE * ARO",
    explanation: "Determines risk exposure in numeric/financial terms. Single Loss Expectancy (SLE) is computed by multiplying Asset Value (AV) by the Exposure Factor (EF). Annualized Loss Expectancy (ALE) is computed by multiplying the SLE by the Annualized Rate of Occurrence (ARO).",
    exam_context: "Used to justify security budgets. Never implement a control that costs more than the ALE of the threat it mitigates."
  },
  {
    title: "ISC2 Code of Ethics Canons",
    domain: 1,
    tags: ["law"],
    formula: "1. Society -> 2. Honor -> 3. Principals -> 4. Profession",
    explanation: "The mandatory ethical code governing all CISSP holders. Resolves conflicts in strict hierarchical order: 1. Protect society, necessary public trust, and infrastructure; 2. Act honorably, honestly, justly, responsibly, and legally; 3. Provide diligent and competent service to principals; 4. Advance and protect the profession.",
    exam_context: "Canon 1 (protecting society/infrastructure) always takes priority over client confidentiality or employer demands."
  },
  {
    title: "GDPR Roles & Breach Notification",
    domain: 1,
    tags: ["law"],
    formula: "Controller = Purposed means | Processor = Handler | Notify = 72 Hours",
    explanation: "The European Union's comprehensive data privacy regulation. The **Data Controller** dictates the purpose and means of data processing. The **Data Processor** acts on behalf of the controller. Breach notifications must occur within 72 hours of discovery.",
    exam_context: "The Controller retains ultimate legal accountability for GDPR compliance, even if the Processor is outsourced."
  },
  {
    title: "NIST Risk Management Framework",
    domain: 1,
    tags: ["law"],
    formula: "Prepare, Categorize, Select, Implement, Assess, Authorize, Monitor",
    explanation: "NIST SP 800-37 RMF. The seven-step lifecycle to manage risk: Prepare (baseline setup), Categorize (sensitivity), Select (controls), Implement (engineering), Assess (testing), Authorize (sign-off by AO), and Monitor (continuous visibility).",
    exam_context: "Authorization is a formal decision made by the **Authorizing Official (AO)** who accepts the remaining residual risk."
  },
  {
    title: "OECD Privacy Principles",
    domain: 1,
    tags: ["law"],
    formula: "Collection Limitation, Data Quality, Purpose Spec, Use Limitation, Safeguards, Openness, Participation, Accountability",
    explanation: "The Organization for Economic Co-operation and Development's guidelines on the Protection of Privacy and Transborder Flows of Personal Data. These form the base framework for modern privacy laws like GDPR and CCPA.",
    exam_context: "Essential principles include Purpose Specification (explaining why you need data before collecting) and Use Limitation (restricting data use to that defined purpose)."
  },
  {
    title: "Wassenaar Arrangement",
    domain: 1,
    tags: ["law"],
    formula: "Dual-use technology export control treaty",
    explanation: "A multilateral treaty on export controls for conventional arms and dual-use goods and technologies. Under Wassenaar, advanced encryption software and military hardware require export authorization before being sent to non-member countries.",
    exam_context: "The arrangement categorizes advanced cybersecurity tools, intrusion software, and encryption technologies as 'dual-use' (military and commercial)."
  },
  {
    title: "ISO/IEC 27001 vs 27002",
    domain: 1,
    tags: ["model"],
    formula: "27001 = Certification (Requirements) | 27002 = Implementation (Guidelines)",
    explanation: "ISO 27001 specifies the formal requirements for establishing, implementing, maintaining, and continually improving an Information Security Management System (ISMS). ISO 27002 provides details and best practice guidelines on implementing the controls outlined in Annex A of 27001.",
    exam_context: "An organization can be certified against ISO/IEC 27001, but NOT certified against ISO/IEC 27002 (which is strictly a reference code of practice)."
  },
  {
    title: "SOC 1 vs SOC 2 vs SOC 3",
    domain: 1,
    tags: ["law"],
    formula: "SOC 1 = Financials | SOC 2 = Security Detail | SOC 3 = Public Summary",
    explanation: "System Organization Control reports. SOC 1 focuses on controls relevant to internal control over financial reporting. SOC 2 evaluates controls related to Security, Availability, Processing Integrity, Confidentiality, and Privacy. SOC 3 is a high-level, public-facing summary report of SOC 2 without detailed audit testing details.",
    exam_context: "SOC 2 Type II is the gold standard for reviewing third-party cloud vendor operations because it tests controls over a 6+ month window."
  },
  {
    title: "PASTA Threat Modeling",
    domain: 1,
    tags: ["model"],
    formula: "Process for Attack Simulation and Threat Analysis (Risk-Centric)",
    explanation: "An attacker-centric, risk-driven threat modeling methodology. Features 7 steps: 1. Define objectives, 2. Define technical scope, 3. Decompose application, 4. Analyze threats, 5. Vulnerability analysis, 6. Attack modeling, 7. Risk analysis & countermeasure selection.",
    exam_context: "PASTA is unique because it integrates business objectives, regulatory requirements, and technical risk directly into the asset modeling process."
  },

  // ==========================================
  // --- DOMAIN 2: ASSET SECURITY ---
  // ==========================================
  {
    title: "Asset Security Roles",
    domain: 2,
    tags: ["model"],
    formula: "Owner = Accountable | Custodian = Responsible | Steward = Quality",
    explanation: "Data Owner defines the business classification, retention requirements, and access rules. Data Custodian configures the server, runs backups, and applies encryption. Data Steward manages database consistency and metadata standards.",
    exam_context: "Owner is a business executive, not IT. Custodian is the IT/sysadmin executing technical instructions."
  },
  {
    title: "Data States & Safeguards",
    domain: 2,
    tags: ["model"],
    formula: "At Rest (AES) | In Transit (TLS/IPsec) | In Use (Memory/TEE)",
    explanation: "Data exists in three states. Rest: stored on disk (secured via encryption). Transit: moving over a network (secured via TLS/IPsec). In Use: active in CPU cache/RAM (secured via Trusted Execution Environments and memory isolation).",
    exam_context: "Encryption at rest does not protect data from packet sniffing during transit. Each state requires distinct controls."
  },
  {
    title: "NIST SP 800-88 Sanitization",
    domain: 2,
    tags: ["law"],
    formula: "Clear (Overwrite) | Purge (CE / Degauss) | Destroy (Shred)",
    explanation: "NIST standards for media sanitization. Clearing overwrites storage blocks for reuse. Purging renders data unrecoverable even in labs (includes Degaussing magnetic media, Cryptographic Erase of encrypted media). Destruction physically shreds or incinerates media.",
    exam_context: "Solid-State Drives (SSDs) cannot be degaussed because they use flash cells, not magnetic platters. They must be physically shredded or cryptographically erased."
  },
  {
    title: "E-Discovery Reference Model (EDRM)",
    domain: 2,
    tags: ["law"],
    formula: "IG -> ID -> Pres -> Coll -> Proc -> Rev -> Anal -> Prod -> Pres",
    explanation: "A framework mapping the stages of electronic discovery (seeking digital evidence for lawsuits). Stages: Information Governance, Identification, Preservation (legal hold), Collection, Processing, Review, Analysis, Production, and Presentation.",
    exam_context: "The Legal Hold is initiated during the **Preservation** stage, instructing the organization to suspend all automated purging/deletion of related data immediately."
  },
  {
    title: "Data Classification (Gov vs Private)",
    domain: 2,
    tags: ["model"],
    formula: "Gov: TS -> S -> C -> U | Private: Confidential -> Private -> Sensitive -> Public",
    explanation: "Government labels: Top Secret (cause grave damage if leaked), Secret (cause serious damage), Confidential (cause damage), Unclassified. Private Sector labels: Confidential/Proprietary (highest value, trade secrets), Private (PII), Sensitive (internal business), Public.",
    exam_context: "Always classify data based on the *impact* of unauthorized disclosure, not the cost of creating it."
  },

  // ==========================================
  // --- DOMAIN 3: SECURITY ARCHITECTURE & ENG ---
  // ==========================================
  {
    title: "Bell-LaPadula Model",
    domain: 3,
    tags: ["model"],
    formula: "No Read Up (Simple) | No Write Down (*-Property)",
    explanation: "A mathematical security model enforcing MAC confidentiality. Simple Security Property prevents reading objects of a higher classification. Star Property (*-Property) prevents writing information down to lower classification levels.",
    exam_context: "Prevents data leaks from high-clearance subjects to low-clearance files. Does not address data integrity."
  },
  {
    title: "Biba Model",
    domain: 3,
    tags: ["model"],
    formula: "No Read Down (Simple) | No Write Up (*-Property)",
    explanation: "A mathematical security model enforcing MAC integrity. Simple Integrity Property prevents reading data from a lower integrity level. Star Integrity Property (*-Property) prevents writing/modifying data at a higher integrity level.",
    exam_context: "Prevents contamination/corruption of higher-integrity data from lower-integrity sources. 'Read down, write up' is blocked."
  },
  {
    title: "Clark-Wilson Model",
    domain: 3,
    tags: ["model"],
    formula: "Access Triple = Subject + Transformation Procedure (TP) + Constrained Data Item (CDI)",
    explanation: "A commercial integrity model ensuring system transactions are formatted. Constrained Data Items (CDIs) can only be modified via authorized Transformation Procedures (TPs). Enforces separation of duties.",
    exam_context: "Enforces integrity through well-formed transactions rather than simple read/write access tables."
  },
  {
    title: "Brewer-Nash (Chinese Wall)",
    domain: 3,
    tags: ["model"],
    formula: "Dynamic conflict of interest segregation",
    explanation: "Enforces conflict-of-interest firewalls dynamically. If a consultant accesses database files of Company A, the model automatically blocks them from accessing database files of Company B (competitor).",
    exam_context: "Access is determined dynamically based on the subject's prior activity, not static clearances."
  },
  {
    title: "Common Criteria (ISO 15408)",
    domain: 3,
    tags: ["law"],
    formula: "TOE = Product | PP = Buyer | ST = Vendor | EAL 1-7",
    explanation: "International evaluation standard for security products. The Target of Evaluation (TOE) is analyzed against a Protection Profile (PP - customer needs) or Security Target (ST - vendor design) to output an Evaluation Assurance Level (EAL). EAL 4 is standard commercial security.",
    exam_context: "EAL ratings represent confidence/assurance in the product's security architecture, not how secure the product makes your environment."
  },
  {
    title: "Advanced Encryption Standard (AES)",
    domain: 3,
    tags: ["cipher"],
    formula: "Symmetric Block Cipher | Keys: 128, 192, 256 bits | Block: 128 bits",
    explanation: "The global symmetric block encryption standard (Rijndael). Replaced DES. Highly secure, fast, and mathematically efficient. Operates on 128-bit blocks of data using key sizes of 128, 192, or 256 bits.",
    exam_context: "Symmetric block size is always 128 bits. Essential for protecting data confidentiality at rest and in transit."
  },
  {
    title: "Diffie-Hellman Key Exchange",
    domain: 3,
    tags: ["cipher"],
    formula: "Asymmetric key establishment algorithm",
    explanation: "Allows two parties to securely generate and establish a shared secret symmetric key over an insecure, public communication channel without pre-sharing keys.",
    exam_context: "Diffie-Hellman does not encrypt data or provide digital signatures; it is strictly a key exchange mechanism."
  },
  {
    title: "Elliptic Curve Cryptography (ECC)",
    domain: 3,
    tags: ["cipher"],
    formula: "Asymmetric cipher based on elliptic curves",
    explanation: "A highly efficient public-key encryption algorithm. Provides the same cryptographic strength as RSA but with significantly smaller keys (e.g. 256-bit ECC key equals 3072-bit RSA key), reducing CPU overhead.",
    exam_context: "Ideal for low-power mobile devices and IoT environments due to low compute requirements."
  },
  {
    title: "Digital Signatures",
    domain: 3,
    tags: ["cipher"],
    formula: "Hash + Private Key Encryption = Non-repudiation",
    explanation: "A mechanism providing integrity, authenticity, and non-repudiation. The sender hashes the message, encrypts the hash with their private key, and sends it. The receiver decrypts the hash using the sender's public key and verifies it against a new hash.",
    exam_context: "Sender encrypts with their **private key** to sign. Receiver decrypts with sender's **public key** to verify."
  },
  {
    title: "PKI Revocation (CRL vs. OCSP)",
    domain: 3,
    tags: ["law"],
    formula: "CRL = Batch File List | OCSP = Real-time Query",
    explanation: "Public Key Infrastructure revocation mechanisms. Certificate Revocation List (CRL) is a periodic file containing a list of revoked certificates. Online Certificate Status Protocol (OCSP) is a real-time HTTP query protocol checking certificate status instantly.",
    exam_context: "OCSP resolves the delay issues associated with CRL updates, providing immediate revocation validation."
  },
  {
    title: "Symmetric Cipher Block Modes",
    domain: 3,
    tags: ["cipher"],
    formula: "ECB = Fast & Insecure | CBC = Chained IV | GCM = Encryption + Authenticated",
    explanation: "Modes of symmetric ciphers. Electronic Code Book (ECB) encrypts each block independently (identical plaintext blocks yield identical ciphertext blocks - leaks patterns). Cipher Block Chaining (CBC) XORs previous ciphertext with current plaintext. Galois/Counter Mode (GCM) provides high-performance authenticated encryption (AEAD).",
    exam_context: "Never use ECB for images or structured data. Use GCM for high speed + integrity verification."
  },
  {
    title: "Salt vs. Pepper (Hashing)",
    domain: 3,
    tags: ["cipher"],
    formula: "Salt = Public + Unique | Pepper = Secret + Shared",
    explanation: "Protections for hashed passwords. A **Salt** is a random value added to a password before hashing, stored in plain text beside the hash to prevent precomputed Rainbow Table attacks. A **Pepper** is a static secret key appended to the password, stored securely (e.g. HSM) outside the database.",
    exam_context: "Salts defeat offline rainbow tables. Peppers block brute-force attempts even if the database is fully dumped."
  },
  {
    title: "Covert Storage vs. Timing Channels",
    domain: 3,
    tags: ["model"],
    formula: "Storage = Modifying field value | Timing = Modifying operational delay",
    explanation: "Covert channels bypass security policy. A **Covert Storage Channel** writes data to a shared resource not designed for communication (e.g. writing bits into unused TCP header fields). A **Covert Timing Channel** conveys information by manipulating system performance or response intervals.",
    exam_context: "Very difficult to detect. Countermeasures include strict protocol validation (for storage) and introducing random query delays (for timing)."
  },
  {
    title: "TPM 2.0 & HSM",
    domain: 3,
    tags: ["cipher"],
    formula: "TPM = Motherboard Cryptochip | HSM = Network cryptoprocessor",
    explanation: "Hardware cryptographic processors. A Trusted Platform Module (TPM) is soldered to the computer motherboard to verify boot integrity and store local drive keys. A Hardware Security Module (HSM) is a high-speed network appliance used to manage enterprise PKI private keys.",
    exam_context: "HSMs are designed with physical tamper-responsiveness (self-destruction of keys) for enterprise transaction servers."
  },

  // ==========================================
  // --- DOMAIN 4: COMMUNICATION & NETWORK ---
  // ==========================================
  {
    title: "OSI Stack Layers",
    domain: 4,
    tags: ["model"],
    formula: "7. App | 6. Pres | 5. Sess | 4. Trans | 3. Net | 2. Data | 1. Phys",
    explanation: "The theoretical network architecture model. Application (Layer 7 - HTTP/DNS), Presentation (Layer 6 - SSL/ASCII), Session (Layer 5 - RPC/SQL), Transport (Layer 4 - TCP/UDP), Network (Layer 3 - IP/ICMP), Data Link (Layer 2 - MAC/Frames), and Physical (Layer 1 - Cabling/Bits).",
    exam_context: "Routing occurs at Layer 3 (packets). Switching and MAC checking occurs at Layer 2 (frames)."
  },
  {
    title: "IPsec AH vs. ESP",
    domain: 4,
    tags: ["model"],
    formula: "AH = Authenticate (No Encrypt) | ESP = Encrypt + Authenticate",
    explanation: "IP security protocols. Authentication Header (AH) provides origin authentication, integrity, and anti-replay (does not encrypt). Encapsulating Security Payload (ESP) provides confidentiality (encryption) along with integrity and authentication.",
    exam_context: "AH cannot pass through NAT gateways because it signs the IP header, causing NAT translation checks to fail."
  },
  {
    title: "IPsec Transport vs. Tunnel Mode",
    domain: 4,
    tags: ["model"],
    formula: "Transport = Payload only | Tunnel = Entire Packet + New Header",
    explanation: "IPsec execution modes. Transport Mode encrypts only the payload; original headers remain readable (used host-to-host). Tunnel Mode encrypts the entire original packet and adds a new outer IP header (used gateway-to-gateway VPNs).",
    exam_context: "Tunnel mode hides original source/destination IP addresses, while Transport mode leaves them exposed."
  },
  {
    title: "DNSSEC",
    domain: 4,
    tags: ["law"],
    formula: "Name resolution authentication standard",
    explanation: "Domain Name System Security Extensions. Uses asymmetric cryptographic signatures to sign DNS records, verifying source authenticity and integrity.",
    exam_context: "DNSSEC prevents cache poisoning and spoofing, but does not encrypt DNS query traffic (no confidentiality)."
  },
  {
    title: "WPA3 Wireless Security",
    domain: 4,
    tags: ["cipher"],
    formula: "GCMP-256 + SAE (Simultaneous Authentication of Equals)",
    explanation: "Replaced WPA2. Uses GCMP-256 encryption. Replaces the vulnerable PSK 4-way handshake with SAE (Dragonfly handshake), which blocks offline dictionary attacks and dictionary brute-force.",
    exam_context: "Provides forward secrecy: even if the password is recovered later, past captured traffic remains encrypted."
  },
  {
    title: "Kerberos Authentication Flow",
    domain: 4,
    tags: ["model"],
    formula: "Client -> AS (TGT) -> TGS (ST) -> Target App Server",
    explanation: "A symmetric key network authentication system. Key components: Key Distribution Center (KDC), Authentication Service (AS), and Ticket Granting Service (TGS). Client authenticates to AS to receive a Ticket Granting Ticket (TGT), then presents TGT to TGS to receive a Service Ticket (ST) for resource access.",
    exam_context: "Symmetric key system dependent on synchronized clocks. If system times drift by >5 minutes, Kerberos tickets fail due to anti-replay timestamp checks."
  },
  {
    title: "SDN (Software-Defined Networking)",
    domain: 4,
    tags: ["model"],
    formula: "Split: Control Plane (Brain) | Data Plane (Pipe)",
    explanation: "An architecture separating the network's control logic (brains) from the underlying routing hardware (muscles). Allows administrators to dynamically configure routing logic programmatically from a single centralized controller.",
    exam_context: "Decouples the Control Plane (Central Controller) from the Data/Forwarding Plane (routers/switches)."
  },
  {
    title: "IPSec IKE Phase 1 vs. Phase 2",
    domain: 4,
    tags: ["model"],
    formula: "Phase 1 = Secure Channel Setup | Phase 2 = Data SA Negotiation",
    explanation: "Internet Key Exchange negotiations. Phase 1 establishes a secure, authenticated channel (ISAKMP SA) between IPSec peers (using Main or Aggressive Mode). Phase 2 uses that channel to negotiate the parameters for protecting payload data (IPSec SA).",
    exam_context: "Phase 1 authenticates the gateways. Phase 2 configures the actual data encryption tunnels."
  },

  // ==========================================
  // --- DOMAIN 5: IDENTITY & ACCESS MGMT ---
  // ==========================================
  {
    title: "Authentication Factors",
    domain: 5,
    tags: ["model"],
    formula: "Know (PIN), Have (Token), Are (Biometric), Do (Keystroke), Location (GPS)",
    explanation: "The five categories used to prove identity. Multiple distinct factors are required for Multi-Factor Authentication (MFA). Using a password and PIN is not MFA because both are 'Something you Know'.",
    exam_context: "MFA requires combining factors from different categories (e.g. smartcard + PIN)."
  },
  {
    title: "SAML 2.0 (SSO)",
    domain: 5,
    tags: ["law"],
    formula: "XML assertions: Subject -> SP -> IdP -> Assertion",
    explanation: "An XML-based federation standard. The **Service Provider (SP)** delegates user authentication to the central **Identity Provider (IdP)**. The IdP authenticates the user and signs an XML assertion certifying the user's identity.",
    exam_context: "Uses digital signatures to verify identity assertions across different company domains."
  },
  {
    title: "OAuth 2.0 vs. OIDC",
    domain: 5,
    tags: ["model"],
    formula: "OAuth = Authorization (Access Token) | OIDC = Identity (ID Token)",
    explanation: "SSO API standards. OAuth 2.0 is an authorization framework allowing applications to access resources on behalf of a user (using Access Tokens). OpenID Connect (OIDC) is an identity layer built on top of OAuth using JWT tokens to authenticate users.",
    exam_context: "OAuth grants permission to perform actions; OIDC certifies who the user is."
  },
  {
    title: "Access Control Enforcements",
    domain: 5,
    tags: ["model"],
    formula: "DAC (Owner) | MAC (Clearance) | RBAC (Role) | ABAC (Context)",
    explanation: "Access methods: Discretionary (DAC - data owner sets permissions), Mandatory (MAC - OS checks clearance vs classification), Role-Based (RBAC - mapped to job role), Attribute-Based (ABAC - uses location/IP/time context).",
    exam_context: "MAC is the most secure (used in military). DAC is highly flexible but vulnerable to user errors."
  },
  {
    title: "Biometric Error Rates (CER)",
    domain: 5,
    tags: ["formula"],
    formula: "CER = Point where FAR = FRR",
    explanation: "Determines accuracy. False Acceptance Rate (FAR - Type II Error) is the rate at which unauthorized subjects are granted access. False Rejection Rate (FRR - Type I Error) is the rate at which valid users are locked out. Crossover Error Rate (CER) is the intersection point.",
    exam_context: "The lower the CER, the more accurate and efficient the biometric scanner system is."
  },

  // ==========================================
  // --- DOMAIN 6: SECURITY ASSESSMENT & TEST ---
  // ==========================================
  {
    title: "SAST vs. DAST",
    domain: 6,
    tags: ["model"],
    formula: "SAST = Static (At Rest) | DAST = Dynamic (Running)",
    explanation: "Code testing methods. Static Application Security Testing (SAST) reviews uncompiled source code or binaries at rest to find syntax issues. Dynamic Application Security Testing (DAST) tests the compiled, active application during runtime.",
    exam_context: "SAST is done early in SDLC (shifted left) and points to exact code lines. DAST is done late and identifies runtime configurations."
  },
  {
    title: "SOC 2 Type I vs. Type II",
    domain: 6,
    tags: ["law"],
    formula: "Type I = Point in Time | Type II = Operational Period (6-12 months)",
    explanation: "System Organization Control audits for security service providers. Type I evaluates if controls are designed correctly at a single point in time. Type II audits design and tests operational effectiveness over a period of time.",
    exam_context: "Type II reports provide actual evidence of control performance over time, making them far more valuable for auditing third-party risk."
  },
  {
    title: "Penetration Testing Phases",
    domain: 6,
    tags: ["model"],
    formula: "Scope -> Recon -> Scan -> Gain Access -> Maintain Access -> Report",
    explanation: "Standard pentesting methodology: 1. Scope definition (rules of engagement), 2. Reconnaissance (passive/active data gathering), 3. Scanning (port/vuln checks), 4. Exploitation (gaining shell/access), 5. Persistence (backdoors), 6. Post-exploitation reporting.",
    exam_context: "The **Rules of Engagement (RoE)** must be formally signed by senior management before any active packets hit the target networks."
  },

  // ==========================================
  // --- DOMAIN 7: SECURITY OPERATIONS ---
  // ==========================================
  {
    title: "Incident Response Steps",
    domain: 7,
    tags: ["model"],
    formula: "Preparation -> Detection -> Containment -> Eradication -> Recovery -> Lessons Learned",
    explanation: "Standard incident handling. Prepare (toolkits/training), Detect (analyse alerts), Contain (isolate infected hosts), Eradicate (clean systems/patch bugs), Recover (rebuild from backups), Lessons Learned (retrospective update).",
    exam_context: "Never jump to containment/isolation without completing detection and verifying the threat first."
  },
  {
    title: "Order of Volatility",
    domain: 7,
    tags: ["formula"],
    formula: "CPU -> RAM -> Network States -> Disk -> Backups",
    explanation: "The priority sequence for collecting digital evidence before it decays or is deleted: 1. CPU Registers and Cache memory, 2. System RAM, 3. Network routing tables and ARP cache, 4. Storage drives, 5. Backups and printouts.",
    exam_context: "Shutting down a computer destroys RAM data; always capture RAM image before powering down."
  },
  {
    title: "Business Impact Analysis (BIA)",
    domain: 7,
    tags: ["formula"],
    formula: "MTD = RTO + WRT | RPO = Max Data Loss Time",
    explanation: "Determines recovery objectives. Maximum Tolerable Downtime (MTD) is the absolute survival ceiling. Recovery Time Objective (RTO) is target system restore time. Work Recovery Time (WRT) is data recovery and sync time. Recovery Point Objective (RPO) is target backup frequency.",
    exam_context: "RTO + WRT must be less than or equal to the MTD."
  },
  {
    title: "DRP Testing Levels",
    domain: 7,
    tags: ["model"],
    formula: "Tabletop -> Walkthrough -> Simulation -> Parallel -> Cutover",
    explanation: "Disaster Recovery testing phases: Tabletop (discussion of plan), Walkthrough (review steps on paper), Simulation (recovery drill without shutoff), Parallel (run standby with production), Cutover (complete production switchover).",
    exam_context: "Cutover tests present the highest operational risk. Parallel tests keep production fully active."
  },
  {
    title: "DRP Site Options",
    domain: 7,
    tags: ["model"],
    formula: "Hot (Minutes) | Warm (Hours/Days) | Cold (Weeks) | Redundant (Real-time)",
    explanation: "Recovery facility profiles. Hot Site: pre-configured hardware, current data copies, ready in minutes. Warm Site: hardware exists but lacks active data sync. Cold Site: power and plumbing only, requires shipping hardware and backups. Redundant: active-active site mirroring live operations.",
    exam_context: "Redundant/Mirror sites have a Recovery Time Objective (RTO) of near zero, but carry the highest maintenance budget."
  },
  {
    title: "RAID Levels & Fault Tolerance",
    domain: 7,
    tags: ["formula"],
    formula: "RAID 0 = Stripe | RAID 1 = Mirror | RAID 5 = Parity | RAID 6 = Dual Parity | RAID 10 = Stripe+Mirror",
    explanation: "Redundant Array of Independent Disks configurations. RAID 0 provides no fault tolerance (strictly speed). RAID 1 mirrors data (tolerates 1 disk loss). RAID 5 uses single parity blocks (tolerates 1 disk loss). RAID 6 uses dual distributed parity blocks (tolerates 2 simultaneous disk losses).",
    exam_context: "RAID protects availability in case of drive failure, but is NOT a substitute for offsite data backups."
  },
  {
    title: "Backup Restoration Types",
    domain: 7,
    tags: ["formula"],
    formula: "Incremental = Changes since last backup | Differential = Changes since last Full backup",
    explanation: "Backup retention and restoration math. Full Backup: archives all data. Incremental Backup: archives changes since *any* previous backup (clears archive bit). Differential Backup: archives changes since the last *Full* backup (does not clear archive bit).",
    exam_context: "Restoring Incremental requires: Full + every single Incremental since then. Restoring Differential requires: Full + only the last Differential."
  },

  // ==========================================
  // --- DOMAIN 8: SOFTWARE DEVELOPMENT SEC ---
  // ==========================================
  {
    title: "SQL Injection Defense",
    domain: 8,
    tags: ["cipher"],
    formula: "Defense = Parameterized Queries / Prepared Statements",
    explanation: "An exploit where attackers insert SQL commands into input fields to query databases directly. Prevented by pre-compiling SQL commands (Prepared Statements), which treats input strictly as data parameters, not code.",
    exam_context: "Input validation is good, but **parameterization (prepared statements)** is the only 100% defense against SQLi."
  },
  {
    title: "Cross-Site Scripting (XSS)",
    domain: 8,
    tags: ["cipher"],
    formula: "Defense = Input Validation + Context-Aware Output Encoding",
    explanation: "Exploit where malicious script code is injected into web pages and executed inside the victim's browser. Mitigated by sanitizing inputs and encoding outputs (output encoding) so ciphers render HTML tags as text.",
    exam_context: "Stored XSS resides in the database. Reflected XSS is parsed from URL queries. DOM-based XSS occurs in client script."
  },
  {
    title: "Cross-Site Request Forgery (CSRF)",
    domain: 8,
    tags: ["cipher"],
    formula: "Defense = Stateful Anti-CSRF Tokens",
    explanation: "Forces a logged-in victim's browser to send unsolicited HTTP requests to a target web app. Prevented by requiring a unique, secret, stateful cryptographic token with every form transaction.",
    exam_context: "CSRF exploits the target app's trust in the victim's active session/cookies."
  },
  {
    title: "SDLC Development Models",
    domain: 8,
    tags: ["model"],
    formula: "Waterfall (Linear) | Agile (Iterative) | Spiral (Risk-centric)",
    explanation: "Software Development Life Cycle approaches. Waterfall progresses sequentially through fixed phases. Agile uses short iterations called Sprints. Spiral uses cyclic, prototype iterations focusing heavily on risk analysis at each cycle.",
    exam_context: "Spiral is the model to select when project parameters carry high technical risk and require constant prototypes."
  },
  {
    title: "CMMI Maturity Levels",
    domain: 8,
    tags: ["model"],
    formula: "1. Initial -> 2. Managed -> 3. Defined -> 4. Quant. Managed -> 5. Optimizing",
    explanation: "Capability Maturity Model Integration levels: 1. Initial (chaotic, ad-hoc), 2. Managed (repeatable processes), 3. Defined (standardized documented processes), 4. Quantitatively Managed (measured processes), 5. Optimizing (continuous improvement focus).",
    exam_context: "Level 3 is where organization-wide standards are established. Level 4 introduces statistics/metrics."
  },
  {
    title: "Software Escrow",
    domain: 8,
    tags: ["law"],
    formula: "Third-party custody of product source code",
    explanation: "A legal agreement where a software developer deposits application source code with a trusted third-party escrow agent. If the software developer goes out of business or fails to support the product, the customer receives the source code to maintain it themselves.",
    exam_context: "Protects business continuity when acquiring critical proprietary software from small third-party vendors."
  },
  {
    title: "Threat vs Vulnerability vs Risk",
    domain: 1,
    tags: ["model"],
    formula: "Risk = Threat \u00d7 Vulnerability \u00d7 Asset Value",
    explanation: "A Threat is any potential danger (e.g. a hacker). A Vulnerability is a weakness that can be exploited (e.g. unpatched software). Risk is the likelihood and impact of a threat exploiting a vulnerability against an asset.",
    exam_context: "ISC2 defines Risk = Threat \u00d7 Vulnerability. Remove either the threat or the vulnerability and the risk drops to zero."
  },
  {
    title: "BCP vs DRP",
    domain: 1,
    tags: ["process"],
    formula: "BCP = Continuing operations | DRP = Restoring IT systems",
    explanation: "Business Continuity Planning (BCP) focuses on keeping critical business functions running during a disaster. Disaster Recovery Planning (DRP) is the subset of BCP focused specifically on recovering IT infrastructure, systems, and data after a disruption.",
    exam_context: "BCP is the broader plan; DRP is nested inside BCP. BCP = keep business alive. DRP = restore technology."
  },
  {
    title: "RTO, RPO, MTD",
    domain: 1,
    tags: ["formula"],
    formula: "MTD \u2265 RTO | RPO = max data loss window",
    explanation: "Recovery Time Objective (RTO) is the maximum acceptable downtime before operations must be restored. Recovery Point Objective (RPO) is the maximum acceptable data loss measured in time (e.g. last backup). Maximum Tolerable Downtime (MTD) is the absolute outer limit before business survival is at risk. RTO must always be less than or equal to MTD.",
    exam_context: "If MTD = 24 hours and RTO = 36 hours, the recovery plan is INVALID. Always verify RTO < MTD."
  },
  {
    title: "Qualitative vs Quantitative Risk",
    domain: 1,
    tags: ["model"],
    formula: "Qualitative = Subjective (High/Med/Low) | Quantitative = Financial ($ALE)",
    explanation: "Qualitative risk analysis uses expert judgment and subjective scales (High/Medium/Low). Quantitative risk analysis uses numerical values and financial metrics (SLE, ALE, ARO). Most organizations use a hybrid approach.",
    exam_context: "Quantitative requires MORE data and effort but gives actionable financial justification. Qualitative is faster but less precise."
  },
  {
    title: "Security Governance vs Management",
    domain: 1,
    tags: ["model"],
    formula: "Governance = Strategic direction (Board) | Management = Operations (CISO)",
    explanation: "Governance provides the strategic policies and oversight from the Board of Directors and C-suite. Management is the tactical execution of those policies by the CISO and security operations team.",
    exam_context: "Board approves Risk Appetite. CISO implements controls. Never mix governance authority with operational management responsibilities."
  },
  {
    title: "Data Roles: Owner, Custodian, Processor",
    domain: 2,
    tags: ["model"],
    formula: "Owner = Accountability | Custodian = Day-to-day | Processor = Acts on behalf",
    explanation: "Data Owner: business executive who has accountability and classification authority. Data Custodian: IT/system administrator who implements controls defined by the owner. Data Processor (GDPR): third-party entity that processes data on behalf of the Controller.",
    exam_context: "The Owner classifies data and accepts liability. The Custodian implements but does NOT own the data. Confusing these on the exam is a common trap."
  },
  {
    title: "Data Classification Levels",
    domain: 2,
    tags: ["model"],
    formula: "Gov: Top Secret > Secret > Confidential > Unclassified | Corp: Confidential > Private > Sensitive > Public",
    explanation: "Government uses: Top Secret (grave damage), Secret (serious damage), Confidential (damage), Unclassified. Commercial equivalents: Confidential/Proprietary, Private (PII), Sensitive (internal only), Public.",
    exam_context: "Classification is the Data Owner's responsibility, not IT. Data must be classified before controls can be applied."
  },
  {
    title: "Data Remanence & Sanitization",
    domain: 2,
    tags: ["process"],
    formula: "Clearing < Purging < Destruction | Degaussing works on magnetic ONLY",
    explanation: "Data remanence is residual data left after deletion. Clearing: overwriting for reuse within the same organization. Purging (e.g. degaussing, cryptographic erase): removes data before releasing media externally. Destruction: shredding, incineration \u2014 media cannot be reused.",
    exam_context: "Degaussing is INEFFECTIVE on SSDs/flash media. Use Cryptographic Erase for SSDs (encrypt then discard the key). NIST SP 800-88 is the authoritative reference."
  },
  {
    title: "Scoping vs Tailoring",
    domain: 2,
    tags: ["process"],
    formula: "Scoping = Remove inapplicable controls | Tailoring = Modify controls to fit needs",
    explanation: "Scoping eliminates controls from a baseline that do not apply to a system (e.g. removing physical controls for a cloud-only system). Tailoring adjusts or supplements controls to better fit the environment's specific requirements.",
    exam_context: "Both happen AFTER selecting a baseline security control set (e.g. NIST 800-53 Moderate). Scoping removes; Tailoring adapts."
  },
  {
    title: "Retention & Legal Hold",
    domain: 2,
    tags: ["law"],
    formula: "Legal Hold = Suspend routine destruction | Retention = Minimum storage period",
    explanation: "Data retention defines minimum periods to keep records (e.g. 7 years for financial records under SOX). A Legal Hold (or Litigation Hold) is a directive to suspend normal data destruction schedules when litigation is anticipated or pending.",
    exam_context: "Destroying data subject to a Legal Hold can result in criminal charges (spoliation of evidence). Always check for holds before executing any deletion process."
  },
  {
    title: "Clark-Wilson Integrity Model",
    domain: 3,
    tags: ["model"],
    formula: "CDI + IVP + TP + UVP = Integrity enforcement",
    explanation: "Clark-Wilson uses: Constrained Data Items (CDIs - protected data), Unconstrained Data Items (UDIs - user input), Integrity Verification Procedures (IVPs - validate CDI integrity), and Transformation Procedures (TPs - the only legitimate way to modify CDIs). Enforces separation of duties and well-formed transactions.",
    exam_context: "Clark-Wilson is the commercial integrity model (finance/banking). Biba is the military integrity model. Clark-Wilson requires subjects to access data ONLY through TPs."
  },
  {
    title: "Graham-Denning Model",
    domain: 3,
    tags: ["model"],
    formula: "8 Rules for safe creation, deletion and access rights of subjects/objects",
    explanation: "Defines 8 protection rights: Create object, Create subject, Delete object, Delete subject, Read access right, Grant access right, Delete access right, Transfer access right. Focuses on how subjects and objects are created and how rights are transferred safely.",
    exam_context: "Less common on exam but distinguishable from Bell-LaPadula (confidentiality) and Biba (integrity) \u2014 Graham-Denning is about access right management."
  },
  {
    title: "Kerckhoffs's Principle",
    domain: 3,
    tags: ["cipher"],
    formula: "A cryptosystem should be secure even if everything about it except the KEY is public knowledge",
    explanation: "Kerckhoffs's Principle states that the security of a cryptographic system must rest entirely on the secrecy of the key, not on the secrecy of the algorithm. Modern crypto (AES, RSA) is open-source and peer-reviewed \u2014 the algorithm is public, only the key is secret.",
    exam_context: "Security through obscurity (hiding the algorithm) is a design antipattern. The exam tests whether you understand that open-source algorithms are STRONGER because they are publicly vetted."
  },
  {
    title: "Trusted Computing Base (TCB)",
    domain: 3,
    tags: ["model"],
    formula: "TCB = All hardware + firmware + software that enforces the security policy",
    explanation: "The Trusted Computing Base is the totality of all protection mechanisms in a computer system \u2014 hardware, firmware, and software \u2014 whose correct functioning is critical to enforcing the security policy. A smaller TCB = fewer components to audit = more trustworthy.",
    exam_context: "The Reference Monitor is the abstract concept; the Security Kernel is its implementation within the TCB. TCB must be tamper-proof, verifiable, and always invoked."
  },
  {
    title: "Side-Channel Attacks",
    domain: 3,
    tags: ["attack"],
    formula: "Timing | Power Analysis | Electromagnetic | Acoustic | Cache",
    explanation: "Side-channel attacks exploit physical implementation characteristics rather than algorithmic weaknesses. Types: Timing (measure execution time), Power Analysis (measure power consumption to infer key bits), Electromagnetic (capture EM emissions), Acoustic (microphone picks up CPU sounds), Cache (observe cache access patterns).",
    exam_context: "These attacks bypass cryptographic strength entirely. Countermeasures include constant-time algorithms, noise injection, and hardware shielding."
  },
  {
    title: "Key Exchange: Diffie-Hellman",
    domain: 3,
    tags: ["cipher"],
    formula: "g^a mod p (Alice) + g^b mod p (Bob) \u2192 shared secret g^ab mod p",
    explanation: "Diffie-Hellman allows two parties to establish a shared secret key over an insecure channel without any prior shared secret. Both parties agree on public values g and p. Each generates a private key (a, b) and exchanges public keys. The shared secret is derived independently.",
    exam_context: "DH solves the key distribution problem but is vulnerable to Man-in-the-Middle attacks unless authenticated. ECDH (Elliptic Curve DH) provides same security with shorter keys."
  },
  {
    title: "OSI Model \u2014 All 7 Layers",
    domain: 4,
    tags: ["model"],
    formula: "Please Do Not Throw Sausage Pizza Away \u2192 Physical, Data Link, Network, Transport, Session, Presentation, Application",
    explanation: "Layer 1 Physical (bits/cables), Layer 2 Data Link (frames/MAC/switches), Layer 3 Network (packets/IP/routers), Layer 4 Transport (segments/TCP-UDP), Layer 5 Session (connections/NetBIOS), Layer 6 Presentation (encryption/compression/format), Layer 7 Application (HTTP/DNS/SMTP).",
    exam_context: "Firewalls operate at L3-L4. WAFs at L7. Switches at L2. VLANs are L2. IPsec operates at L3. TLS operates between L4-L7."
  },
  {
    title: "DKIM, SPF, DMARC",
    domain: 4,
    tags: ["protocol", "defense"],
    formula: "SPF = IP whitelist | DKIM = Cryptographic signature | DMARC = Policy enforcement",
    explanation: "SPF (Sender Policy Framework): DNS TXT record listing authorized IPs for sending email. DKIM (Domain Keys Identified Mail): cryptographically signs the email header/body using a private key. DMARC (Domain-based Message Authentication, Reporting and Conformance): policy that specifies what to do when SPF/DKIM fail (none/quarantine/reject).",
    exam_context: "All three are DNS-based email anti-spoofing controls. DMARC requires both SPF AND DKIM to be configured \u2014 it orchestrates both."
  },
  {
    title: "VPN Protocols Comparison",
    domain: 4,
    tags: ["protocol"],
    formula: "IPsec (L3) | SSL/TLS VPN (L7) | WireGuard (modern) | L2TP (deprecated alone)",
    explanation: "IPsec VPN: strong, works at network layer (L3), supports Tunnel and Transport modes. SSL/TLS VPN: works at application layer (L7), easier to deploy through firewalls (port 443). L2TP/IPsec: combines L2TP tunneling with IPsec encryption. WireGuard: modern, fast, minimal codebase.",
    exam_context: "IPsec ESP provides encryption and authentication; AH provides only authentication. For site-to-site VPNs, IPsec Tunnel Mode with ESP is the standard."
  },
  {
    title: "Wireless Security Protocols",
    domain: 4,
    tags: ["protocol"],
    formula: "WEP (broken) \u2192 WPA \u2192 WPA2 (CCMP/AES) \u2192 WPA3 (SAE/GCMP-256)",
    explanation: "WEP: deprecated, uses RC4 with weak IVs \u2014 easily broken. WPA: transitional, TKIP encryption. WPA2: uses CCMP (AES-128) \u2014 current enterprise standard. WPA3: uses SAE (Simultaneous Authentication of Equals) replacing PSK handshake, protects against offline dictionary attacks.",
    exam_context: "WEP is NEVER the right answer. WPA3 is the strongest. WPA2-Enterprise uses 802.1X/EAP with RADIUS for individual authentication, superior to WPA2-Personal (PSK)."
  },
  {
    title: "Authentication Factors (MFA)",
    domain: 5,
    tags: ["model"],
    formula: "Type 1 = Something you KNOW | Type 2 = Something you HAVE | Type 3 = Something you ARE",
    explanation: "Type 1 (Knowledge): password, PIN, passphrase. Type 2 (Possession): smart card, OTP token, mobile app. Type 3 (Inherence): fingerprint, retina, voice recognition. MFA requires at least two DIFFERENT types. Adding a second password is NOT MFA.",
    exam_context: "Using a PIN + fingerprint = MFA (Type 1 + Type 3). Using password + security question = NOT MFA (both are Type 1). Somewhere-you-are and Something-you-do are additional contextual factors."
  },
  {
    title: "LDAP vs RADIUS vs TACACS+",
    domain: 5,
    tags: ["protocol"],
    formula: "LDAP = Directory queries | RADIUS = AAA (UDP) | TACACS+ = AAA (TCP, full encryption)",
    explanation: "LDAP: queries directory services (Active Directory) for user info \u2014 port 389 (636 for LDAPS). RADIUS: Authentication, Authorization, Accounting using UDP \u2014 encrypts only the password field. TACACS+: Cisco proprietary, uses TCP, encrypts the ENTIRE payload, separates Authentication/Authorization/Accounting independently.",
    exam_context: "For network device administration (routers/switches), prefer TACACS+ (full encryption, separate A/A/A). For remote user access, RADIUS is standard."
  },
  {
    title: "SAML vs OAuth vs OIDC",
    domain: 5,
    tags: ["protocol"],
    formula: "SAML = XML SSO assertions | OAuth = Authorization delegation | OIDC = Authentication layer on OAuth",
    explanation: "SAML 2.0: XML-based federated SSO, ideal for enterprise B2B. OAuth 2.0: authorization framework \u2014 grants third-party apps limited access to user resources WITHOUT sharing credentials. OpenID Connect (OIDC): identity layer built on top of OAuth 2.0, adds authentication.",
    exam_context: "'Login with Google' uses OIDC. Sharing your Google contacts with a third-party app uses OAuth. Enterprise SSO between orgs uses SAML."
  },
  {
    title: "Privileged Access Management (PAM)",
    domain: 5,
    tags: ["defense"],
    formula: "Just-in-Time (JIT) + Session Recording + Vault + Least Privilege",
    explanation: "PAM controls and monitors access by privileged accounts (admins, service accounts). Key components: Password Vaulting (store and rotate admin credentials), Session Recording (full audit of privileged sessions), Just-in-Time (JIT) access (grant elevated rights only when needed, for limited time).",
    exam_context: "PAM is the #1 control against insider threat and credential theft. After a breach, attackers seek privileged accounts \u2014 PAM limits the blast radius."
  },
  {
    title: "MAC vs DAC vs RBAC vs ABAC",
    domain: 5,
    tags: ["model"],
    formula: "MAC=Labels|DAC=Owner decides|RBAC=Role|ABAC=Attributes",
    explanation: "MAC (Mandatory): system enforces access via security labels \u2014 used in military/high-security. DAC (Discretionary): resource owner grants access \u2014 most OS file systems. RBAC (Role-Based): access based on job role \u2014 most enterprise applications. ABAC (Attribute-Based): access based on multiple attributes (user, resource, environment) \u2014 most flexible.",
    exam_context: "MAC is most secure (no user discretion). DAC is least secure (users can share freely). RBAC is best for principle of least privilege in enterprises. ABAC is best for complex dynamic environments."
  },
  {
    title: "Penetration Testing Phases",
    domain: 6,
    tags: ["process"],
    formula: "Recon \u2192 Scanning \u2192 Exploitation \u2192 Post-Exploitation \u2192 Reporting",
    explanation: "Reconnaissance: passive/active info gathering. Scanning: identify open ports, services, vulnerabilities. Exploitation: leverage vulnerabilities to gain access. Post-Exploitation: escalate privileges, pivot, maintain persistence. Reporting: document findings with evidence and remediation recommendations.",
    exam_context: "Always obtain WRITTEN authorization (Rules of Engagement) before testing. Unauthorized testing \u2014 even against your own infrastructure \u2014 may violate computer crime laws."
  },
  {
    title: "White Box vs Grey Box vs Black Box",
    domain: 6,
    tags: ["process"],
    formula: "White = Full knowledge | Grey = Partial | Black = Zero knowledge",
    explanation: "White Box (Crystal Box): tester has full access to source code, architecture diagrams, credentials. Grey Box: tester has partial info (e.g. knows the application type but not the code). Black Box: tester has no prior knowledge \u2014 simulates an external attacker.",
    exam_context: "White Box finds the most vulnerabilities (most efficient). Black Box best simulates real-world attacker. Most real engagements use Grey Box for balance of thoroughness and realism."
  },
  {
    title: "Vulnerability vs Patch Management",
    domain: 6,
    tags: ["process"],
    formula: "Scan \u2192 Prioritize (CVSS) \u2192 Test patch \u2192 Deploy \u2192 Verify",
    explanation: "Vulnerability management is a continuous cycle of scanning, prioritizing by severity (CVSS score), testing patches in a non-production environment, deploying patches, and verifying remediation. Emergency patches for critical CVSS 9.0+ vulnerabilities may require accelerated timelines.",
    exam_context: "CVSS Base Score: 0.0=None, 0.1-3.9=Low, 4.0-6.9=Medium, 7.0-8.9=High, 9.0-10.0=Critical. Prioritize Critical first."
  },
  {
    title: "SIEM and Log Management",
    domain: 6,
    tags: ["tool"],
    formula: "Collect \u2192 Normalize \u2192 Correlate \u2192 Alert \u2192 Investigate",
    explanation: "Security Information and Event Management (SIEM) aggregates logs from multiple sources (firewalls, IDS, endpoints), normalizes formats, correlates events using rules to detect patterns, and generates alerts. Enables incident detection, compliance reporting, and forensic investigation.",
    exam_context: "SIEM is detective, not preventive. Must configure log retention to meet compliance requirements (often 1 year online, 7 years archive). Log integrity is critical \u2014 use write-once log storage."
  },
  {
    title: "CVE, CVSS, CWE, CPE",
    domain: 6,
    tags: ["tool"],
    formula: "CVE=Instance | CVSS=Score | CWE=Type | CPE=Platform",
    explanation: "CVE (Common Vulnerabilities and Exposures): unique identifier for a specific vulnerability instance. CVSS (Common Vulnerability Scoring System): numeric severity score 0-10. CWE (Common Weakness Enumeration): categorizes vulnerability types (e.g. CWE-89=SQLi). CPE (Common Platform Enumeration): standardized naming for hardware/software.",
    exam_context: "CVE-2021-44228 = specific Log4Shell instance. CWE-79 = Cross-Site Scripting (the TYPE). Always patch CVEs with highest CVSS score first."
  },
  {
    title: "Chain of Custody",
    domain: 7,
    tags: ["process"],
    formula: "Document every person who handled evidence + when + what was done",
    explanation: "Chain of Custody is the documented record of all individuals who collected, handled, transferred, or analyzed digital evidence. Each transfer must be logged and evidence must remain in a sealed, tamper-evident container. Breaks in chain of custody can make evidence inadmissible in court.",
    exam_context: "Forensic examiners work only on forensic COPIES, never on original evidence. Hashing (MD5/SHA-256) proves evidence integrity."
  },
  {
    title: "Incident Response Phases (NIST)",
    domain: 7,
    tags: ["process"],
    formula: "Preparation \u2192 Detection \u2192 Containment \u2192 Eradication \u2192 Recovery \u2192 Lessons Learned",
    explanation: "NIST SP 800-61 defines 4 main phases: 1. Preparation (policies, tools, team), 2. Detection & Analysis (identify incident scope), 3. Containment/Eradication/Recovery (stop, remove, restore), 4. Post-Incident Activity (lessons learned).",
    exam_context: "Containment comes BEFORE eradication. Never eradicate before containing \u2014 the attacker may still be active. CIRT = Computer Incident Response Team."
  },
  {
    title: "MTBF, MTTR, MTTF",
    domain: 7,
    tags: ["formula"],
    formula: "MTBF = MTTF + MTTR | Availability = MTBF / (MTBF + MTTR)",
    explanation: "Mean Time Between Failures (MTBF): average time a system operates between failures \u2014 measures reliability. Mean Time To Repair (MTTR): average time to fix a failed system \u2014 measures maintainability. Mean Time To Failure (MTTF): used for non-repairable components.",
    exam_context: "Higher MTBF = more reliable. Lower MTTR = faster recovery. Availability = MTBF / (MTBF + MTTR) \u2014 this formula appears on exams."
  },
  {
    title: "OWASP Top 10 (2021)",
    domain: 8,
    tags: ["attack"],
    formula: "A01:BrokenAccess A02:Crypto A03:Injection A04:InsecureDesign A05:Misconfig A06:VulnComp A07:AuthFail A08:Integrity A09:Logging A10:SSRF",
    explanation: "OWASP 2021: A01 Broken Access Control (was #5), A02 Cryptographic Failures (was Sensitive Data Exposure), A03 Injection (SQLi, LDAP, OS), A04 Insecure Design (NEW), A05 Security Misconfiguration, A06 Vulnerable Components, A07 ID & Auth Failures, A08 Software & Data Integrity Failures (NEW - includes insecure deserialization), A09 Logging Failures, A10 SSRF (NEW).",
    exam_context: "Broken Access Control moved to #1. The 2021 list added SSRF and Insecure Design as standalone categories. Know the top 5 cold."
  },
  {
    title: "DevSecOps & Shift Left",
    domain: 8,
    tags: ["process"],
    formula: "Security integrated at EVERY phase \u2014 not just at the end",
    explanation: "DevSecOps integrates security practices into the DevOps pipeline. 'Shift Left' means moving security testing earlier in the SDLC \u2014 to requirements and design phases \u2014 rather than at the end (right). Includes SAST in CI/CD pipelines, dependency scanning (SCA), IaC security scanning, and security gates before deployment.",
    exam_context: "Cost to fix bugs increases exponentially as you move right in the SDLC. A design flaw costs 100x more to fix post-deployment than in requirements."
  },
  {
    title: "Input Validation & Defense-in-Depth",
    domain: 8,
    tags: ["defense"],
    formula: "Allowlist > Denylist | Server-side > Client-side | Validate + Sanitize + Encode",
    explanation: "Input validation prevents injection attacks by ensuring only acceptable data reaches the application. Allowlisting (only permit known-good input) is always stronger than denylisting (block known-bad). Validation must happen server-side \u2014 client-side validation is easily bypassed. Encode output to prevent XSS.",
    exam_context: "The correct order: Validate (check format) \u2192 Sanitize (strip dangerous chars) \u2192 Parameterize (use prepared statements for DB). Never rely on client-side validation alone."
  },
];
