import { u as useAuthStore, f as useNuxtApp } from "../server.mjs";
import { defineComponent, ref, mergeProps, withCtx, createVNode, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { _ as _sfc_main$5 } from "./PageLoading-6bDLHwCJ.js";
import { _ as _sfc_main$7 } from "./BottomNavigationBox-CEGA0rhn.js";
import { _ as _sfc_main$6, a as __nuxt_component_1 } from "./MainHeaderDesktop-CIIE8dBu.js";
import { u as useSanctumAuth } from "./useSanctumAuth-B2JusLUJ.js";
import { C as ChangePasswordIcon, D as DeleteAccountIcon, A as AltPhoneNumberIcon, _ as _sfc_main$4 } from "./DeleteAccountModal-HvrqoNMM.js";
import { u as useDrawerStore } from "./Drawer-n5iGEtr0.js";
import { a as _sfc_main$2, _ as _sfc_main$3 } from "./SideBarLink-CgD_n89y.js";
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
import "destr";
import "ohash";
import "klona";
import "defu";
import "@vue/devtools-api";
import "devalue";
import "dayjs";
import "dayjs/plugin/updateLocale.js";
import "dayjs/plugin/relativeTime.js";
import "dayjs/plugin/utc.js";
import "consola";
import "vue3-toastify";
import "./nuxt-link-DB89SAcR.js";
import "./NotificationIcon-D2I45xr1.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SecurityLinkSideBar",
  __ssrInlineRender: true,
  setup(__props) {
    const auth = useAuthStore();
    const user = ref(auth.user);
    const store = useDrawerStore();
    const showDeleteAccount = ref(false);
    const openDeleteAccountAlert = () => {
      showDeleteAccount.value = true;
    };
    const closeDeleteAccountAlert = () => {
      showDeleteAccount.value = false;
    };
    const doDeleteAccount = () => {
      const auth2 = useSanctumAuth();
      auth2.logout();
    };
    const deleteAccount = () => {
      if (!user.value) {
        store.closeAllDrawers();
        store.openLoginDrawer();
        return;
      }
      openDeleteAccountAlert();
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col justify-start items-start w-full max-w-[310px] pb-10" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        to: "/security/password",
        title: "تغییر رمز عبور",
        class: "mt-8"
      }, {
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(ChangePasswordIcon, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(ChangePasswordIcon)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        to: "/security/delete",
        "is-link": false,
        onClick: deleteAccount,
        title: "پاک کردن حساب کاربری"
      }, {
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(DeleteAccountIcon, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(DeleteAccountIcon)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        to: "/security/alt-number",
        title: "شماره جایگزین ورود"
      }, {
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(AltPhoneNumberIcon, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(AltPhoneNumberIcon)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$4, {
        open: unref(showDeleteAccount),
        onClose: closeDeleteAccountAlert,
        onDelete: doDeleteAccount
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full flex flex-col items-start justify-start pb-[18px]"${_scopeId}><h1 class="w-full font-semibold text-[#141414] text-right text-[17px] leading-[26px]"${_scopeId}> پاک کردن حساب کاربری </h1><h4 class="w-full font-semibold text-[#828282] text-right text-[14px] leading-[21px]"${_scopeId}> آیا مطمئن هستید که می خواهید این حساب را حذف کنید؟ این عمل قابل بازگشت نیست. </h4><div class="w-full mt-[10px] font-normal text-right text-[#133C3E] text-[10px] leading-[15px]"${_scopeId}></div></div>`);
          } else {
            return [
              createVNode("div", { class: "w-full flex flex-col items-start justify-start pb-[18px]" }, [
                createVNode("h1", { class: "w-full font-semibold text-[#141414] text-right text-[17px] leading-[26px]" }, " پاک کردن حساب کاربری "),
                createVNode("h4", { class: "w-full font-semibold text-[#828282] text-right text-[14px] leading-[21px]" }, " آیا مطمئن هستید که می خواهید این حساب را حذف کنید؟ این عمل قابل بازگشت نیست. "),
                createVNode("div", { class: "w-full mt-[10px] font-normal text-right text-[#133C3E] text-[10px] leading-[15px]" })
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/security-drawer/SecurityLinkSideBar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "security",
  __ssrInlineRender: true,
  setup(__props) {
    const nuxt = useNuxtApp();
    const loading = ref(true);
    nuxt.hook("page:loading:start", () => {
      loading.value = true;
    });
    nuxt.hook("page:loading:end", () => {
      setTimeout(() => {
        loading.value = false;
      }, 500);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page h-full w-full flex flex-col relative" }, _attrs))}>`);
      if (unref(loading)) {
        _push(ssrRenderComponent(_sfc_main$5, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_sfc_main$6, { class: "md:flex hidden" }, null, _parent));
      _push(`<div class="w-full min-h-screen px-[34px] py-[20px] flex flex-row justify-start items-start">`);
      _push(ssrRenderComponent(_sfc_main$1, { class: "md:flex hidden" }, null, _parent));
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
      _push(ssrRenderComponent(__nuxt_component_1, { class: "hidden md:flex" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$7, { class: "md:hidden" }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/security.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=security-BM3ownIi.js.map
