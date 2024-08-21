<template>
  <UserPanel />
</template>

<script setup lang="ts">
import UserPanel from "~/components/panel/UserPanel.vue";

definePageMeta({
  layout: 'panel',
  middleware: 'auth'
})

</script>

<style scoped>

</style>