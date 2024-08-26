import {useAuthStore} from "~/store/Auth";

export default defineNuxtRouteMiddleware((to, from) => {
    const auth = useAuthStore()
    if (!!auth.user) {
        return navigateTo('/')
    }
})
