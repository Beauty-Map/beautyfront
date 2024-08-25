import { d as useCookie, i as useRequestHeaders, g as useRuntimeConfig } from './server.mjs';
import { u as useFetch } from './fetch-CSNts9RR.mjs';

const useCustomFetch = async (url, opts) => {
  const config = useRuntimeConfig();
  const xsrfToken = useCookie("XSRF-TOKEN");
  let headers = {
    accept: "application/json",
    ...opts == null ? void 0 : opts.headers
  };
  if (xsrfToken && xsrfToken.value !== null) {
    headers["X-XSRF-TOKEN"] = xsrfToken;
  }
  {
    headers = {
      ...headers,
      ...useRequestHeaders(["cookie"]),
      referer: config.public.baseURL
    };
  }
  return await useFetch(url, {
    baseURL: config.public.baseURL,
    headers,
    credentials: "include",
    ...opts
  }, "$sC22i8rhLA");
};

export { useCustomFetch as u };
//# sourceMappingURL=useCustomFetch-CwVU0VgL.mjs.map
