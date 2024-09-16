import { useSSRContext, defineComponent, mergeProps, ref, watch, unref, isRef } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { d as useRoute, b as useRouter } from './server.mjs';
import { u as useCustomFetch } from './useCustomFetch-7ynZLwB1.mjs';
import { debounce } from 'lodash-es';
import { u as useSearchStore, _ as _sfc_main$3 } from './Search-D4phbKvQ.mjs';
import { F as FilterIcon, A as ArrowDownIcon, _ as _sfc_main$4 } from './FilterPortfolioDrawer-u7UaxJbr.mjs';
import { S as SortIcon, _ as _sfc_main$5 } from './SortPortfolioDrawer-DHqW6qjn.mjs';
import { _ as _sfc_main$6 } from './PortfolioItem-CiqAv46H.mjs';
import InfiniteLoading from 'v3-infinite-loading';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'dayjs';
import 'dayjs/plugin/updateLocale.js';
import 'dayjs/plugin/relativeTime.js';
import 'dayjs/plugin/utc.js';
import 'consola/core';
import 'vue3-toastify';
import './fetch-C_QM8LGj.mjs';
import './SearchIcon-BEnuNJvi.mjs';
import './ArrowUpIcon-dlPStaoQ.mjs';
import './DoneCheckIcon-DygKNuo8.mjs';
import './Rating-DwKpxWvb.mjs';
import './Tick-Cq4twfuY.mjs';
import './nuxt-link-DB89SAcR.mjs';
import './Bookmark-D7YKqeLD.mjs';
import './Drawer-n5iGEtr0.mjs';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "PageHeader",
  __ssrInlineRender: true,
  setup(__props) {
    var _a;
    const route = useRoute();
    const router = useRouter();
    const searchTerm = ref((_a = route.query.term) != null ? _a : "");
    const searchStore = useSearchStore();
    const showFilterDrawer = ref(false);
    const showSortDrawer = ref(false);
    const closeFilterDrawer = () => {
      showFilterDrawer.value = false;
    };
    const chooseService = async (s) => {
      let query = {
        ...route.query
      };
      delete query.page;
      if (s.id == -1) {
        delete query.services;
      } else {
        query.services = s.id.toString();
      }
      searchStore.reset();
      await router.replace({ query });
    };
    const closeSortDrawer = () => {
      showSortDrawer.value = false;
    };
    const chooseSort = async (s) => {
      let query = {
        ...route.query
      };
      delete query.page;
      switch (s.id) {
        case 1:
          delete query.order_by;
          delete query.sort_by;
          break;
        case 2:
          query.order_by = "created_at";
          query.sort_by = "desc";
          break;
        case 3:
          query.order_by = "price";
          query.sort_by = "asc";
          break;
        case 4:
          query.order_by = "price";
          query.sort_by = "desc";
          break;
        case 5:
          query.order_by = "discount";
          query.sort_by = "desc";
          break;
      }
      searchStore.reset();
      await router.replace({ query });
    };
    const doSearch = async () => {
      var _a3;
      var _a2, _b;
      const query = (_a3 = route.query) != null ? _a3 : {};
      if (query.page) {
        delete query.page;
      }
      query.page = searchStore.page.toString();
      const res = await useCustomFetch("/search", {
        method: "GET",
        query
      });
      if (res.data.value) {
        let list = res.data.value ? (_a2 = res.data.value) == null ? void 0 : _a2.data : [];
        if (list.length == 0) {
          searchStore.showInfiniteScroll = false;
          return;
        }
        searchStore.portfolios = [
          ...searchStore.portfolios,
          ...list
        ];
        searchStore.lastPage = (_b = res.data.value) == null ? void 0 : _b.last_page;
        setTimeout(() => {
          searchStore.showInfiniteScroll = true;
        }, 300);
      }
    };
    const doChangeTerm = async () => {
      let query = {
        ...route.query
      };
      if (!searchTerm.value) {
        delete query.term;
      } else {
        query.term = searchTerm.value;
      }
      await router.replace({ query });
      await doSearch();
    };
    const onChangePage = async () => {
      await doSearch();
    };
    const onChangeTermDebounce = debounce(doChangeTerm, 500);
    const onChangePageDebounce = debounce(onChangePage, 500);
    watch(() => route.query, doSearch);
    watch(() => searchTerm.value, onChangeTermDebounce);
    watch(() => searchStore.page, onChangePageDebounce);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full flex flex-col" }, _attrs))}><div class="w-full flex flex-row items-center justify-start">`);
      _push(ssrRenderComponent(_sfc_main$3, {
        modelValue: unref(searchTerm),
        "onUpdate:modelValue": ($event) => isRef(searchTerm) ? searchTerm.value = $event : null
      }, null, _parent));
      _push(`</div><div class="w-full flex flex-row gap-[10px] justify-start items-center mt-2 py-2"><div class="cursor-pointer flex flex-row gap-[4px] justify-start items-center">`);
      _push(ssrRenderComponent(FilterIcon, null, null, _parent));
      _push(`<span>\u0641\u06CC\u0644\u062A\u0631</span>`);
      _push(ssrRenderComponent(ArrowDownIcon, null, null, _parent));
      _push(`</div><div class="cursor-pointer flex flex-row gap-[4px] justify-start items-center">`);
      _push(ssrRenderComponent(SortIcon, null, null, _parent));
      _push(`<span>\u0645\u0631\u062A\u0628 \u0633\u0627\u0632\u06CC</span>`);
      _push(ssrRenderComponent(ArrowDownIcon, null, null, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_sfc_main$4, {
        onClose: closeFilterDrawer,
        onChoose: chooseService,
        "is-open": unref(showFilterDrawer)
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$5, {
        onClose: closeSortDrawer,
        onChoose: chooseSort,
        "is-open": unref(showSortDrawer)
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/search/PageHeader.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PortfolioSearchList",
  __ssrInlineRender: true,
  setup(__props) {
    const searchStore = useSearchStore();
    const paginate = async () => {
      if (searchStore.page <= searchStore.lastPage) {
        searchStore.paginate();
      }
    };
    const paginateDebounce = debounce(paginate, 500);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PortfolioItem = _sfc_main$6;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col justify-start items-start" }, _attrs))}><!--[-->`);
      ssrRenderList(unref(searchStore).portfolios, (p, i) => {
        _push(ssrRenderComponent(_component_PortfolioItem, {
          key: i,
          portfolio: p
        }, null, _parent));
      });
      _push(`<!--]-->`);
      if (unref(searchStore).showInfiniteScroll) {
        _push(ssrRenderComponent(unref(InfiniteLoading), {
          firstload: true,
          class: "mx-auto",
          onInfinite: unref(paginateDebounce)
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/search/PortfolioSearchList.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col px-[23px] py-[10px] h-full w-full" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$2, { class: "mb-4" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/search/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-EAyH5vnn.mjs.map
