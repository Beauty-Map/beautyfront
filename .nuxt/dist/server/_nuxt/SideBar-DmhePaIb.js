import { defineComponent, mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$2, a as _sfc_main$3 } from "./SideBarLink-CgD_n89y.js";
import { P as ProfileSmallIcon, R as ReferralIcon, S as SecurityIcon } from "./SecurityIcon-WRdFaBVY.js";
import { A as ArtistPanelIcon } from "./ArtistPanelIcon-91lmbuTQ.js";
import { C as ContactIcon } from "./ContactIcon-QHxajr-T.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SideBarLinkBox",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full flex flex-col gap-y-[8px] justify-start items-start px-[4px] py-[8px]" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$2, {
        to: "/panel",
        title: "پروفایل"
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
        title: "ورود به پنل هنرمندان"
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
        title: "معرفی به دوستان"
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
        title: "امنیت و سیاست حفظ حریم خصوصی"
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
        title: "تماس باما"
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
      _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
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
export {
  _sfc_main as _
};
//# sourceMappingURL=SideBar-DmhePaIb.js.map
