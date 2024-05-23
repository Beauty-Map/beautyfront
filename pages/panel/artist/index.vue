<template>
  <div class="relative w-full h-full flex flex-col justify-start items-start">
    <ArtistIntroDrawer :is-open="showArtistIntro" @close="closeArtistIntro"/>
    <Header :avatar="user.avatar" :banner="user.banner" :full_name="user.full_name" :rate="user.rating"/>
    <ArtistLinkBox class="mt-6 px-[15px]" :is-profile-completed="user.is_artist_profile_completed"/>
  </div>
</template>

<script setup lang="ts">
import ArtistIntroDrawer from "~/components/drawer/ArtistIntroDrawer.vue";
import Header from "~/components/artist-panel/Header.vue";
import ArtistLinkBox from "~/components/artist-panel/ArtistLinkBox.vue";

definePageMeta({
  layout: 'artist-panel',
  middleware: 'auth'
})
const { isMobile } = useDevice();
const seenIntro = useCookie<boolean>('seenArtistIntro')
const router = useRouter()
const nuxt = useNuxtApp()
const user = useSanctumUser()
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
  seenIntro.value = true
  showArtistIntro.value = false
}
</script>

<style scoped>

</style>