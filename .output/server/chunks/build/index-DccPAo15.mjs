import { defineComponent, ref, mergeProps, unref, useSSRContext } from 'vue';
import { a as useRouter } from './server.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { B as BackIcon } from './BackIcon-TUxxOOBv.mjs';
import { H as Header } from './Header-DfedGNZ4.mjs';
import { _ as _sfc_main$1 } from './TicketItem-FDYa4NiD.mjs';
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
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './dayjs-DjHdTGjd.mjs';
import 'dayjs/plugin/localizedFormat.js';
import 'jalaliday';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const tickets = ref([]);
    ref(1);
    const goBack = () => {
      router.replace("/support");
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-[calc(100vh+110px)] flex flex-col justify-start items-start mt-[17px]" }, _attrs))}><div class="w-full flex flex-row justify-start items-center">`);
      _push(ssrRenderComponent(Header, null, null, _parent));
      _push(ssrRenderComponent(BackIcon, { onClick: goBack }, null, _parent));
      _push(`</div><div class="w-full flex-col justify-start items-start mt-[35px]"><!--[-->`);
      ssrRenderList(unref(tickets), (t, i) => {
        _push(ssrRenderComponent(_sfc_main$1, {
          key: i,
          ticket: t
        }, null, _parent));
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/panel/artist/support/tickets/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DccPAo15.mjs.map