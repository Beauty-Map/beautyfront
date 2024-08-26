import { computed } from 'vue';
import { m as useSanctumUser, o as useSanctumConfig, b as useRoute, h as navigateTo, f as useNuxtApp } from './server.mjs';

const useSanctumClient = () => {
  const { $sanctumClient } = useNuxtApp();
  return $sanctumClient;
};
const useSanctumAuth = () => {
  const nuxtApp = useNuxtApp();
  const user = useSanctumUser();
  const client = useSanctumClient();
  const options = useSanctumConfig();
  const isAuthenticated = computed(() => {
    return user.value !== null;
  });
  async function refreshIdentity() {
    user.value = await client(options.endpoints.user);
  }
  async function login(credentials) {
    const currentRoute = useRoute();
    if (isAuthenticated.value === true) {
      if (options.redirectIfAuthenticated === false) {
        throw new Error("User is already authenticated");
      }
      if (options.redirect.onLogin === false || options.redirect.onLogin === currentRoute.path) {
        return;
      }
      await nuxtApp.runWithContext(
        () => navigateTo(options.redirect.onLogin)
      );
    }
    await client(options.endpoints.login, {
      method: "post",
      body: credentials
    });
    await refreshIdentity();
    if (options.redirect.keepRequestedRoute) {
      const requestedRoute = currentRoute.query.redirect;
      if (requestedRoute && requestedRoute !== currentRoute.path) {
        await nuxtApp.runWithContext(
          () => navigateTo(requestedRoute)
        );
        return;
      }
    }
    if (options.redirect.onLogin === false || currentRoute.path === options.redirect.onLogin) {
      return;
    }
    await nuxtApp.runWithContext(
      () => navigateTo(options.redirect.onLogin)
    );
  }
  async function logout() {
    if (isAuthenticated.value === false) {
      throw new Error("User is not authenticated");
    }
    const currentRoute = useRoute();
    await client(options.endpoints.logout, { method: "post" });
    user.value = null;
    if (options.redirect.onLogout === false || currentRoute.path === options.redirect.onLogout) {
      return;
    }
    await nuxtApp.runWithContext(
      () => navigateTo(options.redirect.onLogout)
    );
  }
  return {
    user,
    isAuthenticated,
    login,
    logout,
    refreshIdentity
  };
};

export { useSanctumAuth as u };
//# sourceMappingURL=useSanctumAuth-DECrePYZ.mjs.map
