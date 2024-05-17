import { defineStore } from 'pinia'

export const useDrawerStore = defineStore('drawer', {
    state: () => ({
        openProfile: false,
        openLogin: false,
        openRegister: false,
        openResetPassword: false,
        openOtp: false,
        openSetPassword: false,
        openCompleteProfile: false,
        openNotification: false,
        openSecurity: false,
        openSetNewPassword: false,
        openSetAltNumber: false,
    }),
    getters: {
        isOpenProfile: (state) => state.openProfile,
        isOpenLogin: (state) => state.openLogin,
        isOpenRegister: (state) => state.openRegister,
        isOpenResetPassword: (state) => state.openResetPassword,
        isOpenOtp: (state) => state.openOtp,
        isOpenSetPassword: (state) => state.openSetPassword,
        isOpenCompleteProfile: (state) => state.openCompleteProfile,
        isOpenNotification: (state) => state.openNotification,
        isOpenSecurity: (state) => state.openSecurity,
        isOpenSetNewPassword: (state) => state.openSetNewPassword,
        isOpenSetAltNumber: (state) => state.openSetAltNumber,
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
        closeNotificationDrawer() {
            this.openNotification = false
        },
        openNotificationDrawer() {
            this.openNotification = true
        },
        closeSecurityDrawer() {
            this.openSecurity = false
        },
        openSecurityDrawer() {
            this.openSecurity = true
        },
        closeSetNewPasswordDrawer() {
            this.openSetNewPassword = false
        },
        openSetNewPasswordDrawer() {
            this.openSetNewPassword = true
        },
        closeSetAltNumberDrawer() {
            this.openSetAltNumber = false
        },
        openSetAltNumberDrawer() {
            this.openSetAltNumber = true
        },
        closeAllDrawers() {
            this.closeProfileDrawer()
            this.closeLoginDrawer()
            this.closeRegisterDrawer()
            this.closeResetPasswordDrawer()
            this.closeOtpDrawer()
            this.closeSetPasswordDrawer()
            this.closeCompleteProfileDrawer()
            this.closeNotificationDrawer()
            this.closeSecurityDrawer()
            this.closeSetNewPasswordDrawer()
            this.closeSetAltNumberDrawer()
        },
    },
})