import { mergeProps, useSSRContext, defineComponent, ref, withCtx, createVNode, createTextVNode, unref } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc, u as useAuthStore } from "../server.mjs";
import { _ as _sfc_main$3 } from "./ProfileLink-CyK1DvW1.js";
import { u as useSanctumAuth } from "./useSanctumAuth-B2JusLUJ.js";
import { C as ChangePasswordIcon, D as DeleteAccountIcon, A as AltPhoneNumberIcon, _ as _sfc_main$2 } from "./DeleteAccountModal-HvrqoNMM.js";
import { u as useDrawerStore } from "./Drawer-n5iGEtr0.js";
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full flex flex-col justify-center items-center" }, _attrs))}><div class="w-full font-semibold text-[16px] leading-[24px] text-[#141414] text-center"> امنیت </div></div>`);
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
            _push2(`تغییر رمز عبور`);
          } else {
            return [
              createTextVNode("تغییر رمز عبور")
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
            _push2(`پاک کردن حساب کاربری`);
          } else {
            return [
              createTextVNode("پاک کردن حساب کاربری")
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
            _push2(`شماره جایگزین ورود`);
          } else {
            return [
              createTextVNode("شماره جایگزین ورود")
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
            _push2(`<div class="w-full flex flex-col items-start justify-start pb-[18px]"${_scopeId}><h1 class="w-full font-semibold text-[#141414] text-right text-[17px] leading-[26px]"${_scopeId}> پاک کردن حساب کاربری </h1><h4 class="w-full font-semibold text-[#828282] text-right text-[14px] leading-[21px]"${_scopeId}> آیا مطمئن هستید که می خواهید این حساب را حذف کنید؟ این عمل قابل بازگشت نیست. </h4><div class="w-full mt-[10px] font-normal text-right text-[#133C3E] text-[10px] leading-[15px]"${_scopeId}></div></div>`);
          } else {
            return [
              createVNode("div", { class: "w-full flex flex-col items-start justify-start pb-[18px]" }, [
                createVNode("h1", { class: "w-full font-semibold text-[#141414] text-right text-[17px] leading-[26px]" }, " پاک کردن حساب کاربری "),
                createVNode("h4", { class: "w-full font-semibold text-[#828282] text-right text-[14px] leading-[21px]" }, " آیا مطمئن هستید که می خواهید این حساب را حذف کنید؟ این عمل قابل بازگشت نیست. "),
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
export {
  Header as H,
  _sfc_main as _
};
//# sourceMappingURL=SecurityLinkBox-DBIJiCrA.js.map
