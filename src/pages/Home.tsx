import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { TerminalPanel, TerminalLine } from '../components/TerminalPanel'
import ProximityText from '../components/ProximityText'
import { useLang } from '../lib/LanguageContext'

export default function Home() {
  const { t } = useLang()
  return (
    <div className="px-5 md:px-margin-edge max-w-7xl mx-auto w-full pt-16 md:pt-section-v-rhyme pb-16 md:pb-section-v-rhyme">
      <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-section-v-rhyme items-center">
        <div className="md:col-span-8 flex flex-col gap-stack-xl">
          <h1 className="font-display text-headline-lg-mobile md:text-display">
            <ProximityText
              lines={t.home.tagline}
              baseColor="#1b1c1c"
              accentColor="#9d422f"
              radius={140}
              falloff="gaussian"
            />
          </h1>

          <div className="font-mono-ui text-mono-ui text-on-surface-variant flex flex-wrap items-center gap-2">
            <span>{t.home.credibility}</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-stack-md mt-stack-xl border-t border-outline-variant pt-stack-xl">
            <CTA to="/work" title={t.home.ctaWork} sub={t.home.ctaWorkSub} />
            <CTA to="/notes" title={t.home.ctaNotes} sub={t.home.ctaNotesSub} />
          </div>
        </div>

        <div className="md:col-span-4 mt-8 md:mt-0">
          <TerminalPanel>
            <div className="flex flex-col gap-3">
              {t.home.terminal.map((line) => (
                <TerminalLine key={line}>{line}</TerminalLine>
              ))}
              <TerminalLine emphasize>{t.home.terminalReady}</TerminalLine>
            </div>
          </TerminalPanel>
        </div>
      </section>

      <div className="w-full h-px bg-outline-variant" />
    </div>
  )
}

function CTA({ to, title, sub }: { to: string; title: string; sub: string }) {
  return (
    <Link
      to={to}
      className="group flex items-center justify-between flex-1 p-6 border border-outline-variant hover:border-primary transition-colors bg-surface-container-lowest"
    >
      <div className="flex flex-col gap-2">
        <span className="font-mono-ui text-mono-ui font-bold text-primary">{title}</span>
        <span className="font-kicker text-kicker text-on-surface-variant uppercase">{sub}</span>
      </div>
      <ArrowRight
        size={20}
        className="text-primary group-hover:translate-x-1 transition-transform"
      />
    </Link>
  )
}
