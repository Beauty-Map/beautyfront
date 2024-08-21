<template>
  <div class="font-semibold text-lg text-center px-[17px] py-[17px] bg-[#FDF4FF] flex flex-col justify-center items-center w-full"
    :class="[getStatusIsOpen ? 'text-[#157F3D]' : 'text-[#F44336]']"
  >
    {{ subject.title }}
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  status: {
    type: String,
    required: true
  },
  subject: {
    type: Object,
    required: true
  },
})

const getStatusIsOpen = () => {
  switch (props.status) {
    case 'created':
    case 'open':
    case 'answered':
      return true;
    default:
      return false
  }
}
</script>

<style scoped>

</style>