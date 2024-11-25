/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "24san Server",
  tagline: "24sanサーバーに参加しよう！",
  url: "https://24san.github.io",
  baseUrl: "/",
  onBrokenLinks: "ignore", // 壊れたリンクを無視
  onBrokenMarkdownLinks: "ignore", // 壊れたMarkdownリンクを無視
  favicon: "img/favicon.ico",
  organizationName: "24san",
  projectName: "24san.github.io",
  deploymentBranch: "gh-pages",
  trailingSlash: false,

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: "docs", // メインドキュメント用
          routeBasePath: "/", // ルートパスで表示
          sidebarPath: require.resolve("./sidebars.js"),
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

  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "wiki", // ユニークID
        path: "Wiki", // Wiki用ディレクトリ
        routeBasePath: "wiki", // `/wiki`で表示
        sidebarPath: require.resolve("./sidebars.js"),
        editUrl: "https://github.com/24san/24san.github.io/edit/main/Wiki/",
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: "24san",
      logo: {
        alt: "24san Logo",
        src: "img/logo.png",
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
        { to: "/blog", label: "Blog", position: "right" },
        {
          href: "https://discord.com/invite/QthB6rPBf7",
          label: "Discord",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Wiki",
          items: [
            { label: "一覧", to: "/wiki/list" },
            { label: "ギルド", to: "/wiki/guild" },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 24san Server.`,
    },
  },
};

module.exports = config;
