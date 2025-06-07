export default defineNuxtConfig(async () => {

  async function getDynamicRoutesFromAPI() {
    const routes = []
    for (let i = 1; i <= 200; i++) {
      routes.push(`/portfolios/${i}`)
      routes.push(`/artists/${i}`)
    }
    return routes
  }

  const dynamicRoutes = await getDynamicRoutesFromAPI()

  return {
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
      'nuxt-lodash',
      'dayjs-nuxt',
      'nuxt-gtag',
      '@nuxtjs/sitemap',
    ],

    sitemap: {
      hostname: 'https://beautymap.ir',
      cacheTime: 0,
      debug: true,
      defaults: {
        changefreq: 'daily',
        priority: 1,
        lastmod: new Date().toISOString()
      },
      strictNuxtContentPaths: true,
      autoLastmod: true,
      trailingSlash: true,
      exclude: [],
      urls: async () => {
        const staticRoutes = [
          '/',
          '/aboutus',
        ].map(route => ({
          loc: route,
          lastmod: new Date().toISOString(),
          changefreq: 'daily',
          priority: route === '/' ? 1.0 : 0.8
        }))

        const formattedDynamicRoutes = dynamicRoutes.map(route => ({
          loc: route,
          lastmod: new Date().toISOString(),
          changefreq: 'weekly',
          priority: 0.7
        }))

        return [...staticRoutes, ...formattedDynamicRoutes]
      }
    },

    nitro: {
      prerender: {
        crawlLinks: true,
        routes: [
          '/sitemap.xml',
        ]
      }
    },

    gtag: {
      id: 'google-site-verification=rqwtUhnEx1ISv68hu7b69x_a-w6OGay5W0zd-bKgCb0'
    },

    tailwindcss: {
      cssPath: ['~/assets/css/tailwind.scss', { injectPosition: 'first' }],
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
        // baseURL: 'http://127.0.0.1:8000/api',
        baseURL: 'https://api.beautymap.ir/api',
        // uploadURL: 'http://127.0.0.1:8000/api/upload',
        uploadURL: 'https://api.beautymap.ir/api/upload',
        walletAddress: 'UQCz1nOgL8ys5uKkza6hT1usfk8F97JIvdyD4UvucpnTAgDd'
      }
    },

    devServer: {
      host: '0.0.0.0',
      port: 4000
    },

    compatibilityDate: '2025-04-20',
  }
})
