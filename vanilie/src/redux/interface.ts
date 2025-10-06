export interface CartItems {
    id: number,
    title: string,
    description: string,
    img: string,
    brand: string,
    price: number,
    sex: string,
    quantity: number,
}

export interface CartState {
    cart: CartItems[]
}