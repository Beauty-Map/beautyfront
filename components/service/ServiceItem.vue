<template>
  <div @click="onClick" class=" flex flex-col border-b-[#000000] border-b-[1px] items-center overflow-hidden justify-center bg-[#57FF094D] py-[10px] px-[20px] rounded-[20px]">
    <div class="w-full text-center leading-[18px] text-xs whitespace-nowrap overflow-hidden font-bold text-ellipsis">{{ title }}</div>
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