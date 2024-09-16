import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { b as useRouter } from './server.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { B as BackIcon } from './BackIcon-nFKai1cn.mjs';
import { H as Header } from './Header-flvPM5ox.mjs';
import { _ as _sfc_main$1 } from './CreateTicketForm-CqdHy5Ii.mjs';
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
import './ErrorRedIcon-Bdl6jb2D.mjs';
import './useCustomFetch-7ynZLwB1.mjs';
import './fetch-C_QM8LGj.mjs';
import './CloseIcon-BBY6iLOC.mjs';
import 'lodash-es';
import './AddTicketIcon-CWd69ElK.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ticket",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const goBack = () => {
      router.back();
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-full flex flex-col justify-start items-start mt-[17px] mb-[110px]" }, _attrs))}><div class="w-full flex flex-row justify-start items-center">`);
      _push(ssrRenderComponent(Header, null, null, _parent));
      _push(ssrRenderComponent(BackIcon, { onClick: goBack }, null, _parent));
      _push(`</div><div class="w-full flex-col justify-start items-start mt-[35px]">`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/panel/artist/support/ticket.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=ticket-BHgNCrt3.mjs.map
