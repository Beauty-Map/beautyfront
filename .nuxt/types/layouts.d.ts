import { ComputedRef, MaybeRef } from 'vue'
export type LayoutKey = "artist-panel" | "artist-single" | "default" | "intro" | "panel" | "portfolio-single" | "security" | "ticket"
declare module "../../node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: MaybeRef<LayoutKey | false> | ComputedRef<LayoutKey | false>
  }
}