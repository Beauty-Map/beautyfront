<template>
  <div class="w-full flex flex-row justify-evenly items-center px-[17px]">
    <div class="text-center text-[#141414] font-medium text-[13px] transition-all duration-500 leading-[20px] px-[15px] py-[7px] border-b-[4px]"
         @click="doSelect(1)"
         :class="[index == 1 ? ' border-b-[#1BD4CA]' : 'border-b-white']"
    >
      نمونه کار
    </div>
    <div class="text-center text-[#141414] font-medium text-[13px] transition-all duration-500 leading-[20px] px-[15px] py-[7px] border-b-[4px]"
         @click="doSelect(2)"
         :class="[index == 2 ? 'border-b-[#1BD4CA]' : 'border-b-white']"
    >
      هنرمندان
    </div>
  </div>
</template>

<script setup lang="ts">
const emits = defineEmits(['select'])

const index = ref<number>(1)

const doSelect = (i: number) => {
  index.value = i
  emits('select', i)
}
</script>

<style scoped>

</style>