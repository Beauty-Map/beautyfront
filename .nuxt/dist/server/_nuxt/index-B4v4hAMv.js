import { b as useRouter } from "../server.mjs";
import { defineComponent, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { B as BackIcon } from "./BackIcon-nFKai1cn.js";
import { H as Header, _ as _sfc_main$1 } from "./SecurityLinkBox-DBIJiCrA.js";
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
import "./ProfileLink-CyK1DvW1.js";
import "./LeftArrow-LWKoxjM1.js";
import "./Drawer-n5iGEtr0.js";
import "./useSanctumAuth-B2JusLUJ.js";
import "./DeleteAccountModal-HvrqoNMM.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const goBack = () => {
      router.back();
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="md:flex hidden flex-col justify-start items-start h-full w-full"><div class="w-full flex flex-row justify-start items-center mt-[40px]">`);
      _push(ssrRenderComponent(Header, { class: "text-center" }, null, _parent));
      _push(`</div></div><div class="flex md:hidden flex-col justify-start items-start h-full w-full"><div class="flex flex-row justify-start items-center mt-[40px]">`);
      _push(ssrRenderComponent(Header, null, null, _parent));
      _push(ssrRenderComponent(BackIcon, { onClick: goBack }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_sfc_main$1, { class: "mt-8" }, null, _parent));
      _push(`</div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/security/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-B4v4hAMv.js.map
