<template>
  <div @click="goToPage" class="flex flex-col w-[380px] h-[606px] rounded-[20px] mx-[10px] my-[10px] shadow-[0px_2px_8px_2px_#00000040]">
    <img :src="getThumbnail()" :alt="portfolio.title" class="w-full h-[310px] rounded-t-[20px]"/>
    <div class="w-full h-full flex flex-col justify-start items-start px-[10px] py-[15px]">
      <div class="flex flex-row flex-wrap gap-0.5 justify-start items-center">
        <BlueTick v-if="portfolio.user.has_blue_tick" class="h-[20px] w-[20px]"/>
        <h1 class="font-semibold text-[24px] leading-[36px] text-right text-[#141414]">{{ portfolio.user.full_name }}</h1>
        <Rating v-model="portfolio.user.rating"/>
      </div>
      <div class="flex flex-row flex-wrap gap-0.5 justify-start items-center">
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.20866 22.9167L1.04199 11.4584L6.25033 8.33337V2.08337H10.417V8.33337L15.6253 11.4584L11.4587 22.9167H5.20866ZM17.7087 22.9167C17.4135 22.9167 17.1661 22.8169 16.9665 22.6172C16.7668 22.4176 16.667 22.1702 16.667 21.875C16.667 21.5799 16.7668 21.3325 16.9665 21.1329C17.1661 20.9332 17.4135 20.8334 17.7087 20.8334H20.8337V18.75H17.7087C17.4135 18.75 17.1661 18.6502 16.9665 18.4506C16.7668 18.2509 16.667 18.0035 16.667 17.7084C16.667 17.4132 16.7668 17.1658 16.9665 16.9662C17.1661 16.7665 17.4135 16.6667 17.7087 16.6667H20.8337V14.5834H17.7087C17.4135 14.5834 17.1661 14.4835 16.9665 14.2839C16.7668 14.0842 16.667 13.8368 16.667 13.5417C16.667 13.2466 16.7668 12.9992 16.9665 12.7995C17.1661 12.5999 17.4135 12.5 17.7087 12.5H20.8337V10.4167H17.7087C17.4135 10.4167 17.1661 10.3169 16.9665 10.1172C16.7668 9.91758 16.667 9.67018 16.667 9.37504C16.667 9.0799 16.7668 8.83251 16.9665 8.63285C17.1661 8.4332 17.4135 8.33337 17.7087 8.33337H20.8337V6.25004H17.7087C17.4135 6.25004 17.1661 6.15021 16.9665 5.95056C16.7668 5.75091 16.667 5.50351 16.667 5.20837C16.667 4.91324 16.7668 4.66584 16.9665 4.46619C17.1661 4.26653 17.4135 4.16671 17.7087 4.16671H21.8753C22.4482 4.16671 22.9387 4.3707 23.3467 4.77869C23.7547 5.18667 23.9587 5.67712 23.9587 6.25004V20.8334C23.9587 21.4063 23.7547 21.8967 23.3467 22.3047C22.9387 22.7127 22.4482 22.9167 21.8753 22.9167H17.7087ZM6.66699 20.8334H10.0003L13.0732 12.3438L9.84408 10.4167H6.82324L3.59408 12.3438L6.66699 20.8334Z" fill="#133C3E"/>
        </svg>
        <span class="text-[#2920D9] font-medium text-[18px] leading-[27px]">{{ portfolio.service.title ?? '-' }}</span>
      </div>
      <div class="w-full flex flex-row flex-wrap gap-0.5 justify-start items-center">
        <div class="w-full flex flex-col justify-start items-start" v-if="portfolio.discount_price > 0">
          <div class="text-[#ED2C25] text-[24px] leading-[36px] font-medium line-through">
            <span v-format-price>{{ portfolio.price }}</span>
          </div>
          <div class="w-full flex flex-row justify-between text-[#133C3E] text-[24px] leading-[36px] font-medium">
            <span v-format-price>{{ portfolio.discount_price }}</span>
            <span class="mr-[22px] px-[12px] py-[3px] bg-[#FFEA2E61] rounded-[20px]">{{calcDiscountPercent(portfolio.price, portfolio.discount_price)}}</span>
          </div>
        </div>
        <div class="w-full flex flex-col justify-start items-start" v-else-if="portfolio.price > 0">
          <div class="text-[#133C3E] text-[24px] leading-[36px] font-medium">
            <span v-format-price>{{ portfolio.price }}</span>
          </div>
        </div>
        <div class="w-full flex flex-col justify-start items-start" v-else>
          <div class="text-[#133C3E] text-[24px] leading-[36px] font-medium">
            رایگان
          </div>
        </div>
      </div>
      <div class="w-full mt-auto flex flex-row flex-wrap gap-0.5 justify-between items-center">
        <Bookmark @bookmark="toggleBookmark" :bookmarked="portfolio.is_bookmarked" />
        <nuxt-link to="/" class="bg-[#085EC2] mr-[20px] rounded-[50px] px-[62px] py-[17px] text-white text-[24px] leading-[37px] cursor-pointer font-medium text-center">جزئیات دقیق</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Bookmark from "~/components/bookmark/Bookmark.vue";
import {useDrawerStore} from "~/store/Drawer";
import BlueTick from "~/components/icons/BlueTick.vue";
import {useAuthStore} from "~/store/Auth";
const emits = defineEmits(['click'])
const props = defineProps({
  portfolio: {
    type: Object,
    required: true,
  },
  isPanel: {
    type: Object,
    required: false,
  },
  isLink: {
    type: Boolean,
    default: true,
  }
})

const auth = useAuthStore()
const isLoggedIn = computed(() => !!auth.user)
const router = useRouter()
const drawerStore = useDrawerStore()

const getThumbnail = () => {
  if (props.portfolio.images.length > 0) {
    return props.portfolio.images[0]
  }
  return '/images/artist/1.jpg'
}

const goToPage = () => {
  if (props.isLink) {
    if (props.isPanel) {
      router.push(`/panel/artist/portfolios/${props.portfolio.id}`)
    } else {
      router.push(`/portfolios/${props.portfolio.id}`)
    }
  } else {
    emits('click')
  }
}

const toggleBookmark = (bookmarked: boolean) => {
  if (!isLoggedIn) {
    drawerStore.openLoginDrawer()
    return
  }
  props.portfolio.is_bookmarked = bookmarked
}

const calcDiscountPercent = (p: number, d: number) => {
  return Math.ceil(((p - d) / p * 100)) + '%';
}
</script>

<style scoped>

</style>