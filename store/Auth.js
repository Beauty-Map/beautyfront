import {defineStore} from 'pinia'
import {ofetch} from "ofetch";
export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null,
        token: null,
        plan: null,
    }),
    getters: {
        getUser: (state) => state.user,
    },
    actions: {
        setUser(user) {
            this.user = user
        },
        setToken(token) {
            this.token = token
        },
        async own() {
            const token = useCookie('token')
            const runtimeConfig = useRuntimeConfig()
            const baseUrl = runtimeConfig.public.baseURL
            if (token.value) {
                await ofetch('/own',
                    {
                        // baseURL: 'http://127.0.0.1:8000/api',
                        baseURL: baseUrl,
                        method: "GET",
                        parseResponse: JSON.parse,
                        headers: {
                            "Content-Type": "application/json",
                            "Accept": "application/json",
                            "Authorization": `Bearer ${token.value ?? ''}`
                        }
                    })
                    .then(res => {
                        this.user = res?.data
                        this.token = token.value?.toString() ?? ''
                    })
            }
        },
        async ownPlan() {
            const token = useCookie('token')
            const runtimeConfig = useRuntimeConfig()
            const baseUrl = runtimeConfig.public.baseURL
            await ofetch('/own/plan',
                {
                    // baseURL: 'http://127.0.0.1:8000/api',
                    baseURL: baseUrl,
                    method: "GET",
                    parseResponse: JSON.parse,
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                        "Authorization": `Bearer ${token.value ?? ''}`
                    }
                })
                .then(res => {
                    this.plan = res.data
                    return res
                })
        }
    },
})