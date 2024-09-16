import { defineComponent, useSSRContext, mergeProps } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><g clip-path="url(#clip0_2035_1866)"><path d="M5.01659 13.125L3.90825 11.2583L1.80825 10.7917L2.01242 8.63333L0.583252 7L2.01242 5.36667L1.80825 3.20833L3.90825 2.74167L5.01659 0.875L6.99992 1.72083L8.98325 0.875L10.0916 2.74167L12.1916 3.20833L11.9874 5.36667L13.4166 7L11.9874 8.63333L12.1916 10.7917L10.0916 11.2583L8.98325 13.125L6.99992 12.2792L5.01659 13.125ZM5.51242 11.6375L6.99992 10.9958L8.51659 11.6375L9.33325 10.2375L10.9374 9.85833L10.7916 8.225L11.8708 7L10.7916 5.74583L10.9374 4.1125L9.33325 3.7625L8.48742 2.3625L6.99992 3.00417L5.48325 2.3625L4.66659 3.7625L3.06242 4.1125L3.20825 5.74583L2.12909 7L3.20825 8.225L3.06242 9.8875L4.66659 10.2375L5.51242 11.6375ZM6.38742 9.07083L9.68325 5.775L8.86659 4.92917L6.38742 7.40833L5.13325 6.18333L4.31659 7L6.38742 9.07083Z" fill="#B2550F"></path></g><defs><clipPath id="clip0_2035_1866"><rect width="14" height="14" fill="white"></rect></clipPath></defs></svg>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/BronzeTick.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const BronzeTick = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Tick",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(BronzeTick, _attrs, null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/tick/Tick.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=Tick-Cq4twfuY.mjs.map
