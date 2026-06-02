export const site = {
  name: '张丹',
  year: new Date().getFullYear(),
  email: 'daman0613.dabai@gmail.com',
  wechat: 'zhangdan6904',
  xiaohongshu: '@待补充',
  github: 'https://github.com/',
  // 简历 / PRD 不公开发布，走"邮件索取"路径 —— 点击直接拉起邮件客户端
  resumeUrl: 'mailto:daman0613.dabai@gmail.com?subject=Resume%20Request',
  prdArchiveUrl: 'mailto:daman0613.dabai@gmail.com?subject=Selected%20PRD%20Request',
}

// 路由配置 —— label 字段从 strings.ts 按当前语言取
export type NavKey = 'home' | 'about' | 'work' | 'writing' | 'notes' | 'contact'

export const nav: { key: NavKey; to: string }[] = [
  { key: 'home', to: '/' },
  { key: 'about', to: '/about' },
  { key: 'work', to: '/work' },
  { key: 'writing', to: '/writing' },
  { key: 'notes', to: '/notes' },
  { key: 'contact', to: '/contact' },
]
