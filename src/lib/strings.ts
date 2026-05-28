export type Lang = 'en' | 'zh'

export type WorkItemContent = {
  id: string
  name: string
  state: 'shipping' | 'shipped'
  tag?: string
  meta?: string
  oneLiner: string
  techTags?: string[]
}

export type Strings = {
  nav: {
    home: string
    about: string
    work: string
    notes: string
    contact: string
  }
  home: {
    tagline: string[]
    credibility: string
    ctaWork: string
    ctaWorkSub: string
    ctaNotes: string
    ctaNotesSub: string
    terminal: string[]
    terminalReady: string
  }
  about: {
    title: string
    sideRail: { pov: string; arc: string; focus: string }
    povParas: string[]
    pullQuote: string
    arcKicker: string
    arcBody: string
    focusKicker: string
    focusIntro: string
    focusItems: { title: string; desc: string }[]
  }
  work: {
    title: string
    subtitle: string
    kickerShipping: string
    kickerShipped: string
    ctaPrefix: string
    ctaEmailLabel: string
    ctaWechatPrefix: string
    moreShipped: string
  }
  notes: {
    title: string
    intro: string
    todayKicker: string
    sectionAihotKicker: string
    sectionBuildersKicker: string
    sectionIndieKicker: string
    archiveKicker: string
    podcastLabel: string
    buildLabel: string
    signalsLabel: string
    fullReport: string
    emptyState: string
    updatedPrefix: string
    sourceNote: string
  }
  contact: {
    title: string
    subtitle: string
    hiringKicker: string
    hiringIntro: string
    followingKicker: string
    followingIntro: string
    hiringItems: { label: string; tag: string; type: 'link' | 'copy' }[]
    followingItems: { label: string; tag: string }[]
    terminalHelp: string
    terminalHint: string
  }
  workItems: WorkItemContent[]
}

