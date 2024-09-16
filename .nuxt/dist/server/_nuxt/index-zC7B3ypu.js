import { defineComponent, ref, mergeProps, unref, useSSRContext } from "vue";
import { u as useCustomFetch } from "./useCustomFetch-7ynZLwB1.js";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./PageHeader-DPypR0Du.js";
import { _ as _sfc_main$2 } from "./ServiceGrid-CMEg8huW.js";
import "../server.mjs";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "ufo";
import "cookie-es";
import "destr";
import "ohash";
import "klona";
import "defu";
import "@vue/devtools-api";
import "devalue";
import "dayjs";
import "dayjs/plugin/updateLocale.js";
import "dayjs/plugin/relativeTime.js";
import "dayjs/plugin/utc.js";
import "consola";
import "vue3-toastify";
import "./fetch-C_QM8LGj.js";
import "./BackIcon-nFKai1cn.js";
import "./ServiceItem-5YnqCWgv.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const serviceArray = ref([]);
    const getServiceList = async () => {
      const res = await useCustomFetch("/services", {
        method: "GET"
      });
      if (res.data.value) {
        serviceArray.value = res.data.value.data;
      }
    };
    getServiceList();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col px-[23px] py-[10px] h-full w-full" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        title: "سرویس ها",
        class: "mb-[60px]"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        services: unref(serviceArray),
        circle: false
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-zC7B3ypu.js.map
