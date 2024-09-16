import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    class: "cursor-pointer block md:hidden",
    width: "39",
    height: "39",
    viewBox: "0 0 39 39",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><rect width="39" height="39" transform="matrix(-1 0 0 -1 39 39)" fill="white"></rect><g filter="url(#filter0_i_174_4901)"><path d="M19.4998 35.75C10.546 35.75 3.24976 28.4538 3.24976 19.5C3.24976 10.53 10.546 3.25 19.4998 3.25L19.9544 3.25624C28.7144 3.49726 35.7498 10.682 35.7498 19.5C35.7498 28.4538 28.4698 35.75 19.4998 35.75ZM21.8398 26.3575C22.1648 26.3575 22.4735 26.2437 22.7173 26C23.1885 25.5125 23.1885 24.7487 22.701 24.2775L17.9073 19.5L22.701 14.7225C23.1885 14.2513 23.1885 13.4713 22.7173 13C22.2298 12.5125 21.466 12.5125 20.9948 13L15.3235 18.6388C15.096 18.8663 14.966 19.175 14.966 19.5C14.966 19.825 15.096 20.1337 15.3235 20.3612L20.9948 26C21.2223 26.2437 21.531 26.3575 21.8398 26.3575Z" fill="#FF3CA0"></path></g><defs><filter id="filter0_i_174_4901" x="3.24976" y="3.25" width="34.5" height="35.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dx="2" dy="3"></feOffset><feGaussianBlur stdDeviation="3.25"></feGaussianBlur><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix><feBlend mode="normal" in2="shape" result="effect1_innerShadow_174_4901"></feBlend></filter></defs></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/BackIcon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const BackIcon = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  BackIcon as B
};
//# sourceMappingURL=BackIcon-nFKai1cn.js.map
