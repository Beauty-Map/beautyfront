<template>
  <div @click="onClick" class="flex flex-col mx-3 items-center justify-start">
    <img :src="image" alt="" class="w-[85px] h-[85px] mb-2" :class="[circle ? 'rounded-[50%]' : 'rounded-[8px]']">
    <div class="text-center leading-[18px] text-xs whitespace-nowrap">{{ title }}</div>
  </div>
</template>

<script setup lang="ts">
const emits = defineEmits(['click'])
const props = defineProps({
  id: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    default: ''
  },
  image: {
    type: String,
    default: ''
  },
  circle: {
    type: Boolean,
    default: true
  },
  isLink: {
    type: Boolean,
    default: true
  },
  callParent: {
    type: Boolean,
    default: false
  }
})
const router = useRouter()

const onClick = () => {
  if (props.callParent) {
    emits('click')
    return
  }
  if (props.isLink) {
    router.push(`/services/${props.id}`)
  } else {
    router.push(`/search?service=${props.id}`)
  }
}
</script>

<style scoped>

</style>