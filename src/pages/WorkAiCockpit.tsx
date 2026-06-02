import { Link } from 'react-router-dom'
import { useLang } from '../lib/LanguageContext'

// 这个详情页内容自包含（双语），不走 strings.ts，避免为单个案例撑大全局 i18n。
const content = {
  zh: {
    back: '← 返回作品',
    kicker: '作品 · IN FLIGHT · 2026.06',
    title: 'AI 公司驾驶舱',
    lede: '把一个人活成一个团队。我缺的不是算力，是同事——于是我给自己搭了一家公司。',
    rail: ['§ 缘起', '§ 结构', '§ 怎么运转', '§ 我学到的'],
    sections: {
      why: {
        h: '一个人，缺的不是算力，是角色',
        ps: [
          '一个人做产品，最难的不是写不出代码，是脑子里只有一个声音。没人替你砍功能，没人提醒你工期会爆，没人问"客户为什么会留下"。你既是产品经理又是工程师又是自己的啦啦队——确认偏误会把你带进沟里。',
          '我想要的不是一个更听话的助手，是一支会跟我吵架的团队。所以我没有去堆更长的 prompt，而是去搭更完整的角色。',
        ],
      },
      structure: {
        h: 'Elon 当 CEO，四个人各管一块',
        ps: [
          '我只跟一个人说话——CEO agent，代号 Elon。他负责把我模糊的想法钉成具体问题，然后决定：自己答，还是召集团队。下面四个同事各管一块领地，既出判断、也亲手写代码。',
          '关键不是"人多"，是"角色清晰、各有红线、会互相反对"。Jobs 砍功能、Linus 算成本、Turing 找反例、Bezos 想长期——他们经常吵，这是好事。',
        ],
      },
      run: {
        h: '飞书里指挥，驾驶舱里看着他们干活',
        ps: [
          '我在飞书里给 Elon 派活，他调度团队、把结果回报给我。一个网页"驾驶舱"让我实时看到下面每个人此刻在干什么——谁在读哪个文件、谁在写哪段代码——像真的在经营一家公司。',
          '每天早上九点，Elon 还会自动把昨天团队干了什么、今天该先做什么，推一条简报到我手机。重复的事不该我盯，该自动发生。',
        ],
      },
      learned: {
        h: '更多 agent ≠ 更聪明',
        ps: [
          '搭的过程里我撞到一个反直觉的结论：把一个问题拆给四个分身去并行想，往往比我自己带着完整上下文想，更慢也更笨——因为上下文被切碎了，每个分身在真空里猜，我再做一份有损的综合。',
          '真正的智能来自三样东西：强的模型、完整的上下文、能落地能反馈的闭环。把这三样喂饱一个角色，胜过开一场四个人的会。所以"团队"是后备力量，不是默认动作——而真正的效率放大，是把重复劳动自动化（比如那条每日晨报），不是无脑开会。',
        ],
      },
    },
    shotsLabel: '§ 驾驶舱实拍',
    shotsHint: '（指挥台 · 实时活动 · 每日晨报）',
    stack: ['MULTI-AGENT', 'OPENCLAW', 'CLAUDE', 'FEISHU', 'PYTHON'],
  },
  en: {
    back: '← Back to work',
    kicker: 'WORK · IN FLIGHT · 2026.06',
    title: 'AI Company Cockpit',
    lede: 'Living as a team of one. What I lacked was not compute, it was colleagues, so I built myself a company.',
    rail: ['§ Premise', '§ Structure', '§ How it runs', '§ What I learned'],
    sections: {
      why: {
        h: 'Solo, what you lack is roles, not horsepower',
        ps: [
          'Building alone, the hard part is not the code. It is that there is only one voice in your head. No one to cut features, no one to warn you the timeline will slip, no one asking "why would a customer stay?". You are PM, engineer, and your own cheerleader at once, and confirmation bias drives you into the ditch.',
          'I did not want a more obedient assistant. I wanted a team that argues with me. So instead of stacking longer prompts, I built fuller roles.',
        ],
      },
      structure: {
        h: 'Elon is CEO, four colleagues each own a domain',
        ps: [
          'I talk to one of them only, the CEO agent, codenamed Elon. He pins my fuzzy idea into a concrete problem, then decides: answer it himself, or convene the team. Below him, four colleagues each own a domain and both judge and write code.',
          'The point is not headcount. It is clear roles, hard red lines, and a willingness to disagree. Jobs cuts features, Linus counts the cost, Turing hunts counter-examples, Bezos thinks long term. They argue often. That is the point.',
        ],
      },
      run: {
        h: 'Command over Feishu, watch them work in the cockpit',
        ps: [
          'I assign work to Elon over Feishu; he dispatches the team and reports back. A web cockpit lets me watch, in real time, what each one is doing right now, who is reading which file, who is writing which code, like actually running a company.',
          'Every morning at nine, Elon also pushes a brief to my phone: what the team did yesterday, what to do first today. Repetitive things should not need my watch; they should just happen.',
        ],
      },
      learned: {
        h: 'More agents does not mean smarter',
        ps: [
          'Building it, I hit a counter-intuitive truth: splitting a problem across four parallel clones is often slower and dumber than thinking it through myself with full context, because the context gets shredded, each clone guesses in a vacuum, and I stitch a lossy summary back together.',
          'Real intelligence comes from three things: a strong model, full context, and a loop that ships and feeds back. Feed those to one role and it beats a four-person meeting. So the "team" is reserve power, not the default move, and real leverage comes from automating the repetitive work (like that daily brief), not from convening meetings.',
        ],
      },
    },
    shotsLabel: '§ Cockpit, in the wild',
    shotsHint: '(command desk · live activity · daily brief)',
    stack: ['MULTI-AGENT', 'OPENCLAW', 'CLAUDE', 'FEISHU', 'PYTHON'],
  },
}

