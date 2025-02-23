// https://nuxt.com/docs/api/configuration/nuxt-config
// import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  ssr: false,
  srcDir: "src/",
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@pinia/nuxt", "@nuxtjs/tailwindcss"],

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
