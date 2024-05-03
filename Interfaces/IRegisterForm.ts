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