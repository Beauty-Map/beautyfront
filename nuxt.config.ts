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
  ],
  sanctum: {
    baseUrl: 'http://localhost:8000', // Laravel API
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
      baseURL: 'http://localhost:8000/api'
    }
  }
})