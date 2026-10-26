const projects = {
  zhenren: {
    index: "Project",
    title: "HistOracle",
    titleImage: "assets/type-images/historacle.png",
    description: "HistOracle is a digital strategy card game developed at Carnegie Mellon University's Entertainment Technology Center with the Carnegie Museum of Natural History. Inspired by the museum's 3,000-year-old Oracle Bones, it brings Shang Dynasty rituals and history to life through interactive storytelling. Players become royal diviners and make predictions that shape the kingdom's future in King Wu Ding's court.",
    descriptionZh: "HistOracle 是卡内基梅隆大学娱乐技术中心与卡内基自然历史博物馆合作开发的数字策略卡牌游戏。游戏以博物馆收藏的三千年历史甲骨为灵感，通过互动叙事呈现商朝的仪式与历史。玩家扮演王室占卜师，在武丁王朝中做出影响王国未来的预测。",
    website: "https://projects.etc.cmu.edu/historacle/",
    download: "https://github.com/AsagamiY/historacle-p1-build/releases/tag/v1.96-test"
  },
  "escape-march": {
    index: "BVW",
    title: "Escape March",
    titleImage: "assets/type-images/escape-march.png",
    description: "A single-player escape game inspired by The Shawshank Redemption, designed for the Xbox Adaptive Controller.",
    descriptionZh: "一款受《肖申克的救赎》启发、为 Xbox Adaptive Controller 设计的单人逃生游戏。",
    download: "https://github.com/AsagamiY/bvw-game-builds/releases/tag/r1-escape-march-v1.0",
    videoLink: "assets/escape-march-xac-demo.mp4",
    controls: {
      en: "Xbox Adaptive Controller (XAC): the intended play setup; click the linked controller name in the description above to watch the gameplay video.\nPC keyboard fallback: Space — start/restart; E — pick up the hammer; Q — strike the wall.",
      zh: "Xbox Adaptive Controller（XAC）：本游戏的目标游玩方式；点击上方简介中的控制器名称即可观看实机视频。\nPC 键盘替代操作：Space — 开始/重开；E — 拾取锤子；Q — 击打墙壁。"
    }
  },
  "big-top-quiz": {
    index: "BVW",
    title: "BigTopQuiz",
    titleImage: "assets/type-images/big-top-quiz.png",
    description: "A small game for a roller arcade console where players race on a unicycle while answering questions. Question difficulty changes dynamically based on the player's previous answers.",
    descriptionZh: "一款为滚轮街机 console 开发的独轮车竞速答题小游戏，题目难度会根据玩家之前的答题情况动态变化。",
    download: "https://github.com/AsagamiY/bvw-game-builds/releases/tag/r3-big-top-quiz-v1.0",
    controls: {
      en: "Title screen — press P, O, or I once to open Instructions.\nInstructions — press P, O, or I again to load MainGame.\nMainGame tutorial — press E to close the tutorial and begin riding.\nRiding — move the mouse up to accelerate, down to slow down, and left/right to steer.\nQuiz — press P for A, O for B, or I for C.\nQuit — press Esc or Alt+F4.",
      zh: "标题界面 — 按一次 P、O 或 I 打开操作说明。\n操作说明界面 — 再按一次 P、O 或 I 加载 MainGame。\nMainGame 教学 — 按 E 关闭教学并开始骑行。\n骑行 — 鼠标上移加速、下移减速、左/右移动转向。\n答题 — 按 P 选择 A、按 O 选择 B、按 I 选择 C。\n退出 — 按 Esc 或 Alt+F4。"
    }
  },
  "dumpling-samurai": {
    index: "BVW",
    title: "Dumpling Samurai",
    titleImage: "assets/type-images/dumpling-samurai.png",
    description: "Dumpling Samurai is the project name; the supplied V1.6 build and promotional art use the title OverStuffed!. It is a four-player competitive game designed for Jam-O-Drum. Players are dumplings seeking more fillings, collecting them and battling one another to win.",
    descriptionZh: "项目名称为 Dumpling Samurai；随附的 V1.6 版本与宣传图使用 OverStuffed! 标题。这是一款为 Jam-O-Drum 设计的四人对战游戏。玩家扮演希望获得更多馅料的饺子，通过收集和对战互相争夺馅料。",
    tagline: {
      en: "Sing, dance, and fight over the fillings!",
      zh: "歌唱、舞蹈、互相争夺吧！"
    },
    controls: {
      en: "Drum 1 — hold A to rotate left; hold D to rotate right; tap S to hit.\nDrum 2 — hold Numpad 7 to rotate left; hold Numpad 9 to rotate right; tap Numpad 8 to hit.\nDrum 3 — hold Numpad 4 to rotate left; hold Numpad 6 to rotate right; tap Numpad 5 to hit.\nDrum 4 — hold Numpad 1 to rotate left; hold Numpad 3 to rotate right; tap Numpad 2 to hit.",
      zh: "鼓 1 — 按住 A 左转；按住 D 右转；点按 S 击打。\n鼓 2 — 按住小键盘 7 左转；按住小键盘 9 右转；点按小键盘 8 击打。\n鼓 3 — 按住小键盘 4 左转；按住小键盘 6 右转；点按小键盘 5 击打。\n鼓 4 — 按住小键盘 1 左转；按住小键盘 3 右转；点按小键盘 2 击打。"
    },
    website: "https://www.jamodrum.net/",
    trailer: "assets/dumpling-samurai-gameplay-web.mp4",
    notice: {
      en: "A device pairing issue can cause sensitivity problems with keyboard and numpad input. The current build is not recommended for play while this is being fixed. Watch the gameplay video below; the download link is temporarily removed.",
      zh: "设备配对问题可能导致键盘和小键盘输入灵敏度异常。问题修复前不建议游玩当前版本。请先观看下方实机演示；下载入口暂时移除。"
    }
  }
};

