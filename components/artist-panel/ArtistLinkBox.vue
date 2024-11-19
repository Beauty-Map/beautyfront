<template>
  <div class="flex flex-col justify-start items-start w-full pb-10">
    <ProfileLink class="relative" @click="openArtistProfileDrawer" :is-link="false">
      <template #icon>
        <ArtistPanelIcon />
      </template>
      <template #title>پروفایل</template>
      <template #sub-icon v-if="!user.is_artist_profile_completed">
        <DangerIcon @click="openArtistProfileDrawer"/>
      </template>
    </ProfileLink>
    <ProfileLink :to="'/panel/artist/portfolios'">
      <template #icon>
        <PortfolioIcon />
      </template>
      <template #title>نمونه کار</template>
    </ProfileLink>
    <ProfileLink :to="'/panel/artist/advertisements'">
      <template #icon>
        <AdvIcon />
      </template>
      <template #title>ارتقا</template>
    </ProfileLink>
    <ProfileLink :to="'/panel/artist/support'">
      <template #icon>
        <ContactIcon />
      </template>
      <template #title>تماس با پشتیبانی</template>
    </ProfileLink>
    <ProfileLink :is-link="false" @click="onShareClicked">
      <template #icon>
        <BannerIcon />
      </template>
      <template #title>اشتراک گذاری</template>
    </ProfileLink>
    <ProfileLink :to="'/panel/artist/views'">
      <template #icon>
        <ViewIcon />
      </template>
      <template #title>آمار بازدید پروفایل</template>
    </ProfileLink>
  </div>
</template>

<script setup lang="ts">

import ArtistPanelIcon from "~/components/icons/ArtistPanelIcon.vue";
import DangerIcon from "~/components/icons/DangerIcon.vue";
import PortfolioIcon from "~/components/icons/PortfolioIcon.vue";
import AdvIcon from "~/components/icons/AdvIcon.vue";
import ContactIcon from "~/components/icons/ContactIcon.vue";
import BannerIcon from "~/components/icons/BannerIcon.vue";
import ViewIcon from "~/components/icons/ViewIcon.vue";
import {useDrawerStore} from "~/store/Drawer";
import {useAuthStore} from "~/store/Auth";

const props = defineProps({
  isProfileCompleted: {
    type: Boolean,
    default: true
  }
})

const store = useDrawerStore()
const app = useNuxtApp()
const auth = useAuthStore()
const user = ref(auth.user)

const openArtistProfileDrawer = () => {
  store.openArtistProfileDrawer()
}

const onShareClicked = async () => {
  if (!user.value) {
    app.$toast.error('برای دسترسی به این بخش وارد شوید', {rtl: true})
    store.openLoginDrawer()
    return
  }
  let link = window.location.host;
  link = `${link}/artist?ref=${user.value?.id}`
  await navigator.share({
    url: link,   // URL to be shared
  })
  app.$toast.success('برای دسترسی به این بخش وارد شوید', {rtl: true})
}
</script>

<style scoped>

</style>