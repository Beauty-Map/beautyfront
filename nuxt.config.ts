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
    baseUrl: 'http://127.0.0.1:8000/api',
    redirectIfAuthenticated: false,
    endpoints: {
      login: '/auth/login',
      logout: '/auth/logout',
      user: '/own',
    }
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
  }
})