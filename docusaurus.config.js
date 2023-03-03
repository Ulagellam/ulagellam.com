// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Ulagellam",
  tagline: "Products beyond boundaries!",
  url: "http://ulagellam.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",
  trailingSlash: false,
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Ulagellam", // Usually your GitHub org/user name.
  projectName: "ulagellam.com", // Usually your repo name.
  deploymentBranch: "gh-pages",
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
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
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
      navbar: {
        title: "Ulagellam",
        logo: {
          alt: "Ulagellam Logo",
          src: "img/favicon.png",
        },
        items: [
          {
            to: "/products",
            position: "right",
            label: "Products",
          },
          {
            to: "/services",
            position: "right",
            label: "Services",
          },
          {
            to: "/training",
            position: "right",
            label: "Training",
          },
          {
            to: "/research",
            position: "right",
            label: "R&D",
          },
          { to: "/blog", label: "Blog", position: "right" },
        ],
      },
      footer: {
        links: [
          {
            title: "Community",
            items: [
              {
                label: "Facebook",
                href: "https://www.facebook.com/ulagellam",
              },

              {
                label: "Linkedin",
                href: "https://www.linkedin.com/in/umamaheswarantg",
              },
              {
                label: "Youtube",
                href: "https://www.youtube.com/channel/UClind4orH7yfe0Qp9bzm6ug",
              },
            ],
          },
          {
            title: "Quick Links",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "About Us",
                to: "/about-us",
              },
            ],
          },
        ],
        logo: {
          alt: "Ulagellam Logo",
          src: "img/ulagellam-logo.png",
          srcDark: "img/ulagellam-logo-dark.png",
          width: 170,
          height: 51,
        },
        copyright: `© 2016-${new Date().getFullYear()} Ulagellam Technologies Pvt Ltd. All Rights Reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
