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
    '@nuxtjs/sitemap',
  ],

  sitemap: {
    hostname: 'http://localhost:3000',
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
    exclude: [
    ],
    urls: async () => {
      const staticRoutes = [
        '/',
        '/about',
      ].map(route => ({
        loc: route,
        lastmod: new Date().toISOString(),
        changefreq: 'daily',
        priority: route === '/' ? 1.0 : 0.8
      }));

      const dynamicRoutes = await getDynamicRoutesFromAPI();
      const formattedDynamicRoutes = dynamicRoutes.map(route => ({
        loc: route,
        lastmod: new Date().toISOString(),
        changefreq: 'weekly',
        priority: 0.7
      }));

      return [...staticRoutes, ...formattedDynamicRoutes];
    }
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/sitemap.xml']
    }
  },

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

async function getDynamicRoutesFromAPI() {
  const { data } = await $fetch('http://localhost:8000/api/portfolios');
  return data.map(portfolio => `/portfolios/${portfolio.id}`);
}