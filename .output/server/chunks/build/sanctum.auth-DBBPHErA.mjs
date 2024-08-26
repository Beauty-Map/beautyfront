import { q as defineNuxtRouteMiddleware, o as useSanctumConfig, c as createError, h as navigateTo } from './server.mjs';
import { u as useSanctumAuth } from './useSanctumAuth-DECrePYZ.mjs';
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

export { sanctum_auth as default };
//# sourceMappingURL=sanctum.auth-DBBPHErA.mjs.map
