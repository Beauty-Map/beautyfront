export default defineNuxtRouteMiddleware((to, from) => {
    const referralId = to.query.ref as string;

    if (referralId) {
        const ref = useCookie('referralId', {
            maxAge: 60 * 60 * 24 * 30, // 7 days
            path: '/',
            sameSite: 'lax',
        });
        if (!ref.value) {
            ref.value = referralId
        }
    }
});