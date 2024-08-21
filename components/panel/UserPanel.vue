<template>
  <div
      class="flex flex-col md:hide w-full h-full px-[17px] duration-700 ease-in-out bg-white"
  >
    <div class="flex flex-col justify-start items-center">
      <Header class="mt-[10px]"/>
      <CompleteProfileForm class="mt-[10px]" />
    </div>
  </div>
</template>

<script setup lang="ts">

import Header from "~/components/panel/Header.vue";
import CompleteProfileForm from "~/components/panel/CompleteProfileForm.vue";

</script>

<style scoped>

</style>