<template>
  <div class="w-full flex flex-col items-start justify-start">
    <div class="w-full pb-1 text-right text-[#141414] text-[14px] leading-[21px] font-medium border-b border-b-gray-300">
      {{ province ? 'انتخاب شهر:' : 'انتخاب استان:' }}
    </div>
    <div class="w-full mt-[10px] overflow-y-scroll h-[calc(100vh-140px)] relative">
      <div class="absolute top-0 bottom-0 w-full duration-700 transition-all"
           :class="[province ? 'left-[-100%] hidden' : 'left-0 block']"
      >
        <div @click="chooseProvince(p)" v-for="(p, n ) in provinces" :key="n" class="cursor-pointer w-full flex flex-row justify-between items-center px-[10px] py-[13px] border-b border-b-[#A9A7A7]">
          <span class="w-full text-[#141414] text-right text-[14px] leading-[21px] font-medium">{{ p.name }}</span>
          <LeftArrow />
        </div>
      </div>
      <div class="absolute top-0 bottom-0 w-full duration-700 transition-all"
           :class="[province ? 'left-0 block' : 'left-[-100%] hidden']"
      >
        <div @click="backToProvinceSelect" class="cursor-pointer w-full flex flex-row justify-between items-center px-[10px] py-[13px] border-b border-b-[#A9A7A7]">
          <LeftArrow class="rotate-180"/>
          <span class="mr-[10px] w-full text-[#141414] text-right text-[14px] leading-[21px] font-medium">بازگشت</span>
        </div>
        <div @click="chooseCity(c)" v-for="(c, n ) in cities" :key="n" class="cursor-pointer w-full flex flex-row justify-between items-center px-[10px] py-[13px] border-b border-b-[#A9A7A7]">
          <span class="w-full text-[#141414] text-right text-[14px] leading-[21px] font-medium">{{ c.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import LeftArrow from "~/components/icons/LeftArrow.vue";

const emits = defineEmits(['choose'])
const props = defineProps({
  provinces: {
    type: Array,
    default: []
  }
})

const province = ref<IProvince>()
const cities = ref<ICity[]>()

const chooseProvince = (p: IProvince) => {
  province.value = p
  cities.value = p.cities
}

const chooseCity = (c: ICity) => {
  emits('choose', province.value, c)
}

const backToProvinceSelect = () => {
  province.value = undefined
  cities.value = []
}

</script>

<style scoped>

</style>