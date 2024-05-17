interface IRegisterForm {
    phone_number: string
    accept_policy: boolean
}

interface IVerifyRegisterForm {
    phone_number: string
    code: string
}

interface ISetPasswordRegisterForm {
    password: string
    password_confirmation: string
}

interface ISetNewPasswordForm {
    old_password: string
    password: string
    password_confirmation: string
}

interface ISetAltNumberForm {
    alt_number: string
}

interface ICompleteProfileForm {
    full_name: string
    city_id: number
    birth_date: string
}