import {ofetch} from "ofetch";

export default defineNuxtPlugin((app) => {
    const token = useCookie("token")
    const baseUrl = 'https://api.beautymap.ir/api'
    // const baseUrl = 'http://127.0.0.1:8000/api'

    const get = async (url: RequestInfo) => await ofetch(url,
        {
            baseURL: baseUrl,
            method: "GET",
            parseResponse: JSON.parse,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${token.value ?? ''}`
            }
        })
    const post = async (url: RequestInfo, body: Object | null) => await ofetch(url,
        {
            baseURL: baseUrl,
            method: "POST",
            body: body,
            parseResponse: JSON.parse,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${token.value ?? ''}`
            }
        },)
    const put = async (url: RequestInfo, body: Object | null) => await ofetch(url,
        {
            baseURL: baseUrl,
            method: "PUT",
            body: body,
            parseResponse: JSON.parse,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${token.value ?? ''}`
            }
        },)
    const destroy = async (url: RequestInfo, body: Object | null) => await ofetch(url,
        {
            baseURL: baseUrl,
            method: "DELETE",
            body: body,
            parseResponse: JSON.parse,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${token.value ?? ''}`
            }
        },)
    app.provide('getRequest', (url: RequestInfo) => get(url))
    app.provide('postRequest', (url: RequestInfo, data: Object) => post(url, data))
    app.provide('putRequest', (url: RequestInfo, data: Object) => put(url, data))
    app.provide('deleteRequest', (url: RequestInfo, data: Object) => destroy(url, data))
})