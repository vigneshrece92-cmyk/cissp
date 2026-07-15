/**
 * 🤖 JARVIS — CISSP AI Study Mode (Browser-only / Vercel compatible)
 * Calls Groq API via /api/jarvis Vercel serverless function (key stays secret).
 * Includes inline CISSP knowledge context for RAG-style prompting.
 */

// ── Config ───────────────────────────────────────────────────────
// API key is stored in Vercel env variable GROQ_API_KEY (not exposed in JS)
const JARVIS_GROQ_MODEL = "llama-3.3-70b-versatile";
const JARVIS_API_ENDPOINT = "/api/jarvis"; // Vercel serverless function

// ── State ────────────────────────────────────────────────────────
let jarvisOpen = false;
let jarvisLoading = false;
let jarvisSessionHistory = [];
let jarvisManagerMode = false;
let jarvisDomain = "";
let voiceListening = false;
let voiceRecognition = null;

// ── Inline CISSP Knowledge Base (Key concepts for RAG context) ───
// This gives Jarvis grounded CISSP knowledge without a server
const CISSP_KNOWLEDGE = {
  "Domain 1: Security and Risk Management": `
    - CIA Triad: Confidentiality (only authorized access), Integrity (data not tampered), Availability (systems accessible when needed)
    - Think Like a Manager: CISSP exam wants you to think like a CISO, not a sysadmin. Always choose governance/policy over technical fixes.
    - Risk = Threat × Vulnerability × Asset Value. Risk management is about reducing risk to acceptable levels, not eliminating it.
    - Threat: any potential danger. Vulnerability: weakness that can be exploited. Risk: likelihood × impact.
    - Controls: Preventive (stop attack), Detective (find attack), Corrective (fix after attack), Deterrent (discourage), Compensating (alternative control).
    - Due Care: doing what a reasonable person would do. Due Diligence: researching before acting.
    - Policies (senior management) → Standards (mandatory rules) → Baselines (minimum security) → Guidelines (optional recommendations) → Procedures (step-by-step).
    - BCP: Business Continuity Planning — keeping business running during disruption. DRP: Disaster Recovery Plan — restoring IT after disaster.
    - MTD (Maximum Tolerable Downtime), RTO (Recovery Time Objective), RPO (Recovery Point Objective), MTTR (Mean Time To Repair), MTBF (Mean Time Between Failures).
    - Ethics: ISC2 Code of Ethics: Protect society → Act honorably → Provide competent service → Advance the profession.
    - Security governance aligns security with business objectives. Board of Directors sets direction, CISO implements.
  `,
  "Domain 2: Asset Security": `
    - Data Classification (Government): Top Secret > Secret > Confidential > Unclassified.
    - Data Classification (Commercial): Confidential/Proprietary > Private > Sensitive > Public.
    - Data Owner: responsible for classification. Data Custodian: implements security controls. Data User: uses the data.
    - Data retention: keep data only as long as needed (legal, business, regulatory requirements).
    - Data remanence: residual data on media after deletion. Degaussing, overwriting, physical destruction to handle it.
    - Scoping: removing non-applicable standards. Tailoring: customizing controls to fit the environment.
    - Privacy: PII (Personally Identifiable Information) must be protected. GDPR, HIPAA, PCI-DSS are key regulations.
    - Need-to-know: only access to information required for job role. Least Privilege: minimum rights to perform tasks.
    - DLP (Data Loss Prevention): prevents sensitive data from leaving the organization.
  `,
  "Domain 3: Security Architecture and Engineering": `
    - Security models: Bell-LaPadula (confidentiality — no read up, no write down), Biba (integrity — no read down, no write up), Clark-Wilson (integrity via transactions), Brewer-Nash (Chinese Wall — conflict of interest).
    - Trusted Computing Base (TCB): hardware/software/firmware that enforces security policy.
    - Security perimeter: boundary between TCB and everything else.
    - Open system: uses standard protocols (interoperable). Closed system: proprietary (more secure but less flexible).
    - Defense in Depth: multiple layers of security controls so no single failure is catastrophic.
    - Cryptography: Caesar cipher (substitution), Vigenere (polyalphabetic), DES (56-bit, weak), 3DES, AES (128/192/256 bit, current standard).
    - Asymmetric: RSA, ECC — public key encrypts, private key decrypts. Symmetric: AES, DES — same key for encrypt/decrypt.
    - PKI: Public Key Infrastructure. CA (Certificate Authority) issues digital certificates. CRL: Certificate Revocation List.
    - Kerckhoff's principle: security should rely on key secrecy, not algorithm secrecy.
    - Common Criteria: international standard for security product evaluation. EAL levels 1-7.
  `,
  "Domain 4: Communication and Network Security": `
    - OSI Model: Physical, Data Link, Network, Transport, Session, Presentation, Application (Please Do Not Throw Sausage Pizza Away).
    - TCP/IP Model: Network Access, Internet, Transport, Application.
    - Firewalls: Packet filtering (Layer 3-4), Stateful inspection (tracks connections), Application proxy (Layer 7, most secure).
    - IDS (Intrusion Detection System): detects, alerts. IPS (Intrusion Prevention System): detects AND blocks.
    - VPN: encrypts traffic over public networks. IPSec (tunnel/transport mode), SSL/TLS VPN.
    - NAT (Network Address Translation): hides internal IP addresses.
    - VLAN (Virtual LAN): logical network segmentation. DMZ: demilitarized zone between internet and internal network.
    - WEP (broken), WPA, WPA2 (AES — current standard), WPA3 (newest).
    - Protocols to know: HTTPS (443), SSH (22), SFTP (22), SMTP (25), DNS (53), DHCP (67/68), RDP (3389).
    - Zero Trust: never trust, always verify. No implicit trust even inside the network.
  `,
  "Domain 5: Identity and Access Management": `
    - Authentication factors: Something you know (password), Something you have (token/card), Something you are (biometrics).
    - MFA: uses 2+ factors. Stronger than single factor.
    - SSO (Single Sign-On): one login, access to multiple systems. Kerberos is the most common SSO protocol.
    - Access control models: MAC (Mandatory — labels, government), DAC (Discretionary — owner controls, most flexible), RBAC (Role-Based — job roles, most common in enterprise), ABAC (Attribute-Based — most granular).
    - Provisioning: creating accounts. Deprovisioning: removing access when no longer needed (critical!).
    - Privilege creep: accumulating more access over time. Combat with access reviews.
    - Federated identity: sharing identity between organizations. SAML, OAuth 2.0, OpenID Connect.
    - Biometrics: FRR (False Rejection Rate — rejects legitimate users), FAR (False Acceptance Rate — accepts impostors). CER/EER: crossover point where FRR=FAR (lower is better).
    - Separation of Duties: no single person can complete a sensitive transaction alone (prevents fraud).
    - Dual control: two people required simultaneously. Two-person integrity.
  `,
  "Domain 6: Security Assessment and Testing": `
    - Vulnerability assessment: identifies weaknesses. Penetration testing: actively exploits weaknesses.
    - Pentest types: Black box (no prior knowledge), White box (full knowledge), Gray box (partial knowledge).
    - OWASP Top 10: SQL injection, broken auth, XSS, insecure direct object reference, security misconfiguration, etc.
    - Audit types: Internal audit (by organization), External audit (by third party), Third-party audit.
    - Security metrics: KPIs to measure security program effectiveness.
    - Code review: static (without running code), dynamic (running code), fuzz testing (random inputs).
    - SOC reports: SOC 1 (financial controls), SOC 2 (security/availability/confidentiality), SOC 3 (public summary).
    - Regression testing: after changes, verify existing functions still work.
  `,
  "Domain 7: Security Operations": `
    - Incident response: Preparation → Identification → Containment → Eradication → Recovery → Lessons Learned (PICERL).
    - Chain of custody: documenting evidence handling to maintain integrity for legal purposes.
    - SIEM: Security Information and Event Management — aggregates logs, correlates events, alerts on anomalies.
    - Change management: formal process for approving IT changes to prevent unauthorized changes.
    - Configuration management: maintaining baseline configurations. CMDB (Configuration Management Database).
    - Patch management: testing and applying security patches. Critical patches → emergency, others → scheduled.
    - Backups: Full (all data), Incremental (changes since last backup), Differential (changes since last full backup).
    - BCP/DRP testing: Checklist, Tabletop (discussion), Walkthrough, Simulation, Parallel (both systems run), Full interruption (most realistic, most risky).
    - Monitoring: continuous monitoring detects incidents early. Need-to-know principle for log access.
  `,
  "Domain 8: Software Development Security": `
    - SDLC phases: Requirements → Design → Development → Testing → Deployment → Maintenance. Security in every phase!
    - Secure coding: input validation, output encoding, error handling, least privilege in code.
    - OWASP: Open Web Application Security Project. Key vulnerabilities: SQL injection, XSS, CSRF, buffer overflow.
    - SQL injection: user input is treated as SQL command. Prevention: parameterized queries / prepared statements.
    - XSS (Cross-Site Scripting): malicious scripts injected into web pages viewed by other users.
    - Buffer overflow: writing more data than a buffer can hold, overwriting adjacent memory.
    - Agile: iterative development. Security reviews each sprint. DevSecOps: security integrated into DevOps pipeline.
    - Code repositories: source code version control (Git). Access controls on repo critical.
    - Testing: Unit (single component), Integration (components together), System (whole system), UAT (user acceptance).
    - Penetration testing in SDLC: black/gray/white box testing before deployment.
  `
};

