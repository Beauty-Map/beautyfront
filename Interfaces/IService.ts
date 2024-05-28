interface IService {
    id: number
    title: string
    image: string
    is_active: number
    parent_id: null
    created_at: string
    updated_at: string
    children: IService[]
    parent: IService | null
}
