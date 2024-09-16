import { defineComponent, ref, mergeProps, unref, useSSRContext } from 'vue';
import { debounce } from 'lodash-es';
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrRenderComponent } from 'vue/server-renderer';
import { E as ErrorRedIcon } from './ErrorRedIcon-Bdl6jb2D.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "EmailInput",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      default: ""
    },
    modelValue: {
      type: String,
      default: ""
    },
    error: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const emits = __emit;
    const props = __props;
    const value = ref(props.modelValue);
    const errorText = ref("");
    const hasError = ref(false);
    const validateEmail = ($event) => {
      var _a;
      emits("update:modelValue", (_a = $event.target) == null ? void 0 : _a.value);
    };
    debounce(validateEmail, 500);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-start justify-start w-full px-1" }, _attrs))}>`);
      if (__props.title) {
        _push(`<div class="${ssrRenderClass([[unref(hasError) ? "text-[#F44336]" : "text-[#141414]"], "text-[14px] leading-[16px] text-right mb-1 font-medium"])}">${ssrInterpolate(__props.title)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="${ssrRenderClass([[unref(hasError) ? "border-[#F44336]" : "border-[#133C3E]"], "h-[40px] w-full rounded-[8px] relative border"])}"><input type="email" class="absolute left-[1px] right-[1px] top-[1px] bottom-[1px] text-left rounded-[8px] outline-none focus:outline-none pl-[40px] pr-[20px] placeholder:text-[#A9A7A7]"${ssrRenderAttr("value", unref(value))}${ssrIncludeBooleanAttr(__props.disabled) ? " disabled" : ""}><span class="absolute left-[10px] top-[4px] text-2xl text-[#A9A7A7]"> @ </span></div>`);
      if (unref(hasError) || __props.error) {
        _push(`<div class="w-full flex flex-row justify-start items-center">`);
        _push(ssrRenderComponent(ErrorRedIcon, null, null, _parent));
        _push(`<span class="mr-1 text-[#F44336] text-[10px] leading-[12px]">${ssrInterpolate(unref(errorText) || props.error)}</span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/input/EmailInput.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=EmailInput-C25-nm-x.mjs.map
