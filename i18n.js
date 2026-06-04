// Translation dictionary (PT, EN, ES, ZH)
const translations = {
  pt: {
    tagline: "Thiago Oliveira Santos — Arquiteto de Software · Matemático · Entusiasta Open Source",
    location: "📍 São Paulo, Brasil 🇧🇷",
    stat_repos: "Repositórios Públicos",
    stat_prs: "PRs Externos Aprovados",
    stat_codibre: "Projetos na Codibre",
    bio: `Sou <strong>Software Architect no Grupo Boticário</strong>, onde projeto e construo sistemas escaláveis para uma das maiores empresas da América Latina. Tenho paixão por criar soluções eficientes e robustas que resolvem desafios complexos.<br/><br/>
    Minha trajetória profissional é guiada pelo espírito open source. Criei e mantenho a organização <strong>codibre</strong>, uma coleção de 70+ ferramentas para o ecossistema JS/TS. Também contribuí para projetos importantes como o <strong>Node.js core</strong>, onde um <a href="https://github.com/nodejs/node/pull/41276" target="_blank">meu PR melhorou a performance de iteradores assíncronos readline em 20–58%</a>, e para o <strong>NestJS</strong>, adicionando controle fino de armazenamento assíncrono.<br/><br/>
    Com formação em <strong>Matemática</strong>, abordo cada linha de código com rigor analítico. Quando não estou arquitetando sistemas ou programando, você me encontra na cozinha, experimentando novas receitas 🍳.`,
    projects_title: "🔥 Projetos em Destaque",
    project_floaty_desc: "Jogo arcade com temática oceânica e segredos desbloqueáveis.",
    project_fluent_desc: "API fluente para Iterables, AsyncIterables e Streams — encadeamento funcional de alta performance.",
    project_nestctx_desc: "Propagação de contexto limpa em microsserviços NestJS via AsyncLocalStorage — sem hacks.",
    contrib_title: "🌍 Contribuições Externas · 64+ PRs Aprovados",
    contrib_project: "Projeto / Organização",
    contrib_desc: "Contribuição Relevante",
    stack_title: "🛠️ Stack & Ferramentas",
    footer_made: "Feito com ❤️ por <strong>Farenheith</strong> · Movido a matemática & ☕"
  },
  en: {
    tagline: "Thiago Oliveira Santos — Software Architect · Mathematician · Open Source Enthusiast",
    location: "📍 São Paulo, Brazil 🇧🇷",
    stat_repos: "Public Repos",
    stat_prs: "External PRs Merged",
    stat_codibre: "Codibre Projects",
    bio: `I'm a <strong>Software Architect at Grupo Boticário</strong>, where I design and build scalable systems for one of Latin America's largest companies. I thrive on creating efficient and robust solutions that handle complex challenges.<br/><br/>
    My professional journey is driven by an open‑source mindset. I created and maintain the <strong>codibre</strong> organization, a collection of 70+ tools for the JS/TS ecosystem. I'm also proud to have contributed to major projects like <strong>Node.js core</strong>, where a <a href="https://github.com/nodejs/node/pull/41276" target="_blank">PR of mine improved the performance of readline async iterators by 20–58%</a>, and to <strong>NestJS</strong>, adding fine async storage control.<br/><br/>
    With a background in <strong>Mathematics</strong>, I approach every line of code with analytical rigor. When I'm not architecting systems or coding, you'll find me in the kitchen, happily experimenting with new recipes 🍳.`,
    projects_title: "🔥 Notable Projects",
    project_floaty_desc: "Arcade game with an ocean‑themed world and unlockable secrets.",
    project_fluent_desc: "Fluent API for Iterables, AsyncIterables and Streams — high‑performance functional chaining.",
    project_nestctx_desc: "Clean context propagation in NestJS microservices via AsyncLocalStorage — no hacks.",
    contrib_title: "🌍 External Contributions · 64+ Merged PRs",
    contrib_project: "Project / Org",
    contrib_desc: "Relevant Contribution",
    stack_title: "🛠️ Stack & Tools",
    footer_made: "Made with ❤️ by <strong>Farenheith</strong> · Powered by math & ☕"
  },
  es: {
    tagline: "Thiago Oliveira Santos — Arquitecto de Software · Matemático · Entusiasta Open Source",
    location: "📍 São Paulo, Brasil 🇧🇷",
    stat_repos: "Repositorios Públicos",
    stat_prs: "PRs Externos Aprobados",
    stat_codibre: "Proyectos en Codibre",
    bio: `Soy <strong>Arquitecto de Software en Grupo Boticário</strong>, donde diseño y construyo sistemas escalables para una de las empresas más grandes de América Latina. Disfruto creando soluciones eficientes y robustas que enfrentan desafíos complejos.<br/><br/>
    Mi trayectoria profesional está guiada por el espíritu open source. Creé y mantengo la organización <strong>codibre</strong>, una colección de más de 70 herramientas para el ecosistema JS/TS. También he contribuido a proyectos importantes como el <strong>núcleo de Node.js</strong>, donde <a href="https://github.com/nodejs/node/pull/41276" target="_blank">un PR mío mejoró el rendimiento de los iteradores asíncronos readline en un 20–58%</a>, y a <strong>NestJS</strong>, añadiendo control fino de almacenamiento asíncrono.<br/><br/>
    Con formación en <strong>Matemáticas</strong>, abordo cada línea de código con rigor analítico. Cuando no estoy diseñando sistemas o programando, me encontrarás en la cocina, experimentando nuevas recetas 🍳.`,
    projects_title: "🔥 Proyectos Destacados",
    project_floaty_desc: "Juego arcade con temática oceánica y secretos desbloqueables.",
    project_fluent_desc: "API fluida para Iterables, AsyncIterables y Streams — encadenamiento funcional de alto rendimiento.",
    project_nestctx_desc: "Propagación de contexto limpia en microservicios NestJS mediante AsyncLocalStorage — sin hacks.",
    contrib_title: "🌍 Contribuciones Externas · 64+ PRs Aprobados",
    contrib_project: "Proyecto / Organización",
    contrib_desc: "Contribución Relevante",
    stack_title: "🛠️ Stack & Herramientas",
    footer_made: "Hecho con ❤️ por <strong>Farenheith</strong> · Impulsado por matemáticas & ☕"
  },
  zh: {
    tagline: "Thiago Oliveira Santos — 软件架构师 · 数学家 · 开源爱好者",
    location: "📍 巴西 圣保罗 🇧🇷",
    stat_repos: "公共仓库",
    stat_prs: "外部 PR 合并",
    stat_codibre: "Codibre 项目",
    bio: `我是<strong>Grupo Boticário 的软件架构师</strong>，为拉丁美洲最大的公司之一设计和构建可扩展系统。我热衷于创建高效、健壮的解决方案来应对复杂挑战。<br/><br/>
    我的职业生涯由开源精神驱动。我创建并维护 <strong>codibre</strong> 组织，这是一个包含 70+ 工具的 JS/TS 生态系统集合。我也为重要项目做出过贡献，比如 <strong>Node.js 核心</strong>，其中<a href="https://github.com/nodejs/node/pull/41276" target="_blank">我的一个 PR 将 readline 异步迭代器的性能提升了 20–58%</a>，还有 <strong>NestJS</strong>，增加了精细的异步存储控制。<br/><br/>
    拥有<strong>数学</strong>背景，我用分析严谨性对待每一行代码。当我不在架构系统或编码时，你会在厨房里找到我，快乐地尝试新食谱 🍳。`,
    projects_title: "🔥 知名项目",
    project_floaty_desc: "街机风格游戏，海洋主题，包含可解锁的秘密。",
    project_fluent_desc: "为 Iterables、AsyncIterables 和 Streams 提供的流畅 API —— 高性能函数式链式调用。",
    project_nestctx_desc: "通过 AsyncLocalStorage 在 NestJS 微服务中实现干净的上下文传播 —— 无需 hack。",
    contrib_title: "🌍 外部贡献 · 合并 64+ 个 PR",
    contrib_project: "项目 / 组织",
    contrib_desc: "相关贡献",
    stack_title: "🛠️ 技术栈与工具",
    footer_made: "❤️ 由 <strong>Farenheith</strong> 制作 · 由数学和☕驱动"
  }
};

