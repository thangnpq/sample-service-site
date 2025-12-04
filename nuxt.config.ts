const environment = process.env.APP_ENV;
const envSettings = require(`./env.${environment}.js`); 

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  runtimeConfig: {
      // Public keys that are exposed to the client
      public: {
          apiBase: envSettings.API_BASE
      }
  },
  app: {
    head: {
      title: envSettings.SITE_TITLE,
    },
  },
})
