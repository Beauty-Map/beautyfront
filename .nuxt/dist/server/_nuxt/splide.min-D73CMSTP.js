import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "30",
    height: "32",
    viewBox: "0 0 30 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path fill-rule="evenodd" clip-rule="evenodd" d="M15.42 26.4476C17.1647 25.4953 23.75 21.4516 23.75 14.6663C23.75 9.51168 19.8325 5.33301 15 5.33301C10.1675 5.33301 6.25 9.51168 6.25 14.6663C6.25 21.4516 12.8353 25.4953 14.58 26.4476C14.8452 26.5923 15.1548 26.5923 15.42 26.4476ZM15 18.6663C17.0711 18.6663 18.75 16.8755 18.75 14.6663C18.75 12.4572 17.0711 10.6663 15 10.6663C12.9289 10.6663 11.25 12.4572 11.25 14.6663C11.25 16.8755 12.9289 18.6663 15 18.6663Z" fill="#ED2C25"></path></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/HeaderLocationIcon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const HeaderLocationIcon = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  HeaderLocationIcon as H
};
//# sourceMappingURL=splide.min-D73CMSTP.js.map
