import type { FetchContext } from 'ofetch'
import type { ConsolaInstance } from 'consola'
import type { NuxtApp } from '#app'
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
    // baseUrl: 'https://api.beautymap.ir', // Laravel API
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
      baseURL: 'http://localhost:8000/api',
      uploadURL: 'http://localhost:8000/api/upload',
      // baseURL: 'https://api.beautymap.ir/api',
      // uploadURL: 'https://api.beautymap.ir/api/upload',
    }
  },
  devServer: {
    host: '0.0.0.0',
    port: 3000
  }
})