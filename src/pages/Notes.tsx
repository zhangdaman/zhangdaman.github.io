import { useLang } from '../lib/LanguageContext'

export default function Notes() {
  const { t } = useLang()
  return (
    <div className="max-w-7xl mx-auto px-5 md:px-margin-edge py-16 md:py-section-v-rhyme">
      <header className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-start">
        <div className="md:col-span-7 lg:col-span-8 flex flex-col justify-center">
          <h1 className="font-display text-headline-lg-mobile md:text-display text-primary mb-stack-lg">
            {t.notes.title}
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
            {t.notes.intro}
          </p>
        </div>

        <aside className="md:col-span-5 lg:col-span-4 mt-stack-lg md:mt-0">
          <div className="terminal-panel relative overflow-hidden p-stack-lg">
            <div
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
                backgroundSize: '8px 8px',
              }}
            />
            <div className="flex gap-2 mb-stack-md relative z-10">
              <span className="terminal-dot" />
              <span className="terminal-dot" />
              <span className="terminal-dot" />
            </div>
            <h2 className="font-kicker text-kicker uppercase mb-stack-md tracking-widest relative z-10 text-surface-variant">
              {t.notes.nowKicker}
            </h2>
            <div className="font-mono-ui text-mono-ui text-tertiary-fixed-dim space-y-4 relative z-10">
              {t.notes.nowEntries.map((entry) => (
                <div key={entry} className="flex items-start gap-2">
                  <span className="text-secondary opacity-80">~</span>
                  <p>{entry}</p>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </header>

      <section className="mt-section-v-rhyme">
        <div className="flex items-center gap-4 mb-stack-lg">
          <div className="font-kicker text-kicker text-on-surface-variant uppercase tracking-widest">
            {t.notes.archiveKicker}
          </div>
          <div className="h-px bg-outline-variant flex-grow" />
        </div>

        <div className="border-t border-outline-variant">
          {t.notesList.map((n) => (
            <article
              key={n.title}
              className="py-stack-lg border-b border-outline-variant grid grid-cols-1 md:grid-cols-12 gap-gutter group hover:bg-surface-container-low transition-colors duration-300"
            >
              <div className="md:col-span-2 pt-1">
                <div className="font-kicker text-kicker text-on-surface-variant uppercase">
                  {n.date}
                </div>
              </div>
              <div className="md:col-span-8 pr-4">
                <h3 className="font-display text-headline-md text-primary mb-stack-sm group-hover:text-secondary transition-colors duration-300">
                  {n.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-3xl">
                  {n.blurb}
                </p>
              </div>
              <div className="md:col-span-2 flex items-start md:justify-end pt-1 mt-4 md:mt-0">
                <a
                  href={n.to}
                  className="font-mono-ui text-mono-ui text-primary hover:text-secondary flex items-center gap-2 group-hover:translate-x-1 transition-transform duration-300"
                >
                  → {n.via}
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
