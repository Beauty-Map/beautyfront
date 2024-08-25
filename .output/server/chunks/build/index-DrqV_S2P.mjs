import { defineComponent, ref, mergeProps, unref, useSSRContext } from 'vue';
import { u as useCustomFetch } from './useCustomFetch-CwVU0VgL.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _sfc_main$1 } from './PageHeader-DJUOyi2k.mjs';
import { _ as _sfc_main$2 } from './ServiceGrid-lISUfVln.mjs';
import './server.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'dayjs';
import 'dayjs/plugin/updateLocale.js';
import 'dayjs/plugin/relativeTime.js';
import 'dayjs/plugin/utc.js';
import 'consola/core';
import 'vue3-toastify';
import './fetch-CSNts9RR.mjs';
import './BackIcon-TUxxOOBv.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './ServiceItem-BOQlzdWI.mjs';

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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col px-[23px] py-[10px] h-full" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        title: "\u0633\u0631\u0648\u06CC\u0633 \u0647\u0627",
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

export { _sfc_main as default };
//# sourceMappingURL=index-DrqV_S2P.mjs.map
