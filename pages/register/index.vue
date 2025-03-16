<template>
  <div
      class="flex flex-col px-[17px] overflow-y-scroll w-full duration-700 ease-in-out bg-white"
  >
    <div class="flex flex-row items-center justify-end pl-[3px]">
      <BackIcon @click="goBack" />
    </div>
    <div class="flex flex-col justify-start items-center">
      <BeautyIcon class="mt-[8px]"/>
      <Header />
      <RegisterForm class="mt-[17px]" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from "~/components/register-drawer/Header.vue";
import BackIcon from "~/components/icons/BackIcon.vue";
import BeautyIcon from "~/components/icons/AuthDrawer/BeautyIcon.vue";
import {useDrawerStore} from "~/store/Drawer";
import {definePageMeta} from "#imports";
import RegisterForm from "~/components/register-drawer/RegisterForm.vue";

definePageMeta({
  middleware: 'guest'
})

const app = useNuxtApp()
const router = useRouter()
const store = useDrawerStore()

const goBack = () => {
  store.closeAllDrawers()
}
</script>

<style scoped>

</style>