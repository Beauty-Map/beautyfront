<template>
  <div class="flex flex-col justify-start items-start w-full max-w-[310px]">
    <UserBox />
    <SideBarLinkBox class="mt-8"/>
  </div>
</template>

<script setup lang="ts">
import UserBox from "~/components/sidebar/UserBox.vue";
import SideBarLinkBox from "~/components/sidebar/SideBarLinkBox.vue";
</script>

<style scoped>

</style>