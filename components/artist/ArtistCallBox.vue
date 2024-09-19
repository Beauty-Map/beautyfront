<template>
  <div class="fixed z-[99999] bg-white bottom-0 left-0 right-0 px-[15px] pt-[30px] pb-[22px] border-t border-t-[#FFEA2E] w-full flex flex-row items-center justify-between">
    <div @click="openNavigation" class="cursor-pointer min-w-[130px] text-center px-[37px] py-[6px] bg-[#085EC2] border border-[#133C3E] font-medium text-[15px] leading-[30px] text-white rounded-[25px]">
      مسیریابی
    </div>
    <div @click="openCallModal" class="cursor-pointer min-w-[130px] text-center px-[37px] py-[6px] bg-[#157F3D] border border-[#133C3E] font-medium text-[15px] leading-[30px] text-white rounded-[25px]">
      تماس
    </div>
    <Modal :open="showCallModal" @close="closeCallModal">
      <div class="w-full h-full flex flex-col gap-[13px] justify-center items-center">
        <div class="cursor-pointer flex justify-center items-center rounded-[10px] border border-[#133C3E] bg-[#085EC2] text-white text-[20px] leading-[31px] font-bold text-center px-[65px] py-[15px]">
          تلفن ثابت
        </div>
        <div class="cursor-pointer flex justify-center items-center rounded-[10px] border border-[#133C3E] bg-[#085EC2] text-white text-[20px] leading-[31px] font-bold text-center px-[65px] py-[15px]">
          تلفن همراه
        </div>
      </div>
    </Modal>
  </div>
</template>

<script setup lang="ts">

import Modal from "~/components/modal/Modal.vue";
import {useAuthStore} from "~/store/Auth";
import {useDrawerStore} from "~/store/Drawer";
const props = defineProps({
  artist: {
    type: Object,
    required: true,
  }
})
const app = useNuxtApp()
const auth = useAuthStore()
const user = ref(auth.user)
const store = useDrawerStore()
const showCallModal = ref<boolean>(false)

const openCallModal = () => {
  if (!user.value) {
    store.openLoginDrawer()
    app.$toast.error('برای تماس با این هنرمند وارد حساب کاربری خود شوید', {rtl: true})
    return
  }
  if (!props.artist?.phone_number || !props.artist?.tel) {
    app.$toast.error('برای این هنرمند فعلا شماره تماس ثبت نشده است', {rtl: true})
    return
  }
  showCallModal.value = true
}

const closeCallModal = () => {
  showCallModal.value = false
}

const openNavigation = () => {
  if (!user.value) {
    store.openLoginDrawer()
    app.$toast.error('برای تماس با این هنرمند وارد حساب کاربری خود شوید', {rtl: true})
    return
  }
  if (!props.artist?.location) {
    app.$toast.error('برای این هنرمند فعلا لوکیشن ثبت نشده است', {rtl: true})
    return
  }
  window.location.href = `geo:${user.value?.location.lat},${user.value?.location.lng}`;
}
</script>

<style scoped>

</style>