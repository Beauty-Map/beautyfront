<template>
<div
    class="flex flex-col fixed md:hide top-0 bottom-0 px-[17px] overflow-y-scroll w-full duration-700 ease-in-out bg-white z-[99999999]"
    :class="[store.isOpenSecurity ? 'left-0' : 'left-[-100%]']"
>
  <div class="flex flex-row justify-start items-center mt-[40px]">
    <Header />
    <BackIcon @click="goBack" />
  </div>
  <SecurityLinkBox class="mt-8"/>
</div>
</template>

<script setup lang="ts">

import {useDrawerStore} from "~/store/Drawer";
import Header from "~/components/security-drawer/Header.vue";
import BackIcon from "~/components/icons/BackIcon.vue";
import SecurityLinkBox from "~/components/security-drawer/SecurityLinkBox.vue";

const store = useDrawerStore()

const goBack = () => {
  store.closeAllDrawers()
  store.openProfileDrawer()
}

</script>

<style scoped>

</style>