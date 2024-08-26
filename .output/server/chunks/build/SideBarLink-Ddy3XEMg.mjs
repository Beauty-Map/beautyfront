import { defineComponent, ref, mergeProps, unref, useSSRContext, computed } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
import { N as NotificationIcon } from './NotificationIcon-CjXTJqLF.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { e as useAuthStore, a as useRouter, b as useRoute } from './server.mjs';
import { u as useDrawerStore } from './Drawer-O-pqrFqT.mjs';

const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "24",
    height: "23",
    viewBox: "0 0 24 23",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M16.6894 9.19956C16.6894 10.4195 16.2125 11.5896 15.3637 12.4522C14.5149 13.3149 13.3637 13.7995 12.1633 13.7995C10.9629 13.7995 9.81167 13.3149 8.96287 12.4522C8.11406 11.5896 7.63721 10.4195 7.63721 9.19956C7.63721 7.97958 8.11406 6.80956 8.96287 5.9469C9.81167 5.08425 10.9629 4.59961 12.1633 4.59961C13.3637 4.59961 14.5149 5.08425 15.3637 5.9469C16.2125 6.80956 16.6894 7.97958 16.6894 9.19956Z" fill="#A9A7A7"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M11.7012 22.9905C5.66624 22.7444 0.847656 17.6937 0.847656 11.4999C0.847656 5.14849 5.91348 0 12.1629 0C18.4123 0 23.4781 5.14849 23.4781 11.4999C23.4781 17.8513 18.4123 22.9997 12.1629 22.9997C12.1112 23.0001 12.0595 23.0001 12.0079 22.9997C11.9055 22.9997 11.8031 22.9963 11.7012 22.9905ZM4.9019 18.7563C4.8173 18.5094 4.7885 18.2463 4.81765 17.9865C4.84679 17.7267 4.93313 17.4769 5.07026 17.2557C5.20738 17.0345 5.39177 16.8475 5.60974 16.7086C5.8277 16.5697 6.07365 16.4825 6.32932 16.4534C10.74 15.9572 13.6129 16.0021 18.0021 16.4638C18.2581 16.4909 18.5047 16.577 18.723 16.7156C18.9413 16.8541 19.1256 17.0415 19.2619 17.2634C19.3982 17.4854 19.4829 17.7359 19.5095 17.9961C19.5361 18.2563 19.5039 18.5193 19.4154 18.7649C21.2965 16.8306 22.3499 14.2196 22.3466 11.4999C22.3466 5.78386 17.7871 1.14999 12.1629 1.14999C6.53865 1.14999 1.97918 5.78386 1.97918 11.4999C1.97918 14.3265 3.09429 16.8887 4.9019 18.7563Z" fill="#A9A7A7"></path></svg>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/SideBar/ProfileIcon.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const ProfileIcon = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "UserBox",
  __ssrInlineRender: true,
  setup(__props) {
    const auth = useAuthStore();
    const user = ref(auth.user);
    const goToNotificationPage = () => {
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full flex flex-row justify-between items-center border border-[#5E695B] rounded-[17px] pr-[8px] pl-[18px] p-y-[8px] h-[73px] mb-[19px]" }, _attrs))}><div class="flex flex-row gap-x-[8px]">`);
      if (unref(user).avatar) {
        _push(`<img${ssrRenderAttr("src", unref(user).avatar)} class="rounded-full h-[55px] w-[55px] border border-[#B2550F]" alt="">`);
      } else {
        _push(ssrRenderComponent(ProfileIcon, {
          class: "rounded-full h-[55px] w-[55px] border border-[#B2550F]",
          alt: ""
        }, null, _parent));
      }
      _push(`<div class="flex flex-col justify-start items-start"><span class="font-medium text-[#133C3E] text-right text-[18px] leading-[28px]">${ssrInterpolate(unref(user).full_name)}</span><span class="font-light text-[#5CB3FF] text-right text-[16px] leading-[24px]">\u0628\u0627\u0632\u0627\u0631\u06CC\u0627\u0628</span></div></div>`);
      _push(ssrRenderComponent(NotificationIcon, {
        class: "cursor-pointer",
        onClick: goToNotificationPage
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sidebar/UserBox.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SideBarLink",
  __ssrInlineRender: true,
  props: {
    to: {
      type: String,
      default: "/"
    },
    title: {
      type: String,
      required: true
    },
    isLink: {
      type: Boolean,
      default: true
    }
  },
  emits: ["click"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    useDrawerStore();
    useRouter();
    const route = useRoute();
    const isActive = computed(() => route.path.startsWith(props.to));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["cursor-pointer sidebar-link rounded-[4px] gap-x-[5px] w-full flex flex-row hover:bg-[rgba(47,128,237,0.1)] hover:text-[#2F80ED] justify-start items-center px-[11px] py-[8px]", [unref(isActive) ? "bg-[rgba(47,128,237,0.1)] text-[#2F80ED]" : ""]]
      }, _attrs))}><div>`);
      ssrRenderSlot(_ctx.$slots, "icon", {}, null, _push, _parent);
      _push(`</div><div class="">${ssrInterpolate(__props.title)}</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sidebar/SideBarLink.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main$1 as _, _sfc_main as a };
//# sourceMappingURL=SideBarLink-Ddy3XEMg.mjs.map
