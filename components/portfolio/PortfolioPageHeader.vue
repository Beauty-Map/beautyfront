<template>
  <div class="w-full flex flex-row justify-start items-center">
    <img :alt="user.full_name" :src="user.avatar"
         class="w-[40px] h-[40px] rounded-[100%] border border-[#A9A7A7]">
    <BlueTick v-if="user.has_blue_tick" class="mr-[8px] h-[18px] w-[18px]"/>
    <div class="mr-[8px] font-semibold text-[16px] text-white leading-[25px] text-right">{{ user.full_name }}</div>
    <Rating class="mr-[8px]" :model-value="rating"/>
  </div>
</template>

<script setup lang="ts">
import BlueTick from "~/components/icons/BlueTick.vue";

const props = defineProps({
  rating: {
    type: Number,
    required: true,
  },
  user: {
    type: Object,
    required: true,
  }
})
</script>

<style scoped>

</style>