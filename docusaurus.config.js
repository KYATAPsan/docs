/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "24san Server",
  tagline: "24sanサーバーに参加しよう！",
  url: "https://24san.github.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
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
          name: 'keywords', 
          content: 'Minecraft, 24san, Spigot, Bukkit, Minecraft analytics, web suite, free analytics tool, Minecraft server tools, player analytics, server performance, Minecraft plugins, server monitoring, Minecraft server suite, server statistics, player tracking'
        }
      ],
      colorMode: {
        defaultMode: 'light',
      },
      navbar: {
        hideOnScroll: true,
        title: "24san",
        logo: {
          alt: "24san Logo",
          src: "https://github.com/KYATAPsan/docs/blob/main/static/img/Back_KYATAP.png?raw=true",
        },
        items: [
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
            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.865-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037c-1.687.29-3.33.8-4.885 1.515a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.083.083 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.077.077 0 0 0 .084-.028c.462-.63.874-1.295 1.227-1.994a.076.076 0 0 0-.042-.106 13.107 13.107 0 0 1-1.872-.892.078.078 0 0 1-.038-.062.077.077 0 0 1 .03-.066c.126-.094.252-.192.372-.292a.075.075 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.076.076 0 0 1 .03.065.078.078 0 0 1-.036.063c-.599.349-1.225.647-1.873.89a.076.076 0 0 0-.05.076c.001.012.004.022.009.032.36.698.772 1.362 1.225 1.993a.077.077 0 0 0 .084.028 19.84 19.84 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.06.06 0 0 0-.031-.03ZM8.02 15.33c-1.182 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418Zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418Z" fill="currentColor" />
          </svg>`,
            position: "right",
            className: "header-icon-link",
          },
          {
            href: "https://www.youtube.com/@KYATAP",
            html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="main-grid-item-icon" fill="none">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" fill="currentColor" />
          </svg>`,
            position: "right",
            className: "header-icon-link",
          },
        ],
      },
      footer: {
        style: "dark",
        logo: {
          alt: '24san Logo',
          src: 'static/img/logo_docs.svg',
          className: 'w-64'
        },
        links: [
          {
            title: "Documentation",
            items: [
              {
                label: "ドキュメント",
                to: "/docs/introduction/what-is-24san",
              },
            ],
          },
          {
            title: "コミュニティ",
            items: [
              {
                label: "Discord",
                to: "https://discord.com/invite/QthB6rPBf7",
              },
              {
                label: "Twitter",
                to: "https://twitter.com/24san_KYATAP",
              },
              {
                label: "YouTube",
                to: "https://www.youtube.com/@KYATAP",
              },
            ],
          },
          {
            title: "サービス",
            items: [
              {
                label: "コマンドの使い方",
                to: "/docs/introduction/what-is-24san",
              },
              {
                label: "お問い合わせ",
                to: "https://discord.com/invite/QthB6rPBf7",
              },
              {
                label: "サーバールール",
                to: "https://discord.com/invite/QthB6rPBf7",
              },
            ],
          },
          {
            title: "その他",
            items: [
              {
                label: "お知らせ",
                to: "/blog",
              },
              {
                label: "チャンネル登録お願いします。",
                to: "https://www.youtube.com/@KYATAP",
              },
            ],
          },
        ],
        copyright: `Copyright © 24san Server ${new Date().getFullYear()}. All rights reserved.`,
      },
      // Prism settings are removed here as requested
      // prism: {
      //   theme: lightCodeTheme,
      //   darkTheme: darkCodeTheme,
      //   additionalLanguages: ["php"],
      // },
      announcementBar: {
        id: "support_us",
        content:
          '<b>⭐️ <a target="_blank" href="https://discord.gg/TYUnM9vP2E" style="color: #1DA1F2;">Discordの参加はこちらから！</a></b>',
        backgroundColor: "#9ee0fd",
        textColor: "#091E42",
        isCloseable: true,
      },
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
  ]
};

module.exports = config;
