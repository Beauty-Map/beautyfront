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
    <SideBarLink to="http://127.0.0.1:5000" title="ورود به پنل بازاریاب">
      <template #icon>
        <ArtistPanelIcon />
      </template>
    </SideBarLink>
    <SideBarLink to="/panel/referral" title="معرفی به دوستان">
      <template #icon>
        <ReferralIcon />
      </template>
    </SideBarLink>
    <SideBarLink to="/security" title="امنیت و سیاست حفظ حریم خصوصی">
      <template #icon>
        <SecurityIcon />
      </template>
    </SideBarLink>
    <SideBarLink to="/support" title="تماس باما">
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
</script>

<style scoped>

</style>