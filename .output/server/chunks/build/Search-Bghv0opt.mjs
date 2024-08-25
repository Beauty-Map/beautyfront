import { debounce } from 'lodash-es';
import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { S as SearchIcon } from './SearchIcon-B3Vs2PxK.mjs';
import { o as defineStore } from './server.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SearchInput",
  __ssrInlineRender: true,
  props: {
    modelValue: {
      type: String,
      default: false
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const emits = __emit;
    const onInput = (e) => {
      var _a;
      emits("update:modelValue", (_a = e.target) == null ? void 0 : _a.value);
    };
    debounce(onInput, 500);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-row relative w-full gap-2text-pink-500 rounded border border-solid border-zinc-500 border-opacity-70" }, _attrs))}><input${ssrRenderAttr("value", __props.modelValue)} type="search" placeholder="\u062C\u0633\u062A\u062C\u0648 \u062F\u0631 \u0628\u06CC\u0648\u062A\u06CC \u0645\u067E" class="search-input rounded w-full py-2 pr-8 pl-2.5 text-xs font-medium text-right outline-none focus:outline-none">`);
      _push(ssrRenderComponent(SearchIcon, { class: "absolute top-[10px] right-[8px]" }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/main/SearchInput.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const useSearchStore = defineStore("search", {
  state: () => ({
    portfolios: [],
    page: 1,
    lastPage: 1,
    showInfiniteScroll: false,
    lat: null,
    lng: null
  }),
  getters: {
    getPortfolios: (state) => state.portfolios,
    getPage: (state) => state.page,
    getLastPage: (state) => state.lastPage,
    getShowInfiniteScroll: (state) => state.showInfiniteScroll,
    getUserCurrentLocation: (state) => ({ lat: state.lat, lng: state.lng })
  },
  actions: {
    paginate() {
      this.page++;
    },
    reset() {
      this.showInfiniteScroll = false;
      this.page = 1;
      this.lastPage = 1;
      this.portfolios = [];
    },
    setUserCurrentLocation(lat, lng) {
      this.lat = lat;
      this.lng = lng;
    }
  }
});

export { _sfc_main as _, useSearchStore as u };
//# sourceMappingURL=Search-Bghv0opt.mjs.map
