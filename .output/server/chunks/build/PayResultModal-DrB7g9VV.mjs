import { _ as _sfc_main$1 } from './Modal-sAgLgThS.mjs';
import { defineComponent, ref, mergeProps, withCtx, unref, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './artist_agree_result-Ww6fg32z.mjs';
import './CloseIcon-DvH18xbo.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PayResultModal",
  __ssrInlineRender: true,
  props: {
    isOpen: {
      type: Boolean,
      required: true
    },
    status: {
      type: String,
      required: true
    },
    orderID: {
      type: Number,
      required: true
    }
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const emits = __emit;
    const order = ref({
      order_id: "342314"
    });
    const closeModal = () => {
      emits("close");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Modal = _sfc_main$1;
      _push(ssrRenderComponent(_component_Modal, mergeProps({
        "show-close": false,
        open: __props.isOpen
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col items-center justify-start px-0"${_scopeId}><h3 class="flex flex-col justify-start items-center text-[#141414] text-center font-semibold text-[18px] leading-[28px]"${_scopeId}><span${_scopeId}>\u062E\u0631\u06CC\u062F \u0634\u0645\u0627</span><span${_scopeId}>\u0628\u0627 \u06A9\u062F \u0631\u0647\u06AF\u06CC\u0631\u06CC ${ssrInterpolate(unref(order).order_id)} \u0627\u0646\u062C\u0627\u0645 \u06AF\u0631\u062F\u06CC\u062F.</span><span class="text-[16px] leading-[24px]"${_scopeId}>\u0627\u0632 \u0634\u0645\u0627 \u0628\u0627\u0628\u062A \u062E\u0631\u06CC\u062F \u0645\u0645\u0646\u0648\u0646\u06CC\u0645</span><span class="text-[16px] leading-[24px]"${_scopeId}>\u0633\u06A9\u0647 \u0647\u0627 \u0628\u0647 \u0627\u06A9\u0627\u0646\u062A \u06A9\u0627\u0631\u0628\u0631\u06CC \u0634\u0645\u0627 \u0627\u0636\u0627\u0641\u0647 \u0634\u062F</span></h3><div class="w-full flex flex-col justify-start items-start py-[13px] px-[20px]"${_scopeId}><img${ssrRenderAttr("src", _imports_0)}${_scopeId}></div><button class="min-w-[300px] mt-4 mx-[30px] mb-[10px] bg-[#FF3CA0] rounded-full h-[48px] text-white cursor-pointer flex flex-row justify-center items-center"${_scopeId}><span${_scopeId}>\u0645\u062A\u0648\u062C\u0647 \u0634\u062F\u0645</span></button></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col items-center justify-start px-0" }, [
                createVNode("h3", { class: "flex flex-col justify-start items-center text-[#141414] text-center font-semibold text-[18px] leading-[28px]" }, [
                  createVNode("span", null, "\u062E\u0631\u06CC\u062F \u0634\u0645\u0627"),
                  createVNode("span", null, "\u0628\u0627 \u06A9\u062F \u0631\u0647\u06AF\u06CC\u0631\u06CC " + toDisplayString(unref(order).order_id) + " \u0627\u0646\u062C\u0627\u0645 \u06AF\u0631\u062F\u06CC\u062F.", 1),
                  createVNode("span", { class: "text-[16px] leading-[24px]" }, "\u0627\u0632 \u0634\u0645\u0627 \u0628\u0627\u0628\u062A \u062E\u0631\u06CC\u062F \u0645\u0645\u0646\u0648\u0646\u06CC\u0645"),
                  createVNode("span", { class: "text-[16px] leading-[24px]" }, "\u0633\u06A9\u0647 \u0647\u0627 \u0628\u0647 \u0627\u06A9\u0627\u0646\u062A \u06A9\u0627\u0631\u0628\u0631\u06CC \u0634\u0645\u0627 \u0627\u0636\u0627\u0641\u0647 \u0634\u062F")
                ]),
                createVNode("div", { class: "w-full flex flex-col justify-start items-start py-[13px] px-[20px]" }, [
                  createVNode("img", { src: _imports_0 })
                ]),
                createVNode("button", {
                  onClick: closeModal,
                  class: "min-w-[300px] mt-4 mx-[30px] mb-[10px] bg-[#FF3CA0] rounded-full h-[48px] text-white cursor-pointer flex flex-row justify-center items-center"
                }, [
                  createVNode("span", null, "\u0645\u062A\u0648\u062C\u0647 \u0634\u062F\u0645")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pay/PayResultModal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=PayResultModal-DrB7g9VV.mjs.map
