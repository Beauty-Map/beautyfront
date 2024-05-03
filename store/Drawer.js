import { defineStore } from 'pinia'

export const useDrawerStore = defineStore('drawer', {
    state: () => ({
        openProfile: false,
        openLogin: false,
        openRegister: false,
        openResetPassword: false,
        openOtp: false,
        openSetPassword: false,
        openCompleteProfile: true,
    }),
    getters: {
        isOpenProfile: (state) => state.openProfile,
        isOpenLogin: (state) => state.openLogin,
        isOpenRegister: (state) => state.openRegister,
        isOpenResetPassword: (state) => state.openResetPassword,
        isOpenOtp: (state) => state.openOtp,
        isOpenSetPassword: (state) => state.openSetPassword,
        isOpenCompleteProfile: (state) => state.openCompleteProfile,
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
        closeOtpDrawer() {
            this.openOtp = false
        },
        openOtpDrawer() {
            this.openOtp = true
        },
        closeSetPasswordDrawer() {
            this.openSetPassword = false
        },
        openSetPasswordDrawer() {
            this.openSetPassword = true
        },
        closeCompleteProfileDrawer() {
            this.openCompleteProfile = false
        },
        openCompleteProfileDrawer() {
            this.openCompleteProfile = true
        },
        closeAllDrawers() {
            this.closeProfileDrawer()
            this.closeLoginDrawer()
            this.closeRegisterDrawer()
            this.closeResetPasswordDrawer()
            this.closeOtpDrawer()
            this.closeSetPasswordDrawer()
            this.closeCompleteProfileDrawer()
        },
    },
})