import { e as useAuthStore, f as useNuxtApp } from './server.mjs';
import { useSSRContext, defineComponent, ref, mergeProps, unref, withCtx, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _sfc_main$2 } from './PageLoading-mm1u5C4s.mjs';
import { _ as _sfc_main$4 } from './BottomNavigationBox-2slUrETL.mjs';
import { _ as _sfc_main$3, a as __nuxt_component_1 } from './MainHeaderDesktop-Dq-uJJE3.mjs';
import { u as useSanctumAuth } from './useSanctumAuth-DECrePYZ.mjs';
import { C as ChangePasswordIcon, D as DeleteAccountIcon, A as AltPhoneNumberIcon, _ as _sfc_main$6 } from './DeleteAccountModal-P1HwjgRl.mjs';
import { u as useDrawerStore } from './Drawer-O-pqrFqT.mjs';
import { _ as _sfc_main$1$1, a as _sfc_main$5 } from './SideBarLink-Ddy3XEMg.mjs';
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
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './nuxt-link-B3sIHW1Y.mjs';
import './NotificationIcon-CjXTJqLF.mjs';

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
      _push(ssrRenderComponent(_sfc_main$1$1, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$5, {
        to: "/security/password",
        title: "\u062A\u063A\u06CC\u06CC\u0631 \u0631\u0645\u0632 \u0639\u0628\u0648\u0631",
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
      _push(ssrRenderComponent(_sfc_main$5, {
        to: "/security/delete",
        "is-link": false,
        onClick: deleteAccount,
        title: "\u067E\u0627\u06A9 \u06A9\u0631\u062F\u0646 \u062D\u0633\u0627\u0628 \u06A9\u0627\u0631\u0628\u0631\u06CC"
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
      _push(ssrRenderComponent(_sfc_main$5, {
        to: "/security/alt-number",
        title: "\u0634\u0645\u0627\u0631\u0647 \u062C\u0627\u06CC\u06AF\u0632\u06CC\u0646 \u0648\u0631\u0648\u062F"
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
      _push(ssrRenderComponent(_sfc_main$6, {
        open: unref(showDeleteAccount),
        onClose: closeDeleteAccountAlert,
        onDelete: doDeleteAccount
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full flex flex-col items-start justify-start pb-[18px]"${_scopeId}><h1 class="w-full font-semibold text-[#141414] text-right text-[17px] leading-[26px]"${_scopeId}> \u067E\u0627\u06A9 \u06A9\u0631\u062F\u0646 \u062D\u0633\u0627\u0628 \u06A9\u0627\u0631\u0628\u0631\u06CC </h1><h4 class="w-full font-semibold text-[#828282] text-right text-[14px] leading-[21px]"${_scopeId}> \u0622\u06CC\u0627 \u0645\u0637\u0645\u0626\u0646 \u0647\u0633\u062A\u06CC\u062F \u06A9\u0647 \u0645\u06CC \u062E\u0648\u0627\u0647\u06CC\u062F \u0627\u06CC\u0646 \u062D\u0633\u0627\u0628 \u0631\u0627 \u062D\u0630\u0641 \u06A9\u0646\u06CC\u062F\u061F \u0627\u06CC\u0646 \u0639\u0645\u0644 \u0642\u0627\u0628\u0644 \u0628\u0627\u0632\u06AF\u0634\u062A \u0646\u06CC\u0633\u062A. </h4><div class="w-full mt-[10px] font-normal text-right text-[#133C3E] text-[10px] leading-[15px]"${_scopeId}></div></div>`);
          } else {
            return [
              createVNode("div", { class: "w-full flex flex-col items-start justify-start pb-[18px]" }, [
                createVNode("h1", { class: "w-full font-semibold text-[#141414] text-right text-[17px] leading-[26px]" }, " \u067E\u0627\u06A9 \u06A9\u0631\u062F\u0646 \u062D\u0633\u0627\u0628 \u06A9\u0627\u0631\u0628\u0631\u06CC "),
                createVNode("h4", { class: "w-full font-semibold text-[#828282] text-right text-[14px] leading-[21px]" }, " \u0622\u06CC\u0627 \u0645\u0637\u0645\u0626\u0646 \u0647\u0633\u062A\u06CC\u062F \u06A9\u0647 \u0645\u06CC \u062E\u0648\u0627\u0647\u06CC\u062F \u0627\u06CC\u0646 \u062D\u0633\u0627\u0628 \u0631\u0627 \u062D\u0630\u0641 \u06A9\u0646\u06CC\u062F\u061F \u0627\u06CC\u0646 \u0639\u0645\u0644 \u0642\u0627\u0628\u0644 \u0628\u0627\u0632\u06AF\u0634\u062A \u0646\u06CC\u0633\u062A. "),
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
        _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_sfc_main$3, { class: "md:flex hidden" }, null, _parent));
      _push(`<div class="w-full min-h-screen px-[34px] py-[20px] flex flex-row justify-start items-start">`);
      _push(ssrRenderComponent(_sfc_main$1, { class: "md:flex hidden" }, null, _parent));
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
      _push(ssrRenderComponent(__nuxt_component_1, { class: "hidden md:flex" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, { class: "md:hidden" }, null, _parent));
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

export { _sfc_main as default };
//# sourceMappingURL=security-DHPCHK3M.mjs.map
