import { ref } from 'vue';

const otpResetSignal = ref(false);

export function useOtpResetSignal() {
    const emitOtpResetSignal = () => {
        otpResetSignal.value = true;
        setTimeout(() => {
            otpResetSignal.value = false;
        }, 10);
    };

    return { otpResetSignal, emitOtpResetSignal };
}
