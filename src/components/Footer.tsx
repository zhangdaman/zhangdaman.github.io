import { site } from '../lib/siteConfig'

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-outline-variant mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-5 md:px-margin-edge py-12 max-w-7xl mx-auto gap-stack-lg">
        <div className="font-mono-ui text-kicker uppercase text-on-surface-variant">
          {site.name} © {site.year}
        </div>
        <div className="flex flex-wrap justify-center gap-6 font-mono-ui text-kicker uppercase">
          <span className="text-on-surface-variant">Playfair Display</span>
          <span className="text-on-surface-variant">Source Serif 4</span>
          <span className="text-on-surface-variant">JetBrains Mono</span>
          <span className="text-on-surface-variant">·</span>
          <span className="text-on-surface-variant">Built with React · Vite · Tailwind</span>
        </div>
      </div>
    </footer>
  )
}
