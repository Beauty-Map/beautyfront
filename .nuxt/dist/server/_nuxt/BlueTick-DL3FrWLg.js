import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M5.73341 15L4.46675 12.8667L2.06675 12.3333L2.30008 9.86667L0.666748 8L2.30008 6.13333L2.06675 3.66667L4.46675 3.13333L5.73341 1L8.00008 1.96667L10.2667 1L11.5334 3.13333L13.9334 3.66667L13.7001 6.13333L15.3334 8L13.7001 9.86667L13.9334 12.3333L11.5334 12.8667L10.2667 15L8.00008 14.0333L5.73341 15ZM6.30008 13.3L8.00008 12.5667L9.73341 13.3L10.6667 11.7L12.5001 11.2667L12.3334 9.4L13.5667 8L12.3334 6.56667L12.5001 4.7L10.6667 4.3L9.70008 2.7L8.00008 3.43333L6.26675 2.7L5.33341 4.3L3.50008 4.7L3.66675 6.56667L2.43341 8L3.66675 9.4L3.50008 11.3L5.33341 11.7L6.30008 13.3ZM7.30008 10.3667L11.0667 6.6L10.1334 5.63333L7.30008 8.46667L5.86675 7.06667L4.93341 8L7.30008 10.3667Z" fill="#2920D9"></path></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/BlueTick.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const BlueTick = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  BlueTick as B
};
//# sourceMappingURL=BlueTick-DL3FrWLg.js.map
