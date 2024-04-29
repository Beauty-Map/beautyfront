<template>
  <div class="flex flex-col px-[23px] py-[10px] h-full">
    <MainHeader class="mb-15"/>
    <MainSearchBox class="mb-15"/>
    <PopularArtistSlider class="mb-10"/>
    <ServiceBox class="mb-15"/>
    <NearestArtistListBox class="mb-15"/>
  </div>
</template>

<script setup lang="ts">
import MainHeader from "~/components/header/MainHeader.vue";
import PopularArtistSlider from "~/components/main/PopularArtistSlider.vue";
import ServiceBox from "~/components/main/ServiceBox.vue";
import NearestArtistListBox from "~/components/main/NearestArtistListBox.vue";

definePageMeta({
  layout: 'default'
})
const { isMobile } = useDevice();
const seenIntro = useCookie<boolean>('seenIntro')
const router = useRouter()
const nuxt = useNuxtApp()
nuxt.hook('page:finish', () => {
  if (isMobile && (!seenIntro || !seenIntro.value)) {
    seenIntro.value = true
    router.replace('/intro')
  }
})
</script>

<style scoped>

</style>