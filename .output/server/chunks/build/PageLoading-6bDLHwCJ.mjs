import { b as buildAssetsURL } from '../routes/renderer.mjs';
import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _imports_0 = "" + buildAssetsURL("logo.CWtAjNaY.png");
const _sfc_main$1 = {
  name: "SyncLoader",
  props: {
    loading: {
      type: Boolean,
      default: true
    },
    color: {
      type: String,
      default: "#5dc596"
    },
    size: {
      type: String,
      default: "15px"
    },
    margin: {
      type: String,
      default: "2px"
    },
    radius: {
      type: String,
      default: "100%"
    }
  },
  data() {
    return {
      spinnerStyle: {
        backgroundColor: this.color,
        height: this.size,
        width: this.size,
        margin: this.margin,
        borderRadius: this.radius,
        display: "inline-block",
        animationName: "v-syncStretchDelay",
        animationDuration: "0.6s",
        animationIterationCount: "infinite",
        animationTimingFunction: "ease-in-out",
        animationFillMode: "both"
      },
      spinnerDelay1: {
        animationDelay: "0.07s"
      },
      spinnerDelay2: {
        animationDelay: "0.14s"
      },
      spinnerDelay3: {
        animationDelay: "0.21s"
      }
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "v-spinner",
    style: $props.loading ? null : { display: "none" }
  }, _attrs))}><div class="v-sync v-sync1" style="${ssrRenderStyle([$data.spinnerStyle, $data.spinnerDelay1])}"></div><div class="v-sync v-sync2" style="${ssrRenderStyle([$data.spinnerStyle, $data.spinnerDelay2])}"></div><div class="v-sync v-sync3" style="${ssrRenderStyle([$data.spinnerStyle, $data.spinnerDelay3])}"></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vue-spinner/src/SyncLoader.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const SyncLoader = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PageLoading",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "splash_page fixed top-0 bottom-0 left-0 right-0 z-[100000000] flex flex-col justify-center items-center" }, _attrs))}><img${ssrRenderAttr("src", _imports_0)} alt="Beauty Map">`);
      _push(ssrRenderComponent(SyncLoader, {
        class: "mt-8",
        loading: true,
        color: "#fff",
        size: "20px",
        margin: "10px"
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/loading/PageLoading.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=PageLoading-6bDLHwCJ.mjs.map
