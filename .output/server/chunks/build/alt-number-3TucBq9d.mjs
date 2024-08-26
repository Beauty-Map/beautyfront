import { defineComponent, ref, mergeProps, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { H as Header } from './Header-Bpatpca2.mjs';
import { M as MainActionButton } from './MainActionButton-CrIh6sno.mjs';
import { _ as _sfc_main$1 } from './TelInput-3qjKTnyJ.mjs';
import { u as useCustomFetch } from './useCustomFetch-CwVU0VgL.mjs';
import { b as _sfc_main$2 } from './OtpForm-BivPsdtY.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import 'lodash-es';
import './ContactIcon-CElbyF3A.mjs';
import './ErrorRedIcon-CwkRbDIY.mjs';
import './server.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'dayjs';
import 'dayjs/plugin/updateLocale.js';
import 'dayjs/plugin/relativeTime.js';
import 'dayjs/plugin/utc.js';
import 'consola/core';
import 'vue3-toastify';
import './fetch-CSNts9RR.mjs';
import './Drawer-O-pqrFqT.mjs';

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
        errors.value.alt_number = "\u0634\u0645\u0627\u0631\u0647 \u062A\u0645\u0627\u0633 \u0631\u0627 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F";
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
      _push(`</div><div class="w-full flex flex-row justify-start items-center mt-[40px]"><div class="font-medium text-[13px] leading-[20px] text-[#A9A7A7] text-center mx-7"> \u0634\u0645\u0627 \u0645\u06CC\u062A\u0648\u0627\u0646\u06CC\u062F \u062C\u0647\u062A \u0628\u0627\u0644\u0627 \u0628\u0631\u062F\u0646 \u0627\u0645\u0646\u06CC\u062A \u062D\u0633\u0627\u0628 \u06A9\u0627\u0631\u0628\u0631\u06CC \u062E\u0648\u062F \u0648 \u0628\u0631\u0627\u06CC \u062F\u0633\u062A\u0631\u0633\u06CC \u0647\u0645\u06CC\u0634\u06AF\u06CC \u0628\u0647 \u062D\u0633\u0627\u0628 \u06A9\u0627\u0631\u0628\u0631\u06CC \u062E\u0648\u062F \u06CC\u06A9 \u0634\u0645\u0627\u0631\u0647 \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u062C\u0627\u06CC\u06AF\u0632\u06CC\u0646 \u0628\u0647 \u062D\u0633\u0627\u0628 \u06A9\u0627\u0631\u0628\u0631\u06CC \u062E\u0648\u062F \u0627\u0636\u0627\u0641\u0647 \u06A9\u0646\u06CC\u062F </div></div>`);
      if (!unref(codeSent)) {
        _push(`<div class="w-full overflow-y-auto mt-[17px]">`);
        _push(ssrRenderComponent(_sfc_main$1, {
          error: unref(errors).alt_number,
          title: "\u0634\u0645\u0627\u0631\u0647 \u0645\u0648\u0628\u0627\u06CC\u0644",
          modelValue: unref(form).alt_number,
          "onUpdate:modelValue": ($event) => unref(form).alt_number = $event
        }, null, _parent));
        _push(ssrRenderComponent(MainActionButton, {
          class: "mt-[48px] h-[44px]",
          onClick: doSendCode
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="text-white text-center text-[14px] leading-[21px]"${_scopeId}> \u0627\u0631\u0633\u0627\u0644 \u06A9\u062F </div>`);
            } else {
              return [
                createVNode("div", { class: "text-white text-center text-[14px] leading-[21px]" }, " \u0627\u0631\u0633\u0627\u0644 \u06A9\u062F ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<div class="w-full overflow-y-auto mt-[17px]">`);
        if (unref(codeSent)) {
          _push(ssrRenderComponent(_sfc_main$2, {
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

export { _sfc_main as default };
//# sourceMappingURL=alt-number-3TucBq9d.mjs.map
