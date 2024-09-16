import { mergeProps, useSSRContext, defineComponent, ref, unref } from "vue";
import { u as useFetch } from "./fetch-C_QM8LGj.js";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { B as BackIcon } from "./BackIcon-nFKai1cn.js";
import { _ as _export_sfc } from "../server.mjs";
import { u as useDrawerStore } from "./Drawer-n5iGEtr0.js";
const _sfc_main$4 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full text-center text-[#141414] text-base font-medium" }, _attrs))}> نوتفیکیشن </div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/notification-drawer/Header.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const Header = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$3 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "30",
    height: "31",
    viewBox: "0 0 30 31",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M21.0006 12.1958C21.0006 13.8131 20.3685 15.3641 19.2433 16.5077C18.118 17.6513 16.5919 18.2937 15.0006 18.2937C13.4093 18.2937 11.8832 17.6513 10.758 16.5077C9.63275 15.3641 9.00061 13.8131 9.00061 12.1958C9.00061 10.5785 9.63275 9.02752 10.758 7.88394C11.8832 6.74036 13.4093 6.0979 15.0006 6.0979C16.5919 6.0979 18.118 6.74036 19.2433 7.88394C20.3685 9.02752 21.0006 10.5785 21.0006 12.1958Z" fill="#085EC2"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M14.388 30.4774C6.38775 30.1511 0 23.4556 0 15.2448C0 6.82509 6.7155 0 15 0C23.2845 0 30 6.82509 30 15.2448C30 23.6645 23.2845 30.4896 15 30.4896C14.9315 30.49 14.863 30.49 14.7945 30.4896C14.6587 30.4896 14.523 30.485 14.388 30.4774ZM5.3745 24.8642C5.26235 24.5369 5.22417 24.1881 5.26281 23.8437C5.30145 23.4994 5.4159 23.1683 5.59768 22.875C5.77946 22.5817 6.0239 22.3338 6.31284 22.1497C6.60179 21.9656 6.92782 21.85 7.26675 21.8115C13.1138 21.1537 16.9222 21.2131 22.7407 21.8252C23.0801 21.8611 23.407 21.9753 23.6964 22.159C23.9858 22.3427 24.2301 22.5911 24.4108 22.8852C24.5915 23.1794 24.7037 23.5116 24.739 23.8566C24.7742 24.2015 24.7316 24.55 24.6143 24.8757C27.108 22.3114 28.5045 18.8501 28.5 15.2448C28.5 7.66736 22.4557 1.52448 15 1.52448C7.54425 1.52448 1.5 7.66736 1.5 15.2448C1.5 18.992 2.97825 22.3885 5.3745 24.8642Z" fill="#085EC2"></path></svg>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/ProfileBlueIcon.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const ProfileBlueIcon = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "NotificationListItem",
  __ssrInlineRender: true,
  props: {
    notification: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full flex flex-row items-start justify-start mb-[15px]" }, _attrs))}>`);
      _push(ssrRenderComponent(ProfileBlueIcon, { class: "grow-0" }, null, _parent));
      _push(`<div class="w-full grow items-start justify-start mx-[12px]"><div class="font-semibold leading-[18px] text-[#141414]">${ssrInterpolate(__props.notification.title)}</div><div class="font-medium text-[8px] leading-[12px] text-[#141414] mt-[3px]">${ssrInterpolate(__props.notification.description)}</div></div><div class="text-[#400842] text-[10px] leading-[14px] font-light text-left whitespace-nowrap">${ssrInterpolate(__props.notification.created_at_ago_fa)}</div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/notification-drawer/NotificationListItem.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "NotificationList",
  __ssrInlineRender: true,
  props: {
    notifications: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full h-full" }, _attrs))}><!--[-->`);
      ssrRenderList(__props.notifications, (n, i) => {
        _push(ssrRenderComponent(_sfc_main$2, {
          key: i,
          notification: n
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/notification-drawer/NotificationList.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "NotificationDrawer",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useDrawerStore();
    const notifications = ref([]);
    const getNotifications = async () => {
      const { data } = await useFetch("/api/notifications", "$yczhw8cRwm");
      notifications.value = data.value;
    };
    const goBack = () => {
      store.closeAllDrawers();
    };
    getNotifications();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["flex flex-col fixed md:hide top-0 bottom-0 px-[17px] overflow-y-scroll w-full duration-700 ease-in-out bg-white z-[99999999]", [unref(store).isOpenNotification ? "left-0" : "left-[-100%]"]]
      }, _attrs))}><div class="flex flex-row items-center justify-end pt-[23px] pl-[3px]">`);
      _push(ssrRenderComponent(Header, null, null, _parent));
      _push(ssrRenderComponent(BackIcon, { onClick: goBack }, null, _parent));
      _push(`</div><div class="flex flex-col justify-start items-start overflow-y-scroll py-4">`);
      _push(ssrRenderComponent(_sfc_main$1, { notifications: unref(notifications) }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/drawer/NotificationDrawer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=NotificationDrawer-d5Wh0ovI.js.map
