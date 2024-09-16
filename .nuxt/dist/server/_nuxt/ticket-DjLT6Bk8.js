import { mergeProps, useSSRContext, defineComponent, ref, unref, defineAsyncComponent } from "vue";
import { _ as _sfc_main$3, a as __nuxt_component_1 } from "./MainHeaderDesktop-CIIE8dBu.js";
import { _ as _export_sfc, b as useRouter, f as useNuxtApp } from "../server.mjs";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { _ as _sfc_main$2 } from "./PageLoading-6bDLHwCJ.js";
import { _ as _sfc_main$4 } from "./SideBar-DmhePaIb.js";
import { A as AddTicketIcon } from "./AddTicketIcon-CWd69ElK.js";
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M8 17C8.28333 17 8.52083 16.9042 8.7125 16.7125C8.90417 16.5208 9 16.2833 9 16C9 15.7167 8.90417 15.4792 8.7125 15.2875C8.52083 15.0958 8.28333 15 8 15C7.71667 15 7.47917 15.0958 7.2875 15.2875C7.09583 15.4792 7 15.7167 7 16C7 16.2833 7.09583 16.5208 7.2875 16.7125C7.47917 16.9042 7.71667 17 8 17ZM8 13C8.28333 13 8.52083 12.9042 8.7125 12.7125C8.90417 12.5208 9 12.2833 9 12C9 11.7167 8.90417 11.4792 8.7125 11.2875C8.52083 11.0958 8.28333 11 8 11C7.71667 11 7.47917 11.0958 7.2875 11.2875C7.09583 11.4792 7 11.7167 7 12C7 12.2833 7.09583 12.5208 7.2875 12.7125C7.47917 12.9042 7.71667 13 8 13ZM8 9C8.28333 9 8.52083 8.90417 8.7125 8.7125C8.90417 8.52083 9 8.28333 9 8C9 7.71667 8.90417 7.47917 8.7125 7.2875C8.52083 7.09583 8.28333 7 8 7C7.71667 7 7.47917 7.09583 7.2875 7.2875C7.09583 7.47917 7 7.71667 7 8C7 8.28333 7.09583 8.52083 7.2875 8.7125C7.47917 8.90417 7.71667 9 8 9ZM11 17H17V15H11V17ZM11 13H17V11H11V13ZM11 9H17V7H11V9ZM5 21C4.45 21 3.97917 20.8042 3.5875 20.4125C3.19583 20.0208 3 19.55 3 19V5C3 4.45 3.19583 3.97917 3.5875 3.5875C3.97917 3.19583 4.45 3 5 3H19C19.55 3 20.0208 3.19583 20.4125 3.5875C20.8042 3.97917 21 4.45 21 5V19C21 19.55 20.8042 20.0208 20.4125 20.4125C20.0208 20.8042 19.55 21 19 21H5ZM5 19H19V5H5V19Z" fill="black"></path></svg>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/TicketListIcon.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const TicketListIcon = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const __nuxt_component_0_lazy = defineAsyncComponent(() => import("./TicketBottomBox-CvEx_d2T.js").then((c) => c.default || c));
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ticket",
  __ssrInlineRender: true,
  setup(__props) {
    const nuxt = useNuxtApp();
    const loading = ref(true);
    useRouter();
    nuxt.hook("page:loading:start", () => {
      loading.value = true;
    });
    nuxt.hook("page:loading:end", () => {
      setTimeout(() => {
        loading.value = false;
      }, 500);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LazySupportTicketBottomBox = __nuxt_component_0_lazy;
      const _component_Footer = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col w-full h-full relative" }, _attrs))}>`);
      if (unref(loading)) {
        _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_sfc_main$3, { class: "md:flex hidden" }, null, _parent));
      _push(`<div class="w-full min-h-screen px-[34px] py-[20px] flex flex-row justify-start items-start">`);
      _push(ssrRenderComponent(_sfc_main$4, { class: "md:flex hidden" }, null, _parent));
      _push(`<div class="w-full h-full flex flex-col justify-start items-start">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`<div class="hidden mt-[60px] md:flex w-full bg-white pb-[20px] px-[38px] flex-row justify-center gap-[20px] items-center"><div class="cursor-pointer flex flex-row items-center justify-start px-[10px] py-[10px] bg-white text-black border border-[#A9A7A7] text-[15px] leading-[22px] text-center font-medium rounded-[12px] h-[44px] w-[130px]">`);
      _push(ssrRenderComponent(TicketListIcon, null, null, _parent));
      _push(`<span class="mr-[4px] whitespace-nowrap">تیکت های من</span></div><div class="cursor-pointer flex flex-row items-center justify-start px-[10px] py-[10px] bg-[#FF3CA0] text-white text-[15px] leading-[22px] text-center font-medium rounded-[12px] h-[44px] w-[130px]">`);
      _push(ssrRenderComponent(AddTicketIcon, null, null, _parent));
      _push(`<span class="mr-[4px] whitespace-nowrap">ثبت تیکت</span></div></div></div></div>`);
      _push(ssrRenderComponent(_component_LazySupportTicketBottomBox, { class: "md:hidden flex" }, null, _parent));
      _push(ssrRenderComponent(_component_Footer, { class: "hidden md:flex" }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/ticket.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ticket = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: _sfc_main
});
export {
  TicketListIcon as T,
  ticket as t
};
//# sourceMappingURL=ticket-DjLT6Bk8.js.map
