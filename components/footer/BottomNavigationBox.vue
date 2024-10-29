<template>
  <div class="text-xs font-medium w-full text-center fixed bottom-0 right-0 left-0 z-[9999999]">
    <div class="flex flex-row items-center justify-evenly bg-pink-600 rounded-tl-3xl rounded-tr-3xl h-[58px]">
      <BottomNavigationButton
          @click="selectItem(1)"
          :selected="index == 1"
      >
        <HomeIcon />
        <template #text>
          بیوتی مپ
        </template>
      </BottomNavigationButton>
      <BottomNavigationButton
          @click="selectItem(2)"
          :selected="index == 2"
      >
        <CategoryIcon />
        <template #text>
          دسته بندی
        </template>
      </BottomNavigationButton>
      <BottomNavigationButton
          @click="selectItem(3)"
          :selected="index == 3"
      >
        <ChangePanelIcon />
        <template #text>
          هنرمندان
        </template>
      </BottomNavigationButton>
      <BottomNavigationButton
          @click="selectItem(4)"
          :selected="index == 4"
      >
        <FavouriteIcon />
        <template #text>
          علاقه مندی
        </template>
      </BottomNavigationButton>
      <BottomNavigationButton
          @click="selectItem(5)"
          :selected="index == 5"
      >
        <ProfileIcon />
        <template #text>
          پروفایل
        </template>
      </BottomNavigationButton>
    </div>
  </div>
</template>

<script setup lang="ts">

import HomeIcon from "~/components/icons/BottomNavigation/HomeIcon.vue";
import FavouriteIcon from "~/components/icons/BottomNavigation/FavouriteIcon.vue";
import ChangePanelIcon from "~/components/icons/BottomNavigation/ChangePanelIcon.vue";
import CategoryIcon from "~/components/icons/BottomNavigation/CategoryIcon.vue";
import ProfileIcon from "~/components/icons/BottomNavigation/ProfileIcon.vue";
import BottomNavigationButton from "~/components/button/BottomNavigationButton.vue";
import {useDrawerStore} from "~/store/Drawer";
import {useAuthStore} from "~/store/Auth";

const router = useRouter()
const route = useRoute()
const store = useDrawerStore()

const auth = useAuthStore()
const user = ref(auth.user)
const index = ref<Number>(1)

const selectItem = (i: Number) => {
  store.closeAllDrawers()
  index.value = i
  switch (i) {
    case 1:
      openMainPage()
      break

    case 2:
      openServicePage()
      break

    case 3:
      openArtistsPage()
      break

    case 4:
      openFavouritePage()
      break

    case 5:
      openProfilePage()
      break

  }
}

const openMainPage = () => {
  router.push('/')
}

const openServicePage = () => {
  router.push('/services')
}

const openArtistsPage = () => {
  router.push('/artists')
}

const openFavouritePage = () => {
  if (auth.user) {
    router.push('/favourites')
  } else {
    store.openLoginDrawer()
  }
}

const openProfilePage = () => {
  store.openProfileDrawer()
}

const onRouteChanged = (route: string) => {
  if (route.startsWith('/services')) {
    index.value = 2
  } else if (route.startsWith('/profile')) {
    index.value = 5
  } else if (route.startsWith('/panel')) {
    index.value = 5
  }
}

watch(() => route.path, onRouteChanged)
onMounted(() => {
  onRouteChanged(route.path)
})
</script>

<style scoped>

</style>