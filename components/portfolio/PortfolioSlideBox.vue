<template>
  <div class=" w-full min-h-[336px] bg-gradient-to-b from-[rgba(0,0,0,.6)] from-0% via-white via-80% to-white">
    <client-only>
      <carousel ref="carouselRef" :items-to-show="1" :autoplay-timeout="2000" @slide-end="handleSlideChange" :options="slickOptions" class=" h-full min-h-[336px]">
        <slide class="relative h-full min-h-[336px]" v-for="(img, n) in images" :key="n">
          <img :src="img" alt="" class="h-full min-h-[336px] w-full"/>
          <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full bg-gradient-to-b from-[rgba(0,0,0,.6)] from-0% via-[rgba(0,0,0,.2)] via-80% to-[rgba(0,0,0,.1)]"></div>
        </slide>
        <template #addons>
          <div class="absolute right-0 left-0 bottom-0 bg-white px-[8px] py-[8px] border-t-[8px] border-white rounded-t-[14px]">
            <div class="flex justify-center">
              <button v-for="(slide, index) in images" :key="index" @click="goToSlide(index)"
                      :class="[currentIndex === index ? 'bg-[#FF3CA0] w-[28px]' : 'bg-[#A9A7A7] w-[14px]']"
                      class="h-[14px] mx-2 rounded-full focus:outline-none duration-300 transition-all"></button>
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

const props = defineProps({
  images: {
    type: Array,
    default: () => []
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

const handleSlideChange = (index: Object) => {
  currentIndex.value = index.currentSlideIndex;
}
const goToSlide = (index: number) => {
  carouselRef.value?.slideTo(index);
  currentIndex.value = index;
}

</script>

<style scoped>

</style>