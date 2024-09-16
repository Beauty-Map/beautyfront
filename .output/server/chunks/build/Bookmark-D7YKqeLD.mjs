import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><svg class="block md:hidden" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.08325 19.75V5.08333C5.08325 4.57917 5.26277 4.14757 5.62179 3.78854C5.98082 3.42951 6.41242 3.25 6.91659 3.25H16.0833C16.5874 3.25 17.019 3.42951 17.378 3.78854C17.7371 4.14757 17.9166 4.57917 17.9166 5.08333V19.75L11.4999 17L5.08325 19.75ZM6.91659 16.9542L11.4999 14.9833L16.0833 16.9542V5.08333H6.91659V16.9542Z" fill="#141414"></path><rect x="6" y="5" width="11" height="12" fill="none"></rect></svg><svg class="md:block hidden" width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.958 48.625V11.9583C11.958 10.6979 12.4068 9.61892 13.3044 8.72135C14.2019 7.82378 15.2809 7.375 16.5413 7.375H39.458C40.7184 7.375 41.7974 7.82378 42.695 8.72135C43.5926 9.61892 44.0413 10.6979 44.0413 11.9583V48.625L27.9997 41.75L11.958 48.625ZM16.5413 41.6354L27.9997 36.7083L39.458 41.6354V11.9583H16.5413V41.6354Z" fill="#141414"></path><rect x="14.25" y="11.75" width="27.5" height="30" fill="#141414"></rect></svg><!--]-->`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/FullBookmarkIcon.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const FullBookmarkIcon = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><svg class="block md:hidden" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.08325 19.75V5.08333C5.08325 4.57917 5.26277 4.14757 5.62179 3.78854C5.98082 3.42951 6.41242 3.25 6.91659 3.25H16.0833C16.5874 3.25 17.019 3.42951 17.378 3.78854C17.7371 4.14757 17.9166 4.57917 17.9166 5.08333V19.75L11.4999 17L5.08325 19.75ZM6.91659 16.9542L11.4999 14.9833L16.0833 16.9542V5.08333H6.91659V16.9542Z" fill="#141414"></path></svg><svg class="md:block hidden" width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.458 48.125V11.4583C11.458 10.1979 11.9068 9.11892 12.8044 8.22135C13.7019 7.32378 14.7809 6.875 16.0413 6.875H38.958C40.2184 6.875 41.2974 7.32378 42.195 8.22135C43.0926 9.11892 43.5413 10.1979 43.5413 11.4583V48.125L27.4997 41.25L11.458 48.125ZM16.0413 41.1354L27.4997 36.2083L38.958 41.1354V11.4583H16.0413V41.1354Z" fill="#141414"></path></svg><!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/EmptyBookmarkIcon.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const EmptyBookmarkIcon = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Bookmark",
  __ssrInlineRender: true,
  props: {
    bookmarked: {
      type: Boolean,
      required: true
    }
  },
  emits: ["bookmark"],
  setup(__props, { emit: __emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "cursor-pointer" }, _attrs))}>`);
      if (__props.bookmarked) {
        _push(ssrRenderComponent(FullBookmarkIcon, null, null, _parent));
      } else {
        _push(ssrRenderComponent(EmptyBookmarkIcon, null, null, _parent));
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/bookmark/Bookmark.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=Bookmark-D7YKqeLD.mjs.map
