import { Link } from 'react-router-dom'
import { useLang } from '../lib/LanguageContext'

// 文章列表——后续在这里直接加条目即可，无需其他配置
// 格式：{ slug, zhTitle, enTitle, zhDate, tag, zhDesc }
const articles: {
  slug: string
  zhTitle: string
  enTitle: string
  date: string
  tag: string
  zhDesc: string
}[] = [
  // 暂无文章，先空着。加文章时取消注释并填写：
  // {
  //   slug: 'ai-pm-is-not-tech-pm',
  //   zhTitle: 'AI PM 不是技术 PM，是什么？',
  //   enTitle: 'AI PM is not a Tech PM. So what is it?',
  //   date: '2026.06',
  //   tag: 'AI 产品',
  //   zhDesc: '正在重新定义这个角色的边界。',
  // },
]

export default function Writing() {
  const { lang, t } = useLang()

  return (
    <div className="max-w-7xl mx-auto px-5 md:px-margin-edge py-16 md:py-section-v-rhyme">
      <header className="mb-section-v-rhyme">
        <h1 className="font-display text-headline-lg-mobile md:text-headline-lg text-primary mb-stack-md">
          {t.writing.title}
        </h1>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-prose">
          {t.writing.intro}
        </p>
      </header>

      {articles.length === 0 ? (
        <div className="border-t border-outline-variant pt-stack-lg">
          <p className="font-body-md text-body-md text-on-surface-variant">
            {t.writing.emptyState}
            {' '}
            <Link
              to="/notes"
              className="text-primary border-b border-primary hover:text-secondary hover:border-secondary transition-colors"
            >
              {lang === 'zh' ? '去手记 →' : 'Go to Notes →'}
            </Link>
          </p>
        </div>
      ) : (
        <div className="border-t border-outline-variant">
          {articles.map((a) => (
            <article
              key={a.slug}
              className="border-b border-outline-variant py-stack-lg md:py-stack-xl hover:bg-surface-container-low transition-colors -mx-5 md:-mx-margin-edge px-5 md:px-margin-edge"
            >
              <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-stack-lg">
                <h2 className="font-display text-headline-md text-primary flex-1">
                  {lang === 'zh' ? a.zhTitle : a.enTitle}
                </h2>
                <span className="font-mono-ui text-mono-ui text-on-surface-variant whitespace-nowrap">
                  {a.date} · {a.tag}
                </span>
              </div>
              {lang === 'zh' && (
                <p className="font-body-md text-body-md text-on-surface-variant mt-stack-sm max-w-prose">
                  {a.zhDesc}
                </p>
              )}
            </article>
          ))}
        </div>
      )}
    </div>
  )
}
