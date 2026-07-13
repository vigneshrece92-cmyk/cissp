// Immediate Theme Initializer to prevent visual flash
(function() {
  const savedTheme = localStorage.getItem("cissp_theme") || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);
})();

// =================================================================
// CISSP PRO PREP PORTAL - CORE APPLICATION LOGIC
// =================================================================

// 1. DATA DATABASE: EXTREMELY DETAILED STUDY GUIDE FOR ALL 8 DOMAINS
const DOMAIN_GUIDES = {
  1: {
    title: "Domain 1: Security and Risk Management",
    html: `
      <h4>1. The CIA Triad & Dad Triad</h4>
      <p>The core objective of security is protecting three fundamental principles, which are mirrored by their opposing vulnerabilities (the DAD Triad):</p>
      <ul>
        <li><strong>Confidentiality (vs. Disclosure):</strong> Restricting access to authorized users. Threats include shoulder surfing, packet sniffing, and social engineering. Mitigated via: AES/RSA encryption, access control lists (ACLs), data masking, and classification.</li>
        <li><strong>Integrity (vs. Alteration):</strong> Preventing unauthorized modification of data to ensure accuracy. Threats include data alteration, SQL injection, and system tampering. Mitigated via: Hashing (SHA-256), digital signatures, configuration management, and audit trails.</li>
        <li><strong>Availability (vs. Destruction):</strong> Ensuring authorized users have timely and reliable access to assets. Threats include DDoS, hardware failures, power outages, and ransomware. Mitigated via: Redundant power grids, RAID array storage, clustering, backups, and load balancers.</li>
      </ul>
      <p><strong>IAAA Security Model:</strong>
        <br>&bull; <em>Identification:</em> Claiming an identity (e.g. typing username).
        <br>&bull; <em>Authentication:</em> Proving identity (e.g. entering password).
        <br>&bull; <em>Authorization:</em> Granting permissions (e.g. read/write rights).
        <br>&bull; <em>Accountability:</em> Audit trails tracking actions back to a unique user ID.
      </p>

      <h4>2. Security Governance & Policy Hierarchy</h4>
      <ul>
        <li><strong>Security Governance:</strong> Directed by senior executives (Board of Directors). Sets the security strategy, policies, and aligns security goals directly with business objectives. Frameworks include COBIT (for IT governance) and ISO 27001 (information security systems).</li>
        <li><strong>Policies:</strong> High-level, management-approved directives outlining security goals. Mandates compliance but lacks technical details.</li>
        <li><strong>Standards:</strong> Mandatory technical rules or hardware/software baselines (e.g. all laptops must run BitLocker encryption).</li>
        <li><strong>Baselines:</strong> The minimum acceptable security levels across systems.</li>
        <li><strong>Guidelines:</strong> Recommended practices or advice. Optional/discretionary rather than mandatory.</li>
        <li><strong>Procedures:</strong> Step-by-step instructions for operators to execute specific tasks (like adding a user account).</li>
      </ul>

      <h4>3. Quantitative Risk Analysis & Equations</h4>
      <p>Quantitative analysis uses numeric, actuarial data to determine exact financial exposure:</p>
      <ul>
        <li><strong>Asset Value (AV):</strong> The replacement cost or business value of an asset ($).</li>
        <li><strong>Exposure Factor (EF):</strong> The percentage of asset value lost during a successful exploit (%).</li>
        <li><strong>Single Loss Expectancy (SLE):</strong> The cost of a single occurrence.
          <br><span class="formula-box">SLE = AV &times; EF</span>
        </li>
        <li><strong>Annualized Rate of Occurrence (ARO):</strong> Number of times an incident is expected per year.</li>
        <li><strong>Annualized Loss Expectancy (ALE):</strong> Total expected financial loss per year.
          <br><span class="formula-box">ALE = SLE &times; ARO</span>
        </li>
      </ul>
      <p><strong>Risk Responses:</strong>
        <br>&bull; <em>Mitigation:</em> Applying controls (like firewalls) to reduce risk to acceptable levels.
        <br>&bull; <em>Transference:</em> Purchasing cyber insurance or outsourcing operations to a third party.
        <br>&bull; <em>Avoidance:</em> Shutting down the project or removing the risk-prone function completely.
        <br>&bull; <em>Acceptance:</em> Accepting residual risk with formal sign-off when control costs exceed the ALE.
      </p>

      <h4>4. Security Controls & Types</h4>
      <p>Security controls are classified into three categories:</p>
      <ul>
        <li><strong>Administrative (Managerial):</strong> Policies, standards, procedures, training, and background checks.</li>
        <li><strong>Technical (Logical):</strong> Firewalls, encryption, authentication protocols, and IDS/IPS.</li>
        <li><strong>Physical:</strong> Fences, guards, locks, CCTV, and mantraps.</li>
      </ul>
      <p>Controls function in different modes:</p>
      <ul>
        <li><strong>Preventative:</strong> Blocks security incidents from occurring (e.g. locks, firewalls, encryption).</li>
        <li><strong>Detective:</strong> Uncovers and alerts on incidents as they occur (e.g. logs, motion sensors, IDS).</li>
        <li><strong>Corrective:</strong> Restores systems back to clean state after incident (e.g. backups, patches, antivirus cleanups).</li>
        <li><strong>Compensating:</strong> Alternative controls introduced when primary controls are too costly or technically impossible.</li>
      </ul>

      <h4>5. Personnel Security Controls</h4>
      <ul>
        <li><strong>Job Rotation:</strong> Periodically moving employees to different roles. Minimizes collusion and helps uncover fraud or anomalous behavior.</li>
        <li><strong>Separation of Duties (SoD):</strong> Splitting a sensitive task among multiple people (e.g. developer cannot push code directly to production). Prevents fraud by requiring collusion.</li>
        <li><strong>Mandatory Vacations:</strong> Forcing employees to take consecutive days off. Uncovers fraudulent actions that require continuous daily cover.</li>
      </ul>

      <h4>6. Threat Modeling & Sharing</h4>
      <ul>
        <li><strong>STRIDE (Microsoft):</strong> Spoofing (IAM), Tampering (Integrity), Repudiation (Non-repudiation), Information Disclosure (Confidentiality), Denial of Service (Availability), Elevation of Privilege (Authorization).</li>
        <li><strong>Threat Intelligence:</strong> Classified into **Strategic** (high-level trends/geopolitics), **Operational** (actors' TTPs), **Tactical** (technical IoCs), and **Technical** (feeds).</li>
        <li><strong>Sharing Standards:</strong> **STIX** (Structured Threat Information eXpression - XML/JSON format) and **TAXII** (Trusted Automated eXchange of Indicator Information - transport protocol).</li>
      </ul>

      <h4>7. Third-Party & Supply Chain Risk Management</h4>
      <ul>
        <li><strong>NDA (Non-Disclosure Agreement):</strong> Legal contract protecting sensitive information from disclosure.</li>
        <li><strong>SLA (Service Level Agreement):</strong> Contract detailing service performance metrics (e.g. 99.9% availability).</li>
        <li><strong>MOU (Memorandum of Understanding):</strong> Preliminary agreement of intent between organizations.</li>
        <li><strong>ISA (Interconnection Security Agreement):</strong> Defines technical requirements for connecting systems together.</li>
        <li><strong>Supply Chain Security (SCRM):</strong> Mitigates hardware tampering. Includes **TPM** (Trusted Platform Module - motherboard cryptographic chip), **HSM** (Hardware Security Module - secure key vault), and **UEFI Secure Boot** (ensures only signed drivers load).</li>
      </ul>

      <h4>8. Intellectual Property (IP) & International Treaties</h4>
      <ul>
        <li><strong>Patents:</strong> Protects inventions for **20 years** (must be novel, useful, and non-obvious).</li>
        <li><strong>Copyrights:</strong> Protects original expressions/works of authorship (e.g. code, music) for **life of author + 70 years** (or 95 years for corporate works).</li>
        <li><strong>Trademarks:</strong> Protects brand names, logos, slogans.</li>
        <li><strong>Trade Secrets:</strong> Protects proprietary business formulas or recipes (must take reasonable steps to maintain secrecy).</li>
        <li><strong>Wassenaar Arrangement:</strong> Multilateral treaty controlling the export of dual-use technologies (including high-strength cryptography).</li>
        <li><strong>OECD Privacy Principles:</strong> 8 core principles (Collection Limitation, Data Quality, Purpose Specification, Use Limitation, Security Safeguards, Openness, Individual Participation, Accountability).</li>
      </ul>

      <h4>9. Regulatory Frameworks</h4>
      <ul>
        <li><strong>GDPR:</strong> EU privacy law. Data Controller (determines purpose/means) must monitor Data Processors (handles data on behalf). Enforces the **Right to be Forgotten** (data erasure) and requires breach notification within **72 hours**.</li>
        <li><strong>HIPAA:</strong> US law protecting medical records (PHI). Mandates Administrative, Physical, and Technical safeguards.</li>
        <li><strong>ISC2 Code of Professional Ethics:</strong> Four canons resolved in strict priority order:
          <br>1. Protect society, the common good, public trust, and infrastructure.
          <br>2. Act honorably, honestly, justly, responsibly, and legally.
          <br>3. Provide diligent and competent service to principals.
          <br>4. Advance and protect the profession.
        </li>
      </ul>

      <div class="tip-box" style="background: rgba(14, 165, 233, 0.08); border-left: 4px solid var(--accent); padding: 15px; border-radius: 4px; margin-top: 20px;">
        <h5 style="margin-top: 0; color: var(--accent);"><i class="fa-solid fa-lightbulb"></i> Exam Traps & Revision Strategy (Adapted from Coach Manoj Sharma)</h5>
        <p style="font-size: 13px; line-height: 1.6; margin: 0 0 10px 0;"><strong>Exam Trap:</strong> Technical candidates often select the "most secure" firewall/patch solution. ISC2 expects you to select the "most appropriate" business action. Risk management is about balancing cost and business enablement. <strong>Think like a CISO, not a firewall administrator!</strong></p>
        <p style="font-size: 13px; line-height: 1.6; margin: 0;"><strong>Revision Focus:</strong> Know the four risk responses cold. Be ready to calculate ALE/SLE and prioritize Canons of Ethics in order (society is always Canon 1).</p>
      </div>
    `
  },
  2: {
    title: "Domain 2: Asset Security",
    html: `
      <h4>1. The Data Classification Lifecycle</h4>
      <p>Data must be protected systematically throughout its entire lifespan:</p>
      <ol>
        <li><strong>Creation:</strong> Generating new data. First classification label is applied.</li>
        <li><strong>Classification:</strong> Categorizing data based on business value, sensitivity, and legal requirements.</li>
        <li><strong>Storage:</strong> Encryption at rest (AES-256) and access controls are applied.</li>
        <li><strong>Usage:</strong> Active processing in memory. Protected via TEEs and memory controls.</li>
        <li><strong>Archive:</strong> Stored securely long-term. Governed by retention periods.</li>
        <li><strong>Destruction:</strong> Disposing of assets securely.</li>
      </ol>

      <h4>2. Classification Labels</h4>
      <ul>
        <li><strong>Military/Government:</strong> Top Secret (unauthorized disclosure causes grave damage to national security), Secret (causes serious damage), Confidential (causes damage), and Unclassified.</li>
        <li><strong>Commercial/Private:</strong> Proprietary/Confidential (trade secrets, intellectual property), Private (contains PII), Sensitive (internal business records), and Public (available to anyone).</li>
      </ul>

      <h4>3. Asset Security Roles</h4>
      <ul>
        <li><strong>Data Owner:</strong> Ultimately accountable for the asset. Usually a business executive. They define data classification labels, approve access lists, determine retention periods, and decide on asset retirement.</li>
        <li><strong>Data Custodian:</strong> Hands-on technical administrator. Responsible for implementing the controls dictated by the owner (configuring firewalls, taking backups, and setting up encryption).</li>
        <li><strong>Data Steward:</strong> Handles business metadata, ensuring data consistency and regulatory compliance in data lake entries.</li>
        <li><strong>User:</strong> Anyone who accesses the data. Obligated to follow AUP (Acceptable Use Policy) guidelines.</li>
      </ul>

      <h4>4. Privacy & Data States</h4>
      <ul>
        <li><strong>PII (Personally Identifiable Information):</strong> Any data that can link back to a unique person (SSN, name, fingerprints).</li>
        <li><strong>PHI (Protected Health Information):</strong> Health records and insurance data protected by HIPAA.</li>
        <li><strong>Data States:</strong>
          <br>&bull; <em>Data at Rest:</em> Stored on disk (protected via AES-256, BitLocker, Full Disk Encryption).
          <br>&bull; <em>Data in Transit (Motion):</em> Traversing a network (protected via TLS, IPsec VPNs, HTTPS).
          <br>&bull; <em>Data in Use:</em> Loaded in RAM/CPU cache (protected via isolated processes, memory masking, and **Trusted Execution Environments** like Intel SGX).
        </li>
      </ul>

      <h4>5. Legal & E-Discovery Frameworks</h4>
      <ul>
        <li><strong>EU-US Data Privacy Framework:</strong> Replaced the struck-down Privacy Shield. Enforces privacy principles for transatlantic transfer of personal data from the EU to the US.</li>
        <li><strong>EDRM (Electronic Discovery Reference Model):</strong> Outline for legal holds: Information Governance &rarr; Identification &rarr; Preservation &rarr; Collection &rarr; Processing &rarr; Review &rarr; Analysis &rarr; Production &rarr; Presentation.</li>
      </ul>

      <h4>6. Data Sanitization Standards (NIST SP 800-88)</h4>
      <ul>
        <li><strong>Clearing:</strong> Overwriting media with zeros/ones or random patterns. Prevents software recovery. Used for media reuse within the same organization/classification level.</li>
        <li><strong>Purging:</strong> Completely declassifying media. Prevents laboratory-level data reconstruction.
          <br>&bull; <em>Cryptographic Erase (CE):</em> Erasing the key used to encrypt the media, rendering data unreadable.
          <br>&bull; <em>Degaussing:</em> Exposing magnetic media to high-strength electromagnetic fields to destroy formatting and data.
        </li>
        <li><strong>Destruction:</strong> Shredding, disintegration, or physical incineration. **Critical Note:** SSDs use electronic flash cells (not magnetic disks), meaning degaussing is ineffective; they must be physically shredded or cryptographically erased.</li>
      </ul>

      <h4>7. Baselines, Scoping & Tailoring</h4>
      <ul>
        <li><strong>Baseline:</strong> The minimum acceptable security levels across systems.</li>
        <li><strong>Scoping:</strong> Eliminating security controls that do not apply to your environment (e.g. ignoring physical security controls for a server hosted entirely in a cloud provider's data center).</li>
        <li><strong>Tailoring:</strong> Customizing and configuring specific security control settings to fit the specific hardware/software and operational requirements of your organization.</li>
      </ul>

      <div class="tip-box" style="background: rgba(14, 165, 233, 0.08); border-left: 4px solid var(--accent); padding: 15px; border-radius: 4px; margin-top: 20px;">
        <h5 style="margin-top: 0; color: var(--accent);"><i class="fa-solid fa-lightbulb"></i> Exam Traps & Revision Strategy (Adapted from Coach Manoj Sharma)</h5>
        <p style="font-size: 13px; line-height: 1.6; margin: 0 0 10px 0;"><strong>Exam Trap:</strong> Confusing Owner vs. Custodian responsibilities. Remember: the **Owner** is *accountable* and determines classification, retention, and access rights. The **Custodian** is *responsible* for implementing these settings technically (doing backups, setting up ACLs).</p>
        <p style="font-size: 13px; line-height: 1.6; margin: 0;"><strong>Revision Focus:</strong> Memorize the three sanitization levels (Clear, Purge, Destroy). Be aware that SSDs cannot be degaussed, making cryptographic erase or physical shredding mandatory.</p>
      </div>
    `
  },
  3: {
    title: "Domain 3: Security Architecture and Engineering",
    html: `
      <h4>1. Formal Access Control Models</h4>
      <p>Mathematical models designed to enforce security policy properties:</p>
      <ul>
        <li><strong>Bell-LaPadula (Confidentiality Model):</strong> State-transition, lattice-based MAC.
          <br>&bull; <em>Simple Security Property:</em> No Read Up (Subject clearance must be &ge; Object classification).
          <br>&bull; <em>Star Property (*-Property):</em> No Write Down (Subject cannot write classified data to lower classification levels).
          <br>&bull; <em>Strong Star Property:</em> Subject can only read and write to objects at the exact same clearance level.
        </li>
        <li><strong>Biba (Integrity Model):</strong> Lattice-based MAC.
          <br>&bull; <em>Simple Integrity Property:</em> No Read Down (Subject cannot read lower-integrity data).
          <br>&bull; <em>Star Integrity Property (*-Property):</em> No Write Up (Subject cannot write to higher-integrity levels).
        </li>
        <li><strong>Clark-Wilson (Commercial Integrity):</strong> Focuses on transactional integrity. Enforces Separation of Duties. Requires transaction operations via <strong>Transformation Procedures (TPs)</strong> on <strong>Constrained Data Items (CDIs)</strong>. Access is restricted using the **Access Triple** (Subject, Program, Object).</li>
        <li><strong>Brewer-Nash (Chinese Wall):</strong> Dynamically restricts access to prevent conflicts of interest based on the user's historical access records.</li>
      </ul>

      <h4>2. Common Criteria (ISO/IEC 15408)</h4>
      <p>An international standard for evaluating security products:</p>
      <ul>
        <li><strong>Target of Evaluation (TOE):</strong> The product/system being evaluated.</li>
        <li><strong>Protection Profile (PP):</strong> The implementation-independent set of security requirements defined by a buyer/customer group.</li>
        <li><strong>Security Target (ST):</strong> The implementation-dependent set of security specifications provided by the vendor.</li>
        <li><strong>Evaluation Assurance Levels (EAL):</strong> EAL1 (Functionally tested) to EAL7 (Formally verified design and tested). EAL4 is the standard baseline for commercial OS environments.</li>
      </ul>

      <h4>3. System Security & Covert Channels</h4>
      <ul>
        <li><strong>TCB (Trusted Computing Base):</strong> The set of all hardware, software, and firmware components critical to system security.
          <br>&bull; <em>Reference Monitor:</em> The core validation mechanism enforcing access policies. Must be: 1. Tamperproof, 2. Always invoked, and 3. Small enough to be formally analyzed/tested.
        </li>
        <li><strong>Covert Channels:</strong> Secret, unintended communication paths bypassing security filters:
          <br>&bull; <em>Covert Storage Channel:</em> One process writes to a shared storage location (like a filename or registry setting) that another process can read.
          <br>&bull; <em>Covert Timing Channel:</em> Modifies system resource usage timing (like CPU ticks) to transmit binary information.
        </li>
      </ul>

      <h4>4. Processor Rings & Memory Protections</h4>
      <ul>
        <li><strong>CPU Ring Architecture:</strong> Enforces security boundaries. Ring 0 (Kernel/Core OS), Ring 1 & 2 (OS Drivers), Ring 3 (User applications). Rings 0-2 run in supervisor mode; Ring 3 runs in user mode.</li>
        <li><strong>ASLR (Address Space Layout Randomization):</strong> Randomizes memory locations of processes to make buffer overflow exploits highly unpredictable.</li>
        <li><strong>DEP (Data Execution Prevention):</strong> Prevents code execution in non-executable memory segments (like the stack or heap), blocking shellcode exploits.</li>
      </ul>

      <h4>5. Cryptographic Ciphers & Salt vs. Pepper</h4>
      <ul>
        <li><strong>Symmetric Cryptography:</strong> Single key used for encryption and decryption. Fast, used for bulk data. Algorithms: AES, DES, 3DES.
          <br><span class="formula-box">Symmetric Keys Formula: n &times; (n - 1) / 2</span>
        </li>
        <li><strong>Asymmetric Cryptography:</strong> Key pair (Public encrypts, Private decrypts; Private signs, Public verifies). Slow, used for key exchange and signatures. Algorithms: RSA, ECC (efficient for mobile), Diffie-Hellman (key exchange only).</li>
        <li><strong>Salting vs. Peppering:</strong>
          <br>&bull; <em>Cryptographic Salt:</em> Random bytes added to passwords before hashing. Stored *in the database* along with the hash. Unique per user. Defeats rainbow table attacks.
          <br>&bull; <em>Cryptographic Pepper:</em> A secret key added to passwords before hashing. Stored *separately* from the database (e.g. inside an HSM). Shared across all users.
        </li>
      </ul>

      <h4>6. Symmetric Cipher Modes of Operation</h4>
      <ul>
        <li><strong>ECB (Electronic Codebook):</strong> Simplest mode. Each block encrypted independently. Insecure because identical blocks output identical ciphertexts (leaks patterns).</li>
        <li><strong>CBC (Cipher Block Chaining):</strong> XORs plaintext block with previous ciphertext block. Requires an **Initialization Vector (IV)**. Errors propagate to subsequent blocks. Cannot run in parallel.</li>
        <li><strong>CTR (Counter):</strong> Converts block cipher into stream cipher. Encrypts an incrementing counter, then XORs with plaintext. Highly parallelizable.</li>
        <li><strong>GCM (Galois/Counter Mode):</strong> Provides both **Confidentiality** and **Integrity** (Authenticated Encryption). Fast and parallelizable. Used heavily in TLS 1.3.</li>
      </ul>

      <div class="tip-box" style="background: rgba(14, 165, 233, 0.08); border-left: 4px solid var(--accent); padding: 15px; border-radius: 4px; margin-top: 20px;">
        <h5 style="margin-top: 0; color: var(--accent);"><i class="fa-solid fa-lightbulb"></i> Exam Traps & Revision Strategy (Adapted from Coach Manoj Sharma)</h5>
        <p style="font-size: 13px; line-height: 1.6; margin: 0 0 10px 0;"><strong>Exam Trap:</strong> Getting bogged down in cryptographic math. The exam will not ask you to calculate RSA primes. Instead, it tests the **business purpose** of ciphers: symmetric for confidentiality (speed), asymmetric for key exchange (scaling), and hashing for integrity.</p>
        <p style="font-size: 13px; line-height: 1.6; margin: 0;"><strong>Revision Focus:</strong> Review access control properties (Simple vs. Star) for both Bell-LaPadula and Biba. Know the difference between Protection Profile (PP) and Security Target (ST) in Common Criteria.</p>
      </div>
    `
  },
  4: {
    title: "Domain 4: Communication and Network Security",
    html: `
      <h4>1. OSI Model vs. TCP/IP Model</h4>
      <p>OSI contains 7 theoretical layers; TCP/IP contains 4 practical layers:</p>
      <ul>
        <li><strong>Layer 7: Application:</strong> HTTP, DNS, SMTP, FTP. (TCP/IP: Application)</li>
        <li><strong>Layer 6: Presentation:</strong> SSL/TLS, ASCII, JPEG, compression. (TCP/IP: Application)</li>
        <li><strong>Layer 5: Session:</strong> RPC, NetBIOS, SQL sessions. (TCP/IP: Application)</li>
        <li><strong>Layer 4: Transport:</strong> TCP (stateful), UDP (stateless), ports, segments. (TCP/IP: Transport)
          <br>&bull; <em>TCP 3-Way Handshake:</em> SYN &rarr; SYN-ACK &rarr; ACK. Flags include: SYN, ACK, FIN, RST, PSH, URG.
        </li>
        <li><strong>Layer 3: Network:</strong> IP, ICMP, routers, packet routing. (TCP/IP: Internet)</li>
        <li><strong>Layer 2: Data Link:</strong> MAC addresses, switches, ARP, frames. (TCP/IP: Link/Network Interface)
          <br>&bull; <em>ARP Spoofing:</em> Injects fake ARP maps to intercept Layer 2 traffic.
        </li>
        <li><strong>Layer 1: Physical:</strong> Cables, hubs, repeaters, bits. (TCP/IP: Link/Network Interface)</li>
      </ul>

      <h4>2. Advanced Network Routing Concepts</h4>
      <ul>
        <li><strong>MPLS (Multiprotocol Label Switching):</strong> Operates between OSI Layer 2 and Layer 3 (often called Layer 2.5). Routes packets using short path labels rather than complex IP lookups, optimizing network performance.</li>
        <li><strong>SD-WAN:</strong> Extends SDN principles to Wide Area Networks. Separates the WAN Control Plane (centralized routing rules) from the WAN Data Plane (edge hardware nodes). Enables dynamic routing over public internet and MPLS links.</li>
      </ul>

      <h4>3. Secure Network Protocols & IPsec</h4>
      <ul>
        <li><strong>IPsec VPNs:</strong> Encapsulates and protects Network Layer traffic.
          <ul>
            <li><strong>AH (Authentication Header):</strong> Provides integrity, origin authentication, and anti-replay. <em>Does not encrypt data (no confidentiality).</em></li>
            <li><strong>ESP (Encapsulating Security Payload):</strong> Provides confidentiality (encryption), integrity, and anti-replay.</li>
            <li><strong>Transport Mode:</strong> Encrypts only the payload. Used for host-to-host VPNs.</li>
            <li><strong>Tunnel Mode:</strong> Encrypts payload and original IP header, placing them inside a new IP header. Used gateway-to-gateway.</li>
          </ul>
        </li>
        <li><strong>DNS:</strong> Resolves names to IPs. Default UDP port 53. Weakness: **Lack of source authentication** (susceptible to poisoning). Mitigated via **DNSSEC**, which signs records using cryptography.</li>
        <li><strong>Wireless Security:</strong> WPA2 uses **CCMP** (AES counter mode) providing encryption. WPA3 replaces WPA2 and uses **GCMP** alongside **SAE (Simultaneous Authentication of Equals)** to block offline dictionary attacks.</li>
      </ul>

      <h4>4. Firewalls & SDN Architecture</h4>
      <ul>
        <li><strong>Firewall Types:</strong> Packet Filtering (Layer 3 stateless), Stateful Inspection (Layer 4 track sessions), Web Application Firewall (Layer 7 syntax inspection).</li>
        <li><strong>Software-Defined Networking (SDN):</strong> Decouples the **Control Plane** (decides traffic routing policies) from the **Data Plane** (forwards packets). Allows dynamic routing and security microsegmentation.</li>
        <li><strong>Converged Protocols:</strong> iSCSI (IP storage traffic over TCP/IP), FCoE (Fiber Channel frames encapsulated over Ethernet networks).</li>
      </ul>

      <div class="tip-box" style="background: rgba(14, 165, 233, 0.08); border-left: 4px solid var(--accent); padding: 15px; border-radius: 4px; margin-top: 20px;">
        <h5 style="margin-top: 0; color: var(--accent);"><i class="fa-solid fa-lightbulb"></i> Exam Traps & Revision Strategy (Adapted from Coach Manoj Sharma)</h5>
        <p style="font-size: 13px; line-height: 1.6; margin: 0 0 10px 0;"><strong>Exam Trap:</strong> Confusing Tunnel vs. Transport mode in IPsec. Remember: **Tunnel mode** encrypts the entire packet and header (putting it inside a new outer header, used for gateways). **Transport mode** encrypts only the payload, leaving original headers readable (used host-to-host).</p>
        <p style="font-size: 13px; line-height: 1.6; margin: 0;"><strong>Revision Focus:</strong> Review OSI layers and match key protocols (IPsec, TLS, DNSSEC) to their correct layers. Know that DNSSEC uses digital signatures to protect name resolution databases.</p>
      </div>
    `
  },
  5: {
    title: "Domain 5: Identity and Access Management (IAM)",
    html: `
      <h4>1. Core IAM Concepts</h4>
      <ul>
        <li><strong>Identification:</strong> Claiming an identity (e.g., typing a username).</li>
        <li><strong>Authentication:</strong> Proving the claimed identity (e.g., entering a password).</li>
        <li><strong>Authorization:</strong> Granting specific access rights based on permissions.</li>
        <li><strong>Accountability:</strong> Logging actions to trace them back to a unique user ID.</li>
      </ul>

      <h4>2. Provisioning & Access Review Lifecycle</h4>
      <ul>
        <li><strong>Provisioning:</strong> Setting up new accounts and assigning permissions based on the Principle of Least Privilege.</li>
        <li><strong>Maintenance & Privilege Creep:</strong> Privilege creep occurs when users accumulate permissions over time as they move departments. Mitigated by conducting periodic **Access Reviews** and removing unneeded rights.</li>
        <li><strong>Deprovisioning:</strong> Removing accounts when employees leave. Accounts must be disabled immediately, and deleted only after audit review.</li>
      </ul>

      <h4>3. Authentication Factors & Biometrics</h4>
      <p>Secure systems require multi-factor authentication (using two or more different factor categories):</p>
      <ul>
        <li><strong>Factor 1: Something you Know:</strong> Password, PIN, security questions.</li>
        <li><strong>Factor 2: Something you Have:</strong> Hardware token, smartcard, phone OTP.</li>
        <li><strong>Factor 3: Something you Are (Biometrics):</strong> Fingerprint, iris, retina scan.
          <br>&bull; <em>Biometric Metrics:</em> **Type I Error (FRR - False Reject Rate)** is the percentage of authorized users blocked. **Type II Error (FAR - False Accept Rate)** is the percentage of unauthorized users granted access. The **Crossover Error Rate (CER)** is where FRR = FAR. Lower CER represents a more accurate biometric system.
          <br>&bull; <em>Retina Scan:</em> Measures blood vessel patterns at the back of the eye (highly accurate but intrusive).
          <br>&bull; <em>Iris Scan:</em> Measures patterns on the colored ring of the eye (non-intrusive, fast).
        </li>
        <li><strong>Factor 4: Somewhere you Are:</strong> GPS location, IP address.</li>
      </ul>

      <h4>4. Single Sign-On (SSO) & Federation</h4>
      <ul>
        <li><strong>SAML 2.0:</strong> XML-based federation standard. Service Providers (SP) accept authentication assertions signed by the central **Identity Provider (IdP)**.</li>
        <li><strong>OAuth 2.0 / OIDC:</strong> OAuth provides authorization tokens (delegated access). OpenID Connect (OIDC) sits on top to provide identity authentication using JWT tokens.</li>
        <li><strong>Kerberos:</strong> Key distribution center (KDC) authentication flow. Uses symmetric cryptography. Issues tickets. Key components: **Authentication Server (AS)**, **Ticket Granting Service (TGS)**, and **Ticket Granting Ticket (TGT)**. Vulnerable to *Golden Ticket* attacks if the Krbtgt account hash is compromised.</li>
      </ul>

      <h4>5. Access Control Enforcements</h4>
      <ul>
        <li><strong>DAC (Discretionary Access Control):</strong> Access determined by data owner. Highly flexible but weak security.</li>
        <li><strong>MAC (Mandatory Access Control):</strong> OS kernel enforces access strictly based on security clearance and classification labels.</li>
        <li><strong>RBAC (Role-Based Access Control):</strong> Access assigned based on business role or group membership, simplifying administrative overhead.</li>
        <li><strong>ABAC (Attribute-Based Access Control):</strong> Evaluates attributes (location, IP, time, device health) for dynamic conditional access.</li>
      </ul>

      <div class="tip-box" style="background: rgba(14, 165, 233, 0.08); border-left: 4px solid var(--accent); padding: 15px; border-radius: 4px; margin-top: 20px;">
        <h5 style="margin-top: 0; color: var(--accent);"><i class="fa-solid fa-lightbulb"></i> Exam Traps & Revision Strategy (Adapted from Coach Manoj Sharma)</h5>
        <p style="font-size: 13px; line-height: 1.6; margin: 0 0 10px 0;"><strong>Exam Trap:</strong> Confusing OAuth vs. OpenID Connect (OIDC). **OAuth 2.0** is strictly an *authorization* protocol (granting access using tokens). **OIDC** is an *authentication* protocol built on top of OAuth (verifying identity using ID tokens).</p>
        <p style="font-size: 13px; line-height: 1.6; margin: 0;"><strong>Revision Focus:</strong> Review difference between DAC (owner controls) and MAC (clearance/classification labels). Know the difference between iris and retina biometric scans.</p>
      </div>
    `
  },
  6: {
    title: "Domain 6: Security Assessment and Testing",
    html: `
      <h4>1. Assessment, Testing, and Auditing</h4>
      <ul>
        <li><strong>Security Assessment:</strong> A comprehensive review of controls, policies, vulnerability scans, and organizational maturity.</li>
        <li><strong>Security Testing:</strong> Actively running tests (like vulnerability scans or pen tests) to verify controls work.</li>
        <li><strong>Security Audit:</strong> Formal evaluation of controls conducted by an independent third party to verify compliance with a standard (e.g., ISO 27001).</li>
      </ul>

      <h4>2. Threat Hunting & Logging</h4>
      <ul>
        <li><strong>Threat Hunting:</strong> Proactive, hypothesis-driven search through network telemetry, syslogs, and endpoint records to discover stealthy threats that bypassed automated security alerts.</li>
        <li><strong>Log Normalization:</strong> Converting diverse log source schemas into a common JSON database layout to allow SIEM engines to parse and query events cleanly.</li>
      </ul>

      <h4>3. Penetration Testing Models</h4>
      <ul>
        <li><strong>Phases:</strong> Reconnaissance (Passive/Active) &rarr; Scanning (Port scans, Nmap checks) &rarr; Exploitation (Gaining entry) &rarr; Post-Exploitation (Lateral movement, pivoting) &rarr; Reporting.</li>
        <li><strong>Black Box:</strong> Tester has zero prior knowledge of target architecture.</li>
        <li><strong>White Box:</strong> Tester has full access to source code, configs, and diagrams.</li>
        <li><strong>Grey Box:</strong> Tester has partial details (e.g., standard user credentials).</li>
      </ul>

      <h4>4. Code Testing Methods</h4>
      <ul>
        <li><strong>SAST (Static):</strong> Analyzes source code at rest (uncompiled code). Shifted-left in SDLC, fast, but cannot identify runtime environment bugs.</li>
        <li><strong>DAST (Dynamic):</strong> Tests the compiled application during execution. Done late, detects environment issues, but harder to trace to exact code lines.</li>
        <li><strong>IAST (Interactive):</strong> Combines SAST and DAST features inside the compiler process.</li>
        <li><strong>RASP (Runtime Application Self-Protection):</strong> Sits inside the application memory to block exploits dynamically in real time.</li>
        <li><strong>Fuzzing:</strong> Sending malformed, random inputs to input fields to test application crash boundaries.</li>
      </ul>

      <h4>5. SOC (Service Organization Control) Reports</h4>
      <ul>
        <li><strong>SOC 1:</strong> Audits internal controls relevant to financial reporting.</li>
        <li><strong>SOC 2:</strong> Audits controls relevant to Security, Availability, Integrity, Confidentiality, and Privacy. Restrict-use report.</li>
        <li><strong>SOC 3:</strong> Similar to SOC 2, but designed for public distribution (general use).</li>
        <li><strong>Type I:</strong> Evaluates control design suitability at a single point in time.</li>
        <li><strong>Type II:</strong> Evaluates both design and operational effectiveness over a period of time (6-12 months).</li>
      </ul>

      <h4>6. Vulnerability Scoring (CVSS v3.1)</h4>
      <ul>
        <li><strong>Base Metrics:</strong> Attack Vector (AV), Attack Complexity (AC), Privileges Required (PR), User Interaction (UI), Scope (S), Confidentiality (C), Integrity (I), Availability (A).</li>
        <li><strong>Temporal Metrics:</strong> Exploit Code Maturity (E), Remediation Level (RL), Report Confidence (RC).</li>
      </ul>

      <div class="tip-box" style="background: rgba(14, 165, 233, 0.08); border-left: 4px solid var(--accent); padding: 15px; border-radius: 4px; margin-top: 20px;">
        <h5 style="margin-top: 0; color: var(--accent);"><i class="fa-solid fa-lightbulb"></i> Exam Traps & Revision Strategy (Adapted from Coach Manoj Sharma)</h5>
        <p style="font-size: 13px; line-height: 1.6; margin: 0 0 10px 0;"><strong>Exam Trap:</strong> Confusing vulnerability scanning with penetration testing. Vulnerability scans are automated, signature-based inspections. Penetration tests actively exploit flaws to demonstrate real threat paths and impact.</p>
        <p style="font-size: 13px; line-height: 1.6; margin: 0;"><strong>Revision Focus:</strong> Focus on SAST (uncompiled static code, early) vs. DAST (compiled code running, late). Know the difference between SOC 2 Type I (design at a point in time) and Type II (operational test over a duration).</p>
      </div>
    `
  },
  7: {
    title: "Domain 7: Security Operations",
    html: `
      <h4>1. Incident Response Lifecycle</h4>
      <p>The standard process for handling security breaches:</p>
      <ol>
        <li><strong>Preparation:</strong> Training the CSIRT, establishing templates, and locking down recovery toolkits.</li>
        <li><strong>Detection & Analysis:</strong> Inspecting SIEM/IDS alerts to verify security incidents.</li>
        <li><strong>Containment:</strong> Isolating compromised systems (e.g., quarantine VLAN) to stop propagation.</li>
        <li><strong>Eradication:</strong> Removing malware, formatting systems, and patching code vulnerabilities.</li>
        <li><strong>Recovery:</strong> Restoring operations, rebuilding from clean backup copies.</li>
        <li><strong>Lessons Learned:</strong> Post-incident retrospective review to improve the IR process.</li>
      </ol>

      <h4>2. Digital Forensics & E-Discovery</h4>
      <p>During evidence acquisition, investigators must preserve the **Order of Volatility** (collecting most volatile data first):</p>
      <ol>
        <li>CPU Registers and Cache memory.</li>
        <li>Routing tables, ARP cache, process tables, kernel statistics, and RAM.</li>
        <li>Temporary file systems and swap space.</li>
        <li>Hard disk drives (replicated sector-by-sector via **Forensic Imaging**).</li>
        <li>Archived backups and remote logs.</li>
      </ol>
      <p><strong>Chain of Custody:</strong> A formal document log detailing who possessed, collected, and accessed digital evidence at every point in time to ensure court admissibility.</p>

      <h4>3. Business Continuity vs. Disaster Recovery</h4>
      <ul>
        <li><strong>MTD (Maximum Tolerable Downtime):</strong> The maximum time a business process can remain down before irreversible damage occurs.
          <br><span class="formula-box">MTD = RTO + WRT</span>
        </li>
        <li><strong>RTO (Recovery Time Objective):</strong> The target time to restore systems and applications after disaster.</li>
        <li><strong>RPO (Recovery Point Objective):</strong> The maximum acceptable data loss in terms of time (determines backup frequency).</li>
        <li><strong>DRP Testing Types:</strong>
          <br>&bull; <em>Checklist (Review) Test:</em> Passive distribution of DRP document to departments to verify listings/contacts.
          <br>&bull; <em>Tabletop (Structured Walk-through) Test:</em> Representatives gather in a meeting room to verbally trace the plan step-by-step.
          <br>&bull; <em>Simulation Test:</em> Active drill of systems recovery procedures without shutting off production.
          <br>&bull; <em>Parallel Test:</em> Critical systems restored at recovery site and operated alongside active production.
          <br>&bull; <em>Cutover Test:</em> Complete switchover of operations to the disaster recovery site (highest operational risk).
        </li>
        <li><strong>Backup Architectures:</strong> Full Backup (copies all files, clears archive bit), Differential (copies files changed since last full, does not clear bit), Incremental (copies files changed since last backup, clears bit).</li>
      </ul>

      <h4>4. Physical Security & Environmental Controls</h4>
      <ul>
        <li><strong>Mantraps:</strong> Interlocking double-door chambers that prevent tailgating.</li>
        <li><strong>Fences:</strong> 3-4 feet (casual trespasser), 6-7 feet (deterrent), 8+ feet with barbed wire (critical security).</li>
        <li><strong>Fire Suppression:</strong> Wet Pipe (water constantly in pipes), Dry Pipe (water held back until triggers), Pre-Action (requires dual sensors to release water, safe for server rooms), Deluge (floods room, high risk), Clean Agents (gas suppression like FM-200/Novec).</li>
      </ul>

      <div class="tip-box" style="background: rgba(14, 165, 233, 0.08); border-left: 4px solid var(--accent); padding: 15px; border-radius: 4px; margin-top: 20px;">
        <h5 style="margin-top: 0; color: var(--accent);"><i class="fa-solid fa-lightbulb"></i> Exam Traps & Revision Strategy (Adapted from Coach Manoj Sharma)</h5>
        <p style="font-size: 13px; line-height: 1.6; margin: 0 0 10px 0;"><strong>Exam Trap:</strong> Isolating or shutting down systems immediately on detection. Always verify the incident and identify the exact threat (analysis phase) before triggering massive containment isolation protocols that could disrupt business availability.</p>
        <p style="font-size: 13px; line-height: 1.6; margin: 0;"><strong>Revision Focus:</strong> Review the Order of Volatility (Cache & RAM are highly volatile, backups are least). Understand recovery metrics where MTD is the absolute ceiling.</p>
      </div>
    `
  },
  8: {
    title: "Domain 8: Software Development Security",
    html: `
      <h4>1. Software Development Models</h4>
      <ul>
        <li><strong>Waterfall:</strong> Sequential phases. Difficult to adapt to requirements changes.</li>
        <li><strong>Agile (Scrum):</strong> Iterative, continuous deployment using time-boxed iterations (sprints). Governed by **Product Owner** (manages backlog) and **Scrum Master** (removes obstacles).</li>
        <li><strong>DevSecOps:</strong> Shifting security controls left by integrating SAST/DAST automation directly into CI/CD pipelines.</li>
      </ul>

      <h4>2. Software Maturity & Escrow</h4>
      <ul>
        <li><strong>CMMI (Capability Maturity Model Integration):</strong>
          <br>&bull; <em>1. Initial:</em> Processes are ad-hoc, chaotic, and disorganized.
          <br>&bull; <em>2. Repeatable:</em> Basic tracking and project management established.
          <br>&bull; <em>3. Defined:</em> Processes are formally documented, standardized, and integrated.
          <br>&bull; <em>4. Quantitatively Managed:</em> Processes are measured and controlled using metrics.
          <br>&bull; <em>5. Optimizing:</em> Focuses on continuous process improvement and adaptation.
        </li>
        <li><strong>Software Escrow:</strong> Storing the application source code with a trusted third-party agent. Ensures that if the software vendor goes bankrupt, the customer receives the code to maintain the systems themselves.</li>
      </ul>

      <h4>3. Secure Coding & Vulnerability Defenses</h4>
      <ul>
        <li><strong>SQL Injection (SQLi):</strong> Attacker inputs database commands inside input fields to access unauthorized records.
          <br>&bull; <em>Defense:</em> Always implement **parameterized queries (prepared statements)**. This forces database interpreters to treat user inputs strictly as data parameters, not executable SQL instructions.
        </li>
        <li><strong>Cross-Site Scripting (XSS):</strong> Injected scripts execute in the user's browser.
          <br>&bull; <em>Stored XSS:</em> Resides permanently in databases; runs when any user requests the infected record.
          <br>&bull; <em>Reflected XSS:</em> Embedded in query URL links; executes when a user clicks the payload link.
          <br>&bull; <em>Defense:</em> Implement input validation and output encoding (context-aware encoding).
        </li>
        <li><strong>Cross-Site Request Forgery (CSRF):</strong> Attacker forces an authenticated victim's browser to send unsolicited HTTP requests to a target application.
          <br>&bull; <em>Defense:</em> Implement unique, stateful anti-CSRF tokens for all form submissions.
        </li>
        <li><strong>Server-Side Request Forgery (SSRF):</strong> Attacker forces web servers to send HTTP requests to target internal resources. Mitigated via input whitelisting and egress firewall rules.</li>
      </ul>

      <div class="tip-box" style="background: rgba(14, 165, 233, 0.08); border-left: 4px solid var(--accent); padding: 15px; border-radius: 4px; margin-top: 20px;">
        <h5 style="margin-top: 0; color: var(--accent);"><i class="fa-solid fa-lightbulb"></i> Exam Traps & Revision Strategy (Adapted from Coach Manoj Sharma)</h5>
        <p style="font-size: 13px; line-height: 1.6; margin: 0 0 10px 0;"><strong>Exam Trap:</strong> Viewing security as a final gatekeeper step before software release. Security checks must be shifted left—integrated into requirement definitions, backlog grooming, and developer automated IDE plugins.</p>
        <p style="font-size: 13px; line-height: 1.6; margin: 0;"><strong>Revision Focus:</strong> Review database SQL injection defenses (parameterized queries) and browser XSS defenses (input validation + output encoding).</p>
      </div>
    `
  },
  9: {
    title: "CISSP Recommended Online Resources",
    html: `
      <h4>🌐 Highly Recommended CISSP Study Directory</h4>
      <p>Top-tier reference sites, cheat sheets, and practice simulators recommended by successful candidates:</p>
      
      <div class="resource-cards-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 15px; margin-top: 15px;">
        <div class="card glass" style="padding: 20px; border-radius: 12px; background: rgba(255,255,255,0.02); display: flex; flex-direction: column; justify-content: space-between; border: 1px solid rgba(255,255,255,0.05);">
          <div>
            <h5 style="color: var(--accent); margin-bottom: 8px; font-weight: 600;"><i class="fa-solid fa-book-open"></i> Destination Certification MindMaps</h5>
            <p style="font-size: 13px; color: var(--text-muted); line-height: 1.5; margin: 0;">Popular visual summaries and high-level conceptual walk-throughs for each of the 8 security domains.</p>
          </div>
          <a href="https://destcert.com/cissp/" target="_blank" class="btn btn-secondary btn-sm" style="align-self: flex-start; margin-top: 12px; padding: 6px 12px; font-size: 12px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.08); color: #fff; text-decoration: none; border-radius: 4px;">Visit Site <i class="fa-solid fa-arrow-up-right-from-square" style="font-size: 10px; margin-left: 4px;"></i></a>
        </div>

        <div class="card glass" style="padding: 20px; border-radius: 12px; background: rgba(255,255,255,0.02); display: flex; flex-direction: column; justify-content: space-between; border: 1px solid rgba(255,255,255,0.05);">
          <div>
            <h5 style="color: var(--accent); margin-bottom: 8px; font-weight: 600;"><i class="fa-solid fa-scroll"></i> StationX CISSP Cheat Sheet</h5>
            <p style="font-size: 13px; color: var(--text-muted); line-height: 1.5; margin: 0;">A searchable, concise roadmap offering quick definitions and reference equations for all CISSP concepts.</p>
          </div>
          <a href="https://www.stationx.net/cissp-cheat-sheet/" target="_blank" class="btn btn-secondary btn-sm" style="align-self: flex-start; margin-top: 12px; padding: 6px 12px; font-size: 12px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.08); color: #fff; text-decoration: none; border-radius: 4px;">Visit Site <i class="fa-solid fa-arrow-up-right-from-square" style="font-size: 10px; margin-left: 4px;"></i></a>
        </div>

        <div class="card glass" style="padding: 20px; border-radius: 12px; background: rgba(255,255,255,0.02); display: flex; flex-direction: column; justify-content: space-between; border: 1px solid rgba(255,255,255,0.05);">
          <div>
            <h5 style="color: var(--accent); margin-bottom: 8px; font-weight: 600;"><i class="fa-solid fa-flask"></i> Cybernous Free Library</h5>
            <p style="font-size: 13px; color: var(--text-muted); line-height: 1.5; margin: 0;">A curated vault of domain summaries, final study guides, and free mock quizzes in CAT assessment format.</p>
          </div>
          <a href="https://cybernous.com/" target="_blank" class="btn btn-secondary btn-sm" style="align-self: flex-start; margin-top: 12px; padding: 6px 12px; font-size: 12px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.08); color: #fff; text-decoration: none; border-radius: 4px;">Visit Site <i class="fa-solid fa-arrow-up-right-from-square" style="font-size: 10px; margin-left: 4px;"></i></a>
        </div>

        <div class="card glass" style="padding: 20px; border-radius: 12px; background: rgba(255,255,255,0.02); display: flex; flex-direction: column; justify-content: space-between; border: 1px solid rgba(255,255,255,0.05);">
          <div>
            <h5 style="color: var(--accent); margin-bottom: 8px; font-weight: 600;"><i class="fa-brands fa-github"></i> GitHub CISSP Study Repo</h5>
            <p style="font-size: 13px; color: var(--text-muted); line-height: 1.5; margin: 0;">Curated community repositories containing structured notes, study group plans, and links to free materials.</p>
          </div>
          <a href="https://github.com/jefferywmoore/CISSP-Study-Resources" target="_blank" class="btn btn-secondary btn-sm" style="align-self: flex-start; margin-top: 12px; padding: 6px 12px; font-size: 12px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.08); color: #fff; text-decoration: none; border-radius: 4px;">Visit Site <i class="fa-solid fa-arrow-up-right-from-square" style="font-size: 10px; margin-left: 4px;"></i></a>
        </div>
      </div>

      <h4 style="margin-top: 25px;">🧠 Proven CISSP Mindset & Exam Strategies</h4>
      <ul>
        <li><strong>Think Like a Manager:</strong> The CISSP is not a technical configuration test. Always select the answer that addresses **risk management**, **policy adjustment**, or **business alignment** over the hands-on engineering fix.</li>
        <li><strong>Read All Options in Reverse:</strong> Read Option D first, then C, B, A. This prevents your brain from latching onto the first "decent-looking" answer and forces objective analysis.</li>
        <li><strong>Analyze Why Wrong Answers are Wrong:</strong> When taking practice tests, the true value lies in studying the rationales for wrong options. Understand their technical faults to master the concepts.</li>
      </ul>
    `
  }
};

// 2. FLASHCARD DATABASE
const FLASHCARDS = [
  {
    "domain": 1,
    "title": "CIA Triad",
    "desc": "Confidentiality, Integrity, and Availability. The foundational framework for evaluating security controls.",
    "formula": "Core Pillars"
  },
  {
    "domain": 1,
    "title": "DAD Triad",
    "desc": "Disclosure, Alteration, and Destruction. The opposing threats to the CIA Triad.",
    "formula": "Opposing Threats"
  },
  {
    "domain": 1,
    "title": "Confidentiality",
    "desc": "Ensuring that information is not disclosed to unauthorized individuals, entities, or processes.",
    "formula": "Defended by: AES, RSA"
  },
  {
    "domain": 1,
    "title": "Integrity",
    "desc": "Ensuring the accuracy, completeness, and reliability of systems and information.",
    "formula": "Defended by: SHA-256"
  },
  {
    "domain": 1,
    "title": "Availability",
    "desc": "Ensuring systems and data are accessible to authorized users when needed.",
    "formula": "Defended by: RAID, UPS"
  },
  {
    "domain": 1,
    "title": "Identification",
    "desc": "The process of claiming an identity, typically with a username or card scan.",
    "formula": "First Step of IAAA"
  },
  {
    "domain": 1,
    "title": "Authentication",
    "desc": "The process of proving a claimed identity, such as entering a password.",
    "formula": "Second Step of IAAA"
  },
  {
    "domain": 1,
    "title": "Authorization",
    "desc": "Granting specific permissions or access rights to an authenticated subject.",
    "formula": "Third Step of IAAA"
  },
  {
    "domain": 1,
    "title": "Accountability",
    "desc": "Tracing actions back to a unique individual using log audits and security trails.",
    "formula": "Fourth Step of IAAA"
  },
  {
    "domain": 1,
    "title": "Security Policy",
    "desc": "A high-level document approved by management outlining security goals and objectives.",
    "formula": "Mandatory / High-Level"
  },
  {
    "domain": 1,
    "title": "Security Standard",
    "desc": "Mandatory rules or hardware/software baselines specifying uniform configurations.",
    "formula": "Mandatory / Specific"
  },
  {
    "domain": 1,
    "title": "Security Baseline",
    "desc": "The minimum acceptable security standard configuration across systems.",
    "formula": "Mandatory / Minimum"
  },
  {
    "domain": 1,
    "title": "Security Guideline",
    "desc": "Recommended practices or advice. Optional rather than mandatory.",
    "formula": "Discretionary / Recommendations"
  },
  {
    "domain": 1,
    "title": "Security Procedure",
    "desc": "Step-by-step instructions for executing specific operations.",
    "formula": "Mandatory / Step-by-Step"
  },
  {
    "domain": 1,
    "title": "Quantitative Risk",
    "desc": "Risk analysis using numeric actuarial data to determine financial impact.",
    "formula": "Calculates exact $ loss"
  },
  {
    "domain": 1,
    "title": "Qualitative Risk",
    "desc": "Risk analysis using subjective rankings and likelihood assessments.",
    "formula": "Method: Delphi, Matrices"
  },
  {
    "domain": 1,
    "title": "Asset Value (AV)",
    "desc": "The replacement cost or business value of a specific asset.",
    "formula": "Unit: Dollars ($)"
  },
  {
    "domain": 1,
    "title": "Exposure Factor (EF)",
    "desc": "The percentage of asset value lost during a successful exploit.",
    "formula": "Unit: Percentage (%)"
  },
  {
    "domain": 1,
    "title": "SLE",
    "desc": "Single Loss Expectancy. The expected financial loss of a single threat occurrence.",
    "formula": "SLE = AV * EF"
  },
  {
    "domain": 1,
    "title": "ARO",
    "desc": "Annualized Rate of Occurrence. Expected frequency of incident occurrences per year.",
    "formula": "ARO = Incidents / Year"
  },
  {
    "domain": 1,
    "title": "ALE",
    "desc": "Annualized Loss Expectancy. The total expected financial loss per year.",
    "formula": "ALE = SLE * ARO"
  },
  {
    "domain": 1,
    "title": "Risk Mitigation",
    "desc": "Applying controls (like firewalls) to reduce risk to acceptable levels.",
    "formula": "Risk Response"
  },
  {
    "domain": 1,
    "title": "Risk Transference",
    "desc": "Passing risk to a third party, such as buying cyber insurance.",
    "formula": "Risk Response"
  },
  {
    "domain": 1,
    "title": "Risk Avoidance",
    "desc": "Eliminating risk by disabling the project or removing the function entirely.",
    "formula": "Risk Response"
  },
  {
    "domain": 1,
    "title": "Risk Acceptance",
    "desc": "Accepting residual risk with formal management sign-off when controls are too costly.",
    "formula": "Risk Response"
  },
  {
    "domain": 1,
    "title": "Administrative Controls",
    "desc": "Managerial safeguards like policies, standards, procedures, and training.",
    "formula": "Category: Policy"
  },
  {
    "domain": 1,
    "title": "Technical Controls",
    "desc": "Logical safeguards like firewalls, encryption, and ACLs.",
    "formula": "Category: Logical"
  },
  {
    "domain": 1,
    "title": "Physical Controls",
    "desc": "Tactile safeguards like fences, locks, CCTV, and mantraps.",
    "formula": "Category: Tactical"
  },
  {
    "domain": 1,
    "title": "Preventative Controls",
    "desc": "Controls that actively block security incidents (e.g. locks, firewalls).",
    "formula": "Mode: Active block"
  },
  {
    "domain": 1,
    "title": "Detective Controls",
    "desc": "Controls that detect and alert on incidents as they occur (e.g. logs, IDS).",
    "formula": "Mode: Active alarm"
  },
  {
    "domain": 1,
    "title": "Corrective Controls",
    "desc": "Controls that restore systems after an incident (e.g. backups, patches).",
    "formula": "Mode: Recovery"
  },
  {
    "domain": 1,
    "title": "Compensating Controls",
    "desc": "Alternative controls used when primary safeguards are technically unfeasible.",
    "formula": "Mode: Alternative"
  },
  {
    "domain": 1,
    "title": "Deterrent Controls",
    "desc": "Controls that discourage potential attackers (e.g. warning signs).",
    "formula": "Mode: Discourage"
  },
  {
    "domain": 1,
    "title": "Separation of Duties",
    "desc": "Splitting sensitive tasks among multiple people to prevent fraud.",
    "formula": "Mitigates: Insider abuse"
  },
  {
    "domain": 1,
    "title": "Job Rotation",
    "desc": "Periodically moving employees to different roles to uncover fraud.",
    "formula": "Mitigates: Collusion"
  },
  {
    "domain": 1,
    "title": "Mandatory Vacations",
    "desc": "Forcing employees to take consecutive days off to expose anomalies.",
    "formula": "Mitigates: Fraud coverups"
  },
  {
    "domain": 1,
    "title": "Due Diligence",
    "desc": "The research phase: identifying risks and checking controls (knowing what is right).",
    "formula": "Research / Know"
  },
  {
    "domain": 1,
    "title": "Due Care",
    "desc": "The action phase: implementing security controls (doing what is right).",
    "formula": "Implementation / Do"
  },
  {
    "domain": 1,
    "title": "STRIDE",
    "desc": "Microsoft threat modeling framework: Spoofing, Tampering, Repudiation, Info Disclosure, DoS, Elevation.",
    "formula": "Threat Model"
  },
  {
    "domain": 1,
    "title": "STIX",
    "desc": "Structured Threat Information eXpression. XML/JSON format for threat intel sharing.",
    "formula": "Intel Format"
  },
  {
    "domain": 1,
    "title": "TAXII",
    "desc": "Trusted Automated eXchange of Indicator Information. Transport protocol for STIX.",
    "formula": "Intel Transport"
  },
  {
    "domain": 1,
    "title": "NDA",
    "desc": "Non-Disclosure Agreement. Legal contract protecting sensitive information.",
    "formula": "Third-Party Risk"
  },
  {
    "domain": 1,
    "title": "SLA",
    "desc": "Service Level Agreement. Contract detailing service metrics (e.g. availability).",
    "formula": "Third-Party Risk"
  },
  {
    "domain": 1,
    "title": "MOU",
    "desc": "Memorandum of Understanding. Mutual agreement of intent.",
    "formula": "Third-Party Risk"
  },
  {
    "domain": 1,
    "title": "ISA",
    "desc": "Interconnection Security Agreement. Defines technical system connection terms.",
    "formula": "Third-Party Risk"
  },
  {
    "domain": 1,
    "title": "GDPR",
    "desc": "EU privacy law. Enforces right to be forgotten and 72-hour breach notices.",
    "formula": "Regulation"
  },
  {
    "domain": 1,
    "title": "HIPAA",
    "desc": "US law protecting medical records (PHI). Mandates security rules.",
    "formula": "Regulation"
  },
  {
    "domain": 1,
    "title": "Wassenaar Arrangement",
    "desc": "Treaty controlling export of dual-use technologies including encryption.",
    "formula": "International Treaty"
  },
  {
    "domain": 1,
    "title": "OECD Principles",
    "desc": "8 guidelines governing collection, quality, and use limits of privacy data.",
    "formula": "Privacy Standards"
  },
  {
    "domain": 1,
    "title": "Canon 1 (ISC2)",
    "desc": "Protect society, the common good, necessary public trust, and infrastructure.",
    "formula": "Ethics Priority 1"
  },
  {
    "domain": 1,
    "title": "Canon 2 (ISC2)",
    "desc": "Act honorably, honestly, justly, responsibly, and legally.",
    "formula": "Ethics Priority 2"
  },
  {
    "domain": 1,
    "title": "Canon 3 (ISC2)",
    "desc": "Provide diligent and competent service to principals.",
    "formula": "Ethics Priority 3"
  },
  {
    "domain": 1,
    "title": "Canon 4 (ISC2)",
    "desc": "Advance and protect the profession.",
    "formula": "Ethics Priority 4"
  },
  {
    "domain": 2,
    "title": "Data Owner",
    "desc": "Accountable executive. Defines classification, retention, and access policies.",
    "formula": "Accountable Role"
  },
  {
    "domain": 2,
    "title": "Data Custodian",
    "desc": "Technical administrator. Configures firewalls, backups, and ACLs based on policies.",
    "formula": "Responsible Role"
  },
  {
    "domain": 2,
    "title": "Data Steward",
    "desc": "Ensures metadata quality, business alignment, and database standardization.",
    "formula": "Data Quality"
  },
  {
    "domain": 2,
    "title": "Data Controller",
    "desc": "Determines the purpose and means of processing personal data under GDPR.",
    "formula": "Legal Role"
  },
  {
    "domain": 2,
    "title": "Data Processor",
    "desc": "Processes data on behalf of the controller under GDPR.",
    "formula": "Legal Role"
  },
  {
    "domain": 2,
    "title": "PII",
    "desc": "Personally Identifiable Information. Any data linked to a unique person.",
    "formula": "Privacy Data"
  },
  {
    "domain": 2,
    "title": "PHI",
    "desc": "Protected Health Information. Medical records governed by HIPAA.",
    "formula": "Privacy Data"
  },
  {
    "domain": 2,
    "title": "PCI-DSS",
    "desc": "Payment Card Industry Data Security Standard. Rules protecting credit card data.",
    "formula": "Industry Standard"
  },
  {
    "domain": 2,
    "title": "Scoping",
    "desc": "Eliminating security controls that do not apply to your system profile.",
    "formula": "Control Selection"
  },
  {
    "domain": 2,
    "title": "Tailoring",
    "desc": "Customizing specific baseline control parameters to fit your operational environment.",
    "formula": "Control Customization"
  },
  {
    "domain": 2,
    "title": "Clearing",
    "desc": "Overwriting media to prevent standard software recovery. Used for internal reuse.",
    "formula": "NIST Sanitization"
  },
  {
    "domain": 2,
    "title": "Purging",
    "desc": "Declassifying media to prevent laboratory reconstruction. Includes CE and degaussing.",
    "formula": "NIST Sanitization"
  },
  {
    "domain": 2,
    "title": "Destruction",
    "desc": "Shredding, incinerating, or disintegrating media physically.",
    "formula": "NIST Sanitization"
  },
  {
    "domain": 2,
    "title": "Degaussing",
    "desc": "Exposing magnetic media to intense electromagnetic fields to destroy all data.",
    "formula": "Magnetic Purging"
  },
  {
    "domain": 2,
    "title": "CE",
    "desc": "Cryptographic Erase. Erasing the encryption key, rendering data unreadable.",
    "formula": "SSD Sanitization"
  },
  {
    "domain": 2,
    "title": "SSD Wear Leveling",
    "desc": "Controller maps storage blocks to balance writes. Makes overwriting unreliable.",
    "formula": "Requires: CE / Shredding"
  },
  {
    "domain": 2,
    "title": "Top Secret",
    "desc": "Government classification. Unauthorized disclosure causes grave damage to national security.",
    "formula": "Clearance Level"
  },
  {
    "domain": 2,
    "title": "Secret",
    "desc": "Government classification. Disclosure causes serious damage to national security.",
    "formula": "Clearance Level"
  },
  {
    "domain": 2,
    "title": "Confidential",
    "desc": "Government classification. Disclosure causes damage to national security.",
    "formula": "Clearance Level"
  },
  {
    "domain": 2,
    "title": "Data at Rest",
    "desc": "Data stored passively on disk, SAN, or backup tapes.",
    "formula": "Defended by: AES-256"
  },
  {
    "domain": 2,
    "title": "Data in Transit",
    "desc": "Data traversing network interfaces, cables, or wireless waves.",
    "formula": "Defended by: TLS, IPsec"
  },
  {
    "domain": 2,
    "title": "Data in Use",
    "desc": "Data actively loaded in RAM or CPU cache registers.",
    "formula": "Defended by: TEEs, Memory isolation"
  },
  {
    "domain": 2,
    "title": "EDRM",
    "desc": "Electronic Discovery Reference Model. Legal hold, preservation, and analysis stages.",
    "formula": "Litigation Framework"
  },
  {
    "domain": 2,
    "title": "Tokenization",
    "desc": "Replacing sensitive data (like credit cards) with a non-sensitive random index key.",
    "formula": "PCI Mitigation"
  },
  {
    "domain": 2,
    "title": "Anonymization",
    "desc": "Irreversibly removing association vectors to block re-identification.",
    "formula": "Privacy Safeguard"
  },
  {
    "domain": 2,
    "title": "Pseudonymization",
    "desc": "Replacing identifiers with aliases. Reversible with a secure secondary key.",
    "formula": "GDPR Compliance"
  },
  {
    "domain": 3,
    "title": "Bell-LaPadula",
    "desc": "Confidentiality model. State-transition, lattice-based non-discretionary MAC.",
    "formula": "No Read Up / No Write Down"
  },
  {
    "domain": 3,
    "title": "Bell-LaPadula Simple",
    "desc": "Subject clearance must be equal to or greater than object classification to read.",
    "formula": "Simple: No Read Up"
  },
  {
    "domain": 3,
    "title": "Bell-LaPadula Star",
    "desc": "Subject cannot write data to objects at a lower classification level.",
    "formula": "Star: No Write Down"
  },
  {
    "domain": 3,
    "title": "Biba Model",
    "desc": "Integrity model. Lattice-based MAC. Prevents unauthorized modification of data.",
    "formula": "No Read Down / No Write Up"
  },
  {
    "domain": 3,
    "title": "Biba Simple",
    "desc": "Subject cannot read data from a lower integrity level.",
    "formula": "Simple: No Read Down"
  },
  {
    "domain": 3,
    "title": "Biba Star",
    "desc": "Subject cannot write data to objects at a higher integrity level.",
    "formula": "Star: No Write Up"
  },
  {
    "domain": 3,
    "title": "Clark-Wilson",
    "desc": "Commercial integrity model. Enforces separation of duties via TPs and CDIs.",
    "formula": "Uses: Access Triple"
  },
  {
    "domain": 3,
    "title": "Brewer-Nash",
    "desc": "Chinese Wall model. Dynamically blocks conflicts of interest based on history.",
    "formula": "Dynamic Access"
  },
  {
    "domain": 3,
    "title": "Graham-Denning",
    "desc": "Defines rules for subject/object creation, deletion, and rights delegation.",
    "formula": "Access Matrix Logic"
  },
  {
    "domain": 3,
    "title": "HRU Model",
    "desc": "Harrison-Ruzzo-Ullman. Evaluates rights modifications to prove access safety bounds.",
    "formula": "Access Security"
  },
  {
    "domain": 3,
    "title": "Common Criteria",
    "desc": "International security product evaluation standard (ISO 15408).",
    "formula": "Uses: EAL Levels"
  },
  {
    "domain": 3,
    "title": "Protection Profile",
    "desc": "Implementation-independent statement of security needs for a product category.",
    "formula": "CC: PP"
  },
  {
    "domain": 3,
    "title": "Security Target",
    "desc": "Implementation-dependent specifications provided by product vendor.",
    "formula": "CC: ST"
  },
  {
    "domain": 3,
    "title": "EAL Levels",
    "desc": "Common Criteria ratings from EAL1 (functional check) to EAL7 (formal design).",
    "formula": "Commercial target: EAL 4"
  },
  {
    "domain": 3,
    "title": "Ring 0",
    "desc": "Highest privilege CPU execution ring. Home to OS kernel and core services.",
    "formula": "Supervisor Mode"
  },
  {
    "domain": 3,
    "title": "Ring 3",
    "desc": "Lowest privilege CPU ring. Home to user applications and services.",
    "formula": "User Mode"
  },
  {
    "domain": 3,
    "title": "TCB",
    "desc": "Trusted Computing Base. All critical hardware, software, and firmware enforcing security.",
    "formula": "Security Foundation"
  },
  {
    "domain": 3,
    "title": "Reference Monitor",
    "desc": "Mediates all access. Must be tamperproof, always invoked, and small enough to analyze.",
    "formula": "TCB Core"
  },
  {
    "domain": 3,
    "title": "Covert Storage",
    "desc": "Using shared system storage indices (like file directories) to leak data.",
    "formula": "Covert Channel"
  },
  {
    "domain": 3,
    "title": "Covert Timing",
    "desc": "Modifying system performance intervals (like CPU ticks) to transmit binary leak.",
    "formula": "Covert Channel"
  },
  {
    "domain": 3,
    "title": "Symmetric Keys",
    "desc": "Single key for encryption/decryption. Math scales poorly as users increase.",
    "formula": "Keys = n * (n - 1) / 2"
  },
  {
    "domain": 3,
    "title": "Asymmetric Keys",
    "desc": "Uses public key to encrypt and private key to decrypt. Highly scalable.",
    "formula": "Keys = 2 * n"
  },
  {
    "domain": 3,
    "title": "Cryptographic Salt",
    "desc": "Random bytes appended to passwords before hashing. Stored in DB to stop rainbow tables.",
    "formula": "Unique per user"
  },
  {
    "domain": 3,
    "title": "Cryptographic Pepper",
    "desc": "Secret key appended to passwords. Stored separately from DB (e.g. HSM).",
    "formula": "Shared key"
  },
  {
    "domain": 3,
    "title": "ECB Mode",
    "desc": "Electronic Codebook. Encrypts blocks independently. Leaks plaintext structures.",
    "formula": "Symmetric: Insecure"
  },
  {
    "domain": 3,
    "title": "CBC Mode",
    "desc": "Cipher Block Chaining. XORs block with previous cipher block. Error propagates.",
    "formula": "Symmetric: Requires IV"
  },
  {
    "domain": 3,
    "title": "CTR Mode",
    "desc": "Counter mode. Encrypts incrementing counter, then XORs. Parallelizable.",
    "formula": "Symmetric: Stream Sim"
  },
  {
    "domain": 3,
    "title": "GCM Mode",
    "desc": "Galois/Counter Mode. Provides both confidentiality and authenticated integrity.",
    "formula": "Symmetric: Parallel"
  },
  {
    "domain": 3,
    "title": "AES",
    "desc": "Advanced Encryption Standard. Rijndael algorithm. Block cipher with 128/192/256 keys.",
    "formula": "Symmetric Standard"
  },
  {
    "domain": 3,
    "title": "ECC",
    "desc": "Elliptic Curve Cryptography. Asymmetric cipher with small key size, high speed.",
    "formula": "Best for Mobile"
  },
  {
    "domain": 3,
    "title": "Diffie-Hellman",
    "desc": "Key exchange algorithm. Permits safe key creation over insecure channels.",
    "formula": "No encryption/signatures"
  },
  {
    "domain": 3,
    "title": "RSA",
    "desc": "Asymmetric cipher based on prime factorization difficulty.",
    "formula": "Supports Encryption & Signatures"
  },
  {
    "domain": 3,
    "title": "Digital Signatures",
    "desc": "Private key signs hash, public key verifies. Provides integrity & non-repudiation.",
    "formula": "Asymmetric Math"
  },
  {
    "domain": 3,
    "title": "CRL",
    "desc": "Certificate Revocation List. List of revoked certificates published by CA.",
    "formula": "PKI Revocation"
  },
  {
    "domain": 3,
    "title": "OCSP",
    "desc": "Online Certificate Status Protocol. Query CA dynamically to check certificate status.",
    "formula": "Real-time PKI"
  },
  {
    "domain": 3,
    "title": "ASLR",
    "desc": "Address Space Layout Randomization. Randomizes RAM addresses of running code.",
    "formula": "Mitigates: Buffer overflows"
  },
  {
    "domain": 3,
    "title": "DEP",
    "desc": "Data Execution Prevention. Marks stack/heap memory segments as non-executable.",
    "formula": "Mitigates: Shellcode"
  },
  {
    "domain": 3,
    "title": "Side-Channel Attack",
    "desc": "Information leak via physical variables (CPU power usage, timing, electromagnetic).",
    "formula": "Physical Cryptanalysis"
  },
  {
    "domain": 3,
    "title": "Zero Knowledge Proof",
    "desc": "Proving knowledge of a secret to a verifier without revealing the secret.",
    "formula": "Cryptographic Protocol"
  },
  {
    "domain": 3,
    "title": "Homomorphic",
    "desc": "Cryptographic algorithm allowing math computations directly on ciphertext.",
    "formula": "Cloud Security"
  },
  {
    "domain": 4,
    "title": "OSI Layer 7",
    "desc": "Application layer. Interface for application communication (HTTP, SMTP, DNS).",
    "formula": "OSI Layer"
  },
  {
    "domain": 4,
    "title": "OSI Layer 4",
    "desc": "Transport layer. Handles host-to-host segment streams (TCP, UDP).",
    "formula": "OSI Layer"
  },
  {
    "domain": 4,
    "title": "OSI Layer 3",
    "desc": "Network layer. Routes packet streams across networks (IP, ICMP, Routers).",
    "formula": "OSI Layer"
  },
  {
    "domain": 4,
    "title": "OSI Layer 2",
    "desc": "Data Link layer. Transmits frames on physical links (MAC, Switches, ARP).",
    "formula": "OSI Layer"
  },
  {
    "domain": 4,
    "title": "TCP Handshake",
    "desc": "SYN -> SYN-ACK -> ACK. Establishes stateful session bounds.",
    "formula": "TCP Flow"
  },
  {
    "domain": 4,
    "title": "TCP SYN Flag",
    "desc": "Synchronize sequence numbers during connection initiation.",
    "formula": "TCP Flag"
  },
  {
    "domain": 4,
    "title": "TCP FIN Flag",
    "desc": "Gracefully terminates a stateful TCP connection.",
    "formula": "TCP Flag"
  },
  {
    "domain": 4,
    "title": "TCP RST Flag",
    "desc": "Abruptly resets an active TCP connection.",
    "formula": "TCP Flag"
  },
  {
    "domain": 4,
    "title": "IPsec AH",
    "desc": "Authentication Header. Provides integrity and origin check. No confidentiality.",
    "formula": "No encryption"
  },
  {
    "domain": 4,
    "title": "IPsec ESP",
    "desc": "Encapsulating Security Payload. Provides confidentiality (encryption) and integrity.",
    "formula": "Uses Encryption"
  },
  {
    "domain": 4,
    "title": "Transport Mode",
    "desc": "IPsec mode. Encrypts payload only. Original headers readable. Host-to-host.",
    "formula": "No Header Enc"
  },
  {
    "domain": 4,
    "title": "Tunnel Mode",
    "desc": "IPsec mode. Encrypts entire packet & header. Placed in new packet. Gateway-to-gateway.",
    "formula": "Encrypts Header"
  },
  {
    "domain": 4,
    "title": "DNSSEC",
    "desc": "Uses digital signatures to verify DNS records, blocking DNS cache poisoning.",
    "formula": "DNS Security"
  },
  {
    "domain": 4,
    "title": "ARP Spoofing",
    "desc": "Injects fake MAC-to-IP bindings to intercept local Layer 2 traffic.",
    "formula": "L2 Attack"
  },
  {
    "domain": 4,
    "title": "MAC Flooding",
    "desc": "Floods switch MAC table with fake entries, forcing it to act as a hub.",
    "formula": "L2 Attack"
  },
  {
    "domain": 4,
    "title": "WPA3 SAE",
    "desc": "Simultaneous Authentication of Equals. Dragonfly handshake. Resists dictionary attacks.",
    "formula": "Wi-Fi Security"
  },
  {
    "domain": 4,
    "title": "MPLS",
    "desc": "Multiprotocol Label Switching. Routes packets using short labels at Layer 2.5.",
    "formula": "Fast routing"
  },
  {
    "domain": 4,
    "title": "SD-WAN",
    "desc": "SDN control plane principles applied to Wide Area Networks.",
    "formula": "Dynamic Routing"
  },
  {
    "domain": 4,
    "title": "SDN Control Plane",
    "desc": "Centralized engine deciding network traffic routing policies.",
    "formula": "SDN Logic"
  },
  {
    "domain": 4,
    "title": "SDN Data Plane",
    "desc": "Network switch nodes forwarding packet frames based on control policies.",
    "formula": "SDN Execution"
  },
  {
    "domain": 4,
    "title": "FCoE",
    "desc": "Fiber Channel over Ethernet. Encapsulates FC frames inside Ethernet networks.",
    "formula": "Storage Convergence"
  },
  {
    "domain": 4,
    "title": "iSCSI",
    "desc": "Internet SCSI. Storage commands sent over standard TCP/IP port 3260.",
    "formula": "Storage Convergence"
  },
  {
    "domain": 4,
    "title": "SRTP",
    "desc": "Secure Real-time Transport Protocol. Provides encryption & message authentication for VoIP.",
    "formula": "VoIP Security"
  },
  {
    "domain": 4,
    "title": "Packet Filter",
    "desc": "Layer 3 stateless firewall. Checks packet IP and ports against ACL rules.",
    "formula": "Firewall: Stateless"
  },
  {
    "domain": 4,
    "title": "Stateful Inspection",
    "desc": "Layer 4 firewall. Tracks session states in a connection table.",
    "formula": "Firewall: Stateful"
  },
  {
    "domain": 4,
    "title": "Bastion Host",
    "desc": "A hardened server exposed to the public internet designed to withstand attacks.",
    "formula": "Network Boundary"
  },
  {
    "domain": 4,
    "title": "DMZ Subnet",
    "desc": "Screened subnet containing public-facing servers, isolated from private LAN.",
    "formula": "Network Boundary"
  },
  {
    "domain": 5,
    "title": "MFA",
    "desc": "Multi-Factor Authentication. Requires factors from two or more distinct categories.",
    "formula": "Factors: Know, Have, Are"
  },
  {
    "domain": 5,
    "title": "Something You Know",
    "desc": "Authentication factor based on knowledge (passwords, PINs).",
    "formula": "Factor 1"
  },
  {
    "domain": 5,
    "title": "Something You Have",
    "desc": "Authentication factor based on possession (hardware token, OTP phone).",
    "formula": "Factor 2"
  },
  {
    "domain": 5,
    "title": "Something You Are",
    "desc": "Authentication factor based on biometrics (fingerprints, eye patterns).",
    "formula": "Factor 3"
  },
  {
    "domain": 5,
    "title": "FRR",
    "desc": "False Reject Rate. Type I error. Percentage of authorized users blocked.",
    "formula": "Biometric Metric"
  },
  {
    "domain": 5,
    "title": "FAR",
    "desc": "False Accept Rate. Type II error. Percentage of intruders granted access.",
    "formula": "Biometric Metric"
  },
  {
    "domain": 5,
    "title": "CER",
    "desc": "Crossover Error Rate. The point where FRR equals FAR. Lower means more accurate.",
    "formula": "Accuracy Baseline"
  },
  {
    "domain": 5,
    "title": "Retina Scan",
    "desc": "Measures blood vessel layouts on the back of the eyeball. Highly accurate.",
    "formula": "Biometrics: Intrusive"
  },
  {
    "domain": 5,
    "title": "Iris Scan",
    "desc": "Measures colored ring patterns of the eye. Fast and non-intrusive.",
    "formula": "Biometrics: Standard"
  },
  {
    "domain": 5,
    "title": "SAML 2.0",
    "desc": "XML-based SSO protocol. Transmits assertions between IdP and SP.",
    "formula": "SSO Federation"
  },
  {
    "domain": 5,
    "title": "OAuth 2.0",
    "desc": "Authorization framework granting API access via JSON tokens.",
    "formula": "Authorization only"
  },
  {
    "domain": 5,
    "title": "OIDC",
    "desc": "OpenID Connect. Identity authentication layer sitting on top of OAuth 2.0.",
    "formula": "OIDC = Auth + OAuth"
  },
  {
    "domain": 5,
    "title": "Kerberos KDC",
    "desc": "Key Distribution Center. Port 88, issues tickets. Uses symmetric crypt.",
    "formula": "Authentication Server"
  },
  {
    "domain": 5,
    "title": "Kerberos TGT",
    "desc": "Ticket Granting Ticket. Allows subject to request service tickets from KDC.",
    "formula": "Issued by KDC AS"
  },
  {
    "domain": 5,
    "title": "Golden Ticket",
    "desc": "Forged Kerberos TGT. Created if krbtgt account password hash is compromised.",
    "formula": "Active Directory Compromise"
  },
  {
    "domain": 5,
    "title": "DAC",
    "desc": "Discretionary Access Control. Data access determined strictly by the data owner.",
    "formula": "Flexible / Owner control"
  },
  {
    "domain": 5,
    "title": "MAC",
    "desc": "Mandatory Access Control. OS kernel restricts access based on labels and clearance.",
    "formula": "Non-discretionary"
  },
  {
    "domain": 5,
    "title": "RBAC",
    "desc": "Role-Based Access Control. Permissions assigned to roles, not individual accounts.",
    "formula": "Simplifies Admin Overhead"
  },
  {
    "domain": 5,
    "title": "ABAC",
    "desc": "Attribute-Based Access Control. Evaluates dynamic attributes (time, IP, location).",
    "formula": "Conditional Access"
  },
  {
    "domain": 5,
    "title": "Privilege Creep",
    "desc": "Accumulation of unnecessary permissions over time. Mitigated by reviews.",
    "formula": "Least Privilege violation"
  },
  {
    "domain": 5,
    "title": "Access Review",
    "desc": "Periodic audit of user privileges to ensure Least Privilege compliance.",
    "formula": "Mitigates: Privilege Creep"
  },
  {
    "domain": 5,
    "title": "SSO",
    "desc": "Single Sign-On. Authenticates once to access multiple independent systems.",
    "formula": "Convenience vs. Risk"
  },
  {
    "domain": 5,
    "title": "Identity Provider",
    "desc": "Central service hosting and validating user identity assertions (IdP).",
    "formula": "Federation Component"
  },
  {
    "domain": 5,
    "title": "Service Provider",
    "desc": "Application relying on the Identity Provider's assertions to grant access (SP).",
    "formula": "Federation Component"
  },
  {
    "domain": 6,
    "title": "Security Assessment",
    "desc": "Evaluation of controls, policies, vulnerability scans, and organizational maturity.",
    "formula": "Broad Review"
  },
  {
    "domain": 6,
    "title": "Security Testing",
    "desc": "Actively running tests (like port scans, vulnerability scans) to verify controls.",
    "formula": "Active check"
  },
  {
    "domain": 6,
    "title": "Security Audit",
    "desc": "Formal compliance review conducted by independent third parties.",
    "formula": "Independent / Formal"
  },
  {
    "domain": 6,
    "title": "Threat Hunting",
    "desc": "Proactive manual search through logs and telemetry to discover stealthy threats.",
    "formula": "Hypothesis-driven"
  },
  {
    "domain": 6,
    "title": "Log Normalization",
    "desc": "Formatting logs from diverse sources into a common database schema.",
    "formula": "SIEM Preparation"
  },
  {
    "domain": 6,
    "title": "Log Correlation",
    "desc": "Linking separate events across log files to identify a broader security incident.",
    "formula": "SIEM Analytics"
  },
  {
    "domain": 6,
    "title": "Black Box Pen Test",
    "desc": "Tester has zero prior knowledge of target system architecture.",
    "formula": "External simulation"
  },
  {
    "domain": 6,
    "title": "White Box Pen Test",
    "desc": "Tester has full access to source code, network diagrams, and configurations.",
    "formula": "Internal audit"
  },
  {
    "domain": 6,
    "title": "Grey Box Pen Test",
    "desc": "Tester has limited architectural details (e.g. user credentials).",
    "formula": "Partial knowledge"
  },
  {
    "domain": 6,
    "title": "SAST",
    "desc": "Static Application Security Testing. Analyzes uncompiled code at rest.",
    "formula": "SDLC: Code / Shift-Left"
  },
  {
    "domain": 6,
    "title": "DAST",
    "desc": "Dynamic Application Security Testing. Tests running application in environment.",
    "formula": "SDLC: Test / Late check"
  },
  {
    "domain": 6,
    "title": "IAST",
    "desc": "Interactive Application Security Testing. Combines SAST & DAST inside compiler.",
    "formula": "Hybrid Testing"
  },
  {
    "domain": 6,
    "title": "RASP",
    "desc": "Runtime Application Self-Protection. Monitors application memory to block exploits.",
    "formula": "Active protection"
  },
  {
    "domain": 6,
    "title": "Fuzzing",
    "desc": "Sending random, malformed inputs to input fields to test crash limits.",
    "formula": "Input boundaries"
  },
  {
    "domain": 6,
    "title": "SOC 1",
    "desc": "Service Organization Control audit relevant to client financial reports.",
    "formula": "SSAE 18 Type"
  },
  {
    "domain": 6,
    "title": "SOC 2",
    "desc": "Audit relevant to Security, Availability, Integrity, Confidentiality, and Privacy.",
    "formula": "Restrict Use Report"
  },
  {
    "domain": 6,
    "title": "SOC 3",
    "desc": "SOC 2 audit contents formatted for public distribution.",
    "formula": "General Use Report"
  },
  {
    "domain": 6,
    "title": "SOC Type I",
    "desc": "Audit evaluating suitability of control designs at a single point in time.",
    "formula": "Point in Time"
  },
  {
    "domain": 6,
    "title": "SOC Type II",
    "desc": "Audit evaluating design and operational effectiveness over a period of time.",
    "formula": "Duration (6+ Months)"
  },
  {
    "domain": 6,
    "title": "CVSS Base Score",
    "desc": "Measures exploit difficulty and impact metrics. Fixed score.",
    "formula": "CVSS Core"
  },
  {
    "domain": 6,
    "title": "CVSS Temporal",
    "desc": "Measures risk state based on patch availability and exploit code maturity.",
    "formula": "CVSS Dynamic"
  },
  {
    "domain": 7,
    "title": "Incident Response",
    "desc": "Preparation -> Detection -> Containment -> Eradication -> Recovery -> Lessons.",
    "formula": "IR Steps"
  },
  {
    "domain": 7,
    "title": "Containment Phase",
    "desc": "Isolating compromised hosts (quarantine VLAN) to stop infection spread.",
    "formula": "IR Priority 1 (Active)"
  },
  {
    "domain": 7,
    "title": "Order of Volatility",
    "desc": "Preserving volatile evidence first (CPU registers -> RAM -> Disks -> Backups).",
    "formula": "Forensics rule"
  },
  {
    "domain": 7,
    "title": "Write Blocker",
    "desc": "Hardware/software device blocking write commands to target evidence disk.",
    "formula": "Forensic Integrity"
  },
  {
    "domain": 7,
    "title": "Chain of Custody",
    "desc": "Document log mapping evidence collection, access, and transfer handlers.",
    "formula": "Court Admissibility"
  },
  {
    "domain": 7,
    "title": "MTD",
    "desc": "Maximum Tolerable Downtime. Absolute ceiling of tolerable process downtime.",
    "formula": "MTD = RTO + WRT"
  },
  {
    "domain": 7,
    "title": "RTO",
    "desc": "Recovery Time Objective. Target duration to restore system features.",
    "formula": "System restore target"
  },
  {
    "domain": 7,
    "title": "RPO",
    "desc": "Recovery Point Objective. Maximum acceptable data loss duration.",
    "formula": "Backup frequency target"
  },
  {
    "domain": 7,
    "title": "Checklist Test",
    "desc": "DRP test. Distributing plan copies to departments to verify contacts/resources.",
    "formula": "DRP Test: Passive"
  },
  {
    "domain": 7,
    "title": "Tabletop Test",
    "desc": "Structured walk-through test. Representatives discuss DRP step-by-step.",
    "formula": "DRP Test: Verbal"
  },
  {
    "domain": 7,
    "title": "Simulation Test",
    "desc": "Active DRP exercise of procedures without disrupting production.",
    "formula": "DRP Test: Practice"
  },
  {
    "domain": 7,
    "title": "Parallel Test",
    "desc": "Critical systems restored and run at recovery site alongside production.",
    "formula": "DRP Test: Redundant"
  },
  {
    "domain": 7,
    "title": "Cutover Test",
    "desc": "Complete switch of operations to disaster site. High risk.",
    "formula": "DRP Test: Full Switch"
  },
  {
    "domain": 7,
    "title": "Full Backup",
    "desc": "Copies all system files. Resets archive bit.",
    "formula": "Backup: Slow/Clears bit"
  },
  {
    "domain": 7,
    "title": "Differential Backup",
    "desc": "Copies changes since last full. Does not reset archive bit.",
    "formula": "Backup: Faster/No bit reset"
  },
  {
    "domain": 7,
    "title": "Incremental Backup",
    "desc": "Copies changes since last backup of any type. Resets archive bit.",
    "formula": "Backup: Fast/Clears bit"
  },
  {
    "domain": 7,
    "title": "Mantrap",
    "desc": "Physical entry corridor with interlocking doors to block tailgating.",
    "formula": "Physical Control"
  },
  {
    "domain": 7,
    "title": "Fences (deterrent)",
    "desc": "Standard fence heights: 6-7 feet to act as deterrent, 8+ feet with barbed wire.",
    "formula": "Physical Security"
  },
  {
    "domain": 7,
    "title": "Pre-Action System",
    "desc": "Dual-sensor fire suppression system. Prevents accidental water discharge.",
    "formula": "Best for Server Rooms"
  },
  {
    "domain": 7,
    "title": "RAID 0",
    "desc": "Disk striping. Speeds read/writes. Zero redundancy.",
    "formula": "Not fault tolerant"
  },
  {
    "domain": 7,
    "title": "RAID 1",
    "desc": "Disk mirroring. Full duplicate copy of drive data.",
    "formula": "Redundancy target: 1 Disk"
  },
  {
    "domain": 7,
    "title": "RAID 5",
    "desc": "Striping with distributed parity. Can survive loss of single disk.",
    "formula": "Min disks: 3"
  },
  {
    "domain": 7,
    "title": "RAID 10",
    "desc": "Nested RAID 1+0. Striped mirrors. High performance & redundancy.",
    "formula": "Min disks: 4"
  },
  {
    "domain": 8,
    "title": "Waterfall Model",
    "desc": "Sequential, linear software phase flow. Hard to adapt to change.",
    "formula": "Traditional SDLC"
  },
  {
    "domain": 8,
    "title": "Agile Scrum",
    "desc": "Iterative software development sprint loops guided by Product Owner.",
    "formula": "Iterative SDLC"
  },
  {
    "domain": 8,
    "title": "DevSecOps",
    "desc": "Integrating security checks (SAST/DAST automation) into CI/CD pipelines.",
    "formula": "Continuous Security"
  },
  {
    "domain": 8,
    "title": "Software Escrow",
    "desc": "Storing application source code with third party to protect against bankruptcy.",
    "formula": "Vendor Risk Mitigation"
  },
  {
    "domain": 8,
    "title": "CMMI Level 1",
    "desc": "Initial maturity level. Processes are ad-hoc, reactive, and chaotic.",
    "formula": "CMMI Maturity"
  },
  {
    "domain": 8,
    "title": "CMMI Level 2",
    "desc": "Repeatable maturity level. Basic project tracking established.",
    "formula": "CMMI Maturity"
  },
  {
    "domain": 8,
    "title": "CMMI Level 3",
    "desc": "Defined maturity level. Processes are documented and standardized.",
    "formula": "CMMI Maturity"
  },
  {
    "domain": 8,
    "title": "CMMI Level 4",
    "desc": "Quantitatively Managed maturity level. Metrics measured and controlled.",
    "formula": "CMMI Maturity"
  },
  {
    "domain": 8,
    "title": "CMMI Level 5",
    "desc": "Optimizing maturity level. Continuous process improvement focus.",
    "formula": "CMMI Maturity"
  },
  {
    "domain": 8,
    "title": "SQL Injection",
    "desc": "Attacker inserts database instructions in input fields to bypass access controls.",
    "formula": "Mitigates: Prepared Statements"
  },
  {
    "domain": 8,
    "title": "Stored XSS",
    "desc": "Attacker injects script permanently in DB. Runs on user page request.",
    "formula": "Stored Cross-Site Script"
  },
  {
    "domain": 8,
    "title": "Reflected XSS",
    "desc": "Attacker embeds script payload in URL query parameter. User clicked.",
    "formula": "Reflected Cross-Site Script"
  },
  {
    "domain": 8,
    "title": "CSRF",
    "desc": "Forces victim's browser to send unsolicited requests to a logged-in app.",
    "formula": "Mitigates: Anti-CSRF token"
  },
  {
    "domain": 8,
    "title": "SSRF",
    "desc": "Forces server to send HTTP requests to internal networks.",
    "formula": "Mitigates: Input white-listing"
  },
  {
    "domain": 8,
    "title": "TOCTOU",
    "desc": "Race condition. Time-of-check to time-of-use change exploit.",
    "formula": "State change exploit"
  },
  {
    "domain": 8,
    "title": "Buffer Overflow",
    "desc": "Writing more data to buffer than it can hold, overwriting adjacent memory.",
    "formula": "Mitigates: Bounds checking"
  },
  {
    "domain": 1,
    "title": "Risk Appetite",
    "desc": "The amount of risk an organization is willing to accept in pursuit of its goals.",
    "formula": "Governance"
  },
  {
    "domain": 1,
    "title": "Risk Tolerance",
    "desc": "The acceptable variation relative to the achievement of an objective.",
    "formula": "Governance"
  },
  {
    "domain": 1,
    "title": "COBIT",
    "desc": "Framework for IT governance and management by ISACA.",
    "formula": "Framework"
  },
  {
    "domain": 1,
    "title": "ISO 27001",
    "desc": "International standard for Information Security Management Systems (ISMS).",
    "formula": "Framework"
  },
  {
    "domain": 1,
    "title": "ISO 27002",
    "desc": "Code of practice for information security controls.",
    "formula": "Framework"
  },
  {
    "domain": 1,
    "title": "ISO 31000",
    "desc": "Risk management guidelines standard.",
    "formula": "Framework"
  },
  {
    "domain": 1,
    "title": "NIST SP 800-30",
    "desc": "Risk assessment guideline for federal systems.",
    "formula": "Framework"
  },
  {
    "domain": 1,
    "title": "NIST SP 800-37",
    "desc": "Risk Management Framework (RMF) steps guide.",
    "formula": "Framework"
  },
  {
    "domain": 1,
    "title": "NIST SP 800-53",
    "desc": "Security and Privacy Controls for Federal Information Systems.",
    "formula": "Framework"
  },
  {
    "domain": 1,
    "title": "CISA",
    "desc": "Cybersecurity and Infrastructure Security Agency (US).",
    "formula": "Agency"
  },
  {
    "domain": 1,
    "title": "CISM",
    "desc": "Certified Information Security Manager certification.",
    "formula": "Credentials"
  },
  {
    "domain": 1,
    "title": "NIST Cyber Framework",
    "desc": "Core, Tiers, Profiles structure to manage cybersecurity risk.",
    "formula": "Framework"
  },
  {
    "domain": 1,
    "title": "Federal Rules of Evidence",
    "desc": "US rules governing admissibility of evidence in federal court.",
    "formula": "Legal"
  },
  {
    "domain": 1,
    "title": "Computer Fraud and Abuse Act",
    "desc": "US law criminalizing unauthorized computer access.",
    "formula": "CFAA"
  },
  {
    "domain": 1,
    "title": "Electronic Communications Privacy Act",
    "desc": "US law protecting wire, oral, and electronic communications.",
    "formula": "ECPA"
  },
  {
    "domain": 1,
    "title": "Sarbanes-Oxley (SOX)",
    "desc": "US law protecting investors by improving corporate financial disclosures.",
    "formula": "Financial Law"
  },
  {
    "domain": 1,
    "title": "Gramm-Leach-Bliley Act (GLBA)",
    "desc": "US law requiring financial institutions to explain information-sharing practices.",
    "formula": "Financial Law"
  },
  {
    "domain": 1,
    "title": "COPPA",
    "desc": "Children's Online Privacy Protection Act. Protects kids under 13 online.",
    "formula": "Privacy Law"
  },
  {
    "domain": 1,
    "title": "CCPA",
    "desc": "California Consumer Privacy Act. State-level privacy framework.",
    "formula": "Privacy Law"
  },
  {
    "domain": 1,
    "title": "FERPA",
    "desc": "Family Educational Rights and Privacy Act. Protects student records.",
    "formula": "Education Law"
  },
  {
    "domain": 1,
    "title": "EULA",
    "desc": "End User License Agreement. Software license contract.",
    "formula": "Contract Law"
  },
  {
    "domain": 1,
    "title": "Shrink-Wrap Agreement",
    "desc": "Contract accepted by opening product packaging.",
    "formula": "Contract Law"
  },
  {
    "domain": 1,
    "title": "Click-Accept Agreement",
    "desc": "Contract accepted by clicking 'I agree' during setup.",
    "formula": "Contract Law"
  },
  {
    "domain": 1,
    "title": "Patent Infringement",
    "desc": "Unauthorized use, sale, or manufacture of patented invention.",
    "formula": "IP Civil Law"
  },
  {
    "domain": 1,
    "title": "Copyright Piracy",
    "desc": "Unauthorized reproduction or distribution of copyrighted works.",
    "formula": "IP Civil Law"
  },
  {
    "domain": 1,
    "title": "Trademark Dilution",
    "desc": "Unauthorized use of trademark reducing its distinctiveness.",
    "formula": "IP Civil Law"
  },
  {
    "domain": 1,
    "title": "Delphi Technique",
    "desc": "Qualitative risk method using anonymous expert panels and consensus rounds.",
    "formula": "Qualitative Risk"
  },
  {
    "domain": 1,
    "title": "Threat Events",
    "desc": "Specific occurrences that can cause damage to assets.",
    "formula": "Risk Term"
  },
  {
    "domain": 1,
    "title": "Vulnerability Assessment",
    "desc": "Identifying and prioritizing system vulnerabilities.",
    "formula": "Risk Term"
  },
  {
    "domain": 1,
    "title": "Business Impact Analysis",
    "desc": "Part of BCP. Identifies critical business functions and downtime metrics.",
    "formula": "BCP Step"
  },
  {
    "domain": 1,
    "title": "Downstream Liability",
    "desc": "Liability incurred by failure to implement security causing partner loss.",
    "formula": "Due Care failure"
  },
  {
    "domain": 1,
    "title": "Collusion",
    "desc": "Secret agreement or cooperation between employees to commit fraud.",
    "formula": "Mitigated by: SoD"
  },
  {
    "domain": 1,
    "title": "Background Checks",
    "desc": "Verifying candidate credentials during hiring.",
    "formula": "Personnel Control"
  },
  {
    "domain": 1,
    "title": "Termination Policy",
    "desc": "Standard operations when employee leaves (immediate IAM disable, recovery of keys).",
    "formula": "Personnel Security"
  },
  {
    "domain": 1,
    "title": "Asset Management",
    "desc": "Inventorying and tracking hardware/software assets.",
    "formula": "Asset Term"
  },
  {
    "domain": 2,
    "title": "Data Retention",
    "desc": "Policies governing how long data is kept before destruction.",
    "formula": "Governance"
  },
  {
    "domain": 2,
    "title": "Data Archiving",
    "desc": "Moving inactive data to long-term storage for legal/historical reasons.",
    "formula": "Data State"
  },
  {
    "domain": 2,
    "title": "PII Masking",
    "desc": "Removing PII identifiers from datasets during development.",
    "formula": "Privacy Control"
  },
  {
    "domain": 2,
    "title": "Static Masking",
    "desc": "Masking data permanently in database copies.",
    "formula": "Database Control"
  },
  {
    "domain": 2,
    "title": "Dynamic Masking",
    "desc": "Masking data in real-time as it is queried.",
    "formula": "Database Control"
  },
  {
    "domain": 2,
    "title": "Data Classification Policy",
    "desc": "Document defining data categories, labels, and handling instructions.",
    "formula": "Policy"
  },
  {
    "domain": 2,
    "title": "Information Life Cycle",
    "desc": "Acquisition -> Retention -> Archive -> Destruction.",
    "formula": "Lifecycle"
  },
  {
    "domain": 2,
    "title": "Data Security Baseline",
    "desc": "Standardized rules for encrypting and protecting data assets.",
    "formula": "Baseline"
  },
  {
    "domain": 2,
    "title": "FIPS 140-2",
    "desc": "US security standard for cryptographic modules.",
    "formula": "Cryptography Standard"
  },
  {
    "domain": 2,
    "title": "FIPS 140-3",
    "desc": "Updated standard for cryptographic modules security testing.",
    "formula": "Cryptography Standard"
  },
  {
    "domain": 2,
    "title": "Scoping Rules",
    "desc": "Criteria defining which system components require controls.",
    "formula": "Control Scoping"
  },
  {
    "domain": 2,
    "title": "Control Overrides",
    "desc": "Exceptions granted to bypass security baselines with management approval.",
    "formula": "Control Tailoring"
  },
  {
    "domain": 2,
    "title": "Data Processor Contract",
    "desc": "GDPR-mandated contract between controller and processor.",
    "formula": "Contract Law"
  },
  {
    "domain": 2,
    "title": "Privacy Shield",
    "desc": "Struck down transatlantic data sharing pact (replaced by Data Privacy Framework).",
    "formula": "International Law"
  },
  {
    "domain": 2,
    "title": "Information Governance",
    "desc": "Framework for managing corporate information assets.",
    "formula": "EDRM Phase 1"
  },
  {
    "domain": 2,
    "title": "Data Classification Label",
    "desc": "Metadata tag applied to documents/files indicating sensitivity.",
    "formula": "Data Tag"
  },
  {
    "domain": 2,
    "title": "Public Data",
    "desc": "Data requiring zero confidentiality. Safe for public release.",
    "formula": "Label: Internal"
  },
  {
    "domain": 2,
    "title": "Proprietary Data",
    "desc": "Data defining trade secrets, intellectual property, or code.",
    "formula": "Label: Corporate"
  },
  {
    "domain": 2,
    "title": "Private Data",
    "desc": "Data containing customer or employee PII records.",
    "formula": "Label: Corporate"
  },
  {
    "domain": 2,
    "title": "Sensitive Data",
    "desc": "Internal business data not intended for public viewing.",
    "formula": "Label: Corporate"
  },
  {
    "domain": 3,
    "title": "Covert Timing Channel",
    "desc": "Process alters system response delay intervals to transmit binary leak.",
    "formula": "Covert timing"
  },
  {
    "domain": 3,
    "title": "Secure State",
    "desc": "A system state where all access requests adhere to security policy rules.",
    "formula": "Formal Model"
  },
  {
    "domain": 3,
    "title": "Simple Security Property",
    "desc": "No Read Up rule in Bell-LaPadula model.",
    "formula": "Bell-LaPadula"
  },
  {
    "domain": 3,
    "title": "Star Property",
    "desc": "No Write Down rule in Bell-LaPadula model.",
    "formula": "Bell-LaPadula"
  },
  {
    "domain": 3,
    "title": "Simple Integrity Property",
    "desc": "No Read Down rule in Biba model.",
    "formula": "Biba"
  },
  {
    "domain": 3,
    "title": "Star Integrity Property",
    "desc": "No Write Up rule in Biba model.",
    "formula": "Biba"
  },
  {
    "domain": 3,
    "title": "Constrained Data Items",
    "desc": "Data items subject to integrity controls in Clark-Wilson.",
    "formula": "Clark-Wilson (CDIs)"
  },
  {
    "domain": 3,
    "title": "Unconstrained Data Items",
    "desc": "Data items not subject to integrity controls in Clark-Wilson.",
    "formula": "Clark-Wilson (UDIs)"
  },
  {
    "domain": 3,
    "title": "Transformation Procedures",
    "desc": "Transactions mediating CDI access in Clark-Wilson.",
    "formula": "Clark-Wilson (TPs)"
  },
  {
    "domain": 3,
    "title": "Integrity Verification",
    "desc": "Procedures verifying CDIs match security states in Clark-Wilson.",
    "formula": "Clark-Wilson (IVPs)"
  },
  {
    "domain": 3,
    "title": "Security Target (ST)",
    "desc": "Vendor product specifications submitted for CC evaluation.",
    "formula": "Common Criteria"
  },
  {
    "domain": 3,
    "title": "Protection Profile (PP)",
    "desc": "User security requirements baseline under CC.",
    "formula": "Common Criteria"
  },
  {
    "domain": 3,
    "title": "Ring 1",
    "desc": "Privilege execution ring for operating system device drivers.",
    "formula": "CPU Ring"
  },
  {
    "domain": 3,
    "title": "Ring 2",
    "desc": "Privilege ring for database engines or system services.",
    "formula": "CPU Ring"
  },
  {
    "domain": 3,
    "title": "Supervisor Mode",
    "desc": "Privileged state allowing execution of Ring 0-2 kernel instructions.",
    "formula": "CPU Mode"
  }
];

// 3. STUDY CHECKLIST TOPICS (DOMAIN-WISE SUBTOPICS)
const CHECKLIST_TOPICS = [
  { domain: 1, topic: "Understand quantitative risk formulas (SLE, ALE, ARO)" },
  { domain: 1, topic: "Learn GDPR roles (Data Controller vs. Data Processor)" },
  { domain: 1, topic: "Memorize the 4 Canons of the ISC2 Code of Ethics" },
  { domain: 1, topic: "Learn Threat Modeling concepts (STRIDE vs DREAD)" },
  
  { domain: 2, topic: "Understand differences in data sanitization (Clearing vs. Purging)" },
  { domain: 2, topic: "Differentiate roles (Data Owner vs. Custodian vs. Steward)" },
  { domain: 2, topic: "Learn government vs. private classification labels" },

  { domain: 3, topic: "Memorize Bell-LaPadula and Biba properties (Star/Simple properties)" },
  { domain: 3, topic: "Understand Clark-Wilson Access Triple and Brewer-Nash Chinese Wall" },
  { domain: 3, topic: "Memorize symmetric key formulas: n(n-1)/2" },
  { domain: 3, topic: "Differentiate processor protections (ASLR vs DEP)" },

  { domain: 4, topic: "Learn IPsec ESP vs. AH protocols and Tunnel/Transport modes" },
  { domain: 4, topic: "Understand the OSI 7-layer models and active encapsulation" },
  { domain: 4, topic: "Review DNS design weaknesses and DNSSEC validation" },
  { domain: 4, topic: "Understand firewalls (Packet filtering vs Stateful vs Proxy)" },

  { domain: 5, topic: "Understand SAML 2.0 authentication assertion flow (IdP vs SP)" },
  { domain: 5, topic: "Memorize the 5 Authentication Factors" },
  { domain: 5, topic: "Differentiate Access Control Models (DAC vs MAC vs RBAC vs ABAC)" },

  { domain: 6, topic: "Differentiate SAST, DAST, and fuzz testing in CI/CD" },
  { domain: 6, topic: "Review SOC reports (SOC 1 vs 2 vs 3 and Type I vs Type II)" },
  { domain: 6, topic: "Differentiate Penetration testing box models (Black vs White vs Gray)" },

  { domain: 7, topic: "Memorize the 6 phases of Incident Response lifecycle" },
  { domain: 7, topic: "Understand digital forensics Order of Volatility" },
  { domain: 7, topic: "Learn BCP metrics (MTD, RTO, RPO, WRT)" },
  { domain: 7, topic: "Differentiate DRP testing types (Tabletop vs Parallel vs Cutover)" },

  { domain: 8, topic: "Learn SQL Injection mitigation using parameterized queries" },
  { domain: 8, topic: "Understand Secure SDLC stages and RFP security inclusion" },
  { domain: 8, topic: "Review OWASP Top 10 vulnerabilities (Injection, XSS, CSRF)" }
];

// 4. PORTAL STATE MANAGEMENT
const STATE = {
  activeTab: "dashboard",
  studyLogs: [],
  checkedTopics: [],
  quizHistory: [],
  examHistory: [],
  user: null,
  countdownDate: null,
  cheatsheetActiveTag: "all",
  
  // Current Quiz State
  currentQuiz: {
    questions: [],
    currentIndex: 0,
    answers: {},
    timer: null,
    timeRemaining: 0,
    flagged: []
  }
};

// 5. INITIALIZATION & STORAGE
let _questionsDbPromise = null;
function loadQuestionsDatabase() {
  if (_questionsDbPromise) return _questionsDbPromise;

  _questionsDbPromise = new Promise((resolve, reject) => {
    if (typeof CISSP_QUESTIONS !== 'undefined' && CISSP_QUESTIONS.length > 0) {
      resolve(CISSP_QUESTIONS);
      return;
    }

    console.log('[Database] Lazy loading questions database...');
    const script = document.createElement('script');
    script.src = 'questions.js?v=2.0';
    script.onload = () => {
      console.log('[Database] Questions database loaded successfully! Total:', CISSP_QUESTIONS.length);
      initDailyChallenge();
      resolve(CISSP_QUESTIONS);
    };
    script.onerror = (err) => {
      console.error('[Database] Failed to load questions database:', err);
      _questionsDbPromise = null; // Reset to allow retry
      reject(err);
    };
    document.body.appendChild(script);
  });

  return _questionsDbPromise;
}

function initApp() {
  loadFromLocalStorage();
  setupEventListeners();
  renderDashboard();
  renderChecklist();
  renderStudyLogs();
  renderActiveFlashcard();
  initMobileNav();
  initScrollToTop();
  initAITutor();

  // Defer non-critical and heavy components to optimize startup on mobile
  setTimeout(() => {
    initCheatSheet();
    initGames();
    initDailyChallenge();
    renderStudyHeatmap();
    checkWeakestDomain();
    renderDomainProgressBadges();
    renderSRSLabels();
    initExamDay();
  }, 100);

  // Background pre-fetch after 2.5 seconds when CPU is idle
  setTimeout(loadQuestionsDatabase, 2500);
}

function safeJsonParse(key, fallbackValue) {
  try {
    const val = localStorage.getItem(key);
    if (!val || val === 'undefined') return fallbackValue;
    return JSON.parse(val);
  } catch (e) {
    console.warn(`[Storage] Failed to parse localStorage key "${key}":`, e);
    return fallbackValue;
  }
}

function loadFromLocalStorage() {
  STATE.studyLogs = safeJsonParse("cissp_study_logs", []);
  STATE.checkedTopics = safeJsonParse("cissp_checked_topics", []);
  STATE.quizHistory = safeJsonParse("cissp_quiz_history", []);
  STATE.countdownDate = localStorage.getItem("cissp_countdown_date");
  STATE.mistakes = safeJsonParse("cissp_mistakes", []);

  if (!STATE.countdownDate) {
    const defaultTarget = new Date();
    defaultTarget.setDate(defaultTarget.getDate() + 90); // Default 90 days
    STATE.countdownDate = defaultTarget.toISOString().split("T")[0];
    localStorage.setItem("cissp_countdown_date", STATE.countdownDate);
  }

  // Load and merge custom AI generated flashcards
  const customCards = JSON.parse(localStorage.getItem("cissp_custom_flashcards")) || [];
  customCards.forEach(c => {
    if (!FLASHCARDS.some(fc => fc.term.toLowerCase() === c.term.toLowerCase())) {
      FLASHCARDS.push(c);
    }
  });
}

function saveToLocalStorage() {
  localStorage.setItem("cissp_study_logs", JSON.stringify(STATE.studyLogs));
  localStorage.setItem("cissp_checked_topics", JSON.stringify(STATE.checkedTopics));
  localStorage.setItem("cissp_quiz_history", JSON.stringify(STATE.quizHistory));
}

// 6. EVENT LISTENERS
function setupEventListeners() {
  // Sidebar Tab Switch
  document.querySelectorAll(".sidebar .nav-links li").forEach(link => {
    link.addEventListener("click", () => {
      const tabId = link.getAttribute("data-tab");
      switchTab(tabId);
    });
  });

  // Navigation Shortcut Links
  document.querySelector(".nav-to-memory")?.addEventListener("click", () => switchTab("memory"));
  document.querySelectorAll(".start-mock-btn").forEach(btn => {
    btn.addEventListener("click", () => startExam(true));
  });

  // Quiz Setup Action Buttons
  document.querySelector(".start-full-mock")?.addEventListener("click", () => startExam(true));
  document.querySelector(".start-domain-quiz")?.addEventListener("click", () => startExam(false));

  // Exam Controls
  document.getElementById("exam-flag-btn")?.addEventListener("click", toggleFlagCurrentQuestion);
  document.getElementById("exam-show-ans-btn")?.addEventListener("click", showQuestionExplanation);
  document.getElementById("exam-prev-btn")?.addEventListener("click", prevExamQuestion);
  document.getElementById("exam-next-btn")?.addEventListener("click", nextExamQuestion);
  document.getElementById("exam-submit-btn")?.addEventListener("click", submitExam);
  document.getElementById("exam-exit-btn")?.addEventListener("click", exitExamEarly);
  document.getElementById("close-results-btn")?.addEventListener("click", closeResultsModal);

  // PDF Library Toggle Selector
  document.getElementById("pdf-library-select")?.addEventListener("change", (e) => {
    const val = e.target.value;
    const conceptWrapper = document.getElementById("concept-reader-wrapper");
    const certmikeWrapper = document.getElementById("certmike-reader-wrapper");
    
    if (val === "concept") {
      conceptWrapper?.classList.remove("hidden");
      certmikeWrapper?.classList.add("hidden");
      if (pdfDoc) {
        renderBookPage(bookPageNum);
      }
    } else if (val === "certmike") {
      conceptWrapper?.classList.add("hidden");
      certmikeWrapper?.classList.remove("hidden");
      if (certmikePdfDoc) {
        renderCertMikePage(certmikePageNum);
      }
    }
  });

  // Memory Palace Calculators
  const calcInputs = ["calc-av", "calc-ef", "calc-aro", "calc-n-users"];
  calcInputs.forEach(id => {
    document.getElementById(id)?.addEventListener("input", runCalculators);
  });

  // Flashcards Flipping & Audio TTS
  const flashcardElement = document.getElementById("active-flashcard");
  flashcardElement?.addEventListener("click", (e) => {
    // If user clicked the speak buttons, read aloud instead of flipping
    if (e.target.closest(".tts-play-btn")) return;
    flashcardElement.classList.toggle("flipped");
  });

  document.getElementById("flashcard-front-speak")?.addEventListener("click", (e) => {
    e.stopPropagation();
    const cards = getFilteredCards();
    if (cards.length > 0 && cards[currentCardIndex]) {
      speakText(cards[currentCardIndex].title, e.currentTarget);
    }
  });

  document.getElementById("flashcard-back-speak")?.addEventListener("click", (e) => {
    e.stopPropagation();
    const cards = getFilteredCards();
    if (cards.length > 0 && cards[currentCardIndex]) {
      const card = cards[currentCardIndex];
      const readText = `${card.title}. Definition: ${card.desc}. Formula: ${card.formula}`;
      speakText(readText, e.currentTarget);
    }
  });

  // Bind Dashboard Tips TTS
  document.querySelectorAll(".tip-speak-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const parentCard = btn.closest(".tip-details");
      if (parentCard) {
        const title = parentCard.querySelector("h4").textContent.trim();
        const desc = parentCard.querySelector("p").textContent.trim();
        speakText(`${title}. ${desc}`, btn);
      }
    });
  });

  document.getElementById("prev-card-btn")?.addEventListener("click", prevFlashcard);
  document.getElementById("next-card-btn")?.addEventListener("click", nextFlashcard);
  document.getElementById("flashcard-domain-filter")?.addEventListener("change", () => {
    renderActiveFlashcard(true); // Reset to card index 0 on filter update
  });

  // Study Planner Logger
  document.getElementById("save-log-btn")?.addEventListener("click", saveStudyLog);

  // Guide Tab Links
  document.querySelectorAll("#guide-tab-links li").forEach(link => {
    link.addEventListener("click", () => {
      document.querySelectorAll("#guide-tab-links li").forEach(l => l.classList.remove("active"));
      link.classList.add("active");
      const domainNum = link.getAttribute("data-guide");
      renderGuideContent(domainNum);
    });
  });

  // Cheat Sheet Filters
  document.getElementById("cheatsheet-search")?.addEventListener("input", renderCheatSheet);
  document.getElementById("cheatsheet-domain-select")?.addEventListener("change", renderCheatSheet);
  document.querySelectorAll(".tag-filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".tag-filter-btn").forEach(b => {
        b.classList.remove("btn-primary");
        b.classList.add("btn-secondary");
        b.style.borderColor = "";
      });
      btn.classList.add("btn-primary");
      btn.classList.remove("btn-secondary");
      btn.style.borderColor = "var(--primary)";
      STATE.cheatsheetActiveTag = btn.getAttribute("data-tag");
      renderCheatSheet();
    });
  });

  // Cross-Book Page Reference search locator listener
  document.getElementById("ref-search-input")?.addEventListener("input", searchCrossBookReferences);

  // Load Member login state and visitor counters
  initAuthAndCounters();
}

function switchTab(tabId) {
  // Sidebar state
  document.querySelectorAll(".sidebar .nav-links li").forEach(l => l.classList.remove("active"));
  document.querySelector(`.sidebar .nav-links li[data-tab="${tabId}"]`)?.classList.add("active");

  // Tab visibility
  document.querySelectorAll(".tab-content").forEach(tab => tab.classList.remove("active"));
  document.getElementById(tabId)?.classList.add("active");

  STATE.activeTab = tabId;

  // Specific tab resets/inits
  if (tabId === "practice" || tabId === "exam-day" || tabId === "mistake-log") {
    loadQuestionsDatabase();
  }
  if (tabId === "guides") {
    renderGuideContent(1); // Default to Domain 1
  }
  if (tabId === "cheatsheet") {
    renderCheatSheet();
  }
  if (tabId === "mistake-log") {
    renderMistakeLog();
  }
  if (tabId === "memory") {
    runCalculators();
  }
  if (tabId === "pdf-library") {
    const selector = document.getElementById("pdf-library-select");
    if (selector) {
      if (selector.value === "concept") {
        initBookReader();
        if (pdfDoc) renderBookPage(bookPageNum);
      } else if (selector.value === "certmike") {
        initCertMikeReader();
        if (certmikePdfDoc) renderCertMikePage(certmikePageNum);
      }
    }
  }
  if (tabId === "mindmaps") {
    initMindMapExplorer();
    if (document.getElementById("btn-mindmaps-pdf")?.classList.contains("active-game-tab")) {
      initMindMapsReader();
      if (mindmapsPdfDoc) renderMindMapsPage(mindmapsPageNum);
    }
  }
  if (tabId === "games") {
    loadActiveGame();
  }
}

// =================================================================
// DASHBOARD RENDERING & ANALYTICS
// =================================================================
function renderDashboard() {
  // Countdown Timer
  const targetDate = new Date(STATE.countdownDate);
  const now = new Date();
  const diffTime = targetDate - now;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  const countdownText = document.getElementById("countdown-text");
  if (countdownText) {
    if (diffDays > 0) {
      countdownText.innerText = `${diffDays} Days until Target Exam Date`;
    } else {
      countdownText.innerText = `Target Exam Date Reached!`;
    }
  }

  // Calculate Metrics
  const totalHours = STATE.studyLogs.reduce((acc, log) => acc + log.hours, 0);
  document.getElementById("total-study-hours").innerText = `${totalHours.toFixed(1)}h`;

  const avgScore = calculateAverageQuizScore();
  document.getElementById("average-score-lbl").innerText = `${avgScore}%`;

  const checklistProgress = (STATE.checkedTopics.length / CHECKLIST_TOPICS.length) * 100;
  const readinessRating = Math.round((checklistProgress * 0.5) + (avgScore * 0.5));
  
  // Progress Ring
  document.getElementById("readiness-pct").innerText = `${readinessRating}%`;
  
  const readinessLabel = document.getElementById("readiness-label");
  if (readinessLabel) {
    if (readinessRating >= 85) readinessLabel.innerText = "Exam Ready";
    else if (readinessRating >= 70) readinessLabel.innerText = "Competent";
    else if (readinessRating >= 40) readinessLabel.innerText = "Progressing";
    else readinessLabel.innerText = "Begin Study";
  }

  const ringCircle = document.getElementById("overall-circle");
  if (ringCircle) {
    const circumference = 2 * Math.PI * 70; // 439.8
    const offset = circumference - (readinessRating / 100) * circumference;
    ringCircle.style.strokeDashoffset = offset;
  }

  // Render Domain Bars
  renderDomainProgressBars();
}

function calculateAverageQuizScore() {
  if (STATE.quizHistory.length === 0) return 0;
  const sum = STATE.quizHistory.reduce((acc, exam) => acc + exam.score, 0);
  return Math.round(sum / STATE.quizHistory.length);
}

function renderDomainProgressBars() {
  const container = document.getElementById("domain-progress-bars");
  if (!container) return;
  container.innerHTML = "";

  // Group checklist items by domain to calculate progress
  for (let d = 1; d <= 8; d++) {
    const domainTopics = CHECKLIST_TOPICS.filter(t => t.domain === d);
    const domainChecked = STATE.checkedTopics.filter(id => {
      const topic = CHECKLIST_TOPICS[id];
      return topic && topic.domain === d;
    });
    
    // Average scores for the domain in quiz history
    const domainScores = STATE.quizHistory.filter(q => q.domain === d);
    const avgScore = domainScores.length > 0 ? domainScores.reduce((acc, val) => acc + val.score, 0) / domainScores.length : 0;
    
    // 50% checklist progress + 50% average score
    const checkProgress = domainTopics.length > 0 ? (domainChecked.length / domainTopics.length) * 100 : 0;
    const progressVal = Math.round((checkProgress * 0.5) + (avgScore * 0.5));
    
    const domainName = DOMAIN_GUIDES[d]?.title || `Domain ${d}`;
    
    const barRow = document.createElement("div");
    barRow.className = "domain-bar-row";
    barRow.innerHTML = `
      <div class="domain-bar-info">
        <span>${domainName}</span>
        <span>${progressVal}%</span>
      </div>
      <div class="domain-bar-bg">
        <div class="domain-bar-fill" style="width: ${progressVal}%"></div>
      </div>
    `;
    container.appendChild(barRow);
  }
}

// =================================================================
// PRACTICE EXAM SIMULATOR
// =================================================================
let quizTimeInterval = null;

function startExam(isMock) {
  const btn = (typeof event !== 'undefined' && event?.currentTarget) || null;
  let originalText = '';
  if (btn && btn.tagName === 'BUTTON') {
    originalText = btn.innerHTML;
    btn.disabled = true;
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Loading...';
  }

  loadQuestionsDatabase().then(() => {
    if (btn && btn.tagName === 'BUTTON') {
      btn.disabled = false;
      btn.innerHTML = originalText;
    }

    STATE.currentQuiz.currentIndex = 0;
    STATE.currentQuiz.answers = {};
    STATE.currentQuiz.flagged = [];
    clearInterval(quizTimeInterval);

    let targetQuestions = [];
    if (isMock) {
      // Select exactly 125 randomized questions (representative midpoint of 100-150 range)
      targetQuestions = [...CISSP_QUESTIONS].sort(() => 0.5 - Math.random()).slice(0, 125);
      document.getElementById("exam-title-lbl").innerText = "Full-Length CISSP Simulated Exam";
      STATE.currentQuiz.timeRemaining = 3 * 60 * 60; // 3 Hours in seconds (10,800s)
    } else {
      // Targeted domain quiz
      const domVal = parseInt(document.getElementById("domain-select").value);
      targetQuestions = CISSP_QUESTIONS.filter(q => q.domain === domVal);
      document.getElementById("exam-title-lbl").innerText = DOMAIN_GUIDES[domVal].title + " Practice";
      STATE.currentQuiz.timeRemaining = targetQuestions.length * 90; // 90 Secs per question
    }

    if (targetQuestions.length === 0) {
      alert("No practice questions found for this domain yet.");
      return;
    }

    STATE.currentQuiz.questions = targetQuestions;
    
    // Show exam modal overlay
    document.getElementById("exam-engine-modal").classList.add("active");
    
    // Hide submit button, show next/prev buttons
    document.getElementById("exam-submit-btn").classList.add("hidden");
    document.getElementById("exam-next-btn").classList.remove("hidden");
    document.getElementById("exam-show-ans-btn").classList.remove("hidden");
    
    // Reset explanation box
    document.getElementById("exam-explanation-box").classList.add("hidden");

    // Start Timer Loop
    updateExamTimerUI();
    quizTimeInterval = setInterval(() => {
      STATE.currentQuiz.timeRemaining--;
      updateExamTimerUI();
      if (STATE.currentQuiz.timeRemaining <= 0) {
        clearInterval(quizTimeInterval);
        alert("Time limit reached. Submitting your exam.");
        submitExam();
      }
    }, 1000);

    renderExamQuestion();
  }).catch(err => {
    if (btn && btn.tagName === 'BUTTON') {
      btn.disabled = false;
      btn.innerHTML = originalText;
    }
    console.error(err);
    alert("Failed to load questions database. Please check your network and try again.");
  });
}

function updateExamTimerUI() {
  const s = STATE.currentQuiz.timeRemaining;
  const hours = Math.floor(s / 3600);
  const minutes = Math.floor((s % 3600) / 60);
  const secs = s % 60;
  
  const timerLbl = document.getElementById("exam-timer-lbl");
  if (timerLbl) {
    timerLbl.innerText = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }
}

function renderExamQuestion() {
  const quiz = STATE.currentQuiz;
  const question = quiz.questions[quiz.currentIndex];

  document.getElementById("exam-progress-lbl").innerText = `Question ${quiz.currentIndex + 1} of ${quiz.questions.length}`;
  document.getElementById("exam-scenario-txt").innerText = question.scenario;
  document.getElementById("exam-question-txt").innerText = question.question;

  // Options
  const box = document.getElementById("exam-options-box");
  box.innerHTML = "";

  question.options.forEach((optText, index) => {
    const isSelected = quiz.answers[question.id] === index;
    const optionRow = document.createElement("div");
    optionRow.className = `option-row ${isSelected ? 'selected' : ''}`;
    optionRow.innerHTML = `
      <input type="radio" name="exam-option" value="${index}" ${isSelected ? 'checked' : ''}>
      <span>${optText}</span>
    `;
    
    optionRow.addEventListener("click", () => {
      // If explanation is visible, block changing answer
      if (!document.getElementById("exam-explanation-box").classList.contains("hidden")) return;
      
      selectOption(index);
    });
    box.appendChild(optionRow);
  });

  // Flag state
  const flagBtn = document.getElementById("exam-flag-btn");
  if (quiz.flagged.includes(question.id)) {
    flagBtn.innerHTML = '<i class="fa-solid fa-flag"></i> Flagged';
    flagBtn.classList.add("btn-danger");
  } else {
    flagBtn.innerHTML = '<i class="fa-regular fa-flag"></i> Flag for Review';
    flagBtn.classList.remove("btn-danger");
  }

  // Explanation logic
  document.getElementById("exam-explanation-box").classList.add("hidden");

  // Navigation button states
  document.getElementById("exam-prev-btn").disabled = (quiz.currentIndex === 0);
  
  if (quiz.currentIndex === quiz.questions.length - 1) {
    document.getElementById("exam-next-btn").classList.add("hidden");
    document.getElementById("exam-submit-btn").classList.remove("hidden");
  } else {
    document.getElementById("exam-next-btn").classList.remove("hidden");
    document.getElementById("exam-submit-btn").classList.add("hidden");
  }
}

function selectOption(index) {
  const quiz = STATE.currentQuiz;
  const question = quiz.questions[quiz.currentIndex];
  quiz.answers[question.id] = index;
  
  // Redraw selected classes
  document.querySelectorAll(".option-row").forEach((row, idx) => {
    if (idx === index) {
      row.classList.add("selected");
      row.querySelector("input").checked = true;
    } else {
      row.classList.remove("selected");
    }
  });
}

function toggleFlagCurrentQuestion() {
  const quiz = STATE.currentQuiz;
  const question = quiz.questions[quiz.currentIndex];
  
  const idx = quiz.flagged.indexOf(question.id);
  if (idx > -1) {
    quiz.flagged.splice(idx, 1);
  } else {
    quiz.flagged.push(question.id);
  }
  renderExamQuestion();
}

function showQuestionExplanation() {
  const quiz = STATE.currentQuiz;
  const question = quiz.questions[quiz.currentIndex];
  const userAns = quiz.answers[question.id];

  if (userAns === undefined) {
    alert("Please select an answer choice first.");
    return;
  }

  const expBox = document.getElementById("exam-explanation-box");
  document.getElementById("exam-explanation-txt").innerText = question.explanation;
  expBox.classList.remove("hidden");

  // Highlights correct and wrong options
  document.querySelectorAll(".option-row").forEach((row, idx) => {
    if (idx === question.answer) {
      row.classList.add("correct");
    } else if (idx === userAns) {
      row.classList.add("wrong");
    }
  });
}

function prevExamQuestion() {
  if (STATE.currentQuiz.currentIndex > 0) {
    STATE.currentQuiz.currentIndex--;
    renderExamQuestion();
  }
}

function nextExamQuestion() {
  if (STATE.currentQuiz.currentIndex < STATE.currentQuiz.questions.length - 1) {
    STATE.currentQuiz.currentIndex++;
    renderExamQuestion();
  }
}

function submitExam() {
  clearInterval(quizTimeInterval);
  const quiz = STATE.currentQuiz;
  
  let correct = 0;
  // Domain score tracking
  const domainPerformance = {};

  quiz.questions.forEach(q => {
    const userAns = quiz.answers[q.id];
    const isCorrect = userAns === q.answer;

    if (isCorrect) {
      correct++;
    } else if (userAns !== undefined) {
      logMistake(q, userAns);
    }

    if (!domainPerformance[q.domain]) {
      domainPerformance[q.domain] = { total: 0, correct: 0 };
    }
    domainPerformance[q.domain].total++;
    if (isCorrect) domainPerformance[q.domain].correct++;
  });

  const finalScorePct = Math.round((correct / quiz.questions.length) * 100);
  const passed = finalScorePct >= 70; // 70% to pass

  // Log to quiz history
  const logEntry = {
    date: new Date().toLocaleDateString(),
    score: finalScorePct,
    domain: quiz.questions.length === CISSP_QUESTIONS.length ? 0 : quiz.questions[0].domain
  };
  STATE.quizHistory.push(logEntry);

  // Log to exam history list & trend tracker
  const attempt = {
    date: new Date().toLocaleDateString(undefined, { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }),
    score: finalScorePct,
    correct: correct,
    total: quiz.questions.length,
    isMock: quiz.questions.length > 50
  };
  STATE.examHistory.push(attempt);
  if (STATE.examHistory.length > 10) STATE.examHistory.shift(); // Keep last 10 attempts
  localStorage.setItem("cissp_exam_history", JSON.stringify(STATE.examHistory));
  renderExamHistory();

  saveToLocalStorage();

  // Close exam modal
  document.getElementById("exam-engine-modal").classList.remove("active");

  // Render results screen overlay
  document.getElementById("res-score-pct").innerText = `${finalScorePct}%`;
  const statusLbl = document.getElementById("res-status-lbl");
  if (statusLbl) {
    statusLbl.innerText = passed ? "PASSED" : "FAILED";
    statusLbl.className = passed ? "status-pass" : "status-fail";
  }

  // Populate domain performance breakdown
  const domList = document.getElementById("res-domain-list");
  if (domList) {
    domList.innerHTML = "";
    Object.keys(domainPerformance).forEach(domNum => {
      const perf = domainPerformance[domNum];
      const domName = DOMAIN_GUIDES[domNum]?.title || `Domain ${domNum}`;
      const pct = Math.round((perf.correct / perf.total) * 100);
      
      const li = document.createElement("li");
      li.innerHTML = `<span>${domName}</span> <span class="${pct >= 70 ? 'status-pass' : 'status-fail'}">${pct}% (${perf.correct}/${perf.total})</span>`;
      domList.appendChild(li);
    });
  }

  document.getElementById("exam-results-modal").classList.add("active");
  renderDashboard(); // Update readiness
}

function closeResultsModal() {
  document.getElementById("exam-results-modal").classList.remove("active");
}

function exitExamEarly() {
  if (confirm("Are you sure you want to exit the exam early? Your active progress will be lost and not recorded.")) {
    document.getElementById("exam-engine-modal").classList.remove("active");
    if (quizTimeInterval) {
      clearInterval(quizTimeInterval);
      quizTimeInterval = null;
    }
  }
}

// =================================================================
// DOMAIN GUIDE VIEWER
// =================================================================
function renderGuideContent(domainNum) {
  const tocContainer = document.getElementById("guide-toc-container");
  const bodyContainer = document.getElementById("guide-body-content");
  const actionsRow = document.getElementById("guide-actions-row");
  const notesPanel = document.getElementById("domain-notes-panel");

  // Fallback: if new split DOM isn't present, use old single viewer
  if (!bodyContainer) {
    const viewer = document.getElementById("guide-viewer");
    if (!viewer) return;
    const data = getDomainContent(domainNum);
    if (data) viewer.innerHTML = `<h3>${data.title}</h3><div class="outline-content">${data.html}</div>`;
    return;
  }

  const data = getDomainContent(domainNum);
  if (!data) { bodyContainer.innerHTML = ""; if(tocContainer) tocContainer.innerHTML = ""; return; }

  // 1. Render the main body content
  bodyContainer.innerHTML = `<h3 style="margin-bottom: 18px;">${data.title}</h3><div class="outline-content" id="guide-outline-inner">${data.html}</div>`;

  // 2. Build the TOC from the h4 elements
  if (tocContainer) buildGuideTOC(tocContainer);

  // 3. Show actions row
  if (actionsRow) actionsRow.style.display = "flex";

  // 4. Hide notes panel by default on domain switch
  if (notesPanel) notesPanel.style.display = "none";

  // 5. Load domain study notes
  loadDomainNotes(domainNum);

  // 6. Wire quick-quiz button
  const qqBtn = document.getElementById("guide-quick-quiz-btn");
  if (qqBtn) {
    qqBtn.onclick = () => launchGuideQuickQuiz(domainNum);
  }

  // 7. Wire notes toggle button
  const notesToggle = document.getElementById("guide-notes-toggle-btn");
  if (notesToggle) {
    notesToggle.onclick = () => {
      if (notesPanel) {
        const visible = notesPanel.style.display !== "none";
        notesPanel.style.display = visible ? "none" : "block";
        notesToggle.innerHTML = visible
          ? '<i class="fa-solid fa-pen-to-square"></i> My Study Notes'
          : '<i class="fa-solid fa-eye-slash"></i> Hide Notes';
      }
    };
  }

  // 8. Wire auto-save on textarea
  const ta = document.getElementById("domain-notes-textarea");
  if (ta) {
    ta.oninput = () => {
      localStorage.setItem(`cissp_notes_d${domainNum}`, ta.value);
    };
  }
}

// =================================================================
// MEMORY PALACE & FORMULAS CALCULATOR
// =================================================================
function runCalculators() {
  // 1. ALE Calculator
  const av = parseFloat(document.getElementById("calc-av").value) || 0;
  const ef = parseFloat(document.getElementById("calc-ef").value) || 0;
  const aro = parseFloat(document.getElementById("calc-aro").value) || 0;

  const sle = av * (ef / 100);
  const ale = sle * aro;

  document.getElementById("calc-sle-res").innerText = `$${sle.toLocaleString()}`;
  document.getElementById("calc-ale-res").innerText = `$${ale.toLocaleString()}`;

  // 2. Symmetric key calculator
  const n = parseInt(document.getElementById("calc-n-users").value) || 0;
  const keysNeeded = (n * (n - 1)) / 2;
  document.getElementById("calc-keys-res").innerText = keysNeeded.toLocaleString();
}

// =================================================================
// FLASHCARDS PORTLET
// =================================================================
let currentCardIndex = 0;

function getFilteredCards() {
  const filterVal = document.getElementById("flashcard-domain-filter").value;
  if (filterVal === "all") return FLASHCARDS;
  const domNum = parseInt(filterVal);
  return FLASHCARDS.filter(c => c.domain === domNum);
}

function renderActiveFlashcard(resetIndex = false) {
  const cards = getFilteredCards();
  if (cards.length === 0) {
    document.getElementById("active-flashcard").style.display = "none";
    document.getElementById("card-counter").innerText = "0 / 0";
    return;
  }
  document.getElementById("active-flashcard").style.display = "block";

  if (resetIndex || currentCardIndex >= cards.length) {
    currentCardIndex = 0;
  }

  const card = cards[currentCardIndex];
  
  // Make sure to unflip card before loading values
  document.getElementById("active-flashcard").classList.remove("flipped");

  setTimeout(() => {
    document.querySelector(".card-domain-tag").innerText = DOMAIN_GUIDES[card.domain].title;
    document.getElementById("card-front-title").innerText = card.title;
    document.querySelector(".flashcard-back h3").innerText = card.title;
    document.getElementById("card-back-desc").innerText = card.desc;
    document.querySelector(".formula-box").innerText = card.formula;
    document.getElementById("card-counter").innerText = `${currentCardIndex + 1} / ${cards.length}`;
  }, 150);
}

function nextFlashcard() {
  const cards = getFilteredCards();
  if (currentCardIndex < cards.length - 1) {
    currentCardIndex++;
  } else {
    currentCardIndex = 0; // Wrap round
  }
  renderActiveFlashcard();
}

function prevFlashcard() {
  const cards = getFilteredCards();
  if (currentCardIndex > 0) {
    currentCardIndex--;
  } else {
    currentCardIndex = cards.length - 1; // Wrap round
  }
  renderActiveFlashcard();
}

// =================================================================
// STUDY PLANNER PROGRESS CHECKLIST & LOGS
// =================================================================
function renderChecklist() {
  const container = document.getElementById("checklist-topics");
  if (!container) return;
  container.innerHTML = "";

  // Group by Domain
  for (let d = 1; d <= 8; d++) {
    const domainTopics = CHECKLIST_TOPICS.map((item, idx) => ({ ...item, originalIdx: idx })).filter(item => item.domain === d);
    if (domainTopics.length === 0) continue;

    const group = document.createElement("div");
    group.className = "checklist-domain-group";
    
    const domName = DOMAIN_GUIDES[d]?.title || `Domain ${d}`;
    group.innerHTML = `<h4>${domName}</h4>`;
    
    const itemsContainer = document.createElement("div");
    itemsContainer.className = "checklist-items";

    domainTopics.forEach(item => {
      const isChecked = STATE.checkedTopics.includes(item.originalIdx);
      const row = document.createElement("div");
      row.className = `checklist-item ${isChecked ? 'checked' : ''}`;
      row.innerHTML = `
        <input type="checkbox" ${isChecked ? 'checked' : ''}>
        <span>${item.topic}</span>
      `;

      // Checkbox event triggers
      row.querySelector("input").addEventListener("change", (e) => {
        toggleChecklistTopic(item.originalIdx, e.target.checked);
      });
      itemsContainer.appendChild(row);
    });

    group.appendChild(itemsContainer);
    container.appendChild(group);
  }
}

function toggleChecklistTopic(idx, isChecked) {
  const indexPos = STATE.checkedTopics.indexOf(idx);
  if (isChecked && indexPos === -1) {
    STATE.checkedTopics.push(idx);
  } else if (!isChecked && indexPos > -1) {
    STATE.checkedTopics.splice(indexPos, 1);
  }
  saveToLocalStorage();
  renderDashboard(); // Recalculate dashboard progress
  
  // Re-sync row classes
  renderChecklist();
}

function saveStudyLog() {
  const hrInput = document.getElementById("log-hours");
  const noteInput = document.getElementById("log-notes");

  const hours = parseFloat(hrInput.value);
  const notes = noteInput.value.trim();

  if (isNaN(hours) || hours <= 0) {
    alert("Please enter a valid amount of study hours.");
    return;
  }

  const logEntry = {
    date: new Date().toLocaleDateString(),
    hours: hours,
    notes: notes || "General review"
  };

  STATE.studyLogs.unshift(logEntry); // Top of the list
  saveToLocalStorage();
  
  // Clear inputs
  hrInput.value = "";
  noteInput.value = "";

  renderStudyLogs();
  renderDashboard(); // Update stats
}

function renderStudyLogs() {
  const container = document.getElementById("session-logs-list");
  if (!container) return;
  container.innerHTML = "";

  const recent = STATE.studyLogs.slice(0, 4); // Show top 4 entries
  if (recent.length === 0) {
    container.innerHTML = `<li style="text-align:center;color:var(--text-muted)">No sessions logged yet.</li>`;
    return;
  }

  recent.forEach(log => {
    const li = document.createElement("li");
    li.innerHTML = `
      <div>
        <span>${log.hours.toFixed(1)} Hours</span>
        <time>${log.date}</time>
      </div>
      <p>${log.notes}</p>
    `;
    container.appendChild(li);
  });
}

// =================================================================
// 8. E-BOOK READER MODULE (PDF.JS CANVAS ENGINE)
// =================================================================
let pdfDoc = null,
    bookPageNum = 1,
    bookPageRendering = false,
    bookPageNumPending = null,
    bookZoomScale = 1.4, // Good reading zoom
    bookCanvas = document.getElementById('book-canvas'),
    bookCtx = bookCanvas ? bookCanvas.getContext('2d') : null;

let bookReaderLoadingStarted = false;
function initBookReader() {
  if (!bookCanvas) return;
  if (bookReaderLoadingStarted) return;
  bookReaderLoadingStarted = true;

  // Configure worker Src required by PDF.js
  pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js';

  // Load PDF content using .txt extension to bypass IDM interception
  const pdfUrl = 'cissp_concept_guide.txt';

  pdfjsLib.getDocument(pdfUrl).promise.then(pdfDoc_ => {
    pdfDoc = pdfDoc_;
    document.getElementById('book-page-count').innerText = pdfDoc.numPages;

    // Render page 1 if the book tab is active
    const selector = document.getElementById('pdf-library-select');
    if (STATE.activeTab === 'pdf-library' && (!selector || selector.value === 'concept')) {
      renderBookPage(bookPageNum);
    }

    // Event listeners
    document.getElementById('book-prev-btn').addEventListener('click', prevBookPage);
    document.getElementById('book-next-btn').addEventListener('click', nextBookPage);
    document.getElementById('book-zoom-in').addEventListener('click', zoomInBook);
    document.getElementById('book-zoom-out').addEventListener('click', zoomOutBook);
    document.getElementById('book-page-num').addEventListener('change', changeBookPageInput);
    document.getElementById('book-fullscreen-btn').addEventListener('click', () => toggleReaderFullscreen('concept-reader-wrapper'));
  }).catch(error => {
    console.warn('[Reader] PDF.js reader failed. Loading fallback.', error);
    const alertSpan = document.querySelector('#book-fallback-container .alert-box span');
    if (alertSpan) {
      alertSpan.innerText = `Reader Error: ${error.message || error}. Try running python server.py.`;
    }
    activateBookFallback();
  });
}

function renderBookPage(num) {
  if (!pdfDoc || bookPageRendering) return;
  bookPageRendering = true;

  pdfDoc.getPage(num).then(page => {
    const viewport = page.getViewport({ scale: bookZoomScale });
    bookCanvas.height = viewport.height;
    bookCanvas.width = viewport.width;

    const renderContext = {
      canvasContext: bookCtx,
      viewport: viewport
    };
    
    const renderTask = page.render(renderContext);
    
    renderTask.promise.then(() => {
      bookPageRendering = false;
      if (bookPageNumPending !== null) {
        renderBookPage(bookPageNumPending);
        bookPageNumPending = null;
      }
    });
  }).catch(err => {
    console.error('[Reader] Error rendering page:', err);
    bookPageRendering = false;
  });

  document.getElementById('book-page-num').value = num;
}

function queueRenderBookPage(num) {
  if (bookPageRendering) {
    bookPageNumPending = num;
  } else {
    renderBookPage(num);
  }
}

function prevBookPage() {
  if (bookPageNum <= 1) return;
  bookPageNum--;
  queueRenderBookPage(bookPageNum);
}

function nextBookPage() {
  if (!pdfDoc || bookPageNum >= pdfDoc.numPages) return;
  bookPageNum++;
  queueRenderBookPage(bookPageNum);
}

function zoomInBook() {
  if (bookZoomScale >= 3.0) return;
  bookZoomScale += 0.2;
  renderBookPage(bookPageNum);
}

function zoomOutBook() {
  if (bookZoomScale <= 0.6) return;
  bookZoomScale -= 0.2;
  renderBookPage(bookPageNum);
}

function changeBookPageInput(e) {
  if (!pdfDoc) return;
  const val = parseInt(e.target.value);
  if (val >= 1 && val <= pdfDoc.numPages) {
    bookPageNum = val;
    queueRenderBookPage(bookPageNum);
  } else {
    e.target.value = bookPageNum;
  }
}

function activateBookFallback() {
  if (bookCanvas) bookCanvas.style.display = 'none';
  const toolbar = document.getElementById('reader-toolbar');
  if (toolbar) toolbar.style.display = 'none';
  
  const fallback = document.getElementById('book-fallback-container');
  if (fallback) fallback.classList.remove('hidden');
}

// =======================================================
// 8. INTERACTIVE CHEAT SHEET ENGINE (UPGRADED)
// =======================================================

// Cheat sheet state
let _csView = 'grid'; // 'grid' | 'list'
let _csStateFilter = 'all'; // 'all' | 'starred' | 'needs-review'

function initCheatSheet() {
  STATE.csStarred = safeJsonParse('cissp_cs_starred', []);
  STATE.csMastered = safeJsonParse('cissp_cs_mastered', []);

  const defaultBtn = document.querySelector('.tag-filter-btn[data-tag="all"]');
  if (defaultBtn) {
    defaultBtn.classList.add("btn-primary");
    defaultBtn.classList.remove("btn-secondary");
  }

  // Bind tag buttons
  document.querySelectorAll('.tag-filter-btn').forEach(btn => {
    btn.onclick = () => {
      STATE.cheatsheetActiveTag = btn.getAttribute('data-tag');
      document.querySelectorAll('.tag-filter-btn').forEach(b => {
        b.classList.remove('btn-primary');
        b.classList.add('btn-secondary');
        b.style.borderColor = '';
      });
      btn.classList.add('btn-primary');
      btn.classList.remove('btn-secondary');
      btn.style.borderColor = 'var(--primary)';
      renderCheatSheet();
    };
  });

  // Bind search + domain filter
  const searchEl = document.getElementById('cheatsheet-search');
  const domainEl = document.getElementById('cheatsheet-domain-select');
  if (searchEl) searchEl.addEventListener('input', renderCheatSheet);
  if (domainEl) domainEl.addEventListener('change', renderCheatSheet);

  updateCheatsheetStats();
  renderCheatSheet();
}

function updateCheatsheetStats() {
  const starred = STATE.csStarred || [];
  const mastered = STATE.csMastered || [];
  const el = (id) => document.getElementById(id);
  if (el('cs-stat-total')) el('cs-stat-total').textContent = CHEATSHEET_TERMS.length;
  if (el('cs-stat-starred')) el('cs-stat-starred').textContent = starred.length;
  if (el('cs-stat-mastered')) el('cs-stat-mastered').textContent = mastered.length;
}

function setCheatsheetView(mode) {
  _csView = mode;
  const grid = document.getElementById('cheatsheet-grid');
  const gridBtn = document.getElementById('cs-view-grid-btn');
  const listBtn = document.getElementById('cs-view-list-btn');
  if (mode === 'grid') {
    if (grid) grid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(320px, 1fr))';
    if (gridBtn) { gridBtn.style.background = 'var(--primary)'; gridBtn.style.color = '#fff'; }
    if (listBtn) { listBtn.style.background = 'transparent'; listBtn.style.color = 'var(--text-muted)'; }
  } else {
    if (grid) grid.style.gridTemplateColumns = '1fr';
    if (gridBtn) { gridBtn.style.background = 'transparent'; gridBtn.style.color = 'var(--text-muted)'; }
    if (listBtn) { listBtn.style.background = 'var(--primary)'; listBtn.style.color = '#fff'; }
  }
  renderCheatSheet();
}

function filterCheatsheetByState(state) {
  _csStateFilter = state;
  renderCheatSheet();
}

function toggleCsStar(termTitle) {
  if (!STATE.csStarred) STATE.csStarred = [];
  const idx = STATE.csStarred.indexOf(termTitle);
  if (idx > -1) STATE.csStarred.splice(idx, 1);
  else STATE.csStarred.push(termTitle);
  localStorage.setItem('cissp_cs_starred', JSON.stringify(STATE.csStarred));
  updateCheatsheetStats();
  renderCheatSheet();
}

function toggleCsMastered(termTitle) {
  if (!STATE.csMastered) STATE.csMastered = [];
  const idx = STATE.csMastered.indexOf(termTitle);
  if (idx > -1) STATE.csMastered.splice(idx, 1);
  else STATE.csMastered.push(termTitle);
  localStorage.setItem('cissp_cs_mastered', JSON.stringify(STATE.csMastered));
  updateCheatsheetStats();
  renderCheatSheet();
}

function renderCheatSheet() {
  const grid = document.getElementById("cheatsheet-grid");
  if (!grid) return;

  STATE.csStarred = safeJsonParse('cissp_cs_starred', []);
  STATE.csMastered = safeJsonParse('cissp_cs_mastered', []);

  const searchQuery = (document.getElementById("cheatsheet-search")?.value || "").toLowerCase().trim();
  const domainFilter = document.getElementById("cheatsheet-domain-select")?.value || "all";
  const activeTag = STATE.cheatsheetActiveTag || "all";
  const sortMode = document.getElementById("cheatsheet-sort-select")?.value || "default";

  // Filter
  let filteredTerms = CHEATSHEET_TERMS.filter(term => {
    const matchesSearch = !searchQuery ||
      term.title.toLowerCase().includes(searchQuery) ||
      term.explanation.toLowerCase().includes(searchQuery) ||
      term.formula.toLowerCase().includes(searchQuery) ||
      term.exam_context.toLowerCase().includes(searchQuery);
    const matchesDomain = (domainFilter === "all" || term.domain.toString() === domainFilter);
    const matchesTag = (activeTag === "all" || term.tags.includes(activeTag));
    const isStarred = STATE.csStarred.includes(term.title);
    const isMastered = STATE.csMastered.includes(term.title);
    const matchesState =
      _csStateFilter === 'all' ||
      (_csStateFilter === 'starred' && isStarred) ||
      (_csStateFilter === 'needs-review' && !isMastered);
    return matchesSearch && matchesDomain && matchesTag && matchesState;
  });

  // Sort
  if (sortMode === 'az') filteredTerms.sort((a, b) => a.title.localeCompare(b.title));
  else if (sortMode === 'za') filteredTerms.sort((a, b) => b.title.localeCompare(a.title));
  else if (sortMode === 'domain') filteredTerms.sort((a, b) => a.domain - b.domain);
  else if (sortMode === 'starred') filteredTerms.sort((a, b) =>
    (STATE.csStarred.includes(a.title) ? 0 : 1) - (STATE.csStarred.includes(b.title) ? 0 : 1));
  else if (sortMode === 'unmastered') filteredTerms.sort((a, b) =>
    (STATE.csMastered.includes(a.title) ? 1 : 0) - (STATE.csMastered.includes(b.title) ? 1 : 0));

  // Update showing count
  const showingEl = document.getElementById('cs-stat-showing');
  if (showingEl) showingEl.textContent = filteredTerms.length;

  if (filteredTerms.length === 0) {
    grid.innerHTML = `
      <div style="grid-column:1/-1; text-align:center; padding:40px; color:var(--text-muted);">
        <i class="fa-regular fa-folder-open" style="font-size:40px; margin-bottom:10px; display:block; color:var(--primary);"></i>
        <p style="margin:0; font-size:14px;">No terms match your filters. Try clearing filters or a different search keyword.</p>
      </div>`;
    return;
  }

  const DOMAIN_COLORS = {
    1:"#0ea5e9", 2:"#10b981", 3:"#8b5cf6",
    4:"#ec4899", 5:"#f59e0b", 6:"#3b82f6",
    7:"#ef4444", 8:"#14b8a6"
  };

  const isListView = _csView === 'list';

  // Build HTML using safe data-idx approach (NO inline onclick to avoid quote issues)
  grid.innerHTML = filteredTerms.map((term, i) => {
    const color = DOMAIN_COLORS[term.domain] || "var(--primary)";
    const termIdx = CHEATSHEET_TERMS.indexOf(term);
    const isStarred = STATE.csStarred.includes(term.title);
    const isMastered = STATE.csMastered.includes(term.title);
    const border = isMastered ? '1px solid rgba(16,185,129,0.3)' : '1px solid rgba(255,255,255,0.05)';
    const opacity = isMastered ? '0.65' : '1';
    const starColor = isStarred ? '#facc15' : 'var(--text-muted)';
    const starIcon = isStarred ? 'fa-solid fa-star' : 'fa-regular fa-star';
    const mastIcon = isMastered ? 'fa-solid fa-circle-check' : 'fa-regular fa-circle-check';
    const mastColor = isMastered ? '#10b981' : 'var(--text-muted)';

    if (isListView) {
      return `
        <div class="card glass cheatsheet-card" style="padding:12px 18px; border-radius:10px; border:${border}; opacity:${opacity}; display:flex; align-items:center; gap:14px; transition:all 0.2s;">
          <span style="font-size:10px; color:${color}; font-weight:700; padding:2px 8px; background:${color}1a; border-radius:20px; white-space:nowrap; border:1px solid ${color}33; min-width:52px; text-align:center;">D${term.domain}</span>
          <span style="font-size:13px; font-weight:600; color:#fff; flex:1; min-width:0;">${term.title}</span>
          <span style="font-size:11px; color:var(--text-muted); font-family:'Courier New',monospace; flex:2; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; min-width:0;">${term.formula}</span>
          <div style="display:flex; gap:6px; flex-shrink:0;">
            <button class="cs-star-btn" data-term-idx="${termIdx}" title="${isStarred ? 'Unstar' : 'Star'}" style="background:none; border:none; cursor:pointer; font-size:15px; color:${starColor}; padding:2px 4px;"><i class="${starIcon}"></i></button>
            <button class="cs-mast-btn" data-term-idx="${termIdx}" title="${isMastered ? 'Unmark' : 'Mark mastered'}" style="background:none; border:none; cursor:pointer; font-size:15px; color:${mastColor}; padding:2px 4px;"><i class="${mastIcon}"></i></button>
            <button class="cheatsheet-speak-btn" data-term-index="${termIdx}" title="Read aloud" style="background:none; border:none; cursor:pointer; font-size:13px; color:var(--text-muted); padding:2px 4px;"><i class="fa-solid fa-volume-low"></i></button>
          </div>
        </div>`;
    }

    // Full grid card
    return `
      <div class="card glass cheatsheet-card" style="padding:20px; border-radius:14px; border:${border}; opacity:${opacity}; display:flex; flex-direction:column; gap:12px; transition:all 0.2s; background:rgba(30,41,59,0.4);">
        <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid rgba(255,255,255,0.05); padding-bottom:8px;">
          <span style="font-size:10px; color:${color}; font-weight:700; padding:3px 8px; background:${color}1a; border-radius:20px; text-transform:uppercase; border:1px solid ${color}33;">Domain ${term.domain}</span>
          <div style="display:flex; gap:4px; align-items:center;">
            ${isMastered ? '<span style="font-size:10px; color:#10b981; background:rgba(16,185,129,0.1); padding:2px 8px; border-radius:20px; border:1px solid rgba(16,185,129,0.2); font-weight:600;">✓ Mastered</span>' : ''}
            <span style="font-size:10px; color:var(--text-muted); background:rgba(255,255,255,0.03); padding:3px 8px; border-radius:20px;">${term.tags.join(' · ')}</span>
          </div>
        </div>
        <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:8px;">
          <h4 style="margin:0; color:#fff; font-size:16px; font-weight:600; flex:1;">${term.title}</h4>
          <div style="display:flex; gap:4px; flex-shrink:0;">
            <button class="cs-star-btn" data-term-idx="${termIdx}" title="${isStarred ? 'Unstar' : 'Star'}" style="background:none; border:none; cursor:pointer; font-size:17px; color:${starColor}; padding:2px 4px; transition:color 0.2s;"><i class="${starIcon}"></i></button>
            <button class="tts-play-btn cheatsheet-speak-btn" data-term-index="${termIdx}" title="Read aloud" style="margin:0;"><i class="fa-solid fa-volume-low"></i></button>
          </div>
        </div>
        <div style="padding:10px; font-size:12px; background:rgba(0,0,0,0.3); border-left:3px solid ${color}; border-radius:4px; font-family:'Courier New',monospace; white-space:pre-wrap; word-break:break-word; color:#e2e8f0;">${term.formula}</div>
        <p style="margin:0; font-size:13px; line-height:1.65; color:var(--text-muted);">${term.explanation}</p>
        <div style="font-size:12.5px; border-top:1px solid rgba(255,255,255,0.05); padding-top:10px; line-height:1.5;">
          <span style="color:#facc15; font-weight:700; text-transform:uppercase; font-size:10.5px; display:block; margin-bottom:4px;"><i class="fa-solid fa-triangle-exclamation"></i> Exam Trap</span>
          <span style="color:var(--text-muted);">${term.exam_context}</span>
        </div>
        <div style="border-top:1px solid rgba(255,255,255,0.05); padding-top:10px;">
          <button class="cs-mast-btn" data-term-idx="${termIdx}" style="background:${isMastered ? 'rgba(16,185,129,0.12)' : 'rgba(255,255,255,0.03)'}; border:1px solid ${isMastered ? 'rgba(16,185,129,0.3)' : 'rgba(255,255,255,0.08)'}; color:${mastColor}; padding:5px 14px; border-radius:20px; font-size:11px; cursor:pointer; font-weight:600;">
            <i class="${mastIcon}"></i> ${isMastered ? 'Mastered ✓' : 'Mark as Mastered'}
          </button>
        </div>
      </div>`;
  }).join("");

  // ---- Event delegation: bind all star / mastered / speak buttons ----
  grid.querySelectorAll(".cs-star-btn").forEach(btn => {
    btn.addEventListener("click", e => {
      e.stopPropagation();
      const idx = parseInt(btn.getAttribute("data-term-idx"));
      const term = CHEATSHEET_TERMS[idx];
      if (term) toggleCsStar(term.title);
    });
  });

  grid.querySelectorAll(".cs-mast-btn").forEach(btn => {
    btn.addEventListener("click", e => {
      e.stopPropagation();
      const idx = parseInt(btn.getAttribute("data-term-idx"));
      const term = CHEATSHEET_TERMS[idx];
      if (term) toggleCsMastered(term.title);
    });
  });

  grid.querySelectorAll(".cheatsheet-speak-btn").forEach(btn => {
    btn.addEventListener("click", e => {
      e.stopPropagation();
      const idx = parseInt(btn.getAttribute("data-term-index"));
      const term = CHEATSHEET_TERMS[idx];
      if (term) {
        speakText(`${term.title}. Formula: ${term.formula}. Explanation: ${term.explanation}. Exam Context: ${term.exam_context}`, btn);
      }
    });
  });
}

// =======================================================
// 8.5 CERTMIKE PDF STUDY GUIDE READER
// =======================================================

let certmikePdfDoc = null,
    certmikePageNum = 1,
    certmikePageRendering = false,
    certmikePageNumPending = null,
    certmikeZoomScale = 1.4,
    certmikeCanvas = document.getElementById('certmike-canvas'),
    certmikeCtx = certmikeCanvas ? certmikeCanvas.getContext('2d') : null;

let certMikeLoadingStarted = false;
function initCertMikeReader() {
  if (!certmikeCanvas) return;
  if (certMikeLoadingStarted) return;
  certMikeLoadingStarted = true;

  const pdfUrl = 'certmike_cheat_sheet.txt';

  pdfjsLib.getDocument(pdfUrl).promise.then(pdfDoc_ => {
    certmikePdfDoc = pdfDoc_;
    document.getElementById('certmike-page-count').innerText = certmikePdfDoc.numPages;

    const selector = document.getElementById('pdf-library-select');
    if (STATE.activeTab === 'pdf-library' && selector && selector.value === 'certmike') {
      renderCertMikePage(certmikePageNum);
    }

    document.getElementById('certmike-prev-btn')?.addEventListener('click', prevCertMikePage);
    document.getElementById('certmike-next-btn')?.addEventListener('click', nextCertMikePage);
    document.getElementById('certmike-fullscreen-btn')?.addEventListener('click', () => toggleReaderFullscreen('certmike-reader-wrapper'));
  }).catch(error => {
    console.warn('[CertMike] PDF reader failed. Loading fallback.', error);
    activateCertMikeFallback(error);
  });
}

function renderCertMikePage(num) {
  if (!certmikePdfDoc || certmikePageRendering) return;
  certmikePageRendering = true;

  certmikePdfDoc.getPage(num).then(page => {
    const viewport = page.getViewport({ scale: certmikeZoomScale });
    certmikeCanvas.height = viewport.height;
    certmikeCanvas.width = viewport.width;

    const renderContext = {
      canvasContext: certmikeCtx,
      viewport: viewport
    };
    
    const renderTask = page.render(renderContext);

    renderTask.promise.then(() => {
      certmikePageRendering = false;
      if (certmikePageNumPending !== null) {
        renderCertMikePage(certmikePageNumPending);
        certmikePageNumPending = null;
      }
    });
  });

  document.getElementById('certmike-page-num').innerText = num;
}

function queueRenderCertMikePage(num) {
  if (certmikePageRendering) {
    certmikePageNumPending = num;
  } else {
    renderCertMikePage(num);
  }
}

function prevCertMikePage() {
  if (!certmikePdfDoc || certmikePageNum <= 1) return;
  certmikePageNum--;
  queueRenderCertMikePage(certmikePageNum);
}

function nextCertMikePage() {
  if (!certmikePdfDoc || certmikePageNum >= certmikePdfDoc.numPages) return;
  certmikePageNum++;
  queueRenderCertMikePage(certmikePageNum);
}

function activateCertMikeFallback(error) {
  if (certmikeCanvas) certmikeCanvas.style.display = 'none';
  const toolbar = document.getElementById('certmike-toolbar');
  if (toolbar) toolbar.style.display = 'none';
  const fallback = document.getElementById('certmike-fallback-container');
  if (fallback) fallback.classList.remove('hidden');
  
  const errSpan = document.getElementById('certmike-error-message');
  if (errSpan && error) {
    errSpan.innerText = `Error Details: ${error.message || error}`;
  }
}

// =======================================================
// 8.6 MATHEUS MIND MAPS READER
// =======================================================
let mindmapsPdfDoc = null,
    mindmapsPageNum = 1,
    mindmapsPageRendering = false,
    mindmapsPageNumPending = null,
    mindmapsZoomScale = 1.6, // Higher zoom for mind maps
    mindmapsCanvas = document.getElementById('mindmaps-canvas'),
    mindmapsCtx = mindmapsCanvas ? mindmapsCanvas.getContext('2d') : null;

let mindMapsLoadingStarted = false;
function initMindMapsReader() {
  if (!mindmapsCanvas) return;
  if (mindMapsLoadingStarted) return;
  mindMapsLoadingStarted = true;

  const pdfUrl = 'matheus_mindmaps.txt';

  pdfjsLib.getDocument(pdfUrl).promise.then(pdfDoc_ => {
    mindmapsPdfDoc = pdfDoc_;
    
    if (STATE.activeTab === 'mindmaps') {
      renderMindMapsPage(mindmapsPageNum);
    }

    document.getElementById('mindmaps-prev-btn')?.addEventListener('click', prevMindMapsPage);
    document.getElementById('mindmaps-next-btn')?.addEventListener('click', nextMindMapsPage);
    
    document.getElementById('mindmaps-sheet-select')?.addEventListener('change', (e) => {
      const page = parseInt(e.target.value);
      if (page >= 1 && page <= mindmapsPdfDoc.numPages) {
        mindmapsPageNum = page;
        queueRenderMindMapsPage(mindmapsPageNum);
      }
    });
  }).catch(error => {
    console.warn('[MindMaps] PDF reader failed. Loading fallback.', error);
    activateMindMapsFallback(error);
  });
}

function renderMindMapsPage(num) {
  if (!mindmapsPdfDoc || mindmapsPageRendering) return;
  mindmapsPageRendering = true;

  mindmapsPdfDoc.getPage(num).then(page => {
    const viewport = page.getViewport({ scale: mindmapsZoomScale });
    mindmapsCanvas.height = viewport.height;
    mindmapsCanvas.width = viewport.width;

    const renderContext = {
      canvasContext: mindmapsCtx,
      viewport: viewport
    };
    
    const renderTask = page.render(renderContext);

    renderTask.promise.then(() => {
      mindmapsPageRendering = false;
      if (mindmapsPageNumPending !== null) {
        renderMindMapsPage(mindmapsPageNumPending);
        mindmapsPageNumPending = null;
      }
    });
  });

  document.getElementById('mindmaps-page-num').innerText = num;
  
  const select = document.getElementById('mindmaps-sheet-select');
  if (select) select.value = num;
}

function queueRenderMindMapsPage(num) {
  if (mindmapsPageRendering) {
    mindmapsPageNumPending = num;
  } else {
    renderMindMapsPage(num);
  }
}

function prevMindMapsPage() {
  if (!mindmapsPdfDoc || mindmapsPageNum <= 1) return;
  mindmapsPageNum--;
  queueRenderMindMapsPage(mindmapsPageNum);
}

function nextMindMapsPage() {
  if (!mindmapsPdfDoc || mindmapsPageNum >= mindmapsPdfDoc.numPages) return;
  mindmapsPageNum++;
  queueRenderMindMapsPage(mindmapsPageNum);
}

function activateMindMapsFallback(error) {
  if (mindmapsCanvas) mindmapsCanvas.style.display = 'none';
  const toolbar = document.getElementById('mindmaps-toolbar');
  if (toolbar) toolbar.style.display = 'none';
  const fallback = document.getElementById('mindmaps-fallback-container');
  if (fallback) fallback.classList.remove('hidden');
  
  const errSpan = document.getElementById('mindmaps-error-message');
  if (errSpan && error) {
    errSpan.innerText = `Error Details: ${error.message || error}`;
  }
}


// =======================================================
// 8.7 CISSP MATCHER GAMES ENGINE
// =======================================================

// Audio Synthesizer (Web Audio API)
function playBeep(frequency, duration) {
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    oscillator.type = 'sine';
    oscillator.frequency.value = frequency;
    gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + duration / 1000);

    oscillator.start(audioCtx.currentTime);
    oscillator.stop(audioCtx.currentTime + duration / 1000);
  } catch (e) {
    console.warn("Audio Context blocked or not supported by browser", e);
  }
}

// Game Data
const OSI_GAME_DATA = [
  { name: "HTTP", layer: 7, desc: "Hypertext Transfer Protocol. Transmits hypermedia documents." },
  { name: "DNS", layer: 7, desc: "Domain Name System. Resolves IP addresses to names." },
  { name: "SMTP", layer: 7, desc: "Simple Mail Transfer Protocol. Sends electronic mail." },
  { name: "FTP", layer: 7, desc: "File Transfer Protocol. Uploads and downloads files." },
  { name: "SSH", layer: 7, desc: "Secure Shell. Encrypted remote login console access." },
  { name: "SSL / TLS", layer: 6, desc: "Secure Sockets Layer / Transport Layer Security. Handles formatting, encryption, and compression." },
  { name: "ASCII", layer: 6, desc: "American Standard Code for Information Interchange. Character encoding format." },
  { name: "JPEG", layer: 6, desc: "Joint Photographic Experts Group. Image compression format." },
  { name: "RPC", layer: 5, desc: "Remote Procedure Call. Controls client-server session operations." },
  { name: "NetBIOS", layer: 5, desc: "Network Basic Input/Output System. Session connection services." },
  { name: "TCP", layer: 4, desc: "Transmission Control Protocol. Stateful, reliable byte stream delivery." },
  { name: "UDP", layer: 4, desc: "User Datagram Protocol. Stateless, fast best-effort packet delivery." },
  { name: "IP", layer: 3, desc: "Internet Protocol. Handles packet routing and logic addressing." },
  { name: "ICMP", layer: 3, desc: "Internet Control Message Protocol. Diagnostic utility packets (ping/traceroute)." },
  { name: "IPsec", layer: 3, desc: "Internet Protocol Security. Layer 3 cryptographic VPN tunneling." },
  { name: "ARP", layer: 2, desc: "Address Resolution Protocol. Resolves logical IPs to physical MAC addresses." },
  { name: "Ethernet", layer: 2, desc: "IEEE 802.3. Baseband local area network frame delivery standard." },
  { name: "Wi-Fi", layer: 2, desc: "IEEE 802.11. Wireless local area network frame standard." },
  { name: "L2TP", layer: 2, desc: "Layer 2 Tunneling Protocol. VPN encapsulation protocol." },
  { name: "Fiber Optics", layer: 1, desc: "Transmits binary light pulses over glass core cables." },
  { name: "RJ45", layer: 1, desc: "Physical standard connector plug for Ethernet networking." },
  { name: "Coaxial Cable", layer: 1, desc: "Copper wire insulation standard for cable modems." },
  { name: "Hubs", layer: 1, desc: "Repeats incoming electrical signals to all output ports." }
];

const CRYPTO_GAME_DATA = [
  { name: "AES", category: "symmetric", desc: "Advanced Encryption Standard. Rijndael block cipher standard." },
  { name: "DES", category: "symmetric", desc: "Data Encryption Standard. Feistel block cipher with 56 key bits." },
  { name: "3DES", category: "symmetric", desc: "Triple Data Encryption Standard. Iterates DES three times." },
  { name: "Blowfish", category: "symmetric", desc: "Feistel block cipher designed by Bruce Schneier." },
  { name: "Twofish", category: "symmetric", desc: "128-bit block cipher candidate for AES." },
  { name: "RC4", category: "symmetric", desc: "Stream cipher formerly used in WEP/WPA. Now insecure." },
  { name: "IDEA", category: "symmetric", desc: "International Data Encryption Algorithm. 64-bit blocks." },
  { name: "RSA", category: "asymmetric", desc: "Public key cipher based on prime number factoring difficulty." },
  { name: "ECC", category: "asymmetric", desc: "Elliptic Curve Cryptography. Lightweight keys for mobile systems." },
  { name: "Diffie-Hellman", category: "asymmetric", desc: "Asymmetric protocol designed strictly for key exchanges." },
  { name: "DSA", category: "asymmetric", desc: "Digital Signature Algorithm. Used strictly for signs, not encryption." },
  { name: "ElGamal", category: "asymmetric", desc: "Asymmetric cipher extending Diffie-Hellman for encryption." },
  { name: "Knapsack", category: "asymmetric", desc: "Merkle-Hellman Knapsack. Struck down/broken." }
];

// Game State variables
let currentGameMode = 'osi'; // 'osi' or 'crypto'
let gameDeck = [];
let activeDeckIndex = 0;
let gameScore = { correct: 0, incorrect: 0, streak: 0 };
let selectedDeckCard = null;

const OSI_LAYER_NAMES = {
  7: "Layer 7: Application",
  6: "Layer 6: Presentation",
  5: "Layer 5: Session",
  4: "Layer 4: Transport",
  3: "Layer 3: Network",
  2: "Layer 2: Data Link",
  1: "Layer 1: Physical"
};

function initGames() {
  document.getElementById('btn-mode-osi')?.addEventListener('click', () => {
    switchGameMode('osi');
  });
  document.getElementById('btn-mode-crypto')?.addEventListener('click', () => {
    switchGameMode('crypto');
  });
  document.getElementById('btn-mode-sequence')?.addEventListener('click', () => {
    switchGameMode('sequence');
  });
  document.getElementById('btn-mode-architect')?.addEventListener('click', () => {
    switchGameMode('architect');
  });
  document.getElementById('game-reset-btn')?.addEventListener('click', resetGame);

  // Sequence game controls
  document.getElementById('sequence-select')?.addEventListener('change', () => {
    initSequenceGame();
  });
  document.getElementById('sequence-reset-btn')?.addEventListener('click', () => {
    initSequenceGame();
  });
  document.getElementById('sequence-check-btn')?.addEventListener('click', () => {
    checkSequenceGame();
  });

  // Architect game controls
  document.getElementById('architect-scenario-select')?.addEventListener('change', () => {
    initArchitectGame();
  });
  document.getElementById('architect-reset-btn')?.addEventListener('click', () => {
    initArchitectGame();
  });
  document.getElementById('architect-verify-btn')?.addEventListener('click', () => {
    verifySecureArchitecture();
  });
}

function switchGameMode(mode) {
  currentGameMode = mode;
  
  const isSequence = mode === 'sequence';
  const isArchitect = mode === 'architect';
  
  document.getElementById('btn-mode-osi')?.classList.toggle('active-game-tab', mode === 'osi');
  document.getElementById('btn-mode-crypto')?.classList.toggle('active-game-tab', mode === 'crypto');
  document.getElementById('btn-mode-sequence')?.classList.toggle('active-game-tab', isSequence);
  document.getElementById('btn-mode-architect')?.classList.toggle('active-game-tab', isArchitect);

  const matcherArea = document.getElementById('matcher-game-area');
  const sequenceArea = document.getElementById('sequence-game-area');
  const architectArea = document.getElementById('architect-game-area');

  if (isSequence) {
    matcherArea?.classList.add('hidden');
    architectArea?.classList.add('hidden');
    sequenceArea?.classList.remove('hidden');
    initSequenceGame();
  } else if (isArchitect) {
    matcherArea?.classList.add('hidden');
    sequenceArea?.classList.add('hidden');
    architectArea?.classList.remove('hidden');
    initArchitectGame();
  } else {
    sequenceArea?.classList.add('hidden');
    architectArea?.classList.add('hidden');
    matcherArea?.classList.remove('hidden');
    resetGame();
  }
}

function resetGame() {
  gameScore = { correct: 0, incorrect: 0, streak: 0 };
  updateGameStats();
  const feedback = document.getElementById('deck-feedback');
  if (feedback) {
    feedback.innerHTML = "No actions taken yet. Start matching!";
    feedback.style.background = "rgba(255,255,255,0.02)";
    feedback.style.borderColor = "rgba(255,255,255,0.04)";
    feedback.style.color = "var(--text-muted)";
  }
  loadActiveGame();
}

function updateGameStats() {
  const correctEl = document.getElementById('game-score-correct');
  const incorrectEl = document.getElementById('game-score-incorrect');
  const streakEl = document.getElementById('game-score-streak');
  if (correctEl) correctEl.innerText = gameScore.correct;
  if (incorrectEl) incorrectEl.innerText = gameScore.incorrect;
  if (streakEl) streakEl.innerText = `${gameScore.streak} 🔥`;
}

function loadActiveGame() {
  selectedDeckCard = null;
  const board = document.getElementById('game-board');
  if (!board) return;
  board.innerHTML = '';

  const matcherArea = document.getElementById('matcher-game-area');
  const sequenceArea = document.getElementById('sequence-game-area');
  const architectArea = document.getElementById('architect-game-area');

  // Initialize board layout depending on game mode
  if (currentGameMode === 'osi') {
    matcherArea?.classList.remove('hidden');
    sequenceArea?.classList.add('hidden');
    architectArea?.classList.add('hidden');
    for (let l = 7; l >= 1; l--) {
      const row = document.createElement('div');
      row.className = 'game-target-row card glass';
      row.style.cssText = 'display: flex; align-items: center; padding: 12px 20px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.06); background: rgba(255,255,255,0.01); transition: all 0.3s; cursor: pointer; min-height: 55px; position: relative;';
      row.dataset.targetId = l;
      row.innerHTML = `<span style="font-weight:700; font-size:13px; color:var(--accent); min-width: 160px;">${OSI_LAYER_NAMES[l]}</span><div class="dropped-items-container" style="display:flex; gap:8px; flex-wrap:wrap; margin-left: 20px; width: 100%;"></div>`;
      
      bindTargetEvents(row);
      board.appendChild(row);
    }
    gameDeck = shuffleArray([...OSI_GAME_DATA]).slice(0, 15);
  } else if (currentGameMode === 'crypto') {
    matcherArea?.classList.remove('hidden');
    sequenceArea?.classList.add('hidden');
    architectArea?.classList.add('hidden');
    const bins = ['symmetric', 'asymmetric'];
    bins.forEach(bin => {
      const row = document.createElement('div');
      row.className = 'game-target-row card glass';
      row.style.cssText = 'display: flex; flex-direction: column; padding: 20px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.06); background: rgba(255,255,255,0.01); transition: all 0.3s; cursor: pointer; min-height: 220px; position: relative;';
      row.dataset.targetId = bin;
      row.innerHTML = `<span style="font-weight:700; font-size:16px; color:var(--accent); text-transform: capitalize; margin-bottom: 12px;"><i class="fa-solid fa-folder-open" style="margin-right:8px;"></i> ${bin} Ciphers</span><div class="dropped-items-container" style="display:flex; gap:10px; flex-wrap:wrap; width: 100%; min-height: 120px; border: 2px dashed rgba(255,255,255,0.04); border-radius: 8px; padding: 10px;"></div>`;
      
      bindTargetEvents(row);
      board.appendChild(row);
    });
    gameDeck = shuffleArray([...CRYPTO_GAME_DATA]).slice(0, 10);
  } else if (currentGameMode === 'sequence') {
    matcherArea?.classList.add('hidden');
    architectArea?.classList.add('hidden');
    sequenceArea?.classList.remove('hidden');
    initSequenceGame();
    return;
  } else if (currentGameMode === 'architect') {
    matcherArea?.classList.add('hidden');
    sequenceArea?.classList.add('hidden');
    architectArea?.classList.remove('hidden');
    initArchitectGame();
    return;
  }

  activeDeckIndex = 0;
  renderDeckCard();
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function bindTargetEvents(el) {
  el.addEventListener('dragover', (e) => {
    e.preventDefault();
    el.style.background = 'rgba(255,255,255,0.05)';
    el.style.borderColor = 'var(--accent)';
  });

  el.addEventListener('dragleave', () => {
    el.style.background = 'rgba(255,255,255,0.01)';
    el.style.borderColor = 'rgba(255,255,255,0.06)';
  });

  el.addEventListener('drop', (e) => {
    e.preventDefault();
    el.style.background = 'rgba(255,255,255,0.01)';
    el.style.borderColor = 'rgba(255,255,255,0.06)';
    
    const cardData = JSON.parse(e.dataTransfer.getData('text/plain'));
    evaluateMatch(cardData, el.dataset.targetId, el);
  });

  el.addEventListener('click', () => {
    if (selectedDeckCard) {
      evaluateMatch(selectedDeckCard, el.dataset.targetId, el);
      selectedDeckCard = null;
      const activeCardEl = document.getElementById('active-deck-card');
      if (activeCardEl) activeCardEl.style.boxShadow = 'none';
    }
  });
}

function renderDeckCard() {
  const container = document.getElementById('deck-card-container');
  if (!container) return;
  container.innerHTML = '';

  if (activeDeckIndex >= gameDeck.length) {
    container.innerHTML = `
      <div class="card glass" style="padding: 30px; text-align: center; border-radius: 12px; width: 100%; box-shadow: 0 8px 32px rgba(0,0,0,0.3); border: 1px solid var(--success);">
        <i class="fa-solid fa-trophy" style="font-size: 50px; color: var(--warning); margin-bottom: 15px; display: block;"></i>
        <h4 style="margin: 0 0 10px 0; color: #fff;">Deck Completed!</h4>
        <p style="font-size: 13px; color: var(--text-muted); margin: 0 0 20px 0;">Outstanding! You have matched all cards in this deck.</p>
        <button class="btn btn-secondary btn-sm" id="game-restart-btn-complete" style="background:var(--success); color:#fff; border:none; padding:8px 20px; font-weight:600; border-radius:30px; cursor:pointer;"><i class="fa-solid fa-rotate-right" style="margin-right:6px;"></i> Play Again</button>
      </div>
    `;
    document.getElementById('game-restart-btn-complete')?.addEventListener('click', resetGame);
    return;
  }

  const card = gameDeck[activeDeckIndex];
  const cardEl = document.createElement('div');
  cardEl.id = 'active-deck-card';
  cardEl.className = 'card glass';
  cardEl.draggable = true;
  cardEl.style.cssText = 'padding: 24px; border-radius: 12px; width: 100%; cursor: grab; background: rgba(30, 41, 59, 0.4); border: 1px solid rgba(255,255,255,0.08); box-shadow: 0 8px 24px rgba(0,0,0,0.4); transition: all 0.3s;';
  cardEl.innerHTML = `
    <h4 style="margin: 0 0 8px 0; color: #fff; font-size: 18px; font-weight: 700;">${card.name}</h4>
    <p style="font-size: 12px; color: var(--text-muted); margin: 0; line-height: 1.5;">${card.desc}</p>
  `;

  cardEl.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', JSON.stringify(card));
    cardEl.style.opacity = '0.5';
  });

  cardEl.addEventListener('dragend', () => {
    cardEl.style.opacity = '1';
  });

  cardEl.addEventListener('click', (e) => {
    e.stopPropagation();
    selectedDeckCard = card;
    cardEl.style.boxShadow = '0 0 0 3px var(--accent)';
    const feedback = document.getElementById('deck-feedback');
    if (feedback) {
      feedback.innerHTML = `Selected <strong>${card.name}</strong>. Click any target on the left to match!`;
    }
  });

  container.appendChild(cardEl);
}

function evaluateMatch(card, userChoice, targetElement) {
  let isCorrect = false;
  let explanation = '';

  if (currentGameMode === 'osi') {
    const correctLayer = card.layer;
    isCorrect = parseInt(userChoice) === correctLayer;
    explanation = `<strong>${card.name}</strong> belongs to <strong>${OSI_LAYER_NAMES[correctLayer]}</strong>. <br><span style="font-size:11px; color:var(--text-muted);">${card.desc}</span>`;
  } else {
    const correctCat = card.category;
    isCorrect = userChoice === correctCat;
    explanation = `<strong>${card.name}</strong> is a <strong>${correctCat}</strong> cipher. <br><span style="font-size:11px; color:var(--text-muted);">${card.desc}</span>`;
  }

  const feedback = document.getElementById('deck-feedback');
  if (!feedback) return;

  if (isCorrect) {
    playBeep(660, 120);
    gameScore.correct++;
    gameScore.streak++;
    feedback.innerHTML = `<span style="color:var(--success); font-weight:700;"><i class="fa-solid fa-circle-check"></i> Correct!</span><p style="margin:5px 0 0 0; font-size:12px;">${explanation}</p>`;
    feedback.style.background = 'rgba(16, 185, 129, 0.08)';
    feedback.style.borderColor = 'rgba(16, 185, 129, 0.15)';
    feedback.style.color = '#fff';

    const container = targetElement.querySelector('.dropped-items-container');
    if (container) {
      const pill = document.createElement('span');
      pill.style.cssText = 'background: rgba(16, 185, 129, 0.12); color: var(--success); font-size:11px; font-weight:600; padding:4px 10px; border-radius:30px; border: 1px solid rgba(16, 185, 129, 0.2); animation: pulse-green 1s; margin: 2px;';
      pill.innerText = card.name;
      container.appendChild(pill);
    }
  } else {
    playBeep(140, 250);
    gameScore.incorrect++;
    gameScore.streak = 0;
    feedback.innerHTML = `<span style="color:var(--warning); font-weight:700;"><i class="fa-solid fa-circle-xmark"></i> Incorrect!</span><p style="margin:5px 0 0 0; font-size:12px;">${explanation}</p>`;
    feedback.style.background = 'rgba(245, 158, 11, 0.08)';
    feedback.style.borderColor = 'rgba(245, 158, 11, 0.15)';
    feedback.style.color = '#fff';
    
    targetElement.style.animation = 'shake 0.3s';
    setTimeout(() => {
      targetElement.style.animation = '';
    }, 300);
  }

  updateGameStats();
  activeDeckIndex++;
  renderDeckCard();
}

// Reader Fullscreen helper functions
function toggleReaderFullscreen(sectionId) {
  const elem = document.getElementById(sectionId);
  if (!elem) return;

  if (!document.fullscreenElement) {
    elem.requestFullscreen().then(() => {
      elem.classList.add("fullscreen-active");
      
      // Auto-scale to fit fullscreen neatly
      if (sectionId === 'concept-reader-wrapper') {
        STATE.savedBookZoomScale = bookZoomScale;
        bookZoomScale = 2.0; // Higher density zoom
        renderBookPage(bookPageNum);
      } else if (sectionId === 'certmike-reader-wrapper') {
        STATE.savedCertMikeZoomScale = certmikeZoomScale;
        certmikeZoomScale = 2.0; // Higher density zoom
        renderCertMikePage(certmikePageNum);
      }
    }).catch(err => {
      console.warn(`Fullscreen API blocked, falling back to class toggle: ${err.message}`);
      elem.classList.toggle("fullscreen-active");
    });
  } else {
    document.exitFullscreen();
  }
}

document.addEventListener("fullscreenchange", () => {
  const bookSection = document.getElementById("concept-reader-wrapper");
  const certmikeSection = document.getElementById("certmike-reader-wrapper");

  if (!document.fullscreenElement) {
    // Restore original zoom scales and re-render
    if (bookSection?.classList.contains("fullscreen-active")) {
      bookZoomScale = STATE.savedBookZoomScale || 1.4;
      renderBookPage(bookPageNum);
    }
    if (certmikeSection?.classList.contains("fullscreen-active")) {
      certmikeZoomScale = STATE.savedCertMikeZoomScale || 1.4;
      renderCertMikePage(certmikePageNum);
    }
    
    bookSection?.classList.remove("fullscreen-active");
    certmikeSection?.classList.remove("fullscreen-active");
  }
});


// 7. BOOTSTRAP INITIALIZER
window.onload = initApp;


// =================================================================
// 8. MEMBER AUTHENTICATION & VISITOR COUNTERS
// =================================================================

function initAuthAndCounters() {
  // Load saved user session
  const savedUser = localStorage.getItem("cissp_member_user");
  if (savedUser) {
    try {
      STATE.user = JSON.parse(savedUser);
    } catch (e) {
      console.error("Failed to parse saved user", e);
    }
  }

  // Load saved mock exam history
  const savedHistory = localStorage.getItem("cissp_exam_history");
  if (savedHistory) {
    try {
      STATE.examHistory = JSON.parse(savedHistory);
    } catch (e) {
      console.error("Failed to parse saved history", e);
    }
  }

  updateUserAuthUI();
  renderExamHistory();
  fetchVisitorCount();

  // Modal open/close bindings
  document.addEventListener("click", (e) => {
    if (e.target.closest(".login-trigger-btn") || e.target.closest("#header-signin-btn")) {
      document.getElementById("login-modal")?.classList.add("active");
    }
  });

  document.getElementById("close-login-modal")?.addEventListener("click", () => {
    document.getElementById("login-modal")?.classList.remove("active");
  });

  // Close login modal if user clicks outside card
  document.getElementById("login-modal")?.addEventListener("click", (e) => {
    if (e.target === document.getElementById("login-modal")) {
      document.getElementById("login-modal")?.classList.remove("active");
    }
  });

  // Theme toggle button click listener (event delegation via header)
  document.getElementById("auth-header-container")?.addEventListener("click", (e) => {
    if (e.target.closest("#theme-toggle-btn")) {
      toggleTheme();
    }
  });

  // Demo Login click handler
  document.getElementById("demo-gmail-btn")?.addEventListener("click", () => {
    // Simulate successful Google login callback
    const mockUser = {
      name: "Vicky Kumar",
      email: "vicky.cissp@gmail.com",
      picture: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80"
    };
    STATE.user = mockUser;
    localStorage.setItem("cissp_member_user", JSON.stringify(mockUser));
    updateUserAuthUI();
    document.getElementById("login-modal")?.classList.remove("active");
    showSystemNotification("Welcome back, Vicky! You have signed in with Gmail.");
  });

  // Email form login submission
  document.getElementById("email-login-form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("login-email").value;
    const name = email.split("@")[0];
    const formattedName = name.charAt(0).toUpperCase() + name.slice(1);
    
    const customUser = {
      name: formattedName,
      email: email,
      picture: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80" // Default profile placeholder
    };
    
    STATE.user = customUser;
    localStorage.setItem("cissp_member_user", JSON.stringify(customUser));
    updateUserAuthUI();
    document.getElementById("login-modal")?.classList.remove("active");
    showSystemNotification(`Signed in successfully as ${formattedName}.`);
  });

  // Register link handler
  document.getElementById("register-trigger")?.addEventListener("click", () => {
    alert("Account registration is free for beta members. Simply type in your email and password above to create/sign in to your dashboard instantly!");
  });

  // Initialize Google Identity Services
  if (typeof google !== "undefined" && google.accounts) {
    try {
      google.accounts.id.initialize({
        client_id: "1088730925769-placeholder.apps.googleusercontent.com",
        callback: handleGoogleSignInCallback,
        auto_select: false
      });
      google.accounts.id.renderButton(
        document.getElementById("google-signin-btn"),
        { theme: "outline", size: "large", width: "100%", text: "signin_with" }
      );
    } catch (err) {
      console.warn("Failed to initialize Google Accounts API client:", err);
    }
  } else {
    // If Google JS didn't load or is blocked (e.g. offline, adblocker)
    console.log("Google Identity Services script not available. Falling back to email/demo options.");
  }
}

function handleGoogleSignInCallback(response) {
  try {
    const payload = decodeJwt(response.credential);
    const googleUser = {
      name: payload.name,
      email: payload.email,
      picture: payload.picture
    };
    STATE.user = googleUser;
    localStorage.setItem("cissp_member_user", JSON.stringify(googleUser));
    updateUserAuthUI();
    document.getElementById("login-modal")?.classList.remove("active");
    showSystemNotification(`Signed in successfully with Google: ${googleUser.name}`);
  } catch (error) {
    console.error("Error decoding Google credential token:", error);
    alert("Authentication failed. Please use the Demo Login option.");
  }
}

function decodeJwt(token) {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
  return JSON.parse(jsonPayload);
}

function updateUserAuthUI() {
  const container = document.getElementById("auth-header-container");
  if (!container) return;

  const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
  const themeIcon = currentTheme === "light" ? "sun" : "moon";

  const themeBtnHtml = `
    <button class="theme-toggle-btn" id="theme-toggle-btn" title="Toggle Light/Dark Theme">
      <i class="fa-solid fa-${themeIcon}"></i>
    </button>
  `;

  if (STATE.user) {
    // Render profile badge & avatar
    container.innerHTML = `
      ${themeBtnHtml}
      <div class="user-profile-widget" id="header-user-widget">
        <div class="avatar-container" id="avatar-menu-trigger" style="display: flex; align-items: center; justify-content: center;">
          <img src="${STATE.user.picture}" alt="User Avatar" class="user-avatar">
          <div class="user-status-dot"></div>
        </div>
        <div class="profile-dropdown-menu hidden" id="profile-dropdown">
          <div class="dropdown-header">
            <p class="dropdown-name" style="margin: 0; font-weight: 600; color: #fff; font-size: 13px;">${STATE.user.name}</p>
            <span class="dropdown-email" style="display: block; font-size: 10.5px; color: var(--text-muted); margin-top: 1px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${STATE.user.email}</span>
          </div>
          <div class="dropdown-divider" style="height: 1px; background: rgba(255, 255, 255, 0.08); margin: 6px 0;"></div>
          <button class="dropdown-item" id="header-signout-btn" style="background: none; border: none; display: flex; align-items: center; gap: 8px; font-size: 12px; color: var(--text-muted); padding: 6px 8px; width: 100%; border-radius: 4px; cursor: pointer; text-align: left; transition: all 0.2s ease;">
            <i class="fa-solid fa-arrow-right-from-bracket"></i> Sign Out
          </button>
        </div>
      </div>
    `;

    // Dropdown toggles
    const trigger = document.getElementById("avatar-menu-trigger");
    const dropdown = document.getElementById("profile-dropdown");
    
    trigger?.addEventListener("click", (e) => {
      e.stopPropagation();
      dropdown?.classList.toggle("hidden");
    });

    document.addEventListener("click", () => {
      dropdown?.classList.add("hidden");
    });

    document.getElementById("header-signout-btn")?.addEventListener("click", (e) => {
      e.stopPropagation();
      signOutUser();
    });
  } else {
    // Render standard "Member Sign-In" button
    container.innerHTML = `
      ${themeBtnHtml}
      <button class="btn btn-secondary login-trigger-btn" id="header-signin-btn" style="padding: 5px 12px; font-size: 11px; height: 30px; border-radius: 6px; border-color: rgba(255,255,255,0.08); display: flex; align-items: center; gap: 6px;">
        <i class="fa-solid fa-user-lock"></i> Member Sign-In
      </button>
    `;
  }
}

function signOutUser() {
  STATE.user = null;
  localStorage.removeItem("cissp_member_user");
  updateUserAuthUI();
  showSystemNotification("You have signed out of your session.");
}

function showSystemNotification(msg) {
  // Check for existing notifications and remove them to prevent stacking
  document.querySelectorAll(".system-notification").forEach(n => n.remove());

  const notification = document.createElement("div");
  notification.className = "system-notification";
  notification.style.position = "fixed";
  notification.style.bottom = "20px";
  notification.style.right = "20px";
  notification.style.background = "rgba(15, 23, 42, 0.95)";
  notification.style.border = "1px solid var(--primary)";
  notification.style.boxShadow = "0 8px 30px rgba(6, 182, 212, 0.15)";
  notification.style.color = "#fff";
  notification.style.padding = "12px 20px";
  notification.style.borderRadius = "8px";
  notification.style.fontSize = "13px";
  notification.style.zIndex = "3000";
  notification.style.display = "flex";
  notification.style.alignItems = "center";
  notification.style.gap = "10px";
  notification.innerHTML = `<i class="fa-solid fa-bell" style="color: var(--primary);"></i> <span>${msg}</span>`;
  document.body.appendChild(notification);
  setTimeout(() => {
    notification.style.opacity = "0";
    notification.style.transition = "opacity 0.5s ease";
    setTimeout(() => notification.remove(), 500);
  }, 3500);
}

function fetchVisitorCount() {
  const visitorCountEl = document.getElementById("visitor-count");
  if (!visitorCountEl) return;

  // Local storage backup incrementer for offline testing/safety
  let mockCount = parseInt(localStorage.getItem("cissp_mock_visitors") || "1284");
  mockCount += 1;
  localStorage.setItem("cissp_mock_visitors", mockCount);

  fetch('https://api.counterapi.dev/v1/cissp-exampro/views/up')
    .then(response => response.json())
    .then(data => {
      if (data && (data.count !== undefined || data.value !== undefined)) {
        const actualCount = data.count !== undefined ? data.count : data.value;
        visitorCountEl.textContent = Number(actualCount).toLocaleString();
      } else {
        visitorCountEl.textContent = mockCount.toLocaleString();
      }
    })
    .catch(err => {
      console.log("Visitor counter API error or offline mode. Loading mock increment:", err);
      visitorCountEl.textContent = mockCount.toLocaleString();
    });
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("cissp_theme", newTheme);
  
  // Refresh header widget to update toggle button sun/moon icon
  updateUserAuthUI();
  showSystemNotification(`Switched to ${newTheme.toUpperCase()} theme.`);
}

let currentUtterance = null;
let activeTtsButton = null;

function speakText(text, btnElement) {
  if (!("speechSynthesis" in window)) {
    alert("Sorry, your browser does not support Text-to-Speech voices.");
    return;
  }

  // If already speaking, cancel active voice
  if (window.speechSynthesis.speaking) {
    window.speechSynthesis.cancel();
    
    // Restore previous active button
    if (activeTtsButton) {
      activeTtsButton.innerHTML = `<i class="fa-solid fa-volume-low"></i>`;
      activeTtsButton.title = "Read aloud";
    }

    // If clicking the same button, treat it as a stop trigger
    if (activeTtsButton === btnElement) {
      activeTtsButton = null;
      return;
    }
  }

  activeTtsButton = btnElement;
  activeTtsButton.innerHTML = `<i class="fa-solid fa-volume-high fa-beat" style="color: var(--warning);"></i>`;
  activeTtsButton.title = "Stop reading";

  // Clean the text to avoid reading HTML markup or special ciphers
  const cleanText = text.replace(/<[^>]*>/g, "").replace(/&bull;/g, "").replace(/&times;/g, "");

  currentUtterance = new SpeechSynthesisUtterance(cleanText);
  currentUtterance.rate = 1.0; // Standard speed
  currentUtterance.pitch = 1.0;

  // Attempt to select a high-quality natural voice
  const voices = window.speechSynthesis.getVoices();
  const naturalVoice = voices.find(v => v.lang.startsWith("en") && v.name.includes("Natural")) || 
                       voices.find(v => v.lang.startsWith("en"));
  if (naturalVoice) currentUtterance.voice = naturalVoice;

  currentUtterance.onend = () => {
    if (activeTtsButton === btnElement) {
      btnElement.innerHTML = `<i class="fa-solid fa-volume-low"></i>`;
      btnElement.title = "Read aloud";
      activeTtsButton = null;
    }
  };

  currentUtterance.onerror = () => {
    if (activeTtsButton === btnElement) {
      btnElement.innerHTML = `<i class="fa-solid fa-volume-low"></i>`;
      btnElement.title = "Read aloud";
      activeTtsButton = null;
    }
  };

  window.speechSynthesis.speak(currentUtterance);
}

function renderExamHistory() {
  const historyListEl = document.getElementById("exam-history-list");
  const trendChartEl = document.getElementById("exam-trend-chart");
  if (!historyListEl || !trendChartEl) return;

  const history = STATE.examHistory || [];

  if (history.length === 0) {
    historyListEl.innerHTML = `<div class="history-empty">No past exam attempts recorded yet. Click one of the options above to begin!</div>`;
    trendChartEl.innerHTML = `<div style="display: flex; width: 100%; height: 100%; align-items: center; justify-content: center; color: var(--text-muted); font-size: 12px; font-style: italic;">Complete a mock exam to plot your score trends.</div>`;
    return;
  }

  // 1. Render History List (reversed to show latest first)
  const reversedHistory = [...history].reverse();
  historyListEl.innerHTML = reversedHistory.map(item => {
    const isPass = item.score >= 70;
    const badgeClass = isPass ? "score-pass" : "score-fail";
    const statusText = isPass ? "PASSED" : "FAILED";
    const typeLabel = item.isMock ? "Full Mock" : "Domain Quiz";
    
    return `
      <div class="history-item">
        <div class="history-meta">
          <span class="history-type">${typeLabel}</span>
          <span class="history-date">${item.date}</span>
        </div>
        <div style="display: flex; align-items: center; gap: 12px;">
          <span style="color: var(--text-muted); font-size: 11px;">${item.correct}/${item.total} Correct</span>
          <span class="history-score-badge ${badgeClass}">${item.score}% (${statusText})</span>
        </div>
      </div>
    `;
  }).join("");

  // 2. Render Score Trend Chart (last 5 attempts)
  const lastFiveAttempts = history.slice(-5);
  trendChartEl.innerHTML = lastFiveAttempts.map((item, index) => {
    const isPass = item.score >= 70;
    const color = isPass ? "var(--success)" : "var(--primary)";
    const glow = isPass ? "rgba(16, 185, 129, 0.3)" : "var(--primary-glow)";
    
    return `
      <div class="trend-bar-wrapper">
        <div class="trend-bar" data-score="${item.score}" style="height: ${item.score}%; background: ${color}; box-shadow: 0 0 10px ${glow};"></div>
        <span class="trend-bar-label">Attempt ${index + 1}</span>
      </div>
    `;
  }).join("");
}

// =================================================================
// CROSS-BOOK REFERENCE DATABASE
// =================================================================
const CROSS_BOOK_DB = [
  { topic: "Kerberos Authentication", domain: 5, sybex: "Ch 14, pp 642-646 (10th Ed) / pp 630-634 (9th Ed)", aio: "Ch 5, pp 320-324" },
  { topic: "Bell-LaPadula Confidentiality Model", domain: 3, sybex: "Ch 9, pp 360-362 (10th Ed) / pp 350-352 (9th Ed)", aio: "Ch 3, pp 185-189" },
  { topic: "Biba Integrity Model", domain: 3, sybex: "Ch 9, pp 363-364 (10th Ed) / pp 353-354 (9th Ed)", aio: "Ch 3, pp 190-192" },
  { topic: "Clark-Wilson Integrity Model", domain: 3, sybex: "Ch 9, pp 365-366 (10th Ed) / pp 355-356 (9th Ed)", aio: "Ch 3, pp 193-195" },
  { topic: "Symmetric Ciphers (AES, DES, 3DES)", domain: 3, sybex: "Ch 7, pp 265-272 (10th Ed) / pp 255-262 (9th Ed)", aio: "Ch 4, pp 220-230" },
  { topic: "Asymmetric Ciphers (RSA, ECC, Diffie-Hellman)", domain: 3, sybex: "Ch 7, pp 278-285 (10th Ed) / pp 268-275 (9th Ed)", aio: "Ch 4, pp 245-258" },
  { topic: "IPSec Protocol (AH vs ESP, Tunnel/Transport)", domain: 4, sybex: "Ch 12, pp 520-525 (10th Ed) / pp 505-510 (9th Ed)", aio: "Ch 6, pp 410-418" },
  { topic: "OSI Layer Model (7 Layers)", domain: 4, sybex: "Ch 11, pp 450-465 (10th Ed) / pp 440-455 (9th Ed)", aio: "Ch 6, pp 385-402" },
  { topic: "Incident Response Steps (PICERL)", domain: 7, sybex: "Ch 17, pp 780-788 (10th Ed) / pp 760-768 (9th Ed)", aio: "Ch 7, pp 512-525" },
  { topic: "BCP (Business Continuity Planning)", domain: 1, sybex: "Ch 3, pp 105-118 (10th Ed) / pp 95-108 (9th Ed)", aio: "Ch 2, pp 110-128" },
  { topic: "SDLC Stages (Software Development Lifecycle)", domain: 8, sybex: "Ch 20, pp 920-932 (10th Ed) / pp 900-912 (9th Ed)", aio: "Ch 8, pp 680-698" },
  { topic: "SOC Reports (SOC 1 vs SOC 2 Type I/II)", domain: 6, sybex: "Ch 15, pp 682-686 (10th Ed) / pp 670-674 (9th Ed)", aio: "Ch 7, pp 480-484" },
  { topic: "Risk Management Framework (RMF steps)", domain: 1, sybex: "Ch 2, pp 60-70 (10th Ed) / pp 50-60 (9th Ed)", aio: "Ch 2, pp 82-95" },
  { topic: "GDPR & Privacy Regulations", domain: 1, sybex: "Ch 4, pp 145-152 (10th Ed) / pp 135-142 (9th Ed)", aio: "Ch 2, pp 140-146" },
  { topic: "Threat Modeling (STRIDE / DREAD)", domain: 1, sybex: "Ch 2, pp 75-82 (10th Ed) / pp 68-75 (9th Ed)", aio: "Ch 2, pp 98-106" },
  { topic: "SAML vs OIDC vs OAuth 2.0 Identity Protocols", domain: 5, sybex: "Ch 13, pp 602-608 (10th Ed) / pp 590-596 (9th Ed)", aio: "Ch 5, pp 348-356" },
  { topic: "Common Criteria Evaluation (EAL 1-7)", domain: 3, sybex: "Ch 8, pp 325-330 (10th Ed) / pp 315-320 (9th Ed)", aio: "Ch 3, pp 202-208" },
  { topic: "Fire Suppressing Systems (Class A-D, Wet/Dry)", domain: 7, sybex: "Ch 10, pp 420-428 (10th Ed) / pp 410-418 (9th Ed)", aio: "Ch 7, pp 580-590" },
  { topic: "RAID Levels (RAID 0, 1, 5, 6, 10)", domain: 7, sybex: "Ch 18, pp 840-845 (10th Ed) / pp 820-825 (9th Ed)", aio: "Ch 7, pp 560-566" },
  { topic: "Egress/Ingress Filtering & Firewalls", domain: 4, sybex: "Ch 12, pp 490-502 (10th Ed) / pp 480-492 (9th Ed)", aio: "Ch 6, pp 430-442" }
];

// =================================================================
// SEQUENCE PUZZLE DATA
// =================================================================
const SEQUENCE_PUZZLES = {
  picerl: {
    title: "Incident Response Steps (PICERL)",
    steps: [
      { id: 1, name: "Preparation" },
      { id: 2, name: "Identification" },
      { id: 3, name: "Containment" },
      { id: 4, name: "Eradication" },
      { id: 5, name: "Recovery" },
      { id: 6, name: "Lessons Learned" }
    ]
  },
  sdlc: {
    title: "Software Development Lifecycle (SDLC)",
    steps: [
      { id: 1, name: "Planning & Requirements" },
      { id: 2, name: "Design" },
      { id: 3, name: "Implementation/Coding" },
      { id: 4, name: "Testing" },
      { id: 5, name: "Deployment" },
      { id: 6, name: "Maintenance & Operations" }
    ]
  },
  rmf: {
    title: "Risk Management Framework (RMF)",
    steps: [
      { id: 1, name: "Prepare" },
      { id: 2, name: "Categorize System" },
      { id: 3, name: "Select Controls" },
      { id: 4, name: "Implement Controls" },
      { id: 5, name: "Assess Controls" },
      { id: 6, name: "Authorize System" },
      { id: 7, name: "Monitor Controls" }
    ]
  },
  bcp: {
    title: "Business Continuity Plan (BCP)",
    steps: [
      { id: 1, name: "Project Initiation" },
      { id: 2, name: "Business Impact Analysis (BIA)" },
      { id: 3, name: "Recovery Strategy Development" },
      { id: 4, name: "Plan Design & Implementation" }
    ]
  }
};

// =================================================================
// DAILY CHALLENGE & STREAK CONTROLLER
// =================================================================
function initDailyChallenge() {
  const card = document.getElementById("daily-challenge-card");
  if (!card) return;

  if (typeof CISSP_QUESTIONS === "undefined" || !CISSP_QUESTIONS.length) {
    card.innerHTML = `
      <div style="text-align: center; padding: 25px; color: var(--text-muted);">
        <i class="fa-solid fa-spinner fa-spin" style="font-size: 24px; margin-bottom: 10px; display: block; color: var(--primary);"></i>
        <p style="margin: 0; font-size: 13px;">Preparing today's Daily Challenge...</p>
      </div>`;
    return;
  }

  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 0);
  const diff = now - startOfYear;
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);
  
  const questionIdx = (dayOfYear + now.getFullYear()) % CISSP_QUESTIONS.length;
  const question = CISSP_QUESTIONS[questionIdx];

  const todayKey = `cissp_daily_${now.getFullYear()}_${now.getMonth()}_${now.getDate()}`;
  const attemptState = localStorage.getItem(todayKey); // "correct", "wrong" or null

  // Calculate Streak
  let streak = parseInt(localStorage.getItem("cissp_daily_streak") || "0");
  const lastActiveTime = localStorage.getItem("cissp_daily_last_active");
  if (lastActiveTime) {
    const lastDate = new Date(parseInt(lastActiveTime));
    
    // Clear times to compare dates
    const currentDateOnly = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const lastDateOnly = new Date(lastDate.getFullYear(), lastDate.getMonth(), lastDate.getDate());
    const dateDiff = Math.floor((currentDateOnly - lastDateOnly) / oneDay);

    if (dateDiff > 1) {
      streak = 0; // Streak broken
      localStorage.setItem("cissp_daily_streak", "0");
    }
  }

  if (attemptState) {
    // Render Locked/Answered State
    const isCorrect = attemptState === "correct";
    const statusText = isCorrect ? "CORRECT!" : "INCORRECT";
    const statusColor = isCorrect ? "var(--success)" : "var(--danger)";
    
    card.innerHTML = `
      <div class="daily-header">
        <h3 style="margin: 0;"><i class="fa-solid fa-calendar-check" style="color: var(--warning); margin-right: 6px;"></i> Question of the Day</h3>
        <span class="streak-badge">
          <i class="fa-solid fa-fire streak-flame"></i> ${streak} Day Streak
        </span>
      </div>
      <p style="font-size: 13.5px; line-height: 1.6; font-weight: 500; color: var(--text-main); margin-bottom: 12px;">${question.question}</p>
      
      <div style="padding: 12px 16px; background: rgba(255,255,255,0.02); border: 1px solid var(--card-border); border-radius: 8px; font-size: 12.5px;">
        <span style="font-weight: 700; color: ${statusColor}; text-transform: uppercase;">Your Attempt: ${statusText}</span>
        <p style="margin: 8px 0 0 0; line-height: 1.5; color: var(--text-muted);">${question.explanation}</p>
      </div>
    `;
  } else {
    // Render Question Form
    card.innerHTML = `
      <div class="daily-header">
        <h3 style="margin: 0;"><i class="fa-solid fa-calendar-day" style="color: var(--warning); margin-right: 6px;"></i> Question of the Day</h3>
        <span class="streak-badge">
          <i class="fa-solid fa-fire"></i> ${streak} Day Streak
        </span>
      </div>
      <p style="font-size: 13.5px; line-height: 1.6; font-weight: 500; color: var(--text-main); margin-bottom: 12px;">${question.question}</p>
      
      <div class="daily-options" id="daily-options-box">
        ${question.options.map((opt, idx) => `
          <button class="daily-opt" data-index="${idx}">
            <span style="font-weight: 700; color: var(--primary); font-size: 12px; margin-right: 6px;">${String.fromCharCode(65 + idx)}.</span>
            <span>${opt}</span>
          </button>
        `).join("")}
      </div>
    `;

    // Bind Option Clicks
    const optButtons = card.querySelectorAll(".daily-opt");
    optButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        const selectedIdx = parseInt(btn.getAttribute("data-index"));
        handleDailyAnswer(selectedIdx, question, todayKey, streak);
      });
    });
  }
}

function handleDailyAnswer(selectedIdx, question, todayKey, currentStreak) {
  const isCorrect = selectedIdx === question.answer;
  const now = new Date();
  
  let newStreak = currentStreak;
  if (isCorrect) {
    newStreak += 1;
    localStorage.setItem("cissp_daily_streak", newStreak.toString());
    localStorage.setItem(todayKey, "correct");
    playSuccessSound();
    showSystemNotification(`Correct! Daily Study Streak: ${newStreak} Days! 🔥`);
  } else {
    newStreak = 0;
    localStorage.setItem("cissp_daily_streak", "0");
    localStorage.setItem(todayKey, "wrong");
    logMistake(question, selectedIdx);
    playErrorSound();
    showSystemNotification("Incorrect daily challenge attempt. Streak reset.");
  }
  
  localStorage.setItem("cissp_daily_last_active", now.getTime().toString());
  
  // Re-render Daily challenge widget
  initDailyChallenge();
}

function playSuccessSound() {
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    
    osc.type = "sine";
    osc.frequency.setValueAtTime(523.25, audioCtx.currentTime); // C5
    osc.frequency.setValueAtTime(659.25, audioCtx.currentTime + 0.1); // E5
    osc.frequency.setValueAtTime(783.99, audioCtx.currentTime + 0.2); // G5
    
    gain.gain.setValueAtTime(0.12, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.35);
    
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.35);
  } catch (e) {
    console.log("AudioContext blocked or failed", e);
  }
}

function playErrorSound() {
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    
    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(140.00, audioCtx.currentTime); // Low buzz
    
    gain.gain.setValueAtTime(0.12, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.35);
    
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.35);
  } catch (e) {
    console.log("AudioContext blocked or failed", e);
  }
}

// =================================================================
// CROSS-BOOK REFERENCE SEARCH ENGINE
// =================================================================
function searchCrossBookReferences() {
  const query = (document.getElementById("ref-search-input")?.value || "").toLowerCase().trim();
  const table = document.getElementById("ref-results-table");
  const tbody = document.getElementById("ref-results-body");

  if (!table || !tbody) return;

  if (query.length === 0) {
    table.style.display = "none";
    tbody.innerHTML = "";
    return;
  }

  const results = CROSS_BOOK_DB.filter(item => {
    return item.topic.toLowerCase().includes(query) ||
           item.sybex.toLowerCase().includes(query) ||
           item.aio.toLowerCase().includes(query);
  });

  if (results.length === 0) {
    table.style.display = "table";
    tbody.innerHTML = `
      <tr>
        <td colspan="4" style="text-align: center; color: var(--text-muted); font-style: italic; padding: 20px;">
          No matching page references found. Try searching: "Symmetric", "Model", "IPSec", or "Incident".
        </td>
      </tr>
    `;
    return;
  }

  table.style.display = "table";
  tbody.innerHTML = results.map(item => {
    return `
      <tr>
        <td style="font-weight: 600; color: var(--text-main);">${item.topic}</td>
        <td><span style="font-weight: 700; color: var(--primary);">Domain ${item.domain}</span></td>
        <td><span class="ref-book-tag tag-sybex">Sybex OSG</span> <span style="color: var(--text-main); font-weight: 500; font-family: monospace;">${item.sybex}</span></td>
        <td><span class="ref-book-tag tag-aio">Harris AIO</span> <span style="color: var(--text-main); font-weight: 500; font-family: monospace;">${item.aio}</span></td>
      </tr>
    `;
  }).join("");
}

// =================================================================
// PROCESS SEQUENCE PUZZLE GAME LOGIC
// =================================================================
let currentSequenceList = [];
let sequenceKey = "picerl";
let selectedBlockIndex = null; // For keyboard/touch swap fallback

function initSequenceGame() {
  const selectEl = document.getElementById("sequence-select");
  if (selectEl) {
    sequenceKey = selectEl.value;
  }

  const puzzle = SEQUENCE_PUZZLES[sequenceKey];
  if (!puzzle) return;

  // Clone and jumble steps
  const steps = [...puzzle.steps];
  
  // Shuffle steps array until it is NOT in the correct order
  let isSorted = true;
  while (isSorted) {
    for (let i = steps.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [steps[i], steps[j]] = [steps[j], steps[i]];
    }
    isSorted = steps.every((s, idx) => s.id === idx + 1);
  }

  currentSequenceList = steps;
  selectedBlockIndex = null;

  const feedback = document.getElementById("sequence-feedback");
  if (feedback) {
    feedback.className = "";
    feedback.style.borderColor = "var(--card-border)";
    feedback.textContent = "Rearrange the blocks, then check if they match the correct security process sequence.";
  }

  renderSequenceGame();
}

function renderSequenceGame() {
  const board = document.getElementById("sequence-board");
  if (!board) return;

  board.innerHTML = "";

  currentSequenceList.forEach((step, idx) => {
    const block = document.createElement("div");
    block.className = "sequence-block";
    block.setAttribute("draggable", "true");
    block.setAttribute("data-index", idx);
    block.innerHTML = `
      <i class="fa-solid fa-grip-vertical" style="color: var(--text-muted); cursor: grab; font-size: 11px;"></i>
      <span>${step.name}</span>
    `;

    // Highlight if selected (for touch/click swap fallback)
    if (selectedBlockIndex === idx) {
      block.style.borderColor = "var(--warning)";
      block.style.boxShadow = "0 0 10px rgba(245, 158, 11, 0.4)";
    }

    // Drag-and-Drop Event Listeners
    block.addEventListener("dragstart", (e) => {
      block.classList.add("dragging");
      e.dataTransfer.setData("text/plain", idx);
    });

    block.addEventListener("dragend", () => {
      block.classList.remove("dragging");
    });

    block.addEventListener("dragover", (e) => {
      e.preventDefault();
    });

    block.addEventListener("drop", (e) => {
      e.preventDefault();
      const draggedIdx = parseInt(e.dataTransfer.getData("text/plain"));
      const targetIdx = parseInt(block.getAttribute("data-index"));

      if (!isNaN(draggedIdx) && draggedIdx !== targetIdx) {
        // Swap elements
        const temp = currentSequenceList[draggedIdx];
        currentSequenceList[draggedIdx] = currentSequenceList[targetIdx];
        currentSequenceList[targetIdx] = temp;
        
        selectedBlockIndex = null;
        renderSequenceGame();
      }
    });

    // Touch/Click Swap Fallback
    block.addEventListener("click", (e) => {
      e.stopPropagation();
      const clickIdx = idx;

      if (selectedBlockIndex === null) {
        selectedBlockIndex = clickIdx;
      } else {
        if (selectedBlockIndex !== clickIdx) {
          // Swap selected and clicked
          const temp = currentSequenceList[selectedBlockIndex];
          currentSequenceList[selectedBlockIndex] = currentSequenceList[clickIdx];
          currentSequenceList[clickIdx] = temp;
        }
        selectedBlockIndex = null;
      }
      renderSequenceGame();
    });

    board.appendChild(block);

    // Append connection arrow if not last block
    if (idx < currentSequenceList.length - 1) {
      const arrow = document.createElement("div");
      arrow.className = "sequence-arrow";
      arrow.innerHTML = `<i class="fa-solid fa-circle-arrow-right"></i>`;
      board.appendChild(arrow);
    }
  });
}

function checkSequenceGame() {
  const puzzle = SEQUENCE_PUZZLES[sequenceKey];
  if (!puzzle) return;

  const board = document.getElementById("sequence-board");
  const feedback = document.getElementById("sequence-feedback");
  if (!board || !feedback) return;

  const blocks = board.querySelectorAll(".sequence-block");
  let allCorrect = true;

  currentSequenceList.forEach((step, idx) => {
    // Correct step ID should match sorted position
    const isCorrect = step.id === idx + 1;
    const block = blocks[idx];

    if (block) {
      block.classList.remove("success", "error");
      if (isCorrect) {
        block.classList.add("success");
      } else {
        block.classList.add("error");
        allCorrect = false;
      }
    }
  });

  if (allCorrect) {
    feedback.textContent = `Correct! You successfully ordered the ${puzzle.title} steps!`;
    feedback.style.color = "var(--success)";
    feedback.style.borderColor = "var(--success)";
    playSuccessSound();
    
    // Add visual progress reward points (simulated logged study session bonus)
    let totalHours = parseFloat(localStorage.getItem("cissp_total_hours") || "0");
    totalHours += 0.25; // 15 mins bonus!
    localStorage.setItem("cissp_total_hours", totalHours.toString());
    const hoursLabel = document.getElementById("total-study-hours");
    if (hoursLabel) {
      hoursLabel.textContent = `${totalHours.toFixed(2)}h`;
    }
    
    showSystemNotification("Sequence correct! Awarded +0.25 hours study bonus!");
  } else {
    feedback.textContent = "Incorrect ordering. Check the highlighted red blocks and rearrange their positions.";
    feedback.style.color = "var(--danger)";
    feedback.style.borderColor = "var(--danger)";
    playErrorSound();
  }
}

// =================================================================
// 8.8 AI STUDY TUTOR & EXAM COMPANION ENGINE
// =================================================================
let lastAITutorText = "";
let aiSpeechUtterance = null;

// AI Tutor Core Database (Local knowledge base)
const AI_TUTOR_DATABASE = {
  concepts: {
    "bell-lapadula": {
      name: "Bell-LaPadula Model",
      domain: 3,
      explanation: `The Bell-LaPadula model is a formal state machine security model enforcing <strong>confidentiality</strong>. Developed in the 1970s for the military, it controls access using classification labels (e.g., Top Secret, Secret, Confidential) and clearance levels.
      <ul>
        <li><strong>Simple Security Property:</strong> "No read up" (NRU) - A subject at a lower clearance level cannot read a document at a higher classification level.</li>
        <li><strong>Star (*) Security Property:</strong> "No write down" (NWD) - A subject at a higher clearance level cannot write information into a lower classification document (prevents leakage).</li>
        <li><strong>Strong Star (*) Property:</strong> A subject can only read and write at their exact security level.</li>
      </ul>`,
      professor: `Imagine a high-ranking General holding Top Secret clearance. 
      <br>1. Under the <em>Simple Security Property</em>, a Private (low clearance) cannot read the General's Top Secret battle plans.
      <br>2. Under the <em>Star Property</em>, if the General is writing a note, they cannot write Top Secret details in an unclassified memo. They are "walled off" from writing down, which prevents high-clearance information from dropping into lower-clearance channels. It's like a submarine chamber where high pressure (Top Secret) cannot leak into low pressure areas.`,
      flashcards: [
        { term: "Simple Security Property (BLP)", definition: "No Read Up (NRU) rule in Bell-LaPadula. Prevents lower clearance from reading higher classification data.", domain: 3 },
        { term: "Star (*) Security Property (BLP)", definition: "No Write Down (NWD) rule in Bell-LaPadula. Prevents higher clearance from writing/leaking data to lower classification.", domain: 3 },
        { term: "Strong Star Property (BLP)", definition: "Limits read and write actions strictly to the subject's exact security level.", domain: 3 }
      ]
    },
    "biba": {
      name: "Biba Model",
      domain: 3,
      explanation: `The Biba model is a formal state machine security model enforcing <strong>integrity</strong>. It prevents unauthorized modification of data using integrity levels.
      <ul>
        <li><strong>Simple Integrity Axiom:</strong> "No read down" (NRD) - A subject at a high integrity level cannot read data from a lower integrity level (prevents contamination of clean brains by dirty data).</li>
        <li><strong>Star (*) Integrity Axiom:</strong> "No write up" (NWU) - A subject at a lower integrity level cannot write data to a higher integrity level (prevents writing garbage into clean systems).</li>
        <li><strong>Invocation Property:</strong> A subject cannot send service requests (invocations) to subjects at a higher integrity level.</li>
      </ul>`,
      professor: `Think of a pristine operating room (high integrity) and a dusty street outside (low integrity).
      <br>1. Under the <em>Simple Integrity Axiom</em>, a surgeon inside the clean room cannot read/rely on medical data scribbled on the dusty street (dirty data contamination).
      <br>2. Under the <em>Star Integrity Axiom</em>, a street sweeper outside cannot walk inside and perform surgery or modify patient chart files (no writing up). This ensures that "dirty" sources never infect the integrity of the "clean" state.`,
      flashcards: [
        { term: "Simple Integrity Axiom (Biba)", definition: "No Read Down (NRD) rule in Biba. Prevents reading lower integrity data to avoid contamination.", domain: 3 },
        { term: "Star (*) Integrity Axiom (Biba)", definition: "No Write Up (NWU) rule in Biba. Prevents writing/modifying data at a higher integrity level.", domain: 3 },
        { term: "Invocation Property (Biba)", definition: "Prevents a lower integrity subject from invoking or requesting services from higher integrity systems.", domain: 3 }
      ]
    },
    "clark-wilson": {
      name: "Clark-Wilson Model",
      domain: 3,
      explanation: `The Clark-Wilson model is a commercial-focused integrity model. Rather than using raw access levels, it enforces integrity through structured transactions and separation of duties.
      <ul>
        <li><strong>Constrained Data Items (CDIs):</strong> Highly protected data items subject to integrity controls.</li>
        <li><strong>Unconstrained Data Items (UDIs):</strong> Raw inputs from outside the security boundary.</li>
        <li><strong>Transformation Procedures (TPs):</strong> Controlled transactions/applications that modify CDIs.</li>
        <li><strong>Integrity Verification Procedures (IVPs):</strong> Auditing processes verifying that CDIs match correct state.</li>
      </ul>`,
      professor: `Think of a bank ledger (CDI). Instead of letting a teller write numbers directly into the ledger, the bank forces the teller to run a deposit program (TP) that validates inputs first.
      <br>At midnight, the head auditor runs a balance verification script (IVP) to ensure the numbers match the cash vault. Tellers cannot run IVPs, and auditors cannot run TPs—enforcing Separation of Duties.`,
      flashcards: [
        { term: "Constrained Data Item (CDI)", definition: "Data within Clark-Wilson subject to strict integrity audits and state validation.", domain: 3 },
        { term: "Transformation Procedure (TP)", definition: "The only software programs allowed to modify Constrained Data Items (CDIs) in Clark-Wilson.", domain: 3 },
        { term: "Integrity Verification Procedure (IVP)", definition: "Auditing procedures that check if Constrained Data Items (CDIs) conform to the integrity state.", domain: 3 }
      ]
    },
    "saml": {
      name: "SAML (Security Assertion Markup Language)",
      domain: 5,
      explanation: `SAML is an XML-based open standard for exchanging authentication and authorization data. It is primarily used for cross-domain Single Sign-On (SSO) in enterprise web portals.
      <ul>
        <li><strong>Principal:</strong> The user requesting access.</li>
        <li><strong>Identity Provider (IdP):</strong> The authority that authenticates the user and issues SAML assertions (e.g. Okta, Azure AD).</li>
        <li><strong>Service Provider (SP):</strong> The web application the user wants to access (e.g. Salesforce, Jira).</li>
      </ul>`,
      professor: `Imagine traveling to a foreign country.
      <br>1. You go to your Government Office (IdP) and get a Passport (SAML Assertion token).
      <br>2. You fly to the foreign Border Control (SP) and present your Passport. Border Control trust your Government, so they let you in without re-interviewing you or demanding your birth certificate. That XML assertion is your digital passport.`,
      flashcards: [
        { term: "Identity Provider (IdP)", definition: "The entity in SAML/SSO that authenticates users and generates authorization assertions.", domain: 5 },
        { term: "Service Provider (SP)", definition: "The application in SAML/SSO that accepts token assertions from the IdP and grants access.", domain: 5 },
        { term: "SAML Assertion", definition: "An XML document containing authentication and authorization statements passed from IdP to SP.", domain: 5 }
      ]
    },
    "oauth": {
      name: "OAuth 2.0",
      domain: 5,
      explanation: `OAuth 2.0 is an industry-standard delegation authorization framework. It allows third-party applications to get limited access to user accounts via HTTP service APIs on behalf of the user, without exposing password credentials.
      <ul>
        <li><strong>Resource Server:</strong> The API hosting the user data.</li>
        <li><strong>Client Application:</strong> The app requesting access on behalf of the owner.</li>
        <li><strong>Access Token:</strong> Short-lived strings (often JWTs) sent to authorize API requests.</li>
      </ul>`,
      professor: `Think of a Valet Key for your car. 
      <br>You do not give the valet parking driver your physical master key (your password). Instead, you give them a Valet Key (Access Token) which restricts their access—they can drive the car slowly and park it, but cannot open the trunk or glove box. They get exactly the permissions they need, for a temporary duration.`,
      flashcards: [
        { term: "Access Token", definition: "A temporary credential representing user authorization granted to a client application in OAuth.", domain: 5 },
        { term: "Authorization Server", definition: "The server that authenticates the user, obtains authorization, and issues Access Tokens.", domain: 5 },
        { term: "Scope (OAuth)", definition: "A mechanism to limit an application's access to a user's account details (e.g. read-only, write-only).", domain: 5 }
      ]
    },
    "kerberos": {
      name: "Kerberos Single Sign-On",
      domain: 5,
      explanation: `Kerberos is a ticket-based symmetric-key network authentication protocol designed to prove identity over insecure channels. It utilizes a trusted third party called the Key Distribution Center (KDC).
      <ul>
        <li><strong>Authentication Service (AS):</strong> Verifies client identity and issues a Ticket Granting Ticket (TGT).</li>
        <li><strong>Ticket Granting Service (TGS):</strong> Verifies the TGT and issues a Service Ticket.</li>
        <li><strong>Key Distribution Center (KDC):</strong> Houses the AS and TGS, holding database of all symmetric keys.</li>
      </ul>`,
      professor: `Imagine visiting an exclusive Amusement Park.
      <br>1. You go to the main Box Office (Authentication Service) and pay/prove identity. They stamp your hand and give you a General Entry Voucher (Ticket Granting Ticket / TGT).
      <br>2. When you want to ride a Rollercoaster, you take your TGT to the Ride Kiosk (TGS), which exchanges it for a specific Rollercoaster Ticket (Service Ticket). You hand that ticket to the ride operator. This is secure because you only enter credentials at the main box office once!`,
      flashcards: [
        { term: "Key Distribution Center (KDC)", definition: "The trusted Kerberos server consisting of the Authentication Service (AS) and Ticket Granting Service (TGS).", domain: 5 },
        { term: "Ticket Granting Ticket (TGT)", definition: "A temporary token issued by the AS that proves authentication and is used to request Service Tickets.", domain: 5 },
        { term: "Service Ticket (ST)", definition: "The ticket issued by the TGS that a client presents to a specific network service to gain access.", domain: 5 }
      ]
    },
    "ipsec": {
      name: "IPsec Protocol Suite",
      domain: 4,
      explanation: `IPsec is a suite of protocols that secures IP network communications via authenticating and encrypting packets.
      <ul>
        <li><strong>Authentication Header (AH):</strong> Provides integrity, data origin authentication, and anti-replay protection. <em>Critical Exam Trap:</em> AH does NOT encrypt data (no confidentiality).</li>
        <li><strong>Encapsulating Security Payload (ESP):</strong> Provides confidentiality (encryption) along with integrity and authentication.</li>
        <li><strong>Transport Mode:</strong> Encrypts only the payload. Used for host-to-host links.</li>
        <li><strong>Tunnel Mode:</strong> Encrypts the entire original IP packet (header and payload) and wraps it in a new IP header. Used for gateway-to-gateway VPN tunnels.</li>
      </ul>`,
      professor: `Think of sending confidential letters.
      <br>1. <em>AH</em> is like signing the back of a postcard. Everyone can read the content, but they can verify it was you who wrote it and no one changed the text.
      <br>2. <em>ESP in Transport Mode</em> is like putting your letter inside an envelope. The address on the outside is visible, but the content inside is hidden.
      <br>3. <em>ESP in Tunnel Mode</em> is like placing the entire envelope inside a larger shipping box. The original destination address is hidden inside the box, and a new address (the gateway router) is written on the shipping box outside.`,
      flashcards: [
        { term: "Authentication Header (AH)", definition: "IPsec protocol providing integrity and authentication, but NO encryption (confidentiality).", domain: 4 },
        { term: "Encapsulating Security Payload (ESP)", definition: "IPsec protocol providing confidentiality (encryption), integrity, and packet authentication.", domain: 4 },
        { term: "Tunnel Mode", definition: "IPsec mode that encrypts the entire original IP packet and adds a new IP header. Used for VPNs.", domain: 4 }
      ]
    },
    "bcp": {
      name: "Business Continuity Planning (BCP)",
      domain: 7,
      explanation: `BCP establishes policies and procedures to ensure an organization can continue core operations during a disaster.
      <ul>
        <li><strong>Business Impact Analysis (BIA):</strong> The foundational stage of BCP identifying critical systems, dependencies, and quantitative downtime metrics.</li>
        <li><strong>Maximum Tolerable Downtime (MTD):</strong> The maximum time a business function can be down before causing irreversible damage.</li>
        <li><strong>Recovery Time Objective (RTO):</strong> Target time to restore systems/operations to avoid exceeding MTD.</li>
        <li><strong>Recovery Point Objective (RPO):</strong> Maximum age of data that must be restored (determines backup frequency).</li>
      </ul>`,
      professor: `Imagine running a critical hospital emergency room.
      <br>1. If power cuts out, the maximum time ventilators can run on battery is 1 hour (MTD).
      <br>2. The engineers must set a target to turn on backup generators in 10 minutes (RTO).
      <br>3. The hospital database backup needs to restore data up to 15 minutes before the crash to avoid losing patient records (RPO). This structure governs survival metrics.`,
      flashcards: [
        { term: "Business Impact Analysis (BIA)", definition: "The BCP phase that identifies critical assets, dependencies, and calculates MTD, RTO, and RPO.", domain: 7 },
        { term: "Maximum Tolerable Downtime (MTD)", definition: "The absolute ceiling of time a business process can be offline before business death occurs.", domain: 7 },
        { term: "Recovery Time Objective (RTO)", definition: "The targeted duration of time to restore IT assets after a disaster to prevent exceeding MTD.", domain: 7 }
      ]
    }
  },
  
  domains: {
    1: {
      title: "Security & Risk Management",
      summary: "Focuses on governance, compliance, risk assessment, business continuity, and security policies. Key concepts include quantitative risk analysis (SLE/ALE), governance frameworks, threat modeling, and professional ethics.",
      tips: [
        "Prioritize human safety above all. In any BCP or incident question, human life is the absolute first concern.",
        "The board of directors is ultimately responsible for security governance. Security policies must align with business strategies.",
        "Know the difference between policies (high-level directives), standards (mandatory specifications), and guidelines (recommended practices)."
      ]
    },
    2: {
      title: "Asset Security",
      summary: "Covers data classification, labeling, ownership, retention, and secure disposal. Focuses on privacy controls, inventory management, and selecting appropriate data security states.",
      tips: [
        "The data owner is responsible for classifying data. The data custodian is responsible for implementing controls and performing backups.",
        "Sanitization (purging) is required before disposing of media. Declassification or destruction must follow strict procedures.",
        "Scopes of PII and privacy regulations (like GDPR) dictate data processing requirements."
      ]
    },
    3: {
      title: "Security Architecture & Engineering",
      summary: "Covers secure engineering design principles, security models (Bell-LaPadula, Biba), cryptography, physical security, and system vulnerability mitigations.",
      tips: [
        "Remember: Bell-LaPadula enforces confidentiality ('No read up, No write down'). Biba enforces integrity ('No read down, No write up').",
        "Symmetric encryption is fast and uses a shared key. Asymmetric encryption is slower, uses a public/private key pair, and provides non-repudiation.",
        "In physical security, defense-in-depth relies on layers (gates, guards, card-scans, locks)."
      ]
    },
    4: {
      title: "Communication & Network Security",
      summary: "Focuses on network design, routing, wireless protocols, network devices, and secure communication channels (IPsec, TLS).",
      tips: [
        "Know the 7 layers of the OSI model and their corresponding protocols (e.g. IPsec at Layer 3, TLS at Layer 4, HTTP at Layer 7).",
        "IPsec Authentication Header (AH) does NOT provide confidentiality (no encryption). Encapsulating Security Payload (ESP) encrypts data.",
        "WPA3 is the modern wireless security protocol replacing WPA2, using SAE (Simultaneous Authentication of Equals) to prevent offline dictionary attacks."
      ]
    },
    5: {
      title: "Identity & Access Management (IAM)",
      summary: "Focuses on identification, authentication, authorization, access control models (DAC, MAC, RBAC), and federated identity standards.",
      tips: [
        "Understand authentication factors: Something you know (password), Something you have (smartcard), Something you are (biometrics). Multiple items of the same category do NOT make multi-factor authentication.",
        "MAC (Mandatory Access Control) is label-based and owner-independent, used in high security/military. DAC (Discretionary) is owner-controlled.",
        "In SAML, the Identity Provider (IdP) authenticates the user, and the Service Provider (SP) hosts the resource."
      ]
    },
    6: {
      title: "Security Assessment & Testing",
      summary: "Covers vulnerability scanning, penetration testing, security audits, log management, and system performance evaluations.",
      tips: [
        "A vulnerability assessment finds weaknesses. A penetration test active exploits them to verify impact.",
        "Security audits are conducted by independent third parties. Security assessments are internal verification mechanisms.",
        "SOC 2 Type I evaluates design at a point in time. SOC 2 Type II evaluates design and operational effectiveness over a period (6+ months)."
      ]
    },
    7: {
      title: "Security Operations",
      summary: "Covers incident response, disaster recovery, daily system monitoring, configuration management, patch cycles, and physical access controls.",
      tips: [
        "The Incident Response steps follow the PICERL cycle: Preparation, Identification, Containment, Eradication, Recovery, Lessons Learned.",
        "Maximum Tolerable Downtime (MTD) is the absolute ceiling. Recovery Time Objective (RTO) must always be less than MTD.",
        "DR tests range from low risk (Checklist/Tabletop) to high risk (Parallel/Cutover)."
      ]
    },
    8: {
      title: "Software Development Security",
      summary: "Covers secure software development lifecycles, database architectures, APIs, and secure coding practices.",
      tips: [
        "Security must shift-left: integrate threat modeling and security requirements into the initial phases of the SDLC.",
        "SQL Injection is mitigated using parameterized queries. XSS (Cross-Site Scripting) is mitigated using input validation and output encoding.",
        "Understand the differences between static analysis (SAST - source code scanning) and dynamic analysis (DAST - running code assessment)."
      ]
    }
  }
};

const AI_TUTOR_QUIZ_QUESTIONS = {
  1: [
    {
      q: "Which of the following is the quantitative calculation for the annual cost of a threat?",
      options: ["SLE = AV * EF", "ALE = SLE * ARO", "ARO = SLE * EF", "ALE = AV * EF"],
      correct: 1,
      explanation: "Annualized Loss Expectancy (ALE) is calculated by multiplying the Single Loss Expectancy (SLE) by the Annualized Rate of Occurrence (ARO)."
    },
    {
      q: "Which document represents a mandatory compliance rule in security governance?",
      options: ["Standard", "Guideline", "Procedure", "Policy"],
      correct: 0,
      explanation: "Standards are mandatory specifications or rules that establish a baseline of security configuration. Guidelines are optional/recommended."
    }
  ],
  2: [
    {
      q: "Who is ultimately responsible for classifying data assets and determining their retention requirements?",
      options: ["Data Custodian", "System Administrator", "Data Owner", "Chief Information Officer"],
      correct: 2,
      explanation: "The Data Owner (typically a business manager) is responsible for asset classification and retention policies. The Custodian implements those rules."
    }
  ],
  3: [
    {
      q: "Under the Bell-LaPadula model, what property prevents a user with Secret clearance from writing to a Confidential document?",
      options: ["Simple Security Property", "Star (*) Security Property", "Simple Integrity Axiom", "Star (*) Integrity Axiom"],
      correct: 1,
      explanation: "The Star (*) Security Property is the 'No write down' rule in Bell-LaPadula, which prevents writing higher clearance data into lower classification targets."
    }
  ],
  4: [
    {
      q: "At which layer of the OSI model does the Internet Protocol Security (IPsec) protocol operate?",
      options: ["Layer 2: Data Link", "Layer 3: Network", "Layer 4: Transport", "Layer 7: Application"],
      correct: 1,
      explanation: "IPsec operates at Layer 3 (Network Layer) of the OSI model, providing secure routing and packet authenticity."
    }
  ],
  5: [
    {
      q: "Which authentication standard is XML-based and widely used for cross-domain Single Sign-On (SSO)?",
      options: ["OpenID Connect", "OAuth 2.0", "SAML", "Kerberos"],
      correct: 2,
      explanation: "Security Assertion Markup Language (SAML) is an XML-based framework used to exchange authentication assertions for SSO."
    }
  ],
  6: [
    {
      q: "Which type of SOC report evaluates both the system design and the operational effectiveness of controls over a minimum 6-month period?",
      options: ["SOC 1 Type I", "SOC 2 Type I", "SOC 2 Type II", "SOC 3 Type I"],
      correct: 2,
      explanation: "SOC 2 Type II reports evaluate both the design and the operational effectiveness of security controls over an extended period (typically 6-12 months)."
    }
  ],
  7: [
    {
      q: "What is the targeted duration of time allowed to restore business operations after a failure before exceeding the MTD?",
      options: ["Recovery Point Objective (RPO)", "Recovery Time Objective (RTO)", "Annualized Rate of Occurrence (ARO)", "Maximum Tolerable Downtime (MTD)"],
      correct: 1,
      explanation: "The Recovery Time Objective (RTO) is the targeted duration of time within which systems must be restored to avoid exceeding the Maximum Tolerable Downtime (MTD)."
    }
  ],
  8: [
    {
      q: "Which of the following is an effective mitigation against SQL Injection attacks in web applications?",
      options: ["Output Encoding", "Prepared Statements / Parameterized Queries", "Cross-Site Scripting Filters", "HTTPS Encryption"],
      correct: 1,
      explanation: "Prepared Statements (Parameterized Queries) ensure that SQL commands and database inputs are treated separately, preventing malicious SQL code execution."
    }
  ]
};

const AI_TUTOR_SCENARIOS = {
  1: {
    title: "Scenario: Merging Risk Strategies",
    scenario: "You are the CISO of a multinational logistics firm that has just acquired a startup. The startup uses agile dev processes with minimal documentation, while your parent firm enforces ISO 27001 policies. A critical risk assessment reveals several non-compliant systems in the startup's network. The CEO wants to complete the merger in two weeks.",
    question: "What is your BEST course of action as a security manager?",
    options: [
      "Shut down all startup network nodes immediately until they undergo formal audit.",
      "Conduct a rapid risk assessment, document the gap analysis, and request a risk acceptance sign-off from the CEO for a 90-day grace period.",
      "Re-write the startup security policy yourself over the weekend to force ISO compliance.",
      "Delay the entire corporate acquisition timeline indefinitely until compliance is validated."
    ],
    correct: 1,
    explanation: "As a security manager, your role is to enable the business while managing risk. Shutting down nodes or delaying mergers indefinitely breaks business objectives. Writing the policy yourself doesn't address the active system risks. Documenting the risk, presenting a gap analysis, and obtaining formal risk acceptance from executive leadership is the correct managerial protocol."
  },
  3: {
    title: "Scenario: Designing a Resilient E-Commerce Flow",
    scenario: "Your retail business is launching a high-traffic payment processing gateway. The database contains credit card information, transactions, and user logs. The Chief Software Architect wants to optimize transaction speeds by bypassing state validation audits on the secondary read replicas.",
    question: "Which model security control should you recommend to guarantee transaction integrity?",
    options: [
      "Apply the Bell-LaPadula Simple Security Property to prevent low systems from writing.",
      "Implement the Clark-Wilson model by routing all database writes through validated Transformation Procedures (TPs).",
      "Deploy Biba's Simple Integrity Axiom to allow write-ups.",
      "Disable auditing to increase throughput during peak seasons."
    ],
    correct: 1,
    explanation: "To secure transactions and database entries in commercial systems, the Clark-Wilson model is optimal. It prevents direct editing of Constrained Data Items (CDIs) by forcing all modifications to execute through Transformation Procedures (TPs) which maintain separation of duties."
  },
  7: {
    title: "Scenario: Disaster Recovery Cutover",
    scenario: "During a major regional hurricane, your primary datacenter loses utility power. The backup generators start, but a coolant leak causes them to fail after 2 hours. Your Maximum Tolerable Downtime (MTD) for customer-facing systems is 4 hours. It is currently 3 hours since the initial power failure. The recovery site is active but switching over requires DNS redirect propagation, which is highly complex.",
    question: "What should you decide as the Disaster Recovery Director?",
    options: [
      "Wait another hour to see if local utility technicians can patch the generator leak.",
      "Declare a disaster and immediately execute the cutover transition to the recovery datacenter.",
      "Perform a Checklist test of the disaster recovery procedures.",
      "Instruct system administrators to perform database backups on the failing local servers."
    ],
    correct: 1,
    explanation: "Your MTD is 4 hours, and 3 hours have already elapsed. If you do not restore operations in the next hour, business death/catastrophe occurs. Waiting is too risky. Running checklist tests is for preparation, not active disaster. Performing database backups on failing servers with dead power is not feasible. You must execute the cutover immediately."
  }
};

function initAITutor() {
  const serviceSelect = document.getElementById("ai-service-select");
  const consultBtn = document.getElementById("ai-consult-btn");
  const clearBtn = document.getElementById("ai-clear-btn");
  const speakBtn = document.getElementById("ai-speak-btn");

  if (!serviceSelect || !consultBtn) return;

  // Change listener on service select to show/hide context inputs
  serviceSelect.addEventListener("change", () => {
    const val = serviceSelect.value;
    const inputGroup = document.getElementById("ai-input-group");
    const domainGroup = document.getElementById("ai-domain-group");

    if (val === "tips" || val === "summary") {
      if (inputGroup) inputGroup.style.display = "none";
      if (domainGroup) domainGroup.style.display = "block";
    } else if (val === "quiz" || val === "scenario") {
      if (inputGroup) inputGroup.style.display = "none";
      if (domainGroup) domainGroup.style.display = "block";
    } else {
      if (inputGroup) inputGroup.style.display = "block";
      if (domainGroup) domainGroup.style.display = "block";
    }
  });

  // Consult click binding
  consultBtn.addEventListener("click", consultAITutor);

  // Clear console binding
  clearBtn?.addEventListener("click", () => {
    const terminal = document.getElementById("ai-chat-terminal");
    if (terminal) {
      terminal.innerHTML = `
        <div class="chat-bubble assistant-bubble">
          <p style="margin: 0; font-weight: 500;">Hello Vicky! I am your AI Study Tutor. Select a service on the left to start your custom session. I can explain key terms, generate dynamic quizzes, prepare interactive flashcards, or teach you like a professor.</p>
        </div>
      `;
    }
    lastAITutorText = "";
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
    }
    updateSpeakButtonState(false);
  });

  // Speak click binding
  speakBtn?.addEventListener("click", () => {
    speakAITutorText(lastAITutorText);
  });

  // Event delegation for option clicks and flashcard injection inside terminal
  const terminal = document.getElementById("ai-chat-terminal");
  if (terminal) {
    terminal.addEventListener("click", (e) => {
      // Option button click
      const btn = e.target.closest(".ai-quiz-option-btn");
      if (btn) {
        handleOptionSelection(btn);
        return;
      }

      // Flashcard inject button click
      const injectBtn = e.target.closest(".ai-flashcard-inject-btn");
      if (injectBtn) {
        const cardsData = injectBtn.dataset.cards;
        injectAITutorFlashcards(cardsData);
        injectBtn.disabled = true;
        injectBtn.innerHTML = '<i class="fa-solid fa-check"></i> Injected into Deck';
        injectBtn.style.background = 'rgba(16, 185, 129, 0.15)';
        injectBtn.style.borderColor = 'var(--success)';
        injectBtn.style.color = 'var(--success)';
      }
    });
  }
}

function consultAITutor() {
  const service = document.getElementById("ai-service-select").value;
  const domainVal = document.getElementById("ai-domain-select").value;
  const conceptInput = document.getElementById("ai-concept-input");
  const concept = conceptInput ? conceptInput.value.trim() : "";
  const terminal = document.getElementById("ai-chat-terminal");

  if (!terminal) return;

  // Validation
  if ((service === "explain" || service === "professor" || service === "flashcards") && !concept) {
    showSystemNotification("Please enter a concept, term, or topic to search.");
    conceptInput.focus();
    return;
  }

  // Print user query bubble
  const userText = getServiceQueryText(service, concept, domainVal);
  appendUserMessage(userText);

  // Render thinking status
  const loadingId = "ai-loading-" + Date.now();
  const loadingBubble = document.createElement("div");
  loadingBubble.className = "chat-bubble assistant-bubble";
  loadingBubble.id = loadingId;
  loadingBubble.innerHTML = `
    <div style="display:flex; align-items:center; gap:10px;">
      <i class="fa-solid fa-circle-notch fa-spin" style="color:var(--primary);"></i>
      <span style="font-weight:500; font-size:13px; color:var(--text-muted);">AI Tutor is analyzing data banks...</span>
    </div>
  `;
  terminal.appendChild(loadingBubble);
  terminal.scrollTop = terminal.scrollHeight;

  // Simulate thinking time
  setTimeout(() => {
    // Remove loading
    const loader = document.getElementById(loadingId);
    if (loader) loader.remove();

    // Process and print result
    processAITutorService(service, concept, domainVal);
  }, 600);
}

function getServiceQueryText(service, concept, domainVal) {
  const domainLabel = domainVal === "all" ? "All Domains" : `Domain ${domainVal}`;
  switch (service) {
    case "explain":
      return `Please explain "${concept}" within ${domainLabel}.`;
    case "professor":
      return `Teach me "${concept}" like a professor, providing analogies and RFCs.`;
    case "quiz":
      return `Generate a dynamic mock quiz for ${domainLabel}.`;
    case "flashcards":
      return `Create custom flashcards for "${concept}" under ${domainLabel}.`;
    case "summary":
      return `Summarize key objectives for ${domainLabel}.`;
    case "scenario":
      return `Present a manager-level practice scenario for ${domainLabel}.`;
    case "tips":
      return `Give me high-yield CAT exam tips for ${domainLabel}.`;
    default:
      return "Hello AI Tutor!";
  }
}

function appendUserMessage(text) {
  const terminal = document.getElementById("ai-chat-terminal");
  if (!terminal) return;

  const bubble = document.createElement("div");
  bubble.className = "chat-bubble user-bubble";
  bubble.innerHTML = `<p style="margin:0; font-weight:500;">${escapeHtml(text)}</p>`;
  terminal.appendChild(bubble);
  terminal.scrollTop = terminal.scrollHeight;
}

function processAITutorService(service, concept, domainVal) {
  const terminal = document.getElementById("ai-chat-terminal");
  if (!terminal) return;

  const dbKey = concept.toLowerCase().replace(/[^a-z0-9]/g, "");
  let data = AI_TUTOR_DATABASE.concepts[dbKey];

  // If not found and input matches parts of it, do fuzzy match
  if (!data && concept) {
    const keys = Object.keys(AI_TUTOR_DATABASE.concepts);
    const match = keys.find(k => k.includes(dbKey) || dbKey.includes(k));
    if (match) {
      data = AI_TUTOR_DATABASE.concepts[match];
    }
  }

  // Fallback if not found in pre-mapped dictionary
  if (!data && concept) {
    data = generateFallbackExplanation(concept, domainVal);
  }

  let htmlContent = "";
  let speechText = "";

  switch (service) {
    case "explain":
      htmlContent = `
        <h4><i class="fa-solid fa-graduation-cap"></i> Concept Explanation: ${data.name}</h4>
        ${data.explanation}
        <div style="margin-top:10px; font-size:12px; color:var(--text-muted); border-top:1px dashed rgba(255,255,255,0.06); padding-top:8px;">
          <i class="fa-solid fa-circle-info"></i> Category: Domain ${data.domain} Reference.
        </div>
      `;
      speechText = `Concept explanation for ${data.name}. ` + data.explanation;
      break;

    case "professor":
      htmlContent = `
        <h4><i class="fa-solid fa-chalkboard-user"></i> Professor Lecture: ${data.name}</h4>
        <p>${data.explanation}</p>
        <h5 style="margin-top:12px; margin-bottom:6px; color:var(--accent); font-weight:700;">Academic Analogy & Real-World Use Case:</h5>
        <p>${data.professor}</p>
      `;
      speechText = `Professor lecture on ${data.name}. Here is an analogy: ` + data.professor;
      break;

    case "summary":
      const domNum = domainVal === "all" ? 1 : parseInt(domainVal);
      const domInfo = AI_TUTOR_DATABASE.domains[domNum];
      htmlContent = `
        <h4><i class="fa-solid fa-rectangle-list"></i> Domain ${domNum} Objectives Summary</h4>
        <p style="font-weight: 500;">${domInfo.summary}</p>
        <h5 style="margin-top:12px; margin-bottom:6px; color:var(--accent); font-weight:700;">Core Pillars to Focus On:</h5>
        <ul>
          ${domInfo.tips.map(t => `<li>${t}</li>`).join("")}
        </ul>
      `;
      speechText = `Domain ${domNum} Summary: ${domInfo.summary}. Core pillars include: ${domInfo.tips.join(". ")}`;
      break;

    case "tips":
      const tipDomNum = domainVal === "all" ? 1 : parseInt(domainVal);
      const tipDomInfo = AI_TUTOR_DATABASE.domains[tipDomNum];
      htmlContent = `
        <h4><i class="fa-solid fa-lightbulb"></i> CAT Exam Tips: Domain ${tipDomNum}</h4>
        <p>Apply these high-yield tactical guidelines when answering questions for this domain:</p>
        <ul style="display:flex; flex-direction:column; gap:8px;">
          ${tipDomInfo.tips.map(t => `<li style="background:rgba(255,255,255,0.01); border:1px solid rgba(255,255,255,0.03); padding:8px 12px; border-radius:8px;">${t}</li>`).join("")}
        </ul>
      `;
      speechText = `Here are CAT exam tips for Domain ${tipDomNum}. ${tipDomInfo.tips.join(". ")}`;
      break;

    case "flashcards":
      const cards = data.flashcards;
      const cardsDataStr = encodeURIComponent(JSON.stringify(cards));
      htmlContent = `
        <h4><i class="fa-solid fa-clone"></i> Flashcards Generated: ${data.name}</h4>
        <p>I have generated 3 flashcards based on your requested term:</p>
        <div style="display:flex; flex-direction:column; gap:8px; margin:10px 0;">
          ${cards.map(c => `
            <div style="background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.04); padding:10px; border-radius:8px;">
              <strong style="color:var(--accent); font-size:12.5px;">${c.term}</strong>
              <p style="font-size:12px; color:var(--text-muted); margin:4px 0 0 0;">${c.definition}</p>
            </div>
          `).join("")}
        </div>
        <button class="btn btn-secondary btn-sm ai-flashcard-inject-btn" data-cards="${cardsDataStr}" style="width:100%; display:flex; align-items:center; justify-content:center; gap:8px;">
          <i class="fa-solid fa-file-import"></i> Inject into Flashcard Deck
        </button>
      `;
      speechText = `Flashcards created for ${data.name}. You can inject them into your active deck.`;
      break;

    case "quiz":
      const qDomNum = domainVal === "all" ? Math.floor(Math.random() * 8) + 1 : parseInt(domainVal);
      const qList = AI_TUTOR_QUIZ_QUESTIONS[qDomNum] || AI_TUTOR_QUIZ_QUESTIONS[1];
      const randQ = qList[Math.floor(Math.random() * qList.length)];
      
      htmlContent = `
        <h4><i class="fa-solid fa-clipboard-question"></i> Dynamic Quiz Question</h4>
        <p style="font-weight:600; font-size:14px; margin-bottom:12px;">${randQ.q}</p>
        <div class="ai-quiz-options" data-correct="${randQ.correct}" data-explanation="${escapeHtml(randQ.explanation)}" data-answered="false">
          ${randQ.options.map((opt, idx) => `
            <button class="ai-quiz-option-btn" data-index="${idx}">
              <span style="font-weight:700; color:var(--primary); margin-right:8px;">${String.fromCharCode(65 + idx)}.</span> ${opt}
            </button>
          `).join("")}
        </div>
      `;
      speechText = `Dynamic Quiz Question: ${randQ.q}`;
      break;

    case "scenario":
      const sDomNum = domainVal === "all" ? [1, 3, 7][Math.floor(Math.random() * 3)] : parseInt(domainVal);
      const scenario = AI_TUTOR_SCENARIOS[sDomNum] || AI_TUTOR_SCENARIOS[1];
      
      htmlContent = `
        <h4><i class="fa-solid fa-circle-exclamation"></i> Practice Scenario: ${scenario.title}</h4>
        <div style="background:rgba(245, 158, 11, 0.05); border-left:3px solid var(--warning); padding:10px 14px; border-radius:4px; font-size:13px; color:var(--text-main); margin-bottom:12px; line-height:1.5;">
          ${scenario.scenario}
        </div>
        <p style="font-weight:600; font-size:13.5px; margin-bottom:10px;">${scenario.question}</p>
        <div class="ai-quiz-options" data-correct="${scenario.correct}" data-explanation="${escapeHtml(scenario.explanation)}" data-answered="false">
          ${scenario.options.map((opt, idx) => `
            <button class="ai-quiz-option-btn" data-index="${idx}">
              <span style="font-weight:700; color:var(--primary); margin-right:8px;">${String.fromCharCode(65 + idx)}.</span> ${opt}
            </button>
          `).join("")}
        </div>
      `;
      speechText = `Practice Scenario: ${scenario.scenario}. Question: ${scenario.question}`;
      break;
  }

  // Append bubble
  const responseBubble = document.createElement("div");
  responseBubble.className = "chat-bubble assistant-bubble";
  responseBubble.innerHTML = htmlContent;
  terminal.appendChild(responseBubble);
  terminal.scrollTop = terminal.scrollHeight;

  // Save speech text
  lastAITutorText = speechText;
}

function handleOptionSelection(btn) {
  const parent = btn.parentNode;
  if (parent.dataset.answered === "true") return;
  parent.dataset.answered = "true";

  const selectedIdx = parseInt(btn.dataset.index);
  const correctIdx = parseInt(parent.dataset.correct);
  const explanation = parent.dataset.explanation;

  // Highlight choices
  const siblings = parent.querySelectorAll(".ai-quiz-option-btn");
  siblings.forEach((sib, idx) => {
    if (idx === correctIdx) {
      sib.classList.add("correct");
    } else if (idx === selectedIdx) {
      sib.classList.add("incorrect");
    }
    sib.style.cursor = "default";
  });

  // Append feedback explanation
  const feedbackDiv = document.createElement("div");
  feedbackDiv.style.cssText = "margin-top:12px; padding:10px 14px; border-radius:8px; font-size:13px; line-height:1.5; font-weight:500;";
  
  if (selectedIdx === correctIdx) {
    feedbackDiv.style.background = "rgba(16, 185, 129, 0.1)";
    feedbackDiv.style.border = "1px solid rgba(16, 185, 129, 0.2)";
    feedbackDiv.style.color = "var(--success)";
    feedbackDiv.innerHTML = `<i class="fa-solid fa-circle-check" style="margin-right:6px;"></i> <strong>Correct!</strong> ${explanation}`;
    playSuccessSound();
  } else {
    feedbackDiv.style.background = "rgba(239, 68, 68, 0.1)";
    feedbackDiv.style.border = "1px solid rgba(239, 68, 68, 0.2)";
    feedbackDiv.style.color = "var(--danger)";
    feedbackDiv.innerHTML = `<i class="fa-solid fa-circle-xmark" style="margin-right:6px;"></i> <strong>Incorrect.</strong> ${explanation}`;
    playErrorSound();
  }

  parent.appendChild(feedbackDiv);
  
  // Auto-scroll
  const terminal = document.getElementById("ai-chat-terminal");
  if (terminal) {
    terminal.scrollTop = terminal.scrollHeight;
  }
}

function generateFallbackExplanation(concept, domainVal) {
  const domainNum = domainVal === "all" ? 1 : parseInt(domainVal);
  const domainInfo = AI_TUTOR_DATABASE.domains[domainNum];
  
  return {
    name: concept,
    domain: domainNum,
    explanation: `The concept <strong>"${escapeHtml(concept)}"</strong> is an important operational or engineering component in CISSP security architecture.
    <p>Here is a structured explanation within the context of <strong>Domain ${domainNum}: ${domainInfo.title}</strong>:</p>
    <ul>
      <li><strong>Core Principle:</strong> In ${domainInfo.title}, security professionals must evaluate risks, implement administrative or technical controls, and verify integrity or confidentiality of assets related to "${escapeHtml(concept)}".</li>
      <li><strong>Managerial Context:</strong> Senior leadership defines policies and classifications, ensuring that security objectives for "${escapeHtml(concept)}" align with corporate compliance and human life safety.</li>
      <li><strong>Exam Trap:</strong> Watch out for questions that push you to do hands-on configuration. Always look for vendor assessment, policy alignment, or risk analysis first.</li>
    </ul>`,
    professor: `Imagine you are explaining "${escapeHtml(concept)}" to your company's board of directors.
    <br>You wouldn't show them command-line interfaces. Instead, you explain it like a building security gate. If we don't configure "${escapeHtml(concept)}" correctly, it is like locking the front doors but leaving the loading dock windows wide open. We need a corporate policy to enforce check-in logs, audit metrics, and clear segregation of responsibilities.`,
    flashcards: [
      { term: `${concept} Security Control`, definition: `A security control or mechanism designed to protect assets related to ${concept}.`, domain: domainNum },
      { term: `${concept} Governance`, definition: `Policy definitions and oversight processes guiding the lifecycle of ${concept}.`, domain: domainNum },
      { term: `${concept} Risk Analysis`, definition: `Assessing vulnerabilities and threat impacts associated with ${concept} implementation.`, domain: domainNum }
    ]
  };
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.innerText = text;
  return div.innerHTML;
}

function speakAITutorText(text) {
  if (!text) return;
  
  // If already speaking, cancel/stop
  if (window.speechSynthesis.speaking) {
    window.speechSynthesis.cancel();
    updateSpeakButtonState(false);
    return;
  }

  // Strip HTML tags from speech
  const cleanText = text.replace(/<[^>]*>/g, '');

  aiSpeechUtterance = new SpeechSynthesisUtterance(cleanText);
  aiSpeechUtterance.onend = () => {
    updateSpeakButtonState(false);
  };
  aiSpeechUtterance.onerror = () => {
    updateSpeakButtonState(false);
  };

  updateSpeakButtonState(true);
  window.speechSynthesis.speak(aiSpeechUtterance);
}

function updateSpeakButtonState(isSpeaking) {
  const btn = document.getElementById("ai-speak-btn");
  if (!btn) return;
  if (isSpeaking) {
    btn.innerHTML = '<i class="fa-solid fa-circle-stop"></i> Stop';
    btn.style.background = 'var(--danger)';
    btn.style.borderColor = 'var(--danger)';
    btn.style.color = '#fff';
  } else {
    btn.innerHTML = '<i class="fa-solid fa-volume-high"></i> Listen';
    btn.style.background = '';
    btn.style.borderColor = '';
    btn.style.color = '';
  }
}

function injectAITutorFlashcards(cardsJsonStr) {
  try {
    const cards = JSON.parse(decodeURIComponent(cardsJsonStr));
    let customCards = JSON.parse(localStorage.getItem("cissp_custom_flashcards")) || [];
    let addedCount = 0;

    cards.forEach(card => {
      if (!FLASHCARDS.some(fc => fc.term.toLowerCase() === card.term.toLowerCase())) {
        FLASHCARDS.push(card);
        customCards.push(card);
        addedCount++;
      }
    });

    if (addedCount > 0) {
      localStorage.setItem("cissp_custom_flashcards", JSON.stringify(customCards));
      showSystemNotification(`Success! Added ${addedCount} new custom flashcards to your deck.`);
      playSuccessSound();
    } else {
      showSystemNotification("These cards are already present in your study deck!");
    }
  } catch (e) {
    console.error("Failed to inject flashcards", e);
    showSystemNotification("Failed to inject flashcards. Check browser console.");
  }
}

// =================================================================
// 8.9 SECURE NETWORK ARCHITECT GAME ENGINE
// =================================================================
const ARCHITECT_SCENARIOS = {
  portal: {
    title: "Scenario 1: Secure Web Portal System",
    desc: "<strong>Challenge:</strong> You must publish a customer-facing portal page. Internet users must access the web server, but the database housing critical logs must be fully isolated in the trusted internal network. Firewalls must divide all boundaries.",
    devices: [
      { id: "client", name: "Web Client (Users)", icon: "fa-solid fa-laptop" },
      { id: "ext_firewall", name: "External Firewall", icon: "fa-solid fa-shield-halved" },
      { id: "web_server", name: "Web Server (HTTP)", icon: "fa-solid fa-server" },
      { id: "int_firewall", name: "Internal Firewall", icon: "fa-solid fa-shield" },
      { id: "db_server", name: "Database Server (SQL)", icon: "fa-solid fa-database" }
    ],
    rules: {
      untrusted: ["client", "ext_firewall"],
      dmz: ["web_server"],
      trusted: ["int_firewall", "db_server"]
    }
  },
  shield: {
    title: "Scenario 2: IDS & WAF Protection System",
    desc: "<strong>Challenge:</strong> Web injection (SQLi/XSS) and internal network probes are targeted. Place a Web Application Firewall (WAF) to protect the web server, and an Intrusion Detection/Prevention System (IDS/IPS) to watch database subnet communication.",
    devices: [
      { id: "client", name: "Web Client (Users)", icon: "fa-solid fa-laptop" },
      { id: "ext_firewall", name: "External Firewall", icon: "fa-solid fa-shield-halved" },
      { id: "waf", name: "WAF (Layer 7 Protection)", icon: "fa-solid fa-filter" },
      { id: "web_server", name: "Web Server (HTTP)", icon: "fa-solid fa-server" },
      { id: "int_firewall", name: "Internal Firewall", icon: "fa-solid fa-shield" },
      { id: "ids_ips", name: "IDS/IPS System", icon: "fa-solid fa-eye" },
      { id: "db_server", name: "Database Server (SQL)", icon: "fa-solid fa-database" }
    ],
    rules: {
      untrusted: ["client", "ext_firewall"],
      dmz: ["waf", "web_server"],
      trusted: ["int_firewall", "ids_ips", "db_server"]
    }
  },
  bait: {
    title: "Scenario 3: Attacker Honeynet Bait",
    desc: "<strong>Challenge:</strong> Deploy a Honeypot decoy inside your DMZ boundary to track active hack probes, safely isolated from database servers.",
    devices: [
      { id: "client", name: "Web Client (Users)", icon: "fa-solid fa-laptop" },
      { id: "ext_firewall", name: "External Firewall", icon: "fa-solid fa-shield-halved" },
      { id: "waf", name: "WAF (Layer 7 Protection)", icon: "fa-solid fa-filter" },
      { id: "web_server", name: "Web Server (HTTP)", icon: "fa-solid fa-server" },
      { id: "honeypot", name: "Honeypot Decoy", icon: "fa-solid fa-spider" },
      { id: "int_firewall", name: "Internal Firewall", icon: "fa-solid fa-shield" },
      { id: "ids_ips", name: "IDS/IPS System", icon: "fa-solid fa-eye" },
      { id: "db_server", name: "Database Server (SQL)", icon: "fa-solid fa-database" }
    ],
    rules: {
      untrusted: ["client", "ext_firewall"],
      dmz: ["waf", "web_server", "honeypot"],
      trusted: ["int_firewall", "ids_ips", "db_server"]
    }
  }
};

let architectBoardState = {
  untrusted: [],
  dmz: [],
  trusted: [],
  toolbox: []
};

let selectedArchitectDevice = null; // Touch click fallback

function initArchitectGame() {
  const select = document.getElementById("architect-scenario-select");
  if (!select) return;

  const scenarioKey = select.value;
  const scenario = ARCHITECT_SCENARIOS[scenarioKey];
  if (!scenario) return;

  // Render scenario description
  const descEl = document.getElementById("architect-scenario-desc");
  if (descEl) descEl.innerHTML = scenario.desc;

  // Reset state
  architectBoardState = {
    untrusted: [],
    dmz: [],
    trusted: [],
    toolbox: [...scenario.devices]
  };
  selectedArchitectDevice = null;

  // Clear feedback
  const feedback = document.getElementById("architect-feedback");
  if (feedback) {
    feedback.textContent = "Drag devices from the left toolbox into the correct security zones, then verify your design.";
    feedback.className = "";
    feedback.style.borderColor = "var(--card-border)";
    feedback.style.color = "var(--text-muted)";
    feedback.style.background = "rgba(255, 255, 255, 0.02)";
  }

  renderArchitectGame();
  setupArchitectEvents();
}

function renderArchitectGame() {
  // Toolbox items rendering
  const toolboxEl = document.getElementById("architect-toolbox-items");
  if (toolboxEl) {
    toolboxEl.innerHTML = "";
    architectBoardState.toolbox.forEach(dev => {
      const devEl = createArchitectDeviceElement(dev);
      toolboxEl.appendChild(devEl);
    });
  }

  // Zone panels rendering
  const zones = ["untrusted", "dmz", "trusted"];
  zones.forEach(zone => {
    const zonePanel = document.querySelector(`.architect-zone-panel[data-zone="${zone}"] .architect-zone-items`);
    if (zonePanel) {
      zonePanel.innerHTML = "";
      architectBoardState[zone].forEach(dev => {
        const devEl = createArchitectDeviceElement(dev);
        zonePanel.appendChild(devEl);
      });
    }
  });
}

function createArchitectDeviceElement(dev) {
  const el = document.createElement("div");
  el.className = "architect-device";
  el.setAttribute("draggable", "true");
  el.dataset.id = dev.id;
  el.innerHTML = `<i class="${dev.icon}"></i><span>${dev.name}</span>`;

  // Highlight if selected for touch/click drop
  if (selectedArchitectDevice && selectedArchitectDevice.id === dev.id) {
    el.style.borderColor = "var(--primary)";
    el.style.boxShadow = "0 0 10px var(--primary-glow)";
  }

  // Dragstart
  el.addEventListener("dragstart", (e) => {
    el.classList.add("dragging");
    e.dataTransfer.setData("text/plain", dev.id);
  });

  el.addEventListener("dragend", () => {
    el.classList.remove("dragging");
  });

  // Touch click toggle selector
  el.addEventListener("click", (e) => {
    e.stopPropagation();
    if (selectedArchitectDevice && selectedArchitectDevice.id === dev.id) {
      selectedArchitectDevice = null;
    } else {
      selectedArchitectDevice = dev;
    }
    renderArchitectGame();
  });

  return el;
}

function setupArchitectEvents() {
  const zones = ["untrusted", "dmz", "trusted"];
  
  zones.forEach(zone => {
    const panel = document.querySelector(`.architect-zone-panel[data-zone="${zone}"]`);
    if (!panel) return;

    // Drag-over
    panel.addEventListener("dragover", (e) => {
      e.preventDefault();
      panel.classList.add("drag-over");
    });

    panel.addEventListener("dragleave", () => {
      panel.classList.remove("drag-over");
    });

    panel.addEventListener("drop", (e) => {
      e.preventDefault();
      panel.classList.remove("drag-over");
      const devId = e.dataTransfer.getData("text/plain");
      if (devId) {
        moveDeviceToZone(devId, zone);
      }
    });

    // Touch click panel target drop zone
    panel.addEventListener("click", () => {
      if (selectedArchitectDevice) {
        moveDeviceToZone(selectedArchitectDevice.id, zone);
        selectedArchitectDevice = null;
      }
    });
  });

  // Clicking toolbox returns item
  const toolbox = document.querySelector(".architect-toolbox");
  toolbox?.addEventListener("click", () => {
    if (selectedArchitectDevice) {
      moveDeviceToZone(selectedArchitectDevice.id, "toolbox");
      selectedArchitectDevice = null;
    }
  });
}

function moveDeviceToZone(devId, targetZone) {
  // Find current zone of the device
  let foundDev = null;
  const sources = ["toolbox", "untrusted", "dmz", "trusted"];
  
  sources.forEach(src => {
    const idx = architectBoardState[src].findIndex(d => d.id === devId);
    if (idx !== -1) {
      foundDev = architectBoardState[src].splice(idx, 1)[0];
    }
  });

  if (foundDev) {
    architectBoardState[targetZone].push(foundDev);
    renderArchitectGame();
    setupArchitectEvents();
  }
}

function verifySecureArchitecture() {
  const select = document.getElementById("architect-scenario-select");
  const feedback = document.getElementById("architect-feedback");
  if (!select || !feedback) return;

  const scenarioKey = select.value;
  const scenario = ARCHITECT_SCENARIOS[scenarioKey];
  if (!scenario) return;

  // Reset styling
  feedback.className = "";
  feedback.style.background = "";
  feedback.style.borderColor = "";

  // Check if all devices have been deployed
  if (architectBoardState.toolbox.length > 0) {
    feedback.textContent = `Deployment Incomplete! You still have ${architectBoardState.toolbox.length} devices in your toolbox.`;
    feedback.style.color = "var(--warning)";
    feedback.style.borderColor = "var(--warning)";
    feedback.style.background = "rgba(245, 158, 11, 0.05)";
    playErrorSound();
    return;
  }

  // Check rules
  let isCorrect = true;
  let errorMsg = "";

  const rules = scenario.rules;
  const zones = ["untrusted", "dmz", "trusted"];

  for (const zone of zones) {
    const activeIds = architectBoardState[zone].map(d => d.id);
    const expectedIds = rules[zone];

    // Check expected elements in this zone
    for (const expectedId of expectedIds) {
      if (!activeIds.includes(expectedId)) {
        isCorrect = false;
        errorMsg = getArchitectErrorMessage(expectedId, zone);
        break;
      }
    }
    if (!isCorrect) break;

    // Check if unauthorized nodes got placed in strict zones
    if (zone === "trusted" && (activeIds.includes("client") || activeIds.includes("web_server") || activeIds.includes("ext_firewall") || activeIds.includes("honeypot"))) {
      isCorrect = false;
      errorMsg = "Strict Isolation Violation! Untrusted nodes, public web servers, boundary firewalls, or honeypots must not sit in the Trusted Internal zone.";
      break;
    }
    if (zone === "dmz" && activeIds.includes("db_server")) {
      isCorrect = false;
      errorMsg = "Database Leakage Risk! Critical SQL database assets must never be placed inside the public-facing DMZ zone.";
      break;
    }
  }

  if (isCorrect) {
    feedback.textContent = `Access Approved! Secure Network Architecture verified for "${scenario.title}"!`;
    feedback.style.color = "var(--success)";
    feedback.style.borderColor = "var(--success)";
    feedback.style.background = "rgba(16, 185, 129, 0.05)";
    playSuccessSound();

    // Reward hours
    let totalHours = parseFloat(localStorage.getItem("cissp_total_hours") || "0");
    totalHours += 0.5; // 30 minutes!
    localStorage.setItem("cissp_total_hours", totalHours.toString());
    const label = document.getElementById("total-study-hours");
    if (label) label.textContent = `${totalHours.toFixed(2)}h`;
    
    showSystemNotification("Secure design validated! Awarded +0.50 study hours bonus!");
  } else {
    feedback.textContent = `Design Defect: ${errorMsg}`;
    feedback.style.color = "var(--danger)";
    feedback.style.borderColor = "var(--danger)";
    feedback.style.background = "rgba(239, 68, 68, 0.05)";
    playErrorSound();
  }
}

function getArchitectErrorMessage(devId, expectedZone) {
  const names = {
    client: "Web Client",
    ext_firewall: "External Firewall",
    int_firewall: "Internal Firewall",
    web_server: "Web Server",
    db_server: "Database Server",
    waf: "WAF",
    ids_ips: "IDS/IPS",
    honeypot: "Honeypot Decoy"
  };
  const zoneNames = {
    untrusted: "Untrusted Zone",
    dmz: "DMZ Zone",
    trusted: "Trusted Zone"
  };
  return `The ${names[devId] || devId} must be placed inside the ${zoneNames[expectedZone] || expectedZone} to secure communications.`;
}

// =================================================================
// 8.10 INTERACTIVE MIND MAP EXPLORER ENGINE
// =================================================================
let mindMapExplorerInitialized = false;

const MINDMAP_SYLLABUS = [
  {
    id: "dom1",
    name: "Domain 1: Security & Risk Management",
    icon: "fa-solid fa-gavel",
    children: [
      {
        id: "dom1_governance",
        name: "Security Governance & Policies",
        leaves: ["SLA / Service Level Agreement", "Security Policy Lifecycle", "OECD Privacy Principles"]
      },
      {
        id: "dom1_risk",
        name: "Risk Assessment & Math",
        leaves: ["SLE / Single Loss Expectancy", "ALE / Annualized Loss Expectancy", "Threat Modeling / STRIDE"]
      }
    ]
  },
  {
    id: "dom3",
    name: "Domain 3: Security Architecture & Engineering",
    icon: "fa-solid fa-microchip",
    children: [
      {
        id: "dom3_models",
        name: "Formal Security Models",
        leaves: ["Bell-LaPadula Model", "Biba Model", "Clark-Wilson Model", "Chinese Wall / Brewer-Nash"]
      },
      {
        id: "dom3_crypto",
        name: "Cryptography Systems",
        leaves: ["Symmetric Key Algorithms", "Asymmetric Key Algorithms", "PKI / Public Key Infrastructure", "Salt vs Pepper Cryptographics"]
      }
    ]
  },
  {
    id: "dom4",
    name: "Domain 4: Communication & Network Security",
    icon: "fa-solid fa-network-wired",
    children: [
      {
        id: "dom4_protocols",
        name: "Secure Network Design & Protocols",
        leaves: ["OSI Layer Models", "IPsec Protocol Suite", "WPA3 Wireless Standard", "DNSSEC Cryptographics"]
      }
    ]
  },
  {
    id: "dom5",
    name: "Domain 5: Identity & Access Management (IAM)",
    icon: "fa-solid fa-user-shield",
    children: [
      {
        id: "dom5_auth",
        name: "Federated Identity & Single Sign-On",
        leaves: ["SAML (Security Assertion Markup)", "OAuth 2.0 Access Delegation", "OIDC Authentication", "Kerberos Single Sign-On"]
      }
    ]
  },
  {
    id: "dom7",
    name: "Domain 7: Security Operations",
    icon: "fa-solid fa-briefcase",
    children: [
      {
        id: "dom7_incident",
        name: "Incident Response & Recovery",
        leaves: ["Incident Response Steps (PICERL)", "Business Continuity Planning (BCP)", "Disaster Recovery Testing Models", "Order of Volatility"]
      }
    ]
  },
  {
    id: "dom8",
    name: "Domain 8: Software Development Security",
    icon: "fa-solid fa-code",
    children: [
      {
        id: "dom8_sdlc",
        name: "Secure Software Development (SDLC)",
        leaves: ["Secure SDLC Lifecycle", "CMMI / Capability Maturity", "Database Access & SQL Injection", "XSS / Cross-Site Scripting"]
      }
    ]
  }
];

function initMindMapExplorer() {
  if (mindMapExplorerInitialized) return;
  mindMapExplorerInitialized = true;

  // View toggles
  const pdfBtn = document.getElementById("btn-mindmaps-pdf");
  const expBtn = document.getElementById("btn-mindmaps-explorer");
  const pdfWrapper = document.getElementById("mindmaps-pdf-wrapper");
  const expWrapper = document.getElementById("mindmaps-explorer-wrapper");

  pdfBtn?.addEventListener("click", () => {
    pdfBtn.classList.add("active-game-tab");
    expBtn.classList.remove("active-game-tab");
    pdfWrapper.classList.remove("hidden");
    expWrapper.classList.add("hidden");
    initMindMapsReader();
    if (mindmapsPdfDoc) {
      renderMindMapsPage(mindmapsPageNum);
    }
  });

  expBtn?.addEventListener("click", () => {
    expBtn.classList.add("active-game-tab");
    pdfBtn.classList.remove("active-game-tab");
    expWrapper.classList.remove("hidden");
    pdfWrapper.classList.add("hidden");
    renderMindMapTree();
  });

  // Search input
  const searchInput = document.getElementById("mindmaps-search-input");
  searchInput?.addEventListener("input", filterMindMapTree);

  // Expand/collapse all
  document.getElementById("mindmaps-expand-all-btn")?.addEventListener("click", () => toggleAllTreeNodes(true));
  document.getElementById("mindmaps-collapse-all-btn")?.addEventListener("click", () => toggleAllTreeNodes(false));

  renderMindMapTree();
}

function renderMindMapTree() {
  const root = document.getElementById("mindmaps-tree-root");
  if (!root) return;

  root.innerHTML = "";

  MINDMAP_SYLLABUS.forEach(dom => {
    const domNode = document.createElement("div");
    domNode.className = "tree-node-item";
    domNode.dataset.id = dom.id;
    domNode.innerHTML = `
      <div class="tree-node-header">
        <div class="tree-node-title"><i class="${dom.icon}"></i><span>${dom.name}</span></div>
        <i class="fa-solid fa-chevron-right tree-node-toggle"></i>
      </div>
      <div class="tree-node-children"></div>
    `;

    const childrenContainer = domNode.querySelector(".tree-node-children");
    
    dom.children.forEach(sub => {
      const subNode = document.createElement("div");
      subNode.className = "tree-node-item";
      subNode.dataset.id = sub.id;
      subNode.innerHTML = `
        <div class="tree-node-header">
          <div class="tree-node-title"><i class="fa-regular fa-folder-open"></i><span>${sub.name}</span></div>
          <i class="fa-solid fa-chevron-right tree-node-toggle"></i>
        </div>
        <div class="tree-node-children" style="display:flex; flex-direction:column; gap:6px;"></div>
      `;

      const leavesContainer = subNode.querySelector(".tree-node-children");
      
      sub.leaves.forEach(leaf => {
        const leafNode = document.createElement("div");
        leafNode.className = "tree-leaf-item";
        leafNode.dataset.term = leaf;
        leafNode.innerHTML = `
          <span>${leaf}</span>
          <i class="fa-solid fa-magnifying-glass-chart" style="color:var(--text-muted); font-size:11px;"></i>
        `;

        // Click leaf to show detail drawer
        leafNode.addEventListener("click", (e) => {
          e.stopPropagation();
          showMindMapConceptDrawer(leaf);
        });

        leavesContainer.appendChild(leafNode);
      });

      // Collapse sub-folders by default
      subNode.querySelector(".tree-node-header").addEventListener("click", (e) => {
        e.stopPropagation();
        subNode.classList.toggle("expanded");
      });

      childrenContainer.appendChild(subNode);
    });

    // Collapse top domains by default
    domNode.querySelector(".tree-node-header").addEventListener("click", () => {
      domNode.classList.toggle("expanded");
    });

    root.appendChild(domNode);
  });
}

function toggleAllTreeNodes(expand) {
  const nodes = document.querySelectorAll("#mindmaps-tree-root .tree-node-item");
  nodes.forEach(node => {
    if (expand) {
      node.classList.add("expanded");
    } else {
      node.classList.remove("expanded");
    }
  });
}

function filterMindMapTree() {
  const query = document.getElementById("mindmaps-search-input").value.toLowerCase().trim();
  const leaves = document.querySelectorAll("#mindmaps-tree-root .tree-leaf-item");

  if (!query) {
    // Clear matches
    leaves.forEach(l => {
      l.classList.remove("search-match");
      l.style.display = "flex";
    });
    toggleAllTreeNodes(false);
    return;
  }

  // Highlight matches and auto-expand parents
  leaves.forEach(l => {
    const termText = l.dataset.term.toLowerCase();
    if (termText.includes(query)) {
      l.classList.add("search-match");
      l.style.display = "flex";

      // Expand parent nodes upwards
      let parent = l.closest(".tree-node-item");
      while (parent) {
        parent.classList.add("expanded");
        parent = parent.parentElement.closest(".tree-node-item");
      }
    } else {
      l.classList.remove("search-match");
      l.style.display = "none";
    }
  });
}

function showMindMapConceptDrawer(termName) {
  const drawer = document.getElementById("mindmaps-concept-drawer");
  if (!drawer) return;

  const cleanKey = termName.toLowerCase()
    .replace(" / ", "-")
    .replace(" (", "-")
    .replace(")", "")
    .replace(" & ", "-")
    .replace(" - ", "-")
    .replace(" ", "-")
    .replace(/[^a-z0-9-]/g, "");

  // Match key from db
  let termKey = Object.keys(AI_TUTOR_DATABASE.concepts).find(k => k.replace(/[^a-z]/g, "") === cleanKey.replace(/[^a-z]/g, ""));
  if (!termKey) {
    termKey = Object.keys(AI_TUTOR_DATABASE.concepts).find(k => cleanKey.includes(k) || k.includes(cleanKey));
  }

  let data = termKey ? AI_TUTOR_DATABASE.concepts[termKey] : null;

  if (!data) {
    // Generate fallback data
    data = {
      name: termName,
      domain: 1,
      explanation: `The concept of <strong>${termName}</strong> constitutes a core segment of the CISSP certification domain guide and is highly tested in governance audits.`,
      professor: `Imagine explaining ${termName} as a foundational firewall check. It ensures operations comply with corporate governance policies.`,
      flashcards: []
    };
  }

  drawer.innerHTML = `
    <div class="drawer-header">
      <h3 class="drawer-title">${data.name}</h3>
      <button class="drawer-close-btn" id="mindmaps-drawer-close">&times;</button>
    </div>
    <div class="drawer-body">
      <div>
        <span class="badge" style="background:var(--primary-glow); border-color:var(--primary); color:var(--primary); font-size:11px; margin-bottom:10px;">Domain ${data.domain} Concept</span>
        <h5 style="margin: 0 0 6px 0; color:var(--accent); font-size:13px; font-weight:700;">Executive Explanation:</h5>
        <p style="margin:0; font-size:12.5px;">${data.explanation}</p>
      </div>
      <div>
        <h5 style="margin: 0 0 6px 0; color:var(--accent); font-size:13px; font-weight:700;">Professor Analogy:</h5>
        <p style="margin:0; font-size:12.5px; line-height:1.5;">${data.professor}</p>
      </div>
    </div>
  `;

  drawer.classList.add("active");

  // Close binding
  document.getElementById("mindmaps-drawer-close")?.addEventListener("click", () => {
    drawer.classList.remove("active");
  });
}

// =================================================================
// MOBILE NAVIGATION DRAWER
// =================================================================
function initMobileNav() {
  const hamburger = document.getElementById("sidebar-hamburger");
  if (!hamburger) return;

  // Build the overlay + drawer DOM
  const overlay = document.createElement("div");
  overlay.className = "mobile-nav-overlay";
  overlay.id = "mobile-nav-overlay";

  const drawer = document.createElement("div");
  drawer.className = "mobile-nav-drawer";

  // Build nav items from sidebar nav-links (All 13 items)
  const navItems = [
    { tab: "dashboard", icon: "fa-chart-line", label: "Dashboard" },
    { tab: "ai-tutor", icon: "fa-robot", label: "AI Tutor" },
    { tab: "practice", icon: "fa-laptop-code", label: "Practice Sim" },
    { tab: "exam-day", icon: "fa-shield-check", label: "Exam Day Sim" },
    { tab: "mistake-log", icon: "fa-circle-xmark", label: "Review Mistakes" },
    { tab: "guides", icon: "fa-book-open", label: "Domain Guides" },
    { tab: "cheatsheet", icon: "fa-scroll", label: "Cheat Sheet" },
    { tab: "pdf-library", icon: "fa-file-pdf", label: "PDF Library" },
    { tab: "mindmaps", icon: "fa-diagram-project", label: "Mind Maps" },
    { tab: "games", icon: "fa-gamepad", label: "Study Games" },
    { tab: "memory", icon: "fa-brain", label: "Memory Palace" },
    { tab: "flashcards", icon: "fa-clone", label: "Flashcards" },
    { tab: "planner", icon: "fa-calendar-days", label: "Study Planner" },
  ];

  navItems.forEach(item => {
    const el = document.createElement("div");
    el.className = "mobile-nav-item" + (STATE.activeTab === item.tab ? " active" : "");
    el.dataset.tab = item.tab;
    
    // Custom premium styling for exam-day and mistake-log inside mobile drawer
    if (item.tab === "exam-day" || item.tab === "mistake-log") {
      el.style.border = "1px solid rgba(239, 68, 68, 0.25)";
      el.style.background = "rgba(239, 68, 68, 0.03)";
      el.innerHTML = `<i class="fa-solid ${item.icon}" style="color:#ef4444; width:20px; display:inline-flex; justify-content:center;"></i><span style="color:#ef4444; font-weight:700;">${item.label}</span>`;
    } else {
      el.innerHTML = `<i class="fa-solid ${item.icon}"></i><span>${item.label}</span>`;
    }

    el.addEventListener("click", () => {
      // Deactivate all items
      drawer.querySelectorAll(".mobile-nav-item").forEach(n => n.classList.remove("active"));
      el.classList.add("active");
      // Switch tab and close drawer
      switchTab(item.tab);
      closeHamburger();
    });
    drawer.appendChild(el);
  });

  // Replicate Theme Toggle and Member Sign-In buttons for mobile navigation drawer
  const drawerFooter = document.createElement("div");
  drawerFooter.className = "mobile-drawer-footer";
  drawerFooter.style.marginTop = "auto";
  drawerFooter.style.paddingTop = "16px";
  drawerFooter.style.borderTop = "1px solid var(--card-border)";
  drawerFooter.style.display = "flex";
  drawerFooter.style.flexDirection = "column";
  drawerFooter.style.gap = "10px";

  const themeBtn = document.createElement("button");
  themeBtn.className = "btn btn-secondary";
  themeBtn.style.width = "100%";
  themeBtn.style.display = "flex";
  themeBtn.style.alignItems = "center";
  themeBtn.style.justifyContent = "center";
  themeBtn.style.gap = "8px";
  themeBtn.style.fontSize = "13px";
  themeBtn.style.padding = "10px";
  const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
  themeBtn.innerHTML = currentTheme === "light" 
    ? '<i class="fa-solid fa-moon"></i> Dark Mode' 
    : '<i class="fa-solid fa-sun"></i> Light Mode';

  themeBtn.addEventListener("click", () => {
    const existingToggle = document.getElementById("theme-toggle-btn");
    if (existingToggle) {
      existingToggle.click();
      const newTheme = document.documentElement.getAttribute("data-theme") || "dark";
      themeBtn.innerHTML = newTheme === "light" 
        ? '<i class="fa-solid fa-moon"></i> Dark Mode' 
        : '<i class="fa-solid fa-sun"></i> Light Mode';
    }
    closeHamburger();
  });

  const signinBtn = document.createElement("button");
  signinBtn.className = "btn btn-primary";
  signinBtn.style.width = "100%";
  signinBtn.style.display = "flex";
  signinBtn.style.alignItems = "center";
  signinBtn.style.justifyContent = "center";
  signinBtn.style.gap = "8px";
  signinBtn.style.fontSize = "13px";
  signinBtn.style.padding = "10px";
  const user = STATE.currentUser;
  signinBtn.innerHTML = user 
    ? '<i class="fa-solid fa-user"></i> My Profile' 
    : '<i class="fa-solid fa-user-lock"></i> Member Sign-In';

  signinBtn.addEventListener("click", () => {
    const existingBtn = document.getElementById("header-signin-btn");
    if (existingBtn) {
      existingBtn.click();
    }
    closeHamburger();
  });

  // Handle dynamic login changes for mobile button text representation
  window.addEventListener("cissp_auth_state_change", () => {
    const freshUser = STATE.currentUser;
    signinBtn.innerHTML = freshUser 
      ? '<i class="fa-solid fa-user"></i> My Profile' 
      : '<i class="fa-solid fa-user-lock"></i> Member Sign-In';
  });

  drawerFooter.appendChild(themeBtn);
  drawerFooter.appendChild(signinBtn);
  drawer.appendChild(drawerFooter);

  overlay.appendChild(drawer);
  document.body.appendChild(overlay);

  // Toggle hamburger
  hamburger.addEventListener("click", (e) => {
    e.stopPropagation();
    const isOpen = overlay.classList.contains("active");
    if (isOpen) {
      closeHamburger();
    } else {
      overlay.classList.add("active");
      hamburger.classList.add("active");
    }
  });

  // Clicking outside drawer closes it
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      closeHamburger();
    }
  });

  function closeHamburger() {
    overlay.classList.remove("active");
    hamburger.classList.remove("active");
  }
}

// =================================================================
// SCROLL TO TOP BUTTON
// =================================================================
function initScrollToTop() {
  const btn = document.getElementById("scroll-top-btn");
  if (!btn) return;

  const mainContent = document.querySelector(".main-content");
  if (!mainContent) return;

  // Show/hide based on scroll position
  mainContent.addEventListener("scroll", () => {
    if (mainContent.scrollTop > 300) {
      btn.style.display = "flex";
      btn.style.opacity = "1";
    } else {
      btn.style.opacity = "0";
      setTimeout(() => {
        if (mainContent.scrollTop <= 300) btn.style.display = "none";
      }, 300);
    }
  });

  // Scroll to top smoothly on click
  btn.addEventListener("click", () => {
    mainContent.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// =================================================================
// GUIDE TABLE OF CONTENTS (TOC)
// =================================================================
function buildGuideTOC(tocContainer) {
  const outline = document.getElementById("guide-outline-inner");
  if (!outline) { tocContainer.innerHTML = ""; return; }

  const headings = outline.querySelectorAll("h4");
  if (headings.length === 0) { tocContainer.innerHTML = ""; return; }

  // Assign anchor IDs to headings
  headings.forEach((h, i) => {
    const id = `guide-h4-${i}`;
    h.id = id;
    h.style.scrollMarginTop = "20px";
  });

  const items = Array.from(headings).map((h, i) => {
    return `<li><a href="#guide-h4-${i}">${h.textContent.trim()}</a></li>`;
  }).join("");

  tocContainer.innerHTML = `
    <div class="guide-toc">
      <p class="guide-toc-title"><i class="fa-solid fa-list-ul"></i> Quick Navigation</p>
      <ul class="guide-toc-list">${items}</ul>
    </div>
  `;

  // Smooth scroll within guide-viewer on link click
  tocContainer.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const target = document.getElementById(link.getAttribute("href").slice(1));
      if (target) {
        const viewer = document.getElementById("guide-viewer");
        if (viewer) {
          const offset = target.offsetTop - viewer.offsetTop - 20;
          viewer.scrollTo({ top: offset, behavior: "smooth" });
        }
      }
    });
  });
}

// =================================================================
// DOMAIN STUDY NOTES (LOAD / SAVE)
// =================================================================
function loadDomainNotes(domainNum) {
  const ta = document.getElementById("domain-notes-textarea");
  if (!ta) return;
  ta.value = localStorage.getItem(`cissp_notes_d${domainNum}`) || "";
}

// =================================================================
// DOMAIN PROGRESS BADGES (guide sidebar)
// =================================================================
function renderDomainProgressBadges() {
  const history = STATE.quizHistory || [];
  if (history.length === 0) return;

  for (let d = 1; d <= 8; d++) {
    // Collect answers for this domain from quiz history
    const domainAnswers = [];
    history.forEach(attempt => {
      if (attempt.answers) {
        attempt.answers.forEach(a => {
          if (a.domain === d) domainAnswers.push(a.correct);
        });
      }
    });

    const badge = document.getElementById(`guide-badge-${d}`);
    if (!badge) continue;

    if (domainAnswers.length === 0) {
      badge.textContent = "—";
      badge.className = "guide-domain-badge badge-grey";
      continue;
    }

    const pct = Math.round((domainAnswers.filter(Boolean).length / domainAnswers.length) * 100);
    badge.textContent = `${pct}%`;
    if (pct >= 75) badge.className = "guide-domain-badge badge-green";
    else if (pct >= 55) badge.className = "guide-domain-badge badge-orange";
    else badge.className = "guide-domain-badge badge-red";
  }
}

// =================================================================
// 30-DAY STUDY HEATMAP
// =================================================================
function renderStudyHeatmap() {
  const container = document.getElementById("study-heatmap");
  if (!container) return;

  const logs = STATE.studyLogs || [];
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Build date → hours map
  const dateMap = {};
  logs.forEach(log => {
    if (!log.date || !log.hours) return;
    const d = log.date.split("T")[0];
    dateMap[d] = (dateMap[d] || 0) + parseFloat(log.hours);
  });

  // Build 30 cells (oldest → newest)
  const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  let html = "";
  for (let i = 29; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    const key = d.toISOString().split("T")[0];
    const hours = dateMap[key] || 0;
    const hoursInt = Math.min(Math.ceil(hours), 4);
    const isToday = (i === 0);
    const label = `${MONTHS[d.getMonth()]} ${d.getDate()}`;
    const tip = hours > 0 ? `${label}: ${hours.toFixed(1)}h studied` : `${label}: No study logged`;
    html += `<div class="heatmap-cell${hours > 0 ? " has-activity" : ""}${isToday ? " is-today" : ""}" data-hours="${hoursInt}" title="${tip}"></div>`;
  }
  container.innerHTML = html;
}

// =================================================================
// WEAKEST DOMAIN DETECTION BANNER
// =================================================================
function checkWeakestDomain() {
  const banner = document.getElementById("weak-domain-banner");
  if (!banner) return;

  const history = STATE.quizHistory || [];
  const domainStats = {};

  // Tally correct / total per domain from all quiz attempts
  history.forEach(attempt => {
    if (!attempt.answers) return;
    attempt.answers.forEach(a => {
      if (!a.domain) return;
      if (!domainStats[a.domain]) domainStats[a.domain] = { correct: 0, total: 0 };
      domainStats[a.domain].total++;
      if (a.correct) domainStats[a.domain].correct++;
    });
  });

  // Need at least 20 total answers to show the banner
  const totalAnswered = Object.values(domainStats).reduce((s, d) => s + d.total, 0);
  if (totalAnswered < 20) return;

  // Find weakest domain (lowest percentage, min 5 questions)
  let weakestDomain = null;
  let weakestPct = Infinity;
  Object.entries(domainStats).forEach(([d, stat]) => {
    if (stat.total < 5) return;
    const pct = stat.correct / stat.total;
    if (pct < weakestPct) {
      weakestPct = pct;
      weakestDomain = parseInt(d);
    }
  });

  if (!weakestDomain) return;

  const pctDisplay = Math.round(weakestPct * 100);
  const domainName = DOMAIN_GUIDES[weakestDomain]?.title?.replace(/^Domain \d+: /, "") || `Domain ${weakestDomain}`;
  const title = document.getElementById("weak-banner-title");
  const desc = document.getElementById("weak-banner-desc");
  const cta = document.getElementById("weak-banner-cta");

  if (title) title.textContent = `⚠ Focus Area: ${domainName}`;
  if (desc) desc.textContent = `You're scoring ${pctDisplay}% in Domain ${weakestDomain} — your weakest area. Targeted practice can boost your readiness fast!`;
  if (cta) {
    cta.onclick = () => {
      // Pre-select the weak domain in the domain quiz selector
      const sel = document.getElementById("domain-select");
      if (sel) sel.value = String(weakestDomain);
      // Switch to practice tab
      switchTab("practice");
      banner.style.display = "none";
    };
  }

  banner.style.display = "block";
}

// =================================================================
// GUIDE QUICK QUIZ (10 Questions from a specific Domain)
// =================================================================
let _gqState = { questions: [], index: 0, score: 0, answered: false, domainNum: 1 };

function launchGuideQuickQuiz(domainNum) {
  _gqState.domainNum = domainNum;
  _gqState.index = 0;
  _gqState.score = 0;
  _gqState.answered = false;

  // Get all questions for this domain and shuffle
  const pool = (typeof CISSP_QUESTIONS !== "undefined" ? CISSP_QUESTIONS : []).filter(q => q.domain === domainNum);
  const shuffled = pool.sort(() => Math.random() - 0.5).slice(0, Math.min(10, pool.length));
  _gqState.questions = shuffled;

  if (shuffled.length === 0) {
    alert("No questions available for this domain yet.");
    return;
  }

  const modal = document.getElementById("guide-quick-quiz-modal");
  const title = document.getElementById("guide-quiz-modal-title");
  if (title) title.innerHTML = `<i class="fa-solid fa-bolt" style="color:var(--primary);"></i> Quick Practice — ${DOMAIN_GUIDES[domainNum]?.title?.split(":")[0] || "Domain " + domainNum}`;

  document.getElementById("guide-quick-quiz-result").style.display = "none";
  modal.style.display = "block";
  document.body.style.overflow = "hidden";

  renderGQQuestion();
}

function renderGQQuestion() {
  const { questions, index, score } = _gqState;
  const q = questions[index];
  if (!q) return;

  const total = questions.length;
  const pct = Math.round((index / total) * 100);

  const progressEl = document.getElementById("guide-quick-quiz-progress");
  if (progressEl) {
    progressEl.innerHTML = `
      <div style="display:flex; justify-content:space-between; font-size:12px; color:var(--text-muted); margin-bottom:4px;">
        <span>Question ${index + 1} of ${total}</span>
        <span>Score: ${score}/${index}</span>
      </div>
      <div class="gq-progress-bar"><div class="gq-progress-fill" style="width:${pct}%"></div></div>
    `;
  }

  const LETTERS = ["A", "B", "C", "D"];
  const body = document.getElementById("guide-quick-quiz-body");
  if (body) {
    body.innerHTML = `
      <p class="gq-question-text">${q.question}</p>
      <div id="gq-options">
        ${q.options.map((opt, i) => `
          <div class="gq-option" data-index="${i}" onclick="handleGQAnswer(${i})">
            <span class="gq-option-letter">${LETTERS[i]}.</span>
            <span>${opt}</span>
          </div>
        `).join("")}
      </div>
    `;
  }

  document.getElementById("guide-quick-quiz-actions").innerHTML = "";
  _gqState.answered = false;
}

function handleGQAnswer(selectedIndex) {
  if (_gqState.answered) return;
  _gqState.answered = true;

  const q = _gqState.questions[_gqState.index];
  const correct = q.answer;
  const isCorrect = selectedIndex === correct;
  if (isCorrect) {
    _gqState.score++;
  } else {
    logMistake(q, selectedIndex);
  }

  // Highlight options
  const opts = document.querySelectorAll(".gq-option");
  opts.forEach((el, i) => {
    el.style.pointerEvents = "none";
    if (i === selectedIndex && isCorrect) el.classList.add("correct");
    else if (i === selectedIndex && !isCorrect) el.classList.add("incorrect");
    if (i === correct && !isCorrect) el.classList.add("reveal-correct");
  });

  // Show explanation if available
  const body = document.getElementById("guide-quick-quiz-body");
  if (q.explanation && body) {
    const expDiv = document.createElement("div");
    expDiv.style.cssText = "margin-top:14px; padding:14px 16px; border-radius:10px; font-size:13px; line-height:1.6; border-left: 3px solid " + (isCorrect ? "#10b981" : "#ef4444");
    expDiv.style.background = isCorrect ? "rgba(16,185,129,0.07)" : "rgba(239,68,68,0.07)";
    expDiv.innerHTML = `<strong>${isCorrect ? "✓ Correct!" : "✗ Incorrect."}</strong> ${q.explanation}`;
    body.appendChild(expDiv);
  }

  // Show Next / Finish button
  const actions = document.getElementById("guide-quick-quiz-actions");
  const isLast = (_gqState.index >= _gqState.questions.length - 1);
  actions.innerHTML = isLast
    ? `<button class="btn btn-primary" onclick="showGQResult()"><i class="fa-solid fa-flag-checkered"></i> See Results</button>`
    : `<button class="btn btn-primary" onclick="nextGQQuestion()"><i class="fa-solid fa-arrow-right"></i> Next Question</button>`;
}

function nextGQQuestion() {
  _gqState.index++;
  renderGQQuestion();
}

function showGQResult() {
  const { score, questions } = _gqState;
  const total = questions.length;
  const pct = Math.round((score / total) * 100);
  const color = pct >= 75 ? "#10b981" : pct >= 55 ? "#f59e0b" : "#ef4444";
  const msg = pct >= 75 ? "Great job! 🎉" : pct >= 55 ? "Keep practicing! 💪" : "Review this domain carefully 📖";

  document.getElementById("guide-quick-quiz-body").innerHTML = "";
  document.getElementById("guide-quick-quiz-actions").innerHTML = `
    <button class="btn btn-primary" onclick="launchGuideQuickQuiz(${_gqState.domainNum})"><i class="fa-solid fa-rotate"></i> Retry</button>
    <button class="btn btn-secondary" onclick="closeGuideQuickQuiz()"><i class="fa-solid fa-times"></i> Close</button>
  `;
  document.getElementById("guide-quick-quiz-progress").innerHTML = "";

  const result = document.getElementById("guide-quick-quiz-result");
  result.style.display = "block";
  result.innerHTML = `
    <div class="gq-result-card">
      <div class="gq-score-circle" style="background: ${color}22; color: ${color};">
        <span>${pct}%</span>
        <span style="font-size:12px; font-weight:500;">${score}/${total}</span>
      </div>
      <h3 style="margin: 0 0 6px;">${msg}</h3>
      <p style="color:var(--text-muted); font-size:13px;">You answered ${score} out of ${total} questions correctly.</p>
    </div>
  `;
}

function closeGuideQuickQuiz() {
  document.getElementById("guide-quick-quiz-modal").style.display = "none";
  document.body.style.overflow = "";
}

// =================================================================
// SPACED REPETITION LABELS (Flashcards)
// =================================================================
function renderSRSLabels() {
  // Load SRS state from localStorage
  const srsData = JSON.parse(localStorage.getItem("cissp_srs_data") || "{}");

  // Patch renderActiveFlashcard to show SRS label
  const origRender = window._originalRenderFlashcard || renderActiveFlashcard;
  const cardFront = document.getElementById("card-front-text");
  if (!cardFront) return;

  // Inject SRS label badge into the active flashcard view
  function injectSRSBadge(cardIndex) {
    const existingBadge = document.getElementById("srs-badge");
    if (existingBadge) existingBadge.remove();

    const srsInfo = srsData[cardIndex] || { correct: 0, seen: 0 };
    let label, cls;
    const ratio = srsInfo.seen > 0 ? srsInfo.correct / srsInfo.seen : 0;

    if (srsInfo.seen === 0) { label = "New"; cls = "srs-new"; }
    else if (srsInfo.seen < 3 || ratio < 0.5) { label = "Learning"; cls = "srs-learning"; }
    else if (ratio < 0.8) { label = "Review"; cls = "srs-review"; }
    else { label = "Mastered"; cls = "srs-mastered"; }

    const badge = document.createElement("span");
    badge.id = "srs-badge";
    badge.className = `srs-label ${cls}`;
    badge.innerHTML = `<i class="fa-solid fa-brain"></i> ${label}`;
    badge.style.cssText = "position:absolute; top: 12px; right: 14px;";

    const card = document.getElementById("active-flashcard");
    if (card) {
      card.style.position = "relative";
      card.appendChild(badge);
    }
  }

  // Hook into flashcard navigation buttons to update SRS on answer
  document.querySelectorAll(".mark-known-btn, .mark-unknown-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const idx = currentCardIndex;
      if (!srsData[idx]) srsData[idx] = { correct: 0, seen: 0 };
      srsData[idx].seen++;
      if (btn.classList.contains("mark-known-btn")) srsData[idx].correct++;
      localStorage.setItem("cissp_srs_data", JSON.stringify(srsData));
      setTimeout(() => injectSRSBadge(currentCardIndex), 50);
    });
  });

  injectSRSBadge(currentCardIndex || 0);
}

// =================================================================
// EXAM DAY SIMULATOR ENGINE
// =================================================================
const EXAMDAY_WEIGHTS = [
  { domain: 1, label: "D1: Security & Risk Mgmt",   pct: 16, count: 20 },
  { domain: 2, label: "D2: Asset Security",          pct: 10, count: 13 },
  { domain: 3, label: "D3: Security Engineering",    pct: 13, count: 16 },
  { domain: 4, label: "D4: Communication & Network", pct: 13, count: 16 },
  { domain: 5, label: "D5: Identity & Access",       pct: 13, count: 16 },
  { domain: 6, label: "D6: Security Assessment",     pct: 12, count: 15 },
  { domain: 7, label: "D7: Security Operations",     pct: 13, count: 16 },
  { domain: 8, label: "D8: Software Development",    pct: 10, count: 13 },
];
const EXAMDAY_TOTAL = 125;
const EXAMDAY_PASS_SCORE = 88;
const EXAMDAY_DURATION = 3 * 60 * 60; // seconds (3 hours)

let _edState = {
  questions: [],      // array of 125 question objects with orig domain
  answers: {},        // index → chosen option index
  flagged: new Set(), // flagged question indices
  currentIndex: 0,
  timerSeconds: EXAMDAY_DURATION,
  timerInterval: null,
  startTime: null,
};

function initExamDay() {
  // Render domain weights on setup screen
  const weightsEl = document.getElementById("examday-domain-weights");
  if (weightsEl) {
    weightsEl.innerHTML = EXAMDAY_WEIGHTS.map(w => `
      <div style="display:flex; align-items:center; gap:10px;">
        <span style="font-size:12px; color:var(--text-muted); min-width:185px;">${w.label}</span>
        <div style="flex:1; height:6px; background:rgba(255,255,255,0.06); border-radius:6px; overflow:hidden;">
          <div style="width:${w.pct}%; height:100%; background:var(--primary); border-radius:6px;"></div>
        </div>
        <span style="font-size:12px; font-weight:700; color:var(--primary);">${w.pct}% (${w.count}Q)</span>
      </div>
    `).join("");
  }

  // Load previous attempts
  const prev = JSON.parse(localStorage.getItem("cissp_examday_history") || "[]");
  const prevEl = document.getElementById("examday-prev-attempts");
  if (prevEl && prev.length > 0) {
    prevEl.innerHTML = prev.slice(-3).reverse().map(a => `
      <div style="display:flex; justify-content:space-between; align-items:center; padding:8px 0; border-bottom:1px solid var(--card-border);">
        <span style="font-size:12px; color:var(--text-muted);">${new Date(a.date).toLocaleDateString()}</span>
        <span style="font-size:13px; font-weight:700; color:${a.score >= EXAMDAY_PASS_SCORE ? '#10b981' : '#ef4444'};">${a.score}/125 (${Math.round(a.score/125*100)}%)</span>
        <span style="font-size:11px; font-weight:700; padding:2px 8px; border-radius:6px; background:${a.score >= EXAMDAY_PASS_SCORE ? 'rgba(16,185,129,0.15)' : 'rgba(239,68,68,0.15)'}; color:${a.score >= EXAMDAY_PASS_SCORE ? '#10b981' : '#ef4444'};">${a.score >= EXAMDAY_PASS_SCORE ? 'PASS' : 'FAIL'}</span>
      </div>
    `).join("");
  }

  // Start button
  document.getElementById("examday-start-btn")?.addEventListener("click", startExamDay);
  document.getElementById("ed-flag-btn")?.addEventListener("click", toggleFlagQuestion);
  document.getElementById("ed-submit-btn")?.addEventListener("click", () => {
    const answered = Object.keys(_edState.answers).length;
    const unanswered = EXAMDAY_TOTAL - answered;
    const msg = unanswered > 0
      ? `You have ${unanswered} unanswered questions. Are you sure you want to submit?`
      : "Submit exam now?";
    if (confirm(msg)) submitExamDay();
  });
}

function startExamDay() {
  const btn = (typeof event !== 'undefined' && event?.currentTarget) || null;
  let originalText = '';
  if (btn && btn.tagName === 'BUTTON') {
    originalText = btn.innerHTML;
    btn.disabled = true;
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Initializing Exam...';
  }

  loadQuestionsDatabase().then(() => {
    if (btn && btn.tagName === 'BUTTON') {
      btn.disabled = false;
      btn.innerHTML = originalText;
    }

    // Build question set proportionally by domain
    const allQ = typeof CISSP_QUESTIONS !== "undefined" ? CISSP_QUESTIONS : [];
    let selected = [];

    EXAMDAY_WEIGHTS.forEach(w => {
      const pool = allQ.filter(q => q.domain === w.domain).sort(() => Math.random() - 0.5);
      const pick = pool.slice(0, w.count).map(q => ({ ...q, _edDomain: w.domain }));
      selected = selected.concat(pick);
    });

    // Shuffle the full set
    selected = selected.sort(() => Math.random() - 0.5);
    if (selected.length < 10) {
      alert("Not enough questions in the database. Please ensure questions.js is loaded.");
      return;
    }

    // Pad or trim to exactly 125
    while (selected.length < EXAMDAY_TOTAL) selected = [...selected, ...selected].slice(0, EXAMDAY_TOTAL);
    selected = selected.slice(0, EXAMDAY_TOTAL);

    // Reset state
    _edState.questions = selected;
    _edState.answers = {};
    _edState.flagged = new Set();
    _edState.currentIndex = 0;
    _edState.timerSeconds = EXAMDAY_DURATION;
    _edState.startTime = Date.now();

    // Build nav grid
    buildEdNavGrid();

    // Show exam screen
    document.getElementById("examday-setup-screen").style.display = "none";
    document.getElementById("examday-exam-screen").style.display = "block";
    document.getElementById("examday-result-screen").style.display = "none";

    renderEdQuestion(0);
    startEdTimer();
  }).catch(err => {
    if (btn && btn.tagName === 'BUTTON') {
      btn.disabled = false;
      btn.innerHTML = originalText;
    }
    console.error(err);
    alert("Failed to load questions database. Please check your network and try again.");
  });
}

function buildEdNavGrid() {
  const grid = document.getElementById("examday-q-grid");
  if (!grid) return;
  grid.innerHTML = _edState.questions.map((q, i) => `
    <div class="ed-q-tile${i === 0 ? ' current' : ''}" id="ed-tile-${i}" onclick="edJumpTo(${i})">${i + 1}</div>
  `).join("");
}

function renderEdQuestion(idx) {
  _edState.currentIndex = idx;
  const q = _edState.questions[idx];
  if (!q) return;

  const LETTERS = ["A", "B", "C", "D", "E"];
  const panel = document.getElementById("examday-question-panel");
  if (!panel) return;

  const selectedAnswer = _edState.answers[idx];
  const isFlagged = _edState.flagged.has(idx);

  panel.innerHTML = `
    <div style="margin-bottom:16px; display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
      <span style="font-size:11px; font-weight:700; text-transform:uppercase; padding:3px 10px; border-radius:8px; background:rgba(6,182,212,0.1); color:var(--primary);">Domain ${q._edDomain || q.domain}</span>
      ${isFlagged ? '<span style="font-size:11px; font-weight:700; padding:3px 10px; border-radius:8px; background:rgba(245,158,11,0.15); color:#f59e0b;"><i class="fa-solid fa-flag"></i> Flagged</span>' : ''}
    </div>
    <p style="font-size:15px; line-height:1.7; color:var(--text-main); margin:0 0 22px; font-weight:500;">${q.question}</p>
    <div id="ed-options">
      ${q.options.map((opt, i) => `
        <div class="examday-option${selectedAnswer === i ? ' selected' : ''}" onclick="edSelectAnswer(${i})">
          <span class="examday-option-letter">${LETTERS[i]}.</span>
          <span>${opt}</span>
        </div>
      `).join("")}
    </div>
    <div style="display:flex; justify-content:space-between; align-items:center; margin-top:24px; flex-wrap:wrap; gap:10px;">
      <button class="btn btn-secondary" onclick="edJumpTo(${Math.max(0, idx - 1)})" ${idx === 0 ? 'disabled' : ''} style="font-size:12px; padding:8px 16px;">
        <i class="fa-solid fa-arrow-left"></i> Previous
      </button>
      <span style="font-size:12px; color:var(--text-muted);">${Object.keys(_edState.answers).length} / ${EXAMDAY_TOTAL} answered</span>
      <button class="btn btn-secondary" onclick="edJumpTo(${Math.min(EXAMDAY_TOTAL - 1, idx + 1)})" ${idx === EXAMDAY_TOTAL - 1 ? 'disabled' : ''} style="font-size:12px; padding:8px 16px;">
        Next <i class="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  `;

  // Update header Q number
  document.getElementById("ed-q-num").textContent = idx + 1;

  // Update flag badge
  const flagBadge = document.getElementById("ed-flag-badge");
  if (flagBadge) flagBadge.style.display = isFlagged ? "inline-flex" : "none";

  // Update nav grid tiles
  document.querySelectorAll(".ed-q-tile").forEach((t, i) => {
    t.className = "ed-q-tile" +
      (_edState.answers[i] !== undefined ? " answered" : "") +
      (_edState.flagged.has(i) ? " flagged" : "") +
      (i === idx ? " current" : "");
  });
}

function edSelectAnswer(optionIdx) {
  _edState.answers[_edState.currentIndex] = optionIdx;
  renderEdQuestion(_edState.currentIndex);
}

function edJumpTo(idx) {
  renderEdQuestion(Math.max(0, Math.min(EXAMDAY_TOTAL - 1, idx)));
}

function toggleFlagQuestion() {
  const idx = _edState.currentIndex;
  if (_edState.flagged.has(idx)) _edState.flagged.delete(idx);
  else _edState.flagged.add(idx);
  renderEdQuestion(idx);
}

function startEdTimer() {
  clearInterval(_edState.timerInterval);
  const el = document.getElementById("examday-timer");

  _edState.timerInterval = setInterval(() => {
    _edState.timerSeconds--;
    const h = Math.floor(_edState.timerSeconds / 3600);
    const m = Math.floor((_edState.timerSeconds % 3600) / 60);
    const s = _edState.timerSeconds % 60;
    if (el) {
      el.textContent = `${h}:${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}`;
      el.className = "examday-timer" +
        (_edState.timerSeconds < 1800 ? " warning" : "") +
        (_edState.timerSeconds < 300 ? " critical" : "");
    }
    if (_edState.timerSeconds <= 0) {
      clearInterval(_edState.timerInterval);
      alert("Time is up! Your exam is being submitted automatically.");
      submitExamDay();
    }
  }, 1000);
}

function submitExamDay() {
  clearInterval(_edState.timerInterval);
  const timeTaken = Date.now() - _edState.startTime;

  // Score calculation
  let correct = 0;
  const domainStats = {};
  EXAMDAY_WEIGHTS.forEach(w => { domainStats[w.domain] = { correct: 0, total: 0, label: w.label }; });

  const wrongList = [];
  _edState.questions.forEach((q, i) => {
    const chosen = _edState.answers[i];
    const isCorrect = chosen === q.answer;
    const d = q._edDomain || q.domain;
    if (!domainStats[d]) domainStats[d] = { correct: 0, total: 0, label: `Domain ${d}` };
    domainStats[d].total++;
    if (isCorrect) {
      correct++;
      domainStats[d].correct++;
    } else if (chosen !== undefined) {
      wrongList.push({ q, chosen, i });
      logMistake(q, chosen);
    }
  });

  const pct = Math.round((correct / EXAMDAY_TOTAL) * 100);
  const passed = correct >= EXAMDAY_PASS_SCORE;

  // Save to history
  const history = JSON.parse(localStorage.getItem("cissp_examday_history") || "[]");
  history.push({ date: new Date().toISOString(), score: correct, pct, passed });
  localStorage.setItem("cissp_examday_history", JSON.stringify(history.slice(-10)));

  // Switch to result screen
  document.getElementById("examday-exam-screen").style.display = "none";
  document.getElementById("examday-result-screen").style.display = "block";

  // Verdict banner
  const verdictEl = document.getElementById("examday-verdict-banner");
  if (verdictEl) {
    verdictEl.style.borderColor = passed ? "rgba(16,185,129,0.35)" : "rgba(239,68,68,0.35)";
    verdictEl.style.background = passed ? "rgba(16,185,129,0.06)" : "rgba(239,68,68,0.06)";
    verdictEl.innerHTML = `
      <div style="font-size:56px; margin-bottom:8px;">${passed ? "🎉" : "📖"}</div>
      <h2 style="margin:0 0 8px; font-size:28px; color:${passed ? '#10b981' : '#ef4444'};">${passed ? "PASS" : "FAIL"}</h2>
      <p style="font-size:16px; color:var(--text-main); margin:0 0 4px;">${correct} / ${EXAMDAY_TOTAL} correct (${pct}%)</p>
      <p style="font-size:13px; color:var(--text-muted); margin:0;">${passed ? "You have met the 70% passing threshold. Congratulations!" : `You need ${EXAMDAY_PASS_SCORE - correct} more correct answers to pass.`}</p>
    `;
  }

  // Stats row
  const mm = Math.floor(timeTaken / 60000);
  const ss = Math.floor((timeTaken % 60000) / 1000);
  const statsEl = document.getElementById("examday-stats-row");
  if (statsEl) {
    const stats = [
      { icon: "fa-check-circle", label: "Correct", val: correct, col: "#10b981" },
      { icon: "fa-circle-xmark", label: "Wrong", val: EXAMDAY_TOTAL - correct - (EXAMDAY_TOTAL - Object.keys(_edState.answers).length), col: "#ef4444" },
      { icon: "fa-circle-question", label: "Unanswered", val: EXAMDAY_TOTAL - Object.keys(_edState.answers).length, col: "#f59e0b" },
      { icon: "fa-clock", label: "Time Taken", val: `${mm}m ${ss}s`, col: "var(--primary)" },
    ];
    statsEl.innerHTML = stats.map(s => `
      <div class="card glass" style="padding:18px; text-align:center;">
        <i class="fa-solid ${s.icon}" style="font-size:22px; color:${s.col}; margin-bottom:8px; display:block;"></i>
        <div style="font-size:22px; font-weight:800; color:${s.col};">${s.val}</div>
        <div style="font-size:11px; color:var(--text-muted); margin-top:4px;">${s.label}</div>
      </div>
    `).join("");
  }

  // Domain breakdown
  const breakEl = document.getElementById("examday-domain-breakdown");
  if (breakEl) {
    breakEl.innerHTML = Object.values(domainStats).map(d => {
      if (d.total === 0) return "";
      const p = Math.round((d.correct / d.total) * 100);
      const col = p >= 75 ? "#10b981" : p >= 55 ? "#f59e0b" : "#ef4444";
      return `
        <div class="ed-domain-bar">
          <span class="ed-domain-bar-label">${d.label}</span>
          <div class="ed-domain-bar-track"><div class="ed-domain-bar-fill" style="width:${p}%; background:${col};"></div></div>
          <span class="ed-domain-bar-pct" style="color:${col};">${d.correct}/${d.total}</span>
        </div>
      `;
    }).join("");
  }

  // Store wrong answers for later review
  window._edWrongList = wrongList;
}

function toggleExamdayWrong() {
  const el = document.getElementById("examday-wrong-answers-list");
  const btn = document.getElementById("examday-toggle-wrong");
  if (!el || !btn) return;
  const visible = el.style.display !== "none";
  el.style.display = visible ? "none" : "block";
  btn.textContent = visible ? "Show Wrong Answers" : "Hide Wrong Answers";

  if (!visible && window._edWrongList) {
    const LETTERS = ["A", "B", "C", "D", "E"];
    el.innerHTML = window._edWrongList.length === 0
      ? "<p style='color:#10b981; text-align:center; padding:20px;'>🎉 No wrong answers to review!</p>"
      : window._edWrongList.map(({ q, chosen, i }) => `
        <div class="examday-wrong-item">
          <p style="font-size:13px; color:var(--text-muted); margin:0 0 6px;">Question ${i + 1} · Domain ${q._edDomain || q.domain}</p>
          <p style="font-size:14px; font-weight:500; color:var(--text-main); margin:0 0 12px;">${q.question}</p>
          <p style="font-size:13px; color:#ef4444; margin:0 0 4px;"><i class="fa-solid fa-xmark"></i> Your answer: ${LETTERS[chosen]}. ${q.options[chosen]}</p>
          <p style="font-size:13px; color:#10b981; margin:0 0 10px;"><i class="fa-solid fa-check"></i> Correct answer: ${LETTERS[q.answer]}. ${q.options[q.answer]}</p>
          ${q.explanation ? `<p style="font-size:12.5px; color:var(--text-muted); border-top:1px solid var(--card-border); padding-top:10px; margin:0;">${q.explanation}</p>` : ""}
        </div>
      `).join("");
  }
}

function resetExamDay() {
  clearInterval(_edState.timerInterval);
  document.getElementById("examday-setup-screen").style.display = "block";
  document.getElementById("examday-exam-screen").style.display = "none";
  document.getElementById("examday-result-screen").style.display = "none";
  initExamDay();
}

// =================================================================
// CONCEPT COMPARISON SYSTEM
// =================================================================
const COMPARE_PAIRS = [
  { id: "bcp-drp", label: "BCP vs DRP", a: { name: "BCP — Business Continuity Plan", points: ["Focuses on keeping business functions running during a disaster","Broader scope — covers the entire organization","Addresses people, processes, and technology","Activated BEFORE/DURING a disaster","RTO and RPO are key metrics","Includes crisis communications, alternate sites"] }, b: { name: "DRP — Disaster Recovery Plan", points: ["Focuses on restoring IT systems and data after a disaster","Narrower scope — IT/technology focused","Covers data backups, failover systems, recovery procedures","Activated AFTER a disaster","Part of the BCP — a subset","Includes system recovery steps, backup restoration"] } },
  { id: "mac-dac", label: "MAC vs DAC vs RBAC vs ABAC", a: { name: "MAC — Mandatory Access Control", points: ["Access controlled by the SYSTEM based on labels","No user discretion — enforced by policy","Used in military/government (Top Secret, Secret, etc.)","Subject clearance must meet or exceed object classification","Bell-LaPadula model enforces MAC","Least flexible, most secure"] }, b: { name: "DAC — Discretionary Access Control", points: ["Resource OWNER controls access permissions","Users can grant access to others (discretionary)","Most common in commercial systems (Windows NTFS ACLs)","More flexible but less secure than MAC","Vulnerable to Trojan horse attacks","Owner can grant permissions without admin intervention"] } },
  { id: "ids-ips", label: "IDS vs IPS vs WAF", a: { name: "IDS — Intrusion Detection System", points: ["Monitors and ALERTS only — passive","Does NOT block traffic","Sits out-of-band (not in line with traffic)","False positive = alert on benign traffic","False negative = missed attack (more dangerous)","Can be host-based (HIDS) or network-based (NIDS)"] }, b: { name: "IPS — Intrusion Prevention System", points: ["Monitors AND BLOCKS — active/inline","Sits in-line with network traffic","Can drop packets, reset connections, block IP","False positive = blocks legitimate traffic (availability impact)","Requires tuning to avoid over-blocking","NGFW typically includes IPS functionality"] } },
  { id: "sym-asym", label: "Symmetric vs Asymmetric Encryption", a: { name: "Symmetric Encryption", points: ["Same key used to encrypt AND decrypt","Faster — suitable for bulk data encryption","Key distribution problem (securely sharing the key)","Examples: AES (128/192/256-bit), 3DES, ChaCha20","AES-256 is NIST recommended standard","Key count for n users: n(n-1)/2"] }, b: { name: "Asymmetric Encryption", points: ["Public key encrypts, Private key decrypts (and vice versa for signing)","Slower — used for key exchange and digital signatures","Solves the key distribution problem","Examples: RSA, ECC, Diffie-Hellman, El Gamal","RSA 2048-bit minimum; ECC 256-bit equivalent strength","Used in TLS, PKI, SSH, PGP"] } },
  { id: "vuln-risk", label: "Vulnerability vs Threat vs Risk vs Exposure", a: { name: "Vulnerability", points: ["A WEAKNESS in a system that can be exploited","Can be technical (unpatched software), procedural (no policy), or physical (unlocked door)","Measured by CVSS score (0-10)","Not all vulnerabilities are exploitable","CVE database catalogues known vulnerabilities","Remediated by: patching, configuration changes, compensating controls"] }, b: { name: "Threat", points: ["A potential CAUSE of harm — any actor or event that could exploit a vulnerability","Can be: natural (earthquake), human (hacker), environmental (fire)","Threat agents: script kiddies, nation states, insiders, competitors","Threat likelihood assessed in risk analysis","STIX format used to share threat intelligence","Risk = Threat × Vulnerability × Impact"] } },
  { id: "rto-rpo", label: "RTO vs RPO vs MTD vs MTBF vs MTTR", a: { name: "Recovery Time Objective (RTO)", points: ["Maximum acceptable time to restore a system after failure","Example: RTO = 4 hours means system must be back online within 4 hours","Drives decisions on hot/warm/cold site selection","Lower RTO = more expensive recovery solution","Also: RPO = how much DATA loss is acceptable (measured in time)","MTD (Max Tolerable Downtime) = must NOT exceed RTO"] }, b: { name: "MTBF vs MTTR", points: ["MTBF = Mean Time Between Failures — avg time a system runs before failing","Higher MTBF = more reliable system","MTTR = Mean Time To Repair — avg time to fix after failure","Lower MTTR = better recovery capability","MTTF = Mean Time to Failure (non-repairable systems)","Availability = MTBF / (MTBF + MTTR) × 100%"] } },
  { id: "soc123", label: "SOC 1 vs SOC 2 vs SOC 3", a: { name: "SOC 1 (SSAE 18)", points: ["Focuses on financial reporting controls","Used by service organizations affecting client financial statements","Type I: design effectiveness at a point in time","Type II: operating effectiveness over a 6-12 month period","Replaced the old SAS 70 standard","Audience: auditors and user entities"] }, b: { name: "SOC 2 / SOC 3", points: ["Focuses on Trust Services Criteria: Security, Availability, Processing Integrity, Confidentiality, Privacy","SOC 2: Detailed report — restricted to specific users","SOC 3: General use report — can be publicly shared (no details)","Most relevant to cloud providers and SaaS companies","Type I and Type II also apply","SOC 2 Type II is the gold standard for vendor security assessment"] } },
  { id: "clear-purge", label: "Clearing vs Purging vs Destroying Media", a: { name: "Clearing", points: ["Overwriting data with 1s, 0s, or random patterns","Prevents software-based recovery tools","Suitable for reuse within same classification level","Example: DoD 5220.22-M (7-pass wipe)","Ineffective against advanced lab recovery techniques","SSD clearing requires special consideration (wear leveling)"] }, b: { name: "Purging vs Destroying", points: ["Purging: Removes data so lab-level recovery is not feasible","Methods: Cryptographic Erase (CE), Degaussing (magnetic media only)","Degaussing ineffective on SSDs, flash memory, CDs","Destroying: Physical destruction — shredding, disintegration, incineration","NIST SP 800-88 is the authoritative guide","Destruction required for highest classification data"] } },
  { id: "white-black-grey", label: "White Box vs Black Box vs Grey Box Pen Test", a: { name: "Black Box Testing", points: ["Tester has NO prior knowledge of the target","Simulates an external attacker perspective","Most realistic for external threat modeling","Time-consuming — requires reconnaissance phase","Less efficient at finding all vulnerabilities","Also called: zero-knowledge testing"] }, b: { name: "White Box / Grey Box Testing", points: ["White Box: Full knowledge — architecture, source code, credentials","Most efficient — targets specific areas of concern","Grey Box: Partial knowledge — some credentials or architecture info","Grey Box simulates insider threat or compromised account","White Box used for code review, secure SDLC integration","Grey Box is the most common for modern penetration tests"] } },
  { id: "authentication-factors", label: "Authentication Factors (1FA/2FA/MFA)", a: { name: "Something You Know (Type 1)", points: ["Passwords, PINs, passphrases, security questions","Easiest to implement, easiest to compromise","Subject to: phishing, shoulder surfing, brute force, dictionary attacks","NIST SP 800-63B recommends long passphrases over complex short passwords","Should never be transmitted in plaintext","Weakest factor — always combine with another"] }, b: { name: "Something You Have + Are (Type 2 + 3)", points: ["Type 2 (Have): Smart cards, hardware tokens (TOTP/HOTP), mobile authenticators","Type 3 (Are): Biometrics — fingerprint, iris, retina, face, voice, gait","Somewhere you are (Type 4): Geolocation, IP restriction","MFA = any 2+ different factor TYPES (not two of the same type)","FIDO2/WebAuthn passkeys eliminate passwords entirely","Biometrics: FAR, FRR, CER — lower CER = better accuracy"] } },
];

let _compareCurrentId = null;

function initCompareModal() {
  // Inject compare modal into DOM if not present
  if (document.getElementById("compare-modal")) return;
  const modal = document.createElement("div");
  modal.id = "compare-modal";
  modal.className = "compare-modal";
  modal.innerHTML = `
    <div class="compare-container">
      <div class="card glass" style="padding: 28px;">
        <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:20px; flex-wrap:wrap; gap:12px;">
          <h3 style="margin:0;"><i class="fa-solid fa-scale-balanced" style="color:var(--primary);"></i> Concept Comparisons</h3>
          <button onclick="document.getElementById('compare-modal').classList.remove('active')" style="background:none;border:none;color:var(--text-muted);cursor:pointer;font-size:22px;line-height:1;">&times;</button>
        </div>
        <p style="font-size:13px; color:var(--text-muted); margin:0 0 16px;">Click any card to compare commonly confused CISSP concepts side-by-side.</p>
        <div class="compare-chip-list" id="compare-chip-list">
          ${COMPARE_PAIRS.map(p => `<span class="compare-chip" data-cid="${p.id}" onclick="showComparePair('${p.id}')">${p.label}</span>`).join("")}
        </div>
        <div id="compare-pair-display" style="margin-top:20px;"></div>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
}

function showComparePair(id) {
  _compareCurrentId = id;
  const pair = COMPARE_PAIRS.find(p => p.id === id);
  if (!pair) return;

  // Highlight active chip
  document.querySelectorAll(".compare-chip").forEach(c => {
    c.classList.toggle("active", c.dataset.cid === id);
  });

  const display = document.getElementById("compare-pair-display");
  if (!display) return;
  display.innerHTML = `
    <h4 style="text-align:center; margin:0 0 16px; color:var(--text-muted); font-size:13px; text-transform:uppercase; letter-spacing:.08em;">${pair.label}</h4>
    <div class="compare-pair-grid">
      <div class="compare-card side-a">
        <h4>${pair.a.name}</h4>
        <ul style="margin:0; padding-left:18px; font-size:13px; line-height:1.8;">
          ${pair.a.points.map(p => `<li>${p}</li>`).join("")}
        </ul>
      </div>
      <div class="compare-card side-b">
        <h4>${pair.b.name}</h4>
        <ul style="margin:0; padding-left:18px; font-size:13px; line-height:1.8;">
          ${pair.b.points.map(p => `<li>${p}</li>`).join("")}
        </ul>
      </div>
    </div>
  `;
}

function openCompareModal() {
  initCompareModal();
  document.getElementById("compare-modal").classList.add("active");
  if (!_compareCurrentId && COMPARE_PAIRS.length > 0) showComparePair(COMPARE_PAIRS[0].id);
}

// =================================================================
// PRINT CHEAT SHEET
// =================================================================
function printCheatSheet() {
  // Switch to cheat sheet tab first
  switchTab("cheatsheet");
  // Add print header temporarily
  const header = document.createElement("div");
  header.className = "print-header";
  header.innerHTML = `<h1 style="font-size:20px; margin:0;">CISSP ExamPro — Searchable Cheat Sheet</h1><p style="margin:4px 0 0; font-size:13px; color:#666;">Printed ${new Date().toLocaleDateString()} · cissp-exampro.vercel.app</p>`;
  const grid = document.getElementById("cheatsheet-grid");
  if (grid) grid.parentNode.insertBefore(header, grid);
  setTimeout(() => {
    window.print();
    setTimeout(() => header.remove(), 1000);
  }, 400);
}

// =================================================================
// DOMAIN CONTENT INTEGRATION HOOK
// =================================================================
function getDomainContent(domainNum) {
  // Check for expanded content from domain_content.js (loaded before app.js)
  const expanded = window.CISSP_DOMAIN_CONTENT;
  if (expanded && expanded[domainNum]) return expanded[domainNum];
  // Fallback to base content
  return DOMAIN_GUIDES[domainNum];
}

// =================================================================
// MISTAKE LOG / WRONG ANSWER REVIEWER LOGIC
// =================================================================
function logMistake(question, chosenOptionIdx) {
  if (!STATE.mistakes) STATE.mistakes = [];
  
  // Prevent duplicate logs for the same question
  if (STATE.mistakes.some(m => m.question.id === question.id)) {
    const idx = STATE.mistakes.findIndex(m => m.question.id === question.id);
    STATE.mistakes[idx].chosen = chosenOptionIdx;
    STATE.mistakes[idx].timestamp = new Date().toISOString();
  } else {
    STATE.mistakes.push({
      question: question,
      chosen: chosenOptionIdx,
      timestamp: new Date().toISOString()
    });
  }
  localStorage.setItem("cissp_mistakes", JSON.stringify(STATE.mistakes));
}

function renderMistakeLog() {
  const container = document.getElementById("mistakes-list-container");
  const countVal = document.getElementById("mistakes-count-val");
  
  if (!STATE.mistakes) STATE.mistakes = JSON.parse(localStorage.getItem("cissp_mistakes") || "[]");
  
  if (countVal) countVal.textContent = STATE.mistakes.length;
  if (!container) return;

  if (STATE.mistakes.length === 0) {
    container.innerHTML = `
      <div class="card glass" style="padding: 40px; text-align: center;">
        <i class="fa-solid fa-circle-check" style="font-size: 48px; color: #10b981; margin-bottom: 16px;"></i>
        <h3 style="margin: 0 0 8px;">No logged mistakes!</h3>
        <p style="font-size: 13px; color: var(--text-muted); margin: 0;">Great job! You have resolved all incorrect answers. Take practice tests to challenge yourself.</p>
      </div>
    `;
    return;
  }

  const LETTERS = ["A", "B", "C", "D", "E"];
  container.innerHTML = STATE.mistakes.map((m, idx) => {
    const q = m.question;
    const isMock = q.options.length > 0;
    
    return `
      <div class="card glass" id="mistake-card-${q.id}" style="padding: 24px; margin-bottom: 16px; border-left: 4px solid #ef4444; transition: all 0.3s ease;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; flex-wrap:wrap; gap:8px;">
          <span style="font-size: 11px; font-weight: 700; text-transform: uppercase; padding: 3px 8px; border-radius: 6px; background: rgba(239,68,68,0.1); color: #ef4444;">Domain ${q.domain}</span>
          <span style="font-size: 11px; color: var(--text-muted);">${new Date(m.timestamp).toLocaleDateString()}</span>
        </div>
        <p style="font-size: 14px; font-weight: 600; line-height: 1.6; color: var(--text-main); margin: 0 0 16px;">${q.question}</p>
        
        <!-- Interactive retake option block -->
        <div style="display:flex; flex-direction:column; gap:8px; margin-bottom:16px;">
          ${q.options.map((opt, oIdx) => `
            <div class="examday-option" id="mistake-opt-${q.id}-${oIdx}" onclick="selectMistakeOption(${q.id}, ${oIdx})" style="padding: 10px 14px; border-radius:8px;">
              <span class="examday-option-letter" style="min-width:18px;">${LETTERS[oIdx]}.</span>
              <span style="font-size: 13px;">${opt}</span>
            </div>
          `).join("")}
        </div>

        <div style="font-size:12.5px; color: #ef4444; margin-bottom:14px; background:rgba(239,68,68,0.06); padding:8px 12px; border-radius:6px; display:inline-flex; align-items:center; gap:8px;">
          <i class="fa-solid fa-triangle-exclamation"></i>
          <span>Previously picked: <strong>${LETTERS[m.chosen]}. ${q.options[m.chosen]}</strong></span>
        </div>

        <div id="mistake-feedback-${q.id}" style="display:none; margin-bottom:14px; padding:10px 14px; border-radius:8px; font-size:13px; line-height:1.5;"></div>

        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">
          <button class="btn btn-primary btn-sm" onclick="checkMistakeAnswer(${q.id})" style="font-size: 12px; padding: 6px 14px;">
            <i class="fa-solid fa-square-check"></i> Verify Answer
          </button>
          <button class="btn btn-secondary btn-sm" id="mistake-exp-btn-${q.id}" onclick="toggleMistakeExplanation(${q.id})" style="font-size: 12px; padding: 6px 14px; display:none;">
            Show Explanation
          </button>
        </div>
      </div>
    `;
  }).join("");
}

// Stores the selected option during the retake session
window._mistakeSelections = {};

function selectMistakeOption(qId, oIdx) {
  window._mistakeSelections[qId] = oIdx;
  
  // Highlight chosen option
  document.querySelectorAll(`[id^="mistake-opt-${qId}-"]`).forEach((el, idx) => {
    el.classList.toggle("selected", idx === oIdx);
  });
}

function checkMistakeAnswer(qId) {
  const chosen = window._mistakeSelections[qId];
  if (chosen === undefined) {
    alert("Please select an option before verifying.");
    return;
  }

  const index = STATE.mistakes.findIndex(m => m.question.id === qId);
  if (index === -1) return;

  const m = STATE.mistakes[index];
  const correct = m.question.answer;
  const isCorrect = chosen === correct;

  const feedback = document.getElementById(`mistake-feedback-${qId}`);
  const expBtn = document.getElementById(`mistake-exp-btn-${qId}`);
  
  if (feedback) {
    feedback.style.display = "block";
    feedback.style.background = isCorrect ? "rgba(16,185,129,0.08)" : "rgba(239,68,68,0.08)";
    feedback.style.borderLeft = `3px solid ${isCorrect ? '#10b981' : '#ef4444'}`;
    feedback.style.color = isCorrect ? "#10b981" : "#ef4444";
    feedback.innerHTML = isCorrect 
      ? `<strong>✓ Resolved!</strong> That is correct. This mistake has been cleared from your log.`
      : `<strong>✗ Incorrect.</strong> Try again or view the explanation below to learn why.`;
  }

  if (isCorrect) {
    // Play success sound
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(523.25, audioCtx.currentTime);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.15);
    } catch(e) {}

    // Highlight correct options
    const optEl = document.getElementById(`mistake-opt-${qId}-${correct}`);
    if (optEl) optEl.style.borderColor = "#10b981";

    // Remove from array and save after a delay so user sees success feedback
    setTimeout(() => {
      const card = document.getElementById(`mistake-card-${qId}`);
      if (card) {
        card.style.opacity = "0";
        card.style.transform = "translateX(50px)";
        setTimeout(() => {
          STATE.mistakes.splice(index, 1);
          localStorage.setItem("cissp_mistakes", JSON.stringify(STATE.mistakes));
          renderMistakeLog();
        }, 300);
      }
    }, 1500);
  } else {
    // Play error sound
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(150, audioCtx.currentTime);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.2);
    } catch(e) {}
    
    if (expBtn) expBtn.style.display = "block";
  }
}

function toggleMistakeExplanation(qId) {
  const index = STATE.mistakes.findIndex(m => m.question.id === qId);
  if (index === -1) return;
  
  const m = STATE.mistakes[index];
  const feedback = document.getElementById(`mistake-feedback-${qId}`);
  const btn = document.getElementById(`mistake-exp-btn-${qId}`);
  
  if (feedback && m.question.explanation) {
    const isShowingExp = feedback.innerHTML.includes("Explanation:");
    if (isShowingExp) {
      feedback.innerHTML = `<strong>✗ Incorrect.</strong> Try again or view the explanation below to learn why.`;
      btn.textContent = "Show Explanation";
    } else {
      feedback.style.color = "var(--text-main)";
      feedback.style.background = "rgba(255,255,255,0.03)";
      feedback.style.borderLeft = "3px solid var(--primary)";
      feedback.innerHTML = `<strong>Explanation:</strong> ${m.question.explanation}`;
      btn.textContent = "Hide Explanation";
    }
  }
}

function clearAllMistakes() {
  if (confirm("Are you sure you want to clear all logged mistakes? This cannot be undone.")) {
    STATE.mistakes = [];
    localStorage.setItem("cissp_mistakes", JSON.stringify(STATE.mistakes));
    renderMistakeLog();
  }
}

