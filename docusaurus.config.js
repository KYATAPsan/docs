/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "24san Server",
  tagline: "24sanサーバーに参加しよう！",
  url: "https://24san.github.io",
  baseUrl: "/",
  onBrokenLinks: "warn", // ここを変更
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "24san", // GitHub org/user name for 24san.
  projectName: "24san.github.io", // Repo name for 24san website.
  deploymentBranch: "gh-pages",
  trailingSlash: false,

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/24san/24san.github.io/edit/main/",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/24san/24san.github.io/edit/main/",
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
        hideOnScroll: true,
        title: "24san",
        logo: {
          alt: "24san Logo",
          src: "https://github.com/KYATAPsan/docs/blob/main/static/img/Back_KYATAP.png?raw=true",
        },
        items: [
          {
            type: "dropdown",
            label: "Wiki",
            position: "left",
            items: [
              { to: "/wiki/list", label: "一覧" },
              { to: "/wiki/guild", label: "ギルド" },
              { to: "/wiki/panel", label: "パネル" },
            ],
          },
          {
            to: "/news",
            label: "おしらせ",
            position: "left",
          },
          {
            type: "doc",
            docId: "introduction/what-is-24san",
            position: "right",
            label: "Documentation",
          },
          { to: "/blog", label: "Blog", position: "right" },
          {
            href: "https://discord.com/invite/QthB6rPBf7",
            html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="main-grid-item-icon" fill="none">
            <path d="..." fill="currentColor" />
            </svg>`,
            position: "right",
            className: "header-icon-link",
          },
        ],
      },
    }),

  plugins: [
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],
};

module.exports = config;
