<template>
<div class="cursor-pointer flex flex-row items-center justify-center">
  <LineIcon />
  <span class="mx-[7px] text-nowrap text-[#828282] text-[16px] leading-[25px]">{{ title }}</span>
  <LineIcon />
</div>
</template>

<script setup lang="ts">

import LineIcon from "~/components/icons/LineIcon.vue";

const props = defineProps({
  title: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>

</style>