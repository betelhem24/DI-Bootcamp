import { useState } from 'react';
import './App.css';

const DEFAULT_TEXT = 'Employees must ensure that all remote access to internal systems is established via the approved secure VPN. Under no circumstances should unsecured connections or personal devices lacking endpoint protection be used to access proprietary data or sensitive communications.';

const GOALS = [
  { id: 'newsletter', label: 'Newsletter Snippet', title: 'Internal Newsletter' },
  { id: 'intern', label: 'Junior Intern Mentor', title: 'Intern Onboarding' },
  { id: 'quote', label: 'Quote Extraction', title: 'Official Quote' }
];

function App() {
  const [inputText, setInputText] = useState(DEFAULT_TEXT);
  const [selectedGoal, setSelectedGoal] = useState('newsletter');
  const [hallucinationControl, setHallucinationControl] = useState(true);

  const generatePrompt = () => {
    let prompt = '';
    const hcInstruction = hallucinationControl
      ? "\\n- STRICT CONSTRAINT: Base your rewrite ONLY on the provided input text. Do not add new security recommendations or technologies."
      : "";

    switch (selectedGoal) {
      case 'newsletter':
        prompt = `Act as a Communications Specialist. Rewrite the following policy excerpt for our internal newsletter using a friendly and clear tone.\\n- Use bullet points.\\n- Paraphrase the original; no direct quotes.\\n- Word count: Under 75 words.\${hcInstruction}\\n\\nInput: "\${inputText}"`;
        break;
      case 'intern':
        prompt = `Act as a mentor to a junior intern. Explain the following policy in simple language for onboarding.\\n- No corporate jargon (e.g. "endpoint protection").\\n- Max 4 bullet points.\\n- Tone: Supportive and informative.\${hcInstruction}\\n\\nPolicy: "\${inputText}"`;
        break;
      case 'quote':
        prompt = `Extract one direct quote from the text below that most effectively captures the core requirement regarding remote access security.\\n\\nText: "\${inputText}"`;
        break;
      default:
        break;
    }
    return prompt;
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatePrompt());
    alert('Precision prompt copied!');
  };

  return (
    <div className="PrecisionTool">
      <header>
        <h1>Precision Prompting Tool</h1>
        <p>Control Tone, Format, and Accuracy with Surgical Precision</p>
      </header>

      <section className="input-section">
        <label><strong>Source Policy Text:</strong></label>
        <textarea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Paste policy text here..."
        />
      </section>

      <section className="input-section">
        <label><strong>Select Optimization Goal:</strong></label>
        <div className="controls">
          {GOALS.map(goal => (
            <button
              key={goal.id}
              className={`control-btn \${selectedGoal === goal.id ? 'active' : ''}`}
              onClick={() => setSelectedGoal(goal.id)}
            >
              {goal.label}
            </button>
          ))}
        </div>

        <div className="toggle-container">
          <input
            type="checkbox"
            id="hc"
            checked={hallucinationControl}
            onChange={(e) => setHallucinationControl(e.target.checked)}
          />
          <label htmlFor="hc">
            <strong>Enable Strict Hallucination Mitigation</strong>
          </label>
        </div>
      </section>

      <section className="output-section">
        <div className="output-header">
          <strong>Generated Precision Prompt:</strong>
          <button className="copy-btn" onClick={copyToClipboard}>Copy Prompt</button>
        </div>
        <div className="prompt-area">
          {generatePrompt()}
        </div>
        <div className="meta-info">
          <span>Target: {GOALS.find(g => g.id === selectedGoal).title}</span>
          <span>Constraints: {selectedGoal === 'quote' ? 'Extraction' : 'Paraphrasing'}</span>
        </div>
      </section>
    </div>
  );
}

export default App;
