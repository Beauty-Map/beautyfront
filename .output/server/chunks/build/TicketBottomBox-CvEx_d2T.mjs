import { b as useRouter } from './server.mjs';
import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { A as AddTicketIcon } from './AddTicketIcon-CWd69ElK.mjs';
import { T as TicketListIcon } from './ticket-DjLT6Bk8.mjs';
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
import './MainHeaderDesktop-CIIE8dBu.mjs';
import './nuxt-link-DB89SAcR.mjs';
import './useSanctumAuth-B2JusLUJ.mjs';
import './Drawer-n5iGEtr0.mjs';
import './PageLoading-6bDLHwCJ.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import './SideBar-DmhePaIb.mjs';
import './SideBarLink-CgD_n89y.mjs';
import './NotificationIcon-D2I45xr1.mjs';
import './SecurityIcon-WRdFaBVY.mjs';
import './ArtistPanelIcon-91lmbuTQ.mjs';
import './ContactIcon-QHxajr-T.mjs';

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
//# sourceMappingURL=TicketBottomBox-CvEx_d2T.mjs.map
