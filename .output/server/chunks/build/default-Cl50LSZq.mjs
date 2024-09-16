import { _ as _sfc_main$7, a as __nuxt_component_1 } from './MainHeaderDesktop-CIIE8dBu.mjs';
import { b as useRouter, f as useNuxtApp, _ as _export_sfc, e as useCookie } from './server.mjs';
import { useSSRContext, defineComponent, ref, mergeProps, unref, withCtx, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _sfc_main$4 } from './PageLoading-6bDLHwCJ.mjs';
import { _ as _sfc_main$8 } from './BottomNavigationBox-CEGA0rhn.mjs';
import { _ as _sfc_main$3$1, a as _sfc_main$j, b as _sfc_main$9, c as _sfc_main$5, d as _sfc_main$a, e as _sfc_main$i, f as _sfc_main$e, g as _sfc_main$k } from './SetPasswordDrawer-DqdRmVA7.mjs';
import { _ as _sfc_main$6 } from './NotificationDrawer-d5Wh0ovI.mjs';
import { B as BackIcon } from './BackIcon-nFKai1cn.mjs';
import { u as useDrawerStore } from './Drawer-n5iGEtr0.mjs';
import { a as _sfc_main$3$2, b as _sfc_main$1$1, B as BeautyIcon } from './BeautyIcon-B0tzcQSF.mjs';
import { _ as _sfc_main$c } from './MainActionButton-dCV7vShO.mjs';
import { _ as _sfc_main$b } from './EmailInput-C25-nm-x.mjs';
import { a as _sfc_main$1$2 } from './RegisterForm-B7P0ysQc.mjs';
import { u as useCustomFetch } from './useCustomFetch-7ynZLwB1.mjs';
import './nuxt-link-DB89SAcR.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import './useSanctumAuth-B2JusLUJ.mjs';
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
import './Header-DQtllvZs.mjs';
import './TelInput-Dce7UZL4.mjs';
import 'lodash-es';
import './ContactIcon-QHxajr-T.mjs';
import './ErrorRedIcon-Bdl6jb2D.mjs';
import './Loading-BdqMyNBb.mjs';
import './Header-BOhVDNNd.mjs';
import './SecurityLinkBox-DBIJiCrA.mjs';
import './ProfileLink-CyK1DvW1.mjs';
import './LeftArrow-LWKoxjM1.mjs';
import './DeleteAccountModal-HvrqoNMM.mjs';
import './BirthDateInput-BX9rvxsi.mjs';
import './ChooseCityDrawer-DxZVyNvs.mjs';
import './SearchIcon-BEnuNJvi.mjs';
import './SecurityIcon-WRdFaBVY.mjs';
import './ArtistPanelIcon-91lmbuTQ.mjs';
import './fetch-C_QM8LGj.mjs';
import './CheckBox-CSaiS3ur.mjs';
import './OtpForm-CkmcWc-J.mjs';

