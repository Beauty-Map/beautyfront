<template>
  <div class="flex flex-col w-full relative min-h-[150px] bg-center	bg-no-repeat bg-cover rounded-[8px]" :style="`background-image: url(${image})`">
<!--    <img class="min-h-[144px]" :src="image" alt="">-->
    <div class="sm:max-w-[60%] max-w-[75%] pt-[10px] px-[15px]  top-0 left-0 right-0 bottom-0 flex flex-col items-start justify-start">
      <div v-if="mainTitle" class="text-base font-medium text-right text-white mb-2">{{ mainTitle }}</div>
      <div v-if="subTitle" class="text-sm font-normal text-right text-white mb-2">{{ subTitle }}</div>
      <div v-if="description" class="text-xs font-normal text-right text-white mb-2">{{ description }}</div>
      <a :href="linkUrl" target="_blank" class="rounded-3xl py-[7px] px-[35px] text-center bg-[#FF3CA0] min-h-[22px] text-white text-sm">
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