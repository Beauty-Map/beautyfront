export default defineNuxtRouteMiddleware((to, from) => {
    const user = useSanctumUser()
    if (!user.value || !user.value.is_artist) {
        return navigateTo('/')
    }
})
