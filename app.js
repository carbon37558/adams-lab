const projects = [
  {
    id: "hess-flipper",
    name: "Hess Flipper",
    description: "Flip, scale and cancel equations until the Hess cycle works.",
    descriptionZh: "把 Hess 定律做成一个翻转、倍乘、消去反应式的小游戏。",
    action: "Play Hess Flipper",
    url: "https://hess-flipper.pages.dev/",
    preview: "hess",
    size: "project--hess",
  },
  {
    id: "exam-recall-trainer",
    name: "Exam Recall Trainer",
    description: "Recall the words that earn the marks.",
    descriptionZh: "把得分点做成“地毯式抽背”，看看你到底有没有真的记住。",
    action: "Start recalling",
    url: "https://igcse-exam-recall-trainer.pages.dev/",
    preview: "recall",
    size: "project--recall",
  },
  {
    id: "exam-semantic-decoder",
    name: "Exam Semantic Decoder",
    description: "When every word makes sense, but the question doesn't.",
    descriptionZh: "每个词都看得懂，但连起来不知道题目在问什么？把关键词和表达拆开，看看它真正要你做什么。",
    action: "Decode a question",
    url: "https://exam-semantic-decoder.pages.dev/",
    preview: "decoder",
    size: "project--decoder",
  },
  {
    id: "bonding-triangle-visualizer",
    name: "Bonding Triangle Visualizer",
    description: "Bonds don't always fit neatly into one box. Put them on the triangle and see where they land.",
    descriptionZh: "化学键不总能乖乖塞进一个分类里，放进三角形里看看它更靠近哪边。",
    action: "Plot a bond",
    url: "https://bonding-triangle-visualizer.pages.dev/",
    preview: "bonding",
    size: "project--bonding",
  },
  {
    id: "redox-workbench",
    name: "Redox Workbench",
    description: "Redox is easier when you stop trying to balance everything at once.",
    descriptionZh: "氧化还原没必要一口气全配平，拆成步骤会清楚很多。",
    action: "Open Redox Workbench",
    url: "https://redox-workbench.pages.dev/",
    preview: "redox",
    size: "project--redox",
  },
  {
    id: "integration-strategy-trainer",
    name: "Integration Strategy Trainer",
    description: "Choose the best first move before you start integrating.",
    descriptionZh: "先别急着积分，先判断这道题第一步该用什么方法。",
    action: "Choose a strategy",
    url: "https://integration-strategy-trainer.pages.dev/",
    preview: "integration",
    size: "project--integration",
  },
  {
    id: "series-strategy-trainer",
    name: "Series Strategy Trainer",
    description: "Learn to spot the best first convergence test.",
    descriptionZh: "先别急着套判别法，先判断这个级数第一步该试什么。",
    action: "Choose a test",
    url: "https://series-strategy-trainer.pages.dev/",
    preview: "series",
    size: "project--series",
  },
  {
    id: "master-class-english-communication-taskbook",
    name: "Master Class – English Communication Taskbook",
    displayName: "Master Class",
    description: "Structured speaking tasks for learners to practise and teachers to use straight away.",
    descriptionZh: "把公众演说拆成一组可以直接练、直接教的英语沟通任务。",
    action: "Explore tasks",
    url: "https://master-class-english-communication-taskbook.pages.dev/",
    preview: "master",
    size: "project--master",
  },
];

const featuredToolId = "hess-flipper";
const featuredVideoId = "parable-parabola";

