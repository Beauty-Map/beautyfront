import { defineStore } from 'pinia'

export const useDrawerStore = defineStore('drawer', {
    state: () => ({
        openProfile: false,
        openLogin: false,
        openRegister: false,
        openResetPassword: false,
    }),
    getters: {
        isOpenProfile: (state) => state.openProfile,
        isOpenLogin: (state) => state.openLogin,
        isOpenRegister: (state) => state.openRegister,
        isOpenResetPassword: (state) => state.openResetPassword,
    },
    actions: {
        closeProfileDrawer() {
            this.openProfile = false
        },
        openProfileDrawer() {
            this.openProfile = true
        },
        closeLoginDrawer() {
            this.openLogin = false
        },
        openLoginDrawer() {
            this.openLogin = true
        },
        closeRegisterDrawer() {
            this.openRegister = false
        },
        openRegisterDrawer() {
            this.openRegister = true
        },
        closeResetPasswordDrawer() {
            this.openResetPassword = false
        },
        openResetPasswordDrawer() {
            this.openResetPassword = true
        },
        closeAllDrawers() {
            this.closeProfileDrawer()
            this.closeLoginDrawer()
            this.closeRegisterDrawer()
            this.closeResetPasswordDrawer()
        },
    },
})