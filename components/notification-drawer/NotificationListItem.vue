<template>
  <nuxt-link :href="`/panel/notifications/${notification.id}`" class="w-full flex flex-row items-start justify-start mb-[15px]">
    <ProfileBlueIcon class="grow-0"/>
    <div class="w-full grow items-start justify-start mx-[12px]">
      <div class="font-semibold leading-[18px] text-[#141414]">
        {{ notification.title }}
      </div>
      <div class="font-medium text-[8px] leading-[12px] text-[#141414] mt-[3px]">
        {{ notification.description }}
      </div>
    </div>
    <div class="text-[#400842] text-[10px] leading-[14px] font-light text-left whitespace-nowrap">
      {{ notification.created_at_ago_fa }}
    </div>
  </nuxt-link>
</template>

<script setup lang="ts">

import ProfileBlueIcon from "~/components/icons/ProfileBlueIcon.vue";
const props = defineProps({
  notification: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>

</style>