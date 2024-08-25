import { a as useRouter } from './server.mjs';
import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';

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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-center justify-start" }, _attrs))}><img${ssrRenderAttr("src", __props.image)} alt="" class="${ssrRenderClass([[__props.circle ? "rounded-[50%]" : "rounded-[8px]"], "w-[57px] h-[57px] mb-2"])}"><div class="text-center leading-[18px] text-xs whitespace-nowrap">${ssrInterpolate(__props.title)}</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/service/ServiceItem.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=ServiceItem-BOQlzdWI.mjs.map
