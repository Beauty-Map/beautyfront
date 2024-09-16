import { mergeProps, useSSRContext, defineComponent } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
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
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "28",
    height: "28",
    viewBox: "0 0 28 28",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M8.16683 21.0002C7.83627 21.0002 7.55919 20.8884 7.33558 20.6647C7.11197 20.4411 7.00016 20.1641 7.00016 19.8335V17.5002H22.1668V7.00016H24.5002C24.8307 7.00016 25.1078 7.11197 25.3314 7.33558C25.555 7.55919 25.6668 7.83627 25.6668 8.16683V25.6668L21.0002 21.0002H8.16683ZM2.3335 19.8335V3.50016C2.3335 3.16961 2.4453 2.89252 2.66891 2.66891C2.89252 2.4453 3.16961 2.3335 3.50016 2.3335H18.6668C18.9974 2.3335 19.2745 2.4453 19.4981 2.66891C19.7217 2.89252 19.8335 3.16961 19.8335 3.50016V14.0002C19.8335 14.3307 19.7217 14.6078 19.4981 14.8314C19.2745 15.055 18.9974 15.1668 18.6668 15.1668H7.00016L2.3335 19.8335ZM17.5002 12.8335V4.66683H4.66683V12.8335H17.5002Z" fill="#133C3E"></path></svg>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/SupportItemIcon.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const SupportItemIcon = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "8",
    height: "14",
    viewBox: "0 0 8 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M6.66235 1.21289L1.33105 6.99997L6.66235 12.787" stroke="#828282"></path></svg>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/ArrowRightIcon.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ArrowRightIcon = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SupportItem",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full flex flex-row justify-between items-center px-[12px] py-[8px] border border-[#133C3E] rounded-[12px]" }, _attrs))}><div class="flex flex-row grow justify-start items-center">`);
      _push(ssrRenderComponent(SupportItemIcon, null, null, _parent));
      _push(`<span class="mr-[17px] font-semibold text-[#141414] text-[13px] leading-[20px] text-right">${ssrInterpolate(__props.title)}</span></div>`);
      _push(ssrRenderComponent(ArrowRightIcon, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/support/SupportItem.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=SupportItem-CEYnF1Ll.js.map
