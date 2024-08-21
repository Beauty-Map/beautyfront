<template>
  <div class="w-full h-full">
    <NotificationListItem
      v-for="(n, i) in notifications"
      :key="i"
      :notification="n"
    />
  </div>
</template>

<script setup lang="ts">

import NotificationListItem from "~/components/notification-drawer/NotificationListItem.vue";
const props = defineProps({
  notifications: {
    type: Array,
    default: () => []
  }
})
</script>

<style scoped>

</style>