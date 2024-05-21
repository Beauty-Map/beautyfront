<template>

</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default'
})
const { isMobile } = useDevice();
const seenIntro = useCookie<boolean>('seenArtistIntro')
const router = useRouter()
const nuxt = useNuxtApp()
const showArtistIntro = ref(false)
nuxt.hook('page:finish', () => {
  if (isMobile && (!seenIntro || !seenIntro.value)) {
    seenIntro.value = true
    openArtistIntro()
  }
})

const openArtistIntro = () => {
  showArtistIntro.value = true
}
const closeArtistIntro = () => {
  showArtistIntro.value = false
}
</script>

<style scoped>

</style>