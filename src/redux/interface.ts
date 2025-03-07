export interface CartItems {
    id: number,
    title: string,
    img: string,
    category: string,
    price: number,
    sex: string,
    quantity: number,
}

export interface CartState {
    cart: CartItems[]
}