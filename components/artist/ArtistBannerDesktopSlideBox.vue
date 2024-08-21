<template>
  <div class="w-full h-[300px] rounded-[60px] relative">
    <client-only>
      <carousel ref="carouselRef" :items-to-show="1" :autoplay-timeout="2000" @slide-end="handleSlideChange" :options="slickOptions" class=" h-full">
        <slide class="relative h-full" v-for="(img, n) in getImages" :key="n" data-fancybox="gallery" @click="openImageModal(n)">
          <img :src="img" alt="" class="h-[300px] w-full rounded-[60px]" />
        </slide>
      </carousel>
    </client-only>
    <div class="absolute left-0 right-0 top-0 bottom-0 bg-[rgba(0,0,0,0.4)] z-[1] rounded-[60px]"></div>
    <div class="absolute z-[999] left-[55px] right-[55px] top-[55px] bottom-[55px] flex flex-row justify-between items-center">
      <div class="flex flex-row gap-[5px] justify-start items-start">
        <img :src="getAvatar" alt="" class=" grow-0 h-[20vw] max-w-[250px] max-h-[250px] w-[20vw] aspect-square border-[#FFD700] rounded-[50%] border-[2px]">
        <div class="w-full flex flex-col h-[20vw] max-h-[250px] py-[10px] justify-between items-start">
          <div class="flex flex-row flex-wrap gap-0.5 justify-start items-center">
            <BlueTick v-if="user.has_blue_tick" class="h-[20px] w-[20px]"/>
            <h1 class="font-semibold text-[28px] leading-[58px] text-right text-white">{{ user.full_name }}</h1>
            <Rating v-model="user.rating"/>
          </div>
          <div class="text-white mt-[20px] font-medium text-[24px] leading-[28px] w-full">
            <span>تخصص ها:</span>
            <span class="mr-1">{{ getServices() }}</span>
          </div>
          <div v-if="user.address" class="text-white mt-[20px] font-medium text-[24px] leading-[28px] w-full">
            <span>آدرس:</span>
            <span class="mr-1">{{ user.address }}</span>
          </div>
        </div>
      </div>
      <div @click="openCallModal" class="cursor-pointer min-w-[160px] text-center px-[42px] py-[14px] bg-[#157F3D] border border-[#133C3E] font-medium text-[24px] leading-[30px] text-white rounded-[25px]">
        تماس
      </div>
    </div>
    <Modal :open="showCallModal" @close="closeCallModal">
      <div class="w-full h-full flex flex-col gap-[13px] justify-center items-center">
        <div class="cursor-pointer flex justify-center items-center rounded-[10px] border border-[#133C3E] bg-[#085EC2] text-white text-[20px] leading-[31px] font-bold text-center px-[65px] py-[15px]">
          تلفن ثابت
        </div>
        <div class="cursor-pointer flex justify-center items-center rounded-[10px] border border-[#133C3E] bg-[#085EC2] text-white text-[20px] leading-[31px] font-bold text-center px-[65px] py-[15px]">
          تلفن همراه
        </div>
      </div>
    </Modal>
  </div>
</template>

<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'
import { Fancybox } from '@fancyapps/ui';
import "@fancyapps/ui/dist/fancybox/fancybox.css"
import Modal from "~/components/modal/Modal.vue";
import BlueTick from "~/components/icons/BlueTick.vue";
const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
})

const slickOptions = {
  autoplay: false,
  arrows: false,
  infinite: true,
  lazyLoad: 'progressive',
};

const carouselRef = ref()
const currentIndex = ref<number>(0)
const showCallModal = ref<boolean>(false)

const openCallModal = () => {
  showCallModal.value = true
}

const closeCallModal = () => {
  showCallModal.value = false
}

const handleSlideChange = (index: Object) => {
  currentIndex.value = index.currentSlideIndex;
}
const goToSlide = (index: number) => {
  carouselRef.value?.slideTo(index);
  currentIndex.value = index;
}

const openImageModal = (n:number) => {
  Fancybox.show(props.user?.images?.map(i => ({
    src: i,
    type: 'image'
  })),{
    animated: true,
    startIndex: n,
  });
}
const getImages = computed(() => {
  if (props.user.banners?.length > 0) {
    return props.user.banners?.length
  }
  return ['/images/artist/banner.png']
})

const getServices = () => {
  if (props.user.services.length == 0) {
    return '-'
  }
  let services = []
  for (let i = 0; i < props.user.services.length; i++) {
    let s = props.user.services[i]
    services.push(s.title)
  }
  return services.reverse().join(' , ')
}

const getAvatar = computed(() => {
  if (props.user && props.user.avatar) {
    return props.user.avatar
  }
  return '/images/artist/2.png'
})

</script>

<style scoped>

</style>