<template>
<div
    class="flex flex-col fixed md:hide top-0 bottom-0 px-[17px] overflow-y-scroll w-full duration-700 ease-in-out bg-white z-[999999]"
    :class="[store.isOpenProfile ? 'left-0' : 'left-[-100%]']"
>
  <div class="flex flex-row items-center justify-end pt-[23px] pl-[3px]">
    <BackIcon @click="goBack" />
  </div>
  <div class="flex flex-col justify-start items-start">
    <DrawerAuthInfoBox />
    <ProfileLinkListBox class="mt-8"/>
  </div>
</div>
</template>

<script setup lang="ts">

import BackIcon from "~/components/icons/BackIcon.vue";
import DrawerAuthInfoBox from "~/components/profile/DrawerAuthInfoBox.vue";
import {useDrawerStore} from "~/store/Drawer";

const store = useDrawerStore()

const goBack = () => {
  store.closeAllDrawers()
}
</script>

<style scoped>

</style>