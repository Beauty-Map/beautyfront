import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "14",
    height: "13",
    viewBox: "0 0 14 13",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M7 9.625C7.17708 9.625 7.32552 9.5651 7.44531 9.44531C7.5651 9.32552 7.625 9.17708 7.625 9C7.625 8.82292 7.5651 8.67448 7.44531 8.55469C7.32552 8.4349 7.17708 8.375 7 8.375C6.82292 8.375 6.67448 8.4349 6.55469 8.55469C6.4349 8.67448 6.375 8.82292 6.375 9C6.375 9.17708 6.4349 9.32552 6.55469 9.44531C6.67448 9.5651 6.82292 9.625 7 9.625ZM6.375 7.125H7.625V3.375H6.375V7.125ZM7 12.75C6.13542 12.75 5.32292 12.5859 4.5625 12.2578C3.80208 11.9297 3.14062 11.4844 2.57812 10.9219C2.01562 10.3594 1.57031 9.69792 1.24219 8.9375C0.914062 8.17708 0.75 7.36458 0.75 6.5C0.75 5.63542 0.914062 4.82292 1.24219 4.0625C1.57031 3.30208 2.01562 2.64062 2.57812 2.07812C3.14062 1.51562 3.80208 1.07031 4.5625 0.742188C5.32292 0.414062 6.13542 0.25 7 0.25C7.86458 0.25 8.67708 0.414062 9.4375 0.742188C10.1979 1.07031 10.8594 1.51562 11.4219 2.07812C11.9844 2.64062 12.4297 3.30208 12.7578 4.0625C13.0859 4.82292 13.25 5.63542 13.25 6.5C13.25 7.36458 13.0859 8.17708 12.7578 8.9375C12.4297 9.69792 11.9844 10.3594 11.4219 10.9219C10.8594 11.4844 10.1979 11.9297 9.4375 12.2578C8.67708 12.5859 7.86458 12.75 7 12.75ZM7 11.5C8.39583 11.5 9.57812 11.0156 10.5469 10.0469C11.5156 9.07812 12 7.89583 12 6.5C12 5.10417 11.5156 3.92188 10.5469 2.95312C9.57812 1.98438 8.39583 1.5 7 1.5C5.60417 1.5 4.42188 1.98438 3.45312 2.95312C2.48438 3.92188 2 5.10417 2 6.5C2 7.89583 2.48438 9.07812 3.45312 10.0469C4.42188 11.0156 5.60417 11.5 7 11.5Z" fill="#F44336"></path></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/ErrorRedIcon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ErrorRedIcon = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { ErrorRedIcon as E };
//# sourceMappingURL=ErrorRedIcon-CwkRbDIY.mjs.map