import { useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "33",
    height: "33",
    viewBox: "0 0 33 33",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><g filter="url(#filter0_i_1277_479)"><path d="M16.4998 32.75C7.54601 32.75 0.249756 25.4538 0.249756 16.5C0.249756 7.53 7.54601 0.25 16.4998 0.25L16.9544 0.256245C25.7144 0.497265 32.7498 7.68203 32.7498 16.5C32.7498 25.4538 25.4698 32.75 16.4998 32.75ZM18.8398 23.3575C19.1648 23.3575 19.4735 23.2437 19.7173 23C20.1885 22.5125 20.1885 21.7487 19.701 21.2775L14.9073 16.5L19.701 11.7225C20.1885 11.2513 20.1885 10.4713 19.7173 10C19.2298 9.5125 18.466 9.5125 17.9948 10L12.3235 15.6388C12.096 15.8663 11.966 16.175 11.966 16.5C11.966 16.825 12.096 17.1337 12.3235 17.3612L17.9948 23C18.2223 23.2437 18.531 23.3575 18.8398 23.3575Z" fill="#FF3CA0"></path></g><defs><filter id="filter0_i_1277_479" x="0.249756" y="0.25" width="34.5" height="35.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dx="2" dy="3"></feOffset><feGaussianBlur stdDeviation="3.25"></feGaussianBlur><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix><feBlend mode="normal" in2="shape" result="effect1_innerShadow_1277_479"></feBlend></filter></defs></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/PortfolioPageBackIcon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PortfolioPageBackIcon = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { PortfolioPageBackIcon as P };
//# sourceMappingURL=PortfolioPageBackIcon-DSc9uAMH.mjs.map