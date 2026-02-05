# Exercises XP: Prompt Engineering Solutions

## 🌟 Exercise 1: Rewrite and Optimize a Vague Prompt

**Vague Prompt:** “Write something about productivity tips.”

### 1. Identify 3 critical issues:
- **No Role/Persona:** It doesn't specify who is writing (e.g., an expert, a peer).
- **No Target Audience:** It doesn't define who the tips are for (e.g., students, executives).
- **No Context/Platform focus:** It doesn't mention the brand (FlowNest) or the platform (LinkedIn).

### 2. Rewritten Prompt:
"Act as a Senior Social Media Manager for FlowNest, a productivity startup. Write a professional and encouraging LinkedIn post to promote our new focus app, FlowNest. Provide 3 actionable productivity tips that show how FlowNest helps users stay focused. Use bullet points for the tips and keep the total length under 200 words. Use this format whenever we promote productivity tools on social media."

---

## 🌟 Exercise 2: Multi-Part Prompt for Quiz Generation

### 1. Complete Prompt:
"Act as an educational content creator for middle school science. Based on the provided article on volcanic eruptions, please:
1. Summarize the article in exactly 2 simple bullet points.
2. Generate 3 multiple-choice questions for 11–13-year-olds. Each must have 1 correct answer and 2 distractors.
3. Use a friendly tone and simple vocabulary.
4. Format the output clearly for use in Google Slides (e.g., one slide for summary, one slide per question).

Article: [Insert Article Here]"

### 2. Comparison to vague one:
- **Output Control:** Specifying 2 bullet points and 3 questions prevents the AI from being too brief or too verbose.
- **Tone/Age Alignment:** Explicitly mentioning "11-13-year-olds" ensures the complexity is appropriate.
- **Utility:** The Slide-ready format makes the output immediately useful for the teacher, unlike a generic "quiz".

---

## 🌟 Exercise 3: Add Context, Get Better Results

### 1. Context Table:

| Context Type | Is it Missing? | What Should Be Added? |
| :--- | :--- | :--- |
| Role | Yes | Act as a Financial Analyst. |
| Audience | Yes | Non-technical executive team. |
| Purpose | Yes | 3-minute summary for a monthly update presentation. |
| Input Source | No | (The report provided). |
| Format/Style | Yes | 3 key takeaways with supporting data. |
| Constraints | Yes | Limit to 3 takeaways, suitable for a 3-minute talk. |

### 2. Rewritten Prompt:
"Act as a financial analyst. Summarize the following report for a non-technical executive team for a 3-minute presentation. Limit the summary to the 3 most important key takeaways, ensuring each is backed by specific financial figures from the report. Avoid deep technical jargon."

---

## 🌟 Exercise 4: Match Prompt to Purpose

### 1. Selected Style: Functional

### 2. Prompt:
"Summarize the following e-commerce support chat transcript into a JSON object with these keys: 'customer_name', 'order_id', 'issue', 'status'. Ensure the 'issue' description is maximum one sentence.

Transcript: [Insert Transcript]"

### 3. Key features:
- **Format Precision:** Requesting JSON is a hallmark of functional prompting.
- **Task Specificity:** It focuses on transforming unstructured data into a specific structure.

### 4. Justification:
Functional style is best here because the goal is data extraction for a database or dashboard, where consistency and structure are more important than creative flair.

---

## 🌟 Exercise 5: Prompt Refinement Challenge

### 1. Prompt:
"Act as a marketing copywriter. Write a product blurb for the 'PulseOne Mini' smartwatch.
- Tone: Friendly
- Format: Exactly 3 bullet points
- Content: Must mention battery life, fitness tracking, and Bluetooth compatibility
- Length: DO NOT exceed 50 words total."

### 2. Evaluation (Mental Run):
- **Stuck to word count?** Likely yes, with strict constraint.
- **All features mentioned?** Yes, bullets force them.
- **Friendly tone?** Yes, if the model follows the persona.

---

## 🌟 Exercise 6: Hallucination Spotting and Mitigation

### 1. Precision Prompt:
"Summarize the article on climate change and marine biodiversity. Use ONLY the information provided in the text. Do not include external stats or facts. If a requested detail isn't in the text, say 'Information not available in source'."

### 2. Rewrite with Verification:
"Summarize the article below. Only include claims explicitly stated in the text. If uncertain about a fact, state that it is not available. Verification step: List the line number or section from the article for each key claim."

### 3. Mitigation Strategies:
- **Negative Constraints:** Explicitly telling the model "Do not include external stats".
- **Groundedness:** Requiring the model to source its information directly from the text.

### 4. Risks in Professional Domains:
- **Legal:** Hallucinated case law could lead to losing a case or legal malpractice.
- **Healthcare:** Hallucinated dosage or drug interactions could be fatal for a patient.
