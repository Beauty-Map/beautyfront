import { defineComponent, mergeProps, defineAsyncComponent, useSSRContext } from "vue";
import { b as useRouter } from "../server.mjs";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { B as BackIcon } from "./BackIcon-nFKai1cn.js";
import { H as Header } from "./Header-flvPM5ox.js";
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
const __nuxt_component_0_lazy = defineAsyncComponent(() => import("./SupportItem-CEYnF1Ll.js").then((c) => c.default || c));
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
        title: "تیکت به پشتیبانی",
        onClick: openTicketPage
      }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/support/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-Ch9UZDEA.js.map