// External contributions data (inclui PRs mesclados e os mods Minecraft)
const contributionsData = [
  { project: '<a href="https://github.com/nestjs/nest/pull/15374" target="_blank">nestjs/nest</a>', desc: "feat: supporting fine async storage control — merged into core framework v10+" },
  { project: '<a href="https://github.com/nodejs/node/pull/41276" target="_blank">nodejs/node</a>', desc: "lib: performance improvement on readline async iterator (20–58% faster) — merged" },
  { project: '<a href="https://github.com/DefinitelyTyped/DefinitelyTyped/pull/68131" target="_blank">DefinitelyTyped</a>', desc: "Add `hmgetBuffer` method to ioredis types + Jest spyOn autocomplete improvements — merged" },
  { project: "winston (winston-redis)", desc: "Error handling fixes in Redis transports + removal of unexpected node‑cleanup behavior — merged" },
  { project: '<a href="https://github.com/rocket-connect/for-emit-of" target="_blank">rocket-connect / for-emit-of</a>', desc: "Performance improvements, memory leak fixes on `break` with `for await of`, timeout compliance — merged" },
  { project: "maxmilhas / ts-base-http-client", desc: "Fix for incorrect default retry logic in HTTP client — merged" },
  { project: '<a href="https://github.com/alRex-U/ParCool" target="_blank">alRex-U / ParCool</a>', desc: "Multiple PRs: cling‑to‑cliff camera, ShoulderSurfing dodge detection, climb mechanics — merged" },
  { project: "rafaelquines / docker-composes", desc: "Portainer upgrades, mssql volume mapping, server compose configs — merged" },
  { project: "maxmilhas / nodejs-trie", desc: "Full implementation: multiple prefix iteration, TrieMap with values, regexp conversion — merged" },
  // Minecraft mods (também são contribuições externas, pois são mods para um ecossistema terceiro)
  { project: '<a href="https://github.com/Farenheith/locked-on" target="_blank">Locked-On (Minecraft Fabric)</a>', desc: "Full mod — lock camera onto any entity. Maintained open source." },
  { project: '<a href="https://github.com/Farenheith/ShoulderSurfing" target="_blank">Shoulder Surfing Reloaded (Minecraft)</a>', desc: "Third‑person camera mod with full CI/CD, automated builds and publishing." }
];

