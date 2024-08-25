import { _ as _sfc_main$2 } from './ServiceGrid-lISUfVln.mjs';
import { defineComponent, ref, withAsyncContext, mergeProps, unref, useSSRContext } from 'vue';
import { b as useRoute } from './server.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _sfc_main$1 } from './PageHeader-DJUOyi2k.mjs';
import { u as useCustomFetch } from './useCustomFetch-CwVU0VgL.mjs';
import './ServiceItem-BOQlzdWI.mjs';
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
import './BackIcon-TUxxOOBv.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './fetch-CSNts9RR.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const service = ref();
    const id = route.params.id;
    const getService = async () => {
      var _a;
      const res = await useCustomFetch(`/services/${id}`, {
        method: "GET"
      });
      if (res.data.value) {
        service.value = (_a = res.data.value) == null ? void 0 : _a.data;
      }
    };
    [__temp, __restore] = withAsyncContext(() => getService()), await __temp, __restore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ServiceGrid = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col px-[23px] py-[10px] h-full" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        title: unref(service).title,
        class: "mb-[60px]"
      }, null, _parent));
      _push(ssrRenderComponent(_component_ServiceGrid, {
        services: unref(service).children,
        circle: false,
        "is-link": false
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-DVgFGcV-.mjs.map
