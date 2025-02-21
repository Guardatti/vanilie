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
    path: string,
  }
  
export const upperclothing: Images[] = [
    {
      id: 1,
      url: 'img_upperclothing/remeras.avif',
      alt: 'REMERAS',
      path: '/productos/remeras',
    },
    {
      id: 2,
      url: 'img_upperclothing/musculosas.avif',
      alt: 'MUSCULOSAS',
      path: '/productos/musculosas',
    },
    {
      id: 3,
      url: 'img_upperclothing/camisas.avif',
      alt: 'CAMISAS',
      path: '/productos/camisas',
    },
    {
      id: 4,
      url: 'img_upperclothing/tops.avif',
      alt: 'TOPS',
      path: '/productos/tops',
    },
]
  
export const bottoms: Images[] = [
    {
        id: 1,
        url: 'img_bottoms/pantalon.avif',
        alt: 'PANTALONES',
        path: '/productos/pantalones',
    },
    {
        id: 2,
        url: 'img_bottoms/bermuda.avif',
        alt: 'BERMUDAS',
        path: '/productos/bermudas',
    },
    {
        id: 3,
        url: 'img_bottoms/short.avif',
        alt: 'SHOTRS',
        path: '/productos/shotrs',
    },
    {
        id: 4,
        url: 'img_bottoms/pollera.avif',
        alt: 'POLLERAS',
        path: '/productos/polleras',
    },
]

export const completeLook: Images[] = [
    {
      id: 1,
      url: 'img_completelook/vestido.avif',
      alt: 'VESTIDOS',
      path: '/productos/vestidos',
    },
    {
      id: 2,
      url: 'img_completelook/conjunto.avif',
      alt: 'CONJUNTOS',
      path: '/productos/conjuntos',
    },
    {
      id: 3,
      url: 'img_completelook/cartera.avif',
      alt: 'CARTERAS',
      path: '/productos/carteras',
    },
    {
      id: 4,
      url: 'img_completelook/zapatilla.avif',
      alt: 'ZAPATILLAS',
      path: '/productos/zapatillas',
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

// ---
