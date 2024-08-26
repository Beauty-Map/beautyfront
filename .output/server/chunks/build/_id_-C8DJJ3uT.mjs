import { a as useRouter, b as useRoute, _ as __nuxt_component_0$1 } from './server.mjs';
import { useSSRContext, defineComponent, ref, withAsyncContext, unref, withCtx, createVNode, computed, resolveDirective, mergeProps, openBlock, createBlock, Fragment, renderList, toDisplayString, createTextVNode, createCommentVNode } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrGetDirectiveProps, ssrRenderClass } from 'vue/server-renderer';
import { P as PortfolioPageBackIcon } from './PortfolioPageBackIcon-DSc9uAMH.mjs';
import { _ as _sfc_main$r } from './Rating-QcbC2A5D.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { _ as _sfc_main$n } from './Modal-sAgLgThS.mjs';
import { S as Splide, a as SplideSlide, H as HeaderLocationIcon } from '../_/vue-splide.esm.mjs';
import { B as BlueTick } from './BlueTick-DYR99-aj.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-B3sIHW1Y.mjs';
import { u as useSanctumAuth } from './useSanctumAuth-DECrePYZ.mjs';
import { _ as _sfc_main$o } from './Bookmark-BwyrozWf.mjs';
import { u as useDrawerStore } from './Drawer-O-pqrFqT.mjs';
import { u as useCustomFetch } from './useCustomFetch-CwVU0VgL.mjs';
import { _ as _sfc_main$s } from './PortfolioItem-D6Czm3YM.mjs';
import { F as FilterIcon, A as ArrowDownIcon, _ as _sfc_main$p } from './FilterPortfolioDrawer-B3ku8TRs.mjs';
import { S as SortIcon, _ as _sfc_main$q } from './SortPortfolioDrawer-DYFuMhmH.mjs';
import { LMap, LTileLayer, LMarker } from '@vue-leaflet/vue-leaflet';
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
import './CloseIcon-DvH18xbo.mjs';
import './fetch-CSNts9RR.mjs';
import './Tick-ioPHPXqw.mjs';
import './ArrowUpIcon-DvDMNDTA.mjs';
import './DoneCheckIcon-7CP9QAgP.mjs';