const dialog = document.querySelector(".project-dialog");
const loadingLayer = document.querySelector(".loading-layer");

function hideLoadingLayer() {
  const delay = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 180;
  window.setTimeout(() => loadingLayer?.classList.add("is-loaded"), delay);
}

if (document.readyState === "complete") hideLoadingLayer();
else window.addEventListener("load", hideLoadingLayer, { once: true });

if (dialog) {
  document.querySelectorAll(".work-card").forEach((card) => {
    card.querySelector(".card-open").addEventListener("click", () => {
      const project = projects[card.dataset.project];
      dialog.querySelector(".dialog-index").textContent = project.index;
      const dialogTitle = dialog.querySelector("#dialog-title");
      dialogTitle.setAttribute("aria-label", project.title);
      dialogTitle.querySelector(".dialog-title-image").src = project.titleImage;
      setDescription(dialog.querySelector(".dialog-description"), project.description, project.videoLink);
      const chineseDescription = dialog.querySelector(".dialog-description-zh");
      setDescription(chineseDescription, project.descriptionZh || "", project.videoLink);
      chineseDescription.hidden = !project.descriptionZh;
      const controls = dialog.querySelector(".project-controls");
      controls.hidden = !project.controls;
      if (project.controls) {
        controls.querySelector(".controls-en").textContent = project.controls.en;
        controls.querySelector(".controls-zh").textContent = project.controls.zh;
      }
      const tagline = dialog.querySelector(".project-tagline");
      tagline.hidden = !project.tagline;
      if (project.tagline) {
        tagline.querySelector(".tagline-en").textContent = project.tagline.en;
        tagline.querySelector(".tagline-zh").textContent = project.tagline.zh;
      }
      const projectLink = dialog.querySelector(".project-link");
      if (project.website) {
        projectLink.href = project.website;
        projectLink.hidden = false;
      } else {
        projectLink.hidden = true;
      }
      const projectTrailerLink = dialog.querySelector(".project-trailer-link");
      if (project.trailer) {
        projectTrailerLink.href = project.trailer;
        projectTrailerLink.hidden = false;
      } else {
        projectTrailerLink.hidden = true;
      }
      const downloadLink = dialog.querySelector(".project-download-link");
      if (project.download) {
        downloadLink.href = project.download;
        downloadLink.hidden = false;
      } else {
        downloadLink.hidden = true;
      }
      const projectNotice = dialog.querySelector(".project-notice");
      projectNotice.hidden = !project.notice;
      if (project.notice) {
        projectNotice.querySelector(".notice-en").textContent = project.notice.en;
        projectNotice.querySelector(".notice-zh").textContent = project.notice.zh;
      }
      dialog.showModal();
    });
  });

  dialog.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
}

function setDescription(element, text, videoLink) {
  element.replaceChildren();
  const phrase = "Xbox Adaptive Controller";
  const index = videoLink ? text.indexOf(phrase) : -1;
  if (index < 0) {
    element.textContent = text;
    return;
  }
  element.append(document.createTextNode(text.slice(0, index)));
  const link = document.createElement("a");
  link.className = "inline-media-link";
  link.href = videoLink;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.textContent = phrase;
  link.setAttribute("aria-label", phrase + " — watch Escape March XAC gameplay video");
  element.append(link, document.createTextNode(text.slice(index + phrase.length)));
}

// Original canvas-generated grain texture for the portfolio background.
function initNoise() {
  const canvas = document.querySelector(".noise-canvas");
  const context = canvas?.getContext("2d", { alpha: true });
  if (!canvas || !context) return;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let imageData;
  let animationTimer = 0;
  const drawNoise = () => {
    if (!imageData) return;
    const pixels = imageData.data;
    for (let i = 0; i < pixels.length; i += 4) {
      const visible = Math.random() < 0.1;
      const shade = visible ? 145 + Math.floor(Math.random() * 111) : 0;
      pixels[i] = shade;
      pixels[i + 1] = shade;
      pixels[i + 2] = shade;
      pixels[i + 3] = visible ? 220 : 0;
    }
    context.putImageData(imageData, 0, 0);
  };
  const resize = () => {
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.2);
    canvas.width = Math.max(1, Math.ceil(window.innerWidth * pixelRatio));
    canvas.height = Math.max(1, Math.ceil(window.innerHeight * pixelRatio));
    imageData = context.createImageData(canvas.width, canvas.height);
    drawNoise();
  };
  const start = () => {
    if (animationTimer || reducedMotion) return;
    const tick = () => {
      if (document.hidden) return;
      drawNoise();
      animationTimer = window.setTimeout(tick, 100);
    };
    tick();
  };
  const stop = () => {
    window.clearTimeout(animationTimer);
    animationTimer = 0;
  };
  window.addEventListener("resize", resize, { passive: true });
  document.addEventListener("visibilitychange", () => document.hidden ? stop() : start());
  resize();
  if (!reducedMotion) start();
}

initNoise();
