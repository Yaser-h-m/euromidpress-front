// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
     '@primevue/nuxt-module'
  ],
  fonts: {
    families: [
      { name: 'Roboto Slab', provider: 'google', weights: [400, 500, 600, 700], global: true, },
    ]
  },
   primevue: {
        /* Configuration */
    }
})