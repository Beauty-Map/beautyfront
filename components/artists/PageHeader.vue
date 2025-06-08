<template>
  <div class="w-full flex flex-col">
    <div class="w-full flex flex-row items-center justify-start">
      <SearchInput :placeholder="'جستجو در هنرمندان'" v-model="searchTerm" @doSearch="doSearch" />
    </div>
  </div>
</template>

<script setup lang="ts">
import SearchInput from "~/components/main/SearchInput.vue";
import { useSearchStore } from "~/store/Search";

const route = useRoute();
const router = useRouter();
const searchStore = useSearchStore();

const searchTerm = ref<string>(route.query.term as string ?? '');
const lastQuery = ref({});

const fetchArtists = async () => {
  if (searchStore.loadingArtists) return
  searchStore.loadingArtists = true
  const query: any = { ...route.query };
  if (query.page) delete query.page;

  const locationCookie = useCookie('selectedLocation', { maxAge: 256 * 24 * 60 * 60 });
  if (locationCookie.value?.province) query.province_id = locationCookie.value.province.id;
  if (locationCookie.value?.city) query.city_id = locationCookie.value.city.id;

  query.page = searchStore.page.toString();

  // جلوگیری از اجرای دوباره اگر query تغییر نکرده
  if (JSON.stringify(query) === JSON.stringify(lastQuery.value)) return;
  lastQuery.value = { ...query };

  if (query.page == "1" || query.page == 1) searchStore.resetArtists();

  const { $getRequest } = useNuxtApp();
  let url = '/search/artists?' + new URLSearchParams(query).toString();

  const res = await $getRequest(url, query);
  const list = res.data ?? [];

  if (list.length === 0) {
    searchStore.showInfiniteScroll = false;
    searchStore.loadingArtists = false
    return;
  }

  if (query.page == "1" || query.page == 1) {
    searchStore.artists = list;
  } else {
    searchStore.artists.push(...list);
  }
  searchStore.lastPage = res.last_page ?? 1;
  setTimeout(() => {
    searchStore.showInfiniteScroll = true;
    searchStore.loadingArtists = false
  }, 300);
  searchStore.loadingArtists = false;
  searchStore.loadingArtists = false
};

const doChangeTerm = async () => {
  const query: any = { ...route.query };
  if (!searchTerm.value) {
    delete query.term;
  } else {
    query.term = searchTerm.value;
  }
  query.page = 1;
  searchStore.resetArtists();
  await router.replace({ query });
};

const onChangeTermDebounce = useDebounce(doChangeTerm, 1000);
const onChangePageDebounce = useDebounce(fetchArtists, 300);

watch(() => route.query, fetchArtists);
watch(() => searchTerm.value, onChangeTermDebounce);
watch(() => searchStore.page, onChangePageDebounce);

onMounted(() => {
  searchStore.resetArtists();
  fetchArtists();
});
</script>

<style scoped></style>
