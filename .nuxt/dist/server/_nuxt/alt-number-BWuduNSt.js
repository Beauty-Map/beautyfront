import { defineComponent, ref, mergeProps, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { H as Header } from "./Header-DQtllvZs.js";
import { _ as _sfc_main$2 } from "./MainActionButton-dCV7vShO.js";
import { _ as _sfc_main$1 } from "./TelInput-Dce7UZL4.js";
import { u as useCustomFetch } from "./useCustomFetch-7ynZLwB1.js";
import { b as _sfc_main$3 } from "./OtpForm-CkmcWc-J.js";
import "../server.mjs";
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
import "lodash-es";
import "./ContactIcon-QHxajr-T.js";
import "./ErrorRedIcon-Bdl6jb2D.js";
import "./fetch-C_QM8LGj.js";
import "./Drawer-n5iGEtr0.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "alt-number",
  __ssrInlineRender: true,
  setup(__props) {
    const form = ref({
      alt_number: ""
    });
    const errors = ref({
      alt_number: ""
    });
    const codeSent = ref(false);
    const doSendCode = async () => {
      if (!form.value.alt_number) {
        errors.value.alt_number = "شماره تماس را وارد کنید";
        return;
      }
      const res = await useCustomFetch("/own/alt-number", {
        method: "POST",
        body: form.value
      });
      if (res.error.value)
        ;
      if (res.data.value) {
        codeSent.value = true;
      }
    };
    const validate = async (code) => {
      const res = await useCustomFetch("/own/alt-number", {
        method: "PUT",
        body: { code, alt_number: form.value.alt_number }
      });
      if (res.error.value)
        ;
      if (res.data.value)
        ;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col justify-start items-center mt-[40px] md:px-[40px]" }, _attrs))}><div class="w-full flex flex-row justify-start items-center">`);
      _push(ssrRenderComponent(Header, null, null, _parent));
      _push(`</div><div class="w-full flex flex-row justify-start items-center mt-[40px]"><div class="font-medium text-[13px] leading-[20px] text-[#A9A7A7] text-center mx-7"> شما میتوانید جهت بالا بردن امنیت حساب کاربری خود و برای دسترسی همیشگی به حساب کاربری خود یک شماره به عنوان جایگزین به حساب کاربری خود اضافه کنید </div></div>`);
      if (!unref(codeSent)) {
        _push(`<div class="w-full overflow-y-auto mt-[17px]">`);
        _push(ssrRenderComponent(_sfc_main$1, {
          error: unref(errors).alt_number,
          title: "شماره موبایل",
          modelValue: unref(form).alt_number,
          "onUpdate:modelValue": ($event) => unref(form).alt_number = $event
        }, null, _parent));
        _push(ssrRenderComponent(_sfc_main$2, {
          class: "mt-[48px] h-[44px]",
          onClick: doSendCode
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="text-white text-center text-[14px] leading-[21px]"${_scopeId}> ارسال کد </div>`);
            } else {
              return [
                createVNode("div", { class: "text-white text-center text-[14px] leading-[21px]" }, " ارسال کد ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<div class="w-full overflow-y-auto mt-[17px]">`);
        if (unref(codeSent)) {
          _push(ssrRenderComponent(_sfc_main$3, {
            onResend: doSendCode,
            onValidate: validate
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/security/alt-number.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=alt-number-BWuduNSt.js.map