const _sfc_main$3 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col justify-center items-center" }, _attrs))}><div class="font-medium text-[24px] leading-[37px] text-[#141414] text-center"> \u0628\u0627\u0632\u0646\u0634\u0627\u0646\u06CC \u0631\u0645\u0632 \u0639\u0628\u0648\u0631 </div><div class="font-medium text-[13px] leading-[18px] text-[#133C3E] text-center mx-7"> \u0628\u0631\u0627\u06CC \u0628\u0627\u0632\u0646\u0634\u0627\u0646\u06CC \u0631\u0645\u0632\u0639\u0628\u0648\u0631 \u062E\u0648\u062F \u062F\u0631 \u0628\u06CC\u0648\u062A\u06CC \u0645\u067E \u0627\u06CC\u0645\u06CC\u0644 \u062E\u0648\u062F \u0631\u0627 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F </div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/reset-password-drawer/Header.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Header = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ResetForm",
  __ssrInlineRender: true,
  setup(__props) {
    const app = useNuxtApp();
    useRouter();
    const store = useDrawerStore();
    const openDrawer = ref(false);
    const form = ref({
      email: "",
      password: "",
      accept_policy: false
    });
    const openDrawerClicked = () => {
      openDrawer.value = true;
    };
    const closeDrawerClicked = () => {
      openDrawer.value = false;
    };
    const changeEmail = () => {
      openDrawerClicked();
    };
    const doRegister = async () => {
      const data = {
        email: form.value.email
      };
      const { $postRequest: postRequest } = app;
      postRequest("/auth/password/forgot", data).then((res) => {
        const email = useCookie("email");
        email.value = form.value.email;
        app.$toast.success("\u06A9\u062F \u0648\u0631\u0648\u062F \u0628\u0627 \u0645\u0648\u0641\u0642\u06CC\u062A \u0627\u0631\u0633\u0627\u0644 \u0634\u062F", { rtl: true });
        openDrawerClicked();
      }).catch((err) => {
        app.$toast.error("\u0627\u06CC\u0645\u06CC\u0644 \u0635\u062D\u06CC\u062D \u0646\u06CC\u0633\u062A!", { rtl: true });
      });
    };
    const openLoginModal = () => {
      store.closeAllDrawers();
      store.openLoginDrawer();
    };
    const validate = async (code) => {
      const data = {
        email: form.value.email,
        code
      };
      const res = await useCustomFetch("/auth/password/otp", {
        method: "POST",
        body: data
      });
      if (res.error.value != null) {
        app.$toast.error("\u06A9\u062F \u062A\u0627\u06CC\u06CC\u062F \u0635\u062D\u06CC\u062D \u0646\u06CC\u0633\u062A", { rtl: true });
      }
      if (res.data.value != null) {
        app.$toast.success("\u0627\u06CC\u0645\u06CC\u0644 \u0634\u0645\u0627 \u062A\u0627\u06CC\u06CC\u062F \u0634\u062F", { rtl: true });
        {
          closeDrawerClicked();
          store.closeAllDrawers();
        }
      }
    };
    const resend = async (code) => {
      const data = {
        email: form.value.email
      };
      const res = await useCustomFetch("/auth/password/forgot", {
        method: "POST",
        body: data
      });
      if (res.error.value != null) {
        app.$toast.error("\u0627\u06CC\u0645\u06CC\u0644 \u0635\u062D\u06CC\u062D \u0646\u06CC\u0633\u062A!", { rtl: true });
      }
      if (res.data.value != null) {
        const email = useCookie("email");
        email.value = form.value.email;
        app.$toast.success("\u06A9\u062F \u0648\u0631\u0648\u062F \u0628\u0627 \u0645\u0648\u0641\u0642\u06CC\u062A \u0627\u0631\u0633\u0627\u0644 \u0634\u062F", { rtl: true });
        openDrawerClicked();
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full overflow-y-auto" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$b, {
        title: "\u0627\u06CC\u0645\u06CC\u0644",
        modelValue: unref(form).email,
        "onUpdate:modelValue": ($event) => unref(form).email = $event
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3$2, {
        class: "mt-[24px]",
        modelValue: unref(form).accept_policy,
        "onUpdate:modelValue": ($event) => unref(form).accept_policy = $event
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$c, {
        class: "mt-[24px]",
        onClick: doRegister
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-white text-center text-[20px] leading-[30px]"${_scopeId}>\u0627\u0631\u0633\u0627\u0644 \u06A9\u062F \u062A\u0627\u06CC\u06CC\u062F</div>`);
          } else {
            return [
              createVNode("div", { class: "text-white text-center text-[20px] leading-[30px]" }, "\u0627\u0631\u0633\u0627\u0644 \u06A9\u062F \u062A\u0627\u06CC\u06CC\u062F")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$1$1, {
        class: "mt-[18px]",
        onClick: openLoginModal,
        title: "\u0648\u0631\u0648\u062F"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1$2, {
        "is-open": unref(openDrawer),
        onClose: closeDrawerClicked,
        onChangeEmail: changeEmail,
        onValidate: validate,
        onResend: resend
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/reset-password-drawer/ResetForm.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ResetPasswordDrawer",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useDrawerStore();
    const goBack = () => {
      store.closeAllDrawers();
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["flex flex-col fixed md:hide top-0 bottom-0 px-[17px] overflow-y-scroll w-full duration-700 ease-in-out bg-white z-[99999999]", [unref(store).isOpenResetPassword ? "left-0" : "left-[-100%]"]]
      }, _attrs))}><div class="flex flex-row items-center justify-end pt-[23px] pl-[3px]">`);
      _push(ssrRenderComponent(BackIcon, { onClick: goBack }, null, _parent));
      _push(`</div><div class="flex flex-col justify-start items-center">`);
      _push(ssrRenderComponent(BeautyIcon, { class: "mt-12" }, null, _parent));
      _push(ssrRenderComponent(Header, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, { class: "mt-[17px]" }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/drawer/ResetPasswordDrawer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
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
      const _component_Footer = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page h-full w-full flex flex-col pt-[21px] pb-[79px] md:pt-0 md:pb-0 relative" }, _attrs))}>`);
      if (unref(loading)) {
        _push(ssrRenderComponent(_sfc_main$4, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_sfc_main$3$1, { class: "md:hidden flex" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$j, { class: "md:hidden flex" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$9, { class: "md:hidden flex" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$5, { class: "md:hidden flex" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$a, { class: "md:hidden flex" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$6, { class: "md:hidden flex" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$i, { class: "md:hidden flex" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$e, { class: "md:hidden flex" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, { class: "md:hidden flex" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$k, { class: "md:hidden flex" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$7, { class: "md:flex hidden" }, null, _parent));
      _push(`<div class="w-full min-h-screen flex flex-col justify-start items-start">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
      _push(ssrRenderComponent(_component_Footer, { class: "hidden md:flex" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$8, { class: "md:hidden" }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-Cl50LSZq.mjs.map
