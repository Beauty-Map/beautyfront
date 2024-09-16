import { s as defineNuxtRouteMiddleware, u as useAuthStore, h as navigateTo } from "../server.mjs";
import "vue";
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
import "vue/server-renderer";
const guest = defineNuxtRouteMiddleware((to, from) => {
  const auth = useAuthStore();
  if (!!auth.user) {
    return navigateTo("/");
  }
});
export {
  guest as default
};
//# sourceMappingURL=guest-D4sPq1l2.js.map
