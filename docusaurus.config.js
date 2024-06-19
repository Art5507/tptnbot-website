// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Топтуновый бот',
  tagline: 'Еще один Discord бот',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://tptnbot.vercel.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/social-card.jpg',
      navbar: {
        title: 'Топтуновый бот',
        logo: {
          alt: 'Логотип сайта',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Документация',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Документация',
            items: [
              {
                label: 'Команды',
                to: '/docs/category/команды',
              },
              {
                label: 'Авто-реакции',
                to: '/docs/welcome/autoreaction',
              },
              {
                label: 'Авто-ветка',
                to: '/docs/welcome/autothread',
              },
            ],
          },
          {
            title: 'Сообщество',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/G5YXuqTWYS',
              },
              {
                label: 'Telegram',
                href: 'https://t.me/ToptunovyjBot',
              },
            ],
          },
          {
            title: 'Больше',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/art5507',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Art5507. Не связано с Discord.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
