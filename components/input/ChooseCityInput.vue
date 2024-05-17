<template>
  <div class="flex flex-col items-start justify-start w-full px-1">
    <div v-if="title" class="text-[14px] leading-[16px] text-right mb-1 font-medium"
         :class="[hasError ? 'text-[#F44336]' : 'text-[#141414]']"
    >
      {{ title }}
    </div>
    <div class="h-[40px] w-full rounded-[8px] relative border "
         :class="[hasError ? 'border-[#F44336]' : 'border-[#133C3E]']"
         @click="openDrawerClicked"
    >
      <div class="flex flex-row justify-start items-center text-right h-[38px] w-full rounded-[8px] outline-none focus:outline-none pr-[20px] pl-[20px] placeholder:text-[#A9A7A7]" v-if="province && city">
        {{ province.name }} - {{ city.name }}
      </div>
    </div>
    <div class="w-full flex flex-row justify-start items-center" v-if="hasError">
      <ErrorRedIcon />
      <span class="mr-1 text-[#F44336] text-[10px] leading-[12px]">{{errorText}}</span>
    </div>
    <ChooseCityDrawer :is-open="openDrawer" @close="closeDrawerClicked" @choose="chooseProvinceAndCity"/>
  </div>
</template>

<script setup lang="ts">
import ErrorRedIcon from "~/components/icons/ErrorRedIcon.vue";
import ChooseCityDrawer from "~/components/drawer/ChooseCityDrawer.vue";
import {useDrawerStore} from "~/store/Drawer";

const emits = defineEmits(['update:modelValue'])
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  modelValue: {
    type: Number,
    default: 0
  }
})

const store = useDrawerStore()

const value = ref<Number>(props.modelValue)
const errorText = ref<String>('')
const hasError = ref<Boolean>(false)
const openDrawer = ref<Boolean>(false)

const user = useSanctumUser()
const province = ref<IProvince>()
const city = ref<ICity>()
if (user.value?.province) {
  province.value = user.value.province
}
if (user.value?.city) {
  city.value = user.value.city
}
const openDrawerClicked = () => {
  openDrawer.value = true
}

const closeDrawerClicked = () => {
  openDrawer.value = false
}

const chooseProvinceAndCity = (p: IProvince, c: ICity) => {
  province.value = p
  city.value = c
}

</script>

<style scoped>

</style>