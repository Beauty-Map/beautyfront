import { defineComponent, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><rect width="16" height="16" fill="white"></rect><rect width="16" height="16" rx="2" fill="#2920D9"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M13.8162 4.20701C14.0701 4.47369 14.0597 4.89568 13.793 5.14954L6.08929 12.4829C5.95773 12.6081 5.78078 12.6742 5.59933 12.666C5.41788 12.6577 5.24766 12.5758 5.12803 12.4391L2.16506 9.05451C1.92254 8.77747 1.95052 8.35629 2.22755 8.11377C2.50459 7.87125 2.92577 7.89923 3.16829 8.17626L5.67342 11.0379L12.8737 4.1838C13.1404 3.92994 13.5624 3.94033 13.8162 4.20701Z" fill="white"></path></svg>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/CheckBoxCheckedIcon.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const CheckBoxCheckedIcon = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><rect width="16" height="16" fill="white"></rect><rect width="16" height="16" rx="2" fill="#A9A7A7"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M13.8162 4.20701C14.0701 4.47369 14.0597 4.89568 13.793 5.14954L6.08929 12.4829C5.95773 12.6081 5.78078 12.6742 5.59933 12.666C5.41788 12.6577 5.24766 12.5758 5.12803 12.4391L2.16506 9.05451C1.92254 8.77747 1.95052 8.35629 2.22755 8.11377C2.50459 7.87125 2.92577 7.89923 3.16829 8.17626L5.67342 11.0379L12.8737 4.1838C13.1404 3.92994 13.5624 3.94033 13.8162 4.20701Z" fill="white"></path></svg>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/CheckBoxIcon.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const CheckBoxIcon = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CheckBox",
  __ssrInlineRender: true,
  props: {
    modelValue: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const value = ref(props.modelValue);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))}><input type="checkbox" hidden${ssrIncludeBooleanAttr(Array.isArray(unref(value)) ? ssrLooseContain(unref(value), null) : unref(value)) ? " checked" : ""}>`);
      if (__props.modelValue) {
        _push(ssrRenderComponent(CheckBoxCheckedIcon, null, null, _parent));
      } else {
        _push(ssrRenderComponent(CheckBoxIcon, null, null, _parent));
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/input/CheckBox.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=CheckBox-Dy8cOoli.mjs.map
