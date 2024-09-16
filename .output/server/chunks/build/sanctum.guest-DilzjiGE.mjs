import { s as defineNuxtRouteMiddleware, p as useSanctumConfig, c as createError, h as navigateTo } from './server.mjs';
import { u as useSanctumAuth } from './useSanctumAuth-B2JusLUJ.mjs';
import 'vue';
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
import 'vue/server-renderer';

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

export { sanctum_guest as default };
//# sourceMappingURL=sanctum.guest-DilzjiGE.mjs.map
