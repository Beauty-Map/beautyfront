import { b as useRouter, u as useAuthStore, _ as _export_sfc, e as useCookie, f as useNuxtApp } from './server.mjs';
import { useSSRContext, defineComponent, ref, mergeProps, unref, withCtx, openBlock, createBlock, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _sfc_main$3 } from './EmailInput-C25-nm-x.mjs';
import { _ as _sfc_main$4, a as _sfc_main$3$1, b as _sfc_main$1$1 } from './BeautyIcon-B0tzcQSF.mjs';
import { u as useDrawerStore } from './Drawer-n5iGEtr0.mjs';
import { _ as _sfc_main$5 } from './MainActionButton-dCV7vShO.mjs';
import LoadingComponent from './Loading-BdqMyNBb.mjs';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ResetPasswordLink",
  __ssrInlineRender: true,
  setup(__props) {
    useDrawerStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full text-right font-semibold text-[#828282] text-[13px] leading-[20px]" }, _attrs))}> \u0628\u0627\u0632\u06CC\u0627\u0628\u06CC \u0631\u0645\u0632 \u0639\u0628\u0648\u0631 </div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/AuthDrawer/ResetPasswordLink.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "LoginForm",
  __ssrInlineRender: true,
  setup(__props) {
    const app = useNuxtApp();
    const store = useDrawerStore();
    useRouter();
    const auth = useAuthStore();
    const loading = ref(false);
    const form = ref({
      email: "",
      password: "",
      accept_policy: false
    });
    const validated = () => {
      let validated2 = true;
      if (!form.value.email) {
        app.$toast.error("\u0644\u0637\u0641\u0627 \u0627\u06CC\u0645\u06CC\u0644 \u062E\u0648\u062F \u0631\u0627 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F", { rtl: true });
        validated2 = false;
      }
      if (!form.value.password) {
        app.$toast.error("\u0644\u0637\u0641\u0627 \u067E\u0633\u0648\u0631\u062F \u062E\u0648\u062F \u0631\u0627 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F", { rtl: true });
        validated2 = false;
      }
      if (!form.value.accept_policy) {
        app.$toast.error("\u0644\u0637\u0641\u0627 \u062A\u06CC\u06A9 \u06AF\u0632\u06CC\u0646\u0647 \u062A\u0627\u06CC\u06CC\u062F \u0642\u0648\u0627\u0646\u06CC\u0646 \u0631\u0627 \u0628\u0632\u0646\u06CC\u062F", { rtl: true });
        validated2 = false;
      }
      return validated2;
    };
    const doLogin = async () => {
      if (loading.value)
        return;
      if (!validated()) {
        return;
      }
      loading.value = true;
      const { $postRequest: postRequest } = app;
      postRequest("/auth/login", form.value).then((res) => {
        auth.user = res.data;
        auth.token = res.data.token;
        const token = useCookie("token");
        token.value = res.data.token;
        app.$toast.success("\u0634\u0645\u0627 \u0628\u0627 \u0645\u0648\u0641\u0642\u06CC\u062A \u0648\u0627\u0631\u062F \u0634\u062F\u06CC\u062F", { rtl: true });
        store.closeAllDrawers();
      }).catch(() => {
        app.$toast.error("\u0645\u062A\u0627\u0633\u0641\u0627\u0646\u0647 \u062E\u0637\u0627\u06CC\u06CC \u0631\u062E \u062F\u0627\u062F\u0647 \u0627\u0633\u062A. \u062F\u0648\u0628\u0627\u0631\u0647 \u0627\u0645\u062A\u062D\u0627\u0646 \u06A9\u0646\u06CC\u062F", { rtl: true });
      }).finally(() => {
        setTimeout(() => {
          loading.value = false;
        }, 500);
      });
    };
    const openRegisterModal = () => {
      {
        store.closeAllDrawers();
        store.openRegisterDrawer();
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$3, {
        title: "\u0627\u06CC\u0645\u06CC\u0644",
        modelValue: unref(form).email,
        "onUpdate:modelValue": ($event) => unref(form).email = $event
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, {
        title: "\u06A9\u0644\u0645\u0647 \u0639\u0628\u0648\u0631",
        modelValue: unref(form).password,
        "onUpdate:modelValue": ($event) => unref(form).password = $event,
        class: "mt-[27px]"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, { class: "mt-[18]" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3$1, {
        class: "mt-[18px]",
        modelValue: unref(form).accept_policy,
        "onUpdate:modelValue": ($event) => unref(form).accept_policy = $event
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$5, {
        disabled: unref(loading),
        class: "mt-[18px]",
        onClick: doLogin
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(loading)) {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(LoadingComponent, null, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<div class="text-white text-center text-[20px] leading-[30px]"${_scopeId}>\u0648\u0631\u0648\u062F</div>`);
            }
          } else {
            return [
              unref(loading) ? (openBlock(), createBlock("div", { key: 0 }, [
                createVNode(LoadingComponent)
              ])) : (openBlock(), createBlock("div", {
                key: 1,
                class: "text-white text-center text-[20px] leading-[30px]"
              }, "\u0648\u0631\u0648\u062F"))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$1$1, {
        class: "mt-[18px]",
        onClick: openRegisterModal,
        title: "\u062B\u0628\u062A \u0646\u0627\u0645"
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/login-drawer/LoginForm.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col justify-center items-center" }, _attrs))}><div class="font-medium text-[24px] leading-[37px] text-[#141414] text-center"> \u0648\u0631\u0648\u062F </div><div class="font-medium text-[13px] leading-[18px] text-[#133C3E] text-center mx-7"> \u0628\u0631\u0627\u06CC \u062F\u0633\u062A\u0631\u0633\u06CC \u0628\u0647 \u062D\u0633\u0627\u0628 \u06A9\u0627\u0631\u0628\u0631\u06CC \u062E\u0648\u062F \u0627\u06CC\u0645\u06CC\u0644 \u0648 \u0631\u0645\u0632 \u0639\u0628\u0648\u0631 \u0631\u0627 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F </div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/login-drawer/Header.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Header = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { Header as H, _sfc_main$1 as _ };
//# sourceMappingURL=Header-BOhVDNNd.mjs.map
