<template>
  <div class="w-full flex flex-col gap-y-[8px] justify-start items-start px-[4px] py-[8px]">
    <SideBarLink to="/panel" title="پروفایل">
      <template #icon>
        <ProfileSmallIcon />
      </template>
    </SideBarLink>
    <SideBarLink to="/panel/artist" title="ورود به پنل هنرمندان">
      <template #icon>
        <ArtistPanelIcon />
      </template>
    </SideBarLink>
    <SideBarLink v-if="auth.user" :is-link="false" @click="share" title="معرفی به دوستان">
      <template #icon>
        <ReferralIcon />
      </template>
    </SideBarLink>
    <SideBarLink :is-link="false" @click="goToSecurityPage" title="امنیت و سیاست حفظ حریم خصوصی">
      <template #icon>
        <SecurityIcon />
      </template>
    </SideBarLink>
    <SideBarLink v-if="auth.user" :is-link="false" @click="goToSupportPage" title="تماس باما">
      <template #icon>
        <ContactIcon />
      </template>
    </SideBarLink>
  </div>
</template>

<script setup lang="ts">

import SideBarLink from "~/components/sidebar/SideBarLink.vue";
import DashboardIcon from "~/components/icons/SideBar/DashboardIcon.vue";
import ProfileIcon from "~/components/icons/SideBar/ProfileIcon.vue";
import CourseIcon from "~/components/icons/SideBar/CourseIcon.vue";
import BannerIcon from "~/components/icons/SideBar/BannerIcon.vue";
import StatisticIcon from "~/components/icons/SideBar/StatisticIcon.vue";
import FinancialIcon from "~/components/icons/SideBar/FinancialIcon.vue";
import ContactusIcon from "~/components/icons/SideBar/ContactusIcon.vue";
import ProfileSmallIcon from "~/components/icons/ProfileSmallIcon.vue";
import ArtistPanelIcon from "~/components/icons/ArtistPanelIcon.vue";
import ReferralIcon from "~/components/icons/ReferralIcon.vue";
import SecurityIcon from "~/components/icons/SecurityIcon.vue";
import ContactIcon from "~/components/icons/ContactIcon.vue";
import {useAuthStore} from "~/store/Auth";
import {useDrawerStore} from "~/store/Drawer";

const auth = useAuthStore()
const store = useDrawerStore()
const router = useRouter()

const share = async () => {
  const link = `https://www.beautymap.ir/?ref=${auth.user?.referral_code}`;
  await navigator.share({
    title: "اشتراک‌گذاری لینک",
    text: "از این لینک دیدن کنید",
    url: link,
  });
}

const goToSupportPage = async () => {
  await router.push(`/support`)
}

const goToSecurityPage = async () => {
  if (!auth.user) {
    store.openLoginDrawer()
    return
  }
  await router.push(`/security`)
}
</script>

<style scoped>

</style>