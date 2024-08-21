<template>
  <div class="flex flex-col w-full relative bg-center	bg-no-repeat bg-cover" :style="`background-image: url(${image})`">
<!--    <img class="min-h-[144px]" :src="image" alt="">-->
    <div class="main-desktop-slider-left-box pt-[10px] px-[15px] md:pt-[25px] md:px-[30px] absolute top-0 left-0 bottom-0 flex flex-col items-center justify-center">
      <div v-if="mainTitle" class="text-base font-medium text-right text-[40px] leading-[60px] text-white mb-2">{{ mainTitle }}</div>
      <div v-if="subTitle" class="text-sm font-normal text-right text-[24px] leading-[40px] text-white mb-2">{{ subTitle }}</div>
      <div v-if="description" class="text-xs font-normal text-right text-white mb-2">{{ description }}</div>
      <a :href="linkUrl" target="_blank" class="rounded-3xl mt-[20px] py-[7px] px-[35px] flex justify-center items-center text-center bg-[#FF3CA0] text-[28px] min-h-[44px] text-white text-sm">
        {{ linkTitle ?? 'مشاهده' }}
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  image: {
    type: String,
    default: '/images/artist-slider/1.png'
  },
  mainTitle: {
    type: String,
    default: ''
  },
  subTitle: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  linkUrl: {
    type: String,
    default: '/'
  },
  linkTitle: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>

</style>