import { defineComponent, ref, computed, mergeProps, unref, useSSRContext } from 'vue';
import { a as useRouter, b as useRoute } from './server.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderStyle, ssrRenderClass } from 'vue/server-renderer';
import { B as BackIcon } from './BackIcon-TUxxOOBv.mjs';
import { C as CloseIcon } from './CloseIcon-DvH18xbo.mjs';
import { _ as _sfc_main$3, a as _sfc_main$2, b as _sfc_main$1, c as _sfc_main$1$1 } from './ChooseCallNumberInput-BlVIbIYN.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'dayjs';
import 'dayjs/plugin/updateLocale.js';
import 'dayjs/plugin/relativeTime.js';
import 'dayjs/plugin/utc.js';
import 'consola/core';
import 'vue3-toastify';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './ServiceItem-BOQlzdWI.mjs';
import './useCustomFetch-CwVU0VgL.mjs';
import './fetch-CSNts9RR.mjs';
import './ArrowUpIcon-DvDMNDTA.mjs';
import './DoneCheckIcon-7CP9QAgP.mjs';
import './Modal-sAgLgThS.mjs';
import './CheckBox-Dy8cOoli.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const route = useRoute();
    route.params.id;
    ref();
    const form = ref({
      title: "",
      description: "",
      maintenance: "",
      service: null,
      price: 0,
      discount_price: 0,
      has_tel: false,
      has_phone_number: false,
      second_phone_number: "",
      images: []
    });
    const prevImages = ref([]);
    const selectedImages = ref([]);
    ref([]);
    const uploadedFilesPercentages = ref([]);
    const uploadedFiles = ref([]);
    const uploading = ref([]);
    const goBack = () => {
      router.replace("/panel/artist/portfolios");
    };
    const updatePrice = (number) => {
      form.value.price = number;
    };
    const updateDiscountPrice = (number) => {
      form.value.discount_price = number;
    };
    const updateSecondPhoneNumber = (number) => {
      form.value.second_phone_number = number;
    };
    const updateHasPhoneNumber = (has) => {
      form.value.has_phone_number = has;
    };
    const updateHasTel = (has) => {
      form.value.has_tel = has;
    };
    const removeImage = (index) => {
      selectedImages.value.splice(index, 1);
      uploadedFiles.value.splice(index, 1);
    };
    const removePrevImage = (index) => {
      prevImages.value.splice(index, 1);
    };
    const showRemoveImage = (index) => {
      return !uploading.value[index];
    };
    const getThumbnail = computed(() => {
      return form.value.images.length > 0 ? form.value.images[0] : "/panel/choose-image.png";
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-[20px] w-full flex flex-col items-start justify-start pb-[108px] relative" }, _attrs))}><div class="w-full relative flex flex-row items-center justify-center py-[23px]"><div class="font-semibold text-[16px] text-[#141414] leading-[24px]">\u0646\u0645\u0648\u0646\u0647 \u06A9\u0627\u0631</div>`);
      _push(ssrRenderComponent(BackIcon, {
        onClick: goBack,
        class: "absolute left-[30px]"
      }, null, _parent));
      _push(`</div><div class="w-full flex flex-col my-[21px]"><div class="w-full flex flex-col gap-[12px] px-[14px] border-b border-b-[#A9A7A7]"><div class="w-full flex flex-row items-start justify-between gap-[12px]"><div class="w-full flex-col justify-start items-start"><div class="font-medium text-right text-black text-[16px] leading-[21px]">\u0639\u0646\u0648\u0627\u0646</div><input${ssrRenderAttr("value", unref(form).title)} class="w-full px-[10px] py-[4px] mx-[10px] mt-[10px] outline-none focus:outline-none text-[16px]" placeholder="\u06A9\u0631\u0627\u062A\u06CC\u0646\u0647 \u0645\u0648,\u06A9\u0627\u0634\u062A \u0645\u0698\u0647 \u0648..." maxlength="40"><span class="w-full text-right text-[#828282] text-[14px] font-medium leading-[21px]">40 / ${ssrInterpolate(unref(form).title.length)}</span></div><img${ssrRenderAttr("src", unref(getThumbnail))} alt="" class="w-[80px] h-[80px]"><input type="file" hidden multiple accept="image/png, images/jpeg"></div><div class="w-full flex flex-row justify-start items-start gap-[12px] mt-[7px] flex-wrap"><!--[-->`);
      ssrRenderList(unref(prevImages), (img, i) => {
        _push(`<div class="relative">`);
        _push(ssrRenderComponent(CloseIcon, {
          onClick: ($event) => removePrevImage(i),
          class: "absolute top-[-12px] right-[-12px] z-10"
        }, null, _parent));
        _push(`<img class="w-[80px] h-[80px]"${ssrRenderAttr("src", img)} alt=""></div>`);
      });
      _push(`<!--]--><!--[-->`);
      ssrRenderList(unref(selectedImages), (img, i) => {
        _push(`<div class="relative">`);
        if (showRemoveImage(i)) {
          _push(ssrRenderComponent(CloseIcon, {
            onClick: ($event) => removeImage(i),
            class: "absolute top-[-12px] right-[-12px] z-10"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<img class="w-[80px] h-[80px]"${ssrRenderAttr("src", img)} alt=""><div style="${ssrRenderStyle(unref(uploading)[i] ? null : { display: "none" })}" class="w-[80px] h-[80px] flex flex-col justify-center items-center px-[10px] absolute top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,.5)]"><div class="h-[5px] w-full ltr-dir bg-white rounded-[5px] relative"><div class="${ssrRenderClass(`bg-green-300 rounded-[5px] h-[5px] w-[${unref(uploadedFilesPercentages)[i]}]`)}"></div><div class="text-center text-white text-[12px] mt-2">${ssrInterpolate(unref(uploadedFilesPercentages)[i])}</div></div></div></div>`);
      });
      _push(`<!--]--></div><div class="w-full flex flex-row items-start justify-between gap-[12px] mt-[7px]"><div class="w-full flex-col justify-start items-start"><div class="font-medium text-right text-black text-[16px] leading-[21px]">\u0627\u0641\u0632\u0648\u062F\u0646 \u062A\u0648\u0636\u06CC\u062D\u0627\u062A</div><textarea class="w-full px-[10px] py-[4px] mx-[10px] mt-[10px] outline-none focus:outline-none text-[16px]" placeholder="\u06A9\u0631\u0627\u062A\u06CC\u0646\u0647 \u0645\u0648 \u06CC\u06A9 \u0631\u0648\u0634 \u0645\u0648\u062B\u0631 \u0628\u0631\u0627\u06CC \u0635\u0627\u0641\u06CC\u060C \u062F\u0631\u062E\u0634\u0646\u062F\u06AF\u06CC \u0648 \u0634\u0627\u062F\u0627\u0628\u06CC \u0645\u0648\u0647\u0627\u06CC \u0641\u0631 ..." maxlength="200" rows="2">${ssrInterpolate(unref(form).description)}</textarea><span class="w-full text-right text-[#828282] text-[14px] font-medium leading-[21px]">200 / ${ssrInterpolate(unref(form).description.length)}</span></div></div></div><div class="w-full flex flex-col">`);
      _push(ssrRenderComponent(_sfc_main$3, {
        modelValue: unref(form).service,
        "onUpdate:modelValue": ($event) => unref(form).service = $event
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        modelValue: unref(form).maintenance,
        "onUpdate:modelValue": ($event) => unref(form).maintenance = $event
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, {
        "has-tel": unref(form).has_tel,
        "has-phone-number": unref(form).has_phone_number,
        "second-phone-number": unref(form).second_phone_number,
        "onUpdate:hasTel": updateHasTel,
        "onUpdate:hasPhoneNumber": updateHasPhoneNumber,
        "onUpdate:secondPhoneNumber": updateSecondPhoneNumber
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1$1, {
        price: unref(form).price,
        "discount-price": unref(form).discount_price,
        "onUpdate:price": updatePrice,
        "onUpdate:discountPrice": updateDiscountPrice
      }, null, _parent));
      _push(`</div></div><button class="absolute bottom-[30px] left-[22px] right-[22px] cursor-pointer font-semibold text-center text-[14px] leading-[22px] flex justify-center items-center text-white bg-[#FF3CA0] mt-[10px] rounded-full h-[44px]"> \u0627\u0646\u062A\u0634\u0627\u0631 </button></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/panel/artist/portfolios/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-CMZR_X1x.mjs.map
