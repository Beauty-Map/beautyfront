import { p as defineNuxtRouteMiddleware, e as useSanctumUser, h as navigateTo } from './server.mjs';
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

const artistAuth = defineNuxtRouteMiddleware((to, from) => {
  const user = useSanctumUser();
  if (!user.value || !user.value.is_artist) {
    return navigateTo("/");
  }
});

export { artistAuth as default };
//# sourceMappingURL=artist-auth-C-daQ151.mjs.map
