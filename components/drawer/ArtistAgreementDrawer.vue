<template>
<div
    class="fixed flex flex-col h-full md:hide top-0 bottom-0 right-0 overflow-y-scroll w-full duration-700 ease-in-out bg-white z-[999999999999]"
    :class="[store.isOpenArtistAgreement ? 'left-0 scale-1' : 'left-[-100%] hidden scale-0']"
>
  <div class="flex flex-col items-center justify-start px-4 mt-5">
    <Header />
    <AgreementBody />
    <button class="w-full max-w-[183px] mt-4 mx-[20px] shadow-[0px_5px_25px_-10px_#8E6DE9] bg-[#085EC2] rounded-full h-[48px] text-white cursor-pointer flex flex-row justify-center items-center" @click="doAgree">
      <span>تایید می کنم</span>
    </button>
  </div>
</div>
</template>

<script setup lang="ts">
import Header from '~/components/artist-agreement-drawer/Header.vue'
import {useDrawerStore} from "~/store/Drawer";
import AgreementBody from "~/components/artist-agreement-drawer/AgreementBody.vue";
import {useCustomFetch} from "~/composables/useCustomFetch";

const store = useDrawerStore()
const auth = useSanctumAuth()
const app = useNuxtApp()
const close = () => {
  store.closeArtistAgreementDrawer()
}
const doAgree = async () => {
  const data = {
    is_artist_agreed: true,
  }
  const res = await useCustomFetch('/own/artist/agreement', {
    method: "PUT",
    body: data,
  })
  if (res.error.value != null) {

  }
  if (res.data.value != null) {
    await auth.refreshIdentity()
    app.$toast.success('اطلاعات شما با موفقیت ثبت شد', {rtl: true})
    store.closeAllDrawers()
    store.openArtistAgreementResultDrawer()
  }
}
</script>

<style scoped>

</style>