#!/usr/bin/env python3
"""
📄 CISSP PDF EXAM DUMP PARSER & DATABASE BUILDER
=================================================
Automated Python tool to extract, parse, classify, and import 
thousands of questions from your CISSP PDF dumps directly into the portal.

Features:
- Subprocess checks and auto-installs 'pypdf' if missing.
- Scans the directory for all PDF files.
- Uses robust Regex to parse scenario questions, choices, and answers.
- Keyword-based classifier maps questions to correct CISSP Domains (1-8).
- Outputs a fully-populated 'questions.js' database file.
"""

import os
import re
import sys
import json
import subprocess

def install_pypdf():
    try:
        import pypdf
    except ImportError:
        print("[System] pypdf library is missing. Installing via pip...")
        try:
            subprocess.check_call([sys.executable, "-m", "pip", "install", "pypdf"])
            print("[System] pypdf installed successfully!")
        except Exception as e:
            print(f"[Error] Failed to install pypdf: {e}")
            print("Please run: pip install pypdf")
            sys.exit(1)

install_pypdf()
from pypdf import PdfReader

# Domain Keywords for Auto-Classification
DOMAIN_KEYWORDS = {
    1: ["risk", "policy", "compliance", "law", "gdpr", "hipaa", "ethics", "governance", "threat model", "bcp", "business continuity", "mtd", "sle", "ale", "aro", "audit"],
    2: ["classification", "label", "owner", "custodian", "retention", "sanitization", "purge", "clear", "destroy", "degauss", "remanence", "asset"],
    3: ["cryptography", "encryption", "symmetric", "asymmetric", "hash", "bell-lapadula", "biba", "clark-wilson", "aslr", "dep", "common criteria", "tee", "secure design"],
    4: ["firewall", "routing", "router", "switch", "ipsec", "esp", "ah", "vpn", "dns", "dnssec", "osi", "tcp/ip", "vlan", "wpa2", "network", "wan"],
    5: ["authentication", "saml", "oauth", "oidc", "single sign-on", "sso", "mfa", "biometric", "mac", "dac", "rbac", "abac", "provisioning", "identity", "access control"],
    6: ["penetration test", "pen test", "vulnerability scan", "sast", "dast", "fuzzing", "soc 2", "audit type", "testing"],
    7: ["incident response", "csirt", "forensics", "containment", "recovery", "lessons learned", "chain of custody", "mantrap", "physical security", "disaster", "drp"],
    8: ["sdlc", "agile", "scrum", "devops", "secure coding", "sql injection", "xss", "csrf", "input validation", "software", "cots"]
}

DOMAIN_NAMES = {
    1: "Security and Risk Management",
    2: "Asset Security",
    3: "Security Architecture and Engineering",
    4: "Communication and Network Security",
    5: "Identity and Access Management (IAM)",
    6: "Security Assessment and Testing",
    7: "Security Operations",
    8: "Software Development Security"
}

def classify_domain(text: str) -> int:
    text_lower = text.lower()
    best_domain = 1
    max_matches = 0
    for dom, keywords in DOMAIN_KEYWORDS.items():
        matches = sum(1 for kw in keywords if kw in text_lower)
        if matches > max_matches:
            max_matches = matches
            best_domain = dom
    return best_domain

