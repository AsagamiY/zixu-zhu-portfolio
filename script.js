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
    controls: {
      en: "Press Space to start, E to pick up the hammer, and Q to hit the wall.",
      zh: "按 Space 开始，按 E 拾取锤子，按 Q 击打墙壁。"
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
      en: "Start screen: Press P, O, or I; the first press opens the instructions and the next enters MainGame. In game, move the mouse forward to speed up, back to slow down, and left or right to steer. Press E to close the tutorial and start riding. Press P, O, or I to answer A, B, or C. Esc or Alt+F4 quits.",
      zh: "开始界面：按 P、O 或 I，第一次进入操作说明，再按一次进入 MainGame。游戏中，鼠标向前移动加速、向后移动减速、左右移动转向。按 E 关闭教学并开始骑行；按 P、O、I 分别选择 A、B、C。按 Esc 或 Alt+F4 退出。"
    }
  },
  "dumpling-samurai": {
    index: "BVW",
    title: "Dumpling Samurai",
    titleImage: "assets/type-images/dumpling-samurai.png",
    description: "A four-player competitive game designed for Jam-O-Drum. Players are dumplings seeking more fillings, collecting them and battling one another to win.",
    descriptionZh: "一款为 Jam-O-Drum 设计的四人对战游戏。玩家扮演希望获得更多馅料的饺子，通过收集和对战互相争夺馅料。",
    tagline: {
      en: "Sing, dance, and fight over the fillings!",
      zh: "歌唱、舞蹈、互相争夺吧！"
    },
    controls: {
      en: "Hold the spin key to rotate a drum and tap the hit key to strike. Drum 1: A/D/S; Drum 2: Numpad 7/9/8; Drum 3: Numpad 4/6/5; Drum 4: Numpad 1/3/2.",
      zh: "按住旋转键使鼓盘转动，点按击打键敲击。鼓 1：A/D/S；鼓 2：小键盘 7/9/8；鼓 3：小键盘 4/6/5；鼓 4：小键盘 1/3/2。"
    },
    website: "https://www.jamodrum.net/",
    download: "https://github.com/AsagamiY/bvw-game-builds/releases/tag/r4-dumpling-samurai-v1.6-preview",
    notice: {
      en: "A device pairing issue can cause sensitivity problems when playing with a keyboard and numpad. For now, we recommend watching the trailer instead of playing. This issue is being fixed.",
      zh: "由于设备配对问题，使用键盘和小键盘游玩时可能会出现灵敏度问题。目前建议先观看预告片，而不是实际游玩。此问题正在修复中。"
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
      dialog.querySelector(".dialog-description").textContent = project.description;
      const chineseDescription = dialog.querySelector(".dialog-description-zh");
      chineseDescription.textContent = project.descriptionZh || "";
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

// This is the WORKS page's grain shader, adapted from the saved public page source.
function initNoise() {
  let canvas = document.querySelector(".noise-canvas");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const gl = canvas.getContext("webgl", { alpha: true, antialias: false, depth: false, stencil: false, powerPreference: "low-power" });
  if (!gl) return initNoiseFallback(canvas);

  const vertexSource = `
    attribute vec2 aPosition;
    varying vec2 vUv;
    void main() {
      vUv = aPosition * 0.5 + 0.5;
      gl_Position = vec4(aPosition, 0.0, 1.0);
    }
  `;
  const fragmentSource = `
    #ifdef GL_FRAGMENT_PRECISION_HIGH
    precision highp float;
    #else
    precision mediump float;
    #endif
    uniform vec2 uMouse;
    uniform vec2 uResolution;
    uniform float uPixelRatio;
    uniform float uTime;
    uniform float uGlobalAlpha;
    uniform float uNrwPower;
    uniform float uIntroPower;
    varying vec2 vUv;
    float rand(vec2 co) {
      float a = 12.9898;
      float b = 78.233;
      float c = 43758.5453;
      float dt = dot(co.xy, vec2(a, b));
      float sn = mod(dt, 3.14159);
      return fract((sin(sn) * c) + uTime * 0.5);
    }
    float circle(in vec2 st, in float radius, in float blurriness) {
      vec2 dist = st;
      return 1.0 - smoothstep(radius - (radius * blurriness),
                              radius + (radius * blurriness),
                              dot(dist, dist) * 4.0);
    }
    void main() {
      vec2 res = uResolution * uPixelRatio;
      vec2 st = gl_FragCoord.xy / res.xy - vec2(0.5);
      st.y *= uResolution.y / uResolution.x;
      vec2 mouse = uMouse * -0.5;
      mouse.y *= uResolution.y / uResolution.x;
      vec2 circlePos = st + mouse;
      float c = circle(circlePos, 0.01, 80.0) * uNrwPower;
      float r = mix(rand(vUv), c, 0.5);
      float alpha = r < uGlobalAlpha ? 1.0 : 0.0;
      gl_FragColor = vec4(r, r, r, alpha);
    }
  `;
  const compile = (type, source) => {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      gl.deleteShader(shader);
      return null;
    }
    return shader;
  };
  const vertexShader = compile(gl.VERTEX_SHADER, vertexSource);
  const fragmentShader = compile(gl.FRAGMENT_SHADER, fragmentSource);
  if (!vertexShader || !fragmentShader) return initNoiseFallback(canvas);

  const program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return initNoiseFallback(canvas);

  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
  gl.useProgram(program);
  gl.enable(gl.BLEND);
  gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
  const position = gl.getAttribLocation(program, "aPosition");
  gl.enableVertexAttribArray(position);
  gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
  const uniforms = {
    mouse: gl.getUniformLocation(program, "uMouse"),
    resolution: gl.getUniformLocation(program, "uResolution"),
    pixelRatio: gl.getUniformLocation(program, "uPixelRatio"),
    time: gl.getUniformLocation(program, "uTime"),
    globalAlpha: gl.getUniformLocation(program, "uGlobalAlpha"),
    nrwPower: gl.getUniformLocation(program, "uNrwPower")
  };
  let pixelRatio = 1;
  let mouseX = 0;
  let mouseY = 0;
  const resize = () => {
    const devicePixelRatio = window.devicePixelRatio || 1;
    pixelRatio = devicePixelRatio < 2 ? 1.5 : Math.min(2, devicePixelRatio);
    canvas.width = Math.ceil(window.innerWidth * pixelRatio);
    canvas.height = Math.ceil(window.innerHeight * pixelRatio);
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.uniform2f(uniforms.resolution, window.innerWidth, window.innerHeight);
    gl.uniform1f(uniforms.pixelRatio, pixelRatio);
    gl.uniform1f(uniforms.globalAlpha, window.innerWidth <= 834 ? 0.25 : 0.24);
    gl.uniform1f(uniforms.nrwPower, window.innerWidth <= 834 ? 0 : 1);
    gl.clearColor(0, 0, 0, 0);
  };
  let running = false;
  const render = (now) => {
    if ((!running && !reducedMotion) || document.hidden) return;
    gl.uniform2f(uniforms.mouse, mouseX, mouseY);
    gl.uniform1f(uniforms.time, reducedMotion ? 1.0 : now / 1000);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    if (reducedMotion) return;
    requestAnimationFrame(render);
  };
  const start = () => {
    if (running || reducedMotion) return;
    running = true;
    requestAnimationFrame(render);
  };
  const stop = () => { running = false; };
  window.addEventListener("resize", resize, { passive: true });
  window.addEventListener("mousemove", (event) => {
    if (window.innerWidth <= 834) return;
    mouseX = event.clientX / window.innerWidth * 2 - 1;
    mouseY = -event.clientY / window.innerHeight * 2 + 1;
  }, { passive: true });
  document.addEventListener("visibilitychange", () => document.hidden ? stop() : start());
  resize();
  if (reducedMotion) render(0);
  else start();
}

function initNoiseFallback(canvas) {
  canvas.style.backgroundImage = 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 180 180%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%22.9%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22 opacity=%22.14%22/%3E%3C/svg%3E")';
  canvas.style.backgroundSize = "180px 180px";
}

initNoise();
