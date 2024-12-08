import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
require("dotenv").config();


const config: Config = {
  title: "BMD Docs",
  tagline: "Make BMD's README.txt document readable again",
  favicon: "img/DaVinci-Resolve-Logo.ico",

  // Set the production url of your site here
  url: "https://wheheohu.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/bmd_doc/",
  trailingSlash: false,
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "wheheohu", // Usually your GitHub org/user name.
  projectName: "bmd_doc", // Usually your repo name.

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  plugins: [
    [
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        indexBlog: false,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'workflow',
        path: 'docs/workflow',
        routeBasePath: 'workflow',
        sidebarPath: './sidebarsWorkflow.ts',
        // ... other options
      },
    ],
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          id: "ResolveAPI",
          path: "docs/ResolveAPI",
          routeBasePath: "ResolveAPI",
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        // {
        //   showReadingTime: true,
        //   feedOptions: {
        //     type: ['rss', 'atom'],
        //     xslt: true,
        //   },
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        //   // Useful options to enforce blogging best practices
        //   onInlineTags: 'warn',
        //   onInlineAuthors: 'warn',
        //   onUntruncatedBlogPosts: 'warn',
        // },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "BMD Docs",
      logo: {
        alt: "My Site Logo",
        src: "img/DaVinci-Resolve-Logo.png",
      },
      items: [
        {
          type: "dropdown",
          label: "Resolve API",
          position: "left",
          items: [
            {
              type: "docSidebar",
              sidebarId: "apiSidebar",
              label: "Intro",
              docsPluginId: "ResolveAPI",
            },
            {
              to: "ResolveAPI/category/apis",

              label: "API",
            },
            {
              to: "ResolveAPI/category/settings-and-properties",

              label: "Settings",
            },
            // ... more items
          ],
        },
        {
          type: "dropdown",
          label: "Workflow & UI",
          position: "left",
          items: [
            {
              type: "docSidebar",
              sidebarId: "workflowSidebar",
              label: "Intro",
              docsPluginId: "workflow",
            },
            {
              to: "workflow/WorkflowIntegration",

              label: "Workflow",}
          ],
        },
        
        {
          type: "docsVersionDropdown",
          position: "right",
          dropdownItemsAfter: [{ to: "/versions", label: "Update Info" }],
          dropdownActiveClassDisabled: true,
          docsPluginId: "ResolveAPI",
        },
        {
          type: "docsVersionDropdown",
          position: "right",
          dropdownItemsAfter: [{ to: "/versions", label: "Update Info" }],
          dropdownActiveClassDisabled: true,
          docsPluginId: "workflow",
        },
        // {to: '/blog', label: 'Blog', position: 'left'},
        {
          type: "search",
          position: "right",
        },
        {
          href: "https://www.blackmagicdesign.com/products/davinciresolve",
          label: "Davinci Resolve",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Resolve API",
              to: "ResolveAPI/category/apis",
            },
            {
              label: "Workflow Intergration",
              to: "workflow/WorkflowIntegration",
            },
            {
              label: "UI",
              to: "workflow/UIManager",
            }
          ],
        },
        // {
        //   title: 'Community',
        //   items: [
        //     {
        //       label: 'Stack Overflow',
        //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //     },
        //     {
        //       label: 'Discord',
        //       href: 'https://discordapp.com/invite/docusaurus',
        //     },
        //     {
        //       label: 'Twitter',
        //       href: 'https://twitter.com/docusaurus',
        //     },
        //   ],
        // },
        {
          title: "More",
          items: [
            // {
            //   label: 'Blog',
            //   to: '/blog',
            // },
            {
              label: "GitHub",
              href: "https://github.com/WheheoHu/bmd_doc",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} bmd_doc, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.dracula,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