// ── Get relevant knowledge for a question ────────────────────────
function getRelevantKnowledge(question) {
  const q = question.toLowerCase();

  // Domain keyword matching
  const domainKeywords = {
    "Domain 1: Security and Risk Management": ["risk","threat","vulnerability","bcp","drp","policy","governance","ethics","cia","confidential","integrity","availability","due care","due diligence","rto","rpo","mtd","control"],
    "Domain 2: Asset Security": ["classification","data owner","custodian","pii","privacy","retention","remanence","degauss","dlp","scoping","tailoring","need-to-know"],
    "Domain 3: Security Architecture and Engineering": ["bell-lapadula","biba","clark-wilson","tcb","cryptograph","aes","rsa","pki","certificate","kerckhoff","common criteria","eal","encrypt","cipher","hash"],
    "Domain 4: Communication and Network Security": ["osi","tcp","firewall","vpn","ids","ips","vlan","dmz","nat","wpa","protocol","network","router","switch","packet"],
    "Domain 5: Identity and Access Management": ["authentication","mfa","sso","kerberos","access control","mac","dac","rbac","abac","biometric","federation","saml","oauth","provisioning","privilege"],
    "Domain 6: Security Assessment and Testing": ["vulnerability","penetration","pentest","audit","owasp","soc report","fuzz","code review","assessment","testing"],
    "Domain 7: Security Operations": ["incident","response","siem","chain of custody","change management","patch","backup","bcdr","monitoring","forensic","log"],
    "Domain 8: Software Development Security": ["sdlc","sql injection","xss","csrf","buffer overflow","secure coding","agile","devsecops","code review","software","development"]
  };

  let relevantDomains = [];

  // Check domain filter first
  if (jarvisDomain && CISSP_KNOWLEDGE[jarvisDomain]) {
    relevantDomains.push(jarvisDomain);
  }

  // Find matching domains by keywords
  for (const [domain, keywords] of Object.entries(domainKeywords)) {
    if (keywords.some(kw => q.includes(kw))) {
      if (!relevantDomains.includes(domain)) relevantDomains.push(domain);
    }
  }

  // Default to first 2 domains if nothing matched
  if (relevantDomains.length === 0) {
    relevantDomains = Object.keys(CISSP_KNOWLEDGE).slice(0, 2);
  }

  // Return top 2 most relevant domain knowledge snippets
  return relevantDomains.slice(0, 2).map(d =>
    `[${d}]\n${CISSP_KNOWLEDGE[d].trim()}`
  ).join("\n\n---\n\n");
}

