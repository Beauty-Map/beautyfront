import { b as useRouter, _ as _export_sfc } from './server.mjs';
import { useSSRContext, defineComponent, ref, mergeProps, unref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, withModifiers, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { E as ErrorRedIcon } from './ErrorRedIcon-Bdl6jb2D.mjs';
import { u as useCustomFetch } from './useCustomFetch-7ynZLwB1.mjs';
import { C as CloseIcon } from './CloseIcon-BBY6iLOC.mjs';
import { debounce } from 'lodash-es';
import { A as AddTicketIcon } from './AddTicketIcon-CWd69ElK.mjs';

const _sfc_main$8 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M3 21V7H7V3H17V11H21V21H13V17H11V21H3ZM5 19H7V17H5V19ZM5 15H7V13H5V15ZM5 11H7V9H5V11ZM9 15H11V13H9V15ZM9 11H11V9H9V11ZM9 7H11V5H9V7ZM13 15H15V13H13V15ZM13 11H15V9H13V11ZM13 7H15V5H13V7ZM17 19H19V17H17V19ZM17 15H19V13H17V15Z" fill="#133C3E"></path></svg>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/TicketSubjectIcon.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const TicketSubjectIcon = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "SubjectModal",
  __ssrInlineRender: true,
  props: {
    open: {
      type: Boolean,
      default: false
    }
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const emits = __emit;
    const closeModal = () => {
      emits("close");
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["bg-[rgba(0,0,0,.4)] duration-500 transition-all fixed top-0 right-0 bottom-0 left-0 flex flex-col justify-center items-center z-[9999]", [__props.open ? "flex" : "hidden"]]
      }, _attrs))}><div class="bg-white mx-[20px] max-h-[70%] relative rounded-[12px] min-w-[200px] min-h-[150px] shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">`);
      _push(ssrRenderComponent(CloseIcon, {
        onClick: closeModal,
        class: "absolute top-[14px] right-[14px]"
      }, null, _parent));
      _push(`<div class="bg-[#133C3E] text-white font-semibold text-[14px] leading-[21px] rounded-t-[12px] h-[60px] flex flex-row justify-center items-center"><span>\u0627\u0646\u062A\u062E\u0627\u0628 \u0645\u0648\u0635\u0648\u0639</span></div>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/modal/SubjectModal.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "ChooseTicketSubjectInput",
  __ssrInlineRender: true,
  props: {
    modelValue: {
      type: Object,
      default: ""
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const emits = __emit;
    const props = __props;
    const subject = ref(props.modelValue);
    const errorText = ref("");
    const hasError = ref(false);
    const showChooseSubject = ref(false);
    const subjects = ref([]);
    const getSubjects = async () => {
      var _a;
      const res = await useCustomFetch("/subjects", {
        method: "get"
      });
      if (res.data.value) {
        subjects.value = (_a = res.data.value) == null ? void 0 : _a.data;
      }
    };
    const closeChooseSubjectModal = () => {
      showChooseSubject.value = false;
    };
    const chooseSubject = (s) => {
      subject.value = s;
      emits("update:modelValue", s);
      closeChooseSubjectModal();
    };
    getSubjects();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-start justify-start w-full" }, _attrs))}><div class="w-full text-[#133C3E] rounded-[12px] font-medium text-[15px] text-right leading-[23px] border border-[#A9A7A7] bg-[#F7F5C4] py-[20px] px-[20px] cursor-pointer flex flex-row justify-start items-center">`);
      _push(ssrRenderComponent(TicketSubjectIcon, null, null, _parent));
      _push(`<div class="flex flex-row grow mr-[10px]">`);
      if (unref(subject)) {
        _push(`<span>${ssrInterpolate(unref(subject).title)}</span>`);
      } else {
        _push(`<span>\u0627\u0646\u062A\u062E\u0627\u0628 \u0645\u0648\u0636\u0648\u0639</span>`);
      }
      _push(`</div></div>`);
      if (unref(hasError)) {
        _push(`<div class="w-full flex flex-row justify-start items-center">`);
        _push(ssrRenderComponent(ErrorRedIcon, null, null, _parent));
        _push(`<span class="mr-1 text-[#F44336] text-[10px] leading-[12px]">${ssrInterpolate(unref(errorText))}</span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_sfc_main$7, {
        open: unref(showChooseSubject),
        onClose: closeChooseSubjectModal
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full h-full min-h-[293px] justify-center items-start gap-x-[5px] gap-y-[5px] px-[28px] py-[28px] flex flex-row flex-wrap"${_scopeId}><!--[-->`);
            ssrRenderList(unref(subjects), (s, i) => {
              _push2(`<div class="min-h-[45px] flex justify-center items-center border border-[#133C3E] text-[#133C3E] font-medium text-[12px] leading-[18px] text-center bg-[#F7F5C4] w-[125px] py-[8px] px-[16px] rounded-[10px]"${_scopeId}>${ssrInterpolate(s.title)}</div>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "w-full h-full min-h-[293px] justify-center items-start gap-x-[5px] gap-y-[5px] px-[28px] py-[28px] flex flex-row flex-wrap" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(subjects), (s, i) => {
                  return openBlock(), createBlock("div", {
                    onClick: withModifiers(($event) => chooseSubject(s), ["stop"]),
                    class: "min-h-[45px] flex justify-center items-center border border-[#133C3E] text-[#133C3E] font-medium text-[12px] leading-[18px] text-center bg-[#F7F5C4] w-[125px] py-[8px] px-[16px] rounded-[10px]",
                    key: i
                  }, toDisplayString(s.title), 9, ["onClick"]);
                }), 128))
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
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/input/ChooseTicketSubjectInput.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M8 11C8.28333 11 8.52083 10.9042 8.7125 10.7125C8.90417 10.5208 9 10.2833 9 10C9 9.71667 8.90417 9.47917 8.7125 9.2875C8.52083 9.09583 8.28333 9 8 9C7.71667 9 7.47917 9.09583 7.2875 9.2875C7.09583 9.47917 7 9.71667 7 10C7 10.2833 7.09583 10.5208 7.2875 10.7125C7.47917 10.9042 7.71667 11 8 11ZM12 11C12.2833 11 12.5208 10.9042 12.7125 10.7125C12.9042 10.5208 13 10.2833 13 10C13 9.71667 12.9042 9.47917 12.7125 9.2875C12.5208 9.09583 12.2833 9 12 9C11.7167 9 11.4792 9.09583 11.2875 9.2875C11.0958 9.47917 11 9.71667 11 10C11 10.2833 11.0958 10.5208 11.2875 10.7125C11.4792 10.9042 11.7167 11 12 11ZM16 11C16.2833 11 16.5208 10.9042 16.7125 10.7125C16.9042 10.5208 17 10.2833 17 10C17 9.71667 16.9042 9.47917 16.7125 9.2875C16.5208 9.09583 16.2833 9 16 9C15.7167 9 15.4792 9.09583 15.2875 9.2875C15.0958 9.47917 15 9.71667 15 10C15 10.2833 15.0958 10.5208 15.2875 10.7125C15.4792 10.9042 15.7167 11 16 11ZM2 22V4C2 3.45 2.19583 2.97917 2.5875 2.5875C2.97917 2.19583 3.45 2 4 2H20C20.55 2 21.0208 2.19583 21.4125 2.5875C21.8042 2.97917 22 3.45 22 4V16C22 16.55 21.8042 17.0208 21.4125 17.4125C21.0208 17.8042 20.55 18 20 18H6L2 22ZM5.15 16H20V4H4V17.125L5.15 16Z" fill="#133C3E"></path></svg>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/TicketTitleIcon.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const TicketTitleIcon = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "TicketTitleInput",
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
    const value = ref(props.modelValue);
    const errorText = ref("");
    const hasError = ref(false);
    const updateText = ($event) => {
      var _a;
      emits("update:modelValue", (_a = $event.target) == null ? void 0 : _a.value);
    };
    debounce(updateText, 500);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-start justify-start w-full" }, _attrs))}><div class="w-full text-[#133C3E] rounded-[12px] font-medium text-[15px] text-right leading-[23px] border border-[#A9A7A7] bg-[#F7F5C4] py-[20px] px-[20px] cursor-pointer flex flex-row justify-start items-center">`);
      _push(ssrRenderComponent(TicketTitleIcon, null, null, _parent));
      _push(`<div class="flex flex-row grow mr-[10px]"><input type="text" class="text-right h-full bg-transparent w-full outline-none focus:outline-none placeholder:text-[#133C3E]"${ssrRenderAttr("value", unref(value))} placeholder="\u0639\u0646\u0648\u0627\u0646"></div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/input/TicketTitleInput.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "TicketDescriptionInput",
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
    const value = ref(props.modelValue);
    const errorText = ref("");
    const hasError = ref(false);
    const updateText = ($event) => {
      var _a;
      emits("update:modelValue", (_a = $event.target) == null ? void 0 : _a.value);
    };
    debounce(updateText, 500);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-start justify-start w-full" }, _attrs))}><div class="w-full text-[#133C3E] rounded-[12px] font-medium text-[15px] text-right leading-[23px] border border-[#A9A7A7] bg-[#F7F5C4] py-[20px] px-[20px] cursor-pointer flex flex-row justify-start items-start">`);
      _push(ssrRenderComponent(TicketTitleIcon, null, null, _parent));
      _push(`<div class="flex flex-row grow mr-[10px]"><textarea type="text" class="text-right h-full bg-transparent w-full outline-none focus:outline-none placeholder:text-[#133C3E]" placeholder="\u062A\u0648\u0636\u06CC\u062D\u0627\u062A" rows="5">${ssrInterpolate(unref(value))}</textarea></div></div>`);
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/input/TicketDescriptionInput.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M6.5 20C4.98333 20 3.6875 19.475 2.6125 18.425C1.5375 17.375 1 16.0917 1 14.575C1 13.275 1.39167 12.1167 2.175 11.1C2.95833 10.0833 3.98333 9.43333 5.25 9.15C5.66667 7.61667 6.5 6.375 7.75 5.425C9 4.475 10.4167 4 12 4C13.95 4 15.6042 4.67917 16.9625 6.0375C18.3208 7.39583 19 9.05 19 11C20.15 11.1333 21.1042 11.6292 21.8625 12.4875C22.6208 13.3458 23 14.35 23 15.5C23 16.75 22.5625 17.8125 21.6875 18.6875C20.8125 19.5625 19.75 20 18.5 20H13C12.45 20 11.9792 19.8042 11.5875 19.4125C11.1958 19.0208 11 18.55 11 18V12.85L9.4 14.4L8 13L12 9L16 13L14.6 14.4L13 12.85V18H18.5C19.2 18 19.7917 17.7583 20.275 17.275C20.7583 16.7917 21 16.2 21 15.5C21 14.8 20.7583 14.2083 20.275 13.725C19.7917 13.2417 19.2 13 18.5 13H17V11C17 9.61667 16.5125 8.4375 15.5375 7.4625C14.5625 6.4875 13.3833 6 12 6C10.6167 6 9.4375 6.4875 8.4625 7.4625C7.4875 8.4375 7 9.61667 7 11H6.5C5.53333 11 4.70833 11.3417 4.025 12.025C3.34167 12.7083 3 13.5333 3 14.5C3 15.4667 3.34167 16.2917 4.025 16.975C4.70833 17.6583 5.53333 18 6.5 18H9V20H6.5Z" fill="#0E391D"></path></svg>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/TicketFileIcon.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const TicketFileIcon = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TicketChooseFile",
  __ssrInlineRender: true,
  emits: ["choose"],
  setup(__props, { emit: __emit }) {
    const errorText = ref("");
    const hasError = ref(false);
    ref();
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "cursor-pointer flex flex-col items-start justify-start max-w-[200px] mx-auto" }, _attrs))}><div class="text-[#133C3E] rounded-[25px] font-medium text-[15px] text-center leading-[23px] border border-[#A9A7A7] bg-[#F7F5C4] py-[8px] px-[12px] cursor-pointer flex flex-row justify-start items-center">`);
      _push(ssrRenderComponent(TicketFileIcon, null, null, _parent));
      _push(`<span>\u0641\u0627\u06CC\u0644 \u067E\u06CC\u0648\u0633\u062A (\u0627\u062E\u062A\u06CC\u0627\u0631\u06CC)</span></div>`);
      if (unref(hasError)) {
        _push(`<div class="w-full flex flex-row justify-start items-center">`);
        _push(ssrRenderComponent(ErrorRedIcon, null, null, _parent));
        _push(`<span class="mr-1 text-[#F44336] text-[10px] leading-[12px]">${ssrInterpolate(unref(errorText))}</span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<input accept="application/pdf,image/jpeg,image/png" hidden type="file"></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/input/TicketChooseFile.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CreateTicketForm",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const form = ref({
      subject: null,
      title: "",
      description: "",
      new_file: ""
    });
    ref({
      subject: "",
      title: "",
      description: ""
    });
    const chooseFile = (file) => {
      form.value.new_file = file;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$6, {
        class: "mb-[20px]",
        modelValue: unref(form).subject,
        "onUpdate:modelValue": ($event) => unref(form).subject = $event
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, {
        class: "mb-[20px]",
        modelValue: unref(form).title,
        "onUpdate:modelValue": ($event) => unref(form).title = $event
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        class: "mb-[20px]",
        modelValue: unref(form).description,
        "onUpdate:modelValue": ($event) => unref(form).description = $event
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, {
        class: "mb-[20px]",
        onChoose: chooseFile
      }, null, _parent));
      _push(`<div class="cursor-pointer flex flex-row items-center justify-center px-[10px] py-[10px] bg-[#FF3CA0] text-white text-[15px] leading-[22px] text-center font-medium rounded-[12px] h-[62px] w-full">`);
      _push(ssrRenderComponent(AddTicketIcon, null, null, _parent));
      _push(`<span class="mr-[4px] whitespace-nowrap">\u062B\u0628\u062A \u062A\u06CC\u06A9\u062A</span></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/support/CreateTicketForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=CreateTicketForm-CqdHy5Ii.mjs.map
