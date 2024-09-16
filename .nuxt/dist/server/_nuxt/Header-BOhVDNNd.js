import { b as useRouter, u as useAuthStore, e as useCookie, f as useNuxtApp, _ as _export_sfc } from "../server.mjs";
import { defineComponent, mergeProps, useSSRContext, ref, unref, withCtx, openBlock, createBlock, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$3 } from "./EmailInput-C25-nm-x.js";
import { _ as _sfc_main$4, a as _sfc_main$5, b as _sfc_main$7 } from "./BeautyIcon-B0tzcQSF.js";
import { u as useDrawerStore } from "./Drawer-n5iGEtr0.js";
import { _ as _sfc_main$6 } from "./MainActionButton-dCV7vShO.js";
import LoadingComponent from "./Loading-BdqMyNBb.js";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ResetPasswordLink",
  __ssrInlineRender: true,
  setup(__props) {
    useDrawerStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full text-right font-semibold text-[#828282] text-[13px] leading-[20px]" }, _attrs))}> بازیابی رمز عبور </div>`);
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
        app.$toast.error("لطفا ایمیل خود را وارد کنید", { rtl: true });
        validated2 = false;
      }
      if (!form.value.password) {
        app.$toast.error("لطفا پسورد خود را وارد کنید", { rtl: true });
        validated2 = false;
      }
      if (!form.value.accept_policy) {
        app.$toast.error("لطفا تیک گزینه تایید قوانین را بزنید", { rtl: true });
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
        app.$toast.success("شما با موفقیت وارد شدید", { rtl: true });
        store.closeAllDrawers();
      }).catch(() => {
        app.$toast.error("متاسفانه خطایی رخ داده است. دوباره امتحان کنید", { rtl: true });
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
        title: "ایمیل",
        modelValue: unref(form).email,
        "onUpdate:modelValue": ($event) => unref(form).email = $event
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, {
        title: "کلمه عبور",
        modelValue: unref(form).password,
        "onUpdate:modelValue": ($event) => unref(form).password = $event,
        class: "mt-[27px]"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, { class: "mt-[18]" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$5, {
        class: "mt-[18px]",
        modelValue: unref(form).accept_policy,
        "onUpdate:modelValue": ($event) => unref(form).accept_policy = $event
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$6, {
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
              _push2(`<div class="text-white text-center text-[20px] leading-[30px]"${_scopeId}>ورود</div>`);
            }
          } else {
            return [
              unref(loading) ? (openBlock(), createBlock("div", { key: 0 }, [
                createVNode(LoadingComponent)
              ])) : (openBlock(), createBlock("div", {
                key: 1,
                class: "text-white text-center text-[20px] leading-[30px]"
              }, "ورود"))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$7, {
        class: "mt-[18px]",
        onClick: openRegisterModal,
        title: "ثبت نام"
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
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col justify-center items-center" }, _attrs))}><div class="font-medium text-[24px] leading-[37px] text-[#141414] text-center"> ورود </div><div class="font-medium text-[13px] leading-[18px] text-[#133C3E] text-center mx-7"> برای دسترسی به حساب کاربری خود ایمیل و رمز عبور را وارد کنید </div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/login-drawer/Header.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Header = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Header as H,
  _sfc_main$1 as _
};
//# sourceMappingURL=Header-BOhVDNNd.js.map
