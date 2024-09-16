export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive('format-price', {
        mounted (el) {
            const value = el.innerText;
            const formattedValue = new Intl.NumberFormat('fa-IR').format(value);
            el.innerText = `${formattedValue} تومان`;
        },
        getSSRProps (binding, vnode) {
            // you can provide SSR-specific props here
            return {}
        }
    })
    nuxtApp.vueApp.directive('format-number', {
        mounted (el) {
            const value = el.innerText;
            const formattedValue = new Intl.NumberFormat('fa-IR').format(value);
            el.innerText = `${formattedValue}`;
        },
        getSSRProps (binding, vnode) {
            // you can provide SSR-specific props here
            return {}
        }
    })
})