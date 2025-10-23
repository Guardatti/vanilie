interface IItem {
    id: number
    title: string
    description: string
    img: string
    brand: string
    price: number
    sex: string
    quantity: number
}

export interface IOrder {
    _id?: string
    createdAt?: string
    user?: string
    items: IItem[]
    total: number
}