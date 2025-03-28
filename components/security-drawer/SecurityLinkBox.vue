<template>
  <div class="flex flex-col justify-start items-start w-full pb-10">
    <ProfileLink @click="openSetNewPasswordDrawer" :is-link="false">
      <template #icon>
        <ChangePasswordIcon />
      </template>
      <template #title>تغییر رمز عبور</template>
    </ProfileLink>
    <ProfileLink @click="deleteAccount" :is-link="false">
      <template #icon >
        <DeleteAccountIcon class="mr-[6px] ml-[6px]"/>
      </template>
      <template #title>پاک کردن حساب کاربری</template>
    </ProfileLink>
    <ProfileLink @click="openSetAltNumberDrawer" :is-link="false">
      <template #icon >
        <AltPhoneNumberIcon class="mr-[6px] ml-[2px]"/>
      </template>
      <template #title>ایمیل جایگزین ورود</template>
    </ProfileLink>
    <DeleteAccountModal :open="showDeleteAccount" @close="closeDeleteAccountAlert" @delete="doDeleteAccount">
      <div class="w-full flex flex-col items-start justify-start pb-[18px]">
        <h1 class="w-full font-semibold text-[#141414] text-right text-[17px] leading-[26px]">
          پاک کردن حساب کاربری
        </h1>
        <h4 class="w-full font-semibold text-[#828282] text-right text-[14px] leading-[21px]">
          آیا مطمئن هستید که می خواهید این حساب را حذف کنید؟ این عمل قابل بازگشت نیست.
        </h4>
        <div class="w-full mt-[10px] font-normal text-right text-[#133C3E] text-[10px] leading-[15px]">
        </div>
      </div>
    </DeleteAccountModal>
  </div>
</template>

<script setup lang="ts">

import ChangePasswordIcon from "~/components/icons/ChangePasswordIcon.vue";
import {useDrawerStore} from "~/store/Drawer";
import DeleteAccountIcon from "~/components/icons/DeleteAccountIcon.vue";
import AltPhoneNumberIcon from "~/components/icons/AltPhoneNumberIcon.vue";
import DeleteAccountModal from "~/components/modal/DeleteAccountModal.vue";
import {useAuthStore} from "~/store/Auth";


const auth = useAuthStore()
const user = ref(auth.user)
const store = useDrawerStore()
const app = useNuxtApp()
const router = useRouter()
const showDeleteAccount = ref<Boolean>(false)

const openSetAltNumberDrawer = () => {
  store.closeAllDrawers()
  store.openSetAltNumberDrawer()
}

const openSetNewPasswordDrawer = () => {
  store.closeAllDrawers()
  store.openSetNewPasswordDrawer()
}

const openDeleteAccountAlert = () => {
  showDeleteAccount.value = true
}

const closeDeleteAccountAlert = () => {
  showDeleteAccount.value = false
}

const doDeleteAccount = () => {
  const auth = useAuthStore()
  const {$deleteRequest: deleteRequest}=app
  deleteRequest('/own')
      .then(res=> {
        app.$toast.success('اکانت شما با موفقیت حذف شد', {rtl: true})
        auth.setUser(null)
        auth.setToken(null)
        const token = useCookie('token')
        token.value = ''
        store.closeAllDrawers()
        router.replace('/')
      })
      .catch(err => {
        const errors = Object.values(err.data.errors)
        for (const k in errors) {
          for (const e in errors[k]) {
            app.$toast.error(errors[k][e], {rtl: true,})
          }
        }
      })
}

const deleteAccount = () => {
  if (!user.value) {
    store.closeAllDrawers()
    store.openLoginDrawer()
    return
  }
  openDeleteAccountAlert()
}
</script>

<style scoped>

</style>