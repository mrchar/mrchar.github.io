import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";

export default defineUserConfig<DefaultThemeOptions>({
  lang: "zh-CN",
  title: "你好Char先生！",
  description: "你好Char先生！",

  themeConfig: {
    logo: "/images/logo.jpg",
  },
});
