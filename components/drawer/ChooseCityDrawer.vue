<template>
<div
    class="flex flex-col fixed md:bg-[rgba(0,0,0,0.7)] top-0 px-[17px] overflow-y-auto w-full duration-700 ease-in-out bg-white z-[999999999]"
    :class="[isOpen ? 'left-0' : 'left-[-100%]']"
>
  <div class="w-full flex flex-col justify-start items-center md:max-w-[500px] md:w-full mx-auto my-[6px] md:border md:border-[#e1e1e1] rounded-[12px] px-[10px] bg-white">
    <div class="w-full flex flex-row justify-center items-center gap-x-2 mt-[30px] mr-[1px]">
      <SearchInput v-model="searchTerm" class=""/>
      <BackIcon @click="goBack" />
    </div>
    <div class="mt-[23px]">لطفا شهر پیشفرض خود را انتخاب کنید</div>
    <OwnProvince v-if="ownCity" :city="ownCity" class="mt-[23px]"/>
    <ChooseCityList v-if="isOpen" @choose="chooseProvinceAndCity" :provinces="provinces" class="mt-[15px]"/>
  </div>
</div>
</template>

<script setup lang="ts">

import {useDrawerStore} from "~/store/Drawer";
import SearchInput from "~/components/input/SearchInput.vue";
import OwnProvince from "~/components/search-drawer/OwnProvince.vue";
import ChooseCityList from "~/components/search-drawer/ChooseCityList.vue";
import BackIcon from "~/components/icons/BackIcon.vue";

const emits = defineEmits(['close', 'choose'])
const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true
  }
})

const provinces = ref([])
const provinceList = ref([])

const ownCity = ref<ICity|null>(null)

const store = useDrawerStore()

const searchTerm = ref('')

const close = () => {
  emits('close')
}

const goBack = () => {
  emits('close')
}

const getProvinces = async () => {
  const res = await useCustomFetch('/provinces', {
    method: "GET"
  })
  if (res.data.value) {
    provinces.value = res.data.value?.data
  }
}

const chooseProvinceAndCity = (p: IProvince, c: ICity) => {
  ownCity.value = c
  emits('choose', p, c)
  close()
}

watch(() => searchTerm.value, (newVal) => {
  console.log(newVal)
})

watch(() => props.isOpen, (newVal) => {
  if (newVal) {
    getProvinces()
  }
})

</script>

<style scoped>

</style>