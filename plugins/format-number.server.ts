export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive('format-number', {
        mounted (el, binding) {
            const value = binding.value;
            const formattedValue = new Intl.NumberFormat('fa-IR').format(value);
            el.innerText = `${formattedValue} تومان`;
        },
        getSSRProps (binding, vnode) {
            // you can provide SSR-specific props here
            return {}
        }
    })
})