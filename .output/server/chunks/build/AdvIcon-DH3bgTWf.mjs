import { useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "11",
    height: "17",
    viewBox: "0 0 11 17",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M0.708374 16.1668V14.2502H10.2917V16.1668H0.708374ZM4.54171 12.3335V4.49912L2.05004 6.96683L0.708374 5.62516L5.50004 0.833496L10.2917 5.62516L8.95004 6.96683L6.45837 4.49912V12.3335H4.54171Z" fill="#133C3E"></path></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/AdvIcon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AdvIcon = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { AdvIcon as A };
//# sourceMappingURL=AdvIcon-DH3bgTWf.mjs.map
