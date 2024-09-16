import { defineComponent, ref, mergeProps, unref, useSSRContext } from 'vue';
import { b as useRouter, u as useAuthStore } from './server.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
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
    const user = ref(auth.user);
    const banners = ref([
      {
        id: 1,
        image: "/panel/banner.png"
      }
    ]);
    const goBack = () => {
      router.replace("/panel/artist");
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pt-[20px] w-full flex flex-col items-start justify-start" }, _attrs))}><div class="relative w-full flex flex-row items-center justify-center py-[23px]"><div class="font-semibold text-[16px] text-[#141414] leading-[24px]">\u062F\u0631\u06CC\u0627\u0641\u062A \u0628\u0646\u0631 \u062A\u0628\u0644\u06CC\u063A\u0627\u062A\u06CC</div>`);
      _push(ssrRenderComponent(BackIcon, {
        onClick: goBack,
        class: "absolute left-[10px]"
      }, null, _parent));
      _push(`</div><div class="w-full text-center flex flex-col justify-start items-center px-[10px] mt-[45px]"><!--[-->`);
      ssrRenderList(unref(banners), (b, i) => {
        _push(`<div class="w-full flex flex-col justify-start items-center"><img${ssrRenderAttr("src", b.image)} alt="" class="w-full max-h-[242px]"><p class="mt-[10px] font-semibold text-[16px] leading-[24px] text-center">www.beautymap.ir/${ssrInterpolate(unref(user).id)}</p><button class="cursor-pointer mt-[30px] w-full max-w-[260px] bg-[#1EFF81] text-[16px] leading-[24px] font-semibold text-black text-center rounded-[20px] py-[12px] px-[18px]">\u0627\u0634\u062A\u0631\u0627\u06A9 \u06AF\u0630\u0627\u0631\u06CC</button></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/panel/artist/banners/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CA9NJCXb.mjs.map
