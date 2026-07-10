# AI--Nursing Explanation Layer Design

## Purpose

The explanation layer provides transparency for every AI-supported observation.

The system should not simply identify a concern.

It should explain:

- What was detected
- What information contributed to the finding
- Why it may matter
- What the nurse may want to consider reviewing

The nurse remains the final decision-maker.

---

# 1. Explanation Format

Each notification should contain:

## Finding

What changed?

Example:

"Respiratory status concern identified."

---

## Supporting Information

What data contributed?

Example:

- Oxygen requirement increased from 2L to 6L
- Oxygen saturation decreased from 96% to 92%
- Respiratory rate increased from 18 to 26

---

## Clinical Significance

Why may this matter?

Example:

"These changes may indicate increasing respiratory workload."

---

## Suggested Review

What should the nurse consider?

Example:

"Consider reassessing respiratory status and reviewing current interventions."

---

# 2. Explanation Example

Instead of:

"Patient deterioration risk."

The system displays:

"Patient may require increased attention because heart rate increased from 88 to 118 bpm, blood pressure decreased from 118/72 to 92/58 mmHg, and lactate increased from 1.8 to 4.0."

---

# 3. Confidence Display

Future versions may include:

Low confidence:
- Limited information available

Moderate confidence:
- Multiple related changes detected

High confidence:
- Multiple significant trends occurring together

Confidence should never replace clinical judgment.

---

# 4. Avoiding Automation Bias

The system should:

- Show reasoning
- Encourage verification
- Avoid telling the nurse what to do
- Allow dismissal or review

---

# 5. Future Development

The explanation layer may eventually connect with:

- Predictive timeliness engine
- Clinical timeline
- Patient avatar
- AI reasoning models

---

# Core Principle

The nurse should never have to ask:

"Why did the AI say that?"

The answer should always be visible.
