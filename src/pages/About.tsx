import ShapeGrid from '../components/ShapeGrid'
import { useLang } from '../lib/LanguageContext'

export default function About() {
  const { t } = useLang()
  return (
    <div className="w-full max-w-7xl mx-auto px-5 md:px-margin-edge mt-16 md:mt-24 mb-section-v-rhyme">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter relative items-start">
        <aside className="hidden md:block md:col-span-3 sticky top-32 self-start">
          <nav className="flex flex-col space-y-6 border-l border-outline-variant pl-6">
            <a
              href="#pov"
              className="font-kicker text-kicker uppercase text-primary hover:text-secondary transition-colors tracking-widest"
            >
              {t.about.sideRail.pov}
            </a>
            <a
              href="#arc"
              className="font-kicker text-kicker uppercase text-on-surface-variant hover:text-secondary transition-colors tracking-widest"
            >
              {t.about.sideRail.arc}
            </a>
            <a
              href="#focus"
              className="font-kicker text-kicker uppercase text-on-surface-variant hover:text-secondary transition-colors tracking-widest"
            >
              {t.about.sideRail.focus}
            </a>
          </nav>
        </aside>

        <article className="md:col-span-9 lg:col-span-8 max-w-prose">
          <section id="pov" className="mb-section-v-rhyme scroll-mt-32">
            <h1 className="font-display text-headline-lg-mobile md:text-headline-lg text-primary mb-stack-lg">
              {t.about.title}
            </h1>

            <div className="space-y-stack-md text-on-surface">
              {t.about.povParas.map((para, i) => (
                <p
                  key={i}
                  className={
                    i === 0
                      ? 'font-body-lg text-body-lg drop-cap'
                      : 'font-body-lg text-body-lg'
                  }
                >
                  {para}
                </p>
              ))}
            </div>

            <blockquote className="font-display text-headline-md text-primary border-t border-b border-outline-variant py-stack-lg my-section-v-rhyme italic">
              {t.about.pullQuote}
            </blockquote>
          </section>

          <section
            id="arc"
            className="mb-section-v-rhyme scroll-mt-32 border-t border-outline-variant pt-stack-lg"
          >
            <h2 className="font-kicker text-kicker uppercase tracking-widest text-on-surface-variant mb-stack-md">
              {t.about.arcKicker}
            </h2>
            <p className="font-body-md text-body-md text-on-surface">{t.about.arcBody}</p>
          </section>

          <section id="focus" className="scroll-mt-32 border-t border-outline-variant pt-stack-lg">
            <h2 className="font-kicker text-kicker uppercase tracking-widest text-on-surface-variant mb-stack-lg">
              {t.about.focusKicker}
            </h2>

            <div className="bg-tertiary-container border border-outline rounded-[6px] relative overflow-hidden">
              <div className="absolute inset-0">
                <ShapeGrid
                  shape="square"
                  direction="diagonal"
                  speed={0.3}
                  squareSize={36}
                  borderColor="rgba(255, 255, 255, 0.07)"
                  hoverFillColor="rgba(157, 66, 47, 0.6)"
                  hoverTrailAmount={6}
                />
              </div>
              <div className="relative z-10 p-8 pointer-events-none">
                <p className="font-mono-ui text-mono-ui mb-6 text-on-tertiary">
                  {t.about.focusIntro}
                </p>
                <ul className="font-mono-ui text-mono-ui space-y-4 text-surface-variant">
                  {t.about.focusItems.map((it) => (
                    <li key={it.title} className="flex items-start">
                      <span
                        aria-hidden
                        className="mr-3 mt-1 block w-2 h-2 bg-secondary flex-shrink-0"
                      />
                      <div>
                        <strong className="text-on-tertiary block">{it.title}</strong>
                        <span className="text-tertiary-fixed-dim">{it.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </article>
      </div>
    </div>
  )
}
