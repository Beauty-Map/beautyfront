<template>
  <div class="w-full overflow-y-scroll">
    <PasswordInput title="کلمه عبور" v-model="form.password" class="mt-[27px]"/>
    <PasswordInput title="تکرار کلمه عبور" v-model="form.password_confirmation" class="mt-[27px]"/>
    <MainActionButton class="mt-[48px]" @click="doSetPassword">
      <div class="text-white text-center text-[20px] leading-[30px]">ثبت</div>
    </MainActionButton>
  </div>
</template>

<script setup lang="ts">

import PasswordInput from "~/components/input/PasswordInput.vue";
import MainActionButton from "~/components/button/form/MainActionButton.vue";
import {useDrawerStore} from "~/store/Drawer";

const store = useDrawerStore()

const form = ref<ISetPasswordRegisterForm>({
  password: '',
  password_confirmation: '',
})

const doSetPassword = () => {
  console.log('do doSetPassword')
  store.closeAllDrawers()
  store.openCompleteProfileDrawer()
}

</script>

<style scoped>

</style>