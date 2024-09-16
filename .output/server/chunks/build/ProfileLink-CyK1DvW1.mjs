import { b as useRouter } from './server.mjs';
import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent } from 'vue/server-renderer';
import { L as LeftArrow } from './LeftArrow-LWKoxjM1.mjs';
import { u as useDrawerStore } from './Drawer-n5iGEtr0.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ProfileLink",
  __ssrInlineRender: true,
  props: {
    to: {
      type: String,
      default: "/"
    },
    isLink: {
      type: Boolean,
      default: true
    }
  },
  emits: ["click"],
  setup(__props, { emit: __emit }) {
    useDrawerStore();
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "cursor-pointer flex flex-row justify-start items-start w-full mb-6" }, _attrs))}><div>`);
      ssrRenderSlot(_ctx.$slots, "icon", {}, null, _push, _parent);
      _push(`</div><div class="flex flex-row justify-between items-center w-full mr-4 border-b border-[#A9A7A7] pb-4"><div class="text-[#133C3E] text-[12px] leading-[18px] font-medium">`);
      ssrRenderSlot(_ctx.$slots, "title", {}, null, _push, _parent);
      _push(`</div><div class="flex flex-row gap-[20px]">`);
      ssrRenderSlot(_ctx.$slots, "sub-icon", {}, null, _push, _parent);
      _push(ssrRenderComponent(LeftArrow, null, null, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/profile/ProfileLink.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=ProfileLink-CyK1DvW1.mjs.map
