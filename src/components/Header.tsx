import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { nav, site } from '../lib/siteConfig'
import { useLang } from '../lib/LanguageContext'

export default function Header() {
  const [open, setOpen] = useState(false)
  const { lang, setLang, t } = useLang()

  const LangToggle = (
    <div className="flex items-center gap-2 font-mono-ui text-mono-ui uppercase tracking-widest">
      <button
        onClick={() => setLang('en')}
        className={
          lang === 'en'
            ? 'text-secondary font-bold'
            : 'text-on-surface-variant hover:text-secondary transition-colors'
        }
        aria-label="Switch to English"
        aria-pressed={lang === 'en'}
      >
        EN
      </button>
      <span className="text-outline">/</span>
      <button
        onClick={() => setLang('zh')}
        className={
          lang === 'zh'
            ? 'text-secondary font-bold'
            : 'text-on-surface-variant hover:text-secondary transition-colors'
        }
        aria-label="切换至中文"
        aria-pressed={lang === 'zh'}
      >
        中
      </button>
    </div>
  )

  return (
    <header className="bg-surface border-b border-outline-variant sticky top-0 z-50">
      <div className="flex justify-between items-center w-full px-5 md:px-margin-edge py-6 max-w-7xl mx-auto">
        <Link
          to="/"
          className="font-mono-ui text-mono-ui font-bold text-primary tracking-tighter hover:opacity-70 transition-opacity"
        >
          {site.name}
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <nav className="flex space-x-8 font-mono-ui text-mono-ui tracking-widest">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  isActive
                    ? 'text-secondary font-bold border-b-2 border-secondary pb-1'
                    : 'text-on-surface-variant hover:text-secondary transition-colors duration-200'
                }
              >
                {t.nav[item.key]}
              </NavLink>
            ))}
          </nav>
          <span className="h-4 w-px bg-outline-variant" aria-hidden />
          {LangToggle}
        </div>

        <button
          aria-label="menu"
          className="md:hidden text-primary"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-outline-variant">
          <nav className="flex flex-col px-5 py-6 gap-5 font-mono-ui text-mono-ui tracking-widest">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  isActive ? 'text-secondary font-bold' : 'text-on-surface-variant'
                }
              >
                {t.nav[item.key]}
              </NavLink>
            ))}
            <div className="pt-4 border-t border-outline-variant">{LangToggle}</div>
          </nav>
        </div>
      )}
    </header>
  )
}