const zh: Strings = {
  nav: {
    home: '首页',
    about: '关于',
    work: '作品',
    notes: '手记',
    contact: '联系',
  },
  home: {
    tagline: ['在概率里做选择，', '不在白板上验证假设。'],
    credibility: 'RAG · Agents · 投放与增长',
    ctaWork: '看作品',
    ctaWorkSub: '（求职向）',
    ctaNotes: '看我最近在学什么',
    ctaNotesSub: '（关注向）',
    terminal: [
      'Initializing environment...',
      'Loading mental models... [OK]',
      'Connecting to LLM cluster...',
    ],
    terminalReady: 'Ready.',
  },
  about: {
    title: '想得像工程师，写得像编辑。',
    sideRail: { pov: '§ 观点', arc: '§ 履历', focus: '§ 关注' },
    povParas: [
      '产品经理的活儿正在变。以前是收集需求，现在是在概率里选。技术可行性已经在拽着战略走——搞懂 AI 底下怎么转，不是加分项，是地基。好的 AI 产品要两种功夫：工程师的严谨，编辑的清晰。',
      '上线不是终点。想真正学懂产品，只能靠上线。在概率系统里，假设根本没法在白板上验证——必须拿到真实世界里去磨。把「上线」练成一种持续的纪律，而不是一次性的动作——这是穿过大模型那片模糊地带的唯一办法。',
      '最后，我信公开学习这件事。AI 跑得太快，关在抽屉里的知识活不过一周。把失败写下来、把架构上的取舍讲清楚、把产品框架放出来——不只是推自己一把，也是给后面走这条路的人留一张能看懂的地图。',
    ],
    pullQuote: '「假设没法在白板上验证。必须拿到真实世界里去磨。」',
    arcKicker: '§ 02 — 履历',
    arcBody:
      '走到 AI 产品这条路上，不是刻意转，是顺着走过来的。刚入行那几年我做的是传统的、确定性的 SaaS——做得好的标准就是数据模型干净、用户流程可预测。转折点是有一次我得在一个成熟的企业产品里接早期的语义搜索：那种系统的「不听话」——从离散逻辑切到概率推理——一开始让我恐慌，后来变成强烈的吸引力。我才看清楚：未来的产品不是去预判每一个用户动作，是搭一层能自适应的智能编排。从那之后我刻意往机器学习底层沉，整个重心也搬到了应用 AI、Agent 工作流，以及怎么评估它们的工具链上。',
    focusKicker: '§ 03 — 关注',
    focusIntro: '当前在跑的技术调研与工程关注：',
    focusItems: [
      {
        title: 'RAG (Retrieval-Augmented Generation)',
        desc: '把切片策略、嵌入模型、混合检索这一套调好，让模型的回答稳稳落在企业语料上。',
      },
      {
        title: 'Agent Orchestration',
        desc: '多 Agent 框架。让概率系统里也能跑出确定性的路径。',
      },
      {
        title: 'Evals & Telemetry',
        desc: '严肃的评估装置。从「凭感觉判断好坏」切到能量化的性能与安全指标。',
      },
      {
        title: 'Ads & Growth Surfaces',
        desc: '在效果营销的链路里原生塞进生成式 UI，让转化跟得上当下的场景。',
      },
    ],
  },
  work: {
    title: '作品。',
    subtitle: '在做的，和已经交付的。',
    kickerShipping: '§ 01 — 进行中',
    kickerShipped: '§ 02 — 已交付',
    ctaPrefix: '想看细节？',
    ctaEmailLabel: '发邮件',
    ctaWechatPrefix: '，或加微信',
    moreShipped: '更多已交付项目（OMS · 选书师 · 挂号助手）— 见简历 →',
  },
  notes: {
    title: '手记。',
    intro:
      '我每天读的三条 AI 线索——中文资讯、海外 builder 在说什么、indie 今天值得做什么——自动汇到这里。机器抓取、每日更新，不是我手写的，但都是我自己在追的源。',
    todayKicker: '§ 今日',
    sectionAihotKicker: '§ AI HOT · 最近 24 小时',
    sectionBuildersKicker: '§ BUILDERS · 海外在说什么',
    sectionIndieKicker: '§ INDIE · 今日值得做的',
    archiveKicker: '§ 近 7 日',
    podcastLabel: '本期播客',
    buildLabel: '今日 2 小时构建',
    signalsLabel: 'Top 3 信号',
    fullReport: '完整版 →',
    emptyState: '上游今天还没更新，明天再来看看。',
    updatedPrefix: '更新于',
    sourceNote: '数据来自 aihot · follow-builders · BuilderPulse，每日自动更新。',
  },
  contact: {
    title: '联系我',
    subtitle: '两条路，地位一样。挑一条。',
    hiringKicker: '§ 给招聘方',
    hiringIntro: '正在看 AI 产品负责人、资深 AI PM 的岗位。也接问题足够具体的咨询。',
    followingKicker: '§ 给关注的人',
    followingIntro: '偶尔发点 AI 产品策略、技术落地、和还没做完的事——都是随手写的。',
    hiringItems: [
      { label: '简历', tag: '邮件索取 →', type: 'link' },
      { label: '精选 PRD', tag: '邮件索取 →', type: 'link' },
      { label: '__EMAIL__', tag: '复制', type: 'copy' },
      { label: '__WECHAT__', tag: '复制', type: 'copy' },
    ],
    followingItems: [
      { label: '小红书', tag: '__XHS__' },
      { label: 'GitHub', tag: '打开 →' },
      { label: 'RSS', tag: 'XML' },
    ],
    terminalHelp: '# Available commands: resume, prd, email, github, xhs, exit',
    terminalHint: '试试输入：resume / email / github',
  },
  workItems: [
    {
      id: 'petrelic',
      name: 'PetRelic',
      state: 'shipping',
      tag: 'IN FLIGHT · 2026.05',
      oneLiner:
        '为每只宠物做一张数字身份卡。主人能在线「抽」到属于自己宠物的形象，喜欢就留下，想带回家可以做成实体卡牌或铭牌。',
      techTags: ['LLM', 'CONSUMER', 'PHYSICAL'],
    },
    {
      id: 'adpilot',
      name: 'AdPilot',
      state: 'shipped',
      meta: '2023 // 投放 & 增长',
      oneLiner: '一款自动化广告投放管理工具，给中型电商品牌做多渠道预算的动态调配。',
      techTags: ['LLM', '投放 / 增长'],
    },
    {
      id: 'field-claw',
      name: 'FIELD CLAW',
      state: 'shipped',
      meta: '2022 // 离线优先',
      oneLiner: '一款给一线作业工人用的离线优先工具。在低连通环境下做核心业务流程的可靠操作。',
      techTags: ['移动端', '离线优先'],
    },
  ],
}

