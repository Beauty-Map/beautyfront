import { mergeProps, useSSRContext, defineComponent, ref, unref, withCtx, openBlock, createBlock, createVNode } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc, b as useRouter, e as useCookie, f as useNuxtApp } from "../server.mjs";
import { _ as _sfc_main$6, a as _sfc_main$7, b as _sfc_main$9 } from "./BeautyIcon-B0tzcQSF.js";
import { _ as _sfc_main$8 } from "./MainActionButton-dCV7vShO.js";
import { u as useDrawerStore } from "./Drawer-n5iGEtr0.js";
import { _ as _sfc_main$5 } from "./EmailInput-C25-nm-x.js";
import { b as _sfc_main$4 } from "./OtpForm-CkmcWc-J.js";
import { u as useCustomFetch } from "./useCustomFetch-7ynZLwB1.js";
import LoadingComponent from "./Loading-BdqMyNBb.js";
const _sfc_main$3 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col justify-center items-center" }, _attrs))}><div class="font-medium text-[24px] leading-[37px] text-[#141414] text-center"> عضویت </div><div class="font-medium text-[13px] leading-[18px] text-[#133C3E] text-center mx-7"> برای ثبت نام در بیوتی مپ ایمیل خود را وارد کنید </div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/register-drawer/Header.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Header = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Header",
  __ssrInlineRender: true,
  props: {
    email: {
      type: String,
      default: "",
      required: true
    }
  },
  emits: ["changeEmail"],
  setup(__props, { emit: __emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col justify-center items-center" }, _attrs))}><div class="font-medium text-[24px] leading-[37px] text-[#141414] text-center"> کد تایید را وارد کنید </div><div class="font-medium text-[13px] leading-[18px] text-[#133C3E] text-center mx-7 mt-[15px]"><span> لطفا کد تاییدی را که به ایمیل <span>${ssrInterpolate(__props.email)}</span> ارسال شده را وارد کنید. <span class="text-[#400842] font-medium underline cursor-pointer">ویرایش ایمیل</span></span></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/otp-drawer/Header.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "OtpDrawer",
  __ssrInlineRender: true,
  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  },
  emits: ["changeEmail", "resend", "validate", "close"],
  setup(__props, { emit: __emit }) {
    const emits = __emit;
    useDrawerStore();
    const email = ref("");
    const goBack = () => {
      emits("close");
    };
    const resendOtp = () => {
      emits("resend");
    };
    const validate = (code) => {
      emits("validate", code);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["flex flex-col fixed md:hide top-0 bottom-0 px-[17px] overflow-y-scroll w-full duration-700 ease-in-out bg-white z-[99999999]", [__props.isOpen ? "left-0" : "left-[-100%]"]]
      }, _attrs))}><div class="flex flex-col justify-start items-center mt-[40px]">`);
      _push(ssrRenderComponent(_sfc_main$2, {
        email: unref(email),
        onChangeEmail: goBack
      }, null, _parent));
      if (__props.isOpen) {
        _push(ssrRenderComponent(_sfc_main$4, {
          onResend: resendOtp,
          onValidate: validate
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/drawer/OtpDrawer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "RegisterForm",
  __ssrInlineRender: true,
  setup(__props) {
    const app = useNuxtApp();
    useRouter();
    const store = useDrawerStore();
    const openDrawer = ref(false);
    const loading = ref(false);
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
    const validated = () => {
      let validated2 = true;
      if (!form.value.email) {
        app.$toast.error("لطفا ایمیل خود را وارد کنید", { rtl: true });
        validated2 = false;
      }
      if (!form.value.password) {
        app.$toast.error("لطفا پسورد خود را وارد کنید", { rtl: true });
        validated2 = false;
      }
      if (!form.value.accept_policy) {
        app.$toast.error("لطفا تیک گزینه تایید قوانین را بزنید", { rtl: true });
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
        app.$toast.success("کد ورود با موفقیت ارسال شد", { rtl: true });
        const email = useCookie("email");
        email.value = form.value.email;
        app.$toast.success("کد ورود با موفقیت ارسال شد", { rtl: true });
        {
          openDrawerClicked();
        }
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
      store.closeAllDrawers();
      store.openLoginDrawer();
    };
    const validate = async (code) => {
      const data = {
        email: form.value.email,
        code
      };
      const res = await useCustomFetch("/auth/register/otp", {
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
        email: form.value.email,
        password: form.value.password
      };
      const res = await useCustomFetch("/auth/register", {
        method: "POST",
        body: data
      });
      if (res.error.value != null) {
        app.$toast.error("این ایمیل پیشتر ثبت نام کرده است", { rtl: true });
      }
      if (res.data.value != null) {
        const email = useCookie("email");
        email.value = form.value.email;
        app.$toast.success("کد ورود با موفقیت ارسال شد", { rtl: true });
        {
          openDrawerClicked();
        }
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full overflow-y-auto" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$5, {
        title: "ایمیل",
        modelValue: unref(form).email,
        "onUpdate:modelValue": ($event) => unref(form).email = $event
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$6, {
        title: "کلمه عبور",
        modelValue: unref(form).password,
        "onUpdate:modelValue": ($event) => unref(form).password = $event,
        class: "mt-[27px]"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$7, {
        class: "mt-[24px]",
        modelValue: unref(form).accept_policy,
        "onUpdate:modelValue": ($event) => unref(form).accept_policy = $event
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$8, {
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
              _push2(`<div class="text-white text-center text-[20px] leading-[30px]"${_scopeId}>ارسال کد تایید</div>`);
            }
          } else {
            return [
              unref(loading) ? (openBlock(), createBlock("div", { key: 0 }, [
                createVNode(LoadingComponent)
              ])) : (openBlock(), createBlock("div", {
                key: 1,
                class: "text-white text-center text-[20px] leading-[30px]"
              }, "ارسال کد تایید"))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$9, {
        class: "mt-[18px]",
        onClick: openLoginModal,
        title: "ورود"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, {
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/register-drawer/RegisterForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  Header as H,
  _sfc_main as _,
  _sfc_main$1 as a
};
//# sourceMappingURL=RegisterForm-B7P0ysQc.js.map
