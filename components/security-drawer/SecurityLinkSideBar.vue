<template>
  <div class="flex flex-col justify-start items-start w-full max-w-[310px] pb-10">
    <UserBox />
    <SideBarLink to="/security/password" title="تغییر رمز عبور" class="mt-8">
      <template #icon>
        <ChangePasswordIcon />
      </template>
    </SideBarLink>
    <SideBarLink to="/security/delete" :is-link="false" @click="deleteAccount" title="پاک کردن حساب کاربری">
      <template #icon>
        <DeleteAccountIcon />
      </template>
    </SideBarLink>
    <SideBarLink to="/security/alt-email" title="ایمیل جایگزین ورود">
      <template #icon>
        <AltPhoneNumberIcon />
      </template>
    </SideBarLink>
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
import UserBox from "~/components/sidebar/UserBox.vue";
import SideBarLinkBox from "~/components/sidebar/SideBarLinkBox.vue";
import SideBarLink from "~/components/sidebar/SideBarLink.vue";
import ProfileSmallIcon from "~/components/icons/ProfileSmallIcon.vue";
import {useAuthStore} from "~/store/Auth";


const auth = useAuthStore()
const user = ref(auth.user)
const store = useDrawerStore()
const showDeleteAccount = ref<Boolean>(false)

const openDeleteAccountAlert = () => {
  showDeleteAccount.value = true
}

const closeDeleteAccountAlert = () => {
  showDeleteAccount.value = false
}

const doDeleteAccount = () => {
  const auth = useSanctumAuth()
  auth.logout()
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