<template>
  <div class="flex flex-row justify-end whitespace-nowrap items-center gap-[48px] text-center text-[#141414] font-medium text-[16px] leading-[24px]">
    <nuxt-link to="/panel" v-if="isLoggedIn">
      داشبورد
    </nuxt-link>
    <nuxt-link to="/aboutus">
      درباره ما
    </nuxt-link>
    <nuxt-link to="/support">
      تماس با ما
    </nuxt-link>
  </div>
</template>

<script setup lang="ts">
const auth = useSanctumAuth()
const isLoggedIn = computed(() => auth.isAuthenticated.value)
</script>

<style scoped>

</style>