<template>
  <div class="select-location flex gap-0.5 flex-row items-center cursor-pointer">
    <div class="flex flex-col ml-2 text-left">
      <p class="text-xs text-zinc-500 en-title">Location</p>
      <p class="mt-1.5 text-sm text-neutral-900 city-name">Hamedan , همدان</p>
    </div>
    <HeaderLocationIcon />
  </div>
</template>

<script setup lang="ts">

import HeaderLocationIcon from "~/components/icons/HeaderLocationIcon.vue";
</script>

<style scoped>

</style>