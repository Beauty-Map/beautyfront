<template>
  <div class="mt-[20px] w-full flex flex-col items-start justify-start">
    <div class="pb-[15px] border-b border-b-[#A9A7A7] w-full flex flex-row items-center justify-between">
      <div @click="selectTab(0)" class="cursor-pointer min-w-[130px] text-center px-[37px] py-[6px] bg-[#085EC2] border border-[#133C3E] font-medium text-[15px] leading-[30px] text-white rounded-[25px]">
        بیوگرافی
      </div>
      <div @click="selectTab(1)" class="cursor-pointer min-w-[130px] text-center px-[37px] py-[6px] bg-[#085EC2] border border-[#133C3E] font-medium text-[15px] leading-[30px] text-white rounded-[25px]">
        نمونه کارها
      </div>
    </div>
    <ArtistBioBox :bio="user.bio" :work-hours="user.work_hours" :licenses="user.licenses" v-if="index === 0"/>
    <ArtistPortfolioBox v-if="index === 1"/>
  </div>
</template>

<script setup lang="ts">

import ArtistPortfolioBox from "~/components/icons/ArtistPortfolioBox.vue";
import ArtistBioBox from "~/components/artist/ArtistBioBox.vue";

const props = defineProps({
  user: {
    type: Object,
    required: true
  }
})

const index = ref<number>(0)

const selectTab = (i: number) => {
  index.value = i
}
</script>

<style scoped>

</style>