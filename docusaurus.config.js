// @ts-check

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '生如夏花',
  tagline: '探索美好而新奇的性体验',
  url: 'https://viva-la-vita.org',
  baseUrl: '/',
  onBrokenLinks: 'warn', // 建议改为warn，防止因本地文件结构变化导致启动失败
  onBrokenMarkdownLinks: 'warn',
  favicon: 'favicon.ico',

  // GitHub pages deployment config.
  organizationName: 'viva-la-vita',
  projectName: 'viva-la-vita.github.io',
  trailingSlash: false,

  // Internalization
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  // 保持你原有的手动插件配置结构
  plugins: [
    '@docusaurus/plugin-content-pages', // 独立页面插件

    // 🟢 替换部分：使用官方 Docs 插件读取本地 docs 文件夹
    [
      '@docusaurus/plugin-content-docs',
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        path: 'docs', // 读取项目根目录下的 docs 文件夹
        routeBasePath: '/', // 保持原有逻辑：文档直接在根路径
        sidebarPath: require.resolve('./sidebars.js'), // 读取侧边栏配置
        // 如果你需要“编辑此页”功能，取消下面注释并修改链接
        // editUrl: 'https://github.com/viva-la-vita/viva-la-vita.github.io/tree/main/',
      }),
    ],

    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          { tagName: 'link', rel: 'icon', href: '/img/favicon.ico' },
          { tagName: 'link', rel: 'manifest', href: '/manifest.json' },
          { tagName: 'meta', name: 'theme-color', content: '#ff7777' },
          { tagName: 'meta', name: 'apple-mobile-web-app-capable', content: 'yes' },
          { tagName: 'meta', name: 'apple-mobile-web-app-status-bar-style', content: '#424242' },
        ],
      },
    ],    
    '@docusaurus/plugin-sitemap'
  ],

  themes: [
    [
      '@docusaurus/theme-classic',
      /** @type {import('@docusaurus/theme-classic').Options} */
      ({
        customCss: require.resolve('./src/css/custom.css'),
      }),
    ]
  ],

  themeConfig:
  /** @type {import('@docusaurus/types').ThemeConfig & import('@docusaurus/theme-search-algolia').UserThemeConfig} */
    ({
      navbar: {
        title: '生如夏花',
        logo: {
          alt: '生如夏花',
          src: 'favicon-100x100.ico',
          width: 32,
          height: 32,
        },
        items: [
          // 保持你原有的逻辑：这要求 sidebars.js 里必须有 'introduction' 和 'development' 这两个ID
          ...[['关于', 'introduction'], ['开发', 'development']].map(([ label, sidebarId ]) => ({ type: 'docSidebar', position: 'left', label, sidebarId })),
          ...[['知识库', 'https://wiki.viva-la-vita.org'], ['论坛', 'https://bbs.viva-la-vita.org'], ['GitHub', 'https://github.com/viva-la-vita']].map(([ label, href ]) => ({ position: 'right', label, href }))
        ],
      },
      footer: {
        style: 'dark',
        copyright: `CC-BY-SA 4.0 © 2019 - ${new Date().getFullYear()} 生如夏花开发者及创作者`,
      },
      prism: {
        // 修复：新版 prism-react-renderer 的引用方式
        theme: require('prism-react-renderer').themes.github,
        darkTheme: require('prism-react-renderer').themes.dracula,
      },
    }),
};

module.exports = config;

// // @ts-check
// import {themes as prismThemes} from 'prism-react-renderer';

// /** @type {import('@docusaurus/types').Config} */
// const config = {
//   title: '生如夏花',
//   tagline: '探索美好而新奇的性体验',
//   url: 'https://viva-la-vita.org',
//   baseUrl: '/',
//   onBrokenLinks: 'warn', // 暂时改为 warn，避免因为链接问题导致无法启动
//   onBrokenMarkdownLinks: 'warn',
//   favicon: 'favicon.ico',

//   organizationName: 'viva-la-vita',
//   projectName: 'viva-la-vita.github.io',
//   trailingSlash: false,

//   i18n: {
//     defaultLocale: 'zh-Hans',
//     locales: ['zh-Hans'],
//   },

//   // 使用标准的 classic 预设，包含 docs, blog, theme, sitemap
//   presets: [
//     [
//       'classic',
//       /** @type {import('@docusaurus/preset-classic').Options} */
//       ({
//         docs: {
//           path: 'docs', // 指向你的本地 docs 文件夹
//           sidebarPath: require.resolve('./sidebars.js'),
//           // 建议：如果你希望文档在 /docs/xxx 路径下，请删除下面这行 routeBasePath
//           // 如果你希望文档直接在根路径 (例如 viva-la-vita.org/general/intro)，保留 '/'
//           routeBasePath: '/', 
//         },
//         blog: false, // 暂时关闭博客，如果需要可以开启
//         theme: {
//           customCss: require.resolve('./src/css/custom.css'),
//         },
//         sitemap: {
//           changefreq: 'weekly',
//           priority: 0.5,
//         },
//       }),
//     ],
//   ],

//   // 保持 PWA 插件
//   plugins: [
//     [
//       '@docusaurus/plugin-pwa',
//       {
//         debug: true,
//         offlineModeActivationStrategies: [
//           'appInstalled',
//           'standalone',
//           'queryString',
//         ],
//         pwaHead: [
//           { tagName: 'link', rel: 'icon', href: '/img/favicon.ico' },
//           { tagName: 'link', rel: 'manifest', href: '/manifest.json' },
//           { tagName: 'meta', name: 'theme-color', content: '#ff7777' },
//         ],
//       },
//     ],
//   ],

//   themeConfig:
//     /** @type {import('@docusaurus/types').ThemeConfig} */
//     ({
//       navbar: {
//         title: '生如夏花',
//         logo: {
//           alt: '生如夏花',
//           src: 'favicon-100x100.ico',
//         },
//         items: [
//           // 自动显示所有文档链接
//           {
//             type: 'docSidebar',
//             sidebarId: 'tutorialSidebar', // 这里对应 sidebars.js 里的配置
//             position: 'left',
//             label: '文档库',
//           },
//           {href: 'https://wiki.viva-la-vita.org', label: '知识库', position: 'right'},
//           {href: 'https://bbs.viva-la-vita.org', label: '论坛', position: 'right'},
//           {href: 'https://github.com/viva-la-vita', label: 'GitHub', position: 'right'},
//         ],
//       },
//       footer: {
//         style: 'dark',
//         copyright: `CC-BY-SA 4.0 © 2019 - ${new Date().getFullYear()} 生如夏花开发者及创作者`,
//       },
//       prism: {
//         theme: prismThemes.github,
//         darkTheme: prismThemes.dracula,
//       },
//     }),
// };

// module.exports = config;