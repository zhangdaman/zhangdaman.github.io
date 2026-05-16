import { createContext, useContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import { strings } from './strings'
import type { Lang, Strings } from './strings'

type Ctx = {
  lang: Lang
  setLang: (l: Lang) => void
  t: Strings
}

const LanguageContext = createContext<Ctx | null>(null)

function readInitialLang(): Lang {
  if (typeof window === 'undefined') return 'zh'
  const saved = window.localStorage.getItem('lang')
  if (saved === 'en' || saved === 'zh') return saved
  return 'zh'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(readInitialLang)

  useEffect(() => {
    window.localStorage.setItem('lang', lang)
    document.documentElement.lang = lang === 'zh' ? 'zh' : 'en'
  }, [lang])

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: strings[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang must be used within LanguageProvider')
  return ctx
}
