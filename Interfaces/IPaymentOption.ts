interface IPaymentOption {
    id: number
    coins: number
    gift: number
    price: number
    discount_price: number
    created_at: string
    updated_at: string
}
interface IPayment {
    id: number
    amount: number
    code: string
    coins: number
    status: string
    payment_option_id: number
    payment_option: IPaymentOption
    created_at: string
    expire_at: string
    updated_at: string
}