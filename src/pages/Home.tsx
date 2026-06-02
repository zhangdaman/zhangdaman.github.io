import { Link } from 'react-router-dom'
import { useLang } from '../lib/LanguageContext'
import { nav } from '../lib/siteConfig'

// 首页：PRD 极简一屏版
// 姓名 + slogan + 引言 + 导航，无动效，无终端组件

const NAV_EXCLUDE = ['home']

export default function Home() {
  const { t, lang } = useLang()

  return (
    <div className="min-h-[calc(100vh-120px)] flex items-center">
      <div className="px-5 md:px-margin-edge max-w-3xl mx-auto w-full py-16 md:py-24">

        {/* 姓名 */}
        <div className="mb-16 md:mb-20">
          <h1 className="font-display text-headline-lg-mobile md:text-headline-lg text-primary mb-1">
            张丹
          </h1>
          <p className="font-mono-ui text-mono-ui text-on-surface-variant">
            Zhang Dan · {lang === 'zh' ? 'AI 产品经理 / 写作者' : 'AI Product Manager / Writer'}
          </p>
        </div>

        {/* slogan */}
        <blockquote className="mb-12 md:mb-16">
          <p className="font-display text-headline-md md:text-headline-lg text-primary leading-snug">
            {t.home.slogan}
          </p>
        </blockquote>

        {/* 一句话引言 */}
        <p className="font-body-md text-body-md text-on-surface-variant max-w-prose mb-16 md:mb-20">
          {t.home.lede}
        </p>

        {/* 导航 */}
        <nav className="flex flex-wrap gap-x-6 gap-y-3">
          {nav
            .filter((item) => !NAV_EXCLUDE.includes(item.key))
            .map((item) => (
              <Link
                key={item.key}
                to={item.to}
                className="font-body-md text-body-md text-on-surface-variant hover:text-primary border-b border-transparent hover:border-primary transition-colors pb-px"
              >
                {t.nav[item.key]}
              </Link>
            ))}
        </nav>

      </div>
    </div>
  )
}
