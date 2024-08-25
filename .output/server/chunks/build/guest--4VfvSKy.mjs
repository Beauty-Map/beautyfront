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

const guest = defineNuxtRouteMiddleware((to, from) => {
  const auth = useSanctumAuth();
  if (auth.isAuthenticated.value) {
    return navigateTo("/");
  }
});

export { guest as default };
//# sourceMappingURL=guest--4VfvSKy.mjs.map
