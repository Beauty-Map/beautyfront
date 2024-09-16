import { defineComponent, ref, watch, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc, d as useRoute } from './server.mjs';
import { A as ArrowUpIcon } from './ArrowUpIcon-dlPStaoQ.mjs';
import { D as DoneCheckIcon } from './DoneCheckIcon-DygKNuo8.mjs';
import { u as useCustomFetch } from './useCustomFetch-7ynZLwB1.mjs';

const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "13",
    height: "13",
    viewBox: "0 0 13 13",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M6.17505 9.2625L1.30005 4.3875L2.43755 3.25L6.17505 6.9875L9.91255 3.25L11.05 4.3875L6.17505 9.2625Z" fill="#141414"></path></svg>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/ArrowDownIcon.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const ArrowDownIcon = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "19",
    height: "19",
    viewBox: "0 0 19 19",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M8.70833 16.625V11.875H10.2917V13.4583H16.625V15.0417H10.2917V16.625H8.70833ZM2.375 15.0417V13.4583H7.125V15.0417H2.375ZM5.54167 11.875V10.2917H2.375V8.70833H5.54167V7.125H7.125V11.875H5.54167ZM8.70833 10.2917V8.70833H16.625V10.2917H8.70833ZM11.875 7.125V2.375H13.4583V3.95833H16.625V5.54167H13.4583V7.125H11.875ZM2.375 5.54167V3.95833H10.2917V5.54167H2.375Z" fill="black"></path></svg>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/FilterIcon.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const FilterIcon = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "FilterPortfolioDrawer",
  __ssrInlineRender: true,
  props: {
    isOpen: {
      type: Boolean,
      required: true
    },
    title: {
      type: String,
      default: "\u0641\u06CC\u0644\u062A\u0631"
    }
  },
  emits: ["close", "choose"],
  setup(__props, { emit: __emit }) {
    const route = useRoute();
    const serviceArray = ref([]);
    const selectedService = ref({
      id: -1,
      title: "\u0647\u0645\u0647 \u062E\u062F\u0645\u0627\u062A",
      image: "",
      is_active: 0,
      parent_id: null,
      created_at: "",
      updated_at: "",
      children: []
    });
    const getServiceList = async () => {
      var _a;
      const res = await useCustomFetch("/services", {
        method: "GET"
      });
      if (res.data.value) {
        serviceArray.value = [
          {
            id: -1,
            title: "\u0647\u0645\u0647 \u062E\u062F\u0645\u0627\u062A"
          },
          ...(_a = res.data.value) == null ? void 0 : _a.data
        ];
      } else {
        serviceArray.value = [
          {
            id: -1,
            title: "\u0647\u0645\u0647 \u062E\u062F\u0645\u0627\u062A"
          }
        ];
      }
      initSelectedService();
    };
    const initSelectedService = () => {
      let service = route.query.services ? route.query.services : "";
      if (!service || !/^-?\d+$/.test(service)) {
        selectedService.value = {
          id: -1,
          title: "\u0647\u0645\u0647 \u062E\u062F\u0645\u0627\u062A",
          image: "",
          is_active: 0,
          parent_id: null,
          created_at: "",
          updated_at: "",
          children: []
        };
      } else {
        const s = serviceArray.value.find((i) => i.id == parseInt(service));
        if (!s) {
          selectedService.value = {
            id: -1,
            title: "\u0647\u0645\u0647 \u062E\u062F\u0645\u0627\u062A",
            image: "",
            is_active: 0,
            parent_id: null,
            created_at: "",
            updated_at: "",
            children: []
          };
        } else {
          selectedService.value = s;
        }
      }
    };
    watch(() => route.query, initSelectedService);
    getServiceList();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["flex flex-col fixed px-[30px] py-[30px] md:hide top-0 bottom-0 overflow-y-scroll w-full duration-700 ease-in-out bg-white z-[999999999]", [__props.isOpen ? "left-0" : "left-[-100%]"]]
      }, _attrs))}><div class="flex flex-col justify-start items-center"><div class="w-full flex flex-row items-center justify-between text-right font-medium text-[#141414] text-[18px] leading-[27px]"><span>${ssrInterpolate(__props.title)}</span>`);
      _push(ssrRenderComponent(ArrowUpIcon, null, null, _parent));
      _push(`</div><div class="w-full flex flex-col gap-[10px] mt-4 items-start justify-start text-right font-medium text-[#141414] text-[14px] leading-[21px]"><!--[-->`);
      ssrRenderList(unref(serviceArray), (s, i) => {
        _push(`<div class="w-full flex flex-row items-center justify-between"><span>${ssrInterpolate(s.title)}</span>`);
        if (unref(selectedService).id === s.id) {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/drawer/FilterPortfolioDrawer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { ArrowDownIcon as A, FilterIcon as F, _sfc_main as _ };
//# sourceMappingURL=FilterPortfolioDrawer-u7UaxJbr.mjs.map
