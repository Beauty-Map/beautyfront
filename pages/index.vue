<template>
  <div class="flex w-full flex-col px-[23px] py-[10px] h-full">
    <MainHeader class="mb-15"/>
    <MainSearchBox class="mb-15"/>
    <PopularArtistSlider class="mb-10"/>
    <ServiceBox class="mb-15"/>
    <NearestArtistListBox class="mb-15"/>
  </div>
<!--  <div class="hidden w-full flex-col h-full md:flex">-->
<!--    <PopularArtistDesktopSlider class="mb-10"/>-->
<!--    <ServiceDesktopBox class="mb-10"/>-->
<!--    <NearestArtistDesktopListBox class="mb-10"/>-->
<!--    <RandomArtistDesktopListBox class="mb-10"/>-->
<!--  </div>-->
</template>

<script setup lang="ts">
import MainHeader from "~/components/header/MainHeader.vue";
import PopularArtistSlider from "~/components/main/PopularArtistSlider.vue";
import PopularArtistDesktopSlider from "~/components/main/PopularArtistDesktopSlider.vue";
import ServiceBox from "~/components/main/ServiceBox.vue";
import NearestArtistListBox from "~/components/main/NearestArtistListBox.vue";
import ServiceDesktopBox from "~/components/main/ServiceDesktopBox.vue";
import NearestArtistDesktopListBox from "~/components/main/NearestArtistDesktopListBox.vue";
import RandomArtistDesktopListBox from "~/components/main/RandomArtistDesktopListBox.vue";

definePageMeta({
  layout: 'default'
})
const { isMobile } = useDevice();
const seenIntro = useCookie<boolean>('seenIntro', {
  maxAge: 60 * 60 * 24 * 10000
})
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