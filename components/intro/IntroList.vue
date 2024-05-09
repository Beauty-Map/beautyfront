<template>
  <div class="max-w-[322px] flex flex-col justify-start items-center relative">
    <client-only>
      <carousel ref="carouselRef" :items-to-show="1" :autoplay="false" @slide-end="handleSlideChange" :options="slickOptions" class=" h-full">
        <slide class="relative h-full" v-for="(s, n) in slides" :key="n">
          <IntroItem
              :intro="s"
          />
        </slide>
      </carousel>
    </client-only>
    <div class="absolute bottom-[-75px] right-[25px] left-[25px]">
      <button v-if="currentIndex == 2" class="w-full bg-[#FF3CA0] rounded-[15px] py-[6px] px-[60px] text-white cursor-pointer flex flex-row justify-center items-center gap-[10px]" @click="goNext">
        <span>شروع</span>
      </button>
      <button v-else class="cursor-pointer flex flex-row justify-start items-center gap-[10px]" @click="goNext">
        <svg width="50" height="41" viewBox="0 0 50 41" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="50" height="41" rx="15" fill="#FF3CA0"/>
          <path d="M21.025 30.5L19.25 28.725L27.475 20.5L19.25 12.275L21.025 10.5L31.025 20.5L21.025 30.5Z" fill="white"/>
        </svg>
        <span>برو بعدی</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import IntroItem from "~/components/intro/IntroItem.vue";
import {Carousel, Slide} from "vue3-carousel";

const props = defineProps({
  slides: {
    type: Array,
    default: () => []
  },
})

const router = useRouter()

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
const goNext = () => {
  if (currentIndex.value < 2) {
    currentIndex.value += 1
    carouselRef.value?.slideTo(currentIndex.value);
    return
  }
  router.replace('/')
}

</script>

<style scoped>

</style>