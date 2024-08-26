import { useSSRContext, defineComponent, mergeProps, withCtx, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _sfc_main$1$1, a as _sfc_main$2 } from './SideBarLink-Ddy3XEMg.mjs';
import { P as ProfileSmallIcon, R as ReferralIcon, S as SecurityIcon } from './SecurityIcon-DjHeYVES.mjs';
import { A as ArtistPanelIcon } from './ArtistPanelIcon-CUt1lOFP.mjs';
import { C as ContactIcon } from './ContactIcon-CElbyF3A.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SideBarLinkBox",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full flex flex-col gap-y-[8px] justify-start items-start px-[4px] py-[8px]" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$2, {
        to: "/panel",
        title: "\u067E\u0631\u0648\u0641\u0627\u06CC\u0644"
      }, {
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(ProfileSmallIcon, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(ProfileSmallIcon)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        to: "/panel/artist",
        title: "\u0648\u0631\u0648\u062F \u0628\u0647 \u067E\u0646\u0644 \u0647\u0646\u0631\u0645\u0646\u062F\u0627\u0646"
      }, {
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(ArtistPanelIcon, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(ArtistPanelIcon)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        to: "http://127.0.0.1:5000",
        title: "\u0648\u0631\u0648\u062F \u0628\u0647 \u067E\u0646\u0644 \u0628\u0627\u0632\u0627\u0631\u06CC\u0627\u0628"
      }, {
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(ArtistPanelIcon, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(ArtistPanelIcon)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        to: "/panel/referral",
        title: "\u0645\u0639\u0631\u0641\u06CC \u0628\u0647 \u062F\u0648\u0633\u062A\u0627\u0646"
      }, {
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(ReferralIcon, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(ReferralIcon)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        to: "/security",
        title: "\u0627\u0645\u0646\u06CC\u062A \u0648 \u0633\u06CC\u0627\u0633\u062A \u062D\u0641\u0638 \u062D\u0631\u06CC\u0645 \u062E\u0635\u0648\u0635\u06CC"
      }, {
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(SecurityIcon, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(SecurityIcon)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        to: "/support",
        title: "\u062A\u0645\u0627\u0633 \u0628\u0627\u0645\u0627"
      }, {
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(ContactIcon, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(ContactIcon)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sidebar/SideBarLinkBox.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SideBar",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col justify-start items-start w-full max-w-[310px]" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$1$1, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, { class: "mt-8" }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sidebar/SideBar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=SideBar-COKHCgew.mjs.map
