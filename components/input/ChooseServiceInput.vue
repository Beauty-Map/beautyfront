<template>
  <div class="cursor-pointer w-full px-[14px] py-[20px] border-b border-b-[#A9A7A7] flex flex-row justify-between items-center">
    <div class="w-full h-full flex flex-row justify-between items-center" @click="openServiceDrawer">
      <span class="text-black text-right font-medium text-[14px] leading-[21px]">
        دسته بندی
      </span>
      <span class="text-[#828282] font-light text-[10px] leading-[15px]">
        {{ getServiceName }}
      </span>
    </div>
    <ChooseServiceMainDrawer :service="service" :is-open="showServiceDrawer" @close="closeServiceDrawer" @choose="chooseService"/>
  </div>
</template>

<script setup lang="ts">
import ChooseServiceMainDrawer from "~/components/drawer/ChooseServiceMainDrawer.vue";

const emits = defineEmits(['update:modelValue'])
const props = defineProps({
  modelValue: {
    type: Object,
    default: null,
  }
})

const service = ref<IService>(props.modelValue as IService)
const showServiceDrawer = ref(false)

const openServiceDrawer = () => {
  showServiceDrawer.value = true
}

const closeServiceDrawer = () => {
  showServiceDrawer.value = false
}

const chooseService = async (s: IService) => {
  service.value = s
  emits('update:modelValue', service.value)
  setTimeout(() => {
    closeServiceDrawer()
  }, 200)
}

const getServiceName = computed(() => {
  let title = ''
  if (service.value) {
    title = `${service.value.title} , ${service.value.parent?.title}`
  }
  return title
})

const setService = (s: IService) => {
  service.value = s
}

watch(() => props.modelValue, () => {
  setService(props.modelValue as IService)
})
</script>

<style scoped>

</style>