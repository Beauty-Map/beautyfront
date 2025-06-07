<template>
  <div class="w-full rounded-[50px] bg-white shadow-[0px_5px_30px_5px_#00000040] px-[70px] py-[40px]">
    <div class="w-full flex flex-row justify-start items-center pb-[25px] border-b border-b-black">
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M30 30C27.25 30 24.8958 29.0208 22.9375 27.0625C20.9792 25.1042 20 22.75 20 20C20 17.25 20.9792 14.8958 22.9375 12.9375C24.8958 10.9792 27.25 10 30 10C32.75 10 35.1042 10.9792 37.0625 12.9375C39.0208 14.8958 40 17.25 40 20C40 22.75 39.0208 25.1042 37.0625 27.0625C35.1042 29.0208 32.75 30 30 30ZM10 50V43C10 41.5833 10.3646 40.2812 11.0938 39.0938C11.8229 37.9062 12.7917 37 14 36.375C16.5833 35.0833 19.2083 34.1146 21.875 33.4688C24.5417 32.8229 27.25 32.5 30 32.5C32.75 32.5 35.4583 32.8229 38.125 33.4688C40.7917 34.1146 43.4167 35.0833 46 36.375C47.2083 37 48.1771 37.9062 48.9062 39.0938C49.6354 40.2812 50 41.5833 50 43V50H10Z" fill="black"/>
      </svg>
      <div class="flex flex-row justify-start items-center gap-[10px] font-medium text-[36px] text-right">
        <span>درباره </span>
        <span>
          {{ user.full_name }}
        </span>
      </div>
    </div>
    <div class="gap-[10px] font-medium text-[26px] text-right text-[#828282] mt-[10px]" v-html="user.bio"></div>
    <div class="mt-[30px] flex flex-col justify-start items-start gap-[10px] font-medium text-[26px] text-right">
      <span>مدارک و مجوز ها </span>
      <div v-for="(d,i) in user.licenses" :key="i"
           class="cursor-pointer text-[#141414] font-semibold text-[16px] leading-[18px] flex flex-row justify-start items-center w-full">
        <img :alt="d.title" v-if="d.image" :src="d.image" class="w-10 h-10 rounded ml-2 object-cover" />
        <span>{{ d.title }}</span>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">

const props = defineProps({
  user: {
    type: Object,
    required: true
  }
})

</script>

<style scoped>

</style>