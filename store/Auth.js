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
        setUser(user) {
            this.user = user
        },
        setToken(token) {
            this.token = token
        }
    },
})