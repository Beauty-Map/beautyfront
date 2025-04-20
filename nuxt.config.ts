export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    head: {
      htmlAttrs: { dir: 'rtl', lang: 'fa' },
    },
  },

  css: ["@/assets/css/style.scss", "leaflet/dist/leaflet.css"],

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/device',
    '@pinia/nuxt',
    "nuxt-lodash",
    // 'nuxt3-leaflet',
    'dayjs-nuxt',
    'nuxt-gtag',
  ],

  gtag: {
    id: 'google-site-verification=rqwtUhnEx1ISv68hu7b69x_a-w6OGay5W0zd-bKgCb0'
  },

  tailwindcss: {
    cssPath: ['~/assets/css/tailwind.scss', {injectPosition: 'first'},],
    configPath: 'tailwind.config',
    exposeConfig: {
      level: 2
    },
    config: {},
    viewer: true,
  },

  vite: {
    resolve: {
      mainFields: [
        'browser',
        'module',
        'main',
        'jsnext:main',
        'jsnext'
      ]
    }
  },

  runtimeConfig: {
    public: {
      // baseURL: 'http://localhost:8000/api',
      // uploadURL: 'http://localhost:8000/api/upload',
      baseURL: 'https://api.beautymap.ir/api',
      uploadURL: 'https://api.beautymap.ir/api/upload',
      walletAddress: 'UQCz1nOgL8ys5uKkza6hT1usfk8F97JIvdyD4UvucpnTAgDd',
    }
  },

  devServer: {
    host: '0.0.0.0',
    port: 4000
  },

  compatibilityDate: '2025-04-20',
})