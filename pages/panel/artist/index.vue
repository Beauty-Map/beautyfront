<template>
  <div class="relative w-full h-full flex flex-col justify-start items-start">
    <ArtistIntroDrawer :is-open="showArtistIntro" @close="closeArtistIntro"/>
    <Header :avatar="user.avatar" :banner="user.banner" :full_name="user.full_name" :plan-title="user.selected_plan?.title" :rate="user.plan.plan.star_count"/>
    <ArtistLinkBox class="mt-6 px-[15px]" :is-profile-completed="user.is_artist_profile_completed"/>
  </div>
</template>

<script setup lang="ts">
import ArtistIntroDrawer from "~/components/drawer/ArtistIntroDrawer.vue";
import Header from "~/components/artist-panel/Header.vue";
import ArtistLinkBox from "~/components/artist-panel/ArtistLinkBox.vue";
import {useAuthStore} from "~/store/Auth";

definePageMeta({
  layout: 'artist-panel',
  middleware: 'auth'
})
const { isMobile } = useDevice();
const seenIntro = useCookie<boolean>('seenArtistIntro', {
  maxAge: 256*24*60*60*100
})
const router = useRouter()
const nuxt = useNuxtApp()
const auth = useAuthStore()
const user = ref(auth.user)
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