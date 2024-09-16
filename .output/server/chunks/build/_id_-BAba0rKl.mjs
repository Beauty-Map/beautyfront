import { defineComponent, ref, unref, mergeProps, useSSRContext } from 'vue';
import { d as useRoute } from './server.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _sfc_main$1 } from './PageHeader-DPypR0Du.mjs';
import { _ as _sfc_main$2 } from './ServiceGrid-CMEg8huW.mjs';
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
import './BackIcon-nFKai1cn.mjs';
import './ServiceItem-5YnqCWgv.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const service = ref();
    route.params.id;
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(service)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col px-[23px] py-[10px] h-full w-full" }, _attrs))}>`);
        _push(ssrRenderComponent(_sfc_main$1, {
          title: unref(service).title,
          class: "mb-[60px]"
        }, null, _parent));
        if (unref(service).children.length > 0) {
          _push(ssrRenderComponent(_sfc_main$2, {
            services: unref(service).children,
            circle: false,
            "is-link": false
          }, null, _parent));
        } else {
          _push(`<div class="w-full text-center"> \u0647\u06CC\u0686 \u0622\u06CC\u062A\u0645\u06CC \u06CC\u0627\u0641\u062A \u0646\u0634\u062F! </div>`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
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
//# sourceMappingURL=_id_-BAba0rKl.mjs.map
