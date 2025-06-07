<template>
  <div class="flex gap-5  font-medium text-center w-full" :class="[user ? 'justify-end' : 'justify-end']">
<!--    <NotificationIcon v-if="user" @click="openNotificationDrawer" />-->
    <ButtonMainSelectLocation />
  </div>
</template>

<script setup lang="ts">

import NotificationIcon from "~/components/icons/NotificationIcon.vue";
import {useDrawerStore} from "~/store/Drawer";
import {useAuthStore} from "~/store/Auth";

const store = useDrawerStore()

const auth = useAuthStore()
const user = ref(auth.user)

const openNotificationDrawer = () => {
  store.closeAllDrawers()
  store.openNotificationDrawer()
}
</script>

<style scoped>

</style>