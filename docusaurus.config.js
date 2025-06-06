// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer").themes.github;
const darkCodeTheme = require("prism-react-renderer").themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "BlockchainRPG",
  tagline: "The Best Decentralized Play & Earn RPG!",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://docs.blockchainrpg.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "BlockchainRPG", // Usually your GitHub org/user name.
  projectName: "brpg-docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/BlockchainRPG/brpg-docs/tree/main/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/BlockchainRPG/brpg-docs/tree/main/",
          blogSidebarCount: "ALL",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/banner.jpg",
      navbar: {
        title: "BlockchainRPG",
        logo: {
          alt: "BlockchainRPG Logo",
          src: "img/logo.png",
        },
        items: [
          {
            href: "https://play.blockchainrpg.io",
            label: "Play",
            position: "left",
          },
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Docs",
          },
          {
            to: "/docs/overview/getting-started",
            label: "Getting Started",
            position: "left",
          },
          {
            href: "https://nfthive.io/collection/brpg?tab=drops",
            label: "Drops",
            position: "left",
          },
          {
            to: "/leaderboard",
            label: "Leaderboard",
            position: "right",
          },
          { to: "/blog", label: "Blog", position: "right" },
          {
            href: "https://github.com/BlockchainRPG/brpg-docs",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Links",
            items: [
              {
                label: "Documentation",
                to: "/docs/disclaimer",
              },
              {
                label: "Terms and Conditions",
                to: "/terms",
              },
              {
                label: "Privacy Policy",
                to: "/privacy",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.blockchainrpg.io",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/blockchainrpg",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/BlockchainRPG/brpg-docs",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} BlockchainRPG`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      // enables searching functionality
      algolia: {
        // The application ID provided by Algolia
        appId: "068XUBIAGV",

        // Public API key: it is safe to commit it
        apiKey: "21b45580bb08b4be931469ae5d478bcc",

        indexName: "blockchainrpg_docs",
      },
    }),
};

module.exports = config;
