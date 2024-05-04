<template>
  <div class="flex gap-5 justify-between font-medium text-center w-full">
    <NotificationIcon @click="openNotificationDrawer" />
    <ButtonMainSelectLocation />
  </div>
</template>

<script setup lang="ts">

import NotificationIcon from "~/components/icons/NotificationIcon.vue";
import {useDrawerStore} from "~/store/Drawer";

const store = useDrawerStore()

const openNotificationDrawer = () => {
  store.closeAllDrawers()
  store.openNotificationDrawer()
}
</script>

<style scoped>

</style>