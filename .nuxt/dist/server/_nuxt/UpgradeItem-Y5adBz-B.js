import { defineComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate } from "vue/server-renderer";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UpgradeItem",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      required: true
    },
    coins: {
      type: Number,
      required: true,
      default: 0
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "cursor-pointer w-full flex flex-row justify-between items-center px-[8px] py-[11px] rounded-[12px] border border-[#A9A7A7]" }, _attrs))}><div class="font-medium text-[16px] leading-[19px] text-[#133C3E]"><span>${ssrInterpolate(`پنل ${__props.title}`)}</span></div><button class="rounded-[10px] h-[28px] flex justify-center items-center text-white font-normal text-[12px] leading-[14px] bg-[#085EC2] shadow-[0px_4px_4px_0px_#00000040] w-[80px] text-center"><span>${ssrInterpolate(__props.coins)}</span><span class="mr-[5px]">سکه</span></button></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/upgrade/UpgradeItem.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=UpgradeItem-Y5adBz-B.js.map
