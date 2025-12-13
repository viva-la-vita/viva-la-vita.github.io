// @ts-check
// import {themes as prismThemes} from 'prism-react-renderer';
const {themes: prismThemes} = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '生如夏花',
  tagline: '探索美好而新奇的性体验',
  url: 'https://viva-la-vita.org',
  baseUrl: '/',
  onBrokenLinks: 'warn', // 暂时改为 warn，避免因为链接问题导致无法启动
  onBrokenMarkdownLinks: 'warn',
  favicon: 'favicon.ico',

  organizationName: 'viva-la-vita',
  projectName: 'viva-la-vita.github.io',
  trailingSlash: false,

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },
  scripts: [
    {
      src: '//gc.zgo.at/count.js',
      async: true,
      'data-goatcounter': 'https://mainpage-viva-la-vita.goatcounter.com/count',
    },
  ],
  // 使用标准的 classic 预设，包含 docs, blog, theme, sitemap
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs', // 指向你的本地 docs 文件夹
          sidebarPath: require.resolve('./sidebars.js'),
          // 建议：如果你希望文档在 /docs/xxx 路径下，请删除下面这行 routeBasePath
          // 如果你希望文档直接在根路径 (例如 viva-la-vita.org/general/intro)，保留 '/'
          // routeBasePath: '/', 
        },
        blog: false, // 暂时关闭博客，如果需要可以开启
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
      }),
    ],
  ],

  // 保持 PWA 插件
  plugins: [
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
        ],
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/types').ThemeConfig} */
    ({
      navbar: {
        title: '生如夏花',
        logo: {
          alt: '生如夏花',
          src: 'favicon-100x100.ico',
        },
        items: [
          // 自动显示所有文档链接
          {
            type: 'docSidebar',
            sidebarId: 'introduction', // 这里对应 sidebars.js 里的配置
            position: 'left',
            label: '关于生如夏花',
          },
          {href: 'https://wiki.viva-la-vita.org', label: '知识库', position: 'right'},
          {href: 'https://bbs.viva-la-vita.org', label: '论坛', position: 'right'},
          {href: 'https://github.com/viva-la-vita', label: 'GitHub', position: 'right'},
        ],
      },
      footer: {
        style: 'dark',
        copyright: `CC-BY-SA 4.0 © 2019 - ${new Date().getFullYear()} 生如夏花开发者及创作者`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

module.exports = config;