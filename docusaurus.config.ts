import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: '👨🏼‍💻 Ryan Knopp',
  tagline: 'Enterprise Architect & Digital Technologist',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://ryanknopp.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'knopperchopper', // Usually your GitHub org/user name.
  projectName: 'mywebsite', // Usually your repo name.

  onBrokenLinks: 'throw',

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
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'homelab',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: '👨🏼‍💻 Ryan Knopp',
      items: [
        {to: '/resume', label: 'Resume', position: 'left'},
        {
          to: '/homelab',
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Homelab',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://www.linkedin.com/in/ryanknopp/',
          label: 'LinkedIn',
          position: 'right',
        },
        {
          href: 'https://github.com/knopperchopper',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Accreditation',
          items: [
            {
              label: 'Docusaurus',
              to: 'https://docusaurus.io/',
            },
            {
              label: 'Resume Image by freepik',
              to: 'https://www.freepik.com/free-vector/modern-resume-template_2408494.htm#fromView=search&page=1&position=10&uuid=59560265-a0aa-4057-9b25-c62f48bb3794&query=resume',
            },
            {
              label: 'Server Rack Image by Kampus on Freepik',
              to: 'https://www.freepik.com/free-vector/professional-electrician-checking-cables-switchboard-panel_394385577.htm#fromView=search&page=1&position=13&uuid=1964e5a8-e956-4c3d-8e06-8894c0484be0&query=servers+rack',
            },
            {
              label: 'Blog Image by freepik',
              to: 'https://www.freepik.com/free-vector/hand-drawn-neuroeducation-illustration_78537353.htm#fromView=search&page=1&position=3&uuid=ac00b3a7-422c-42c1-9e02-c81711050caf&query=thoughto',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/ryanknopp/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/knopperchopper',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Ryan Knopp. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
