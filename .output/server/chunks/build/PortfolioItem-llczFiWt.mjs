import { _ as _sfc_main$2 } from './Rating-QcbC2A5D.mjs';
import { _ as _sfc_main$3 } from './Tick-ioPHPXqw.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-B3sIHW1Y.mjs';
import { a as useRouter, e as useSanctumUser } from './server.mjs';
import { defineComponent, resolveDirective, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrGetDirectiveProps, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _sfc_main$1 } from './Bookmark-BwyrozWf.mjs';
import { u as useDrawerStore } from './Drawer-DbL6gM-F.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PortfolioItem",
  __ssrInlineRender: true,
  props: {
    portfolio: {
      type: Object,
      required: true
    },
    isPanel: {
      type: Object,
      required: false
    },
    isLink: {
      type: Boolean,
      default: true
    }
  },
  emits: ["click"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    useRouter();
    const drawerStore = useDrawerStore();
    const user = useSanctumUser();
    const getThumbnail = () => {
      if (props.portfolio.images.length > 0) {
        return props.portfolio.images[0];
      }
      return "/images/artist/1.jpg";
    };
    const toggleBookmark = (bookmarked) => {
      if (!user.value) {
        drawerStore.openLoginDrawer();
        return;
      }
      props.portfolio.is_bookmarked = bookmarked;
    };
    const calcDiscountPercent = (p, d) => {
      return Math.ceil((p - d) / p * 100) + "%";
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Rating = _sfc_main$2;
      const _component_Tick = _sfc_main$3;
      const _component_nuxt_link = __nuxt_component_0;
      const _directive_format_price = resolveDirective("format-price");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full flex flex-row gap-[20px] rounded-[8px] px-[10px] py-[10px] shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] mb-[25px]" }, _attrs))}><div class="w-full flex flex-col relative"><div class="w-full flex flex-row justify-start items-start">`);
      _push(ssrRenderComponent(_component_Rating, {
        modelValue: __props.portfolio.rating,
        "onUpdate:modelValue": ($event) => __props.portfolio.rating = $event
      }, null, _parent));
      _push(ssrRenderComponent(_component_Tick, null, null, _parent));
      _push(`</div><div class="w-full flex flex-row justify-start items-start"><h1 class="text-right font-medium text-[18px] leading-[28px] text-[#141414]">${ssrInterpolate(__props.portfolio.title)} - ${ssrInterpolate(__props.portfolio.id)}</h1></div>`);
      if (__props.portfolio.discount_price > 0) {
        _push(`<div class="w-full flex flex-col justify-start items-start"><div class="text-[#ED2C25] text-[12px] leading-[18px] font-medium line-through"><span${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_format_price))}>${ssrInterpolate(__props.portfolio.price)}</span></div><div class="text-[#133C3E] text-[12px] leading-[18px] font-medium"><span${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_format_price))}>${ssrInterpolate(__props.portfolio.discount_price)}</span><span class="mr-[22px] px-[12px] py-[3px] bg-[#FFEA2E61] rounded-[20px]">${ssrInterpolate(calcDiscountPercent(__props.portfolio.price, __props.portfolio.discount_price))}</span></div></div>`);
      } else if (__props.portfolio.price > 0) {
        _push(`<div class="w-full flex flex-col justify-start items-start"><div class="text-[#133C3E] text-[12px] leading-[18px] font-medium"><span${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_format_price))}>${ssrInterpolate(__props.portfolio.price)}</span></div></div>`);
      } else {
        _push(`<div class="w-full flex flex-col justify-start items-start"><div class="text-[#133C3E] text-[12px] leading-[18px] font-medium"> \u0631\u0627\u06CC\u06AF\u0627\u0646 </div></div>`);
      }
      _push(`<div class="flex flex-row items-center justify-start absolute right-0 bottom-0 z-[9999]">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        onBookmark: toggleBookmark,
        bookmarked: __props.portfolio.is_bookmarked
      }, null, _parent));
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/",
        class: "bg-[#085EC2] mr-[20px] rounded-[10px] px-[10px] py-[4px] text-white text-[8px] leading-[12px] cursor-pointer font-medium text-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u062C\u0632\u0626\u06CC\u0627\u062A \u062F\u0642\u06CC\u0642`);
          } else {
            return [
              createTextVNode("\u062C\u0632\u0626\u06CC\u0627\u062A \u062F\u0642\u06CC\u0642")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="w-full flex flex-col relative rounded-[8px] border border-[#5CB3FF] shadow-[2px_3px_6.5px_0px_#00000040]"><img${ssrRenderAttr("src", getThumbnail())}${ssrRenderAttr("alt", __props.portfolio.title)} class="w-full h-full min-h-[125px] min-w-[125px] rounded-[8px]"></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/portfolio/PortfolioItem.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=PortfolioItem-llczFiWt.mjs.map
