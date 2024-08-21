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
      <template #title>تبلیغات ویژه</template>
    </ProfileLink>
    <ProfileLink :to="'/panel/artist/support'">
      <template #icon>
        <ContactIcon />
      </template>
      <template #title>تماس با پشتیبانی</template>
    </ProfileLink>
    <ProfileLink :to="'/panel/artist/banners'">
      <template #icon>
        <BannerIcon />
      </template>
      <template #title>دریافت بنر هنرمند</template>
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

const props = defineProps({
  isProfileCompleted: {
    type: Boolean,
    default: true
  }
})

const store = useDrawerStore()
const user = useSanctumUser()

const openArtistProfileDrawer = () => {
  store.openArtistProfileDrawer()
}
</script>

<style scoped>

</style>