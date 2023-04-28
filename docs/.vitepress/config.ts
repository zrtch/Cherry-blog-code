import { DefaultTheme, defineConfig } from 'vitepress'

const nav: DefaultTheme.NavItem[] = [
  { text: '前端基础', link: '/fe/default/index.md' },
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
      ]
    },
    {
      text: 'JavaScript 基础知识',
      items: [
        { text: 'JavaScript', link: '/fe/default/js.md' },
      ]
    },
  ],
  '/fe/engineering': [
    {
      text: '工程化',
      items: [
        { text: 'Vite', link: '/fe/engineering/vite.md' },
      ]
    },
  ],
  '/fe/resource': [
    {
      text: '资源合集',
      link:  '/fe/resource/index.md'
    }
  ],
  '/fe/article': [
    {
      text: '文章合集',
      link:  '/fe/article/index.md'
    },
    {
      text: '书籍合集',
      link:  '/fe/article/books.md'
    }
  ]

}

export default defineConfig({
  title: '🍒 Cherry的博客',
  description: '🍒 Cherry的博客',
  lang: 'cn-ZH',
  base:  "/Cherry-blog/",
  themeConfig: {
    siteTitle: '🍒 Cherry的博客',
    outline: 3,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/zrtch' }
    ],
    nav,
    sidebar
  }
})
