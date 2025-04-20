<template>
  <div class="page h-full w-full flex flex-col relative max-w-[425px] mx-auto">
    <PageLoading v-if="loading"/>
    <slot />
  </div>
</template>

<script setup lang="ts">

import PageLoading from "~/components/loading/PageLoading.vue";
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