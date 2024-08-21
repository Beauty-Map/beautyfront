interface IArtist {
    id: number
    full_name: string
    address: string
    phone_number: string
    bio: string|null
    distance: string
    avatar: string
    has_blue_tick: boolean
    is_bookmarked: boolean
    created_at_ago_fa: string
    portfolios_count: number
    services_count: number
    rating: number
    services: IService[]
    banners: string[]
    portfolios: IPortfolio[]
    work_hours: IWorkHour[]
    licenses: string[]
}

interface ISocialMedia {
    telegram: string
    instagram: string
    bale: string
    web: string
    whatsapp: string
    eita: string
    rubika: string
}