// ── System Prompt ─────────────────────────────────────────────────
const JARVIS_SYSTEM = `You are JARVIS — a friendly, super-smart CISSP study buddy. Just A Rather Very Intelligent Study-assistant!

Your personality & style:
- Friendly and warm like a helpful Indian senior colleague who's already passed CISSP and wants YOU to pass too.
- Use simple, clear English — like a good tutor explaining to a student, not like a textbook.
- Use real-world Indian examples when helpful: comparing firewall rules to a housing society security guard, access control to an office ID card, BCP to a generator during power cuts, etc.
- Structure your answers naturally: 1) Quick simple answer first, 2) A relatable analogy, 3) The CISSP/ISC2 exam angle.
- Use these markers when relevant:
  ⚠️ Exam Trap Alert: (for common mistakes candidates make)
  🎯 Think Like a Manager: (when managerial/CISO mindset matters, not technical)
  📚 Key Concept: (for important definitions)
  💡 Quick tip: (for memory tricks)
- Be conversational. Use phrases like "Good question!", "Here's the thing...", "So basically...", "The trick here is...", "Yaar, remember this..."
- Keep answers focused — 3-5 short paragraphs max. No walls of text!
- End with a short encouragement or quick revision tip.
- If question is not CISSP/security related, say: "I'm your CISSP buddy yaar! Ask me about the 8 domains 😄"`;

// ── Build Prompt with Context ─────────────────────────────────────
function buildJarvisPrompt(question) {
  const knowledge = getRelevantKnowledge(question);
  let extras = "";
  if (jarvisManagerMode) {
    extras = "\n\nIMPORTANT: The student wants the MANAGER/CISO mindset perspective — think business risk, governance, policy, compliance — NOT a technical engineer's view. Always ask 'what would a senior security manager decide here?'";
  }
  if (jarvisDomain) {
    extras += `\n\nFocus on: ${jarvisDomain}.`;
  }

  return `Here are relevant CISSP study notes to help answer:

${knowledge}
${extras}

Student's question: ${question}

Answer in your friendly JARVIS style, using the notes above where relevant.`;
}

// ── Call Groq via Vercel serverless function (streaming) ────────────
async function* streamGroq(messages) {
  const resp = await fetch(JARVIS_API_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ messages, stream: true, max_tokens: 900, temperature: 0.72 })
  });

  if (!resp.ok) {
    const err = await resp.text();
    throw new Error(`API error ${resp.status}: ${err}`);
  }

  const reader = resp.body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    buffer += decoder.decode(value, { stream: true });
    const lines = buffer.split("\n");
    buffer = lines.pop();
    for (const line of lines) {
      if (!line.startsWith("data: ")) continue;
      const raw = line.slice(6).trim();
      if (raw === "[DONE]") return;
      try {
        const obj = JSON.parse(raw);
        const token = obj.choices?.[0]?.delta?.content;
        if (token) yield token;
      } catch (_) {}
    }
  }
}

// ── DOM Helpers ───────────────────────────────────────────────────
function jEl(id) { return document.getElementById(id); }

