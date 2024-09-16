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
const sanctum_auth = defineNuxtRouteMiddleware((to) => {
  const options = useSanctumConfig();
  const { isAuthenticated } = useSanctumAuth();
  if (isAuthenticated.value === true) {
    return;
  }
  const endpoint = options.redirect.onAuthOnly;
  if (endpoint === false) {
    throw createError({ statusCode: 403 });
  }
  const redirect = { path: endpoint };
  if (options.redirect.keepRequestedRoute) {
    redirect.query = { redirect: to.fullPath };
  }
  return navigateTo(redirect, { replace: true });
});
export {
  sanctum_auth as default
};
//# sourceMappingURL=sanctum.auth-Dq2qcNDU.js.map
