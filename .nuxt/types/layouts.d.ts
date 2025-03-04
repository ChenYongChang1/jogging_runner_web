import type { ComputedRef, MaybeRef } from 'vue'
export type LayoutKey = "default" | "none"
declare module "../../node_modules/.pnpm/nuxt@3.15.4_@parcel+watcher@2.5.1_@types+node@22.13.4_db0@0.2.4_ioredis@5.5.0_magicast@_1fd70a66e03eb8cdce476a5a25026baa/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: MaybeRef<LayoutKey | false> | ComputedRef<LayoutKey | false>
  }
}