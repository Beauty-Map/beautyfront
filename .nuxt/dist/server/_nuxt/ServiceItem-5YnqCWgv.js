import { b as useRouter } from "../server.mjs";
import { defineComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate } from "vue/server-renderer";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ServiceItem",
  __ssrInlineRender: true,
  props: {
    id: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      default: ""
    },
    image: {
      type: String,
      default: ""
    },
    circle: {
      type: Boolean,
      default: true
    },
    isLink: {
      type: Boolean,
      default: true
    },
    callParent: {
      type: Boolean,
      default: false
    }
  },
  emits: ["click"],
  setup(__props, { emit: __emit }) {
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col border-b-[#000000] border-b-[1px] items-center overflow-hidden justify-center bg-[#57FF094D] py-[10px] px-[20px] rounded-[20px]" }, _attrs))}><div class="w-full text-center leading-[18px] text-xs whitespace-nowrap overflow-hidden text-ellipsis">${ssrInterpolate(__props.title)}</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/service/ServiceItem.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=ServiceItem-5YnqCWgv.js.map
