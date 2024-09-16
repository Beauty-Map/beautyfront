import { defineComponent, ref, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$1, H as Header } from "./Header-BOhVDNNd.js";
import { L as LoginImage } from "./LoginImage-Dcgl8vv6.js";
import { B as BackIcon } from "./BackIcon-nFKai1cn.js";
import { B as BeautyIcon } from "./BeautyIcon-B0tzcQSF.js";
import { u as useDrawerStore } from "./Drawer-n5iGEtr0.js";
import "../server.mjs";
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
import "./EmailInput-C25-nm-x.js";
import "lodash-es";
import "./ErrorRedIcon-Bdl6jb2D.js";
import "./MainActionButton-dCV7vShO.js";
import "./Loading-BdqMyNBb.js";
import "./CheckBox-CSaiS3ur.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    ref({
      phone_number: "",
      password: "",
      accept_policy: false
    });
    const store = useDrawerStore();
    const goBack = () => {
      store.closeAllDrawers();
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="hidden md:flex flex-col relative justify-center items-center w-screen h-[calc(100vh-87px)] py-[35px] px-[40px] overflow-y-auto bg-white"><div class="hidden w-full md:flex flex-row max-w-[1200px] mx-auto min-h-[400px] bg-white rounded-[20px] shadow-[0px_2px_8px_0px_#00000040]"><div class="overflow-y-auto w-full md:w-1/2 flex flex-col justify-center items-center md:rounded-tl-[20px] md:rounded-bl-[20px] rounded-[20px] h-full pb-[16px] md:px-[65px] px-[24px]"><div class="mt-[40px] text-[#344055] text-[32px] text-right font-bold"> ورود </div><div class="mt-[25px] text-[#B6B8C3] font-normal text-[16px] text-right"> برای دسترسی مستقیم به هنرمندان و تماس وارد شوید </div><div class="border border-[#2C3E5033] w-full my-[20px] border-dashed"></div>`);
      _push(ssrRenderComponent(_sfc_main$1, { class: "mt-[17px]" }, null, _parent));
      _push(`</div><div class="overflow-y-auto hidden md:flex flex-col justify-center items-center py-[40px] px-[65px] w-1/2 bg-[#2dcfc1] rounded-tl-[20px] rounded-bl-[20px] h-full">`);
      _push(ssrRenderComponent(LoginImage, null, null, _parent));
      _push(`<div class="mt-[24px] text-center w-full font-medium text-[24px] text-white"> پشتیبانی فوری </div><div class="mt-[24px] text-center w-full font-light text-[18px] text-white"> شما میتوانید به صورت 24 ساعته و 7 روز هفته را با ما تماس بگیرید </div></div></div></div><div class="flex flex-col md:hidden px-[17px] overflow-y-scroll w-full duration-700 ease-in-out bg-white"><div class="flex flex-row items-center justify-end pl-[3px]">`);
      _push(ssrRenderComponent(BackIcon, { onClick: goBack }, null, _parent));
      _push(`</div><div class="flex flex-col justify-start items-center">`);
      _push(ssrRenderComponent(BeautyIcon, { class: "mt-[8px]" }, null, _parent));
      _push(ssrRenderComponent(Header, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, { class: "mt-[17px]" }, null, _parent));
      _push(`</div></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-HyHEWIMT.js.map
