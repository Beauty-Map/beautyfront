import { _ as _sfc_main$b, a as __nuxt_component_1 } from "./MainHeaderDesktop-CIIE8dBu.js";
import { f as useNuxtApp } from "../server.mjs";
import { defineComponent, ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./PageLoading-6bDLHwCJ.js";
import { _ as _sfc_main$2, a as _sfc_main$3, b as _sfc_main$4, c as _sfc_main$5, d as _sfc_main$6, e as _sfc_main$8, f as _sfc_main$9, g as _sfc_main$a } from "./SetPasswordDrawer-DqdRmVA7.js";
import { _ as _sfc_main$7 } from "./NotificationDrawer-d5Wh0ovI.js";
import "./nuxt-link-DB89SAcR.js";
import "ufo";
import "./useSanctumAuth-B2JusLUJ.js";
import "destr";
import "klona";
import "devalue";
import "defu";
import "./Drawer-n5iGEtr0.js";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "cookie-es";
import "ohash";
import "@vue/devtools-api";
import "dayjs";
import "dayjs/plugin/updateLocale.js";
import "dayjs/plugin/relativeTime.js";
import "dayjs/plugin/utc.js";
import "consola";
import "vue3-toastify";
import "./Header-DQtllvZs.js";
import "./MainActionButton-dCV7vShO.js";
import "./TelInput-Dce7UZL4.js";
import "lodash-es";
import "./ContactIcon-QHxajr-T.js";
import "./ErrorRedIcon-Bdl6jb2D.js";
import "./RegisterForm-B7P0ysQc.js";
import "./BeautyIcon-B0tzcQSF.js";
import "./CheckBox-CSaiS3ur.js";
import "./EmailInput-C25-nm-x.js";
import "./OtpForm-CkmcWc-J.js";
import "./useCustomFetch-7ynZLwB1.js";
import "./fetch-C_QM8LGj.js";
import "./Loading-BdqMyNBb.js";
import "./BackIcon-nFKai1cn.js";
import "./Header-BOhVDNNd.js";
import "./SecurityLinkBox-DBIJiCrA.js";
import "./ProfileLink-CyK1DvW1.js";
import "./LeftArrow-LWKoxjM1.js";
import "./DeleteAccountModal-HvrqoNMM.js";
import "./BirthDateInput-BX9rvxsi.js";
import "./ChooseCityDrawer-DxZVyNvs.js";
import "./SearchIcon-BEnuNJvi.js";
import "./SecurityIcon-WRdFaBVY.js";
import "./ArtistPanelIcon-91lmbuTQ.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "artist-single",
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
      const _component_Footer = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page h-full w-full flex flex-col relative" }, _attrs))}>`);
      if (unref(loading)) {
        _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_sfc_main$2, { class: "md:hidden flex" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, { class: "md:hidden flex" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, { class: "md:hidden flex" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$5, { class: "md:hidden flex" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$6, { class: "md:hidden flex" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$7, { class: "md:hidden flex" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$8, { class: "md:hidden flex" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$9, { class: "md:hidden flex" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$a, { class: "md:hidden flex" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$b, { class: "md:flex hidden" }, null, _parent));
      _push(`<div class="w-full min-h-screen flex flex-col justify-start items-start">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
      _push(ssrRenderComponent(_component_Footer, { class: "hidden md:flex" }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/artist-single.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=artist-single-6-1zkRgP.js.map
