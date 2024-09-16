import { defineComponent, mergeProps, useSSRContext, ref, computed, unref, isRef, createSlots, withCtx, createVNode, createTextVNode } from "vue";
import { u as useDevice } from "./useDevice-B_VrK2H7.js";
import { _ as _export_sfc, u as useAuthStore, b as useRouter, e as useCookie, f as useNuxtApp } from "../server.mjs";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$9 } from "./Rating-DwKpxWvb.js";
import { E as EditPenIcon } from "./EditPenIcon-brLa5wK0.js";
import { A as AddMoneyIcon, D as DollarIcon } from "./AddMoneyIcon-BbfiaigX.js";
import { N as NotificationIcon } from "./NotificationIcon-D2I45xr1.js";
import { u as useDrawerStore } from "./Drawer-n5iGEtr0.js";
import { _ as _sfc_main$a } from "./ProfileLink-CyK1DvW1.js";
import { A as ArtistPanelIcon } from "./ArtistPanelIcon-91lmbuTQ.js";
import { A as AdvIcon } from "./AdvIcon-Bg0oOPas.js";
import { C as ContactIcon } from "./ContactIcon-QHxajr-T.js";
import "destr";
import "klona";
import "devalue";
import "defu";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "ufo";
import "cookie-es";
import "ohash";
import "@vue/devtools-api";
import "dayjs";
import "dayjs/plugin/updateLocale.js";
import "dayjs/plugin/relativeTime.js";
import "dayjs/plugin/utc.js";
import "consola";
import "vue3-toastify";
import "./LeftArrow-LWKoxjM1.js";
const _imports_0 = "" + __publicAssetsURL("intro/intro_1.png");
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "ArtistIntroDrawer",
  __ssrInlineRender: true,
  props: {
    isOpen: {
      type: Boolean,
      required: true
    }
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["fixed flex flex-col h-full px-[30px] py-[30px] md:hide top-0 bottom-0 right-0 overflow-y-scroll w-full duration-700 ease-in-out bg-white z-[999999999999]", [__props.isOpen ? "left-0 scale-1" : "left-[-100%] hidden scale-0"]]
      }, _attrs))}><div class="flex flex-col items-center justify-start px-4 mt-5"><img${ssrRenderAttr("src", _imports_0)} alt="" class="max-h-[350px]"><p class="flex flex-col justify-center text-[#141414] font-medium text-[28px] leading-[40px] text-center self-center mt-11 w-full max-w-[275px]"><span> پنل هنرمندان بیوتی مپ، ابزار موفقیت کسب و کار شماست. </span><span> Www.BeautyMap.ir </span></p><p class="justify-center text-center self-center mt-11 w-full max-w-[275px]"></p><button class="w-full mt-4 mx-[20px] bg-[#FF3CA0] rounded-[15px] h-[48px] text-white cursor-pointer flex flex-row justify-center items-center"><span>شروع</span></button></div></div>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/drawer/ArtistIntroDrawer.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "39",
    height: "39",
    viewBox: "0 0 39 39",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><g filter="url(#filter0_i_556_2901)"><path d="M19.4999 35.75C10.5461 35.75 3.24988 28.4538 3.24988 19.5C3.24988 10.53 10.5461 3.25 19.4999 3.25L19.9545 3.25624C28.7146 3.49726 35.7499 10.682 35.7499 19.5C35.7499 28.4538 28.4699 35.75 19.4999 35.75ZM21.8399 26.3575C22.1649 26.3575 22.4736 26.2437 22.7174 26C23.1886 25.5125 23.1886 24.7487 22.7011 24.2775L17.9074 19.5L22.7011 14.7225C23.1886 14.2513 23.1886 13.4713 22.7174 13C22.2299 12.5125 21.4661 12.5125 20.9949 13L15.3236 18.6388C15.0961 18.8663 14.9661 19.175 14.9661 19.5C14.9661 19.825 15.0961 20.1337 15.3236 20.3612L20.9949 26C21.2224 26.2437 21.5311 26.3575 21.8399 26.3575Z" fill="#FF3CA0"></path></g><defs><filter id="filter0_i_556_2901" x="3.24988" y="3.25" width="34.5" height="35.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dx="2" dy="3"></feOffset><feGaussianBlur stdDeviation="3.25"></feGaussianBlur><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix><feBlend mode="normal" in2="shape" result="effect1_innerShadow_556_2901"></feBlend></filter></defs></svg>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/BackTransparentIcon.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const BackTransparentIcon = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "Header",
  __ssrInlineRender: true,
  props: {
    full_name: {
      type: String,
      default: ""
    },
    planTitle: {
      type: String,
      default: "عادی"
    },
    banner: {
      type: String,
      default: null
    },
    avatar: {
      type: String,
      default: null
    },
    rate: {
      type: Number,
      default: 0
    }
  },
  setup(__props) {
    const props = __props;
    const auth = useAuthStore();
    const user = ref(auth.user);
    const getBanner = computed(() => props.banner ? props.banner : "/panel/header.png");
    const getAvatar = computed(() => props.avatar ? props.avatar : "/panel/header.png");
    const router = useRouter();
    const rates = ref(props.rate);
    const goBack = () => {
      router.replace("/");
    };
    const store = useDrawerStore();
    const openArtistProfileDrawer = () => {
      store.openArtistProfileDrawer();
    };
    const openNotificationDrawer = () => {
      store.openNotificationDrawer();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Rating = _sfc_main$9;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative w-full h-[200px]" }, _attrs))}><img${ssrRenderAttr("src", unref(getBanner))} alt="" class="w-full h-full"><div class="absolute top-[20px] left-[20px] right-[20px] flex flex-row justify-between items-center"><div class="">`);
      _push(ssrRenderComponent(EditPenIcon, {
        class: "cursor-pointer",
        onClick: openArtistProfileDrawer
      }, null, _parent));
      _push(`</div><div class="flex flex-row justify-end items-center"><div class="cursor-pointer px-[8px] h-[37px] ml-[17px] flex flex-row justify-between items-center border border-[#A9A7A7] rounded-[20px] bg-white">`);
      _push(ssrRenderComponent(AddMoneyIcon, null, null, _parent));
      _push(`<span class="font-medium text-[18px] leading-[28px] mx-[8px]">${ssrInterpolate(unref(user).coins)}</span>`);
      _push(ssrRenderComponent(DollarIcon, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(BackTransparentIcon, {
        class: "cursor-pointer",
        onClick: goBack
      }, null, _parent));
      _push(`</div></div><div class="absolute bottom-[12px] left-[35px] right-[35px] px-[9px] py-[9px] flex flex-row justify-between items-center bg-white rounded-[17px] border border-[#A9A7A7]"><div class="w-full flex flex-row justify-between flex-wrap items-center"><div class="flex flex-row justify-start items-center"><img${ssrRenderAttr("alt", __props.full_name)}${ssrRenderAttr("src", unref(getAvatar))} class="w-[55px] h-[55px] rounded-[100%] border border-[#B2550F]"><div class="py-[5px] flex flex-col items-start justify-start mr-[6px] h-[55px]"><div class="w-full flex flex-row gap-[2px] text-[#133C3E] font-medium text-[14px] leading-[21px]"><span class="whitespace-nowrap text-ellipsis overflow-hidden max-w-[80px]">${ssrInterpolate(__props.full_name)}</span>`);
      _push(ssrRenderComponent(_component_Rating, {
        "star-count": 5,
        modelValue: unref(rates),
        "onUpdate:modelValue": ($event) => isRef(rates) ? rates.value = $event : null
      }, null, _parent));
      _push(`</div><div class="mt-[5px] text-[#133C3E] font-light text-[14px] leading-[21px]">${ssrInterpolate(__props.planTitle)}</div></div></div>`);
      _push(ssrRenderComponent(NotificationIcon, { onClick: openNotificationDrawer }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/artist-panel/Header.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "17",
    height: "14",
    viewBox: "0 0 17 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M0.708374 13.8748L8.50004 0.416504L16.2917 13.8748H0.708374ZM3.15212 12.4582H13.848L8.50004 3.24984L3.15212 12.4582ZM8.50004 11.7498C8.70074 11.7498 8.86896 11.682 9.00473 11.5462C9.14049 11.4104 9.20837 11.2422 9.20837 11.0415C9.20837 10.8408 9.14049 10.6726 9.00473 10.5368C8.86896 10.4011 8.70074 10.3332 8.50004 10.3332C8.29935 10.3332 8.13112 10.4011 7.99535 10.5368C7.85959 10.6726 7.79171 10.8408 7.79171 11.0415C7.79171 11.2422 7.85959 11.4104 7.99535 11.5462C8.13112 11.682 8.29935 11.7498 8.50004 11.7498ZM7.79171 9.62484H9.20837V6.08317H7.79171V9.62484Z" fill="#F44336"></path></svg>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/DangerIcon.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const DangerIcon = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$4 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M7.25004 11.8335H16.4167L13.2542 7.7085L11.1459 10.4585L9.72504 8.62516L7.25004 11.8335ZM6.33337 15.5002C5.82921 15.5002 5.39761 15.3206 5.03858 14.9616C4.67955 14.6026 4.50004 14.171 4.50004 13.6668V2.66683C4.50004 2.16266 4.67955 1.73107 5.03858 1.37204C5.39761 1.01301 5.82921 0.833496 6.33337 0.833496H17.3334C17.8375 0.833496 18.2691 1.01301 18.6282 1.37204C18.9872 1.73107 19.1667 2.16266 19.1667 2.66683V13.6668C19.1667 14.171 18.9872 14.6026 18.6282 14.9616C18.2691 15.3206 17.8375 15.5002 17.3334 15.5002H6.33337ZM6.33337 13.6668H17.3334V2.66683H6.33337V13.6668ZM2.66671 19.1668C2.16254 19.1668 1.73094 18.9873 1.37192 18.6283C1.01289 18.2693 0.833374 17.8377 0.833374 17.3335V4.50016H2.66671V17.3335H15.5V19.1668H2.66671Z" fill="#133C3E"></path></svg>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/PortfolioIcon.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const PortfolioIcon = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "17",
    height: "21",
    viewBox: "0 0 17 21",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M2.75004 20.0832C2.22296 20.0832 1.77174 19.8955 1.39639 19.5201C1.02105 19.1448 0.833374 18.6936 0.833374 18.1665V2.83317C0.833374 2.30609 1.02105 1.85487 1.39639 1.47952C1.77174 1.10418 2.22296 0.916504 2.75004 0.916504H14.25C14.7771 0.916504 15.2283 1.10418 15.6037 1.47952C15.979 1.85487 16.1667 2.30609 16.1667 2.83317V18.1665C16.1667 18.6936 15.979 19.1448 15.6037 19.5201C15.2283 19.8955 14.7771 20.0832 14.25 20.0832H2.75004ZM2.75004 18.1665H14.25V2.83317H2.75004V18.1665ZM3.70837 16.2498H13.2917L9.98546 11.9373L7.78129 14.8123L6.29587 12.8957L3.70837 16.2498Z" fill="#133C3E"></path></svg>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/BannerIcon.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const BannerIcon = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "19",
    height: "19",
    viewBox: "0 0 19 19",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M2.79167 18.125C2.26458 18.125 1.81337 17.9373 1.43802 17.562C1.06267 17.1866 0.875 16.7354 0.875 16.2083V2.79167C0.875 2.26458 1.06267 1.81337 1.43802 1.43802C1.81337 1.06267 2.26458 0.875 2.79167 0.875H16.2083C16.7354 0.875 17.1866 1.06267 17.562 1.43802C17.9373 1.81337 18.125 2.26458 18.125 2.79167V16.2083C18.125 16.7354 17.9373 17.1866 17.562 17.562C17.1866 17.9373 16.7354 18.125 16.2083 18.125H2.79167ZM2.79167 16.2083H16.2083V4.70833H2.79167V16.2083ZM9.5 14.2917C8.19028 14.2917 7.02031 13.9363 5.9901 13.2255C4.9599 12.5148 4.21319 11.5924 3.75 10.4583C4.21319 9.32431 4.9599 8.40191 5.9901 7.69115C7.02031 6.98038 8.19028 6.625 9.5 6.625C10.8097 6.625 11.9797 6.98038 13.0099 7.69115C14.0401 8.40191 14.7868 9.32431 15.25 10.4583C14.7868 11.5924 14.0401 12.5148 13.0099 13.2255C11.9797 13.9363 10.8097 14.2917 9.5 14.2917ZM9.5 12.8542C10.3944 12.8542 11.209 12.6425 11.9437 12.2193C12.6785 11.796 13.2535 11.209 13.6687 10.4583C13.2535 9.70764 12.6785 9.12066 11.9437 8.6974C11.209 8.27413 10.3944 8.0625 9.5 8.0625C8.60556 8.0625 7.79097 8.27413 7.05625 8.6974C6.32153 9.12066 5.74653 9.70764 5.33125 10.4583C5.74653 11.209 6.32153 11.796 7.05625 12.2193C7.79097 12.6425 8.60556 12.8542 9.5 12.8542ZM9.5 11.8958C9.89931 11.8958 10.2387 11.7561 10.5182 11.4766C10.7977 11.197 10.9375 10.8576 10.9375 10.4583C10.9375 10.059 10.7977 9.71962 10.5182 9.4401C10.2387 9.16059 9.89931 9.02083 9.5 9.02083C9.10069 9.02083 8.76128 9.16059 8.48177 9.4401C8.20226 9.71962 8.0625 10.059 8.0625 10.4583C8.0625 10.8576 8.20226 11.197 8.48177 11.4766C8.76128 11.7561 9.10069 11.8958 9.5 11.8958Z" fill="#133C3E"></path></svg>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/ViewIcon.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const ViewIcon = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ArtistLinkBox",
  __ssrInlineRender: true,
  props: {
    isProfileCompleted: {
      type: Boolean,
      default: true
    }
  },
  setup(__props) {
    const store = useDrawerStore();
    const auth = useAuthStore();
    const user = ref(auth.user);
    const openArtistProfileDrawer = () => {
      store.openArtistProfileDrawer();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ProfileLink = _sfc_main$a;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col justify-start items-start w-full pb-10" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_ProfileLink, {
        class: "relative",
        onClick: openArtistProfileDrawer,
        "is-link": false
      }, createSlots({
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(ArtistPanelIcon, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(ArtistPanelIcon)
            ];
          }
        }),
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`پروفایل`);
          } else {
            return [
              createTextVNode("پروفایل")
            ];
          }
        }),
        _: 2
      }, [
        !unref(user).is_artist_profile_completed ? {
          name: "sub-icon",
          fn: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(DangerIcon, { onClick: openArtistProfileDrawer }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(DangerIcon, { onClick: openArtistProfileDrawer })
              ];
            }
          }),
          key: "0"
        } : void 0
      ]), _parent));
      _push(ssrRenderComponent(_component_ProfileLink, { to: "/panel/artist/portfolios" }, {
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(PortfolioIcon, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(PortfolioIcon)
            ];
          }
        }),
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`نمونه کار`);
          } else {
            return [
              createTextVNode("نمونه کار")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ProfileLink, { to: "/panel/artist/advertisements" }, {
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(AdvIcon, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(AdvIcon)
            ];
          }
        }),
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`تبلیغات ویژه`);
          } else {
            return [
              createTextVNode("تبلیغات ویژه")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ProfileLink, { to: "/panel/artist/support" }, {
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(ContactIcon, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(ContactIcon)
            ];
          }
        }),
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`تماس با پشتیبانی`);
          } else {
            return [
              createTextVNode("تماس با پشتیبانی")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ProfileLink, { to: "/panel/artist/banners" }, {
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(BannerIcon, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(BannerIcon)
            ];
          }
        }),
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`دریافت بنر هنرمند`);
          } else {
            return [
              createTextVNode("دریافت بنر هنرمند")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ProfileLink, { to: "/panel/artist/views" }, {
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(ViewIcon, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(ViewIcon)
            ];
          }
        }),
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`آمار بازدید پروفایل`);
          } else {
            return [
              createTextVNode("آمار بازدید پروفایل")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/artist-panel/ArtistLinkBox.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { isMobile } = useDevice();
    const seenIntro = useCookie("seenArtistIntro");
    useRouter();
    const nuxt = useNuxtApp();
    const auth = useAuthStore();
    const user = ref(auth.user);
    const showArtistIntro = ref(false);
    nuxt.hook("page:finish", () => {
      if (isMobile && (!seenIntro || !seenIntro.value)) {
        seenIntro.value = true;
        openArtistIntro();
      }
    });
    const openArtistIntro = () => {
      showArtistIntro.value = true;
    };
    const closeArtistIntro = () => {
      seenIntro.value = true;
      showArtistIntro.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative w-full h-full flex flex-col justify-start items-start" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$8, {
        "is-open": unref(showArtistIntro),
        onClose: closeArtistIntro
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$6, {
        avatar: unref(user).avatar,
        banner: unref(user).banner,
        full_name: unref(user).full_name,
        "plan-title": (_a = unref(user).selected_plan) == null ? void 0 : _a.title,
        rate: unref(user).rating
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, {
        class: "mt-6 px-[15px]",
        "is-profile-completed": unref(user).is_artist_profile_completed
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/panel/artist/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-Ds9ebC6X.js.map
