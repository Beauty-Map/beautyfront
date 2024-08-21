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
  }
})

const store = useDrawerStore()
const router = useRouter()
const goTo = () => {
  if (props.isLink) {
    store.closeAllDrawers()
    router.push(props.to)
    return
  }
  emits('click')
}
</script>

<style scoped>

</style>