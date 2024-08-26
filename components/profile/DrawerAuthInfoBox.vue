<template>
  <div class="w-full flex justify-start items-center py-[13px] px-[13px] border-solid border border-[#A9A7A7] rounded-[17px] mt-[23px]">
    <ProfileIcon v-if="!user || !user.avatar" />
    <img v-else :src="user.avatar" alt="" class="w-[47px] h-[47px] rounded-[50%] border-[#FFD700] border">
    <div v-if="!user" @click="openLoginRegisterModal" class="cursor-pointer mr-[13px] text-black text-[20px] leading-[30px] text-right">ثبت نام / ورود</div>
    <div v-else class="flex flex-col justify-start items-start w-full cursor-pointer mr-[13px] text-black text-[20px] leading-[30px] text-right">
      <div class="font-medium mb-[10px] text-[14px] leading-[21px] text-[#000000]">
        {{ user.full_name }}
      </div>
      <div></div>
    </div>
  </div>
</template>

<script setup lang="ts">

import ProfileIcon from "~/components/icons/ProfileIcon.vue";
import {useDrawerStore} from "~/store/Drawer";
import {useAuthStore} from "~/store/Auth";

const auth = useAuthStore()
const store = useDrawerStore()
const user = ref(auth.user)
const openLoginRegisterModal = () => {
  store.closeAllDrawers()
  store.openLoginDrawer()
}

watch(() => auth.user, () => {
  console.log(auth.user, "i")
  user.value = auth.user
})
</script>

<style scoped>

</style>