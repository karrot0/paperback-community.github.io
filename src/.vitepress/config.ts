import { defineConfig } from 'vitepress';
import generateMeta from "./config/hooks/generateMeta";

import headConfig from "./config/headConfig";
import navbarConfig from "./config/navigation/navbar";
import sidebarConfig from "./config/navigation/sidebar";

const hostname = "https://paperback-community.github.io";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Paperback Community",
  description: "Community maintained Paperback extensions",

  head: headConfig,

  cleanUrls: true,

  lastUpdated: true,

  sitemap: {
    hostname,
  },

  transformHead: async (context) => generateMeta(context, hostname),

  markdown: {
    lineNumbers: [
      'typescript',
      'javascript',
      'java',
      'python',
      'cpp',
      'csharp',
      'go'
    ]
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/logo-rounded.svg",

    search: {
      provider: "local",
    },

    nav: navbarConfig,

    sidebar: sidebarConfig,

    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/paperback-community' },
      { icon: 'github', link: 'https://github.com/paperback-community' }
    ],

    editLink: {
      pattern: "https://github.com/paperback-community/paperback-community.github.io/tree/master/src/:path",
    },

    footer: {
      copyright:
        "Copyright © 2025 Paperback Community. MIT Licensed.",
    },

    outline: {
      level: [2, 3],
      label: 'On This Page'
    },
  }
})
