<template>
<div
    class="flex flex-col fixed md:hide top-0 bottom-0 px-[17px] overflow-y-scroll w-full duration-700 ease-in-out bg-white z-[99999999]"
    :class="[store.isOpenNotification ? 'left-0' : 'left-[-100%]']"
>
  <div class="flex flex-row items-center justify-end pt-[23px] pl-[3px]">
    <Header />
    <BackIcon @click="goBack" />
  </div>
  <div class="flex flex-col justify-start items-start overflow-y-scroll py-4">
    <NotificationList
      :notifications="notifications"
    />
  </div>
</div>
</template>

<script setup lang="ts">

import BackIcon from "~/components/icons/BackIcon.vue";
import Header from "~/components/notification-drawer/Header.vue";
import {useDrawerStore} from "~/store/Drawer";
import NotificationList from "~/components/notification-drawer/NotificationList.vue";

const store = useDrawerStore()

const notifications = ref<INotification[]>([])

const getNotifications = async () => {
  const {data: data} = await useFetch('/api/notifications')
  notifications.value = (data.value as INotification[])
}

const goBack = () => {
  store.closeAllDrawers()
}
getNotifications()
</script>

<style scoped>

</style>