const _sfc_main$m = /* @__PURE__ */ defineComponent({
  __name: "ArtistBannerSlideBox",
  __ssrInlineRender: true,
  props: {
    images: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    const props = __props;
    ref();
    ref(0);
    computed(() => {
      var _a, _b;
      if (((_a = props.images) == null ? void 0 : _a.length) > 0) {
        return (_b = props.images) == null ? void 0 : _b.length;
      }
      return ["/images/artist/banner.png"];
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_client_only = __nuxt_component_0$1;
      resolveDirective("format-number");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full h-full" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/artist/ArtistBannerSlideBox.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const _sfc_main$l = {};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "40",
    height: "40",
    viewBox: "0 0 40 40",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><g filter="url(#filter0_d_562_5974)"><path d="M26.375 6H13.625C10.5184 6 8 8.5184 8 11.625V24.375C8 27.4816 10.5184 30 13.625 30H26.375C29.4816 30 32 27.4816 32 24.375V11.625C32 8.5184 29.4816 6 26.375 6Z" fill="url(#paint0_radial_562_5974)"></path><path d="M26.375 6H13.625C10.5184 6 8 8.5184 8 11.625V24.375C8 27.4816 10.5184 30 13.625 30H26.375C29.4816 30 32 27.4816 32 24.375V11.625C32 8.5184 29.4816 6 26.375 6Z" fill="url(#paint1_radial_562_5974)"></path><path d="M20.0008 8.625C17.4548 8.625 17.1352 8.63616 16.1353 8.68163C15.1372 8.72738 14.4559 8.88534 13.8598 9.11719C13.2432 9.35662 12.7201 9.67697 12.1991 10.1982C11.6775 10.7194 11.3572 11.2424 11.117 11.8588C10.8845 12.4551 10.7263 13.1366 10.6814 14.1342C10.6367 15.1342 10.625 15.4539 10.625 18.0001C10.625 20.5463 10.6363 20.8648 10.6816 21.8647C10.7276 22.8628 10.8855 23.5441 11.1172 24.1402C11.3568 24.7568 11.6772 25.2799 12.1984 25.8009C12.7194 26.3225 13.2424 26.6436 13.8586 26.883C14.4552 27.1148 15.1365 27.2728 16.1344 27.3186C17.1344 27.364 17.4538 27.3752 19.9997 27.3752C22.5461 27.3752 22.8646 27.364 23.8646 27.3186C24.8626 27.2728 25.5447 27.1148 26.1412 26.883C26.7576 26.6436 27.2799 26.3225 27.8007 25.8009C28.3223 25.2799 28.6425 24.7568 28.8828 24.1404C29.1133 23.5441 29.2715 22.8626 29.3184 21.8649C29.3633 20.865 29.375 20.5463 29.375 18.0001C29.375 15.4539 29.3633 15.1344 29.3184 14.1344C29.2715 13.1363 29.1133 12.4552 28.8828 11.8591C28.6425 11.2424 28.3223 10.7194 27.8007 10.1982C27.2793 9.67678 26.7578 9.35644 26.1406 9.11728C25.543 8.88534 24.8613 8.72728 23.8632 8.68163C22.8632 8.63616 22.5448 8.625 19.9979 8.625H20.0008ZM19.1598 10.3145C19.4095 10.3141 19.688 10.3145 20.0008 10.3145C22.5041 10.3145 22.8007 10.3235 23.7892 10.3684C24.7032 10.4102 25.1994 10.5629 25.5298 10.6913C25.9674 10.8611 26.2793 11.0643 26.6072 11.3925C26.9353 11.7206 27.1384 12.0331 27.3088 12.4706C27.4371 12.8006 27.59 13.2968 27.6316 14.2108C27.6765 15.1991 27.6863 15.4959 27.6863 17.9979C27.6863 20.4999 27.6765 20.7968 27.6316 21.7851C27.5898 22.6991 27.4371 23.1952 27.3088 23.5253C27.1389 23.9629 26.9353 24.2744 26.6072 24.6023C26.2791 24.9305 25.9676 25.1335 25.5298 25.3035C25.1997 25.4324 24.7032 25.5848 23.7892 25.6266C22.8009 25.6715 22.5041 25.6812 20.0008 25.6812C17.4975 25.6812 17.2008 25.6715 16.2126 25.6266C15.2985 25.5844 14.8024 25.4317 14.4717 25.3033C14.0342 25.1333 13.7217 24.9303 13.3935 24.6022C13.0654 24.274 12.8623 23.9623 12.692 23.5246C12.5637 23.1945 12.4108 22.6984 12.3691 21.7843C12.3242 20.796 12.3152 20.4992 12.3152 17.9956C12.3152 15.4921 12.3242 15.1968 12.3691 14.2085C12.4109 13.2944 12.5637 12.7983 12.692 12.4678C12.862 12.0303 13.0654 11.7178 13.3936 11.3897C13.7218 11.0616 14.0342 10.8584 14.4717 10.6882C14.8022 10.5592 15.2985 10.4069 16.2126 10.3649C17.0774 10.3258 17.4126 10.3141 19.1598 10.3121V10.3145ZM25.0052 11.8711C24.3841 11.8711 23.8802 12.3745 23.8802 12.9957C23.8802 13.6168 24.3841 14.1207 25.0052 14.1207C25.6263 14.1207 26.1302 13.6168 26.1302 12.9957C26.1302 12.3746 25.6263 11.8707 25.0052 11.8707V11.8711ZM20.0008 13.1856C17.3421 13.1856 15.1864 15.3413 15.1864 18.0001C15.1864 20.6589 17.3421 22.8136 20.0008 22.8136C22.6597 22.8136 24.8146 20.6589 24.8146 18.0001C24.8146 15.3413 22.6595 13.1856 20.0007 13.1856H20.0008ZM20.0008 14.875C21.7267 14.875 23.1259 16.2741 23.1259 18.0001C23.1259 19.7259 21.7267 21.1252 20.0008 21.1252C18.2749 21.1252 16.8759 19.7259 16.8759 18.0001C16.8759 16.2741 18.2749 14.875 20.0008 14.875Z" fill="white"></path></g><defs><filter id="filter0_d_562_5974" x="0" y="0" width="40" height="40" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="2"></feOffset><feGaussianBlur stdDeviation="4"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_562_5974"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_562_5974" result="shape"></feBlend></filter><radialGradient id="paint0_radial_562_5974" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(14.375 31.8485) rotate(-90) scale(23.7858 22.1227)"><stop stop-color="#FFDD55"></stop><stop offset="0.1" stop-color="#FFDD55"></stop><stop offset="0.5" stop-color="#FF543E"></stop><stop offset="1" stop-color="#C837AB"></stop></radialGradient><radialGradient id="paint1_radial_562_5974" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(3.97991 7.72884) rotate(78.681) scale(10.6324 43.827)"><stop stop-color="#3771C8"></stop><stop offset="0.128" stop-color="#3771C8"></stop><stop offset="1" stop-color="#6600FF" stop-opacity="0"></stop></radialGradient></defs></svg>`);
}
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/InstagramIcon.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const InstagramIcon = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["ssrRender", _sfc_ssrRender$7]]);
const _sfc_main$k = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "40",
    height: "40",
    viewBox: "0 0 40 40",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><g filter="url(#filter0_d_562_5968)"><path d="M32 18.0009C31.9998 20.7747 31.0386 23.4629 29.28 25.608C27.5214 27.7531 25.074 29.2227 22.354 29.7669C19.634 30.311 16.8096 29.896 14.361 28.5926C11.9125 27.2891 9.9912 25.1776 8.92388 22.6173C7.85657 20.057 7.7092 17.206 8.50684 14.5493C9.30447 11.8926 10.9979 9.59433 13.2989 8.04534C15.6 6.49636 18.3666 5.79238 21.1282 6.05317C23.8898 6.31396 26.4757 7.5234 28.4461 9.47576C29.5723 10.5915 30.4663 11.9194 31.0763 13.3826C31.6863 14.8459 32.0002 16.4156 32 18.0009Z" fill="#65A2D9"></path><path d="M30.6793 17.8841C30.6795 20.0232 30.044 22.1142 28.8536 23.8915C27.6632 25.6689 25.9714 27.0524 23.9932 27.8664C22.015 28.6805 19.8395 28.8883 17.7429 28.4636C15.6463 28.0389 13.7232 27.0008 12.2178 25.4811L27.482 10.2144C28.497 11.2168 29.3024 12.4112 29.8513 13.7279C30.4003 15.0447 30.6817 16.4575 30.6793 17.8841Z" fill="#5097CC"></path><path d="M25.8997 12.6947L23.7805 23.4707C23.7674 23.5387 23.7376 23.6024 23.6938 23.656C23.6499 23.7097 23.5935 23.7516 23.5295 23.778C23.4654 23.8043 23.3958 23.8144 23.327 23.8072C23.2581 23.8 23.1921 23.7758 23.1349 23.7368L21.5804 22.6826L21.0719 22.3367L19.6064 21.3424L17.3364 23.6696L15.7021 18.9825L12.8873 17.942C12.8077 17.9124 12.739 17.8593 12.6902 17.7898C12.6414 17.7203 12.6148 17.6376 12.614 17.5527C12.6132 17.4678 12.6383 17.3846 12.6857 17.3142C12.7332 17.2438 12.801 17.1895 12.88 17.1584L25.3277 12.2226C25.3981 12.1936 25.4751 12.1843 25.5504 12.1956C25.6257 12.207 25.6965 12.2386 25.7553 12.2871C25.814 12.3356 25.8585 12.3991 25.8839 12.4709C25.9094 12.5427 25.9148 12.6201 25.8997 12.6947Z" fill="white"></path><path d="M21.0719 22.3366L19.6064 21.3423L17.3401 23.6695L18.0129 20.2563L21.0719 22.3366Z" fill="#AAC9DD"></path><path d="M15.7085 18.9829L24.082 13.9399L18.013 20.2568L17.3402 23.67L15.7085 18.9829Z" fill="#D1D1D1"></path></g><defs><filter id="filter0_d_562_5968" x="0" y="0" width="40" height="40" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="2"></feOffset><feGaussianBlur stdDeviation="4"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_562_5968"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_562_5968" result="shape"></feBlend></filter></defs></svg>`);
}
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/TelegramIcon.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const TelegramIcon = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$j = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><g clip-path="url(#clip0_562_5988)"><path d="M23.9606 12.8453C23.9431 13.2718 23.8982 13.7093 23.7962 14.1272C23.7592 14.5227 23.6436 14.9081 23.538 15.2917C23.4146 15.7597 23.2384 16.2116 23.0604 16.6637C22.8979 17.0396 22.716 17.4056 22.5261 17.7697C22.342 18.0927 22.1503 18.4095 21.9429 18.7167C21.7138 19.0527 21.4698 19.3763 21.2109 19.6875C20.9426 20.0026 20.6666 20.3137 20.3673 20.5976C19.9807 20.973 19.5694 21.3222 19.1361 21.6428C18.7651 21.9197 18.3768 22.1727 17.9736 22.4002C17.5214 22.6705 17.0438 22.8927 16.56 23.0991C16.0445 23.3072 15.5163 23.4825 14.9786 23.6237C14.5108 23.7274 14.0426 23.8448 13.5655 23.882C12.6775 24.019 11.7688 24.0209 10.8744 23.9348C10.068 23.8721 9.26947 23.7001 8.49235 23.4711L8.49043 23.4572C4.75651 22.369 1.68763 19.2944 0.550511 15.5775C0.301871 14.7771 0.127631 13.9472 0.063071 13.1096C-0.028849 12.2972 0.015071 11.4776 0.010271 10.6616C0.00435104 10.0097 0.00371104 9.35662 0.00835104 8.70222C0.00419104 8.03294 0.00419104 7.3623 0.00835104 6.6903C0.00427104 6.1143 0.00643104 5.5395 0.00643104 4.96398C0.00643104 4.38846 0.00235104 3.80742 0.010271 3.22998C0.00235104 2.6583 0.00835104 2.08686 0.00643104 1.51542C-0.032929 1.08486 0.108191 0.634617 0.435071 0.343017C0.779471 0.031257 1.28827 -0.086103 1.72795 0.066537C1.99411 0.156537 2.22499 0.320937 2.46187 0.467817C3.32587 1.02942 4.15483 1.64022 4.97491 2.26254C5.06419 2.21469 5.14986 2.16038 5.23123 2.10006C5.55944 1.8695 5.90091 1.65842 6.25387 1.4679C6.61032 1.27198 6.97683 1.09493 7.35187 0.937497C7.74523 0.773097 8.14843 0.630297 8.55547 0.503097C8.98987 0.383097 9.42643 0.260457 9.87547 0.197817C10.3646 0.100567 10.8608 0.0423037 11.3592 0.023577C11.9705 -0.0146034 12.584 -0.000874214 13.193 0.064617C13.6559 0.105682 14.1154 0.179223 14.568 0.284697C17.6527 0.932697 20.4259 2.8839 22.115 5.5407C22.8686 6.71473 23.4087 8.0128 23.7103 9.37494C23.8238 9.87774 23.9138 10.3906 23.9431 10.9054C24.0125 11.5499 24.0184 12.1997 23.9606 12.8453Z" fill="url(#paint0_linear_562_5988)"></path><path d="M16.6486 6.26527C17.1397 6.12761 17.6605 6.13847 18.1455 6.29647C18.7603 6.53215 19.2564 7.01503 19.5255 7.61407C19.7256 8.16271 19.7489 8.77615 19.5473 9.32863C19.4019 9.71743 19.1451 10.0508 18.8417 10.3304C18.5745 10.5942 18.3088 10.8593 18.0447 11.1257C17.7617 11.4087 17.4773 11.6897 17.1967 11.9741C16.9255 12.2449 16.6539 12.5139 16.3843 12.7856C16.0887 13.0817 15.792 13.3762 15.4975 13.6736C15.1615 14.0096 14.8241 14.3441 14.4895 14.6816C14.1718 15.0005 13.8523 15.3173 13.5343 15.6363C13.2163 15.9553 12.8919 16.2773 12.5719 16.5989C12.2775 16.8833 12.0077 17.1975 11.6755 17.4404C11.2583 17.6991 10.7756 17.8324 10.2847 17.8244C9.72002 17.7872 9.16298 17.5645 8.7569 17.1644C7.50042 15.9093 6.24442 14.6538 4.9889 13.3978C4.68122 13.094 4.47578 12.7001 4.3649 12.2847C4.2509 11.7121 4.31834 11.0965 4.61234 10.5867C4.83722 10.1897 5.1833 9.87511 5.5769 9.65071C6.00918 9.44564 6.48996 9.36479 6.96554 9.41719C7.47866 9.49423 7.97354 9.72919 8.33138 10.1074C9.01234 10.7908 9.69418 11.4725 10.3769 12.1525C10.584 11.9561 10.7825 11.7509 10.9815 11.546C11.2695 11.269 11.5514 10.9862 11.8272 10.6976C12.0999 10.4413 12.3631 10.1739 12.6209 9.90271C12.8067 9.73759 12.9749 9.55447 13.1506 9.37951C13.4386 9.09919 13.7206 8.81335 14.0023 8.52727C14.2714 8.26735 14.533 8.00047 14.796 7.73527C15.079 7.45927 15.3547 7.17655 15.636 6.89839C15.9185 6.60984 16.2658 6.39287 16.6491 6.26551L16.6486 6.26527Z" fill="white"></path></g><defs><linearGradient id="paint0_linear_562_5988" x1="18.9216" y1="1.95006" x2="1.95763" y2="18.9142" gradientUnits="userSpaceOnUse"><stop stop-color="#4CEBB4"></stop><stop offset="1" stop-color="#2E2E74"></stop></linearGradient><clipPath id="clip0_562_5988"><rect width="24" height="23.9933" fill="white"></rect></clipPath></defs></svg>`);
}
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/BaleIcon.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const BaleIcon = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$i = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><g clip-path="url(#clip0_562_5978)"><path d="M0.434082 23.6031L2.05902 17.671C1.05655 15.9351 0.529383 13.9651 0.529986 11.9475C0.533002 5.63537 5.66958 0.5 11.9823 0.5C15.0458 0.501206 17.9205 1.69367 20.0829 3.85723C22.2446 6.0214 23.4353 8.8973 23.4341 11.9566C23.4317 18.2687 18.2939 23.4047 11.9823 23.4047H11.9775C10.0612 23.4041 8.17755 22.9234 6.50497 22.0108L0.434082 23.6031Z" fill="white"></path><path d="M0.477706 23.3508C0.400121 23.3508 0.324888 23.3202 0.26905 23.2638C0.19558 23.1891 0.16678 23.0804 0.194405 22.9799L1.74551 17.3162C0.783929 15.6082 0.276691 13.6686 0.277867 11.6996C0.280218 5.38585 5.41784 0.25 11.731 0.25C14.7932 0.251176 17.6703 1.44374 19.8327 3.60788C21.995 5.7726 23.1853 8.6491 23.1841 11.7078C23.1817 18.0209 18.0435 23.1574 11.731 23.1574C9.8566 23.1568 8.00222 22.6942 6.35649 21.8191L0.552351 23.3408C0.527665 23.3478 0.502979 23.3508 0.477706 23.3508Z" fill="white"></path><path d="M11.9815 0.598005C15.0188 0.599202 17.8689 1.78146 20.0127 3.9265C22.156 6.07215 23.3364 8.92344 23.3352 11.9565C23.3328 18.2146 18.239 23.3067 11.9815 23.3067H11.9767C10.0769 23.3061 8.20928 22.8295 6.55101 21.9247L0.532089 23.5034L2.14312 17.622C1.14923 15.901 0.626574 13.9479 0.627172 11.9476C0.630162 5.68942 5.72278 0.598005 11.9815 0.598005ZM11.9815 0C5.39387 0 0.0321568 5.35932 0.0291667 11.9476C0.0285687 13.961 0.536873 15.9452 1.50086 17.7016L-0.0449858 23.3461C-0.101198 23.5524 -0.0437899 23.7725 0.106908 23.9244C0.220529 24.0392 0.374216 24.102 0.532089 24.102C0.58292 24.102 0.63375 24.0954 0.683983 24.0823L6.47686 22.5633C8.16802 23.4412 10.0637 23.9047 11.9767 23.9053C18.5691 23.9053 23.9308 18.5453 23.9338 11.9571C23.935 8.76437 22.693 5.76238 20.4367 3.50431C18.1792 1.24565 15.1766 0.00119601 11.9815 0Z" fill="#CFD8DC"></path><path d="M19.1897 5.0344C17.3013 3.14479 14.7913 2.10366 12.1198 2.10303C6.60427 2.10303 2.1185 6.5869 2.11597 12.0986C2.11533 13.9876 2.64382 15.8265 3.64502 17.4189L3.88328 17.7972L2.87257 21.4858L6.6575 20.4935L7.02313 20.7102C8.55789 21.6214 10.3182 22.103 12.1128 22.1037H12.1166C17.6283 22.1037 22.1141 17.6192 22.116 12.1068C22.1166 9.4359 21.078 6.92401 19.1897 5.0344Z" fill="#40C351"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M9.35144 6.91709C9.13051 6.42543 8.89775 6.41547 8.68677 6.40676C8.51438 6.39929 8.31772 6.39992 8.12105 6.39992C7.92439 6.39992 7.6045 6.47397 7.33378 6.76959C7.06305 7.06521 6.30005 7.77905 6.30005 9.23162C6.30005 10.6842 7.35805 12.0882 7.50555 12.2849C7.65304 12.4815 9.54811 15.5578 12.5491 16.7416C15.0429 17.7249 15.5507 17.5295 16.0921 17.4803C16.6336 17.4311 17.8391 16.7664 18.0849 16.0769C18.3308 15.3873 18.3308 14.7967 18.2573 14.6735C18.1833 14.5502 17.9866 14.4768 17.6916 14.3287C17.3966 14.1806 15.9447 13.4667 15.6739 13.3684C15.4032 13.2701 15.2065 13.2209 15.0093 13.5165C14.8126 13.8115 14.2469 14.4768 14.0745 14.6735C13.9021 14.8708 13.7297 14.8957 13.4347 14.7475C13.1397 14.5994 12.1888 14.2882 11.0604 13.2825C10.1829 12.5002 9.59043 11.5337 9.41804 11.2381C9.24565 10.9431 9.39937 10.7831 9.54749 10.6356C9.68005 10.5031 9.84248 10.2909 9.9906 10.1185C10.1381 9.94608 10.1873 9.82286 10.2856 9.62619C10.3839 9.42891 10.3348 9.25651 10.2607 9.10902C10.1879 8.9609 9.61408 7.50086 9.35144 6.91709Z" fill="white"></path></g><defs><clipPath id="clip0_562_5978"><rect width="24" height="24" fill="white"></rect></clipPath></defs></svg>`);
}
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/WhatsappIcon.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const WhatsappIcon = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$h = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "23",
    height: "24",
    viewBox: "0 0 23 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path fill-rule="evenodd" clip-rule="evenodd" d="M6.57145 6.41642e-05H16.4286C20.0432 6.41642e-05 23 2.95265 23 6.56696V9.73622C19.7597 11.1927 16.491 18.3863 11.7268 16.8232C11.3344 17.1021 10.43 18.2512 10.3665 19.1231C8.71678 18.9034 6.81489 17.0128 7.04312 14.9741C4.29727 12.9879 6.56477 9.32153 8.74219 7.84581C13.409 4.6829 19.8878 7.40308 16.284 9.66455C14.0927 11.0397 9.40661 11.948 9.89381 8.57222C8.60834 8.94296 7.7855 11.3399 9.3332 12.5889C7.89945 13.9975 8.1751 16.5868 9.70767 17.437C11.2576 13.4211 16.6522 13.9459 18.8318 9.15207C20.4717 5.54604 18.0404 1.43715 13.1795 2.06834C9.511 2.54475 6.07231 5.63933 4.35258 9.30959C2.6077 13.0334 2.86737 18.02 6.4503 20.5331C10.6669 23.4905 15.156 20.7521 17.8749 17.1729C19.4775 15.0633 20.8778 12.7263 23 11.3765V16.9955C23 20.6098 20.0428 23.5714 16.4286 23.5714H6.57145C2.95714 23.5714 0 20.6143 0 17V6.57145C0 2.95714 2.95714 0 6.57145 0V6.41642e-05Z" fill="#EE7F22"></path></svg>`);
}
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/EitaaIcon.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const EitaaIcon = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$g = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "23",
    height: "23",
    viewBox: "0 0 23 23",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink"
  }, _attrs))}><rect width="23" height="23" fill="url(#pattern0_562_5986)"></rect><defs><pattern id="pattern0_562_5986" patternContentUnits="objectBoundingBox" width="1" height="1"><use xlink:href="#image0_562_5986" transform="scale(0.011236)"></use></pattern><image id="image0_562_5986" width="89" height="89" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFkAAABZCAMAAABi1XidAAABfVBMVEVHcEzh4eHh4eHh4eHk5OTl5eXk5OT29/fm5ubr6+vj4+PW4OHk5OTi4uL////k5OTg4ODx8fF5Q4dMNoP2qSXvdBTnS1C4zgF9tCQPaKA1rJ1JvcpZ1r3yjhz+/v7w8O/8/PvoT1RSOoX7+vGukrW+zAcrkbREvquil72wygWzywODtyyEth/30Z3n5+duQIbt8bpfPobPwBGs0HX36djpV0TvcxnrYDL+8uad19Xr9fZ3tDGTwUn63sLt7upavLNSs35PuKfwrSLuayLVSlg2TJD2rTDwpGpnncHnsh1ktWL0tULxfiT2wGCfRG5tOnf3s4p5S4ocYJzDR1+31uDU3OJyYpRnkqR7tCdvtEbzl1DC1SLb6sLyjTeQRXtY1bxTv8uQ5NNZ0LreuRm+6eI7rJDR31bW4mnS8uxx3MfI2TgvfK1vx9B8syTf6Y7ra2/T5rSxR2lMvcTe7tuKucxvxLnH36JZx8O/0xmnnMLwkZSmmb2QY5s6mbOkmb5PNzedAAAADnRSTlMA821WzNTw/hXwk/I4j6MKgpQAAAWkSURBVFjDtdnpV9NKFADwFoppOceULiGlpZPQWBVrpNJSSxda9k1ERbQgi4iCW33u5z3Pe/7tbyZJ05mkk0yg3M/xd8Z7Z+jMvT6fHsHB6wH/yGXDH7g+GPQRMRC4FuEAf9mQOelaYABzg0Mhvn8RGjKXHfRzfYQB4PzBDsz3NwBv0EMc3+/ghrTihfoO8yA0gKrHX0XAKg6GrkQODfqGI2yfKvnzl2KuVjhQmD6Xhn0BpvqB/IesKN65m0jkal9YThQX8PkBi3sGXV2GUTiQ3U+j3zfCkIhzzTXldq4w5/qPRlxloHx+KYqk3G7XXG1XWc6brikjO5H7pVxG1gtnlxOJVs6llI4yKJ7jLiFDO5ErfAcXkYHy+PDUQU60q835k4p3WVEPhXR8YTpLk6sbb5O3xt+/4TzK9UNBgHIc2r3kdmvvbTIJ5fHx9+88yKC4+lAw5Hh8fdomt/aayaQhH4+fvAOMsvJYczsytMmT0qrqri6jOOFYZFk9FARSji+cYqe72nybtMgw3bKbDOr7gmCTYUzrf5HaqHBJm4zSLTvKZiJsMirlnbst3CVka0ossrIqCDQZlXKvmUxS5XFic5MyIGGrvFl/M+8kj5/INLk4s0iXN9Uyz1dm5+ly48UuTf49OvqgRJG3yvp/q/Kzt3z8+sWT6A2KDKA8OoPZXXmrLnduQPKbhl2G7vNoNPovbc0ToyhmFksWeVMldpRspqQjv24gNxp94iwjG5dX1LL19Fdmcfm48fxJlE2G6V7syCtbxV63wnc/Dfn4uPHCcGG4y3op02ingd6XQh7tQCi/xlw2GZUyvak6/NjBHXhLL5xHGcZq2fkyUvlBuqzyztGNOacXBpC5P5kp7/LSo2j0Rjg8Jzu8SSK3Y7H7XuWv6Dso02zARWBAmbTd5Imdo6gph8MRu81FJFOOYSlxkZeOjO8MGdqATHBEhw0Zsx1llGCrHMZKCQsX6URHjmXuT7nKX7GsdeVw+J6MjgfgZWO5pAxjylneOYpS5PC9ORmg9WIwIWspoclYIuwyDImLkEHIaJfQZMu2t8n3JGc5dkSTM5YjZZXDjnJme2eCKhN706O8vQMPgoMMkzV1EXn70dKom4wdV2Y588g4vC4y3Pee5Iy2Xia5s+/Z5O0l8+8Yi6yVkkVGhfMmo1K6yn+2vxI/FoxyLLa26ywXVy0/b4zy8tObr2Z36XJR3UyXHniXl5+Ojd1MpV7N9pYlSV2Jx9OCUJrxKENXk1OpT896yJK6ha5PaXTfWZzxIGuuIeO2IUv1Lf3Cl9ZvaQ9m3OT73UTgcurVp11MlopbK3FCFox0T1Dl54TblVG6dztyUV0xL79p80Ksp+QvmvxPNxEW2SilFJEwF5ehDeXfNHk3szw2RpFRukfm1E3i5YLLMCUTdZosr405yKnUT9K1yIKwr1BfbZU1B7mxkbszveAg75cdXpokjcvfmtVEYlLMntLkEgH3eB0/+9hTnt9rJZAsitn1nvKhKru8u3nux0ebPL/RaicMWRSn123yw8dlhi4EMFNiyN82qkZfQ5fFbCfdhlxaLQKW/gb86NlaV/7W3DM7PJOdHkr2dMGUS/t12UO3R0s3kht7WO9ostv50dKN5IcqfGp5kEEFpvsm3GnVRG8ZpmQdyvYEM/TrKmv/Natmc84mo5SkV8sX6gTK3ws53LXK4llevmD3EoCDWo6WDfFD/sLdS7RNlC+13mt++VnhLyFrTcxfNfuakevWJfbLbiMdoBRyFvnceb16z5ypz98ppSZnz/LuHXwu4BuWmGYNeikntcIxzSauM89TlINCLTf591mebepxbZB9BgS0MwwYh4iB4NXMrfiQNn4M9H3WBmD9rmQ+yPPd0WN/V23ONCEd6OscNoCPjweGQhInXxqVOSk0NECOpYODw32Zdw+b8+7/Aab8hus94bCGAAAAAElFTkSuQmCC"></image></defs></svg>`);
}
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/RubikaIcon.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const RubikaIcon = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "ArtistSocialMediaBox",
  __ssrInlineRender: true,
  props: {
    socials: {
      type: Object,
      default: () => {
      }
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full flex flex-row-reverse items-center justify-start py-[10px]" }, _attrs))}>`);
      _push(ssrRenderComponent(InstagramIcon, { class: "cursor-pointer" }, null, _parent));
      _push(ssrRenderComponent(TelegramIcon, { class: "cursor-pointer" }, null, _parent));
      _push(ssrRenderComponent(BaleIcon, { class: "mx-[5px] cursor-pointer" }, null, _parent));
      _push(ssrRenderComponent(WhatsappIcon, { class: "mx-[5px] cursor-pointer" }, null, _parent));
      _push(ssrRenderComponent(EitaaIcon, { class: "mx-[5px] cursor-pointer" }, null, _parent));
      _push(ssrRenderComponent(RubikaIcon, { class: "mx-[5px] cursor-pointer" }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/artist/ArtistSocialMediaBox.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const _sfc_main$e = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><circle cx="7.5" cy="7.5" r="5.5" fill="#085EC2" stroke="white"></circle><path d="M10.3125 7.5H7.75C7.61193 7.5 7.5 7.38807 7.5 7.25V5.3125" stroke="white" stroke-linecap="round"></path></svg>`);
}
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/TimeIcon.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const TimeIcon = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$d = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M7.5 13.125C6.0625 13.125 4.8099 12.6484 3.74219 11.6953C2.67448 10.7422 2.0625 9.55208 1.90625 8.125H3.1875C3.33333 9.20833 3.8151 10.1042 4.63281 10.8125C5.45052 11.5208 6.40625 11.875 7.5 11.875C8.71875 11.875 9.7526 11.4505 10.6016 10.6016C11.4505 9.7526 11.875 8.71875 11.875 7.5C11.875 6.28125 11.4505 5.2474 10.6016 4.39844C9.7526 3.54948 8.71875 3.125 7.5 3.125C6.78125 3.125 6.10938 3.29167 5.48438 3.625C4.85938 3.95833 4.33333 4.41667 3.90625 5H5.625V6.25H1.875V2.5H3.125V3.96875C3.65625 3.30208 4.30469 2.78646 5.07031 2.42188C5.83594 2.05729 6.64583 1.875 7.5 1.875C8.28125 1.875 9.01302 2.02344 9.69531 2.32031C10.3776 2.61719 10.9714 3.01823 11.4766 3.52344C11.9818 4.02865 12.3828 4.6224 12.6797 5.30469C12.9766 5.98698 13.125 6.71875 13.125 7.5C13.125 8.28125 12.9766 9.01302 12.6797 9.69531C12.3828 10.3776 11.9818 10.9714 11.4766 11.4766C10.9714 11.9818 10.3776 12.3828 9.69531 12.6797C9.01302 12.9766 8.28125 13.125 7.5 13.125ZM9.25 10.125L6.875 7.75V4.375H8.125V7.25L10.125 9.25L9.25 10.125Z" fill="white"></path><path d="M7.5 2C5.025 2 3 4.25 3 7C3 9.75 5.025 12 7.5 12C9.975 12 12 9.75 12 7C12 4.25 9.975 2 7.5 2ZM6.6 9.5L4.35 7L4.9845 6.295L6.6 8.085L10.0155 4.29L10.65 5L6.6 9.5Z" fill="#1BD4CA"></path></svg>`);
}
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/GreenTick.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const GreenTick = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "ArtistAddressBox",
  __ssrInlineRender: true,
  props: {
    address: {
      type: String,
      default: ""
    },
    distance: {
      type: String,
      default: ""
    },
    createdAtAgoFa: {
      type: String,
      default: ""
    },
    workHours: {
      type: Array,
      default: () => [],
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const days = ref([
      "\u0634\u0646\u0628\u0647",
      "\u06CC\u06A9 \u0634\u0646\u0628\u0647",
      "\u062F\u0648 \u0634\u0646\u0628\u0647",
      "\u0633\u0647 \u0634\u0646\u0628\u0647",
      "\u0686\u0647\u0627\u0631 \u0634\u0646\u0628\u0647",
      "\u067E\u0646\u062C \u0634\u0646\u0628\u0647",
      "\u062C\u0645\u0639\u0647"
    ]);
    const showWorkHoursBox = ref(false);
    const closeWorkHoursBox = () => {
      showWorkHoursBox.value = false;
    };
    const getDayName = (workHour) => {
      let start = workHour.start_hour;
      let end = workHour.end_hour;
      let name = "";
      name += toAMorPM(start);
      name += " - ";
      name += toAMorPM(end);
      return name;
    };
    const getStartAndEndWorkDayName = () => {
      var _a, _b, _c, _d;
      if (props.workHours.length == 0) {
        return "";
      }
      if (props.workHours.length == 1) {
        return days.value[(_a = props.workHours[0]) == null ? void 0 : _a.day_index];
      }
      if (props.workHours.length > 2) {
        return `${days.value[(_b = props.workHours[0]) == null ? void 0 : _b.day_index]} - ${days.value[(_d = props.workHours[((_c = props.workHours) == null ? void 0 : _c.length) - 1]) == null ? void 0 : _d.day_index]}`;
      }
    };
    const getStartAndEndWorkTimeName = () => {
      var _a, _b;
      if (props.workHours.length == 0) {
        return "";
      }
      return `${toAMorPM((_a = props.workHours[0]) == null ? void 0 : _a.start_hour)} - ${toAMorPM((_b = props.workHours[0]) == null ? void 0 : _b.end_hour)}`;
    };
    const toAMorPM = (hour) => {
      let name = "";
      let hourInt = parseInt(hour.substring(0, 2));
      if (hourInt <= 12) {
        name += `${hour} \u0635\u0628\u062D`;
      } else if (hourInt <= 19) {
        name += `${hour} \u0628\u0639\u062F \u0627\u0632 \u0638\u0647\u0631`;
      } else {
        name += `${hour} \u0634\u0628`;
      }
      return name;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Modal = _sfc_main$n;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-right w-full flex flex-col gap-[5px]" }, _attrs))}><div class="w-full flex flex-row items-center">`);
      _push(ssrRenderComponent(HeaderLocationIcon, { class: "w-[20px] h-[20px]" }, null, _parent));
      _push(`<div class="text-[#141414] font-medium text-[11px] leading-[15px]">${ssrInterpolate(__props.address)}</div></div><div class="w-full flex flex-row items-center flex-wrap">`);
      _push(ssrRenderComponent(TimeIcon, { class: "w-[20px] h-[20px]" }, null, _parent));
      _push(`<div class="text-[#141414] font-medium text-[11px] leading-[15px]"><span>\u0641\u0627\u0635\u0644\u0647 \u0627\u0632 \u0634\u0645\u0627</span><span>${ssrInterpolate(__props.distance)}</span></div>`);
      if (__props.workHours.length > 0) {
        _push(`<span class="mx-1"> | </span>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.workHours.length > 0) {
        _push(`<div class="text-[#141414] font-medium text-[11px] leading-[15px]"><span>${ssrInterpolate(getStartAndEndWorkDayName())}</span></div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.workHours.length > 0) {
        _push(`<span class="mx-1"> | </span>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.workHours.length > 0) {
        _push(`<div class="text-[#141414] font-medium text-[11px] leading-[15px]"><span>${ssrInterpolate(getStartAndEndWorkTimeName())}</span></div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.workHours.length > 0) {
        _push(`<span class="mx-1 text-[#1EFF81] font-medium text-[11px] leading-[15px] cursor-pointer"> \u062F\u06CC\u062F\u0646 \u0647\u0645\u0647 </span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (__props.createdAtAgoFa) {
        _push(`<div class="w-full flex flex-row items-center">`);
        _push(ssrRenderComponent(GreenTick, { class: "w-[20px] h-[20px]" }, null, _parent));
        _push(`<div class="text-[#141414] font-medium text-[11px] leading-[15px]"><span>\u0633\u0627\u0628\u0642\u0647 \u0639\u0636\u0648\u06CC\u062A:</span><span>${ssrInterpolate(__props.createdAtAgoFa)}</span></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_Modal, {
        open: unref(showWorkHoursBox),
        onClose: closeWorkHoursBox
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full flex flex-col items-start justify-start pb-[18px]"${_scopeId}><h1 class="w-full font-semibold text-[#141414] text-right text-[17px] leading-[26px]"${_scopeId}>\u0628\u0631\u0646\u0627\u0645\u0647 \u0647\u0641\u062A\u06AF\u06CC</h1><div class="w-full mt-[10px] font-normal text-right text-[#133C3E] text-[10px] leading-[15px]"${_scopeId}><!--[-->`);
            ssrRenderList(__props.workHours, (w, i) => {
              _push2(`<div class="flex flex-row justify-between items-center mb-[5px]"${_scopeId}><span${_scopeId}>${ssrInterpolate(unref(days)[w.day_index])}</span><span${_scopeId}>${ssrInterpolate(getDayName(w))}</span></div>`);
            });
            _push2(`<!--]--></div></div>`);
          } else {
            return [
              createVNode("div", { class: "w-full flex flex-col items-start justify-start pb-[18px]" }, [
                createVNode("h1", { class: "w-full font-semibold text-[#141414] text-right text-[17px] leading-[26px]" }, "\u0628\u0631\u0646\u0627\u0645\u0647 \u0647\u0641\u062A\u06AF\u06CC"),
                createVNode("div", { class: "w-full mt-[10px] font-normal text-right text-[#133C3E] text-[10px] leading-[15px]" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(__props.workHours, (w, i) => {
                    return openBlock(), createBlock("div", {
                      key: i,
                      class: "flex flex-row justify-between items-center mb-[5px]"
                    }, [
                      createVNode("span", null, toDisplayString(unref(days)[w.day_index]), 1),
                      createVNode("span", null, toDisplayString(getDayName(w)), 1)
                    ]);
                  }), 128))
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/artist/ArtistAddressBox.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "ArtistDetailBox",
  __ssrInlineRender: true,
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const getServices = () => {
      let services = [];
      for (let i = 0; i < props.user.services.length; i++) {
        let s = props.user.services[i];
        services.push(s.title);
      }
      return services.reverse().join(" , ");
    };
    const getAvatar = computed(() => {
      if (props.user && props.user.avatar) {
        return props.user.avatar;
      }
      return "/images/artist/2.png";
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Rating = _sfc_main$r;
      const _component_ArtistSocialMediaBox = _sfc_main$f;
      const _component_ArtistAddressBox = _sfc_main$c;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full flex flex-col justify-start items-start" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Rating, {
        modelValue: __props.user.rating,
        "onUpdate:modelValue": ($event) => __props.user.rating = $event
      }, null, _parent));
      _push(`<div class="w-full flex flex-row items-start justify-start mt-2 border-b border-b-[#A9A7A7] pb-[8px]"><img${ssrRenderAttr("src", unref(getAvatar))} alt="" class="grow-0 h-[50px] w-[50px] border-[#FFD700] rounded-[50%] border-[2px]"><div class="flex flex-col grow justify-between items-start mr-2"><div class="flex flex-row gap-0.5 justify-start items-center">`);
      if (__props.user.has_blue_tick) {
        _push(ssrRenderComponent(BlueTick, { class: "h-[20px] w-[20px]" }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<h1 class="font-semibold text-[18px] leading-[28px] text-right text-[#141414]">${ssrInterpolate(__props.user.full_name)}</h1></div>`);
      if (__props.user.services.length > 0) {
        _push(`<div class="text-[#133C3E] font-medium text-[12px] leading-[18px] w-full"><span>\u062A\u062E\u0635\u0635 \u0647\u0627:</span><span class="mr-1">${ssrInterpolate(getServices())}</span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_ArtistSocialMediaBox, null, null, _parent));
      _push(ssrRenderComponent(_component_ArtistAddressBox, {
        address: __props.user.address,
        distance: __props.user.distance,
        "work-hours": __props.user.work_hours,
        "created-at-ago-fa": __props.user.created_at_ago_fa
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/artist/ArtistDetailBox.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "ArtistCallBox",
  __ssrInlineRender: true,
  setup(__props) {
    const showCallModal = ref(false);
    const closeCallModal = () => {
      showCallModal.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "fixed z-[99999] bg-white bottom-0 left-0 right-0 px-[15px] pt-[30px] pb-[22px] border-t border-t-[#FFEA2E] w-full flex flex-row items-center justify-between" }, _attrs))}><div class="cursor-pointer min-w-[130px] text-center px-[37px] py-[6px] bg-[#085EC2] border border-[#133C3E] font-medium text-[15px] leading-[30px] text-white rounded-[25px]"> \u0645\u0633\u06CC\u0631\u06CC\u0627\u0628\u06CC </div><div class="cursor-pointer min-w-[130px] text-center px-[37px] py-[6px] bg-[#157F3D] border border-[#133C3E] font-medium text-[15px] leading-[30px] text-white rounded-[25px]"> \u062A\u0645\u0627\u0633 </div>`);
      _push(ssrRenderComponent(_sfc_main$n, {
        open: unref(showCallModal),
        onClose: closeCallModal
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full h-full flex flex-col gap-[13px] justify-center items-center"${_scopeId}><div class="cursor-pointer flex justify-center items-center rounded-[10px] border border-[#133C3E] bg-[#085EC2] text-white text-[20px] leading-[31px] font-bold text-center px-[65px] py-[15px]"${_scopeId}> \u062A\u0644\u0641\u0646 \u062B\u0627\u0628\u062A </div><div class="cursor-pointer flex justify-center items-center rounded-[10px] border border-[#133C3E] bg-[#085EC2] text-white text-[20px] leading-[31px] font-bold text-center px-[65px] py-[15px]"${_scopeId}> \u062A\u0644\u0641\u0646 \u0647\u0645\u0631\u0627\u0647 </div></div>`);
          } else {
            return [
              createVNode("div", { class: "w-full h-full flex flex-col gap-[13px] justify-center items-center" }, [
                createVNode("div", { class: "cursor-pointer flex justify-center items-center rounded-[10px] border border-[#133C3E] bg-[#085EC2] text-white text-[20px] leading-[31px] font-bold text-center px-[65px] py-[15px]" }, " \u062A\u0644\u0641\u0646 \u062B\u0627\u0628\u062A "),
                createVNode("div", { class: "cursor-pointer flex justify-center items-center rounded-[10px] border border-[#133C3E] bg-[#085EC2] text-white text-[20px] leading-[31px] font-bold text-center px-[65px] py-[15px]" }, " \u062A\u0644\u0641\u0646 \u0647\u0645\u0631\u0627\u0647 ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/artist/ArtistCallBox.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "ArtistBannerDesktopSlideBox",
  __ssrInlineRender: true,
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    ref();
    ref(0);
    const showCallModal = ref(false);
    const closeCallModal = () => {
      showCallModal.value = false;
    };
    computed(() => {
      var _a, _b;
      if (((_a = props.user.banners) == null ? void 0 : _a.length) > 0) {
        return (_b = props.user.banners) == null ? void 0 : _b.length;
      }
      return ["/images/artist/banner.png"];
    });
    const getServices = () => {
      if (props.user.services.length == 0) {
        return "-";
      }
      let services = [];
      for (let i = 0; i < props.user.services.length; i++) {
        let s = props.user.services[i];
        services.push(s.title);
      }
      return services.reverse().join(" , ");
    };
    const getAvatar = computed(() => {
      if (props.user && props.user.avatar) {
        return props.user.avatar;
      }
      return "/images/artist/2.png";
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_client_only = __nuxt_component_0$1;
      const _component_Rating = _sfc_main$r;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full h-[300px] rounded-[60px] relative" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
      _push(`<div class="absolute left-0 right-0 top-0 bottom-0 bg-[rgba(0,0,0,0.4)] z-[1] rounded-[60px]"></div><div class="absolute z-[999] left-[55px] right-[55px] top-[55px] bottom-[55px] flex flex-row justify-between items-center"><div class="flex flex-row gap-[5px] justify-start items-start"><img${ssrRenderAttr("src", unref(getAvatar))} alt="" class="grow-0 h-[20vw] max-w-[250px] max-h-[250px] w-[20vw] aspect-square border-[#FFD700] rounded-[50%] border-[2px]"><div class="w-full flex flex-col h-[20vw] max-h-[250px] py-[10px] justify-between items-start"><div class="flex flex-row flex-wrap gap-0.5 justify-start items-center">`);
      if (__props.user.has_blue_tick) {
        _push(ssrRenderComponent(BlueTick, { class: "h-[20px] w-[20px]" }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<h1 class="font-semibold text-[28px] leading-[58px] text-right text-white">${ssrInterpolate(__props.user.full_name)}</h1>`);
      _push(ssrRenderComponent(_component_Rating, {
        modelValue: __props.user.rating,
        "onUpdate:modelValue": ($event) => __props.user.rating = $event
      }, null, _parent));
      _push(`</div><div class="text-white mt-[20px] font-medium text-[24px] leading-[28px] w-full"><span>\u062A\u062E\u0635\u0635 \u0647\u0627:</span><span class="mr-1">${ssrInterpolate(getServices())}</span></div>`);
      if (__props.user.address) {
        _push(`<div class="text-white mt-[20px] font-medium text-[24px] leading-[28px] w-full"><span>\u0622\u062F\u0631\u0633:</span><span class="mr-1">${ssrInterpolate(__props.user.address)}</span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="cursor-pointer min-w-[160px] text-center px-[42px] py-[14px] bg-[#157F3D] border border-[#133C3E] font-medium text-[24px] leading-[30px] text-white rounded-[25px]"> \u062A\u0645\u0627\u0633 </div></div>`);
      _push(ssrRenderComponent(_sfc_main$n, {
        open: unref(showCallModal),
        onClose: closeCallModal
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full h-full flex flex-col gap-[13px] justify-center items-center"${_scopeId}><div class="cursor-pointer flex justify-center items-center rounded-[10px] border border-[#133C3E] bg-[#085EC2] text-white text-[20px] leading-[31px] font-bold text-center px-[65px] py-[15px]"${_scopeId}> \u062A\u0644\u0641\u0646 \u062B\u0627\u0628\u062A </div><div class="cursor-pointer flex justify-center items-center rounded-[10px] border border-[#133C3E] bg-[#085EC2] text-white text-[20px] leading-[31px] font-bold text-center px-[65px] py-[15px]"${_scopeId}> \u062A\u0644\u0641\u0646 \u0647\u0645\u0631\u0627\u0647 </div></div>`);
          } else {
            return [
              createVNode("div", { class: "w-full h-full flex flex-col gap-[13px] justify-center items-center" }, [
                createVNode("div", { class: "cursor-pointer flex justify-center items-center rounded-[10px] border border-[#133C3E] bg-[#085EC2] text-white text-[20px] leading-[31px] font-bold text-center px-[65px] py-[15px]" }, " \u062A\u0644\u0641\u0646 \u062B\u0627\u0628\u062A "),
                createVNode("div", { class: "cursor-pointer flex justify-center items-center rounded-[10px] border border-[#133C3E] bg-[#085EC2] text-white text-[20px] leading-[31px] font-bold text-center px-[65px] py-[15px]" }, " \u062A\u0644\u0641\u0646 \u0647\u0645\u0631\u0627\u0647 ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/artist/ArtistBannerDesktopSlideBox.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "PortfolioDesktopItem",
  __ssrInlineRender: true,
  props: {
    portfolio: {
      type: Object,
      required: true
    },
    isPanel: {
      type: Object,
      required: false
    },
    isLink: {
      type: Boolean,
      default: true
    }
  },
  emits: ["click"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const auth = useSanctumAuth();
    useRouter();
    const drawerStore = useDrawerStore();
    const getThumbnail = () => {
      if (props.portfolio.images.length > 0) {
        return props.portfolio.images[0];
      }
      return "/images/artist/1.jpg";
    };
    const toggleBookmark = (bookmarked) => {
      if (!auth.isAuthenticated.value) {
        drawerStore.openLoginDrawer();
        return;
      }
      props.portfolio.is_bookmarked = bookmarked;
    };
    const calcDiscountPercent = (p, d) => {
      return Math.ceil((p - d) / p * 100) + "%";
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_Rating = _sfc_main$r;
      const _component_nuxt_link = __nuxt_component_0;
      const _directive_format_price = resolveDirective("format-price");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col w-[380px] h-[606px] rounded-[20px] mx-[10px] my-[10px] shadow-[0px_2px_8px_2px_#00000040]" }, _attrs))}><img${ssrRenderAttr("src", getThumbnail())}${ssrRenderAttr("alt", __props.portfolio.title)} class="w-full h-[310px] rounded-t-[20px]"><div class="w-full h-full flex flex-col justify-start items-start px-[10px] py-[15px]"><div class="flex flex-row flex-wrap gap-0.5 justify-start items-center">`);
      if (__props.portfolio.user.has_blue_tick) {
        _push(ssrRenderComponent(BlueTick, { class: "h-[20px] w-[20px]" }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<h1 class="font-semibold text-[24px] leading-[36px] text-right text-[#141414]">${ssrInterpolate(__props.portfolio.user.full_name)}</h1>`);
      _push(ssrRenderComponent(_component_Rating, {
        modelValue: __props.portfolio.user.rating,
        "onUpdate:modelValue": ($event) => __props.portfolio.user.rating = $event
      }, null, _parent));
      _push(`</div><div class="flex flex-row flex-wrap gap-0.5 justify-start items-center"><svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.20866 22.9167L1.04199 11.4584L6.25033 8.33337V2.08337H10.417V8.33337L15.6253 11.4584L11.4587 22.9167H5.20866ZM17.7087 22.9167C17.4135 22.9167 17.1661 22.8169 16.9665 22.6172C16.7668 22.4176 16.667 22.1702 16.667 21.875C16.667 21.5799 16.7668 21.3325 16.9665 21.1329C17.1661 20.9332 17.4135 20.8334 17.7087 20.8334H20.8337V18.75H17.7087C17.4135 18.75 17.1661 18.6502 16.9665 18.4506C16.7668 18.2509 16.667 18.0035 16.667 17.7084C16.667 17.4132 16.7668 17.1658 16.9665 16.9662C17.1661 16.7665 17.4135 16.6667 17.7087 16.6667H20.8337V14.5834H17.7087C17.4135 14.5834 17.1661 14.4835 16.9665 14.2839C16.7668 14.0842 16.667 13.8368 16.667 13.5417C16.667 13.2466 16.7668 12.9992 16.9665 12.7995C17.1661 12.5999 17.4135 12.5 17.7087 12.5H20.8337V10.4167H17.7087C17.4135 10.4167 17.1661 10.3169 16.9665 10.1172C16.7668 9.91758 16.667 9.67018 16.667 9.37504C16.667 9.0799 16.7668 8.83251 16.9665 8.63285C17.1661 8.4332 17.4135 8.33337 17.7087 8.33337H20.8337V6.25004H17.7087C17.4135 6.25004 17.1661 6.15021 16.9665 5.95056C16.7668 5.75091 16.667 5.50351 16.667 5.20837C16.667 4.91324 16.7668 4.66584 16.9665 4.46619C17.1661 4.26653 17.4135 4.16671 17.7087 4.16671H21.8753C22.4482 4.16671 22.9387 4.3707 23.3467 4.77869C23.7547 5.18667 23.9587 5.67712 23.9587 6.25004V20.8334C23.9587 21.4063 23.7547 21.8967 23.3467 22.3047C22.9387 22.7127 22.4482 22.9167 21.8753 22.9167H17.7087ZM6.66699 20.8334H10.0003L13.0732 12.3438L9.84408 10.4167H6.82324L3.59408 12.3438L6.66699 20.8334Z" fill="#133C3E"></path></svg><span class="text-[#2920D9] font-medium text-[18px] leading-[27px]">${ssrInterpolate((_a = __props.portfolio.service.title) != null ? _a : "-")}</span></div><div class="w-full flex flex-row flex-wrap gap-0.5 justify-start items-center">`);
      if (__props.portfolio.discount_price > 0) {
        _push(`<div class="w-full flex flex-col justify-start items-start"><div class="text-[#ED2C25] text-[24px] leading-[36px] font-medium line-through"><span${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_format_price))}>${ssrInterpolate(__props.portfolio.price)}</span></div><div class="w-full flex flex-row justify-between text-[#133C3E] text-[24px] leading-[36px] font-medium"><span${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_format_price))}>${ssrInterpolate(__props.portfolio.discount_price)}</span><span class="mr-[22px] px-[12px] py-[3px] bg-[#FFEA2E61] rounded-[20px]">${ssrInterpolate(calcDiscountPercent(__props.portfolio.price, __props.portfolio.discount_price))}</span></div></div>`);
      } else if (__props.portfolio.price > 0) {
        _push(`<div class="w-full flex flex-col justify-start items-start"><div class="text-[#133C3E] text-[24px] leading-[36px] font-medium"><span${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_format_price))}>${ssrInterpolate(__props.portfolio.price)}</span></div></div>`);
      } else {
        _push(`<div class="w-full flex flex-col justify-start items-start"><div class="text-[#133C3E] text-[24px] leading-[36px] font-medium"> \u0631\u0627\u06CC\u06AF\u0627\u0646 </div></div>`);
      }
      _push(`</div><div class="w-full mt-auto flex flex-row flex-wrap gap-0.5 justify-between items-center">`);
      _push(ssrRenderComponent(_sfc_main$o, {
        onBookmark: toggleBookmark,
        bookmarked: __props.portfolio.is_bookmarked
      }, null, _parent));
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/",
        class: "bg-[#085EC2] mr-[20px] rounded-[50px] px-[62px] py-[17px] text-white text-[24px] leading-[37px] cursor-pointer font-medium text-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u062C\u0632\u0626\u06CC\u0627\u062A \u062F\u0642\u06CC\u0642`);
          } else {
            return [
              createTextVNode("\u062C\u0632\u0626\u06CC\u0627\u062A \u062F\u0642\u06CC\u0642")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/portfolio/PortfolioDesktopItem.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "ArtistPortfoliosDesktopList",
  __ssrInlineRender: true,
  props: {
    userId: {
      type: Number,
      required: true
    }
  },
  setup(__props) {
    const options = ref({
      direction: "rtl",
      autoWidth: true,
      pagination: false,
      arrows: true
    });
    const portfolios = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PortfolioDesktopItem = _sfc_main$8;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full rounded-[50px] bg-white shadow-[0px_5px_30px_5px_#00000040] px-[70px] py-[40px]" }, _attrs))}>`);
      if (unref(portfolios).length > 0) {
        _push(ssrRenderComponent(unref(Splide), {
          options: unref(options),
          "aria-label": ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(unref(portfolios), (p, i) => {
                _push2(ssrRenderComponent(unref(SplideSlide), { key: i }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_PortfolioDesktopItem, { portfolio: p }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_PortfolioDesktopItem, { portfolio: p }, null, 8, ["portfolio"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(portfolios), (p, i) => {
                  return openBlock(), createBlock(unref(SplideSlide), { key: i }, {
                    default: withCtx(() => [
                      createVNode(_component_PortfolioDesktopItem, { portfolio: p }, null, 8, ["portfolio"])
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/artist/ArtistPortfoliosDesktopList.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "ArtistPortfolioBox",
  __ssrInlineRender: true,
  setup(__props) {
    const portfolios = ref([]);
    const page = ref(1);
    const showFilterDrawer = ref(false);
    const showSortDrawer = ref(false);
    const closeFilterDrawer = () => {
      showFilterDrawer.value = false;
    };
    const chooseService = (s) => {
      console.log(s);
    };
    const closeSortDrawer = () => {
      showSortDrawer.value = false;
    };
    const chooseSort = (s) => {
      console.log(s);
    };
    const paginate = (p = 1) => {
      page.value = p;
      getPortfolios();
    };
    const getPortfolios = () => {
      portfolios.value = [
        ...portfolios.value,
        ...[
          {
            id: 1,
            title: "\u062E\u062F\u0645\u0627\u062A \u0646\u0627\u062E\u0646",
            description: "\u06A9\u0631\u0627\u062A\u06CC\u0646\u0647 \u0645\u0648\xA0\u06CC\u06A9 \u0631\u0648\u0634 \u0645\u0648\u062B\u0631 \u0628\u0631\u0627\u06CC \u0635\u0627\u0641\u06CC\u060C \u062F\u0631\u062E\u0634\u0646\u062F\u06AF\u06CC \u0648 \u0634\u0627\u062F\u0627\u0628\u06CC\xA0\u0645\u0648\u0647\u0627\u06CC\xA0\u0641\u0631 \u0627\u0633\u062A. \u0632\u0646\u0627\u0646 \u0648 \u0645\u0631\u062F\u0627\u0646\u06CC \u06A9\u0647\xA0\u0645\u0648\u0647\u0627\u06CC\xA0\u0648\u0632\u060C \u0641\u0631 \u06CC\u0627 \u0645\u062C\u0639\u062F \u062F\u0627\u0631\u0646\u062F \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u0646\u062F \u0628\u0647 \u06A9\u0645\u06A9 \u0627\u06CC\u0646 \u0631\u0648\u0634\u060C \u0632\u06CC\u0628\u0627\u06CC\u06CC \u0648 \u0637\u0631\u0627\u0648\u062A\xA0\u0645\u0648\u0647\u0627\u06CC\xA0\u062E\u0648\u062F \u0631\u0627 \u0627\u0641\u0632\u0627\u06CC\u0634 \u062F\u0647\u0646\u062F. \u062F\u0631 \u0648\u0627\u0642\u0639\xA0\u06A9\u0631\u0627\u062A\u06CC\u0646\u0647 \u0645\u0648\xA0\u06CC\u06A9 \u0631\u0648\u0634 \u0635\u0627\u0641\u06CC \u062F\u0627\u0626\u0645\u06CC \u0646\u06CC\u0633\u062A\u060C \u0627\u0645\u0627 \u062F\u0631 \u0635\u0648\u0631\u062A \u0631\u0639\u0627\u06CC\u062A \u0645\u0631\u0627\u0642\u0628\u062A\u200C\u0647\u0627\u06CC \u0644\u0627\u0632\u0645 \u0628\u0639\u062F \u0627\u0632 \u0635\u0627\u0641\u06CC\u060C \u0627\u062B\u0631\u0627\u062A \u0622\u0646 \u062D\u062F\u0648\u062F \u0686\u0647\u0627\u0631 \u062A\u0627 \u06F6 \u0645\u0627\u0647 \u0631\u0648\u06CC\xA0\u0645\u0648\u0647\u0627\xA0\u0628\u0627\u0642\u06CC \u0645\u06CC\u200C\u0645\u0627\u0646\u062F",
            rating: 4.5,
            price: 1e5,
            discount_price: 9e4,
            is_bookmarked: true,
            has_tel: true,
            has_phone_number: false,
            showing_phone_number: "09381412419",
            service_id: 1,
            service: {
              id: 1,
              title: "\u062E\u062F\u0645\u0627\u062A \u0646\u0627\u062E\u0646",
              image: "https://via.placeholder.com/57x57.png/00ddaa?text=minus",
              is_active: 1,
              parent_id: null,
              created_at: "2024-04-12T16:14:23.000000Z",
              updated_at: "2024-04-12T16:14:23.000000Z"
            },
            user_id: 1,
            user: {
              id: 1,
              full_name: "\u0632\u06CC\u0628\u0627 \u0627\u0639\u0638\u0645\u06CC",
              phone_number: "09381412419",
              avatar: "/images/artist/2.png",
              has_blue_tick: true
            },
            images: ["/images/artist/1.jpg", "/images/artist/1.jpg"],
            work_hours: [
              {
                "day_index": 1,
                "start_hour": "09:12",
                "end_hour": "08:00"
              },
              {
                "day_index": 2,
                "start_hour": "09:12",
                "end_hour": "08:00"
              },
              {
                "day_index": 3,
                "start_hour": "09:12",
                "end_hour": "08:00"
              },
              {
                "day_index": 4,
                "start_hour": "09:12",
                "end_hour": "08:00"
              }
            ]
          },
          {
            id: 1,
            title: "\u062E\u062F\u0645\u0627\u062A \u0646\u0627\u062E\u0646",
            description: "\u06A9\u0631\u0627\u062A\u06CC\u0646\u0647 \u0645\u0648\xA0\u06CC\u06A9 \u0631\u0648\u0634 \u0645\u0648\u062B\u0631 \u0628\u0631\u0627\u06CC \u0635\u0627\u0641\u06CC\u060C \u062F\u0631\u062E\u0634\u0646\u062F\u06AF\u06CC \u0648 \u0634\u0627\u062F\u0627\u0628\u06CC\xA0\u0645\u0648\u0647\u0627\u06CC\xA0\u0641\u0631 \u0627\u0633\u062A. \u0632\u0646\u0627\u0646 \u0648 \u0645\u0631\u062F\u0627\u0646\u06CC \u06A9\u0647\xA0\u0645\u0648\u0647\u0627\u06CC\xA0\u0648\u0632\u060C \u0641\u0631 \u06CC\u0627 \u0645\u062C\u0639\u062F \u062F\u0627\u0631\u0646\u062F \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u0646\u062F \u0628\u0647 \u06A9\u0645\u06A9 \u0627\u06CC\u0646 \u0631\u0648\u0634\u060C \u0632\u06CC\u0628\u0627\u06CC\u06CC \u0648 \u0637\u0631\u0627\u0648\u062A\xA0\u0645\u0648\u0647\u0627\u06CC\xA0\u062E\u0648\u062F \u0631\u0627 \u0627\u0641\u0632\u0627\u06CC\u0634 \u062F\u0647\u0646\u062F. \u062F\u0631 \u0648\u0627\u0642\u0639\xA0\u06A9\u0631\u0627\u062A\u06CC\u0646\u0647 \u0645\u0648\xA0\u06CC\u06A9 \u0631\u0648\u0634 \u0635\u0627\u0641\u06CC \u062F\u0627\u0626\u0645\u06CC \u0646\u06CC\u0633\u062A\u060C \u0627\u0645\u0627 \u062F\u0631 \u0635\u0648\u0631\u062A \u0631\u0639\u0627\u06CC\u062A \u0645\u0631\u0627\u0642\u0628\u062A\u200C\u0647\u0627\u06CC \u0644\u0627\u0632\u0645 \u0628\u0639\u062F \u0627\u0632 \u0635\u0627\u0641\u06CC\u060C \u0627\u062B\u0631\u0627\u062A \u0622\u0646 \u062D\u062F\u0648\u062F \u0686\u0647\u0627\u0631 \u062A\u0627 \u06F6 \u0645\u0627\u0647 \u0631\u0648\u06CC\xA0\u0645\u0648\u0647\u0627\xA0\u0628\u0627\u0642\u06CC \u0645\u06CC\u200C\u0645\u0627\u0646\u062F",
            rating: 4.5,
            price: 1e5,
            discount_price: 9e4,
            is_bookmarked: true,
            has_tel: true,
            has_phone_number: false,
            showing_phone_number: "09381412419",
            service_id: 1,
            service: {
              id: 1,
              title: "\u062E\u062F\u0645\u0627\u062A \u0646\u0627\u062E\u0646",
              image: "https://via.placeholder.com/57x57.png/00ddaa?text=minus",
              is_active: 1,
              parent_id: null,
              created_at: "2024-04-12T16:14:23.000000Z",
              updated_at: "2024-04-12T16:14:23.000000Z"
            },
            user_id: 1,
            user: {
              id: 1,
              full_name: "\u0632\u06CC\u0628\u0627 \u0627\u0639\u0638\u0645\u06CC",
              phone_number: "09381412419",
              avatar: "/images/artist/2.png",
              has_blue_tick: true
            },
            images: ["/images/artist/1.jpg", "/images/artist/1.jpg"],
            work_hours: [
              {
                "day_index": 1,
                "start_hour": "09:12",
                "end_hour": "08:00"
              },
              {
                "day_index": 2,
                "start_hour": "09:12",
                "end_hour": "08:00"
              },
              {
                "day_index": 3,
                "start_hour": "09:12",
                "end_hour": "08:00"
              },
              {
                "day_index": 4,
                "start_hour": "09:12",
                "end_hour": "08:00"
              }
            ]
          },
          {
            id: 1,
            title: "\u062E\u062F\u0645\u0627\u062A \u0646\u0627\u062E\u0646",
            description: "\u06A9\u0631\u0627\u062A\u06CC\u0646\u0647 \u0645\u0648\xA0\u06CC\u06A9 \u0631\u0648\u0634 \u0645\u0648\u062B\u0631 \u0628\u0631\u0627\u06CC \u0635\u0627\u0641\u06CC\u060C \u062F\u0631\u062E\u0634\u0646\u062F\u06AF\u06CC \u0648 \u0634\u0627\u062F\u0627\u0628\u06CC\xA0\u0645\u0648\u0647\u0627\u06CC\xA0\u0641\u0631 \u0627\u0633\u062A. \u0632\u0646\u0627\u0646 \u0648 \u0645\u0631\u062F\u0627\u0646\u06CC \u06A9\u0647\xA0\u0645\u0648\u0647\u0627\u06CC\xA0\u0648\u0632\u060C \u0641\u0631 \u06CC\u0627 \u0645\u062C\u0639\u062F \u062F\u0627\u0631\u0646\u062F \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u0646\u062F \u0628\u0647 \u06A9\u0645\u06A9 \u0627\u06CC\u0646 \u0631\u0648\u0634\u060C \u0632\u06CC\u0628\u0627\u06CC\u06CC \u0648 \u0637\u0631\u0627\u0648\u062A\xA0\u0645\u0648\u0647\u0627\u06CC\xA0\u062E\u0648\u062F \u0631\u0627 \u0627\u0641\u0632\u0627\u06CC\u0634 \u062F\u0647\u0646\u062F. \u062F\u0631 \u0648\u0627\u0642\u0639\xA0\u06A9\u0631\u0627\u062A\u06CC\u0646\u0647 \u0645\u0648\xA0\u06CC\u06A9 \u0631\u0648\u0634 \u0635\u0627\u0641\u06CC \u062F\u0627\u0626\u0645\u06CC \u0646\u06CC\u0633\u062A\u060C \u0627\u0645\u0627 \u062F\u0631 \u0635\u0648\u0631\u062A \u0631\u0639\u0627\u06CC\u062A \u0645\u0631\u0627\u0642\u0628\u062A\u200C\u0647\u0627\u06CC \u0644\u0627\u0632\u0645 \u0628\u0639\u062F \u0627\u0632 \u0635\u0627\u0641\u06CC\u060C \u0627\u062B\u0631\u0627\u062A \u0622\u0646 \u062D\u062F\u0648\u062F \u0686\u0647\u0627\u0631 \u062A\u0627 \u06F6 \u0645\u0627\u0647 \u0631\u0648\u06CC\xA0\u0645\u0648\u0647\u0627\xA0\u0628\u0627\u0642\u06CC \u0645\u06CC\u200C\u0645\u0627\u0646\u062F",
            rating: 4.5,
            price: 1e5,
            discount_price: 9e4,
            is_bookmarked: true,
            has_tel: true,
            has_phone_number: false,
            showing_phone_number: "09381412419",
            service_id: 1,
            service: {
              id: 1,
              title: "\u062E\u062F\u0645\u0627\u062A \u0646\u0627\u062E\u0646",
              image: "https://via.placeholder.com/57x57.png/00ddaa?text=minus",
              is_active: 1,
              parent_id: null,
              created_at: "2024-04-12T16:14:23.000000Z",
              updated_at: "2024-04-12T16:14:23.000000Z"
            },
            user_id: 1,
            user: {
              id: 1,
              full_name: "\u0632\u06CC\u0628\u0627 \u0627\u0639\u0638\u0645\u06CC",
              phone_number: "09381412419",
              avatar: "/images/artist/2.png",
              has_blue_tick: true
            },
            images: ["/images/artist/1.jpg", "/images/artist/1.jpg"],
            work_hours: [
              {
                "day_index": 1,
                "start_hour": "09:12",
                "end_hour": "08:00"
              },
              {
                "day_index": 2,
                "start_hour": "09:12",
                "end_hour": "08:00"
              },
              {
                "day_index": 3,
                "start_hour": "09:12",
                "end_hour": "08:00"
              },
              {
                "day_index": 4,
                "start_hour": "09:12",
                "end_hour": "08:00"
              }
            ]
          },
          {
            id: 1,
            title: "\u062E\u062F\u0645\u0627\u062A \u0646\u0627\u062E\u0646",
            description: "\u06A9\u0631\u0627\u062A\u06CC\u0646\u0647 \u0645\u0648\xA0\u06CC\u06A9 \u0631\u0648\u0634 \u0645\u0648\u062B\u0631 \u0628\u0631\u0627\u06CC \u0635\u0627\u0641\u06CC\u060C \u062F\u0631\u062E\u0634\u0646\u062F\u06AF\u06CC \u0648 \u0634\u0627\u062F\u0627\u0628\u06CC\xA0\u0645\u0648\u0647\u0627\u06CC\xA0\u0641\u0631 \u0627\u0633\u062A. \u0632\u0646\u0627\u0646 \u0648 \u0645\u0631\u062F\u0627\u0646\u06CC \u06A9\u0647\xA0\u0645\u0648\u0647\u0627\u06CC\xA0\u0648\u0632\u060C \u0641\u0631 \u06CC\u0627 \u0645\u062C\u0639\u062F \u062F\u0627\u0631\u0646\u062F \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u0646\u062F \u0628\u0647 \u06A9\u0645\u06A9 \u0627\u06CC\u0646 \u0631\u0648\u0634\u060C \u0632\u06CC\u0628\u0627\u06CC\u06CC \u0648 \u0637\u0631\u0627\u0648\u062A\xA0\u0645\u0648\u0647\u0627\u06CC\xA0\u062E\u0648\u062F \u0631\u0627 \u0627\u0641\u0632\u0627\u06CC\u0634 \u062F\u0647\u0646\u062F. \u062F\u0631 \u0648\u0627\u0642\u0639\xA0\u06A9\u0631\u0627\u062A\u06CC\u0646\u0647 \u0645\u0648\xA0\u06CC\u06A9 \u0631\u0648\u0634 \u0635\u0627\u0641\u06CC \u062F\u0627\u0626\u0645\u06CC \u0646\u06CC\u0633\u062A\u060C \u0627\u0645\u0627 \u062F\u0631 \u0635\u0648\u0631\u062A \u0631\u0639\u0627\u06CC\u062A \u0645\u0631\u0627\u0642\u0628\u062A\u200C\u0647\u0627\u06CC \u0644\u0627\u0632\u0645 \u0628\u0639\u062F \u0627\u0632 \u0635\u0627\u0641\u06CC\u060C \u0627\u062B\u0631\u0627\u062A \u0622\u0646 \u062D\u062F\u0648\u062F \u0686\u0647\u0627\u0631 \u062A\u0627 \u06F6 \u0645\u0627\u0647 \u0631\u0648\u06CC\xA0\u0645\u0648\u0647\u0627\xA0\u0628\u0627\u0642\u06CC \u0645\u06CC\u200C\u0645\u0627\u0646\u062F",
            rating: 4.5,
            price: 1e5,
            discount_price: 9e4,
            is_bookmarked: true,
            has_tel: true,
            has_phone_number: false,
            showing_phone_number: "09381412419",
            service_id: 1,
            service: {
              id: 1,
              title: "\u062E\u062F\u0645\u0627\u062A \u0646\u0627\u062E\u0646",
              image: "https://via.placeholder.com/57x57.png/00ddaa?text=minus",
              is_active: 1,
              parent_id: null,
              created_at: "2024-04-12T16:14:23.000000Z",
              updated_at: "2024-04-12T16:14:23.000000Z"
            },
            user_id: 1,
            user: {
              id: 1,
              full_name: "\u0632\u06CC\u0628\u0627 \u0627\u0639\u0638\u0645\u06CC",
              phone_number: "09381412419",
              avatar: "/images/artist/2.png",
              has_blue_tick: true
            },
            images: ["/images/artist/1.jpg", "/images/artist/1.jpg"],
            work_hours: [
              {
                "day_index": 1,
                "start_hour": "09:12",
                "end_hour": "08:00"
              },
              {
                "day_index": 2,
                "start_hour": "09:12",
                "end_hour": "08:00"
              },
              {
                "day_index": 3,
                "start_hour": "09:12",
                "end_hour": "08:00"
              },
              {
                "day_index": 4,
                "start_hour": "09:12",
                "end_hour": "08:00"
              }
            ]
          },
          {
            id: 1,
            title: "\u062E\u062F\u0645\u0627\u062A \u0646\u0627\u062E\u0646",
            description: "\u06A9\u0631\u0627\u062A\u06CC\u0646\u0647 \u0645\u0648\xA0\u06CC\u06A9 \u0631\u0648\u0634 \u0645\u0648\u062B\u0631 \u0628\u0631\u0627\u06CC \u0635\u0627\u0641\u06CC\u060C \u062F\u0631\u062E\u0634\u0646\u062F\u06AF\u06CC \u0648 \u0634\u0627\u062F\u0627\u0628\u06CC\xA0\u0645\u0648\u0647\u0627\u06CC\xA0\u0641\u0631 \u0627\u0633\u062A. \u0632\u0646\u0627\u0646 \u0648 \u0645\u0631\u062F\u0627\u0646\u06CC \u06A9\u0647\xA0\u0645\u0648\u0647\u0627\u06CC\xA0\u0648\u0632\u060C \u0641\u0631 \u06CC\u0627 \u0645\u062C\u0639\u062F \u062F\u0627\u0631\u0646\u062F \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u0646\u062F \u0628\u0647 \u06A9\u0645\u06A9 \u0627\u06CC\u0646 \u0631\u0648\u0634\u060C \u0632\u06CC\u0628\u0627\u06CC\u06CC \u0648 \u0637\u0631\u0627\u0648\u062A\xA0\u0645\u0648\u0647\u0627\u06CC\xA0\u062E\u0648\u062F \u0631\u0627 \u0627\u0641\u0632\u0627\u06CC\u0634 \u062F\u0647\u0646\u062F. \u062F\u0631 \u0648\u0627\u0642\u0639\xA0\u06A9\u0631\u0627\u062A\u06CC\u0646\u0647 \u0645\u0648\xA0\u06CC\u06A9 \u0631\u0648\u0634 \u0635\u0627\u0641\u06CC \u062F\u0627\u0626\u0645\u06CC \u0646\u06CC\u0633\u062A\u060C \u0627\u0645\u0627 \u062F\u0631 \u0635\u0648\u0631\u062A \u0631\u0639\u0627\u06CC\u062A \u0645\u0631\u0627\u0642\u0628\u062A\u200C\u0647\u0627\u06CC \u0644\u0627\u0632\u0645 \u0628\u0639\u062F \u0627\u0632 \u0635\u0627\u0641\u06CC\u060C \u0627\u062B\u0631\u0627\u062A \u0622\u0646 \u062D\u062F\u0648\u062F \u0686\u0647\u0627\u0631 \u062A\u0627 \u06F6 \u0645\u0627\u0647 \u0631\u0648\u06CC\xA0\u0645\u0648\u0647\u0627\xA0\u0628\u0627\u0642\u06CC \u0645\u06CC\u200C\u0645\u0627\u0646\u062F",
            rating: 4.5,
            price: 1e5,
            discount_price: 9e4,
            is_bookmarked: true,
            has_tel: true,
            has_phone_number: false,
            showing_phone_number: "09381412419",
            service_id: 1,
            service: {
              id: 1,
              title: "\u062E\u062F\u0645\u0627\u062A \u0646\u0627\u062E\u0646",
              image: "https://via.placeholder.com/57x57.png/00ddaa?text=minus",
              is_active: 1,
              parent_id: null,
              created_at: "2024-04-12T16:14:23.000000Z",
              updated_at: "2024-04-12T16:14:23.000000Z"
            },
            user_id: 1,
            user: {
              id: 1,
              full_name: "\u0632\u06CC\u0628\u0627 \u0627\u0639\u0638\u0645\u06CC",
              phone_number: "09381412419",
              avatar: "/images/artist/2.png",
              has_blue_tick: true
            },
            images: ["/images/artist/1.jpg", "/images/artist/1.jpg"],
            work_hours: [
              {
                "day_index": 1,
                "start_hour": "09:12",
                "end_hour": "08:00"
              },
              {
                "day_index": 2,
                "start_hour": "09:12",
                "end_hour": "08:00"
              },
              {
                "day_index": 3,
                "start_hour": "09:12",
                "end_hour": "08:00"
              },
              {
                "day_index": 4,
                "start_hour": "09:12",
                "end_hour": "08:00"
              }
            ]
          },
          {
            id: 1,
            title: "\u062E\u062F\u0645\u0627\u062A \u0646\u0627\u062E\u0646",
            description: "\u06A9\u0631\u0627\u062A\u06CC\u0646\u0647 \u0645\u0648\xA0\u06CC\u06A9 \u0631\u0648\u0634 \u0645\u0648\u062B\u0631 \u0628\u0631\u0627\u06CC \u0635\u0627\u0641\u06CC\u060C \u062F\u0631\u062E\u0634\u0646\u062F\u06AF\u06CC \u0648 \u0634\u0627\u062F\u0627\u0628\u06CC\xA0\u0645\u0648\u0647\u0627\u06CC\xA0\u0641\u0631 \u0627\u0633\u062A. \u0632\u0646\u0627\u0646 \u0648 \u0645\u0631\u062F\u0627\u0646\u06CC \u06A9\u0647\xA0\u0645\u0648\u0647\u0627\u06CC\xA0\u0648\u0632\u060C \u0641\u0631 \u06CC\u0627 \u0645\u062C\u0639\u062F \u062F\u0627\u0631\u0646\u062F \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u0646\u062F \u0628\u0647 \u06A9\u0645\u06A9 \u0627\u06CC\u0646 \u0631\u0648\u0634\u060C \u0632\u06CC\u0628\u0627\u06CC\u06CC \u0648 \u0637\u0631\u0627\u0648\u062A\xA0\u0645\u0648\u0647\u0627\u06CC\xA0\u062E\u0648\u062F \u0631\u0627 \u0627\u0641\u0632\u0627\u06CC\u0634 \u062F\u0647\u0646\u062F. \u062F\u0631 \u0648\u0627\u0642\u0639\xA0\u06A9\u0631\u0627\u062A\u06CC\u0646\u0647 \u0645\u0648\xA0\u06CC\u06A9 \u0631\u0648\u0634 \u0635\u0627\u0641\u06CC \u062F\u0627\u0626\u0645\u06CC \u0646\u06CC\u0633\u062A\u060C \u0627\u0645\u0627 \u062F\u0631 \u0635\u0648\u0631\u062A \u0631\u0639\u0627\u06CC\u062A \u0645\u0631\u0627\u0642\u0628\u062A\u200C\u0647\u0627\u06CC \u0644\u0627\u0632\u0645 \u0628\u0639\u062F \u0627\u0632 \u0635\u0627\u0641\u06CC\u060C \u0627\u062B\u0631\u0627\u062A \u0622\u0646 \u062D\u062F\u0648\u062F \u0686\u0647\u0627\u0631 \u062A\u0627 \u06F6 \u0645\u0627\u0647 \u0631\u0648\u06CC\xA0\u0645\u0648\u0647\u0627\xA0\u0628\u0627\u0642\u06CC \u0645\u06CC\u200C\u0645\u0627\u0646\u062F",
            rating: 4.5,
            price: 1e5,
            discount_price: 9e4,
            is_bookmarked: true,
            has_tel: true,
            has_phone_number: false,
            showing_phone_number: "09381412419",
            service_id: 1,
            service: {
              id: 1,
              title: "\u062E\u062F\u0645\u0627\u062A \u0646\u0627\u062E\u0646",
              image: "https://via.placeholder.com/57x57.png/00ddaa?text=minus",
              is_active: 1,
              parent_id: null,
              created_at: "2024-04-12T16:14:23.000000Z",
              updated_at: "2024-04-12T16:14:23.000000Z"
            },
            user_id: 1,
            user: {
              id: 1,
              full_name: "\u0632\u06CC\u0628\u0627 \u0627\u0639\u0638\u0645\u06CC",
              phone_number: "09381412419",
              avatar: "/images/artist/2.png",
              has_blue_tick: true
            },
            images: ["/images/artist/1.jpg", "/images/artist/1.jpg"],
            work_hours: [
              {
                "day_index": 1,
                "start_hour": "09:12",
                "end_hour": "08:00"
              },
              {
                "day_index": 2,
                "start_hour": "09:12",
                "end_hour": "08:00"
              },
              {
                "day_index": 3,
                "start_hour": "09:12",
                "end_hour": "08:00"
              },
              {
                "day_index": 4,
                "start_hour": "09:12",
                "end_hour": "08:00"
              }
            ]
          },
          {
            id: 1,
            title: "\u062E\u062F\u0645\u0627\u062A \u0646\u0627\u062E\u0646",
            description: "\u06A9\u0631\u0627\u062A\u06CC\u0646\u0647 \u0645\u0648\xA0\u06CC\u06A9 \u0631\u0648\u0634 \u0645\u0648\u062B\u0631 \u0628\u0631\u0627\u06CC \u0635\u0627\u0641\u06CC\u060C \u062F\u0631\u062E\u0634\u0646\u062F\u06AF\u06CC \u0648 \u0634\u0627\u062F\u0627\u0628\u06CC\xA0\u0645\u0648\u0647\u0627\u06CC\xA0\u0641\u0631 \u0627\u0633\u062A. \u0632\u0646\u0627\u0646 \u0648 \u0645\u0631\u062F\u0627\u0646\u06CC \u06A9\u0647\xA0\u0645\u0648\u0647\u0627\u06CC\xA0\u0648\u0632\u060C \u0641\u0631 \u06CC\u0627 \u0645\u062C\u0639\u062F \u062F\u0627\u0631\u0646\u062F \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u0646\u062F \u0628\u0647 \u06A9\u0645\u06A9 \u0627\u06CC\u0646 \u0631\u0648\u0634\u060C \u0632\u06CC\u0628\u0627\u06CC\u06CC \u0648 \u0637\u0631\u0627\u0648\u062A\xA0\u0645\u0648\u0647\u0627\u06CC\xA0\u062E\u0648\u062F \u0631\u0627 \u0627\u0641\u0632\u0627\u06CC\u0634 \u062F\u0647\u0646\u062F. \u062F\u0631 \u0648\u0627\u0642\u0639\xA0\u06A9\u0631\u0627\u062A\u06CC\u0646\u0647 \u0645\u0648\xA0\u06CC\u06A9 \u0631\u0648\u0634 \u0635\u0627\u0641\u06CC \u062F\u0627\u0626\u0645\u06CC \u0646\u06CC\u0633\u062A\u060C \u0627\u0645\u0627 \u062F\u0631 \u0635\u0648\u0631\u062A \u0631\u0639\u0627\u06CC\u062A \u0645\u0631\u0627\u0642\u0628\u062A\u200C\u0647\u0627\u06CC \u0644\u0627\u0632\u0645 \u0628\u0639\u062F \u0627\u0632 \u0635\u0627\u0641\u06CC\u060C \u0627\u062B\u0631\u0627\u062A \u0622\u0646 \u062D\u062F\u0648\u062F \u0686\u0647\u0627\u0631 \u062A\u0627 \u06F6 \u0645\u0627\u0647 \u0631\u0648\u06CC\xA0\u0645\u0648\u0647\u0627\xA0\u0628\u0627\u0642\u06CC \u0645\u06CC\u200C\u0645\u0627\u0646\u062F",
            rating: 4.5,
            price: 1e5,
            discount_price: 9e4,
            is_bookmarked: true,
            has_tel: true,
            has_phone_number: false,
            showing_phone_number: "09381412419",
            service_id: 1,
            service: {
              id: 1,
              title: "\u062E\u062F\u0645\u0627\u062A \u0646\u0627\u062E\u0646",
              image: "https://via.placeholder.com/57x57.png/00ddaa?text=minus",
              is_active: 1,
              parent_id: null,
              created_at: "2024-04-12T16:14:23.000000Z",
              updated_at: "2024-04-12T16:14:23.000000Z"
            },
            user_id: 1,
            user: {
              id: 1,
              full_name: "\u0632\u06CC\u0628\u0627 \u0627\u0639\u0638\u0645\u06CC",
              phone_number: "09381412419",
              avatar: "/images/artist/2.png",
              has_blue_tick: true
            },
            images: ["/images/artist/1.jpg", "/images/artist/1.jpg"],
            work_hours: [
              {
                "day_index": 1,
                "start_hour": "09:12",
                "end_hour": "08:00"
              },
              {
                "day_index": 2,
                "start_hour": "09:12",
                "end_hour": "08:00"
              },
              {
                "day_index": 3,
                "start_hour": "09:12",
                "end_hour": "08:00"
              },
              {
                "day_index": 4,
                "start_hour": "09:12",
                "end_hour": "08:00"
              }
            ]
          },
          {
            id: 1,
            title: "\u062E\u062F\u0645\u0627\u062A \u0646\u0627\u062E\u0646",
            description: "\u06A9\u0631\u0627\u062A\u06CC\u0646\u0647 \u0645\u0648\xA0\u06CC\u06A9 \u0631\u0648\u0634 \u0645\u0648\u062B\u0631 \u0628\u0631\u0627\u06CC \u0635\u0627\u0641\u06CC\u060C \u062F\u0631\u062E\u0634\u0646\u062F\u06AF\u06CC \u0648 \u0634\u0627\u062F\u0627\u0628\u06CC\xA0\u0645\u0648\u0647\u0627\u06CC\xA0\u0641\u0631 \u0627\u0633\u062A. \u0632\u0646\u0627\u0646 \u0648 \u0645\u0631\u062F\u0627\u0646\u06CC \u06A9\u0647\xA0\u0645\u0648\u0647\u0627\u06CC\xA0\u0648\u0632\u060C \u0641\u0631 \u06CC\u0627 \u0645\u062C\u0639\u062F \u062F\u0627\u0631\u0646\u062F \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u0646\u062F \u0628\u0647 \u06A9\u0645\u06A9 \u0627\u06CC\u0646 \u0631\u0648\u0634\u060C \u0632\u06CC\u0628\u0627\u06CC\u06CC \u0648 \u0637\u0631\u0627\u0648\u062A\xA0\u0645\u0648\u0647\u0627\u06CC\xA0\u062E\u0648\u062F \u0631\u0627 \u0627\u0641\u0632\u0627\u06CC\u0634 \u062F\u0647\u0646\u062F. \u062F\u0631 \u0648\u0627\u0642\u0639\xA0\u06A9\u0631\u0627\u062A\u06CC\u0646\u0647 \u0645\u0648\xA0\u06CC\u06A9 \u0631\u0648\u0634 \u0635\u0627\u0641\u06CC \u062F\u0627\u0626\u0645\u06CC \u0646\u06CC\u0633\u062A\u060C \u0627\u0645\u0627 \u062F\u0631 \u0635\u0648\u0631\u062A \u0631\u0639\u0627\u06CC\u062A \u0645\u0631\u0627\u0642\u0628\u062A\u200C\u0647\u0627\u06CC \u0644\u0627\u0632\u0645 \u0628\u0639\u062F \u0627\u0632 \u0635\u0627\u0641\u06CC\u060C \u0627\u062B\u0631\u0627\u062A \u0622\u0646 \u062D\u062F\u0648\u062F \u0686\u0647\u0627\u0631 \u062A\u0627 \u06F6 \u0645\u0627\u0647 \u0631\u0648\u06CC\xA0\u0645\u0648\u0647\u0627\xA0\u0628\u0627\u0642\u06CC \u0645\u06CC\u200C\u0645\u0627\u0646\u062F",
            rating: 4.5,
            price: 1e5,
            discount_price: 9e4,
            is_bookmarked: true,
            has_tel: true,
            has_phone_number: false,
            showing_phone_number: "09381412419",
            service_id: 1,
            service: {
              id: 1,
              title: "\u062E\u062F\u0645\u0627\u062A \u0646\u0627\u062E\u0646",
              image: "https://via.placeholder.com/57x57.png/00ddaa?text=minus",
              is_active: 1,
              parent_id: null,
              created_at: "2024-04-12T16:14:23.000000Z",
              updated_at: "2024-04-12T16:14:23.000000Z"
            },
            user_id: 1,
            user: {
              id: 1,
              full_name: "\u0632\u06CC\u0628\u0627 \u0627\u0639\u0638\u0645\u06CC",
              phone_number: "09381412419",
              avatar: "/images/artist/2.png",
              has_blue_tick: true
            },
            images: ["/images/artist/1.jpg", "/images/artist/1.jpg"],
            work_hours: [
              {
                "day_index": 1,
                "start_hour": "09:12",
                "end_hour": "08:00"
              },
              {
                "day_index": 2,
                "start_hour": "09:12",
                "end_hour": "08:00"
              },
              {
                "day_index": 3,
                "start_hour": "09:12",
                "end_hour": "08:00"
              },
              {
                "day_index": 4,
                "start_hour": "09:12",
                "end_hour": "08:00"
              }
            ]
          },
          {
            id: 1,
            title: "\u062E\u062F\u0645\u0627\u062A \u0646\u0627\u062E\u0646",
            description: "\u06A9\u0631\u0627\u062A\u06CC\u0646\u0647 \u0645\u0648\xA0\u06CC\u06A9 \u0631\u0648\u0634 \u0645\u0648\u062B\u0631 \u0628\u0631\u0627\u06CC \u0635\u0627\u0641\u06CC\u060C \u062F\u0631\u062E\u0634\u0646\u062F\u06AF\u06CC \u0648 \u0634\u0627\u062F\u0627\u0628\u06CC\xA0\u0645\u0648\u0647\u0627\u06CC\xA0\u0641\u0631 \u0627\u0633\u062A. \u0632\u0646\u0627\u0646 \u0648 \u0645\u0631\u062F\u0627\u0646\u06CC \u06A9\u0647\xA0\u0645\u0648\u0647\u0627\u06CC\xA0\u0648\u0632\u060C \u0641\u0631 \u06CC\u0627 \u0645\u062C\u0639\u062F \u062F\u0627\u0631\u0646\u062F \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u0646\u062F \u0628\u0647 \u06A9\u0645\u06A9 \u0627\u06CC\u0646 \u0631\u0648\u0634\u060C \u0632\u06CC\u0628\u0627\u06CC\u06CC \u0648 \u0637\u0631\u0627\u0648\u062A\xA0\u0645\u0648\u0647\u0627\u06CC\xA0\u062E\u0648\u062F \u0631\u0627 \u0627\u0641\u0632\u0627\u06CC\u0634 \u062F\u0647\u0646\u062F. \u062F\u0631 \u0648\u0627\u0642\u0639\xA0\u06A9\u0631\u0627\u062A\u06CC\u0646\u0647 \u0645\u0648\xA0\u06CC\u06A9 \u0631\u0648\u0634 \u0635\u0627\u0641\u06CC \u062F\u0627\u0626\u0645\u06CC \u0646\u06CC\u0633\u062A\u060C \u0627\u0645\u0627 \u062F\u0631 \u0635\u0648\u0631\u062A \u0631\u0639\u0627\u06CC\u062A \u0645\u0631\u0627\u0642\u0628\u062A\u200C\u0647\u0627\u06CC \u0644\u0627\u0632\u0645 \u0628\u0639\u062F \u0627\u0632 \u0635\u0627\u0641\u06CC\u060C \u0627\u062B\u0631\u0627\u062A \u0622\u0646 \u062D\u062F\u0648\u062F \u0686\u0647\u0627\u0631 \u062A\u0627 \u06F6 \u0645\u0627\u0647 \u0631\u0648\u06CC\xA0\u0645\u0648\u0647\u0627\xA0\u0628\u0627\u0642\u06CC \u0645\u06CC\u200C\u0645\u0627\u0646\u062F",
            rating: 4.5,
            price: 1e5,
            discount_price: 9e4,
            is_bookmarked: true,
            has_tel: true,
            has_phone_number: false,
            showing_phone_number: "09381412419",
            service_id: 1,
            service: {
              id: 1,
              title: "\u062E\u062F\u0645\u0627\u062A \u0646\u0627\u062E\u0646",
              image: "https://via.placeholder.com/57x57.png/00ddaa?text=minus",
              is_active: 1,
              parent_id: null,
              created_at: "2024-04-12T16:14:23.000000Z",
              updated_at: "2024-04-12T16:14:23.000000Z"
            },
            user_id: 1,
            user: {
              id: 1,
              full_name: "\u0632\u06CC\u0628\u0627 \u0627\u0639\u0638\u0645\u06CC",
              phone_number: "09381412419",
              avatar: "/images/artist/2.png",
              has_blue_tick: true
            },
            images: ["/images/artist/1.jpg", "/images/artist/1.jpg"],
            work_hours: [
              {
                "day_index": 1,
                "start_hour": "09:12",
                "end_hour": "08:00"
              },
              {
                "day_index": 2,
                "start_hour": "09:12",
                "end_hour": "08:00"
              },
              {
                "day_index": 3,
                "start_hour": "09:12",
                "end_hour": "08:00"
              },
              {
                "day_index": 4,
                "start_hour": "09:12",
                "end_hour": "08:00"
              }
            ]
          },
          {
            id: 1,
            title: "\u062E\u062F\u0645\u0627\u062A \u0646\u0627\u062E\u0646",
            description: "\u06A9\u0631\u0627\u062A\u06CC\u0646\u0647 \u0645\u0648\xA0\u06CC\u06A9 \u0631\u0648\u0634 \u0645\u0648\u062B\u0631 \u0628\u0631\u0627\u06CC \u0635\u0627\u0641\u06CC\u060C \u062F\u0631\u062E\u0634\u0646\u062F\u06AF\u06CC \u0648 \u0634\u0627\u062F\u0627\u0628\u06CC\xA0\u0645\u0648\u0647\u0627\u06CC\xA0\u0641\u0631 \u0627\u0633\u062A. \u0632\u0646\u0627\u0646 \u0648 \u0645\u0631\u062F\u0627\u0646\u06CC \u06A9\u0647\xA0\u0645\u0648\u0647\u0627\u06CC\xA0\u0648\u0632\u060C \u0641\u0631 \u06CC\u0627 \u0645\u062C\u0639\u062F \u062F\u0627\u0631\u0646\u062F \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u0646\u062F \u0628\u0647 \u06A9\u0645\u06A9 \u0627\u06CC\u0646 \u0631\u0648\u0634\u060C \u0632\u06CC\u0628\u0627\u06CC\u06CC \u0648 \u0637\u0631\u0627\u0648\u062A\xA0\u0645\u0648\u0647\u0627\u06CC\xA0\u062E\u0648\u062F \u0631\u0627 \u0627\u0641\u0632\u0627\u06CC\u0634 \u062F\u0647\u0646\u062F. \u062F\u0631 \u0648\u0627\u0642\u0639\xA0\u06A9\u0631\u0627\u062A\u06CC\u0646\u0647 \u0645\u0648\xA0\u06CC\u06A9 \u0631\u0648\u0634 \u0635\u0627\u0641\u06CC \u062F\u0627\u0626\u0645\u06CC \u0646\u06CC\u0633\u062A\u060C \u0627\u0645\u0627 \u062F\u0631 \u0635\u0648\u0631\u062A \u0631\u0639\u0627\u06CC\u062A \u0645\u0631\u0627\u0642\u0628\u062A\u200C\u0647\u0627\u06CC \u0644\u0627\u0632\u0645 \u0628\u0639\u062F \u0627\u0632 \u0635\u0627\u0641\u06CC\u060C \u0627\u062B\u0631\u0627\u062A \u0622\u0646 \u062D\u062F\u0648\u062F \u0686\u0647\u0627\u0631 \u062A\u0627 \u06F6 \u0645\u0627\u0647 \u0631\u0648\u06CC\xA0\u0645\u0648\u0647\u0627\xA0\u0628\u0627\u0642\u06CC \u0645\u06CC\u200C\u0645\u0627\u0646\u062F",
            rating: 4.5,
            price: 1e5,
            discount_price: 9e4,
            is_bookmarked: true,
            has_tel: true,
            has_phone_number: false,
            showing_phone_number: "09381412419",
            service_id: 1,
            service: {
              id: 1,
              title: "\u062E\u062F\u0645\u0627\u062A \u0646\u0627\u062E\u0646",
              image: "https://via.placeholder.com/57x57.png/00ddaa?text=minus",
              is_active: 1,
              parent_id: null,
              created_at: "2024-04-12T16:14:23.000000Z",
              updated_at: "2024-04-12T16:14:23.000000Z"
            },
            user_id: 1,
            user: {
              id: 1,
              full_name: "\u0632\u06CC\u0628\u0627 \u0627\u0639\u0638\u0645\u06CC",
              phone_number: "09381412419",
              avatar: "/images/artist/2.png",
              has_blue_tick: true
            },
            images: ["/images/artist/1.jpg", "/images/artist/1.jpg"],
            work_hours: [
              {
                "day_index": 1,
                "start_hour": "09:12",
                "end_hour": "08:00"
              },
              {
                "day_index": 2,
                "start_hour": "09:12",
                "end_hour": "08:00"
              },
              {
                "day_index": 3,
                "start_hour": "09:12",
                "end_hour": "08:00"
              },
              {
                "day_index": 4,
                "start_hour": "09:12",
                "end_hour": "08:00"
              }
            ]
          },
          {
            id: 1,
            title: "\u062E\u062F\u0645\u0627\u062A \u0646\u0627\u062E\u0646",
            description: "\u06A9\u0631\u0627\u062A\u06CC\u0646\u0647 \u0645\u0648\xA0\u06CC\u06A9 \u0631\u0648\u0634 \u0645\u0648\u062B\u0631 \u0628\u0631\u0627\u06CC \u0635\u0627\u0641\u06CC\u060C \u062F\u0631\u062E\u0634\u0646\u062F\u06AF\u06CC \u0648 \u0634\u0627\u062F\u0627\u0628\u06CC\xA0\u0645\u0648\u0647\u0627\u06CC\xA0\u0641\u0631 \u0627\u0633\u062A. \u0632\u0646\u0627\u0646 \u0648 \u0645\u0631\u062F\u0627\u0646\u06CC \u06A9\u0647\xA0\u0645\u0648\u0647\u0627\u06CC\xA0\u0648\u0632\u060C \u0641\u0631 \u06CC\u0627 \u0645\u062C\u0639\u062F \u062F\u0627\u0631\u0646\u062F \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u0646\u062F \u0628\u0647 \u06A9\u0645\u06A9 \u0627\u06CC\u0646 \u0631\u0648\u0634\u060C \u0632\u06CC\u0628\u0627\u06CC\u06CC \u0648 \u0637\u0631\u0627\u0648\u062A\xA0\u0645\u0648\u0647\u0627\u06CC\xA0\u062E\u0648\u062F \u0631\u0627 \u0627\u0641\u0632\u0627\u06CC\u0634 \u062F\u0647\u0646\u062F. \u062F\u0631 \u0648\u0627\u0642\u0639\xA0\u06A9\u0631\u0627\u062A\u06CC\u0646\u0647 \u0645\u0648\xA0\u06CC\u06A9 \u0631\u0648\u0634 \u0635\u0627\u0641\u06CC \u062F\u0627\u0626\u0645\u06CC \u0646\u06CC\u0633\u062A\u060C \u0627\u0645\u0627 \u062F\u0631 \u0635\u0648\u0631\u062A \u0631\u0639\u0627\u06CC\u062A \u0645\u0631\u0627\u0642\u0628\u062A\u200C\u0647\u0627\u06CC \u0644\u0627\u0632\u0645 \u0628\u0639\u062F \u0627\u0632 \u0635\u0627\u0641\u06CC\u060C \u0627\u062B\u0631\u0627\u062A \u0622\u0646 \u062D\u062F\u0648\u062F \u0686\u0647\u0627\u0631 \u062A\u0627 \u06F6 \u0645\u0627\u0647 \u0631\u0648\u06CC\xA0\u0645\u0648\u0647\u0627\xA0\u0628\u0627\u0642\u06CC \u0645\u06CC\u200C\u0645\u0627\u0646\u062F",
            rating: 4.5,
            price: 1e5,
            discount_price: 9e4,
            is_bookmarked: true,
            has_tel: true,
            has_phone_number: false,
            showing_phone_number: "09381412419",
            service_id: 1,
            service: {
              id: 1,
              title: "\u062E\u062F\u0645\u0627\u062A \u0646\u0627\u062E\u0646",
              image: "https://via.placeholder.com/57x57.png/00ddaa?text=minus",
              is_active: 1,
              parent_id: null,
              created_at: "2024-04-12T16:14:23.000000Z",
              updated_at: "2024-04-12T16:14:23.000000Z"
            },
            user_id: 1,
            user: {
              id: 1,
              full_name: "\u0632\u06CC\u0628\u0627 \u0627\u0639\u0638\u0645\u06CC",
              phone_number: "09381412419",
              avatar: "/images/artist/2.png",
              has_blue_tick: true
            },
            images: ["/images/artist/1.jpg", "/images/artist/1.jpg"],
            work_hours: [
              {
                "day_index": 1,
                "start_hour": "09:12",
                "end_hour": "08:00"
              },
              {
                "day_index": 2,
                "start_hour": "09:12",
                "end_hour": "08:00"
              },
              {
                "day_index": 3,
                "start_hour": "09:12",
                "end_hour": "08:00"
              },
              {
                "day_index": 4,
                "start_hour": "09:12",
                "end_hour": "08:00"
              }
            ]
          },
          {
            id: 1,
            title: "\u062E\u062F\u0645\u0627\u062A \u0646\u0627\u062E\u0646",
            description: "\u06A9\u0631\u0627\u062A\u06CC\u0646\u0647 \u0645\u0648\xA0\u06CC\u06A9 \u0631\u0648\u0634 \u0645\u0648\u062B\u0631 \u0628\u0631\u0627\u06CC \u0635\u0627\u0641\u06CC\u060C \u062F\u0631\u062E\u0634\u0646\u062F\u06AF\u06CC \u0648 \u0634\u0627\u062F\u0627\u0628\u06CC\xA0\u0645\u0648\u0647\u0627\u06CC\xA0\u0641\u0631 \u0627\u0633\u062A. \u0632\u0646\u0627\u0646 \u0648 \u0645\u0631\u062F\u0627\u0646\u06CC \u06A9\u0647\xA0\u0645\u0648\u0647\u0627\u06CC\xA0\u0648\u0632\u060C \u0641\u0631 \u06CC\u0627 \u0645\u062C\u0639\u062F \u062F\u0627\u0631\u0646\u062F \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u0646\u062F \u0628\u0647 \u06A9\u0645\u06A9 \u0627\u06CC\u0646 \u0631\u0648\u0634\u060C \u0632\u06CC\u0628\u0627\u06CC\u06CC \u0648 \u0637\u0631\u0627\u0648\u062A\xA0\u0645\u0648\u0647\u0627\u06CC\xA0\u062E\u0648\u062F \u0631\u0627 \u0627\u0641\u0632\u0627\u06CC\u0634 \u062F\u0647\u0646\u062F. \u062F\u0631 \u0648\u0627\u0642\u0639\xA0\u06A9\u0631\u0627\u062A\u06CC\u0646\u0647 \u0645\u0648\xA0\u06CC\u06A9 \u0631\u0648\u0634 \u0635\u0627\u0641\u06CC \u062F\u0627\u0626\u0645\u06CC \u0646\u06CC\u0633\u062A\u060C \u0627\u0645\u0627 \u062F\u0631 \u0635\u0648\u0631\u062A \u0631\u0639\u0627\u06CC\u062A \u0645\u0631\u0627\u0642\u0628\u062A\u200C\u0647\u0627\u06CC \u0644\u0627\u0632\u0645 \u0628\u0639\u062F \u0627\u0632 \u0635\u0627\u0641\u06CC\u060C \u0627\u062B\u0631\u0627\u062A \u0622\u0646 \u062D\u062F\u0648\u062F \u0686\u0647\u0627\u0631 \u062A\u0627 \u06F6 \u0645\u0627\u0647 \u0631\u0648\u06CC\xA0\u0645\u0648\u0647\u0627\xA0\u0628\u0627\u0642\u06CC \u0645\u06CC\u200C\u0645\u0627\u0646\u062F",
            rating: 4.5,
            price: 1e5,
            discount_price: 9e4,
            is_bookmarked: true,
            has_tel: true,
            has_phone_number: false,
            showing_phone_number: "09381412419",
            service_id: 1,
            service: {
              id: 1,
              title: "\u062E\u062F\u0645\u0627\u062A \u0646\u0627\u062E\u0646",
              image: "https://via.placeholder.com/57x57.png/00ddaa?text=minus",
              is_active: 1,
              parent_id: null,
              created_at: "2024-04-12T16:14:23.000000Z",
              updated_at: "2024-04-12T16:14:23.000000Z"
            },
            user_id: 1,
            user: {
              id: 1,
              full_name: "\u0632\u06CC\u0628\u0627 \u0627\u0639\u0638\u0645\u06CC",
              phone_number: "09381412419",
              avatar: "/images/artist/2.png",
              has_blue_tick: true
            },
            images: ["/images/artist/1.jpg", "/images/artist/1.jpg"],
            work_hours: [
              {
                "day_index": 1,
                "start_hour": "09:12",
                "end_hour": "08:00"
              },
              {
                "day_index": 2,
                "start_hour": "09:12",
                "end_hour": "08:00"
              },
              {
                "day_index": 3,
                "start_hour": "09:12",
                "end_hour": "08:00"
              },
              {
                "day_index": 4,
                "start_hour": "09:12",
                "end_hour": "08:00"
              }
            ]
          },
          {
            id: 1,
            title: "\u062E\u062F\u0645\u0627\u062A \u0646\u0627\u062E\u0646",
            description: "\u06A9\u0631\u0627\u062A\u06CC\u0646\u0647 \u0645\u0648\xA0\u06CC\u06A9 \u0631\u0648\u0634 \u0645\u0648\u062B\u0631 \u0628\u0631\u0627\u06CC \u0635\u0627\u0641\u06CC\u060C \u062F\u0631\u062E\u0634\u0646\u062F\u06AF\u06CC \u0648 \u0634\u0627\u062F\u0627\u0628\u06CC\xA0\u0645\u0648\u0647\u0627\u06CC\xA0\u0641\u0631 \u0627\u0633\u062A. \u0632\u0646\u0627\u0646 \u0648 \u0645\u0631\u062F\u0627\u0646\u06CC \u06A9\u0647\xA0\u0645\u0648\u0647\u0627\u06CC\xA0\u0648\u0632\u060C \u0641\u0631 \u06CC\u0627 \u0645\u062C\u0639\u062F \u062F\u0627\u0631\u0646\u062F \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u0646\u062F \u0628\u0647 \u06A9\u0645\u06A9 \u0627\u06CC\u0646 \u0631\u0648\u0634\u060C \u0632\u06CC\u0628\u0627\u06CC\u06CC \u0648 \u0637\u0631\u0627\u0648\u062A\xA0\u0645\u0648\u0647\u0627\u06CC\xA0\u062E\u0648\u062F \u0631\u0627 \u0627\u0641\u0632\u0627\u06CC\u0634 \u062F\u0647\u0646\u062F. \u062F\u0631 \u0648\u0627\u0642\u0639\xA0\u06A9\u0631\u0627\u062A\u06CC\u0646\u0647 \u0645\u0648\xA0\u06CC\u06A9 \u0631\u0648\u0634 \u0635\u0627\u0641\u06CC \u062F\u0627\u0626\u0645\u06CC \u0646\u06CC\u0633\u062A\u060C \u0627\u0645\u0627 \u062F\u0631 \u0635\u0648\u0631\u062A \u0631\u0639\u0627\u06CC\u062A \u0645\u0631\u0627\u0642\u0628\u062A\u200C\u0647\u0627\u06CC \u0644\u0627\u0632\u0645 \u0628\u0639\u062F \u0627\u0632 \u0635\u0627\u0641\u06CC\u060C \u0627\u062B\u0631\u0627\u062A \u0622\u0646 \u062D\u062F\u0648\u062F \u0686\u0647\u0627\u0631 \u062A\u0627 \u06F6 \u0645\u0627\u0647 \u0631\u0648\u06CC\xA0\u0645\u0648\u0647\u0627\xA0\u0628\u0627\u0642\u06CC \u0645\u06CC\u200C\u0645\u0627\u0646\u062F",
            rating: 4.5,
            price: 1e5,
            discount_price: 9e4,
            is_bookmarked: true,
            has_tel: true,
            has_phone_number: false,
            showing_phone_number: "09381412419",
            service_id: 1,
            service: {
              id: 1,
              title: "\u062E\u062F\u0645\u0627\u062A \u0646\u0627\u062E\u0646",
              image: "https://via.placeholder.com/57x57.png/00ddaa?text=minus",
              is_active: 1,
              parent_id: null,
              created_at: "2024-04-12T16:14:23.000000Z",
              updated_at: "2024-04-12T16:14:23.000000Z"
            },
            user_id: 1,
            user: {
              id: 1,
              full_name: "\u0632\u06CC\u0628\u0627 \u0627\u0639\u0638\u0645\u06CC",
              phone_number: "09381412419",
              avatar: "/images/artist/2.png",
              has_blue_tick: true
            },
            images: ["/images/artist/1.jpg", "/images/artist/1.jpg"],
            work_hours: [
              {
                "day_index": 1,
                "start_hour": "09:12",
                "end_hour": "08:00"
              },
              {
                "day_index": 2,
                "start_hour": "09:12",
                "end_hour": "08:00"
              },
              {
                "day_index": 3,
                "start_hour": "09:12",
                "end_hour": "08:00"
              },
              {
                "day_index": 4,
                "start_hour": "09:12",
                "end_hour": "08:00"
              }
            ]
          },
          {
            id: 1,
            title: "\u062E\u062F\u0645\u0627\u062A \u0646\u0627\u062E\u0646",
            description: "\u06A9\u0631\u0627\u062A\u06CC\u0646\u0647 \u0645\u0648\xA0\u06CC\u06A9 \u0631\u0648\u0634 \u0645\u0648\u062B\u0631 \u0628\u0631\u0627\u06CC \u0635\u0627\u0641\u06CC\u060C \u062F\u0631\u062E\u0634\u0646\u062F\u06AF\u06CC \u0648 \u0634\u0627\u062F\u0627\u0628\u06CC\xA0\u0645\u0648\u0647\u0627\u06CC\xA0\u0641\u0631 \u0627\u0633\u062A. \u0632\u0646\u0627\u0646 \u0648 \u0645\u0631\u062F\u0627\u0646\u06CC \u06A9\u0647\xA0\u0645\u0648\u0647\u0627\u06CC\xA0\u0648\u0632\u060C \u0641\u0631 \u06CC\u0627 \u0645\u062C\u0639\u062F \u062F\u0627\u0631\u0646\u062F \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u0646\u062F \u0628\u0647 \u06A9\u0645\u06A9 \u0627\u06CC\u0646 \u0631\u0648\u0634\u060C \u0632\u06CC\u0628\u0627\u06CC\u06CC \u0648 \u0637\u0631\u0627\u0648\u062A\xA0\u0645\u0648\u0647\u0627\u06CC\xA0\u062E\u0648\u062F \u0631\u0627 \u0627\u0641\u0632\u0627\u06CC\u0634 \u062F\u0647\u0646\u062F. \u062F\u0631 \u0648\u0627\u0642\u0639\xA0\u06A9\u0631\u0627\u062A\u06CC\u0646\u0647 \u0645\u0648\xA0\u06CC\u06A9 \u0631\u0648\u0634 \u0635\u0627\u0641\u06CC \u062F\u0627\u0626\u0645\u06CC \u0646\u06CC\u0633\u062A\u060C \u0627\u0645\u0627 \u062F\u0631 \u0635\u0648\u0631\u062A \u0631\u0639\u0627\u06CC\u062A \u0645\u0631\u0627\u0642\u0628\u062A\u200C\u0647\u0627\u06CC \u0644\u0627\u0632\u0645 \u0628\u0639\u062F \u0627\u0632 \u0635\u0627\u0641\u06CC\u060C \u0627\u062B\u0631\u0627\u062A \u0622\u0646 \u062D\u062F\u0648\u062F \u0686\u0647\u0627\u0631 \u062A\u0627 \u06F6 \u0645\u0627\u0647 \u0631\u0648\u06CC\xA0\u0645\u0648\u0647\u0627\xA0\u0628\u0627\u0642\u06CC \u0645\u06CC\u200C\u0645\u0627\u0646\u062F",
            rating: 4.5,
            price: 1e5,
            discount_price: 9e4,
            is_bookmarked: true,
            has_tel: true,
            has_phone_number: false,
            showing_phone_number: "09381412419",
            service_id: 1,
            service: {
              id: 1,
              title: "\u062E\u062F\u0645\u0627\u062A \u0646\u0627\u062E\u0646",
              image: "https://via.placeholder.com/57x57.png/00ddaa?text=minus",
              is_active: 1,
              parent_id: null,
              created_at: "2024-04-12T16:14:23.000000Z",
              updated_at: "2024-04-12T16:14:23.000000Z"
            },
            user_id: 1,
            user: {
              id: 1,
              full_name: "\u0632\u06CC\u0628\u0627 \u0627\u0639\u0638\u0645\u06CC",
              phone_number: "09381412419",
              avatar: "/images/artist/2.png",
              has_blue_tick: true
            },
            images: ["/images/artist/1.jpg", "/images/artist/1.jpg"],
            work_hours: [
              {
                "day_index": 1,
                "start_hour": "09:12",
                "end_hour": "08:00"
              },
              {
                "day_index": 2,
                "start_hour": "09:12",
                "end_hour": "08:00"
              },
              {
                "day_index": 3,
                "start_hour": "09:12",
                "end_hour": "08:00"
              },
              {
                "day_index": 4,
                "start_hour": "09:12",
                "end_hour": "08:00"
              }
            ]
          },
          {
            id: 1,
            title: "\u062E\u062F\u0645\u0627\u062A \u0646\u0627\u062E\u0646",
            description: "\u06A9\u0631\u0627\u062A\u06CC\u0646\u0647 \u0645\u0648\xA0\u06CC\u06A9 \u0631\u0648\u0634 \u0645\u0648\u062B\u0631 \u0628\u0631\u0627\u06CC \u0635\u0627\u0641\u06CC\u060C \u062F\u0631\u062E\u0634\u0646\u062F\u06AF\u06CC \u0648 \u0634\u0627\u062F\u0627\u0628\u06CC\xA0\u0645\u0648\u0647\u0627\u06CC\xA0\u0641\u0631 \u0627\u0633\u062A. \u0632\u0646\u0627\u0646 \u0648 \u0645\u0631\u062F\u0627\u0646\u06CC \u06A9\u0647\xA0\u0645\u0648\u0647\u0627\u06CC\xA0\u0648\u0632\u060C \u0641\u0631 \u06CC\u0627 \u0645\u062C\u0639\u062F \u062F\u0627\u0631\u0646\u062F \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u0646\u062F \u0628\u0647 \u06A9\u0645\u06A9 \u0627\u06CC\u0646 \u0631\u0648\u0634\u060C \u0632\u06CC\u0628\u0627\u06CC\u06CC \u0648 \u0637\u0631\u0627\u0648\u062A\xA0\u0645\u0648\u0647\u0627\u06CC\xA0\u062E\u0648\u062F \u0631\u0627 \u0627\u0641\u0632\u0627\u06CC\u0634 \u062F\u0647\u0646\u062F. \u062F\u0631 \u0648\u0627\u0642\u0639\xA0\u06A9\u0631\u0627\u062A\u06CC\u0646\u0647 \u0645\u0648\xA0\u06CC\u06A9 \u0631\u0648\u0634 \u0635\u0627\u0641\u06CC \u062F\u0627\u0626\u0645\u06CC \u0646\u06CC\u0633\u062A\u060C \u0627\u0645\u0627 \u062F\u0631 \u0635\u0648\u0631\u062A \u0631\u0639\u0627\u06CC\u062A \u0645\u0631\u0627\u0642\u0628\u062A\u200C\u0647\u0627\u06CC \u0644\u0627\u0632\u0645 \u0628\u0639\u062F \u0627\u0632 \u0635\u0627\u0641\u06CC\u060C \u0627\u062B\u0631\u0627\u062A \u0622\u0646 \u062D\u062F\u0648\u062F \u0686\u0647\u0627\u0631 \u062A\u0627 \u06F6 \u0645\u0627\u0647 \u0631\u0648\u06CC\xA0\u0645\u0648\u0647\u0627\xA0\u0628\u0627\u0642\u06CC \u0645\u06CC\u200C\u0645\u0627\u0646\u062F",
            rating: 4.5,
            price: 1e5,
            discount_price: 9e4,
            is_bookmarked: true,
            has_tel: true,
            has_phone_number: false,
            showing_phone_number: "09381412419",
            service_id: 1,
            service: {
              id: 1,
              title: "\u062E\u062F\u0645\u0627\u062A \u0646\u0627\u062E\u0646",
              image: "https://via.placeholder.com/57x57.png/00ddaa?text=minus",
              is_active: 1,
              parent_id: null,
              created_at: "2024-04-12T16:14:23.000000Z",
              updated_at: "2024-04-12T16:14:23.000000Z"
            },
            user_id: 1,
            user: {
              id: 1,
              full_name: "\u0632\u06CC\u0628\u0627 \u0627\u0639\u0638\u0645\u06CC",
              phone_number: "09381412419",
              avatar: "/images/artist/2.png",
              has_blue_tick: true
            },
            images: ["/images/artist/1.jpg", "/images/artist/1.jpg"],
            work_hours: [
              {
                "day_index": 1,
                "start_hour": "09:12",
                "end_hour": "08:00"
              },
              {
                "day_index": 2,
                "start_hour": "09:12",
                "end_hour": "08:00"
              },
              {
                "day_index": 3,
                "start_hour": "09:12",
                "end_hour": "08:00"
              },
              {
                "day_index": 4,
                "start_hour": "09:12",
                "end_hour": "08:00"
              }
            ]
          },
          {
            id: 1,
            title: "\u062E\u062F\u0645\u0627\u062A \u0646\u0627\u062E\u0646",
            description: "\u06A9\u0631\u0627\u062A\u06CC\u0646\u0647 \u0645\u0648\xA0\u06CC\u06A9 \u0631\u0648\u0634 \u0645\u0648\u062B\u0631 \u0628\u0631\u0627\u06CC \u0635\u0627\u0641\u06CC\u060C \u062F\u0631\u062E\u0634\u0646\u062F\u06AF\u06CC \u0648 \u0634\u0627\u062F\u0627\u0628\u06CC\xA0\u0645\u0648\u0647\u0627\u06CC\xA0\u0641\u0631 \u0627\u0633\u062A. \u0632\u0646\u0627\u0646 \u0648 \u0645\u0631\u062F\u0627\u0646\u06CC \u06A9\u0647\xA0\u0645\u0648\u0647\u0627\u06CC\xA0\u0648\u0632\u060C \u0641\u0631 \u06CC\u0627 \u0645\u062C\u0639\u062F \u062F\u0627\u0631\u0646\u062F \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u0646\u062F \u0628\u0647 \u06A9\u0645\u06A9 \u0627\u06CC\u0646 \u0631\u0648\u0634\u060C \u0632\u06CC\u0628\u0627\u06CC\u06CC \u0648 \u0637\u0631\u0627\u0648\u062A\xA0\u0645\u0648\u0647\u0627\u06CC\xA0\u062E\u0648\u062F \u0631\u0627 \u0627\u0641\u0632\u0627\u06CC\u0634 \u062F\u0647\u0646\u062F. \u062F\u0631 \u0648\u0627\u0642\u0639\xA0\u06A9\u0631\u0627\u062A\u06CC\u0646\u0647 \u0645\u0648\xA0\u06CC\u06A9 \u0631\u0648\u0634 \u0635\u0627\u0641\u06CC \u062F\u0627\u0626\u0645\u06CC \u0646\u06CC\u0633\u062A\u060C \u0627\u0645\u0627 \u062F\u0631 \u0635\u0648\u0631\u062A \u0631\u0639\u0627\u06CC\u062A \u0645\u0631\u0627\u0642\u0628\u062A\u200C\u0647\u0627\u06CC \u0644\u0627\u0632\u0645 \u0628\u0639\u062F \u0627\u0632 \u0635\u0627\u0641\u06CC\u060C \u0627\u062B\u0631\u0627\u062A \u0622\u0646 \u062D\u062F\u0648\u062F \u0686\u0647\u0627\u0631 \u062A\u0627 \u06F6 \u0645\u0627\u0647 \u0631\u0648\u06CC\xA0\u0645\u0648\u0647\u0627\xA0\u0628\u0627\u0642\u06CC \u0645\u06CC\u200C\u0645\u0627\u0646\u062F",
            rating: 4.5,
            price: 1e5,
            discount_price: 9e4,
            is_bookmarked: true,
            has_tel: true,
            has_phone_number: false,
            showing_phone_number: "09381412419",
            service_id: 1,
            service: {
              id: 1,
              title: "\u062E\u062F\u0645\u0627\u062A \u0646\u0627\u062E\u0646",
              image: "https://via.placeholder.com/57x57.png/00ddaa?text=minus",
              is_active: 1,
              parent_id: null,
              created_at: "2024-04-12T16:14:23.000000Z",
              updated_at: "2024-04-12T16:14:23.000000Z"
            },
            user_id: 1,
            user: {
              id: 1,
              full_name: "\u0632\u06CC\u0628\u0627 \u0627\u0639\u0638\u0645\u06CC",
              phone_number: "09381412419",
              avatar: "/images/artist/2.png",
              has_blue_tick: true
            },
            images: ["/images/artist/1.jpg", "/images/artist/1.jpg"],
            work_hours: [
              {
                "day_index": 1,
                "start_hour": "09:12",
                "end_hour": "08:00"
              },
              {
                "day_index": 2,
                "start_hour": "09:12",
                "end_hour": "08:00"
              },
              {
                "day_index": 3,
                "start_hour": "09:12",
                "end_hour": "08:00"
              },
              {
                "day_index": 4,
                "start_hour": "09:12",
                "end_hour": "08:00"
              }
            ]
          },
          {
            id: 1,
            title: "\u062E\u062F\u0645\u0627\u062A \u0646\u0627\u062E\u0646",
            description: "\u06A9\u0631\u0627\u062A\u06CC\u0646\u0647 \u0645\u0648\xA0\u06CC\u06A9 \u0631\u0648\u0634 \u0645\u0648\u062B\u0631 \u0628\u0631\u0627\u06CC \u0635\u0627\u0641\u06CC\u060C \u062F\u0631\u062E\u0634\u0646\u062F\u06AF\u06CC \u0648 \u0634\u0627\u062F\u0627\u0628\u06CC\xA0\u0645\u0648\u0647\u0627\u06CC\xA0\u0641\u0631 \u0627\u0633\u062A. \u0632\u0646\u0627\u0646 \u0648 \u0645\u0631\u062F\u0627\u0646\u06CC \u06A9\u0647\xA0\u0645\u0648\u0647\u0627\u06CC\xA0\u0648\u0632\u060C \u0641\u0631 \u06CC\u0627 \u0645\u062C\u0639\u062F \u062F\u0627\u0631\u0646\u062F \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u0646\u062F \u0628\u0647 \u06A9\u0645\u06A9 \u0627\u06CC\u0646 \u0631\u0648\u0634\u060C \u0632\u06CC\u0628\u0627\u06CC\u06CC \u0648 \u0637\u0631\u0627\u0648\u062A\xA0\u0645\u0648\u0647\u0627\u06CC\xA0\u062E\u0648\u062F \u0631\u0627 \u0627\u0641\u0632\u0627\u06CC\u0634 \u062F\u0647\u0646\u062F. \u062F\u0631 \u0648\u0627\u0642\u0639\xA0\u06A9\u0631\u0627\u062A\u06CC\u0646\u0647 \u0645\u0648\xA0\u06CC\u06A9 \u0631\u0648\u0634 \u0635\u0627\u0641\u06CC \u062F\u0627\u0626\u0645\u06CC \u0646\u06CC\u0633\u062A\u060C \u0627\u0645\u0627 \u062F\u0631 \u0635\u0648\u0631\u062A \u0631\u0639\u0627\u06CC\u062A \u0645\u0631\u0627\u0642\u0628\u062A\u200C\u0647\u0627\u06CC \u0644\u0627\u0632\u0645 \u0628\u0639\u062F \u0627\u0632 \u0635\u0627\u0641\u06CC\u060C \u0627\u062B\u0631\u0627\u062A \u0622\u0646 \u062D\u062F\u0648\u062F \u0686\u0647\u0627\u0631 \u062A\u0627 \u06F6 \u0645\u0627\u0647 \u0631\u0648\u06CC\xA0\u0645\u0648\u0647\u0627\xA0\u0628\u0627\u0642\u06CC \u0645\u06CC\u200C\u0645\u0627\u0646\u062F",
            rating: 4.5,
            price: 1e5,
            discount_price: 9e4,
            is_bookmarked: true,
            has_tel: true,
            has_phone_number: false,
            showing_phone_number: "09381412419",
            service_id: 1,
            service: {
              id: 1,
              title: "\u062E\u062F\u0645\u0627\u062A \u0646\u0627\u062E\u0646",
              image: "https://via.placeholder.com/57x57.png/00ddaa?text=minus",
              is_active: 1,
              parent_id: null,
              created_at: "2024-04-12T16:14:23.000000Z",
              updated_at: "2024-04-12T16:14:23.000000Z"
            },
            user_id: 1,
            user: {
              id: 1,
              full_name: "\u0632\u06CC\u0628\u0627 \u0627\u0639\u0638\u0645\u06CC",
              phone_number: "09381412419",
              avatar: "/images/artist/2.png",
              has_blue_tick: true
            },
            images: ["/images/artist/1.jpg", "/images/artist/1.jpg"],
            work_hours: [
              {
                "day_index": 1,
                "start_hour": "09:12",
                "end_hour": "08:00"
              },
              {
                "day_index": 2,
                "start_hour": "09:12",
                "end_hour": "08:00"
              },
              {
                "day_index": 3,
                "start_hour": "09:12",
                "end_hour": "08:00"
              },
              {
                "day_index": 4,
                "start_hour": "09:12",
                "end_hour": "08:00"
              }
            ]
          },
          {
            id: 1,
            title: "\u062E\u062F\u0645\u0627\u062A \u0646\u0627\u062E\u0646",
            description: "\u06A9\u0631\u0627\u062A\u06CC\u0646\u0647 \u0645\u0648\xA0\u06CC\u06A9 \u0631\u0648\u0634 \u0645\u0648\u062B\u0631 \u0628\u0631\u0627\u06CC \u0635\u0627\u0641\u06CC\u060C \u062F\u0631\u062E\u0634\u0646\u062F\u06AF\u06CC \u0648 \u0634\u0627\u062F\u0627\u0628\u06CC\xA0\u0645\u0648\u0647\u0627\u06CC\xA0\u0641\u0631 \u0627\u0633\u062A. \u0632\u0646\u0627\u0646 \u0648 \u0645\u0631\u062F\u0627\u0646\u06CC \u06A9\u0647\xA0\u0645\u0648\u0647\u0627\u06CC\xA0\u0648\u0632\u060C \u0641\u0631 \u06CC\u0627 \u0645\u062C\u0639\u062F \u062F\u0627\u0631\u0646\u062F \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u0646\u062F \u0628\u0647 \u06A9\u0645\u06A9 \u0627\u06CC\u0646 \u0631\u0648\u0634\u060C \u0632\u06CC\u0628\u0627\u06CC\u06CC \u0648 \u0637\u0631\u0627\u0648\u062A\xA0\u0645\u0648\u0647\u0627\u06CC\xA0\u062E\u0648\u062F \u0631\u0627 \u0627\u0641\u0632\u0627\u06CC\u0634 \u062F\u0647\u0646\u062F. \u062F\u0631 \u0648\u0627\u0642\u0639\xA0\u06A9\u0631\u0627\u062A\u06CC\u0646\u0647 \u0645\u0648\xA0\u06CC\u06A9 \u0631\u0648\u0634 \u0635\u0627\u0641\u06CC \u062F\u0627\u0626\u0645\u06CC \u0646\u06CC\u0633\u062A\u060C \u0627\u0645\u0627 \u062F\u0631 \u0635\u0648\u0631\u062A \u0631\u0639\u0627\u06CC\u062A \u0645\u0631\u0627\u0642\u0628\u062A\u200C\u0647\u0627\u06CC \u0644\u0627\u0632\u0645 \u0628\u0639\u062F \u0627\u0632 \u0635\u0627\u0641\u06CC\u060C \u0627\u062B\u0631\u0627\u062A \u0622\u0646 \u062D\u062F\u0648\u062F \u0686\u0647\u0627\u0631 \u062A\u0627 \u06F6 \u0645\u0627\u0647 \u0631\u0648\u06CC\xA0\u0645\u0648\u0647\u0627\xA0\u0628\u0627\u0642\u06CC \u0645\u06CC\u200C\u0645\u0627\u0646\u062F",
            rating: 4.5,
            price: 1e5,
            discount_price: 9e4,
            is_bookmarked: true,
            has_tel: true,
            has_phone_number: false,
            showing_phone_number: "09381412419",
            service_id: 1,
            service: {
              id: 1,
              title: "\u062E\u062F\u0645\u0627\u062A \u0646\u0627\u062E\u0646",
              image: "https://via.placeholder.com/57x57.png/00ddaa?text=minus",
              is_active: 1,
              parent_id: null,
              created_at: "2024-04-12T16:14:23.000000Z",
              updated_at: "2024-04-12T16:14:23.000000Z"
            },
            user_id: 1,
            user: {
              id: 1,
              full_name: "\u0632\u06CC\u0628\u0627 \u0627\u0639\u0638\u0645\u06CC",
              phone_number: "09381412419",
              avatar: "/images/artist/2.png",
              has_blue_tick: true
            },
            images: ["/images/artist/1.jpg", "/images/artist/1.jpg"],
            work_hours: [
              {
                "day_index": 1,
                "start_hour": "09:12",
                "end_hour": "08:00"
              },
              {
                "day_index": 2,
                "start_hour": "09:12",
                "end_hour": "08:00"
              },
              {
                "day_index": 3,
                "start_hour": "09:12",
                "end_hour": "08:00"
              },
              {
                "day_index": 4,
                "start_hour": "09:12",
                "end_hour": "08:00"
              }
            ]
          }
        ]
      ];
    };
    paginate();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PortfolioItem = _sfc_main$s;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full flex flex-col my-[8px]" }, _attrs))}><div class="w-full flex flex-row gap-[10px] justify-start items-center"><div class="cursor-pointer flex flex-row gap-[4px] justify-start items-center">`);
      _push(ssrRenderComponent(FilterIcon, null, null, _parent));
      _push(`<span>\u0641\u06CC\u0644\u062A\u0631</span>`);
      _push(ssrRenderComponent(ArrowDownIcon, null, null, _parent));
      _push(`</div><div class="cursor-pointer flex flex-row gap-[4px] justify-start items-center">`);
      _push(ssrRenderComponent(SortIcon, null, null, _parent));
      _push(`<span>\u0645\u0631\u062A\u0628 \u0633\u0627\u0632\u06CC</span>`);
      _push(ssrRenderComponent(ArrowDownIcon, null, null, _parent));
      _push(`</div></div><div class="mt-[8px] w-full flex flex-col justify-start items-start"><!--[-->`);
      ssrRenderList(unref(portfolios), (p, i) => {
        _push(ssrRenderComponent(_component_PortfolioItem, {
          key: i,
          portfolio: p
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(_sfc_main$p, {
        onClose: closeFilterDrawer,
        onChoose: chooseService,
        "is-open": unref(showFilterDrawer)
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$q, {
        onClose: closeSortDrawer,
        onChoose: chooseSort,
        "is-open": unref(showSortDrawer)
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/ArtistPortfolioBox.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "ArtistBioBox",
  __ssrInlineRender: true,
  props: {
    bio: {
      type: String,
      default: ""
    },
    workHours: {
      type: Array,
      default: () => [],
      required: true
    },
    licenses: {
      type: Array,
      default: () => [],
      required: true
    }
  },
  setup(__props) {
    const days = ref([
      "\u0634\u0646\u0628\u0647",
      "\u06CC\u06A9 \u0634\u0646\u0628\u0647",
      "\u062F\u0648 \u0634\u0646\u0628\u0647",
      "\u0633\u0647 \u0634\u0646\u0628\u0647",
      "\u0686\u0647\u0627\u0631 \u0634\u0646\u0628\u0647",
      "\u067E\u0646\u062C \u0634\u0646\u0628\u0647",
      "\u062C\u0645\u0639\u0647"
    ]);
    const getDayName = (workHour) => {
      let start = workHour.start_hour;
      let end = workHour.end_hour;
      let name = "";
      name += toAMorPM(start);
      name += " - ";
      name += toAMorPM(end);
      return name;
    };
    const toAMorPM = (hour) => {
      let name = "";
      let hourInt = parseInt(hour.substring(0, 2));
      if (hourInt <= 12) {
        name += `${hour} \u0635\u0628\u062D`;
      } else if (hourInt <= 19) {
        name += `${hour} \u0628\u0639\u062F \u0627\u0632 \u0638\u0647\u0631`;
      } else {
        name += `${hour} \u0634\u0628`;
      }
      return name;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full flex flex-col items-center justify-between px-[27px] my-[8px]" }, _attrs))}><div class="w-full flex flex-col items-start justify-start pb-[18px] border-b border-b-[#A9A7A7]"><h1 class="font-semibold text-[#141414] text-right text-[16px] leading-[23px]">\u062F\u0631\u0628\u0627\u0631\u0647 \u0645\u0646</h1><div class="mt-[10px] font-normal text-right text-[#133C3E] text-[9px] leading-[12px]">${__props.bio}</div></div><div class="mt-4 w-full flex flex-col items-start justify-start pb-[18px] border-b border-b-[#A9A7A7]"><h1 class="font-semibold text-[#141414] text-right text-[16px] leading-[23px]">\u0645\u062F\u0627\u0631\u06A9 \u0648 \u0645\u062C\u0648\u0632\u0647\u0627</h1><!--[-->`);
      ssrRenderList(__props.licenses, (l, i) => {
        _push(`<div class="mt-[10px] font-normal text-right text-[#133C3E] text-[9px] leading-[12px]">${ssrInterpolate(l)}</div>`);
      });
      _push(`<!--]--></div><div class="w-full mt-4 mx-4 flex flex-col items-start justify-start pb-[18px] border-b border-b-[#A9A7A7]"><h1 class="w-full font-semibold text-[#141414] text-right text-[17px] leading-[26px]">\u0628\u0631\u0646\u0627\u0645\u0647 \u0647\u0641\u062A\u06AF\u06CC</h1><div class="w-full mt-[10px] font-normal text-right text-[#133C3E] text-[10px] leading-[15px]"><!--[-->`);
      ssrRenderList(__props.workHours, (w, i) => {
        _push(`<div class="flex flex-row justify-between items-center mb-[5px]"><span>${ssrInterpolate(unref(days)[w.day_index])}</span><span>${ssrInterpolate(getDayName(w))}</span></div>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/artist/ArtistBioBox.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "ArtistBioAndPortfolioBox",
  __ssrInlineRender: true,
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const index = ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-[20px] w-full flex flex-col items-start justify-start" }, _attrs))}><div class="pb-[15px] border-b border-b-[#A9A7A7] w-full flex flex-row items-center justify-between"><div class="cursor-pointer min-w-[130px] text-center px-[37px] py-[6px] bg-[#085EC2] border border-[#133C3E] font-medium text-[15px] leading-[30px] text-white rounded-[25px]"> \u0628\u06CC\u0648\u06AF\u0631\u0627\u0641\u06CC </div><div class="cursor-pointer min-w-[130px] text-center px-[37px] py-[6px] bg-[#085EC2] border border-[#133C3E] font-medium text-[15px] leading-[30px] text-white rounded-[25px]"> \u0646\u0645\u0648\u0646\u0647 \u06A9\u0627\u0631\u0647\u0627 </div></div>`);
      if (unref(index) === 0) {
        _push(ssrRenderComponent(_sfc_main$5, {
          bio: __props.user.bio,
          "work-hours": __props.user.work_hours,
          licenses: __props.user.licenses
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(index) === 1) {
        _push(ssrRenderComponent(_sfc_main$6, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/artist/ArtistBioAndPortfolioBox.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ArtistDesktopTabButton",
  __ssrInlineRender: true,
  props: {
    title: {
      type: Object,
      required: true
    },
    selected: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["cursor-pointer mx-[10px] min-w-[125px] min-h-[65px] px-[30px] py-[22px] rounded-[20px] flex justify-center items-center", [__props.selected ? "bg-[#FF3CA0]" : "bg-[#ECECEC]"]]
      }, _attrs))}><span class="${ssrRenderClass([[__props.selected ? "text-white" : "text-[#133C3E]"], "font-semibold text-[26px] leading-[45px]"])}">${ssrInterpolate(__props.title)}</span></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/artist/ArtistDesktopTabButton.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ArtistBioDesktop",
  __ssrInlineRender: true,
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full rounded-[50px] bg-white shadow-[0px_5px_30px_5px_#00000040] px-[70px] py-[40px]" }, _attrs))}><div class="w-full flex flex-row justify-start items-center pb-[25px] border-b border-b-black"><svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30 30C27.25 30 24.8958 29.0208 22.9375 27.0625C20.9792 25.1042 20 22.75 20 20C20 17.25 20.9792 14.8958 22.9375 12.9375C24.8958 10.9792 27.25 10 30 10C32.75 10 35.1042 10.9792 37.0625 12.9375C39.0208 14.8958 40 17.25 40 20C40 22.75 39.0208 25.1042 37.0625 27.0625C35.1042 29.0208 32.75 30 30 30ZM10 50V43C10 41.5833 10.3646 40.2812 11.0938 39.0938C11.8229 37.9062 12.7917 37 14 36.375C16.5833 35.0833 19.2083 34.1146 21.875 33.4688C24.5417 32.8229 27.25 32.5 30 32.5C32.75 32.5 35.4583 32.8229 38.125 33.4688C40.7917 34.1146 43.4167 35.0833 46 36.375C47.2083 37 48.1771 37.9062 48.9062 39.0938C49.6354 40.2812 50 41.5833 50 43V50H10Z" fill="black"></path></svg><div class="flex flex-row justify-start items-center gap-[10px] font-medium text-[36px] text-right"><span>\u062F\u0631\u0628\u0627\u0631\u0647 </span><span>${ssrInterpolate(__props.user.full_name)}</span></div></div><div class="gap-[10px] font-medium text-[26px] text-right text-[#828282] mt-[10px]">${__props.user.bio}</div><div class="mt-[30px] flex flex-col justify-start items-start gap-[10px] font-medium text-[26px] text-right"><span>\u0645\u062F\u0627\u0631\u06A9 \u0648 \u0645\u062C\u0648\u0632 \u0647\u0627 </span><!--[-->`);
      ssrRenderList(__props.user.licenses, (l, i) => {
        _push(`<span>${ssrInterpolate(l)}</span>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/artist/ArtistBioDesktop.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ArtistAddressDesktop",
  __ssrInlineRender: true,
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const zoom = ref(13);
    const map = ref();
    const getLatLng = computed(() => {
      var _a, _b;
      return [(_a = props.user.location) == null ? void 0 : _a.lat, (_b = props.user.location) == null ? void 0 : _b.lng];
    });
    const point = computed(() => props.user.location);
    const options = { zoomControl: false, dragging: false, doubleClickZoom: false, scrollWheelZoom: false };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LMap = LMap;
      const _component_LTileLayer = LTileLayer;
      const _component_LMarker = LMarker;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full rounded-[50px] bg-white shadow-[0px_5px_30px_5px_#00000040] px-[70px] py-[40px]" }, _attrs))}><div class="w-full flex flex-row justify-start items-center pb-[25px] border-b border-b-black"><svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24.9997 25.0001C26.1455 25.0001 27.1264 24.5921 27.9424 23.7761C28.7584 22.9602 29.1663 21.9792 29.1663 20.8334C29.1663 19.6876 28.7584 18.7067 27.9424 17.8907C27.1264 17.0747 26.1455 16.6667 24.9997 16.6667C23.8538 16.6667 22.8729 17.0747 22.057 17.8907C21.241 18.7067 20.833 19.6876 20.833 20.8334C20.833 21.9792 21.241 22.9602 22.057 23.7761C22.8729 24.5921 23.8538 25.0001 24.9997 25.0001ZM24.9997 45.8334C19.4094 41.0765 15.234 36.6581 12.4736 32.5782C9.71322 28.4983 8.33301 24.7223 8.33301 21.2501C8.33301 16.0417 10.0084 11.8924 13.359 8.80217C16.7097 5.71189 20.59 4.16675 24.9997 4.16675C29.4094 4.16675 33.2896 5.71189 36.6403 8.80217C39.991 11.8924 41.6663 16.0417 41.6663 21.2501C41.6663 24.7223 40.2861 28.4983 37.5257 32.5782C34.7653 36.6581 30.59 41.0765 24.9997 45.8334Z" fill="black"></path></svg><div class="flex flex-row justify-start items-center gap-[10px] font-medium text-[36px] text-right"><span> \u0622\u062F\u0631\u0633 </span></div><div class="flex flex-row flex-wrap justify-start items-start font-medium text-[36px] text-right"><div class="w-1/2">`);
      _push(ssrRenderComponent(_component_LMap, {
        ref_key: "map",
        ref: map,
        zoom: unref(zoom),
        center: unref(getLatLng),
        options
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_LTileLayer, {
              url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
              attribution: '&copy; <a href="https://www.SaeedHeydari.ir/">SaeedHeydari.ir</a> contributors',
              "layer-type": "base",
              name: "OpenStreetMap"
            }, null, _parent2, _scopeId));
            if (unref(point)) {
              _push2(ssrRenderComponent(_component_LMarker, {
                draggable: true,
                "lat-lng": unref(point)
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode(_component_LTileLayer, {
                url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
                attribution: '&copy; <a href="https://www.SaeedHeydari.ir/">SaeedHeydari.ir</a> contributors',
                "layer-type": "base",
                name: "OpenStreetMap"
              }),
              unref(point) ? (openBlock(), createBlock(_component_LMarker, {
                key: 0,
                draggable: true,
                "lat-lng": unref(point)
              }, null, 8, ["lat-lng"])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="w-1/2"></div></div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/artist/ArtistAddressDesktop.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const options = ref({
      direction: "rtl",
      autoWidth: true,
      pagination: false,
      arrows: false
    });
    const router = useRouter();
    const route = useRoute();
    const user = ref({
      id: 1,
      full_name: "\u0632\u06CC\u0628\u0627 \u0627\u0639\u0638\u0645\u06CC",
      phone_number: "09381412419",
      bio: "\u0645\u0646 \u0628\u0627 0 \u0633\u0627\u0644 \u0633\u0627\u0628\u0642\u0647 \u062F\u0631 \u0635\u0646\u0639\u062A \u0622\u0631\u0627\u06CC\u0634\u06AF\u0631\u06CC \u0645\u06CC\u062E\u0648\u0627\u0647\u0645 \u0645\u0634\u062A\u0631\u06CC \u0628\u06AF\u06CC\u0631\u0645 \u06A9\u0647 \u0628\u062A\u0648\u0627\u0646\u0645 \u06CC\u0627\u062F \u0628\u06AF\u06CC\u0631\u0645 \u062D\u062A\u0645\u0627 \u0628\u0631\u0627\u06CC \u0634\u0645\u0627 \u0633\u0648\u0627\u0644 \u0634\u062F\u0647 \u0645\u06AF\u0647 \u0628\u0644\u062F \u0646\u06CC\u0633\u062A\u061F",
      distance: "1.5km",
      is_bookmarked: false,
      avatar: "/images/artist/2.png",
      has_blue_tick: true,
      banners: ["/images/artist/banner.png", "/images/artist/banner.png"],
      rating: 4,
      address: "\u0647\u0645\u062F\u0627\u0646,\u067E\u0627\u0633\u062F\u0627\u0631\u0627\u0646,\u062C\u0644\u0627\u0644\u06CC,\u06A9\u0648\u0686\u0647 \u0639\u0642\u06CC\u0644,\u0628\u0646 \u0628\u0633\u062A 40,\u067E\u0644\u0627\u06A95,\u0648\u0627\u062D\u062F 2",
      portfolios_count: 15,
      services_count: 3,
      services: [],
      work_hours: [],
      portfolios: [],
      licenses: [],
      created_at_ago_fa: ""
    });
    const id = route.params.id;
    const getUser = async () => {
      var _a;
      const res = await useCustomFetch(`/users/${id}`, {
        method: "GET"
      });
      if (res.data.value) {
        user.value = (_a = res.data.value) == null ? void 0 : _a.data;
      }
      if (res.error.value)
        ;
    };
    const goBack = () => {
      router.back();
    };
    [__temp, __restore] = withAsyncContext(() => getUser()), await __temp, __restore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ArtistBannerSlideBox = _sfc_main$m;
      const _component_ArtistDetailBox = _sfc_main$b;
      const _component_ArtistCallBox = _sfc_main$a;
      const _component_ArtistBannerDesktopSlideBox = _sfc_main$9;
      const _component_ArtistPortfoliosDesktopList = _sfc_main$7;
      _push(`<!--[--><div class="w-full flex md:hidden flex-col h-full relative pb-[100px]"><div class="pl-[3px] fixed left-[23px] pt-[21px] pb-[79px] z-[999999]">`);
      _push(ssrRenderComponent(PortfolioPageBackIcon, { onClick: goBack }, null, _parent));
      _push(`</div><div class="w-full h-full">`);
      _push(ssrRenderComponent(_component_ArtistBannerSlideBox, { user: unref(user) }, null, _parent));
      _push(`</div><div class="w-full h-full px-[20px]">`);
      _push(ssrRenderComponent(_component_ArtistDetailBox, { user: unref(user) }, null, _parent));
      _push(`</div><div class="w-full h-full px-[20px]">`);
      _push(ssrRenderComponent(_sfc_main$4, { user: unref(user) }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_ArtistCallBox, null, null, _parent));
      _push(`</div><div class="hidden w-full md:flex flex-col h-full relative px-[60px]"><div class="w-full text-center flex flex-row justify-center items-center mb-[55px]"><h1 class="font-medium text-center text-[48px] leading-[73px]">\u0635\u0641\u062D\u0647 \u0647\u0646\u0631\u0645\u0646\u062F</h1></div>`);
      _push(ssrRenderComponent(_component_ArtistBannerDesktopSlideBox, {
        user: unref(user),
        class: "mb-[55px]"
      }, null, _parent));
      _push(`<div class="w-full artist-tab-header mb-[55px]">`);
      _push(ssrRenderComponent(unref(Splide), {
        options: unref(options),
        "aria-label": ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(SplideSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$3, {
                    title: "\u0646\u0645\u0648\u0646\u0647 \u06A9\u0627\u0631\u0647\u0627",
                    selected: true
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$3, {
                      title: "\u0646\u0645\u0648\u0646\u0647 \u06A9\u0627\u0631\u0647\u0627",
                      selected: true
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SplideSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$3, {
                    title: "\u062F\u0631\u0628\u0627\u0631\u0647 \u0645\u0646",
                    selected: false
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$3, {
                      title: "\u062F\u0631\u0628\u0627\u0631\u0647 \u0645\u0646",
                      selected: false
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SplideSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$3, {
                    title: "\u0622\u062F\u0631\u0633",
                    selected: false
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$3, {
                      title: "\u0622\u062F\u0631\u0633",
                      selected: false
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SplideSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$3, {
                    title: "\u0633\u0627\u0639\u0627\u062A \u06A9\u0627\u0631\u06CC",
                    selected: false
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$3, {
                      title: "\u0633\u0627\u0639\u0627\u062A \u06A9\u0627\u0631\u06CC",
                      selected: false
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SplideSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$3, {
                    title: "\u0634\u0628\u06A9\u0647 \u0647\u0627\u06CC \u0627\u062C\u062A\u0645\u0627\u0639\u06CC",
                    selected: false
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$3, {
                      title: "\u0634\u0628\u06A9\u0647 \u0647\u0627\u06CC \u0627\u062C\u062A\u0645\u0627\u0639\u06CC",
                      selected: false
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(SplideSlide), null, {
                default: withCtx(() => [
                  createVNode(_sfc_main$3, {
                    title: "\u0646\u0645\u0648\u0646\u0647 \u06A9\u0627\u0631\u0647\u0627",
                    selected: true
                  })
                ]),
                _: 1
              }),
              createVNode(unref(SplideSlide), null, {
                default: withCtx(() => [
                  createVNode(_sfc_main$3, {
                    title: "\u062F\u0631\u0628\u0627\u0631\u0647 \u0645\u0646",
                    selected: false
                  })
                ]),
                _: 1
              }),
              createVNode(unref(SplideSlide), null, {
                default: withCtx(() => [
                  createVNode(_sfc_main$3, {
                    title: "\u0622\u062F\u0631\u0633",
                    selected: false
                  })
                ]),
                _: 1
              }),
              createVNode(unref(SplideSlide), null, {
                default: withCtx(() => [
                  createVNode(_sfc_main$3, {
                    title: "\u0633\u0627\u0639\u0627\u062A \u06A9\u0627\u0631\u06CC",
                    selected: false
                  })
                ]),
                _: 1
              }),
              createVNode(unref(SplideSlide), null, {
                default: withCtx(() => [
                  createVNode(_sfc_main$3, {
                    title: "\u0634\u0628\u06A9\u0647 \u0647\u0627\u06CC \u0627\u062C\u062A\u0645\u0627\u0639\u06CC",
                    selected: false
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="w-full mb-[55px]">`);
      _push(ssrRenderComponent(_component_ArtistPortfoliosDesktopList, {
        "user-id": unref(user).id
      }, null, _parent));
      _push(`</div><div class="w-full mb-[55px]">`);
      _push(ssrRenderComponent(_sfc_main$2, { user: unref(user) }, null, _parent));
      _push(`</div><div class="w-full mb-[55px]">`);
      _push(ssrRenderComponent(_sfc_main$1, { user: unref(user) }, null, _parent));
      _push(`</div></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/artists/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-C8DJJ3uT.mjs.map
