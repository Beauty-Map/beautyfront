<template>
  <div @click="toggleBookmark">
    <FullBookmarkIcon v-if="bookmarked"/>
    <EmptyBookmarkIcon v-else/>
  </div>
</template>

<script setup lang="ts">
import FullBookmarkIcon from "~/components/icons/FullBookmarkIcon.vue";
import EmptyBookmarkIcon from "~/components/icons/EmptyBookmarkIcon.vue";

const emits = defineEmits(['bookmark'])
const props = defineProps({
  bookmarked: {
    type: Boolean,
    required: true,
  }
})

const toggleBookmark = (e: Event) => {
  e.stopPropagation()
  emits('bookmark', !props.bookmarked)
}
</script>

<style scoped>

</style>