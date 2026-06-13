---
title: "Lesson 1: Fundamentals of Security Concepts"
description: "CIA, security controls, IAM, roles, and security teams."
date: "2026-06-13"
readTime: "10 min read"
---

## Topic 1A: Security Foundations

Security is about protecting **data**, **systems**, and **people** from leaks, tampering, downtime, and misuse.

### CIA Triad

> EXAM TIP  
> Leaked = Confidentiality. Changed = Integrity. Down = Availability.

| Concept | Meaning | Easy Control |
| --- | --- | --- |
| Confidentiality | Keep it private | Encryption |
| Integrity | Keep it correct | Hashing |
| Availability | Keep it online | Backups |

### Non-Repudiation

Users cannot deny actions they performed.

> Example: A digital signature proves who approved a file.

### Framework Flow

* **Identify:** Know assets and risks.
* **Protect:** Add safeguards.
* **Detect:** Spot suspicious activity.
* **Respond:** Act during an incident.
* **Recover:** Restore normal operations.

### Gap Analysis

Compare **current security** vs **required security**.

> Example: MFA is required, but only passwords are used. Missing MFA is the gap.

### Access Control

Access control answers: **who can access what?**

* **Identification:** Claim identity. Example: username.
* **Authentication:** Prove identity. Example: password or OTP.
* **Authorization:** Get permissions. Example: admin vs user.
* **Accounting:** Track activity. Example: logs.

## Topic 1B: Security Controls and Roles

Security controls help maintain **CIA** and **non-repudiation**. Think of them as the practical tools, rules, and teams that keep security working.

### Control Categories

| Category | Meaning | Example |
| --- | --- | --- |
| Managerial | Oversight and planning | Risk identification |
| Operational | Done by people | Security guards |
| Technical | Done by systems | Firewalls, antivirus |
| Physical | Protect physical access | CCTV, locks |

### Control Functions

* **Preventive:** Stops or reduces attacks before they happen.
* **Detective:** Finds or records attacks while they happen.
* **Corrective:** Reduces impact after an attack.
* **Directive:** Tells people what rules to follow.
* **Deterrent:** Discourages attackers.
* **Compensating:** Gives alternate protection when the main control is not possible.

### Security Posture

Security posture = how strong an organization looks from a security point of view.

* **Policies:** Formal rules for security.
* **Implementation variation:** Different organizations apply rules differently.
* **Best practices:** Frameworks, controls, and employee awareness.

### Roles and Responsibilities

| Role | Quick Note |
| --- | --- |
| CIO | Owns information strategy |
| CTO | Owns technology direction |
| CSO | Owns security strategy |
| Managers | Enforce process and accountability |
| Technical staff | Implement controls, monitoring, and fixes |
| Non-technical staff | Follow policies and report issues |
| Directors / owners | Set business priorities and risk appetite |

### Core Security Skills

* Risk assessment and testing.
* Device and software management.
* Access control.
* Auditing and monitoring.
* Incident response.
* Business continuity and disaster recovery.
* Training and education.

### Security Business Units

* **SOC:** Monitors and responds to security events.
* **DevSecOps:** Adds security into every stage of application development.
* **Incident response teams:** CIRT, CSIRT, or CERT handle incident notifications and response.

## Lesson 1 Takeaways

> KEY TAKEAWAYS
> - CIA = private, correct, available.
> - Controls can be managerial, operational, technical, or physical.
> - Control functions explain when and how a control helps.
> - IAM = identify, authenticate, authorize, account.
> - Security is shared across leaders, technical teams, and normal users.

**Module Status:** Completed