const videos = [
  {
    id: "parable-parabola",
    title: "从《史丹利的寓言》到抛物线：为什么 Parable 和 Parabola 这么像？",
    bvid: "BV1nYhb6wEsj",
    embedUrl: "https://player.bilibili.com/player.html?isOutside=true&aid=117320873675771&bvid=BV1nYhb6wEsj&cid=42133225516&p=1",
    thumbnail: "/public/videos/parable-parabola.jpg",
    descriptionZh: "为什么 parable（寓言）和 parabola（抛物线）长得这么像？从游戏、文学和修辞一路追到古希腊数学，看看 ellipse、parabola 和 hyperbola 的名字最初到底在说什么。",
    descriptionEn: "Why do parable and parabola look so alike? Follow the trail from games, literature and rhetoric to ancient Greek mathematics—and the original meaning behind the names of the conic sections.",
    featured: true,
    featuredDescriptionZh: "从 parable 到 parabola，一条从语言通向古希腊圆锥曲线的词源兔子洞。",
    featuredDescriptionEn: "From parable to parabola: an etymological rabbit hole leading all the way to ancient Greek conic sections.",
  },
  {
    id: "vector-mosquito",
    title: "为什么向量和蚊子都叫 Vector?",
    bvid: "BV1gde46JEaQ",
    embedUrl: "https://player.bilibili.com/player.html?isOutside=true&aid=117296043459619&bvid=BV1gde46JEaQ&cid=42027781096&p=1",
    thumbnail: "/public/videos/vector-mosquito.jpg",
    descriptionZh: "数学里的向量和传播疟疾的蚊子，为什么都叫 vector？从拉丁语、生物学一路追到几何和计算机图形学，看看这些看似无关的 vector 为什么一直共享着同一个核心：把某样东西从这里带到那里。",
    descriptionEn: "Why are mathematical vectors and disease-carrying mosquitoes both called vectors? Follow the word from Latin and biology to geometry and computer graphics, where the same idea keeps resurfacing: carrying something from here to there.",
    featured: false,
  },
  {
    id: "mole-in-100-seconds",
    title: "100秒内弄明白摩尔是啥",
    bvid: "BV1CqYi6bE6L",
    embedUrl: "https://player.bilibili.com/player.html?isOutside=true&aid=117264049243926&bvid=BV1CqYi6bE6L&cid=41861975110&p=1",
    thumbnail: "/public/videos/mole-in-100-seconds.jpg",
    descriptionZh: "质量、溶液体积、气体体积和粒子个数看起来完全不是一回事，为什么化学里却总能先换成 mol？100 秒弄明白摩尔为什么能把这些数量统一到同一套计算里。",
    descriptionEn: "Mass, solution volume, gas volume and particle count seem like completely different quantities—so why does chemistry keep converting everything to moles? A 100-second explanation of why the mole makes stoichiometry work.",
    featured: false,
  },
  {
    id: "elements-named-after-places",
    title: "100秒内了解地点命名的化学元素",
    bvid: "BV1t7YX67Erx",
    embedUrl: "https://player.bilibili.com/player.html?isOutside=true&aid=117257724298710&bvid=BV1t7YX67Erx&cid=41825993855&p=1",
    thumbnail: "/public/videos/elements-named-after-places.jpg",
    descriptionZh: "元素周期表其实也藏着一张世界地图。国家、城市、地区，甚至只有几百人的小村庄，都曾经成为元素名字的来源。100 秒看看这些藏在元素周期表里的地名。",
    descriptionEn: "The periodic table is also a map of the world. Countries, cities, regions—and even a tiny village—have all lent their names to chemical elements. A 100-second tour of the places hidden in the periodic table.",
    featured: false,
  },
  {
    id: "sin-angle-sum-area-proof",
    title: "100秒内证明sin和角公式（面积法）",
    bvid: "BV1KnYX6LEdk",
    embedUrl: "https://player.bilibili.com/player.html?isOutside=true&aid=117257757788142&bvid=BV1KnYX6LEdk&cid=41826451558&p=1",
    thumbnail: "/public/videos/sin-angle-sum-area-proof.jpg",
    descriptionZh: "sin(α+β) 的公式为什么长这样？把一个三角形沿高拆开，用两种方式计算面积，100 秒看着和角公式自己出现。",
    descriptionEn: "Why does sin(α+β) have that form? Split a triangle along its altitude and calculate the area in two ways—the angle-sum identity appears almost by itself, in 100 seconds.",
    featured: false,
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
  integration: () => `
    <div class="integration-preview" aria-hidden="true">
      <div class="integration-preview__bar"><span>∫</span><b>INTEGRATION STRATEGY</b></div>
      <div class="integration-preview__body">
        <small>QUESTION 01</small><strong>∫ (x<sup>2</sup> + 3x) dx</strong><p>What would you try first?</p>
        <div><b>Direct integration</b><span>u-substitution</span><span>Integration by parts</span></div>
      </div>
    </div>`,
  series: () => `
    <div class="series-preview" aria-hidden="true">
      <div class="series-preview__panel"><small>✦ &nbsp; THE SERIES</small><strong>∑ <sup>∞</sup><sub>n = 1</sub> <i>sin n</i> / n</strong><p>Which test is the best first move?</p><div><b>nth term test</b><span>comparison</span><span>ratio test</span><span>alternating series</span></div></div>
    </div>`,
  master: () => `
    <div class="master-preview" aria-hidden="true">
      <div class="master-preview__heading"><b>Master Class</b><span>English Communication Taskbook</span></div>
      <div class="master-preview__modules"><i>Public<br />Speaking</i><i>Presentation</i><i>Business<br />English</i><i>Debate</i></div>
    </div>`,
};

function renderProject(project) {
  return `
    <a class="project ${project.size}" href="${project.url}" target="_blank" rel="noreferrer" aria-label="${project.action}: ${project.name}">
      <div class="preview preview--${project.preview}">${previews[project.preview]()}</div>
      <div class="project-copy">
        <h2>${project.displayName || project.name}</h2>
        <p>${project.description}</p>
        <p class="project-copy__zh" lang="zh-CN">${project.descriptionZh}</p>
        <span>${project.action} <b>→</b></span>
      </div>
    </a>`;
}

function renderVideo(video, featured = false) {
  const descriptionZh = featured ? video.featuredDescriptionZh : video.descriptionZh;
  const descriptionEn = featured ? video.featuredDescriptionEn : video.descriptionEn;
  return `
    <div class="video-card ${featured ? "video-card--featured" : ""}">
      ${featured ? '<p class="featured-label">Featured Video</p>' : ""}
      <div class="video-media" data-video-id="${video.id}">
        <button class="video-thumb" type="button" aria-label="Play ${video.title}">
          <img src="${video.thumbnail}" alt="" />
          <span aria-hidden="true">▶</span>
        </button>
      </div>
      <div class="video-copy">
        <h2>${video.title}</h2>
        <p lang="zh-CN">${descriptionZh}</p>
        <p>${descriptionEn}</p>
        ${featured ? '<div class="featured-links"><a href="/videos">See all videos →</a></div>' : ""}
      </div>
    </div>`;
}

const projectsContainer = document.querySelector("#projects");
if (projectsContainer) projectsContainer.innerHTML = projects.map(renderProject).join("");

const featuredTool = projects.find((project) => project.id === featuredToolId);
const featuredToolContainer = document.querySelector("#featured-tool");
if (featuredToolContainer && featuredTool) {
  featuredToolContainer.innerHTML = `
    <p class="featured-label">Featured Tool</p>
    <a class="featured-preview preview preview--${featuredTool.preview}" href="${featuredTool.url}" target="_blank" rel="noreferrer" aria-label="${featuredTool.action}: ${featuredTool.name}">${previews[featuredTool.preview]()}</a>
    <div class="project-copy featured-copy">
      <h2>${featuredTool.name}</h2>
      <p>${featuredTool.description}</p>
      <p class="project-copy__zh" lang="zh-CN">${featuredTool.descriptionZh}</p>
      <div class="featured-links"><a href="${featuredTool.url}" target="_blank" rel="noreferrer">${featuredTool.action} →</a><a href="/tools">See all tools →</a></div>
    </div>`;
}

const featuredVideo = videos.find((video) => video.id === featuredVideoId);
const featuredVideoContainer = document.querySelector("#featured-video");
if (featuredVideoContainer && featuredVideo) featuredVideoContainer.innerHTML = renderVideo(featuredVideo, true);

const videosContainer = document.querySelector("#videos");
if (videosContainer) videosContainer.innerHTML = videos.map((video) => renderVideo(video)).join("");

document.body.addEventListener("click", (event) => {
  const button = event.target.closest(".video-thumb");
  if (!button) return;

  const media = button.closest(".video-media");
  const video = videos.find((item) => item.id === media.dataset.videoId);
  if (!video) return;

  const player = document.createElement("iframe");
  player.src = video.embedUrl;
  player.title = video.title;
  player.allow = "autoplay; fullscreen; picture-in-picture";
  player.allowFullscreen = true;
  media.replaceChildren(player);
});

document.querySelector("#year").textContent = new Date().getFullYear();
