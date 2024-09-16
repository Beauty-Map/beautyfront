import { e as useCookie, j as useRequestHeaders, g as useRuntimeConfig } from './server.mjs';
import { u as useFetch } from './fetch-C_QM8LGj.mjs';

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
  const token = useCookie("token");
  if (token.value) {
    headers = {
      ...headers,
      "Authorization": `Bearer ${token.value}`
    };
  }
  return useFetch(url, {
    baseURL: config.public.baseURL,
    headers,
    credentials: "include",
    ...opts
  }, "$sC22i8rhLA");
};

export { useCustomFetch as u };
//# sourceMappingURL=useCustomFetch-7ynZLwB1.mjs.map
