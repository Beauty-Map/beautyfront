<template>
  <div @click="goTo"
      class="cursor-pointer sidebar-link rounded-[4px] gap-x-[5px] w-full flex flex-row hover:bg-[rgba(47,128,237,0.1)] hover:text-[#2F80ED] justify-start items-center px-[11px] py-[8px]"
      :class="[isActive ? 'bg-[rgba(47,128,237,0.1)] text-[#2F80ED]' : '']"
  >
    <div>
      <slot name="icon"></slot>
    </div>
    <div class="">
      {{ title }}
    </div>
  </div>
</template>

<script setup lang="ts">
import {useDrawerStore} from "~/store/Drawer";

const emits = defineEmits(['click'])
const props = defineProps({
  to: {
    type: String,
    default: '/'
  },
  title: {
    type: String,
    required: true
  },
  isLink: {
    type: Boolean,
    default: true
  }
})
const store = useDrawerStore()
const router = useRouter()
const route = useRoute()
const goTo = () => {
  if (props.isLink) {
    store.closeAllDrawers()
    router.push(props.to)
    return
  }
  emits('click')
}
const isActive = computed(() => route.path.startsWith(props.to))
</script>

<style scoped>

</style>