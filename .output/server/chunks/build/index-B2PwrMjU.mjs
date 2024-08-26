import { _ as _sfc_main$3 } from './PortfolioItem-D6Czm3YM.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-B3sIHW1Y.mjs';
import { defineComponent, ref, mergeProps, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { a as useRouter } from './server.mjs';
import { debounce } from 'lodash-es';
import { u as useCustomFetch } from './useCustomFetch-CwVU0VgL.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { F as FilterIcon, A as ArrowDownIcon, _ as _sfc_main$2 } from './FilterPortfolioDrawer-B3ku8TRs.mjs';
import { B as BackIcon } from './BackIcon-TUxxOOBv.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import InfiniteLoading from 'v3-infinite-loading';
import './Rating-QcbC2A5D.mjs';
import './Tick-ioPHPXqw.mjs';
import './Bookmark-BwyrozWf.mjs';
import './Drawer-O-pqrFqT.mjs';
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
import './fetch-CSNts9RR.mjs';
import './ArrowUpIcon-DvDMNDTA.mjs';
import './DoneCheckIcon-7CP9QAgP.mjs';

const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "45",
    height: "45",
    viewBox: "0 0 45 45",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path fill-rule="evenodd" clip-rule="evenodd" d="M22.5 0C10.0731 0 0 10.0731 0 22.5C0 34.9269 10.0731 45 22.5 45C34.9269 45 45 34.9269 45 22.5C45 10.0731 34.9269 0 22.5 0ZM24.2308 15.5769C24.2308 15.1179 24.0484 14.6777 23.7238 14.3531C23.3993 14.0285 22.959 13.8462 22.5 13.8462C22.041 13.8462 21.6007 14.0285 21.2762 14.3531C20.9516 14.6777 20.7692 15.1179 20.7692 15.5769V20.7692H15.5769C15.1179 20.7692 14.6777 20.9516 14.3531 21.2762C14.0285 21.6007 13.8462 22.041 13.8462 22.5C13.8462 22.959 14.0285 23.3993 14.3531 23.7238C14.6777 24.0484 15.1179 24.2308 15.5769 24.2308H20.7692V29.4231C20.7692 29.8821 20.9516 30.3223 21.2762 30.6469C21.6007 30.9715 22.041 31.1538 22.5 31.1538C22.959 31.1538 23.3993 30.9715 23.7238 30.6469C24.0484 30.3223 24.2308 29.8821 24.2308 29.4231V24.2308H29.4231C29.8821 24.2308 30.3223 24.0484 30.6469 23.7238C30.9715 23.3993 31.1538 22.959 31.1538 22.5C31.1538 22.041 30.9715 21.6007 30.6469 21.2762C30.3223 20.9516 29.8821 20.7692 29.4231 20.7692H24.2308V15.5769Z" fill="#FF3CA0"></path></svg>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/PlusButtonIcon.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const PlusButtonIcon = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const portfolios = ref([]);
    const lastPage = ref(1);
    const page = ref(1);
    const showFilterDrawer = ref(false);
    const showInfiniteScroll = ref(false);
    const goBack = () => {
      router.replace("/panel/artist");
    };
    const closeFilterDrawer = () => {
      showFilterDrawer.value = false;
    };
    const chooseService = (s) => {
      console.log(s, "s");
    };
    const paginate = async () => {
      if (page <= lastPage) {
        page.value++;
        await getPortfolios();
      }
    };
    const paginateDebounce = debounce(paginate, 500);
    const getPortfolios = async () => {
      const res = await useCustomFetch(`/own/portfolios?limit=10&page=${page.value}`, {
        method: "get"
      });
      if (res.data.value) {
        let list = res.data.value.data;
        if (list.length == 0) {
          showInfiniteScroll.value = false;
          return;
        }
        portfolios.value = [
          ...portfolios.value,
          ...list
        ];
        lastPage.value = res.data.value.last_page;
        setTimeout(() => {
          showInfiniteScroll.value = true;
        }, 300);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PortfolioItem = _sfc_main$3;
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-[20px] w-full flex flex-col items-start justify-start pb-[90px]" }, _attrs))}><div class="w-full relative flex flex-row items-center justify-center py-[23px] border-b border-b-[#A9A7A7]"><div class="font-semibold text-[16px] text-[#141414] leading-[24px]">\u0646\u0645\u0648\u0646\u0647 \u06A9\u0627\u0631</div>`);
      _push(ssrRenderComponent(BackIcon, {
        onClick: goBack,
        class: "absolute left-[30px]"
      }, null, _parent));
      _push(`</div><div class="w-full flex flex-col my-[8px] px-[15px]"><div class="w-full flex flex-row gap-[10px] justify-start items-center"><div class="cursor-pointer flex flex-row gap-[4px] justify-start items-center">`);
      _push(ssrRenderComponent(FilterIcon, null, null, _parent));
      _push(`<span>\u0641\u06CC\u0644\u062A\u0631</span>`);
      _push(ssrRenderComponent(ArrowDownIcon, null, null, _parent));
      _push(`</div></div><div class="mt-[8px] w-full flex flex-col justify-start items-start"><!--[-->`);
      ssrRenderList(unref(portfolios), (p, i) => {
        _push(ssrRenderComponent(_component_PortfolioItem, {
          key: i,
          portfolio: p,
          "is-panel": true
        }, null, _parent));
      });
      _push(`<!--]-->`);
      if (unref(showInfiniteScroll)) {
        _push(ssrRenderComponent(unref(InfiniteLoading), {
          firstload: true,
          class: "mx-auto",
          onInfinite: unref(paginateDebounce)
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="fixed pt-[10px] left-0 right-0 bottom-0 pb-[40px] px-[30px] flex flex-col justify-start items-start bg-white z-[9999]">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/panel/artist/portfolios/create",
        class: "cursor-pointer flex flex-row justify-start items-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(PlusButtonIcon, null, null, _parent2, _scopeId));
            _push2(`<div class="px-[8px] py-[3px] rounded-full bg-[#E7FAF4] text-center mr-[4px] text-[#133C3E] font-medium text-[12px] leading-[18px]"${_scopeId}>\u0646\u0645\u0648\u0646\u0647 \u06A9\u0627\u0631 \u062C\u062F\u06CC\u062F</div>`);
          } else {
            return [
              createVNode(PlusButtonIcon),
              createVNode("div", { class: "px-[8px] py-[3px] rounded-full bg-[#E7FAF4] text-center mr-[4px] text-[#133C3E] font-medium text-[12px] leading-[18px]" }, "\u0646\u0645\u0648\u0646\u0647 \u06A9\u0627\u0631 \u062C\u062F\u06CC\u062F")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_sfc_main$2, {
        onClose: closeFilterDrawer,
        onChoose: chooseService,
        "is-open": unref(showFilterDrawer)
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/panel/artist/portfolios/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-B2PwrMjU.mjs.map
