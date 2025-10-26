import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/econ.simulator.doc/',
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
            { text: '总览', link: '/user_strategies/user_script_api_index' },
            { text: '家户', link: '/user_strategies/user_script_api_household' },
            { text: '企业', link: '/user_strategies/user_script_api_firm' },
            { text: '商业银行', link: '/user_strategies/user_script_api_bank' },
            { text: '中央银行', link: '/user_strategies/user_script_api_central_bank' },
            { text: '政府', link: '/user_strategies/user_script_api_government' },
        ] 
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
