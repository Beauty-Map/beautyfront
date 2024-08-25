import { a as useRouter } from './server.mjs';
import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { A as AddTicketIcon } from './AddTicketIcon-CtEsOuZw.mjs';
import { T as TicketListIcon } from './ticket-B2hUSSH6.mjs';
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
import './MainHeaderDesktop-BFAeY3s1.mjs';
import './nuxt-link-B3sIHW1Y.mjs';
import './useSanctumAuth-Clu_AxNv.mjs';
import './Drawer-DbL6gM-F.mjs';
import './PageLoading-mm1u5C4s.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import './SideBar-Bm_VWt8J.mjs';
import './SideBarLink-CzQMVPTT.mjs';
import './NotificationIcon-CjXTJqLF.mjs';
import './SecurityIcon-DjHeYVES.mjs';
import './ArtistPanelIcon-CUt1lOFP.mjs';
import './ContactIcon-CElbyF3A.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TicketBottomBox",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full bg-white fixed bottom-0 py-[20px] px-[38px] left-0 right-0 border-t border-t-gray-500 flex flex-row justify-between items-center" }, _attrs))}><div class="cursor-pointer flex flex-row items-center justify-start px-[10px] py-[10px] bg-white text-black border border-[#A9A7A7] text-[15px] leading-[22px] text-center font-medium rounded-[12px] h-[44px] w-[130px]">`);
      _push(ssrRenderComponent(TicketListIcon, null, null, _parent));
      _push(`<span class="mr-[4px] whitespace-nowrap">\u062A\u06CC\u06A9\u062A \u0647\u0627\u06CC \u0645\u0646</span></div><div class="cursor-pointer flex flex-row items-center justify-start px-[10px] py-[10px] bg-[#FF3CA0] text-white text-[15px] leading-[22px] text-center font-medium rounded-[12px] h-[44px] w-[130px]">`);
      _push(ssrRenderComponent(AddTicketIcon, null, null, _parent));
      _push(`<span class="mr-[4px] whitespace-nowrap">\u062B\u0628\u062A \u062A\u06CC\u06A9\u062A</span></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/support/TicketBottomBox.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=TicketBottomBox-CQ-_Tzr_.mjs.map
