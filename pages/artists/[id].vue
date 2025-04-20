<template>
  <div class="w-full flex flex-col h-full relative pb-[100px]">
    <div class="pl-[3px] fixed left-[23px] pt-[21px] z-[999999]">
      <PortfolioPageBackIcon @click="goBack" />
    </div>
    <div class="w-full h-full">
      <ArtistBannerSlideBox v-if="!loading" :view="user.view" :avatar="user.avatar" :user="user" :images="user.banners"/>
    </div>
    <div class="w-full h-full px-[20px]">
      <ArtistDetailBox
        :user="user"
      />
    </div>

    <div class="w-full h-full px-[20px]">
      <ArtistBioAndPortfolioBox
        :user="user"
      />
    </div>

    <ArtistCallBox :artist="user"/>
  </div>
</template>

<script setup lang="ts">

import PortfolioPageBackIcon from "~/components/icons/PortfolioPageBackIcon.vue";
import ArtistBioAndPortfolioBox from "~/components/artist/ArtistBioAndPortfolioBox.vue";

definePageMeta({
  layout: 'artist-single'
})

const options = ref({
  direction: "rtl",
  autoWidth: true,
  pagination: false,
  arrows: false,
})
const app = useNuxtApp()
const router = useRouter()
const route = useRoute()
const loading = ref(false)
const user = ref<IArtist>({
  id: 1,
  full_name: "زیبا اعظمی",
  phone_number: '09381412419',
  bio: 'من با 0 سال سابقه در صنعت آرایشگری میخواهم مشتری بگیرم که بتوانم یاد بگیرم حتما برای شما سوال شده مگه بلد نیست؟',
  distance: '1.5km',
  is_bookmarked: false,
  avatar: '/images/artist/2.png',
  has_blue_tick: true,
  banners: [],
  rating: 4,
  address: 'همدان,پاسداران,جلالی,کوچه عقیل,بن بست 40,پلاک5,واحد 2',
  portfolios_count: 15,
  services_count: 3,
  services: [],
  plan: {
    plan: {
      star_count: 4
    }
  },
  work_hours: [],
  portfolios: [],
  licenses: [],
  socials: {
    telegram: "",
    instagram: "",
    bale: "",
    whatsapp: "",
    eita: "",
    rubika: "",
    web: ""
  },
  created_at_ago_fa: '',
  view: 0,
})
const id = route.params.id
const getUser = async () => {
  loading.value = true
  const {$getRequest: getRequest}=useNuxtApp()
  getRequest(`/users/${id}`)
      .then(res => {
        user.value = {
          ...res.data,
        }
      })
      .finally(() => {
        loading.value = false
      })
}
const addUserView = async () => {
  const {$postRequest: postRequest}=app
  postRequest(`/users/${id}/view`)
}

const goBack = () => {
  router.back()
}

onMounted(async () => {
  await getUser()
  await addUserView()
})
// router.beforeEach((to, from, next) => {
//     next(false);
// });
</script>

<style scoped>

</style>