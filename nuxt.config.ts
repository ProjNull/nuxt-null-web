// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  //ssr: false,
  // nitro: {
  //   preset: 'service-worker'
  // },
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@hypernym/nuxt-anime'],
})