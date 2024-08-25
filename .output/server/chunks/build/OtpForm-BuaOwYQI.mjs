import { useSSRContext, defineComponent, ref, watch, mergeProps, unref, withCtx, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { M as MainActionButton } from './MainActionButton-CrIh6sno.mjs';
import { u as useDrawerStore } from './Drawer-DbL6gM-F.mjs';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "OtpInput",
  __ssrInlineRender: true,
  props: {
    modelValue: {
      type: String,
      default: ""
    },
    length: {
      type: Number,
      default: 4
    },
    hasError: {
      type: Boolean,
      default: false,
      required: true
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const otpArray = ref([]);
    const container = ref();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "container",
        ref: container,
        class: "flex flex-row gap-2 items-center justify-center py-4 ltr-dir w-full px-1"
      }, _attrs))}><!--[-->`);
      ssrRenderList(__props.length, (n) => {
        _push(`<input type="text" class="${ssrRenderClass([[__props.hasError ? "border-[#FF3CA0] focus:border-[#FF3CA0] shadow-[0px_0px_5.5px_0px__#FF3CA0]" : "border-[#A9A7A7] focus:border-[#133C3E]"], "text-center h-[46px] w-[40px] rounded-[8px] outline-none duration-300 border text-[#141414] placeholder:text-[#141414]"])}" placeholder="_"${ssrRenderAttr("value", unref(otpArray)[n - 1])} maxlength="1">`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/input/OtpInput.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const intervalError = "[nuxt] `setInterval` should not be used on the server. Consider wrapping it with an `onNuxtReady`, `onBeforeMount` or `onMounted` lifecycle hook, or ensure you only call it in the browser by checking `false`.";
const setInterval = () => {
  console.error(intervalError);
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "OtpResendButton",
  __ssrInlineRender: true,
  props: {
    period: {
      type: Number,
      default: 60
    },
    reset: {
      type: Boolean,
      required: true
    }
  },
  emits: ["resend"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const time = ref(props.period);
    const timerEnded = ref(false);
    timerEnded.value = false;
    const count = () => {
      timerEnded.value = false;
      setInterval();
    };
    watch(() => props.reset, count);
    __expose({
      count
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full" }, _attrs))}>`);
      if (unref(timerEnded)) {
        _push(`<div class="flex flex-col justify-start items-center font-medium text-center text-[13px] leading-[20px] text-[#133C3E]"> \u06A9\u062F \u0631\u0627 \u062F\u0631\u06CC\u0627\u0641\u062A \u0646\u06A9\u0631\u062F\u06CC\u062F! <span class="text-[#400842] font-medium underline cursor-pointer">\u0627\u0631\u0633\u0627\u0644 \u0645\u062C\u062F\u062F</span></div>`);
      } else {
        _push(`<div class="flex flex-col justify-start items-center font-medium text-center text-[16px] leading-[20px] text-[#133C3E]"><span>${ssrInterpolate(unref(time))}</span></div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/otp-drawer/OtpResendButton.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "OtpForm",
  __ssrInlineRender: true,
  emits: ["changeEmail", "resend", "validate"],
  setup(__props, { emit: __emit }) {
    const emits = __emit;
    useDrawerStore();
    const form = ref({
      email: "",
      code: ""
    });
    const resetOtp = ref(false);
    const hasOtpError = ref(false);
    const checkOtpCode = () => {
      if (!form.value.code) {
        return;
      }
      emits("validate", form.value.code);
    };
    const resendOtp = () => {
      emits("resend");
      resetOtp.value = !resetOtp.value;
      form.value.code = "";
    };
    watch(() => form.value.code, () => hasOtpError.value = false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full overflow-y-auto" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$2, {
        length: 6,
        modelValue: unref(form).code,
        "onUpdate:modelValue": ($event) => unref(form).code = $event,
        "has-error": unref(hasOtpError),
        class: "mt-[70px] mb-[30px]"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, {
        ref: "otpContainer",
        reset: unref(resetOtp),
        onResend: resendOtp
      }, null, _parent));
      _push(ssrRenderComponent(MainActionButton, {
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/otp-drawer/OtpForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main$2 as _, _sfc_main$1 as a, _sfc_main as b };
//# sourceMappingURL=OtpForm-BuaOwYQI.mjs.map
