interface SliderImages {
    id: number,
    url: string,
    alt: string,
}

export const sliderImages: SliderImages[]= [
    {
        id: 1,
        url: 'img_slider/1.webp',
        alt: 'estampa_vanilie'
    },
    {
        id: 2,
        url: 'img_slider/2.webp',
        alt: 'local_vanilie'
    },
    {
        id: 3,
        url: 'img_slider/3.webp',
        alt: 'local_vanilie'
    },
    {
        id: 4,
        url: 'img_slider/4.webp',
        alt: 'local_vanilie'
    },
]

// ---

interface Images{
    id: number,
    url: string,
    alt: string,
  }
  
export const upperclothing: Images[] = [
    {
      id: 1,
      url: 'img_upperclothing/remeras.avif',
      alt: 'REMERAS',
    },
    {
      id: 2,
      url: 'img_upperclothing/musculosas.avif',
      alt: 'MUSCULOSAS',
    },
    {
      id: 3,
      url: 'img_upperclothing/camisas.avif',
      alt: 'CAMISAS',
    },
    {
      id: 4,
      url: 'img_upperclothing/tops.avif',
      alt: 'TOPS',
    },
]
  
export const bottoms: Images[] = [
    {
        id: 1,
        url: 'img_bottoms/pantalon.avif',
        alt: 'PANTALONES',
    },
    {
        id: 2,
        url: 'img_bottoms/bermuda.avif',
        alt: 'BERMUDAS',
    },
    {
        id: 3,
        url: 'img_bottoms/short.avif',
        alt: 'SHOTRS',
    },
    {
        id: 4,
        url: 'img_bottoms/pollera.avif',
        alt: 'POLLERAS',
    },
]

export const completeLook: Images[] = [
    {
      id: 1,
      url: 'img_completelook/vestido.avif',
      alt: 'VESTIDOS',
    },
    {
      id: 2,
      url: 'img_completelook/conjunto.avif',
      alt: 'CONJUNTOS',
    },
    {
      id: 3,
      url: 'img_completelook/cartera.avif',
      alt: 'CARTERAS',
    },
    {
      id: 4,
      url: 'img_completelook/zapatilla.avif',
      alt: 'ZAPATILLAS',
    },
]

// ---

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