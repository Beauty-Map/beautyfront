import { s as defineNuxtRouteMiddleware, u as useAuthStore, h as navigateTo } from './server.mjs';
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
  const auth = useAuthStore();
  if (!!auth.user) {
    return navigateTo("/");
  }
});

export { guest as default };
//# sourceMappingURL=guest-D4sPq1l2.mjs.map
