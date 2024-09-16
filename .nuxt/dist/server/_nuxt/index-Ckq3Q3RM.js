import { mergeProps, useSSRContext, defineComponent, ref, unref, isRef, watch, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, computed } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderClass } from "vue/server-renderer";
import { _ as _export_sfc, b as useRouter, e as useCookie, u as useAuthStore, f as useNuxtApp } from "../server.mjs";
import { _ as _sfc_main$h, u as useSearchStore } from "./Search-D4phbKvQ.js";
import { u as useDevice } from "./useDevice-B_VrK2H7.js";
import { H as HeaderLocationIcon } from "./splide.min-D73CMSTP.js";
import { _ as _sfc_main$i } from "./ChooseCityDrawer-DxZVyNvs.js";
import { N as NotificationIcon } from "./NotificationIcon-D2I45xr1.js";
import { u as useDrawerStore } from "./Drawer-n5iGEtr0.js";
import _sfc_main$j from "./Title-CVhOih-C.js";
import { _ as _sfc_main$k } from "./ServiceGrid-CMEg8huW.js";
import "hookable";
import { u as useCustomFetch } from "./useCustomFetch-7ynZLwB1.js";
import { _ as _sfc_main$l } from "./ArtistItem-CYjzPdHi.js";
import "destr";
import "klona";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import { u as useDayjs } from "./dayjs-DjHdTGjd.js";
import { _ as _sfc_main$m } from "./Bookmark-D7YKqeLD.js";
import "dayjs/locale/fa.js";
import localizedFormat from "dayjs/plugin/localizedFormat.js";
import jalaliday from "jalaliday";
import { _ as _sfc_main$n } from "./MainActionButton-dCV7vShO.js";
import "#internal/nitro";
import "ofetch";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "ufo";
import "cookie-es";
import "ohash";
import "defu";
import "@vue/devtools-api";
import "devalue";
import "dayjs";
import "dayjs/plugin/updateLocale.js";
import "dayjs/plugin/relativeTime.js";
import "dayjs/plugin/utc.js";
import "consola";
import "vue3-toastify";
import "lodash-es";
import "./SearchIcon-BEnuNJvi.js";
import "./ErrorRedIcon-Bdl6jb2D.js";
import "./LeftArrow-LWKoxjM1.js";
import "./ServiceItem-5YnqCWgv.js";
import "./fetch-C_QM8LGj.js";
import "./Rating-DwKpxWvb.js";
import "./nuxt-link-DB89SAcR.js";
import "./BlueTick-DL3FrWLg.js";
const _sfc_main$g = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    class: "cursor-pointer",
    width: "29",
    height: "29",
    viewBox: "0 0 29 29",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><mask id="path-1-inside-1_162_622" fill="white"><rect x="0.5" y="0.5" width="28" height="28" rx="3"></rect></mask><rect x="0.5" y="0.5" width="28" height="28" rx="3" stroke="black" stroke-width="28" mask="url(#path-1-inside-1_162_622)"></rect><path d="M12.1666 9.83325L23.8333 9.83325" stroke="white" stroke-linecap="round"></path><path d="M5.16663 19.1667L16.8333 19.1667" stroke="white" stroke-linecap="round"></path><ellipse cx="8.66663" cy="9.83325" rx="3.5" ry="3.5" transform="rotate(90 8.66663 9.83325)" stroke="white" stroke-linecap="round"></ellipse><ellipse cx="20.3334" cy="19.1667" rx="3.5" ry="3.5" transform="rotate(90 20.3334 19.1667)" stroke="white" stroke-linecap="round"></ellipse></svg>`);
}
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/button/main/SearchFilter.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "SearchBox",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const searchTerm = ref("");
    const onSearch = (term) => {
      router.push(`/search?term=${term}`);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ButtonMainSearchFilter = __nuxt_component_0;
      const _component_MainSearchInput = _sfc_main$h;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-row w-full gap-4 items-center justify-start" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_ButtonMainSearchFilter, null, null, _parent));
      _push(ssrRenderComponent(_component_MainSearchInput, {
        modelValue: unref(searchTerm),
        "onUpdate:modelValue": [($event) => isRef(searchTerm) ? searchTerm.value = $event : null, onSearch]
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/main/SearchBox.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "SelectLocation",
  __ssrInlineRender: true,
  setup(__props) {
    const openDrawer = ref(false);
    const province = ref(null);
    const city = ref(null);
    useSearchStore();
    const locationCookie = useCookie("selectedLocation");
    const openDrawerClicked = () => {
      openDrawer.value = true;
    };
    const closeDrawerClicked = () => {
      openDrawer.value = false;
    };
    const chooseProvinceAndCity = (p, c) => {
      province.value = p;
      city.value = c;
      locationCookie.value = JSON.stringify({
        province: {
          id: p.id,
          name: p.name
        },
        city: {
          id: c.id,
          name: c.name
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "select-location flex gap-0.5 flex-row items-center cursor-pointer" }, _attrs))}><div class="flex flex-col ml-2 text-left"><p class="text-xs text-zinc-500 en-title">انتخاب شهر</p>`);
      if (unref(province) && unref(city)) {
        _push(`<p class="mt-1.5 text-sm text-neutral-900 city-name">${ssrInterpolate(`${unref(province).name} - ${unref(city).name}`)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(HeaderLocationIcon, { onClick: openDrawerClicked }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$i, {
        "is-open": unref(openDrawer),
        onClose: closeDrawerClicked,
        onChoose: chooseProvinceAndCity
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/button/main/SelectLocation.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "MainHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useDrawerStore();
    const auth = useAuthStore();
    const user = ref(auth.user);
    const openNotificationDrawer = () => {
      store.closeAllDrawers();
      store.openNotificationDrawer();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ButtonMainSelectLocation = _sfc_main$e;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["flex gap-5 font-medium text-center w-full", [unref(user) ? "justify-between" : "justify-end"]]
      }, _attrs))}>`);
      if (unref(user)) {
        _push(ssrRenderComponent(NotificationIcon, { onClick: openNotificationDrawer }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_ButtonMainSelectLocation, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/header/MainHeader.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "PopularArtistSliderItem",
  __ssrInlineRender: true,
  props: {
    image: {
      type: String,
      default: "/images/artist-slider/1.png"
    },
    mainTitle: {
      type: String,
      default: ""
    },
    subTitle: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    },
    linkUrl: {
      type: String,
      default: "/"
    },
    linkTitle: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "flex flex-col w-full relative min-h-[150px] bg-center bg-no-repeat bg-cover rounded-[8px]",
        style: `background-image: url(${__props.image})`
      }, _attrs))}><div class="sm:max-w-[60%] max-w-[75%] pt-[10px] px-[15px] md:pt-[25px] md:px-[30px] absolute top-0 left-0 right-0 bottom-0 flex flex-col items-start justify-start">`);
      if (__props.mainTitle) {
        _push(`<div class="text-base font-medium text-right text-white mb-2">${ssrInterpolate(__props.mainTitle)}</div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.subTitle) {
        _push(`<div class="text-sm font-normal text-right text-white mb-2">${ssrInterpolate(__props.subTitle)}</div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.description) {
        _push(`<div class="text-xs font-normal text-right text-white mb-2">${ssrInterpolate(__props.description)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<a${ssrRenderAttr("href", __props.linkUrl)} target="_blank" class="rounded-3xl py-[7px] px-[35px] text-center bg-[#FF3CA0] min-h-[22px] text-white text-sm">${ssrInterpolate(__props.linkTitle ?? "مشاهده")}</a></div></div>`);
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/main/PopularArtistSliderItem.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "PopularArtistSlider",
  __ssrInlineRender: true,
  setup(__props) {
    const slide = {
      image: "/images/artist-slider/1.png",
      main_title: "هنرمندان محبوب",
      sub_title: "متخصصان خدمات زیبایی",
      description: "با هنرمندان محبوب خدمات خیلی خاص و همین طور تخفیفات ویژه برای کاربران دارد",
      link_url: "/",
      link_title: "هنرمندان"
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MainTitle = _sfc_main$j;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full flex flex-col items-start justify-start" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_MainTitle, {
        title: "هنرمندان محبوب",
        class: "mb-[8px]"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$c, {
        image: slide.image,
        "main-title": slide.main_title,
        "sub-title": slide.sub_title,
        description: slide.description,
        "link-url": slide.link_url,
        "link-title": slide.link_title
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/main/PopularArtistSlider.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "PopularArtistDesktopSliderItem",
  __ssrInlineRender: true,
  props: {
    image: {
      type: String,
      default: "/images/artist-slider/1.png"
    },
    mainTitle: {
      type: String,
      default: ""
    },
    subTitle: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    },
    linkUrl: {
      type: String,
      default: "/"
    },
    linkTitle: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "flex flex-col w-full relative bg-center bg-no-repeat bg-cover",
        style: `background-image: url(${__props.image})`
      }, _attrs))}><div class="main-desktop-slider-left-box pt-[10px] px-[15px] md:pt-[25px] md:px-[30px] absolute top-0 left-0 bottom-0 flex flex-col items-center justify-center">`);
      if (__props.mainTitle) {
        _push(`<div class="text-base font-medium text-right text-[40px] leading-[60px] text-white mb-2">${ssrInterpolate(__props.mainTitle)}</div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.subTitle) {
        _push(`<div class="text-sm font-normal text-right text-[24px] leading-[40px] text-white mb-2">${ssrInterpolate(__props.subTitle)}</div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.description) {
        _push(`<div class="text-xs font-normal text-right text-white mb-2">${ssrInterpolate(__props.description)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<a${ssrRenderAttr("href", __props.linkUrl)} target="_blank" class="rounded-3xl mt-[20px] py-[7px] px-[35px] flex justify-center items-center text-center bg-[#FF3CA0] text-[28px] min-h-[44px] text-white text-sm">${ssrInterpolate(__props.linkTitle ?? "مشاهده")}</a></div></div>`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/main/PopularArtistDesktopSliderItem.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "PopularArtistDesktopSlider",
  __ssrInlineRender: true,
  setup(__props) {
    const slide = {
      image: "/images/artist-slider/desktop-1.png",
      main_title: "هنرمندان محبوب",
      sub_title: "متخصصان خدمات زیبایی",
      description: "با هنرمندان محبوب خدمات خیلی خاص و همین طور تخفیفات ویژه برای کاربران دارد",
      link_url: "/",
      link_title: "هنرمندان"
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full flex flex-col items-start justify-start main-desktop-slider" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$a, {
        image: slide.image,
        "main-title": slide.main_title,
        "sub-title": slide.sub_title,
        description: slide.description,
        "link-url": slide.link_url,
        "link-title": slide.link_title
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/main/PopularArtistDesktopSlider.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "ServiceBox",
  __ssrInlineRender: true,
  setup(__props) {
    const services = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MainTitle = _sfc_main$j;
      const _component_ServiceGrid = _sfc_main$k;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full flex flex-col items-start justify-start" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_MainTitle, {
        title: "خدمات",
        class: "mb-[8px]"
      }, null, _parent));
      _push(ssrRenderComponent(_component_ServiceGrid, { services: unref(services) }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/main/ServiceBox.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "NearestArtistListBox",
  __ssrInlineRender: true,
  setup(__props) {
    const artists = ref([]);
    const search = useSearchStore();
    const getArtists = async () => {
      const lat = search.lat;
      const lng = search.lng;
      setTimeout(async () => {
        var _a;
        let url = `/nearest`;
        if (lat && lng) {
          url += `?lat=${lat}&lng=${lng}`;
        }
        const res = await useCustomFetch(url, {
          method: "GET"
        });
        if (res.data.value) {
          artists.value = (_a = res.data.value) == null ? void 0 : _a.data;
        }
      }, 500);
    };
    watch(() => search.lat, getArtists);
    watch(() => search.lng, getArtists);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MainTitle = _sfc_main$j;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full flex flex-col items-start justify-start" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_MainTitle, {
        title: "نزدیک ترین هنرمندان",
        class: "mb-[8px]"
      }, null, _parent));
      _push(`<div class="grid grid-cols-1 md:grid-cols-2 w-full"><!--[-->`);
      ssrRenderList(unref(artists), (a, i) => {
        _push(ssrRenderComponent(_sfc_main$l, {
          key: i,
          artist: a
        }, null, _parent));
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/main/NearestArtistListBox.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "ServiceDesktopItem",
  __ssrInlineRender: true,
  props: {
    id: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      default: ""
    },
    image: {
      type: String,
      default: ""
    },
    circle: {
      type: Boolean,
      default: true
    },
    isLink: {
      type: Boolean,
      default: true
    },
    callParent: {
      type: Boolean,
      default: false
    }
  },
  emits: ["click"],
  setup(__props, { emit: __emit }) {
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col mx-3 items-center justify-start" }, _attrs))}><img${ssrRenderAttr("src", __props.image)} alt="" class="${ssrRenderClass([[__props.circle ? "rounded-[50%]" : "rounded-[8px]"], "w-[85px] h-[85px] mb-2"])}"><div class="text-center leading-[18px] text-xs whitespace-nowrap">${ssrInterpolate(__props.title)}</div></div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/service/ServiceDesktopItem.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "ServiceDesktopGrid",
  __ssrInlineRender: true,
  props: {
    circle: {
      type: Boolean,
      default: true
    },
    services: {
      type: Array,
      default: () => []
    },
    isLink: {
      type: Boolean,
      default: true
    }
  },
  setup(__props) {
    const options = ref({
      direction: "rtl",
      autoWidth: true,
      pagination: false,
      arrows: false,
      focus: "center"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Splide), mergeProps({
        options: unref(options),
        "aria-label": ""
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(__props.services, (s, i) => {
              _push2(ssrRenderComponent(unref(SplideSlide), { key: i }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$6, {
                      id: s.id,
                      title: s.title,
                      image: s.image,
                      circle: __props.circle,
                      "is-link": __props.isLink
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_sfc_main$6, {
                        id: s.id,
                        title: s.title,
                        image: s.image,
                        circle: __props.circle,
                        "is-link": __props.isLink
                      }, null, 8, ["id", "title", "image", "circle", "is-link"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(__props.services, (s, i) => {
                return openBlock(), createBlock(unref(SplideSlide), { key: i }, {
                  default: withCtx(() => [
                    createVNode(_sfc_main$6, {
                      id: s.id,
                      title: s.title,
                      image: s.image,
                      circle: __props.circle,
                      "is-link": __props.isLink
                    }, null, 8, ["id", "title", "image", "circle", "is-link"])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/service/ServiceDesktopGrid.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "ServiceDesktopBox",
  __ssrInlineRender: true,
  setup(__props) {
    const services = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full max-w-[80%] mx-auto" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$5, { services: unref(services) }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/main/ServiceDesktopBox.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ArtistDesktopItem",
  __ssrInlineRender: true,
  props: {
    artist: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const router = useRouter();
    const dayjs = useDayjs();
    dayjs.locale("fa");
    dayjs.extend(localizedFormat);
    dayjs.extend(jalaliday);
    const getThumbnail = computed(() => {
      return props.artist.avatar ? props.artist.avatar : "/images/artist/2.png";
    });
    const goToPage = () => {
      router.push(`/artists/${props.artist.id}`);
    };
    const toggleBookmark = (bookmarked) => {
      props.artist.is_bookmarked = bookmarked;
    };
    computed(() => {
      if (props.artist.created_at == "")
        return "-";
      return dayjs(props.artist.created_at).locale("fa").fromNow();
    });
    const getServicesName = computed(() => {
      if (props.artist.services.length == 0)
        return "تخصصی انتخاب نشده";
      return props.artist.services.map((i) => i.title).join(" , ");
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-[531px] mx-[10px] min-w-[384px] w-full flex rounded-[8px] px-[10px] py-[10px] mb-[25px]" }, _attrs))}><div class="flex flex-col shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] rounded-[8px] w-full h-full"><img${ssrRenderAttr("src", unref(getThumbnail))}${ssrRenderAttr("alt", __props.artist.full_name)} class="w-full h-[275px] rounded-t-[8px]"><div class="w-full h-full px-[15px] py-[10px] flex flex-col justify-start items-start"><div class="w-full flex flex-row justify-between items-center"><h1 class="w-full text-[#141414] text-right font-semibold text-[24px] leading-[32px]">${ssrInterpolate(__props.artist.full_name)}</h1>`);
      _push(ssrRenderComponent(_sfc_main$m, {
        onBookmark: toggleBookmark,
        bookmarked: __props.artist.is_bookmarked
      }, null, _parent));
      _push(`</div><div class="w-full mb-[10px] flex flex-row justify-start items-center"><svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.41667 22.75C4.82083 22.75 4.31076 22.5378 3.88646 22.1135C3.46215 21.6892 3.25 21.1792 3.25 20.5833V5.41667C3.25 4.82083 3.46215 4.31076 3.88646 3.88646C4.31076 3.46215 4.82083 3.25 5.41667 3.25H20.5833C21.1792 3.25 21.6892 3.46215 22.1135 3.88646C22.5378 4.31076 22.75 4.82083 22.75 5.41667V20.5833C22.75 21.1792 22.5378 21.6892 22.1135 22.1135C21.6892 22.5378 21.1792 22.75 20.5833 22.75H5.41667ZM5.41667 19.5833C5.41667 20.1356 5.86438 20.5833 6.41667 20.5833H19.5833C20.1356 20.5833 20.5833 20.1356 20.5833 19.5833V6.41667C20.5833 5.86438 20.1356 5.41667 19.5833 5.41667H6.41667C5.86438 5.41667 5.41667 5.86438 5.41667 6.41667V19.5833ZM7.7 16.8167C7.20557 17.4759 7.67595 18.4167 8.5 18.4167H17.5C18.324 18.4167 18.7944 17.4759 18.3 16.8167L16.2375 14.0667C15.8375 13.5333 15.0375 13.5333 14.6375 14.0667L12.9875 16.2667C12.5875 16.8 11.7875 16.8 11.3875 16.2667L10.55 15.15C10.15 14.6167 9.35 14.6167 8.95 15.15L7.7 16.8167Z" fill="#1EFF81"></path></svg><span class="mr-2">${ssrInterpolate(__props.artist.portfolios_count)}</span><span class="whitespace-nowrap mr-2">نمونه کار</span></div><div class="w-full mb-[10px] flex flex-row justify-start items-center"><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.58329 20.1667L0.916626 10.0834L5.49996 7.33337V1.83337H9.16663V7.33337L13.75 10.0834L10.0833 20.1667H4.58329ZM15.5833 20.1667C15.3236 20.1667 15.1059 20.0789 14.9302 19.9032C14.7545 19.7275 14.6666 19.5098 14.6666 19.25C14.6666 18.9903 14.7545 18.7726 14.9302 18.5969C15.1059 18.4212 15.3236 18.3334 15.5833 18.3334H18.3333V16.5H15.5833C15.3236 16.5 15.1059 16.4122 14.9302 16.2365C14.7545 16.0608 14.6666 15.8431 14.6666 15.5834C14.6666 15.3237 14.7545 15.1059 14.9302 14.9302C15.1059 14.7546 15.3236 14.6667 15.5833 14.6667H18.3333V12.8334H15.5833C15.3236 12.8334 15.1059 12.7455 14.9302 12.5698C14.7545 12.3941 14.6666 12.1764 14.6666 11.9167C14.6666 11.657 14.7545 11.4393 14.9302 11.2636C15.1059 11.0879 15.3236 11 15.5833 11H18.3333V9.16671H15.5833C15.3236 9.16671 15.1059 9.07886 14.9302 8.90317C14.7545 8.72747 14.6666 8.50976 14.6666 8.25004C14.6666 7.99032 14.7545 7.77261 14.9302 7.59692C15.1059 7.42122 15.3236 7.33337 15.5833 7.33337H18.3333V5.50004H15.5833C15.3236 5.50004 15.1059 5.41219 14.9302 5.2365C14.7545 5.0608 14.6666 4.8431 14.6666 4.58337C14.6666 4.32365 14.7545 4.10594 14.9302 3.93025C15.1059 3.75455 15.3236 3.66671 15.5833 3.66671H19.25C19.7541 3.66671 20.1857 3.84622 20.5448 4.20525C20.9038 4.56428 21.0833 4.99587 21.0833 5.50004V18.3334C21.0833 18.8375 20.9038 19.2691 20.5448 19.6282C20.1857 19.9872 19.7541 20.1667 19.25 20.1667H15.5833ZM5.86663 18.3334H8.79996L11.5041 10.8625L8.66246 9.16671H6.00413L3.16246 10.8625L5.86663 18.3334Z" fill="#1EFF81"></path></svg><div class="flex flex-row justify-start items-start flex-grow whitespace-nowrap mr-2"><span class="whitespace-nowrap text-ellipsis w-full">${ssrInterpolate(unref(getServicesName))}</span></div></div><div class="w-full mb-[10px] flex flex-row justify-start items-center"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.657 16.657L13.414 20.9C13.2284 21.0857 13.0081 21.233 12.7656 21.3336C12.523 21.4341 12.2631 21.4859 12.0005 21.4859C11.738 21.4859 11.478 21.4341 11.2354 21.3336C10.9929 21.233 10.7726 21.0857 10.587 20.9L6.343 16.657C5.22422 15.5381 4.46234 14.1127 4.15369 12.5608C3.84504 11.009 4.00349 9.40047 4.60901 7.93868C5.21452 6.4769 6.2399 5.22749 7.55548 4.34846C8.87107 3.46943 10.4178 3.00024 12 3.00024C13.5822 3.00024 15.1289 3.46943 16.4445 4.34846C17.7601 5.22749 18.7855 6.4769 19.391 7.93868C19.9965 9.40047 20.155 11.009 19.8463 12.5608C19.5377 14.1127 18.7758 15.5381 17.657 16.657Z" stroke="#1EFF81" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15 11C15 11.7956 14.6839 12.5587 14.1213 13.1213C13.5587 13.6839 12.7956 14 12 14C11.2044 14 10.4413 13.6839 9.87868 13.1213C9.31607 12.5587 9 11.7956 9 11C9 10.2044 9.31607 9.44129 9.87868 8.87868C10.4413 8.31607 11.2044 8 12 8C12.7956 8 13.5587 8.31607 14.1213 8.87868C14.6839 9.44129 15 10.2044 15 11Z" stroke="#1EFF81" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg><span class="mr-2">${ssrInterpolate(__props.artist.address)}</span></div>`);
      _push(ssrRenderComponent(_sfc_main$n, {
        class: "mt-[24px] rounded-[8px]",
        onClick: goToPage
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-white text-center text-[20px] leading-[30px]"${_scopeId}>پروفایل</div>`);
          } else {
            return [
              createVNode("div", { class: "text-white text-center text-[20px] leading-[30px]" }, "پروفایل")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/artist/ArtistDesktopItem.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "NearestArtistDesktopListBox",
  __ssrInlineRender: true,
  setup(__props) {
    const artists = ref([]);
    const options = ref({
      direction: "rtl",
      autoWidth: true,
      pagination: false,
      arrows: true
    });
    const search = useSearchStore();
    const getArtists = async () => {
      const lat = search.lat;
      const lng = search.lng;
      setTimeout(async () => {
        var _a;
        let url = `/nearest`;
        if (lat && lng) {
          url += `?lat=${lat}&lng=${lng}`;
        }
        const res = await useCustomFetch(url, {
          method: "GET"
        });
        if (res.data.value) {
          artists.value = (_a = res.data.value) == null ? void 0 : _a.data;
        }
      }, 500);
    };
    watch(() => search.lat, getArtists);
    watch(() => search.lng, getArtists);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ArtistDesktopItem = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full flex flex-col items-start justify-start bg-[#EBF3F580] py-[64px] px-[64px]" }, _attrs))}><div class="w-full flex justify-center"><div class="text-[#133C3E] font-semibold text-center text-[40px] max-w-[60%] w-full"> با نزدیک ترین هنرمندان شهر خود آشناشوید </div></div><div class="w-full mt-[40px]">`);
      _push(ssrRenderComponent(unref(Splide), {
        options: unref(options),
        "aria-label": ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(artists), (a, i) => {
              _push2(ssrRenderComponent(unref(SplideSlide), { key: i }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_ArtistDesktopItem, {
                      id: a.id,
                      artist: a
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_ArtistDesktopItem, {
                        id: a.id,
                        artist: a
                      }, null, 8, ["id", "artist"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(artists), (a, i) => {
                return openBlock(), createBlock(unref(SplideSlide), { key: i }, {
                  default: withCtx(() => [
                    createVNode(_component_ArtistDesktopItem, {
                      id: a.id,
                      artist: a
                    }, null, 8, ["id", "artist"])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/main/NearestArtistDesktopListBox.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "RandomArtistDesktopListBox",
  __ssrInlineRender: true,
  setup(__props) {
    const artists = ref([]);
    const options = ref({
      direction: "rtl",
      autoWidth: true,
      pagination: false,
      arrows: true
    });
    const search = useSearchStore();
    const getArtists = async () => {
      const lat = search.lat;
      const lng = search.lng;
      setTimeout(async () => {
        var _a;
        let url = `/nearest`;
        if (lat && lng) {
          url += `?lat=${lat}&lng=${lng}`;
        }
        const res = await useCustomFetch(url, {
          method: "GET"
        });
        if (res.data.value) {
          artists.value = (_a = res.data.value) == null ? void 0 : _a.data;
        }
      }, 500);
    };
    watch(() => search.lat, getArtists);
    watch(() => search.lng, getArtists);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ArtistDesktopItem = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full flex flex-col items-start justify-start bg-white py-[64px] px-[64px]" }, _attrs))}><div class="w-full flex justify-center"><div class="text-[#133C3E] font-semibold text-center text-[40px] max-w-[60%] w-full"> هنرمندان </div></div><div class="w-full mt-[40px]">`);
      _push(ssrRenderComponent(unref(Splide), {
        options: unref(options),
        "aria-label": ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(artists), (a, i) => {
              _push2(ssrRenderComponent(unref(SplideSlide), { key: i }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_ArtistDesktopItem, {
                      id: a.id,
                      artist: a
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_ArtistDesktopItem, {
                        id: a.id,
                        artist: a
                      }, null, 8, ["id", "artist"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(artists), (a, i) => {
                return openBlock(), createBlock(unref(SplideSlide), { key: i }, {
                  default: withCtx(() => [
                    createVNode(_component_ArtistDesktopItem, {
                      id: a.id,
                      artist: a
                    }, null, 8, ["id", "artist"])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/main/RandomArtistDesktopListBox.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { isMobile } = useDevice();
    const seenIntro = useCookie("seenIntro", {
      maxAge: 60 * 60 * 24 * 1e4
    });
    const router = useRouter();
    const nuxt = useNuxtApp();
    nuxt.hook("page:finish", () => {
      if (isMobile && (!seenIntro || !seenIntro.value)) {
        seenIntro.value = true;
        router.replace("/intro");
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MainSearchBox = _sfc_main$f;
      _push(`<!--[--><div class="flex w-full flex-col px-[23px] py-[10px] h-full md:hidden">`);
      _push(ssrRenderComponent(_sfc_main$d, { class: "mb-15" }, null, _parent));
      _push(ssrRenderComponent(_component_MainSearchBox, { class: "mb-15" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$b, { class: "mb-10" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$8, { class: "mb-15" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$7, { class: "mb-15" }, null, _parent));
      _push(`</div><div class="hidden w-full flex-col h-full md:flex">`);
      _push(ssrRenderComponent(_sfc_main$9, { class: "mb-10" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, { class: "mb-10" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, { class: "mb-10" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, { class: "mb-10" }, null, _parent));
      _push(`</div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-Ckq3Q3RM.js.map
