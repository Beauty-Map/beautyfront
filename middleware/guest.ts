export default defineNuxtRouteMiddleware((to, from) => {
    const auth = useSanctumAuth()
    if (auth.isAuthenticated.value) {
        return navigateTo('/')
    }
})
