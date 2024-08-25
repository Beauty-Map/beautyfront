import { useSSRContext, defineComponent, ref, mergeProps, unref, withCtx, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { a as useRouter, d as useCookie, f as useNuxtApp } from './server.mjs';
import { _ as _sfc_main$4$1, a as _sfc_main$3$1, b as _sfc_main$1$1 } from './BeautyIcon-C6RRmPU7.mjs';
import { M as MainActionButton } from './MainActionButton-CrIh6sno.mjs';
import { u as useDrawerStore } from './Drawer-DbL6gM-F.mjs';
import { _ as _sfc_main$4 } from './EmailInput-BVjzeY3f.mjs';
import { b as _sfc_main$5 } from './OtpForm-BuaOwYQI.mjs';
import { u as useCustomFetch } from './useCustomFetch-CwVU0VgL.mjs';

const _sfc_main$3 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col justify-center items-center" }, _attrs))}><div class="font-medium text-[24px] leading-[37px] text-[#141414] text-center"> \u0639\u0636\u0648\u06CC\u062A </div><div class="font-medium text-[13px] leading-[18px] text-[#133C3E] text-center mx-7"> \u0628\u0631\u0627\u06CC \u062B\u0628\u062A \u0646\u0627\u0645 \u062F\u0631 \u0628\u06CC\u0648\u062A\u06CC \u0645\u067E \u0627\u06CC\u0645\u06CC\u0644 \u062E\u0648\u062F \u0631\u0627 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F </div></div>`);
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col justify-center items-center" }, _attrs))}><div class="font-medium text-[24px] leading-[37px] text-[#141414] text-center"> \u06A9\u062F \u062A\u0627\u06CC\u06CC\u062F \u0631\u0627 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F </div><div class="font-medium text-[13px] leading-[18px] text-[#133C3E] text-center mx-7 mt-[15px]"><span> \u0644\u0637\u0641\u0627 \u06A9\u062F \u062A\u0627\u06CC\u06CC\u062F\u06CC \u0631\u0627 \u06A9\u0647 \u0628\u0647 \u0627\u06CC\u0645\u06CC\u0644 <span>${ssrInterpolate(__props.email)}</span> \u0627\u0631\u0633\u0627\u0644 \u0634\u062F\u0647 \u0631\u0627 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F. <span class="text-[#400842] font-medium underline cursor-pointer">\u0648\u06CC\u0631\u0627\u06CC\u0634 \u0627\u06CC\u0645\u06CC\u0644</span></span></div></div>`);
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
        _push(ssrRenderComponent(_sfc_main$5, {
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
        email: form.value.email,
        password: form.value.password
      };
      const res = await useCustomFetch("/auth/register", {
        method: "POST",
        body: data
      });
      if (res.error.value != null) {
        app.$toast.error("\u0627\u06CC\u0646 \u0627\u06CC\u0645\u06CC\u0644 \u067E\u06CC\u0634\u062A\u0631 \u062B\u0628\u062A \u0646\u0627\u0645 \u06A9\u0631\u062F\u0647 \u0627\u0633\u062A", { rtl: true });
      }
      if (res.data.value != null) {
        const email = useCookie("email");
        email.value = form.value.email;
        app.$toast.success("\u06A9\u062F \u0648\u0631\u0648\u062F \u0628\u0627 \u0645\u0648\u0641\u0642\u06CC\u062A \u0627\u0631\u0633\u0627\u0644 \u0634\u062F", { rtl: true });
        {
          openDrawerClicked();
        }
      }
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
      const res = await useCustomFetch("/auth/register", {
        method: "POST",
        body: data
      });
      if (res.error.value != null) {
        app.$toast.error("\u0627\u06CC\u0646 \u0627\u06CC\u0645\u06CC\u0644 \u067E\u06CC\u0634\u062A\u0631 \u062B\u0628\u062A \u0646\u0627\u0645 \u06A9\u0631\u062F\u0647 \u0627\u0633\u062A", { rtl: true });
      }
      if (res.data.value != null) {
        const email = useCookie("email");
        email.value = form.value.email;
        app.$toast.success("\u06A9\u062F \u0648\u0631\u0648\u062F \u0628\u0627 \u0645\u0648\u0641\u0642\u06CC\u062A \u0627\u0631\u0633\u0627\u0644 \u0634\u062F", { rtl: true });
        {
          openDrawerClicked();
        }
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full overflow-y-auto" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$4, {
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
      _push(ssrRenderComponent(MainActionButton, {
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

export { Header as H, _sfc_main as _, _sfc_main$1 as a };
//# sourceMappingURL=RegisterForm-DnAd1NEZ.mjs.map
