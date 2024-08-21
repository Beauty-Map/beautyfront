<template>
  <div
    class="cursor-pointer mx-[10px] min-w-[125px] min-h-[65px] px-[30px] py-[22px] rounded-[20px] flex justify-center items-center"
    :class="[selected ? 'bg-[#FF3CA0]' : 'bg-[#ECECEC]']"
  >
    <span
      class="font-semibold text-[26px] leading-[45px]"
      :class="[selected ? 'text-white' : 'text-[#133C3E]']"
    >
      {{ title }}
    </span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: Object,
    required: true,
  },
  selected: {
    type: Boolean,
    default: false,
  }
})
</script>

<style scoped>

</style>