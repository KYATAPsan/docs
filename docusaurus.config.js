/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '24san - Minecraft Server',
  tagline: 'Join the 24san Server and start your adventure!',
  favicon: 'img/favicon.ico', // Update this path with your own favicon

  // Set the production URL of your site here
  url: 'https://24san.org',
  baseUrl: '/',

  organizationName: '24san', // Your organization name
  projectName: '24san-minecraft-site', // Your project repo name

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ja'], // Supports both English and Japanese
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/24san/24san-minecraft-site/edit/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/24san/24san-minecraft-site/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig: {
    image: 'img/24san-social-card.jpg', // Custom social card image
    navbar: {
      title: '24san Server',
      logo: {
        alt: '24san Logo',
        src: 'img/logo.png', // Update with your server's logo
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Server Info',
        },
        { to: '/blog', label: 'News', position: 'left' },
        {
          href: 'https://discord.gg/your-discord-link',
          label: 'Discord',
          position: 'right',
        },
        {
          href: 'https://github.com/24san',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'About',
          items: [
            {
              label: 'Server Info',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/your-discord-link',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/24san_mc',
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
              href: 'https://github.com/24san',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 24san Minecraft Server. Built with Docusaurus.`,
    },
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/dracula'),
    },
  },
};

module.exports = config;

