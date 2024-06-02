<template>
  <div
      class="fixed flex flex-col h-full px-[30px] py-[30px] md:hide top-0 bottom-0 right-0 overflow-y-scroll w-full duration-700 ease-in-out bg-white z-[999999999999]"
      :class="[isOpen ? 'left-0 scale-1' : 'left-[-100%] hidden scale-0']"
  >
    <div class="flex flex-col justify-start items-center w-full">
      <div class="w-full relative flex flex-row items-center justify-center py-[23px]">
        <div class="font-semibold text-[16px] text-[#141414] leading-[24px]">خدمات</div>
        <BackIcon @click="goBack" class="absolute left-0"/>
      </div>
      <div
          class="grid grid-cols-4 gap-x-2 gap-y-8 w-full mt-[50px]"
      >
        <ServiceItem
            v-for="(s, i) in serviceArray"
            :key="i"
            :id="s.id"
            :title="s.title"
            :image="s.image"
            :circle="false"
            :is-link="false"
            :call-parent="true"
            @click="chooseMainService(s)"
        />
      </div>
    </div>
    <ChooseServiceDrawer :selected="service" :title="selectedService ? selectedService.title : ''" :service="selectedService" @close="closeServiceDrawer" @choose="chooseService" :is-open="showServiceDrawer" />
  </div>
</template>

<script setup lang="ts">
import ChooseServiceDrawer from "~/components/drawer/ChooseServiceDrawer.vue";
import BackIcon from "~/components/icons/BackIcon.vue";

const emits = defineEmits(['close', 'choose'])
const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true
  },
  service: {
    type: Object,
    default: null
  }
})

const selectedService = ref<IService>(props.service as IService)
const selectedSubService = ref<IService|null>(null)

const serviceArray = ref([])

const getServiceList = async () => {
  const res = await useCustomFetch('/services')
  if (res.data.value) {
    serviceArray.value = res.data.value?.data
  }
}


const showServiceDrawer = ref(false)

const openServiceDrawer = () => {
  showServiceDrawer.value = true
}

const closeServiceDrawer = () => {
  showServiceDrawer.value = false
}

const chooseMainService = async (s: IService) => {
  selectedService.value = s
  openServiceDrawer()
}

const chooseService = async (s: IService) => {
  selectedSubService.value = s
  emits('choose', s)
  setTimeout(() => {
    closeServiceDrawer()
  }, 200)
}

const goBack = () => {
  close()
}

getServiceList()
</script>

<style scoped>

</style>