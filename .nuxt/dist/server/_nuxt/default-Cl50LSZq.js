import { _ as _sfc_main$j, a as __nuxt_component_1 } from "./MainHeaderDesktop-CIIE8dBu.js";
import { _ as _export_sfc, b as useRouter, e as useCookie, f as useNuxtApp } from "../server.mjs";
import { mergeProps, useSSRContext, defineComponent, ref, unref, withCtx, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { _ as _sfc_main$9 } from "./PageLoading-6bDLHwCJ.js";
import { _ as _sfc_main$k } from "./BottomNavigationBox-CEGA0rhn.js";
import { _ as _sfc_main$a, a as _sfc_main$b, b as _sfc_main$c, c as _sfc_main$d, d as _sfc_main$e, e as _sfc_main$g, f as _sfc_main$h, g as _sfc_main$i } from "./SetPasswordDrawer-DqdRmVA7.js";
import { _ as _sfc_main$f } from "./NotificationDrawer-d5Wh0ovI.js";
import { B as BackIcon } from "./BackIcon-nFKai1cn.js";
import { u as useDrawerStore } from "./Drawer-n5iGEtr0.js";
import { a as _sfc_main$5, b as _sfc_main$7, B as BeautyIcon } from "./BeautyIcon-B0tzcQSF.js";
import { _ as _sfc_main$6 } from "./MainActionButton-dCV7vShO.js";
import { _ as _sfc_main$4 } from "./EmailInput-C25-nm-x.js";
import { a as _sfc_main$8 } from "./RegisterForm-B7P0ysQc.js";
import { u as useCustomFetch } from "./useCustomFetch-7ynZLwB1.js";
import "./nuxt-link-DB89SAcR.js";
import "ufo";
import "./useSanctumAuth-B2JusLUJ.js";
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
import "cookie-es";
import "ohash";
import "@vue/devtools-api";
import "dayjs";
import "dayjs/plugin/updateLocale.js";
import "dayjs/plugin/relativeTime.js";
import "dayjs/plugin/utc.js";
import "consola";
import "vue3-toastify";
import "./Header-DQtllvZs.js";
import "./TelInput-Dce7UZL4.js";
import "lodash-es";
import "./ContactIcon-QHxajr-T.js";
import "./ErrorRedIcon-Bdl6jb2D.js";
import "./Loading-BdqMyNBb.js";
import "./Header-BOhVDNNd.js";
import "./SecurityLinkBox-DBIJiCrA.js";
import "./ProfileLink-CyK1DvW1.js";
import "./LeftArrow-LWKoxjM1.js";
import "./DeleteAccountModal-HvrqoNMM.js";
import "./BirthDateInput-BX9rvxsi.js";
import "./ChooseCityDrawer-DxZVyNvs.js";
import "./SearchIcon-BEnuNJvi.js";
import "./SecurityIcon-WRdFaBVY.js";
import "./ArtistPanelIcon-91lmbuTQ.js";
import "./fetch-C_QM8LGj.js";
import "./CheckBox-CSaiS3ur.js";
import "./OtpForm-CkmcWc-J.js";
const _sfc_main$3 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col justify-center items-center" }, _attrs))}><div class="font-medium text-[24px] leading-[37px] text-[#141414] text-center"> بازنشانی رمز عبور </div><div class="font-medium text-[13px] leading-[18px] text-[#133C3E] text-center mx-7"> برای بازنشانی رمزعبور خود در بیوتی مپ ایمیل خود را وارد کنید </div></div>`);
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
        app.$toast.success("کد ورود با موفقیت ارسال شد", { rtl: true });
        openDrawerClicked();
      }).catch((err) => {
        app.$toast.error("ایمیل صحیح نیست!", { rtl: true });
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
        app.$toast.error("کد تایید صحیح نیست", { rtl: true });
      }
      if (res.data.value != null) {
        app.$toast.success("ایمیل شما تایید شد", { rtl: true });
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
        app.$toast.error("ایمیل صحیح نیست!", { rtl: true });
      }
      if (res.data.value != null) {
        const email = useCookie("email");
        email.value = form.value.email;
        app.$toast.success("کد ورود با موفقیت ارسال شد", { rtl: true });
        openDrawerClicked();
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full overflow-y-auto" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$4, {
        title: "ایمیل",
        modelValue: unref(form).email,
        "onUpdate:modelValue": ($event) => unref(form).email = $event
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$5, {
        class: "mt-[24px]",
        modelValue: unref(form).accept_policy,
        "onUpdate:modelValue": ($event) => unref(form).accept_policy = $event
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$6, {
        class: "mt-[24px]",
        onClick: doRegister
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-white text-center text-[20px] leading-[30px]"${_scopeId}>ارسال کد تایید</div>`);
          } else {
            return [
              createVNode("div", { class: "text-white text-center text-[20px] leading-[30px]" }, "ارسال کد تایید")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$7, {
        class: "mt-[18px]",
        onClick: openLoginModal,
        title: "ورود"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$8, {
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
        _push(ssrRenderComponent(_sfc_main$9, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_sfc_main$a, { class: "md:hidden flex" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$b, { class: "md:hidden flex" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$c, { class: "md:hidden flex" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$d, { class: "md:hidden flex" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$e, { class: "md:hidden flex" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$f, { class: "md:hidden flex" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$g, { class: "md:hidden flex" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$h, { class: "md:hidden flex" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, { class: "md:hidden flex" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$i, { class: "md:hidden flex" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$j, { class: "md:flex hidden" }, null, _parent));
      _push(`<div class="w-full min-h-screen flex flex-col justify-start items-start">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
      _push(ssrRenderComponent(_component_Footer, { class: "hidden md:flex" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$k, { class: "md:hidden" }, null, _parent));
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
export {
  _sfc_main as default
};
//# sourceMappingURL=default-Cl50LSZq.js.map
