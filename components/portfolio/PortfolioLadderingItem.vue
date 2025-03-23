<template>
  <div @click="goToPage" :class="selected ? 'opacity-[1]' : 'opacity-[.7]'" class="w-full flex flex-row gap-[20px] rounded-[8px] px-[10px] py-[10px] shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] mb-[25px]">
    <div class="w-full flex flex-col relative">
      <div class="w-full flex flex-row justify-start items-start">
        <Rating v-model="portfolio.star_count"/>
        <Tick />
      </div>
      <div class="w-full flex flex-row justify-start items-start">
        <h1 class="text-right font-medium text-[18px] leading-[28px] text-[#141414]">{{ portfolio.title }} - {{ portfolio.id }}</h1>
      </div>
      <div class="w-full flex flex-col justify-start items-start" v-if="portfolio.discount_price > 0">
        <div class="text-[#ED2C25] text-[12px] leading-[18px] font-medium line-through">
          <span v-format-price>{{ portfolio.price }}</span>
        </div>
        <div class="text-[#133C3E] text-[12px] leading-[18px] font-medium">
          <span v-format-price>{{ portfolio.discount_price }}</span>
          <span class="mr-[22px] px-[12px] py-[3px] bg-[#FFEA2E61] rounded-[20px]">{{calcDiscountPercent(portfolio.price, portfolio.discount_price)}}</span>
        </div>
      </div>
      <div class="w-full flex flex-col justify-start items-start" v-else-if="portfolio.price > 0">
        <div class="text-[#133C3E] text-[12px] leading-[18px] font-medium">
          <span v-format-price>{{ portfolio.price }}</span>
        </div>
      </div>
      <div class="w-full flex flex-col justify-start items-start" v-else>
        <div class="text-[#133C3E] text-[12px] leading-[18px] font-medium">
          رایگان
        </div>
      </div>
      <div class="flex flex-row items-center justify-start absolute right-0 bottom-0 z-[9999]">
        <button class="cursor-pointer bg-[#2920D9] rounded-[20px] font-medium text-center text-[12px] flex justify-center items-center h-[25px] leading-[18px] py-[7px] px-[12px] text-white min-w-[88px]">
          نردبان
        </button>
      </div>
    </div>
    <div class="w-full flex flex-col relative rounded-[8px] border border-[#5CB3FF] shadow-[2px_3px_6.5px_0px_#00000040]">
      <img :src="getThumbnail()" :alt="portfolio.title" class="w-full h-full min-h-[125px] min-w-[125px] rounded-[8px]"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useAuthStore} from "~/store/Auth";

const emits = defineEmits(['click'])
const props = defineProps({
  portfolio: {
    type: Object,
    required: true,
  },
  selected: {
    type: Boolean,
    required: false,
  },
})

const router = useRouter()


const auth = useAuthStore()
const user = ref(auth.user)

const getThumbnail = () => {
  if (props.portfolio.images.length > 0) {
    return props.portfolio.images[0]
  }
  return '/images/artist/1.jpg'
}

const goToPage = () => {
  emits('click')
}

const calcDiscountPercent = (p: number, d: number) => {
  return Math.ceil(((p - d) / p * 100)) + '%';
}
</script>

<style scoped>

</style>