const stackItems = ["TypeScript", "NestJS", "Node.js", "Redis", "Minecraft (Fabric/Forge)", "Winston", "Docker Compose", "Jest / Vitest"];

// Populate static content (contributions table and stack list)
function populateStatic() {
  const tbody = document.getElementById("contrib-table-body");
  if (tbody) {
    tbody.innerHTML = contributionsData.map(row => `<tr><td>${row.project}</td><td>${row.desc}</td></tr>`).join('');
  }
  const stackList = document.getElementById("stack-list");
  if (stackList) {
    stackList.innerHTML = stackItems.map(item => `<li>${item}</li>`).join('');
  }
}

// Intelligent language detection
function getBrowserLanguage() {
  const browserLang = navigator.language || navigator.userLanguage || 'en';
  const langCode = browserLang.split('-')[0].toLowerCase();
  if (langCode === 'pt') return 'pt';
  if (langCode === 'es') return 'es';
  if (langCode === 'zh') return 'zh';
  return 'en';
}

function getInitialLanguage() {
  const stored = localStorage.getItem('preferred_lang');
  if (stored && translations[stored]) return stored;
  return getBrowserLanguage();
}

function applyLanguage(lang) {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      if (key === 'bio') {
        el.innerHTML = translations[lang][key];
      } else {
        el.textContent = translations[lang][key];
      }
    }
  });
  const select = document.getElementById('langSelect');
  if (select) select.value = lang;
  localStorage.setItem('preferred_lang', lang);
}

function initLanguageSwitcher() {
  const select = document.getElementById('langSelect');
  if (select) {
    select.addEventListener('change', (e) => {
      const lang = e.target.value;
      if (lang && translations[lang]) applyLanguage(lang);
    });
  }
}

// Initialize
populateStatic();
const initialLang = getInitialLanguage();
applyLanguage(initialLang);
initLanguageSwitcher();