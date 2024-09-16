import { defineAsyncComponent, defineComponent, mergeProps, useSSRContext } from 'vue';
import { b as useRouter } from './server.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { B as BackIcon } from './BackIcon-nFKai1cn.mjs';
import { H as Header } from './Header-flvPM5ox.mjs';
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

const __nuxt_component_0_lazy = defineAsyncComponent(() => import('./SupportItem-CEYnF1Ll.mjs').then((c) => c.default || c));
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const goBack = () => {
      router.back();
    };
    const openTicketPage = () => {
      router.push("/support/ticket");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LazySupportItem = __nuxt_component_0_lazy;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col px-[17px] w-full h-screen md:h-auto" }, _attrs))}><div class="flex flex-col justify-start items-start mt-[17px]"><div class="w-full flex flex-row justify-start items-center">`);
      _push(ssrRenderComponent(Header, null, null, _parent));
      _push(ssrRenderComponent(BackIcon, { onClick: goBack }, null, _parent));
      _push(`</div><div class="w-full flex-col min-h-[400px] justify-start items-start mt-[35px] md:border md:border-gray-500 md:rounded-[50px] md:py-[25px] px-[20px]">`);
      _push(ssrRenderComponent(_component_LazySupportItem, {
        title: "\u062A\u06CC\u06A9\u062A \u0628\u0647 \u067E\u0634\u062A\u06CC\u0628\u0627\u0646\u06CC",
        onClick: openTicketPage
      }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/panel/artist/support/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-zVAwhYJn.mjs.map