const en: Strings = {
  nav: {
    home: 'Home',
    about: 'About',
    work: 'Work',
    notes: 'Notes',
    contact: 'Contact',
  },
  home: {
    tagline: ['Choose inside probability.', 'Not on whiteboards.'],
    credibility: 'RAG · Agents · ads & growth',
    ctaWork: 'See the work',
    ctaWorkSub: '(for hiring)',
    ctaNotes: "See what I'm learning",
    ctaNotesSub: '(for following)',
    terminal: [
      'Initializing environment...',
      'Loading mental models... [OK]',
      'Connecting to LLM cluster...',
    ],
    terminalReady: 'Ready.',
  },
  about: {
    title: 'The mind of an engineer, the pen of an editor.',
    sideRail: { pov: '§ POV', arc: '§ Arc', focus: '§ Focus' },
    povParas: [
      'The role of the product manager is shifting from gathering requirements to navigating probabilities. When technical feasibility starts to dictate strategy, understanding the underlying architecture of AI is no longer optional — it is the foundation of the craft. I believe good AI products require the mind of an engineer and the pen of an editor: rigorous in the technology, clear in the telling.',
      'Shipping is not the endpoint; it is the only real way to learn product. In non-deterministic systems, a hypothesis cannot be validated on a whiteboard — it must meet the friction of reality. Treating shipping as a continuous discipline, rather than a one-off event, is how we move through the ambiguity of large language models.',
      'Finally, I believe in the power of learning in public. AI moves too quickly for knowledge to live in a drawer. Writing down failures, naming the architectural tradeoffs, publishing product frameworks — that is how the work compounds, not just for me but for whoever shows up next on the same road.',
    ],
    pullQuote:
      '“In non-deterministic systems, a hypothesis cannot be validated on a whiteboard — it must meet the friction of reality.”',
    arcKicker: '§ 02 — Arc',
    arcBody:
      'The path into AI product management wasn’t a calculated pivot, but a necessary extension. I started in traditional deterministic SaaS, where success meant clean data models and predictable user flows. The turning point was integrating early semantic search into a mature enterprise product. The unruliness of the system — the shift from discrete logic to probabilistic reasoning — was first terrifying, then deeply compelling. I realized future product design would not be about anticipating every user action, but about constructing intelligent orchestration layers that adapt. From there I committed to the ML fundamentals and shifted entirely toward applied AI, agentic workflows, and the evaluation tooling that makes them tractable.',
    focusKicker: '§ 03 — Focus',
    focusIntro: 'Current technical investigations and engineering focus areas:',
    focusItems: [
      {
        title: 'RAG (Retrieval-Augmented Generation)',
        desc: 'Chunking, embeddings, and hybrid retrieval — tuned so the model stays grounded in the corpus.',
      },
      {
        title: 'Agent Orchestration',
        desc: 'Multi-agent frameworks. Deterministic routing inside probabilistic bounds.',
      },
      {
        title: 'Evals & Telemetry',
        desc: 'Serious evaluation harnesses. Moving from vibes to quantitative performance and safety.',
      },
      {
        title: 'Ads & Growth Surfaces',
        desc: 'Native generative UI inside performance marketing flows, for more contextual conversion.',
      },
    ],
  },
  work: {
    title: 'Work.',
    subtitle: 'Currently shipping, and already shipped.',
    kickerShipping: '§ 01 — SHIPPING',
    kickerShipped: '§ 02 — SHIPPED',
    ctaPrefix: 'Want the details?',
    ctaEmailLabel: 'Email me',
    ctaWechatPrefix: ', or on WeChat:',
    moreShipped: 'More shipped projects (OMS · Book Curator · Clinic Triage Assistant) — see résumé →',
  },
  notes: {
    title: 'Index.',
    intro:
      "The three AI feeds I read every day — Chinese news, what builders abroad are saying, and what's worth building as an indie today — pulled together here. Machine-fetched, updated daily. Not hand-written, but every source is one I actually follow.",
    todayKicker: '§ TODAY',
    sectionAihotKicker: '§ AI HOT · LAST 24H',
    sectionBuildersKicker: '§ BUILDERS · WHAT THEY SAID',
    sectionIndieKicker: '§ INDIE · WORTH BUILDING TODAY',
    archiveKicker: '§ LAST 7 DAYS',
    podcastLabel: 'PODCAST',
    buildLabel: "Today's 2-hour build",
    signalsLabel: 'Top 3 signals',
    fullReport: 'Full report →',
    emptyState: "Upstream hasn't updated yet today — check back tomorrow.",
    updatedPrefix: 'Updated',
    sourceNote: 'Sources: aihot · follow-builders · BuilderPulse, refreshed daily.',
  },
  contact: {
    title: 'Initiate Protocol',
    subtitle: 'Two paths, equal weight. Pick one.',
    hiringKicker: '§ for hiring',
    hiringIntro:
      'Open to AI product lead / senior AI PM roles. Also open to consulting where the problem is concrete.',
    followingKicker: '§ for following',
    followingIntro:
      'Occasional notes on AI product strategy, technical landings, and the work that isn’t finished yet.',
    hiringItems: [
      { label: 'Résumé', tag: 'REQUEST →', type: 'link' },
      { label: 'Selected PRD', tag: 'REQUEST →', type: 'link' },
      { label: '__EMAIL__', tag: 'COPY', type: 'copy' },
      { label: '__WECHAT__', tag: 'COPY', type: 'copy' },
    ],
    followingItems: [
      { label: 'Xiaohongshu', tag: '__XHS__' },
      { label: 'GitHub', tag: 'OPEN →' },
      { label: 'RSS', tag: 'XML' },
    ],
    terminalHelp: '# Available commands: resume, prd, email, github, xhs, exit',
    terminalHint: 'try: resume, email, github',
  },
  workItems: [
    {
      id: 'petrelic',
      name: 'PetRelic',
      state: 'shipping',
      tag: 'IN FLIGHT · 2026.05',
      oneLiner:
        'A digital identity card for every pet. Owners draw the look they love online; the ones that land can become a physical card or pet tag to take home.',
      techTags: ['LLM', 'CONSUMER', 'PHYSICAL'],
    },
    {
      id: 'adpilot',
      name: 'AdPilot',
      state: 'shipped',
      meta: '2023 // ADS & GROWTH',
      oneLiner:
        'An autonomous campaign management tool. Dynamic budget reallocation across channels for mid-market e-commerce brands.',
      techTags: ['LLM', 'ADS / GROWTH'],
    },
    {
      id: 'field-claw',
      name: 'FIELD CLAW',
      state: 'shipped',
      meta: '2022 // OFFLINE-FIRST',
      oneLiner:
        'An offline-first tool for frontline operators. Reliable execution of core workflows in low-connectivity environments.',
      techTags: ['MOBILE', 'OFFLINE-FIRST'],
    },
  ],
}

export const strings: Record<Lang, Strings> = { en, zh }
