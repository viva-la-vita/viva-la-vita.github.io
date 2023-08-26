// @ts-check

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '生如夏花',
  tagline: '探索美好而新奇的性体验',
  url: 'https://viva-la-vita.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
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

  plugins: [
    '@docusaurus/plugin-content-pages',
    [
      'docusaurus-plugin-remote-docs',
      /** @type {import('docusaurus-plugin-remote-docs').Options} */
      ({
        routeBasePath: '/',
        sidebarPath: require.resolve('./sidebars.js'),
        downloader: require('viva-la-vita').downloadMeta,
      }),
    ],
    [
      'docusaurus-plugin-pwa-generator',
      /** @type {import('docusaurus-plugin-pwa-generator').Options} */
      ({
        debug: true,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        partialManifest: {
          "name": "生如夏花知识库",
          "short_name": "生如夏花知识库",
          "theme_color": "#ff7777",
          "background_color": "#424242",
          "display": "standalone",
          "scope": "./",
          "start_url": "./index.html"
        },
        generatorInput: {
          source: './static/favicon.ico',
          options: { log: false }
        }
      }),
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
          ...[['关于', 'introduction'], ['开发', 'development']].map(([ label, sidebarId ]) => ({ type: 'docSidebar', position: 'left', label, sidebarId })),
          ...[['知识库', 'https://wiki.viva-la-vita.org'], ['论坛', 'https://bbs.viva-la-vita.org'], ['GitHub', 'https://github.com/viva-la-vita'], ['爱发电', 'https://afdian.net/@vivalavita']].map(([ label, href ]) => ({ position: 'right', label, href }))
        ],
      },
      footer: {
        style: 'dark',
        copyright: `CC-BY-SA 4.0 © 2019 - ${new Date().getFullYear()} 生如夏花开发者及创作者`,
      },
      prism: {
        theme: require('prism-react-renderer/themes/github'),
        darkTheme: require('prism-react-renderer/themes/dracula'),
      },
    }),
};

module.exports = config;