const team = [
  { emoji: '🍎', name: 'Jobs', zh: '产品 + 设计', en: 'Product + Design' },
  { emoji: '🐧', name: 'Linus', zh: '工程 + 后端', en: 'Engineering + Backend' },
  { emoji: '🧪', name: 'Turing', zh: '质量 + 合规', en: 'Quality + Compliance' },
  { emoji: '📦', name: 'Bezos', zh: '增长 + 商业', en: 'Growth + Business' },
]

export default function WorkAiCockpit() {
  const { lang } = useLang()
  const c = content[lang]
  const s = c.sections

  return (
    <div className="w-full max-w-7xl mx-auto px-5 md:px-margin-edge mt-16 md:mt-24 mb-section-v-rhyme">
      <Link
        to="/work"
        className="font-mono-ui text-mono-ui text-on-surface-variant hover:text-primary transition-colors"
      >
        {c.back}
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter relative items-start mt-stack-lg">
        {/* 侧栏导航 */}
        <aside className="hidden md:block md:col-span-3 sticky top-32 self-start">
          <nav className="flex flex-col space-y-6 border-l border-outline-variant pl-6">
            {['why', 'structure', 'run', 'learned'].map((id, i) => (
              <a
                key={id}
                href={`#${id}`}
                className="font-kicker text-kicker uppercase text-on-surface-variant hover:text-secondary transition-colors tracking-widest"
              >
                {c.rail[i]}
              </a>
            ))}
          </nav>
        </aside>

        <article className="md:col-span-9 lg:col-span-8 max-w-prose">
          {/* 头部 */}
          <p className="font-mono-ui text-mono-ui text-on-surface-variant mb-stack-md uppercase tracking-widest">
            {c.kicker}
          </p>
          <h1 className="font-display text-headline-lg-mobile md:text-display text-primary mb-stack-md">
            {c.title}
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-section-v-rhyme">
            {c.lede}
          </p>

          {/* §缘起 */}
          <Section id="why" h={s.why.h}>
            {s.why.ps.map((p, i) => (
              <p key={i} className={i === 0 ? 'font-body-lg text-body-lg drop-cap' : 'font-body-lg text-body-lg'}>
                {p}
              </p>
            ))}
          </Section>

          {/* §结构 + 组织图 */}
          <Section id="structure" h={s.structure.h}>
            {s.structure.ps.map((p, i) => (
              <p key={i} className="font-body-lg text-body-lg">{p}</p>
            ))}
            <div className="mt-stack-lg border border-outline-variant p-stack-lg md:p-10">
              <div className="flex flex-col items-center">
                {/* CEO */}
                <div className="border border-primary px-5 py-3 text-center">
                  <div className="font-display text-headline-md text-primary">🦅 Elon</div>
                  <div className="font-mono-ui text-xs text-on-surface-variant uppercase tracking-widest mt-1">
                    CEO
                  </div>
                </div>
                <div className="h-8 w-px bg-outline-variant" aria-hidden />
                <div className="h-px w-full max-w-md bg-outline-variant" aria-hidden />
                {/* 四人 */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 w-full">
                  {team.map((m) => (
                    <div key={m.name} className="border border-outline-variant px-3 py-4 text-center">
                      <div className="text-2xl mb-1">{m.emoji}</div>
                      <div className="font-display text-headline-md text-primary">{m.name}</div>
                      <div className="font-mono-ui text-xs text-on-surface-variant uppercase tracking-widest mt-1">
                        {lang === 'zh' ? m.zh : m.en}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Section>

          {/* §怎么运转 + 截图 */}
          <Section id="run" h={s.run.h}>
            {s.run.ps.map((p, i) => (
              <p key={i} className="font-body-lg text-body-lg">{p}</p>
            ))}
          </Section>

          {/* §我学到的 */}
          <Section id="learned" h={s.learned.h}>
            {s.learned.ps.map((p, i) => (
              <p key={i} className="font-body-lg text-body-lg">{p}</p>
            ))}
          </Section>

          {/* 技术栈 */}
          <div className="mt-section-v-rhyme border-t border-outline-variant pt-stack-lg flex flex-wrap gap-2">
            {c.stack.map((tg) => (
              <span
                key={tg}
                className="font-mono-ui text-xs border border-outline-variant px-2 py-1 text-on-surface-variant uppercase tracking-widest"
              >
                {tg}
              </span>
            ))}
          </div>
        </article>
      </div>
    </div>
  )
}

function Section({ id, h, children }: { id: string; h: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mb-section-v-rhyme scroll-mt-32">
      <h2 className="font-display text-headline-lg-mobile md:text-headline-lg text-primary mb-stack-lg">
        {h}
      </h2>
      <div className="space-y-stack-md text-on-surface">{children}</div>
    </section>
  )
}
