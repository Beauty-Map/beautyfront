<template>
  <div class="w-full flex flex-col h-full relative pb-[100px]">
    <div class="pl-[3px] fixed left-[23px] pt-[21px] pb-[79px] z-[999999]">
      <PortfolioPageBackIcon @click="goBack" />
    </div>
    <div class="w-full h-full">
      <ArtistBannerSlideBox :user="user" :images="user.banners"/>
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
<!--  <div class="hidden w-full md:flex flex-col h-full relative px-[60px]">-->
<!--    <div class="w-full text-center flex flex-row justify-center items-center mb-[55px]">-->
<!--      <h1 class="font-medium text-center text-[48px] leading-[73px]">صفحه هنرمند</h1>-->
<!--    </div>-->
<!--    <ArtistBannerDesktopSlideBox-->
<!--        :user="user"-->
<!--        class=" mb-[55px]"-->
<!--    />-->
<!--    <div class="w-full artist-tab-header mb-[55px]">-->
<!--      <Splide :options="options" aria-label="">-->
<!--        <SplideSlide>-->
<!--          <ArtistDesktopTabButton-->
<!--              title="نمونه کارها"-->
<!--              :selected="true"-->
<!--          />-->
<!--        </SplideSlide>-->
<!--        <SplideSlide>-->
<!--          <ArtistDesktopTabButton-->
<!--              title="درباره من"-->
<!--              :selected="false"-->
<!--          />-->
<!--        </SplideSlide>-->
<!--        <SplideSlide>-->
<!--          <ArtistDesktopTabButton-->
<!--              title="آدرس"-->
<!--              :selected="false"-->
<!--          />-->
<!--        </SplideSlide>-->
<!--        <SplideSlide>-->
<!--          <ArtistDesktopTabButton-->
<!--              title="ساعات کاری"-->
<!--              :selected="false"-->
<!--          />-->
<!--        </SplideSlide>-->
<!--        <SplideSlide>-->
<!--          <ArtistDesktopTabButton-->
<!--              title="شبکه های اجتماعی"-->
<!--              :selected="false"-->
<!--          />-->
<!--        </SplideSlide>-->
<!--      </Splide>-->
<!--    </div>-->
<!--    <div class="w-full mb-[55px]">-->
<!--      <ArtistPortfoliosDesktopList :user-id="user.id"/>-->
<!--    </div>-->
<!--    <div class="w-full mb-[55px]">-->
<!--      <ArtistBioDesktop :user="user"/>-->
<!--    </div>-->
<!--    <div class="w-full mb-[55px]">-->
<!--      <ArtistAddressDesktop :user="user"/>-->
<!--    </div>-->
<!--  </div>-->
</template>

<script setup lang="ts">

import PortfolioPageBackIcon from "~/components/icons/PortfolioPageBackIcon.vue";
import ArtistBioAndPortfolioBox from "~/components/artist/ArtistBioAndPortfolioBox.vue";
import {Splide, SplideSlide} from "@splidejs/vue-splide";
import ArtistDesktopTabButton from "~/components/artist/ArtistDesktopTabButton.vue";
import '@splidejs/vue-splide/css';
import ArtistBioDesktop from "~/components/artist/ArtistBioDesktop.vue";
import ArtistAddressDesktop from "~/components/artist/ArtistAddressDesktop.vue";

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
  const {$getRequest: getRequest}=useNuxtApp()
  getRequest(`/users/${id}`)
      .then(res => {
        user.value = res.data as IArtist
      })
}
const addUserView = async () => {
  const {$postRequest: postRequest}=app
  postRequest(`/users/${id}/view`)
}

const goBack = () => {
  router.back()
}

onMounted(() => {
  getUser()
  addUserView()
})
// router.beforeEach((to, from, next) => {
//     next(false);
// });
</script>

<style scoped>

</style>