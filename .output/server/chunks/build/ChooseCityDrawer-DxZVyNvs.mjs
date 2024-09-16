import { useSSRContext, defineComponent, ref, mergeProps, unref, isRef } from 'vue';
import { u as useCustomFetch } from './useCustomFetch-7ynZLwB1.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderStyle } from 'vue/server-renderer';
import { u as useDrawerStore } from './Drawer-n5iGEtr0.mjs';
import { debounce } from 'lodash-es';
import { E as ErrorRedIcon } from './ErrorRedIcon-Bdl6jb2D.mjs';
import { S as SearchIcon } from './SearchIcon-BEnuNJvi.mjs';
import { _ as _export_sfc } from './server.mjs';
import { L as LeftArrow } from './LeftArrow-LWKoxjM1.mjs';

const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "SearchInput",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: "\u062C\u0633\u062A\u062C\u0648 \u062F\u0631 \u0644\u06CC\u0633\u062A \u0634\u0647\u0631 \u0647\u0627"
    },
    modelValue: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const emits = __emit;
    const props = __props;
    ref(props.modelValue);
    const errorText = ref("");
    const hasError = ref(false);
    const validateSearch = ($event) => {
      var _a;
      emits("update:modelValue", (_a = $event.target) == null ? void 0 : _a.value);
    };
    debounce(validateSearch, 500);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-start justify-start w-full px-1" }, _attrs))}>`);
      if (__props.title) {
        _push(`<div class="${ssrRenderClass([[unref(hasError) ? "text-[#F44336]" : "text-[#141414]"], "text-[14px] leading-[16px] text-right mb-1 font-medium"])}">${ssrInterpolate(__props.title)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="${ssrRenderClass([[unref(hasError) ? "border-[#F44336]" : "border-[#133C3E]"], "h-[40px] w-full rounded-[8px] relative border"])}"><input type="text" class="text-right h-[38px] w-[98%] rounded-[8px] outline-none focus:outline-none pr-[30px] pl-[20px] placeholder:text-[#828282] placeholder:text-[11px] placeholder:leading-[16px] font-medium"${ssrRenderAttr("placeholder", __props.placeholder)}>`);
      _push(ssrRenderComponent(SearchIcon, { class: "absolute top-[14px] right-[10px]" }, null, _parent));
      _push(`</div>`);
      if (unref(hasError)) {
        _push(`<div class="w-full flex flex-row justify-start items-center">`);
        _push(ssrRenderComponent(ErrorRedIcon, null, null, _parent));
        _push(`<span class="mr-1 text-[#F44336] text-[10px] leading-[12px]">${ssrInterpolate(unref(errorText))}</span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/input/SearchInput.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><mask id="mask0_843_3215" style="${ssrRenderStyle({ "mask-type": "alpha" })}" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect width="24" height="24" fill="#D9D9D9"></rect></mask><g mask="url(#mask0_843_3215)"><path d="M12 19.35C14.0333 17.4833 15.5417 15.7875 16.525 14.2625C17.5083 12.7375 18 11.3833 18 10.2C18 8.38333 17.4208 6.89583 16.2625 5.7375C15.1042 4.57917 13.6833 4 12 4C10.3167 4 8.89583 4.57917 7.7375 5.7375C6.57917 6.89583 6 8.38333 6 10.2C6 11.3833 6.49167 12.7375 7.475 14.2625C8.45833 15.7875 9.96667 17.4833 12 19.35ZM12 21.325C11.7667 21.325 11.5333 21.2833 11.3 21.2C11.0667 21.1167 10.8583 20.9917 10.675 20.825C9.59167 19.825 8.63333 18.85 7.8 17.9C6.96667 16.95 6.27083 16.0292 5.7125 15.1375C5.15417 14.2458 4.72917 13.3875 4.4375 12.5625C4.14583 11.7375 4 10.95 4 10.2C4 7.7 4.80417 5.70833 6.4125 4.225C8.02083 2.74167 9.88333 2 12 2C14.1167 2 15.9792 2.74167 17.5875 4.225C19.1958 5.70833 20 7.7 20 10.2C20 10.95 19.8542 11.7375 19.5625 12.5625C19.2708 13.3875 18.8458 14.2458 18.2875 15.1375C17.7292 16.0292 17.0333 16.95 16.2 17.9C15.3667 18.85 14.4083 19.825 13.325 20.825C13.1417 20.9917 12.9333 21.1167 12.7 21.2C12.4667 21.2833 12.2333 21.325 12 21.325ZM12 12C12.55 12 13.0208 11.8042 13.4125 11.4125C13.8042 11.0208 14 10.55 14 10C14 9.45 13.8042 8.97917 13.4125 8.5875C13.0208 8.19583 12.55 8 12 8C11.45 8 10.9792 8.19583 10.5875 8.5875C10.1958 8.97917 10 9.45 10 10C10 10.55 10.1958 11.0208 10.5875 11.4125C10.9792 11.8042 11.45 12 12 12Z" fill="#1C1B1F"></path></g></svg>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/LocationIcon.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const LocationIcon = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "OwnProvince",
  __ssrInlineRender: true,
  props: {
    city: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full flex flex-col items-start justify-start" }, _attrs))}><div class="text-right text-[14px] leading-[21px] font-medium text-[#141414]">\u0634\u0647\u0631 \u067E\u06CC\u0634\u0641\u0631\u0636 \u0634\u0645\u0627:</div><div class="w-full flex flex-row justify-start items-center mt-[12px]">`);
      _push(ssrRenderComponent(LocationIcon, null, null, _parent));
      _push(`<div class="mr-[5px] font-medium text-[#133C3E] text-[14px] leading-[21px]">${ssrInterpolate(__props.city.name)}</div></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/search-drawer/OwnProvince.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ChooseCityList",
  __ssrInlineRender: true,
  props: {
    provinces: {
      type: Array,
      default: []
    }
  },
  emits: ["choose"],
  setup(__props, { emit: __emit }) {
    const province = ref();
    const cities = ref();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full flex flex-col items-start justify-start" }, _attrs))}><div class="w-full pb-1 text-right text-[#141414] text-[14px] leading-[21px] font-medium border-b border-b-gray-300">${ssrInterpolate(unref(province) ? "\u0627\u0646\u062A\u062E\u0627\u0628 \u0634\u0647\u0631:" : "\u0627\u0646\u062A\u062E\u0627\u0628 \u0627\u0633\u062A\u0627\u0646:")}</div><div class="w-full mt-[10px] overflow-y-scroll h-[calc(100vh-140px)] relative"><div class="${ssrRenderClass([[unref(province) ? "left-[-100%] hidden" : "left-0 block"], "absolute top-0 bottom-0 w-full duration-700 transition-all"])}"><!--[-->`);
      ssrRenderList(__props.provinces, (p, n) => {
        _push(`<div class="cursor-pointer w-full flex flex-row justify-between items-center px-[10px] py-[13px] border-b border-b-[#A9A7A7]"><span class="w-full text-[#141414] text-right text-[14px] leading-[21px] font-medium">${ssrInterpolate(p.name)}</span>`);
        _push(ssrRenderComponent(LeftArrow, null, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div><div class="${ssrRenderClass([[unref(province) ? "left-0 block" : "left-[-100%] hidden"], "absolute top-0 bottom-0 w-full duration-700 transition-all"])}"><div class="cursor-pointer w-full flex flex-row justify-between items-center px-[10px] py-[13px] border-b border-b-[#A9A7A7]">`);
      _push(ssrRenderComponent(LeftArrow, { class: "rotate-180" }, null, _parent));
      _push(`<span class="mr-[10px] w-full text-[#141414] text-right text-[14px] leading-[21px] font-medium">\u0628\u0627\u0632\u06AF\u0634\u062A</span></div><!--[-->`);
      ssrRenderList(unref(cities), (c, n) => {
        _push(`<div class="cursor-pointer w-full flex flex-row justify-between items-center px-[10px] py-[13px] border-b border-b-[#A9A7A7]"><span class="w-full text-[#141414] text-right text-[14px] leading-[21px] font-medium">${ssrInterpolate(c.name)}</span></div>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/search-drawer/ChooseCityList.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ChooseCityDrawer",
  __ssrInlineRender: true,
  props: {
    isOpen: {
      type: Boolean,
      required: true
    }
  },
  emits: ["close", "choose"],
  setup(__props, { emit: __emit }) {
    const emits = __emit;
    const provinces = ref([]);
    const ownCity = ref(null);
    useDrawerStore();
    const searchTerm = ref("");
    const close = () => {
      emits("close");
    };
    const getProvinces = async () => {
      var _a;
      const res = await useCustomFetch("/provinces", {
        method: "GET"
      });
      if (res.data.value) {
        provinces.value = (_a = res.data.value) == null ? void 0 : _a.data;
      }
    };
    const chooseProvinceAndCity = (p, c) => {
      ownCity.value = c;
      emits("choose", p, c);
      close();
    };
    getProvinces();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["flex flex-col fixed md:bg-[rgba(0,0,0,0.7)] top-0 bottom-0 px-[17px] overflow-y-scroll w-full duration-700 ease-in-out bg-white z-[999999999]", [__props.isOpen ? "left-0" : "left-[-100%]"]]
      }, _attrs))}><div class="w-full flex flex-col justify-start items-center md:max-w-[500px] md:w-full mx-auto my-[6px] md:border md:border-[#e1e1e1] rounded-[12px] px-[10px] bg-white">`);
      _push(ssrRenderComponent(_sfc_main$4, {
        modelValue: unref(searchTerm),
        "onUpdate:modelValue": ($event) => isRef(searchTerm) ? searchTerm.value = $event : null,
        class: "mt-[30px] mr-[1px]"
      }, null, _parent));
      if (unref(ownCity)) {
        _push(ssrRenderComponent(_sfc_main$2, {
          city: unref(ownCity),
          class: "mt-[23px]"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (__props.isOpen) {
        _push(ssrRenderComponent(_sfc_main$1, {
          onChoose: chooseProvinceAndCity,
          provinces: unref(provinces),
          class: "mt-[15px]"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/drawer/ChooseCityDrawer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=ChooseCityDrawer-DxZVyNvs.mjs.map
