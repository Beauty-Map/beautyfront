<template>
  <div class="flex flex-col justify-start items-start w-full pb-10">
    <ProfileLink :to="'/panel'" v-if="user">
      <template #icon>
        <ProfileSmallIcon />
      </template>
      <template #title>پروفایل</template>
    </ProfileLink>
    <ProfileLink :to="'/panel/artist'">
      <template #icon>
        <ArtistPanelIcon />
      </template>
      <template #title>ورود به پنل هنرمندان</template>
    </ProfileLink>
    <ProfileLink :to="'http://127.0.0.1:5000'">
      <template #icon>
        <ArtistPanelIcon />
      </template>
      <template #title>ورود به پنل بازاریاب</template>
    </ProfileLink>
    <ProfileLink :to="'/panel/referral'">
      <template #icon>
        <ReferralIcon />
      </template>
      <template #title>معرفی به دوستان</template>
    </ProfileLink>
    <ProfileLink :is-link="false" @click="openSecurityDrawer">
      <template #icon>
        <SecurityIcon />
      </template>
      <template #title>امنیت و سیاست حفظ حریم خصوصی</template>
    </ProfileLink>
    <ProfileLink :to="'/support'">
      <template #icon>
        <ContactIcon />
      </template>
      <template #title>تماس باما</template>
    </ProfileLink>
    <ButtonExit @click="exit" v-if="user"/>
  </div>
</template>

<script setup lang="ts">

import ProfileSmallIcon from "~/components/icons/ProfileSmallIcon.vue";
import ArtistPanelIcon from "~/components/icons/ArtistPanelIcon.vue";
import ReferralIcon from "~/components/icons/ReferralIcon.vue";
import ContactIcon from "~/components/icons/ContactIcon.vue";
import SecurityIcon from "~/components/icons/SecurityIcon.vue";
import {useDrawerStore} from "~/store/Drawer";

const user = useSanctumUser()
const auth = useSanctumAuth()
const store = useDrawerStore()
const router = useRouter()

const exit = () => {
  auth.logout()
      .then(res => {
        store.closeAllDrawers()
        router.replace('/')
      })
      .catch(err => {
        console.log(err, "err")
      })
  // window.location.reload()
}

const openSecurityDrawer = () => {
  store.closeAllDrawers()
  store.openSecurityDrawer()
}
</script>

<style scoped>

</style>