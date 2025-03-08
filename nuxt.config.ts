// https://nuxt.com/docs/api/configuration/nuxt-config
// import tailwindcss from "@tailwindcss/vite";
import path from "path";
const BASE_URL = import.meta.env.VITE_BASE_URL;

export default defineNuxtConfig({
  ssr: true,
  srcDir: "src/",

  app: {
    baseURL: "/",
    head: {
      script: [
        {
          src: "//unpkg.com/vconsole@latest/dist/vconsole.min.js",
          type: "text/javascript",
        },
        { innerHTML: "new VConsole()" },
      ],
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
        prependPath: true, // 是否自动添加路径
      },
    },
    routeRules: {
      "/api/**": {
        proxy: `${BASE_URL}/**`,
      },
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
      alias: {},
    },
    plugins: [
      // tailwindcss(),
    ],
    ssr: {},
    build: {
      sourcemap: false,
      rollupOptions: {
        output: {
          manualChunks: (id) => {
            if (id.includes("element-plus")) {
              return "componentUi";
            } else if (id.includes("pages")) {
              return "pages";
            } else if (id.includes("lodash")) {
              return "lodash";
            } else if (id.includes("nuxt")) {
              return "nuxt";
            }else if (id.includes("vue-router")) {
              return "vue-router";
            }else if (id.includes("vue")) {
              return "vue";
            }
          },
        },
      },
    },
  },
  build: {
    analyze: true,
  },

 

  compatibilityDate: "2025-03-05",
});
