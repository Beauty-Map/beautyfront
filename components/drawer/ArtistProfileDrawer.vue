<template>
<div
    class="flex flex-col fixed md:hide top-0 bottom-0 pb-[45px] px-[17px] overflow-y-scroll w-full duration-700 ease-in-out bg-white z-[99999999999999]"
    :class="[store.isOpenArtistProfile ? 'left-0' : 'left-[-100%]']"
>
  <div class="flex flex-row items-center justify-between pt-[23px] pl-[3px]">
    <div></div>
    <div class="font-semibold text-[16px] text-[#141414] leading-[24px]">پروفایل</div>
    <BackIcon @click="goBack" />
  </div>
  <div class="w-full text-center text-[#133C3E] text-[14px] leading-[21px] font-semibold mt-[33px]">سن شما به کاربران نمایش داده نمی شود</div>
  <div class="flex flex-col justify-start items-start">
    <ArtistAvatar @choose="onUserAvatarChanged" :avatar="user.avatar" class="mt-[35px] mb-[22px]"/>
    <div class="w-full overflow-y-auto">
      <TextInput title="نام و نام خانوادگی" v-model="form.full_name" class="mt-[27px]"/>
      <TelInput title="شماره موبایل" v-model="form.phone_number" :disabled="true" class="mt-[27px]"/>
      <NationalCodeInput title="کد ملی" v-model="form.national_code" class="mt-[27px]"/>
      <BirthDateInput title="تاریخ تولد" v-model="form.birth_date" class="mt-[27px]"/>
      <TelInput title="تلفن ثابت" v-model="form.tel_number" class="mt-[27px]"/>
      <ChooseCityInput title="شهر محل فعالیت" v-model="form.city_id" class="mt-[27px]"/>
      <TextInput title="آدرس دقیق" v-model="form.address" class="mt-[27px]"/>
      <ChooseLocationInput title="انتخاب لوکیشن" v-model="form.location" class="mt-[27px]"/>
      <ChooseWorkHourInput
          title="ساعت کاری"
          :is-all-day-open="form.is_all_day_open"
          :is-closed="form.is_closed"
          :work-on-holidays="form.work_on_holidays"
          v-model="form.work_hours"
          @update:is-closed="open => form.is_closed = open"
          @update:is-all-day-open="open => form.is_all_day_open = open"
          class="mt-[27px]"
      />
      <TextAreaInput title="تنظیم بیوگرافی" v-model="form.bio" class="mt-[27px]"/>
      <ChooseSocialMediaInput title="شبکه های اجتماعی" v-model="form.social_media" class="mt-[27px]"/>
      <MainActionButton class="mt-[80px]" @click="doSaveProfile">
        <div class="text-white text-center text-[20px] leading-[30px]">تکمیل ثبت نام</div>
      </MainActionButton>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">

import BackIcon from "~/components/icons/BackIcon.vue";
import {useDrawerStore} from "~/store/Drawer";
import ArtistAvatar from "~/components/artist-profile-drawer/ArtistAvatar.vue";
import ChooseCityInput from "~/components/input/ChooseCityInput.vue";
import TextInput from "~/components/input/TextInput.vue";
import MainActionButton from "~/components/button/form/MainActionButton.vue";
import BirthDateInput from "~/components/input/BirthDateInput.vue";
import TelInput from "~/components/input/TelInput.vue";
import NationalCodeInput from "~/components/input/NationalCodeInput.vue";
import ChooseLocationInput from "~/components/input/ChooseLocationInput.vue";
import ChooseWorkHourInput from "~/components/input/ChooseWorkHourInput.vue";
import TextAreaInput from "~/components/input/TextAreaInput.vue";
import ChooseSocialMediaInput from "~/components/input/ChooseSocialMediaInput.vue";
import {useCustomFetch} from "~/composables/useCustomFetch";

const store = useDrawerStore()
const user = useSanctumUser()
const auth = useSanctumAuth()
const app = useNuxtApp()

auth.refreshIdentity()
const form = ref({
  full_name: user.value?.full_name,
  phone_number: user.value?.phone_number,
  national_code: user.value?.national_code,
  tel_number: user.value?.tel_number,
  address: user.value?.address,
  city_id: user.value?.city_id,
  birth_date: user.value?.birth_date,
  avatar: user.value?.avatar,
  location: user.value?.location,
  work_hours: user.value?.work_hours,
  is_all_day_open: user.value?.is_all_day_open,
  work_on_holidays: user.value?.work_on_holidays,
  is_closed: user.value?.is_closed,
  bio: user.value?.bio,
  social_media: user.value?.social_media,
})
const goBack = () => {
  store.closeAllDrawers()
}
const onUserAvatarChanged = (newAvatar: string) => {
  form.value.avatar = newAvatar
}
const doSaveProfile = async () => {
  const data = {
    full_name: form.value.full_name,
    national_code: form.value.national_code.toString(),
    tel_number: form.value.tel_number,
    address: form.value.address,
    avatar: form.value.avatar,
    bio: form.value.bio,
    location: form.value.location,
    social_media: form.value.social_media,
    is_all_day_open: form.value.is_all_day_open,
    is_closed: form.value.is_closed,
    work_on_holidays: form.value.work_on_holidays,
    city_id: form.value.city_id,
    birth_date: form.value.birth_date,
    work_hours: form.value.work_hours,
  }
  const res = await useCustomFetch('/own/artist', {
    method: "PUT",
    body: data,
  })
  if (res.error.value != null) {

  }
  if (res.data.value != null) {
    await auth.refreshIdentity()
    app.$toast.success('اطلاعات شما با موفقیت ثبت شد', {rtl: true})
    store.closeAllDrawers()
    store.openArtistAgreementDrawer()
  }
}
</script>

<style scoped>

</style>