const CISSP_QUESTIONS = [
  {
    "id": 10001,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "What is the primary purpose of information security governance?",
    "options": [
      "Manage user access controls",
      "Align security with business objectives",
      "Monitor intrusion detection systems",
      "Ensure firewalls are configured"
    ],
    "answer": 1,
    "explanation": "Governance aligns security strategy  with business goals and risk appetite."
  },
  {
    "id": 10002,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following best describes residual risk?",
    "options": [
      "Risk eliminated by controls",
      "Risk remaining after controls are applied",
      "Risk that cannot be measured",
      "Risk transferred to a third party"
    ],
    "answer": 1,
    "explanation": "Residual risk is what remains after  mitigation or control efforts."
  },
  {
    "id": 10003,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "The NIST Cybersecurity Framework is organized into which five core functions?",
    "options": [
      "Identify, Protect, Detect, Respond, Recover",
      "Plan, Do, Check, Act, Improve",
      "Assess, Control, Audit, Remediate, Report",
      "Prevent, Detect, Correct, Review, Report"
    ],
    "answer": 0,
    "explanation": "NIST CSF\u2019s five pillars structure enterprise  cybersecurity programs."
  },
  {
    "id": 10004,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which step must precede building an AI/ML risk  program? \u00a9 2025 Manoj Kumar | Shared for educational and professional reference  https://linkedin.com/in/mkrj",
    "options": [
      "Deploying GPU clusters",
      "Defining governance, ethics, and accountability principles",
      "Procuring cloud storage",
      "Automating ML pipelines"
    ],
    "answer": 1,
    "explanation": "AI governance starts with ethical and accountable foundations (ISO 42001 Clause 5)."
  },
  {
    "id": 10005,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which term defines research performed prior to a business decision?",
    "options": [
      "Due care",
      "Due diligence",
      "Risk analysis",
      "Audit planning"
    ],
    "answer": 1,
    "explanation": "Due diligence = investigation before  commitment (e.g., vendor review)."
  },
  {
    "id": 10006,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "What does a risk register document?",
    "options": [
      "Only audit findings",
      "Identified risks, owners, mitigation, and status",
      "Network topology",
      "Password policy"
    ],
    "answer": 1,
    "explanation": "Risk register tracks all risk elements  and treatments."
  },
  {
    "id": 10007,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "ISO 27005 primarily guides:",
    "options": [
      "Software testing",
      "Information-security risk management",
      "Data privacy controls",
      "Incident forensics"
    ],
    "answer": 1,
    "explanation": "It provides methods for assessing and  treating risks per ISO 27001."
  },
  {
    "id": 10008,
    "domain": 3,
    "domain_name": "Security Architecture and Engineering",
    "scenario": "General CISSP Concept Review",
    "question": "\u201cDefense in Depth\u201d is based on:",
    "options": [
      "One control layer",
      "Multiple independent safeguards",
      "Outsourced security only",
      "Minimal control sets"
    ],
    "answer": 1,
    "explanation": "Stacking independent controls limits  single-point failures."
  },
  {
    "id": 10009,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Accepting a risk means:",
    "options": [
      "Taking no further action but documenting justification",
      "Eliminating the threat",
      "Transferring to insurance",
      "Avoiding the activity"
    ],
    "answer": 0,
    "explanation": "Risk acceptance = informed decision  to live with risk."
  },
  {
    "id": 10010,
    "domain": 7,
    "domain_name": "Security Operations",
    "scenario": "General CISSP Concept Review",
    "question": "Recovery Time Objective (RTO) represents: \u00a9 2025 Manoj Kumar | Shared for educational and professional reference  https://linkedin.com/in/mkrj",
    "options": [
      "Max tolerable data loss",
      "Targeted restoration time after disruption",
      "Backup start time",
      "Cost of downtime"
    ],
    "answer": 1,
    "explanation": "RTO defines allowable outage duration."
  },
  {
    "id": 10011,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "ISO 27701 extends ISO 27001 to manage:",
    "options": [
      "Business continuity",
      "Privacy information management",
      "Financial risk",
      "Cloud infrastructure"
    ],
    "answer": 1,
    "explanation": "ISO 27701 establishes a Privacy Information  Management System (PIMS)."
  },
  {
    "id": 10012,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "In quantitative analysis, SLE = ?",
    "options": [
      "Asset Value \u00d7 Exposure Factor",
      "Exposure Factor \u00d7 ARO",
      "ALE \u00d7 ARO",
      "Asset Value \u00f7 ARO"
    ],
    "answer": 0,
    "explanation": "Single Loss Expectancy = expected loss  per incident."
  },
  {
    "id": 10013,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Risk transfer commonly involves:",
    "options": [
      "Security training",
      "Insurance or outsourcing",
      "Stronger controls",
      "Risk avoidance"
    ],
    "answer": 1,
    "explanation": "Transfer shifts impact via contracts  or insurance."
  },
  {
    "id": 10014,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Least-privilege helps:",
    "options": [
      "Simplify policy",
      "Minimize potential damage from compromise",
      "Increase availability",
      "Centralize admin"
    ],
    "answer": 1,
    "explanation": "Restricting access lowers attack surface."
  },
  {
    "id": 10015,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "A control objective is:",
    "options": [
      "A detailed configuration",
      "A high-level desired outcome",
      "An audit procedure",
      "A policy exception"
    ],
    "answer": 1,
    "explanation": "It states what controls should achieve. \u00a9 2025 Manoj Kumar | Shared for educational and professional reference  https://linkedin.com/in/mkrj"
  },
  {
    "id": 10016,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Under FISMA, who defines federal control requirements?",
    "options": [
      "ISO",
      "NIST",
      "ISC\u00b2",
      "OWASP"
    ],
    "answer": 1,
    "explanation": "NIST SP 800-53 specifies mandatory controls."
  },
  {
    "id": 10017,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Integrated GRC (Governance Risk Compliance) means:",
    "options": [
      "Separate reporting",
      "Unified oversight linking policies, risks, controls",
      "Manual spreadsheets",
      "Isolated automation"
    ],
    "answer": 1,
    "explanation": "Integration connects governance objectives  to risk data and evidence."
  },
  {
    "id": 10018,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Secure AI Framework (SAIF) focuses on:",
    "options": [
      "Dataset encryption only",
      "Secure and accountable AI lifecycle",
      "Model disabling",
      "Avoiding testing"
    ],
    "answer": 1,
    "explanation": "SAIF covers security across AI development  and deployment phases."
  },
  {
    "id": 10019,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Risk appetite is:",
    "options": [
      "Risk an organization is willing to accept",
      "Residual risk level",
      "Probability metric",
      "Control efficiency"
    ],
    "answer": 0,
    "explanation": "Defines tolerance threshold for risk  exposure."
  },
  {
    "id": 10020,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "ISC\u00b2 Code of Ethics first canon requires members  to:",
    "options": [
      "Protect organization only",
      "Protect society and common good",
      "Ignore privacy",
      "Prioritize profit"
    ],
    "answer": 1,
    "explanation": "Canon 1 \u2013 protect society and the infrastructure."
  },
  {
    "id": 10021,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "What is \u201cdue care\u201d? \u00a9 2025 Manoj Kumar | Shared for educational and professional reference  https://linkedin.com/in/mkrj",
    "options": [
      "Continuous monitoring",
      "Ongoing maintenance after due diligence",
      "Performing risk analysis",
      "Purchasing insurance"
    ],
    "answer": 1,
    "explanation": "Due care = actions taken to maintain  security after initial assessment."
  },
  {
    "id": 10022,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Business Impact Analysis (BIA) helps:",
    "options": [
      "Quantify threat probability",
      "Prioritize critical functions and recovery timelines",
      "Implement controls",
      "Select vendors"
    ],
    "answer": 1,
    "explanation": "BIA identifies process criticality and  recovery targets."
  },
  {
    "id": 10023,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which control type detects violations after they  occur?",
    "options": [
      "Preventive",
      "Detective",
      "Compensating",
      "Directive"
    ],
    "answer": 1,
    "explanation": "Detective controls identify incidents  post-event."
  },
  {
    "id": 10024,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Quantitative risk analysis benefit is:",
    "options": [
      "Ease of execution",
      "Provides monetary impact values",
      "Uses subjective scoring",
      "Ignores probability"
    ],
    "answer": 1,
    "explanation": "Enables financial comparison and ROI  calculations."
  },
  {
    "id": 10025,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Security policies should be:",
    "options": [
      "Technical manuals",
      "High-level statements of intent",
      "Step-by-step procedures",
      "Vendor guidelines"
    ],
    "answer": 1,
    "explanation": "Policies set direction and authority  for security programs."
  },
  {
    "id": 10026,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which law regulates privacy for EU citizens?",
    "options": [
      "GLBA",
      "GDPR",
      "HIPAA",
      "SOX"
    ],
    "answer": 1,
    "explanation": "GDPR protects personal data of EU individuals."
  },
  {
    "id": 10027,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Risk avoidance means: \u00a9 2025 Manoj Kumar | Shared for educational and professional reference  https://linkedin.com/in/mkrj",
    "options": [
      "Sharing risk",
      "Eliminating the activity causing risk",
      "Reducing impact",
      "Accepting risk"
    ],
    "answer": 1,
    "explanation": "Avoidance = stop doing the risky process  entirely."
  },
  {
    "id": 10028,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "The primary goal of security awareness training is to:",
    "options": [
      "Eliminate human error",
      "Influence behavior and reduce user risk",
      "Provide technical skills",
      "Test controls"
    ],
    "answer": 1,
    "explanation": "Awareness targets human behavior and  culture."
  },
  {
    "id": 10029,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "COSO ERM framework focuses on:",
    "options": [
      "Audit sampling",
      "Enterprise risk management and internal control",
      "Data classification",
      "Encryption"
    ],
    "answer": 1,
    "explanation": "COSO integrates risk with strategic  governance."
  },
  {
    "id": 10030,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "The primary driver for AI ethics policies is:",
    "options": [
      "GPU availability",
      "Accountability and bias mitigation",
      "Speed of training",
      "Model compression"
    ],
    "answer": 1,
    "explanation": "Ethical AI ensures fairness and trust."
  },
  {
    "id": 10031,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Separation of duties prevents:",
    "options": [
      "Resource optimization",
      "Fraud and error",
      "Performance bottlenecks",
      "Access denials"
    ],
    "answer": 1,
    "explanation": "Divides tasks to avoid collusion or  mistakes."
  },
  {
    "id": 10032,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which document defines management intent and  direction?",
    "options": [
      "Policy",
      "Standard",
      "Procedure",
      "Baseline"
    ],
    "answer": 0,
    "explanation": "Policies express executive intent. \u00a9 2025 Manoj Kumar | Shared for educational and professional reference  https://linkedin.com/in/mkrj"
  },
  {
    "id": 10033,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Business continuity plans should be tested:",
    "options": [
      "Once per five years",
      "Regularly with realistic scenarios",
      "Only after an incident",
      "When requested by auditors"
    ],
    "answer": 1,
    "explanation": "Periodic testing validates plan effectiveness."
  },
  {
    "id": 10034,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "ISO 31000 is a standard for:",
    "options": [
      "Environmental management",
      "Enterprise risk management",
      "Data privacy",
      "Network security"
    ],
    "answer": 1,
    "explanation": "Provides principles for any organizational  risk framework."
  },
  {
    "id": 10035,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Security baseline defines:",
    "options": [
      "Ideal future state",
      "Minimum required security configurations",
      "Risk acceptance criteria",
      "Budget allocation"
    ],
    "answer": 1,
    "explanation": "Baselines set minimum acceptable control  levels."
  },
  {
    "id": 10036,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which is a directive control?",
    "options": [
      "Firewall",
      "Policy statement",
      "IDS",
      "Encryption"
    ],
    "answer": 1,
    "explanation": "Directive controls guide actions through  policy."
  },
  {
    "id": 10037,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Quantitative risk formula for ALE is:",
    "options": [
      "SLE \u00d7 ARO",
      "SLE \u00f7 ARO",
      "ARO \u2212 SLE",
      "ARO \u00d7 EF"
    ],
    "answer": 0,
    "explanation": "Annualized Loss Expectancy = expected  yearly loss."
  },
  {
    "id": 10038,
    "domain": 2,
    "domain_name": "Asset Security",
    "scenario": "General CISSP Concept Review",
    "question": "Data classification should be based on: \u00a9 2025 Manoj Kumar | Shared for educational and professional reference  https://linkedin.com/in/mkrj",
    "options": [
      "Data format",
      "Value and sensitivity",
      "File type",
      "Owner\u2019s preference"
    ],
    "answer": 1,
    "explanation": "Sensitivity drives classification and  handling."
  },
  {
    "id": 10039,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which document grants authority for ISMS implementation?",
    "options": [
      "Charter or policy statement",
      "Procedure",
      "Risk matrix",
      "Control catalog"
    ],
    "answer": 0,
    "explanation": "Executive charter authorizes program  execution."
  },
  {
    "id": 10040,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "What does MTO represent in continuity planning?",
    "options": [
      "Maximum Tolerable Outage",
      "Minimum Time Objective",
      "Manual Transition Operation",
      "Mean Time to Operate"
    ],
    "answer": 0,
    "explanation": "MTO = maximum downtime before irreversible  impact."
  },
  {
    "id": 10041,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Key advantage of qualitative risk analysis is:",
    "options": [
      "Precision",
      "Simplicity and speed",
      "Requires exact data",
      "Monetary output"
    ],
    "answer": 1,
    "explanation": "Uses scoring and expert judgment when  data is limited."
  },
  {
    "id": 10042,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "The primary purpose of security metrics and KRIs is to:",
    "options": [
      "Replace audits",
      "Provide measurable insight into control effectiveness",
      "Serve as marketing material",
      "Meet HR targets"
    ],
    "answer": 1,
    "explanation": "Metrics quantify performance and risk  levels."
  },
  {
    "id": 10043,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which framework focuses on IT governance and management?",
    "options": [
      "COBIT 2019",
      "ISO 9001",
      "ITIL v4",
      "NIST CSF"
    ],
    "answer": 0,
    "explanation": "COBIT links IT processes to business  governance."
  },
  {
    "id": 10044,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Ethics violations by CISSP members can result in: \u00a9 2025 Manoj Kumar | Shared for educational and professional reference  https://linkedin.com/in/mkrj",
    "options": [
      "Training requirement only",
      "Suspension or revocation of certification",
      "Fine from NIST",
      "Termination of employment by ISC\u00b2"
    ],
    "answer": 1,
    "explanation": "ISC\u00b2 enforces ethics through peer review  and sanctions."
  },
  {
    "id": 10045,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "The chief purpose of a risk assessment is to:",
    "options": [
      "Eliminate all risk",
      "Identify and prioritize risks for treatment",
      "Prove compliance",
      "Satisfy auditors"
    ],
    "answer": 1,
    "explanation": "Assessment guides mitigation priorities."
  },
  {
    "id": 10046,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Control maturity models (such as CMMI) help to:",
    "options": [
      "Eliminate risk",
      "Measure process capability and improvement levels",
      "Certify auditors",
      "Replace standards"
    ],
    "answer": 1,
    "explanation": "Shows how well processes are defined  and optimized."
  },
  {
    "id": 10047,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which standard addresses Business Continuity Management Systems?",
    "options": [
      "ISO 22301",
      "ISO 27001",
      "ISO 9001",
      "ISO 42001"
    ],
    "answer": 0,
    "explanation": "ISO 22301 specifies BCMS requirements."
  },
  {
    "id": 10048,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "A control that reduces likelihood of incident is called:",
    "options": [
      "Detective",
      "Preventive",
      "Corrective",
      "Recovery"
    ],
    "answer": 1,
    "explanation": "Preventive controls stop events before  they occur."
  },
  {
    "id": 10049,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which term describes formal acceptance of risk  by senior management?",
    "options": [
      "Risk acknowledgment",
      "Risk authorization",
      "Risk sign-off",
      "Risk tolerance"
    ],
    "answer": 1,
    "explanation": "Management authorization is required  for risk acceptance. \u00a9 2025 Manoj Kumar | Shared for educational and professional reference  https://linkedin.com/in/mkrj"
  },
  {
    "id": 10050,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Security culture within an organization is best built through:",
    "options": [
      "Mandatory technical tests only",
      "Continuous education and leadership example",
      "Punitive policies",
      "Annual audit reviews"
    ],
    "answer": 1,
    "explanation": "Culture requires ongoing awareness and executive support. DOMAIN 2 \u2013 Asset Security (Questions 51\u2013100)"
  },
  {
    "id": 10051,
    "domain": 2,
    "domain_name": "Asset Security",
    "scenario": "General CISSP Concept Review",
    "question": "What is the primary goal of asset classification?",
    "options": [
      "Simplify data storage",
      "Assign value and protection requirements",
      "Support financial accounting",
      "Enable backups"
    ],
    "answer": 1,
    "explanation": "Classification ties security controls  to an asset\u2019s sensitivity and business value."
  },
  {
    "id": 10052,
    "domain": 2,
    "domain_name": "Asset Security",
    "scenario": "General CISSP Concept Review",
    "question": "Data ownership is best assigned to:",
    "options": [
      "System administrators",
      "Business units responsible for the data",
      "Security team",
      "End users"
    ],
    "answer": 1,
    "explanation": "Owners determine classification and  authorized use."
  },
  {
    "id": 10053,
    "domain": 2,
    "domain_name": "Asset Security",
    "scenario": "General CISSP Concept Review",
    "question": "Custodians are responsible for:",
    "options": [
      "Determining data value",
      "Implementing protection mechanisms",
      "Approving data use",
      "Performing risk assessments"
    ],
    "answer": 1,
    "explanation": "Custodians apply controls defined by  owners."
  },
  {
    "id": 10054,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "What is the key difference between data at rest and data in transit? \u00a9 2025 Manoj Kumar | Shared for educational and professional reference  https://linkedin.com/in/mkrj",
    "options": [
      "Encryption applicability",
      "Storage location",
      "Threat type",
      "Transmission medium"
    ],
    "answer": 1,
    "explanation": "At rest = stored; in transit = moving  across networks."
  },
  {
    "id": 10055,
    "domain": 2,
    "domain_name": "Asset Security",
    "scenario": "General CISSP Concept Review",
    "question": "Sanitization aims to:",
    "options": [
      "Backup information",
      "Permanently remove sensitive data",
      "Encrypt data",
      "Compress files"
    ],
    "answer": 1,
    "explanation": "Sanitization ensures irrecoverable data  destruction."
  },
  {
    "id": 10056,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which media destruction method is suitable for  solid-state drives?",
    "options": [
      "Degaussing",
      "Cryptographic erasure or physical shredding",
      "Overwriting with zeros once",
      "Formatting"
    ],
    "answer": 1,
    "explanation": "SSDs require crypto-erase or destruction,  as degaussing is ineffective."
  },
  {
    "id": 10057,
    "domain": 2,
    "domain_name": "Asset Security",
    "scenario": "General CISSP Concept Review",
    "question": "Data remanence refers to:",
    "options": [
      "Backup copies",
      "Residual data remaining after erasure",
      "Encrypted archives",
      "Deleted log entries"
    ],
    "answer": 1,
    "explanation": "Residual information may remain on media  after deletion."
  },
  {
    "id": 10058,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "The most important factor when classifying information is:",
    "options": [
      "File type",
      "Sensitivity and impact if disclosed",
      "Storage cost",
      "Age of data"
    ],
    "answer": 1,
    "explanation": "Classification is driven by confidentiality,  integrity, and availability impact."
  },
  {
    "id": 10059,
    "domain": 2,
    "domain_name": "Asset Security",
    "scenario": "General CISSP Concept Review",
    "question": "Labeling data supports which control principle?",
    "options": [
      "Separation of duties",
      "Accountability and handling consistency",
      "Least privilege",
      "Non-repudiation"
    ],
    "answer": 1,
    "explanation": "Labels communicate handling requirements  to all users. \u00a9 2025 Manoj Kumar | Shared for educational and professional reference  https://linkedin.com/in/mkrj"
  },
  {
    "id": 10060,
    "domain": 2,
    "domain_name": "Asset Security",
    "scenario": "General CISSP Concept Review",
    "question": "Who determines retention requirements?",
    "options": [
      "Legal, compliance, and data owners jointly",
      "Database administrators",
      "Network engineers",
      "HR department only"
    ],
    "answer": 0,
    "explanation": "Retention periods must meet legal and  business obligations."
  },
  {
    "id": 10061,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "What defines how long evidence must be preserved?",
    "options": [
      "Policy",
      "Retention schedule",
      "Service-level agreement",
      "Asset inventory"
    ],
    "answer": 1,
    "explanation": "Retention schedules define duration  based on regulation."
  },
  {
    "id": 10062,
    "domain": 5,
    "domain_name": "Identity and Access Management (IAM)",
    "scenario": "General CISSP Concept Review",
    "question": "Which ISO standard provides privacy-by-design guidance for cloud processors?",
    "options": [
      "ISO 27018",
      "ISO 22301",
      "ISO 42001",
      "ISO 9001"
    ],
    "answer": 0,
    "explanation": "ISO 27018 governs PII protection in  public clouds."
  },
  {
    "id": 10063,
    "domain": 2,
    "domain_name": "Asset Security",
    "scenario": "General CISSP Concept Review",
    "question": "Asset inventories must include:",
    "options": [
      "Asset ID, owner, classification, and location",
      "Only hardware serial numbers",
      "Employee preferences",
      "Vendor price list"
    ],
    "answer": 0,
    "explanation": "Comprehensive inventories support accountability  and control coverage."
  },
  {
    "id": 10064,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which method ensures data integrity in storage?",
    "options": [
      "Hashing and checksums",
      "Compression",
      "DLP tagging",
      "Backup rotation"
    ],
    "answer": 0,
    "explanation": "Hashing detects unauthorized modification."
  },
  {
    "id": 10065,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "What is the best protection for highly sensitive  PII stored in cloud? \u00a9 2025 Manoj Kumar | Shared for educational and professional reference  https://linkedin.com/in/mkrj",
    "options": [
      "Tokenization and strong encryption",
      "Shared keys across tenants",
      "Public exposure for transparency",
      "Single-factor authentication"
    ],
    "answer": 0,
    "explanation": "Tokenization + encryption mitigate disclosure  risk."
  },
  {
    "id": 10066,
    "domain": 7,
    "domain_name": "Security Operations",
    "scenario": "General CISSP Concept Review",
    "question": "The chain of custody ensures:",
    "options": [
      "Encryption strength",
      "Evidence integrity from collection to presentation",
      "Data retention period",
      "Backup restoration"
    ],
    "answer": 1,
    "explanation": "It maintains documented control of evidence  handling."
  },
  {
    "id": 10067,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Media reuse requires:",
    "options": [
      "Format command only",
      "Proper sanitization before reassignment",
      "Simple overwrite",
      "None if same owner"
    ],
    "answer": 1,
    "explanation": "Sanitize to remove residual data before  reuse."
  },
  {
    "id": 10068,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Cloud data portability focuses on:",
    "options": [
      "Vendor-lock avoidance and data retrieval standards",
      "Hardware upgrades",
      "Cryptographic strength",
      "Audit frequency"
    ],
    "answer": 0,
    "explanation": "Supports compliance and business continuity  during provider changes."
  },
  {
    "id": 10069,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "What is data sovereignty?",
    "options": [
      "Encryption algorithm selection",
      "Jurisdictional control over data based on location",
      "Data ownership transfer",
      "DRM enforcement"
    ],
    "answer": 1,
    "explanation": "Data is subject to laws of its physical  storage region."
  },
  {
    "id": 10070,
    "domain": 2,
    "domain_name": "Asset Security",
    "scenario": "General CISSP Concept Review",
    "question": "Classification labels should be:",
    "options": [
      "Secretly maintained",
      "Visible to authorized users handling the data",
      "Hidden in metadata only",
      "Optional"
    ],
    "answer": 1,
    "explanation": "Clear labeling guides correct handling."
  },
  {
    "id": 10071,
    "domain": 2,
    "domain_name": "Asset Security",
    "scenario": "General CISSP Concept Review",
    "question": "The first step in asset management lifecycle is: \u00a9 2025 Manoj Kumar | Shared for educational and professional reference  https://linkedin.com/in/mkrj",
    "options": [
      "Disposal",
      "Identification and inventory",
      "Classification",
      "Maintenance"
    ],
    "answer": 1,
    "explanation": "You must know what exists before securing  it."
  },
  {
    "id": 10072,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which regulation governs retention of financial audit records in the U.S.?",
    "options": [
      "HIPAA",
      "SOX (Sarbanes-Oxley Act)",
      "FERPA",
      "FISMA"
    ],
    "answer": 1,
    "explanation": "SOX mandates preservation of financial  documentation."
  },
  {
    "id": 10073,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Data masking is primarily used to:",
    "options": [
      "Encrypt backups",
      "Obscure sensitive fields in non-production environments",
      "Destroy PII",
      "Improve compression"
    ],
    "answer": 1,
    "explanation": "Masking preserves data format while  hiding real values."
  },
  {
    "id": 10074,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "What is a key control for data minimization in AI pipelines?",
    "options": [
      "Collect all available data",
      "Retain only necessary features for model training",
      "Store every log forever",
      "Disable encryption"
    ],
    "answer": 1,
    "explanation": "Minimization reduces privacy and compliance  risk."
  },
  {
    "id": 10075,
    "domain": 2,
    "domain_name": "Asset Security",
    "scenario": "General CISSP Concept Review",
    "question": "Asset valuation methods include:",
    "options": [
      "Qualitative ranking or quantitative dollar value",
      "Only depreciation tables",
      "Random assignment",
      "None; classification only"
    ],
    "answer": 0,
    "explanation": "Value drives protection priority."
  },
  {
    "id": 10076,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Backups of classified data must:",
    "options": [
      "Use equivalent protection as originals",
      "Be unencrypted",
      "Be stored offsite without controls",
      "Have lower classification"
    ],
    "answer": 0,
    "explanation": "Backup copies inherit same classification  level. \u00a9 2025 Manoj Kumar | Shared for educational and professional reference  https://linkedin.com/in/mkrj"
  },
  {
    "id": 10077,
    "domain": 4,
    "domain_name": "Communication and Network Security",
    "scenario": "General CISSP Concept Review",
    "question": "When disposing of cloud storage volumes, ensure:",
    "options": [
      "Cryptographic key destruction",
      "Formatting",
      "DNS flush",
      "Manual deletion of logs"
    ],
    "answer": 0,
    "explanation": "Crypto-erase renders data unreadable  even if media persists."
  },
  {
    "id": 10078,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "What ensures data availability in distributed systems?",
    "options": [
      "Replication and redundancy",
      "DLP",
      "Classification",
      "Watermarking"
    ],
    "answer": 0,
    "explanation": "Replication protects against node failures."
  },
  {
    "id": 10079,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "System of Record (SoR) identifies:",
    "options": [
      "Authoritative source for data element",
      "Secondary copy",
      "Log file",
      "Test dataset"
    ],
    "answer": 0,
    "explanation": "SoR defines the master dataset used  for compliance accuracy."
  },
  {
    "id": 10080,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which process defines who can access specific  data elements?",
    "options": [
      "Access control policy",
      "Data inventory",
      "Encryption management",
      "Degaussing"
    ],
    "answer": 0,
    "explanation": "Access policy enforces ownership rules."
  },
  {
    "id": 10081,
    "domain": 2,
    "domain_name": "Asset Security",
    "scenario": "General CISSP Concept Review",
    "question": "What should occur before moving data to a lower  classification?",
    "options": [
      "Management authorization and sanitization review",
      "Immediate re-labeling",
      "Backup deletion",
      "None needed"
    ],
    "answer": 0,
    "explanation": "Downgrading requires formal approval."
  },
  {
    "id": 10082,
    "domain": 2,
    "domain_name": "Asset Security",
    "scenario": "General CISSP Concept Review",
    "question": "Which is a physical protection for asset confidentiality? \u00a9 2025 Manoj Kumar | Shared for educational and professional reference  https://linkedin.com/in/mkrj",
    "options": [
      "Locked cabinets and restricted rooms",
      "Digital signatures",
      "Access logs",
      "VPN tunnels"
    ],
    "answer": 0,
    "explanation": "Physical controls prevent unauthorized  viewing or removal."
  },
  {
    "id": 10083,
    "domain": 2,
    "domain_name": "Asset Security",
    "scenario": "General CISSP Concept Review",
    "question": "The best approach for identifying shadow data assets in SaaS?",
    "options": [
      "Manual discovery",
      "CASB (Cloud Access Security Broker) scanning",
      "Firewalls only",
      "User reports"
    ],
    "answer": 1,
    "explanation": "CASBs detect unsanctioned storage locations."
  },
  {
    "id": 10084,
    "domain": 2,
    "domain_name": "Asset Security",
    "scenario": "General CISSP Concept Review",
    "question": "Information classification is usually performed  by:",
    "options": [
      "Data owner",
      "Custodian",
      "Security auditor",
      "End user"
    ],
    "answer": 0,
    "explanation": "Owner defines classification level and  handling."
  },
  {
    "id": 10085,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which control prevents data leakage via screenshots or printing?",
    "options": [
      "DLP endpoint controls",
      "IDS",
      "Antivirus",
      "VPN"
    ],
    "answer": 0,
    "explanation": "Endpoint DLP monitors copy/print actions."
  },
  {
    "id": 10086,
    "domain": 2,
    "domain_name": "Asset Security",
    "scenario": "General CISSP Concept Review",
    "question": "When decommissioning hardware with encrypted drives, what simplifies sanitization?",
    "options": [
      "Destroying encryption keys",
      "Firmware upgrade",
      "Reformat",
      "Disk imaging"
    ],
    "answer": 0,
    "explanation": "Key destruction instantly renders data  unrecoverable."
  },
  {
    "id": 10087,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Data aggregation increases:",
    "options": [
      "Accuracy",
      "Sensitivity and risk",
      "Compression",
      "Auditability"
    ],
    "answer": 1,
    "explanation": "Combining datasets can expose new privacy  risks."
  },
  {
    "id": 10088,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "The term \u201cData Lifecycle Management (DLM)\u201d covers: \u00a9 2025 Manoj Kumar | Shared for educational and professional reference  https://linkedin.com/in/mkrj",
    "options": [
      "Creation \u2192 Storage \u2192 Use \u2192 Archive \u2192 Disposal",
      "Only backups",
      "Encryption process",
      "Patch management"
    ],
    "answer": 0,
    "explanation": "DLM manages protection across entire  asset lifespan."
  },
  {
    "id": 10089,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which privacy principle restricts use of data beyond original purpose?",
    "options": [
      "Purpose limitation",
      "Integrity",
      "Openness",
      "Collection limitation"
    ],
    "answer": 0,
    "explanation": "GDPR mandates data used only for specified  lawful purposes."
  },
  {
    "id": 10090,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Cloud customers remain accountable for:",
    "options": [
      "Data classification and access control",
      "Physical datacenter security",
      "Hardware lifecycle",
      "ISP routing"
    ],
    "answer": 0,
    "explanation": "In shared-responsibility model, data  governance stays with customer."
  },
  {
    "id": 10091,
    "domain": 2,
    "domain_name": "Asset Security",
    "scenario": "General CISSP Concept Review",
    "question": "Asset tagging benefits include:",
    "options": [
      "Traceability and loss prevention",
      "Encryption",
      "Power management",
      "Faster printing"
    ],
    "answer": 0,
    "explanation": "Tags link physical and logical inventories."
  },
  {
    "id": 10092,
    "domain": 2,
    "domain_name": "Asset Security",
    "scenario": "General CISSP Concept Review",
    "question": "Critical asset loss should trigger:",
    "options": [
      "Incident response + forensics",
      "Firewall rule change",
      "Vendor audit",
      "Network scan"
    ],
    "answer": 0,
    "explanation": "Immediate IR to contain and assess impact."
  },
  {
    "id": 10093,
    "domain": 2,
    "domain_name": "Asset Security",
    "scenario": "General CISSP Concept Review",
    "question": "Which standard defines AI asset accountability  within organizations?",
    "options": [
      "ISO 42001 (Artificial Intelligence Management System)",
      "ISO 27001",
      "NIST SP 800-30",
      "PCI-DSS"
    ],
    "answer": 0,
    "explanation": "ISO 42001 introduces governance for  AI-related assets. \u00a9 2025 Manoj Kumar | Shared for educational and professional reference  https://linkedin.com/in/mkrj"
  },
  {
    "id": 10094,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "The \u201cright to be forgotten\u201d applies primarily to:",
    "options": [
      "GDPR compliance",
      "SOX records",
      "PCI cardholder data",
      "HIPAA logs"
    ],
    "answer": 0,
    "explanation": "GDPR Article 17 grants individuals deletion  rights."
  },
  {
    "id": 10095,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "To ensure confidentiality of printed classified reports:",
    "options": [
      "Secure print release + locked bins",
      "Automatic shredders disabled",
      "Color printing only",
      "Public printers"
    ],
    "answer": 0,
    "explanation": "Physical document control prevents leakage."
  },
  {
    "id": 10096,
    "domain": 2,
    "domain_name": "Asset Security",
    "scenario": "General CISSP Concept Review",
    "question": "Data owners should review classifications:",
    "options": [
      "Periodically or upon major change",
      "Once at creation only",
      "Every decade",
      "Never"
    ],
    "answer": 0,
    "explanation": "Periodic review keeps classifications  current."
  },
  {
    "id": 10097,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "What is \u201cdata lineage\u201d?",
    "options": [
      "The historical flow of data through systems",
      "Encryption method",
      "Access pattern",
      "User group"
    ],
    "answer": 0,
    "explanation": "Lineage tracks data origin and transformations."
  },
  {
    "id": 10098,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "A media control policy should cover:",
    "options": [
      "Labeling, transport, storage, and destruction",
      "Procurement",
      "Power use",
      "Hiring practices"
    ],
    "answer": 0,
    "explanation": "Controls life-cycle of physical and  digital media."
  },
  {
    "id": 10099,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which process validates third-party handling  of your organization\u2019s data? \u00a9 2025 Manoj Kumar | Shared for educational and professional reference  https://linkedin.com/in/mkrj",
    "options": [
      "Vendor risk assessment",
      "Security awareness",
      "Patch audit",
      "DR testing"
    ],
    "answer": 0,
    "explanation": "Assess vendors for compliance with contractual  data protection."
  },
  {
    "id": 10100,
    "domain": 2,
    "domain_name": "Asset Security",
    "scenario": "General CISSP Concept Review",
    "question": "Data classification directly supports which CIA component?",
    "options": [
      "Confidentiality",
      "Integrity",
      "Availability",
      "Non-repudiation"
    ],
    "answer": 0,
    "explanation": "Classification dictates confidentiality  safeguards. DOMAIN 3 \u2013 Security Architecture and Engineering (Questions 101\u2013150) \u00a9 2025 Manoj Kumar | Shared for educational and professional reference  https://linkedin.com/in/mkrj"
  },
  {
    "id": 10101,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which security model enforces \u201cno read-up, no write-down\u201d?",
    "options": [
      "Bell-LaPadula",
      "Biba",
      "Clark-Wilson",
      "Brewer-Nash"
    ],
    "answer": 0,
    "explanation": "Bell-LaPadula maintains confidentiality."
  },
  {
    "id": 10102,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "\u201cNo write-up, no read-down\u201d describes:",
    "options": [
      "Biba Integrity Model",
      "Bell-LaPadula",
      "Clark-Wilson",
      "Lattice Model"
    ],
    "answer": 0,
    "explanation": "Biba preserves integrity hierarchy."
  },
  {
    "id": 10103,
    "domain": 3,
    "domain_name": "Security Architecture and Engineering",
    "scenario": "General CISSP Concept Review",
    "question": "Clark-Wilson model emphasizes:",
    "options": [
      "Mandatory Access Control",
      "Well-formed transactions and separation of duties",
      "Multilevel confidentiality",
      "Non-interference"
    ],
    "answer": 1,
    "explanation": "Prevents fraud through integrity controls."
  },
  {
    "id": 10104,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Trusted Computing Base (TCB) consists of:",
    "options": [
      "All protection mechanisms enforcing policy",
      "Entire OS code",
      "User applications",
      "Network firewalls"
    ],
    "answer": 0,
    "explanation": "TCB = hardware, firmware, and software  ensuring security."
  },
  {
    "id": 10105,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Security kernel function:",
    "options": [
      "Enforce reference monitor concept",
      "Handle GUI",
      "Encrypt traffic",
      "Manage power"
    ],
    "answer": 0,
    "explanation": "Kernel mediates all access per policy."
  },
  {
    "id": 10106,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Reference monitor must be: \u00a9 2025 Manoj Kumar | Shared for educational and professional reference  https://linkedin.com/in/mkrj",
    "options": [
      "Tamper-proof, always invoked, verifiable",
      "Optional, invisible",
      "Application-level only",
      "Randomly audited"
    ],
    "answer": 0,
    "explanation": "Three properties define trusted enforcement."
  },
  {
    "id": 10107,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "TOC/TOU (Time-of-Check/Time-of-Use) flaw relates to:",
    "options": [
      "Race conditions",
      "Buffer overflow",
      "Injection",
      "Privilege escalation only"
    ],
    "answer": 0,
    "explanation": "Occurs when state changes between check  & use."
  },
  {
    "id": 10108,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which control mitigates electromagnetic emanation risk?",
    "options": [
      "TEMPEST shielding",
      "TLS",
      "VPN",
      "VLAN"
    ],
    "answer": 0,
    "explanation": "TEMPEST standards limit signal leakage."
  },
  {
    "id": 10109,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which hardware security module provides cryptographic key isolation?",
    "options": [
      "TPM/HSM",
      "CPU cache",
      "SSD controller",
      "BIOS"
    ],
    "answer": 0,
    "explanation": "HSMs protect keys from exposure."
  },
  {
    "id": 10110,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "A side-channel attack exploits:",
    "options": [
      "Timing or power usage patterns",
      "Source code defects",
      "Social engineering",
      "DNS misconfigurations"
    ],
    "answer": 0,
    "explanation": "Observes indirect information from hardware."
  },
  {
    "id": 10111,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "What design principle ensures minimal exposure?",
    "options": [
      "Economy of mechanism and least privilege",
      "Obfuscation",
      "Complexity",
      "Denial by default"
    ],
    "answer": 0,
    "explanation": "Simpler, minimal designs reduce risk."
  },
  {
    "id": 10112,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Layering and abstraction contribute to: \u00a9 2025 Manoj Kumar | Shared for educational and professional reference  https://linkedin.com/in/mkrj",
    "options": [
      "Defense in depth",
      "Performance only",
      "Usability",
      "AI bias testing"
    ],
    "answer": 0,
    "explanation": "Multiple layers enhance resilience."
  },
  {
    "id": 10113,
    "domain": 2,
    "domain_name": "Asset Security",
    "scenario": "General CISSP Concept Review",
    "question": "Which security mode allows users with the same clearance but different need-to-know?",
    "options": [
      "Compartmented Mode",
      "System High",
      "Dedicated Mode",
      "Multilevel Mode"
    ],
    "answer": 0,
    "explanation": "Compartments restrict by category."
  },
  {
    "id": 10114,
    "domain": 3,
    "domain_name": "Security Architecture and Engineering",
    "scenario": "General CISSP Concept Review",
    "question": "EAL levels in Common Criteria measure:",
    "options": [
      "Assurance strength from 1 to 7",
      "Encryption strength",
      "OS versions",
      "Confidentiality classification"
    ],
    "answer": 0,
    "explanation": "Higher EAL = greater evaluation rigor."
  },
  {
    "id": 10115,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Security by design principle means:",
    "options": [
      "Integrating controls early in SDLC",
      "Testing after deployment",
      "Outsourcing security",
      "Manual patching"
    ],
    "answer": 0,
    "explanation": "Embed security throughout architecture."
  },
  {
    "id": 10116,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which cryptographic module validation program is required for U.S. federal use?",
    "options": [
      "FIPS 140-3",
      "ISO 9001",
      "SOC 2",
      "PCI"
    ],
    "answer": 0,
    "explanation": "FIPS 140-3 certifies cryptographic modules."
  },
  {
    "id": 10117,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which architecture isolates workloads via hardware virtualization?",
    "options": [
      "Hypervisor-based VM isolation",
      "Monolithic kernel",
      "Mesh networking",
      "Blockchain"
    ],
    "answer": 0,
    "explanation": "Hypervisors enforce guest separation. \u00a9 2025 Manoj Kumar | Shared for educational and professional reference  https://linkedin.com/in/mkrj"
  },
  {
    "id": 10118,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Cloud security architecture must ensure:",
    "options": [
      "Isolation, trust boundaries, encryption, and IAM integration",
      "Public access to management plane",
      "Shared keys",
      "Flat networks"
    ],
    "answer": 0,
    "explanation": "Architecture defines multitenant segregation."
  },
  {
    "id": 10119,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "AI model poisoning occurs when:",
    "options": [
      "Training data is maliciously altered",
      "GPU overheats",
      "Logs are deleted",
      "Model weights compress"
    ],
    "answer": 0,
    "explanation": "Poisoning manipulates learning outcomes."
  },
  {
    "id": 10120,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Secure enclave technology (e.g., Intel SGX) provides:",
    "options": [
      "Encrypted execution environments",
      "Faster CPU scheduling",
      "Memory overclocking",
      "Redundant power"
    ],
    "answer": 0,
    "explanation": "Enclaves isolate sensitive operations."
  },
  {
    "id": 10121,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which architecture pattern separates data, control, and presentation?",
    "options": [
      "MVC (Model\u2013View\u2013Controller)",
      "Monolith",
      "Ring 0 kernel",
      "Pipeline"
    ],
    "answer": 0,
    "explanation": "Supports modular security enforcement."
  },
  {
    "id": 10122,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Security domains are defined by:",
    "options": [
      "Common security policies and trust levels",
      "Data formats",
      "Server vendors",
      "Subnet IDs"
    ],
    "answer": 0,
    "explanation": "Domains share identical rules and clearance."
  },
  {
    "id": 10123,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "The Orange Book (TCSEC) introduced: \u00a9 2025 Manoj Kumar | Shared for educational and professional reference  https://linkedin.com/in/mkrj",
    "options": [
      "Security evaluation classes (D through A1)",
      "GDPR compliance",
      "OWASP Top 10",
      "ISO 27001"
    ],
    "answer": 0,
    "explanation": "Defined formal U.S. system evaluation  criteria."
  },
  {
    "id": 10124,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "The concept \u201cfail secure\u201d means:",
    "options": [
      "Maintain security when failures occur",
      "Stay available at all cost",
      "Allow guest access",
      "Disable encryption"
    ],
    "answer": 0,
    "explanation": "Systems default to secure states under  failure."
  },
  {
    "id": 10125,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which concept ensures every subject/object access checked?",
    "options": [
      "Complete mediation",
      "Open design",
      "Least privilege",
      "Economy of mechanism"
    ],
    "answer": 0,
    "explanation": "Every access request must be validated."
  },
  {
    "id": 10126,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "What is the main purpose of a security perimeter?",
    "options": [
      "Define trusted boundaries between zones",
      "Store logs",
      "Enhance bandwidth",
      "Replace authentication"
    ],
    "answer": 0,
    "explanation": "Segmentation reduces exposure."
  },
  {
    "id": 10127,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "In AI model architecture, differential privacy protects:",
    "options": [
      "Individual training data records",
      "GPU firmware",
      "Cloud costs",
      "Log files"
    ],
    "answer": 0,
    "explanation": "DP adds noise to prevent reverse identification."
  },
  {
    "id": 10128,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which term defines resistance to change under duress?",
    "options": [
      "Fault tolerance",
      "Resilience",
      "Availability",
      "Redundancy"
    ],
    "answer": 1,
    "explanation": "Resilience covers adaptive recovery  from disruptions."
  },
  {
    "id": 10129,
    "domain": 7,
    "domain_name": "Security Operations",
    "scenario": "General CISSP Concept Review",
    "question": "What is an example of physical security control? \u00a9 2025 Manoj Kumar | Shared for educational and professional reference  https://linkedin.com/in/mkrj",
    "options": [
      "CCTV monitoring",
      "Encryption",
      "Firewall",
      "Authentication"
    ],
    "answer": 0,
    "explanation": "Physical layer controls deter intrusion."
  },
  {
    "id": 10130,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Electromagnetic shielding prevents:",
    "options": [
      "Emanation eavesdropping",
      "Hardware overheating",
      "Cable cuts",
      "Network congestion"
    ],
    "answer": 0,
    "explanation": "TEMPEST or Faraday cages protect signals."
  },
  {
    "id": 10131,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which control enforces need-to-know?",
    "options": [
      "Discretionary Access Control (DAC)",
      "Mandatory Access Control (MAC)",
      "Role-Based Access Control (RBAC)",
      "Attribute-Based Access Control (ABAC)"
    ],
    "answer": 1,
    "explanation": "MAC enforces policy via labels and clearances."
  },
  {
    "id": 10132,
    "domain": 4,
    "domain_name": "Communication and Network Security",
    "scenario": "General CISSP Concept Review",
    "question": "In layered defense, a firewall is:",
    "options": [
      "Perimeter preventive control",
      "Detective",
      "Directive",
      "Recovery"
    ],
    "answer": 0,
    "explanation": "Firewalls prevent unauthorized traffic."
  },
  {
    "id": 10133,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Security architecture diagrams should include:",
    "options": [
      "Trust zones and control layers",
      "Marketing content",
      "Budget",
      "HR data"
    ],
    "answer": 0,
    "explanation": "Visualizing boundaries helps risk analysis."
  },
  {
    "id": 10134,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Single point of failure violates:",
    "options": [
      "Availability principle",
      "Confidentiality",
      "Integrity",
      "Non-repudiation"
    ],
    "answer": 0,
    "explanation": "SPOFs reduce system uptime. \u00a9 2025 Manoj Kumar | Shared for educational and professional reference  https://linkedin.com/in/mkrj"
  },
  {
    "id": 10135,
    "domain": 3,
    "domain_name": "Security Architecture and Engineering",
    "scenario": "General CISSP Concept Review",
    "question": "Tokenization differs from encryption by:",
    "options": [
      "Substituting tokens instead of reversible cipher",
      "Using keys",
      "Storing ciphertext",
      "Integrity focus only"
    ],
    "answer": 0,
    "explanation": "Tokens map to data without revealing  content."
  },
  {
    "id": 10136,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "What protects firmware integrity on boot?",
    "options": [
      "Secure boot + signed images",
      "BIOS password only",
      "RAID",
      "TPM disabled"
    ],
    "answer": 0,
    "explanation": "Verifies digital signatures before load."
  },
  {
    "id": 10137,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "The principle of \u201copen design\u201d suggests:",
    "options": [
      "Security should not rely on secrecy of design",
      "Keep algorithms hidden",
      "Use proprietary logic",
      "Avoid peer review"
    ],
    "answer": 0,
    "explanation": "Transparency enables stronger assurance."
  },
  {
    "id": 10138,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "In fault-tolerant systems, MTBF represents:",
    "options": [
      "Mean Time Between Failures",
      "Maximum Time Before Failure",
      "Mean Time Backup Frequency",
      "Minimum Testing Baseline"
    ],
    "answer": 0,
    "explanation": "MTBF measures component reliability."
  },
  {
    "id": 10139,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "AI model explainability supports:",
    "options": [
      "Transparency and trust in decisions",
      "Speed optimization",
      "Encryption",
      "DR readiness"
    ],
    "answer": 0,
    "explanation": "Interpretability enables accountable  governance."
  },
  {
    "id": 10140,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Cloud hardware root-of-trust ensures: \u00a9 2025 Manoj Kumar | Shared for educational and professional reference  https://linkedin.com/in/mkrj",
    "options": [
      "Verified boot and cryptographic integrity",
      "Performance boost",
      "Data replication",
      "Storage compression"
    ],
    "answer": 0,
    "explanation": "Hardware trust anchors integrity checks."
  },
  {
    "id": 10141,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "ISO 42001 complements which management system?",
    "options": [
      "ISO 27001 (Information Security Management System)",
      "ISO 9001",
      "ISO 22301",
      "ISO 50001"
    ],
    "answer": 0,
    "explanation": "It extends ISMS to AI governance."
  },
  {
    "id": 10142,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Air-gapped systems provide:",
    "options": [
      "Physical network isolation",
      "Remote connectivity",
      "Performance tuning",
      "Cloud access"
    ],
    "answer": 0,
    "explanation": "Disconnected systems prevent remote  compromise."
  },
  {
    "id": 10143,
    "domain": 3,
    "domain_name": "Security Architecture and Engineering",
    "scenario": "General CISSP Concept Review",
    "question": "A secure design review should focus on:",
    "options": [
      "Threat modeling and control validation",
      "UI colors",
      "Marketing",
      "Cost saving"
    ],
    "answer": 0,
    "explanation": "Identifies vulnerabilities early."
  },
  {
    "id": 10144,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "AI adversarial examples exploit:",
    "options": [
      "Model prediction weaknesses via crafted inputs",
      "Network latency",
      "Key reuse",
      "Backup schedules"
    ],
    "answer": 0,
    "explanation": "Attackers manipulate model outputs."
  },
  {
    "id": 10145,
    "domain": 3,
    "domain_name": "Security Architecture and Engineering",
    "scenario": "General CISSP Concept Review",
    "question": "Homomorphic encryption allows:",
    "options": [
      "Computation on encrypted data",
      "Keyless encryption",
      "Token substitution",
      "Only decryption in memory"
    ],
    "answer": 0,
    "explanation": "Enables secure processing without revealing  data."
  },
  {
    "id": 10146,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Zero Trust Architecture principle: \u00a9 2025 Manoj Kumar | Shared for educational and professional reference  https://linkedin.com/in/mkrj",
    "options": [
      "Never trust, always verify",
      "Trust perimeter",
      "Default open access",
      "Flat network"
    ],
    "answer": 0,
    "explanation": "Every request is authenticated and authorized."
  },
  {
    "id": 10147,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which is a security domain bridging AI and cloud?",
    "options": [
      "Confidential computing",
      "Open Wi-Fi",
      "Shared GPUs without encryption",
      "Unmonitored APIs"
    ],
    "answer": 0,
    "explanation": "Protects workloads during computation."
  },
  {
    "id": 10148,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "In system design, economy of mechanism means:",
    "options": [
      "Keep designs simple and small",
      "Add redundancy",
      "Use complex controls",
      "Obfuscate code"
    ],
    "answer": 0,
    "explanation": "Simplicity enhances assurance."
  },
  {
    "id": 10149,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Microkernel architecture improves:",
    "options": [
      "Isolation and fault tolerance",
      "Speed by disabling security",
      "Single-point control",
      "UI experience"
    ],
    "answer": 0,
    "explanation": "Minimal kernel reduces attack surface."
  },
  {
    "id": 10150,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Trusted path ensures:",
    "options": [
      "Secure communication between user and TCB",
      "Backup copies",
      "Patch verification",
      "Logging"
    ],
    "answer": 0,
    "explanation": "Prevents interception of authentication  inputs. DOMAIN 4 \u2013 Communication and Network Security (Questions 151\u2013200) \u00a9 2025 Manoj Kumar | Shared for educational and professional reference  https://linkedin.com/in/mkrj"
  },
  {
    "id": 10151,
    "domain": 4,
    "domain_name": "Communication and Network Security",
    "scenario": "General CISSP Concept Review",
    "question": "The primary goal of network segmentation is:",
    "options": [
      "Improve bandwidth",
      "Reduce attack surface and contain breaches",
      "Simplify routing",
      "Support VLAN naming"
    ],
    "answer": 1,
    "explanation": "Segmentation limits lateral movement  and isolates sensitive systems."
  },
  {
    "id": 10152,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "The function of a DMZ (demilitarized zone) is to:",
    "options": [
      "Host public-facing services isolated from internal networks",
      "Provide VPN access",
      "Store backups",
      "Manage logs"
    ],
    "answer": 0,
    "explanation": "DMZ separates external and internal  traffic boundaries."
  },
  {
    "id": 10153,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which protocol operates at the transport layer?",
    "options": [
      "TCP",
      "IP",
      "ARP",
      "ICMP"
    ],
    "answer": 0,
    "explanation": "TCP and UDP are Layer 4 transport protocols."
  },
  {
    "id": 10154,
    "domain": 3,
    "domain_name": "Security Architecture and Engineering",
    "scenario": "General CISSP Concept Review",
    "question": "Which OSI layer handles encryption and session establishment?",
    "options": [
      "Session and Presentation",
      "Application",
      "Transport",
      "Network"
    ],
    "answer": 0,
    "explanation": "Session manages connections; presentation  manages encryption/encoding."
  },
  {
    "id": 10155,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which device filters packets based on Layer 3 addresses?",
    "options": [
      "Router",
      "Switch",
      "Firewall",
      "Bridge"
    ],
    "answer": 0,
    "explanation": "Routers route traffic based on IP addressing."
  },
  {
    "id": 10156,
    "domain": 4,
    "domain_name": "Communication and Network Security",
    "scenario": "General CISSP Concept Review",
    "question": "Stateful firewalls differ from stateless because they: \u00a9 2025 Manoj Kumar | Shared for educational and professional reference  https://linkedin.com/in/mkrj",
    "options": [
      "Track connection states and context",
      "Only inspect headers",
      "Never inspect traffic",
      "Use static rules only"
    ],
    "answer": 0,
    "explanation": "Stateful firewalls analyze session state."
  },
  {
    "id": 10157,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "A proxy server primarily provides:",
    "options": [
      "Traffic mediation and content caching",
      "Encryption",
      "VLAN trunking",
      "Bandwidth control only"
    ],
    "answer": 0,
    "explanation": "Proxies intercept and relay requests  for security and caching."
  },
  {
    "id": 10158,
    "domain": 4,
    "domain_name": "Communication and Network Security",
    "scenario": "General CISSP Concept Review",
    "question": "VPNs secure remote connections via:",
    "options": [
      "Encrypted tunnels over public networks",
      "Air gaps",
      "Open ports",
      "None of the above"
    ],
    "answer": 0,
    "explanation": "VPNs use encryption protocols like IPsec  or SSL/TLS."
  },
  {
    "id": 10159,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which wireless security protocol provides the strongest protection?",
    "options": [
      "WPA3",
      "WEP",
      "WPA",
      "WPA2"
    ],
    "answer": 0,
    "explanation": "WPA3 uses SAE and 192-bit encryption."
  },
  {
    "id": 10160,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "The primary weakness of WEP was:",
    "options": [
      "Reuse of IVs and weak RC4 implementation",
      "AES key size",
      "MAC filtering",
      "WPA compatibility"
    ],
    "answer": 0,
    "explanation": "WEP\u2019s static IVs led to key recovery  attacks."
  },
  {
    "id": 10161,
    "domain": 4,
    "domain_name": "Communication and Network Security",
    "scenario": "General CISSP Concept Review",
    "question": "Which device prevents MAC flooding on switches?",
    "options": [
      "Port security limiting MAC addresses",
      "Firewalls",
      "IDS",
      "Routers"
    ],
    "answer": 0,
    "explanation": "Port security restricts learned MACs."
  },
  {
    "id": 10162,
    "domain": 4,
    "domain_name": "Communication and Network Security",
    "scenario": "General CISSP Concept Review",
    "question": "Network Access Control (NAC) ensures: \u00a9 2025 Manoj Kumar | Shared for educational and professional reference  https://linkedin.com/in/mkrj",
    "options": [
      "Only compliant devices connect to network",
      "File sharing",
      "Email relay",
      "Backup transfer"
    ],
    "answer": 0,
    "explanation": "NAC enforces posture assessment and  authorization."
  },
  {
    "id": 10163,
    "domain": 4,
    "domain_name": "Communication and Network Security",
    "scenario": "General CISSP Concept Review",
    "question": "Which security architecture principle applies to cloud network design?",
    "options": [
      "Zero Trust segmentation and identity enforcement",
      "Flat network topology",
      "Shared admin keys",
      "Default open ports"
    ],
    "answer": 0,
    "explanation": "Cloud security relies on microsegmentation  and least privilege."
  },
  {
    "id": 10164,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "The term \u201cman-in-the-middle attack\u201d means:",
    "options": [
      "Intercepting communications between endpoints",
      "Denying service",
      "Spoofing MAC addresses only",
      "SQL injection"
    ],
    "answer": 0,
    "explanation": "MITM compromises data confidentiality/integrity."
  },
  {
    "id": 10165,
    "domain": 4,
    "domain_name": "Communication and Network Security",
    "scenario": "General CISSP Concept Review",
    "question": "DNSSEC prevents:",
    "options": [
      "Cache poisoning",
      "DDoS",
      "Traffic flooding",
      "SQL injection"
    ],
    "answer": 0,
    "explanation": "DNSSEC uses digital signatures to verify  records."
  },
  {
    "id": 10166,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which technology inspects encrypted traffic at enterprise gateways?",
    "options": [
      "SSL/TLS decryption proxy",
      "IDS",
      "VLAN trunk",
      "Load balancer"
    ],
    "answer": 0,
    "explanation": "SSL inspection proxies terminate and  re-encrypt traffic."
  },
  {
    "id": 10167,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following is a Layer 2 attack?",
    "options": [
      "ARP spoofing",
      "DNS poisoning",
      "SYN flood",
      "SQL injection"
    ],
    "answer": 0,
    "explanation": "ARP spoofing exploits Ethernet address  resolution. \u00a9 2025 Manoj Kumar | Shared for educational and professional reference  https://linkedin.com/in/mkrj"
  },
  {
    "id": 10168,
    "domain": 4,
    "domain_name": "Communication and Network Security",
    "scenario": "General CISSP Concept Review",
    "question": "IPsec transport mode encrypts:",
    "options": [
      "Payload only",
      "Header and payload",
      "Application data only",
      "Metadata"
    ],
    "answer": 0,
    "explanation": "Transport mode protects data between  hosts, not outer IP header."
  },
  {
    "id": 10169,
    "domain": 4,
    "domain_name": "Communication and Network Security",
    "scenario": "General CISSP Concept Review",
    "question": "The purpose of NAT (Network Address Translation) is:",
    "options": [
      "Map internal private IPs to public IPs",
      "Encrypt traffic",
      "Route based on domain",
      "Filter spam"
    ],
    "answer": 0,
    "explanation": "NAT masks internal addressing."
  },
  {
    "id": 10170,
    "domain": 4,
    "domain_name": "Communication and Network Security",
    "scenario": "General CISSP Concept Review",
    "question": "VLANs improve security by:",
    "options": [
      "Logically segmenting broadcast domains",
      "Encrypting traffic",
      "Replacing firewalls",
      "Enabling DHCP"
    ],
    "answer": 0,
    "explanation": "VLANs separate networks logically."
  },
  {
    "id": 10171,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Port 443 is used for:",
    "options": [
      "HTTPS",
      "HTTP",
      "FTP",
      "SSH"
    ],
    "answer": 0,
    "explanation": "HTTPS uses TLS on port 443."
  },
  {
    "id": 10172,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "SIEM systems primarily provide:",
    "options": [
      "Correlation and analysis of security events",
      "VPN management",
      "Backup control",
      "Email relay"
    ],
    "answer": 0,
    "explanation": "SIEM aggregates logs for detection and  compliance."
  },
  {
    "id": 10173,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "A honeypot is used to: \u00a9 2025 Manoj Kumar | Shared for educational and professional reference  https://linkedin.com/in/mkrj",
    "options": [
      "Divert attackers and gather intelligence",
      "Secure production data",
      "Test backups",
      "Scan ports"
    ],
    "answer": 0,
    "explanation": "Honeypots attract adversaries for monitoring."
  },
  {
    "id": 10174,
    "domain": 4,
    "domain_name": "Communication and Network Security",
    "scenario": "General CISSP Concept Review",
    "question": "Which protocol provides message integrity and authentication in IPsec?",
    "options": [
      "AH (Authentication Header)",
      "ESP",
      "TLS",
      "SSH"
    ],
    "answer": 0,
    "explanation": "AH ensures integrity/authentication  only."
  },
  {
    "id": 10175,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "For high-security remote admin, use:",
    "options": [
      "SSH with key authentication",
      "Telnet",
      "FTP",
      "HTTP"
    ],
    "answer": 0,
    "explanation": "SSH provides encrypted command-line  sessions."
  },
  {
    "id": 10176,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "A DDoS attack targets:",
    "options": [
      "Availability",
      "Confidentiality",
      "Integrity",
      "Non-repudiation"
    ],
    "answer": 0,
    "explanation": "Flooding resources denies service to  legitimate users."
  },
  {
    "id": 10177,
    "domain": 4,
    "domain_name": "Communication and Network Security",
    "scenario": "General CISSP Concept Review",
    "question": "What control mitigates eavesdropping on wireless networks?",
    "options": [
      "WPA3 encryption",
      "Open authentication",
      "MAC broadcast",
      "SSID hiding"
    ],
    "answer": 0,
    "explanation": "WPA3 ensures encrypted communication."
  },
  {
    "id": 10178,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "SSL/TLS handshake authenticates:",
    "options": [
      "Server (and optionally client) identity",
      "Only encryption algorithms",
      "Application payload",
      "IP addresses"
    ],
    "answer": 0,
    "explanation": "Certificates validate endpoint identities."
  },
  {
    "id": 10179,
    "domain": 4,
    "domain_name": "Communication and Network Security",
    "scenario": "General CISSP Concept Review",
    "question": "What is the primary purpose of a VPN concentrator? \u00a9 2025 Manoj Kumar | Shared for educational and professional reference  https://linkedin.com/in/mkrj",
    "options": [
      "Aggregate multiple secure tunnels",
      "Route email",
      "Host web apps",
      "Monitor logs"
    ],
    "answer": 0,
    "explanation": "VPN concentrators manage large-scale  connections."
  },
  {
    "id": 10180,
    "domain": 4,
    "domain_name": "Communication and Network Security",
    "scenario": "General CISSP Concept Review",
    "question": "A network IDS functions by:",
    "options": [
      "Monitoring and analyzing network traffic for anomalies",
      "Blocking packets",
      "Enforcing policies",
      "Encrypting data"
    ],
    "answer": 0,
    "explanation": "IDS detects suspicious activities."
  },
  {
    "id": 10181,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "IPS differs from IDS because it:",
    "options": [
      "Takes active response to block malicious traffic",
      "Only logs events",
      "Works offline",
      "Uses signatures only"
    ],
    "answer": 0,
    "explanation": "IPS actively prevents intrusions."
  },
  {
    "id": 10182,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "MPLS improves:",
    "options": [
      "Traffic engineering and performance in WANs",
      "Application security",
      "Firewall management",
      "Encryption"
    ],
    "answer": 0,
    "explanation": "MPLS routes efficiently using labels."
  },
  {
    "id": 10183,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "A broadcast storm occurs when:",
    "options": [
      "Loops cause repeated broadcasts",
      "DNS is down",
      "Firewall fails",
      "Encryption fails"
    ],
    "answer": 0,
    "explanation": "Layer 2 loops overwhelm bandwidth."
  },
  {
    "id": 10184,
    "domain": 4,
    "domain_name": "Communication and Network Security",
    "scenario": "General CISSP Concept Review",
    "question": "Network forensics focuses on:",
    "options": [
      "Capturing, preserving, and analyzing packet evidence",
      "Malware disassembly",
      "AI training",
      "Patching"
    ],
    "answer": 0,
    "explanation": "Forensics reconstructs events from traffic  logs. \u00a9 2025 Manoj Kumar | Shared for educational and professional reference  https://linkedin.com/in/mkrj"
  },
  {
    "id": 10185,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "TLS uses which handshake process?",
    "options": [
      "Public key exchange to derive session keys",
      "Hashing only",
      "Symmetric encryption without negotiation",
      "None"
    ],
    "answer": 0,
    "explanation": "TLS handshake establishes symmetric  keys securely."
  },
  {
    "id": 10186,
    "domain": 4,
    "domain_name": "Communication and Network Security",
    "scenario": "General CISSP Concept Review",
    "question": "AI red-teaming in networked AI systems focuses on:",
    "options": [
      "Testing AI model endpoints for abuse",
      "Stress testing routers",
      "Training data labeling",
      "Wi-Fi tuning"
    ],
    "answer": 0,
    "explanation": "Validates resilience of AI-enabled APIs  and inference endpoints."
  },
  {
    "id": 10187,
    "domain": 4,
    "domain_name": "Communication and Network Security",
    "scenario": "General CISSP Concept Review",
    "question": "SDN (Software Defined Networking) enhances security by:",
    "options": [
      "Centralized control and dynamic policy enforcement",
      "Hard-coded routing",
      "Manual rule sets",
      "Flat networks"
    ],
    "answer": 0,
    "explanation": "SDN controllers adaptively manage flow  rules."
  },
  {
    "id": 10188,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which protocol secures email transmission between servers?",
    "options": [
      "STARTTLS",
      "FTP",
      "POP3",
      "IMAP"
    ],
    "answer": 0,
    "explanation": "STARTTLS upgrades SMTP connections to  encrypted channels."
  },
  {
    "id": 10189,
    "domain": 4,
    "domain_name": "Communication and Network Security",
    "scenario": "General CISSP Concept Review",
    "question": "DNS amplification is a type of:",
    "options": [
      "DDoS attack",
      "Spoofing",
      "Social engineering",
      "SQL injection"
    ],
    "answer": 0,
    "explanation": "Attackers exploit open resolvers for  reflection."
  },
  {
    "id": 10190,
    "domain": 4,
    "domain_name": "Communication and Network Security",
    "scenario": "General CISSP Concept Review",
    "question": "VLAN hopping exploits: \u00a9 2025 Manoj Kumar | Shared for educational and professional reference  https://linkedin.com/in/mkrj",
    "options": [
      "Misconfigured trunk ports",
      "Strong segmentation",
      "TLS encryption",
      "DNSSEC"
    ],
    "answer": 0,
    "explanation": "Attackers inject frames to bypass VLAN  boundaries."
  },
  {
    "id": 10191,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "What ensures email message integrity?",
    "options": [
      "DKIM signatures",
      "SPF",
      "MX record",
      "DNS cache"
    ],
    "answer": 0,
    "explanation": "DKIM adds cryptographic validation."
  },
  {
    "id": 10192,
    "domain": 4,
    "domain_name": "Communication and Network Security",
    "scenario": "General CISSP Concept Review",
    "question": "The function of a CASB in network security is to:",
    "options": [
      "Monitor and control cloud app usage",
      "Manage routers",
      "Replace antivirus",
      "Encrypt drives"
    ],
    "answer": 0,
    "explanation": "CASB enforces SaaS visibility and policy  compliance."
  },
  {
    "id": 10193,
    "domain": 4,
    "domain_name": "Communication and Network Security",
    "scenario": "General CISSP Concept Review",
    "question": "In Zero Trust networking, perimeter security is replaced by:",
    "options": [
      "Continuous identity-based verification",
      "Flat VLANs",
      "Firewalls only",
      "VPN tunnels alone"
    ],
    "answer": 0,
    "explanation": "Every access is contextually validated."
  },
  {
    "id": 10194,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "AI model inference APIs should enforce:",
    "options": [
      "API authentication and input validation",
      "Public open endpoints",
      "Data caching",
      "Disabling logs"
    ],
    "answer": 0,
    "explanation": "Prevent prompt or injection attacks."
  },
  {
    "id": 10195,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Secure email gateways typically perform:",
    "options": [
      "Spam filtering, malware scanning, and DLP",
      "File storage",
      "DNS translation",
      "IP routing"
    ],
    "answer": 0,
    "explanation": "SEG protects email flows."
  },
  {
    "id": 10196,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "What is the best protection against replay attacks? \u00a9 2025 Manoj Kumar | Shared for educational and professional reference  https://linkedin.com/in/mkrj",
    "options": [
      "Nonce and timestamp validation",
      "Encryption only",
      "NAT",
      "Proxy servers"
    ],
    "answer": 0,
    "explanation": "Unique session tokens prevent reuse."
  },
  {
    "id": 10197,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "A reverse proxy is used to:",
    "options": [
      "Protect backend servers and load balance traffic",
      "Inspect outbound traffic",
      "Encrypt data at rest",
      "Filter spam"
    ],
    "answer": 0,
    "explanation": "Reverse proxies hide internal hosts."
  },
  {
    "id": 10198,
    "domain": 4,
    "domain_name": "Communication and Network Security",
    "scenario": "General CISSP Concept Review",
    "question": "IPSec ESP mode provides:",
    "options": [
      "Confidentiality and integrity",
      "Authentication only",
      "Compression",
      "Key exchange"
    ],
    "answer": 0,
    "explanation": "ESP encrypts and authenticates IP payloads."
  },
  {
    "id": 10199,
    "domain": 4,
    "domain_name": "Communication and Network Security",
    "scenario": "General CISSP Concept Review",
    "question": "Which standard governs network device secure management?",
    "options": [
      "NIST SP 800-115",
      "ISO 27033",
      "ISO 27701",
      "ISO 9001"
    ],
    "answer": 1,
    "explanation": "ISO 27033 details network security design  and management."
  },
  {
    "id": 10200,
    "domain": 4,
    "domain_name": "Communication and Network Security",
    "scenario": "General CISSP Concept Review",
    "question": "Network egress filtering ensures:",
    "options": [
      "Unauthorized data doesn\u2019t leave the network",
      "Faster internet",
      "DNS caching",
      "Load balancing"
    ],
    "answer": 0,
    "explanation": "Monitors outbound traffic for data exfiltration. \u00a9 2025 Manoj Kumar | Shared for educational and professional reference  https://linkedin.com/in/mkrj DOMAIN 5 \u2013 Identity and Access Management (IAM) (Questions 201\u2013250)"
  },
  {
    "id": 10201,
    "domain": 5,
    "domain_name": "Identity and Access Management (IAM)",
    "scenario": "General CISSP Concept Review",
    "question": "What is the primary objective of Identity and Access Management (IAM)?",
    "options": [
      "Simplify user training",
      "Ensure that the right individuals access the right resources at the right time",
      "Increase network throughput",
      "Monitor physical entry points"
    ],
    "answer": 1,
    "explanation": "IAM enforces authentication, authorization,  and accountability."
  },
  {
    "id": 10202,
    "domain": 5,
    "domain_name": "Identity and Access Management (IAM)",
    "scenario": "General CISSP Concept Review",
    "question": "Which authentication factor is represented by a fingerprint?",
    "options": [
      "Something you know",
      "Something you have",
      "Something you are",
      "Somewhere you are"
    ],
    "answer": 2,
    "explanation": "Biometrics are \u201csomething you are.\u201d"
  },
  {
    "id": 10203,
    "domain": 5,
    "domain_name": "Identity and Access Management (IAM)",
    "scenario": "General CISSP Concept Review",
    "question": "Multi-factor authentication (MFA) must use: \u00a9 2025 Manoj Kumar | Shared for educational and professional reference  https://linkedin.com/in/mkrj",
    "options": [
      "Two or more independent factors from different categories",
      "Multiple passwords",
      "Two usernames",
      "Time-based OTP only"
    ],
    "answer": 0,
    "explanation": "MFA increases assurance by combining  independent factors."
  },
  {
    "id": 10204,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "The principle of least privilege states:",
    "options": [
      "Users get minimal necessary access",
      "All users get admin rights",
      "No user gets any access",
      "Access is assigned randomly"
    ],
    "answer": 0,
    "explanation": "Least privilege limits potential misuse  or compromise."
  },
  {
    "id": 10205,
    "domain": 5,
    "domain_name": "Identity and Access Management (IAM)",
    "scenario": "General CISSP Concept Review",
    "question": "Role-Based Access Control (RBAC) assigns permissions based on:",
    "options": [
      "Job function or role",
      "User location",
      "Device ID",
      "Network address"
    ],
    "answer": 0,
    "explanation": "RBAC groups access according to organizational  roles."
  },
  {
    "id": 10206,
    "domain": 5,
    "domain_name": "Identity and Access Management (IAM)",
    "scenario": "General CISSP Concept Review",
    "question": "Discretionary Access Control (DAC) gives control to:",
    "options": [
      "Data owner",
      "Security officer",
      "System administrator only",
      "Vendor"
    ],
    "answer": 0,
    "explanation": "DAC allows resource owners to decide  access."
  },
  {
    "id": 10207,
    "domain": 5,
    "domain_name": "Identity and Access Management (IAM)",
    "scenario": "General CISSP Concept Review",
    "question": "Mandatory Access Control (MAC) enforces:",
    "options": [
      "Access decisions based on labels and clearances",
      "Discretion of users",
      "Network segments",
      "Time of day"
    ],
    "answer": 0,
    "explanation": "MAC uses classification and sensitivity  labels."
  },
  {
    "id": 10208,
    "domain": 5,
    "domain_name": "Identity and Access Management (IAM)",
    "scenario": "General CISSP Concept Review",
    "question": "Attribute-Based Access Control (ABAC) decisions depend on:",
    "options": [
      "Subject, object, and environmental attributes",
      "Role names only",
      "Group memberships",
      "Usernames"
    ],
    "answer": 0,
    "explanation": "ABAC evaluates contextual attributes  dynamically. \u00a9 2025 Manoj Kumar | Shared for educational and professional reference  https://linkedin.com/in/mkrj"
  },
  {
    "id": 10209,
    "domain": 5,
    "domain_name": "Identity and Access Management (IAM)",
    "scenario": "General CISSP Concept Review",
    "question": "Federated identity allows:",
    "options": [
      "Users to access multiple systems using a single digital identity across domains",
      "Each app to maintain separate credentials",
      "Shared admin passwords",
      "No authentication"
    ],
    "answer": 0,
    "explanation": "Federation enables single sign-on across  trusted organizations."
  },
  {
    "id": 10210,
    "domain": 5,
    "domain_name": "Identity and Access Management (IAM)",
    "scenario": "General CISSP Concept Review",
    "question": "Which protocol supports federated identity exchange?",
    "options": [
      "SAML",
      "ICMP",
      "BGP",
      "FTP"
    ],
    "answer": 0,
    "explanation": "Security Assertion Markup Language (SAML)  enables identity federation."
  },
  {
    "id": 10211,
    "domain": 5,
    "domain_name": "Identity and Access Management (IAM)",
    "scenario": "General CISSP Concept Review",
    "question": "Single Sign-On (SSO) primarily improves:",
    "options": [
      "Usability and user experience while maintaining security",
      "Firewall filtering",
      "DNS resolution",
      "VPN throughput"
    ],
    "answer": 0,
    "explanation": "SSO reduces password fatigue and administrative  burden."
  },
  {
    "id": 10212,
    "domain": 5,
    "domain_name": "Identity and Access Management (IAM)",
    "scenario": "General CISSP Concept Review",
    "question": "OAuth 2.0 is primarily used for:",
    "options": [
      "Authorization delegation",
      "Authentication only",
      "Encryption",
      "Token encryption"
    ],
    "answer": 0,
    "explanation": "OAuth authorizes applications to access  user data without credentials."
  },
  {
    "id": 10213,
    "domain": 5,
    "domain_name": "Identity and Access Management (IAM)",
    "scenario": "General CISSP Concept Review",
    "question": "OpenID Connect (OIDC) adds what to OAuth 2.0?",
    "options": [
      "Authentication layer using ID tokens",
      "Encryption only",
      "Load balancing",
      "Session logging"
    ],
    "answer": 0,
    "explanation": "OIDC extends OAuth to include user identity  verification."
  },
  {
    "id": 10214,
    "domain": 5,
    "domain_name": "Identity and Access Management (IAM)",
    "scenario": "General CISSP Concept Review",
    "question": "Which type of access control lists explicitly defines \u201cdeny\u201d rules? \u00a9 2025 Manoj Kumar | Shared for educational and professional reference  https://linkedin.com/in/mkrj",
    "options": [
      "Discretionary ACL",
      "Mandatory ACL",
      "Role matrix",
      "Network routing table"
    ],
    "answer": 0,
    "explanation": "DAC-based ACLs may contain both allow  and deny entries."
  },
  {
    "id": 10215,
    "domain": 5,
    "domain_name": "Identity and Access Management (IAM)",
    "scenario": "General CISSP Concept Review",
    "question": "Identity proofing refers to:",
    "options": [
      "Verifying an individual\u2019s claimed identity using trusted evidence",
      "Generating encryption keys",
      "Approving role changes",
      "Network configuration"
    ],
    "answer": 0,
    "explanation": "Identity proofing ensures that a user  is legitimate before credential issuance."
  },
  {
    "id": 10216,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which directory protocol uses port 389 by default?",
    "options": [
      "LDAP",
      "SAML",
      "RADIUS",
      "Kerberos"
    ],
    "answer": 0,
    "explanation": "Lightweight Directory Access Protocol  operates on port 389 (or 636 for LDAPS)."
  },
  {
    "id": 10217,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Kerberos prevents credential replay by using:",
    "options": [
      "Time-stamped tickets and symmetric encryption",
      "Digital certificates",
      "Plaintext passwords",
      "Static keys"
    ],
    "answer": 0,
    "explanation": "Kerberos tickets include timestamps  to prevent reuse."
  },
  {
    "id": 10218,
    "domain": 5,
    "domain_name": "Identity and Access Management (IAM)",
    "scenario": "General CISSP Concept Review",
    "question": "The function of an Identity Provider (IdP) in federation is to:",
    "options": [
      "Authenticate users and issue assertions",
      "Host target applications",
      "Store audit logs",
      "Enforce NAC"
    ],
    "answer": 0,
    "explanation": "IdPs confirm user identity for relying  parties."
  },
  {
    "id": 10219,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "The main security risk with SSO is:",
    "options": [
      "Single credential compromise grants broad access",
      "Harder user onboarding",
      "Too many passwords",
      "Redundant credentials"
    ],
    "answer": 0,
    "explanation": "Compromise of SSO token can breach multiple  systems."
  },
  {
    "id": 10220,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "RADIUS primarily provides: \u00a9 2025 Manoj Kumar | Shared for educational and professional reference  https://linkedin.com/in/mkrj",
    "options": [
      "Centralized authentication, authorization, and accounting for network access",
      "Local password storage",
      "Network routing",
      "Encryption"
    ],
    "answer": 0,
    "explanation": "RADIUS servers manage AAA for network  devices."
  },
  {
    "id": 10221,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "TACACS+ differs from RADIUS by:",
    "options": [
      "Encrypting full payload and separating AAA functions",
      "Being open source",
      "Operating over UDP",
      "Lack of accounting"
    ],
    "answer": 0,
    "explanation": "TACACS+ offers full-payload encryption  and TCP-based communication."
  },
  {
    "id": 10222,
    "domain": 5,
    "domain_name": "Identity and Access Management (IAM)",
    "scenario": "General CISSP Concept Review",
    "question": "Identity federation between cloud providers relies on:",
    "options": [
      "SAML, OAuth 2.0, and OIDC standards",
      "FTP transfer",
      "IPSec",
      "VPN chaining"
    ],
    "answer": 0,
    "explanation": "Federation protocols enable cross-domain  authentication."
  },
  {
    "id": 10223,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "JIT (Just-In-Time) access improves:",
    "options": [
      "Privileged access management by granting temporary credentials",
      "Static admin privileges",
      "VPN routing",
      "Continuous password reuse"
    ],
    "answer": 0,
    "explanation": "JIT limits exposure by issuing time-bound  elevation."
  },
  {
    "id": 10224,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Privileged Access Management (PAM) solutions provide:",
    "options": [
      "Session control, credential vaulting, and audit for admins",
      "File encryption only",
      "Web filtering",
      "Cloud provisioning"
    ],
    "answer": 0,
    "explanation": "PAM secures high-value administrative  accounts."
  },
  {
    "id": 10225,
    "domain": 5,
    "domain_name": "Identity and Access Management (IAM)",
    "scenario": "General CISSP Concept Review",
    "question": "Biometric false acceptance rate (FAR) measures:",
    "options": [
      "Likelihood of incorrectly accepting an impostor",
      "Legitimate user rejection",
      "Enrollment speed",
      "Template size"
    ],
    "answer": 0,
    "explanation": "FAR quantifies false positive matches. \u00a9 2025 Manoj Kumar | Shared for educational and professional reference  https://linkedin.com/in/mkrj"
  },
  {
    "id": 10226,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "The false rejection rate (FRR) indicates:",
    "options": [
      "Legitimate users denied access",
      "Impostors accepted",
      "System uptime",
      "Key exchange failures"
    ],
    "answer": 0,
    "explanation": "FRR measures user convenience impact."
  },
  {
    "id": 10227,
    "domain": 5,
    "domain_name": "Identity and Access Management (IAM)",
    "scenario": "General CISSP Concept Review",
    "question": "Crossover Error Rate (CER) is:",
    "options": [
      "Point where FAR = FRR",
      "Biometrics calibration time",
      "Failure of authentication",
      "System timeout"
    ],
    "answer": 0,
    "explanation": "Lower CER means better biometric accuracy."
  },
  {
    "id": 10228,
    "domain": 5,
    "domain_name": "Identity and Access Management (IAM)",
    "scenario": "General CISSP Concept Review",
    "question": "Which biometric method has the highest permanence?",
    "options": [
      "Iris recognition",
      "Voice",
      "Signature",
      "Gait"
    ],
    "answer": 0,
    "explanation": "Iris patterns remain stable over lifetime."
  },
  {
    "id": 10229,
    "domain": 5,
    "domain_name": "Identity and Access Management (IAM)",
    "scenario": "General CISSP Concept Review",
    "question": "Contextual access control in AI systems considers:",
    "options": [
      "User identity, device risk, and behavioral analytics",
      "Static password only",
      "Username alone",
      "None of these"
    ],
    "answer": 0,
    "explanation": "Adaptive AI-driven IAM uses behavioral  signals."
  },
  {
    "id": 10230,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "The concept of \u201cnon-repudiation\u201d ensures:",
    "options": [
      "Users cannot deny their actions",
      "Confidentiality only",
      "Availability",
      "Speed"
    ],
    "answer": 0,
    "explanation": "Achieved via digital signatures and  audit trails."
  },
  {
    "id": 10231,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "A \u201cservice account\u201d differs from a user account because it: \u00a9 2025 Manoj Kumar | Shared for educational and professional reference  https://linkedin.com/in/mkrj",
    "options": [
      "Runs automated system processes",
      "Has personal data",
      "Is limited to physical access",
      "Uses biometrics"
    ],
    "answer": 0,
    "explanation": "Service accounts operate applications  or jobs."
  },
  {
    "id": 10232,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following is a risk with shared accounts?",
    "options": [
      "Lack of individual accountability",
      "Faster login",
      "Stronger audit",
      "Enhanced compliance"
    ],
    "answer": 0,
    "explanation": "Shared credentials obscure responsibility."
  },
  {
    "id": 10233,
    "domain": 5,
    "domain_name": "Identity and Access Management (IAM)",
    "scenario": "General CISSP Concept Review",
    "question": "In federated identity, the relying party (RP):",
    "options": [
      "Consumes authentication assertions",
      "Issues credentials",
      "Acts as IdP",
      "Stores passwords"
    ],
    "answer": 0,
    "explanation": "RP trusts IdP for identity verification."
  },
  {
    "id": 10234,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "The primary purpose of a credential vault is:",
    "options": [
      "Securely store and rotate privileged credentials",
      "Log network traffic",
      "Encrypt hard drives",
      "Enforce password reuse"
    ],
    "answer": 0,
    "explanation": "Vaults centralize and protect secret  storage."
  },
  {
    "id": 10235,
    "domain": 5,
    "domain_name": "Identity and Access Management (IAM)",
    "scenario": "General CISSP Concept Review",
    "question": "Which access control model is most dynamic and suited for AI-driven systems?",
    "options": [
      "Attribute-Based Access Control (ABAC)",
      "MAC",
      "DAC",
      "RBAC"
    ],
    "answer": 0,
    "explanation": "ABAC evaluates context dynamically,  enabling AI policy enforcement."
  },
  {
    "id": 10236,
    "domain": 5,
    "domain_name": "Identity and Access Management (IAM)",
    "scenario": "General CISSP Concept Review",
    "question": "Identity federation in cloud reduces:",
    "options": [
      "Credential sprawl and administrative overhead",
      "Encryption",
      "Network bandwidth",
      "Patching"
    ],
    "answer": 0,
    "explanation": "Federation consolidates identity management."
  },
  {
    "id": 10237,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Account recertification ensures: \u00a9 2025 Manoj Kumar | Shared for educational and professional reference  https://linkedin.com/in/mkrj",
    "options": [
      "Periodic review of user access rights",
      "New password creation",
      "Device updates",
      "None of these"
    ],
    "answer": 0,
    "explanation": "Prevents access creep and orphaned privileges."
  },
  {
    "id": 10238,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Risk of orphan accounts occurs when:",
    "options": [
      "Employees leave but accounts remain active",
      "Accounts use MFA",
      "Passwords rotate",
      "Logs are deleted"
    ],
    "answer": 0,
    "explanation": "Orphaned accounts pose insider threat  risks."
  },
  {
    "id": 10239,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Centralized IAM enhances:",
    "options": [
      "Consistency and easier auditability",
      "Manual operations",
      "Fragmentation",
      "Downtime"
    ],
    "answer": 0,
    "explanation": "Central management simplifies compliance  and enforcement."
  },
  {
    "id": 10240,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Directory replication ensures:",
    "options": [
      "Availability and consistency across identity stores",
      "Data loss",
      "Password resets only",
      "Backup recovery"
    ],
    "answer": 0,
    "explanation": "Replication maintains identical user  data across sites."
  },
  {
    "id": 10241,
    "domain": 5,
    "domain_name": "Identity and Access Management (IAM)",
    "scenario": "General CISSP Concept Review",
    "question": "Step-up authentication requires:",
    "options": [
      "Additional verification for high-risk transactions",
      "Automatic session logout",
      "Fewer factors",
      "Certificate removal"
    ],
    "answer": 0,
    "explanation": "Step-up adapts security to transaction  risk."
  },
  {
    "id": 10242,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Digital certificates are issued by:",
    "options": [
      "Certificate Authorities (CAs)",
      "ISPs",
      "Cloud tenants",
      "DNS servers"
    ],
    "answer": 0,
    "explanation": "CAs bind identities to public keys. \u00a9 2025 Manoj Kumar | Shared for educational and professional reference  https://linkedin.com/in/mkrj"
  },
  {
    "id": 10243,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "PKI revocation lists (CRL/OCSP) are used to:",
    "options": [
      "Verify certificate status",
      "Encrypt data",
      "Store passwords",
      "Manage DNS"
    ],
    "answer": 0,
    "explanation": "CRL/OCSP indicate revoked certificates."
  },
  {
    "id": 10244,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Identity governance integrates:",
    "options": [
      "Provisioning, review, and compliance reporting",
      "Network segmentation",
      "SIEM",
      "SDN control"
    ],
    "answer": 0,
    "explanation": "IGA automates life cycle and compliance  oversight."
  },
  {
    "id": 10245,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Service account sprawl can be mitigated by:",
    "options": [
      "Role-based and automated account provisioning",
      "Manual spreadsheets",
      "Shared passwords",
      "Decentralization"
    ],
    "answer": 0,
    "explanation": "Automation ensures minimal, controlled  accounts."
  },
  {
    "id": 10246,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Cloud IAM best practice includes:",
    "options": [
      "Using unique identities per service and least privilege",
      "Reusing root credentials",
      "Allowing public buckets",
      "Hardcoding secrets"
    ],
    "answer": 0,
    "explanation": "Separate scoped credentials reduce blast  radius."
  },
  {
    "id": 10247,
    "domain": 5,
    "domain_name": "Identity and Access Management (IAM)",
    "scenario": "General CISSP Concept Review",
    "question": "Federated SSO in enterprise often uses:",
    "options": [
      "SAML assertions or OIDC tokens",
      "FTP login",
      "SSH key copies",
      "VPN split tunnels"
    ],
    "answer": 0,
    "explanation": "SSO tokens authenticate across services."
  },
  {
    "id": 10248,
    "domain": 5,
    "domain_name": "Identity and Access Management (IAM)",
    "scenario": "General CISSP Concept Review",
    "question": "Which factor enhances identity assurance? \u00a9 2025 Manoj Kumar | Shared for educational and professional reference  https://linkedin.com/in/mkrj",
    "options": [
      "Hardware-based authenticators (FIDO2 keys)",
      "Static passwords",
      "CAPTCHA",
      "Anonymous login"
    ],
    "answer": 0,
    "explanation": "Hardware MFA resists phishing and replay."
  },
  {
    "id": 10249,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "The purpose of access reviews in governance is to:",
    "options": [
      "Verify appropriateness of privileges",
      "Lock all accounts",
      "Reset passwords",
      "Issue new roles"
    ],
    "answer": 0,
    "explanation": "Reviews ensure access aligns with job  functions."
  },
  {
    "id": 10250,
    "domain": 5,
    "domain_name": "Identity and Access Management (IAM)",
    "scenario": "General CISSP Concept Review",
    "question": "Identity lifecycle management includes:",
    "options": [
      "Provisioning \u2192 Maintenance \u2192 Deprovisioning",
      "Encryption \u2192 Backup \u2192 Restore",
      "Logging \u2192 Scanning \u2192 Reporting",
      "Routing \u2192 Filtering \u2192 Forwarding"
    ],
    "answer": 0,
    "explanation": "Manages full user account lifecycle. \u00a9 2025 Manoj Kumar | Shared for educational and professional reference  https://linkedin.com/in/mkrj DOMAIN 6 \u2013 Security Assessment and Testing (Questions 251\u2013300)"
  },
  {
    "id": 10251,
    "domain": 6,
    "domain_name": "Security Assessment and Testing",
    "scenario": "General CISSP Concept Review",
    "question": "The primary objective of security testing is to:",
    "options": [
      "Identify and validate vulnerabilities in systems and processes",
      "Replace controls",
      "Create compliance reports only",
      "Reduce network latency"
    ],
    "answer": 0,
    "explanation": "Testing validates the effectiveness  of implemented controls."
  },
  {
    "id": 10252,
    "domain": 6,
    "domain_name": "Security Assessment and Testing",
    "scenario": "General CISSP Concept Review",
    "question": "A vulnerability assessment differs from a penetration test because it:",
    "options": [
      "Identifies and rates vulnerabilities but does not exploit them",
      "Exploits systems for proof-of-concept",
      "Tests physical controls only",
      "Focuses only on compliance"
    ],
    "answer": 0,
    "explanation": "Vulnerability scanning enumerates and  prioritizes weaknesses."
  },
  {
    "id": 10253,
    "domain": 6,
    "domain_name": "Security Assessment and Testing",
    "scenario": "General CISSP Concept Review",
    "question": "Penetration testing phases include:",
    "options": [
      "Planning, discovery, attack, and reporting",
      "Only scanning",
      "Documentation only",
      "Remediation only"
    ],
    "answer": 0,
    "explanation": "Pen tests follow structured attack simulation  lifecycle."
  },
  {
    "id": 10254,
    "domain": 6,
    "domain_name": "Security Assessment and Testing",
    "scenario": "General CISSP Concept Review",
    "question": "Black-box testing assumes:",
    "options": [
      "No prior knowledge of the system",
      "Full source code access",
      "Insider knowledge",
      "Test of only internal networks"
    ],
    "answer": 0,
    "explanation": "Black-box mimics an external attacker\u2019s  view."
  },
  {
    "id": 10255,
    "domain": 6,
    "domain_name": "Security Assessment and Testing",
    "scenario": "General CISSP Concept Review",
    "question": "White-box testing involves: \u00a9 2025 Manoj Kumar | Shared for educational and professional reference  https://linkedin.com/in/mkrj",
    "options": [
      "Full knowledge of architecture and source code",
      "External attacks only",
      "Random fuzzing",
      "No information"
    ],
    "answer": 0,
    "explanation": "White-box allows comprehensive code-level  testing."
  },
  {
    "id": 10256,
    "domain": 6,
    "domain_name": "Security Assessment and Testing",
    "scenario": "General CISSP Concept Review",
    "question": "Gray-box testing provides:",
    "options": [
      "Partial system knowledge",
      "No knowledge",
      "Full access",
      "Random access"
    ],
    "answer": 0,
    "explanation": "Gray-box simulates insider with limited  access."
  },
  {
    "id": 10257,
    "domain": 6,
    "domain_name": "Security Assessment and Testing",
    "scenario": "General CISSP Concept Review",
    "question": "Dynamic Application Security Testing (DAST) analyzes:",
    "options": [
      "Running applications for runtime vulnerabilities",
      "Source code without execution",
      "Architecture design",
      "Logs only"
    ],
    "answer": 0,
    "explanation": "DAST scans applications during execution."
  },
  {
    "id": 10258,
    "domain": 6,
    "domain_name": "Security Assessment and Testing",
    "scenario": "General CISSP Concept Review",
    "question": "Static Application Security Testing (SAST) is used for:",
    "options": [
      "Source code analysis without executing the program",
      "Dynamic testing",
      "Network scanning",
      "Penetration"
    ],
    "answer": 0,
    "explanation": "SAST detects code flaws pre-runtime."
  },
  {
    "id": 10259,
    "domain": 4,
    "domain_name": "Communication and Network Security",
    "scenario": "General CISSP Concept Review",
    "question": "Software Composition Analysis (SCA) detects:",
    "options": [
      "Vulnerabilities in open-source components",
      "Binary obfuscation",
      "Physical tampering",
      "User errors"
    ],
    "answer": 0,
    "explanation": "SCA identifies outdated or risky third-party  libraries."
  },
  {
    "id": 10260,
    "domain": 6,
    "domain_name": "Security Assessment and Testing",
    "scenario": "General CISSP Concept Review",
    "question": "Fuzz testing identifies:",
    "options": [
      "Application input handling issues by providing invalid data",
      "Correct business logic",
      "Encryption strength",
      "Compliance violations"
    ],
    "answer": 0,
    "explanation": "Fuzzers reveal crashes and input flaws."
  },
  {
    "id": 10261,
    "domain": 6,
    "domain_name": "Security Assessment and Testing",
    "scenario": "General CISSP Concept Review",
    "question": "Interactive Application Security Testing (IAST): \u00a9 2025 Manoj Kumar | Shared for educational and professional reference  https://linkedin.com/in/mkrj",
    "options": [
      "Combines SAST and DAST techniques in runtime",
      "Tests only static code",
      "Replaces QA",
      "Evaluates firewalls"
    ],
    "answer": 0,
    "explanation": "IAST instruments applications for deeper  coverage."
  },
  {
    "id": 10262,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Security audits evaluate:",
    "options": [
      "Compliance against defined criteria",
      "Hardware performance",
      "Employee happiness",
      "Cost savings"
    ],
    "answer": 0,
    "explanation": "Audits compare evidence to policy and  standards."
  },
  {
    "id": 10263,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Continuous monitoring provides:",
    "options": [
      "Real-time visibility of control effectiveness and risk indicators",
      "Annual review",
      "Manual sampling",
      "Snapshot reports"
    ],
    "answer": 0,
    "explanation": "Continuous monitoring detects deviations  promptly."
  },
  {
    "id": 10264,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "The goal of an internal audit is to:",
    "options": [
      "Provide independent assurance to management",
      "Punish employees",
      "Replace external audit",
      "Install controls"
    ],
    "answer": 0,
    "explanation": "Internal audit evaluates controls\u2019 adequacy  and performance."
  },
  {
    "id": 10265,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Separation of test and production environments prevents:",
    "options": [
      "Unauthorized access and data leakage between environments",
      "Network loops",
      "Code reusability",
      "Latency"
    ],
    "answer": 0,
    "explanation": "Segregation reduces data contamination  risk."
  },
  {
    "id": 10266,
    "domain": 6,
    "domain_name": "Security Assessment and Testing",
    "scenario": "General CISSP Concept Review",
    "question": "Regression testing ensures:",
    "options": [
      "New changes do not reintroduce vulnerabilities",
      "Performance is slower",
      "Encryption keys rotate",
      "Only new features work"
    ],
    "answer": 0,
    "explanation": "Confirms existing functionality remains  secure. \u00a9 2025 Manoj Kumar | Shared for educational and professional reference  https://linkedin.com/in/mkrj"
  },
  {
    "id": 10267,
    "domain": 6,
    "domain_name": "Security Assessment and Testing",
    "scenario": "General CISSP Concept Review",
    "question": "Vulnerability scanning should be performed:",
    "options": [
      "Regularly and after major changes",
      "Once a year",
      "Only before audits",
      "On user demand"
    ],
    "answer": 0,
    "explanation": "Frequent scanning ensures timely detection."
  },
  {
    "id": 10268,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Authenticated scans are preferred because they:",
    "options": [
      "Provide deeper insight into patch and configuration status",
      "Require less setup",
      "Avoid false positives",
      "Skip credentials"
    ],
    "answer": 0,
    "explanation": "Authenticated scans reveal internal  weaknesses."
  },
  {
    "id": 10269,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Code review benefits include:",
    "options": [
      "Early detection of logic and security flaws",
      "Faster compilation",
      "Reduced licensing costs",
      "Automated testing only"
    ],
    "answer": 0,
    "explanation": "Peer review improves software assurance."
  },
  {
    "id": 10270,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "A control self-assessment (CSA) enables:",
    "options": [
      "Business process owners to evaluate their own control effectiveness",
      "Independent auditor review",
      "Firewall deployment",
      "Backup validation"
    ],
    "answer": 0,
    "explanation": "CSAs embed accountability within business  units."
  },
  {
    "id": 10271,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Red teaming focuses on:",
    "options": [
      "Simulating adversarial tactics to test detection and response",
      "Routine vulnerability scanning",
      "Policy writing",
      "Asset inventory"
    ],
    "answer": 0,
    "explanation": "Red teams emulate realistic attack scenarios."
  },
  {
    "id": 10272,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Blue teaming\u2019s main function is to: \u00a9 2025 Manoj Kumar | Shared for educational and professional reference  https://linkedin.com/in/mkrj",
    "options": [
      "Defend, detect, and respond to attacks",
      "Exploit vulnerabilities",
      "Write policy",
      "Disable firewalls"
    ],
    "answer": 0,
    "explanation": "Blue teams enhance detection capabilities."
  },
  {
    "id": 10273,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Purple teaming integrates:",
    "options": [
      "Offensive and defensive teams for continuous improvement",
      "Only penetration testers",
      "Threat hunters",
      "Compliance auditors"
    ],
    "answer": 0,
    "explanation": "Collaboration accelerates security maturity."
  },
  {
    "id": 10274,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Bug bounty programs:",
    "options": [
      "Encourage ethical hackers to report vulnerabilities",
      "Hire permanent staff",
      "Focus on phishing",
      "Replace audits"
    ],
    "answer": 0,
    "explanation": "Crowdsourced testing extends coverage."
  },
  {
    "id": 10275,
    "domain": 6,
    "domain_name": "Security Assessment and Testing",
    "scenario": "General CISSP Concept Review",
    "question": "Baseline configuration testing ensures:",
    "options": [
      "Systems remain aligned to approved secure standards",
      "All controls disabled",
      "Performance tuning",
      "User training"
    ],
    "answer": 0,
    "explanation": "Maintains compliance and reduces drift."
  },
  {
    "id": 10276,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Security metrics and KPIs are useful to:",
    "options": [
      "Measure control performance and risk posture",
      "Replace audits",
      "Hide results",
      "Delay management reporting"
    ],
    "answer": 0,
    "explanation": "Metrics quantify progress and maturity."
  },
  {
    "id": 10277,
    "domain": 6,
    "domain_name": "Security Assessment and Testing",
    "scenario": "General CISSP Concept Review",
    "question": "A penetration test scope document must include:",
    "options": [
      "Authorized targets, schedule, and escalation contacts",
      "List of users",
      "Company history",
      "None of these"
    ],
    "answer": 0,
    "explanation": "Scope prevents disruption and defines  boundaries."
  },
  {
    "id": 10278,
    "domain": 6,
    "domain_name": "Security Assessment and Testing",
    "scenario": "General CISSP Concept Review",
    "question": "AI model testing should include: \u00a9 2025 Manoj Kumar | Shared for educational and professional reference  https://linkedin.com/in/mkrj",
    "options": [
      "Bias, fairness, and robustness evaluations",
      "Only latency testing",
      "Random fuzzing",
      "Hardware audits"
    ],
    "answer": 0,
    "explanation": "AI assessments verify ethical and secure  performance."
  },
  {
    "id": 10279,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Log review frequency should be:",
    "options": [
      "Risk-based and continuous for critical systems",
      "Annual only",
      "Monthly for all",
      "None"
    ],
    "answer": 0,
    "explanation": "High-risk systems require near real-time  log review."
  },
  {
    "id": 10280,
    "domain": 4,
    "domain_name": "Communication and Network Security",
    "scenario": "General CISSP Concept Review",
    "question": "A false positive in testing means:",
    "options": [
      "A reported vulnerability that does not actually exist",
      "Missed issue",
      "Confirmed exploit",
      "Correct detection"
    ],
    "answer": 0,
    "explanation": "False positives waste analyst time."
  },
  {
    "id": 10281,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Metrics That Matter (MTM) dashboards track:",
    "options": [
      "Key performance and key risk indicators for security programs",
      "System uptime only",
      "HR data",
      "Software licenses"
    ],
    "answer": 0,
    "explanation": "MTM provides visibility into control  efficiency."
  },
  {
    "id": 10282,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Configuration compliance scans check:",
    "options": [
      "System settings against security baselines",
      "Network latency",
      "Financial transactions",
      "User preferences"
    ],
    "answer": 0,
    "explanation": "Validates hardened configurations."
  },
  {
    "id": 10283,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Threat hunting is:",
    "options": [
      "Proactive search for unknown threats using intelligence and analytics",
      "Incident recovery",
      "Log deletion",
      "Training exercise"
    ],
    "answer": 0,
    "explanation": "Hunts uncover hidden compromises. \u00a9 2025 Manoj Kumar | Shared for educational and professional reference  https://linkedin.com/in/mkrj"
  },
  {
    "id": 10284,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "The primary input to a risk-based test plan is:",
    "options": [
      "Criticality and likelihood of asset compromise",
      "User feedback",
      "Random schedule",
      "License data"
    ],
    "answer": 0,
    "explanation": "Focus on high-impact risk areas."
  },
  {
    "id": 10285,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Security test results should be:",
    "options": [
      "Documented, validated, and tracked to closure",
      "Ignored if minor",
      "Shared publicly",
      "Deleted"
    ],
    "answer": 0,
    "explanation": "Proper handling ensures accountability  and remediation."
  },
  {
    "id": 10286,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Continuous integration (CI) pipelines benefit from:",
    "options": [
      "Automated security testing (DevSecOps)",
      "Manual patching",
      "Paper reports",
      "Disable controls"
    ],
    "answer": 0,
    "explanation": "Integrates security early and continuously."
  },
  {
    "id": 10287,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "OWASP ZAP and Burp Suite are examples of:",
    "options": [
      "Web application testing tools",
      "IDS sensors",
      "Antivirus",
      "Firewalls"
    ],
    "answer": 0,
    "explanation": "Used for web application security scanning."
  },
  {
    "id": 10288,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "The term \u201ctest coverage\u201d measures:",
    "options": [
      "Percentage of code or components assessed during testing",
      "Number of testers",
      "Duration of tests",
      "Log entries"
    ],
    "answer": 0,
    "explanation": "Higher coverage means better assurance."
  },
  {
    "id": 10289,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "A SOC 2 audit tests: \u00a9 2025 Manoj Kumar | Shared for educational and professional reference  https://linkedin.com/in/mkrj",
    "options": [
      "Controls related to Security, Availability, Processing Integrity, Confidentiality, Privacy",
      "Financial reporting",
      "Network speed",
      "Software quality"
    ],
    "answer": 0,
    "explanation": "SOC 2 reports evaluate trust service  criteria."
  },
  {
    "id": 10290,
    "domain": 6,
    "domain_name": "Security Assessment and Testing",
    "scenario": "General CISSP Concept Review",
    "question": "AI red teaming differs from pentesting by:",
    "options": [
      "Targeting AI behavior, misuse, and bias",
      "Focusing on firewalls",
      "Ignoring ethics",
      "Testing performance only"
    ],
    "answer": 0,
    "explanation": "AI red teams probe model misuse and  manipulation."
  },
  {
    "id": 10291,
    "domain": 6,
    "domain_name": "Security Assessment and Testing",
    "scenario": "General CISSP Concept Review",
    "question": "Evidence collection during testing must ensure:",
    "options": [
      "Integrity, chain of custody, and reproducibility",
      "Minimal documentation",
      "Encryption only",
      "No analysis"
    ],
    "answer": 0,
    "explanation": "Ensures validity in audit trails."
  },
  {
    "id": 10292,
    "domain": 6,
    "domain_name": "Security Assessment and Testing",
    "scenario": "General CISSP Concept Review",
    "question": "Which standard provides guidance for information security testing?",
    "options": [
      "NIST SP 800-115",
      "ISO 9001",
      "ISO 14000",
      "COBIT"
    ],
    "answer": 0,
    "explanation": "NIST 800-115 defines technical testing  methodologies."
  },
  {
    "id": 10293,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Benchmark frameworks such as CIS are used to:",
    "options": [
      "Establish secure configuration baselines",
      "Encrypt traffic",
      "Backup logs",
      "Train staff"
    ],
    "answer": 0,
    "explanation": "CIS Benchmarks define system hardening  settings."
  },
  {
    "id": 10294,
    "domain": 6,
    "domain_name": "Security Assessment and Testing",
    "scenario": "General CISSP Concept Review",
    "question": "False negatives in testing represent:",
    "options": [
      "Missed vulnerabilities that exist",
      "Nonexistent findings",
      "Test success",
      "Duplicate alerts"
    ],
    "answer": 0,
    "explanation": "They undermine security confidence."
  },
  {
    "id": 10295,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Security maturity assessments rate: \u00a9 2025 Manoj Kumar | Shared for educational and professional reference  https://linkedin.com/in/mkrj",
    "options": [
      "Capability level of processes and governance",
      "Number of incidents",
      "Size of IT team",
      "Audit cost"
    ],
    "answer": 0,
    "explanation": "Maturity models evaluate control optimization."
  },
  {
    "id": 10296,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Regression scanning post-remediation confirms:",
    "options": [
      "Fix effectiveness and absence of prior findings",
      "Patch installation speed",
      "Audit trail deletion",
      "Employee training"
    ],
    "answer": 0,
    "explanation": "Verifies issues are resolved."
  },
  {
    "id": 10297,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "What is the goal of continuous control monitoring (CCM)?",
    "options": [
      "Automate evidence collection and detect control deviations in real time",
      "Replace auditors",
      "Increase paperwork",
      "Delay detection"
    ],
    "answer": 0,
    "explanation": "CCM integrates monitoring with GRC automation."
  },
  {
    "id": 10298,
    "domain": 6,
    "domain_name": "Security Assessment and Testing",
    "scenario": "General CISSP Concept Review",
    "question": "AI vulnerability testing should check for:",
    "options": [
      "Prompt injection, data leakage, and model tampering",
      "Only compute usage",
      "GPU speed",
      "Cloud cost"
    ],
    "answer": 0,
    "explanation": "AI-specific flaws must be tested systematically."
  },
  {
    "id": 10299,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Security dashboards should visualize:",
    "options": [
      "KRIs, KPIs, and control compliance metrics",
      "Marketing data",
      "Random events",
      "Developer commits"
    ],
    "answer": 0,
    "explanation": "Dashboards communicate risk posture  to leadership."
  },
  {
    "id": 10300,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "What is the final step of the audit lifecycle?",
    "options": [
      "Follow-up and continuous improvement",
      "Reporting only",
      "Fieldwork",
      "Planning"
    ],
    "answer": 0,
    "explanation": "Ensures corrective actions are implemented. \u00a9 2025 Manoj Kumar | Shared for educational and professional reference  https://linkedin.com/in/mkrj DOMAIN 7 \u2013 Security Operations (Questions 301\u2013350)"
  },
  {
    "id": 10301,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "The primary goal of security operations is to:",
    "options": [
      "Detect, respond, and recover from incidents to maintain resilience",
      "Eliminate all risk",
      "Replace management",
      "Manage HR data"
    ],
    "answer": 0,
    "explanation": "Security operations ensure ongoing protection  and quick recovery."
  },
  {
    "id": 10302,
    "domain": 4,
    "domain_name": "Communication and Network Security",
    "scenario": "General CISSP Concept Review",
    "question": "The first step in incident response is: \u00a9 2025 Manoj Kumar | Shared for educational and professional reference  https://linkedin.com/in/mkrj",
    "options": [
      "Preparation",
      "Eradication",
      "Containment",
      "Recovery"
    ],
    "answer": 0,
    "explanation": "Preparation ensures readiness before  incidents occur."
  },
  {
    "id": 10303,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "The primary purpose of a SIEM system is to:",
    "options": [
      "Aggregate and correlate security logs for analysis",
      "Encrypt databases",
      "Replace antivirus",
      "Store backups"
    ],
    "answer": 0,
    "explanation": "SIEMs centralize event data for detection  and compliance."
  },
  {
    "id": 10304,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "The principle of least privilege is most critical for:",
    "options": [
      "Privileged and administrative accounts",
      "Regular users only",
      "Guests",
      "Developers"
    ],
    "answer": 0,
    "explanation": "Admin accounts have the highest potential  for abuse."
  },
  {
    "id": 10305,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Mean Time to Detect (MTTD) measures:",
    "options": [
      "Average time between intrusion and detection",
      "Incident duration",
      "Recovery cost",
      "Backup latency"
    ],
    "answer": 0,
    "explanation": "MTTD helps evaluate detection capability."
  },
  {
    "id": 10306,
    "domain": 4,
    "domain_name": "Communication and Network Security",
    "scenario": "General CISSP Concept Review",
    "question": "Mean Time to Respond (MTTR) represents:",
    "options": [
      "Average time from detection to containment or recovery",
      "Outage frequency",
      "Audit frequency",
      "Risk score"
    ],
    "answer": 0,
    "explanation": "MTTR measures response efficiency."
  },
  {
    "id": 10307,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Evidence collected during an incident must be:",
    "options": [
      "Preserved with integrity and chain of custody",
      "Stored without tracking",
      "Shared publicly",
      "Discarded"
    ],
    "answer": 0,
    "explanation": "Preserving evidence ensures admissibility."
  },
  {
    "id": 10308,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which backup strategy copies all files changed since last full backup? \u00a9 2025 Manoj Kumar | Shared for educational and professional reference  https://linkedin.com/in/mkrj",
    "options": [
      "Incremental",
      "Differential",
      "Mirror",
      "Continuous"
    ],
    "answer": 1,
    "explanation": "Differential backups include changes  since last full backup."
  },
  {
    "id": 10309,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Business Continuity Planning (BCP) ensures:",
    "options": [
      "Essential functions continue during disruption",
      "Marketing campaigns run",
      "Only physical security",
      "Regulatory compliance only"
    ],
    "answer": 0,
    "explanation": "BCP maintains critical operations under  stress."
  },
  {
    "id": 10310,
    "domain": 7,
    "domain_name": "Security Operations",
    "scenario": "General CISSP Concept Review",
    "question": "Disaster Recovery (DR) primarily focuses on:",
    "options": [
      "Restoring IT systems and data after an incident",
      "Managing employees",
      "Public relations",
      "Training"
    ],
    "answer": 0,
    "explanation": "DR restores infrastructure and data  quickly."
  },
  {
    "id": 10311,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "A hot site provides:",
    "options": [
      "Fully equipped and ready-to-operate environment",
      "Empty space",
      "Tape storage",
      "Manual operations"
    ],
    "answer": 0,
    "explanation": "Hot sites enable immediate failover."
  },
  {
    "id": 10312,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Cold sites differ because they:",
    "options": [
      "Lack pre-installed hardware and data",
      "Are identical to production",
      "Replicate data continuously",
      "Use clustering"
    ],
    "answer": 0,
    "explanation": "Cold sites require setup time before  use."
  },
  {
    "id": 10313,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Warm sites include:",
    "options": [
      "Partially configured infrastructure ready for activation",
      "No equipment",
      "Manual controls only",
      "Alternate processes only"
    ],
    "answer": 0,
    "explanation": "Warm sites balance cost and readiness. \u00a9 2025 Manoj Kumar | Shared for educational and professional reference  https://linkedin.com/in/mkrj"
  },
  {
    "id": 10314,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "What is the primary function of change management?",
    "options": [
      "Ensure modifications are documented, approved, and tested",
      "Block all updates",
      "Avoid change",
      "Simplify HR tasks"
    ],
    "answer": 0,
    "explanation": "Structured change process prevents disruptions."
  },
  {
    "id": 10315,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Configuration management tracks:",
    "options": [
      "Baseline configurations and authorized changes",
      "Employee performance",
      "Backups only",
      "Costs"
    ],
    "answer": 0,
    "explanation": "Maintains control over system state  and integrity."
  },
  {
    "id": 10316,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "The \u201corder of volatility\u201d principle dictates collecting:",
    "options": [
      "Most volatile evidence first",
      "Hard drives first",
      "Backups last",
      "Random data"
    ],
    "answer": 0,
    "explanation": "Capture data that changes quickly (e.g.,  memory)."
  },
  {
    "id": 10317,
    "domain": 7,
    "domain_name": "Security Operations",
    "scenario": "General CISSP Concept Review",
    "question": "Chain of custody includes:",
    "options": [
      "Who handled evidence, when, and under what conditions",
      "Log timestamps only",
      "File names",
      "Software licenses"
    ],
    "answer": 0,
    "explanation": "Ensures accountability and evidence  integrity."
  },
  {
    "id": 10318,
    "domain": 2,
    "domain_name": "Asset Security",
    "scenario": "General CISSP Concept Review",
    "question": "Data retention policies are designed to:",
    "options": [
      "Define how long data is kept and securely destroyed",
      "Improve performance",
      "Encrypt data",
      "Create redundancy"
    ],
    "answer": 0,
    "explanation": "Aligns storage practices with regulations."
  },
  {
    "id": 10319,
    "domain": 2,
    "domain_name": "Asset Security",
    "scenario": "General CISSP Concept Review",
    "question": "Sanitization of digital media ensures: \u00a9 2025 Manoj Kumar | Shared for educational and professional reference  https://linkedin.com/in/mkrj",
    "options": [
      "Irrecoverable removal of sensitive data",
      "Backup compression",
      "Random overwriting",
      "Formatting only"
    ],
    "answer": 0,
    "explanation": "Prevents data leakage upon disposal."
  },
  {
    "id": 10320,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "The purpose of a forensics readiness policy is to:",
    "options": [
      "Prepare systems to collect admissible evidence efficiently",
      "Conduct postmortem",
      "Random testing",
      "Disable logging"
    ],
    "answer": 0,
    "explanation": "Enables efficient, lawful investigation."
  },
  {
    "id": 10321,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Incident eradication involves:",
    "options": [
      "Removing the root cause of the incident",
      "Monitoring alerts",
      "Writing reports only",
      "Backups"
    ],
    "answer": 0,
    "explanation": "Restores systems to clean state."
  },
  {
    "id": 10322,
    "domain": 7,
    "domain_name": "Security Operations",
    "scenario": "General CISSP Concept Review",
    "question": "During containment, the goal is to:",
    "options": [
      "Limit damage and prevent spread",
      "Identify root cause",
      "Collect lessons learned",
      "Archive evidence"
    ],
    "answer": 0,
    "explanation": "Stops incident escalation."
  },
  {
    "id": 10323,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Post-incident review purpose:",
    "options": [
      "Identify lessons learned and improve future responses",
      "Assign blame",
      "Erase logs",
      "Terminate staff"
    ],
    "answer": 0,
    "explanation": "Drives process improvement."
  },
  {
    "id": 10324,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Security monitoring includes:",
    "options": [
      "Collecting and analyzing telemetry for anomalies",
      "Updating HR data",
      "Adjusting payroll",
      "None"
    ],
    "answer": 0,
    "explanation": "Detects deviations from normal behavior."
  },
  {
    "id": 10325,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which law governs breach notifications for personal data in the EU? \u00a9 2025 Manoj Kumar | Shared for educational and professional reference  https://linkedin.com/in/mkrj",
    "options": [
      "GDPR",
      "SOX",
      "FISMA",
      "HIPAA"
    ],
    "answer": 0,
    "explanation": "GDPR mandates notification within 72  hours."
  },
  {
    "id": 10326,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Escalation procedures define:",
    "options": [
      "When and how to notify stakeholders during incidents",
      "Termination policy",
      "Risk acceptance",
      "Encryption"
    ],
    "answer": 0,
    "explanation": "Structured escalation ensures timely  communication."
  },
  {
    "id": 10327,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "An operational log retention policy helps:",
    "options": [
      "Maintain evidence for auditing and forensics",
      "Delete historical data",
      "Reduce visibility",
      "Simplify access"
    ],
    "answer": 0,
    "explanation": "Retention supports compliance and investigations."
  },
  {
    "id": 10328,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "The function of a fault-tolerant system is to:",
    "options": [
      "Continue operation despite hardware/software failures",
      "Reboot faster",
      "Increase speed",
      "Add complexity"
    ],
    "answer": 0,
    "explanation": "Fault tolerance ensures high availability."
  },
  {
    "id": 10329,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "What metric measures downtime impact?",
    "options": [
      "Mean Time Between Failures (MTBF)",
      "Recovery Time Objective (RTO)",
      "Residual risk",
      "CVSS"
    ],
    "answer": 1,
    "explanation": "RTO defines acceptable outage duration."
  },
  {
    "id": 10330,
    "domain": 4,
    "domain_name": "Communication and Network Security",
    "scenario": "General CISSP Concept Review",
    "question": "What ensures employees understand their incident response duties?",
    "options": [
      "Regular training and tabletop exercises",
      "Annual vacation",
      "New hire forms",
      "Automated alerts only"
    ],
    "answer": 0,
    "explanation": "Exercises validate readiness. \u00a9 2025 Manoj Kumar | Shared for educational and professional reference  https://linkedin.com/in/mkrj"
  },
  {
    "id": 10331,
    "domain": 6,
    "domain_name": "Security Assessment and Testing",
    "scenario": "General CISSP Concept Review",
    "question": "The most critical phase of DR testing is:",
    "options": [
      "Review and lessons learned",
      "Power off",
      "Backup rotation",
      "Data labeling"
    ],
    "answer": 0,
    "explanation": "Post-test review improves future recovery."
  },
  {
    "id": 10332,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Forensic duplication requires:",
    "options": [
      "Bit-for-bit copy with hash verification",
      "Normal backup",
      "ZIP archive",
      "Encrypted email"
    ],
    "answer": 0,
    "explanation": "Preserves evidence without alteration."
  },
  {
    "id": 10333,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "A root cause analysis (RCA) identifies:",
    "options": [
      "Fundamental reason an incident occurred",
      "Temporary fix",
      "None",
      "Budget issue"
    ],
    "answer": 0,
    "explanation": "RCA guides long-term prevention."
  },
  {
    "id": 10334,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Insider threat programs aim to:",
    "options": [
      "Detect and prevent malicious or negligent employee activity",
      "Monitor external attackers only",
      "Replace HR",
      "Manage payroll"
    ],
    "answer": 0,
    "explanation": "Monitors insider behaviors and anomalies."
  },
  {
    "id": 10335,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "The main risk of log aggregation is:",
    "options": [
      "Central point of failure and sensitive data exposure",
      "Performance gain",
      "Simplified compliance",
      "None"
    ],
    "answer": 0,
    "explanation": "Centralized logs must be secured properly."
  },
  {
    "id": 10336,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Security automation tools (SOAR) are used for: \u00a9 2025 Manoj Kumar | Shared for educational and professional reference  https://linkedin.com/in/mkrj",
    "options": [
      "Orchestrating response actions automatically",
      "Manual investigations",
      "Only vulnerability scanning",
      "Patching"
    ],
    "answer": 0,
    "explanation": "SOAR integrates playbooks for rapid  response."
  },
  {
    "id": 10337,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "DRP and BCP plans should be:",
    "options": [
      "Tested, updated, and reviewed regularly",
      "Archived only",
      "Written once",
      "Outsourced"
    ],
    "answer": 0,
    "explanation": "Ongoing updates maintain relevance."
  },
  {
    "id": 10338,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "MTBF primarily indicates:",
    "options": [
      "Average reliability between failures",
      "Recovery cost",
      "Incident count",
      "Log frequency"
    ],
    "answer": 0,
    "explanation": "Measures component longevity."
  },
  {
    "id": 10339,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Mean Time to Repair (MTTR) measures:",
    "options": [
      "Average time to restore service after failure",
      "Detection time",
      "Failure frequency",
      "Audit time"
    ],
    "answer": 0,
    "explanation": "MTTR quantifies recovery speed."
  },
  {
    "id": 10340,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "What is a \u201ctabletop exercise\u201d?",
    "options": [
      "Discussion-based simulated scenario to test response",
      "Hardware drill",
      "Backup test",
      "Compliance review"
    ],
    "answer": 0,
    "explanation": "Tabletop tests improve coordination  and preparedness."
  },
  {
    "id": 10341,
    "domain": 4,
    "domain_name": "Communication and Network Security",
    "scenario": "General CISSP Concept Review",
    "question": "Cloud provider incident response must include:",
    "options": [
      "Shared responsibility coordination and SLA-based notification",
      "Full access to hardware",
      "Ignoring customers",
      "None"
    ],
    "answer": 0,
    "explanation": "IR must align responsibilities in contracts."
  },
  {
    "id": 10342,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Key challenge in AI system operations: \u00a9 2025 Manoj Kumar | Shared for educational and professional reference  https://linkedin.com/in/mkrj",
    "options": [
      "Monitoring for model drift and bias over time",
      "Encrypting databases",
      "Disabling GPUs",
      "Hardware tuning"
    ],
    "answer": 0,
    "explanation": "Model drift impacts reliability and  fairness."
  },
  {
    "id": 10343,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Security orchestration improves:",
    "options": [
      "Consistency and speed in repetitive operational tasks",
      "Manual approvals",
      "Compliance audits only",
      "Latency"
    ],
    "answer": 0,
    "explanation": "Automation enhances operational scalability."
  },
  {
    "id": 10344,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Insider threat indicators include:",
    "options": [
      "Privilege misuse, abnormal file transfers, disgruntlement",
      "Regular logins",
      "Patch updates",
      "Firewall rule change"
    ],
    "answer": 0,
    "explanation": "Behavior analytics detect anomalies."
  },
  {
    "id": 10345,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "What does the term \u201cplaybook\u201d refer to in SOCs?",
    "options": [
      "Predefined sequence of actions for incident types",
      "Audit checklist",
      "Backup job",
      "Change ticket"
    ],
    "answer": 0,
    "explanation": "Playbooks standardize response workflows."
  },
  {
    "id": 10346,
    "domain": 7,
    "domain_name": "Security Operations",
    "scenario": "General CISSP Concept Review",
    "question": "Digital forensics volatility order starts with:",
    "options": [
      "CPU registers and cache",
      "Disk drives",
      "Archives",
      "Backups"
    ],
    "answer": 0,
    "explanation": "Volatile evidence disappears fastest."
  },
  {
    "id": 10347,
    "domain": 7,
    "domain_name": "Security Operations",
    "scenario": "General CISSP Concept Review",
    "question": "The most common first step in ransomware containment:",
    "options": [
      "Isolate affected systems from the network",
      "Pay ransom immediately",
      "Notify marketing",
      "Delete files"
    ],
    "answer": 0,
    "explanation": "Isolation limits spread. \u00a9 2025 Manoj Kumar | Shared for educational and professional reference  https://linkedin.com/in/mkrj"
  },
  {
    "id": 10348,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Continuous operations monitoring ensures:",
    "options": [
      "Early anomaly detection and reduced MTTD",
      "Annual compliance only",
      "Manual testing",
      "Static defense"
    ],
    "answer": 0,
    "explanation": "Continuous monitoring enhances visibility."
  },
  {
    "id": 10349,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Metrics like MTTR, MTTD, and incident volume support:",
    "options": [
      "SOC performance and capacity planning",
      "HR analytics",
      "Financial audit",
      "None"
    ],
    "answer": 0,
    "explanation": "They measure detection and response  maturity."
  },
  {
    "id": 10350,
    "domain": 5,
    "domain_name": "Identity and Access Management (IAM)",
    "scenario": "General CISSP Concept Review",
    "question": "\u201cLessons learned\u201d reports should include:",
    "options": [
      "Root cause, impact, and corrective actions",
      "Blame",
      "System uptime",
      "Cost only"
    ],
    "answer": 0,
    "explanation": "Provides closure and continuous improvement. \u00a9 2025 Manoj Kumar | Shared for educational and professional reference  https://linkedin.com/in/mkrj DOMAIN 8 \u2013 Software Development Security (Questions 351\u2013400)"
  },
  {
    "id": 10351,
    "domain": 8,
    "domain_name": "Software Development Security",
    "scenario": "General CISSP Concept Review",
    "question": "The main objective of software security is to:",
    "options": [
      "Prevent vulnerabilities throughout the software lifecycle",
      "Speed up releases only",
      "Shift risk to vendors",
      "Focus on hardware security"
    ],
    "answer": 0,
    "explanation": "Integrating security across the SDLC  reduces design and coding flaws."
  },
  {
    "id": 10352,
    "domain": 8,
    "domain_name": "Software Development Security",
    "scenario": "General CISSP Concept Review",
    "question": "The Secure Development Life Cycle (SDLC) begins with:",
    "options": [
      "Security requirements gathering",
      "Implementation",
      "Deployment",
      "Maintenance"
    ],
    "answer": 0,
    "explanation": "Security requirements define baseline  expectations early."
  },
  {
    "id": 10353,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Threat modeling identifies:",
    "options": [
      "Potential threats, attack vectors, and mitigations",
      "Coding style",
      "Server performance",
      "Encryption keys"
    ],
    "answer": 0,
    "explanation": "Threat modeling ensures proactive defense  design."
  },
  {
    "id": 10354,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "The STRIDE model analyzes threats by: Privilege",
    "options": [
      "Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of",
      "Security, Testing, Reporting, Integration, Deployment, Evaluation",
      "Storage, Tokens, Risk, Identity, Data, Encryption",
      "None of these"
    ],
    "answer": 0,
    "explanation": "STRIDE maps threat types to mitigation  categories. \u00a9 2025 Manoj Kumar | Shared for educational and professional reference  https://linkedin.com/in/mkrj"
  },
  {
    "id": 10355,
    "domain": 8,
    "domain_name": "Software Development Security",
    "scenario": "General CISSP Concept Review",
    "question": "Secure coding practices aim to:",
    "options": [
      "Prevent common vulnerabilities like injection and buffer overflows",
      "Obfuscate code",
      "Reduce file size",
      "Increase development time"
    ],
    "answer": 0,
    "explanation": "Coding standards reduce exploitable  flaws."
  },
  {
    "id": 10356,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "OWASP Top 10 represents:",
    "options": [
      "The ten most critical web application security risks",
      "Testing tools",
      "Network protocols",
      "Pen test methods"
    ],
    "answer": 0,
    "explanation": "OWASP maintains awareness of key web  risks."
  },
  {
    "id": 10357,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Injection attacks occur when:",
    "options": [
      "Unvalidated user input is executed as a command or query",
      "Encryption fails",
      "Ports are open",
      "Code compiles"
    ],
    "answer": 0,
    "explanation": "Validation prevents untrusted command  execution."
  },
  {
    "id": 10358,
    "domain": 8,
    "domain_name": "Software Development Security",
    "scenario": "General CISSP Concept Review",
    "question": "The most effective defense against SQL injection is:",
    "options": [
      "Parameterized queries and input validation",
      "Disabling logging",
      "Hashing",
      "Firewalls"
    ],
    "answer": 0,
    "explanation": "Prepared statements prevent malicious  queries."
  },
  {
    "id": 10359,
    "domain": 8,
    "domain_name": "Software Development Security",
    "scenario": "General CISSP Concept Review",
    "question": "Cross-site scripting (XSS) allows attackers to:",
    "options": [
      "Execute scripts in users\u2019 browsers",
      "Access physical servers",
      "Modify firewalls",
      "None"
    ],
    "answer": 0,
    "explanation": "XSS manipulates client-side code execution."
  },
  {
    "id": 10360,
    "domain": 8,
    "domain_name": "Software Development Security",
    "scenario": "General CISSP Concept Review",
    "question": "Cross-site request forgery (CSRF) exploits: \u00a9 2025 Manoj Kumar | Shared for educational and professional reference  https://linkedin.com/in/mkrj",
    "options": [
      "User\u2019s authenticated session to perform unwanted actions",
      "SQL databases",
      "Encryption",
      "DNS"
    ],
    "answer": 0,
    "explanation": "CSRF tricks users into submitting malicious  requests."
  },
  {
    "id": 10361,
    "domain": 8,
    "domain_name": "Software Development Security",
    "scenario": "General CISSP Concept Review",
    "question": "Input validation should occur:",
    "options": [
      "On both client and server sides",
      "Client side only",
      "Database only",
      "UI only"
    ],
    "answer": 0,
    "explanation": "Redundant validation ensures integrity."
  },
  {
    "id": 10362,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Output encoding prevents:",
    "options": [
      "Cross-site scripting (XSS)",
      "Denial of Service",
      "Buffer overflow",
      "SQL injection"
    ],
    "answer": 0,
    "explanation": "Encoding neutralizes malicious output."
  },
  {
    "id": 10363,
    "domain": 8,
    "domain_name": "Software Development Security",
    "scenario": "General CISSP Concept Review",
    "question": "Secure coding guidelines should be:",
    "options": [
      "Documented, enforced, and reviewed regularly",
      "Optional",
      "One-time only",
      "Separate from policy"
    ],
    "answer": 0,
    "explanation": "Continuous improvement maintains secure  software culture."
  },
  {
    "id": 10364,
    "domain": 6,
    "domain_name": "Security Assessment and Testing",
    "scenario": "General CISSP Concept Review",
    "question": "Security testing should be integrated into:",
    "options": [
      "Every stage of the SDLC",
      "Only at deployment",
      "Only post-release",
      "Maintenance only"
    ],
    "answer": 0,
    "explanation": "Continuous validation ensures resilience  throughout lifecycle."
  },
  {
    "id": 10365,
    "domain": 8,
    "domain_name": "Software Development Security",
    "scenario": "General CISSP Concept Review",
    "question": "The Agile methodology affects security by:",
    "options": [
      "Requiring iterative security integration (\u201cshift-left\u201d)",
      "Ignoring security",
      "Removing reviews",
      "Extending release cycles"
    ],
    "answer": 0,
    "explanation": "Security adapts to iterative releases  in Agile environments."
  },
  {
    "id": 10366,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "DevSecOps emphasizes: \u00a9 2025 Manoj Kumar | Shared for educational and professional reference  https://linkedin.com/in/mkrj",
    "options": [
      "Embedding security in development and operations workflows",
      "Manual pen testing",
      "Only compliance reporting",
      "Network segmentation"
    ],
    "answer": 0,
    "explanation": "DevSecOps integrates automation, CI/CD,  and security checks."
  },
  {
    "id": 10367,
    "domain": 8,
    "domain_name": "Software Development Security",
    "scenario": "General CISSP Concept Review",
    "question": "Secure coding standards examples include:",
    "options": [
      "CERT Secure Coding, MISRA, OWASP ASVS",
      "ISO 9001",
      "COBIT",
      "COSO ERM"
    ],
    "answer": 0,
    "explanation": "Coding standards enforce consistent  security patterns."
  },
  {
    "id": 10368,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Buffer overflows occur when:",
    "options": [
      "Data exceeds memory bounds of a variable",
      "CPU overheats",
      "Log files rotate",
      "Encryption fails"
    ],
    "answer": 0,
    "explanation": "Overflows can overwrite adjacent memory  and execute code."
  },
  {
    "id": 10369,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Race conditions can be mitigated by:",
    "options": [
      "Proper synchronization and locking mechanisms",
      "Weak randomization",
      "Disabling threading",
      "Encryption"
    ],
    "answer": 0,
    "explanation": "Synchronization ensures data integrity  under concurrency."
  },
  {
    "id": 10370,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "The purpose of code signing is to:",
    "options": [
      "Ensure code integrity and authenticity",
      "Encrypt all code",
      "Obfuscate algorithms",
      "Improve performance"
    ],
    "answer": 0,
    "explanation": "Signed code verifies trusted origin."
  },
  {
    "id": 10371,
    "domain": 8,
    "domain_name": "Software Development Security",
    "scenario": "General CISSP Concept Review",
    "question": "Configuration management in software security  includes:",
    "options": [
      "Version control, build integrity, and environment consistency",
      "Encryption",
      "Network ACLs",
      "Database tuning"
    ],
    "answer": 0,
    "explanation": "Ensures traceability and integrity across  versions. \u00a9 2025 Manoj Kumar | Shared for educational and professional reference  https://linkedin.com/in/mkrj"
  },
  {
    "id": 10372,
    "domain": 8,
    "domain_name": "Software Development Security",
    "scenario": "General CISSP Concept Review",
    "question": "Software escrow agreements protect:",
    "options": [
      "Source code availability if vendor fails to support",
      "Encryption keys",
      "Test data",
      "User credentials"
    ],
    "answer": 0,
    "explanation": "Escrow ensures business continuity in  vendor dependency."
  },
  {
    "id": 10373,
    "domain": 3,
    "domain_name": "Security Architecture and Engineering",
    "scenario": "General CISSP Concept Review",
    "question": "The main principle of secure design is:",
    "options": [
      "Fail securely, least privilege, and defense in depth",
      "Obfuscate functions",
      "Use default passwords",
      "Hide documentation"
    ],
    "answer": 0,
    "explanation": "Secure design reduces vulnerability  exposure."
  },
  {
    "id": 10374,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "AI/ML model security requires protecting:",
    "options": [
      "Training data, model weights, and inference APIs",
      "Network only",
      "Users",
      "GPUs"
    ],
    "answer": 0,
    "explanation": "Models and datasets are valuable intellectual  assets."
  },
  {
    "id": 10375,
    "domain": 5,
    "domain_name": "Identity and Access Management (IAM)",
    "scenario": "General CISSP Concept Review",
    "question": "Adversarial machine learning targets:",
    "options": [
      "Model manipulation and evasion attacks",
      "Network routing",
      "Database schema",
      "IAM"
    ],
    "answer": 0,
    "explanation": "Attackers craft inputs to deceive models."
  },
  {
    "id": 10376,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Data poisoning attacks affect:",
    "options": [
      "Training data integrity",
      "Network latency",
      "Disk redundancy",
      "GPU health"
    ],
    "answer": 0,
    "explanation": "Compromised data corrupts model behavior."
  },
  {
    "id": 10377,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Model inversion allows attackers to: \u00a9 2025 Manoj Kumar | Shared for educational and professional reference  https://linkedin.com/in/mkrj",
    "options": [
      "Reconstruct sensitive training data from model outputs",
      "Decrypt traffic",
      "Replace datasets",
      "Increase performance"
    ],
    "answer": 0,
    "explanation": "Inversion violates confidentiality."
  },
  {
    "id": 10378,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Secure API development requires:",
    "options": [
      "Authentication, authorization, rate limiting, and input validation",
      "Plain HTTP",
      "Open endpoints",
      "No logging"
    ],
    "answer": 0,
    "explanation": "APIs are common attack vectors."
  },
  {
    "id": 10379,
    "domain": 8,
    "domain_name": "Software Development Security",
    "scenario": "General CISSP Concept Review",
    "question": "Using open-source software requires:",
    "options": [
      "Reviewing licenses and vulnerabilities",
      "Automatic trust",
      "Avoiding version control",
      "Ignoring dependencies"
    ],
    "answer": 0,
    "explanation": "OSS components must be monitored for  risks."
  },
  {
    "id": 10380,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Continuous integration pipelines should include:",
    "options": [
      "Automated security scanning before build deployment",
      "Manual deployment",
      "Static logging only",
      "None"
    ],
    "answer": 0,
    "explanation": "CI/CD automation ensures early issue  detection."
  },
  {
    "id": 10381,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Security regression tests ensure:",
    "options": [
      "Previous vulnerabilities remain fixed after updates",
      "Features added",
      "Costs lowered",
      "Logs cleared"
    ],
    "answer": 0,
    "explanation": "Prevents reintroduction of flaws."
  },
  {
    "id": 10382,
    "domain": 8,
    "domain_name": "Software Development Security",
    "scenario": "General CISSP Concept Review",
    "question": "In secure SDLC, maintenance phase includes:",
    "options": [
      "Patch management, monitoring, and vulnerability review",
      "Product marketing",
      "Risk avoidance",
      "Manual testing only"
    ],
    "answer": 0,
    "explanation": "Ensures ongoing protection after deployment."
  },
  {
    "id": 10383,
    "domain": 2,
    "domain_name": "Asset Security",
    "scenario": "General CISSP Concept Review",
    "question": "Input sanitization prevents: \u00a9 2025 Manoj Kumar | Shared for educational and professional reference  https://linkedin.com/in/mkrj",
    "options": [
      "Injection and format string attacks",
      "CPU overheating",
      "Encryption",
      "Privilege escalation"
    ],
    "answer": 0,
    "explanation": "Cleans input to enforce safe patterns."
  },
  {
    "id": 10384,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "AI model lifecycle security includes:",
    "options": [
      "Governance, validation, monitoring, and retraining",
      "Static storage",
      "Firewalls only",
      "Code review"
    ],
    "answer": 0,
    "explanation": "Models require continuous oversight  to mitigate drift."
  },
  {
    "id": 10385,
    "domain": 4,
    "domain_name": "Communication and Network Security",
    "scenario": "General CISSP Concept Review",
    "question": "Source code repositories must enforce:",
    "options": [
      "Access control, integrity checks, and branch protection",
      "Anonymous write access",
      "Unencrypted commits",
      "Shared credentials"
    ],
    "answer": 0,
    "explanation": "Repositories hold intellectual property  and must be protected."
  },
  {
    "id": 10386,
    "domain": 3,
    "domain_name": "Security Architecture and Engineering",
    "scenario": "General CISSP Concept Review",
    "question": "Continuous delivery differs from continuous  deployment by:",
    "options": [
      "Requiring manual approval before release",
      "Automatic production push",
      "Code compilation",
      "Automated rollback"
    ],
    "answer": 0,
    "explanation": "Continuous delivery stops before auto-release."
  },
  {
    "id": 10387,
    "domain": 8,
    "domain_name": "Software Development Security",
    "scenario": "General CISSP Concept Review",
    "question": "The main function of Software Bill of Materials  (SBOM) is to:",
    "options": [
      "List all components and dependencies for transparency",
      "Optimize build time",
      "Track licenses only",
      "Encrypt binaries"
    ],
    "answer": 0,
    "explanation": "SBOMs support vulnerability and supply  chain management."
  },
  {
    "id": 10388,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Supply chain attacks exploit:",
    "options": [
      "Compromise of third-party components or build processes",
      "End-user password",
      "Encryption weakness",
      "Firewalls"
    ],
    "answer": 0,
    "explanation": "Third-party code introduces external  risk. \u00a9 2025 Manoj Kumar | Shared for educational and professional reference  https://linkedin.com/in/mkrj"
  },
  {
    "id": 10389,
    "domain": 4,
    "domain_name": "Communication and Network Security",
    "scenario": "General CISSP Concept Review",
    "question": "Secure code repositories should enforce:",
    "options": [
      "MFA and signed commits",
      "Anonymous commits",
      "Plaintext passwords",
      "None"
    ],
    "answer": 0,
    "explanation": "Signed commits verify code authorship."
  },
  {
    "id": 10390,
    "domain": 8,
    "domain_name": "Software Development Security",
    "scenario": "General CISSP Concept Review",
    "question": "Waterfall SDLC models are:",
    "options": [
      "Sequential with late security integration",
      "Agile",
      "Continuous",
      "None"
    ],
    "answer": 0,
    "explanation": "Traditional waterfall adds risk of late  vulnerability detection."
  },
  {
    "id": 10391,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "The purpose of \u201cpeer review\u201d in development is to:",
    "options": [
      "Catch defects early through collaboration",
      "Reduce development speed",
      "Replace testing",
      "Archive code"
    ],
    "answer": 0,
    "explanation": "Peer review increases quality and security  awareness."
  },
  {
    "id": 10392,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Secure libraries should be:",
    "options": [
      "Updated frequently and validated via digital signatures",
      "Static forever",
      "Modified manually",
      "Ignored"
    ],
    "answer": 0,
    "explanation": "Updated libraries patch known vulnerabilities."
  },
  {
    "id": 10393,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Secure error handling must:",
    "options": [
      "Avoid exposing sensitive details in error messages",
      "Display stack traces to users",
      "Log plaintext passwords",
      "Stop logging"
    ],
    "answer": 0,
    "explanation": "Errors should be generic to users and  detailed in logs."
  },
  {
    "id": 10394,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "The best way to verify security compliance before release is: \u00a9 2025 Manoj Kumar | Shared for educational and professional reference  https://linkedin.com/in/mkrj",
    "options": [
      "Conduct pre-production security review and sign-off",
      "Skip QA",
      "Trust developer judgment",
      "Run marketing test"
    ],
    "answer": 0,
    "explanation": "Gate reviews validate readiness for  deployment."
  },
  {
    "id": 10395,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Memory-safe languages like Rust and Go reduce:",
    "options": [
      "Buffer overflows and memory corruption",
      "Encryption",
      "Logging",
      "SQL errors"
    ],
    "answer": 0,
    "explanation": "Memory safety prevents class of low-level  vulnerabilities."
  },
  {
    "id": 10396,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Secure session management includes:",
    "options": [
      "Random session IDs, timeout, and secure cookie flags",
      "Static tokens",
      "Plain HTTP cookies",
      "Shared keys"
    ],
    "answer": 0,
    "explanation": "Prevents hijacking and fixation."
  },
  {
    "id": 10397,
    "domain": 6,
    "domain_name": "Security Assessment and Testing",
    "scenario": "General CISSP Concept Review",
    "question": "AI software testing should validate:",
    "options": [
      "Bias, explainability, and resilience under adversarial inputs",
      "GPU temperature",
      "Network latency",
      "Data backup"
    ],
    "answer": 0,
    "explanation": "Ethical and robust AI requires multidimensional  validation."
  },
  {
    "id": 10398,
    "domain": 8,
    "domain_name": "Software Development Security",
    "scenario": "General CISSP Concept Review",
    "question": "Which ISO standard provides secure SDLC guidance?",
    "options": [
      "ISO/IEC 27034",
      "ISO 9001",
      "ISO 22301",
      "ISO 42001"
    ],
    "answer": 0,
    "explanation": "ISO 27034 defines application security  lifecycle processes."
  },
  {
    "id": 10399,
    "domain": 8,
    "domain_name": "Software Development Security",
    "scenario": "General CISSP Concept Review",
    "question": "Secure DevOps pipelines should include:",
    "options": [
      "Code scanning, secret detection, and dependency checks",
      "Plaintext credentials",
      "Unrestricted builds",
      "Manual approval only"
    ],
    "answer": 0,
    "explanation": "Automation ensures consistent protection."
  },
  {
    "id": 10400,
    "domain": 8,
    "domain_name": "Software Development Security",
    "scenario": "General CISSP Concept Review",
    "question": "Final step of secure software development is: \u00a9 2025 Manoj Kumar | Shared for educational and professional reference  https://linkedin.com/in/mkrj",
    "options": [
      "Deployment with continuous monitoring and feedback loops",
      "Archiving source code only",
      "Deleting repositories",
      "Granting admin rights"
    ],
    "answer": 0,
    "explanation": "Continuous feedback maintains long-term  software security."
  },
  {
    "id": 1,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "What is the FIRST step when developing an Information Security Continuous Monitoring (ISCM) program?",
    "options": [
      "Establish an ISCM technical architecture.",
      "Collect the security-related information required for metrics, assessments, and reporting.",
      "Establish an ISCM program determining metrics, status monitoring frequencies, and control assessment frequencies.",
      "Define an ISCM strategy based on risk tolerance."
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 2,
    "domain": 4,
    "domain_name": "Communication and Network Security",
    "scenario": "An organization has been collecting a large amount of redundant and unusable data and filling up the storage area network (SAN). Management has requested the identification of a solution that will address ongoing storage problems.",
    "question": "Which is the BEST technical solution?",
    "options": [
      "Deduplication",
      "Compression",
      "Replication",
      "Caching"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Communication and Network Security. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 3,
    "domain": 8,
    "domain_name": "Software Development Security",
    "scenario": "General CISSP Concept Review",
    "question": "In which process MUST security be considered during the acquisition of new software?",
    "options": [
      "Contract negotiation",
      "Request for proposal (RFP)",
      "Implementation",
      "Vendor selection"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Software Development Security. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 4,
    "domain": 4,
    "domain_name": "Communication and Network Security",
    "scenario": "Wireless users are reporting intermittent Internet connectivity. Connectivity is restored when the users disconnect and reconnect, utilizing the web authentication process each time. The network administrator can see the devices connected to the APs at all times.",
    "question": "Which of the following steps will MOST likely determine the cause of the issue?",
    "options": [
      "Verify the session time-out configuration on the captive portal settings",
      "Check for encryption protocol mismatch on the client's wireless settings.",
      "Confirm that a valid passphrase is being used during the web authentication.",
      "Investigate for a client's disassociation caused by an evil twin AP"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Communication and Network Security. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 5,
    "domain": 4,
    "domain_name": "Communication and Network Security",
    "scenario": "Two computers, each with a single connection on the same physical 10 gigabit Ethernet network segment, need to communicate with each other. The first machine has a single Internet Protocol (IP) Classless Inter-Domain Routing (CIDR) address of 192.168.1.3/30 and the second machine has an IP/CIDR address 192.168.1.6/30.",
    "question": "Which of the following is correct?",
    "options": [
      "Since each computer is on a different layer 3 network, traffic between the computers must be processed by a network bridge in order to communicate.",
      "Since each computer is on the same layer 3 network, traffic between the computers may be processed by a network bridge in order to communicate.",
      "Since each computer is on the same layer 3 network, traffic between the computers may be processed by a network router in order to communicate.",
      "Since each computer is on a different layer 3 network, traffic between the computers must be processed by a network router in order to communicate."
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Communication and Network Security. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 6,
    "domain": 3,
    "domain_name": "Security Architecture and Engineering",
    "scenario": "A database server for a financial application is scheduled for production deployment.",
    "question": "Which of the following controls will BEST prevent tampering?",
    "options": [
      "Service accounts removal",
      "Data validation",
      "Logging and monitoring",
      "Data sanitization"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Security Architecture and Engineering. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 7,
    "domain": 3,
    "domain_name": "Security Architecture and Engineering",
    "scenario": "he security organization is loading for a solution that could help them determine with a strong level of confident that attackers have breached their network.",
    "question": "Which solution is MOST effective at discovering successful network breach? Guaranteed success with Our exam guides visit - https://www.certshared.com Certshared now are offering 100% pass ensure CISSP dumps! https://www.certshared.com/exam/CISSP/ (1487 Q&As)",
    "options": [
      "Installing an intrusion prevention system (IPS)",
      "Deploying a honeypot",
      "Installing an intrusion detection system (IDS)",
      "Developing a sandbox"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Security Architecture and Engineering. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 8,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following is established to collect information Se eee ee ee nation readily available in part through implemented security controls?",
    "options": [
      "Security Assessment Report (SAR)",
      "Organizational risk tolerance",
      "Information Security Continuous Monitoring (ISCM)",
      "Risk assessment report"
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 9,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "An organization has implemented a password complexity and an account lockout policy enforcing five incorrect logins tries within ten minutes. Network users have reported significantly increased account lockouts.",
    "question": "Which of the following security principles is this company affecting?",
    "options": [
      "Availability",
      "Integrity",
      "Confidentiality",
      "Authentication"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 10,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which security evaluation model assesses a product's Security Assurance Level (SAL) in comparison to similar solutions?",
    "options": [
      "Payment Card Industry Data Security Standard (PCI-DSS)",
      "International Organization for Standardization (ISO) 27001",
      "Common criteria (CC)",
      "Control Objectives for Information and Related Technology (COBIT)"
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 11,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "An international trading organization that holds an International Organization for Standardization (ISO) 27001 certification is seeking to outsource their security monitoring to a managed security service provider (MSSP), The trading organization's security officer is tasked with drafting the requirements that need to be included in the outsourcing contract.",
    "question": "Which of the following MUST be included in the contract?",
    "options": [
      "A detailed overview of all equipment involved in the outsourcing contract",
      "The MSSP having an executive manager responsible for information security",
      "The right to perform security compliance tests on the MSSP's equipment",
      "The right to audit the MSSP's security process"
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 15,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following is a common term for log reviews, synthetic transactions, and code reviews?",
    "options": [
      "Security control testing",
      "Application development",
      "Spiral development functional testing",
      "DevOps Integrated Product Team (IPT) development"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 19,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "When reviewing vendor certifications for handling and processing of company data, which of the following is the BEST Service Organization Controls (SOC) certification for the vendor to possess?",
    "options": [
      "SOC 1 Type 1",
      "SOC 2 Type 1",
      "SOC 2 Type 2",
      "SOC 3"
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 22,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "When reviewing the security logs, the password shown for an administrative login event was ' OR ' '1'='1' --.",
    "question": "This is an example of which of the following kinds of attack?",
    "options": [
      "Brute Force Attack",
      "Structured Query Language (SQL) Injection",
      "Cross-Site Scripting (XSS)",
      "Rainbow Table Attack"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 23,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "What type of database attack would allow a customer service employee to determine quarterly sales results before they are publically announced?",
    "options": [
      "Polyinstantiation",
      "Inference",
      "Aggregation",
      "Data mining"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 25,
    "domain": 3,
    "domain_name": "Security Architecture and Engineering",
    "scenario": "A company is moving from the V model to Agile development.",
    "question": "How can the information security department BEST ensure that secure design principles are implemented in the new methodology?",
    "options": [
      "All developers receive a mandatory targeted information security training.",
      "The non-financial information security requirements remain mandatory for the new model.",
      "The information security department performs an information security assessment after each sprint.",
      "Information security requirements are captured in mandatory user stories."
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Security Architecture and Engineering. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 30,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "What is the MAIN purpose of conducting a business impact analysis (BIA)?",
    "options": [
      "To determine the critical resources required to recover from an incident within a specified time period",
      "To determine the effect of mission-critical information system failures on core business processes",
      "To determine the cost for restoration of damaged information system",
      "To determine the controls required to return to business critical operations"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 34,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following is the BEST method to identify security controls that should be implemented for a web-based application while in development?",
    "options": [
      "Application threat modeling",
      "Secure software development.",
      "Agile software development",
      "Penetration testing"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 37,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "In order to support the least privilege security principle when a resource is transferring within the organization from a production support system administration role to a developer role, what changes should be made to the resource\u2019s access to the production operating system (OS) directory structure?",
    "options": [
      "From Read Only privileges to No Access Privileges",
      "From Author privileges to Administrator privileges",
      "From Administrator privileges to No Access privileges",
      "From No Access Privileges to Author privileges"
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 38,
    "domain": 7,
    "domain_name": "Security Operations",
    "scenario": "During a Disaster Recovery (DR) simulation, it is discovered that the shared recovery site lacks adequate data restoration capabilities to support the implementation of multiple plans simultaneously.",
    "question": "What would be impacted by this fact if left unchanged?",
    "options": [
      "Recovery Point Objective (RPO)",
      "Recovery Time Objective (RTO)",
      "Business Impact Analysis (BIA)",
      "Return on Investment (ROI)",
      "A"
    ],
    "answer": 4,
    "explanation": "This question covers a critical concept in Security Operations. Option E is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 42,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following is performed to determine a measure of success of a security awareness training program designed to prevent social engineering attacks?",
    "options": [
      "Employee evaluation of the training program",
      "Internal assessment of the training program's effectiveness",
      "Multiple choice tests to participants",
      "Management control of reviews"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 46,
    "domain": 5,
    "domain_name": "Identity and Access Management (IAM)",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following factors should be considered characteristics of Attribute Based Access Control (ABAC) in terms of the attributes used?",
    "options": [
      "Mandatory Access Control (MAC) and Discretionary Access Control (DAC)",
      "Discretionary Access Control (DAC) and Access Control List (ACL)",
      "Role Based Access Control (RBAC) and Mandatory Access Control (MAC)",
      "Role Based Access Control (RBAC) and Access Control List (ACL)"
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Identity and Access Management (IAM). Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 49,
    "domain": 4,
    "domain_name": "Communication and Network Security",
    "scenario": "An organization recently upgraded to a Voice over Internet Protocol (VoIP) phone system. Management is concerned with unauthorized phone usage. Security consultant is responsible for putting together a plan to secure these phones. Administrators have assigned unique personal identification number codes for each person in the organization.",
    "question": "What is the BEST solution?",
    "options": [
      "Use phone locking software to enforce usage and PIN policies.",
      "Inform the user to change the PIN regularl",
      "Implement call detail records (CDR) reports to track usage.",
      "Have the administrator enforce a policy to change the PIN regularl",
      "Implement call detail records (CDR) reports to track usage."
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Communication and Network Security. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 53,
    "domain": 4,
    "domain_name": "Communication and Network Security",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following statements BEST distinguishes a stateful packet inspection firewall from a stateless packet filter firewall?",
    "options": [
      "The SPI inspects the flags on Transmission Control Protocol (TCP) and User Datagram Protocol (UDP) packets.",
      "The SPI inspects the traffic in the context of a session.",
      "The SPI is capable of dropping packets based on a pre-defined rule set.",
      "The SPI inspects traffic on a packet-by-packet basis."
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Communication and Network Security. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 57,
    "domain": 5,
    "domain_name": "Identity and Access Management (IAM)",
    "scenario": "General CISSP Concept Review",
    "question": "What type of attack sends Internet Control Message Protocol (ICMP) echo requests to the target machine with a larger payload than the target can handle?",
    "options": [
      "Man-in-the-Middle (MITM)",
      "Denial of Service (DoS)",
      "Domain Name Server (DNS) poisoning",
      "Buffer overflow"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Identity and Access Management (IAM). Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 62,
    "domain": 5,
    "domain_name": "Identity and Access Management (IAM)",
    "scenario": "General CISSP Concept Review",
    "question": "Which access control method is based on users issuing access requests on system resources, features assigned to those resources, the operational or situational context, and a set of policies specified in terms of those features and context?",
    "options": [
      "Mandatory Access Control (MAC)",
      "Role Based Access Control (RBAC)",
      "Discretionary Access Control (DAC)",
      "Attribute Based Access Control (ABAC)"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Identity and Access Management (IAM). Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 66,
    "domain": 2,
    "domain_name": "Asset Security",
    "scenario": "General CISSP Concept Review",
    "question": "Why is data classification control important to an organization?",
    "options": [
      "To ensure its integrity, confidentiality and availability",
      "To enable data discovery",
      "To control data retention in alignment with organizational policies and regulation",
      "To ensure security controls align with organizational risk appetite"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Asset Security. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 70,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following MUST the administrator of a security information and event management (SIEM) system ensure?",
    "options": [
      "All sources are reporting in the exact same Extensible Markup Language (XML) format.",
      "Data sources do not contain information infringing upon privacy regulations.",
      "All sources are synchronized with a common time reference.",
      "Each source uses the same Internet Protocol (IP) address for reporting."
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 72,
    "domain": 2,
    "domain_name": "Asset Security",
    "scenario": "A project manager for a large software firm has acquired a government contract that generates large amounts of Controlled Unclassified Information (CUI). The organization's information security manager has received a request to transfer project-related CUI between systems of differing security classifications.",
    "question": "What role provides the authoritative guidance for this transfer?",
    "options": [
      "Information owner",
      "PM",
      "Data Custodian",
      "Mission/Business Owner"
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Asset Security. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 77,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "A digitally-signed e-mail was delivered over a wireless network protected with Wired Equivalent Privacy (WEP) protocol.",
    "question": "Which of the following principles is at risk?",
    "options": [
      "Availability",
      "Non-Repudiation",
      "Confidentiality",
      "Integrity"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 79,
    "domain": 5,
    "domain_name": "Identity and Access Management (IAM)",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following is the BEST way to mitigate circumvention of access controls?",
    "options": [
      "Multi-layer access controls working in isolation",
      "Multi-vendor approach to technology implementation",
      "Multi-layer firewall architecture with Internet Protocol (IP) filtering enabled",
      "Multi-layer access controls with diversification of technologies"
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Identity and Access Management (IAM). Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 80,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following regulations dictates how data breaches are handled?",
    "options": [
      "Sarbanes-Oxley (SOX)",
      "National Institute of Standards and Technology (NIST)",
      "Payment Card Industry Data Security Standard (PCI-DSS)",
      "General Data Protection Regulation (GDPR)"
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 84,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following BEST describes the objectives of the Business Impact Analysis (BIA)?",
    "options": [
      "Identifying the events and environmental factors that can adversely affect an organization",
      "Identifying what is important and critical based on disruptions that can affect the organization.",
      "Establishing the need for a Business Continuity Plan (BCP) based on threats that can affect an organization",
      "Preparing a program to create an organizational awareness for executing the Business Continuity Plan (BCP)"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 89,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following is an indicator that a company's new user security awareness training module has been effective?",
    "options": [
      "There are more secure connections to the internal database servers.",
      "More incidents of phishing attempts are being reported.",
      "There are more secure connections to internal e-mail servers.",
      "Fewer incidents of phishing attempts are being reported."
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 90,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following examples is BEST to minimize the attack surface for a customer's private information?",
    "options": [
      "Obfuscation",
      "Collection limitation",
      "Authentication",
      "Data masking"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 94,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following is a term used to describe maintaining ongoing awareness of information security, vulnerabilities, and threats to support organizational risk management decisions?",
    "options": [
      "Information Security Management System (ISMS)",
      "Information Sharing & Analysis Centers (ISAC)",
      "Risk Management Framework (RMF)",
      "Information Security Continuous Monitoring (ISCM)"
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 97,
    "domain": 7,
    "domain_name": "Security Operations",
    "scenario": "A security architect is reviewing plans for an application with a Recovery Point Objective (RPO) of 15 minutes. The current design has all of the application infrastructure located within one co-location data center.",
    "question": "Which security principle is the architect currently assessing?",
    "options": [
      "Availability",
      "Disaster recovery (DR)",
      "Redundancy",
      "Business continuity (BC)"
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Security Operations. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 101,
    "domain": 4,
    "domain_name": "Communication and Network Security",
    "scenario": "General CISSP Concept Review",
    "question": "As a design principle, which one of the following actors is responsible for identifying and approving data security requirements in a cloud ecosystem?",
    "options": [
      "Cloud broker",
      "Cloud provider",
      "Cloud consumer",
      "Cloud auditor"
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Communication and Network Security. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 102,
    "domain": 3,
    "domain_name": "Security Architecture and Engineering",
    "scenario": "General CISSP Concept Review",
    "question": "Guaranteed success with Our exam guides visit - https://www.certshared.com Certshared now are offering 100% pass ensure CISSP dumps! https://www.certshared.com/exam/CISSP/ (1487 Q&As)",
    "options": [
      "Require the cloud 1AM provider to use declarative security instead of programmatic authentication checks.",
      "Integrate a Web-Application Firewall (WAF) In reverie-proxy mode in front of the service provider.",
      "Apply Transport layer Security (TLS) to the cloud-based authentication checks.",
      "Install an on-premise Authentication Gateway Service (AGS) In front of the service provider."
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Security Architecture and Engineering. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 105,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following is security control volatility?",
    "options": [
      "A reference to the stability of the security control.",
      "A reference to how unpredictable the security control is.",
      "A reference to the impact of the security control.",
      "A reference to the likelihood of change in the security control."
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 108,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "An establish information technology (IT) consulting firm is considering acquiring a successful local startup.",
    "question": "To gain a comprehensive understanding of the startup\u2019s security posture\u2019 which type of assessment provides the BEST information?",
    "options": [
      "A security audit",
      "A penetration test",
      "A tabletop exercise",
      "A security threat model"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 112,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following is the GREATEST risk of relying only on Capability Maturity Models (CMM) for software to guide process improvement and assess capabilities of acquired software?",
    "options": [
      "Organizations can only reach a maturity level 3 when using CMMs",
      "CMMs do not explicitly address safety and security",
      "CMMs can only be used for software developed in-house",
      "CMMs are vendor specific and may be biased"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 114,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "A financial services organization has employed a security consultant to review processes used by employees across various teams. The consultant interviewed a member of the application development practice and found gaps in their threat model.",
    "question": "Which of the following correctly represents a trigger for when a threat model should be revised?",
    "options": [
      "A new data repository is added.",
      "is After operating system (OS) patches are applied",
      "After a modification to the firewall rule policy",
      "A new developer is hired into the team."
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 116,
    "domain": 3,
    "domain_name": "Security Architecture and Engineering",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following is an example of a vulnerability of full-disk encryption (FDE)?",
    "options": [
      "Data at rest has been compromised when the user has authenticated to the device.",
      "Data on the device cannot be restored from backup.",
      "Data in transit has been compromised when the user has authenticated to the device.",
      "Data on the device cannot be backed up."
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Security Architecture and Engineering. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 119,
    "domain": 3,
    "domain_name": "Security Architecture and Engineering",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following services can be deployed via a cloud service or on-premises to integrate with Identity as a Service (IDaaS) as the authoritative source of user identities?",
    "options": [
      "Directory",
      "User database",
      "Multi-factor authentication (MFA)",
      "Single sign-on (SSO)"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Security Architecture and Engineering. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 121,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "What is the term used to define where data is geographically stored in the cloud?",
    "options": [
      "Data warehouse",
      "Data privacy rights",
      "Data subject rights",
      "Data sovereignty"
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 126,
    "domain": 4,
    "domain_name": "Communication and Network Security",
    "scenario": "A technician wants to install a WAP in the center of a room that provides service in a radius surrounding a radio.",
    "question": "Which of the following antenna types should the AP utilize?",
    "options": [
      "Omni",
      "Directional",
      "Yagi",
      "Parabolic"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Communication and Network Security. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 127,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following is included in change management?",
    "options": [
      "Business continuity testing",
      "User Acceptance Testing (UAT) before implementation",
      "Technical review by business owner",
      "Cost-benefit analysis (CBA) after implementation"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 131,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following is MOST important to follow when developing information security controls for an organization?",
    "options": [
      "Exercise due diligence with regard to all risk management information to tailor appropriate controls.",
      "Perform a risk assessment and choose a standard that addresses existing gaps.",
      "Use industry standard best practices for security controls in the organization.",
      "Review all local and international standards and choose the most stringent based on location."
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 136,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "The Chief Executive Officer (CEO) wants to implement an internal audit of the company's information security posture. The CEO wants to avoid any bias in the audit process; therefore, has assigned the Sales Director to conduct the audit. After significant interaction over a period of weeks the audit concludes that the company's policies and procedures are sufficient, robust and well established. The CEO then moves on to engage an external penetration testing company in order to showcase the organization's robust information security stance. This exercise reveals significant failings in several critical security controls and shows that the incident response processes remain undocumented.",
    "question": "What is the MOST likely reason for this disparity in the results of the audit and the external penetration test?",
    "options": [
      "The external penetration testing company used custom zero-day attacks that could not have been predicted.",
      "The information technology (IT) and governance teams have failed to disclose relevant information to the internal audit team leading to an incomplete",
      "The scope of the penetration test exercise and the internal audit were significantly different.",
      "The audit team lacked the technical experience and training to make insightful and objective assessments of the data provided to them."
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 137,
    "domain": 3,
    "domain_name": "Security Architecture and Engineering",
    "scenario": "In the last 15 years a company has experienced three electrical failures. The cost associated with each failure is listed below.",
    "question": "Which of the following would be a reasonable annual loss expectation? Guaranteed success with Our exam guides visit - https://www.certshared.com Certshared now are offering 100% pass ensure CISSP dumps! https://www.certshared.com/exam/CISSP/ (1487 Q&As)",
    "options": [
      "140,000",
      "3,500",
      "350,000",
      "14,000"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Security Architecture and Engineering. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 139,
    "domain": 6,
    "domain_name": "Security Assessment and Testing",
    "scenario": "General CISSP Concept Review",
    "question": "When testing password strength, which of the following is the BEST method for brute forcing passwords?",
    "options": [
      "Conduct an offline attack on the hashed password information.",
      "Conduct an online password attack until the account being used is locked.",
      "Use a comprehensive list of words to attempt to guess the password.",
      "Use social engineering methods to attempt to obtain the password."
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Security Assessment and Testing. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 142,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "A developer begins employment with an information technology (IT) organization. On the first day, the developer works through the list of assigned projects and finds that some files within those projects aren't accessible, Other developers working on the same project have no trouble locating and working on the.",
    "question": "What is the MOST likely explanation for the discrepancy in access?",
    "options": [
      "The IT administrator had failed to grant the developer privileged access to the servers.",
      "The project files were inadvertently deleted.",
      "The new developer's computer had not been added to an access control list (ACL).",
      "The new developer's user account was not associated with the right roles needed for the projects."
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 144,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "What is the MOST important criterion that needs to be adhered to during the data collection process of an active investigation?",
    "options": [
      "Capturing an image of the system",
      "Maintaining the chain of custody",
      "Complying with the organization's security policy",
      "Outlining all actions taken during the investigation"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 146,
    "domain": 5,
    "domain_name": "Identity and Access Management (IAM)",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following is an open standard for exchanging authentication and authorization data between parties?",
    "options": [
      "Wired markup language",
      "Hypertext Markup Language (HTML)",
      "Extensible Markup Language (XML)",
      "Security Assertion Markup Language (SAML)"
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Identity and Access Management (IAM). Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 149,
    "domain": 8,
    "domain_name": "Software Development Security",
    "scenario": "A software development company has a short timeline in which to deliver a software product. The software development team decides to use open-source software libraries to reduce the development time.",
    "question": "What concept should software developers consider when using open-source software libraries?",
    "options": [
      "Open source libraries contain known vulnerabilities, and adversaries regularly exploit those vulnerabilities in the wild.",
      "Open source libraries can be used by everyone, and there is a common understanding that the vulnerabilities in these libraries will not be exploited.",
      "Open source libraries are constantly updated, making it unlikely that a vulnerability exists for an adversary to exploit.",
      "Open source libraries contain unknown vulnerabilities, so they should not be used."
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Software Development Security. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 150,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following criteria ensures information is protected relative to its importance to the organization?",
    "options": [
      "The value of the data to the organization's senior management",
      "Legal requirements, value, criticality, and sensitivity to unauthorized disclosure or modification",
      "Legal requirements determined by the organization headquarters' location",
      "Organizational stakeholders, with classification approved by the management board"
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 151,
    "domain": 2,
    "domain_name": "Asset Security",
    "scenario": "General CISSP Concept Review",
    "question": "When network management is outsourced to third parties, which of the following is the MOST effective method of protecting critical data assets?",
    "options": [
      "Provide links to security policies",
      "Log all activities associated with sensitive systems",
      "Employ strong access controls",
      "Confirm that confidentiality agreements are signed"
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Asset Security. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 152,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "What security principle addresses the issue of \"Security by Obscurity\"?",
    "options": [
      "Open design",
      "Segregation of duties (SoD)",
      "Role Based Access Control (RBAC)",
      "Least privilege"
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 154,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "A security professional should ensure that clients support which secondary algorithm for digital signatures when a Secure Multipurpose Internet Mail Extension (S/MIME) is used?",
    "options": [
      "Triple Data Encryption Standard (3DES)",
      "Advanced Encryption Standard (AES)",
      "Digital Signature Algorithm (DSA)",
      "Rivest-Shamir-Adieman (RSA)"
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 155,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following is a common risk with fiber optical communications, and what is the associated mitigation measure?",
    "options": [
      "Data emanation, deploying Category (CAT) 6 and higher cable wherever feasible",
      "Light leakage, deploying shielded cable wherever feasible",
      "Cable damage, deploying ring architecture wherever feasible",
      "Electronic eavesdropping, deploying end-to-end encryption wherever feasible"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 157,
    "domain": 7,
    "domain_name": "Security Operations",
    "scenario": "General CISSP Concept Review",
    "question": "Computer forensics requires which of the following MAIN steps?",
    "options": [
      "Announce the incident to responsible sections, analyze the data, assimilate the data for correlation",
      "Take action to contain the damage, announce the incident to responsible sections, analyze the data",
      "Acquire the data without altering, authenticate the recovered data, analyze the data",
      "Access the data before destruction, assimilate the data for correlation, take action to contain the damage"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Security Operations. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 160,
    "domain": 2,
    "domain_name": "Asset Security",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following is the MOST appropriate control for asset data labeling procedures?",
    "options": [
      "Logging data media to provide a physical inventory control",
      "Reviewing audit trails of logging records",
      "Categorizing the types of media being used",
      "Reviewing off-site storage access controls"
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Asset Security. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 163,
    "domain": 5,
    "domain_name": "Identity and Access Management (IAM)",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following would need to be configured to ensure a device with a specific MAC address is always assigned the same IP address from DHCP?",
    "options": [
      "Scope options",
      "Reservation",
      "Dynamic assignment",
      "Exclusion",
      "Static assignment"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Identity and Access Management (IAM). Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 165,
    "domain": 8,
    "domain_name": "Software Development Security",
    "scenario": "General CISSP Concept Review",
    "question": "In software development, which of the following entities normally signs the code to protect the code integrity?",
    "options": [
      "The organization developing the code",
      "The quality control group",
      "The data owner",
      "The developer"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Software Development Security. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 166,
    "domain": 7,
    "domain_name": "Security Operations",
    "scenario": "General CISSP Concept Review",
    "question": "Which type of disaster recovery plan (DRP) testing carries the MOST operational risk?",
    "options": [
      "Cutover",
      "Walkthrough",
      "Tabletop",
      "Parallel"
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Security Operations. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 171,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "In systems security engineering, what does the security principle of modularity provide?",
    "options": [
      "Documentation of functions",
      "Isolated functions and data",
      "Secure distribution of programs and data",
      "Minimal access to perform a function"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 176,
    "domain": 6,
    "domain_name": "Security Assessment and Testing",
    "scenario": "A federal agency has hired an auditor to perform penetration testing on a critical system as part of the mandatory, annual Federal Information Security Management Act (FISMA) security assessments. The auditor is new to this system but has extensive experience with all types of penetration testing. The auditor has decided to begin with sniffing network traffic.",
    "question": "What type of penetration testing is the auditor conducting?",
    "options": [
      "White box testing",
      "Black box testing",
      "Gray box testing",
      "Red box testing"
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Security Assessment and Testing. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 179,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "What is the MOST important goal of conducting security assessments?",
    "options": [
      "To prepare the organization for an external audit, particularly by a regulatory entity",
      "To discover unmitigated security vulnerabilities, and propose paths for mitigating them",
      "To align the security program with organizational risk appetite",
      "To demonstrate proper function of security controls and processes to senior management"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 182,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "A corporation does not have a formal data destruction policy.",
    "question": "During which phase of a criminal legal proceeding will this have the MOST impact?",
    "options": [
      "Arraignment",
      "Trial",
      "Sentencing",
      "Discovery"
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 184,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "What is the FINAL step in the waterfall method for contingency planning?",
    "options": [
      "Maintenance",
      "Testing",
      "Implementation",
      "Training"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 187,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "What is static analysis intended to do when analyzing an executable file?",
    "options": [
      "Collect evidence of the executable file's usage, including dates of creation and last use.",
      "Search the documents and files associated with the executable file.",
      "Analyze the position of the file in the file system and the executable file's libraries.",
      "Disassemble the file to gather information about the executable file's function."
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 190,
    "domain": 4,
    "domain_name": "Communication and Network Security",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following is the reason that transposition ciphers are easily recognizable?",
    "options": [
      "Key",
      "Block",
      "Stream",
      "Character"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Communication and Network Security. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 192,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following is the PRIMARY issue when analyzing detailed log information?",
    "options": [
      "Logs may be unavailable when required",
      "Timely review of the data is potentially difficult",
      "Most systems and applications do not support logging",
      "Logs do not provide sufficient details of system and individual activities"
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 193,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following describes the order in which a digital forensic process is usually conducted?",
    "options": [
      "Ascertain legal authority, agree upon examination strategy, conduct examination, and report results",
      "Ascertain legal authority, conduct investigation, report results, and agree upon examination strategy",
      "Agree upon examination strategy, ascertain legal authority, conduct examination, and report results",
      "Agree upon examination strategy, ascertain legal authority, report results, and conduct examination"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 194,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following outsourcing agreement provisions has the HIGHEST priority from a security operations perspective?",
    "options": [
      "Conditions to prevent the use of subcontractors",
      "Terms for contract renegotiation in case of disaster",
      "Escalation process for problem resolution during incidents",
      "Root cause analysis for application performance issue"
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 195,
    "domain": 8,
    "domain_name": "Software Development Security",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following addresses requirements of security assessments during software acquisition?",
    "options": [
      "Software configuration management (SCM)",
      "Data loss prevention (DLP) policy",
      "Continuous monitoring",
      "Software assurance policy"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Software Development Security. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 196,
    "domain": 5,
    "domain_name": "Identity and Access Management (IAM)",
    "scenario": "In a large company, a system administrator needs to assign users access to files using Role Based Access Control (RBAC).",
    "question": "Which option Is an example of Guaranteed success with Our exam guides visit - https://www.certshared.com Certshared now are offering 100% pass ensure CISSP dumps! https://www.certshared.com/exam/CISSP/ (1487 Q&As) RBAC?",
    "options": [
      "Mowing users access to files based on their group membership",
      "Allowing users access to files based on username",
      "Allowing users access to files based on the users location at time of access",
      "Allowing users access to files based on the file type"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Identity and Access Management (IAM). Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 197,
    "domain": 4,
    "domain_name": "Communication and Network Security",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following will an organization's network vulnerability testing process BEST enhance?",
    "options": [
      "Firewall log review processes",
      "Asset management procedures",
      "Server hardening processes",
      "Code review procedures"
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Communication and Network Security. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 202,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "What is the PRIMARY benefit of relying on Security Content Automation Protocol (SCAP)?",
    "options": [
      "Save security costs for the organization.",
      "Improve vulnerability assessment capabilities.",
      "Standardize specifications between software security products.",
      "Achieve organizational compliance with international standards."
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 206,
    "domain": 2,
    "domain_name": "Asset Security",
    "scenario": "General CISSP Concept Review",
    "question": "Data remanence is the biggest threat in which of the following scenarios?",
    "options": [
      "A physical disk drive has been overwritten and reused within a datacenter.",
      "A physical disk drive has been degaussed, verified, and released to a third party for dest\u2026\u2026.",
      "A flash drive has been overwritten, verified, and reused within a datacenter.",
      "A flash drive has been overwritten and released to a third party for destruction."
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Asset Security. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 211,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following is the PRIMARY reason for selecting the appropriate level of detail for audit record generation?",
    "options": [
      "Lower costs throughout the System Development Life Cycle (SDLC)",
      "Facilitate a root cause analysis (RCA)",
      "Enable generation of corrective action reports",
      "Avoid lengthy audit reports"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 216,
    "domain": 8,
    "domain_name": "Software Development Security",
    "scenario": "An organization has determined that its previous waterfall approach to software development is not keeping pace with business demands. To adapt to the rapid changes required for product delivery, the organization has decided to move towards an Agile software development and release cycle.",
    "question": "In order to ensure the success of the Agile methodology, who is MOST critical in creating acceptance tests or acceptance criteria for each release?",
    "options": [
      "Project managers",
      "Software developers",
      "Independent testers",
      "Business customers"
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Software Development Security. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 221,
    "domain": 4,
    "domain_name": "Communication and Network Security",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following attacks, if successful, could give an intruder complete control of a software-defined networking (SDN) architecture?",
    "options": [
      "Sniffing the traffic of a compromised host inside the network",
      "Sending control messages to open a flow that does not pass a firewall from a compromised host within the network",
      "A brute force password attack on the Secure Shell (SSH) port of the controller",
      "Remote Authentication Dial-In User Service (RADIUS) token replay attack"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Communication and Network Security. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 222,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which event magnitude is defined as deadly, destructive, and disruptive when a hazard interacts with human vulnerability?",
    "options": [
      "Disaster",
      "Catastrophe",
      "Crisis",
      "Accident"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 225,
    "domain": 7,
    "domain_name": "Security Operations",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following events prompts a review of the disaster recovery plan (DRP)?",
    "options": [
      "New members added to the steering committee",
      "Completion of the security policy review",
      "Change in senior management",
      "Organizational merger"
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Security Operations. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 226,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following vulnerability assessment activities BEST exemplifies the Examine method of assessment?",
    "options": [
      "Ensuring that system audit logs capture all relevant data fields required by the security controls baseline",
      "Performing Port Scans of selected network hosts to enumerate active services",
      "Asking the Information System Security Officer (ISSO) to describe the organization\u2019s patch management processes",
      "Logging into a web server using the default administrator account and a default password"
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 228,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "What requirement MUST be met during internal security audits to ensure that all information provided is expressed as an objective assessment without risk of retaliation?",
    "options": [
      "The auditor must be independent and report directly to the management.",
      "The auditor must utilize automated tools to back their findings.",
      "The auditor must work closely with both the information Technology (IT) and security sections of an organization.",
      "The auditor must perform manual reviews of systems and processes."
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 231,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following needs to be tested to achieve a Cat 6a certification for a company's data cabling?",
    "options": [
      "RJ11",
      "LC ports",
      "Patch panel",
      "F-type connector"
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 234,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following explains why classifying data is an important step in performing a Risk assessment?",
    "options": [
      "To provide a framework for developing good security metrics",
      "To justify the selection of costly security controls",
      "To classify the security controls sensitivity that helps scope the risk assessment",
      "To help determine the appropriate level of data security controls"
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 241,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "The security team plans on using automated account reconciliation in the corporate user access review process.",
    "question": "Which of the following must be implemented for the BEST results with fewest errors when running the audit?",
    "options": [
      "Removal of service accounts from review",
      "Segregation of Duties (SoD)",
      "Clear provisioning policies",
      "Frequent audits"
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 245,
    "domain": 4,
    "domain_name": "Communication and Network Security",
    "scenario": "A fiber link connecting two campus networks is broken.",
    "question": "Which of the following tools should an engineer use to detect the exact break point of the fiber link?",
    "options": [
      "OTDR",
      "Tone generator",
      "Fusion splicer",
      "Cable tester",
      "PoE injector"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Communication and Network Security. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 246,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "A software architect has been asked to build a platform to distribute music to thousands of users on a global scale. The architect has been reading about content delivery networks (CDN).",
    "question": "Which of the following is a principal task to undertake?",
    "options": [
      "Establish a service-oriented architecture (SOA).",
      "Establish a media caching methodology.",
      "Establish relationships with hundreds of Internet service providers (ISP).",
      "Establish a low-latency wide area network (WAN)."
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 249,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following BEST obtains an objective audit of security controls?",
    "options": [
      "The security audit is measured against a known standard.",
      "The security audit is performed by a certified internal auditor.",
      "The security audit is performed by an independent third-party.",
      "The security audit produces reporting metrics for senior leadership."
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 252,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "The security team has been tasked with performing an interface test against a frontend external facing application and needs to verify that all input fields protect against invalid input.",
    "question": "Which of the following BEST assists this process?",
    "options": [
      "Application fuzzing",
      "Instruction set simulation",
      "Regression testing",
      "Sanity testing"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 256,
    "domain": 4,
    "domain_name": "Communication and Network Security",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following is a key responsibility for a data steward assigned to manage an enterprise data lake?",
    "options": [
      "Ensure proper business definition, value, and usage of data collected and stored within the enterprise data lake.",
      "Ensure proper and identifiable data owners for each data element stored within an enterprise data lake.",
      "Ensure adequate security controls applied to the enterprise data lake.",
      "Ensure that any data passing within remit is being used in accordance with the rules and regulations of the business."
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Communication and Network Security. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 260,
    "domain": 5,
    "domain_name": "Identity and Access Management (IAM)",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following is a unique feature of attribute-based access control (ABAC)? Guaranteed success with Our exam guides visit - https://www.certshared.com Certshared now are offering 100% pass ensure CISSP dumps! https://www.certshared.com/exam/CISSP/ (1487 Q&As)",
    "options": [
      "A user is granted access to a system based on group affinity.",
      "A user is granted access to a system with biometric authentication.",
      "A user is granted access to a system at a particular time of day.",
      "A user is granted access to a system based on username and password."
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Identity and Access Management (IAM). Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 263,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which section of the assessment report addresses separate vulnerabilities, weaknesses, and gaps?",
    "options": [
      "Key findings section",
      "Executive summary with full details",
      "Risk review section",
      "Findings definition section"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 266,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following BEST describes why software assurance is critical in helping prevent an increase in business and mission risk for an organization?",
    "options": [
      "Software that does not perform as intended may be exploitable which makes it vulnerable to attack.",
      "Request for proposals (RFP) avoid purchasing software that does not meet business needs.",
      "Contracting processes eliminate liability for security vulnerabilities for the purchaser.",
      "Decommissioning of old software reduces long-term costs related to technical debt."
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 269,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "What is the MOST important factor in establishing an effective Information Security Awareness Program?",
    "options": [
      "Obtain management buy-in.",
      "Conduct an annual security awareness event.",
      "Mandate security training.",
      "Hang information security posters on the walls,"
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 270,
    "domain": 4,
    "domain_name": "Communication and Network Security",
    "scenario": "A new site's gateway isn't able to form a tunnel to the existing site-to-site Internet Protocol Security (IPsec) virtual private network (VPN) device at headquarters. Devices at the new site have no problem accessing resources on the Internet. When testing connectivity between the remote site\u2019s gateway, it was observed that the external Internet Protocol (IP) address of the gateway was set to 192.168.1.1. and was configured to send outbound traffic to the Internet Service Provider (ISP) gateway at4 192.168.1.2.",
    "question": "Which of the following would be the BEST way to resolve the issue and get the remote site connected?",
    "options": [
      "Enable IPSec tunnel mode on the VPN devices at the new site and the corporate headquarters.",
      "Enable Layer 2 Tunneling Protocol (L2TP) on the VPN devices at the new site and the corporate headquarters.",
      "Enable Point-to-Point Tunneling Protocol (PPTP) on the VPN devices at the new site and the corporate headquarters.",
      "Enable Network Address Translation (NAT) - Traversal on the VPN devices at the new site and the corporate headquarters."
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Communication and Network Security. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 271,
    "domain": 8,
    "domain_name": "Software Development Security",
    "scenario": "General CISSP Concept Review",
    "question": "At what stage of the Software Development Life Cycle (SDLC) does software vulnerability remediation MOST likely cost the least to implement?",
    "options": [
      "Development",
      "Testing",
      "Deployme",
      "Design"
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Software Development Security. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 275,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following would be the BEST guideline to follow when attempting to avoid the exposure of sensitive data?",
    "options": [
      "Store sensitive data only when necessary.",
      "Educate end-users on methods of attacks on sensitive data.",
      "Establish report parameters for sensitive data.",
      "Monitor mail servers for sensitive data being exfilltrated."
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 277,
    "domain": 4,
    "domain_name": "Communication and Network Security",
    "scenario": "An organization wants to share data securely with their partners via the Internet.",
    "question": "Which standard port is typically used to meet this requirement?",
    "options": [
      "Setup a server on User Datagram Protocol (UDP) port 69",
      "Setup a server on Transmission Control Protocol (TCP) port 21",
      "Setup a server on Transmission Control Protocol (TCP) port 22",
      "Setup a server on Transmission Control Protocol (TCP) port 80"
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Communication and Network Security. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 278,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "The security operations center (SOC) has received credible intelligence that a threat actor is planning to attack with multiple variants of a destructive virus. After obtaining a sample set of this virus\u2019 variants and reverse engineering them to understand how they work, a commonality was found. All variants are coded to write to a specific memory location.",
    "question": "It is determined this virus is of no threat to the organization because they had the focresight to enable what feature on all endpoints?",
    "options": [
      "Process isolation",
      "Trusted Platform Module (TPM)",
      "Address Space Layout Randomization (ASLR)",
      "Virtualization"
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 283,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "During an internal audit of an organizational Information Security Management System (ISMS), nonconformities are identified.",
    "question": "In which of the following management stages are nonconformities reviewed, assessed and/or corrected by the organization?",
    "options": [
      "Planning",
      "Operation",
      "Assessment",
      "Improvement"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 287,
    "domain": 4,
    "domain_name": "Communication and Network Security",
    "scenario": "A company wants to implement two-factor authentication (2FA) to protect their computers from unauthorized users.",
    "question": "Which solution provides the MOST secure means of authentication and meets the criteria they have set?",
    "options": [
      "Username and personal identification number (PIN)",
      "Fingerprint and retinal scanners",
      "Short Message Services (SMS) and smartphone authenticator",
      "Hardware token and password"
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Communication and Network Security. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 291,
    "domain": 2,
    "domain_name": "Asset Security",
    "scenario": "General CISSP Concept Review",
    "question": "When determining data and information asset handling, regardless of the specific toolset being used, which of the following is one of the common components of big data?",
    "options": [
      "Consolidated data collection",
      "Distributed storage locations",
      "Distributed data collection",
      "Centralized processing location"
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Asset Security. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 295,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "A recent security audit is reporting several unsuccessful login attempts being repeated at specific times during the day on an Internet facing authentication server. No alerts have been generated by the security information and event management (SIEM) system.",
    "question": "What PRIMARY action should be taken to improve SIEM performance?",
    "options": [
      "Implement role-based system monitoring",
      "Audit firewall logs to identify the source of login attempts",
      "Enhance logging detail",
      "Confirm alarm thresholds"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 300,
    "domain": 3,
    "domain_name": "Security Architecture and Engineering",
    "scenario": "General CISSP Concept Review",
    "question": "Which is the PRIMARY mechanism for providing the workforce with the information needed to protect an agency\u2019s vital information resources? Guaranteed success with Our exam guides visit - https://www.certshared.com Certshared now are offering 100% pass ensure CISSP dumps! https://www.certshared.com/exam/CISSP/ (1487 Q&As)",
    "options": [
      "Incorporating security awareness and training as part of the overall information security program",
      "An information technology (IT) security policy to preserve the confidentiality, integrity, and availability of systems",
      "Implementation of access provisioning process for coordinating the creation of user accounts",
      "Execution of periodic security and privacy assessments to the organization"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Security Architecture and Engineering. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 305,
    "domain": 4,
    "domain_name": "Communication and Network Security",
    "scenario": "The security organization is looking for a solution that could help them determine with a strong level of confidence that attackers have breached their network.",
    "question": "Which solution is MOST effective at discovering a successful network breach?",
    "options": [
      "Deploying a honeypot",
      "Developing a sandbox",
      "Installing an intrusion prevention system (IPS)",
      "Installing an intrusion detection system (IDS)"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Communication and Network Security. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 310,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following is the MOST effective measure for dealing with rootkit attacks?",
    "options": [
      "Turing off unauthorized services and rebooting the system",
      "Finding and replacing the altered binaries with legitimate ones",
      "Restoring the system from the last backup",
      "Reinstalling the system from trusted sources"
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 315,
    "domain": 8,
    "domain_name": "Software Development Security",
    "scenario": "A software development company found odd behavior in some recently developed software, creating a need for a more thorough code review.",
    "question": "What is the MOST effective argument for a more thorough code review?",
    "options": [
      "It will increase flexibility of the applications developed.",
      "It will increase accountability with the customers.",
      "It will impede the development process.",
      "lt will reduce the potential for vulnerabilities."
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Software Development Security. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 316,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following is included in the Global System for Mobile Communications (GSM) security framework?",
    "options": [
      "Public-Key Infrastructure (PKI)",
      "Symmetric key cryptography",
      "Digital signatures",
      "Biometric authentication"
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 321,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Digital non-repudiation requires which of the following?",
    "options": [
      "A trusted third-party",
      "Appropriate corporate policies",
      "Symmetric encryption",
      "Multifunction access cards"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 322,
    "domain": 3,
    "domain_name": "Security Architecture and Engineering",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following is the PRIMARY type of cryptography required to support non-repudiation of a digitally signed document?",
    "options": [
      "Message digest (MD)",
      "Asymmetric",
      "Symmetric",
      "Hashing"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Security Architecture and Engineering. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 324,
    "domain": 3,
    "domain_name": "Security Architecture and Engineering",
    "scenario": "General CISSP Concept Review",
    "question": "Guaranteed success with Our exam guides visit - https://www.certshared.com Certshared now are offering 100% pass ensure CISSP dumps! https://www.certshared.com/exam/CISSP/ (1487 Q&As) - (Exam Topic 15) Which of the following should be done at a disaster site before any item is removed, repaired, or replaced?",
    "options": [
      "Take photos of the damage",
      "Notify all of the Board of Directors",
      "Communicate with the press following the communications plan",
      "Dispatch personnel to the disaster recovery (DR) site"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Security Architecture and Engineering. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 325,
    "domain": 3,
    "domain_name": "Security Architecture and Engineering",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following encryption technologies has the ability to function as a stream cipher?",
    "options": [
      "Cipher Feedback (CFB)",
      "Feistel cipher",
      "Cipher Block Chaining (CBC) with error propagation",
      "Electronic Code Book (ECB)"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Security Architecture and Engineering. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 328,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which evidence collecting technique would be utilized when it is believed an attacker is employing a rootkit and a quick analysis is needed?",
    "options": [
      "Memory collection",
      "Forensic disk imaging",
      "Malware analysis",
      "Live response"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 331,
    "domain": 4,
    "domain_name": "Communication and Network Security",
    "scenario": "An authentication system that uses challenge and response was recently implemented on an organization's network, because the organization conducted an annual penetration test showing that testers were able to move laterally using authenticated credentials.",
    "question": "Which attack method was MOST likely used to achieve this?",
    "options": [
      "Cross-Site Scripting (XSS)",
      "Pass the ticket",
      "Brute force",
      "Hash collision"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Communication and Network Security. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 332,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Of the following, which BEST provides non- repudiation with regards to access to a server room?",
    "options": [
      "Fob and Personal Identification Number (PIN)",
      "Locked and secured cages",
      "Biometric readers",
      "Proximity readers"
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 334,
    "domain": 6,
    "domain_name": "Security Assessment and Testing",
    "scenario": "General CISSP Concept Review",
    "question": "When assessing web vulnerabilities, how can navigating the dark web add value to a penetration test?",
    "options": [
      "The actual origin and tools used for the test can be hidden.",
      "Information may be found on related breaches and hacking.",
      "Vulnerabilities can be tested without impact on the tested environment.",
      "Information may be found on hidden vendor patches."
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Security Assessment and Testing. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 335,
    "domain": 5,
    "domain_name": "Identity and Access Management (IAM)",
    "scenario": "A company needs to provide shared access of sensitive data on a cloud storage to external business partners.",
    "question": "Which of the following identity models is the BEST to blind identity providers (IdP) and relying parties (RP) so that subscriber lists of other parties are not disclosed?",
    "options": [
      "Federation authorities",
      "Proxied federation",
      "Static registration",
      "Dynamic registration"
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Identity and Access Management (IAM). Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 337,
    "domain": 4,
    "domain_name": "Communication and Network Security",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following is the BEST option to reduce the network attack surface of a system?",
    "options": [
      "Ensuring that there are no group accounts on the system",
      "Removing unnecessary system user accounts",
      "Disabling unnecessary ports and services",
      "Uninstalling default software on the system"
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Communication and Network Security. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 339,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "What is the PRIMARY objective of business continuity planning?",
    "options": [
      "Establishing a cost estimate for business continuity recovery operations",
      "Restoring computer systems to normal operations as soon as possible",
      "Strengthening the perceived importance of business continuity planning among senior management",
      "Ensuring timely recovery of mission-critical business processes"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 344,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "Before allowing a web application into the production environment, the security practitioner performs multiple types of tests to confirm that the web application performs as expected. To test the username field, the security practitioner creates a test that enters more characters into the field than is allowed.",
    "question": "Which of the following BEST describes the type of test performed?",
    "options": [
      "Misuse case testing",
      "Penetration testing",
      "Web session testing",
      "Interface testing"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 347,
    "domain": 2,
    "domain_name": "Asset Security",
    "scenario": "An organization is looking to include mobile devices in its asset management system for better tracking.",
    "question": "In which system tier of the reference architecture would mobile devices be tracked?",
    "options": [
      "1",
      "2",
      "3"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Asset Security. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 348,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Write Once, Read Many (WORM) data storage devices are designed to BEST support which of the following core security concepts?",
    "options": [
      "lntegrity",
      "Scalability",
      "Availability",
      "Confidentiality"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 350,
    "domain": 8,
    "domain_name": "Software Development Security",
    "scenario": "General CISSP Concept Review",
    "question": "What is the BEST method to use for assessing the security impact of acquired software?",
    "options": [
      "Common vulnerability review",
      "Software security compliance validation",
      "Threat modeling",
      "Vendor assessment"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Software Development Security. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 352,
    "domain": 5,
    "domain_name": "Identity and Access Management (IAM)",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following BEST describes the standard used to exchange authorization information between different identity management systems?",
    "options": [
      "Security Assertion Markup Language (SAML)",
      "Service Oriented Architecture (SOA)",
      "Extensible Markup Language (XML)",
      "Wireless Authentication Protocol (WAP)"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Identity and Access Management (IAM). Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 353,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "What is the MOST common security risk of a mobile device?",
    "options": [
      "Insecure communications link",
      "Data leakage",
      "Malware infection",
      "Data spoofing"
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 356,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "What is the PRIMARY purpose of creating and reporting metrics for a security awareness, training, and education program?",
    "options": [
      "Make all stakeholders aware of the program's progress.",
      "Measure the effect of the program on the organization's workforce.",
      "Facilitate supervision of periodic training events.",
      "Comply with legal regulations and document due diligence in security practices."
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 360,
    "domain": 8,
    "domain_name": "Software Development Security",
    "scenario": "General CISSP Concept Review",
    "question": "Secure coding can be developed by applying which one of the following?",
    "options": [
      "Applying the organization's acceptable use guidance",
      "Applying the industry best practice coding guidelines",
      "Applying rapid application development (RAD) coding",
      "Applying the organization's web application firewall (WAF) policy"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Software Development Security. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 362,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "What is the second phase of public key infrastructure (PKI) key/certificate life-cycle management?",
    "options": [
      "Implementation Phase",
      "Cancellation Phase",
      "Initialization Phase",
      "Issued Phase"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 363,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following vulnerabilities can be BEST detected using automated analysis?",
    "options": [
      "Valid cross-site request forgery (CSRF) vulnerabilities",
      "Multi-step process attack vulnerabilities",
      "Business logic flaw vulnerabilities",
      "Typical source code vulnerabilities"
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 366,
    "domain": 8,
    "domain_name": "Software Development Security",
    "scenario": "International bodies established a regulatory scheme that defines how weapons are exchanged between the signatories. It also addresses cyber weapons, including malicious software, Command and Control (C2) software, and internet surveillance software.",
    "question": "This is a description of which of the following?",
    "options": [
      "General Data Protection Regulation (GDPR)",
      "Palermo convention",
      "Wassenaar arrangement",
      "International Traffic in Arms Regulations (ITAR)"
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Software Development Security. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 367,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Guaranteed success with Our exam guides visit - https://www.certshared.com Certshared now are offering 100% pass ensure CISSP dumps! https://www.certshared.com/exam/CISSP/ (1487 Q&As) A recent information security risk assessment identified weak system access controls on mobile devices as a high me In order to address this risk and ensure only authorized staff access company information, which of the following should the organization implement?",
    "options": [
      "Intrusion prevention system (IPS)",
      "Multi-factor authentication (MFA)",
      "Data loss protection (DLP)",
      "Data at rest encryption"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 370,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "When developing an organization's information security budget, it is important that the",
    "options": [
      "expected risk can be managed appropriately with the funds allocated.",
      "requested funds are at an equal amount to the expected cost of breaches.",
      "requested funds are part of a shared funding pool with other areas.",
      "expected risk to the organization does not exceed the funds allocated."
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 373,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "The Chief Information Security Officer (CISO) of a small organization is making a case for building a security operations center (SOC).",
    "question": "While debating between an in-house, fully outsourced, or a hybrid capability, which of the following would be the MAIN consideration, regardless of the model?",
    "options": [
      "Skill set and training",
      "Headcount and capacity",
      "Tools and technologies",
      "Scope and service catalog"
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 375,
    "domain": 2,
    "domain_name": "Asset Security",
    "scenario": "General CISSP Concept Review",
    "question": "How should the retention period for an organization's social media content be defined?",
    "options": [
      "By the retention policies of each social media service",
      "By the records retention policy of the organization",
      "By the Chief Information Officer (CIO)",
      "By the amount of available storage space"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Asset Security. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 376,
    "domain": 8,
    "domain_name": "Software Development Security",
    "scenario": "General CISSP Concept Review",
    "question": "In what phase of the System Development Life Cycle (SDLC) should security training for the development team begin?",
    "options": [
      "Development/Acquisition",
      "Initiation",
      "Implementation/ Assessment",
      "Disposal"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Software Development Security. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 381,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "A manager identified two conflicting sensitive user functions that were assigned to a single user account that had the potential to result in financial and regulatory risk to the company.",
    "question": "The manager MOST likely discovered this during which of the following?",
    "options": [
      "Security control assessment.",
      "Separation of duties analysis",
      "Network Access Control (NAC) review",
      "Federated identity management (FIM) evaluation"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 382,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "A scan report returned multiple vulnerabilities affecting several production servers that are mission critical. Attempts to apply the patches in the development environment have caused the servers to crash.",
    "question": "What is the BEST course of action?",
    "options": [
      "Upgrade the software affected by the vulnerability.",
      "Inform management of possible risks.",
      "Mitigate the risks with compensating controls.",
      "Remove the affected software from the servers."
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 384,
    "domain": 4,
    "domain_name": "Communication and Network Security",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following technologies can be used to monitor and dynamically respond to potential threats on web applications?",
    "options": [
      "Security Assertion Markup Language (SAML)",
      "Web application vulnerability scanners",
      "Runtime application self-protection (RASP)",
      "Field-level tokenization"
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Communication and Network Security. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 388,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Assuming an individual has taken all of the steps to keep their internet connection private, which of the following is the BEST to browse the web privately?",
    "options": [
      "Prevent information about browsing activities from being stored in the cloud.",
      "Store browsing activities in the cloud.",
      "Prevent information about browsing activities farm being stored on the personal device.",
      "Store information about browsing activities on the personal device."
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 393,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "What is considered a compensating control for not having electrical surge protectors installed?",
    "options": [
      "Having dual lines to network service providers built to the site",
      "Having backup diesel generators installed to the site",
      "Having a hot disaster recovery (DR) environment for the site",
      "Having network equipment in active-active clusters at the site"
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 398,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which type of access control includes a system that allows only users that are type=managers and department=sales to access employee records?",
    "options": [
      "Discretionary access control (DAC)",
      "Mandatory access control (MAC)",
      "Role-based access control (RBAC)",
      "Attribute-based access control (ABAC)"
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 399,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Why are packet filtering routers used in low-risk environments?",
    "options": [
      "They are high-resolution source discrimination and identification tools.",
      "They are fast and flexible, and protect against Internet Protocol (IP) spoofing.",
      "They are fast, flexible, and transparent.",
      "They enforce strong user authentication and audit tog generation."
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 400,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "A cloud service provider requires its customer organizations to enable maximum audit logging for its data storage service and to retain the logs for the period of three months. The audit logging generates extremely high amount of logs.",
    "question": "What is the MOST appropriate strategy for the log retention?",
    "options": [
      "Keep last week's logs in an online storage and the rest in a near-line storage.",
      "Keep all logs in an online storage.",
      "Keep all logs in an offline storage.",
      "Keep last week's logs in an online storage and the rest in an offline storage."
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 403,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following security tools will ensure authorized data is sent to the application when implementing a cloud based application?",
    "options": [
      "Host-based intrusion prevention system (HIPS)",
      "Access control list (ACL)",
      "File integrity monitoring (FIM)",
      "Data loss prevention (DLP)"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 406,
    "domain": 4,
    "domain_name": "Communication and Network Security",
    "scenario": "All hosts on the network are sending logs via syslog-ng to the log collector. The log collector is behind its own firewall, The security professional wants to make sure not to put extra load on the firewall due to the amount of traffic that is passing through it.",
    "question": "Which of the following types of filtering would MOST likely be used?",
    "options": [
      "Uniform Resource Locator (URL) Filtering",
      "Web Traffic Filtering",
      "Dynamic Packet Filtering",
      "Static Packet Filtering"
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Communication and Network Security. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 410,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "An organization with divisions in the United States (US) and the United Kingdom (UK) processes data comprised of personal information belonging to subjects living in the European Union (EU) and in the US.",
    "question": "Which data MUST be handled according to the privacy protections of General Data Protection Regulation (GDPR)?",
    "options": [
      "Only the EU citizens\u2019 data",
      "Only the EU residents' data",
      "Only the UK citizens\u2019 data",
      "Only data processed in the UK"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 411,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which application type is considered high risk and provides a common way for malware and viruses to enter a network?",
    "options": [
      "Instant messaging or chat applications",
      "E-mail applications",
      "Peer-to-Peer (P2P) file sharing applications",
      "End-to-end applications"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 415,
    "domain": 8,
    "domain_name": "Software Development Security",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following describes the BEST method of maintaining the inventory of software and hardware within the organization?",
    "options": [
      "Maintaining the inventory through a combination of desktop configuration, administration management, and procurement management tools",
      "Maintaining the inventory through a combination of asset owner interviews, open-source system management, and open-source management tools",
      "Maintaining the inventory through a combination of on-premise storage configuration, cloud management, and partner management tools",
      "Maintaining the inventory through a combination of system configuration, network management, and license management tools"
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Software Development Security. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 419,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "A security professional needs to find a secure and efficient method of encrypting data on an endpoint.",
    "question": "Which solution includes a root key?",
    "options": [
      "Bitlocker",
      "Trusted Platform Module (TPM)",
      "Virtual storage array network (VSAN)",
      "Hardware security module (HSM)"
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 420,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "What is the FIRST step prior to executing a test of an organisation\u2019s disaster recovery (DR) or business continuity plan (BCP)?",
    "options": [
      "identify key stakeholders,",
      "Develop recommendations for disaster scenarios.",
      "Identify potential failure points.",
      "Develop clear evaluation criteria."
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 424,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "Guaranteed success with Our exam guides visit - https://www.certshared.com Certshared now are offering 100% pass ensure CISSP dumps! https://www.certshared.com/exam/CISSP/ (1487 Q&As) - (Exam Topic 15) In a quarterly system access review, an active privileged account was discovered that did not exist in the prior review on the production system. The account was created one hour after the previous access review.",
    "question": "Which of the following is the BEST option to reduce overall risk in addition to quarterly access reviews?",
    "options": [
      "Increase logging levels.",
      "Implement bi-annual reviews.",
      "Create policies for system access.",
      "Implement and review risk-based alerts."
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 428,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "A company needs to provide employee access to travel services, which are hosted by a third-party service provider, Employee experience is important, and when users are already authenticated, access to the travel portal is seamless.",
    "question": "Which of the following methods is used to share information and grant user access to the travel portal?",
    "options": [
      "Security Assertion Markup Language (SAML) access",
      "Single sign-on (SSO) access",
      "Open Authorization (OAuth) access",
      "Federated access"
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 432,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which algorithm gets its security from the difficulty of calculating discrete logarithms in a finite field and is used to distribute keys, but cannot be used to encrypt or decrypt messages?",
    "options": [
      "Diffie-Hellman",
      "Digital Signature Algorithm (DSA)",
      "Rivest-Shamir-Adleman (RSA)",
      "Kerberos"
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 434,
    "domain": 4,
    "domain_name": "Communication and Network Security",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following is the MOST secure protocol for zremote command access to the firewall?",
    "options": [
      "Secure Shell (SSH)",
      "Trivial File Transfer Protocol (TFTP)",
      "Hypertext Transfer Protocol Secure (HTTPS)",
      "Simple Network Management Protocol (SNMP) v1"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Communication and Network Security. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 436,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "When designing a Cyber-Physical System (CPS), which of the following should be a security practitioner\u2019s first consideration?",
    "options": [
      "Resiliency of the system",
      "Detection of sophisticated attackers",
      "Risk assessment of the system",
      "Topology of the network used for the system"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 437,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "A security professional has reviewed a recent site assessment and has noted that a server room on the second floor of a building has Heating, Ventilation, and Air Conditioning (HVAC) intakes on the ground level that have ultraviolet light filters installed, Aero-K Fire suppression in the server room, and pre-action fire suppression on floors above the server room.",
    "question": "Which of the following changes can the security professional recommend to reduce risk associated with these conditions?",
    "options": [
      "Remove the ultraviolet light filters on the HVAC intake and replace the fire suppression system on the upper floors with a dry system",
      "Add additional ultraviolet light filters to the HVAC intake supply and return ducts and change server room fire suppression to FM-200",
      "Apply additional physical security around the HVAC intakes and update upper floor fire suppression to FM-200.",
      "Elevate the HVAC intake by constructing a plenum or external shaft over it and convert the server room fire suppression to a pre-action system"
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 440,
    "domain": 3,
    "domain_name": "Security Architecture and Engineering",
    "scenario": "An organization wants to migrate to Session Initiation Protocol (SIP) to save on telephony expenses.",
    "question": "Which of the following security related statements should be considered in the decision-making process? Guaranteed success with Our exam guides visit - https://www.certshared.com Certshared now are offering 100% pass ensure CISSP dumps! https://www.certshared.com/exam/CISSP/ (1487 Q&As)",
    "options": [
      "Cloud telephony is less secure and more expensive than digital telephony services.",
      "SIP services are more secure when used with multi-layer security proxies.",
      "H.323 media gateways must be used to ensure end-to-end security tunnels.",
      "Given the behavior of SIP traffic, additional security controls would be required."
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Security Architecture and Engineering. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 444,
    "domain": 4,
    "domain_name": "Communication and Network Security",
    "scenario": "General CISSP Concept Review",
    "question": "Compared to a traditional network, which of the following is a security-related benefit that software-defined networking (SDN) provides?",
    "options": [
      "Centralized network provisioning",
      "Centralized network administrator control",
      "Reduced network latency when scaled",
      "Reduced hardware footprint and cost"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Communication and Network Security. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 445,
    "domain": 2,
    "domain_name": "Asset Security",
    "scenario": "General CISSP Concept Review",
    "question": "Which media sanitization methods should be used for data with a high security categorization?",
    "options": [
      "Clear or destroy",
      "Clear or purge",
      "Destroy or delete",
      "Purge or destroy"
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Asset Security. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 448,
    "domain": 5,
    "domain_name": "Identity and Access Management (IAM)",
    "scenario": "An information security professional is reviewing user access controls on a customer-facing application. The application must have multi-factor authentication (MFA) in place. The application currently requires a username and password to login.",
    "question": "Which of the following options would BEST implement MFA?",
    "options": [
      "Geolocate the user and compare to previous logins",
      "Require a pre-selected number as part of the login",
      "Have the user answer a secret question that is known to them",
      "Enter an automatically generated number from a hardware token"
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Identity and Access Management (IAM). Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 450,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following is the MOST effective corrective control to minimize the effects of a physical intrusion?",
    "options": [
      "Automatic videotaping of a possible intrusion",
      "Rapid response by guards or police to apprehend a possible intruder",
      "Activating bright lighting to frighten away a possible intruder",
      "Sounding a loud alarm to frighten away a possible intruder"
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 455,
    "domain": 8,
    "domain_name": "Software Development Security",
    "scenario": "General CISSP Concept Review",
    "question": "What is the HIGHEST priority in agile development?",
    "options": [
      "Selecting appropriate coding language",
      "Managing costs of product delivery",
      "Early and continuous delivery of software",
      "Maximizing the amount of code delivered"
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Software Development Security. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 456,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "During testing, where are the requirements to inform parent organizations, law enforcement, and a computer incident response team documented?",
    "options": [
      "Unit test results",
      "Security assessment plan",
      "System integration plan",
      "Security Assessment Report (SAR)"
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 460,
    "domain": 3,
    "domain_name": "Security Architecture and Engineering",
    "scenario": "Guaranteed success with Our exam guides visit - https://www.certshared.com Certshared now are offering 100% pass ensure CISSP dumps! https://www.certshared.com/exam/CISSP/ (1487 Q&As) - (Exam Topic 15) A company-wide penetration test result shows customers could access and read files through a web browser.",
    "question": "Which of the following can be used to mitigate this vulnerability?",
    "options": [
      "Enforce the chmod of files to 755.",
      "Enforce the control of file directory listings.",
      "Implement access control on the web server.",
      "Implement Secure Sockets Layer (SSL) certificates throughout the web server."
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Security Architecture and Engineering. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 463,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which one of the following can be used to detect an anomaly in a system by keeping track of the state of files that do not normally change?\\",
    "options": [
      "System logs",
      "Anti-spyware",
      "Integrity checker",
      "Firewall logs"
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 465,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "In order to provide dual assurance in a digital signature system, the design MUST include which of the following?",
    "options": [
      "The public key must be unique for the signed document.",
      "signature process must generate adequate authentication credentials.",
      "The hash of the signed document must be present.",
      "The encrypted private key must be provided in the signing certificate."
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 468,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "In which of the following scenarios is locking server cabinets and limiting access to keys preferable to locking the server room to prevent unauthorized access?",
    "options": [
      "Server cabinets are located in an unshared workspace.",
      "Server cabinets are located in an isolated server farm.",
      "Server hardware is located in a remote area.",
      "Server cabinets share workspace with multiple projects."
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 469,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "What type of risk is related to the sequences of value-adding and managerial activities undertaken in an organization?",
    "options": [
      "Demand risk",
      "Process risk",
      "Control risk",
      "Supply risk"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 470,
    "domain": 4,
    "domain_name": "Communication and Network Security",
    "scenario": "General CISSP Concept Review",
    "question": "In an environment where there is not full administrative control over all network connected endpoints, such as a university where non-corporate devices are used, what is the BEST way to restrict access to the network?",
    "options": [
      "Use switch port security to limit devices connected to a particular switch port.",
      "Use of virtual local area networks (VLAN) to segregate users.",
      "Use a client-based Network Access Control (NAC) solution.",
      "Use a clientless Network Access Control (NAC) solution"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Communication and Network Security. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 472,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "When are security requirements the LEAST expensive to implement?",
    "options": [
      "When identified by external consultants",
      "During the application rollout phase",
      "During each phase of the project cycle",
      "When built into application design"
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 477,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "The Chief Information Officer (CIO) has decided that as part of business modernization efforts the organization will move towards a cloud architecture. All business- critical data will be migrated to either internal or external cloud services within the next two years.",
    "question": "The CIO has a PRIMARY obligation to work with personnel in which role in order to ensure proper protection of data during and after the cloud migration?",
    "options": [
      "Information owner",
      "General Counsel",
      "Chief Information Security Officer (CISO)",
      "Chief Security Officer (CSO)"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 479,
    "domain": 4,
    "domain_name": "Communication and Network Security",
    "scenario": "General CISSP Concept Review",
    "question": "Which part of an operating system (OS) is responsible for providing security interfaces among the hardware, OS, and other parts of the computing system?",
    "options": [
      "Trusted Computing Base (TCB)",
      "Time separation",
      "Security kernel",
      "Reference monitor"
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Communication and Network Security. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 484,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "A hospital\u2019s building controls system monitors and operates the environmental equipment to maintain a safe and comfortable environment.",
    "question": "Which of the following could be used to minimize the risk of utility supply interruption?",
    "options": [
      "Digital devices that can turn equipment off and continuously cycle rapidly in order to increase supplies and conceal activity on the hospital network",
      "Standardized building controls system software with high connectivity to hospital networks",
      "Lock out maintenance personnel from the building controls system access that can impact critical utility supplies",
      "Digital protection and control devices capable of minimizing the adverse impact to critical utility"
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 486,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "What is the MOST common cause of Remote Desktop Protocol (RDP) compromise?",
    "options": [
      "Port scan",
      "Brute force attack",
      "Remote exploit",
      "Social engineering"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 490,
    "domain": 5,
    "domain_name": "Identity and Access Management (IAM)",
    "scenario": "General CISSP Concept Review",
    "question": "In Federated Identity Management (FIM), which of the following represents the concept of federation?",
    "options": [
      "Collection of information logically grouped into a single entity",
      "Collection, maintenance, and deactivation of user objects and attributes in one or more systems, directories or applications",
      "Collection of information for common identities in a system",
      "Collection of domains that have established trust among themselves"
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Identity and Access Management (IAM). Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 493,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following is a risk matrix?",
    "options": [
      "A database of risks associated with a specific information system.",
      "A table of risk management factors for management to consider.",
      "A two-dimensional picture of risk for organizations, products, projects, or other items of interest.",
      "A tool for determining risk management decisions for an activity or system."
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 497,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "What is the PRIMARY purpose of auditing, as it relates to the security review cycle? Guaranteed success with Our exam guides visit - https://www.certshared.com Certshared now are offering 100% pass ensure CISSP dumps! https://www.certshared.com/exam/CISSP/ (1487 Q&As)",
    "options": [
      "To ensure the organization's controls and pokies are working as intended",
      "To ensure the organization can still be publicly traded",
      "To ensure the organization's executive team won't be sued",
      "To ensure the organization meets contractual requirements"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 502,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "The European Union (EU) General Data Protection Regulation (GDPR) requires organizations to implement appropriate technical and organizational measures to ensure a level of security appropriate to the risk.",
    "question": "The Data Owner should therefore consider which of the following requirements?",
    "options": [
      "Data masking and encryption of personal data",
      "Only to use encryption protocols approved by EU",
      "Anonymization of personal data when transmitted to sources outside the EU",
      "Never to store personal data of EU citizens outside the EU"
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 504,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "When MUST an organization's information security strategic plan be reviewed?",
    "options": [
      "Quarterly, when the organization's strategic plan is updated",
      "Whenever there are significant changes to a major application",
      "Every three years, when the organization's strategic plan is updated",
      "Whenever there are major changes to the business"
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 507,
    "domain": 4,
    "domain_name": "Communication and Network Security",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following is the MOST effective strategy to prevent an attacker from disabling a network?",
    "options": [
      "Test business continuity and disaster recovery (DR) plans.",
      "Design networks with the ability to adapt, reconfigure, and fail over.",
      "Implement network segmentation to achieve robustness.",
      "Follow security guidelines to prevent unauthorized network access."
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Communication and Network Security. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 508,
    "domain": 2,
    "domain_name": "Asset Security",
    "scenario": "General CISSP Concept Review",
    "question": "How should the retention period for an organization's social media content be defined?",
    "options": [
      "Wireless Access Points (AP)",
      "Token-based authentication",
      "Host-based firewalls",
      "Trusted platforms"
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Asset Security. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 511,
    "domain": 4,
    "domain_name": "Communication and Network Security",
    "scenario": "General CISSP Concept Review",
    "question": "What are the three key benefits that application developers should derive from the northbound application programming interface (API) of software defined networking (SDN)?",
    "options": [
      "Familiar syntax, abstraction of network topology, and definition of network protocols",
      "Network syntax, abstraction of network flow, and abstraction of network protocols",
      "Network syntax, abstraction of network commands, and abstraction of network protocols",
      "Familiar syntax, abstraction of network topology, and abstraction of network protocols"
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Communication and Network Security. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 513,
    "domain": 2,
    "domain_name": "Asset Security",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following threats would be MOST likely mitigated by monitoring assets containing open source libraries for vulnerabilities?",
    "options": [
      "Distributed denial-of-service (DDoS) attack",
      "Zero-day attack",
      "Phishing attempt",
      "Advanced persistent threat (APT) attempt"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Asset Security. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 517,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "A retail company is looking to start a development project that will utilize open source components in its code for the first time. The development team has already acquired several \u2018open source components and utilized them in proof of concept (POC) code. The team recognizes that the legal and operational risks are outweighed by the benefits of open-source software use.",
    "question": "What MUST the organization do next?",
    "options": [
      "Mandate that all open-source components be approved by the Information Security Manager (ISM).",
      "Scan all open-source components for security vulnerabilities.",
      "Establish an open-source compliance policy.",
      "Require commercial support for all open-source components."
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 521,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "An internal audit for an organization recently identified malicious actions by a user account. Upon further investigation, it was determined the offending user account was used by multiple people at multiple locations simultaneously for various services and applications.",
    "question": "What is the BEST method to prevent this problem in the future?",
    "options": [
      "Ensure the security information and event management (SIEM) is set to alert.",
      "Inform users only one user should be using the account at a time.",
      "Ensure each user has their own unique account,",
      "Allow several users to share a generic account."
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 525,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "What process facilitates the balance of operational and economic costs of protective measures with gains in mission capability?",
    "options": [
      "Risk assessment",
      "Performance testing",
      "Security audit",
      "Risk management"
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 527,
    "domain": 7,
    "domain_name": "Security Operations",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following are all elements of a disaster recovery plan (DRP)?",
    "options": [
      "Document the actual location of the ORP, developing an incident notification procedure, evaluating costs of critical components",
      "Document the actual location of the ORP, developing an incident notification procedure, establishing recovery locations",
      "Maintain proper documentation of all server logs, developing an incident notification procedure, establishing recovery locations",
      "Document the actual location of the ORP, recording minutes at all ORP planning sessions, establishing recovery locations"
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Security Operations. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 528,
    "domain": 4,
    "domain_name": "Communication and Network Security",
    "scenario": "General CISSP Concept Review",
    "question": "What are the PRIMARY responsibilities of security operations for handling and reporting violations and incidents?",
    "options": [
      "Monitoring and identifying system failures, documenting incidents for future analysis, and scheduling patches for systems",
      "Scheduling patches for systems, notifying the help desk, and alerting key personnel",
      "Monitoring and identifying system failures, alerting key personnel, and containing events",
      "Documenting incidents for future analysis, notifying end users, and containing events"
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Communication and Network Security. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 532,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following is the MAIN benefit of off-site storage?",
    "options": [
      "Cost effectiveness",
      "Backup simplicity",
      "Fast recovery",
      "Data availability"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 534,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "A large organization\u2019s human resources and security teams are planning on implementing technology to eliminate manual user access reviews and improve compliance.",
    "question": "Which of the following options is MOST likely to resolve the issues associated with user access?",
    "options": [
      "Implement a role-based access control (RBAC) system.",
      "Implement identity and access management (IAM) platform.",
      "Implement a Privileged Access Management (PAM) system.",
      "Implement a single sign-on (SSO) platform."
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 535,
    "domain": 2,
    "domain_name": "Asset Security",
    "scenario": "General CISSP Concept Review",
    "question": "What is the MOST effective way to determine a mission critical asset in an organization?",
    "options": [
      "Vulnerability analysis",
      "business process analysis",
      "Threat analysis",
      "Business risk analysis"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Asset Security. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 537,
    "domain": 4,
    "domain_name": "Communication and Network Security",
    "scenario": "General CISSP Concept Review",
    "question": "In a dispersed network that lacks central control, which of the following is die PRIMARY course of action to mitigate exposure?",
    "options": [
      "Implement management policies, audit control, and data backups",
      "Implement security policies and standards, access controls, and access limitations",
      "Implement security policies and standards, data backups, and audit controls",
      "Implement remote access policies, shared workstations, and log management"
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Communication and Network Security. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 541,
    "domain": 3,
    "domain_name": "Security Architecture and Engineering",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following is used to support the concept of defense in depth during the development phase of a software product?",
    "options": [
      "Maintenance hooks",
      "Polyinstiation",
      "Known vulnerability list",
      "Security auditing"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Security Architecture and Engineering. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 546,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "What protocol is often used between gateway hosts on the Internet\u2019 To control the scope of a Business Continuity Management (BCM) system, a security practitioner should identify which of the following?",
    "options": [
      "Size, nature, and complexity of the organization",
      "Business needs of the security organization",
      "All possible risks",
      "Adaptation model for future recovery planning"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 549,
    "domain": 3,
    "domain_name": "Security Architecture and Engineering",
    "scenario": "An organization wants to enable uses to authenticate across multiple security domains. To accomplish this they have decided to use Federated Identity Management (F1M).",
    "question": "Which of the following is used behind the scenes in a FIM deployment?",
    "options": [
      "Standard Generalized Markup Language (SGML)",
      "Extensible Markup Language (XML)",
      "Security Assertion Markup Language (SAML)",
      "Transaction Authority Markup Language (XAML)"
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Security Architecture and Engineering. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 554,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "copyright provides protection for which of the following?",
    "options": [
      "Discoveries of natural phenomena",
      "New and non-obvious invention",
      "A particular expression of an idea",
      "Ideas expressed n literary works"
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 555,
    "domain": 2,
    "domain_name": "Asset Security",
    "scenario": "General CISSP Concept Review",
    "question": "Guaranteed success with Our exam guides visit - https://www.certshared.com Certshared now are offering 100% pass ensure CISSP dumps! https://www.certshared.com/exam/CISSP/ (1487 Q&As) For the purpose of classification, which of the following is used to divide trust domain and trust boundaries?",
    "options": [
      "Network architecture",
      "Integrity",
      "Identity Management (IdM)",
      "Confidentiality management"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Asset Security. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 559,
    "domain": 8,
    "domain_name": "Software Development Security",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following value comparisons MOST accurately reflects the agile development approach?",
    "options": [
      "Processes and toots over individuals and interactions",
      "Contract negotiation over customer collaboration",
      "Following a plan over responding to change",
      "Working software over comprehensive documentation"
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Software Development Security. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 561,
    "domain": 2,
    "domain_name": "Asset Security",
    "scenario": "General CISSP Concept Review",
    "question": "Physical assets defined in an organization\u2019s Business Impact Analysis (BIA) could include which of the following?",
    "options": [
      "Personal belongings of organizational staff members",
      "Supplies kept off-site at a remote facility",
      "Cloud-based applications",
      "Disaster Recovery (DR) line-item revenues"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Asset Security. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 562,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "How long should the records on a project be retained?",
    "options": [
      "For the duration of the project, or at the discretion of the record owner",
      "Until they are no longer useful or required by policy",
      "Until five years after the project ends, then move to archives",
      "For the duration of the organization fiscal year"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 564,
    "domain": 5,
    "domain_name": "Identity and Access Management (IAM)",
    "scenario": "General CISSP Concept Review",
    "question": "What access control scheme uses fine-grained rules to specify the conditions under which access to each data item or applications is granted?",
    "options": [
      "Mandatory Access Control (MAC)",
      "Discretionary Access Control (DAC)",
      "Role Based Access Control (RBAC)",
      "Attribute Based Access Control (ABAC)"
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Identity and Access Management (IAM). Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 566,
    "domain": 6,
    "domain_name": "Security Assessment and Testing",
    "scenario": "General CISSP Concept Review",
    "question": "Vulnerability scanners may allow for the administrator to assign which of the following in order to assist in prioritizing remediation activities?",
    "options": [
      "Definitions for each exposure type",
      "Vulnerability attack vectors",
      "Asset values for networks",
      "Exploit code metrics"
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Security Assessment and Testing. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 573,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "The Secure Shell (SSH) version 2 protocol supports.",
    "options": [
      "availability, accountability, compression, and integrity,",
      "authentication, availability, confidentiality, and integrity.",
      "accountability, compression, confidentiality, and integrity.",
      "authentication, compression, confidentiality, and integrity."
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 577,
    "domain": 5,
    "domain_name": "Identity and Access Management (IAM)",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following is the GREATEST security risk associated with the user of identity as a service (IDaaS) when an organization its own software?",
    "options": [
      "Incompatibility with Federated Identity Management (FIM)",
      "Increased likelihood of confidentiality breach",
      "Denial of access due to reduced availability",
      "Security Assertion Markup Language (SAM) integration"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Identity and Access Management (IAM). Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 578,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following is a MAJOR concern when there is a need to preserve or retain information for future retrieval?",
    "options": [
      "Laws and regulations may change in the interim, making it unnecessary to retain the information.",
      "The expense of retaining the information could become untenable for the organization.",
      "The organization may lose track of the information and not dispose of it securely.",
      "The technology needed to retrieve the information may not be available in the future."
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 581,
    "domain": 4,
    "domain_name": "Communication and Network Security",
    "scenario": "General CISSP Concept Review",
    "question": "When adopting software as a service (Saas), which security responsibility will remain with remain with the adopting organization?",
    "options": [
      "Physical security",
      "Data classification",
      "Network control",
      "Application layer control"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Communication and Network Security. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 586,
    "domain": 2,
    "domain_name": "Asset Security",
    "scenario": "A security practitioner has been tasked with establishing organizational asset handling procedures.",
    "question": "What should be considered that would have the GRFATEST impact to the development of these procedures?",
    "options": [
      "Media handling procedures",
      "User roles and responsibilities",
      "Acceptable Use Policy (ALP)",
      "Information classification scheme"
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Asset Security. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 591,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which is the MOST critical aspect of computer-generated evidence?",
    "options": [
      "Objectivity",
      "Integrity",
      "Timeliness",
      "Relevancy"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 596,
    "domain": 3,
    "domain_name": "Security Architecture and Engineering",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following is a characteristic of convert security testing? Guaranteed success with Our exam guides visit - https://www.certshared.com Certshared now are offering 100% pass ensure CISSP dumps! https://www.certshared.com/exam/CISSP/ (1487 Q&As)",
    "options": [
      "Induces less risk than over testing",
      "Tests staff knowledge and Implementation of the organization's security policy",
      "Focuses an Identifying vulnerabilities",
      "Tests and validates all security controls in the organization"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Security Architecture and Engineering. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 600,
    "domain": 7,
    "domain_name": "Security Operations",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following is the MOST important reason for using a chain of custody from?",
    "options": [
      "To document those who were In possession of the evidence at every point In time",
      "To collect records of all digital forensic professionals working on a case",
      "To document collected digital evidence",
      "To ensure that digital evidence is not overlooked during the analysis"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Security Operations. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 602,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following four iterative steps are conducted on third-party vendors in an on-going basis?",
    "options": [
      "Investigate, Evaluate, Respond, Monitor",
      "Frame, Assess, Respond, Monitor",
      "Frame, Assess, Remediate, Monitor",
      "Investigate, Assess, Remediate, Monitor"
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 605,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "What is the PRIMARY purpose for an organization to conduct a security audit?",
    "options": [
      "To ensure the organization is adhering to a well-defined standard",
      "To ensure the organization is applying security controls to mitigate identified risks",
      "To ensure the organization is configuring information systems efficiently",
      "To ensure the organization is documenting findings"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 609,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following is used to detect steganography?",
    "options": [
      "Audio analysis",
      "Statistical analysis",
      "Reverse engineering",
      "Cryptanalysis"
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 614,
    "domain": 8,
    "domain_name": "Software Development Security",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following is the BEST definition of Cross-Site Request Forgery (CSRF)?",
    "options": [
      "An attack which forces an end user to execute unwanted actions on a web application in which they are currently authenticated",
      "An attack that injects a script into a web page to execute a privileged command",
      "An attack that makes an illegal request across security zones and thereby forges itself into the security database of the system",
      "An attack that forges a false Structure Query Language (SQL) command across systems"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Software Development Security. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 616,
    "domain": 4,
    "domain_name": "Communication and Network Security",
    "scenario": "General CISSP Concept Review",
    "question": "When dealing with shared, privilaged accounts, especially those for emergencies, what is the BEST way to assure non-repudiation of logs?",
    "options": [
      "Regularity change the passwords,",
      "implement a password vaulting solution.",
      "Lock passwords in tamperproof envelopes in a safe.",
      "Implement a strict access control policy."
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Communication and Network Security. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 618,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following is the PRIMARY consideration when determining the frequency an automated control should be assessed or monitored?",
    "options": [
      "The complexity of the automated control",
      "The level of automation of the control",
      "The range of values of the automated control",
      "The volatility of the automated control"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 621,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which is the RECOMMENDED configuration mode for sensors for an intrusion prevention system (IPS) if the prevention capabilities will be used?",
    "options": [
      "Active",
      "Passive",
      "Inline",
      "Span"
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 623,
    "domain": 7,
    "domain_name": "Security Operations",
    "scenario": "During a Disaster Recovery (DR) assessment, additional coverage for assurance is required.",
    "question": "What should en assessor do?",
    "options": [
      "Increase the number and type of relevant staff to interview.",
      "Conduct a comprehensive examination of the Disaster Recovery Plan (DRP).",
      "Increase the level of detail of the interview questions.",
      "Conduct a detailed review of the organization's DR policy."
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Security Operations. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 626,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following is held accountable for the risk to organizational systems and data that result from outsourcing Information Technology (IT) systems and services?",
    "options": [
      "The acquiring organization",
      "The service provider",
      "The risk executive (function)",
      "The IT manager"
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 627,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the below strategies would MOST comprehensively address the risk of malicious insiders leaking sensitive information?",
    "options": [
      "Data Loss Protection (DIP), firewalls, data classification",
      "Least privilege access, Data Loss Protection (DLP), physical access controls",
      "Staff vetting, least privilege access, Data Loss Protection (DLP)",
      "Background checks, data encryption, web proxies"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 631,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following is the MOST critical success factor in the security patch management process?",
    "options": [
      "Tracking and reporting on inventory",
      "Supporting documentation",
      "Management review of reports",
      "Risk and impact analysis"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 636,
    "domain": 2,
    "domain_name": "Asset Security",
    "scenario": "General CISSP Concept Review",
    "question": "From an asset security perspective, what is the BEST countermeasure to prevent data theft due to data remanence when a sensitive data storage media is no longer needed?",
    "options": [
      "Return the media to the system owner.",
      "Delete the sensitive data from the media.",
      "Physically destroy the retired media.",
      "Encrypt data before it Is stored on the media."
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Asset Security. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 639,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "An organization discovers that its secure file transfer protocol (SFTP) server has been accessed by an unauthorized person to download an unreleased game. A recent security audit found weaknesses in some of the organization\u2019s general information technology (IT) controls, specifically pertaining to software change control and security patch management, but not in other control areas.",
    "question": "Which of the following is the MOST probable attack vector used in the security breach?",
    "options": [
      "Buffer overflow",
      "Weak password able to lack of complexity rules",
      "Distributed Denial of Service (DDoS)",
      "Cross-Site Scripting (XSS)"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 641,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "An organization that has achieved a Capability Maturity model Integration (CMMI) level of 4 has done which of the following?",
    "options": [
      "Addressed continuous innovative process improvement",
      "Addressed the causes of common process variance",
      "Achieved optimized process performance",
      "Achieved predictable process performance"
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 645,
    "domain": 3,
    "domain_name": "Security Architecture and Engineering",
    "scenario": "General CISSP Concept Review",
    "question": "Who determines the required level of independence for security control Assessors (SCA)?",
    "options": [
      "Business owner",
      "Authorizing Official (AO)",
      "Chief Information Security Officer (CISC)",
      "System owner"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Security Architecture and Engineering. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 647,
    "domain": 8,
    "domain_name": "Software Development Security",
    "scenario": "General CISSP Concept Review",
    "question": "In order for application developers to detect potential vulnerabilities earlier during the Software Development Life Cycle (SDLC), which of the following safeguards should be implemented FIRST as part of a comprehensive testing framework?",
    "options": [
      "Source code review",
      "Acceptance testing",
      "Threat modeling",
      "Automated testing"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Software Development Security. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 651,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following job functions MUST be separated to maintain data and application integrity?",
    "options": [
      "Applications development and systems analysis",
      "Production control and data control functions",
      "Scheduling and computer operations",
      "Systems development and systems maintenance"
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 655,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following is considered the last line defense in regard to a Governance, Risk managements, and compliance (GRC) program?",
    "options": [
      "Internal audit",
      "Internal controls",
      "Board review",
      "Risk management"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 658,
    "domain": 3,
    "domain_name": "Security Architecture and Engineering",
    "scenario": "General CISSP Concept Review",
    "question": "Point-to-Point Protocol (PPP) was designed to specifically address what issue? Guaranteed success with Our exam guides visit - https://www.certshared.com Certshared now are offering 100% pass ensure CISSP dumps! https://www.certshared.com/exam/CISSP/ (1487 Q&As)",
    "options": [
      "A common design flaw in telephone modems",
      "Speed and reliability issues between dial-up users and Internet Service Providers (ISP).",
      "Compatibility issues with personal computers and web browsers",
      "The security of dial-up connections to remote networks"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Security Architecture and Engineering. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 659,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following is the BEST statement for a professional to include as port of business continuity (BC) procedure?",
    "options": [
      "A full data backup must be done upon management request.",
      "An incremental data backup must be done upon management request.",
      "A full data backup must be done based on the needs of the business.",
      "In incremental data backup must be done after each system change."
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 660,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "An organization is outsourcing its payroll system and is requesting to conduct a full audit on the third-party information technology (IT) systems. During the due diligence process, the third party provides previous audit report on its IT system.",
    "question": "Which of the following MUST be considered by the organization in order for the audit reports to be acceptable?",
    "options": [
      "The audit assessment has been conducted by an independent assessor.",
      "The audit reports have been signed by the third-party senior management.",
      "The audit reports have been issued in the last six months.",
      "The audit assessment has been conducted by an international audit firm."
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 662,
    "domain": 5,
    "domain_name": "Identity and Access Management (IAM)",
    "scenario": "General CISSP Concept Review",
    "question": "Which open standard could l large corporation deploy for authorization services for single sign-on (SSO) use across multiple internal and external application?",
    "options": [
      "Terminal Access Controller Access Control System (TACACS)",
      "Security Assertion Markup Language (SAML)",
      "Lightweight Directory Access Protocol (LDAP)",
      "Active Directory Federation Services (ADFS)"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Identity and Access Management (IAM). Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 663,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following BEST describes how access to a system is granted to federated user accounts?",
    "options": [
      "With the federation assurance level",
      "Based on defined criteria by the Relying Party (RP)",
      "Based on defined criteria by the Identity Provider (IdP)",
      "With the identity assurance level"
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 666,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following would an internal technical security audit BEST validate?",
    "options": [
      "Whether managerial controls are in place",
      "Support for security programs by executive management",
      "Appropriate third-party system hardening",
      "Implementation of changes to a system"
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 671,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "What is the document that describes the measures that have been implemented or planned to correct any deficiencies noted during the assessment of the security controls?",
    "options": [
      "Business Impact Analysis (BIA)",
      "Security Assessment Report (SAR)",
      "Plan of Action and Milestones {POA&M)",
      "Security Assessment Plan (SAP)"
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 676,
    "domain": 3,
    "domain_name": "Security Architecture and Engineering",
    "scenario": "Given a file containing ordered number, i.e. \u201c123456789,\u201d match each of the following redundant Array of independent Disks (RAID) levels to the corresponding visual representation visual representation. Note: P() = parity.",
    "question": "Drag each level to the appropriate place on the diagram.",
    "options": [
      "Mastered",
      "Not Mastered"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Security Architecture and Engineering. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 680,
    "domain": 4,
    "domain_name": "Communication and Network Security",
    "scenario": "A security architect is responsible for the protection of a new home banking system.",
    "question": "Which of the following solutions can BEST improve the confidentiality and integrity of this external system?",
    "options": [
      "Intrusion Prevention System (IPS)",
      "Denial of Service (DoS) protection solution",
      "One-time Password (OTP) token",
      "Web Application Firewall (WAF)"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Communication and Network Security. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 682,
    "domain": 2,
    "domain_name": "Asset Security",
    "scenario": "General CISSP Concept Review",
    "question": "What is the FIRST step required in establishing a records retention program?",
    "options": [
      "Identify and inventory all records.",
      "Identify and inventory all records storage locations",
      "Classify records based on sensitivity.",
      "Draft a records retention policy."
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Asset Security. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 687,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "If virus infection is suspected, which of the following is the FIRST step for the user to take?",
    "options": [
      "Unplug the computer from the network.",
      "Save the opened files and shutdown the computer.",
      "Report the incident to service desk.",
      "Update the antivirus to the latest version."
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 692,
    "domain": 4,
    "domain_name": "Communication and Network Security",
    "scenario": "General CISSP Concept Review",
    "question": "What should be the FIRST action for a security administrator who detects an intrusion on the network based on precursors and other indicators?",
    "options": [
      "Isolate and contain the intrusion.",
      "Notify system and application owners.",
      "Apply patches to the Operating Systems (OS).",
      "Document and verify the intrusion."
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Communication and Network Security. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 694,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "A new Chief Information Officer (CIO) created a group to write a data retention policy based on applicable laws.",
    "question": "Which of the following is the PRIMARY motivation for the policy?",
    "options": [
      "To back up data that is used on a daily basis",
      "To dispose of data in order to limit liability",
      "To reduce costs by reducing the amount of retained data",
      "To classify data according to what it contains"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 696,
    "domain": 6,
    "domain_name": "Security Assessment and Testing",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following security testing strategies is BEST suited for companies with low to moderate security maturity?",
    "options": [
      "Load Testing",
      "White-box testing",
      "Black -box testing",
      "Performance testing"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Security Assessment and Testing. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 697,
    "domain": 3,
    "domain_name": "Security Architecture and Engineering",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following is a PRIMARY challenge when running a penetration test? Guaranteed success with Our exam guides visit - https://www.certshared.com Certshared now are offering 100% pass ensure CISSP dumps! https://www.certshared.com/exam/CISSP/ (1487 Q&As)",
    "options": [
      "Determining the cost",
      "Establishing a business case",
      "Remediating found vulnerabilities",
      "Determining the depth of coverage"
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Security Architecture and Engineering. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 701,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "In fault-tolerant systems, what do rollback capabilities permit?",
    "options": [
      "Restoring the system to a previous functional state",
      "Identifying the error that caused the problem",
      "Allowing the system to an in a reduced manner",
      "Isolating the error that caused the problem"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 704,
    "domain": 8,
    "domain_name": "Software Development Security",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following is the MOST important reason for timely installation of software patches?",
    "options": [
      "Attackers may be conducting network analysis.",
      "Patches ere only available for a specific time.",
      "Attackers reverse engineer the exploit from the patch.",
      "Patches may not be compatible with proprietary software"
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Software Development Security. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 705,
    "domain": 5,
    "domain_name": "Identity and Access Management (IAM)",
    "scenario": "An organization implements a Remote Access Server (RAS). Once users correct to the server, digital certificates are used to authenticate their identity.",
    "question": "What type of Extensible Authentication Protocol (EAP) would the organization use dring this authentication?",
    "options": [
      "Transport layer security (TLS)",
      "Message Digest 5 (MD5)",
      "Lightweight Extensible Authentication Protocol (EAP)",
      "Subscriber Identity Module (SIM)"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Identity and Access Management (IAM). Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 706,
    "domain": 5,
    "domain_name": "Identity and Access Management (IAM)",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following is the BEST identity-as-a-service (IDaaS) solution for validating users?",
    "options": [
      "Lightweight Directory Access Protocol (LDAP)",
      "Security Assertion Markup Language (SAM.)",
      "Single Sign-on (SSO)",
      "Open Authentication (OAuth)"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Identity and Access Management (IAM). Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 711,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following is MOST critical in a contract in a contract for data disposal on a hard drive with a third party?",
    "options": [
      "Authorized destruction times",
      "Allowed unallocated disk space",
      "Amount of overwrites required",
      "Frequency of recovered media"
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 713,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "What is the BEST way to correlate large volumes of disparate data sources in a Security Operations Center (SOC) environment?",
    "options": [
      "Implement Intrusion Detection System (IDS).",
      "Implement a Security Information and Event Management (SIEM) system.",
      "Hire a team of analysts to consolidate data and generate reports.",
      "Outsource the management of the SOC."
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 718,
    "domain": 3,
    "domain_name": "Security Architecture and Engineering",
    "scenario": "General CISSP Concept Review",
    "question": "Guaranteed success with Our exam guides visit - https://www.certshared.com Certshared now are offering 100% pass ensure CISSP dumps! https://www.certshared.com/exam/CISSP/ (1487 Q&As) - (Exam Topic 14) Which of the following authorization standards is built to handle Application programming Interface (API) access for federated Identity management (FIM)?",
    "options": [
      "Remote Authentication Dial-In User Service (RADIUS)",
      "Terminal Access Controller Access Control System Plus (TACACS+)",
      "Open Authentication (OAuth)",
      "Security Assertion Markup Language (SAML)"
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Security Architecture and Engineering. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 723,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "Assume that a computer was powered off when an information security professional arrived at a crime scene.",
    "question": "Which of the following actions should be performed after the crime scene is isolated?",
    "options": [
      "Turn the computer on and collect volatile data.",
      "Turn the computer on and collect network information.",
      "Leave the computer off and prepare the computer for transportation to the laboratory",
      "Remove the hard drive, prepare it for transportation, and leave the hardware ta the scene."
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 724,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Digital certificates used transport Layer security (TLS) support which of the following?",
    "options": [
      "Server identify and data confidentially",
      "Information input validation",
      "Multi-Factor Authentication (MFA)",
      "Non-reputation controls and data encryption"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 729,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following threats exists with an implementation of digital signatures?",
    "options": [
      "Spoofing",
      "Substitution",
      "Content tampering",
      "Eavesdropping"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 731,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which is the second phase of public key Infrastructure (pk1) key/certificate life-cycle management?",
    "options": [
      "Issued Phase",
      "Cancellation Phase",
      "Implementation phase",
      "Initialization Phase"
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 733,
    "domain": 4,
    "domain_name": "Communication and Network Security",
    "scenario": "General CISSP Concept Review",
    "question": "Additional padding may be added to the Encapsulating security protocol (ESP) trailer to provide which of the following?",
    "options": [
      "Data origin authentication",
      "Partial traffic flow confidentiality",
      "protection ao>ainst replay attack",
      "Access control"
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Communication and Network Security. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 734,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "An analysis finds unusual activity coming from a computer that was thrown away several months prior, which of the following steps ensure the proper removal of the system?",
    "options": [
      "Deactivation",
      "Decommission",
      "Deploy",
      "Procure"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 736,
    "domain": 2,
    "domain_name": "Asset Security",
    "scenario": "General CISSP Concept Review",
    "question": "What is the MAIN reason to ensure the appropriate retention periods are enforced for data stored on electronic media?",
    "options": [
      "To reduce the carbon footprint by eliminating paper",
      "To create an inventory of data assets stored on disk for backup and recovery",
      "To declassify information that has been improperly classified",
      "To reduce the risk of loss, unauthorized access, use, modification, and disclosure"
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Asset Security. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 740,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which is the MOST effective countermeasure to prevent electromagnetic emanations on unshielded data cable?",
    "options": [
      "Move cable are away from exterior facing windows",
      "Encase exposed cable runs in metal conduit",
      "Enable Power over Ethernet (PoE) to increase voltage",
      "Bundle exposed cables together to disguise their signals"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 743,
    "domain": 2,
    "domain_name": "Asset Security",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following media is least problematic with data remanence?",
    "options": [
      "Magnetic disk",
      "Electrically Erasable Programming read-only Memory (EEPROM)",
      "Dynamic Random Access Memory (DRAM)",
      "Flash memory"
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Asset Security. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 748,
    "domain": 5,
    "domain_name": "Identity and Access Management (IAM)",
    "scenario": "General CISSP Concept Review",
    "question": "What is the best way for mutual authentication of devices belonging to the same organization?",
    "options": [
      "Token",
      "Certificates",
      "User ID and passwords",
      "Biometric"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Identity and Access Management (IAM). Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 749,
    "domain": 7,
    "domain_name": "Security Operations",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following initiates the system recovery phase of a disaster recovery plan?",
    "options": [
      "Evacuating the disaster site",
      "Assessing the extent of damage following the disaster",
      "Issuing a formal disaster declaration",
      "Activating the organization's hot site"
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Security Operations. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 750,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "An organization is required to comply with the Payment Card Industry Data Security Standard (PCI-DSS), what is the MOST effective approach to safeguard digital and paper media that contains cardholder data?",
    "options": [
      "Use and regularity update antivirus software.",
      "Maintain strict control over storage of media",
      "Mandate encryption of cardholder data.",
      "Configure firewall rules to protect the data."
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 751,
    "domain": 3,
    "domain_name": "Security Architecture and Engineering",
    "scenario": "During a recent assessment an organization has discovered that the wireless signal can be detected outside the campus area.",
    "question": "What logical control should be implemented in order to BFST protect One confidentiality of information traveling One wireless transmission media? Guaranteed success with Our exam guides visit - https://www.certshared.com Certshared now are offering 100% pass ensure CISSP dumps! https://www.certshared.com/exam/CISSP/ (1487 Q&As)",
    "options": [
      "Configure a firewall to logically separate the data at the boundary.",
      "Configure the Access Points (AP) to use Wi-Fi Protected Access 2 (WPA2) encryption.",
      "Disable the Service Set Identifier (SSID) broadcast on the Access Points (AP).",
      "Perform regular technical assessments on the Wireless Local Area Network (WLAN)."
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Security Architecture and Engineering. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 753,
    "domain": 2,
    "domain_name": "Asset Security",
    "scenario": "General CISSP Concept Review",
    "question": "What is the FIRST step required in establishing a records retention program?",
    "options": [
      "Identify and inventory all records storage locations.",
      "Classify records based on sensitivity.",
      "Identify and inventory all records.",
      "Draft a records retention policy."
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Asset Security. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 12,
    "domain": 5,
    "domain_name": "Identity and Access Management (IAM)",
    "scenario": "General CISSP Concept Review",
    "question": "What is a use for mandatory access control (MAC)?",
    "options": [
      "Allows for labeling of sensitive user accounts for access control",
      "Allows for mandatory user identity and passwords based on sensitivity",
      "Allows for mandatory system administrator access control over objects",
      "Allows for object security based on sensitivity represented by a label"
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Identity and Access Management (IAM). Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 16,
    "domain": 5,
    "domain_name": "Identity and Access Management (IAM)",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following access control models is MOST restrictive?",
    "options": [
      "Discretionary Access Control (DAC)",
      "Mandatory Access Control (MAC)",
      "Role Based Access Control (RBAC)",
      "Rule based access control"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Identity and Access Management (IAM). Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 20,
    "domain": 8,
    "domain_name": "Software Development Security",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following is fundamentally required to address potential security issues when initiating software development?",
    "options": [
      "Implement ongoing security audits in all environments.",
      "Ensure isolation of development from production.",
      "Add information security objectives into development.",
      "Conduct independent source code review."
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Software Development Security. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 24,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "An organization has implemented a password complexity and an account lockout policy enforcing five incorrect logins tries within ten minutes. Network users have reported significantly increased account lockouts.",
    "question": "Which of the following security principles is this company affecting?",
    "options": [
      "Availability",
      "Integrity",
      "Confidentiality",
      "Authentication"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 26,
    "domain": 4,
    "domain_name": "Communication and Network Security",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following is a PRIMARY security weakness in the design of Domain Name System (DNS)?",
    "options": [
      "A DNS server can be disabled in a denial-of-service (DoS) attack.",
      "A DNS server does not authenticate source of information.",
      "Each DNS server must hold the address of the root servers.",
      "A DNS server database can be injected with falsified checksums."
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Communication and Network Security. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 35,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "A breach investigation \u2026\u2026 a website was exploited through an open soured \u2026..Is The FIRB Stan In the Process that could have prevented this breach?",
    "options": [
      "Application whitelisting",
      "Web application firewall (WAF)",
      "Vulnerability remediation",
      "Software inventory"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 47,
    "domain": 5,
    "domain_name": "Identity and Access Management (IAM)",
    "scenario": "A new employee formally reported suspicious behavior to the organization security team. The report claims that someone not affiliated with the organization was inquiring about the member's work location, length of employment, and building access controls.",
    "question": "The employee's reporting is MOST likely the result of which of the following?",
    "options": [
      "Risk avoidance",
      "Security engineering",
      "security awareness",
      "Phishing"
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Identity and Access Management (IAM). Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 52,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following ensures old log data is not overwritten?",
    "options": [
      "Increase log file size",
      "Implement Syslog",
      "Log preservation",
      "Log retention"
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 56,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "To minimize the vulnerabilities of a web-based application, which of the following FIRST actions will lock down the system and minimize the risk of an attack?",
    "options": [
      "Install an antivirus on the server",
      "Run a vulnerability scanner",
      "Review access controls",
      "Apply the latest vendor patches and updates"
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 58,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "When reviewing the security logs, the password shown for an administrative login event was ' OR ' '1'='1' --.",
    "question": "This is an example of which of the following kinds of attack?",
    "options": [
      "Brute Force Attack",
      "Structured Query Language (SQL) Injection",
      "Cross-Site Scripting (XSS)",
      "Rainbow Table Attack"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 60,
    "domain": 6,
    "domain_name": "Security Assessment and Testing",
    "scenario": "General CISSP Concept Review",
    "question": "What is the PRIMARY consideration when testing industrial control systems (ICS) for security weaknesses?",
    "options": [
      "ICS often do not have availability requirements.",
      "ICS are often isolated and difficult to access.",
      "ICS often run on UNIX operating systems.",
      "ICS are often sensitive to unexpected traffic."
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Security Assessment and Testing. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 65,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "In order to support the least privilege security principle when a resource is transferring within the organization from a production support system administration role to a developer role, what changes should be made to the resource\u2019s access to the production operating system (OS) directory structure?",
    "options": [
      "From Read Only privileges to No Access Privileges",
      "From Author privileges to Administrator privileges",
      "From Administrator privileges to No Access privileges",
      "From No Access Privileges to Author privileges"
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 67,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "An organization needs a general purpose document to prove that its internal controls properly address security, availability, processing integrity, confidentiality or privacy risks.",
    "question": "Which of the following reports is required?",
    "options": [
      "A Service Organization Control (SOC) 3 report",
      "The Statement on Standards for Attestation Engagements N",
      "18 (SSAE 18)",
      "A Service Organization Control (SOC) 2 report",
      "The International Organization for Standardization (ISO) 27001"
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 71,
    "domain": 7,
    "domain_name": "Security Operations",
    "scenario": "During a Disaster Recovery (DR) simulation, it is discovered that the shared recovery site lacks adequate data restoration capabilities to support the implementation of multiple plans simultaneously.",
    "question": "What would be impacted by this fact if left unchanged?",
    "options": [
      "Recovery Point Objective (RPO)",
      "Recovery Time Objective (RTO)",
      "Business Impact Analysis (BIA)",
      "Return on Investment (ROI)",
      "A"
    ],
    "answer": 4,
    "explanation": "This question covers a critical concept in Security Operations. Option E is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 75,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "What is the FIRST step for an organization to take before allowing personnel to access social media from a corporate device or user account?",
    "options": [
      "Publish a social media guidelines document.",
      "Publish an acceptable usage policy.",
      "Document a procedure for accessing social media sites.",
      "Deliver security awareness training."
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 78,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "A security practitioner has been asked to model best practices for disaster recovery (DR) and business continuity. The practitioner has decided that a formal committee is needed to establish a business continuity policy.",
    "question": "Which of the following BEST describes this stage of business continuity development?",
    "options": [
      "Project Initiation and Management",
      "Risk Evaluation and Control",
      "Developing and Implementing business continuity plans (BCP)",
      "Business impact analysis (BIA)"
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 81,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "What is the PRIMARY benefit of incident reporting and computer crime investigations?",
    "options": [
      "Providing evidence to law enforcement",
      "Repairing the damage and preventing future occurrences",
      "Appointing a computer emergency response team",
      "Complying with security policy"
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 82,
    "domain": 4,
    "domain_name": "Communication and Network Security",
    "scenario": "Information security practitioners are in the midst of implementing a new firewall.",
    "question": "Which of the following failure methods would BEST prioritize security in the event of failure?",
    "options": [
      "Fail-Closed",
      "Fail-Open",
      "Fail-Safe",
      "Failover"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Communication and Network Security. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 85,
    "domain": 5,
    "domain_name": "Identity and Access Management (IAM)",
    "scenario": "General CISSP Concept Review",
    "question": "What type of attack sends Internet Control Message Protocol (ICMP) echo requests to the target machine with a larger payload than the target can handle?",
    "options": [
      "Man-in-the-Middle (MITM)",
      "Denial of Service (DoS)",
      "Domain Name Server (DNS) poisoning",
      "Buffer overflow"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Identity and Access Management (IAM). Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 87,
    "domain": 5,
    "domain_name": "Identity and Access Management (IAM)",
    "scenario": "General CISSP Concept Review",
    "question": "Which access control method is based on users issuing access requests on system resources, features assigned to those resources, the operational or situational context, and a set of policies specified in terms of those features and context?",
    "options": [
      "Mandatory Access Control (MAC)",
      "Role Based Access Control (RBAC)",
      "Discretionary Access Control (DAC)",
      "Attribute Based Access Control (ABAC)"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Identity and Access Management (IAM). Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 88,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following security objectives for industrial control systems (ICS) can be adapted to securing any Internet of Things (IoT) system?",
    "options": [
      "Prevent unauthorized modification of data.",
      "Restore the system after an incident.",
      "Detect security events and incidents.",
      "Protect individual components from exploitation"
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 93,
    "domain": 8,
    "domain_name": "Software Development Security",
    "scenario": "General CISSP Concept Review",
    "question": "In a DevOps environment, which of the following actions is MOST necessary to have confidence in the quality of the changes being made?",
    "options": [
      "Prepare to take corrective actions quickly.",
      "Receive approval from the change review board.",
      "Review logs for any anomalies.",
      "Automate functionality testing."
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Software Development Security. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 95,
    "domain": 2,
    "domain_name": "Asset Security",
    "scenario": "A project manager for a large software firm has acquired a government contract that generates large amounts of Controlled Unclassified Information (CUI). The organization's information security manager has received a request to transfer project-related CUI between systems of differing security classifications.",
    "question": "What role provides the authoritative guidance for this transfer?",
    "options": [
      "Information owner",
      "PM",
      "Data Custodian",
      "Mission/Business Owner"
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Asset Security. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 113,
    "domain": 5,
    "domain_name": "Identity and Access Management (IAM)",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following is the BEST way to mitigate circumvention of access controls?",
    "options": [
      "Multi-layer access controls working in isolation",
      "Multi-vendor approach to technology implementation",
      "Multi-layer firewall architecture with Internet Protocol (IP) filtering enabled",
      "Multi-layer access controls with diversification of technologies"
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Identity and Access Management (IAM). Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 118,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following BEST describes the objectives of the Business Impact Analysis (BIA)?",
    "options": [
      "Identifying the events and environmental factors that can adversely affect an organization",
      "Identifying what is important and critical based on disruptions that can affect the organization.",
      "Establishing the need for a Business Continuity Plan (BCP) based on threats that can affect an organization",
      "Preparing a program to create an organizational awareness for executing the Business Continuity Plan (BCP)"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 120,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "A security practitioner needs to implementation solution to verify endpoint security protections and operating system (0S) versions.",
    "question": "Which of the following is the BEST solution to implement?",
    "options": [
      "An intrusion prevention system (IPS)",
      "An intrusion prevention system (IPS)",
      "Network Access Control (NAC)",
      "A firewall"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 123,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Passing Certification Exams Made Easy visit - https://www.surepassexam.com Recommend!! Get the Full CISSP dumps in VCE and PDF From SurePassExam https://www.surepassexam.com/CISSP-exam-dumps.html (1487 New Questions) Which of the following implementations will achieve high availability in a website?",
    "options": [
      "Multiple Domain Name System (DNS) entries resolving to the same web server and large amounts of bandwidth",
      "Disk mirroring of the web server with redundant disk drives in a hardened data center",
      "Disk striping of the web server hard drives and large amounts of bandwidth",
      "Multiple geographically dispersed web servers that are configured for failover"
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 128,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "What type of investigation applies when malicious behavior is suspected between two organizations?",
    "options": [
      "Regulatory",
      "Criminal",
      "Civil",
      "Operational"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 129,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "A technician is troubleshooting a client's report about poor wireless performance.",
    "question": "Using a client monitor, the technician notes the following information: Which of the following is MOST likely the cause of the issue?",
    "options": [
      "Channel overlap",
      "Poor signal",
      "Incorrect power settings",
      "Wrong antenna type"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 130,
    "domain": 5,
    "domain_name": "Identity and Access Management (IAM)",
    "scenario": "General CISSP Concept Review",
    "question": "Physical Access Control Systems (PACS) allow authorized security personnel to manage and monitor access control for subjects through which function?",
    "options": [
      "Remote access administration",
      "Personal Identity Verification (PIV)",
      "Access Control List (ACL)",
      "Privileged Identity Management (PIM)"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Identity and Access Management (IAM). Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 135,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following is a term used to describe maintaining ongoing awareness of information security, vulnerabilities, and threats to support organizational risk management decisions?",
    "options": [
      "Information Security Management System (ISMS)",
      "Information Sharing & Analysis Centers (ISAC)",
      "Risk Management Framework (RMF)",
      "Information Security Continuous Monitoring (ISCM)"
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 138,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Passing Certification Exams Made Easy visit - https://www.surepassexam.com Recommend!! Get the Full CISSP dumps in VCE and PDF From SurePassExam https://www.surepassexam.com/CISSP-exam-dumps.html (1487 New Questions) - (Exam Topic 15)",
    "options": [
      "Require the cloud 1AM provider to use declarative security instead of programmatic authentication checks.",
      "Integrate a Web-Application Firewall (WAF) In reverie-proxy mode in front of the service provider.",
      "Apply Transport layer Security (TLS) to the cloud-based authentication checks.",
      "Install an on-premise Authentication Gateway Service (AGS) In front of the service provider."
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 140,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "An establish information technology (IT) consulting firm is considering acquiring a successful local startup.",
    "question": "To gain a comprehensive understanding of the startup\u2019s security posture\u2019 which type of assessment provides the BEST information?",
    "options": [
      "A security audit",
      "A penetration test",
      "A tabletop exercise",
      "A security threat model"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 148,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "In supervisory control and data acquisition (SCADA) systems, which of the following controls can be used to reduce device exposure to malware?",
    "options": [
      "Disable all command line interfaces.",
      "Disallow untested code in the execution space of the SCADA device.",
      "Prohibit the use of unsecure scripting languages.",
      "Disable Transmission Control Protocol (TCP) and User Datagram Protocol (UDP) port 138 and 139 on the SCADA device."
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 161,
    "domain": 2,
    "domain_name": "Asset Security",
    "scenario": "General CISSP Concept Review",
    "question": "Using the cipher text and resultant clear text message to derive the non-alphabetic cipher key is an example of which method of cryptanalytic attack?",
    "options": [
      "Frequency analysis",
      "Ciphertext-only attack",
      "Probable-plaintext attack",
      "Known-plaintext attack"
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Asset Security. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 169,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "An organization is setting a security assessment scope with the goal of developing a Security Management Program (SMP). The next step is to select an approach for conducting the risk assessment.",
    "question": "Which of the following approaches is MOST effective for the SMP?",
    "options": [
      "Data driven risk assessment with a focus on data",
      "Security controls driven assessment that focuses on controls management",
      "Business processes based risk assessment with a focus on business goals",
      "Asset driven risk assessment with a focus on the assets"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 174,
    "domain": 3,
    "domain_name": "Security Architecture and Engineering",
    "scenario": "A security professional was tasked with rebuilding a company's wireless infrastructure.",
    "question": "Which of the following are the MOST important factors to consider while making a decision on which wireless spectrum to deploy?",
    "options": [
      "Hybrid frequency band, service set identifier (SSID), and interpolation",
      "Performance, geographic location, and radio signal interference",
      "Facility size, intermodulation, and direct satellite service",
      "Existing client devices, manufacturer reputation, and electrical interference"
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Security Architecture and Engineering. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 178,
    "domain": 5,
    "domain_name": "Identity and Access Management (IAM)",
    "scenario": "General CISSP Concept Review",
    "question": "A client server infrastructure that provides user-to-server authentication describes which one of the following?",
    "options": [
      "Secure Sockets Layer (SSL)",
      "Kerberos",
      "509",
      "User-based authorization"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Identity and Access Management (IAM). Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 180,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "An application is used for funds transfer between an organization and a third-party. During a security audit, an issue with the business continuity/disaster recovery policy and procedures for this application.",
    "question": "Which of the following reports should the audit file with the organization?",
    "options": [
      "Service Organization Control (SOC) 1",
      "Statement on Auditing Standards (SAS) 70",
      "Service Organization Control (SOC) 2",
      "Statement on Auditing Standards (SAS) 70-1"
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 181,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following criteria ensures information is protected relative to its importance to the organization?",
    "options": [
      "The value of the data to the organization's senior management",
      "Legal requirements, value, criticality, and sensitivity to unauthorized disclosure or modification",
      "Legal requirements determined by the organization headquarters' location",
      "Organizational stakeholders, with classification approved by the management board"
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 201,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "The existence of physical barriers, card and personal identification number (PIN) access systems, cameras, alarms, and security guards BEST describes this security approach?",
    "options": [
      "Security information and event management (SIEM)",
      "Security perimeter",
      "Defense-in-depth",
      "Access control"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 205,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "An information technology (IT) employee who travels frequently to various ies remotely to an organization\u2019 the following solutions BEST serves as a secure control mechanism to meet the organization's requirements? to troubleshoot p Which of the following solutions BEST serves as a secure control mechanisn to meet the organization's requirements?",
    "options": [
      "Update the firewall rules to include the static Internet Protocol (IP) addresses of the locations where the employee connects from.",
      "Install a third-party screen sharing solution that provides remote connection from a public website.",
      "Implement a Dynamic Domain Name Services (DDNS) account to initiate a virtual private network (VPN) using the DDNS record.",
      "Install a bastion host in the demilitarized zone (DMZ) and allow multi-factor authentication (MFA) access."
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 207,
    "domain": 3,
    "domain_name": "Security Architecture and Engineering",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following departments initiates the request, approval, and provisioning business process?",
    "options": [
      "Operations",
      "Human resources (HR)",
      "Information technology (IT)",
      "Security"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Security Architecture and Engineering. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 210,
    "domain": 5,
    "domain_name": "Identity and Access Management (IAM)",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following would need to be configured to ensure a device with a specific MAC address is always assigned the same IP address from DHCP?",
    "options": [
      "Scope options",
      "Reservation",
      "Dynamic assignment",
      "Exclusion",
      "Static assignment"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Identity and Access Management (IAM). Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 213,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following is the BEST way to determine the success of a patch management process?",
    "options": [
      "Analysis and impact assessment",
      "Auditing and assessment",
      "Configuration management (CM)",
      "Change management"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 214,
    "domain": 4,
    "domain_name": "Communication and Network Security",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following is the MAIN difference between a network-based firewall and a host-based firewall?",
    "options": [
      "A network-based firewall is stateful, while a host-based firewall is stateless.",
      "A network-based firewall controls traffic passing through the device, while a host-based firewall controls traffic destined for the device.",
      "A network-based firewall verifies network traffic, while a host-based firewall verifies processes and applications.",
      "A network-based firewall blocks network intrusions, while a host-based firewall blocks malware."
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Communication and Network Security. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 215,
    "domain": 7,
    "domain_name": "Security Operations",
    "scenario": "General CISSP Concept Review",
    "question": "Which type of disaster recovery plan (DRP) testing carries the MOST operational risk?",
    "options": [
      "Cutover",
      "Walkthrough",
      "Tabletop",
      "Parallel"
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Security Operations. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 217,
    "domain": 4,
    "domain_name": "Communication and Network Security",
    "scenario": "General CISSP Concept Review",
    "question": "If the wide area network (WAN) is supporting converged applications like Voice over Internet Protocol (VoIP), which of the following becomes even MORE essential to the assurance of network?",
    "options": [
      "Classless Inter-Domain Routing (CIDR)",
      "Deterministic routing",
      "Internet Protocol (IP) routing lookups",
      "Boundary routing"
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Communication and Network Security. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 219,
    "domain": 6,
    "domain_name": "Security Assessment and Testing",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following Disaster recovery (DR) testing processes is LEAST likely to disrupt normal business operations?",
    "options": [
      "Parallel",
      "Simulation",
      "Table-top",
      "Cut-over"
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Security Assessment and Testing. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 223,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "In systems security engineering, what does the security principle of modularity provide?",
    "options": [
      "Documentation of functions",
      "Isolated functions and data",
      "Secure distribution of programs and data",
      "Minimal access to perform a function"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 229,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "When designing a business continuity plan (BCP), what is the formula to determine the Maximum Tolerable Downtime (MTD)?",
    "options": [
      "Annual Loss Expectancy (ALE) + Work Recovery Time (WRT)",
      "Business impact analysis (BIA) + Recovery Point Objective (RPO)",
      "Recovery Time Objective (RTO) + Work Recovery Time (WRT)",
      "Estimated Maximum Loss (EML) + Recovery Time Objective (RTO)"
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 239,
    "domain": 4,
    "domain_name": "Communication and Network Security",
    "scenario": "General CISSP Concept Review",
    "question": "After the INITIAL input o f a user identification (ID) and password, what is an authentication system that prompts the user for a different response each time the user logs on?",
    "options": [
      "Persons Identification Number (PIN)",
      "Secondary password",
      "Challenge response",
      "Voice authentication"
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Communication and Network Security. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 244,
    "domain": 5,
    "domain_name": "Identity and Access Management (IAM)",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following will accomplish Multi-Factor Authentication (MFA)?",
    "options": [
      "Issuing a smart card with a user-selected Personal Identification Number (PIN)",
      "Requiring users to enter a Personal Identification Number (PIN) and a password",
      "Performing a palm and retinal scan",
      "Issuing a smart card and a One Time Password (OTP) token"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Identity and Access Management (IAM). Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 254,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "The personal laptop of an organization executive is stolen from the office, complete with personnel and project records.",
    "question": "Which of the following should be done FIRST to mitigate future occurrences?",
    "options": [
      "Encrypt disks on personal laptops.",
      "Issue cable locks for use on personal laptops.",
      "Create policies addressing critical information on personal laptops.",
      "Monitor personal laptops for critical information."
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 259,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following security tools monitors devices and records the information in a central database for further analysis?",
    "options": [
      "Security orchestration automation and response",
      "Host-based intrusion detection system (HIDS)",
      "Antivirus",
      "Endpoint detection and response (EDR)"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 262,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "What is the FINAL step in the waterfall method for contingency planning?",
    "options": [
      "Maintenance",
      "Testing",
      "Implementation",
      "Training"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 281,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following is MOST appropriate to collect evidence of a zero-day attack?",
    "options": [
      "Firewall",
      "Honeypot",
      "Antispam",
      "Antivirus"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 285,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following outsourcing agreement provisions has the HIGHEST priority from a security operations perspective?",
    "options": [
      "Conditions to prevent the use of subcontractors",
      "Terms for contract renegotiation in case of disaster",
      "Escalation process for problem resolution during incidents",
      "Root cause analysis for application performance issue"
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 288,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "A Chief Information Security Officer (CISO) of a firm which decided to migrate to cloud has been tasked with ensuring an optimal level of security.",
    "question": "Which of the following would be the FIRST consideration?",
    "options": [
      "Define the cloud migration roadmap and set out which applications and data repositories should be moved into the cloud.",
      "Ensure that the contract between the cloud vendor and the firm clearly defines responsibilities for operating security controls.",
      "Analyze the firm's applications and data repositories to determine the relevant control requirements.",
      "Request a security risk assessment of the cloud vendor be completed by an independent third-party."
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 296,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "What is the PRIMARY benefit of relying on Security Content Automation Protocol (SCAP)?",
    "options": [
      "Save security costs for the organization.",
      "Improve vulnerability assessment capabilities.",
      "Standardize specifications between software security products.",
      "Achieve organizational compliance with international standards."
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 297,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following is the BEST way to protect privileged accounts?",
    "options": [
      "Quarterly user access rights audits",
      "Role-based access control (RBAC)",
      "Written supervisory approval",
      "Multi-factor authentication (MFA)"
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 303,
    "domain": 4,
    "domain_name": "Communication and Network Security",
    "scenario": "An organization has implemented a protection strategy to secure the network from unauthorized external access. The new Chief Information Security Officer (CISO) wants to increase security by better protecting the network from unauthorized internal access.",
    "question": "Which Network Access Control (NAC) capability BEST meets this objective?",
    "options": [
      "Application firewall",
      "Port security",
      "Strong passwords",
      "Two-factor authentication (2FA)"
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Communication and Network Security. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 307,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "The acquisition of personal data being obtained by a lawful and fair means is an example of what principle?",
    "options": [
      "Data Quality Principle",
      "Openness Principle",
      "Purpose Specification Principle",
      "Collection Limitation Principle"
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 308,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "What are the essential elements of a Risk Assessment Report (RAR)?",
    "options": [
      "Table of contents, testing criteria, and index",
      "Table of contents, chapters, and executive summary",
      "Executive summary, graph of risks, and process",
      "Executive summary, body of the report, and appendices"
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 311,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following is the PRIMARY reason for selecting the appropriate level of detail for audit record generation?",
    "options": [
      "Lower costs throughout the System Development Life Cycle (SDLC)",
      "Facilitate a root cause analysis (RCA)",
      "Enable generation of corrective action reports",
      "Avoid lengthy audit reports"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 314,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "What documentation is produced FIRST when performing an effective physical loss control process?",
    "options": [
      "Deterrent controls list",
      "Security standards list",
      "inventory list",
      "Asset valuation list"
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 318,
    "domain": 4,
    "domain_name": "Communication and Network Security",
    "scenario": "A network security engineer needs to ensure that a security solution analyzes traffic for protocol manipulation and various sorts of common attacks. In addition, all Uniform Resource Locator (URL) traffic must be inspected and users prevented from browsing inappropriate websites.",
    "question": "Which of the following solutions should be implemented to enable administrators the capability to analyze traffic, blacklist external sites, and log user traffic for later analysis?",
    "options": [
      "Intrusion detection system (IDS)",
      "Circuit-Level Proxy",
      "Application-Level Proxy",
      "Host-based Firewall"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Communication and Network Security. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 320,
    "domain": 3,
    "domain_name": "Security Architecture and Engineering",
    "scenario": "A company hired an external vendor to perform a penetration test ofa new payroll system. The company\u2019s internal test team had already performed an in-depth application and security test of the system and determined that it met security requirements. However, the external vendor uncovered significant security weaknesses where sensitive personal data was being sent unencrypted to the tax processing systems.",
    "question": "What is the MOST likely cause of the security issues?",
    "options": [
      "Failure to perform interface testing",
      "Failure to perform negative testing",
      "Inadequate performance testing",
      "Inadequate application level testing"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Security Architecture and Engineering. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 341,
    "domain": 5,
    "domain_name": "Identity and Access Management (IAM)",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following BEST describes the purpose of the reference monitor when defining access control to enforce the security model?",
    "options": [
      "Quality design principles to ensure quality by design",
      "Policies to validate organization rules",
      "Cyber hygiene to ensure organizations can keep systems healthy",
      "Strong operational security to keep unit members safe"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Identity and Access Management (IAM). Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 345,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "The security team plans on using automated account reconciliation in the corporate user access review process.",
    "question": "Which of the following must be implemented for the BEST results with fewest errors when running the audit?",
    "options": [
      "Removal of service accounts from review",
      "Segregation of Duties (SoD)",
      "Clear provisioning policies",
      "Frequent audits"
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 349,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "What Is a risk of using commercial off-the-shelf (COTS) products?",
    "options": [
      "COTS products may not map directly to an organization\u2019s security requirements.",
      "COTS products are typically more expensive than developing software in-house.",
      "Cost to implement COTS products is difficult to predict.",
      "Vendors are often hesitant to share their source code."
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 351,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "A software architect has been asked to build a platform to distribute music to thousands of users on a global scale. The architect has been reading about content delivery networks (CDN).",
    "question": "Which of the following is a principal task to undertake? Passing Certification Exams Made Easy visit - https://www.surepassexam.com Recommend!! Get the Full CISSP dumps in VCE and PDF From SurePassExam https://www.surepassexam.com/CISSP-exam-dumps.html (1487 New Questions)",
    "options": [
      "Establish a service-oriented architecture (SOA).",
      "Establish a media caching methodology.",
      "Establish relationships with hundreds of Internet service providers (ISP).",
      "Establish a low-latency wide area network (WAN)."
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 355,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following types of hosts should be operating in the demilitarized zone (DMZ)?",
    "options": [
      "Hosts intended to provide limited access to public resources",
      "Database servers that can provide useful information to the public",
      "Hosts that store unimportant data such as demographical information",
      "File servers containing organizational data"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 358,
    "domain": 5,
    "domain_name": "Identity and Access Management (IAM)",
    "scenario": "General CISSP Concept Review",
    "question": "If an employee transfers from one role to another, which of the following actions should this trigger within the identity and access management (IAM) lifecycle?",
    "options": [
      "New account creation",
      "User access review and adjustment",
      "Deprovisioning",
      "System account access review and adjustment"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Identity and Access Management (IAM). Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 361,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Configuring a Wireless Access Point (WAP) with the same Service Set Identifier (SSID) as another WAP in order to have users unknowingly connect is referred to as which of the following?",
    "options": [
      "Jamming",
      "Man-irHht-Middk (MITM)",
      "War driving",
      "Internet Protocol (IP) spoofing"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 365,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "The security team has been tasked with performing an interface test against a frontend external facing application and needs to verify that all input fields protect against invalid input.",
    "question": "Which of the following BEST assists this process?",
    "options": [
      "Application fuzzing",
      "Instruction set simulation",
      "Regression testing",
      "Sanity testing"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 371,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which section of the assessment report addresses separate vulnerabilities, weaknesses, and gaps?",
    "options": [
      "Key findings section",
      "Executive summary with full details",
      "Risk review section",
      "Findings definition section"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 374,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "A subscription service which provides power, climate control, raised flooring, and telephone wiring but NOT the computer and peripheral equipment is BEST described as a:",
    "options": [
      "warm site.",
      "reciprocal site.",
      "sicold site.",
      "hot site."
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 377,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "What is the MOST important factor in establishing an effective Information Security Awareness Program?",
    "options": [
      "Obtain management buy-in.",
      "Conduct an annual security awareness event.",
      "Mandate security training.",
      "Hang information security posters on the walls,"
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 380,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following factors is \u00e1 PRIMARY reason to drive changes in an Information Security Continuous Monitoring (ISCM) strategy?",
    "options": [
      "Testing and Evaluation (TE) personnel changes",
      "Changes to core missions or business processes",
      "Increased Cross-Site Request Forgery (CSRF) attacks",
      "Changes in Service Organization Control (SOC) 2 reporting requirements"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 385,
    "domain": 3,
    "domain_name": "Security Architecture and Engineering",
    "scenario": "General CISSP Concept Review",
    "question": "An organization is implementing data encryption using symmetric ciphers and the Chief Information Officer (CIO) is concerned about the risk of using one key to protect all sensitive data, The security practitioner has been tasked with recommending a solution to address the CIO's concerns, Which of the following is the BEST approach to achieving the objective by encrypting all sensitive data?",
    "options": [
      "Use a Secure Hash Algorithm 256 (SHA-256).",
      "Use a hierarchy of encryption keys.",
      "Use Hash Message Authentication Code (HMAC) keys.",
      "Use Rivest-Shamir-Adleman (RSA) keys."
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Security Architecture and Engineering. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 387,
    "domain": 4,
    "domain_name": "Communication and Network Security",
    "scenario": "A company wants to implement two-factor authentication (2FA) to protect their computers from unauthorized users.",
    "question": "Which solution provides the MOST secure means of authentication and meets the criteria they have set?",
    "options": [
      "Username and personal identification number (PIN)",
      "Fingerprint and retinal scanners",
      "Short Message Services (SMS) and smartphone authenticator",
      "Hardware token and password"
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Communication and Network Security. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 389,
    "domain": 8,
    "domain_name": "Software Development Security",
    "scenario": "A software developer wishes to write code that will execute safely and only as intended.",
    "question": "Which of the following programming language types is MOST likely to achieve this goal?",
    "options": [
      "Statically typed",
      "Weakly typed",
      "Strongly typed",
      "Dynamically typed"
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Software Development Security. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 401,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following documents specifies services from the client's viewpoint?",
    "options": [
      "Service level report",
      "Business impact analysis (BIA)",
      "Service level agreement (SLA)",
      "Service Level Requirement (SLR)"
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 405,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which is the PRIMARY mechanism for providing the workforce with the information needed to protect an agency\u2019s vital information resources?",
    "options": [
      "Incorporating security awareness and training as part of the overall information security program",
      "An information technology (IT) security policy to preserve the confidentiality, integrity, and availability of systems",
      "Implementation of access provisioning process for coordinating the creation of user accounts",
      "Execution of periodic security and privacy assessments to the organization"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 408,
    "domain": 4,
    "domain_name": "Communication and Network Security",
    "scenario": "The security organization is looking for a solution that could help them determine with a strong level of confidence that attackers have breached their network.",
    "question": "Passing Certification Exams Made Easy visit - https://www.surepassexam.com Recommend!! Get the Full CISSP dumps in VCE and PDF From SurePassExam https://www.surepassexam.com/CISSP-exam-dumps.html (1487 New Questions) Which solution is MOST effective at discovering a successful network breach?",
    "options": [
      "Deploying a honeypot",
      "Developing a sandbox",
      "Installing an intrusion prevention system (IPS)",
      "Installing an intrusion detection system (IDS)"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Communication and Network Security. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 413,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "What is the FIRST step in developing a patch management plan?",
    "options": [
      "Subscribe to a vulnerability subscription service.",
      "Develop a patch testing procedure.",
      "Inventory the hardware and software used.",
      "Identify unnecessary services installed on systems."
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 416,
    "domain": 5,
    "domain_name": "Identity and Access Management (IAM)",
    "scenario": "General CISSP Concept Review",
    "question": "In Identity Management (IdM), when is the verification stage performed?",
    "options": [
      "As part of system sign-on",
      "Before creation of the identity",
      "After revocation of the identity",
      "During authorization of the identity"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Identity and Access Management (IAM). Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 417,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "A Chief Information Officer (CIO) has delegated responsibility of their system security to the head of the information technology (IT) department. While corporate policy dictates that only the CIO can make decisions on the level of data protection required, technical implementation decisions are done by the head of the IT department.",
    "question": "Which of the following BEST describes the security role filled by the head of the IT department?",
    "options": [
      "System analyst",
      "System security officer",
      "System processor",
      "System custodian"
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 429,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following is included in the Global System for Mobile Communications (GSM) security framework?",
    "options": [
      "Public-Key Infrastructure (PKI)",
      "Symmetric key cryptography",
      "Digital signatures",
      "Biometric authentication"
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 430,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Digital non-repudiation requires which of the following?",
    "options": [
      "A trusted third-party",
      "Appropriate corporate policies",
      "Symmetric encryption",
      "Multifunction access cards"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 431,
    "domain": 3,
    "domain_name": "Security Architecture and Engineering",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following is the PRIMARY type of cryptography required to support non-repudiation of a digitally signed document?",
    "options": [
      "Message digest (MD)",
      "Asymmetric",
      "Symmetric",
      "Hashing"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Security Architecture and Engineering. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 435,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following is the MOST important first step in preparing for a security audit?",
    "options": [
      "Identify team members.",
      "Define the scope.",
      "Notify system administrators.",
      "Collect evidence."
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 439,
    "domain": 5,
    "domain_name": "Identity and Access Management (IAM)",
    "scenario": "A company is attempting to enhance the security of its user authentication processes. After evaluating several options, the company has decided to utilize Identity as a Service (IDaaS).",
    "question": "Which of the following factors leads the company to choose an IDaaS as their solution?",
    "options": [
      "In-house development provides more control.",
      "In-house team lacks resources to support an on-premise solution.",
      "Third-party solutions are inherently more secure.",
      "Third-party solutions are known for transferring the risk to the vendor."
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Identity and Access Management (IAM). Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 443,
    "domain": 3,
    "domain_name": "Security Architecture and Engineering",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following encryption technologies has the ability to function as a stream cipher?",
    "options": [
      "Cipher Feedback (CFB)",
      "Feistel cipher",
      "Cipher Block Chaining (CBC) with error propagation",
      "Electronic Code Book (ECB)"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Security Architecture and Engineering. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 449,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "The adoption of an enterprise-wide Business Continuity (BC) program requires which of the following?",
    "options": [
      "Good communication throughout the organization",
      "A completed Business Impact Analysis (BIA)",
      "Formation of Disaster Recovery (DR) project team",
      "Well-documented information asset classification"
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 453,
    "domain": 4,
    "domain_name": "Communication and Network Security",
    "scenario": "An authentication system that uses challenge and response was recently implemented on an organization's network, because the organization conducted an annual penetration test showing that testers were able to move laterally using authenticated credentials.",
    "question": "Which attack method was MOST likely used to achieve this?",
    "options": [
      "Cross-Site Scripting (XSS)",
      "Pass the ticket",
      "Brute force",
      "Hash collision"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Communication and Network Security. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 458,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Of the following, which BEST provides non- repudiation with regards to access to a server room?",
    "options": [
      "Fob and Personal Identification Number (PIN)",
      "Locked and secured cages",
      "Biometric readers",
      "Proximity readers"
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 459,
    "domain": 3,
    "domain_name": "Security Architecture and Engineering",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following is a limitation of the Bell-LaPadula model?",
    "options": [
      "Segregation of duties (SoD) is difficult to implement as the \"no read-up\" rule limits the ability of an object to access information with a higher classification.",
      "Mandatory access control (MAC) is enforced at all levels making discretionary access control (DAC) impossible to implement.",
      "It contains no provision or policy for changing data access control and works well only with access systems that are static in nature.",
      "It prioritizes integrity over confidentiality which can lead to inadvertent information disclosure."
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Security Architecture and Engineering. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 464,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following BEST describes the purpose of Border Gateway Protocol (BGP)?",
    "options": [
      "Maintain a list of network paths between internet routers.",
      "Provide Routing Information Protocol (RIP) version 2 advertisements to neighboring layer 3 devices.",
      "Provide firewall services to cloud-enabled applications.",
      "Maintain a list of efficient network paths between autonomous systems."
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 467,
    "domain": 6,
    "domain_name": "Security Assessment and Testing",
    "scenario": "General CISSP Concept Review",
    "question": "When assessing web vulnerabilities, how can navigating the dark web add value to a penetration test?",
    "options": [
      "The actual origin and tools used for the test can be hidden.",
      "Information may be found on related breaches and hacking.",
      "Vulnerabilities can be tested without impact on the tested environment.",
      "Information may be found on hidden vendor patches."
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Security Assessment and Testing. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 471,
    "domain": 4,
    "domain_name": "Communication and Network Security",
    "scenario": "A network administrator is configuring a database server and would like to ensure the database engine is listening on a certain port.",
    "question": "Which of the following Passing Certification Exams Made Easy visit - https://www.surepassexam.com Recommend!! Get the Full CISSP dumps in VCE and PDF From SurePassExam https://www.surepassexam.com/CISSP-exam-dumps.html (1487 New Questions) commands should the administrator use to accomplish this goal?",
    "options": [
      "nslookup",
      "netstat -a",
      "ipeonfig /a",
      "arp -a"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Communication and Network Security. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 476,
    "domain": 5,
    "domain_name": "Identity and Access Management (IAM)",
    "scenario": "A company needs to provide shared access of sensitive data on a cloud storage to external business partners.",
    "question": "Which of the following identity models is the BEST to blind identity providers (IdP) and relying parties (RP) so that subscriber lists of other parties are not disclosed?",
    "options": [
      "Federation authorities",
      "Proxied federation",
      "Static registration",
      "Dynamic registration"
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Identity and Access Management (IAM). Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 478,
    "domain": 5,
    "domain_name": "Identity and Access Management (IAM)",
    "scenario": "General CISSP Concept Review",
    "question": "What are the first two components of logical access control?",
    "options": [
      "Confidentiality and authentication",
      "Authentication and identification",
      "Identification and confidentiality",
      "Authentication and availability"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Identity and Access Management (IAM). Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 482,
    "domain": 5,
    "domain_name": "Identity and Access Management (IAM)",
    "scenario": "a large organization uses biometrics to allow access to its facilities. It adjusts the biometric value for incorrectly granting or denying access so that the two numbers are the same.",
    "question": "What is this value called?",
    "options": [
      "False Rejection Rate (FRR)",
      "Accuracy acceptance threshold",
      "Equal error rate",
      "False Acceptance Rate (FAR)"
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Identity and Access Management (IAM). Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 485,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "An organization is preparing to achieve General Data Protection Regulation (GDPR) compliance. The Chief Information Security Officer (CISO) is reviewing data protection methods.",
    "question": "Which of the following is the BEST data protection method?",
    "options": [
      "Encryption",
      "Backups",
      "Data obfuscation",
      "Strong authentication"
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 499,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "What is the MOST common security risk of a mobile device?",
    "options": [
      "Insecure communications link",
      "Data leakage",
      "Malware infection",
      "Data spoofing"
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 501,
    "domain": 4,
    "domain_name": "Communication and Network Security",
    "scenario": "When telephones in a city are connected by a single exchange, the caller can only connect with the switchboard operator. The operator then manually connects the call.",
    "question": "This is an example of which type of network topology?",
    "options": [
      "Star",
      "Tree",
      "Point-to-Point Protocol (PPP)",
      "Bus"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Communication and Network Security. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 505,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Why would a system be structured to isolate different classes of information from one another and segregate them by user jurisdiction?",
    "options": [
      "The organization can avoid e-discovery processes in the event of litigation.",
      "The organization's infrastructure is clearly arranged and scope of responsibility is simplified.",
      "The organization can vary its system policies to comply with conflicting national laws.",
      "The organization is required to provide different services to various third-party organizations."
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 510,
    "domain": 3,
    "domain_name": "Security Architecture and Engineering",
    "scenario": "A company wants to store data related to users on an offsite server.",
    "question": "What method can be deployed to protect the privacy of the user\u2019s information while maintaining the field-level configuration of the database?",
    "options": [
      "{Encryption",
      "Encoding",
      "Tokenization",
      "Hashing"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Security Architecture and Engineering. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 515,
    "domain": 8,
    "domain_name": "Software Development Security",
    "scenario": "General CISSP Concept Review",
    "question": "In software development, developers should use which type of queries to prevent a Structured Query Language (SQL) injection?",
    "options": [
      "Parameterised",
      "Dynamic",
      "Static",
      "Controlled"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Software Development Security. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 520,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "If traveling abroad and a customs official demands to examine a personal computer, which of the following should be assumed?",
    "options": [
      "The hard drive has been stolen.",
      "The Internet Protocol (IP) address has been copied.",
      "The hard drive has been copied.",
      "The Media Access Control (MAC) address was stolen"
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 524,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "A manager identified two conflicting sensitive user functions that were assigned to a single user account that had the potential to result in financial and regulatory risk to the company.",
    "question": "The manager MOST likely discovered this during which of the following?",
    "options": [
      "Security control assessment.",
      "Separation of duties analysis",
      "Network Access Control (NAC) review",
      "Federated identity management (FIM) evaluation"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 529,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which is the BEST control to meet the Statement on Standards for Attestation Engagements 18 (SSAE-18) confidentiality category?",
    "options": [
      "Data processing",
      "Storage encryption",
      "File hashing",
      "Data retention policy"
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 533,
    "domain": 3,
    "domain_name": "Security Architecture and Engineering",
    "scenario": "A firm within the defense industry has been directed to comply with contractual requirements for encryption of a government client\u2019s Controlled Unclassified Information (CUI).",
    "question": "What encryption strategy represents how to protect data at rest in the MOST efficient and cost-effective manner?",
    "options": [
      "Perform physical separation of program information and encrypt only information deemed critical by the defense client",
      "Perform logical separation of program information, using virtualized storage solutions with built-in encryption at the virtualization layer",
      "Perform logical separation of program information, using virtualized storage solutions with encryption management in the back-end disk systems",
      "Implement data at rest encryption across the entire storage area network (SAN)"
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Security Architecture and Engineering. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 538,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Assuming an individual has taken all of the steps to keep their internet connection private, which of the following is the BEST to browse the web privately?",
    "options": [
      "Prevent information about browsing activities from being stored in the cloud.",
      "Store browsing activities in the cloud.",
      "Prevent information about browsing activities farm being stored on the personal device.",
      "Store information about browsing activities on the personal device."
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 542,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "What is considered a compensating control for not having electrical surge protectors installed?",
    "options": [
      "Having dual lines to network service providers built to the site",
      "Having backup diesel generators installed to the site",
      "Having a hot disaster recovery (DR) environment for the site",
      "Having network equipment in active-active clusters at the site"
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 545,
    "domain": 2,
    "domain_name": "Asset Security",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following is the FIRST requirement a data owner should consider before implementing a data retention policy?",
    "options": [
      "Training",
      "Legal",
      "Business",
      "Storage"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Asset Security. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 552,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following is the BEST method to gather evidence from a computer's hard drive?",
    "options": [
      "Disk duplication",
      "Disk replacement",
      "Forensic signature",
      "Forensic imaging"
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 556,
    "domain": 5,
    "domain_name": "Identity and Access Management (IAM)",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following is the FIRST step during digital identity provisioning?",
    "options": [
      "Authorizing the entity for resource access",
      "Synchronizing directories",
      "Issuing an initial random password",
      "Creating the entity record with the correct attributes"
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Identity and Access Management (IAM). Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 560,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "To monitor the security of buried data lines inside the perimeter of a facility, which of the following is the MOST effective control?",
    "options": [
      "Fencing around the facility with closed-circuit television (CCTV) cameras at all entry points",
      "Ground sensors installed and reporting to a security event management (SEM) system",
      "Steel casing around the facility ingress points",
      "regular sweeps of the perimeter, including manual inspection of the cable ingress points"
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 569,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "What is the MAIN purpose of a security assessment plan?",
    "options": [
      "Provide guidance on security requirements, to ensure the identified security risks are properly addressed based on the recommendation",
      "Provide the objectives for the security and privacy control assessments and a detailed roadmap of how to conduct such assessments.",
      "Provide technical information to executives to help them understand information security postures and secure funding.",
      "Provide education to employees on security and privacy, to ensure their awareness on policies and procedures"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 570,
    "domain": 4,
    "domain_name": "Communication and Network Security",
    "scenario": "General CISSP Concept Review",
    "question": "Passing Certification Exams Made Easy visit - https://www.surepassexam.com Recommend!! Get the Full CISSP dumps in VCE and PDF From SurePassExam https://www.surepassexam.com/CISSP-exam-dumps.html (1487 New Questions) - (Exam Topic 15) What is the PRIMARY objective of the post-incident phase of the incident response process in the security operations center (SOC)?",
    "options": [
      "improve the IR process.",
      "Communicate the IR details to the stakeholders.",
      "Validate the integrity of the IR.",
      "Finalize the IR."
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Communication and Network Security. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 571,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which application type is considered high risk and provides a common way for malware and viruses to enter a network?",
    "options": [
      "Instant messaging or chat applications",
      "E-mail applications",
      "Peer-to-Peer (P2P) file sharing applications",
      "End-to-end applications"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 574,
    "domain": 8,
    "domain_name": "Software Development Security",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following describes the BEST method of maintaining the inventory of software and hardware within the organization?",
    "options": [
      "Maintaining the inventory through a combination of desktop configuration, administration management, and procurement management tools",
      "Maintaining the inventory through a combination of asset owner interviews, open-source system management, and open-source management tools",
      "Maintaining the inventory through a combination of on-premise storage configuration, cloud management, and partner management tools",
      "Maintaining the inventory through a combination of system configuration, network management, and license management tools"
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Software Development Security. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 579,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "What is the FIRST step prior to executing a test of an organisation\u2019s disaster recovery (DR) or business continuity plan (BCP)?",
    "options": [
      "identify key stakeholders,",
      "Develop recommendations for disaster scenarios.",
      "Identify potential failure points.",
      "Develop clear evaluation criteria."
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 582,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which security feature fully encrypts code and data as it passes to the servers and only decrypts below the hypervisor layer?",
    "options": [
      "File-system level encryption",
      "Transport Layer Security (TLS)",
      "Key management service",
      "Trusted execution environments"
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 587,
    "domain": 2,
    "domain_name": "Asset Security",
    "scenario": "The application owner of a system that handles confidential data leaves an organization. It is anticipated that a replacement will be hired in approximately six months.",
    "question": "During that time, which of the following should the organization do?",
    "options": [
      "Gram temporary access to the former application owner's account",
      "Assign a temporary application owner to the system.",
      "Restrict access to the system until a replacement application owner rs hired.",
      "Prevent changes to the confidential data until a replacement application owner is hired."
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Asset Security. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 595,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "A company needs to provide employee access to travel services, which are hosted by a third-party service provider, Employee experience is important, and when users are already authenticated, access to the travel portal is seamless.",
    "question": "Which of the following methods is used to share information and grant user access to the travel portal?",
    "options": [
      "Security Assertion Markup Language (SAML) access",
      "Single sign-on (SSO) access",
      "Open Authorization (OAuth) access",
      "Federated access"
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 599,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which algorithm gets its security from the difficulty of calculating discrete logarithms in a finite field and is used to distribute keys, but cannot be used to encrypt or decrypt messages?",
    "options": [
      "Diffie-Hellman",
      "Digital Signature Algorithm (DSA)",
      "Rivest-Shamir-Adleman (RSA)",
      "Kerberos"
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 601,
    "domain": 4,
    "domain_name": "Communication and Network Security",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following is the MOST secure protocol for zremote command access to the firewall?",
    "options": [
      "Secure Shell (SSH)",
      "Trivial File Transfer Protocol (TFTP)",
      "Hypertext Transfer Protocol Secure (HTTPS)",
      "Simple Network Management Protocol (SNMP) v1"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Communication and Network Security. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 612,
    "domain": 4,
    "domain_name": "Communication and Network Security",
    "scenario": "An organization wants to migrate to Session Initiation Protocol (SIP) to save on telephony expenses.",
    "question": "Which of the following security related statements should be Passing Certification Exams Made Easy visit - https://www.surepassexam.com Recommend!! Get the Full CISSP dumps in VCE and PDF From SurePassExam https://www.surepassexam.com/CISSP-exam-dumps.html (1487 New Questions) considered in the decision-making process?",
    "options": [
      "Cloud telephony is less secure and more expensive than digital telephony services.",
      "SIP services are more secure when used with multi-layer security proxies.",
      "H.323 media gateways must be used to ensure end-to-end security tunnels.",
      "Given the behavior of SIP traffic, additional security controls would be required."
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Communication and Network Security. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 617,
    "domain": 4,
    "domain_name": "Communication and Network Security",
    "scenario": "General CISSP Concept Review",
    "question": "Compared to a traditional network, which of the following is a security-related benefit that software-defined networking (SDN) provides?",
    "options": [
      "Centralized network provisioning",
      "Centralized network administrator control",
      "Reduced network latency when scaled",
      "Reduced hardware footprint and cost"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Communication and Network Security. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 624,
    "domain": 4,
    "domain_name": "Communication and Network Security",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following protection is provided when using a Virtual Private Network (VPN) with Authentication Header (AH)?",
    "options": [
      "Payload encryption",
      "Sender confidentiality",
      "Sender non-repudiation",
      "Multi-factor authentication (MFA)"
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Communication and Network Security. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 629,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following is the MOST effective corrective control to minimize the effects of a physical intrusion?",
    "options": [
      "Automatic videotaping of a possible intrusion",
      "Rapid response by guards or police to apprehend a possible intruder",
      "Activating bright lighting to frighten away a possible intruder",
      "Sounding a loud alarm to frighten away a possible intruder"
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 634,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "During testing, where are the requirements to inform parent organizations, law enforcement, and a computer incident response team documented?",
    "options": [
      "Unit test results",
      "Security assessment plan",
      "System integration plan",
      "Security Assessment Report (SAR)"
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 635,
    "domain": 6,
    "domain_name": "Security Assessment and Testing",
    "scenario": "A company-wide penetration test result shows customers could access and read files through a web browser.",
    "question": "Which of the following can be used to mitigate this vulnerability?",
    "options": [
      "Enforce the chmod of files to 755.",
      "Enforce the control of file directory listings.",
      "Implement access control on the web server.",
      "Implement Secure Sockets Layer (SSL) certificates throughout the web server."
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Security Assessment and Testing. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 644,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "In order to provide dual assurance in a digital signature system, the design MUST include which of the following?",
    "options": [
      "The public key must be unique for the signed document.",
      "signature process must generate adequate authentication credentials.",
      "The hash of the signed document must be present.",
      "The encrypted private key must be provided in the signing certificate."
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 649,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following is a covert channel type?",
    "options": [
      "Storage",
      "Pipe",
      "Memory",
      "Monitoring"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 653,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "In which of the following scenarios is locking server cabinets and limiting access to keys preferable to locking the server room to prevent unauthorized access?",
    "options": [
      "Server cabinets are located in an unshared workspace.",
      "Server cabinets are located in an isolated server farm.",
      "Server hardware is located in a remote area.",
      "Server cabinets share workspace with multiple projects."
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 661,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "A hospital\u2019s building controls system monitors and operates the environmental equipment to maintain a safe and comfortable environment.",
    "question": "Which of the following could be used to minimize the risk of utility supply interruption?",
    "options": [
      "Digital devices that can turn equipment off and continuously cycle rapidly in order to increase supplies and conceal activity on the hospital network",
      "Standardized building controls system software with high connectivity to hospital networks",
      "Lock out maintenance personnel from the building controls system access that can impact critical utility supplies",
      "Digital protection and control devices capable of minimizing the adverse impact to critical utility"
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 667,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "What part of an organization\u2019s strategic risk assessment MOST likely includes information on items affecting the success of the organization?",
    "options": [
      "Key Risk Indicator (KRI)",
      "Threat analysis",
      "Vulnerability analysis",
      "Key Performance Indicator (KPI)"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 668,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "A criminal organization is planning an attack on a government network.",
    "question": "Which of the following scenarios presents the HIGHEST risk to the organization?",
    "options": [
      "Network is flooded with communication traffic by the attacker.",
      "Organization loses control of their network devices.",
      "Network management communications is disrupted.",
      "Attacker accesses sensitive information regarding the network topology."
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 673,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which combination of cryptographic algorithms are compliant with Federal Information Processing Standard (FIPS) Publication 140-2 for non-legacy systems?",
    "options": [
      "Diffie-hellman (DH) key exchange: DH (>=2048 bits)Symmetric Key: Advanced Encryption Standard (AES) > 128 bits Digital Signature: Rivest-Shamir-Adleman",
      "Diffie-hellman (DH) key exchange: DH (>=2048 bits)Symmetric Key: Advanced Encryption Standard (AES) > 128 bits Digital Signature: Digital Signature",
      "Diffie-hellman (DH) key exchange: DH (<= 1024 bits) Symmetric Key: BlowfishDigital Signature: Rivest-Shamir-Adleman (RSA) (>=2048 bits)",
      "Diffie-hellman (DH) key exchange: DH (>=2048 bits)Symmetric Key: Advanced Encryption Standard (AES) < 128 bitsDigital Signature: Elliptic Curve Digital"
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 674,
    "domain": 5,
    "domain_name": "Identity and Access Management (IAM)",
    "scenario": "General CISSP Concept Review",
    "question": "Passing Certification Exams Made Easy visit - https://www.surepassexam.com Recommend!! Get the Full CISSP dumps in VCE and PDF From SurePassExam https://www.surepassexam.com/CISSP-exam-dumps.html (1487 New Questions) In Federated Identity Management (FIM), which of the following represents the concept of federation?",
    "options": [
      "Collection of information logically grouped into a single entity",
      "Collection, maintenance, and deactivation of user objects and attributes in one or more systems, directories or applications",
      "Collection of information for common identities in a system",
      "Collection of domains that have established trust among themselves"
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Identity and Access Management (IAM). Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 678,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following is a risk matrix?",
    "options": [
      "A database of risks associated with a specific information system.",
      "A table of risk management factors for management to consider.",
      "A two-dimensional picture of risk for organizations, products, projects, or other items of interest.",
      "A tool for determining risk management decisions for an activity or system."
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 681,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following should exist in order to perform a security audit?",
    "options": [
      "Industry framework to audit against",
      "External (third-party) auditor",
      "Internal certified auditor",
      "Neutrality of the auditor"
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 685,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "What is the PRIMARY purpose of auditing, as it relates to the security review cycle?",
    "options": [
      "To ensure the organization's controls and pokies are working as intended",
      "To ensure the organization can still be publicly traded",
      "To ensure the organization's executive team won't be sued",
      "To ensure the organization meets contractual requirements"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 690,
    "domain": 4,
    "domain_name": "Communication and Network Security",
    "scenario": "While performing a security review for a new product, an information security professional discovers that the organization's product development team is proposing to collect government-issued identification (ID) numbers from customers to use as unique customer identifiers.",
    "question": "Which of the following recommendations should be made to the product development team?",
    "options": [
      "Customer identifiers should be a variant of the user\u2019s government-issued ID number.",
      "Customer identifiers that do not resemble the user\u2019s government-issued ID number should be used.",
      "Customer identifiers should be a cryptographic hash of the user's government-issued ID number.",
      "Customer identifiers should be a variant of the user\u2019s name, for example, \u201cjdoe\u201d or \u201cjohn.doe.\u201d"
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Communication and Network Security. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 695,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "The European Union (EU) General Data Protection Regulation (GDPR) requires organizations to implement appropriate technical and organizational measures to ensure a level of security appropriate to the risk.",
    "question": "The Data Owner should therefore consider which of the following requirements?",
    "options": [
      "Data masking and encryption of personal data",
      "Only to use encryption protocols approved by EU",
      "Anonymization of personal data when transmitted to sources outside the EU",
      "Never to store personal data of EU citizens outside the EU"
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 699,
    "domain": 7,
    "domain_name": "Security Operations",
    "scenario": "General CISSP Concept Review",
    "question": "When recovering from an outage, what is the Recovery Point Objective (RPO), in terms of data recovery?",
    "options": [
      "The RPO is the maximum amount of time for which loss of data is acceptable.",
      "The RPO is the minimum amount of data that needs to be recovered.",
      "The RPO is a goal to recover a targeted percentage of data lost.",
      "The RPO is the amount of time it takes to recover an acceptable percentage of data lost."
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Security Operations. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 709,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "To comply with industry requirements, a security assessment on the cloud server should identify which protocols and weaknesses are being exposed to attackers on the Internet.",
    "question": "Which of the following tools is the MOST appropriate to complete the assessment?",
    "options": [
      "Use tcpdump and parse the output file in a protocol analyzer.",
      "Use an IP scanner and target the cloud WAN network addressing",
      "Run netstat in each cloud server and retrieve the running processes.",
      "Use nmap and set the servers\u2019 public IPs as the target"
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 717,
    "domain": 4,
    "domain_name": "Communication and Network Security",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following is the MOST effective strategy to prevent an attacker from disabling a network?",
    "options": [
      "Test business continuity and disaster recovery (DR) plans.",
      "Design networks with the ability to adapt, reconfigure, and fail over.",
      "Implement network segmentation to achieve robustness.",
      "Follow security guidelines to prevent unauthorized network access."
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Communication and Network Security. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 720,
    "domain": 8,
    "domain_name": "Software Development Security",
    "scenario": "General CISSP Concept Review",
    "question": "Who should perform the design review to uncover security design flaws as part of the Software Development Life Cycle (SDLC)?",
    "options": [
      "The business owner",
      "security subject matter expert (SME)",
      "The application owner",
      "A developer subject matter expert (SME)"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Software Development Security. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 725,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following features is MOST effective in mitigating against theft of data on a corporate mobile device which has been stolen?",
    "options": [
      "Mobile Device Management (MDM) with device wipe",
      "Whole device encryption with key escrow",
      "Virtual private network (VPN) with traffic encryption",
      "Mobile device tracking with geolocation"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 727,
    "domain": 5,
    "domain_name": "Identity and Access Management (IAM)",
    "scenario": "A company developed a web application which is sold as a Software as a Service (SaaS) solution to the customer. The application is hosted by a web server running on a \u2018specific operating system (OS) on a virtual machine (VM). During the transition phase of the service, it is determined that the support team will need access to the application logs.",
    "question": "Which of the following privileges would be the MOST suitable?",
    "options": [
      "Administrative privileges on the OS",
      "Administrative privileges on the web server",
      "Administrative privileges on the hypervisor",
      "Administrative privileges on the application folders"
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Identity and Access Management (IAM). Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 735,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "A cloud hosting provider would like to provide a Service Organization Control (SOC) report relevant to its security program. This report should an abbreviated report that can be freely distributed.",
    "question": "Which type of report BEST meets this requirement?",
    "options": [
      "SOC 1",
      "SOC 2 Type I",
      "SOC 2 Type II",
      "SOC 3"
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 737,
    "domain": 3,
    "domain_name": "Security Architecture and Engineering",
    "scenario": "General CISSP Concept Review",
    "question": "In an IDEAL encryption system, who has sole access to the decryption key?",
    "options": [
      "System owner",
      "Data owner",
      "Data custodian",
      "System administrator"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Security Architecture and Engineering. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 742,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which security audit standard provides the BEST way for an organization to understand a vendor's Information Systems (IS) in relation to confidentiality, integrity, and availability?",
    "options": [
      "Statement on Auditing Standards (SAS) 70",
      "Service Organization Control (SOC) 2",
      "Service Organization Control (SOC) 1",
      "Statement on Standards for Attestation Engagements (SSAE) 18"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 747,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following is the MAIN benefit of off-site storage?",
    "options": [
      "Cost effectiveness",
      "Backup simplicity",
      "Fast recovery",
      "Data availability"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 755,
    "domain": 2,
    "domain_name": "Asset Security",
    "scenario": "General CISSP Concept Review",
    "question": "What is the MOST effective way to determine a mission critical asset in an organization?",
    "options": [
      "Vulnerability analysis",
      "business process analysis",
      "Threat analysis",
      "Business risk analysis"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Asset Security. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 758,
    "domain": 6,
    "domain_name": "Security Assessment and Testing",
    "scenario": "A security professional has been requested by the Board of Directors and Chief Information Security Officer (CISO) to perform an internal and external penetration test.",
    "question": "What is the BEST course of action?",
    "options": [
      "Review data localization requirements and regulations.",
      "Review corporate security policies and procedures,",
      "With notice to the Configuring a Wireless Access Point (WAP) with the same Service Set Identifier external test.",
      "With notice to the organization, perform an external penetration test first, then an internal test."
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Security Assessment and Testing. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 763,
    "domain": 4,
    "domain_name": "Communication and Network Security",
    "scenario": "General CISSP Concept Review",
    "question": "Building blocks for software-defined networks (SDN) require which of the following?",
    "options": [
      "The SDN is mostly composed of virtual machines (VM).",
      "The SDN is composed entirely of client-server pairs.",
      "Virtual memory is used in preference to random-access memory (RAM).",
      "Random-access memory (RAM) is used in preference to virtual memory."
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Communication and Network Security. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 767,
    "domain": 3,
    "domain_name": "Security Architecture and Engineering",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following is the MOST important consideration that must be taken into account when deploying an enterprise patching solution that includes mobile devices?",
    "options": [
      "Service provider(s) utilized by the organization",
      "Whether it will impact personal use",
      "Number of mobile users in the organization",
      "Feasibility of downloads due to available bandwidth"
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Security Architecture and Engineering. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 770,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "What steps can be taken to prepare personally identifiable information (PII) for processing by a third party?",
    "options": [
      "It is not necessary to protect PII as long as it is in the hands of the provider.",
      "A security agreement with a Cloud Service Provider (CSP) was required so there is no concern.",
      "The personal information should be maintained separately connected with a one-way reference.",
      "The personal information can be hashed and then the data can be sent to an outside processor."
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 775,
    "domain": 2,
    "domain_name": "Asset Security",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following entails identification of data end links to business processes, applications, and data stores as well as assignment of ownership responsibilities?",
    "options": [
      "Risk management",
      "Security portfolio management",
      "Security governance",
      "Risk assessment"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Asset Security. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 776,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "What should an auditor do when conducting a periodic audit on media retention?",
    "options": [
      "Check electronic storage media to ensure records are not retained past their destruction date.",
      "Ensure authorized personnel are in possession of paper copies containing Personally Identifiable Information\u2026.",
      "Check that hard disks containing backup data that are still within a retention cycle are being destroyed\u2026.",
      "Ensure that data shared with outside organizations is no longer on a retention schedule."
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 780,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "What is a warn site when conducting Business continuity planning (BCP)",
    "options": [
      "A location, other than the normal facility, used to process data on a daily basis",
      "An area partially equipped with equipment and resources to recover business functions",
      "A place void of any resources or equipment except air conditioning and raised flooring",
      "An alternate facility that allows for Immediate cutover to enable continuation of business functions"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 781,
    "domain": 3,
    "domain_name": "Security Architecture and Engineering",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following is used to support the concept of defense in depth during the development phase of a software product?",
    "options": [
      "Maintenance hooks",
      "Polyinstiation",
      "Known vulnerability list",
      "Security auditing"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Security Architecture and Engineering. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 783,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Continuity of operations is BEST supported by which of the following?",
    "options": [
      "Confidentiality, availability, and reliability",
      "Connectivity, reliability, and redundancy",
      "Connectivity, reliability, and recovery",
      "Confidentiality, integrity, and availability"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 787,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following is the PRIMARY risk associated with Extensible Markup Language (XML) applications?",
    "options": [
      "Users can manipulate the code.",
      "The stack data structure cannot be replicated.",
      "The stack data structure is repetitive.",
      "Potential sensitive data leakage."
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 790,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "An organization is considering outsourcing applications and data to a Cloud Service Provider (CSP).",
    "question": "Which of the following is the MOST important concern regarding privacy?",
    "options": [
      "The CSP determines data criticality.",
      "The CSP provides end-to-end encryption services.",
      "The CSP\u2019s privacy policy may be developer by the organization.",
      "The CSP may not be subject to the organization\u2019s country legation."
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 795,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "An organization has implemented a new backup process which protects confidential data by encrypting the information stored on backup tapes.",
    "question": "Which of the following is a MAJOR data confidentiality concern after the implementation of this new backup process?",
    "options": [
      "Tape backup rotation",
      "Pre-existing backup tapes",
      "Tape backup compression",
      "Backup tape storage location"
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 797,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Why should Open Web Application Security Project (OWASP) Application Security Verification standards (ASVS) Level 1 be considered a MINIMUM level of protection for any web application?",
    "options": [
      "ASVS Level 1 ensures that applications are invulnerable to OWASP top 10 threats.",
      "Opportunistic attackers will look for any easily exploitable vulnerable applications.",
      "Most regulatory bodies consider ASVS Level 1 as a baseline set of controls for applications.",
      "Securing applications at ASVS Level 1 provides adequate protection for sensitive data."
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 798,
    "domain": 2,
    "domain_name": "Asset Security",
    "scenario": "General CISSP Concept Review",
    "question": "For the purpose of classification, which of the following is used to divide trust domain and trust boundaries?",
    "options": [
      "Network architecture",
      "Integrity",
      "Identity Management (IdM)",
      "Confidentiality management"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Asset Security. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 803,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following techniques is effective to detect taps in fiber optic cables?",
    "options": [
      "Taking baseline signal level of the cable",
      "Measuring signal through external oscillator solution devices",
      "Outlining electromagnetic field strength",
      "Performing network vulnerability scanning"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 804,
    "domain": 2,
    "domain_name": "Asset Security",
    "scenario": "General CISSP Concept Review",
    "question": "Physical assets defined in an organization\u2019s Business Impact Analysis (BIA) could include which of the following?",
    "options": [
      "Personal belongings of organizational staff members",
      "Supplies kept off-site at a remote facility",
      "Cloud-based applications",
      "Disaster Recovery (DR) line-item revenues"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Asset Security. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 807,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Passing Certification Exams Made Easy visit - https://www.surepassexam.com Recommend!! Get the Full CISSP dumps in VCE and PDF From SurePassExam https://www.surepassexam.com/CISSP-exam-dumps.html (1487 New Questions) - (Exam Topic 14) How long should the records on a project be retained?",
    "options": [
      "For the duration of the project, or at the discretion of the record owner",
      "Until they are no longer useful or required by policy",
      "Until five years after the project ends, then move to archives",
      "For the duration of the organization fiscal year"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 809,
    "domain": 5,
    "domain_name": "Identity and Access Management (IAM)",
    "scenario": "General CISSP Concept Review",
    "question": "What access control scheme uses fine-grained rules to specify the conditions under which access to each data item or applications is granted?",
    "options": [
      "Mandatory Access Control (MAC)",
      "Discretionary Access Control (DAC)",
      "Role Based Access Control (RBAC)",
      "Attribute Based Access Control (ABAC)"
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Identity and Access Management (IAM). Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 810,
    "domain": 3,
    "domain_name": "Security Architecture and Engineering",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following is a characteristic of the independent testing of a program?",
    "options": [
      "Independent testing increases the likelihood that a test will expose the effect of a hidden feature.",
      "Independent testing decreases the likelihood that a test will expose the effect of a hidden feature.",
      "Independent testing teams help decrease the cost of creating test data and system design specification.",
      "Independent testing teams help identify functional requirements and Service Level Agreements (SLA)"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Security Architecture and Engineering. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 811,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "A large corporation is looking for a solution to automate access based on where the request is coming from, who the user is, what device they are connecting with, and what and time of day they are attempting this access.",
    "question": "What type of solution would suit their needs?",
    "options": [
      "Mandatory Access Control (MAC)",
      "Network Access Control (NAC)",
      "Role Based Access Control (RBAC)",
      "Discretionary Access Control (DAC)"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 814,
    "domain": 6,
    "domain_name": "Security Assessment and Testing",
    "scenario": "General CISSP Concept Review",
    "question": "Vulnerability scanners may allow for the administrator to assign which of the following in order to assist in prioritizing remediation activities?",
    "options": [
      "Definitions for each exposure type",
      "Vulnerability attack vectors",
      "Asset values for networks",
      "Exploit code metrics"
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Security Assessment and Testing. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 818,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following System and Organization Controls (SOC) report types should an organization request if they require a period of time report covering security and availability for a particular system?",
    "options": [
      "SOC 1 Type1",
      "SOC 1Type2",
      "SOC 2 Type 1",
      "SOC 2 Type 2"
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 819,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "What should be used immediately after a Business Continuity Plan (BCP) has been invoked?",
    "options": [
      "Resumption procedures describing the actions to be taken to return to normal business operations",
      "Emergency procedures describing the necessary actions to be taken following an incident jeopardizes business operations",
      "Fallback procedures describing what action are to be taken to more essential business activities to alternative temporary locations",
      "Maintain schedule how and the plan will be tested and the process for maintaining the plan"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 14,
    "domain": 4,
    "domain_name": "Communication and Network Security",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following operates at the Network Layer of the Open System Interconnection (OSI) model?",
    "options": [
      "Packet filtering",
      "Port services filtering",
      "Content filtering",
      "Application access control"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Communication and Network Security. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 17,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following factors contributes to the weakness of Wired Equivalent Privacy (WEP) protocol?",
    "options": [
      "WEP uses a small range Initialization Vector (IV)",
      "WEP uses Message Digest 5 (MD5)",
      "WEP uses Diffie-Hellman",
      "WEP does not use any Initialization Vector (IV)"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 21,
    "domain": 5,
    "domain_name": "Identity and Access Management (IAM)",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following BEST describes an access control method utilizing cryptographic keys derived from a smart card private key that is embedded within mobile devices?",
    "options": [
      "Derived credential",
      "Temporary security credential",
      "Mobile device credentialing service",
      "Digest authentication"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Identity and Access Management (IAM). Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 29,
    "domain": 7,
    "domain_name": "Security Operations",
    "scenario": "General CISSP Concept Review",
    "question": "Recovery strategies of a Disaster Recovery planning (DRIP) MUST be aligned with which of the following?",
    "options": [
      "Hardware and software compatibility issues",
      "Applications\u2019 critically and downtime tolerance",
      "Budget constraints and requirements",
      "Cost/benefit analysis and business objectives"
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Security Operations. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 31,
    "domain": 5,
    "domain_name": "Identity and Access Management (IAM)",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following is a PRIMARY advantage of using a third-party identity service?",
    "options": [
      "Consolidation of multiple providers",
      "Directory synchronization",
      "Web based logon",
      "Automated account management"
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Identity and Access Management (IAM). Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 36,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "What is the MOST important step during forensic analysis when trying to learn the purpose of an unknown application?",
    "options": [
      "Disable all unnecessary services",
      "Ensure chain of custody",
      "Prepare another backup of the system",
      "Isolate the system from the network"
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 39,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "An organization is found lacking the ability to properly establish performance indicators for its Web hosting solution during an audit.",
    "question": "What would be the MOST probable cause? Passing Certification Exams Made Easy visit - https://www.2PassEasy.com Welcome to download the Newest 2passeasy CISSP dumps https://www.2passeasy.com/dumps/CISSP/ (653 New Questions)",
    "options": [
      "Absence of a Business Intelligence (BI) solution",
      "Inadequate cost modeling",
      "Improper deployment of the Service-Oriented Architecture (SOA)",
      "Insufficient Service Level Agreement (SLA)"
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 40,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "When is a Business Continuity Plan (BCP) considered to be valid?",
    "options": [
      "When it has been validated by the Business Continuity (BC) manager",
      "When it has been validated by the board of directors",
      "When it has been validated by all threat scenarios",
      "When it has been validated by realistic exercises"
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 44,
    "domain": 8,
    "domain_name": "Software Development Security",
    "scenario": "General CISSP Concept Review",
    "question": "When in the Software Development Life Cycle (SDLC) MUST software security functional requirements be defined?",
    "options": [
      "After the system preliminary design has been developed and the data security categorization has been performed",
      "After the vulnerability analysis has been performed and before the system detailed design begins",
      "After the system preliminary design has been developed and before the data security categorization begins",
      "After the business functional analysis and the data security categorization have been performed"
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Software Development Security. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 54,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Internet Protocol (IP) source address spoofing is used to defeat",
    "options": [
      "address-based authentication.",
      "Address Resolution Protocol (ARP).",
      "Reverse Address Resolution Protocol (RARP).",
      "Transmission Control Protocol (TCP) hijacking."
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 59,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Passing Certification Exams Made Easy visit - https://www.2PassEasy.com Welcome to download the Newest 2passeasy CISSP dumps https://www.2passeasy.com/dumps/CISSP/ (653 New Questions) - (Exam Topic 9) Which of the following MUST be part of a contract to support electronic discovery of data stored in a cloud environment?",
    "options": [
      "Integration with organizational directory services for authentication",
      "Tokenization of data",
      "Accommodation of hybrid deployment models",
      "Identification of data location"
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 64,
    "domain": 5,
    "domain_name": "Identity and Access Management (IAM)",
    "scenario": "General CISSP Concept Review",
    "question": "Logical access control programs are MOST effective when they are",
    "options": [
      "approved by external auditors.",
      "combined with security token technology.",
      "maintained by computer security officers.",
      "made part of the operating system."
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Identity and Access Management (IAM). Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 68,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "The key benefits of a signed and encrypted e-mail include",
    "options": [
      "confidentiality, authentication, and authorization.",
      "confidentiality, non-repudiation, and authentication.",
      "non-repudiation, authorization, and authentication.",
      "non-repudiation, confidentiality, and authorization."
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 69,
    "domain": 8,
    "domain_name": "Software Development Security",
    "scenario": "General CISSP Concept Review",
    "question": "What technique BEST describes antivirus software that detects viruses by watching anomalous behavior?",
    "options": [
      "Signature",
      "Inference",
      "Induction",
      "Heuristic"
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Software Development Security. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 83,
    "domain": 5,
    "domain_name": "Identity and Access Management (IAM)",
    "scenario": "General CISSP Concept Review",
    "question": "The Structured Query Language (SQL) implements Discretionary Access Controls (DAC) using",
    "options": [
      "INSERT and DELETE.",
      "GRANT and REVOKE.",
      "PUBLIC and PRIVATE.",
      "ROLLBACK and TERMINATE."
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Identity and Access Management (IAM). Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 86,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which one of the following considerations has the LEAST impact when considering transmission security?",
    "options": [
      "Network availability",
      "Data integrity",
      "Network bandwidth",
      "Node locations"
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 92,
    "domain": 5,
    "domain_name": "Identity and Access Management (IAM)",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following is an authentication protocol in which a new random number is generated uniquely for each login session?",
    "options": [
      "Challenge Handshake Authentication Protocol (CHAP)",
      "Point-to-Point Protocol (PPP)",
      "Extensible Authentication Protocol (EAP)",
      "Password Authentication Protocol (PAP)"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Identity and Access Management (IAM). Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 98,
    "domain": 2,
    "domain_name": "Asset Security",
    "scenario": "General CISSP Concept Review",
    "question": "In a financial institution, who has the responsibility for assigning the classification to a piece of information?",
    "options": [
      "Chief Financial Officer (CFO)",
      "Chief Information Security Officer (CISO)",
      "Originator or nominated owner of the information",
      "Department head responsible for ensuring the protection of the information"
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Asset Security. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 99,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "When building a data center, site location and construction factors that increase the level of vulnerability to physical threats include",
    "options": [
      "hardened building construction with consideration of seismic factors.",
      "adequate distance from and lack of access to adjacent buildings.",
      "curved roads approaching the data center.",
      "proximity to high crime areas of the city."
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 104,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "The BEST method of demonstrating a company's security level to potential customers is",
    "options": [
      "a report from an external auditor.",
      "responding to a customer's security questionnaire.",
      "a formal report from an internal auditor.",
      "a site visit by a customer's security team."
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 107,
    "domain": 5,
    "domain_name": "Identity and Access Management (IAM)",
    "scenario": "General CISSP Concept Review",
    "question": "Which one of the following is the MOST important in designing a biometric access system if it is essential that no one other than authorized individuals are admitted?",
    "options": [
      "False Acceptance Rate (FAR)",
      "False Rejection Rate (FRR)",
      "Crossover Error Rate (CER)",
      "Rejection Error Rate"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Identity and Access Management (IAM). Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 109,
    "domain": 5,
    "domain_name": "Identity and Access Management (IAM)",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following is an essential element of a privileged identity lifecycle management?",
    "options": [
      "Regularly perform account re-validation and approval",
      "Account provisioning based on multi-factor authentication",
      "Frequently review performed activities and request justification",
      "Account information to be provided by supervisor or line manager"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Identity and Access Management (IAM). Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 110,
    "domain": 2,
    "domain_name": "Asset Security",
    "scenario": "General CISSP Concept Review",
    "question": "A practice that permits the owner of a data object to grant other users access to that object would usually provide",
    "options": [
      "Mandatory Access Control (MAC).",
      "owner-administered control.",
      "owner-dependent access control.",
      "Discretionary Access Control (DAC)."
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Asset Security. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 115,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following is a security feature of Global Systems for Mobile Communications (GSM)?",
    "options": [
      "It uses a Subscriber Identity Module (SIM) for authentication.",
      "It uses encrypting techniques for all communications.",
      "The radio spectrum is divided with multiple frequency carriers.",
      "The signal is difficult to read as it provides end-to-end encryption."
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 125,
    "domain": 5,
    "domain_name": "Identity and Access Management (IAM)",
    "scenario": "General CISSP Concept Review",
    "question": "What would be the PRIMARY concern when designing and coordinating a security assessment for an Automatic Teller Machine (ATM) system?",
    "options": [
      "Physical access to the electronic hardware",
      "Regularly scheduled maintenance process",
      "Availability of the network connection",
      "Processing delays"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Identity and Access Management (IAM). Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 134,
    "domain": 4,
    "domain_name": "Communication and Network Security",
    "scenario": "An external attacker has compromised an organization's network security perimeter and installed a sniffer onto an inside computer.",
    "question": "Which of the following is the MOST effective layer of security the organization could have implemented to mitigate the attacker's ability to gain further information?",
    "options": [
      "Implement packet filtering on the network firewalls",
      "Require strong authentication for administrators",
      "Install Host Based Intrusion Detection Systems (HIDS)",
      "Implement logical network segmentation at the switches"
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Communication and Network Security. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 143,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "The birthday attack is MOST effective against which one of the following cipher technologies?",
    "options": [
      "Chaining block encryption",
      "Asymmetric cryptography",
      "Cryptographic hash",
      "Streaming cryptography"
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 147,
    "domain": 4,
    "domain_name": "Communication and Network Security",
    "scenario": "General CISSP Concept Review",
    "question": "A disadvantage of an application filtering firewall is that it can lead to",
    "options": [
      "a crash of the network as a result of user activities.",
      "performance degradation due to the rules applied.",
      "loss of packets on the network due to insufficient bandwidth.",
      "Internet Protocol (IP) spoofing by hackers."
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Communication and Network Security. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 159,
    "domain": 4,
    "domain_name": "Communication and Network Security",
    "scenario": "General CISSP Concept Review",
    "question": "Following the completion of a network security assessment, which of the following can BEST be demonstrated?",
    "options": [
      "The effectiveness of controls can be accurately measured",
      "A penetration test of the network will fail",
      "The network is compliant to industry standards",
      "All unpatched vulnerabilities have been identified"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Communication and Network Security. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 164,
    "domain": 4,
    "domain_name": "Communication and Network Security",
    "scenario": "General CISSP Concept Review",
    "question": "When implementing controls in a heterogeneous end-point network for an organization, it is critical that",
    "options": [
      "hosts are able to establish network communications.",
      "users can make modifications to their security software configurations.",
      "common software security components be implemented across all hosts.",
      "firewalls running on each host are fully customizable by the user."
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Communication and Network Security. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 173,
    "domain": 4,
    "domain_name": "Communication and Network Security",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following defines the key exchange for Internet Protocol Security (IPSec)?",
    "options": [
      "Secure Sockets Layer (SSL) key exchange",
      "Internet Key Exchange (IKE)",
      "Security Key Exchange (SKE)",
      "Internet Control Message Protocol (ICMP)"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Communication and Network Security. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 183,
    "domain": 7,
    "domain_name": "Security Operations",
    "scenario": "General CISSP Concept Review",
    "question": "What is the MOST important purpose of testing the Disaster Recovery Plan (DRP)?",
    "options": [
      "Evaluating the efficiency of the plan",
      "Identifying the benchmark required for restoration",
      "Validating the effectiveness of the plan",
      "Determining the Recovery Time Objective (RTO)"
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Security Operations. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 185,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Passive Infrared Sensors (PIR) used in a non-climate controlled environment should",
    "options": [
      "reduce the detected object temperature in relation to the background temperature.",
      "increase the detected object temperature in relation to the background temperature.",
      "automatically compensate for variance in background temperature.",
      "detect objects of a specific temperature independent of the background temperature."
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 188,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "When constructing an Information Protection Policy (IPP), it is important that the stated rules are necessary, adequate, and",
    "options": [
      "flexible.",
      "confidential.",
      "focused.",
      "achievable."
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 189,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following MUST be done when promoting a security awareness program to senior management?",
    "options": [
      "Show the need for security; identify the message and the audience",
      "Ensure that the security presentation is designed to be all-inclusive",
      "Notify them that their compliance is mandatory",
      "Explain how hackers have enhanced information security"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 199,
    "domain": 8,
    "domain_name": "Software Development Security",
    "scenario": "General CISSP Concept Review",
    "question": "The goal of software assurance in application development is to",
    "options": [
      "enable the development of High Availability (HA) systems.",
      "facilitate the creation of Trusted Computing Base (TCB) systems.",
      "prevent the creation of vulnerable applications.",
      "encourage the development of open source applications."
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Software Development Security. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 204,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following BEST represents the principle of open design?",
    "options": [
      "Disassembly, analysis, or reverse engineering will reveal the security functionality of the computer system.",
      "Algorithms must be protected to ensure the security and interoperability of the designed system.",
      "A knowledgeable user should have limited privileges on the system to prevent their ability to compromise security capabilities.",
      "The security of a mechanism should not depend on the secrecy of its design or implementation."
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 212,
    "domain": 4,
    "domain_name": "Communication and Network Security",
    "scenario": "General CISSP Concept Review",
    "question": "Which Hyper Text Markup Language 5 (HTML5) option presents a security challenge for network data leakage prevention and/or monitoring?",
    "options": [
      "Cross Origin Resource Sharing (CORS)",
      "WebSockets",
      "Document Object Model (DOM) trees",
      "Web Interface Definition Language (IDL)"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Communication and Network Security. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 224,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following is the MOST beneficial to review when performing an IT audit?",
    "options": [
      "Audit policy",
      "Security log",
      "Security policies",
      "Configuration settings"
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 230,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following MOST influences the design of the organization's electronic monitoring policies?",
    "options": [
      "Workplace privacy laws",
      "Level of organizational trust",
      "Results of background checks",
      "Business ethical considerations"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 236,
    "domain": 5,
    "domain_name": "Identity and Access Management (IAM)",
    "scenario": "General CISSP Concept Review",
    "question": "What physical characteristic does a retinal scan biometric device measure?",
    "options": [
      "The amount of light reflected by the retina",
      "The size, curvature, and shape of the retina",
      "The pattern of blood vessels at the back of the eye",
      "The pattern of light receptors at the back of the eye"
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Identity and Access Management (IAM). Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 240,
    "domain": 5,
    "domain_name": "Identity and Access Management (IAM)",
    "scenario": "General CISSP Concept Review",
    "question": "What does secure authentication with logging provide?",
    "options": [
      "Data integrity",
      "Access accountability",
      "Encryption logging format",
      "Segregation of duties"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Identity and Access Management (IAM). Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 242,
    "domain": 5,
    "domain_name": "Identity and Access Management (IAM)",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following assures that rules are followed in an identity management architecture?",
    "options": [
      "Policy database",
      "Digital signature",
      "Policy decision point",
      "Policy enforcement point"
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Identity and Access Management (IAM). Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 257,
    "domain": 5,
    "domain_name": "Identity and Access Management (IAM)",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following BEST mitigates a replay attack against a system using identity federation and Security Assertion Markup Language (SAML) implementation?",
    "options": [
      "Two-factor authentication",
      "Digital certificates and hardware tokens",
      "Timed sessions and Secure Socket Layer (SSL)",
      "Passwords with alpha-numeric and special characters"
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Identity and Access Management (IAM). Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 258,
    "domain": 2,
    "domain_name": "Asset Security",
    "scenario": "Refer to the information below to answer the question. A large organization uses unique identifiers and requires them at the start of every system session. Application access is based on job classification. The organization is subject to periodic independent reviews of access controls and violations. The organization uses wired and wireless networks and remote access. The organization also uses secure connections to branch offices and secure backup and recovery strategies for selected information and processes.",
    "question": "What MUST the access control logs contain in addition to the identifier?",
    "options": [
      "Time of the access",
      "Security classification",
      "Denied access attempts",
      "Associated clearance"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Asset Security. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 264,
    "domain": 6,
    "domain_name": "Security Assessment and Testing",
    "scenario": "General CISSP Concept Review",
    "question": "What is the PRIMARY advantage of using automated application security testing tools?",
    "options": [
      "The application can be protected in the production environment.",
      "Large amounts of code can be tested using fewer resources.",
      "The application will fail less when tested using these tools.",
      "Detailed testing of code functions can be performed."
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Security Assessment and Testing. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 286,
    "domain": 2,
    "domain_name": "Asset Security",
    "scenario": "Refer to the information below to answer the question. In a Multilevel Security (MLS) system, the following sensitivity labels are used in increasing levels of sensitivity: restricted, confidential, secret, top secret. Table A lists the clearance levels for four users, while Table B lists the security classes of four different files.",
    "question": "In a Bell-LaPadula system, which user cannot write to File 3?",
    "options": [
      "User A",
      "User B",
      "User C",
      "User D"
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Asset Security. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 290,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "Refer to the information below to answer the question. An organization experiencing a negative financial impact is forced to reduce budgets and the number of Information Technology (IT) operations staff performing basic logical access security administration functions. Security processes have been tightly integrated into normal IT operations and are not separate and distinct roles.",
    "question": "Which of the following will MOST likely allow the organization to keep risk at an acceptable level? Passing Certification Exams Made Easy visit - https://www.2PassEasy.com Welcome to download the Newest 2passeasy CISSP dumps https://www.2passeasy.com/dumps/CISSP/ (653 New Questions)",
    "options": [
      "Increasing the amount of audits performed by third parties",
      "Removing privileged accounts from operational staff",
      "Assigning privileged functions to appropriate staff",
      "Separating the security function into distinct roles"
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 299,
    "domain": 5,
    "domain_name": "Identity and Access Management (IAM)",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following problems is not addressed by using OAuth (Open Standard to Authorization) 2.0 to integrate a third-party identity provider for a service?",
    "options": [
      "Resource Servers are required to use passwords to authenticate end users.",
      "Revocation of access of some users of the third party instead of all the users from the third party.",
      "Compromise of the third party means compromise of all the users in the service.",
      "Guest users need to authenticate with the third party identity provider."
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Identity and Access Management (IAM). Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 309,
    "domain": 3,
    "domain_name": "Security Architecture and Engineering",
    "scenario": "A large university needs to enable student access to university resources from their homes.",
    "question": "Which of the following provides the BEST option for low maintenance and ease of deployment?",
    "options": [
      "Provide students with Internet Protocol Security (IPSec) Virtual Private Network (VPN) client software.",
      "Use Secure Sockets Layer (SSL) VPN technology.",
      "Use Secure Shell (SSH) with public/private keys.",
      "Require students to purchase home router capable of VPN."
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Security Architecture and Engineering. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 312,
    "domain": 3,
    "domain_name": "Security Architecture and Engineering",
    "scenario": "Passing Certification Exams Made Easy visit - https://www.2PassEasy.com Welcome to download the Newest 2passeasy CISSP dumps https://www.2passeasy.com/dumps/CISSP/ (653 New Questions) - (Exam Topic 10) Refer to the information below to answer the question. An organization has hired an information security officer to lead their security department. The officer has adequate people resources but is lacking the other necessary components to have an effective security program. There are numerous initiatives requiring security involvement.",
    "question": "The security program can be considered effective when",
    "options": [
      "vulnerabilities are proactively identified.",
      "audits are regularly performed and reviewed.",
      "backups are regularly performed and validated.",
      "risk is lowered to an acceptable level."
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Security Architecture and Engineering. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 319,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "An organization decides to implement a partial Public Key Infrastructure (PKI) with only the servers having digital certificates.",
    "question": "What is the security benefit of this implementation?",
    "options": [
      "Clients can authenticate themselves to the servers.",
      "Mutual authentication is available between the clients and servers.",
      "Servers are able to issue digital certificates to the client.",
      "Servers can authenticate themselves to the client."
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 323,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "Refer to the information below to answer the question. An organization experiencing a negative financial impact is forced to reduce budgets and the number of Information Technology (IT) operations staff performing basic logical access security administration functions. Security processes have been tightly integrated into normal IT operations and are not separate and distinct roles.",
    "question": "When determining appropriate resource allocation, which of the following is MOST important to monitor?",
    "options": [
      "Number of system compromises",
      "Number of audit findings",
      "Number of staff reductions",
      "Number of additional assets"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 327,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "A risk assessment report recommends upgrading all perimeter firewalls to mitigate a particular finding.",
    "question": "Which of the following BEST supports this recommendation?",
    "options": [
      "The inherent risk is greater than the residual risk.",
      "The Annualized Loss Expectancy (ALE) approaches zero.",
      "The expected loss from the risk exceeds mitigation costs.",
      "The infrastructure budget can easily cover the upgrade costs."
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 333,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "During an audit, the auditor finds evidence of potentially illegal activity.",
    "question": "Which of the following is the MOST appropriate action to take?",
    "options": [
      "Immediately call the police",
      "Work with the client to resolve the issue internally",
      "Advise the person performing the illegal activity to cease and desist",
      "Work with the client to report the activity to the appropriate authority"
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 342,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following is the BEST countermeasure to brute force login attacks?",
    "options": [
      "Changing all canonical passwords",
      "Decreasing the number of concurrent user sessions",
      "Restricting initial password delivery only in person",
      "Introducing a delay after failed system access attempts"
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 354,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "Refer to the information below to answer the question. Desktop computers in an organization were sanitized for re-use in an equivalent security environment. The data was destroyed in accordance with organizational policy and all marking and other external indications of the sensitivity of the data that was formerly stored on the magnetic drives were removed. Organizational policy requires the deletion of user data from Personal Digital Assistant (PDA) devices before disposal. It may not be possible to delete the user data if the device is malfunctioning.",
    "question": "Which destruction method below provides the BEST assurance that the data has been removed?",
    "options": [
      "Knurling",
      "Grinding",
      "Shredding",
      "Degaussing"
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 359,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "What is the process called when impact values are assigned to the security objectives for information types?",
    "options": [
      "Qualitative analysis",
      "Quantitative analysis",
      "Remediation",
      "System security categorization"
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 364,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "A health care provider is considering Internet access for their employees and patients.",
    "question": "Which of the following is the organization's MOST secure solution for protection of data?",
    "options": [
      "Public Key Infrastructure (PKI) and digital signatures",
      "Trusted server certificates and passphrases",
      "User ID and password",
      "Asymmetric encryption and User ID"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 368,
    "domain": 5,
    "domain_name": "Identity and Access Management (IAM)",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following is generally indicative of a replay attack when dealing with biometric authentication?",
    "options": [
      "False Acceptance Rate (FAR) is greater than 1 in 100,000",
      "False Rejection Rate (FRR) is greater than 5 in 100",
      "Inadequately specified templates",
      "Exact match"
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Identity and Access Management (IAM). Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 369,
    "domain": 5,
    "domain_name": "Identity and Access Management (IAM)",
    "scenario": "General CISSP Concept Review",
    "question": "Passing Certification Exams Made Easy visit - https://www.2PassEasy.com Welcome to download the Newest 2passeasy CISSP dumps https://www.2passeasy.com/dumps/CISSP/ (653 New Questions) - (Exam Topic 11) If an identification process using a biometric system detects a 100% match between a presented template and a stored template, what is the interpretation of this result?",
    "options": [
      "User error",
      "Suspected tampering",
      "Accurate identification",
      "Unsuccessful identification"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Identity and Access Management (IAM). Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 379,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Order the below steps to create an effective vulnerability management process.",
    "options": [
      "Mastered",
      "Not Mastered"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 383,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following is the BEST approach to take in order to effectively incorporate the concepts of business continuity into the organization?",
    "options": [
      "Ensure end users are aware of the planning activities",
      "Validate all regulatory requirements are known and fully documented",
      "Develop training and awareness programs that involve all stakeholders",
      "Ensure plans do not violate the organization's cultural objectives and goals"
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 391,
    "domain": 2,
    "domain_name": "Asset Security",
    "scenario": "General CISSP Concept Review",
    "question": "Regarding asset security and appropriate retention, which of the following INITIAL top three areas are important to focus on?",
    "options": [
      "Security control baselines, access controls, employee awareness and training",
      "Human resources, asset management, production management",
      "Supply chain lead time, inventory control, encryption",
      "Polygraphs, crime statistics, forensics"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Asset Security. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 394,
    "domain": 7,
    "domain_name": "Security Operations",
    "scenario": "General CISSP Concept Review",
    "question": "Disaster Recovery Plan (DRP) training material should be",
    "options": [
      "consistent so that all audiences receive the same training.",
      "stored in a fire proof safe to ensure availability when needed.",
      "only delivered in paper format.",
      "presented in a professional looking manner."
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Security Operations. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 397,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following types of security testing is the MOST effective in providing a better indication of the everyday security challenges of an organization when performing a security risk assessment?",
    "options": [
      "External",
      "Overt",
      "Internal",
      "Covert"
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 402,
    "domain": 2,
    "domain_name": "Asset Security",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following entities is ultimately accountable for data remanence vulnerabilities with data replicated by a cloud service provider?",
    "options": [
      "Data owner",
      "Data steward",
      "Data custodian",
      "Data processor"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Asset Security. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 404,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following roles has the obligation to ensure that a third party provider is capable of processing and handling data in a secure manner and meeting the standards set by the organization?",
    "options": [
      "Data Custodian",
      "Data Owner",
      "Data Creator",
      "Data User"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 421,
    "domain": 2,
    "domain_name": "Asset Security",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following is the BEST example of weak management commitment to the protection of security assets and resources?",
    "options": [
      "poor governance over security processes and procedures",
      "immature security controls and procedures",
      "variances against regulatory requirements",
      "unanticipated increases in security incidents and threats"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Asset Security. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 422,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "The BEST example of the concept of \"something that a user has\" when providing an authorized user access to a computing system is",
    "options": [
      "the user's hand geometry.",
      "a credential stored in a token.",
      "a passphrase.",
      "the user's face."
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 425,
    "domain": 5,
    "domain_name": "Identity and Access Management (IAM)",
    "scenario": "Which Web Services Security (WS-Security) specification maintains a single authenticated identity across multiple dissimilar environments? Click on the correct specification in the image below.",
    "question": "Passing Certification Exams Made Easy visit - https://www.2PassEasy.com Welcome to download the Newest 2passeasy CISSP dumps https://www.2passeasy.com/dumps/CISSP/ (653 New Questions)",
    "options": [
      "Mastered",
      "Not Mastered"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Identity and Access Management (IAM). Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 427,
    "domain": 3,
    "domain_name": "Security Architecture and Engineering",
    "scenario": "A security professional is asked to provide a solution that restricts a bank teller to only perform a savings deposit transaction but allows a supervisor to perform corrections after the transaction.",
    "question": "Which of the following is the MOST effective solution?",
    "options": [
      "Access is based on rules.",
      "Access is determined by the system.",
      "Access is based on user's role.",
      "Access is based on data sensitivity."
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Security Architecture and Engineering. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 454,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following methods can be used to achieve confidentiality and integrity for data in transit?",
    "options": [
      "Multiprotocol Label Switching (MPLS)",
      "Internet Protocol Security (IPSec)",
      "Federated identity management",
      "Multi-factor authentication"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 461,
    "domain": 4,
    "domain_name": "Communication and Network Security",
    "scenario": "A network scan found 50% of the systems with one or more critical vulnerabilities.",
    "question": "Which of the following represents the BEST action?",
    "options": [
      "Assess vulnerability risk and program effectiveness.",
      "Assess vulnerability risk and business impact.",
      "Disconnect all systems with critical vulnerabilities.",
      "Disconnect systems with the most number of vulnerabilities."
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Communication and Network Security. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 462,
    "domain": 2,
    "domain_name": "Asset Security",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following BEST avoids data remanence disclosure for cloud hosted resources?",
    "options": [
      "Strong encryption and deletion of the keys after data is deleted.",
      "Strong encryption and deletion of the virtual host after data is deleted.",
      "Software based encryption with two factor authentication.",
      "Hardware based encryption on dedicated physical servers."
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Asset Security. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 466,
    "domain": 2,
    "domain_name": "Asset Security",
    "scenario": "General CISSP Concept Review",
    "question": "Who is ultimately responsible to ensure that information assets are categorized and adequate measures are taken to protect them?",
    "options": [
      "Data Custodian",
      "Executive Management",
      "Chief Information Security Officer",
      "Data/Information/Business Owners"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Asset Security. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 474,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "A Simple Power Analysis (SPA) attack against a device directly observes which of the following?",
    "options": [
      "Static discharge",
      "Consumption",
      "Generation",
      "Magnetism"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 480,
    "domain": 4,
    "domain_name": "Communication and Network Security",
    "scenario": "General CISSP Concept Review",
    "question": "In the Open System Interconnection (OSI) model, which layer is responsible for the transmission of binary data over a communications network?",
    "options": [
      "Application Layer",
      "Physical Layer",
      "Data-Link Layer",
      "Network Layer"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Communication and Network Security. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 483,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following secures web transactions at the Transport Layer?",
    "options": [
      "Secure HyperText Transfer Protocol (S-HTTP)",
      "Secure Sockets Layer (SSL)",
      "Socket Security (SOCKS)",
      "Secure Shell (SSH)"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 487,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Are companies legally required to report all data breaches?",
    "options": [
      "No, different jurisdictions have different rules.",
      "No, not if the data is encrypted.",
      "No, companies' codes of ethics don't require it.",
      "No, only if the breach had a material impact."
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 489,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "While investigating a malicious event, only six days of audit logs from the last month were available.",
    "question": "What policy should be updated to address this problem?",
    "options": [
      "Retention",
      "Reporting",
      "Recovery",
      "Remediation"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 491,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following is the PRIMARY issue when collecting detailed log information?",
    "options": [
      "Logs may be unavailable when required",
      "Timely review of the data is potentially difficult",
      "Most systems and applications do not support logging",
      "Logs do not provide sufficient details of system and individual activities"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 492,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "An organization is found lacking the ability to properly establish performance indicators for its Web hosting solution during an audit.",
    "question": "What would be the MOST probable cause?",
    "options": [
      "Improper deployment of the Service-Oriented Architecture (SOA)",
      "Absence of a Business Intelligence (BI) solution",
      "Inadequate cost modeling",
      "Insufficient Service Level Agreement (SLA)"
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 496,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following is the PRIMARY benefit of implementing data-in-use controls?",
    "options": [
      "If the data is lost, it must be decrypted to be opened.",
      "If the data is lost, it will not be accessible to unauthorized users.",
      "When the data is being viewed, it can only be printed by authorized users.",
      "When the data is being viewed, it must be accessed using secure protocols."
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 498,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "During the risk assessment phase of the project the CISO discovered that a college within the University is collecting Protected Health Information (PHI) data via an application that was developed in-house. The college collecting this data is fully aware of the regulations for Health Insurance Portability and Accountability Act (HIPAA) and is fully compliant. What is the best approach for the CISO? During the risk assessment phase of the project the CISO discovered that a college within the University is collecting Protected Health Information (PHI) data via an application that was developed in-house. The college collecting this data is fully aware of the regulations for Health Insurance Portability and Accountability Act (HIPAA) and is fully compliant.",
    "question": "What is the best approach for the CISO?",
    "options": [
      "Document the system as high risk",
      "Perform a vulnerability assessment",
      "Perform a quantitative threat assessment",
      "Notate the information and move on"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 509,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following could elicit a Denial of Service (DoS) attack against a credential management system?",
    "options": [
      "Delayed revocation or destruction of credentials",
      "Modification of Certificate Revocation List",
      "Unauthorized renewal or re-issuance",
      "Token use after decommissioning"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 516,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "In which order, from MOST to LEAST impacted, does user awareness training reduce the occurrence of the events below?",
    "options": [
      "Mastered",
      "Not Mastered"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 518,
    "domain": 4,
    "domain_name": "Communication and Network Security",
    "scenario": "General CISSP Concept Review",
    "question": "A proxy firewall operates at what layer of the Open System Interconnection (OSI) model?",
    "options": [
      "Transport",
      "Data link",
      "Network",
      "Application"
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Communication and Network Security. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 519,
    "domain": 2,
    "domain_name": "Asset Security",
    "scenario": "General CISSP Concept Review",
    "question": "What is the difference between media marking and media labeling?",
    "options": [
      "Media marking refers to the use of human-readable security attributes, while media labeling refers to the use of security attributes in internal data structures.",
      "Media labeling refers to the use of human-readable security attributes, while media marking refers to the use of security attributes in internal data structures.",
      "Media labeling refers to security attributes required by public policy/law, while media marking refers to security required by internal organizational policy.",
      "Media marking refers to security attributes required by public policy/law, while media labeling refers to security attributes required by internal organizational"
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Asset Security. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 536,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following is the BEST method to reduce the effectiveness of phishing attacks?",
    "options": [
      "User awareness",
      "Two-factor authentication",
      "Anti-phishing software",
      "Periodic vulnerability scan"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 539,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following is a strategy of grouping requirements in developing a Security Test and Evaluation (ST&E)?",
    "options": [
      "Tactical, strategic, and financial",
      "Management, operational, and technical",
      "Documentation, observation, and manual",
      "Standards, policies, and procedures"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 543,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following is the MAIN reason for using configuration management?",
    "options": [
      "To provide centralized administration",
      "To reduce the number of changes",
      "To reduce errors during upgrades",
      "To provide consistency in security controls"
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 544,
    "domain": 4,
    "domain_name": "Communication and Network Security",
    "scenario": "Match the types of e-authentication tokens to their description.",
    "question": "Drag each e-authentication token on the left to its corresponding description on the right.",
    "options": [
      "Mastered",
      "Not Mastered"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Communication and Network Security. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 548,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "An application developer is deciding on the amount of idle session time that the application allows before a timeout.",
    "question": "The BEST reason for determining the session timeout requirement is",
    "options": [
      "organization policy.",
      "industry best practices.",
      "industry laws and regulations.",
      "management feedback."
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 550,
    "domain": 3,
    "domain_name": "Security Architecture and Engineering",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following is MOST important when deploying digital certificates?",
    "options": [
      "Validate compliance with X.509 digital certificate standards",
      "Establish a certificate life cycle management framework",
      "Use a third-party Certificate Authority (CA)",
      "Use no less than 256-bit strength encryption when creating a certificate"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Security Architecture and Engineering. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 553,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following is a document that identifies each item seized in an investigation, including date and time seized, full name and signature or initials of the person who seized the item, and a detailed description of the item?",
    "options": [
      "Property book",
      "Chain of custody form",
      "Search warrant return",
      "Evidence tag"
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 567,
    "domain": 4,
    "domain_name": "Communication and Network Security",
    "scenario": "General CISSP Concept Review",
    "question": "Between which pair of Open System Interconnection (OSI) Reference Model layers are routers used as a communications device?",
    "options": [
      "Transport and Session",
      "Data-Link and Transport",
      "Network and Session",
      "Physical and Data-Link"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Communication and Network Security. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 592,
    "domain": 5,
    "domain_name": "Identity and Access Management (IAM)",
    "scenario": "An employee of a retail company has been granted an extended leave of absence by Human Resources (HR). This information has been formally communicated to the access provisioning team.",
    "question": "Which of the following is the BEST action to take?",
    "options": [
      "Revoke access temporarily.",
      "Block user access and delete user account after six months.",
      "Block access to the offices immediately.",
      "Monitor account usage temporarily."
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Identity and Access Management (IAM). Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 593,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following BEST represents the concept of least privilege?",
    "options": [
      "Access to an object is denied unless access is specifically allowed.",
      "Access to an object is only available to the owner.",
      "Access to an object is allowed unless it is protected by the information security policy.",
      "Access to an object is only allowed to authenticated users via an Access Control List (ACL)."
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 598,
    "domain": 5,
    "domain_name": "Identity and Access Management (IAM)",
    "scenario": "General CISSP Concept Review",
    "question": "Passing Certification Exams Made Easy visit - https://www.2PassEasy.com Welcome to download the Newest 2passeasy CISSP dumps https://www.2passeasy.com/dumps/CISSP/ (653 New Questions) - (Exam Topic 12) Which of the following is BEST suited for exchanging authentication and authorization messages in a multi-party decentralized environment?",
    "options": [
      "Lightweight Directory Access Protocol (LDAP)",
      "Security Assertion Markup Language (SAML)",
      "Internet Mail Access Protocol",
      "Transport Layer Security (TLS)"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Identity and Access Management (IAM). Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 604,
    "domain": 4,
    "domain_name": "Communication and Network Security",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following are effective countermeasures against passive network-layer attacks?",
    "options": [
      "Federated security and authenticated access controls",
      "Trusted software development and run time integrity controls",
      "Encryption and security enabled applications",
      "Enclave boundary protection and computing environment defense"
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Communication and Network Security. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 619,
    "domain": 8,
    "domain_name": "Software Development Security",
    "scenario": "General CISSP Concept Review",
    "question": "During the Security Assessment and Authorization process, what is the PRIMARY purpose for conducting a hardware and software inventory?",
    "options": [
      "Calculate the value of assets being accredited.",
      "Create a list to include in the Security Assessment and Authorization package.",
      "Identify obsolete hardware and software.",
      "Define the boundaries of the information system."
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Software Development Security. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 625,
    "domain": 4,
    "domain_name": "Communication and Network Security",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following is the PRIMARY reason to perform regular vulnerability scanning of an organization network?",
    "options": [
      "Provide vulnerability reports to management.",
      "Validate vulnerability remediation activities.",
      "Prevent attackers from discovering vulnerabilities.",
      "Remediate known vulnerabilities."
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Communication and Network Security. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 633,
    "domain": 8,
    "domain_name": "Software Development Security",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following steps should be performed FIRST when purchasing Commercial Off-The-Shelf (COTS) software? Passing Certification Exams Made Easy visit - https://www.2PassEasy.com Welcome to download the Newest 2passeasy CISSP dumps https://www.2passeasy.com/dumps/CISSP/ (653 New Questions)",
    "options": [
      "undergo a security assessment as part of authorization process",
      "establish a risk management strategy",
      "harden the hosting server, and perform hosting and application vulnerability scans",
      "establish policies and procedures on system and services acquisition"
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Software Development Security. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 637,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "What is the MAIN goal of information security awareness and training?",
    "options": [
      "To inform users of the latest malware threats",
      "To inform users of information assurance responsibilities",
      "To comply with the organization information security policy",
      "To prepare students for certification"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 656,
    "domain": 6,
    "domain_name": "Security Assessment and Testing",
    "scenario": "General CISSP Concept Review",
    "question": "Passing Certification Exams Made Easy visit - https://www.2PassEasy.com Welcome to download the Newest 2passeasy CISSP dumps https://www.2passeasy.com/dumps/CISSP/ (653 New Questions) - (Exam Topic 13) It is MOST important to perform which of the following to minimize potential impact when implementing a new vulnerability scanning tool in a production environment?",
    "options": [
      "Negotiate schedule with the Information Technology (IT) operation\u2019s team",
      "Log vulnerability summary reports to a secured server",
      "Enable scanning during off-peak hours",
      "Establish access for Information Technology (IT) management"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Security Assessment and Testing. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 657,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which security modes is MOST commonly used in a commercial environment because it protects the integrity of financial and accounting data?",
    "options": [
      "Biba",
      "Graham-Denning",
      "Clark-Wilson",
      "Beil-LaPadula"
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 669,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following methods of suppressing a fire is environmentally friendly and the MOST appropriate for a data center?",
    "options": [
      "Inert gas fire suppression system",
      "Halon gas fire suppression system",
      "Dry-pipe sprinklers",
      "Wet-pipe sprinklers"
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 670,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "What are the steps of a risk assessment?",
    "options": [
      "identification, analysis, evaluation",
      "analysis, evaluation, mitigation",
      "classification, identification, risk management",
      "identification, evaluation, mitigation"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 675,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following is a common characteristic of privacy?",
    "options": [
      "Provision for maintaining an audit trail of access to the private data",
      "Notice to the subject of the existence of a database containing relevant credit card data",
      "Process for the subject to inspect and correct personal data on-site",
      "Database requirements for integration of privacy data"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 679,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "What does electronic vaulting accomplish?",
    "options": [
      "It protects critical files.",
      "It ensures the fault tolerance of Redundant Array of Independent Disks (RAID) systems",
      "It stripes all database records",
      "It automates the Disaster Recovery Process (DRP)"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 684,
    "domain": 2,
    "domain_name": "Asset Security",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following is a responsibility of the information owner?",
    "options": [
      "Ensure that users and personnel complete the required security training to access the Information System (IS)",
      "Defining proper access to the Information System (IS), including privileges or access rights",
      "Managing identification, implementation, and assessment of common security controls",
      "Ensuring the Information System (IS) is operated according to agreed upon security requirements"
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Asset Security. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 688,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following would an attacker BEST be able to accomplish through the use of Remote Access Tools (RAT)?",
    "options": [
      "Reduce the probability of identification",
      "Detect further compromise of the target",
      "Destabilize the operation of the host",
      "Maintain and expand control"
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 691,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "What is the PRIMARY goal of fault tolerance?",
    "options": [
      "Elimination of single point of failure",
      "Isolation using a sandbox",
      "Single point of repair",
      "Containment to prevent propagation"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 708,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "An Information Technology (IT) professional attends a cybersecurity seminar on current incident response methodologies.",
    "question": "What code of ethics canon is being observed?",
    "options": [
      "Provide diligent and competent service to principals",
      "Protect society, the commonwealth, and the infrastructure",
      "Advance and protect the profession",
      "Act honorable, honesty, justly, responsibly, and legally"
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 721,
    "domain": 2,
    "domain_name": "Asset Security",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following entails identification of data and links to business processes, applications, and data stores as well as assignment of ownership responsibilities?",
    "options": [
      "Security governance",
      "Risk management",
      "Security portfolio management",
      "Risk assessment"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Asset Security. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 730,
    "domain": 2,
    "domain_name": "Asset Security",
    "scenario": "General CISSP Concept Review",
    "question": "When network management is outsourced to third parties, which of the following is the MOST effective method of protecting critical data assets?",
    "options": [
      "Log all activities associated with sensitive systems",
      "Provide links to security policies",
      "Confirm that confidentially agreements are signed",
      "Employ strong access controls"
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Asset Security. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 738,
    "domain": 4,
    "domain_name": "Communication and Network Security",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following is a responsibility of a data steward?",
    "options": [
      "Ensure alignment of the data governance effort to the organization.",
      "Conduct data governance interviews with the organization.",
      "Document data governance requirements.",
      "Ensure that data decisions and impacts are communicated to the organization."
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Communication and Network Security. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 745,
    "domain": 4,
    "domain_name": "Communication and Network Security",
    "scenario": "An organization adopts a new firewall hardening standard.",
    "question": "How can the security professional verify that the technical staff correct implemented the new standard?",
    "options": [
      "Perform a compliance review",
      "Perform a penetration test",
      "Train the technical staff",
      "Survey the technical staff"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Communication and Network Security. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 746,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "A minimal implementation of endpoint security includes which of the following?",
    "options": [
      "Trusted platforms",
      "Host-based firewalls",
      "Token-based authentication",
      "Wireless Access Points (AP)"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 754,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following is the MOST appropriate action when reusing media that contains sensitive data?",
    "options": [
      "Erase",
      "Sanitize",
      "Encrypt",
      "Degauss"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 762,
    "domain": 5,
    "domain_name": "Identity and Access Management (IAM)",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following is the GREATEST benefit of implementing a Role Based Access Control (RBAC) system?",
    "options": [
      "Integration using Lightweight Directory Access Protocol (LDAP)",
      "Form-based user registration process",
      "Integration with the organizations Human Resources (HR) system",
      "A considerably simpler provisioning process"
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Identity and Access Management (IAM). Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 764,
    "domain": 6,
    "domain_name": "Security Assessment and Testing",
    "scenario": "General CISSP Concept Review",
    "question": "As part of an application penetration testing process, session hijacking can BEST be achieved by which of the following?",
    "options": [
      "Known-plaintext attack",
      "Denial of Service (DoS)",
      "Cookie manipulation",
      "Structured Query Language (SQL) injection"
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Security Assessment and Testing. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 769,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Which of the following is the MOST important part of an awareness and training plan to prepare employees for emergency situations?",
    "options": [
      "Having emergency contacts established for the general employee population to get information",
      "Conducting business continuity and disaster recovery training for those who have a direct role in the recovery",
      "Designing business continuity and disaster recovery training programs for different audiences",
      "Publishing a corporate business continuity and disaster recovery plan on the corporate website"
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 772,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Attack trees are MOST useful for which of the following?",
    "options": [
      "Determining system security scopes",
      "Generating attack libraries",
      "Enumerating threats",
      "Evaluating Denial of Service (DoS) attacks"
    ],
    "answer": 0,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option A is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 774,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Who would be the BEST person to approve an organizations information security policy?",
    "options": [
      "Chief Information Officer (CIO)",
      "Chief Information Security Officer (CISO)",
      "Chief internal auditor",
      "Chief Executive Officer (CEO)"
    ],
    "answer": 1,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option B is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 779,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "The MAIN use of Layer 2 Tunneling Protocol (L2TP) is to tunnel data",
    "options": [
      "through a firewall at the Session layer",
      "through a firewall at the Transport layer",
      "in the Point-to-Point Protocol (PPP)",
      "in the Payload Compression Protocol (PCP)"
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option C is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 782,
    "domain": 4,
    "domain_name": "Communication and Network Security",
    "scenario": "A post-implementation review has identified that the Voice Over Internet Protocol (VoIP) system was designed to have gratuitous Address Resolution Protocol (ARP) disabled.",
    "question": "Why did the network architect likely design the VoIP system with gratuitous ARP disabled?",
    "options": [
      "Gratuitous ARP requires the use of Virtual Local Area Network (VLAN) 1.",
      "Gratuitous ARP requires the use of insecure layer 3 protocols.",
      "Gratuitous ARP requires the likelihood of a successful brute-force attack on the phone.",
      "Gratuitous ARP requires the risk of a Man-in-the-Middle (MITM) attack."
    ],
    "answer": 3,
    "explanation": "This question covers a critical concept in Communication and Network Security. Option D is verified as the correct answer key in standard CISSP assessments."
  },
  {
    "id": 786,
    "domain": 1,
    "domain_name": "Security and Risk Management",
    "scenario": "General CISSP Concept Review",
    "question": "Access to which of the following is required to validate web session management? Passing Certification Exams Made Easy visit - https://www.2PassEasy.com Welcome to download the Newest 2passeasy CISSP dumps https://www.2passeasy.com/dumps/CISSP/ (653 New Questions)",
    "options": [
      "Log timestamp",
      "Live session traffic",
      "Session state variables",
      "Test scripts"
    ],
    "answer": 2,
    "explanation": "This question covers a critical concept in Security and Risk Management. Option C is verified as the correct answer key in standard CISSP assessments."
  }
];
