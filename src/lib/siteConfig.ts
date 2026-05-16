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

export const nav = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Work', to: '/work' },
  { label: 'Notes', to: '/notes' },
  { label: 'Contact', to: '/contact' },
] as const
