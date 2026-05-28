import { useLang } from '../lib/LanguageContext'
import feedData from '../content/feed.json'

// ─── shape of src/content/feed.json (written daily by scripts/fetch-feeds.mjs) ──
type AihotItem = {
  title: string
  source: string
  url: string
  summary: string
  publishedAt: string | null
  category: string | null
}
type BuilderItem = {
  handle: string
  name: string
  bio: string
  text: string
  url: string
  createdAt: string | null
  engagement: number
}
type Podcast = { name: string; title: string; url: string; publishedAt: string | null }
type BPSection = { lead: string; build: { title: string; oneLiner: string }; signals: string[] }
type Feed = {
  generatedAt: string
  date: string
  aihot: { ok: boolean; items: AihotItem[]; stale?: boolean }
  builders: { ok: boolean; items: BuilderItem[]; podcast: Podcast | null; stale?: boolean }
  builderpulse: { ok: boolean; date?: string; sourceUrl?: string; zh?: BPSection; en?: BPSection | null }
  archive: { date: string; aihotCount: number; buildersCount: number; bpBuild: string }[]
}
const feed = feedData as unknown as Feed

const CATEGORY: Record<string, { zh: string; en: string }> = {
  'ai-models': { zh: '模型', en: 'MODEL' },
  'ai-products': { zh: '产品', en: 'PRODUCT' },
  industry: { zh: '行业', en: 'INDUSTRY' },
  paper: { zh: '论文', en: 'PAPER' },
  tip: { zh: '技巧', en: 'TIP' },
}

function relTime(iso: string | null, lang: 'zh' | 'en'): string {
  if (!iso) return ''
  const diff = Date.now() - new Date(iso).getTime()
  if (diff < 0) return ''
  const h = Math.floor(diff / 3_600_000)
  if (h < 1) {
    const m = Math.max(1, Math.floor(diff / 60_000))
    return lang === 'zh' ? `${m} 分钟前` : `${m}m ago`
  }
  if (h < 24) return lang === 'zh' ? `${h} 小时前` : `${h}h ago`
  const d = Math.floor(h / 24)
  return lang === 'zh' ? `${d} 天前` : `${d}d ago`
}

function SectionHeader({ kicker, count }: { kicker: string; count?: string }) {
  return (
    <div className="flex items-center gap-4 mb-stack-lg">
      <div className="font-kicker text-kicker text-on-surface-variant uppercase tracking-widest">{kicker}</div>
      {count ? <div className="font-mono-ui text-mono-ui text-secondary">{count}</div> : null}
      <div className="h-px bg-outline-variant flex-grow" />
    </div>
  )
}

