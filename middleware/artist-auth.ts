import {useAuthStore} from "~/store/Auth";

export default defineNuxtRouteMiddleware((to, from) => {
    const auth = useAuthStore()
    const user = auth.getUser
    if (!user || !user.is_artist) {
        return navigateTo('/')
    }
})
