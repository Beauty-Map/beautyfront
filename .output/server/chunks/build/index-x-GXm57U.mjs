import { b as useRouter, u as useAuthStore, a as __nuxt_component_0$1 } from './server.mjs';
import { defineComponent, ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { B as BackIcon } from './BackIcon-nFKai1cn.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const auth = useAuthStore();
    ref(auth.user);
    const goBack = () => {
      router.replace("/panel/artist");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_client_only = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pt-[20px] w-full flex flex-col items-start justify-start" }, _attrs))}><div class="relative w-full flex flex-row items-center justify-center py-[23px]"><div class="font-semibold text-[16px] text-[#141414] leading-[24px]">\u0622\u0645\u0627\u0631 \u0628\u0627\u0632\u062F\u06CC\u062F</div>`);
      _push(ssrRenderComponent(BackIcon, {
        onClick: goBack,
        class: "absolute left-[10px]"
      }, null, _parent));
      _push(`</div><div class="w-full gap-[20px] text-center flex flex-col justify-start items-center px-[10px] mt-[45px]"><div class="bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-[25px] px-[5px] py-[10px]">`);
      _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
      _push(`</div><div class="bg-gradient-to-r from-fuchsia-500 to-pink-500 rounded-[25px] px-[5px] py-[10px]">`);
      _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
      _push(`</div><div class="bg-gradient-to-r from-red-500 to-orange-500 rounded-[25px] px-[5px] py-[10px]">`);
      _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/panel/artist/views/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-x-GXm57U.mjs.map
