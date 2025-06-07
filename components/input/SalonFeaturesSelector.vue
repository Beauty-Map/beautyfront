<template>
  <div class="flex flex-col items-start justify-start w-full px-1 mt-[27px]">
    <div class="font-semibold text-[14px] text-[#333] mb-2">امکانات سالن</div>

    <div
        class="h-[40px] w-full rounded-[8px] relative border border-[#133C3E] px-2 flex items-center overflow-hidden text-ellipsis whitespace-nowrap cursor-pointer"
        @click="isModalOpen = true"
    >
     <span v-if="selectedTitles.length">
      {{ selectedTitles }}
    </span>
      <span v-else class="text-gray-400">انتخاب امکانات سالن</span>
    </div>

    <FeaturesModal
        v-if="isModalOpen"
        :features="features"
        v-model="selected"
        @close="isModalOpen = false"
    />
  </div>
</template>

<script setup lang="ts">
import FeaturesModal from './FeaturesModal.vue'
import { ref, computed, watch, onMounted } from 'vue'

interface Feature {
  id: number
  title: string
}

const props = defineProps<{
  modelValue: number[]
}>()

const emit = defineEmits(['update:modelValue'])

const features = ref<Feature[]>([])
const selected = ref<number[]>([...props.modelValue])
const isModalOpen = ref(false)

watch(selected, (val) => {
  emit('update:modelValue', val)
})

onMounted(async () => {
  try {
    const { $getRequest } = useNuxtApp()
    const res = await $getRequest('/features')
    features.value = res.data
  } catch (err) {
    console.error('خطا در دریافت امکانات:', err)
  }
})

const selectedTitles = computed(() => {
  const selectedFeatures = features.value.filter(f => selected.value.includes(f.id))
  if (selectedFeatures.length === 0) return ''
  if (selectedFeatures.length === 1) return selectedFeatures[0].title
  return `${selectedFeatures[0].title} و ${selectedFeatures.length - 1} امکانات دیگر`
})

</script>
