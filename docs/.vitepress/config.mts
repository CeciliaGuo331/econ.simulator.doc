import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Docs for Econ Simulator",
  description: "getting started",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '快速开始', link: '/overview' }
    ],

    sidebar: [
      {
        text: '快速开始',
        items: [
          { text: '总览', link: '/overview' },
        ] 
      },
      {
        text: '策略编写指南',
        items: [
            { text: '家户', link: '/user_strategies/household' },
            { text: '企业', link: '/user_strategies/firm' },
            { text: '商业银行', link: '/user_strategies/bank' },
            { text: '中央银行', link: '/user_strategies/central_bank' },
            { text: '政府', link: '/user_strategies/government' },
        ] 
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
