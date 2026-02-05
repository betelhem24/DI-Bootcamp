Daily Challenge: Precision Prompting
Last Updated: October 7th, 2025

Daily Challenge: Precision Prompting for Control & Output Quality


👩‍🏫 👩🏿‍🏫 What You’ll learn
How to apply advanced prompting techniques to shape the tone, structure, and format of AI-generated content
How to constrain AI responses using word limits, sentence counts, and output formats
How to guide the model to paraphrase, quote, or summarize text with precision
How to evaluate and revise prompts for better results
How to detect and mitigate hallucinated or fabricated content


🛠️ What you will create
You’ll design, test, and refine a prompt that performs four different control tasks in a realistic content generation workflow. You’ll work through a full prompt development cycle:

Crafting a prompt with tone, structure, format, and length control
Evaluating the output for quality and accuracy
Mitigating hallucination risks
Enhancing clarity through quoting or paraphrasing techniques


What Will You Use
Concepts: advanced prompting (tone, structure, format, length), hallucination detection, paraphrasing vs. quoting
Techniques: role prompting, instruction-based prompting, output constraints, iterative evaluation & revision
Method: prompt development cycle (design → generate → evaluate → refine)
Model: Generative AI (e.g., ChatGPT/GPT-4, Gemini, DeepSeek, …)
Dataset: the provided policy paragraph on remote access security


Scenario
You work on the Learning & Communications Team at a global tech company. You’ve been asked to use generative AI to create employee-facing microlearning content for an internal newsletter.

Your task is to turn a paragraph from a recent internal policy update into a concise and clear knowledge snippet. The original policy text is overly formal, dense, and full of jargon.



Instructions


Step 1: Craft a Prompt That Controls Output Tone, Format, and Length
Using the following original text excerpt, write a prompt that:

Rewrites it in a friendly and clear tone
Uses bullet points to organize information
Paraphrases the original, avoiding direct quotations
Stays under 75 words total


Input Text:

Employees must ensure that all remote access to internal systems is established via the approved secure VPN. Under no circumstances should unsecured connections or personal devices lacking endpoint protection be used to access proprietary data or sensitive communications.



Step 2: Evaluate the Output
Once you’ve generated the response, review it using the following criteria:

Criteria	Guiding Questions
Relevance	Does the output stick to the message of the source content?
Clarity	Is the message easier to understand for non-technical staff?
Structure	Is the information formatted into clear bullet points?
Tone	Is the language appropriate for internal employee communication?
Length	Does it stay under 75 words?
Factual Accuracy	Did the model make up or remove any critical security details?


Step 3: Detect and Mitigate Hallucinations
If the model adds extra content (e.g., new policy terms, technologies not in the input), write a revised version of your original prompt that strictly limits the model to the input only.

For example, you might add:

“Only paraphrase the content in the input text. Do not add new recommendations or technologies.”



Step 4: Paraphrasing Deep Dive
Now write a second version of the prompt that paraphrases the policy paragraph for a junior intern audience, using plain language and short phrases.

Use no more than 4 bullet points
Avoid any corporate or legal jargon
Keep the tone supportive and informative


Step 5: Quote Extraction Variant
Sometimes, quoting is more effective than paraphrasing. Write a new prompt that extracts one direct quote from the original text that best captures the core security policy.

Then answer:

In what kind of internal communication would quoting be more appropriate than paraphrasing?
When might quoting pose a risk?
