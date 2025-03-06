// https://nuxt.com/docs/api/configuration/nuxt-config
// import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { BASE_URL } from "./env";

export default defineNuxtConfig({
  ssr: true,
  srcDir: "src/",

  app: {
    baseURL: "/",
    head: {
      htmlAttrs: {
        lang: "zh",
      },
      viewport: "width=device-width, initial-scale=1, viewport-fit=cover",
      link: [],
    },
  },

  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  modules: [
    [
      "@nuxtjs/i18n",
      {
        strategy: "prefix_and_default", // 添加路由前缀的方式
        locales: ["zh", "zht"], //配置语种
        defaultLocale: "zh", // 默认语种
        vueI18n: "./locales/config.js", // 通过vueI18n配置
      },
    ],
    "@nuxtjs/tailwindcss",
    "@element-plus/nuxt",
  ],
  nitro: {
    devProxy: {
      "/api": {
        target: BASE_URL,
        changeOrigin: true,
      },
    },
  },
  routeRules: {
    "/api/**": {
      proxy: `${BASE_URL}/api/**`,
    },
  },
  runtimeConfig: {
    public: {
      API_BASE_ENV: BASE_URL,
    },
  },

  css: ["~/assets/css/tailwind.scss", "~/assets/css/index.scss"],

  components: [
    {
      path: "~/components/",
      pathPrefix: false,
    },
  ],

  vite: {
    resolve: {
      alias: {
        "@locales": path.resolve(__dirname, "locales"),
      },
    },
    plugins: [
      // tailwindcss(),
    ],
    ssr: {},
  },

  compatibilityDate: "2025-03-05",
});
