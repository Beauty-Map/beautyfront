<template>
  <div class="flex flex-col justify-center text-xs font-medium text-right w-full fixed bottom-0 left-0 right-0">
    <nav class="flex justify-between px-4 bg-pink-600 rounded-tl-3xl rounded-tr-3xl">
      <div class="flex justify-between text-white w-full">
        <div class="flex flex-col items-center pt-2">
<!--          <div class="shrink-0 bg-yellow-300 rounded-2xl h-[3px] w-[45px]"></div>-->
          <div class="cursor-pointer flex overflow-hidden relative flex-col px-2 py-2 aspect-[1.36] fill-[linear-gradient(180deg,)] w-[72px]">
            <HomeIcon class="object-cover absolute inset-0 size-full" />
            <div class="text-center mt-2">صفحه اصلی</div>
          </div>
        </div>
        <div class="cursor-pointer flex flex-col items-center pt-2">
          <FavouriteIcon class="object-cover absolute inset-0 size-full" />
          <div class="text-center mt-2">علاقه مندی</div>
        </div>
        <div class="cursor-pointer flex flex-col items-center pt-2">
          <ChangePanelIcon class="object-cover absolute inset-0 size-full" />
          <div class="text-center mt-2">تغییر پنل</div>
        </div>
          <div class="cursor-pointer flex flex-col items-center pt-2">
            <CategoryIcon class="object-cover absolute inset-0 size-full" />
            <div class="text-center mt-2">دسته بندی</div>
          </div>
          <div class="cursor-pointer flex flex-col items-center pt-2">
            <ProfileIcon class="object-cover absolute inset-0 size-full" />
            <div class="text-center mt-2">پروفایل</div>
          </div>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">

import HomeIcon from "~/components/icons/BottomNavigation/HomeIcon.vue";
import FavouriteIcon from "~/components/icons/BottomNavigation/FavouriteIcon.vue";
import ChangePanelIcon from "~/components/icons/BottomNavigation/ChangePanelIcon.vue";
import CategoryIcon from "~/components/icons/BottomNavigation/CategoryIcon.vue";
import ProfileIcon from "~/components/icons/BottomNavigation/ProfileIcon.vue";
</script>

<style scoped>

</style>