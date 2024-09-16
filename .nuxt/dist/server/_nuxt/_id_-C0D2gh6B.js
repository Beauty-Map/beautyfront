import { _ as _sfc_main$9 } from "./Rating-DwKpxWvb.js";
import { defineComponent, mergeProps, useSSRContext, ref, unref, resolveDirective, withCtx, createVNode, withAsyncContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrGetDirectiveProps } from "vue/server-renderer";
import { B as BlueTick } from "./BlueTick-DL3FrWLg.js";
import { a as __nuxt_component_0, _ as _export_sfc, b as useRouter, d as useRoute } from "../server.mjs";
/* empty css                  */
import "@fancyapps/ui";
import { P as PortfolioPageBackIcon } from "./PortfolioPageBackIcon-KL82MAIp.js";
import { _ as _sfc_main$a } from "./Modal-D2yhK_Nx.js";
import { u as useCustomFetch } from "./useCustomFetch-7ynZLwB1.js";
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
import "./CloseIcon-BBY6iLOC.js";
import "./fetch-C_QM8LGj.js";
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "PortfolioPageHeader",
  __ssrInlineRender: true,
  props: {
    rating: {
      type: Number,
      required: true
    },
    user: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Rating = _sfc_main$9;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full flex flex-row justify-start items-center" }, _attrs))}><img${ssrRenderAttr("alt", __props.user.full_name)}${ssrRenderAttr("src", __props.user.avatar)} class="w-[40px] h-[40px] rounded-[100%] border border-[#A9A7A7]">`);
      if (__props.user.has_blue_tick) {
        _push(ssrRenderComponent(BlueTick, { class: "mr-[8px] h-[18px] w-[18px]" }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="mr-[8px] font-semibold text-[16px] text-white leading-[25px] text-right">${ssrInterpolate(__props.user.full_name)}</div>`);
      _push(ssrRenderComponent(_component_Rating, {
        class: "mr-[8px]",
        "model-value": __props.rating
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/portfolio/PortfolioPageHeader.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "PortfolioSlideBox",
  __ssrInlineRender: true,
  props: {
    images: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    ref();
    ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_client_only = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full min-h-[336px] bg-gradient-to-b from-[rgba(0,0,0,.6)] from-0% via-white via-80% to-white" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/portfolio/PortfolioSlideBox.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _imports_0 = "" + __publicAssetsURL("images/portfolio/like_icon.png");
const _sfc_main$6 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<img${ssrRenderAttrs(mergeProps({
    src: _imports_0,
    alt: ""
  }, _attrs))}>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/LikeIcon.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const LikeIcon = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$5 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "37",
    height: "34",
    viewBox: "0 0 37 34",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><ellipse cx="15.617" cy="15.9426" rx="15.617" ry="15.9426" transform="matrix(-0.999803 -0.019867 0.0190634 -0.999818 35.3921 33.5)" fill="white" stroke="#133C3E" stroke-width="1.2"></ellipse><path d="M16.6577 15.7471L16.6577 16.4476C16.6577 17.1357 16.6577 17.4798 16.4956 17.7286C16.4196 17.8452 16.3202 17.9447 16.2036 18.0206C15.9547 18.1828 15.6107 18.1828 14.9225 18.1828L14.4051 18.1828C14.2027 18.1828 14.1015 18.1828 14.017 18.1682C13.6003 18.0962 13.2739 17.7698 13.2019 17.353C13.1873 17.2685 13.1873 17.1673 13.1873 16.9649C13.1873 16.7625 13.1873 16.6613 13.2019 16.5768C13.2739 16.1601 13.6003 15.8337 14.017 15.7617C14.1015 15.7471 14.2027 15.7471 14.4051 15.7471L16.6577 15.7471Z" fill="#1BD4CA" stroke="#1BD4CA" stroke-width="2"></path><path d="M20.8223 12.8242L20.8223 12.1237C20.8223 11.4356 20.8223 11.0915 20.9844 10.8426C21.0604 10.7261 21.1598 10.6266 21.2764 10.5507C21.5253 10.3885 21.8693 10.3885 22.5575 10.3885L23.0748 10.3885C23.2772 10.3885 23.3784 10.3885 23.4629 10.4031C23.8797 10.4751 24.2061 10.8015 24.2781 11.2183C24.2927 11.3028 24.2927 11.404 24.2927 11.6064C24.2927 11.8088 24.2927 11.91 24.2781 11.9945C24.2061 12.4112 23.8797 12.7376 23.4629 12.8096C23.3784 12.8242 23.2772 12.8242 23.0748 12.8242L20.8223 12.8242Z" fill="#1BD4CA" stroke="#1BD4CA" stroke-width="2"></path><path d="M20.8222 12.8242L16.6577 15.7471" stroke="#1BD4CA" stroke-width="2"></path><path d="M16.6982 18.6868L14.4457 18.6807C14.2433 18.6801 14.1421 18.6799 14.0577 18.665C13.6413 18.5919 13.3167 18.2646 13.247 17.8477C13.2329 17.7632 13.2334 17.662 13.2345 17.4596C13.2356 17.2571 13.2362 17.1559 13.2513 17.0715C13.3255 16.6549 13.6537 16.3294 14.0708 16.2586C14.1554 16.2442 14.2566 16.2445 14.459 16.245L14.9764 16.2464C15.6645 16.2483 16.0086 16.2492 16.2566 16.412C16.3727 16.4883 16.4717 16.588 16.547 16.7048C16.7077 16.9541 16.7059 17.2981 16.7021 17.9863L16.6982 18.6868Z" fill="#1BD4CA" stroke="#1BD4CA" stroke-width="2"></path><path d="M20.8467 21.6208L23.0992 21.6269C23.3016 21.6275 23.4028 21.6277 23.4873 21.6426C23.9036 21.7157 24.2282 22.043 24.2979 22.4599C24.3121 22.5444 24.3115 22.6456 24.3104 22.8481C24.3093 23.0505 24.3087 23.1517 24.2937 23.2361C24.2194 23.6527 23.8912 23.9782 23.4741 24.0491C23.3895 24.0634 23.2883 24.0632 23.0859 24.0626L22.5685 24.0612C21.8804 24.0594 21.5363 24.0584 21.2884 23.8956C21.1722 23.8194 21.0733 23.7196 20.998 23.6028C20.8372 23.3536 20.8391 23.0095 20.8428 22.3214L20.8467 21.6208Z" fill="#1BD4CA" stroke="#1BD4CA" stroke-width="2"></path><path d="M20.8468 21.6208L16.6983 18.6868" stroke="#1BD4CA" stroke-width="2"></path></svg>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/ShareIcon.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const ShareIcon = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "PortfolioContentHeader",
  __ssrInlineRender: true,
  props: {
    id: {
      type: Number,
      default: "",
      required: true
    },
    title: {
      type: String,
      default: "",
      required: true
    },
    service: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const getServices = () => {
      let services = [];
      let s = props.service;
      while (s) {
        services.push(s.title);
        s = s.parent;
      }
      return services.reverse().join(",");
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full flex flex-row items-center justify-between px-[10px] pb-[15px] border-b border-b-[#A9A7A7]" }, _attrs))}><div class="flex flex-col items-center justify-start"><h1 class="font-medium text-[#141414] text-right text-[22px] leading-[34px]">${ssrInterpolate(__props.title)}</h1>`);
      if (__props.service) {
        _push(`<div class="flex flex-row items-center justify-start text-right text-[10px] font-light leading-[14px]"><span class="text-[#828282]">دسته بندی:</span><span class="mr-1 text-[#2920D9]">${ssrInterpolate(getServices())}</span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex flex-row justify-end gap-4">`);
      _push(ssrRenderComponent(LikeIcon, null, null, _parent));
      _push(ssrRenderComponent(ShareIcon, null, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/portfolio/PortfolioContentHeader.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "PortfolioContentDescription",
  __ssrInlineRender: true,
  props: {
    description: {
      type: String,
      default: ""
    },
    workHours: {
      type: Array,
      default: () => [],
      required: true
    }
  },
  setup(__props) {
    const days = ref([
      "شنبه",
      "یک شنبه",
      "دو شنبه",
      "سه شنبه",
      "چهار شنبه",
      "پنج شنبه",
      "جمعه"
    ]);
    const getDayName = (workHour) => {
      let start = workHour.start_hour;
      let end = workHour.end_hour;
      let name = "";
      name += toAMorPM(start);
      name += " - ";
      name += toAMorPM(end);
      return name;
    };
    const toAMorPM = (hour) => {
      let name = "";
      let hourInt = parseInt(hour.substring(0, 2));
      if (hourInt <= 12) {
        name += `${hour} صبح`;
      } else if (hourInt <= 19) {
        name += `${hour} بعد از ظهر`;
      } else {
        name += `${hour} شب`;
      }
      return name;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full flex flex-col items-center justify-between px-[27px] py-[18px]" }, _attrs))}><div class="w-full flex flex-col items-start justify-start pb-[18px] border-b border-b-[#A9A7A7]"><h1 class="font-semibold text-[#141414] text-right text-[16px] leading-[23px]">جزئیات بیشتر</h1><div class="mt-[10px] font-normal text-right text-[#133C3E] text-[9px] leading-[12px]">${__props.description}</div></div><div class="w-full mt-4 mx-4 flex flex-col items-start justify-start pb-[18px] border-b border-b-[#A9A7A7]"><h1 class="w-full font-semibold text-[#141414] text-right text-[17px] leading-[26px]">برنامه هفتگی</h1><div class="w-full mt-[10px] font-normal text-right text-[#133C3E] text-[10px] leading-[15px]"><!--[-->`);
      ssrRenderList(__props.workHours, (w, i) => {
        _push(`<div class="flex flex-row justify-between items-center mb-[5px]"><span>${ssrInterpolate(unref(days)[w.day_index])}</span><span>${ssrInterpolate(getDayName(w))}</span></div>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/portfolio/PortfolioContentDescription.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "PortfolioContentBox",
  __ssrInlineRender: true,
  props: {
    portfolio: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PortfolioContentHeader = _sfc_main$4;
      const _component_PortfolioContentDescription = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col justify-start items-start px-[10px]" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_PortfolioContentHeader, {
        id: __props.portfolio.id,
        title: __props.portfolio.title,
        service: __props.portfolio.service
      }, null, _parent));
      _push(ssrRenderComponent(_component_PortfolioContentDescription, {
        description: __props.portfolio.description,
        "work-hours": __props.portfolio.work_hours
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/portfolio/PortfolioContentBox.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PortfolioBottomBox",
  __ssrInlineRender: true,
  props: {
    portfolio: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const showCallModal = ref(false);
    const closeCallModal = () => {
      showCallModal.value = false;
    };
    const calcDiscountPercent = (p, d) => {
      return Math.ceil((p - d) / p * 100) + "%";
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_format_number = resolveDirective("format-number");
      const _directive_format_price = resolveDirective("format-price");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "fixed bg-white flex flex-row items-center justify-between bottom-0 left-0 right-0 px-[15px] pt-[30px] pb-[22px] border-t border-t-[#FFEA2E]" }, _attrs))}><div class="cursor-pointer text-center px-[37px] py-[6px] bg-[#085EC2] border border-[#133C3E] font-medium text-[15px] leading-[30px] text-white rounded-[25px]">تماس</div><div class="flex flex-col"><div class="flex flex-row justify-end items-center"><span class="ml-[6px] px-[8px] text-white text-[8px] text-center leading-[12px] py-[4px] bg-[#ED2C25] rounded-[20px]">${ssrInterpolate(calcDiscountPercent(__props.portfolio.price, __props.portfolio.discount_price))}</span><div class="text-[#ED2C25] text-[11px] leading-[16px] text-left font-medium line-through"><span${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_format_number))}>${ssrInterpolate(__props.portfolio.price)}</span></div></div><div class="text-[#000000] text-[12px] leading-[18px] text-left font-medium"><span${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_format_price))}>${ssrInterpolate(__props.portfolio.discount_price)}</span></div></div>`);
      _push(ssrRenderComponent(_sfc_main$a, {
        open: unref(showCallModal),
        onClose: closeCallModal
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full h-full flex flex-col gap-[13px] justify-center items-center"${_scopeId}><div class="cursor-pointer flex justify-center items-center rounded-[10px] border border-[#133C3E] bg-[#085EC2] text-white text-[20px] leading-[31px] font-bold text-center px-[65px] py-[15px]"${_scopeId}> تلفن ثابت </div><div class="cursor-pointer flex justify-center items-center rounded-[10px] border border-[#133C3E] bg-[#085EC2] text-white text-[20px] leading-[31px] font-bold text-center px-[65px] py-[15px]"${_scopeId}> تلفن همراه </div></div>`);
          } else {
            return [
              createVNode("div", { class: "w-full h-full flex flex-col gap-[13px] justify-center items-center" }, [
                createVNode("div", { class: "cursor-pointer flex justify-center items-center rounded-[10px] border border-[#133C3E] bg-[#085EC2] text-white text-[20px] leading-[31px] font-bold text-center px-[65px] py-[15px]" }, " تلفن ثابت "),
                createVNode("div", { class: "cursor-pointer flex justify-center items-center rounded-[10px] border border-[#133C3E] bg-[#085EC2] text-white text-[20px] leading-[31px] font-bold text-center px-[65px] py-[15px]" }, " تلفن همراه ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/portfolio/PortfolioBottomBox.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const router = useRouter();
    const route = useRoute();
    const portfolio = ref({
      id: 1,
      title: "خدمات ناخن",
      description: "کراتینه مو یک روش موثر برای صافی، درخشندگی و شادابی موهای فر است. زنان و مردانی که موهای وز، فر یا مجعد دارند می‌توانند به کمک این روش، زیبایی و طراوت موهای خود را افزایش دهند. در واقع کراتینه مو یک روش صافی دائمی نیست، اما در صورت رعایت مراقبت‌های لازم بعد از صافی، اثرات آن حدود چهار تا ۶ ماه روی موها باقی می‌ماند",
      rating: 4.5,
      price: 1e5,
      discount_price: 9e4,
      is_bookmarked: true,
      has_tel: true,
      has_phone_number: false,
      showing_phone_number: "09381412419",
      service_id: 1,
      service: {
        id: 1,
        title: "خدمات ناخن",
        image: "https://via.placeholder.com/57x57.png/00ddaa?text=minus",
        is_active: 1,
        parent_id: null,
        created_at: "2024-04-12T16:14:23.000000Z",
        updated_at: "2024-04-12T16:14:23.000000Z"
      },
      user_id: 1,
      user: {
        id: 1,
        full_name: "زیبا اعظمی",
        phone_number: "09381412419",
        avatar: "/images/artist/2.png",
        has_blue_tick: true
      },
      images: ["/images/artist/1.jpg", "/images/artist/1.jpg"],
      work_hours: [
        {
          "day_index": 1,
          "start_hour": "09:12",
          "end_hour": "08:00"
        },
        {
          "day_index": 2,
          "start_hour": "09:12",
          "end_hour": "08:00"
        },
        {
          "day_index": 3,
          "start_hour": "09:12",
          "end_hour": "08:00"
        },
        {
          "day_index": 4,
          "start_hour": "09:12",
          "end_hour": "08:00"
        }
      ]
    });
    const id = route.params.id;
    const getPortfolio = async () => {
      const res = await useCustomFetch(`/portfolios/${id}`, {
        method: "GET"
      });
      if (res.data.value) {
        portfolio.value = res.data.value.data;
      }
      if (res.error.value) {
        router.back();
      }
    };
    const goBack = () => {
      router.back();
    };
    [__temp, __restore] = withAsyncContext(() => getPortfolio()), await __temp, __restore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PortfolioPageHeader = _sfc_main$8;
      const _component_PortfolioSlideBox = _sfc_main$7;
      const _component_PortfolioContentBox = _sfc_main$2;
      const _component_PortfolioBottomBox = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col h-full relative" }, _attrs))}><div class="flex flex-row items-center justify-between pl-[3px] absolute left-[23px] right-[15px] pt-[21px] pb-[79px] z-[999999]">`);
      _push(ssrRenderComponent(_component_PortfolioPageHeader, {
        user: unref(portfolio).user,
        rating: unref(portfolio).rating
      }, null, _parent));
      _push(ssrRenderComponent(PortfolioPageBackIcon, { onClick: goBack }, null, _parent));
      _push(`</div><div class="w-full h-full">`);
      _push(ssrRenderComponent(_component_PortfolioSlideBox, {
        images: unref(portfolio).images
      }, null, _parent));
      _push(`</div><div class="w-full h-full pt-[21px] pb-[79px]">`);
      _push(ssrRenderComponent(_component_PortfolioContentBox, { portfolio: unref(portfolio) }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_PortfolioBottomBox, { portfolio: unref(portfolio) }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/portfolios/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_id_-C0D2gh6B.js.map
