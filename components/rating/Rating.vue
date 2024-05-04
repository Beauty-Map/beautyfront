<template>
  <div class="flex flex-row items-center justify-start">
    <FullStarIcon
      v-for="i in fullStarCount"
      :key="i"
      class="ml-1"
    />
    <HalfStarIcon
        v-for="i in halfStarCount"
        :key="i"
        class="ml-1"
    />
    <EmptyStarIcon
        v-if="emptyStarCount > 0"
        v-for="i in emptyStarCount"
        :key="i"
        class="ml-1"
    />
  </div>
</template>

<script setup lang="ts">
import FullStarIcon from "~/components/icons/FullStarIcon.vue";
import HalfStarIcon from "~/components/icons/HalfStarIcon.vue";
import EmptyStarIcon from "~/components/icons/EmptyStarIcon.vue";

const emits = defineEmits(['update:modelValue'])
const props = defineProps({
  modelValue: {
    type: Number,
    default: false,
  },
  starCount: {
    type: Number,
    default: 5,
  }
})

const fullStarCount = ref<number>(0)
const halfStarCount = ref<number>(0)
const emptyStarCount = ref<number>(0)

const calcStarCount = () => {
  fullStarCount.value = Math.floor(props.modelValue)
  halfStarCount.value = Math.ceil(props.modelValue) - Math.floor(props.modelValue)
  emptyStarCount.value = props.starCount - fullStarCount.value - halfStarCount.value
}

onMounted(() => calcStarCount())
</script>

<style scoped>

</style>