export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: { dir: 'rtl', lang: 'fa' },
    },
  },
  css: ["@/assets/css/style.scss"],
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/device',
    'nuxt-auth-sanctum',
    '@pinia/nuxt',
    "nuxt-lodash",
    'nuxt3-leaflet',
    'dayjs-nuxt',
  ],
  sanctum: {
    baseUrl: process.env.BASE_URL, // Laravel API
    endpoints: {
      user: '/api/own',
      login: '/api/auth/login',
      logout: '/api/auth/logout',
    },
    client: {
      retry: 1,
    },
    redirectIfAuthenticated: false,
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
      baseURL: process.env.BASE_URL + '/api'
    }
  },
  server: {
    host: '0.0.0.0',
    port: 3000
  }
})