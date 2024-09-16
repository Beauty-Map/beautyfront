import { b as useRouter } from "../server.mjs";
import { defineComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { A as AddTicketIcon } from "./AddTicketIcon-CWd69ElK.js";
import { T as TicketListIcon } from "./ticket-DjLT6Bk8.js";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "ufo";
import "cookie-es";
import "destr";
import "ohash";
import "klona";
import "defu";
import "@vue/devtools-api";
import "devalue";
import "dayjs";
import "dayjs/plugin/updateLocale.js";
import "dayjs/plugin/relativeTime.js";
import "dayjs/plugin/utc.js";
import "consola";
import "vue3-toastify";
import "./MainHeaderDesktop-CIIE8dBu.js";
import "./nuxt-link-DB89SAcR.js";
import "./useSanctumAuth-B2JusLUJ.js";
import "./Drawer-n5iGEtr0.js";
import "./PageLoading-6bDLHwCJ.js";
import "./SideBar-DmhePaIb.js";
import "./SideBarLink-CgD_n89y.js";
import "./NotificationIcon-D2I45xr1.js";
import "./SecurityIcon-WRdFaBVY.js";
import "./ArtistPanelIcon-91lmbuTQ.js";
import "./ContactIcon-QHxajr-T.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TicketBottomBox",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full bg-white fixed bottom-0 py-[20px] px-[38px] left-0 right-0 border-t border-t-gray-500 flex flex-row justify-between items-center" }, _attrs))}><div class="cursor-pointer flex flex-row items-center justify-start px-[10px] py-[10px] bg-white text-black border border-[#A9A7A7] text-[15px] leading-[22px] text-center font-medium rounded-[12px] h-[44px] w-[130px]">`);
      _push(ssrRenderComponent(TicketListIcon, null, null, _parent));
      _push(`<span class="mr-[4px] whitespace-nowrap">تیکت های من</span></div><div class="cursor-pointer flex flex-row items-center justify-start px-[10px] py-[10px] bg-[#FF3CA0] text-white text-[15px] leading-[22px] text-center font-medium rounded-[12px] h-[44px] w-[130px]">`);
      _push(ssrRenderComponent(AddTicketIcon, null, null, _parent));
      _push(`<span class="mr-[4px] whitespace-nowrap">ثبت تیکت</span></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/support/TicketBottomBox.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=TicketBottomBox-CvEx_d2T.js.map
