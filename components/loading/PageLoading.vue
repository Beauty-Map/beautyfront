<template>
  <div class="splash_page fixed top-0 bottom-0 left-0 right-0 z-[1000] flex flex-col justify-center items-center">
    <img src="@/assets/images/logo.png" alt="Beauty Map"/>
    <sync-loader class="mt-8" :loading="true" :color="'#fff'" :size="'20px'" margin="10px"/>
  </div>
</template>

<script setup lang="ts">
import SyncLoader from "vue-spinner/src/SyncLoader.vue";
</script>

<style scoped>

</style>