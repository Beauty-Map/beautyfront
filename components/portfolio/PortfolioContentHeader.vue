<template>
  <div class="w-full flex flex-row items-center justify-between px-[10px] pb-[15px] border-b border-b-[#A9A7A7]">
    <div class="flex flex-col items-center justify-start">
      <h1 class="font-medium text-[#141414] text-right text-[22px] leading-[34px]">{{ title }}</h1>
      <div v-if="service" class="flex flex-row items-center justify-start text-right text-[10px] font-light leading-[14px]">
        <span class="text-[#828282]">دسته بندی:</span>
        <span class="mr-1 text-[#2920D9]">{{ getServices() }}</span>
      </div>
    </div>
    <div class="flex flex-row justify-end gap-4">
<!--      <LikeIcon v-if="auth.user" @click="doLike"/>-->
      <Bookmark v-if="auth.user" @click="doBookmark" :bookmarked="isBookmarked"/>
      <ShareIcon @click="doShare"/>
    </div>
  </div>
</template>

<script setup lang="ts">

import ShareIcon from "~/components/icons/ShareIcon.vue";
import {useAuthStore} from "~/store/Auth";

const props = defineProps({
  id: {
    type: Number,
    default: '',
    required: true
  },
  bookmarked: {
    type: Boolean,
    default: false,
    required: true
  },
  title: {
    type: String,
    default: '',
    required: true
  },
  service: {
    type: Object,
    required: true
  }
})

const app = useNuxtApp()
const auth = useAuthStore()
const isBookmarked = ref<Boolean>(props.bookmarked)

const getServices = () => {
  let services = []
  let s = props.service
  while (s) {
    services.push(s.title)
    s = s.parent
  }
  return services.reverse().join(',')
}

const doBookmark = () => {
  const {$postRequest:postRequest} = app
  postRequest(`/portfolios/${props.id}/like`, {})
      .then(res => {
        isBookmarked.value = !isBookmarked.value
      })
}

const doShare = async () => {
  const link = window.location.href
  await navigator.share({
    url: link,
  })
}
</script>

<style scoped>

</style>