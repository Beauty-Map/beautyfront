import { b as useRouter, e as useCookie, f as useNuxtApp } from './server.mjs';
import { useSSRContext, defineComponent, ref, unref, watch, mergeProps, withCtx, createVNode, openBlock, createBlock } from 'vue';
import { u as useCustomFetch } from './useCustomFetch-7ynZLwB1.mjs';
import { ssrRenderComponent, ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _sfc_main$5 } from './MainActionButton-dCV7vShO.mjs';
import { u as useDrawerStore } from './Drawer-n5iGEtr0.mjs';
import { _ as _sfc_main$2$1, a as _sfc_main$1$1 } from './OtpForm-CkmcWc-J.mjs';
import { B as BeautyIcon, _ as _sfc_main$4$1, a as _sfc_main$3$1, b as _sfc_main$1$2 } from './BeautyIcon-B0tzcQSF.mjs';
import { _ as _sfc_main$6 } from './EmailInput-C25-nm-x.mjs';
import LoadingComponent from './Loading-BdqMyNBb.mjs';
import { L as LoginImage } from './LoginImage-Dcgl8vv6.mjs';
import { H as Header, _ as _sfc_main$4 } from './RegisterForm-B7P0ysQc.mjs';
import { B as BackIcon } from './BackIcon-nFKai1cn.mjs';
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
import './fetch-C_QM8LGj.mjs';
import 'lodash-es';
import './ErrorRedIcon-Bdl6jb2D.mjs';
import './CheckBox-CSaiS3ur.mjs';

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "OtpForm",
  __ssrInlineRender: true,
  props: {
    modelValue: {
      type: String,
      default: ""
    }
  },
  emits: ["changePhoneNumber", "resend", "validate"],
  setup(__props, { emit: __emit }) {
    const emits = __emit;
    const props = __props;
    const app = useNuxtApp();
    useDrawerStore();
    const form = ref({
      phone_number: props.modelValue,
      code: ""
    });
    const resetOtp = ref(false);
    const hasOtpError = ref(false);
    const checkOtpCode = () => {
      if (!form.value.code) {
        app.$toast.error("\u06A9\u062F \u062A\u0627\u06CC\u06CC\u062F \u0631\u0627 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F", { rtl: true });
        return;
      }
      emits("validate", form.value.code);
    };
    const resendOtp = async () => {
      resetOtp.value = !resetOtp.value;
      const data = {
        phone_number: form.value.phone_number
      };
      const res = await useCustomFetch("/auth/register", {
        method: "POST",
        body: data
      });
      if (res.error.value != null) {
        app.$toast.error("\u06A9\u062F \u0648\u0631\u0648\u062F \u0628\u0627 \u0645\u0648\u0641\u0642\u06CC\u062A \u0627\u0631\u0633\u0627\u0644 \u0634\u062F", { rtl: true });
      }
      if (res.data.value != null) {
        app.$toast.success("\u06A9\u062F \u0648\u0631\u0648\u062F \u0628\u0627 \u0645\u0648\u0641\u0642\u06CC\u062A \u0627\u0631\u0633\u0627\u0644 \u0634\u062F", { rtl: true });
      }
    };
    watch(() => form.value.code, () => hasOtpError.value = false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full overflow-y-auto" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$2$1, {
        length: 6,
        modelValue: unref(form).code,
        "onUpdate:modelValue": ($event) => unref(form).code = $event,
        "has-error": unref(hasOtpError),
        class: "mt-[20px] mb-[20px]"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1$1, {
        ref: "otpContainer",
        reset: unref(resetOtp),
        onResend: resendOtp
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$5, {
        class: "mt-[24px]",
        onClick: checkOtpCode
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-white text-center text-[20px] leading-[30px]"${_scopeId}>\u062A\u0627\u06CC\u06CC\u062F</div>`);
          } else {
            return [
              createVNode("div", { class: "text-white text-center text-[20px] leading-[30px]" }, "\u062A\u0627\u06CC\u06CC\u062F")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/register-drawer/OtpForm.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "SetPasswordForm",
  __ssrInlineRender: true,
  props: {
    email: {
      type: String,
      default: ""
    },
    rememberToken: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const props = __props;
    const app = useNuxtApp();
    useRouter();
    const store = useDrawerStore();
    const form = ref({
      password: "",
      password_confirmation: ""
    });
    const doSetPassword = async () => {
      const data = {
        email: props.email,
        remember_token: props.rememberToken,
        password: form.value.password,
        password_confirmation: form.value.password_confirmation
      };
      const res = await useCustomFetch("/auth/password", {
        method: "POST",
        body: data
      });
      if (res.error.value != null) {
        app.$toast.error("\u062E\u0637\u0627 \u0631\u062E \u062F\u0627\u062F\u0647 \u0627\u0633\u062A", { rtl: true });
      }
      if (res.data.value != null) {
        app.$toast.success("\u06A9\u062F \u0648\u0631\u0648\u062F \u0628\u0627 \u0645\u0648\u0641\u0642\u06CC\u062A \u0627\u0631\u0633\u0627\u0644 \u0634\u062F", { rtl: true });
        {
          store.closeAllDrawers();
          store.openCompleteProfileDrawer();
        }
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full overflow-y-auto" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$4$1, {
        title: "\u06A9\u0644\u0645\u0647 \u0639\u0628\u0648\u0631",
        modelValue: unref(form).password,
        "onUpdate:modelValue": ($event) => unref(form).password = $event,
        class: "mt-[27px]"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4$1, {
        title: "\u062A\u06A9\u0631\u0627\u0631 \u06A9\u0644\u0645\u0647 \u0639\u0628\u0648\u0631",
        modelValue: unref(form).password_confirmation,
        "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
        class: "mt-[27px]"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$5, {
        class: "mt-[48px]",
        onClick: doSetPassword
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-white text-center text-[20px] leading-[30px]"${_scopeId}>\u062B\u0628\u062A</div>`);
          } else {
            return [
              createVNode("div", { class: "text-white text-center text-[20px] leading-[30px]" }, "\u062B\u0628\u062A")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/register-drawer/SetPasswordForm.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "RegisterMiniForm",
  __ssrInlineRender: true,
  props: {
    modelValue: {
      type: String,
      default: ""
    }
  },
  emits: ["sent", "update:modelValue"],
  setup(__props, { emit: __emit }) {
    const emits = __emit;
    const app = useNuxtApp();
    useRouter();
    const store = useDrawerStore();
    const loading = ref(false);
    const form = ref({
      email: "",
      password: "",
      accept_policy: false
    });
    const validated = () => {
      let validated2 = true;
      if (!form.value.email) {
        app.$toast.error("\u0644\u0637\u0641\u0627 \u0627\u06CC\u0645\u06CC\u0644 \u062E\u0648\u062F \u0631\u0627 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F", { rtl: true });
        validated2 = false;
      }
      if (!form.value.password) {
        app.$toast.error("\u0644\u0637\u0641\u0627 \u067E\u0633\u0648\u0631\u062F \u062E\u0648\u062F \u0631\u0627 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F", { rtl: true });
        validated2 = false;
      }
      if (!form.value.accept_policy) {
        app.$toast.error("\u0644\u0637\u0641\u0627 \u062A\u06CC\u06A9 \u06AF\u0632\u06CC\u0646\u0647 \u062A\u0627\u06CC\u06CC\u062F \u0642\u0648\u0627\u0646\u06CC\u0646 \u0631\u0627 \u0628\u0632\u0646\u06CC\u062F", { rtl: true });
        validated2 = false;
      }
      return validated2;
    };
    const doRegister = async () => {
      var _a;
      if (loading.value)
        return;
      if (!validated()) {
        return;
      }
      loading.value = true;
      const ref2 = useCookie("referralId", {
        maxAge: 60 * 60 * 24 * 30,
        // 30 days
        path: "/",
        sameSite: "lax"
      });
      const data = {
        email: form.value.email,
        password: form.value.password,
        referrer_code: (_a = ref2.value) == null ? void 0 : _a.toString()
      };
      const { $postRequest: postRequest } = app;
      postRequest("/auth/register", data).then(async (res) => {
        app.$toast.success("\u06A9\u062F \u0648\u0631\u0648\u062F \u0628\u0627 \u0645\u0648\u0641\u0642\u06CC\u062A \u0627\u0631\u0633\u0627\u0644 \u0634\u062F", { rtl: true });
        const email = useCookie("email");
        email.value = form.value.email;
        app.$toast.success("\u06A9\u062F \u0648\u0631\u0648\u062F \u0628\u0627 \u0645\u0648\u0641\u0642\u06CC\u062A \u0627\u0631\u0633\u0627\u0644 \u0634\u062F", { rtl: true });
        emits("sent");
      }).catch((err) => {
        const errors = Object.values(err.data.errors);
        for (const k in errors) {
          for (const e in errors[k]) {
            app.$toast.error(errors[k][e], { rtl: true });
          }
        }
      }).finally(() => {
        setTimeout(() => loading.value = false, 500);
      });
    };
    const openLoginModal = () => {
      {
        store.closeAllDrawers();
        store.openLoginDrawer();
      }
    };
    const onInput = (e) => {
      var _a;
      emits("update:modelValue", (_a = e.target) == null ? void 0 : _a.value);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full overflow-y-auto" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$6, {
        onInput,
        title: "\u0627\u06CC\u0645\u06CC\u0644",
        modelValue: unref(form).email,
        "onUpdate:modelValue": ($event) => unref(form).email = $event
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4$1, {
        title: "\u06A9\u0644\u0645\u0647 \u0639\u0628\u0648\u0631",
        modelValue: unref(form).password,
        "onUpdate:modelValue": ($event) => unref(form).password = $event,
        class: "mt-[27px]"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3$1, {
        class: "mt-[24px]",
        modelValue: unref(form).accept_policy,
        "onUpdate:modelValue": ($event) => unref(form).accept_policy = $event
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$5, {
        disabled: unref(loading),
        class: "mt-[24px]",
        onClick: doRegister
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(loading)) {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(LoadingComponent, null, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<div class="text-white text-center text-[20px] leading-[30px]"${_scopeId}>\u0627\u0631\u0633\u0627\u0644 \u06A9\u062F \u062A\u0627\u06CC\u06CC\u062F</div>`);
            }
          } else {
            return [
              unref(loading) ? (openBlock(), createBlock("div", { key: 0 }, [
                createVNode(LoadingComponent)
              ])) : (openBlock(), createBlock("div", {
                key: 1,
                class: "text-white text-center text-[20px] leading-[30px]"
              }, "\u0627\u0631\u0633\u0627\u0644 \u06A9\u062F \u062A\u0627\u06CC\u06CC\u062F"))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$1$2, {
        class: "mt-[18px]",
        onClick: openLoginModal,
        title: "\u0648\u0631\u0648\u062F"
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/register-drawer/RegisterMiniForm.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const app = useNuxtApp();
    const otpSent = ref(false);
    useRouter();
    const showSetPassword = ref(false);
    const form = ref({
      email: "",
      accept_policy: false
    });
    const rememberToken = ref("");
    const store = useDrawerStore();
    const goBack = () => {
      store.closeAllDrawers();
    };
    const onOtpSent = () => {
      otpSent.value = true;
    };
    const resendOtp = () => {
      otpSent.value = false;
    };
    const validate = async (code) => {
      var _a;
      const data = {
        email: form.value.email,
        code
      };
      const res = await useCustomFetch("/auth/register/otp", {
        method: "POST",
        body: data
      });
      if (res.data.value) {
        app.$toast.success("\u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0634\u0645\u0627 \u0628\u0627 \u0645\u0648\u0641\u0642\u06CC\u062A \u062B\u0628\u062A \u0634\u062F", { rtl: true });
        showSetPassword.value = true;
        rememberToken.value = (_a = res.data.value) == null ? void 0 : _a.token;
      }
      if (res.error.value) {
        app.$toast.error("\u06A9\u062F \u0648\u0631\u0648\u062F \u0635\u062D\u06CC\u062D \u0646\u06CC\u0633\u062A!", { rtl: true });
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="hidden md:flex flex-col relative justify-center items-center w-screen h-[calc(100vh-87px)] py-[35px] px-[40px] overflow-y-auto bg-white"><div class="hidden w-full md:flex flex-row max-w-[1200px] mx-auto min-h-[400px] bg-white rounded-[20px] shadow-[0px_2px_8px_0px_#00000040]"><div class="overflow-y-auto w-full md:w-1/2 flex flex-col justify-center items-center md:rounded-tl-[20px] md:rounded-bl-[20px] rounded-[20px] h-full pb-[16px] md:px-[65px] px-[24px]"><div class="mt-[40px] text-[#344055] text-[32px] text-right font-bold"> \u062B\u0628\u062A \u0646\u0627\u0645 </div><div class="mt-[25px] text-[#B6B8C3] font-normal text-[16px] text-right"> \u0628\u0631\u0627\u06CC \u062F\u0633\u062A\u0631\u0633\u06CC \u0645\u0633\u062A\u0642\u06CC\u0645 \u0628\u0647 \u0647\u0646\u0631\u0645\u0646\u062F\u0627\u0646 \u0648 \u062A\u0645\u0627\u0633 \u0648\u0627\u0631\u062F \u0634\u0648\u06CC\u062F </div><div class="border border-[#2C3E5033] w-full my-[20px] border-dashed"></div>`);
      if (!unref(otpSent) && !unref(showSetPassword)) {
        _push(ssrRenderComponent(_sfc_main$1, {
          modelValue: unref(form).email,
          "onUpdate:modelValue": ($event) => unref(form).email = $event,
          onSent: onOtpSent,
          class: "mt-[17px]"
        }, null, _parent));
      } else if (!unref(showSetPassword)) {
        _push(ssrRenderComponent(_sfc_main$3, {
          modelValue: unref(form).email,
          "onUpdate:modelValue": ($event) => unref(form).email = $event,
          onResend: resendOtp,
          onValidate: validate
        }, null, _parent));
      } else if (unref(showSetPassword)) {
        _push(ssrRenderComponent(_sfc_main$2, {
          email: unref(form).email,
          "remember-token": unref(rememberToken)
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="overflow-y-auto hidden md:flex flex-col justify-center items-center py-[40px] px-[65px] w-1/2 bg-[#2dcfc1] rounded-tl-[20px] rounded-bl-[20px] h-full">`);
      _push(ssrRenderComponent(LoginImage, null, null, _parent));
      _push(`<div class="mt-[24px] text-center w-full font-medium text-[24px] text-white"> \u067E\u0634\u062A\u06CC\u0628\u0627\u0646\u06CC \u0641\u0648\u0631\u06CC </div><div class="mt-[24px] text-center w-full font-light text-[18px] text-white"> \u0634\u0645\u0627 \u0645\u06CC\u062A\u0648\u0627\u0646\u06CC\u062F \u0628\u0647 \u0635\u0648\u0631\u062A 24 \u0633\u0627\u0639\u062A\u0647 \u0648 7 \u0631\u0648\u0632 \u0647\u0641\u062A\u0647 \u0631\u0627 \u0628\u0627 \u0645\u0627 \u062A\u0645\u0627\u0633 \u0628\u06AF\u06CC\u0631\u06CC\u062F </div></div></div></div><div class="flex flex-col md:hidden px-[17px] overflow-y-scroll w-full duration-700 ease-in-out bg-white"><div class="flex flex-row items-center justify-end pl-[3px]">`);
      _push(ssrRenderComponent(BackIcon, { onClick: goBack }, null, _parent));
      _push(`</div><div class="flex flex-col justify-start items-center">`);
      _push(ssrRenderComponent(BeautyIcon, { class: "mt-[8px]" }, null, _parent));
      _push(ssrRenderComponent(Header, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, { class: "mt-[17px]" }, null, _parent));
      _push(`</div></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/register/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DtMP7lXn.mjs.map
