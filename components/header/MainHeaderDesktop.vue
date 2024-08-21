<template>
<div class="bg-[#F0FFF7] gap-x-[60px] gap-y-[10px] flex-wrap w-full py-[12px] px-[40px] flex flex-row justify-between items-center">
  <MainLogo />
  <div class="hidden md:flex flex-row justify-end items-center gap-[48px]">
    <HeaderNavbar />
    <AuthButtonBox />
  </div>
</div>
</template>

<script setup lang="ts">

import MainLogo from "~/components/icons/MainLogo.vue";
import AuthButtonBox from "~/components/header/auth/AuthButtonBox.vue";
import HeaderNavbar from "~/components/header/navbar/HeaderNavbar.vue";
</script>

<style scoped>

</style>