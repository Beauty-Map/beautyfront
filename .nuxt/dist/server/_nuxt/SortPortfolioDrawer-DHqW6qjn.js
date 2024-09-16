import { mergeProps, useSSRContext, defineComponent, ref, watch, unref } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc, d as useRoute } from "../server.mjs";
import { A as ArrowUpIcon } from "./ArrowUpIcon-dlPStaoQ.js";
import { D as DoneCheckIcon } from "./DoneCheckIcon-DygKNuo8.js";
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M17.5 15V13.3333H12.5V15H17.5ZM17.5 10.8333V9.16667H7.5V10.8333H17.5ZM17.5 6.66667V5H2.5V6.66667H17.5Z" fill="#141414"></path></svg>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/SortIcon.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const SortIcon = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SortPortfolioDrawer",
  __ssrInlineRender: true,
  props: {
    isOpen: {
      type: Boolean,
      required: true
    }
  },
  emits: ["close", "choose"],
  setup(__props, { emit: __emit }) {
    const route = useRoute();
    const sortArray = ref([
      {
        id: 1,
        title: "پر بازدیدترین"
      },
      {
        id: 2,
        title: "جدیدترین"
      },
      {
        id: 3,
        title: "ارزان ترین"
      },
      {
        id: 4,
        title: "گرانترین"
      },
      {
        id: 5,
        title: "بیشترین تخفیف"
      }
    ]);
    const selectedSort = ref({
      id: 1,
      title: "پر بازدیدترین"
    });
    const initSelectedSort = () => {
      const orderBy = route.query.order_by;
      const sortBy = route.query.sort_by;
      if (!orderBy || orderBy == "view") {
        selectedSort.value = sortArray.value[0];
      } else if (orderBy == "created_at") {
        selectedSort.value = sortArray.value[1];
      } else if (orderBy == "price") {
        if (sortBy == "asc") {
          selectedSort.value = sortArray.value[2];
        } else if (sortBy == "desc") {
          selectedSort.value = sortArray.value[3];
        } else if (sortBy == "discount") {
          selectedSort.value = sortArray.value[4];
        }
      }
    };
    watch(() => route.query, initSelectedSort);
    initSelectedSort();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["flex flex-col fixed px-[30px] py-[30px] md:hide top-0 bottom-0 overflow-y-scroll w-full duration-700 ease-in-out bg-white z-[999999999]", [__props.isOpen ? "left-0" : "left-[-100%]"]]
      }, _attrs))}><div class="flex flex-col justify-start items-center"><div class="w-full flex flex-row items-center justify-between text-right font-medium text-[#141414] text-[18px] leading-[27px]"><span>مرتب سازی</span>`);
      _push(ssrRenderComponent(ArrowUpIcon, null, null, _parent));
      _push(`</div><div class="w-full flex flex-col gap-[10px] mt-4 items-start justify-start text-right font-medium text-[#141414] text-[14px] leading-[21px]"><!--[-->`);
      ssrRenderList(unref(sortArray), (s, i) => {
        _push(`<div class="w-full flex flex-row items-center justify-between"><span>${ssrInterpolate(s.title)}</span>`);
        if (unref(selectedSort).id === s.id) {
          _push(ssrRenderComponent(DoneCheckIcon, null, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/drawer/SortPortfolioDrawer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  SortIcon as S,
  _sfc_main as _
};
//# sourceMappingURL=SortPortfolioDrawer-DHqW6qjn.js.map
