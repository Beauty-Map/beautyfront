import { useSSRContext, defineComponent, ref, computed, watch, mergeProps, unref, withCtx, createVNode, withDirectives, isRef, vModelText, openBlock, createBlock, createCommentVNode } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderClass, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
import { _ as _sfc_main$8 } from './ServiceItem-5YnqCWgv.mjs';
import { u as useCustomFetch } from './useCustomFetch-7ynZLwB1.mjs';
import { A as ArrowUpIcon } from './ArrowUpIcon-dlPStaoQ.mjs';
import { D as DoneCheckIcon } from './DoneCheckIcon-DygKNuo8.mjs';
import { B as BackIcon } from './BackIcon-nFKai1cn.mjs';
import { _ as _sfc_main$7 } from './Modal-D2yhK_Nx.mjs';
import { _ as _sfc_main$6 } from './CheckBox-CSaiS3ur.mjs';
import { u as useAuthStore } from './server.mjs';

const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "ChooseServiceDrawer",
  __ssrInlineRender: true,
  props: {
    isOpen: {
      type: Boolean,
      required: true
    },
    title: {
      type: String,
      default: "\u0641\u06CC\u0644\u062A\u0631"
    },
    service: {
      type: Object,
      required: true
    },
    selected: {
      type: Object,
      default: null
    }
  },
  emits: ["close", "choose"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const serviceArray = ref([]);
    const selectedService = ref(props.selected);
    const getServiceList = async () => {
      var _a;
      const res = await useCustomFetch(`/services/${props.service.id}/children`, {
        method: "GET"
      });
      if (res.data.value) {
        serviceArray.value = [
          ...(_a = res.data.value) == null ? void 0 : _a.data
        ];
      }
    };
    watch(() => props.isOpen, () => {
      if (props.isOpen) {
        getServiceList();
      }
      selectedService.value = props.selected;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["flex flex-col fixed px-[30px] py-[30px] md:hide top-0 bottom-0 overflow-y-scroll w-full duration-700 ease-in-out bg-white z-[999999999]", [__props.isOpen ? "left-0" : "left-[-100%]"]]
      }, _attrs))}><div class="flex flex-col justify-start items-center h-full w-full relative"><div class="w-full flex flex-row items-center justify-between text-right font-medium text-[#141414] text-[18px] leading-[27px]"><span>${ssrInterpolate(__props.title)}</span>`);
      _push(ssrRenderComponent(ArrowUpIcon, null, null, _parent));
      _push(`</div><div class="h-full w-full flex flex-col gap-[10px] mt-4 items-start justify-start text-right font-medium text-[#141414] text-[14px] leading-[21px]"><!--[-->`);
      ssrRenderList(unref(serviceArray), (s, i) => {
        _push(`<div class="w-full flex flex-row items-center justify-between"><span>${ssrInterpolate(s.title)}</span>`);
        if (unref(selectedService) && unref(selectedService).id === s.id) {
          _push(ssrRenderComponent(DoneCheckIcon, null, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div><button class="cursor-pointer font-semibold text-center text-[14px] leading-[22px] flex justify-center items-center text-white bg-[#FF3CA0] w-full mt-[10px] rounded-full h-[44px]"> \u062A\u0627\u06CC\u06CC\u062F </button></div></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/drawer/ChooseServiceDrawer.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "ChooseServiceMainDrawer",
  __ssrInlineRender: true,
  props: {
    isOpen: {
      type: Boolean,
      required: true
    },
    service: {
      type: Object,
      default: null
    }
  },
  emits: ["close", "choose"],
  setup(__props, { emit: __emit }) {
    const emits = __emit;
    const props = __props;
    const selectedService = ref(props.service);
    const selectedSubService = ref(null);
    const serviceArray = ref([]);
    const getServiceList = async () => {
      var _a;
      const res = await useCustomFetch("/services");
      if (res.data.value) {
        serviceArray.value = (_a = res.data.value) == null ? void 0 : _a.data;
      }
    };
    const showServiceDrawer = ref(false);
    const openServiceDrawer = () => {
      showServiceDrawer.value = true;
    };
    const closeServiceDrawer = () => {
      showServiceDrawer.value = false;
    };
    const chooseMainService = async (s) => {
      selectedService.value = s;
      openServiceDrawer();
    };
    const chooseService = async (s) => {
      selectedSubService.value = s;
      emits("choose", s);
      setTimeout(() => {
        closeServiceDrawer();
      }, 200);
    };
    const goBack = () => {
      close();
    };
    getServiceList();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ServiceItem = _sfc_main$8;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["fixed flex flex-col h-full px-[30px] py-[30px] md:hide top-0 bottom-0 right-0 overflow-y-scroll w-full duration-700 ease-in-out bg-white z-[999999999999]", [__props.isOpen ? "left-0 scale-1" : "left-[-100%] hidden scale-0"]]
      }, _attrs))}><div class="flex flex-col justify-start items-center w-full"><div class="w-full relative flex flex-row items-center justify-center py-[23px]"><div class="font-semibold text-[16px] text-[#141414] leading-[24px]">\u062E\u062F\u0645\u0627\u062A</div>`);
      _push(ssrRenderComponent(BackIcon, {
        onClick: goBack,
        class: "absolute left-0"
      }, null, _parent));
      _push(`</div><div class="grid grid-cols-4 gap-x-2 gap-y-8 w-full mt-[50px]"><!--[-->`);
      ssrRenderList(unref(serviceArray), (s, i) => {
        _push(ssrRenderComponent(_component_ServiceItem, {
          key: i,
          id: s.id,
          title: s.title,
          image: s.image,
          circle: false,
          "is-link": false,
          "call-parent": true,
          onClick: ($event) => chooseMainService(s)
        }, null, _parent));
      });
      _push(`<!--]--></div></div>`);
      _push(ssrRenderComponent(_sfc_main$5, {
        selected: __props.service,
        title: unref(selectedService) ? unref(selectedService).title : "",
        service: unref(selectedService),
        onClose: closeServiceDrawer,
        onChoose: chooseService,
        "is-open": unref(showServiceDrawer)
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/drawer/ChooseServiceMainDrawer.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ChooseServiceInput",
  __ssrInlineRender: true,
  props: {
    modelValue: {
      type: Object,
      default: null
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const emits = __emit;
    const props = __props;
    const service = ref(props.modelValue);
    const showServiceDrawer = ref(false);
    const closeServiceDrawer = () => {
      showServiceDrawer.value = false;
    };
    const chooseService = async (s) => {
      service.value = s;
      emits("update:modelValue", service.value);
      setTimeout(() => {
        closeServiceDrawer();
      }, 200);
    };
    const getServiceName = computed(() => {
      var _a;
      let title = "";
      if (service.value) {
        title = `${service.value.title},${(_a = service.value.parent) == null ? void 0 : _a.title}`;
      }
      return title;
    });
    const setService = (s) => {
      service.value = s;
    };
    watch(() => props.modelValue, () => {
      setService(props.modelValue);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "cursor-pointer w-full px-[14px] py-[20px] border-b border-b-[#A9A7A7] flex flex-row justify-between items-center" }, _attrs))}><div class="w-full h-full flex flex-row justify-between items-center"><span class="text-black text-right font-medium text-[16px] leading-[21px]"> \u062F\u0633\u062A\u0647 \u0628\u0646\u062F\u06CC </span><span class="text-[#828282] font-light text-[10px] leading-[15px]">${ssrInterpolate(unref(getServiceName))}</span></div>`);
      _push(ssrRenderComponent(_sfc_main$4, {
        service: unref(service),
        "is-open": unref(showServiceDrawer),
        onClose: closeServiceDrawer,
        onChoose: chooseService
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/input/ChooseServiceInput.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ChooseMaintenanceInput",
  __ssrInlineRender: true,
  props: {
    modelValue: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const emits = __emit;
    const props = __props;
    const showModal = ref(false);
    const maintenance = ref(props.modelValue);
    const closeModal = () => {
      showModal.value = false;
    };
    const saveModal = () => {
      emits("update:modelValue", maintenance);
      setTimeout(() => {
        closeModal();
      }, 300);
    };
    watch(() => props.modelValue, () => {
      maintenance.value = props.modelValue;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Modal = _sfc_main$7;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "cursor-pointer w-full px-[14px] py-[20px] border-b border-b-[#A9A7A7] flex flex-row justify-between items-center" }, _attrs))}><div class="w-full h-full flex flex-row justify-between items-center"><span class="text-black text-right font-medium text-[16px] leading-[21px]"> \u0631\u0648\u0634 \u0646\u06AF\u0647\u062F\u0627\u0631\u06CC </span><span class="w-[80px] text-ellipsis text-left overflow-hidden text-[#828282] font-light text-[10px] leading-[15px]">${ssrInterpolate(__props.modelValue)}</span></div>`);
      _push(ssrRenderComponent(_component_Modal, {
        "show-close": false,
        open: unref(showModal)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col justify-start items-start max-w-[340px] min-w-[250px]"${_scopeId}><div class="text-right text-black text-[15px] leading-[18px] font-normal"${_scopeId}>\u0631\u0648\u0634 \u0646\u06AF\u0647\u062F\u0627\u0631\u06CC</div><textarea class="w-full border border-[#A9A7A7] text-[12px] leading-[14px] rounded-[20px] px-[10px] py-[10px] focus:border-[#A9A7A7] mt-[20px] focus:outline-[#A9A7A7]" placeholder="\u0631\u0648\u0634 \u0646\u06AF\u0647\u062F\u0627\u0631\u06CC..." rows="8"${_scopeId}>${ssrInterpolate(unref(maintenance))}</textarea><div class="w-full flex flex-row justify-end items-center mt-[20px] gap-[8px] grow text-[14px] leading-[21px] font-medium text-[#133C3E]"${_scopeId}><span${_scopeId}>\u0630\u062E\u06CC\u0631\u0647</span><span${_scopeId}>\u0628\u0633\u062A\u0646</span></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col justify-start items-start max-w-[340px] min-w-[250px]" }, [
                createVNode("div", { class: "text-right text-black text-[15px] leading-[18px] font-normal" }, "\u0631\u0648\u0634 \u0646\u06AF\u0647\u062F\u0627\u0631\u06CC"),
                withDirectives(createVNode("textarea", {
                  class: "w-full border border-[#A9A7A7] text-[12px] leading-[14px] rounded-[20px] px-[10px] py-[10px] focus:border-[#A9A7A7] mt-[20px] focus:outline-[#A9A7A7]",
                  placeholder: "\u0631\u0648\u0634 \u0646\u06AF\u0647\u062F\u0627\u0631\u06CC...",
                  rows: "8",
                  "onUpdate:modelValue": ($event) => isRef(maintenance) ? maintenance.value = $event : null
                }, "\r\n\r\n        ", 8, ["onUpdate:modelValue"]), [
                  [vModelText, unref(maintenance)]
                ]),
                createVNode("div", { class: "w-full flex flex-row justify-end items-center mt-[20px] gap-[8px] grow text-[14px] leading-[21px] font-medium text-[#133C3E]" }, [
                  createVNode("span", { onClick: saveModal }, "\u0630\u062E\u06CC\u0631\u0647"),
                  createVNode("span", { onClick: closeModal }, "\u0628\u0633\u062A\u0646")
                ])
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/input/ChooseMaintenanceInput.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ChoosePriceInput",
  __ssrInlineRender: true,
  props: {
    price: {
      type: Number,
      default: 0
    },
    discountPrice: {
      type: Number,
      default: 0
    }
  },
  emits: ["update:price", "update:discountPrice"],
  setup(__props, { emit: __emit }) {
    const emits = __emit;
    const props = __props;
    const showModal = ref(false);
    const price = ref(props.price);
    const showDiscountPrice = ref(props.discountPrice != 0);
    const discountPrice = ref(props.discountPrice);
    const closeModal = () => {
      showModal.value = false;
    };
    const openDiscountPrice = () => {
      showDiscountPrice.value = true;
    };
    const formattedPrice = computed(() => {
      if (!price.value) {
        return "";
      }
      return price.value.toLocaleString();
    });
    const formattedDiscountPrice = computed(() => {
      if (!discountPrice.value) {
        return "";
      }
      return discountPrice.value.toLocaleString();
    });
    const formattedPropPrice = computed(() => {
      if (!props.price) {
        return "";
      }
      return price.value.toLocaleString();
    });
    const formattedPropDiscountPrice = computed(() => {
      if (!props.discountPrice) {
        return "";
      }
      return discountPrice.value.toLocaleString();
    });
    const onPriceInput = (e) => {
      const value = e.target.value.replace(/[^0-9]/g, "");
      price.value = value ? parseInt(value) : "";
    };
    const onDiscountPriceInput = (e) => {
      const value = e.target.value.replace(/[^0-9]/g, "");
      discountPrice.value = value ? parseInt(value) : "";
    };
    const saveModal = () => {
      emits("update:price", price.value);
      emits("update:discountPrice", discountPrice.value);
      setTimeout(() => {
        closeModal();
      }, 300);
    };
    const setValues = () => {
      price.value = props.price;
      discountPrice.value = props.discountPrice;
      showDiscountPrice.value = props.discountPrice != 0;
    };
    watch(() => props.price, () => setValues());
    watch(() => props.discountPrice, () => setValues());
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Modal = _sfc_main$7;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "cursor-pointer w-full px-[14px] py-[20px] border-b border-b-[#A9A7A7] flex flex-row justify-between items-center" }, _attrs))}><div class="w-full h-full flex flex-row justify-between items-center"><span class="text-black text-right font-medium text-[16px] leading-[21px]"> \u062A\u0646\u0638\u06CC\u0645 \u0642\u06CC\u0645\u062A </span><div class="flex flex-col justify-start items-start">`);
      if (unref(formattedPropPrice)) {
        _push(`<span class="${ssrRenderClass([[unref(formattedPropDiscountPrice) ? "text-[#ED2C25] line-through" : "text-black"], "flex flex-row text-left font-medium text-[12px] leading-[18px]"])}"><span>${ssrInterpolate(unref(formattedPropPrice))}</span><span class="mr-[5px]"> \u062A\u0648\u0645\u0627\u0646 </span></span>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(formattedPropDiscountPrice)) {
        _push(`<span class="flex flex-row text-left text-black font-medium text-[12px] leading-[18px]"><span>${ssrInterpolate(unref(formattedPropDiscountPrice))}</span><span class="mr-[5px]"> \u062A\u0648\u0645\u0627\u0646 </span></span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_Modal, {
        "show-close": false,
        open: unref(showModal)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full flex flex-col justify-start items-start max-w-[340px] min-w-[250px]"${_scopeId}><div class="text-right text-black text-[15px] leading-[18px] font-normal"${_scopeId}>\u062A\u0646\u0638\u06CC\u0645 \u0642\u06CC\u0645\u062A</div><div class="w-full flex flex-col items-start justify-start mt-[28px]"${_scopeId}><div class="w-full flex flex-row justify-end items-center relative border border-[#A9A7A7] focus:outline-[#A9A7A7] rounded-[10px]"${_scopeId}><span class="absolute top-[-12px] right-[12px] z-10 bg-white text-center text-black text-[14px] leading-[21px] font-medium px-[10px]"${_scopeId}>\u0642\u06CC\u0645\u062A</span><input placeholder="20,000,000"${ssrRenderAttr("value", unref(formattedPrice))} type="text" class="text-[16px] leading-[19px] w-full pl-[42px] outline-none focus:outline-none text-left dir-ltr py-[12px] px-[8px] rounded-[10px]"${_scopeId}><span class="absolute left-[2px] top-[10px] text-[16px] leading-[19px]"${_scopeId}>\u062A\u0648\u0645\u0627\u0646</span></div>`);
            if (unref(showDiscountPrice)) {
              _push2(`<div class="mt-[27px] w-full flex flex-row justify-end items-center relative border border-[#A9A7A7] focus:outline-[#A9A7A7] rounded-[10px]"${_scopeId}><span class="absolute top-[-12px] right-[12px] z-10 bg-white text-center text-black text-[14px] leading-[21px] font-medium px-[10px]"${_scopeId}>\u0642\u06CC\u0645\u062A \u0628\u0627 \u062A\u062E\u0641\u06CC\u0641</span><input placeholder="20,000,000"${ssrRenderAttr("value", unref(formattedDiscountPrice))} type="text" class="text-[16px] leading-[19px] w-full pl-[42px] outline-none focus:outline-none text-left dir-ltr py-[12px] px-[8px] rounded-[10px]"${_scopeId}><span class="absolute left-[2px] top-[10px] text-[16px] leading-[19px]"${_scopeId}>\u062A\u0648\u0645\u0627\u0646</span></div>`);
            } else {
              _push2(`<div class="mt-[27px] w-full cursor-pointer text-[#2920D9] text-[14px] leading-[16px] font-normal mr-[5px]"${_scopeId}>\u0642\u06CC\u0645\u062A \u0628\u0627 \u062A\u062E\u0641\u06CC\u0641</div>`);
            }
            _push2(`</div><div class="w-full flex flex-row justify-end items-center mt-[20px] gap-[8px] grow text-[14px] leading-[21px] font-medium text-[#133C3E]"${_scopeId}><span${_scopeId}>\u0630\u062E\u06CC\u0631\u0647</span><span${_scopeId}>\u0628\u0633\u062A\u0646</span></div></div>`);
          } else {
            return [
              createVNode("div", { class: "w-full flex flex-col justify-start items-start max-w-[340px] min-w-[250px]" }, [
                createVNode("div", { class: "text-right text-black text-[15px] leading-[18px] font-normal" }, "\u062A\u0646\u0638\u06CC\u0645 \u0642\u06CC\u0645\u062A"),
                createVNode("div", { class: "w-full flex flex-col items-start justify-start mt-[28px]" }, [
                  createVNode("div", { class: "w-full flex flex-row justify-end items-center relative border border-[#A9A7A7] focus:outline-[#A9A7A7] rounded-[10px]" }, [
                    createVNode("span", { class: "absolute top-[-12px] right-[12px] z-10 bg-white text-center text-black text-[14px] leading-[21px] font-medium px-[10px]" }, "\u0642\u06CC\u0645\u062A"),
                    createVNode("input", {
                      placeholder: "20,000,000",
                      value: unref(formattedPrice),
                      onInput: onPriceInput,
                      type: "text",
                      class: "text-[16px] leading-[19px] w-full pl-[42px] outline-none focus:outline-none text-left dir-ltr py-[12px] px-[8px] rounded-[10px]"
                    }, null, 40, ["value"]),
                    createVNode("span", { class: "absolute left-[2px] top-[10px] text-[16px] leading-[19px]" }, "\u062A\u0648\u0645\u0627\u0646")
                  ]),
                  unref(showDiscountPrice) ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "mt-[27px] w-full flex flex-row justify-end items-center relative border border-[#A9A7A7] focus:outline-[#A9A7A7] rounded-[10px]"
                  }, [
                    createVNode("span", { class: "absolute top-[-12px] right-[12px] z-10 bg-white text-center text-black text-[14px] leading-[21px] font-medium px-[10px]" }, "\u0642\u06CC\u0645\u062A \u0628\u0627 \u062A\u062E\u0641\u06CC\u0641"),
                    createVNode("input", {
                      placeholder: "20,000,000",
                      value: unref(formattedDiscountPrice),
                      onInput: onDiscountPriceInput,
                      type: "text",
                      class: "text-[16px] leading-[19px] w-full pl-[42px] outline-none focus:outline-none text-left dir-ltr py-[12px] px-[8px] rounded-[10px]"
                    }, null, 40, ["value"]),
                    createVNode("span", { class: "absolute left-[2px] top-[10px] text-[16px] leading-[19px]" }, "\u062A\u0648\u0645\u0627\u0646")
                  ])) : (openBlock(), createBlock("div", {
                    key: 1,
                    onClick: openDiscountPrice,
                    class: "mt-[27px] w-full cursor-pointer text-[#2920D9] text-[14px] leading-[16px] font-normal mr-[5px]"
                  }, "\u0642\u06CC\u0645\u062A \u0628\u0627 \u062A\u062E\u0641\u06CC\u0641"))
                ]),
                createVNode("div", { class: "w-full flex flex-row justify-end items-center mt-[20px] gap-[8px] grow text-[14px] leading-[21px] font-medium text-[#133C3E]" }, [
                  createVNode("span", { onClick: saveModal }, "\u0630\u062E\u06CC\u0631\u0647"),
                  createVNode("span", { onClick: closeModal }, "\u0628\u0633\u062A\u0646")
                ])
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/input/ChoosePriceInput.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ChooseCallNumberInput",
  __ssrInlineRender: true,
  props: {
    hasTel: {
      type: Boolean,
      default: false
    },
    hasPhoneNumber: {
      type: Boolean,
      default: false
    },
    secondPhoneNumber: {
      type: String,
      default: ""
    }
  },
  emits: ["update:hasTel", "update:hasPhoneNumber", "update:secondPhoneNumber"],
  setup(__props, { emit: __emit }) {
    const emits = __emit;
    const props = __props;
    const showModal = ref(false);
    const hasTel = ref(props.hasTel);
    const hasPhoneNumber = ref(props.hasPhoneNumber);
    const showSecondPhoneNumber = ref(props.secondPhoneNumber != "");
    const secondPhoneNumber = ref(props.secondPhoneNumber);
    const auth = useAuthStore();
    const user = ref(auth.user);
    const closeModal = () => {
      hasTel.value = props.hasTel;
      hasPhoneNumber.value = props.hasPhoneNumber;
      showSecondPhoneNumber.value = props.secondPhoneNumber != "";
      secondPhoneNumber.value = props.secondPhoneNumber;
      showModal.value = false;
    };
    const openSecondPhoneNumber = () => {
      showSecondPhoneNumber.value = true;
    };
    const closeSecondPhoneNumber = () => {
      secondPhoneNumber.value = "";
      showSecondPhoneNumber.value = false;
    };
    const saveModal = () => {
      emits("update:hasTel", hasTel.value);
      emits("update:hasPhoneNumber", hasPhoneNumber.value);
      if (hasTel.value || hasPhoneNumber.value) {
        secondPhoneNumber.value = "";
      }
      emits("update:secondPhoneNumber", secondPhoneNumber.value);
      setTimeout(() => {
        closeModal();
      }, 300);
    };
    const getPhoneNumber = computed(() => {
      var _a, _b;
      if (props.secondPhoneNumber) {
        return props.secondPhoneNumber;
      }
      if (props.hasTel) {
        return (_a = user.value) == null ? void 0 : _a.tel_number;
      }
      if (props.hasPhoneNumber) {
        return (_b = user.value) == null ? void 0 : _b.phone_number;
      }
    });
    const setValues = () => {
      hasTel.value = props.hasTel;
      hasPhoneNumber.value = props.hasPhoneNumber;
      secondPhoneNumber.value = props.secondPhoneNumber;
      showSecondPhoneNumber.value = props.secondPhoneNumber != "";
    };
    watch(() => props.hasTel, () => setValues());
    watch(() => props.hasPhoneNumber, () => setValues());
    watch(() => props.secondPhoneNumber, () => setValues());
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Modal = _sfc_main$7;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "cursor-pointer w-full px-[14px] py-[20px] border-b border-b-[#A9A7A7] flex flex-row justify-between items-center" }, _attrs))}><div class="w-full h-full flex flex-row justify-between items-center"><span class="text-black text-right font-medium text-[16px] leading-[21px]"> \u0634\u0645\u0627\u0631\u0647 \u062A\u0645\u0627\u0633 \u0631\u0632\u0631\u0648 \u0646\u0648\u0628\u062A </span><span class="w-[120px] text-ellipsis text-left overflow-hidden text-[#A9A7A7] font-light text-[16px] leading-[19px]">${ssrInterpolate(unref(getPhoneNumber))}</span></div>`);
      _push(ssrRenderComponent(_component_Modal, {
        "show-close": false,
        open: unref(showModal)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col justify-start items-start max-w-[340px] min-w-[250px]"${_scopeId}><div class="text-right text-black text-[15px] leading-[18px] font-normal"${_scopeId}>\u062A\u0646\u0638\u06CC\u0645 \u0634\u0645\u0627\u0631\u0647</div><div class="flex flex-row justify-start items-center mt-[18px]"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$6, {
              modelValue: unref(hasTel),
              "onUpdate:modelValue": ($event) => isRef(hasTel) ? hasTel.value = $event : null
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-black text-[16px] leading-[19px] font-normal mr-[5px]"${_scopeId}>\u062A\u0644\u0641\u0646 \u062B\u0627\u0628\u062A</span></div><div class="flex flex-row justify-start items-center mt-[14px]"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$6, {
              modelValue: unref(hasPhoneNumber),
              "onUpdate:modelValue": ($event) => isRef(hasPhoneNumber) ? hasPhoneNumber.value = $event : null
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-black text-[16px] leading-[19px] font-normal mr-[5px]"${_scopeId}>\u0634\u0645\u0627\u0631\u0647 \u0645\u0648\u0628\u0627\u06CC\u0644</span></div>`);
            if (!(unref(hasTel) || unref(hasPhoneNumber))) {
              _push2(`<div class="${ssrRenderClass([[unref(showSecondPhoneNumber) ? "justify-end" : "justify-start"], "flex flex-row items-center mt-[28px]"])}"${_scopeId}>`);
              if (unref(showSecondPhoneNumber)) {
                _push2(`<div class="w-full flex flex-row justify-end items-center relative"${_scopeId}><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M1.4 14L0 12.6L5.6 7L0 1.4L1.4 0L7 5.6L12.6 0L14 1.4L8.4 7L14 12.6L12.6 14L7 8.4L1.4 14Z" fill="#141414"${_scopeId}></path></svg><input placeholder="09381412419"${ssrRenderAttr("value", unref(secondPhoneNumber))} type="tel" class="mr-[5px] w-full text-left dir-ltr border border-[#A9A7A7] focus:outline-[#A9A7A7] py-[12px] px-[8px] rounded-[10px]"${_scopeId}></div>`);
              } else {
                _push2(`<div class="w-full cursor-pointer text-[#2920D9] text-[14px] leading-[16px] font-normal mr-[5px]"${_scopeId}>\u0634\u0645\u0627\u0631\u0647 \u062F\u06CC\u06AF\u0631</div>`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="w-full flex flex-row justify-end items-center mt-[20px] gap-[8px] grow text-[14px] leading-[21px] font-medium text-[#133C3E]"${_scopeId}><span${_scopeId}>\u0630\u062E\u06CC\u0631\u0647</span><span${_scopeId}>\u0628\u0633\u062A\u0646</span></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col justify-start items-start max-w-[340px] min-w-[250px]" }, [
                createVNode("div", { class: "text-right text-black text-[15px] leading-[18px] font-normal" }, "\u062A\u0646\u0638\u06CC\u0645 \u0634\u0645\u0627\u0631\u0647"),
                createVNode("div", { class: "flex flex-row justify-start items-center mt-[18px]" }, [
                  createVNode(_sfc_main$6, {
                    modelValue: unref(hasTel),
                    "onUpdate:modelValue": ($event) => isRef(hasTel) ? hasTel.value = $event : null
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode("span", { class: "text-black text-[16px] leading-[19px] font-normal mr-[5px]" }, "\u062A\u0644\u0641\u0646 \u062B\u0627\u0628\u062A")
                ]),
                createVNode("div", { class: "flex flex-row justify-start items-center mt-[14px]" }, [
                  createVNode(_sfc_main$6, {
                    modelValue: unref(hasPhoneNumber),
                    "onUpdate:modelValue": ($event) => isRef(hasPhoneNumber) ? hasPhoneNumber.value = $event : null
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode("span", { class: "text-black text-[16px] leading-[19px] font-normal mr-[5px]" }, "\u0634\u0645\u0627\u0631\u0647 \u0645\u0648\u0628\u0627\u06CC\u0644")
                ]),
                !(unref(hasTel) || unref(hasPhoneNumber)) ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: ["flex flex-row items-center mt-[28px]", [unref(showSecondPhoneNumber) ? "justify-end" : "justify-start"]]
                }, [
                  unref(showSecondPhoneNumber) ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "w-full flex flex-row justify-end items-center relative"
                  }, [
                    (openBlock(), createBlock("svg", {
                      onClick: closeSecondPhoneNumber,
                      width: "14",
                      height: "14",
                      viewBox: "0 0 14 14",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg"
                    }, [
                      createVNode("path", {
                        d: "M1.4 14L0 12.6L5.6 7L0 1.4L1.4 0L7 5.6L12.6 0L14 1.4L8.4 7L14 12.6L12.6 14L7 8.4L1.4 14Z",
                        fill: "#141414"
                      })
                    ])),
                    withDirectives(createVNode("input", {
                      placeholder: "09381412419",
                      "onUpdate:modelValue": ($event) => isRef(secondPhoneNumber) ? secondPhoneNumber.value = $event : null,
                      type: "tel",
                      class: "mr-[5px] w-full text-left dir-ltr border border-[#A9A7A7] focus:outline-[#A9A7A7] py-[12px] px-[8px] rounded-[10px]"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, unref(secondPhoneNumber)]
                    ])
                  ])) : (openBlock(), createBlock("div", {
                    key: 1,
                    onClick: openSecondPhoneNumber,
                    class: "w-full cursor-pointer text-[#2920D9] text-[14px] leading-[16px] font-normal mr-[5px]"
                  }, "\u0634\u0645\u0627\u0631\u0647 \u062F\u06CC\u06AF\u0631"))
                ], 2)) : createCommentVNode("", true),
                createVNode("div", { class: "w-full flex flex-row justify-end items-center mt-[20px] gap-[8px] grow text-[14px] leading-[21px] font-medium text-[#133C3E]" }, [
                  createVNode("span", { onClick: saveModal }, "\u0630\u062E\u06CC\u0631\u0647"),
                  createVNode("span", { onClick: closeModal }, "\u0628\u0633\u062A\u0646")
                ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/input/ChooseCallNumberInput.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main$3 as _, _sfc_main$2 as a, _sfc_main as b, _sfc_main$1 as c };
//# sourceMappingURL=ChooseCallNumberInput-DmJIGwHa.mjs.map
