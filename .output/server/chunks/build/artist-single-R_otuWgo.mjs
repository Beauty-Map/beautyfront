import { _ as _sfc_main$5, a as __nuxt_component_1 } from './MainHeaderDesktop-BFAeY3s1.mjs';
import { f as useNuxtApp } from './server.mjs';
import { defineComponent, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _sfc_main$1 } from './PageLoading-mm1u5C4s.mjs';
import { _ as _sfc_main$3, a as _sfc_main$j, b as _sfc_main$9, c as _sfc_main$2, d as _sfc_main$a, e as _sfc_main$i, f as _sfc_main$e, g as _sfc_main$k } from './SetPasswordDrawer-j1I-p9jS.mjs';
import { _ as _sfc_main$4 } from './NotificationDrawer-B5c_0huo.mjs';
import { _ as _sfc_main$6 } from './BottomNavigationBox-_dOCDJqp.mjs';
import './nuxt-link-B3sIHW1Y.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './useSanctumAuth-Clu_AxNv.mjs';
import './Drawer-DbL6gM-F.mjs';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'dayjs';
import 'dayjs/plugin/updateLocale.js';
import 'dayjs/plugin/relativeTime.js';
import 'dayjs/plugin/utc.js';
import 'consola/core';
import 'vue3-toastify';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import './Header-Bpatpca2.mjs';
import './MainActionButton-CrIh6sno.mjs';
import './TelInput-3qjKTnyJ.mjs';
import 'lodash-es';
import './ContactIcon-CElbyF3A.mjs';
import './ErrorRedIcon-CwkRbDIY.mjs';
import './useCustomFetch-CwVU0VgL.mjs';
import './fetch-CSNts9RR.mjs';
import './RegisterForm-DnAd1NEZ.mjs';
import './BeautyIcon-C6RRmPU7.mjs';
import './CheckBox-Dy8cOoli.mjs';
import './EmailInput-BVjzeY3f.mjs';
import './OtpForm-BuaOwYQI.mjs';
import './BackIcon-TUxxOOBv.mjs';
import './Header-T_gVVJAN.mjs';
import './SecurityLinkBox-8ZqCnnzX.mjs';
import './ProfileLink-IrjVPoHc.mjs';
import './LeftArrow-9zIMlyBR.mjs';
import './DeleteAccountModal-P1HwjgRl.mjs';
import './BirthDateInput-DA8s2f5Y.mjs';
import './ChooseCityDrawer-DuHJIPrC.mjs';
import './SearchIcon-B3Vs2PxK.mjs';
import './SecurityIcon-DjHeYVES.mjs';
import './ArtistPanelIcon-CUt1lOFP.mjs';

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
      _push(ssrRenderComponent(_sfc_main$3, { class: "md:hidden flex" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$j, { class: "md:hidden flex" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$9, { class: "md:hidden flex" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, { class: "md:hidden flex" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$a, { class: "md:hidden flex" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, { class: "md:hidden flex" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$i, { class: "md:hidden flex" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$e, { class: "md:hidden flex" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$k, { class: "md:hidden flex" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$5, { class: "md:flex hidden" }, null, _parent));
      _push(`<div class="w-full min-h-screen flex flex-col justify-start items-start">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
      _push(ssrRenderComponent(_component_Footer, { class: "hidden md:flex" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$6, { class: "md:hidden" }, null, _parent));
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

export { _sfc_main as default };
//# sourceMappingURL=artist-single-R_otuWgo.mjs.map
