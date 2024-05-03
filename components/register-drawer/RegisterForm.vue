<template>
  <div class="w-full overflow-y-scroll">
    <TelInput title="شماره موبایل" v-model="form.phone_number"/>
    <PolicyAndRulesButton class="mt-[24px]" v-model="form.accept_policy"/>
    <MainActionButton class="mt-[24px]" @click="doRegister">
      <div class="text-white text-center text-[20px] leading-[30px]">ثبت نام</div>
    </MainActionButton>
    <BottomText class="mt-[18px]" @click="openLoginModal" title="ورود"/>
  </div>
</template>

<script setup lang="ts">

import TelInput from "~/components/input/TelInput.vue";
import PasswordInput from "~/components/input/PasswordInput.vue";
import ResetPasswordLink from "~/components/icons/AuthDrawer/ResetPasswordLink.vue";
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
  console.log('do login')
}

const openLoginModal = () => {
  store.closeAllDrawers()
  store.openLoginDrawer()
}

</script>

<style scoped>

</style>