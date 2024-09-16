import { useSSRContext, defineComponent, ref, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { _ as _sfc_main$5 } from './ArtistItem-CYjzPdHi.mjs';
import { b as useRouter, _ as _export_sfc } from './server.mjs';
import { u as useCustomFetch } from './useCustomFetch-7ynZLwB1.mjs';
import { B as BackIcon } from './BackIcon-nFKai1cn.mjs';
import { _ as _sfc_main$6 } from './PortfolioItem-CiqAv46H.mjs';
import './Rating-DwKpxWvb.mjs';
import './nuxt-link-DB89SAcR.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import './dayjs-DjHdTGjd.mjs';
import 'dayjs';
import './Bookmark-D7YKqeLD.mjs';
import './BlueTick-DL3FrWLg.mjs';
import 'dayjs/plugin/localizedFormat.js';
import 'jalaliday';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'dayjs/plugin/updateLocale.js';
import 'dayjs/plugin/relativeTime.js';
import 'dayjs/plugin/utc.js';
import 'consola/core';
import 'vue3-toastify';
import './fetch-C_QM8LGj.mjs';
import './Tick-Cq4twfuY.mjs';
import './Drawer-n5iGEtr0.mjs';

const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "FavouriteArtistList",
  __ssrInlineRender: true,
  props: {
    artists: {
      type: Array,
      default: () => [],
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full px-[25px] py-[25px] rounded-[8px]" }, _attrs))}><!--[-->`);
      ssrRenderList(__props.artists, (a, i) => {
        _push(ssrRenderComponent(_sfc_main$5, {
          key: i,
          artist: a
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/favourite/FavouriteArtistList.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full text-center text-[#141414] text-base font-medium" }, _attrs))}> \u0639\u0644\u0627\u0642\u0647 \u0645\u0646\u062F\u06CC \u0647\u0627 </div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/favourite/Header.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Header = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "TabHeader",
  __ssrInlineRender: true,
  emits: ["select"],
  setup(__props, { emit: __emit }) {
    const index = ref(1);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full flex flex-row justify-evenly items-center px-[17px]" }, _attrs))}><div class="${ssrRenderClass([[unref(index) == 1 ? " border-b-[#1BD4CA]" : "border-b-white"], "text-center text-[#141414] font-medium text-[13px] transition-all duration-500 leading-[20px] px-[15px] py-[7px] border-b-[4px]"])}"> \u0646\u0645\u0648\u0646\u0647 \u06A9\u0627\u0631 </div><div class="${ssrRenderClass([[unref(index) == 2 ? "border-b-[#1BD4CA]" : "border-b-white"], "text-center text-[#141414] font-medium text-[13px] transition-all duration-500 leading-[20px] px-[15px] py-[7px] border-b-[4px]"])}"> \u0647\u0646\u0631\u0645\u0646\u062F\u0627\u0646 </div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/favourite/TabHeader.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "FavouritePortfolioList",
  __ssrInlineRender: true,
  props: {
    portfolios: {
      type: Array,
      default: () => [],
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PortfolioItem = _sfc_main$6;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full px-[25px] py-[25px] rounded-[8px]" }, _attrs))}><!--[-->`);
      ssrRenderList(__props.portfolios, (p, i) => {
        _push(ssrRenderComponent(_component_PortfolioItem, {
          key: i,
          portfolio: p
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/favourite/FavouritePortfolioList.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const portfolios = ref([]);
    const artists = ref([]);
    const selectedTab = ref(1);
    const goBack = () => {
      router.back();
    };
    const getPortfolios = async () => {
      var _a;
      const res = await useCustomFetch("/api/portfolios", {
        method: "GET"
      });
      if (res.data.value) {
        portfolios.value = (_a = res.data.value) == null ? void 0 : _a.data;
      }
    };
    const getArtists = async () => {
      var _a;
      const res = await useCustomFetch("/api/artists", {
        method: "GET"
      });
      if (res.data.value) {
        artists.value = (_a = res.data.value) == null ? void 0 : _a.data;
      }
    };
    const selectTab = (i) => {
      selectedTab.value = i;
    };
    getPortfolios();
    getArtists();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FavouriteArtistList = _sfc_main$4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col overflow-y-scroll w-full h-full bg-white" }, _attrs))}><div class="flex flex-col justify-start items-start w-full sticky top-0 border-b border-b-[#A9A7A7]"><div class="w-full flex flex-row items-center justify-end pt-[23px] pl-[3px]">`);
      _push(ssrRenderComponent(Header, null, null, _parent));
      _push(ssrRenderComponent(BackIcon, { onClick: goBack }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_sfc_main$2, { onSelect: selectTab }, null, _parent));
      _push(`</div>`);
      if (unref(selectedTab) == 1) {
        _push(ssrRenderComponent(_sfc_main$1, { portfolios: unref(portfolios) }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(selectedTab) == 2) {
        _push(ssrRenderComponent(_component_FavouriteArtistList, { artists: unref(artists) }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/favourites/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-LvEMyGhN.mjs.map
