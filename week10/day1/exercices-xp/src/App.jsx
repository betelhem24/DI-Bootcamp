import { useState } from 'react';
import './App.css';

const EXERCISES = [
  {
    id: 1,
    title: 'LinkedIn Optimizer',
    scenario: 'Promoting focus app FlowNest on LinkedIn.',
    vague: 'Write something about productivity tips.',
    issues: [
      'No specific persona/role defined',
      'Missing target audience context',
      'No format or platform-specific constraints'
    ],
    optimized: `Act as a Senior Social Media Manager for FlowNest, a productivity startup. Write a professional and encouraging LinkedIn post to promote our new focus app, FlowNest. Provide 3 actionable productivity tips that show how FlowNest helps users stay focused. Use bullet points for the tips and keep the total length under 200 words. Use this format whenever we promote productivity tools on social media.`
  },
  {
    id: 2,
    title: 'Quiz Generator',
    scenario: 'Quiz about volcanic eruptions for 7th graders.',
    vague: 'Make a quiz for kids about this article.',
    optimized: `Act as an educational content creator for middle school science. Based on the provided article on volcanic eruptions, please:
1. Summarize the article in exactly 2 simple bullet points.
2. Generate 3 multiple-choice questions for 11–13-year-olds. Each must have 1 correct answer and 2 distractors.
3. Use a friendly tone and simple vocabulary.
4. Output everything in a format suitable for Google Slides (e.g., one slide for summary, one slide per question).`,
    comparison: [
      'Strict structure (2 bullets, 3 questions) prevents generic output.',
      'Explicit target age (11-13) ensures vocabulary alignment.',
      'Slide-ready format makes output immediately actionable.'
    ]
  },
  {
    id: 3,
    title: 'Finance Analyst',
    scenario: '3-minute executive update on a financial report.',
    vague: 'Summarize this report.',
    table: [
      { type: 'Role', missing: 'Yes', added: 'Act as a Financial Analyst.' },
      { type: 'Audience', missing: 'Yes', added: 'Non-technical executive team.' },
      { type: 'Purpose', missing: 'Yes', added: '3-minute summary for a presentation.' },
      { type: 'Format', missing: 'Yes', added: '3 key takeaways with supporting data.' },
    ],
    optimized: `Act as a financial analyst. Summarize the following report for a non-technical executive team for a 3-minute presentation. Limit the summary to the 3 most important key takeaways, ensuring each is backed by specific financial figures from the report. Avoid deep technical jargon.`
  },
  {
    id: 4,
    title: 'Functional Shop-Bot',
    scenario: 'Customer support json extraction.',
    style: 'Functional',
    optimized: `Summarize the following e-commerce support chat transcript into a JSON object with these keys: 'customer_name', 'order_id', 'issue', 'status'. Ensure the 'issue' description is maximum one sentence.`,
    features: [
      'Requesting structured JSON output.',
      'Focused on data transformation over conversation.'
    ]
  },
  {
    id: 5,
    title: 'Smartwatch Blurb',
    scenario: 'PulseOne Mini email campaign.',
    constraints: [
      'Friendly tone',
      'Bullet points',
      'Max 50 words',
      'Mention: Battery, Fitness, Bluetooth'
    ],
    optimized: `Act as a marketing copywriter. Write a product blurb for the 'PulseOne Mini' smartwatch.
- Tone: Friendly
- Format: Exactly 3 bullet points
- Content: Must mention battery life, fitness tracking, and Bluetooth compatibility
- Length: DO NOT exceed 50 words total.`
  },
  {
    id: 6,
    title: 'Hallucination Spotter',
    scenario: 'Peer-reviewed climate change article.',
    optimized: `Summarize the article on climate change and marine biodiversity. Use ONLY the information provided in the text. Do not include external stats or facts. If a requested detail isn't in the text, say 'Information not available in source'.`,
    strategies: [
      'Negative constraints (Do not include external stats).',
      'Groundedness (Only use claims explicitly stated).'
    ]
  }
];

function App() {
  const [activeTab, setActiveTab] = useState(1);
  const exercise = EXERCISES.find(e => e.id === activeTab);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert('Prompt copied!');
  };

  return (
    <div className="PromptLab">
      <header>
        <h1>AI Prompt Engineering Lab</h1>
        <p>Turning vague ideas into precise instructions</p>
      </header>

      <div className="tabs">
        {EXERCISES.map(e => (
          <button
            key={e.id}
            className={`tab-btn \${activeTab === e.id ? 'active' : ''}`}
            onClick={() => setActiveTab(e.id)}
          >
            Ex {e.id}: {e.title}
          </button>
        ))}
      </div>

      <main className="exercise-container">
        <h2>{exercise.title}</h2>
        <p><strong>Scenario:</strong> {exercise.scenario}</p>

        {exercise.vague && (
          <div className="vague-box">
            <strong>Vague Prompt:</strong>
            <code>"{exercise.vague}"</code>
          </div>
        )}

        {exercise.issues && (
          <div>
            <h3>Critical Issues:</h3>
            <ul className="issues-list">
              {exercise.issues.map((issue, i) => <li key={i}>{issue}</li>)}
            </ul>
          </div>
        )}

        {exercise.table && (
          <table>
            <thead>
              <tr>
                <th>Context Type</th>
                <th>Missing?</th>
                <th>What to Add</th>
              </tr>
            </thead>
            <tbody>
              {exercise.table.map((row, i) => (
                <tr key={i}>
                  <td>{row.type}</td>
                  <td>{row.missing}</td>
                  <td>{row.added}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        <div className="solution-box">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <strong>Engineered Prompt:</strong>
            <button className="copy-btn" onClick={() => copyToClipboard(exercise.optimized)}>Copy</button>
          </div>
          <code>{exercise.optimized}</code>
        </div>

        {exercise.comparison && (
          <div>
            <h3>Why it works better:</h3>
            <ul className="strategy-list">
              {exercise.comparison.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
        )}

        {exercise.features && (
          <div>
            <h3>Key Style Features:</h3>
            <ul className="strategy-list">
              {exercise.features.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
          </div>
        )}

        {exercise.strategies && (
          <div>
            <h3>Mitigation Strategies:</h3>
            <ul className="strategy-list">
              {exercise.strategies.map((s, i) => <li key={i}>{s}</li>)}
            </ul>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
