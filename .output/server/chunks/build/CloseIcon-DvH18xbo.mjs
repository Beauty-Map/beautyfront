import { useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "30",
    height: "30",
    viewBox: "0 0 30 30",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><g clip-path="url(#clip0_906_3584)"><rect width="30" height="30" rx="15" fill="#F44336"></rect><path d="M9.6 22.5L15 17.1L20.4 22.5L22.5 20.4L17.1 15L22.5 9.6L20.4 7.5L15 12.9L9.6 7.5L7.5 9.6L12.9 15L7.5 20.4L9.6 22.5ZM15 30C12.925 30 10.975 29.6063 9.15 28.8188C7.325 28.0313 5.7375 26.9625 4.3875 25.6125C3.0375 24.2625 1.96875 22.675 1.18125 20.85C0.39375 19.025 0 17.075 0 15C0 12.925 0.39375 10.975 1.18125 9.15C1.96875 7.325 3.0375 5.7375 4.3875 4.3875C5.7375 3.0375 7.325 1.96875 9.15 1.18125C10.975 0.39375 12.925 0 15 0C17.075 0 19.025 0.39375 20.85 1.18125C22.675 1.96875 24.2625 3.0375 25.6125 4.3875C26.9625 5.7375 28.0313 7.325 28.8188 9.15C29.6063 10.975 30 12.925 30 15C30 17.075 29.6063 19.025 28.8188 20.85C28.0313 22.675 26.9625 24.2625 25.6125 25.6125C24.2625 26.9625 22.675 28.0313 20.85 28.8188C19.025 29.6063 17.075 30 15 30ZM15 27C18.35 27 21.1875 25.8375 23.5125 23.5125C25.8375 21.1875 27 18.35 27 15C27 11.65 25.8375 8.8125 23.5125 6.4875C21.1875 4.1625 18.35 3 15 3C11.65 3 8.8125 4.1625 6.4875 6.4875C4.1625 8.8125 3 11.65 3 15C3 18.35 4.1625 21.1875 6.4875 23.5125C8.8125 25.8375 11.65 27 15 27Z" fill="white"></path></g><defs><clipPath id="clip0_906_3584"><rect width="30" height="30" rx="15" fill="white"></rect></clipPath></defs></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/CloseIcon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CloseIcon = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { CloseIcon as C };
//# sourceMappingURL=CloseIcon-DvH18xbo.mjs.map