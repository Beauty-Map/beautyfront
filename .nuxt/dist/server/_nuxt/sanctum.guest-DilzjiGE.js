import "vue";
import "hookable";
import { s as defineNuxtRouteMiddleware, p as useSanctumConfig, c as createError, h as navigateTo } from "../server.mjs";
import "destr";
import "klona";
import "devalue";
import "defu";
import { u as useSanctumAuth } from "./useSanctumAuth-B2JusLUJ.js";
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
import "@vue/devtools-api";
import "dayjs";
import "dayjs/plugin/updateLocale.js";
import "dayjs/plugin/relativeTime.js";
import "dayjs/plugin/utc.js";
import "consola";
import "vue3-toastify";
import "vue/server-renderer";
const sanctum_guest = defineNuxtRouteMiddleware(() => {
  const options = useSanctumConfig();
  const { isAuthenticated } = useSanctumAuth();
  if (isAuthenticated.value === false) {
    return;
  }
  const endpoint = options.redirect.onGuestOnly;
  if (endpoint === false) {
    throw createError({ statusCode: 403 });
  }
  return navigateTo(endpoint, { replace: true });
});
export {
  sanctum_guest as default
};
//# sourceMappingURL=sanctum.guest-DilzjiGE.js.map
