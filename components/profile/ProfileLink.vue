<template>
  <div @click="goTo" class="cursor-pointer flex flex-row justify-start items-start w-full mb-6">
    <div>
      <slot name="icon"></slot>
    </div>
    <div class="flex flex-row justify-between items-center w-full mr-4 border-b border-[#A9A7A7] pb-4">
      <div class="text-[#133C3E] text-[12px] leading-[18px] font-medium"><slot name="title"></slot></div>
      <div class="flex flex-row gap-[20px]">
        <slot name="sub-icon"></slot>
        <LeftArrow />
      </div>
    </div>
    <Modal :open="showLockModal" :show-close="false" class="text-center">
      <div class="w-full mt-[10px] font-normal text-right text-[#133C3E] text-[16px] leading-[22px]">
        برای فعال سازی پنل از طریق لینک پروفایل در صفحه ی پنل هنرمندان کد کارشناس خود را ثبت کنید!
      </div>
      <button @click="closeLockModal" class="text-white bg-[#1EFF81] rounded-[25px] py-[4px] px-[10px] text-[16px] mt-2 mx-auto">
        متوجه شدم
      </button>
    </Modal>
  </div>
</template>

<script setup lang="ts">
import LeftArrow from "~/components/icons/LeftArrow.vue";
import {useDrawerStore} from "~/store/Drawer";
const emits = defineEmits(['click'])
const props = defineProps({
  to: {
    type: String,
    default: '/'
  },
  isLink: {
    type: Boolean,
    default: true
  },
  lock: {
    type: Boolean,
    default: false
  }
})

const store = useDrawerStore()
const router = useRouter()
const showLockModal = ref<boolean>(false)
const goTo = () => {
  if (props.lock) {
    openLockModal()
    return;
  }
  if (props.isLink) {
    store.closeAllDrawers()
    router.push(props.to)
    return
  }
  emits('click')
}
const closeLockModal = () => {
  setTimeout(() => {
    showLockModal.value = false
  }, 500)
}

const openLockModal = () => {
  showLockModal.value = true
}

</script>

<style scoped>

</style>