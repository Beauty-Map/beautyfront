interface IRegisterForm {
    email: string
    password: string
    accept_policy: boolean
}

interface IVerifyRegisterForm {
    email: string
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