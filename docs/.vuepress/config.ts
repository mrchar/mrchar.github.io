import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";

export default defineUserConfig<DefaultThemeOptions>({
  locales: {
    "/": {
      lang: "zh-CN",
      title: "你好Char先生！",
      description: "你好Char先生！",
    },
  },

  themeConfig: {
    logo: "/images/logo.jpg",
    repo: "mrchar/mrchar.github.io",
    locales: {
      "/": {
        // navbar
        navbar: [
          {
            text: "欢迎",
            link: "/",
          },
          {
            text: "记录",
            children: [
              {
                text: "其他",
                link: "/records/others/index.md",
              },
            ],
          },
          {
            text: "总结",
            children: [{ text: "Golang", link: "/summary/golang/index.md" }],
          },
          {
            text: "思考",
            children: [{ text: "其他", link: "/thinking/others/index.md" }],
          },
        ],
        selectLanguageName: "简体中文",
        selectLanguageText: "选择语言",
        selectLanguageAriaLabel: "选择语言",

        // page meta
        editLinkText: "在 GitHub 上编辑此页",
        lastUpdatedText: "上次更新",
        contributorsText: "贡献者",

        // custom containers
        tip: "提示",
        warning: "注意",
        danger: "警告",

        // 404 page
        notFound: [
          "这里什么都没有",
          "我们怎么到这来了？",
          "这是一个 404 页面",
          "看起来我们进入了错误的链接",
        ],
        backToHome: "返回首页",

        // a11y
        openInNewWindow: "在新窗口打开",
        toggleDarkMode: "切换夜间模式",
        toggleSidebar: "切换侧边栏",
      },
    },
  },
});
