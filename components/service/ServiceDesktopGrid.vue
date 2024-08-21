<template>
    <Splide :options="options" aria-label="">
      <SplideSlide v-for="(s, i) in services" :key="i">
        <ServiceDesktopItem
            :id="s.id"
            :title="s.title"
            :image="s.image"
            :circle="circle"
            :is-link="isLink"
        />
      </SplideSlide>
    </Splide>
</template>

<script setup lang="ts">
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';
import ServiceDesktopItem from "~/components/service/ServiceDesktopItem.vue";

const props = defineProps({
  circle: {
    type: Boolean,
    default: true
  },
  services: {
    type: Array,
    default: () => []
  },
  isLink: {
    type: Boolean,
    default: true
  }
})

const options = ref({
  direction: "rtl",
  autoWidth: true,
  pagination: false,
  arrows: false,
  focus: 'center',
})
</script>

<style scoped>

</style>