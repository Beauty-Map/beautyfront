import { b as useRouter } from "../server.mjs";
import { defineComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttrs, ssrInterpolate } from "vue/server-renderer";
import { B as BackIcon } from "./BackIcon-nFKai1cn.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Back",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const goBack = () => {
      router.back();
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(BackIcon, mergeProps({ onClick: goBack }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/button/Back.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PageHeader",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ButtonBack = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full flex flex-row relative mb-[25px]" }, _attrs))}>`);
      if (__props.title) {
        _push(`<div class="mx-auto mt-[10px] text-center font-medium text-[16px] text-[#141414] leading-[24px]">${ssrInterpolate(__props.title)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_ButtonBack, { class: "absolute top-0 left-0" }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/header/PageHeader.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=PageHeader-DPypR0Du.js.map