function renderMarkdown(text) {
  return text
    .replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")
    .replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>")
    .replace(/\*(.*?)\*/g,"<em>$1</em>")
    .replace(/`(.*?)`/g,"<code>$1</code>")
    .replace(/⚠️ Exam Trap Alert:(.*?)(?=\n|$)/g,'<div class="jarvis-tag jarvis-tag-red">⚠️ <strong>Exam Trap Alert:</strong>$1</div>')
    .replace(/🎯 Think Like a Manager:(.*?)(?=\n|$)/g,'<div class="jarvis-tag jarvis-tag-amber">🎯 <strong>Think Like a Manager:</strong>$1</div>')
    .replace(/📚 Key Concept:(.*?)(?=\n|$)/g,'<div class="jarvis-tag jarvis-tag-cyan">📚 <strong>Key Concept:</strong>$1</div>')
    .replace(/💡 Quick tip:(.*?)(?=\n|$)/g,'<div class="jarvis-tag jarvis-tag-green">💡 <strong>Quick tip:</strong>$1</div>')
    .replace(/\n/g,"<br>");
}

function appendMsg(role, text) {
  const c = jEl("jarvis-messages");
  const isUser = role === "user";
  const div = document.createElement("div");
  div.className = `msg ${isUser ? "user" : "jarvis-msg"}`;
  div.innerHTML = `
    <div class="msg-avatar"><i class="fa-solid fa-${isUser ? "user" : "atom"}"></i></div>
    <div class="msg-bubble">${renderMarkdown(text)}</div>`;
  c.appendChild(div);
  scrollBottom();
}

function createStreamBubble() {
  const c = jEl("jarvis-messages");
  const id = "stream-" + Date.now();
  const div = document.createElement("div");
  div.className = "msg jarvis-msg";
  div.innerHTML = `
    <div class="msg-avatar"><i class="fa-solid fa-atom"></i></div>
    <div class="msg-bubble" id="${id}"></div>`;
  c.appendChild(div);
  scrollBottom();
  return id;
}

function showTyping() {
  const id = "typing-" + Date.now();
  const c = jEl("jarvis-messages");
  const div = document.createElement("div");
  div.id = id;
  div.className = "jarvis-typing";
  div.innerHTML = `
    <div class="msg-avatar" style="width:28px;height:28px;border-radius:50%;background:radial-gradient(circle,#a5f3fc,#06b6d4);display:flex;align-items:center;justify-content:center;font-size:12px;color:#fff;">
      <i class="fa-solid fa-atom"></i></div>
    <div class="typing-dots"><span></span><span></span><span></span></div>
    <span style="font-size:11px;color:rgba(165,243,252,0.6);">thinking...</span>`;
  c.appendChild(div);
  scrollBottom();
  return id;
}

function removeTyping(id) { const el = jEl(id); if (el) el.remove(); }

function setLoading(v) {
  jarvisLoading = v;
  const btn = jEl("jarvis-send-btn");
  const bar = jEl("jarvis-loading-bar");
  const av = jEl("jarvis-avatar-el");
  if (btn) btn.disabled = v;
  if (bar) bar.style.display = v ? "block" : "none";
  if (av) av.classList.toggle("thinking", v);
}

function scrollBottom() {
  const c = jEl("jarvis-messages");
  if (c) setTimeout(() => { c.scrollTop = c.scrollHeight; }, 30);
}

function handleJarvisKey(e) {
  if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(); }
}

function autoResize(el) {
  el.style.height = "38px";
  el.style.height = Math.min(el.scrollHeight, 100) + "px";
}

// ── Toggle Panel ──────────────────────────────────────────────────
function toggleJarvis() {
  jarvisOpen = !jarvisOpen;
  const panel = jEl("jarvis-panel");
  const orb = jEl("jarvis-orb");
  panel.classList.toggle("open", jarvisOpen);
  orb.classList.toggle("active", jarvisOpen);
  if (jarvisOpen && jarvisSessionHistory.length === 0) {
    showWelcome();
    jEl("jarvis-input").focus();
  }
}

function showWelcome() {
  appendMsg("jarvis-msg", `Hey! 👋 I'm **JARVIS** — your friendly CISSP study buddy!

I've got all 8 CISSP domains loaded in my brain, ready to explain anything in simple terms — just like a good Indian tutor friend!

Here's what I can do:
• 💬 **Explain** any CISSP concept simply
• ⚠️ **Warn you** about common exam traps
• 🎯 **Manager Mode** — think like a CISO, not a techie
• 🧠 **Quiz Me** button — test yourself on any domain
• 🎤 **Voice input** — just speak your question!

Quick tip yaar: the CISSP exam always wants the **MANAGERIAL** answer, not the most technical one. Keep that in mind!

Toh bolo, kya seekhna hai aaj? 😄`);
}

