import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  trailingSlash: true,
  title: 'CUBVEC',
  tagline: 'Vector Database for CUBRID',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://cubvec.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'cubvec', // Usually your GitHub org/user name.
  projectName: 'cubvec.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',

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
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/cubvec/cubvec.github.io/tree/main/',
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
    navbar: {
      title: 'CUBVEC',
      logo: {
        alt: 'My Site Logo',
        // src: 'img/logo.svg',
        src: 'img/cubrid.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'cubvecSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://github.com/cubvec/cubvec.github.io',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Home Page',
              href: 'https://www.cubrid.org/',
            },
            {
              label: 'Jira',
              href: 'https://jira.cubrid.org/',
            },
            {
              label: 'Reddit',
              href: 'https://www.reddit.com/r/cubrid/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/cubrid/cubrid',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} CUBRID, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
