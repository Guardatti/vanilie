interface ImagesPaymentMethods {
    id: number,
    url: string,
    alt: string,
}

export const paymentMethods: ImagesPaymentMethods[] = [
    {
        id: 1,
        url: 'img_pay/visa.avif',
        alt: 'Visa',
    },
    {
        id: 2,
        url: 'img_pay/mastercard.avif',
        alt: 'Mastercard',
    },
    {
        id: 3,
        url: 'img_pay/naranjax.avif',
        alt: 'Naranja x',
    },
    {
        id: 4,
        url: 'img_pay/mercadopago.avif',
        alt: 'Mercado pago',
    },
    {
        id: 5,
        url: 'img_pay/banelco.avif',
        alt: 'Banelco',
    },
    {
        id: 6,
        url: 'img_pay/pagofacil.avif',
        alt: 'Pago facil',
    },
    {
        id: 7,
        url: 'img_pay/rapipago.avif',
        alt: 'Rapi pago',
    },
]