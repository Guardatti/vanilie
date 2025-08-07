import { CartItems } from "../interface";


export const addItemToCart = (cart: CartItems[], product: CartItems): CartItems[] => {

    const productInCart = cart.find((item) => {
        return item.id === product.id
    })

    if (productInCart) {
        return cart.map((item) => {
            return item.id === productInCart.id ? {...item, quantity: item.quantity + 1} : item
        })
    }

    return[
        ...cart,
        {
            ...product
        }
    ]

}


export const decraseItemToCart = (cart: CartItems[], id: number): CartItems[] => {

    const productToDecrase = cart.find((item) => {
        return item.id === id
    })

    if (!productToDecrase) {
        return[
            ...cart
        ]
    }

    if (productToDecrase.quantity > 1) {
        return cart.map((item) => {
            return item.id === productToDecrase.id ? {...item, quantity: item.quantity - 1} : item
        })
    }

    return cart.filter((item) => {
        return item.id != productToDecrase.id
    })

}

export const removeItemToCart = (cart: CartItems[], id: number) => {

    const productToRemove = cart.find((item) => {
        return item.id === id
    })

    if (!productToRemove) {
        return[
            ...cart
        ]
    }

    return cart.filter((item) => {
        return item.id != productToRemove.id
    })

}