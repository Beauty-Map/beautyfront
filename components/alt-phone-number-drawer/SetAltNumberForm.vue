<template>
  <div class="w-full overflow-y-auto">
    <InputEmailInput :error="errors.email" title="ایمیل" v-model="form.email"/>
    <MainActionButton :disabled="loading" class="mt-[48px] h-[44px]" @click="doSendCode">
      <div v-if="loading">
        <LoadingComponent />
      </div>
      <div v-else class="text-white text-center text-[14px] leading-[21px]">
        ثبت
      </div>
    </MainActionButton>
<!--    <OtpDrawer :is-open="openDrawer"-->
<!--               @close="closeDrawerClicked"-->
<!--               @change-email="changePhoneNumber"-->
<!--               @validate="validate"-->
<!--    />-->
  </div>
</template>

<script setup lang="ts">

import MainActionButton from "~/components/button/form/MainActionButton.vue";
import {useDrawerStore} from "~/store/Drawer";
import OtpDrawer from "~/components/drawer/OtpDrawer.vue";
import LoadingComponent from "~/components/global/Loading.vue";
import {useAuthStore} from "~/store/Auth";

const app = useNuxtApp()
const store = useDrawerStore()
const auth = useAuthStore()
const loading = ref(false)

const form = ref<ISetAltNumberForm>({
  email: auth.user?.email,
})
const errors = ref({
  email: ''
})
const openDrawer = ref(false)
const {$postRequest: postRequest}=app
const {$putRequest: putRequest}=app
const doSendCode = async () => {
  if (loading.value) {
    return
  }
  loading.value = true
  if (!form.value.email) {
    errors.value.email = 'ایمیل جایگزین را وارد کنید'
    return
  }
  postRequest('/own/alt-email', form.value)
      .then(res=> {
        app.$toast.success('ایمیل با موفقیت ثبت شد', {rtl: true})
        // openDrawerClicked()
      })
      .catch(err => {
        const errors = Object.values(err.data.errors)
        for (const k in errors) {
          for (const e in errors[k]) {
            app.$toast.error(errors[k][e], {rtl: true,})
          }
        }
      })
      .finally(() => {
        loading.value = false
      })
}

const openDrawerClicked = () => {
  openDrawer.value = true
}

const closeDrawerClicked = () => {
  openDrawer.value = false
}

const changePhoneNumber = () => {
  openDrawerClicked()
}
</script>

<style scoped>

</style>