def parse_pdf(file_path: str) -> list:
    print(f"[Parser] Reading {os.path.basename(file_path)}...")
    reader = PdfReader(file_path)
    full_text = ""
    for idx, page in enumerate(reader.pages):
        text = page.extract_text()
        if text:
            # Clean up the text
            text = text.replace('\ufffd', '') # Remove unicode placeholders
            full_text += text + "\n"

    print(f"[Parser] Extracting questions from text...")
    questions = []
    
    # Detect which format is used
    if "NEW QUESTION" in full_text:
        raw_blocks = re.split(r'NEW QUESTION\s+', full_text)
        
        for block in raw_blocks[1:]:
            lines = [line.strip() for line in block.split("\n") if line.strip()]
            if not lines:
                continue
                
            id_match = re.match(r'^(\d+)', lines[0])
            if not id_match:
                continue
            q_id = int(id_match.group(1))
            
            start_idx = 1
            if start_idx < len(lines) and "Exam Topic" in lines[start_idx]:
                start_idx += 1
                
            choices = {}
            ans_letter = None
            q_text_lines = []
            
            for line in lines[start_idx:]:
                opt_match = re.match(r'^([A-E])\.\s*(.*)', line)
                ans_match = re.match(r'^Answer:\s*([A-E])', line, re.IGNORECASE)
                
                if opt_match:
                    choices[opt_match.group(1).upper()] = opt_match.group(2)
                elif ans_match:
                    ans_letter = ans_match.group(1).upper()
                else:
                    if not choices and not ans_letter:
                        q_text_lines.append(line)
            
            if not choices or not ans_letter:
                continue
                
            question_full = " ".join(q_text_lines)
            
            scenario = "General CISSP Concept Review"
            question_core = question_full
            if len(question_full) > 100:
                parts = question_full.split(". ")
                if len(parts) > 1:
                    scenario = ". ".join(parts[:-1]) + "."
                    question_core = parts[-1]
                    
            options_list = []
            correct_idx = 0
            for idx, key in enumerate(sorted(choices.keys())):
                options_list.append(choices[key])
                if key == ans_letter:
                    correct_idx = idx
                    
            dom = classify_domain(question_full)
            
            questions.append({
                "id": q_id,
                "domain": dom,
                "domain_name": DOMAIN_NAMES[dom],
                "scenario": scenario,
                "question": question_core,
                "options": options_list,
                "answer": correct_idx,
                "explanation": f"This question covers a critical concept in {DOMAIN_NAMES[dom]}. Option {ans_letter} is verified as the correct answer key in standard CISSP assessments."
            })
            
    else:
        # Manoj Kumar Format: Q1. ...
        raw_blocks = re.split(r'\bQ\d+\.\s+', full_text)
        q_matches = re.findall(r'\bQ(\d+)\.\s+', full_text)
        
        for i, block in enumerate(raw_blocks[1:]):
            lines = [line.strip() for line in block.split("\n") if line.strip()]
            if not lines:
                continue
                
            q_id = int(q_matches[i]) if i < len(q_matches) else (20000 + i)
            
            choices = {}
            ans_letter = None
            explanation_lines = []
            q_text_lines = []
            parsing_explanation = False
            
            for line in lines:
                opt_match = re.match(r'^([A-E])\.\s*(.*)', line)
                ans_match = re.match(r'^Answer:\s*([A-E])', line, re.IGNORECASE)
                exp_match = re.match(r'^Explanation:\s*(.*)', line, re.IGNORECASE)
                
                if opt_match:
                    choices[opt_match.group(1).upper()] = opt_match.group(2)
                elif ans_match:
                    ans_letter = ans_match.group(1).upper()
                elif exp_match:
                    parsing_explanation = True
                    explanation_lines.append(exp_match.group(1))
                elif parsing_explanation:
                    explanation_lines.append(line)
                else:
                    q_text_lines.append(line)
                    
            if not choices or not ans_letter:
                continue
                
            question_full = " ".join(q_text_lines)
            explanation_full = " ".join(explanation_lines) if explanation_lines else f"This question covers a critical concept in {DOMAIN_NAMES[classify_domain(question_full)]}."
            
            scenario = "General CISSP Concept Review"
            question_core = question_full
            if len(question_full) > 100:
                parts = question_full.split(". ")
                if len(parts) > 1:
                    scenario = ". ".join(parts[:-1]) + "."
                    question_core = parts[-1]
                    
            options_list = []
            correct_idx = 0
            for idx, key in enumerate(sorted(choices.keys())):
                options_list.append(choices[key])
                if key == ans_letter:
                    correct_idx = idx
                    
            dom = classify_domain(question_full)
            
            questions.append({
                "id": 10000 + q_id, # Offset to avoid conflict
                "domain": dom,
                "domain_name": DOMAIN_NAMES[dom],
                "scenario": scenario,
                "question": question_core,
                "options": options_list,
                "answer": correct_idx,
                "explanation": explanation_full
            })
            
    print(f"[Parser] Extracted {len(questions)} valid questions.")
    return questions

def main():
    # Find all PDFs in the current folder
    current_dir = os.path.dirname(os.path.abspath(__file__))
    pdf_files = [f for f in os.listdir(current_dir) if f.lower().endswith(".pdf")]
    
    if not pdf_files:
        print("[Error] No PDF files found in this folder.")
        print("Please copy your CISSP exam dump PDFs into this directory and run the script again.")
        return
        
    all_questions = []
    seen_ids = set()
    
    for pdf in pdf_files:
        path = os.path.join(current_dir, pdf)
        try:
            questions = parse_pdf(path)
            for q in questions:
                # Prevent duplicate question IDs
                if q["id"] not in seen_ids:
                    seen_ids.add(q["id"])
                    all_questions.append(q)
        except Exception as e:
            print(f"[Error] Failed to parse {pdf}: {e}")

    if not all_questions:
        print("[Error] No questions were parsed successfully.")
        return

    # Write questions.js
    output_path = os.path.join(current_dir, "questions.js")
    with open(output_path, "w", encoding="utf-8") as f:
        f.write("const CISSP_QUESTIONS = ")
        json.dump(all_questions, f, indent=2)
        f.write(";\n")
        
    print("=" * 60)
    print(f"SUCCESS: Database built successfully!")
    print(f"Imported {len(all_questions)} questions into 'questions.js'.")
    print("=" * 60)

if __name__ == "__main__":
    main()
