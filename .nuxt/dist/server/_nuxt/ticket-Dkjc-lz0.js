import { defineComponent, mergeProps, useSSRContext } from "vue";
import { b as useRouter } from "../server.mjs";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { B as BackIcon } from "./BackIcon-nFKai1cn.js";
import { H as Header } from "./Header-flvPM5ox.js";
import { _ as _sfc_main$1 } from "./CreateTicketForm-CqdHy5Ii.js";
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
import "./ErrorRedIcon-Bdl6jb2D.js";
import "./useCustomFetch-7ynZLwB1.js";
import "./fetch-C_QM8LGj.js";
import "./CloseIcon-BBY6iLOC.js";
import "lodash-es";
import "./AddTicketIcon-CWd69ElK.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ticket",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const goBack = () => {
      router.back();
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-full w-full flex flex-col justify-start items-start mt-[17px] md:mb-0 mb-[110px] px-[33px]" }, _attrs))}><div class="w-full flex flex-row justify-start items-center">`);
      _push(ssrRenderComponent(Header, null, null, _parent));
      _push(ssrRenderComponent(BackIcon, { onClick: goBack }, null, _parent));
      _push(`</div><div class="w-full flex-col justify-start items-start mt-[35px] md:border md:border-gray-500 md:rounded-[50px] md:py-[25px] px-[20px]">`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/support/ticket.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=ticket-Dkjc-lz0.js.map
