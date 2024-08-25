import { _ as _sfc_main$4 } from './Modal-sAgLgThS.mjs';
import { useSSRContext, defineComponent, ref, computed, mergeProps, unref, withCtx, createVNode, toDisplayString, resolveDirective, watch } from 'vue';
import { a as useRouter, e as useSanctumUser, f as useNuxtApp } from './server.mjs';
import { u as useCustomFetch } from './useCustomFetch-CwVU0VgL.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrGetDirectiveProps, ssrRenderAttr } from 'vue/server-renderer';
import { B as BackIcon } from './BackIcon-TUxxOOBv.mjs';
import { A as AddMoneyIcon, D as DollarIcon } from './AddMoneyIcon-DPec0OZg.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { M as MainActionButton } from './MainActionButton-CrIh6sno.mjs';
import { debounce } from 'lodash-es';
import InfiniteLoading from 'v3-infinite-loading';
import { _ as _sfc_main$5 } from './Rating-QcbC2A5D.mjs';
import { _ as _sfc_main$6 } from './Tick-ioPHPXqw.mjs';
import './CloseIcon-DvH18xbo.mjs';
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

const _sfc_main$3 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M9.54998 18.0001L3.84998 12.3001L5.27498 10.8751L9.54998 15.1501L18.725 5.9751L20.15 7.4001L9.54998 18.0001Z" fill="#141414"></path></svg>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/DoneBlackCheckIcon.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const DoneBlackCheckIcon = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "PortfolioLadderingItem",
  __ssrInlineRender: true,
  props: {
    portfolio: {
      type: Object,
      required: true
    },
    selected: {
      type: Boolean,
      required: false
    }
  },
  emits: ["click"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    useRouter();
    useSanctumUser();
    const getThumbnail = () => {
      if (props.portfolio.images.length > 0) {
        return props.portfolio.images[0];
      }
      return "/images/artist/1.jpg";
    };
    const calcDiscountPercent = (p, d) => {
      return Math.ceil((p - d) / p * 100) + "%";
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Rating = _sfc_main$5;
      const _component_Tick = _sfc_main$6;
      const _directive_format_price = resolveDirective("format-price");
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: [__props.selected ? "opacity-[1]" : "opacity-[.7]", "w-full flex flex-row gap-[20px] rounded-[8px] px-[10px] py-[10px] shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] mb-[25px]"]
      }, _attrs))}><div class="w-full flex flex-col relative"><div class="w-full flex flex-row justify-start items-start">`);
      _push(ssrRenderComponent(_component_Rating, {
        modelValue: __props.portfolio.rating,
        "onUpdate:modelValue": ($event) => __props.portfolio.rating = $event
      }, null, _parent));
      _push(ssrRenderComponent(_component_Tick, null, null, _parent));
      _push(`</div><div class="w-full flex flex-row justify-start items-start"><h1 class="text-right font-medium text-[18px] leading-[28px] text-[#141414]">${ssrInterpolate(__props.portfolio.title)} - ${ssrInterpolate(__props.portfolio.id)}</h1></div>`);
      if (__props.portfolio.discount_price > 0) {
        _push(`<div class="w-full flex flex-col justify-start items-start"><div class="text-[#ED2C25] text-[12px] leading-[18px] font-medium line-through"><span${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_format_price))}>${ssrInterpolate(__props.portfolio.price)}</span></div><div class="text-[#133C3E] text-[12px] leading-[18px] font-medium"><span${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_format_price))}>${ssrInterpolate(__props.portfolio.discount_price)}</span><span class="mr-[22px] px-[12px] py-[3px] bg-[#FFEA2E61] rounded-[20px]">${ssrInterpolate(calcDiscountPercent(__props.portfolio.price, __props.portfolio.discount_price))}</span></div></div>`);
      } else if (__props.portfolio.price > 0) {
        _push(`<div class="w-full flex flex-col justify-start items-start"><div class="text-[#133C3E] text-[12px] leading-[18px] font-medium"><span${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_format_price))}>${ssrInterpolate(__props.portfolio.price)}</span></div></div>`);
      } else {
        _push(`<div class="w-full flex flex-col justify-start items-start"><div class="text-[#133C3E] text-[12px] leading-[18px] font-medium"> \u0631\u0627\u06CC\u06AF\u0627\u0646 </div></div>`);
      }
      _push(`<div class="flex flex-row items-center justify-start absolute right-0 bottom-0 z-[9999]"><button class="cursor-pointer bg-[#2920D9] rounded-[20px] font-medium text-center text-[12px] flex justify-center items-center h-[25px] leading-[18px] py-[7px] px-[12px] text-white min-w-[88px]"> \u0646\u0631\u062F\u0628\u0627\u0646 </button></div></div><div class="w-full flex flex-col relative rounded-[8px] border border-[#5CB3FF] shadow-[2px_3px_6.5px_0px_#00000040]"><img${ssrRenderAttr("src", getThumbnail())}${ssrRenderAttr("alt", __props.portfolio.title)} class="w-full h-full min-h-[125px] min-w-[125px] rounded-[8px]"></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/portfolio/PortfolioLadderingItem.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ChooseLadderingPortfoliosDrawer",
  __ssrInlineRender: true,
  props: {
    isOpen: {
      type: Boolean,
      required: true
    },
    title: {
      type: String,
      default: "\u0641\u06CC\u0644\u062A\u0631"
    }
  },
  emits: ["close", "choose"],
  setup(__props, { emit: __emit }) {
    const emits = __emit;
    const props = __props;
    useSanctumUser();
    const portfolios = ref([]);
    const selectedItems = ref([]);
    const showInfiniteScroll = ref(false);
    const lastPage = ref(1);
    const page = ref(1);
    const paginate = async () => {
      if (page <= lastPage) {
        page.value++;
        await getPortfolios();
      }
    };
    const paginateDebounce = debounce(paginate, 500);
    const getPortfolios = async () => {
      const res = await useCustomFetch(`/own/portfolios/laddering?limit=10&page=${page.value}`, {
        method: "GET"
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
        console.log(lastPage.value, "lastPage");
        console.log(page.value, "lastPage");
        setTimeout(() => {
          showInfiniteScroll.value = true;
        }, 300);
      }
    };
    const selectItem = (id) => {
      let index = findIndex(id);
      if (index > -1) {
        selectedItems.value.splice(index, 1);
      } else {
        selectedItems.value.push(id);
      }
    };
    const isItemSelected = (id) => {
      return findIndex(id) > -1;
    };
    const findIndex = (id) => {
      return selectedItems.value.indexOf(id);
    };
    const goBack = () => {
      close();
    };
    const close = () => {
      portfolios.value = [];
      emits("close");
    };
    watch(() => props.isOpen, () => {
      if (props.isOpen) {
        getPortfolios();
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["flex flex-col fixed md:hide top-0 bottom-0 w-full duration-700 ease-in-out bg-white z-[999999999]", [__props.isOpen ? "left-0" : "left-[-100%]"]]
      }, _attrs))}><div class="relative h-screen flex flex-col justify-start items-center w-full"><div class="border-b border-b-[#A9A7A7] relative w-full flex flex-row items-center justify-center py-[23px]"><div class="font-semibold text-[16px] text-[#141414] leading-[24px]">\u0646\u0631\u062F\u0628\u0627\u0646</div>`);
      _push(ssrRenderComponent(BackIcon, {
        onClick: goBack,
        class: "absolute left-[10px]"
      }, null, _parent));
      _push(`</div><div class="overflow-y-scroll relative px-[30px] pt-[30px] pb-[60px] h-full w-full flex flex-col gap-[10px] items-start justify-start text-right font-medium text-[#141414] text-[14px] leading-[21px]"><!--[-->`);
      ssrRenderList(unref(portfolios), (p, i) => {
        _push(ssrRenderComponent(_sfc_main$2, {
          key: i,
          portfolio: p,
          onClick: ($event) => selectItem(p.id),
          selected: isItemSelected(p.id)
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
      _push(`</div><div class="absolute z-[9999999999] bottom-0 pb-[30px] right-0 left-0 bg-white px-[20px]"><button class="cursor-pointer w-full font-semibold text-center text-[14px] leading-[22px] flex justify-center items-center text-white z-[999999] bg-[#FF3CA0] mt-[10px] rounded-full h-[44px]"> \u062A\u0627\u06CC\u06CC\u062F </button></div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/drawer/ChooseLadderingPortfoliosDrawer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const app = useNuxtApp();
    const router = useRouter();
    const user = useSanctumUser();
    const showAcceptModal = ref(false);
    const showLadderSomeDrawer = ref(false);
    const selectedItem = ref(null);
    const items = ref([
      {
        id: 1,
        title: "\u0646\u0631\u062F\u0628\u0627\u0646 \u06AF\u0631\u0648\u0647\u06CC \u0646\u0645\u0648\u0646\u0647 \u06A9\u0627\u0631\u0647\u0627"
      },
      {
        id: 2,
        title: "\u0646\u0631\u062F\u0628\u0627\u0646 \u0627\u0646\u0641\u0631\u0627\u062F\u06CC \u0646\u0645\u0648\u0646\u0647 \u06A9\u0627\u0631\u0647\u0627"
      },
      {
        id: 3,
        title: "\u0646\u0631\u062F\u0628\u0627\u0646 \u067E\u0631\u0648\u0641\u0627\u06CC\u0644"
      }
    ]);
    const selectedItems = ref([]);
    const isItemSelected = (item) => {
      return selectedItem.value && selectedItem.value.id == item.id;
    };
    const goBack = () => {
      router.back();
    };
    const goToWalletPage = () => {
      router.push("/panel/artist/wallet");
    };
    const doLadder = () => {
      if (!selectedItem.value) {
        app.$toast.error("\u0644\u0637\u0641\u0627 \u06CC\u06A9 \u06AF\u0632\u06CC\u0646\u0647 \u0631\u0627 \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F", { rtl: true });
        return;
      }
      if (selectedItem.value.id != 2) {
        openAcceptModal();
      } else {
        openDoLadderSomeDrawer();
      }
    };
    const choosePortfolios = (portfolios = []) => {
      selectedItems.value = portfolios;
      openAcceptModal();
    };
    const openAcceptModal = () => {
      showAcceptModal.value = true;
    };
    const closeAcceptModal = () => {
      var _a;
      showAcceptModal.value = false;
      if (((_a = selectedItem.value) == null ? void 0 : _a.id) == 2) {
        selectedItems.value = [];
        closeDoLadderSomeDrawer();
      }
    };
    const doAccept = () => {
      var _a;
      switch ((_a = selectedItem.value) == null ? void 0 : _a.id) {
        case 1:
          doLadderAll();
          break;
        case 2:
          doLadderSome();
          break;
        case 3:
          doLadderProfile();
          break;
      }
    };
    const openDoLadderSomeDrawer = () => {
      showLadderSomeDrawer.value = true;
    };
    const closeDoLadderSomeDrawer = () => {
      showLadderSomeDrawer.value = false;
    };
    const doLadderAll = async () => {
      const data = {
        type: "all_portfolios",
        data: []
      };
      const res = await useCustomFetch("/ladder", {
        method: "POST",
        body: data
      });
      if (res.data.value) {
        app.$toast.success("\u0628\u0627 \u0645\u0648\u0641\u0642\u06CC\u062A \u0627\u0646\u062C\u0627\u0645 \u0634\u062F", { rtl: true });
        closeAcceptModal();
        router.back();
      }
      if (res.error.value) {
        app.$toast.error("\u0645\u062A\u0627\u0633\u0641\u0627\u0646\u0647 \u062E\u0637\u0627\u06CC\u06CC \u0631\u062E \u062F\u0627\u062F\u0647 \u0627\u0633\u062A", { rtl: true });
      }
    };
    const doLadderSome = async () => {
      const data = {
        type: "some_portfolios",
        data: selectedItems.value
      };
      const res = await useCustomFetch("/ladder", {
        method: "POST",
        body: data
      });
      if (res.data.value) {
        app.$toast.success("\u0628\u0627 \u0645\u0648\u0641\u0642\u06CC\u062A \u0627\u0646\u062C\u0627\u0645 \u0634\u062F", { rtl: true });
        closeAcceptModal();
        router.back();
      }
      if (res.error.value) {
        app.$toast.error("\u0645\u062A\u0627\u0633\u0641\u0627\u0646\u0647 \u062E\u0637\u0627\u06CC\u06CC \u0631\u062E \u062F\u0627\u062F\u0647 \u0627\u0633\u062A", { rtl: true });
      }
    };
    const doLadderProfile = async () => {
      const data = {
        type: "profile",
        data: []
      };
      const res = await useCustomFetch("/ladder", {
        method: "POST",
        body: data
      });
      if (res.data.value) {
        app.$toast.success("\u0628\u0627 \u0645\u0648\u0641\u0642\u06CC\u062A \u0627\u0646\u062C\u0627\u0645 \u0634\u062F", { rtl: true });
        closeAcceptModal();
        router.back();
      }
      if (res.error.value) {
        app.$toast.error("\u0645\u062A\u0627\u0633\u0641\u0627\u0646\u0647 \u062E\u0637\u0627\u06CC\u06CC \u0631\u062E \u062F\u0627\u062F\u0647 \u0627\u0633\u062A", { rtl: true });
      }
    };
    const requiredCoins = computed(() => {
      if (!selectedItem.value)
        return 0;
      if (selectedItem.value == 1) {
        return 1e3;
      }
      if (selectedItem.value == 2) {
        return 200;
      }
      return 100;
    });
    const ladderingText = computed(() => {
      if (!selectedItem.value)
        return "";
      if (selectedItem.value.id == 1) {
        return "\u062A\u0639\u062F\u0627\u062F 50 \u0646\u0645\u0648\u0646\u0647 \u06A9\u0627\u0631 \u0634\u0645\u0627 \u0646\u0631\u062F\u0628\u0627\u0646 \u0645\u06CC\u0634\u0648\u062F. \u0622\u06CC\u0627 \u062A\u0627\u06CC\u06CC\u062F \u0645\u06CC\u06A9\u0646\u06CC\u062F \u061F";
      }
      if (selectedItem.value.id == 2) {
        return `\u062A\u0639\u062F\u0627\u062F ${selectedItems.value.length} \u0646\u0645\u0648\u0646\u0647 \u06A9\u0627\u0631 \u0634\u0645\u0627 \u0646\u0631\u062F\u0628\u0627\u0646 \u0645\u06CC\u0634\u0648\u062F. \u0622\u06CC\u0627 \u062A\u0627\u06CC\u06CC\u062F \u0645\u06CC\u06A9\u0646\u06CC\u062F \u061F`;
      }
      return "\u067E\u0631\u0648\u0641\u0627\u06CC\u0644 \u0634\u0645\u0627 \u0646\u0631\u062F\u0628\u0627\u0646 \u0645\u06CC\u0634\u0648\u062F. \u0622\u06CC\u0627 \u062A\u0627\u06CC\u06CC\u062F \u0645\u06CC\u06A9\u0646\u06CC\u062F \u061F";
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Modal = _sfc_main$4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative w-full h-screen flex flex-col items-start justify-start" }, _attrs))}><div class="relative w-full flex flex-row items-center justify-center py-[23px]"><div class="absolute right-[10px] cursor-pointer px-[8px] h-[37px] flex flex-row justify-between items-center border border-[#A9A7A7] rounded-[20px] bg-white">`);
      _push(ssrRenderComponent(AddMoneyIcon, null, null, _parent));
      _push(`<span class="font-medium text-[18px] leading-[28px] mx-[8px]">${ssrInterpolate(unref(user).coins)}</span>`);
      _push(ssrRenderComponent(DollarIcon, null, null, _parent));
      _push(`</div><div class="font-semibold text-[16px] text-[#141414] leading-[24px]">\u0646\u0631\u062F\u0628\u0627\u0646</div>`);
      _push(ssrRenderComponent(BackIcon, {
        onClick: goBack,
        class: "absolute left-[10px]"
      }, null, _parent));
      _push(`</div><div class="flex flex-col justify-start items-start w-full px-[20px] py-[20px]"><div class="text-center w-full font-medium text-[12px] text-black leading-[18px] flex flex-col justify-start items-center gap-[20px]"><p> \u0628\u0627 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u0642\u0627\u0628\u0644\u06CC\u062A \u0646\u0631\u062F\u0628\u0627\u0646\u060C\u0634\u0645\u0627 \u0645\u06CC\u062A\u0648\u0627\u0646\u06CC\u062F \u0646\u0645\u0648\u0646\u0647 \u06A9\u0627\u0631\u0647\u0627\u06CC \u062E\u0648\u062F \u0631\u0627 \u0628\u0647 \u0635\u062F\u0631 \u062C\u062F\u0648\u0644 \u0622\u06AF\u0647\u06CC \u0647\u0627 \u062F\u0631 \u0622\u0646 \u062F\u0633\u062A\u0647 \u0628\u0646\u062F\u06CC \u0627\u0646\u062A\u0642\u0627\u0644 \u062F\u0647\u06CC\u062F. </p><p> \u0628\u0627 \u0627\u0646\u062A\u062E\u0627\u0628 \u06AF\u0632\u06CC\u0646\u0647 \u0646\u0631\u062F\u0628\u0627\u0646 \u06AF\u0631\u0648\u0647\u06CC \u0647\u0645\u0647 \u0646\u0645\u0648\u0646\u0647 \u06A9\u0627\u0631\u0647\u0627\u06CC \u0634\u0645\u0627 \u0646\u0631\u062F\u0628\u0627\u0646 \u0645\u06CC\u0634\u0648\u062F. \u0627\u06AF\u0631 \u0642\u0635\u062F \u0646\u0631\u062F\u0628\u0627\u0646 \u06A9\u0631\u062F\u0646 \u06CC\u06A9 \u06CC\u0627 \u0686\u0646\u062F \u0645\u0648\u0631\u062F \u0627\u0632 \u0646\u0645\u0648\u0646\u0647 \u06A9\u0627\u0631\u0647\u0627\u06CC \u062E\u0648\u062F \u0631\u0627 \u062F\u0627\u0631\u06CC\u062F \u0645\u06CC\u062A\u0648\u0627\u0646\u06CC\u062F \u0627\u0632 \u06AF\u0632\u06CC\u0646\u0647 \u0646\u0631\u062F\u0628\u0627\u0646 \u0627\u0646\u0641\u0631\u0627\u062F\u06CC \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u06A9\u0646\u06CC\u062F. </p><p> \u0628\u0631\u0627\u06CC \u0646\u0631\u062F\u0628\u0627\u0646 \u06A9\u0631\u062F\u0646 \u067E\u0631\u0648\u0641\u0627\u06CC\u0644 \u062E\u0648\u062F \u062F\u0631 \u0628\u062E\u0634 \u0647\u0646\u0631\u0645\u0646\u062F\u0627\u0646 \u0645\u06CC \u062A\u0648\u0627\u0646\u06CC\u062F \u0627\u0632 \u06AF\u0632\u06CC\u0646\u0647 \u0646\u0631\u062F\u0628\u0627\u0646 \u067E\u0631\u0648\u0641\u0627\u06CC\u0644 \u062F\u0631 \u0628\u062E\u0634 \u0647\u0646\u0631\u0645\u0646\u062F\u0627\u0646 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u06A9\u0646\u06CC\u062F. </p></div></div><div class="text-center w-full font-bold text-[16px] text-[#085EC2] leading-[25px] mt-[20px]"> \u06CC\u06A9\u06CC \u0627\u0632 \u06AF\u0632\u06CC\u0646\u0647 \u0647\u0627\u06CC \u0632\u06CC\u0631 \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F </div><div class="flex flex-col justify-start items-start text-center w-full font-bold text-[15px] text-[#141414] leading-[23px] mt-[30px] px-[20px] gap-y-[20px]"><!--[-->`);
      ssrRenderList(unref(items), (n, i) => {
        _push(`<div class="${ssrRenderClass([[isItemSelected(n) ? "" : ""], "cursor-pointer w-full flex flex-row justify-between items-center"])}"><span>${ssrInterpolate(n.title)}</span>`);
        if (isItemSelected(n)) {
          _push(ssrRenderComponent(DoneBlackCheckIcon, null, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(MainActionButton, {
        onClick: doLadder,
        class: "absolute bottom-[30px] left-[20px] right-[20px] w-auto"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-white text-center text-[20px] leading-[30px] py-[11px]"${_scopeId}>\u0646\u0631\u062F\u0628\u0627\u0646 \u06A9\u0646</div>`);
          } else {
            return [
              createVNode("div", { class: "text-white text-center text-[20px] leading-[30px] py-[11px]" }, "\u0646\u0631\u062F\u0628\u0627\u0646 \u06A9\u0646")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Modal, {
        "show-close": false,
        open: unref(showAcceptModal)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full h-full flex flex-col justify-start items-start"${_scopeId}><div class="w-full gap-x-[40px] flex flex-row justify-between items-center"${_scopeId}><span class="text-[#133C3E] font-medium text-[18px] leading-[27px] text-right"${_scopeId}>\u0645\u0648\u062C\u0648\u062F\u06CC \u0633\u06A9\u0647</span><div class="w-[112px] cursor-pointer px-[8px] h-[37px] flex flex-row justify-between items-center border border-[#A9A7A7] rounded-[20px] bg-white"${_scopeId}>`);
            _push2(ssrRenderComponent(AddMoneyIcon, null, null, _parent2, _scopeId));
            _push2(`<span class="font-medium text-[18px] leading-[28px] mx-[8px]"${_scopeId}>${ssrInterpolate(unref(user).coins)}</span>`);
            _push2(ssrRenderComponent(DollarIcon, null, null, _parent2, _scopeId));
            _push2(`</div></div><div class="w-full gap-x-[40px] flex flex-row justify-between items-center mt-[18px]"${_scopeId}><span class="text-[#133C3E] font-medium text-[18px] leading-[27px] text-right"${_scopeId}>\u0633\u06A9\u0647 \u0645\u0648\u0631\u062F \u0646\u06CC\u0627\u0632</span><div class="w-[112px] cursor-pointer px-[8px] h-[37px] flex flex-row justify-between items-center border border-[#A9A7A7] rounded-[20px] bg-white"${_scopeId}><div${_scopeId}></div><span class="font-bold text-[18px] leading-[28px] mx-[8px]"${_scopeId}>${ssrInterpolate(unref(requiredCoins))}</span>`);
            _push2(ssrRenderComponent(DollarIcon, null, null, _parent2, _scopeId));
            _push2(`</div></div><div class="w-full gap-x-[40px] flex flex-row justify-between items-center mt-[18px]"${_scopeId}><span class="text-black font-medium text-[12px] leading-[17px] text-right"${_scopeId}>${ssrInterpolate(unref(ladderingText))}</span></div><div class="w-full gap-x-[20px] flex flex-row justify-end items-center mt-[18px]"${_scopeId}><button class="text-[#133C3E] text-center font-normal text-[15px] leading-[18px]"${_scopeId}>\u062A\u0627\u06CC\u06CC\u062F \u0646\u0647\u0627\u06CC\u06CC</button><button class="text-[#133C3E] text-center font-normal text-[15px] leading-[18px]"${_scopeId}>\u0628\u0633\u062A\u0646</button></div></div>`);
          } else {
            return [
              createVNode("div", { class: "w-full h-full flex flex-col justify-start items-start" }, [
                createVNode("div", { class: "w-full gap-x-[40px] flex flex-row justify-between items-center" }, [
                  createVNode("span", { class: "text-[#133C3E] font-medium text-[18px] leading-[27px] text-right" }, "\u0645\u0648\u062C\u0648\u062F\u06CC \u0633\u06A9\u0647"),
                  createVNode("div", {
                    onClick: goToWalletPage,
                    class: "w-[112px] cursor-pointer px-[8px] h-[37px] flex flex-row justify-between items-center border border-[#A9A7A7] rounded-[20px] bg-white"
                  }, [
                    createVNode(AddMoneyIcon),
                    createVNode("span", { class: "font-medium text-[18px] leading-[28px] mx-[8px]" }, toDisplayString(unref(user).coins), 1),
                    createVNode(DollarIcon)
                  ])
                ]),
                createVNode("div", { class: "w-full gap-x-[40px] flex flex-row justify-between items-center mt-[18px]" }, [
                  createVNode("span", { class: "text-[#133C3E] font-medium text-[18px] leading-[27px] text-right" }, "\u0633\u06A9\u0647 \u0645\u0648\u0631\u062F \u0646\u06CC\u0627\u0632"),
                  createVNode("div", { class: "w-[112px] cursor-pointer px-[8px] h-[37px] flex flex-row justify-between items-center border border-[#A9A7A7] rounded-[20px] bg-white" }, [
                    createVNode("div"),
                    createVNode("span", { class: "font-bold text-[18px] leading-[28px] mx-[8px]" }, toDisplayString(unref(requiredCoins)), 1),
                    createVNode(DollarIcon)
                  ])
                ]),
                createVNode("div", { class: "w-full gap-x-[40px] flex flex-row justify-between items-center mt-[18px]" }, [
                  createVNode("span", { class: "text-black font-medium text-[12px] leading-[17px] text-right" }, toDisplayString(unref(ladderingText)), 1)
                ]),
                createVNode("div", { class: "w-full gap-x-[20px] flex flex-row justify-end items-center mt-[18px]" }, [
                  createVNode("button", {
                    onClick: doAccept,
                    class: "text-[#133C3E] text-center font-normal text-[15px] leading-[18px]"
                  }, "\u062A\u0627\u06CC\u06CC\u062F \u0646\u0647\u0627\u06CC\u06CC"),
                  createVNode("button", {
                    onClick: closeAcceptModal,
                    class: "text-[#133C3E] text-center font-normal text-[15px] leading-[18px]"
                  }, "\u0628\u0633\u062A\u0646")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$1, {
        "is-open": unref(showLadderSomeDrawer),
        onChoose: choosePortfolios,
        onClose: closeDoLadderSomeDrawer
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/panel/artist/laddering/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-ChA3zu_p.mjs.map
