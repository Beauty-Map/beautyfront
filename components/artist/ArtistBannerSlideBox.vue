<template>
  <div class=" w-full h-full">
    <client-only>
      <carousel ref="carouselRef" :items-to-show="1" :autoplay-timeout="2000" @slide-end="handleSlideChange" :options="slickOptions" class=" h-full">
        <slide class="relative h-full" v-for="(img, n) in getImages" :key="n" data-fancybox="gallery" @click="openImageModal(n)">
          <img :src="img" alt="" class="w-full h-[200px] object-cover" />
        </slide>
        <template #addons>
          <div class="w-full relative mt-[-10px] bg-white px-[8px] py-[8px] border-t-[8px] border-white rounded-t-[14px]">
            <div class="flex mt-[-25px] justify-center">
              <div v-if="user" class="text-white text-[11px] leading-[17px] text-center font-medium bg-[#FF3CA0] px-[14px] py-[4px] rounded-tl-[21px] rounded-tr-0 rounded-br-[21px] rounded-bl-[21px]">
                آماربازدید <span v-format-number>{{userView}}</span> نفر
              </div>
            </div>
          </div>
        </template>
      </carousel>
    </client-only>
  </div>
</template>

<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'
import { Fancybox } from '@fancyapps/ui';
import "@fancyapps/ui/dist/fancybox/fancybox.css"
const props = defineProps({
  images: {
    type: Array<string>,
    default: () => []
  },
  user: {
    type: Object,
    default: null
  },
  view: {
    type: Number,
    default: 0
  },
  avatar: {
    type: String,
    required: true,
  }
})

const slickOptions = {
  autoplay: false,
  arrows: false,
  infinite: true,
  lazyLoad: 'progressive',
};

const carouselRef = ref()
const currentIndex = ref<number>(0)
const userView = ref<number>(0)

const handleSlideChange = (index: Object) => {
  currentIndex.value = index.currentSlideIndex;
}
const goToSlide = (index: number) => {
  carouselRef.value?.slideTo(index);
  currentIndex.value = index;
}

const openImageModal = (n:number) => {
  const list = getImages.value as string[]
  Fancybox.show(list?.map(i => ({
    src: i,
    type: 'image'
  })), {
    animated: true,
    startIndex: n,
  });
}
const getImages = computed(() => {
  if (props.images?.length > 0) {
    return props.images?.length
  }
  if (props.avatar) {
    return [props.avatar]
  }
  return [window.location.origin+'/images/artist/banner.png']
})

onMounted(() => userView.value = props.view)
</script>

<style scoped>

</style>