import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
  bundler: viteBundler(),
  lang: "zh-CN",
  title: "我的个人网站",
  description: "记录技术、产品和思考",
  base: "/my-vuepress-site/",

  theme: hopeTheme({
    hostname: "https://yourdomain.com",

    author: {
      name: "你的名字",
      url: "/about/",
    },

    logo: "",

    navbar: [
      { text: "首页", link: "/", icon: "home" },
      { text: "产品", link: "/products/", icon: "star" },
      { text: "会员", link: "/membership/", icon: "crown" },
      {
        text: "Blog",
        icon: "blog",
        children: [
          { text: "全部", link: "/article/", icon: "list" },
          { text: "长文", link: "/blog/longform/", icon: "newspaper" },
          { text: "短帖", link: "/blog/x/", icon: "x-twitter" },
        ],
      },
      { text: "专栏", link: "/series/", icon: "layer-group" },
      { text: "开源项目", link: "/oss/", icon: "code-branch" },
      { text: "关于", link: "/about/", icon: "circle-user" },
    ],

    sidebar: false,

    footer: "MIT Licensed | Copyright © 2026",
    displayFooter: true,

    blog: false,
    editLink: false,

    docsDir: "docs/src",
    iconAssets: "fontawesome",

    plugins: {
      docsearch: false,
    },
  }),
});