export default function Notes() {
  const { t, lang } = useLang()
  const n = t.notes

  const aihot = feed.aihot
  const builders = feed.builders
  const bp = feed.builderpulse
  const bpSec: BPSection | undefined = lang === 'en' && bp.en ? bp.en : bp.zh

  return (
    <div className="max-w-7xl mx-auto px-5 md:px-margin-edge py-16 md:py-section-v-rhyme">
      {/* ── header + TODAY terminal ───────────────────────────────── */}
      <header className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-start">
        <div className="md:col-span-7 lg:col-span-8 flex flex-col justify-center">
          <h1 className="font-display text-headline-lg-mobile md:text-display text-primary mb-stack-lg">
            {n.title}
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">{n.intro}</p>
        </div>

        <aside className="md:col-span-5 lg:col-span-4 mt-stack-lg md:mt-0">
          <div className="terminal-panel relative overflow-hidden p-stack-lg">
            <div
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '8px 8px' }}
            />
            <div className="flex gap-2 mb-stack-md relative z-10">
              <span className="terminal-dot" />
              <span className="terminal-dot" />
              <span className="terminal-dot" />
            </div>
            <h2 className="font-kicker text-kicker uppercase mb-stack-md tracking-widest relative z-10 text-surface-variant">
              {n.todayKicker} · {feed.date}
            </h2>
            <div className="font-mono-ui text-mono-ui text-tertiary-fixed-dim space-y-4 relative z-10">
              <div className="flex items-start gap-2">
                <span className="text-secondary opacity-80">~</span>
                <p>
                  {aihot.items.length} · AI HOT
                  {aihot.stale ? ' (cached)' : ''}
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-secondary opacity-80">~</span>
                <p>
                  {builders.items.length} · BUILDERS
                  {builders.stale ? ' (cached)' : ''}
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-secondary opacity-80">~</span>
                <p>{bpSec?.build.title || '—'} · INDIE</p>
              </div>
            </div>
          </div>
        </aside>
      </header>

      {/* ── § AI HOT ──────────────────────────────────────────────── */}
      <section className="mt-section-v-rhyme">
        <SectionHeader kicker={n.sectionAihotKicker} count={`${aihot.items.length}`} />
        {aihot.items.length === 0 ? (
          <p className="font-body-md text-body-md text-on-surface-variant py-stack-lg">{n.emptyState}</p>
        ) : (
          <div className="border-t border-outline-variant">
            {aihot.items.map((it) => (
              <a
                key={it.url}
                href={it.url}
                target="_blank"
                rel="noopener noreferrer"
                className="py-stack-lg border-b border-outline-variant grid grid-cols-1 md:grid-cols-12 gap-gutter group hover:bg-surface-container-low transition-colors duration-300"
              >
                <div className="md:col-span-2 pt-1 flex md:flex-col gap-2">
                  <div className="font-kicker text-kicker text-on-surface-variant uppercase">
                    {relTime(it.publishedAt, lang)}
                  </div>
                  {it.category && CATEGORY[it.category] ? (
                    <div className="font-kicker text-kicker text-secondary uppercase">
                      {CATEGORY[it.category][lang]}
                    </div>
                  ) : null}
                </div>
                <div className="md:col-span-10 pr-4">
                  <h3 className="font-display text-headline-md text-primary mb-stack-sm group-hover:text-secondary transition-colors duration-300">
                    {it.title}
                  </h3>
                  {it.summary ? (
                    <p className="font-body-md text-body-md text-on-surface-variant max-w-3xl mb-stack-sm">
                      {it.summary}
                    </p>
                  ) : null}
                  <div className="font-mono-ui text-mono-ui text-on-surface-variant opacity-70">{it.source}</div>
                </div>
              </a>
            ))}
          </div>
        )}
      </section>

      {/* ── § BUILDERS ────────────────────────────────────────────── */}
      <section className="mt-section-v-rhyme">
        <SectionHeader kicker={n.sectionBuildersKicker} count={`${builders.items.length}`} />
        {builders.items.length === 0 ? (
          <p className="font-body-md text-body-md text-on-surface-variant py-stack-lg">{n.emptyState}</p>
        ) : (
          <div className="border-t border-outline-variant">
            {builders.items.map((b) => (
              <a
                key={b.url}
                href={b.url}
                target="_blank"
                rel="noopener noreferrer"
                className="py-stack-lg border-b border-outline-variant grid grid-cols-1 md:grid-cols-12 gap-gutter group hover:bg-surface-container-low transition-colors duration-300"
              >
                <div className="md:col-span-3 pt-1">
                  <div className="font-mono-ui text-mono-ui text-primary group-hover:text-secondary transition-colors">
                    @{b.handle}
                  </div>
                  {b.bio ? (
                    <div className="font-kicker text-kicker text-on-surface-variant uppercase mt-2 leading-relaxed">
                      {b.bio}
                    </div>
                  ) : null}
                </div>
                <div className="md:col-span-9 pr-4">
                  <p className="font-body-md text-body-md text-on-surface max-w-3xl">{b.text}</p>
                  <div className="font-kicker text-kicker text-on-surface-variant uppercase mt-stack-sm">
                    {relTime(b.createdAt, lang)} · X
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}

        {builders.podcast ? (
          <a
            href={builders.podcast.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-stack-lg block terminal-panel p-stack-lg group"
          >
            <div className="font-kicker text-kicker uppercase tracking-widest text-surface-variant mb-stack-sm">
              {n.podcastLabel}
            </div>
            <div className="font-mono-ui text-mono-ui text-tertiary-fixed-dim mb-2">{builders.podcast.name}</div>
            <div className="font-body-lg text-body-lg text-[#f0f0f0] group-hover:text-secondary-fixed-dim transition-colors">
              {builders.podcast.title}
            </div>
          </a>
        ) : null}
      </section>

      {/* ── § INDIE TODAY (BuilderPulse) ──────────────────────────── */}
      <section className="mt-section-v-rhyme">
        <SectionHeader kicker={n.sectionIndieKicker} />
        {bp.ok && bpSec ? (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            <div className="md:col-span-8">
              <div className="font-kicker text-kicker text-secondary uppercase tracking-widest mb-stack-sm">
                {n.buildLabel}
              </div>
              <h3 className="font-display text-headline-md text-primary mb-stack-md">{bpSec.build.title}</h3>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed mb-stack-lg">
                {bpSec.build.oneLiner}
              </p>
              {bpSec.signals.length ? (
                <>
                  <div className="font-kicker text-kicker text-on-surface-variant uppercase tracking-widest mb-stack-md">
                    {n.signalsLabel}
                  </div>
                  <ol className="space-y-stack-md list-none">
                    {bpSec.signals.map((s, i) => (
                      <li key={i} className="flex gap-3 font-body-md text-body-md text-on-surface-variant max-w-2xl">
                        <span className="font-mono-ui text-secondary shrink-0">{String(i + 1).padStart(2, '0')}</span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ol>
                </>
              ) : null}
            </div>
            <aside className="md:col-span-4">
              <div className="border-l-2 border-secondary pl-stack-md">
                <p className="font-body-md text-body-md text-on-surface-variant italic leading-relaxed mb-stack-md">
                  {bpSec.lead}
                </p>
                {bp.sourceUrl ? (
                  <a
                    href={bp.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono-ui text-mono-ui text-primary hover:text-secondary transition-colors"
                  >
                    {n.fullReport}
                  </a>
                ) : null}
              </div>
            </aside>
          </div>
        ) : (
          <p className="font-body-md text-body-md text-on-surface-variant py-stack-lg">{n.emptyState}</p>
        )}
      </section>

      {/* ── § 7-day archive ───────────────────────────────────────── */}
      {feed.archive.length > 1 ? (
        <section className="mt-section-v-rhyme">
          <SectionHeader kicker={n.archiveKicker} />
          <div className="border-t border-outline-variant">
            {feed.archive.map((a) => (
              <div
                key={a.date}
                className="py-stack-md border-b border-outline-variant grid grid-cols-1 md:grid-cols-12 gap-gutter"
              >
                <div className="md:col-span-2 font-kicker text-kicker text-on-surface-variant uppercase pt-1">
                  {a.date}
                </div>
                <div className="md:col-span-10 font-mono-ui text-mono-ui text-on-surface-variant">
                  {a.aihotCount} · AI HOT &nbsp;·&nbsp; {a.buildersCount} · BUILDERS
                  {a.bpBuild ? <span className="text-primary"> &nbsp;·&nbsp; {a.bpBuild}</span> : null}
                </div>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {/* ── auto-update footnote ──────────────────────────────────── */}
      <p className="mt-section-v-rhyme font-kicker text-kicker text-on-surface-variant uppercase tracking-widest opacity-70">
        {n.updatedPrefix} {new Date(feed.generatedAt).toISOString().slice(0, 16).replace('T', ' ')} UTC · {n.sourceNote}
      </p>
    </div>
  )
}
