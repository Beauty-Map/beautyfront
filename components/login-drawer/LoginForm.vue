<template>
  <div class="w-full overflow-y-scroll">
    <TelInput title="شماره موبایل" v-model="form.phone_number"/>
    <PasswordInput title="کلمه عبور" v-model="form.password" class="mt-[27px]"/>
    <ResetPasswordLink class="mt-[18]"/>
    <PolicyAndRulesButton class="mt-[18px]" v-model="form.accept_policy"/>
    <MainActionButton class="mt-[18px]" @click="doLogin">
      <div class="text-white text-center text-[20px] leading-[30px]">ورود</div>
    </MainActionButton>
    <BottomText class="mt-[18px]" @click="openRegisterModal" title="ثبت نام"/>
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

const form = ref<ILoginForm>({
  phone_number: '',
  password: '',
  accept_policy: false,
})

const doLogin = () => {
}

const openRegisterModal = () => {
  store.closeAllDrawers()
  store.openRegisterDrawer()
}

</script>

<style scoped>

</style>