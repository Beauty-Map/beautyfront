import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { C as CloseIcon } from './CloseIcon-BBY6iLOC.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Modal",
  __ssrInlineRender: true,
  props: {
    open: {
      type: Boolean,
      default: false
    },
    showClose: {
      type: Boolean,
      default: true
    }
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const emits = __emit;
    const closeModal = () => {
      emits("close");
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["bg-[rgba(0,0,0,.4)] duration-500 transition-all fixed top-0 right-0 bottom-0 left-0 flex flex-col justify-center items-center z-[999999999]", [__props.open ? "flex" : "hidden"]]
      }, _attrs))}><div class="${ssrRenderClass([__props.showClose ? "px-[30px] py-[30px]" : "px-[20px] py-[20px]", "bg-white relative rounded-[12px] max-w-[calc(100vw-40px)] min-w-[150px] min-h-[150px] shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]"])}">`);
      if (__props.showClose) {
        _push(ssrRenderComponent(CloseIcon, {
          onClick: closeModal,
          class: "absolute top-[5px] right-[5px]"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="w-full h-full">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/modal/Modal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=Modal-D2yhK_Nx.mjs.map
