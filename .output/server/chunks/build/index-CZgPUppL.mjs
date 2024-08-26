import { defineComponent, ref, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { _ as _sfc_main$1, H as Header } from './Header-04AEbBYi.mjs';
import { L as LoginImage } from './LoginImage-CN8iJMHf.mjs';
import { B as BackIcon } from './BackIcon-TUxxOOBv.mjs';
import { B as BeautyIcon } from './BeautyIcon-C6RRmPU7.mjs';
import { u as useDrawerStore } from './Drawer-O-pqrFqT.mjs';
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
import './EmailInput-BVjzeY3f.mjs';
import 'lodash-es';
import './ErrorRedIcon-CwkRbDIY.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './MainActionButton-CrIh6sno.mjs';
import './CheckBox-Dy8cOoli.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    ref({
      phone_number: "",
      password: "",
      accept_policy: false
    });
    const store = useDrawerStore();
    const goBack = () => {
      store.closeAllDrawers();
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="hidden md:flex flex-col relative justify-center items-center w-screen h-[calc(100vh-87px)] py-[35px] px-[40px] overflow-y-auto bg-white"><div class="hidden w-full md:flex flex-row max-w-[1200px] mx-auto min-h-[400px] bg-white rounded-[20px] shadow-[0px_2px_8px_0px_#00000040]"><div class="overflow-y-auto w-full md:w-1/2 flex flex-col justify-center items-center md:rounded-tl-[20px] md:rounded-bl-[20px] rounded-[20px] h-full pb-[16px] md:px-[65px] px-[24px]"><div class="mt-[40px] text-[#344055] text-[32px] text-right font-bold"> \u0648\u0631\u0648\u062F </div><div class="mt-[25px] text-[#B6B8C3] font-normal text-[16px] text-right"> \u0628\u0631\u0627\u06CC \u062F\u0633\u062A\u0631\u0633\u06CC \u0645\u0633\u062A\u0642\u06CC\u0645 \u0628\u0647 \u0647\u0646\u0631\u0645\u0646\u062F\u0627\u0646 \u0648 \u062A\u0645\u0627\u0633 \u0648\u0627\u0631\u062F \u0634\u0648\u06CC\u062F </div><div class="border border-[#2C3E5033] w-full my-[20px] border-dashed"></div>`);
      _push(ssrRenderComponent(_sfc_main$1, { class: "mt-[17px]" }, null, _parent));
      _push(`</div><div class="overflow-y-auto hidden md:flex flex-col justify-center items-center py-[40px] px-[65px] w-1/2 bg-[#2dcfc1] rounded-tl-[20px] rounded-bl-[20px] h-full">`);
      _push(ssrRenderComponent(LoginImage, null, null, _parent));
      _push(`<div class="mt-[24px] text-center w-full font-medium text-[24px] text-white"> \u067E\u0634\u062A\u06CC\u0628\u0627\u0646\u06CC \u0641\u0648\u0631\u06CC </div><div class="mt-[24px] text-center w-full font-light text-[18px] text-white"> \u0634\u0645\u0627 \u0645\u06CC\u062A\u0648\u0627\u0646\u06CC\u062F \u0628\u0647 \u0635\u0648\u0631\u062A 24 \u0633\u0627\u0639\u062A\u0647 \u0648 7 \u0631\u0648\u0632 \u0647\u0641\u062A\u0647 \u0631\u0627 \u0628\u0627 \u0645\u0627 \u062A\u0645\u0627\u0633 \u0628\u06AF\u06CC\u0631\u06CC\u062F </div></div></div></div><div class="flex flex-col md:hidden px-[17px] overflow-y-scroll w-full duration-700 ease-in-out bg-white"><div class="flex flex-row items-center justify-end pl-[3px]">`);
      _push(ssrRenderComponent(BackIcon, { onClick: goBack }, null, _parent));
      _push(`</div><div class="flex flex-col justify-start items-center">`);
      _push(ssrRenderComponent(BeautyIcon, { class: "mt-[8px]" }, null, _parent));
      _push(ssrRenderComponent(Header, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, { class: "mt-[17px]" }, null, _parent));
      _push(`</div></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CZgPUppL.mjs.map