// ── Send Message ──────────────────────────────────────────────────
async function sendMessage() {
  const input = jEl("jarvis-input");
  const text = input.value.trim();
  if (!text || jarvisLoading) return;
  input.value = "";
  input.style.height = "38px";

  appendMsg("user", text);
  jarvisSessionHistory.push({ role: "user", content: text });

  const typId = showTyping();
  setLoading(true);

  let fullReply = "";
  let bubbleId = null;

  try {
    const messages = [
      { role: "system", content: JARVIS_SYSTEM },
      ...jarvisSessionHistory.slice(-6),
      { role: "user", content: buildJarvisPrompt(text) }
    ];

    removeTyping(typId);
    bubbleId = createStreamBubble();
    const el = jEl(bubbleId);

    for await (const token of streamGroq(messages)) {
      fullReply += token;
      el.innerHTML = renderMarkdown(fullReply);
      scrollBottom();
    }

    jarvisSessionHistory.push({ role: "assistant", content: fullReply });
  } catch (e) {
    removeTyping(typId);
    appendMsg("jarvis-msg", `⚠️ **Error:** ${e.message}\n\nIf this keeps happening, check the browser console for details.`);
  }

  setLoading(false);
}

function sendQuick(text) {
  jEl("jarvis-input").value = text;
  sendMessage();
}

function clearChat() {
  jEl("jarvis-messages").innerHTML = "";
  jarvisSessionHistory = [];
  showWelcome();
}

function toggleManagerMode(checked) {
  jarvisManagerMode = checked;
  jEl("manager-toggle-label").classList.toggle("active", checked);
}

// ── Voice Input ───────────────────────────────────────────────────
function toggleVoice() {
  if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
    alert("Voice not supported. Please use Chrome or Edge browser.");
    return;
  }
  if (voiceListening) { if (voiceRecognition) voiceRecognition.stop(); return; }

  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  voiceRecognition = new SR();
  voiceRecognition.lang = "en-IN";
  voiceRecognition.continuous = false;
  voiceRecognition.interimResults = true;

  voiceRecognition.onstart = () => {
    voiceListening = true;
    jEl("jarvis-voice-btn").classList.add("listening");
    jEl("jarvis-mic-icon").className = "fa-solid fa-circle-stop";
    jEl("jarvis-input").placeholder = "🎤 Listening...";
  };
  voiceRecognition.onresult = (e) => {
    const t = Array.from(e.results).map(r => r[0].transcript).join("");
    jEl("jarvis-input").value = t;
    autoResize(jEl("jarvis-input"));
  };
  voiceRecognition.onend = () => {
    voiceListening = false;
    jEl("jarvis-voice-btn").classList.remove("listening");
    jEl("jarvis-mic-icon").className = "fa-solid fa-microphone";
    jEl("jarvis-input").placeholder = "Ask me anything about CISSP...";
    const t = jEl("jarvis-input").value.trim();
    if (t) sendMessage();
  };
  voiceRecognition.onerror = () => {
    voiceListening = false;
    jEl("jarvis-voice-btn").classList.remove("listening");
    jEl("jarvis-mic-icon").className = "fa-solid fa-microphone";
  };
  voiceRecognition.start();
}

// ── Quiz Mode ─────────────────────────────────────────────────────
async function startQuiz() {
  const domain = jEl("jarvis-domain-select").value || "Security and Risk Management";
  appendMsg("user", `🧠 Quiz me on: ${domain}`);
  const typId = showTyping();
  setLoading(true);

  try {
    const prompt = `Generate ONE CISSP-style multiple choice question about: "${domain}".
Output ONLY valid JSON, no markdown:
{"question":"...","options":{"A":"...","B":"...","C":"...","D":"..."},"correct":"A","explanation":"Simple 2-3 sentence explanation. Why other options are wrong.","tip":"One short memory tip."}`;

    const messages = [
      { role: "system", content: "You generate CISSP exam questions. Output valid JSON ONLY, no extra text." },
      { role: "user", content: prompt }
    ];

    const resp = await fetch(JARVIS_API_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages, max_tokens: 500, temperature: 0.85 })
    });

    const data = await resp.json();
    const raw = data.choices[0].message.content.trim();
    const match = raw.match(/\{[\s\S]*\}/);
    if (!match) throw new Error("No JSON in response");
    const quiz = JSON.parse(match[0]);

    removeTyping(typId);
    renderQuiz(quiz);
  } catch (e) {
    removeTyping(typId);
    appendMsg("jarvis-msg", `⚠️ Could not generate quiz: ${e.message}`);
  }
  setLoading(false);
}

function renderQuiz(quiz) {
  const c = jEl("jarvis-messages");
  const div = document.createElement("div");
  div.className = "msg jarvis-msg";
  const opts = Object.keys(quiz.options).map(k =>
    `<button class="quiz-option-btn" id="qopt-${k}"
      onclick="checkAnswer('${k}','${quiz.correct}','${encodeURIComponent(quiz.explanation)}','${encodeURIComponent(quiz.tip||'')}')">
      <strong>${k}.</strong> ${quiz.options[k]}</button>`
  ).join("");
  div.innerHTML = `
    <div class="msg-avatar"><i class="fa-solid fa-atom"></i></div>
    <div class="jarvis-quiz-card" style="max-width:88%">
      <div class="quiz-question">🧠 ${quiz.question}</div>
      <div class="quiz-options">${opts}</div>
      <div id="quiz-result"></div>
    </div>`;
  c.appendChild(div);
  scrollBottom();
}

