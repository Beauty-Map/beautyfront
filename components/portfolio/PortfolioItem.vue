<template>
  <div @click="goToPage" class="w-full flex flex-row gap-[20px] rounded-[8px] px-[10px] py-[10px] shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] mb-[25px]">
    <div class="w-full flex flex-col relative">
      <div class="w-full flex flex-row justify-start items-start">
        <Rating v-model="portfolio.rating"/>
        <Tick />
      </div>
      <div class="w-full flex flex-row justify-start items-start">
        <h1 class="text-right font-medium text-[18px] leading-[28px] text-[#141414]">{{ portfolio.title }}</h1>
      </div>
      <div class="w-full flex flex-col justify-start items-start" v-if="portfolio.discount_price > 0">
        <div class="text-[#ED2C25] text-[12px] leading-[18px] font-medium line-through">
          <span v-format-number>{{ portfolio.price }}</span>
        </div>
        <div class="text-[#133C3E] text-[12px] leading-[18px] font-medium">
          <span v-format-number>{{ portfolio.discount_price }}</span>
          <span class="mr-[22px] px-[12px] py-[3px] bg-[#FFEA2E61] rounded-[20px]">{{calcDiscountPercent(portfolio.price, portfolio.discount_price)}}</span>
        </div>
      </div>
      <div class="w-full flex flex-col justify-start items-start" v-else-if="portfolio.price > 0">
        <div class="text-[#133C3E] text-[12px] leading-[18px] font-medium">
          <span v-format-number>{{ portfolio.price }}</span>
        </div>
      </div>
      <div class="w-full flex flex-col justify-start items-start" v-else>
        <div class="text-[#133C3E] text-[12px] leading-[18px] font-medium">
          رایگان
        </div>
      </div>
      <div class="flex flex-row items-center justify-start absolute right-0 bottom-0 z-[9999]">
        <Bookmark @bookmark="toggleBookmark" :bookmarked="portfolio.is_bookmarked" />
        <nuxt-link to="/" class="bg-[#085EC2] mr-[20px] rounded-[10px] px-[10px] py-[4px] text-white text-[8px] leading-[12px] cursor-pointer font-medium text-center">جزئیات دقیق</nuxt-link>
      </div>
    </div>
    <div class="w-full flex flex-col relative rounded-[8px] border border-[#5CB3FF] shadow-[2px_3px_6.5px_0px_#00000040]">
      <img :src="getThumbnail()" :alt="portfolio.title" class="w-full h-full min-h-[125px] min-w-[125px] rounded-[8px]"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import Bookmark from "~/components/bookmark/Bookmark.vue";

const props = defineProps({
  portfolio: {
    type: Object,
    required: true,
  }
})

const router = useRouter()

const getThumbnail = () => {
  if (props.portfolio.images.length > 0) {
    return props.portfolio.images[0]
  }
  return '/images/artist/1.jpg'
}

const goToPage = () => {
  router.push('/')
}

const toggleBookmark = (bookmarked: boolean) => {
  props.portfolio.is_bookmarked = bookmarked
}

const calcDiscountPercent = (p: number, d: number) => {
  return ((p - d) / p * 100) + '%';
}
</script>

<style scoped>

</style>