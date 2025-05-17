/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "24san Server",
  tagline: "24sanサーバーに参加しよう！",
  url: "https://24san.github.io",
  baseUrl: "/",
  onBrokenLinks: "warn",
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
          editUrl: "https://github.com/KYATAPsan/docs",
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
      metadata: [
        {
          name: "og:image",
          content: "https://24san.github.io/img/shots/hero-min.png",
        },
        {
          name: "twitter:image",
          content: "https://24san.github.io/img/shots/hero-min.png",
        },
        {
          name: "twitter:site",
          content: "@24sanserver",
        },
        {
          name: "keywords",
          content:
            "Minecraft, 24san, Spigot, Bukkit, Minecraft analytics, web suite, free analytics tool, Minecraft server tools, player analytics, server performance, Minecraft plugins, server monitoring, Minecraft server suite, server statistics, player tracking",
        },
      ],
      colorMode: {
        defaultMode: "light",
      },

      // ナビゲーションバー設定
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
            label: "ドキュメント",
            position: "left",
            to: '/docs', // ドキュメントを押したら /docs に飛ぶ
            items: [
              { to: '/docs', label: '目次' },
              { to: '/docs/category/ルール等', label: 'ルール' },
              { to: '/docs/category/参加方法', label: '参加方法' },
              { to: '/docs/category/ギルドの使い方', label: 'ギルドの使い方' },
              { to: '/docs/category/その他の仕様', label: 'その他の仕様' },
            ],
          },
          {
            to: "/blog",
            label: "おしらせ",
            position: "left",
          },
          {
            to: "/apply",
            label: "応募",
            position: "left",
          },
          //{ to: "/blog", label: "Blog", position: "right" },
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

      // フッター設定
      footer: {
        style: "dark", // フッターのスタイル（ダークモード）
        logo: {
          alt: "24san Logo",
          src: "img/logo_docs.svg",
          href: "/",
        },
links: [
  {
    title: "Documentation",
    items: [
      {
        label: "ドキュメント",
        to: "/docs",
      },
    ],
  },
  {
    title: "コミュニティ",
    items: [
      {
        label: 'Discord',
        href: "https://discord.com/invite/QthB6rPBf7",
        target: "_blank",
      },
      {
        label: 'Twitter',
        href: "https://twitter.com/24san_KYATAP",
        target: "_blank",
      },
      {
        label: 'YouTube',
        href: "https://www.youtube.com/@KYATAP",
        target: "_blank",
      },
      
    ],
  },
  {
    title: "サービス",
    items: [
      {
        label: "コマンドの使い方",
        to: "/docs",
      },
      {
        label: 'サーバールール',
        href: "https://discord.com/invite/QthB6rPBf7",
        target: "_blank",
      },
      {
        label: 'Apply',
        to: '/apply',
      },
    ],
  },
],
copyright: `Copyright © 2024 24san. Built with Docusaurus.<br/>
当サイトはMojangAB および Microsoft とは一切関係がありません。`

      },

      // アナウンスメントバー
      announcementBar: {
        id: "support_us",
        content:
          '<b><a target="_blank" href="https://discord.gg/TYUnM9vP2E" style="color: #FFFFFF; text-decoration: none;" onmouseover="this.style.textDecoration=\'underline\'" onmouseout="this.style.textDecoration=\'none\'">Discordの参加はこちらから！</a></b>',
        backgroundColor: "#161CBB",
        textColor: "#FFFFFF",
        isCloseable: true,
      },

      // 検索機能
      algolia: {
        appId: "AIFFXGFZ5Y",
        apiKey: "5794bb50b04fbc1f2d432e887c8c4788",
        indexName: "24san",
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
