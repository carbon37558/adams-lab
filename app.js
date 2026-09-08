const projects = [
  {
    name: "Hess Flipper",
    description: "Flip, scale and cancel equations until the Hess cycle works.",
    action: "Play Hess Flipper",
    url: "https://hess-flipper.pages.dev/",
    preview: "hess",
    size: "project--hess",
  },
  {
    name: "Exam Recall Trainer",
    description: "Recall the words that earn the marks.",
    action: "Start recalling",
    url: "https://igcse-exam-recall-trainer.pages.dev/",
    preview: "recall",
    size: "project--recall",
  },
  {
    name: "Exam Semantic Decoder",
    description: "When every word makes sense, but the question doesn't.",
    action: "Decode a question",
    url: "https://exam-semantic-decoder.pages.dev/",
    preview: "decoder",
    size: "project--decoder",
  },
  {
    name: "Bonding Triangle Visualizer",
    description: "Bonds don't always fit neatly into one box. Put them on the triangle and see where they land.",
    action: "Plot a bond",
    url: "https://bonding-triangle-visualizer.pages.dev/",
    preview: "bonding",
    size: "project--bonding",
  },
  {
    name: "Redox Workbench",
    description: "Redox is easier when you stop trying to balance everything at once.",
    action: "Open Redox Workbench",
    url: "https://redox-workbench.pages.dev/",
    preview: "redox",
    size: "project--redox",
  },
];

const previews = {
  hess: () => `
    <div class="hess-preview" aria-hidden="true">
      <div class="hess-top"><span class="hf-mark">HF</span><span>HESS FLIPPER</span></div>
      <div class="hess-game">
        <div class="hess-copy"><span>HESS FLIPPER</span><strong>Flip. Scale.<br /><em>Make it cancel.</em></strong><small>FLIP&nbsp; → &nbsp;SCALE&nbsp; → &nbsp;ADD&nbsp; → &nbsp;CANCEL</small></div>
        <div class="hess-panel"><b>REACTION BOARD</b><p>2H<sub>2</sub> + O<sub>2</sub> → 2H<sub>2</sub>O</p><div><i>FLIP</i><i>SCALE ×2</i></div><button>TARGET MATCHED <span>→</span></button></div>
      </div>
    </div>`,
  recall: () => `
    <div class="recall-preview" aria-hidden="true">
      <div class="recall-bar"><span class="er-mark">ER</span><b>Exam Recall Trainer</b><small>CIE IGCSE CHEM</small></div>
      <div class="recall-body"><p>CAMBRIDGE IGCSE CHEMISTRY</p><strong>Recall the words<br />that earn the marks.</strong><div class="recall-question"><span>QUESTION 04</span><b>What is meant by<br />an ionic bond?</b><div class="recall-answer"><i>Marking points</i><em>electrostatic attraction</em><em>oppositely charged ions</em></div><div class="self-mark"><small>Self-mark</small><b>Perfect</b><b>Missing keywords</b></div></div></div>
    </div>`,
  decoder: () => `
    <div class="decoder-preview" aria-hidden="true">
      <div class="decoder-bar"><span class="es-mark">ES</span><b>Exam Semantic Decoder</b><small>Read the question. Activate the concept.</small></div>
      <div class="decoder-heading"><span>EXAM LANGUAGE, DECODED</span><b>See what the question is really asking.</b></div>
      <div class="decoder-workspace"><div class="question-copy"><small>EXAM QUESTION</small><p>Explain why <mark>magnesium oxide has a high melting point</mark>.</p><span>Tap a highlighted phrase to decode it.</span></div><div class="concept-panel"><small>CONCEPT PANEL&nbsp;&nbsp; 解码面板</small><b>High melting point</b><p>Strong electrostatic forces of attraction between oppositely charged ions.</p><em>What the examiner wants you to use</em></div></div>
    </div>`,
  bonding: () => `
    <div class="bonding-preview" aria-hidden="true">
      <div class="bonding-bar"><b>Bonding Triangle</b><small>Van Arkel–Ketelaar</small></div>
      <div class="bonding-body">
        <div class="bonding-controls"><span>ELEMENT A <b>Na</b></span><span>ELEMENT B <b>Cl</b></span><i>PLOT</i></div>
        <div class="bonding-chart"><span class="bonding-label bonding-label--ionic">IONIC</span><span class="bonding-label bonding-label--metallic">METALLIC</span><span class="bonding-label bonding-label--covalent">COVALENT</span><i class="bonding-point"></i><em>Δ electronegativity</em></div>
      </div>
    </div>`,
  redox: () => `
    <div class="redox-preview" aria-hidden="true">
      <div class="redox-panel">
        <div class="redox-step">STEP 1</div>
        <strong>Pair the species</strong>
        <p class="redox-reaction">MnO<sub>4</sub><sup>−</sup> + I<sup>−</sup> → Mn<sup>2+</sup> + I<sub>2</sub></p>
        <div class="redox-chips"><b>MnO<sub>4</sub><sup>−</sup></b><b>I<sup>−</sup></b><b>Mn<sup>2+</sup></b><b>I<sub>2</sub></b></div>
        <div class="redox-halves">
          <div class="redox-half"><strong>HALF-EQUATION 1</strong><span>REACTANTS</span><i>Drop here</i><em>→</em><span>PRODUCTS</span><i>Drop here</i></div>
          <div class="redox-half"><strong>HALF-EQUATION 2</strong><span>REACTANTS</span><i>Drop here</i><em>→</em><span>PRODUCTS</span><i>Drop here</i></div>
        </div>
      </div>
    </div>`,
};

document.querySelector("#projects").innerHTML = projects.map((project) => `
  <a class="project ${project.size}" href="${project.url}" target="_blank" rel="noreferrer" aria-label="${project.action}: ${project.name}">
    <div class="preview preview--${project.preview}">${previews[project.preview]()}</div>
    <div class="project-copy">
      <h2>${project.name}</h2>
      <p>${project.description}</p>
      <span>${project.action} <b>→</b></span>
    </div>
  </a>
`).join("");

document.querySelector("#year").textContent = new Date().getFullYear();
