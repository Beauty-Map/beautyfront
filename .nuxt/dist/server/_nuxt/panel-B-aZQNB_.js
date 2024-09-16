import { f as useNuxtApp } from "../server.mjs";
import { defineComponent, ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./PageLoading-6bDLHwCJ.js";
import { _ as _sfc_main$3 } from "./SideBar-DmhePaIb.js";
import { _ as _sfc_main$4 } from "./BottomNavigationBox-CEGA0rhn.js";
import { _ as _sfc_main$2, a as __nuxt_component_1 } from "./MainHeaderDesktop-CIIE8dBu.js";
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
import "./SideBarLink-CgD_n89y.js";
import "./NotificationIcon-D2I45xr1.js";
import "./Drawer-n5iGEtr0.js";
import "./SecurityIcon-WRdFaBVY.js";
import "./ArtistPanelIcon-91lmbuTQ.js";
import "./ContactIcon-QHxajr-T.js";
import "./nuxt-link-DB89SAcR.js";
import "./useSanctumAuth-B2JusLUJ.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "panel",
  __ssrInlineRender: true,
  setup(__props) {
    const nuxt = useNuxtApp();
    const loading = ref(true);
    nuxt.hook("page:loading:start", () => {
      loading.value = true;
    });
    nuxt.hook("page:loading:end", () => {
      setTimeout(() => {
        loading.value = false;
      }, 500);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page h-full w-full flex flex-col relative" }, _attrs))}>`);
      if (unref(loading)) {
        _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_sfc_main$2, { class: "md:flex hidden" }, null, _parent));
      _push(`<div class="w-full min-h-screen px-[34px] py-[20px] flex flex-row justify-start items-start">`);
      _push(ssrRenderComponent(_sfc_main$3, { class: "md:flex hidden" }, null, _parent));
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
      _push(ssrRenderComponent(__nuxt_component_1, { class: "hidden md:flex" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, { class: "md:hidden" }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/panel.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=panel-B-aZQNB_.js.map
