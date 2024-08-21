<template>
  <div class="w-full flex flex-col items-start justify-start main-desktop-slider">
    <PopularArtistDesktopSliderItem
      :image="slide.image"
      :main-title="slide.main_title"
      :sub-title="slide.sub_title"
      :description="slide.description"
      :link-url="slide.link_url"
      :link-title="slide.link_title"
    />
  </div>
</template>

<script setup lang="ts">
import PopularArtistDesktopSliderItem from "~/components/main/PopularArtistDesktopSliderItem.vue";
const slide = {
  image: '/images/artist-slider/desktop-1.png',
  main_title: 'هنرمندان محبوب',
  sub_title: 'متخصصان خدمات زیبایی',
  description: 'با هنرمندان محبوب خدمات خیلی خاص و همین طور تخفیفات ویژه برای کاربران دارد',
  link_url: '/',
  link_title: 'هنرمندان',
}
</script>

<style scoped>

</style>