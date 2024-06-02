<template>
  <div class="select-location flex gap-0.5 flex-row items-center cursor-pointer">
    <div class="flex flex-col ml-2 text-left" @click="openDrawerClicked">
      <p class="text-xs text-zinc-500 en-title">Location</p>
      <p class="mt-1.5 text-sm text-neutral-900 city-name" v-if="province && city">{{ `${province.name} - ${city.name}` }}</p>
    </div>
    <HeaderLocationIcon @click="openDrawerClicked"/>
    <ChooseCityDrawer :is-open="openDrawer" @close="closeDrawerClicked" @choose="chooseProvinceAndCity"/>
  </div>
</template>

<script setup lang="ts">

import HeaderLocationIcon from "~/components/icons/HeaderLocationIcon.vue";
import ChooseCityDrawer from "~/components/drawer/ChooseCityDrawer.vue";
import {useSearchStore} from "~/store/Search";

const openDrawer = ref<Boolean>(false)
const province = ref<IProvince|null>(null)
const city = ref<ICity|null>(null)
const search = useSearchStore()
const locationCookie = useCookie('selectedLocation')

const openDrawerClicked = () => {
  openDrawer.value = true
}

const closeDrawerClicked = () => {
  openDrawer.value = false
}

const chooseProvinceAndCity = (p: IProvince, c: ICity) => {
  province.value = p
  city.value = c
  locationCookie.value = JSON.stringify({
    province: {
      id: p.id,
      name: p.name
    },
    city: {
      id: c.id,
      name: c.name
    }
  })
}
const getPositionSucceed = (position) => {
  search.setUserCurrentLocation(position.coords.latitude, position.coords.longitude)
}
const getPositionError = (error) => {
}
onMounted(() => {
  nextTick(async () => {
    navigator.geolocation.getCurrentPosition(getPositionSucceed, getPositionError)
    if (!locationCookie.value) {
      openDrawerClicked()
    } else {
      const province = locationCookie.value.province
      const city = locationCookie.value.city
      chooseProvinceAndCity(province, city)
    }
  })
})
</script>

<style scoped>

</style>