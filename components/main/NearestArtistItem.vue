<template>
  <div class="flex flex-col justify-center rounded-lg w-full">
    <nuxt-link to="/" class="flex flex-col px-4 pt-2 w-full bg-white rounded-lg shadow-md">
      <div class="flex flex-col justify-start">
        <div class="flex gap-px justify-between px-1 w-full">
          <div class="flex gap-px text-sm font-medium text-right text-amber-700">
            <div>میترا سرمندی</div>
            <BoronzeTick class="shrink-0 my-auto w-3.5 aspect-square" />
          </div>
          <div class="near-artist-view-box flex justify-center items-center h-[16px] w-[45px] my-auto text-xs text-center whitespace-nowrap rounded-[10px] text-neutral-900">
            <div class="text-[#141414] font-medium text-[8px] text-center leading-[10px]">14.5k</div>
            <BoronzeView class="shrink-0 aspect-square w-[11px]" />
          </div>
        </div>
        <div class="flex gap-3.5 justify-end pb-1.5 pl-3.5 mt-2 font-medium text-right">
          <img src="/images/artist/1.jpg" alt="Business image" class="rounded shrink-0 border border-amber-700 border-solid shadow-sm aspect-[1.08] w-[88px]" />
          <div class="flex flex-col">
            <h3 class="text-[#141414] font-medium text-[12px] text-right leading-[18px]">کوتاه کردن و کراتینه مو</h3>
            <div class="flex flex-col justify-center mt-1.5 text-xs text-zinc-500">
              <div class="flex flex-col">
                <div class="flex gap-1 text-xs">
                  <LocationGreenIcon class="shrink-0 self-start w-3 aspect-square"/>
                  <div class="text-[#828282] font-normal text-[9px] text-right leading-[14px]">
                    همدان , خیابان پاسداران , خیابان جلالی , کوچه شمائی , جنب نانوایی
                  </div>
                </div>
                <div class="flex gap-1 tracking-normal">
                  <DistanceGreenIcon class="shrink-0 self-start w-3 aspect-square" />
                  <div class="text-[#828282] font-normal text-[9px] text-right leading-[14px]">
                    15 min
                    <span class="text-emerald-400">|</span>
                    2 km
                  </div>
                </div>
                <div class="flex gap-1 tracking-normal">
                  <TimeGreenIcon class="shrink-0 self-start w-3 aspect-square" />
                  <div class="text-[#828282] font-normal text-[9px] text-right leading-[14px]">10:30 صبح - 9:00 شب</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script setup lang="ts">

import BoronzeTick from "~/components/icons/BoronzeTick.vue";
import BoronzeView from "~/components/icons/BoronzeView.vue";
import LocationGreenIcon from "~/components/icons/LocationGreenIcon.vue";
import TimeGreenIcon from "~/components/icons/TimeGreenIcon.vue";
import DistanceGreenIcon from "~/components/icons/DistanceGreenIcon.vue";
</script>

<style scoped>

</style>