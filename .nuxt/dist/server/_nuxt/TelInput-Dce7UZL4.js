import { mergeProps, useSSRContext, defineComponent, ref, unref } from "vue";
import { debounce } from "lodash-es";
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrRenderComponent } from "vue/server-renderer";
import { C as ContactIcon } from "./ContactIcon-QHxajr-T.js";
import { _ as _export_sfc } from "../server.mjs";
import { E as ErrorRedIcon } from "./ErrorRedIcon-Bdl6jb2D.js";
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "19",
    height: "18",
    viewBox: "0 0 19 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M17.45 18C15.3667 18 13.3083 17.5458 11.275 16.6375C9.24167 15.7292 7.39167 14.4417 5.725 12.775C4.05833 11.1083 2.77083 9.25833 1.8625 7.225C0.954167 5.19167 0.5 3.13333 0.5 1.05C0.5 0.75 0.6 0.5 0.8 0.3C1 0.1 1.25 0 1.55 0H5.6C5.83333 0 6.04167 0.0791667 6.225 0.2375C6.40833 0.395833 6.51667 0.583333 6.55 0.8L7.2 4.3C7.23333 4.56667 7.225 4.79167 7.175 4.975C7.125 5.15833 7.03333 5.31667 6.9 5.45L4.475 7.9C4.80833 8.51667 5.20417 9.1125 5.6625 9.6875C6.12083 10.2625 6.625 10.8167 7.175 11.35C7.69167 11.8667 8.23333 12.3458 8.8 12.7875C9.36667 13.2292 9.96667 13.6333 10.6 14L12.95 11.65C13.1 11.5 13.2958 11.3875 13.5375 11.3125C13.7792 11.2375 14.0167 11.2167 14.25 11.25L17.7 11.95C17.9333 12.0167 18.125 12.1375 18.275 12.3125C18.425 12.4875 18.5 12.6833 18.5 12.9V16.95C18.5 17.25 18.4 17.5 18.2 17.7C18 17.9 17.75 18 17.45 18ZM3.525 6L5.175 4.35L4.75 2H2.525C2.60833 2.68333 2.725 3.35833 2.875 4.025C3.025 4.69167 3.24167 5.35 3.525 6ZM12.475 14.95C13.125 15.2333 13.7875 15.4583 14.4625 15.625C15.1375 15.7917 15.8167 15.9 16.5 15.95V13.75L14.15 13.275L12.475 14.95Z" fill="#F44336"></path></svg>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/ContactRedIcon.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ContactRedIcon = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TelInput",
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
    const validateTelNumber = ($event) => {
      var _a;
      emits("update:modelValue", (_a = $event.target) == null ? void 0 : _a.value);
    };
    debounce(validateTelNumber, 500);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-start justify-start w-full px-1" }, _attrs))}>`);
      if (__props.title) {
        _push(`<div class="${ssrRenderClass([[unref(hasError) ? "text-[#F44336]" : "text-[#141414]"], "text-[14px] leading-[16px] text-right mb-1 font-medium"])}">${ssrInterpolate(__props.title)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="${ssrRenderClass([[unref(hasError) ? "border-[#F44336]" : "border-[#133C3E]"], "h-[40px] w-full rounded-[8px] relative border"])}"><input type="tel" class="absolute left-[1px] right-[1px] top-[1px] bottom-[1px] text-left rounded-[8px] outline-none focus:outline-none pl-[40px] pr-[20px] placeholder:text-[#A9A7A7]"${ssrRenderAttr("value", unref(value))} pattern="[0-9]"${ssrIncludeBooleanAttr(__props.disabled) ? " disabled" : ""}>`);
      if (unref(hasError)) {
        _push(ssrRenderComponent(ContactRedIcon, { class: "absolute left-[10px] top-[10px]" }, null, _parent));
      } else {
        _push(ssrRenderComponent(ContactIcon, { class: "absolute left-[10px] top-[10px]" }, null, _parent));
      }
      _push(`</div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/input/TelInput.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=TelInput-Dce7UZL4.js.map
