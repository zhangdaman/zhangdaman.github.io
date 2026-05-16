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

export type NoteItemContent = {
  date: string
  title: string
  blurb: string
  to: string
  via: 'GITHUB' | 'XIAOHONGSHU' | 'THREAD'
}

export type Strings = {
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
    ctaPrefix: string
    ctaEmailLabel: string
    ctaWechatPrefix: string
    moreShipped: string
  }
  notes: {
    title: string
    intro: string
    nowKicker: string
    nowEntries: string[]
    archiveKicker: string
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
  notesList: NoteItemContent[]
}

const zh: Strings = {
  home: {
    tagline: ['在概率里做选择，', '不在白板上验证假设。'],
    credibility: 'RAG · Agents · 投放与增长',
    ctaWork: '看作品',
    ctaWorkSub: '(for hiring)',
    ctaNotes: '看我在公开学习什么',
    ctaNotesSub: '(for following)',
    terminal: [
      'Initializing environment...',
      'Loading mental models... [OK]',
      'Connecting to LLM cluster...',
    ],
    terminalReady: 'Ready.',
  },
  about: {
    title: '工程师的脑子，编辑的笔。',
    sideRail: { pov: '§ POV', arc: '§ Arc', focus: '§ Focus' },
    povParas: [
      '产品经理的工作正在从「收集需求」变成「在概率里做选择」。当技术可行性开始决定战略，理解 AI 的底层结构就不再是加分项，而是这门手艺的地基。我相信好的 AI 产品需要工程师的脑子，加上编辑的笔——技术上严谨，表达上清晰。',
      '上线不是终点，是学习产品的唯一方式。在非确定性的系统里，一个假设没法在白板上被验证——它必须经过真实世界的摩擦。把「上线」做成一种持续的纪律，而不是一次性的事件，才是穿过大模型本质模糊性的方式。',
      '最后，我相信公开学习的力量。AI 跑得太快，关在抽屉里的知识活不过一周。把失败写下来、把架构上的取舍讲清楚、把产品框架公开出来——不只推进自己，也是给后面进入这条路的人留一张能读懂的地图。',
    ],
    pullQuote: '「在非确定性的系统里，假设没法在白板上被验证——它必须经过真实世界的摩擦。」',
    arcKicker: '§ 02 — Arc',
    arcBody:
      '走到 AI 产品这条路上，不是一次刻意的转向，是一次必然的延伸。我职业的开头是做传统、确定性的 SaaS 平台——做得好的标准是数据模型干净、用户流程可预测。转折点是有一次我必须在一个成熟的企业级产品里接入早期的语义搜索：那种系统的「不听话」——从离散逻辑切到概率推理——一开始让我恐慌，后来变成强烈的吸引力。我意识到，未来的产品设计不再是预判每一个用户动作，而是构造一层能自适应的智能编排。从那以后我刻意沉到机器学习的基础里，重心整体切到应用 AI、Agent 工作流，以及让它们可被评估的工具链上。',
    focusKicker: '§ 03 — Focus',
    focusIntro: '当前在跑的技术调研与工程关注：',
    focusItems: [
      {
        title: 'RAG (Retrieval-Augmented Generation)',
        desc: '把切片策略、嵌入模型、混合检索这一套调好，让模型的回答稳稳 ground 在企业语料上。',
      },
      {
        title: 'Agent Orchestration',
        desc: '多 Agent 框架。在概率边界里做确定性的路由。',
      },
      {
        title: 'Evals & Telemetry',
        desc: '严肃的评估装置。从「凭感觉判断好坏」切到可量化的性能与安全指标。',
      },
      {
        title: 'Ads & Growth Surfaces',
        desc: '在效果营销的链路里原生嵌入生成式 UI，做更上下文相关的转化。',
      },
    ],
  },
  work: {
    title: '作品。',
    subtitle: '在做的，和已经交付的。',
    ctaPrefix: '想看细节？',
    ctaEmailLabel: '发邮件',
    ctaWechatPrefix: '，或加微信',
    moreShipped: '更多已交付项目（OMS · 选书师 · 挂号助手）— 见简历 →',
  },
  notes: {
    title: 'Index.',
    intro:
      '一份手工挑出来的 AI 实践笔记索引。每一条都指向原始产物——小红书、GitHub，或者它最初被写下来的地方。这一页是索引，不是仓库。',
    nowKicker: '§ now',
    nowEntries: ['在画多 Agent 编排的形态。', '在拆 RAG 的评估指标体系。', '在和实体卡牌供应商验 SKU。'],
    archiveKicker: 'Archive',
  },
  contact: {
    title: '建立连接',
    subtitle: '两条路径，权重相同。挑一条。',
    hiringKicker: '§ for hiring',
    hiringIntro: '在看 AI 产品负责人 / 资深 AI PM 的机会。也接问题足够具体的咨询。',
    followingKicker: '§ for following',
    followingIntro: '偶尔发一些关于 AI 产品策略、技术落地、以及还没做完的事的随手记录。',
    hiringItems: [
      { label: '简历', tag: '邮件索取 →', type: 'link' },
      { label: '精选 PRD', tag: '邮件索取 →', type: 'link' },
      { label: '__EMAIL__', tag: '复制', type: 'copy' },
      { label: '__WECHAT__', tag: '复制', type: 'copy' },
    ],
    followingItems: [
      { label: '小红书', tag: '__XHS__' },
      { label: 'GitHub', tag: 'OPEN →' },
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
      techTags: ['LLM', 'ADS / GROWTH'],
    },
    {
      id: 'field-claw',
      name: 'FIELD CLAW',
      state: 'shipped',
      meta: '2022 // OFFLINE-FIRST',
      oneLiner: '一款给一线作业工人用的离线优先工具。在低连通环境下做核心业务流程的可靠操作。',
      techTags: ['MOBILE', 'OFFLINE-FIRST'],
    },
  ],
  notesList: [
    {
      date: '2024.03',
      title: '把 prompt 当代码管：一份回归集的写法',
      blurb: '我在团队里推行的工作流——黄金集、回归集、以及怎么定义「这一版更好」。',
      to: '#',
      via: 'GITHUB',
    },
    {
      date: '2024.02',
      title: '为什么大多数 Agent Demo 上不了生产',
      blurb: '从 demo 推到真实营收场景时，反复看到的四种失败模式。',
      to: '#',
      via: 'XIAOHONGSHU',
    },
    {
      date: '2024.01',
      title: 'RAG 的评估，比你想象的难',
      blurb: '对比 trulens / ragas / 人审在环——哪一种能真正把检索 ground 在企业语料上。',
      to: '#',
      via: 'GITHUB',
    },
    {
      date: '2023.11',
      title: 'AI 时代 PM 的阅读清单（只放短的）',
      blurb: '我一直在转给转型 AI 的 PM 朋友的那张短清单。只放真正值得占一个位置的内容。',
      to: '#',
      via: 'XIAOHONGSHU',
    },
    {
      date: '2023.09',
      title: '微调一个品牌的「说话方式」',
      blurb: '准备对话数据集做 LoRA 微调，让模型稳稳待在品牌语气的边界里。',
      to: '#',
      via: 'XIAOHONGSHU',
    },
    {
      date: '2023.07',
      title: '我从 SaaS PM 转 AI PM 的那 6 个月',
      blurb: '一份转型笔记。哪些路径走错了、哪些走对了、哪些到现在还不确定。',
      to: '#',
      via: 'THREAD',
    },
  ],
}

