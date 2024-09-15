export const useCustomFetch = async (url: string, opts: Object) => {
    const config = useRuntimeConfig()

    const xsrfToken = useCookie('XSRF-TOKEN')
    let headers = {
        accept: 'application/json',
        ...opts?.headers,
    }
    if (xsrfToken && xsrfToken.value !== null) {
        headers['X-XSRF-TOKEN'] = xsrfToken;
    }
    if (process.server) {
        headers = {
            ...headers,
            ...useRequestHeaders(['cookie']),
            referer: config.public.baseURL
        }
    }
    const token = useCookie('token')
    if (token.value) {
        headers = {
            ...headers,
            'Authorization': `Bearer ${token.value}`,
        }
    }
    return useFetch(url, {
        baseURL: config.public.baseURL,
        headers,
        credentials: 'include',
        ...opts,
    });
}