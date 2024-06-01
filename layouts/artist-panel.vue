<template>
  <div class="page h-screen w-full flex flex-col relative">
    <PageLoading v-if="loading"/>
    <ArtistProfileDrawer />
    <ArtistAgreementDrawer />
    <ArtistAgreementResultDrawer />
    <NotificationDrawer />
    <slot />
  </div>
</template>

<script setup lang="ts">

import PageLoading from "~/components/loading/PageLoading.vue";
import ArtistProfileDrawer from "~/components/drawer/ArtistProfileDrawer.vue";
import ArtistAgreementDrawer from "~/components/drawer/ArtistAgreementDrawer.vue";
import ArtistAgreementResultDrawer from "~/components/drawer/ArtistAgreementResultDrawer.vue";
import NotificationDrawer from "~/components/drawer/NotificationDrawer.vue";
const nuxt = useNuxtApp()
const loading = ref<boolean>(true)
nuxt.hook('page:loading:start', () => {
  loading.value = true
})
nuxt.hook('page:loading:end', () => {
  setTimeout(() => {
    loading.value = false
  }, 500)
})
</script>

<style scoped>

</style>