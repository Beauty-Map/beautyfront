<template>
  <div class="mt-[20px] w-full flex flex-col items-start justify-start">
    <div class="pb-[15px] border-b border-b-[#A9A7A7] w-full flex flex-row items-center justify-between">
      <div @click="selectTab(0)" :class="[index == 0 ? 'bg-[#FF3CA0]' : 'bg-[#085EC2]']" class="cursor-pointer min-w-[130px] text-center px-[37px] py-[6px] bg-[#085EC2] border border-[#133C3E] font-medium text-[15px] leading-[30px] text-white rounded-[25px]">
        بیوگرافی
      </div>
      <div @click="selectTab(1)" :class="[index == 1 ? 'bg-[#FF3CA0]' : 'bg-[#085EC2]']" class="cursor-pointer min-w-[130px] text-center px-[37px] py-[6px] border border-[#133C3E] font-medium text-[15px] leading-[30px] text-white rounded-[25px]">
        نمونه کارها
      </div>
    </div>
    <ArtistBioBox :services-count="user.services_count" :services="getServices" :bio="user.bio" :work-hours="user.work_hours" :licenses="user.licenses" v-if="index === 0"/>
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
const getServices = computed(() => {
  const seenTitles = new Set();
  return  props.user.services.filter(item => {
    if (seenTitles.has(item.title)) return false;
    seenTitles.add(item.title);
    return true;
  });
})
</script>

<style scoped>

</style>