import {defineStore} from 'pinia'
export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null,
        token: null,
    }),
    getters: {
        getUser: (state) => state.user,
    },
    actions: {
        async login(credentials = {}) {
            const conf = useRuntimeConfig()
            return useFetch(conf.public.baseURL + '/auth/login', {
                body: credentials,
                method: "POST"
            })
        },
        setUser(user) {
            this.user = user
        },
        setToken(token) {
            this.token = token
        }
    },
})