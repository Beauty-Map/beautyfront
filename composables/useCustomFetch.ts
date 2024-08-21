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
    return await useFetch(url, {
        baseURL: config.public.baseURL,
        headers,
        credentials: 'include',
        ...opts,
    })
}