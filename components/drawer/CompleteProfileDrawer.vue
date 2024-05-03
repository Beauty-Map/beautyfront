<template>
<div
    class="flex flex-col fixed md:hide top-0 bottom-0 px-[17px] overflow-y-scroll w-full duration-700 ease-in-out bg-white z-[99999999]"
    :class="[store.isOpenCompleteProfile ? 'left-0' : 'left-[-100%]']"
>
  <div class="flex flex-row items-center justify-start pt-[23px] pl-[3px]">
    <SkipTopLink @click="goNext" />
  </div>
  <div class="flex flex-col justify-start items-center">
    <Header class="mt-[100px]"/>
    <CompleteProfileForm class="mt-[17px]" />
  </div>
</div>
</template>

<script setup lang="ts">

import {useDrawerStore} from "~/store/Drawer";
import CompleteProfileForm from "~/components/complete-profile-drawer/CompleteProfileForm.vue";
import Header from "~/components/complete-profile-drawer/Header.vue";
import SkipTopLink from "~/components/complete-profile-drawer/SkipTopLink.vue";

const store = useDrawerStore()

const goNext = () => {
  store.closeAllDrawers()
}
</script>

<style scoped>

</style>