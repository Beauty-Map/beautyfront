import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "16",
    height: "15",
    viewBox: "0 0 16 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><rect width="15" height="15" transform="matrix(-1 0 0 1 15.5 0)" fill="white"></rect><path d="M6.3594 1.40625C8.81331 1.40625 10.8125 3.40547 10.8125 5.85938C10.8125 6.91406 10.4328 7.87828 9.81643 8.64281L13.9625 12.7875L13.2875 13.4625L9.14237 9.31641C8.37877 9.93281 7.41409 10.3125 6.3594 10.3125C3.90549 10.3125 1.90627 8.31328 1.90627 5.85938C1.90627 3.40547 3.90549 1.40625 6.3594 1.40625ZM6.3594 2.34375C4.41221 2.34375 2.84377 3.91219 2.84377 5.85938C2.84377 7.80656 4.41221 9.375 6.3594 9.375C8.30659 9.375 9.87502 7.80656 9.87502 5.85938C9.87502 3.91219 8.30659 2.34375 6.3594 2.34375Z" fill="#020202"></path></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/SearchIcon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SearchIcon = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  SearchIcon as S
};
//# sourceMappingURL=SearchIcon-BEnuNJvi.js.map
