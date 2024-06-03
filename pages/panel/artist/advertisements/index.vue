<template>
  <div class=" w-full flex flex-col items-start justify-start">
    <div class="relative w-full flex flex-row items-center justify-center py-[23px]">
      <div @click="goToWalletPage" class="absolute right-[10px] cursor-pointer px-[8px] h-[37px] flex flex-row justify-between items-center border border-[#A9A7A7] rounded-[20px] bg-white">
        <AddMoneyIcon />
        <span class="font-medium text-[18px] leading-[28px] mx-[8px]">{{ user.coins }}</span>
        <DollarIcon />
      </div>
      <div class="font-semibold text-[16px] text-[#141414] leading-[24px]">تبلیغات ویژه</div>
      <BackIcon @click="goBack" class="absolute left-[10px]"/>
    </div>
    <div class="flex flex-col justify-start items-start w-full px-[20px] py-[20px]">
      <ProfileLink :to="'/panel/upgrade'">
        <template #icon>
          <AdvIcon />
        </template>
        <template #title>
          <span class="text-[16px] leading-[25px]">ارتقا حساب کاربری</span>
        </template>
      </ProfileLink>
      <ProfileLink :to="'/panel/artist/laddering'">
        <template #icon>
          <CharpIcon />
        </template>
        <template #title>
          <span class="text-[16px] leading-[25px]">نردبان</span>
        </template>
      </ProfileLink>
      <ProfileLink :to="'/panel/artist/wallet'">
        <template #icon>
          <CoinBlackIcon />
        </template>
        <template #title>
          <span class="text-[16px] leading-[25px]">خرید سکه</span>
        </template>
      </ProfileLink>
    </div>
  </div>
</template>

<script setup lang="ts">

import BackIcon from "~/components/icons/BackIcon.vue";
import DollarIcon from "~/components/icons/DollarIcon.vue";
import AddMoneyIcon from "~/components/icons/AddMoneyIcon.vue";
import AdvIcon from "~/components/icons/AdvIcon.vue";
import CharpIcon from "~/components/icons/CharpIcon.vue";
import CoinBlackIcon from "~/components/icons/CoinBlackIcon.vue";

definePageMeta({
  layout: 'artist-panel',
  middleware: 'auth'
})

const router = useRouter()
const user = useSanctumUser()

const goBack = () => {
  router.back()
}

const goToWalletPage = () => {
  router.push('/panel/artist/wallet')
}
</script>

<style scoped>

</style>