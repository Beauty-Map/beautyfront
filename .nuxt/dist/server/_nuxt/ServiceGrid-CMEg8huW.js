import { _ as _sfc_main$1 } from "./ServiceItem-5YnqCWgv.js";
import { defineComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ServiceGrid",
  __ssrInlineRender: true,
  props: {
    circle: {
      type: Boolean,
      default: true
    },
    services: {
      type: Array,
      default: () => []
    },
    isLink: {
      type: Boolean,
      default: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ServiceItem = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-3 gap-x-2 gap-y-8 w-full" }, _attrs))}><!--[-->`);
      ssrRenderList(__props.services, (s, i) => {
        _push(ssrRenderComponent(_component_ServiceItem, {
          key: i,
          id: s.id,
          title: s.title,
          image: s.image,
          circle: __props.circle,
          "is-link": __props.isLink
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/service/ServiceGrid.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=ServiceGrid-CMEg8huW.js.map
