import { defineComponent, ref, mergeProps, withCtx, createVNode, createTextVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { _ as _sfc_main$3 } from './ProfileLink-CJVrMELi.mjs';
import { u as useSanctumAuth } from './useSanctumAuth-DECrePYZ.mjs';
import { C as ChangePasswordIcon, D as DeleteAccountIcon, A as AltPhoneNumberIcon, _ as _sfc_main$2 } from './DeleteAccountModal-P1HwjgRl.mjs';
import { u as useDrawerStore } from './Drawer-O-pqrFqT.mjs';
import { e as useAuthStore } from './server.mjs';

const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full flex flex-col justify-center items-center" }, _attrs))}><div class="w-full font-semibold text-[16px] leading-[24px] text-[#141414] text-center"> \u0627\u0645\u0646\u06CC\u062A </div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/security-drawer/Header.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Header = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SecurityLinkBox",
  __ssrInlineRender: true,
  setup(__props) {
    const auth = useAuthStore();
    const user = ref(auth.user);
    const store = useDrawerStore();
    const showDeleteAccount = ref(false);
    const openSetAltNumberDrawer = () => {
      store.closeAllDrawers();
      store.openSetAltNumberDrawer();
    };
    const openSetNewPasswordDrawer = () => {
      store.closeAllDrawers();
      store.openSetNewPasswordDrawer();
    };
    const openDeleteAccountAlert = () => {
      showDeleteAccount.value = true;
    };
    const closeDeleteAccountAlert = () => {
      showDeleteAccount.value = false;
    };
    const doDeleteAccount = () => {
      const auth2 = useSanctumAuth();
      auth2.logout();
    };
    const deleteAccount = () => {
      if (!user.value) {
        store.closeAllDrawers();
        store.openLoginDrawer();
        return;
      }
      openDeleteAccountAlert();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ProfileLink = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col justify-start items-start w-full pb-10" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_ProfileLink, {
        onClick: openSetNewPasswordDrawer,
        "is-link": false
      }, {
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(ChangePasswordIcon, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(ChangePasswordIcon)
            ];
          }
        }),
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u062A\u063A\u06CC\u06CC\u0631 \u0631\u0645\u0632 \u0639\u0628\u0648\u0631`);
          } else {
            return [
              createTextVNode("\u062A\u063A\u06CC\u06CC\u0631 \u0631\u0645\u0632 \u0639\u0628\u0648\u0631")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ProfileLink, {
        onClick: deleteAccount,
        "is-link": false
      }, {
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(DeleteAccountIcon, { class: "mr-[6px] ml-[6px]" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(DeleteAccountIcon, { class: "mr-[6px] ml-[6px]" })
            ];
          }
        }),
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u067E\u0627\u06A9 \u06A9\u0631\u062F\u0646 \u062D\u0633\u0627\u0628 \u06A9\u0627\u0631\u0628\u0631\u06CC`);
          } else {
            return [
              createTextVNode("\u067E\u0627\u06A9 \u06A9\u0631\u062F\u0646 \u062D\u0633\u0627\u0628 \u06A9\u0627\u0631\u0628\u0631\u06CC")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ProfileLink, {
        onClick: openSetAltNumberDrawer,
        "is-link": false
      }, {
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(AltPhoneNumberIcon, { class: "mr-[6px] ml-[2px]" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(AltPhoneNumberIcon, { class: "mr-[6px] ml-[2px]" })
            ];
          }
        }),
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u0634\u0645\u0627\u0631\u0647 \u062C\u0627\u06CC\u06AF\u0632\u06CC\u0646 \u0648\u0631\u0648\u062F`);
          } else {
            return [
              createTextVNode("\u0634\u0645\u0627\u0631\u0647 \u062C\u0627\u06CC\u06AF\u0632\u06CC\u0646 \u0648\u0631\u0648\u062F")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        open: unref(showDeleteAccount),
        onClose: closeDeleteAccountAlert,
        onDelete: doDeleteAccount
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full flex flex-col items-start justify-start pb-[18px]"${_scopeId}><h1 class="w-full font-semibold text-[#141414] text-right text-[17px] leading-[26px]"${_scopeId}> \u067E\u0627\u06A9 \u06A9\u0631\u062F\u0646 \u062D\u0633\u0627\u0628 \u06A9\u0627\u0631\u0628\u0631\u06CC </h1><h4 class="w-full font-semibold text-[#828282] text-right text-[14px] leading-[21px]"${_scopeId}> \u0622\u06CC\u0627 \u0645\u0637\u0645\u0626\u0646 \u0647\u0633\u062A\u06CC\u062F \u06A9\u0647 \u0645\u06CC \u062E\u0648\u0627\u0647\u06CC\u062F \u0627\u06CC\u0646 \u062D\u0633\u0627\u0628 \u0631\u0627 \u062D\u0630\u0641 \u06A9\u0646\u06CC\u062F\u061F \u0627\u06CC\u0646 \u0639\u0645\u0644 \u0642\u0627\u0628\u0644 \u0628\u0627\u0632\u06AF\u0634\u062A \u0646\u06CC\u0633\u062A. </h4><div class="w-full mt-[10px] font-normal text-right text-[#133C3E] text-[10px] leading-[15px]"${_scopeId}></div></div>`);
          } else {
            return [
              createVNode("div", { class: "w-full flex flex-col items-start justify-start pb-[18px]" }, [
                createVNode("h1", { class: "w-full font-semibold text-[#141414] text-right text-[17px] leading-[26px]" }, " \u067E\u0627\u06A9 \u06A9\u0631\u062F\u0646 \u062D\u0633\u0627\u0628 \u06A9\u0627\u0631\u0628\u0631\u06CC "),
                createVNode("h4", { class: "w-full font-semibold text-[#828282] text-right text-[14px] leading-[21px]" }, " \u0622\u06CC\u0627 \u0645\u0637\u0645\u0626\u0646 \u0647\u0633\u062A\u06CC\u062F \u06A9\u0647 \u0645\u06CC \u062E\u0648\u0627\u0647\u06CC\u062F \u0627\u06CC\u0646 \u062D\u0633\u0627\u0628 \u0631\u0627 \u062D\u0630\u0641 \u06A9\u0646\u06CC\u062F\u061F \u0627\u06CC\u0646 \u0639\u0645\u0644 \u0642\u0627\u0628\u0644 \u0628\u0627\u0632\u06AF\u0634\u062A \u0646\u06CC\u0633\u062A. "),
                createVNode("div", { class: "w-full mt-[10px] font-normal text-right text-[#133C3E] text-[10px] leading-[15px]" })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/security-drawer/SecurityLinkBox.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { Header as H, _sfc_main as _ };
//# sourceMappingURL=SecurityLinkBox-C5Ujz8wI.mjs.map
