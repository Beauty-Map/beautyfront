interface IPortfolio {
    id: number
    title: string
    description: string
    maintenance: string
    rating: number
    price: number
    discount_price: number
    is_bookmarked: boolean
    has_tel: boolean
    has_phone_number: boolean
    showing_phone_number: string
    service_id: number
    service: IService
    user_id: number
    user: IUser
    images: string[]
    work_hours: IWorkHour[]
}

interface IWorkHour {
    day_index: number
    start_hour: string
    end_hour: string
}