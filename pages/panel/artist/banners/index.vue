<template>
  <div class="pt-[20px] w-full flex flex-col items-start justify-start">
    <div class="relative w-full flex flex-row items-center justify-center py-[23px]">
      <div class="font-semibold text-[16px] text-[#141414] leading-[24px]">دریافت بنر تبلیغاتی</div>
      <BackIcon @click="goBack" class="absolute left-[10px]"/>
    </div>
    <div class="w-full text-center flex flex-col justify-start items-center px-[10px] mt-[45px]">
      <div v-for="(b,i) in banners" :key="i" class="w-full flex flex-col justify-start items-center">
        <img :src="b.image" alt="" class="w-full max-h-[242px]"/>
        <p class="mt-[10px] font-semibold text-[16px] leading-[24px] text-center">www.beautymap.ir/{{ user.id }}</p>
        <button @click="shareLink(`www.beautymap.ir/${user.id}`)" class="cursor-pointer mt-[30px] w-full max-w-[260px] bg-[#1EFF81] text-[16px] leading-[24px] font-semibold text-black text-center rounded-[20px] py-[12px] px-[18px]">اشتراک گذاری</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import BackIcon from "~/components/icons/BackIcon.vue";
import {useAuthStore} from "~/store/Auth";

definePageMeta({
  layout: 'artist-panel',
  middleware: 'auth'
})

const router = useRouter()
const auth = useAuthStore()
const user = ref(auth.user)

const banners = ref([
  {
    id: 1,
    image: '/panel/banner.png',
  }
])

const goBack = () => {
  router.replace('/panel/artist')
}

const shareLink = async (link: string) => {
  await navigator.share({
    url: link,   // URL to be shared
  })
}
</script>

<style scoped>

</style>