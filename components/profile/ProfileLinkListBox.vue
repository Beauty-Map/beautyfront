<template>
  <div class="flex flex-col justify-start items-start w-full pb-10">
    <ProfileLink :to="'/panel'" v-if="user">
      <template #icon>
        <ProfileSmallIcon />
      </template>
      <template #title>پروفایل</template>
    </ProfileLink>
    <ProfileLink :is-link="false" @click="openArtistPanel">
      <template #icon>
        <ArtistPanelIcon />
      </template>
      <template #title>ورود به پنل هنرمندان</template>
    </ProfileLink>
<!--    <ProfileLink :to="'http://127.0.0.1:5000'">-->
<!--      <template #icon>-->
<!--        <ArtistPanelIcon />-->
<!--      </template>-->
<!--      <template #title>ورود به پنل بازاریاب</template>-->
<!--    </ProfileLink>-->
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
    <ButtonExit @click="exit" v-if="auth.user"/>
  </div>
</template>

<script setup lang="ts">

import ProfileSmallIcon from "~/components/icons/ProfileSmallIcon.vue";
import ArtistPanelIcon from "~/components/icons/ArtistPanelIcon.vue";
import ReferralIcon from "~/components/icons/ReferralIcon.vue";
import ContactIcon from "~/components/icons/ContactIcon.vue";
import SecurityIcon from "~/components/icons/SecurityIcon.vue";
import {useDrawerStore} from "~/store/Drawer";
import {useAuthStore} from "~/store/Auth";

const app = useNuxtApp()
const auth = useAuthStore()
const user = ref(auth.user)
const store = useDrawerStore()
const router = useRouter()

const openArtistPanel = () => {
  if (!auth.user) {
    store.openLoginDrawer()
    return
  }
  router.push('/panel/artist')
}

const exit = () => {
  auth.setUser(null)
  auth.setToken(null)
  const token = useCookie('token')
  token.value = ''
  app.$toast.success('با موفقیت خارج شدید', {rtl: true})
  store.closeAllDrawers()
  router.replace('/')
}

const openSecurityDrawer = () => {
  store.closeAllDrawers()
  store.openSecurityDrawer()
}
</script>

<style scoped>

</style>