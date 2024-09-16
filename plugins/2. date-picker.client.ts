import Vue3PersianDatetimePicker from 'vue3-persian-datetime-picker'
export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.use(Vue3PersianDatetimePicker, {
        name: 'CustomDatePicker',
        props: {
            format: 'YYYY-MM-DD HH:mm',
            displayFormat: 'jYYYY-jMM-jDD',
            editable: false,
            inputClass: 'form-control my-custom-class-name',
            placeholder: 'تاریخ را انتخاب کنید',
            altFormat: 'YYYY-MM-DD HH:mm',
            color: '#00acc1',
            autoSubmit: false,
        }
    })
})