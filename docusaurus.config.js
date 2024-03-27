// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Coalesce',
  tagline: 'Coalesce is the only data transformation tool built for scale. Evolve your transformations and empower your entire data team.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://coalese-dev-docs-mvp.netlify.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Coalesce', // Usually your GitHub org/user name.
  projectName: 'Coalesce Product Documentation', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  plugins: [
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "openapi",
        docsPluginId: "classic", // e.g. "classic" or the plugin-content-docs id
        config: {
          jobs: { // "petstore" is considered the <id> that you will reference in the CLI
            specPath: 'static/api/jobs.json', // path or URL to the OpenAPI spec
            outputDir: 'docs/api/jobs', // output directory for generated *.mdx and sidebar.js files
          },
          petstore:{
            specPath: 'static/api/petstore.json',
            outputDir: 'docs/api/petstore'
          }
        }
      },
    ]

  ],
  
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          docItemComponent: "@theme/ApiItem" // add @theme/ApiItem here
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: 'always',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      }),
    ],

  ],
  themes: ['docusaurus-theme-search-typesense', 'docusaurus-theme-openapi-docs'],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata:[
        {
          name: 'docsearch:{$NAME}_tag',
          content: '{$CONTENT}'
        }
      ],
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Coalesce',
        logo: {
          alt: 'Coalesce Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            to: '/docs/api/jobs/jobs-03-01-2024-01',
            sidebarId: 'apiSidebar',
            position: 'left',
            label: 'API Test'
          },
          {
            to: '/releasenotes',
            label: 'Release Notes',
            position: 'left',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/facebook/docusaurus',
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
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      typesense:{
        typesenseCollectionName: 'Doc Search Test',
        typesenseServerConfig:{
          nodes:[
            {
              host: '4paso9ug6hxkelrzp-1.a1.typesense.net',
              port: 443,
              protocol: 'https'
            },
            {
              host: '4paso9ug6hxkelrzp-2.a1.typesense.net',
              port: 443,
              protocol: 'https'
            },
            {
              host: '4paso9ug6hxkelrzp-3.a1.typesense.net',
              port: 443,
              protocol: 'https'
            }
          ],
          apiKey: 'yGMvcWMag9Dq1p88yoFheFSKruG0lLT0'
        },
      },
    }),
    headTags:[
      {
        tagName: 'script',
        attributes:{
          src: '/js/noticeable.js'
        }
      },
      {
        tagName: 'meta',
        attributes: {
          name: 'zd-site-verification',
          content: 'f91lp9mnkchmeclhhgpqik'
        }
      }
    ],
};

export default config;
