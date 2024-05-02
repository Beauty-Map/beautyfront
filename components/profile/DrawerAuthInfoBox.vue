<template>
  <div class="w-full flex justify-start items-center py-[13px] px-[13px] border-solid border border-[#A9A7A7] rounded-[17px] mt-[23px]">
    <ProfileIcon />
    <div v-if="!user" @click="openLoginRegisterModal" class="cursor-pointer mr-[13px] text-black text-[20px] leading-[30px] text-right">ثبت نام / ورود</div>
  </div>
</template>

<script setup lang="ts">

import ProfileIcon from "~/components/icons/ProfileIcon.vue";
import {useDrawerStore} from "~/store/Drawer";

const user = useSanctumUser();
const store = useDrawerStore()

const openLoginRegisterModal = () => {
  store.closeAllDrawers()
  store.openLoginDrawer()
}

</script>

<style scoped>

</style>