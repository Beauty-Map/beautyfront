import { a as useRouter, b as useRoute, e as useSanctumUser } from './server.mjs';
import { useSSRContext, defineComponent, ref, watch, mergeProps, unref, withCtx, createTextVNode, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { u as useDrawerStore } from './Drawer-DbL6gM-F.mjs';

const _sfc_main$7 = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "19",
    height: "20",
    viewBox: "0 0 19 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M6.64373 18.7821V15.7152C6.64372 14.9381 7.27567 14.3067 8.05844 14.3018H10.9326C11.7189 14.3018 12.3563 14.9346 12.3563 15.7152V18.7732C12.3562 19.4473 12.904 19.9951 13.5829 20H15.5438C16.4596 20.0023 17.3388 19.6428 17.9872 19.0007C18.6356 18.3586 19 17.4868 19 16.5775V7.86585C19 7.13139 18.6721 6.43471 18.1046 5.9635L11.443 0.674268C10.2785 -0.250877 8.61537 -0.220992 7.48539 0.745384L0.967012 5.9635C0.372741 6.42082 0.0175523 7.11956 0 7.86585V16.5686C0 18.4637 1.54738 20 3.45617 20H5.37229C5.69917 20.0023 6.01349 19.8751 6.24547 19.6464C6.47746 19.4178 6.60793 19.1067 6.60792 18.7821H6.64373Z" fill="white"></path></svg>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/BottomNavigation/HomeIcon.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const HomeIcon = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$6 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "20",
    height: "19",
    viewBox: "0 0 20 19",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M10 18.9999L8.55 17.6999C6.86667 16.1832 5.475 14.8749 4.375 13.7749C3.275 12.6749 2.4 11.6874 1.75 10.8124C1.1 9.9374 0.645833 9.13324 0.3875 8.3999C0.129167 7.66657 0 6.91657 0 6.1499C0 4.58324 0.525 3.2749 1.575 2.2249C2.625 1.1749 3.93333 0.649902 5.5 0.649902C6.36667 0.649902 7.19167 0.833236 7.975 1.1999C8.75833 1.56657 9.43333 2.08324 10 2.7499C10.5667 2.08324 11.2417 1.56657 12.025 1.1999C12.8083 0.833236 13.6333 0.649902 14.5 0.649902C16.0667 0.649902 17.375 1.1749 18.425 2.2249C19.475 3.2749 20 4.58324 20 6.1499C20 6.91657 19.8708 7.66657 19.6125 8.3999C19.3542 9.13324 18.9 9.9374 18.25 10.8124C17.6 11.6874 16.725 12.6749 15.625 13.7749C14.525 14.8749 13.1333 16.1832 11.45 17.6999L10 18.9999ZM10 16.2999C11.6 14.8666 12.9167 13.6374 13.95 12.6124C14.9833 11.5874 15.8 10.6957 16.4 9.9374C17 9.17907 17.4167 8.50407 17.65 7.9124C17.8833 7.32074 18 6.73324 18 6.1499C18 5.1499 17.6667 4.31657 17 3.6499C16.3333 2.98324 15.5 2.6499 14.5 2.6499C13.7167 2.6499 12.9917 2.87074 12.325 3.3124C11.6583 3.75407 11.2 4.31657 10.95 4.9999H9.05C8.8 4.31657 8.34167 3.75407 7.675 3.3124C7.00833 2.87074 6.28333 2.6499 5.5 2.6499C4.5 2.6499 3.66667 2.98324 3 3.6499C2.33333 4.31657 2 5.1499 2 6.1499C2 6.73324 2.11667 7.32074 2.35 7.9124C2.58333 8.50407 3 9.17907 3.6 9.9374C4.2 10.6957 5.01667 11.5874 6.05 12.6124C7.08333 13.6374 8.4 14.8666 10 16.2999Z" fill="white"></path></svg>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/BottomNavigation/FavouriteIcon.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const FavouriteIcon = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$5 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "22",
    height: "22",
    viewBox: "0 0 22 22",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M9.215 19.19C10.0025 17.5975 11.0525 16.5344 12.365 16.0006C13.6775 15.4669 14.7975 15.2 15.725 15.2C16.1275 15.2 16.5212 15.235 16.9062 15.305C17.2913 15.375 17.6675 15.4625 18.035 15.5675C18.455 14.9025 18.7875 14.185 19.0325 13.415C19.2775 12.645 19.4 11.84 19.4 11C19.4 8.655 18.5863 6.66875 16.9587 5.04125C15.3313 3.41375 13.345 2.6 11 2.6C8.655 2.6 6.66875 3.41375 5.04125 5.04125C3.41375 6.66875 2.6 8.655 2.6 11C2.6 11.7875 2.70062 12.54 2.90188 13.2575C3.10313 13.975 3.405 14.64 3.8075 15.2525C4.525 14.9025 5.26875 14.6312 6.03875 14.4387C6.80875 14.2462 7.5875 14.15 8.375 14.15C8.935 14.15 9.47313 14.1981 9.98938 14.2944C10.5056 14.3906 11.0175 14.5175 11.525 14.675C11.1225 14.885 10.7419 15.13 10.3831 15.41C10.0244 15.69 9.6875 15.9875 9.3725 16.3025C9.1625 16.2675 8.98312 16.25 8.83437 16.25H8.375C7.815 16.25 7.25937 16.3112 6.70812 16.4337C6.15687 16.5562 5.6275 16.74 5.12 16.985C5.68 17.545 6.30562 18.0131 6.99687 18.3894C7.68812 18.7656 8.4275 19.0325 9.215 19.19ZM11 21.5C9.5475 21.5 8.1825 21.2244 6.905 20.6731C5.6275 20.1219 4.51625 19.3737 3.57125 18.4287C2.62625 17.4837 1.87812 16.3725 1.32687 15.095C0.775625 13.8175 0.5 12.4525 0.5 11C0.5 9.5475 0.775625 8.1825 1.32687 6.905C1.87812 5.6275 2.62625 4.51625 3.57125 3.57125C4.51625 2.62625 5.6275 1.87812 6.905 1.32687C8.1825 0.775625 9.5475 0.5 11 0.5C12.4525 0.5 13.8175 0.775625 15.095 1.32687C16.3725 1.87812 17.4837 2.62625 18.4287 3.57125C19.3737 4.51625 20.1219 5.6275 20.6731 6.905C21.2244 8.1825 21.5 9.5475 21.5 11C21.5 12.4525 21.2244 13.8175 20.6731 15.095C20.1219 16.3725 19.3737 17.4837 18.4287 18.4287C17.4837 19.3737 16.3725 20.1219 15.095 20.6731C13.8175 21.2244 12.4525 21.5 11 21.5ZM8.375 12.575C7.36 12.575 6.49375 12.2162 5.77625 11.4987C5.05875 10.7812 4.7 9.915 4.7 8.9C4.7 7.885 5.05875 7.01875 5.77625 6.30125C6.49375 5.58375 7.36 5.225 8.375 5.225C9.39 5.225 10.2563 5.58375 10.9738 6.30125C11.6912 7.01875 12.05 7.885 12.05 8.9C12.05 9.915 11.6912 10.7812 10.9738 11.4987C10.2563 12.2162 9.39 12.575 8.375 12.575ZM8.375 10.475C8.8125 10.475 9.18437 10.3219 9.49062 10.0156C9.79687 9.70938 9.95 9.3375 9.95 8.9C9.95 8.4625 9.79687 8.09062 9.49062 7.78437C9.18437 7.47812 8.8125 7.325 8.375 7.325C7.9375 7.325 7.56562 7.47812 7.25937 7.78437C6.95312 8.09062 6.8 8.4625 6.8 8.9C6.8 9.3375 6.95312 9.70938 7.25937 10.0156C7.56562 10.3219 7.9375 10.475 8.375 10.475ZM15.725 13.625C14.99 13.625 14.3687 13.3712 13.8612 12.8637C13.3538 12.3562 13.1 11.735 13.1 11C13.1 10.265 13.3538 9.64375 13.8612 9.13625C14.3687 8.62875 14.99 8.375 15.725 8.375C16.46 8.375 17.0812 8.62875 17.5887 9.13625C18.0962 9.64375 18.35 10.265 18.35 11C18.35 11.735 18.0962 12.3562 17.5887 12.8637C17.0812 13.3712 16.46 13.625 15.725 13.625Z" fill="white"></path></svg>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/BottomNavigation/ChangePanelIcon.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const ChangePanelIcon = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$4 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M13.8377 11.4242L8.27555 5.86198L13.8377 0.299805L19.3999 5.86198L13.8377 11.4242ZM0.399902 9.45525V1.5796H8.27555V9.45525H0.399902ZM10.2445 19.2998V11.4242H18.1201V19.2998H10.2445ZM0.399902 19.2998V11.4242H8.27555V19.2998H0.399902ZM2.36881 7.48633H6.30664V3.54851H2.36881V7.48633ZM13.8623 8.66768L16.6434 5.88659L13.8623 3.1055L11.0812 5.88659L13.8623 8.66768ZM12.2134 17.3309H16.1512V13.3931H12.2134V17.3309ZM2.36881 17.3309H6.30664V13.3931H2.36881V17.3309Z" fill="white"></path></svg>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/BottomNavigation/CategoryIcon.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const CategoryIcon = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M3.85 15.1C4.7 14.45 5.65 13.9375 6.7 13.5625C7.75 13.1875 8.85 13 10 13C11.15 13 12.25 13.1875 13.3 13.5625C14.35 13.9375 15.3 14.45 16.15 15.1C16.7333 14.4167 17.1875 13.6417 17.5125 12.775C17.8375 11.9083 18 10.9833 18 10C18 7.78333 17.2208 5.89583 15.6625 4.3375C14.1042 2.77917 12.2167 2 10 2C7.78333 2 5.89583 2.77917 4.3375 4.3375C2.77917 5.89583 2 7.78333 2 10C2 10.9833 2.1625 11.9083 2.4875 12.775C2.8125 13.6417 3.26667 14.4167 3.85 15.1ZM10 11C9.01667 11 8.1875 10.6625 7.5125 9.9875C6.8375 9.3125 6.5 8.48333 6.5 7.5C6.5 6.51667 6.8375 5.6875 7.5125 5.0125C8.1875 4.3375 9.01667 4 10 4C10.9833 4 11.8125 4.3375 12.4875 5.0125C13.1625 5.6875 13.5 6.51667 13.5 7.5C13.5 8.48333 13.1625 9.3125 12.4875 9.9875C11.8125 10.6625 10.9833 11 10 11ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20ZM10 18C10.8833 18 11.7167 17.8708 12.5 17.6125C13.2833 17.3542 14 16.9833 14.65 16.5C14 16.0167 13.2833 15.6458 12.5 15.3875C11.7167 15.1292 10.8833 15 10 15C9.11667 15 8.28333 15.1292 7.5 15.3875C6.71667 15.6458 6 16.0167 5.35 16.5C6 16.9833 6.71667 17.3542 7.5 17.6125C8.28333 17.8708 9.11667 18 10 18ZM10 9C10.4333 9 10.7917 8.85833 11.075 8.575C11.3583 8.29167 11.5 7.93333 11.5 7.5C11.5 7.06667 11.3583 6.70833 11.075 6.425C10.7917 6.14167 10.4333 6 10 6C9.56667 6 9.20833 6.14167 8.925 6.425C8.64167 6.70833 8.5 7.06667 8.5 7.5C8.5 7.93333 8.64167 8.29167 8.925 8.575C9.20833 8.85833 9.56667 9 10 9Z" fill="white"></path></svg>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/BottomNavigation/ProfileIcon.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const ProfileIcon = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "73",
    height: "70",
    viewBox: "0 0 73 70",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><rect x="14" width="45" height="3" rx="1.5" fill="#FFEA2E"></rect><path d="M0 70L15 0H58.5L73 70H0Z" fill="url(#paint0_linear_1122_955)"></path><defs><linearGradient id="paint0_linear_1122_955" x1="34" y1="0" x2="34" y2="70" gradientUnits="userSpaceOnUse"><stop stop-color="#F8F7FC" stop-opacity="0.5"></stop><stop offset="1" stop-color="#F8F7FC" stop-opacity="0"></stop></linearGradient></defs></svg>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/bottom-navigation/SelectedHover.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const SelectedHover = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "BottomNavigationButton",
  __ssrInlineRender: true,
  props: {
    selected: {
      type: Boolean,
      default: false,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "cursor-pointer flex flex-col text-center justify-center items-center relative" }, _attrs))}>`);
      if (__props.selected) {
        _push(ssrRenderComponent(SelectedHover, { class: "absolute -top-[8px]" }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`<div class="text-center text-white text-[12px] leading-[18px] mt-1">`);
      ssrRenderSlot(_ctx.$slots, "text", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/button/BottomNavigationButton.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BottomNavigationBox",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const route = useRoute();
    const store = useDrawerStore();
    const user = useSanctumUser();
    const index = ref(1);
    const selectItem = (i) => {
      store.closeAllDrawers();
      index.value = i;
      switch (i) {
        case 1:
          openMainPage();
          break;
        case 2:
          openServicePage();
          break;
        case 3:
          openChangePlanPage();
          break;
        case 4:
          openFavouritePage();
          break;
        case 5:
          openProfilePage();
          break;
      }
    };
    const openMainPage = () => {
      router.push("/");
    };
    const openServicePage = () => {
      router.push("/services");
    };
    const openChangePlanPage = () => {
      if (user.value) {
        router.push("/upgrade");
      } else {
        store.openLoginDrawer();
      }
    };
    const openFavouritePage = () => {
      router.push("/favourites");
    };
    const openProfilePage = () => {
      store.openProfileDrawer();
    };
    const onRouteChanged = (route2) => {
      if (route2.startsWith("/services")) {
        index.value = 2;
      } else if (route2.startsWith("/profile")) {
        index.value = 5;
      } else if (route2.startsWith("/panel")) {
        index.value = 5;
      }
    };
    watch(() => route.path, onRouteChanged);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-xs font-medium w-full text-center fixed bottom-0 right-0 left-0 z-[9999999]" }, _attrs))}><div class="flex flex-row items-center justify-evenly bg-pink-600 rounded-tl-3xl rounded-tr-3xl h-[58px]">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        onClick: ($event) => selectItem(1),
        selected: unref(index) == 1
      }, {
        text: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0628\u06CC\u0648\u062A\u06CC \u0645\u067E `);
          } else {
            return [
              createTextVNode(" \u0628\u06CC\u0648\u062A\u06CC \u0645\u067E ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(HomeIcon, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(HomeIcon)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$1, {
        onClick: ($event) => selectItem(2),
        selected: unref(index) == 2
      }, {
        text: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u062F\u0633\u062A\u0647 \u0628\u0646\u062F\u06CC `);
          } else {
            return [
              createTextVNode(" \u062F\u0633\u062A\u0647 \u0628\u0646\u062F\u06CC ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(CategoryIcon, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(CategoryIcon)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$1, {
        onClick: ($event) => selectItem(3),
        selected: unref(index) == 3
      }, {
        text: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u062A\u063A\u06CC\u06CC\u0631 \u067E\u0644\u0646 `);
          } else {
            return [
              createTextVNode(" \u062A\u063A\u06CC\u06CC\u0631 \u067E\u0644\u0646 ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(ChangePanelIcon, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(ChangePanelIcon)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$1, {
        onClick: ($event) => selectItem(4),
        selected: unref(index) == 4
      }, {
        text: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0639\u0644\u0627\u0642\u0647 \u0645\u0646\u062F\u06CC `);
          } else {
            return [
              createTextVNode(" \u0639\u0644\u0627\u0642\u0647 \u0645\u0646\u062F\u06CC ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(FavouriteIcon, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(FavouriteIcon)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$1, {
        onClick: ($event) => selectItem(5),
        selected: unref(index) == 5
      }, {
        text: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u067E\u0631\u0648\u0641\u0627\u06CC\u0644 `);
          } else {
            return [
              createTextVNode(" \u067E\u0631\u0648\u0641\u0627\u06CC\u0644 ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(ProfileIcon, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(ProfileIcon)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/footer/BottomNavigationBox.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=BottomNavigationBox-_dOCDJqp.mjs.map
