import { q as defineNuxtRouteMiddleware, e as useAuthStore, h as navigateTo } from './server.mjs';
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
  const auth2 = useAuthStore();
  if (!auth2.user) {
    return navigateTo("/");
  }
});

export { auth as default };
//# sourceMappingURL=auth-MCubyHc7.mjs.map
