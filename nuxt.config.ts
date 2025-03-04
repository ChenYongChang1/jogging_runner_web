// https://nuxt.com/docs/api/configuration/nuxt-config
// import tailwindcss from "@tailwindcss/vite";

import { BASE_URL } from "./env";

export default defineNuxtConfig({
  ssr: false,
  srcDir: "src/",
  compatibilityDate: "2024-11-01",
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
  devtools: { enabled: true },
  modules: ["@pinia/nuxt", "@nuxtjs/tailwindcss", "@element-plus/nuxt"],
  nitro: {
    devProxy: {
      "/api": {
        target: BASE_URL,
        changeOrigin: true,
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
    plugins: [
      // tailwindcss(),
    ],
    ssr: {},
  },
});
