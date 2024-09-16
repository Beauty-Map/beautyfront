import { _ as __nuxt_component_0 } from './nuxt-link-DB89SAcR.mjs';
import { defineComponent, ref, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { b as useRouter } from './server.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { B as BackIcon } from './BackIcon-nFKai1cn.mjs';
import { H as Header } from './Header-flvPM5ox.mjs';
import { _ as _sfc_main$1 } from './TicketItem-D03jFzOc.mjs';
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
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-[calc(100vh+110px)] md:h-full w-full flex flex-col justify-start items-start mt-[17px]" }, _attrs))}><div class="w-full flex flex-row justify-start items-center">`);
      _push(ssrRenderComponent(Header, null, null, _parent));
      _push(ssrRenderComponent(BackIcon, { onClick: goBack }, null, _parent));
      _push(`</div><div class="w-full flex-col justify-start items-start mt-[35px] min-h-[400px] md:border md:border-gray-500 md:rounded-[50px] md:py-[25px] px-[20px]"><!--[-->`);
      ssrRenderList(unref(tickets), (t, i) => {
        _push(ssrRenderComponent(_sfc_main$1, {
          key: i,
          ticket: t
        }, null, _parent));
      });
      _push(`<!--]-->`);
      if (unref(tickets).length == 0) {
        _push(`<div class="text-center w-full"> \u0634\u0645\u0627 \u062A\u06CC\u06A9\u062A\u06CC \u062B\u0628\u062A \u0646\u06A9\u0631\u062F\u0647 \u0627\u06CC\u062F!<br> \u062A\u06CC\u06A9\u062A \u062C\u062F\u06CC\u062F `);
        _push(ssrRenderComponent(_component_nuxt_link, { to: "/support/ticket" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u062B\u0628\u062A`);
            } else {
              return [
                createTextVNode(" \u062B\u0628\u062A")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(` \u06A9\u0646\u06CC\u062F </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/support/tickets/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DNkYc2LA.mjs.map
