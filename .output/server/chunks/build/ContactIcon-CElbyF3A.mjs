import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "17",
    height: "18",
    viewBox: "0 0 17 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M16.0083 17.0259C14.0407 17.0259 12.0968 16.5969 10.1764 15.7391C8.25602 14.8812 6.5088 13.6652 4.93472 12.0912C3.36065 10.5171 2.14468 8.76986 1.28681 6.84949C0.428935 4.92912 0 2.98514 0 1.01755C0 0.734212 0.0944444 0.498101 0.283333 0.309212C0.472222 0.120323 0.708333 0.0258789 0.991667 0.0258789H4.81667C5.03704 0.0258789 5.2338 0.100647 5.40694 0.250184C5.58009 0.399722 5.68241 0.576805 5.71389 0.781434L6.32778 4.08699C6.35926 4.33884 6.35139 4.55134 6.30417 4.72449C6.25694 4.89764 6.17037 5.04718 6.04444 5.1731L3.75417 7.48699C4.06898 8.0694 4.44282 8.63213 4.87569 9.17518C5.30857 9.71824 5.78472 10.2416 6.30417 10.7453C6.79213 11.2333 7.3037 11.6858 7.83889 12.103C8.37407 12.5201 8.94074 12.9018 9.53889 13.2481L11.7583 11.0287C11.9 10.887 12.085 10.7807 12.3132 10.7099C12.5414 10.6391 12.7657 10.6194 12.9861 10.6509L16.2444 11.312C16.4648 11.375 16.6458 11.4891 16.7875 11.6544C16.9292 11.8196 17 12.0046 17 12.2092V16.0342C17 16.3175 16.9056 16.5537 16.7167 16.7425C16.5278 16.9314 16.2917 17.0259 16.0083 17.0259ZM2.85694 5.69255L4.41528 4.13421L4.01389 1.91477H1.9125C1.9912 2.56014 2.10139 3.19764 2.24306 3.82727C2.38472 4.4569 2.58935 5.07866 2.85694 5.69255ZM11.3097 14.1453C11.9236 14.4129 12.5493 14.6254 13.1868 14.7828C13.8243 14.9402 14.4657 15.0425 15.1111 15.0898V13.012L12.8917 12.5634L11.3097 14.1453Z" fill="#133C3E"></path></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/ContactIcon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ContactIcon = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { ContactIcon as C };
//# sourceMappingURL=ContactIcon-CElbyF3A.mjs.map
