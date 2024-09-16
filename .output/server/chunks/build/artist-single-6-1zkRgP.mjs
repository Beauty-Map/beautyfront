import { _ as _sfc_main$5, a as __nuxt_component_1 } from './MainHeaderDesktop-CIIE8dBu.mjs';
import { f as useNuxtApp } from './server.mjs';
import { defineComponent, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _sfc_main$1 } from './PageLoading-6bDLHwCJ.mjs';
import { _ as _sfc_main$3, a as _sfc_main$j, b as _sfc_main$9, c as _sfc_main$2, d as _sfc_main$a, e as _sfc_main$i, f as _sfc_main$e, g as _sfc_main$k } from './SetPasswordDrawer-DqdRmVA7.mjs';
import { _ as _sfc_main$4 } from './NotificationDrawer-d5Wh0ovI.mjs';
import './nuxt-link-DB89SAcR.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import './useSanctumAuth-B2JusLUJ.mjs';
import './Drawer-n5iGEtr0.mjs';
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
import './Header-DQtllvZs.mjs';
import './MainActionButton-dCV7vShO.mjs';
import './TelInput-Dce7UZL4.mjs';
import 'lodash-es';
import './ContactIcon-QHxajr-T.mjs';
import './ErrorRedIcon-Bdl6jb2D.mjs';
import './RegisterForm-B7P0ysQc.mjs';
import './BeautyIcon-B0tzcQSF.mjs';
import './CheckBox-CSaiS3ur.mjs';
import './EmailInput-C25-nm-x.mjs';
import './OtpForm-CkmcWc-J.mjs';
import './useCustomFetch-7ynZLwB1.mjs';
import './fetch-C_QM8LGj.mjs';
import './Loading-BdqMyNBb.mjs';
import './BackIcon-nFKai1cn.mjs';
import './Header-BOhVDNNd.mjs';
import './SecurityLinkBox-DBIJiCrA.mjs';
import './ProfileLink-CyK1DvW1.mjs';
import './LeftArrow-LWKoxjM1.mjs';
import './DeleteAccountModal-HvrqoNMM.mjs';
import './BirthDateInput-BX9rvxsi.mjs';
import './ChooseCityDrawer-DxZVyNvs.mjs';
import './SearchIcon-BEnuNJvi.mjs';
import './SecurityIcon-WRdFaBVY.mjs';
import './ArtistPanelIcon-91lmbuTQ.mjs';

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
//# sourceMappingURL=artist-single-6-1zkRgP.mjs.map
