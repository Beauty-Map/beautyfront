import { _ as _sfc_main$3 } from "./Rating-DwKpxWvb.js";
import { _ as __nuxt_component_0 } from "./nuxt-link-DB89SAcR.js";
import { _ as _export_sfc, b as useRouter } from "../server.mjs";
import { u as useDayjs } from "./dayjs-DjHdTGjd.js";
import { mergeProps, useSSRContext, defineComponent, computed, unref, withCtx, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { _ as _sfc_main$2 } from "./Bookmark-D7YKqeLD.js";
import { B as BlueTick } from "./BlueTick-DL3FrWLg.js";
import "dayjs/locale/fa.js";
import localizedFormat from "dayjs/plugin/localizedFormat.js";
import jalaliday from "jalaliday";
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "14",
    height: "13",
    viewBox: "0 0 14 13",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><mask id="mask0_1232_867" style="${ssrRenderStyle({ "mask-type": "alpha" })}" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect width="24" height="24" fill="#D9D9D9"></rect></mask><g mask="url(#mask0_1232_867)"><path d="M6.99992 10.4812C8.18603 9.47006 9.06589 8.55148 9.6395 7.72544C10.2131 6.8994 10.4999 6.16589 10.4999 5.52492C10.4999 4.54089 10.1621 3.73516 9.48638 3.10773C8.81068 2.4803 7.98186 2.16659 6.99992 2.16659C6.01797 2.16659 5.18915 2.4803 4.51346 3.10773C3.83777 3.73516 3.49992 4.54089 3.49992 5.52492C3.49992 6.16589 3.78672 6.8994 4.36034 7.72544C4.93395 8.55148 5.81381 9.47006 6.99992 10.4812ZM6.99992 11.551C6.86381 11.551 6.7277 11.5284 6.59159 11.4833C6.45547 11.4381 6.33395 11.3704 6.227 11.2801C5.59506 10.7385 5.03603 10.2103 4.54992 9.69575C4.06381 9.18117 3.6579 8.68238 3.33221 8.1994C3.00652 7.71641 2.7586 7.25148 2.58846 6.80461C2.41832 6.35773 2.33325 5.93117 2.33325 5.52492C2.33325 4.17075 2.80235 3.09193 3.74054 2.28846C4.67874 1.48499 5.7652 1.08325 6.99992 1.08325C8.23464 1.08325 9.3211 1.48499 10.2593 2.28846C11.1975 3.09193 11.6666 4.17075 11.6666 5.52492C11.6666 5.93117 11.5815 6.35773 11.4114 6.80461C11.2412 7.25148 10.9933 7.71641 10.6676 8.1994C10.3419 8.68238 9.93603 9.18117 9.44992 9.69575C8.96381 10.2103 8.40478 10.7385 7.77283 11.2801C7.66589 11.3704 7.54436 11.4381 7.40825 11.4833C7.27214 11.5284 7.13603 11.551 6.99992 11.551ZM6.99992 6.49992C7.32075 6.49992 7.5954 6.39384 7.82388 6.18169C8.05235 5.96954 8.16658 5.7145 8.16658 5.41659C8.16658 5.11867 8.05235 4.86363 7.82388 4.65148C7.5954 4.43933 7.32075 4.33325 6.99992 4.33325C6.67909 4.33325 6.40443 4.43933 6.17596 4.65148C5.94749 4.86363 5.83325 5.11867 5.83325 5.41659C5.83325 5.7145 5.94749 5.96954 6.17596 6.18169C6.40443 6.39384 6.67909 6.49992 6.99992 6.49992Z" fill="#141414"></path></g></svg>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/ArtistLocationIcon.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ArtistLocationIcon = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ArtistItem",
  __ssrInlineRender: true,
  props: {
    artist: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    useRouter();
    const dayjs = useDayjs();
    dayjs.locale("fa");
    dayjs.extend(localizedFormat);
    dayjs.extend(jalaliday);
    const getThumbnail = computed(() => {
      return props.artist.avatar ? props.artist.avatar : "/images/artist/2.png";
    });
    const toggleBookmark = (bookmarked) => {
      props.artist.is_bookmarked = bookmarked;
    };
    const getCreatedAtAgoFa = computed(() => {
      if (props.artist.created_at == "")
        return "-";
      return dayjs(props.artist.created_at).locale("fa").fromNow();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Rating = _sfc_main$3;
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-[165px] min-w-[323px] w-full flex flex-row gap-[20px] rounded-[8px] px-[10px] py-[10px] shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] mb-[25px]" }, _attrs))}><div class="w-full flex flex-col relative"><div class="w-full flex flex-row justify-start items-center">`);
      if (__props.artist.has_blue_tick) {
        _push(ssrRenderComponent(BlueTick, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<h1 class="text-right font-medium text-[18px] leading-[28px] text-[#141414]">${ssrInterpolate(__props.artist.full_name)}</h1></div><div class="font-medium text-[#141414] text-[7px] leading-[11px] text-right">${ssrInterpolate(unref(getCreatedAtAgoFa))}</div><div class="flex flex-row gap-[8px] items-center justify-start mt-[10px]"><div class="font-medium text-[#141414] text-[10px] leading-[15px] text-center bg-[#FFEA2E61] border border-[#1EFF81] px-[10px] py-[4px] rounded-[25px]"><span class="whitespace-nowrap">نمونه کار</span><span class="mr-1">(${ssrInterpolate(__props.artist.portfolios_count)})</span></div><div class="font-medium text-[#141414] text-[10px] leading-[15px] text-center bg-[#FFEA2E61] border border-[#1EFF81] px-[10px] py-[4px] rounded-[25px]"><span class="whitespace-nowrap">تخصص</span><span class="mr-1">(${ssrInterpolate(__props.artist.services_count)})</span></div></div><div class="flex flex-row items-center justify-start gap-[8px] mt-[10px]"><span class="text-right text-[9px] text-[#141414] leading-[13px] font-medium"><span>محل کار</span><span>${ssrInterpolate(__props.artist.address)}</span></span>`);
      _push(ssrRenderComponent(ArtistLocationIcon, null, null, _parent));
      _push(`<span class="text-right text-[9px] text-[#ED2C25] leading-[13px] font-medium"><span>(${ssrInterpolate(__props.artist.distance)})</span></span></div><div class="flex flex-row items-center justify-end pl-[10px] mt-[10px]">`);
      _push(ssrRenderComponent(_component_Rating, {
        modelValue: __props.artist.rating,
        "onUpdate:modelValue": ($event) => __props.artist.rating = $event
      }, null, _parent));
      _push(`</div><div class="flex flex-row items-center justify-start absolute right-0 bottom-0 z-[9999]">`);
      _push(ssrRenderComponent(_sfc_main$2, {
        onBookmark: toggleBookmark,
        bookmarked: __props.artist.is_bookmarked
      }, null, _parent));
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/",
        class: "bg-[#085EC2] mr-[20px] rounded-[10px] px-[10px] py-[4px] text-white text-[8px] leading-[12px] cursor-pointer font-medium text-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`بیوگرافی کامل هنرمند`);
          } else {
            return [
              createTextVNode("بیوگرافی کامل هنرمند")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="w-full flex flex-col relative rounded-[8px] border border-[#5CB3FF] shadow-[2px_3px_6.5px_0px_#00000040]"><img${ssrRenderAttr("src", unref(getThumbnail))}${ssrRenderAttr("alt", __props.artist.full_name)} class="w-full h-full min-h-[125px] min-w-[125px] rounded-[8px]"></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/artist/ArtistItem.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=ArtistItem-CYjzPdHi.js.map
