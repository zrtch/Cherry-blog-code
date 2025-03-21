import { DefaultTheme, defineConfig } from 'vitepress'

const nav: DefaultTheme.NavItem[] = [
  { text: 'AI知识库', link: '/fe/ai/index.md' },
  { text: '前端基础', link: '/fe/default/html.md' },
  { text: '可视化', link: '/fe/visualization/index.md' },
  { text: '工程化', link: '/fe/engineering/vite.md' },
  { text: '资源合集', link: '/fe/resource/index.md' },
]
const sidebar: DefaultTheme.Sidebar = {
  '/fe/default': [
    {
      text: 'HTML / CSS',
      items: [
        { text: 'HTML 基础知识', link: '/fe/default/html.md' },
        { text: 'CSS 基础知识', link: '/fe/default/css.md' },
      ],
    },
    {
      text: 'JavaScript 基础知识',
      items: [{ text: 'JavaScript', link: '/fe/default/js.md' }],
    },
  ],
  '/fe/engineering': [
    {
      text: '工程化',
      items: [
        { text: 'Vite', link: '/fe/engineering/vite.md' },
        { text: 'Npm', link: '/fe/engineering/npm.md' },
        { text: '效率', link: '/fe/engineering/multi-project-startup.md' },
        { text: '运维', link: '/fe/engineering/operations.md' },
      ],
    },
  ],
  '/fe/ai': [
    {
      text: 'AI',
      items: [
        { text: '应用', link: '/fe/ai/index.md' },
        { text: 'prompt', link: '/fe/ai/prompt.md' },
      ],
    },
  ],
  '/fe/visualization': [
    {
      text: '个人项目',
      link: '/fe/visualization/index.md',
    },
  ],
  '/fe/problem': [
    {
      text: 'Vue',
      link: '/fe/problem/vue.md',
    },
    {
      text: 'React',
      link: '/fe/problem/react.md',
    },
    {
      text: 'UI 组件库',
      link: '/fe/problem/ui.md',
    },
  ],
  '/fe/resource': [
    {
      text: '常用网站',
      link: '/fe/resource/index.md',
    },
    {
      text: '工具合集',
      link: '/fe/resource/tool.md',
    },
    {
      text: '前端工具库',
      link: '/fe/resource/fetools.md',
    },
    {
      text: '谷歌插件',
      link: '/fe/resource/plugin.md',
    },
  ],
  '/fe/article': [
    {
      text: '文章合集',
      link: '/fe/article/index.md',
    },
    {
      text: '书籍合集',
      link: '/fe/article/books.md',
    },
  ],
}

export default defineConfig({
  title: '🍒 Cherry的博客',
  description: '🍒 Cherry的博客',
  lang: 'cn-ZH',
  base: '/Cherry-blog/',
  themeConfig: {
    siteTitle: '🍒 Cherry的博客',
    outlineTitle: '快速导航',
    socialLinks: [{ icon: 'github', link: 'https://github.com/zrtch' }],
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },
    nav,
    sidebar,
  },
})
