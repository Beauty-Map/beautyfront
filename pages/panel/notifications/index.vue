<template>
  <div class="flex flex-col px-[23px] py-[10px] h-full w-full">
    <PageHeader :title="'نوتیفیکیشن'" class="mb-[60px]"/>
    <div class="flex flex-col justify-start items-start w-full">
      <div class="w-full text-center">

      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import PageHeader from "../../components/header/PageHeader.vue";
import ServiceGrid from "../../components/service/ServiceGrid.vue";

definePageMeta({
  layout: 'default'
})
const route = useRoute()
const notification = ref({
  id: 0,
  title: '',
  description: '',
  created_at_ago_fa: ''
})

const getNotification = async () => {
  const {$getRequest: getRequest}=useNuxtApp()
  getRequest(`/notifications/${route.params.id}`)
      .then(res => {
        notification.value = res.data
      })
}

onMounted(async () => {
  await getNotification()
})
</script>

<style scoped>

</style>