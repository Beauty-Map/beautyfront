<template>
<div
    class="flex flex-col fixed md:hide top-0 bottom-0 px-[17px] overflow-y-scroll w-full duration-700 ease-in-out bg-white z-[999999999]"
    :class="[isOpen ? 'left-0' : 'left-[-100%]']"
>
  <div class="flex flex-col justify-start items-center">
    <SearchInput v-model="searchTerm" class="mt-[30px]"/>
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

const emits = defineEmits(['close', 'choose'])
const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true
  }
})

const provinces = ref([])

const ownCity = ref<ICity|null>(null)

const store = useDrawerStore()

const searchTerm = ref('')

const close = () => {
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

getProvinces()
</script>

<style scoped>

</style>