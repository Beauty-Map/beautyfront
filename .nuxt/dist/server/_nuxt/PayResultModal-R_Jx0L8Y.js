import { _ as _sfc_main$1 } from "./Modal-D2yhK_Nx.js";
import { defineComponent, ref, mergeProps, withCtx, unref, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { _ as _imports_0 } from "./artist_agree_result-Ww6fg32z.js";
import "./CloseIcon-BBY6iLOC.js";
import "../server.mjs";
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
            _push2(`<div class="flex flex-col items-center justify-start px-0"${_scopeId}><h3 class="flex flex-col justify-start items-center text-[#141414] text-center font-semibold text-[18px] leading-[28px]"${_scopeId}><span${_scopeId}>خرید شما</span><span${_scopeId}>با کد رهگیری ${ssrInterpolate(unref(order).order_id)} انجام گردید.</span><span class="text-[16px] leading-[24px]"${_scopeId}>از شما بابت خرید ممنونیم</span><span class="text-[16px] leading-[24px]"${_scopeId}>سکه ها به اکانت کاربری شما اضافه شد</span></h3><div class="w-full flex flex-col justify-start items-start py-[13px] px-[20px]"${_scopeId}><img alt="" class="mx-[70%]"${ssrRenderAttr("src", _imports_0)}${_scopeId}></div><button class="min-w-[300px] mt-4 mx-[30px] mb-[10px] bg-[#FF3CA0] rounded-full h-[48px] text-white cursor-pointer flex flex-row justify-center items-center"${_scopeId}><span${_scopeId}>متوجه شدم</span></button></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col items-center justify-start px-0" }, [
                createVNode("h3", { class: "flex flex-col justify-start items-center text-[#141414] text-center font-semibold text-[18px] leading-[28px]" }, [
                  createVNode("span", null, "خرید شما"),
                  createVNode("span", null, "با کد رهگیری " + toDisplayString(unref(order).order_id) + " انجام گردید.", 1),
                  createVNode("span", { class: "text-[16px] leading-[24px]" }, "از شما بابت خرید ممنونیم"),
                  createVNode("span", { class: "text-[16px] leading-[24px]" }, "سکه ها به اکانت کاربری شما اضافه شد")
                ]),
                createVNode("div", { class: "w-full flex flex-col justify-start items-start py-[13px] px-[20px]" }, [
                  createVNode("img", {
                    alt: "",
                    class: "mx-[70%]",
                    src: _imports_0
                  })
                ]),
                createVNode("button", {
                  onClick: closeModal,
                  class: "min-w-[300px] mt-4 mx-[30px] mb-[10px] bg-[#FF3CA0] rounded-full h-[48px] text-white cursor-pointer flex flex-row justify-center items-center"
                }, [
                  createVNode("span", null, "متوجه شدم")
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
export {
  _sfc_main as default
};
//# sourceMappingURL=PayResultModal-R_Jx0L8Y.js.map
