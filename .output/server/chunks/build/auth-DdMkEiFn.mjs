import { p as defineNuxtRouteMiddleware, h as navigateTo } from './server.mjs';
import { u as useSanctumAuth } from './useSanctumAuth-Clu_AxNv.mjs';
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

const auth = defineNuxtRouteMiddleware((to, from) => {
  const auth2 = useSanctumAuth();
  if (!auth2.isAuthenticated.value) {
    return navigateTo("/");
  }
});

export { auth as default };
//# sourceMappingURL=auth-DdMkEiFn.mjs.map