function checkAnswer(sel, correct, expEnc, tipEnc) {
  ["A","B","C","D"].forEach(k => {
    const b = jEl(`qopt-${k}`);
    if (!b) return;
    b.disabled = true;
    if (k === correct) b.classList.add("correct");
    else if (k === sel) b.classList.add("wrong");
  });
  const exp = decodeURIComponent(expEnc);
  const tip = decodeURIComponent(tipEnc);
  jEl("quiz-result").innerHTML = `
    <div class="quiz-explanation">
      ${sel === correct ? "✅ <strong>Correct! Well done!</strong>" : `❌ <strong>Wrong! Correct: ${correct}</strong>`}<br><br>
      ${exp}${tip ? `<br><br>💡 <em>${tip}</em>` : ""}
    </div>
    <button class="quick-chip" style="margin-top:10px;" onclick="startQuiz()">Next Question →</button>`;
  scrollBottom();
}

// ── Build UI ──────────────────────────────────────────────────────
function buildJarvisUI() {
  // Arc Reactor Orb
  const orb = document.createElement("div");
  orb.id = "jarvis-orb";
  orb.title = "JARVIS — AI Study Mode";
  orb.innerHTML = `<div class="jarvis-orb-inner"><i class="fa-solid fa-atom"></i></div>`;
  orb.onclick = toggleJarvis;
  document.body.appendChild(orb);

  // Panel
  const panel = document.createElement("div");
  panel.id = "jarvis-panel";
  panel.innerHTML = `
    <div id="jarvis-loading-bar" class="jarvis-loading-bar" style="display:none;"></div>
    <div class="jarvis-header">
      <div class="jarvis-avatar" id="jarvis-avatar-el">
        <i class="fa-solid fa-atom"></i>
      </div>
      <div class="jarvis-header-info">
        <div class="jarvis-name">J.A.R.V.I.S</div>
        <div class="jarvis-status">
          <span class="jarvis-status-dot"></span>
          <span>Study Mode Active • Powered by Llama 3.3</span>
        </div>
      </div>
      <div class="jarvis-header-actions">
        <button class="jarvis-action-btn" title="Quiz Me!" onclick="startQuiz()">
          <i class="fa-solid fa-brain"></i>
        </button>
        <button class="jarvis-action-btn" title="Clear Chat" onclick="clearChat()">
          <i class="fa-solid fa-rotate-left"></i>
        </button>
        <button class="jarvis-action-btn" title="Close" onclick="toggleJarvis()">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
    </div>

    <div class="jarvis-controls">
      <select class="jarvis-domain-select" id="jarvis-domain-select" onchange="jarvisDomain=this.value">
        <option value="">All 8 Domains</option>
        <option value="Domain 1: Security and Risk Management">D1: Risk Management</option>
        <option value="Domain 2: Asset Security">D2: Asset Security</option>
        <option value="Domain 3: Security Architecture and Engineering">D3: Security Architecture</option>
        <option value="Domain 4: Communication and Network Security">D4: Network Security</option>
        <option value="Domain 5: Identity and Access Management">D5: IAM</option>
        <option value="Domain 6: Security Assessment and Testing">D6: Assessment & Testing</option>
        <option value="Domain 7: Security Operations">D7: Security Operations</option>
        <option value="Domain 8: Software Development Security">D8: Software Security</option>
      </select>
      <label class="manager-toggle" id="manager-toggle-label">
        <input type="checkbox" id="manager-mode-chk" onchange="toggleManagerMode(this.checked)">
        🎯 Manager Mode
      </label>
    </div>

    <div class="jarvis-messages" id="jarvis-messages"></div>

    <div class="jarvis-quick-chips">
      <span class="quick-chip" onclick="sendQuick('What is the CIA triad? Explain simply.')">CIA Triad</span>
      <span class="quick-chip" onclick="sendQuick('Difference between risk, threat, and vulnerability?')">Risk vs Threat</span>
      <span class="quick-chip" onclick="sendQuick('Explain least privilege vs need-to-know.')">Least Privilege</span>
      <span class="quick-chip" onclick="sendQuick('What is BCP vs DRP?')">BCP vs DRP</span>
      <span class="quick-chip" onclick="sendQuick('How should I think like a manager for CISSP exam?')">Think Manager 🎯</span>
    </div>

    <div class="jarvis-input-row">
      <button class="jarvis-voice-btn" id="jarvis-voice-btn" title="Voice Input" onclick="toggleVoice()">
        <i class="fa-solid fa-microphone" id="jarvis-mic-icon"></i>
      </button>
      <textarea id="jarvis-input" placeholder="Ask me anything about CISSP..." rows="1"
        onkeydown="handleJarvisKey(event)" oninput="autoResize(this)"></textarea>
      <button class="jarvis-send-btn" id="jarvis-send-btn" onclick="sendMessage()">
        <i class="fa-solid fa-paper-plane"></i>
      </button>
    </div>`;
  document.body.appendChild(panel);
}

