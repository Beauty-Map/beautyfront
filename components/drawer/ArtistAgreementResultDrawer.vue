<template>
<div
    class="fixed flex flex-col h-full md:hide top-0 bottom-0 right-0 overflow-y-scroll w-full duration-700 ease-in-out bg-white z-[999999999999]"
    :class="[store.isOpenArtistAgreementResult ? 'left-0 scale-1' : 'left-[-100%] hidden scale-0']"
>
  <div class="flex flex-col items-center justify-start px-0">
    <Header />
    <AgreementBody />
    <button :disabled="loading" class="min-w-[300px] mt-4 mx-[30px] mb-[50px] bg-[#FF3CA0] rounded-full h-[48px] text-white cursor-pointer flex flex-row justify-center items-center" @click="doStart">
      <span v-if="loading">
        <LoadingComponent />
      </span>
      <span v-else>متوجه شدم</span>
    </button>
  </div>
</div>
</template>

<script setup lang="ts">
import Header from '~/components/artist-agreement-result-drawer/Header.vue'
import {useDrawerStore} from "~/store/Drawer";
import AgreementBody from "~/components/artist-agreement-result-drawer/AgreementBody.vue";
import LoadingComponent from "~/components/global/Loading.vue";

const store = useDrawerStore()
const loading = ref(false)

const close = () => {
  store.closeArtistAgreementResultDrawer()
}

const doStart = async () => {
  loading.value = true
  store.closeAllDrawers()
  loading.value = false
}
</script>

<style scoped>

</style>