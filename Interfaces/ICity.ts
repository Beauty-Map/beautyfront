interface ICity {
    id: number,
    name: string,
    province: IProvince
}

interface IProvince {
    id: number
    name: string
    cities: ICity[]
}
