import { mergeProps, useSSRContext, defineComponent } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import { u as useDayjs } from "./dayjs-DjHdTGjd.js";
import "dayjs/locale/fa.js";
import localizedFormat from "dayjs/plugin/localizedFormat.js";
import jalaliday from "jalaliday";
const _sfc_main$9 = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "22",
    height: "22",
    viewBox: "0 0 22 22",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M2.75 10.0833V2.75H10.0833V10.0833H2.75ZM4.58333 8.25H8.25V4.58333H4.58333V8.25ZM2.75 19.25V11.9167H10.0833V19.25H2.75ZM4.58333 17.4167H8.25V13.75H4.58333V17.4167ZM11.9167 10.0833V2.75H19.25V10.0833H11.9167ZM13.75 8.25H17.4167V4.58333H13.75V8.25ZM17.4167 19.25V17.4167H19.25V19.25H17.4167ZM11.9167 13.75V11.9167H13.75V13.75H11.9167ZM13.75 15.5833V13.75H15.5833V15.5833H13.75ZM11.9167 17.4167V15.5833H13.75V17.4167H11.9167ZM13.75 19.25V17.4167H15.5833V19.25H13.75ZM15.5833 17.4167V15.5833H17.4167V17.4167H15.5833ZM15.5833 13.75V11.9167H17.4167V13.75H15.5833ZM17.4167 15.5833V13.75H19.25V15.5833H17.4167Z" fill="#141414"></path></svg>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/TicketIDIcon.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const TicketIDIcon = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$8 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M10.875 13.5C10.35 13.5 9.90625 13.3188 9.54375 12.9563C9.18125 12.5938 9 12.15 9 11.625C9 11.1 9.18125 10.6562 9.54375 10.2938C9.90625 9.93125 10.35 9.75 10.875 9.75C11.4 9.75 11.8438 9.93125 12.2063 10.2938C12.5688 10.6562 12.75 11.1 12.75 11.625C12.75 12.15 12.5688 12.5938 12.2063 12.9563C11.8438 13.3188 11.4 13.5 10.875 13.5ZM3.75 16.5C3.3375 16.5 2.98438 16.3531 2.69063 16.0594C2.39687 15.7656 2.25 15.4125 2.25 15V4.5C2.25 4.0875 2.39687 3.73438 2.69063 3.44063C2.98438 3.14688 3.3375 3 3.75 3H4.5V1.5H6V3H12V1.5H13.5V3H14.25C14.6625 3 15.0156 3.14688 15.3094 3.44063C15.6031 3.73438 15.75 4.0875 15.75 4.5V15C15.75 15.4125 15.6031 15.7656 15.3094 16.0594C15.0156 16.3531 14.6625 16.5 14.25 16.5H3.75ZM3.75 15H14.25V7.5H3.75V15ZM3.75 6H14.25V4.5H3.75V6Z" fill="#141414"></path></svg>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/TicketDateIcon.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const TicketDateIcon = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$7 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M11.475 12.525L12.525 11.475L9.75 8.7V5.25H8.25V9.3L11.475 12.525ZM9 16.5C7.9625 16.5 6.9875 16.3031 6.075 15.9094C5.1625 15.5156 4.36875 14.9812 3.69375 14.3062C3.01875 13.6312 2.48437 12.8375 2.09062 11.925C1.69687 11.0125 1.5 10.0375 1.5 9C1.5 7.9625 1.69687 6.9875 2.09062 6.075C2.48437 5.1625 3.01875 4.36875 3.69375 3.69375C4.36875 3.01875 5.1625 2.48437 6.075 2.09062C6.9875 1.69687 7.9625 1.5 9 1.5C10.0375 1.5 11.0125 1.69687 11.925 2.09062C12.8375 2.48437 13.6312 3.01875 14.3062 3.69375C14.9812 4.36875 15.5156 5.1625 15.9094 6.075C16.3031 6.9875 16.5 7.9625 16.5 9C16.5 10.0375 16.3031 11.0125 15.9094 11.925C15.5156 12.8375 14.9812 13.6312 14.3062 14.3062C13.6312 14.9812 12.8375 15.5156 11.925 15.9094C11.0125 16.3031 10.0375 16.5 9 16.5ZM9 15C10.6625 15 12.0781 14.4156 13.2469 13.2469C14.4156 12.0781 15 10.6625 15 9C15 7.3375 14.4156 5.92187 13.2469 4.75312C12.0781 3.58437 10.6625 3 9 3C7.3375 3 5.92187 3.58437 4.75312 4.75312C3.58437 5.92187 3 7.3375 3 9C3 10.6625 3.58437 12.0781 4.75312 13.2469C5.92187 14.4156 7.3375 15 9 15Z" fill="#141414"></path></svg>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/TicketTimeIcon.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const TicketTimeIcon = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "TicketItemHeader",
  __ssrInlineRender: true,
  props: {
    id: {
      type: Number,
      required: true
    },
    createdAt: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    const dayjs = useDayjs();
    dayjs.locale("fa");
    dayjs.extend(localizedFormat);
    dayjs.extend(jalaliday);
    const props = __props;
    const getDate = () => {
      return dayjs(props.createdAt).calendar("jalali").locale("fa").format("YYYY-MM-DD");
    };
    const getTime = () => {
      return dayjs(props.createdAt).calendar("jalali").locale("fa").format("HH:mm:ss");
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-[14px] py-[14px] font-medium text-[#141414] rounded-t-[20px] bg-[#F7F5C4] flex flex-row justify-between items-start w-full" }, _attrs))}><div class="flex flex-row justify-start items-center text-[12px] leading-[18px]">`);
      _push(ssrRenderComponent(TicketIDIcon, null, null, _parent));
      _push(`<span>شناسه:</span><span>${ssrInterpolate(__props.id)}</span></div><div class="flex flex-row justify-env items-center text-[12px] leading-[16px]"><div class="flex flex-row justify-start items-center">`);
      _push(ssrRenderComponent(TicketDateIcon, null, null, _parent));
      _push(`<span>${ssrInterpolate(getDate())}</span></div><div class="flex flex-row justify-start items-center">`);
      _push(ssrRenderComponent(TicketTimeIcon, null, null, _parent));
      _push(`<span>${ssrInterpolate(getTime())}</span></div></div></div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/support/TicketItemHeader.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "TicketItemContent",
  __ssrInlineRender: true,
  props: {
    status: {
      type: String,
      required: true
    },
    subject: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const getStatusIsOpen = () => {
      switch (props.status) {
        case "created":
        case "open":
        case "answered":
          return true;
        default:
          return false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["font-semibold text-lg text-center px-[17px] py-[17px] bg-[#FDF4FF] flex flex-col justify-center items-center w-full", [getStatusIsOpen ? "text-[#157F3D]" : "text-[#F44336]"]]
      }, _attrs))}>${ssrInterpolate(__props.subject.title)}</div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/support/TicketItemContent.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M3 21V7H7V3H17V11H21V21H13V17H11V21H3ZM5 19H7V17H5V19ZM5 15H7V13H5V15ZM5 11H7V9H5V11ZM9 15H11V13H9V15ZM9 11H11V9H9V11ZM9 7H11V5H9V7ZM13 15H15V13H13V15ZM13 11H15V9H13V11ZM13 7H15V5H13V7ZM17 19H19V17H17V19ZM17 15H19V13H17V15Z" fill="#141414"></path></svg>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/TicketReportIcon.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const TicketReportIcon = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M6 8H15V6C15 5.16667 14.7083 4.45833 14.125 3.875C13.5417 3.29167 12.8333 3 12 3C11.1667 3 10.4583 3.29167 9.875 3.875C9.29167 4.45833 9 5.16667 9 6H7C7 4.61667 7.4875 3.4375 8.4625 2.4625C9.4375 1.4875 10.6167 1 12 1C13.3833 1 14.5625 1.4875 15.5375 2.4625C16.5125 3.4375 17 4.61667 17 6V8H18C18.55 8 19.0208 8.19583 19.4125 8.5875C19.8042 8.97917 20 9.45 20 10V20C20 20.55 19.8042 21.0208 19.4125 21.4125C19.0208 21.8042 18.55 22 18 22H6C5.45 22 4.97917 21.8042 4.5875 21.4125C4.19583 21.0208 4 20.55 4 20V10C4 9.45 4.19583 8.97917 4.5875 8.5875C4.97917 8.19583 5.45 8 6 8ZM6 20H18V10H6V20ZM12 17C12.55 17 13.0208 16.8042 13.4125 16.4125C13.8042 16.0208 14 15.55 14 15C14 14.45 13.8042 13.9792 13.4125 13.5875C13.0208 13.1958 12.55 13 12 13C11.45 13 10.9792 13.1958 10.5875 13.5875C10.1958 13.9792 10 14.45 10 15C10 15.55 10.1958 16.0208 10.5875 16.4125C10.9792 16.8042 11.45 17 12 17Z" fill="#157F3D"></path></svg>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/TicketOpenGreenIcon.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const TicketOpenGreenIcon = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M6 22C5.45 22 4.97917 21.8042 4.5875 21.4125C4.19583 21.0208 4 20.55 4 20V10C4 9.45 4.19583 8.97917 4.5875 8.5875C4.97917 8.19583 5.45 8 6 8H7V6C7 4.61667 7.4875 3.4375 8.4625 2.4625C9.4375 1.4875 10.6167 1 12 1C13.3833 1 14.5625 1.4875 15.5375 2.4625C16.5125 3.4375 17 4.61667 17 6V8H18C18.55 8 19.0208 8.19583 19.4125 8.5875C19.8042 8.97917 20 9.45 20 10V20C20 20.55 19.8042 21.0208 19.4125 21.4125C19.0208 21.8042 18.55 22 18 22H6ZM6 20H18V10H6V20ZM12 17C12.55 17 13.0208 16.8042 13.4125 16.4125C13.8042 16.0208 14 15.55 14 15C14 14.45 13.8042 13.9792 13.4125 13.5875C13.0208 13.1958 12.55 13 12 13C11.45 13 10.9792 13.1958 10.5875 13.5875C10.1958 13.9792 10 14.45 10 15C10 15.55 10.1958 16.0208 10.5875 16.4125C10.9792 16.8042 11.45 17 12 17ZM9 8H15V6C15 5.16667 14.7083 4.45833 14.125 3.875C13.5417 3.29167 12.8333 3 12 3C11.1667 3 10.4583 3.29167 9.875 3.875C9.29167 4.45833 9 5.16667 9 6V8Z" fill="#F44336"></path></svg>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/TicketCloseRedIcon.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const TicketCloseRedIcon = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TicketItemFooter",
  __ssrInlineRender: true,
  props: {
    status: {
      type: String,
      required: true
    },
    subject: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const getStatusFa = () => {
      switch (props.status) {
        case "created":
        case "open":
        case "answered":
          return "باز است";
        default:
          return "بسته شده";
      }
    };
    const getStatusIsOpen = () => {
      switch (props.status) {
        case "created":
        case "open":
        case "answered":
          return true;
        default:
          return false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-[14px] py-[14px] rounded-b-[20px] bg-[#F7F5C4] flex flex-row justify-between items-start w-full" }, _attrs))}><div class="flex flex-row justify-start items-center text-[15px] leading-[24px]">`);
      if (getStatusIsOpen()) {
        _push(ssrRenderComponent(TicketOpenGreenIcon, null, null, _parent));
      } else {
        _push(ssrRenderComponent(TicketCloseRedIcon, null, null, _parent));
      }
      _push(`<span class="${ssrRenderClass([getStatusIsOpen ? "text-[#157F3D]" : "text-[#F44336]"])}">${ssrInterpolate(getStatusFa())}</span></div><div class="flex flex-row justify-start items-center text-[12px] leading-[18px]"><span>${ssrInterpolate(__props.subject.title)}</span>`);
      _push(ssrRenderComponent(TicketReportIcon, null, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/support/TicketItemFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TicketItem",
  __ssrInlineRender: true,
  props: {
    ticket: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mb-[30px] border border-[#A9A7A7] rounded-[20px] bg-[#FDF4FF] flex flex-col justify-start items-start w-full" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$6, {
        id: __props.ticket.id,
        "created-at": __props.ticket.created_at
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$5, {
        status: __props.ticket.status,
        subject: __props.ticket.subject
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, {
        status: __props.ticket.status,
        subject: __props.ticket.subject
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/support/TicketItem.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=TicketItem-D03jFzOc.js.map