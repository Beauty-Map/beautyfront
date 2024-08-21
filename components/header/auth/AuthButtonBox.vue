<template>
  <div class="flex flex-row gap-x-[20px] justify-end items-center" v-if="!isLoggedIn">
    <LoginLinkButton />
    <RegisterLinkButton />
  </div>
  <div class="" v-else>
    <ExitLinkButton />
  </div>
</template>

<script setup lang="ts">
import LoginLinkButton from "~/components/button/auth/LoginLinkButton.vue";
import RegisterLinkButton from "~/components/button/auth/RegisterLinkButton.vue";
import ExitLinkButton from "~/components/button/auth/ExitLinkButton.vue";

const auth = useSanctumAuth()
const isLoggedIn = computed(() => auth.isAuthenticated.value)
</script>

<style scoped>

</style>