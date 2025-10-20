// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  // Add Tailwind module and global CSS
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/tailwind.css']
})
