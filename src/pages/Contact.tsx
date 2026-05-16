import { useState, useRef } from 'react'
import type { ReactNode } from 'react'
import { ExternalLink, FileText, Mail, MessageSquare, Rss, Github } from 'lucide-react'
import { site } from '../lib/siteConfig'
import { useLang } from '../lib/LanguageContext'

const HIRING_ICONS: ReactNode[] = [
  <FileText size={20} key="resume" />,
  <FileText size={20} key="prd" />,
  <Mail size={20} key="email" />,
  <MessageSquare size={20} key="wechat" />,
]
const FOLLOWING_ICONS: ReactNode[] = [
  <ExternalLink size={20} key="xhs" />,
  <Github size={20} key="github" />,
  <Rss size={20} key="rss" />,
]

const HIRING_HREFS = [site.resumeUrl, site.prdArchiveUrl, '', '']
const HIRING_COPIES = ['', '', site.email, site.wechat]

const FOLLOWING_HREFS = ['#', site.github, '#']

function resolveLabel(label: string): string {
  if (label === '__EMAIL__') return site.email
  if (label === '__WECHAT__') return `WeChat — ${site.wechat}`
  return label
}

function resolveTag(tag: string): string {
  if (tag === '__XHS__') return site.xiaohongshu
  return tag
}

export default function Contact() {
  const { t } = useLang()

  const hiringItems = t.contact.hiringItems.map((it, i) => ({
    icon: HIRING_ICONS[i],
    label: resolveLabel(it.label),
    tag: resolveTag(it.tag),
    href: HIRING_HREFS[i] || undefined,
    copy: HIRING_COPIES[i] || undefined,
  }))

  const followingItems = t.contact.followingItems.map((it, i) => ({
    icon: FOLLOWING_ICONS[i],
    label: resolveLabel(it.label),
    tag: resolveTag(it.tag),
    href: FOLLOWING_HREFS[i],
  }))

  return (
    <div className="max-w-7xl mx-auto w-full px-5 md:px-margin-edge py-16 md:py-section-v-rhyme">
      <header className="mb-section-v-rhyme">
        <h1 className="font-display text-headline-lg-mobile md:text-display text-primary mb-stack-md">
          {t.contact.title}
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          {t.contact.subtitle}
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-outline-variant">
        <ContactColumn
          dotColor="bg-secondary"
          label={t.contact.hiringKicker}
          intro={t.contact.hiringIntro}
          items={hiringItems}
          rightBorder
        />
        <ContactColumn
          dotColor="bg-primary"
          label={t.contact.followingKicker}
          intro={t.contact.followingIntro}
          items={followingItems}
        />
      </div>

      <InteractiveTerminal />
    </div>
  )
}

type Item = {
  icon: ReactNode
  label: string
  tag: string
  href?: string
  copy?: string
}

function ContactColumn({
  dotColor,
  label,
  intro,
  items,
  rightBorder = false,
}: {
  dotColor: string
  label: string
  intro: string
  items: Item[]
  rightBorder?: boolean
}) {
  const [copied, setCopied] = useState<string | null>(null)

  async function handleCopy(value: string) {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(value)
      setTimeout(() => setCopied(null), 1500)
    } catch {
      /* noop */
    }
  }

  return (
    <div
      className={`p-8 md:p-12 bg-surface-container-lowest relative overflow-hidden border-b md:border-b-0 ${
        rightBorder ? 'md:border-r border-outline-variant' : ''
      }`}
    >
      <h2 className="font-kicker text-kicker text-on-surface-variant mb-stack-lg uppercase tracking-widest flex items-center gap-2">
        <span className={`w-2 h-2 inline-block ${dotColor}`} />
        {label}
      </h2>
      <p className="font-body-md text-body-md text-on-surface mb-stack-lg max-w-md">{intro}</p>

      <div className="flex flex-col mt-8">
        {items.map((it) => {
          const sharedClass =
            'group flex items-center justify-between py-4 border-b border-outline-variant hover:bg-surface-container-low transition-colors duration-200 px-2 -mx-2 w-full text-left'
          const inner = (
            <>
              <div className="flex items-center gap-4">
                <span className="text-on-surface-variant group-hover:text-primary transition-colors">
                  {it.icon}
                </span>
                <span className="font-mono-ui text-mono-ui text-primary font-bold">{it.label}</span>
              </div>
              <span className="font-kicker text-kicker text-on-surface-variant uppercase border border-outline-variant px-2 py-1 tracking-widest">
                {copied === it.copy ? 'COPIED' : it.tag}
              </span>
            </>
          )

          if (it.copy) {
            return (
              <button key={it.label} className={sharedClass} onClick={() => handleCopy(it.copy!)}>
                {inner}
              </button>
            )
          }
          return (
            <a key={it.label} href={it.href} className={sharedClass}>
              {inner}
            </a>
          )
        })}
      </div>
    </div>
  )
}

function InteractiveTerminal() {
  const { t } = useLang()
  const [input, setInput] = useState('')
  const [history, setHistory] = useState<string[]>([
    '# Interactive contact mode initialized.',
    t.contact.terminalHelp,
  ])
  const inputRef = useRef<HTMLInputElement>(null)

  function runCommand(cmd: string) {
    const c = cmd.trim().toLowerCase()
    if (!c) return
    let response = ''
    let openUrl: string | null = null

    switch (c) {
      case 'resume':
        response = `→ opening ${site.resumeUrl}`
        openUrl = site.resumeUrl
        break
      case 'prd':
        response = `→ opening ${site.prdArchiveUrl}`
        openUrl = site.prdArchiveUrl
        break
      case 'email':
        response = `→ ${site.email} copied to clipboard`
        navigator.clipboard?.writeText(site.email).catch(() => {})
        break
      case 'github':
        response = `→ opening ${site.github}`
        openUrl = site.github
        break
      case 'xhs':
        response = `→ xiaohongshu ${site.xiaohongshu}`
        break
      case 'exit':
        response = '→ bye.'
        break
      case 'help':
        response = '→ commands: resume, prd, email, github, xhs, exit'
        break
      default:
        response = `→ unknown command: ${c}. try "help".`
    }

    setHistory((h) => [...h, `> ${c}`, response])
    setInput('')
    if (openUrl && openUrl !== '#') {
      window.open(openUrl, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <div className="mt-section-v-rhyme max-w-3xl mx-auto">
      <div className="terminal-panel overflow-hidden">
        <div className="bg-[#252525] px-4 py-2 flex items-center gap-2 border-b border-[#333]">
          <span className="terminal-dot" />
          <span className="terminal-dot" />
          <span className="terminal-dot" />
          <span className="ml-3 font-mono-ui text-xs text-[#888]">contact_interface.sh</span>
        </div>
        <div
          className="p-6 font-mono-ui text-mono-ui text-[#E5E5E2]"
          onClick={() => inputRef.current?.focus()}
        >
          <div className="mb-4">
            <span className="text-secondary">alex@sys</span>
            <span className="text-[#888]">:~ $</span> <span>./contact.sh --interactive</span>
          </div>
          <div className="space-y-1 mb-4 text-[#888]">
            {history.map((line, i) => (
              <div key={i}>{line}</div>
            ))}
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              runCommand(input)
            }}
            className="flex items-center border-b border-[#333] pb-2"
          >
            <span className="text-secondary mr-2">&gt;</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={t.contact.terminalHint}
              className="bg-transparent border-none outline-none text-[#E5E5E2] font-mono-ui w-full p-0 placeholder:text-[#555]"
              autoComplete="off"
            />
          </form>
        </div>
      </div>
    </div>
  )
}