const en: Strings = {
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
    ctaPrefix: 'Want the details?',
    ctaEmailLabel: 'Email me',
    ctaWechatPrefix: ', or on WeChat:',
    moreShipped: 'More shipped projects (OMS · Book Curator · Clinic Triage Assistant) — see résumé →',
  },
  notes: {
    title: 'Index.',
    intro:
      'A hand-picked index of AI-practice notes. Each entry points to the original artifact — on Xiaohongshu, GitHub, or wherever it was first written down. This page is an index, not an archive.',
    nowKicker: '§ now',
    nowEntries: [
      'Sketching multi-agent orchestration patterns.',
      'Unpacking the eval metric stack for RAG.',
      'Validating SKUs with a physical-card supplier.',
    ],
    archiveKicker: 'Archive',
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
  notesList: [
    {
      date: '2024.03',
      title: 'Prompts as code: a regression suite that works',
      blurb: 'The workflow I run with the team — golden sets, regression suites, and a clear bar for "this version is better."',
      to: '#',
      via: 'GITHUB',
    },
    {
      date: '2024.02',
      title: 'Why most agent demos die in production',
      blurb: 'The four failure modes I keep seeing when teams move a multi-step agent from demo to a real revenue surface.',
      to: '#',
      via: 'XIAOHONGSHU',
    },
    {
      date: '2024.01',
      title: 'RAG evaluation is harder than you think',
      blurb: 'Comparing trulens, ragas, and a human-in-the-loop harness for grounding retrieval in enterprise corpora.',
      to: '#',
      via: 'GITHUB',
    },
    {
      date: '2023.11',
      title: 'A short reading list for PMs entering AI',
      blurb: 'The short list I keep sending to PMs transitioning into AI roles. Only entries that earn their slot stay.',
      to: '#',
      via: 'XIAOHONGSHU',
    },
    {
      date: '2023.09',
      title: 'Fine-tuning for brand voice',
      blurb: 'How to prepare conversational datasets for LoRA fine-tunes that stay inside corporate tonal guidelines.',
      to: '#',
      via: 'XIAOHONGSHU',
    },
    {
      date: '2023.07',
      title: 'Six months of switching from SaaS PM to AI PM',
      blurb: 'A transition log. What I got right, what I got wrong, what I’m still not sure about.',
      to: '#',
      via: 'THREAD',
    },
  ],
}

export const strings: Record<Lang, Strings> = { en, zh }
