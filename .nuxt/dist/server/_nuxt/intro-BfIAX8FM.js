import { b as useRouter, a as __nuxt_component_0 } from "../server.mjs";
import { defineComponent, ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
/* empty css                  */
import { u as useFetch } from "./fetch-C_QM8LGj.js";
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
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "IntroList",
  __ssrInlineRender: true,
  props: {
    slides: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    useRouter();
    ref();
    const currentIndex = ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_client_only = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-[322px] flex flex-col justify-start items-center relative" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
      _push(`<div class="absolute bottom-[-75px] right-[25px] left-[25px]">`);
      if (unref(currentIndex) == 2) {
        _push(`<button class="w-full bg-[#FF3CA0] rounded-[15px] py-[6px] px-[60px] text-white cursor-pointer flex flex-row justify-center items-center gap-[10px]"><span>شروع</span></button>`);
      } else {
        _push(`<button class="cursor-pointer flex flex-row justify-start items-center gap-[10px]"><svg width="50" height="41" viewBox="0 0 50 41" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="50" height="41" rx="15" fill="#FF3CA0"></rect><path d="M21.025 30.5L19.25 28.725L27.475 20.5L19.25 12.275L21.025 10.5L31.025 20.5L21.025 30.5Z" fill="white"></path></svg><span>برو بعدی</span></button>`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/intro/IntroList.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "intro",
  __ssrInlineRender: true,
  setup(__props) {
    const introArray = ref([]);
    const getIntroList = async () => {
      const { data } = await useFetch("/api/intros", "$RGT4L9mIb0");
      introArray.value = data.value;
    };
    getIntroList();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IntroList = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-screen py-[65px] w-full flex flex-col justify-start items-center" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_IntroList, { slides: unref(introArray) }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/intro.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=intro-BfIAX8FM.js.map
