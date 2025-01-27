import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import type * as OpenApiPlugin from "docusaurus-plugin-openapi-docs";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Tiendify Docs",
  tagline: "Tiendify API documentation",
  favicon: "img/favicon.ico",
  markdown: {
    mermaid: true,
  },

  // Set the production url of your site here
  url: "https://tiendify.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "tiendify", // Usually your GitHub org/user name.
  projectName: "tiendiy", // Usually your repo name.

  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          docItemComponent: "@theme/ApiItem",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          {
            to: "/docs/customers-api/reference",
            from: ["/docs/customers-api/reference/intro"],
          },
        ],
      },
    ],
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "api",
        docsPluginId: "classic",
        config: {
          tiendify: {
            specPath: "openapi/customers-api.openapi.json",
            outputDir: "docs/customers-api/reference",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          } satisfies OpenApiPlugin.Options,
        },
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Tiendify",
      logo: {
        alt: "Tiendify Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "docsSidebar",
          position: "left",
          label: "Documentation",
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
              label: "API Reference",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Links",
          items: [
            {
              label: "Github",
              href: "https://github.com/L2G-Solutions/tiendify-docs",
            },
          ],
        },
        {
          title: "Contact",
          items: [
            {
              label: "Email",
              to: "mailto:tiendify@gmail.com",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Tiendify. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
  themes: ["docusaurus-theme-openapi-docs", "@docusaurus/theme-mermaid"],
};

export default config;
