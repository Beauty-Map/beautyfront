import { defineComponent, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main$3 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "12",
    height: "13",
    viewBox: "0 0 12 13",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M6 10.1442L9.708 12.5L8.724 8.06L12 5.07263L7.686 4.68737L6 0.5L4.314 4.68737L0 5.07263L3.276 8.06L2.292 12.5L6 10.1442Z" fill="#FFD700"></path></svg>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/FullStarIcon.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const FullStarIcon = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "12",
    height: "13",
    xmlns: "http://www.w3.org/2000/svg",
    class: "rotate-y-180",
    viewBox: "0 0 16 16"
  }, _attrs))}><path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z" fill="#FFD700"></path></svg>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/HalfStarIcon.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const HalfStarIcon = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "12",
    height: "13",
    viewBox: "0 0 12 13",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M6 10.1442L9.708 12.5L8.724 8.06L12 5.07263L7.686 4.68737L6 0.5L4.314 4.68737L0 5.07263L3.276 8.06L2.292 12.5L6 10.1442Z" fill="#C0C0C0"></path></svg>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/EmptyStarIcon.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const EmptyStarIcon = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Rating",
  __ssrInlineRender: true,
  props: {
    modelValue: {
      type: Number,
      default: false
    },
    starCount: {
      type: Number,
      default: 5
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const fullStarCount = ref(0);
    const halfStarCount = ref(0);
    const emptyStarCount = ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-row items-center justify-start" }, _attrs))}><!--[-->`);
      ssrRenderList(unref(fullStarCount), (i) => {
        _push(ssrRenderComponent(FullStarIcon, {
          key: i,
          class: "ml-1"
        }, null, _parent));
      });
      _push(`<!--]--><!--[-->`);
      ssrRenderList(unref(halfStarCount), (i) => {
        _push(ssrRenderComponent(HalfStarIcon, {
          key: i,
          class: "ml-1"
        }, null, _parent));
      });
      _push(`<!--]-->`);
      if (unref(emptyStarCount) > 0) {
        _push(`<!--[-->`);
        ssrRenderList(unref(emptyStarCount), (i) => {
          _push(ssrRenderComponent(EmptyStarIcon, {
            key: i,
            class: "ml-1"
          }, null, _parent));
        });
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/rating/Rating.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=Rating-DwKpxWvb.mjs.map
