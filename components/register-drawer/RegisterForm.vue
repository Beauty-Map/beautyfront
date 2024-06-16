<template>
  <div class="w-full overflow-y-scroll">
    <TelInput title="شماره موبایل" v-model="form.phone_number"/>
    <PolicyAndRulesButton class="mt-[24px]" v-model="form.accept_policy"/>
    <MainActionButton class="mt-[24px]" @click="doRegister">
      <div class="text-white text-center text-[20px] leading-[30px]">ارسال کد تایید</div>
    </MainActionButton>
    <BottomText class="mt-[18px]" @click="openLoginModal" title="ورود"/>
  </div>
</template>

<script setup lang="ts">

import TelInput from "~/components/input/TelInput.vue";
import PolicyAndRulesButton from "~/components/icons/AuthDrawer/PolicyAndRulesButton.vue";
import MainActionButton from "~/components/button/form/MainActionButton.vue";
import BottomText from "~/components/icons/AuthDrawer/BottomText.vue";
import {useDrawerStore} from "~/store/Drawer";

const store = useDrawerStore()

const form = ref<IRegisterForm>({
  phone_number: '',
  accept_policy: false
})

const doRegister = () => {
  store.closeAllDrawers()
  store.openOtpDrawer()
}

const openLoginModal = () => {
  store.closeAllDrawers()
  store.openLoginDrawer()
}

</script>

<style scoped>

</style>