// ── Init ──────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", buildJarvisUI);

// -- Init ----------------------------------------------------------
// (Updated: also init full-page tab)

// -------------------------------------------------------------------
// FULL-PAGE JARVIS TAB FUNCTIONS (targets #jarvis-fp-messages)
// -------------------------------------------------------------------

let fpLoading = false;
let fpVoiceListening = false;
let fpVoiceRec = null;

function fpEl(id) { return document.getElementById(id); }
function fpScrollBottom() {
  const c = fpEl("jarvis-fp-messages");
  if (c) setTimeout(() => { c.scrollTop = c.scrollHeight; }, 30);
}
function fpAppendMsg(role, text) {
  const c = fpEl("jarvis-fp-messages");
  if (!c) return;
  const isUser = role === "user";
  const div = document.createElement("div");
  div.className = `msg ${isUser ? "user" : "jarvis-msg"}`;
  div.innerHTML = `<div class="msg-avatar"><i class="fa-solid fa-${isUser ? "user" : "atom"}"></i></div><div class="msg-bubble">${renderMarkdown(text)}</div>`;
  c.appendChild(div);
  fpScrollBottom();
}
function fpCreateStreamBubble() {
  const c = fpEl("jarvis-fp-messages");
  const id = "fp-stream-" + Date.now();
  const div = document.createElement("div");
  div.className = "msg jarvis-msg";
  div.innerHTML = `<div class="msg-avatar"><i class="fa-solid fa-atom"></i></div><div class="msg-bubble" id="${id}"></div>`;
  c.appendChild(div); fpScrollBottom();
  return id;
}
function fpShowTyping() {
  const id = "fp-typing-" + Date.now();
  const c = fpEl("jarvis-fp-messages");
  if (!c) return id;
  const div = document.createElement("div");
  div.id = id; div.className = "jarvis-typing";
  div.innerHTML = `<div class="msg-avatar" style="width:36px;height:36px;border-radius:50%;background:radial-gradient(circle,#a5f3fc,#06b6d4);display:flex;align-items:center;justify-content:center;font-size:15px;color:#fff;"><i class="fa-solid fa-atom"></i></div><div class="typing-dots"><span></span><span></span><span></span></div><span style="font-size:12px;color:rgba(165,243,252,0.6);">JARVIS is thinking...</span>`;
  c.appendChild(div); fpScrollBottom();
  return id;
}
function fpRemoveTyping(id) { const el = fpEl(id); if (el) el.remove(); }
function fpSetLoading(v) { fpLoading = v; const btn = fpEl("jarvis-fp-send-btn"); if (btn) btn.disabled = v; }
function fpShowWelcome() {
  setTimeout(() => {
    const c = fpEl("jarvis-fp-messages");
    if (!c || c.children.length > 0) return;
    fpAppendMsg("jarvis-msg", `Hey! ?? Welcome to **JARVIS** � your full-screen CISSP study companion!\n\nI have all **8 CISSP domains** loaded. Ask me anything, enable **?? Manager Mode** for CISO perspective, or hit **?? Quiz Me** to test yourself!\n\n**Pro tip yaar:** CISSP always wants the *managerial* answer, not the most technical one.\n\nToh shuru karte hain? ??`);
  }, 400);
}
function fpSend(text) {
  const input = fpEl("jarvis-fp-input");
  if (input) { input.value = text; fpResize(input); }
  fpSendMsg();
}
async function fpSendMsg() {
  const input = fpEl("jarvis-fp-input");
  if (!input) return;
  const text = input.value.trim();
  if (!text || fpLoading) return;
  input.value = ""; input.style.height = "46px";
  fpAppendMsg("user", text);
  jarvisSessionHistory.push({ role: "user", content: text });
  const typId = fpShowTyping();
  fpSetLoading(true);
  let fullReply = "";
  try {
    const messages = [{ role: "system", content: JARVIS_SYSTEM }, ...jarvisSessionHistory.slice(-8), { role: "user", content: buildJarvisPrompt(text) }];
    fpRemoveTyping(typId);
    const bubbleId = fpCreateStreamBubble();
    const el = fpEl(bubbleId);
    for await (const token of streamGroq(messages)) {
      fullReply += token;
      el.innerHTML = renderMarkdown(fullReply);
      fpScrollBottom();
    }
    jarvisSessionHistory.push({ role: "assistant", content: fullReply });
  } catch (e) {
    fpRemoveTyping(typId);
    fpAppendMsg("jarvis-msg", `?? **Error:** ${e.message}`);
  }
  fpSetLoading(false);
}
function fpClear() {
  const c = fpEl("jarvis-fp-messages");
  if (c) c.innerHTML = "";
  jarvisSessionHistory = [];
  fpShowWelcome();
}
async function fpQuiz() {
  const domainEl = fpEl("jarvis-fp-domain");
  const domain = domainEl ? domainEl.value || "Security and Risk Management" : "Security and Risk Management";
  fpAppendMsg("user", `?? Quiz me on: ${domain}`);
  const typId = fpShowTyping(); fpSetLoading(true);
  try {
    const prompt = `Generate ONE CISSP multiple choice question about: "${domain}". Output ONLY valid JSON:\n{"question":"...","options":{"A":"...","B":"...","C":"...","D":"..."},"correct":"A","explanation":"2-3 simple sentences.","tip":"One memory tip."}`;
    const resp = await fetch(JARVIS_API_ENDPOINT, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ messages: [{ role: "system", content: "Generate CISSP questions as JSON only." }, { role: "user", content: prompt }], max_tokens: 500, temperature: 0.85 }) });
    const data = await resp.json();
    const raw = (data.choices?.[0]?.message?.content || "").trim();
    const match = raw.match(/\{[\s\S]*\}/);
    if (!match) throw new Error("No JSON in response");
    fpRemoveTyping(typId);
    fpRenderQuiz(JSON.parse(match[0]));
  } catch (e) { fpRemoveTyping(typId); fpAppendMsg("jarvis-msg", `?? Quiz failed: ${e.message}`); }
  fpSetLoading(false);
}
function fpRenderQuiz(quiz) {
  const c = fpEl("jarvis-fp-messages"); if (!c) return;
  const uid = "fp-q-" + Date.now();
  const div = document.createElement("div"); div.className = "msg jarvis-msg";
  const opts = Object.keys(quiz.options).map(k => `<button class="quiz-option-btn" id="${uid}-${k}" onclick="fpCheckAnswer('${uid}','${k}','${quiz.correct}','${encodeURIComponent(quiz.explanation)}','${encodeURIComponent(quiz.tip||'')}')"><strong>${k}.</strong> ${quiz.options[k]}</button>`).join("");
  div.innerHTML = `<div class="msg-avatar"><i class="fa-solid fa-atom"></i></div><div class="jarvis-quiz-card" style="max-width:80%"><div class="quiz-question">?? ${quiz.question}</div><div class="quiz-options">${opts}</div><div id="${uid}-result"></div></div>`;
  c.appendChild(div); fpScrollBottom();
}
function fpCheckAnswer(uid, sel, correct, expEnc, tipEnc) {
  ["A","B","C","D"].forEach(k => { const b=fpEl(`${uid}-${k}`); if(!b) return; b.disabled=true; if(k===correct) b.classList.add("correct"); else if(k===sel) b.classList.add("wrong"); });
  const res = fpEl(`${uid}-result`);
  if (res) res.innerHTML = `<div class="quiz-explanation">${sel===correct?"? <strong>Correct!</strong>":"? <strong>Wrong! Correct: "+correct+"</strong>"}<br><br>${decodeURIComponent(expEnc)}${decodeURIComponent(tipEnc)?`<br><br>?? <em>${decodeURIComponent(tipEnc)}</em>`:""}</div><button class="quick-chip" style="margin-top:12px;" onclick="fpQuiz()">Next ?</button>`;
  fpScrollBottom();
}
function handleFpKey(e) { if (e.key==="Enter" && !e.shiftKey) { e.preventDefault(); fpSendMsg(); } }
function fpResize(el) { el.style.height="46px"; el.style.height=Math.min(el.scrollHeight,140)+"px"; }
function fpVoice() {
  if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) { alert("Voice not supported. Use Chrome or Edge."); return; }
  if (fpVoiceListening) { if(fpVoiceRec) fpVoiceRec.stop(); return; }
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  fpVoiceRec = new SR(); fpVoiceRec.lang="en-IN"; fpVoiceRec.continuous=false; fpVoiceRec.interimResults=true;
  fpVoiceRec.onstart = () => { fpVoiceListening=true; const btn=fpEl("jarvis-fp-voice-btn"),ic=fpEl("jarvis-fp-mic-icon"); if(btn) btn.classList.add("listening"); if(ic) ic.className="fa-solid fa-circle-stop"; const inp=fpEl("jarvis-fp-input"); if(inp) inp.placeholder="?? Listening..."; };
  fpVoiceRec.onresult = (e) => { const t=Array.from(e.results).map(r=>r[0].transcript).join(""); const inp=fpEl("jarvis-fp-input"); if(inp){inp.value=t;fpResize(inp);} };
  fpVoiceRec.onend = () => { fpVoiceListening=false; const btn=fpEl("jarvis-fp-voice-btn"),ic=fpEl("jarvis-fp-mic-icon"); if(btn) btn.classList.remove("listening"); if(ic) ic.className="fa-solid fa-microphone"; const inp=fpEl("jarvis-fp-input"); if(inp){inp.placeholder="Ask JARVIS anything about CISSP..."; if(inp.value.trim()) fpSendMsg();} };
  fpVoiceRec.onerror = () => { fpVoiceListening=false; const btn=fpEl("jarvis-fp-voice-btn"),ic=fpEl("jarvis-fp-mic-icon"); if(btn) btn.classList.remove("listening"); if(ic) ic.className="fa-solid fa-microphone"; };
  fpVoiceRec.start();
}
// Also init fullpage welcome when the tab is first opened
document.addEventListener("DOMContentLoaded", fpShowWelcome);
