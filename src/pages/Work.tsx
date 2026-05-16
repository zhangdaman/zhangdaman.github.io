import { site } from '../lib/siteConfig'
import { useLang } from '../lib/LanguageContext'
import type { WorkItemContent } from '../lib/strings'

type WorkState = WorkItemContent['state']

export default function Work() {
  const { t } = useLang()
  return (
    <div className="max-w-7xl mx-auto px-5 md:px-margin-edge py-16 md:py-section-v-rhyme">
      <header className="mb-section-v-rhyme">
        <h1 className="font-display text-headline-lg-mobile md:text-display text-primary mb-stack-md">
          {t.work.title}
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-stack-md">
          {t.work.subtitle}
        </p>
        <p className="font-mono-ui text-mono-ui text-on-surface-variant">
          {t.work.ctaPrefix}{' '}
          <a
            href={`mailto:${site.email}`}
            className="text-primary border-b border-primary hover:text-secondary hover:border-secondary transition-colors"
          >
            {t.work.ctaEmailLabel}
          </a>
          {t.work.ctaWechatPrefix}{' '}
          <code className="font-mono-ui text-primary">{site.wechat}</code>
          。
        </p>
      </header>

      <WorkSection kicker="§ 01 — SHIPPING" state="shipping" />
      <WorkSection kicker="§ 02 — SHIPPED" state="shipped" />
    </div>
  )
}

function WorkSection({ kicker, state }: { kicker: string; state: WorkState }) {
  const { t } = useLang()
  const items = t.workItems.filter((w) => w.state === state)
  if (items.length === 0) return null

  return (
    <section className="mb-section-v-rhyme border-t border-outline-variant pt-stack-lg">
      <h2 className="font-kicker text-kicker text-on-surface-variant uppercase mb-stack-lg flex items-center gap-4">
        <span>{kicker}</span>
        <span className="h-px bg-outline-variant flex-grow" />
      </h2>

      <div className="grid grid-cols-1 gap-gutter">
        {items.map((item) => (
          <WorkCard key={item.id} item={item} />
        ))}

        {state === 'shipped' && (
          <p className="font-mono-ui text-mono-ui text-on-surface-variant mt-stack-md">
            {t.work.moreShipped}
          </p>
        )}
      </div>
    </section>
  )
}

function WorkCard({ item }: { item: WorkItemContent }) {
  return (
    <article className="border border-outline-variant p-stack-lg md:p-10 hover:bg-surface-container-low transition-colors">
      <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-2 mb-stack-md">
        <h3 className="font-display text-headline-md text-primary">{item.name}</h3>
        {item.tag ? (
          <span className="font-mono-ui text-mono-ui text-on-surface-variant flex items-center gap-2">
            {item.state === 'shipping' && (
              <span className="w-2 h-2 bg-secondary animate-pulse inline-block" aria-hidden />
            )}
            [{item.tag}]
          </span>
        ) : item.meta ? (
          <span className="font-mono-ui text-mono-ui text-on-surface-variant">{item.meta}</span>
        ) : null}
      </div>

      <p className="font-body-md text-body-md text-on-surface-variant mb-stack-lg max-w-3xl">
        {item.oneLiner}
      </p>

      <div className="flex flex-wrap gap-2">
        {item.techTags?.map((tg) => (
          <span
            key={tg}
            className="font-mono-ui text-xs border border-outline-variant px-2 py-1 text-on-surface-variant uppercase tracking-widest"
          >
            {tg}
          </span>
        ))}
      </div>
    </article>
  )
}
