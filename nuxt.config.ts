// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  //ssr: false,
  // nitro: {
  //   preset: 'service-worker'
  // },
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@hypernym/nuxt-anime', '@dargmuesli/nuxt-cookie-control'],
  cookieControl: {
    domain: 'null.mobilex1122.eu',
    cookies: {
      necessary: [
      ],
      optional: [
        {
          description: {
            en:  'Used for Testing (No data saved)'
          },
          id: 'test1', // if unset, `getCookieId(cookie)` returns the cookie's slugified name instead, which e.g. is used to fill the state's `enabledCookieIds` list
          // use a short cookie id to save bandwidth!
          name: {
            en: 'Test Cookie 1' // you always have to specify a cookie name (in English)
          }
        },
        {
          description: {
            en:  'Used for Testing (No data saved)'
          },
          id: 'test2', // if unset, `getCookieId(cookie)` returns the cookie's slugified name instead, which e.g. is used to fill the state's `enabledCookieIds` list
          // use a short cookie id to save bandwidth!
          name: {
            en: 'Test Cookie 2' // you always have to specify a cookie name (in English)
          }
        },
      ],
    }
  }
})