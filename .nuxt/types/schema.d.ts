import { NuxtModule, RuntimeConfig } from 'nuxt/schema'
declare module 'nuxt/schema' {
  interface NuxtConfig {
    ["tailwindcss"]?: typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["device"]?: typeof import("@nuxtjs/device").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["sanctum"]?: typeof import("nuxt-auth-sanctum").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["pinia"]?: typeof import("@pinia/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["lodash"]?: typeof import("nuxt-lodash").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["nuxtLeaflet"]?: typeof import("nuxt3-leaflet").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["dayjs"]?: typeof import("dayjs-nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["devtools"]?: typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule | string | [NuxtModule | string, Record<string, any>] | ["@nuxtjs/tailwindcss", Exclude<NuxtConfig["tailwindcss"], boolean>] | ["@nuxtjs/device", Exclude<NuxtConfig["device"], boolean>] | ["nuxt-auth-sanctum", Exclude<NuxtConfig["sanctum"], boolean>] | ["@pinia/nuxt", Exclude<NuxtConfig["pinia"], boolean>] | ["nuxt-lodash", Exclude<NuxtConfig["lodash"], boolean>] | ["nuxt3-leaflet", Exclude<NuxtConfig["nuxtLeaflet"], boolean>] | ["dayjs-nuxt", Exclude<NuxtConfig["dayjs"], boolean>] | ["@nuxt/devtools", Exclude<NuxtConfig["devtools"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
  interface RuntimeConfig {
   app: {
      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },
  }
  interface PublicRuntimeConfig {
   baseURL: string,

   uploadURL: string,

   device: {
      enabled: boolean,

      defaultUserAgent: string,

      refreshOnResize: boolean,
   },

   sanctum: {
      userStateKey: string,

      redirectIfAuthenticated: boolean,

      endpoints: {
         csrf: string,

         login: string,

         logout: string,

         user: string,
      },

      csrf: {
         cookie: string,

         header: string,
      },

      client: {
         retry: number,
      },

      redirect: {
         keepRequestedRoute: boolean,

         onLogin: string,

         onLogout: string,

         onAuthOnly: string,

         onGuestOnly: string,
      },

      globalMiddleware: {
         enabled: boolean,

         allow404WithoutAuth: boolean,
      },

      logLevel: number,

      baseUrl: string,
   },
  }
}
declare module 'vue' {
        interface ComponentCustomProperties {
          $config: RuntimeConfig
        }
      }