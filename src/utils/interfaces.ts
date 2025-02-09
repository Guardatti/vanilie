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
      alt: 'Remeras',
    },
    {
      id: 2,
      url: 'img_upperclothing/musculosas.avif',
      alt: 'Musculosas',
    },
    {
      id: 3,
      url: 'img_upperclothing/camisas.avif',
      alt: 'Camisas',
    },
    {
      id: 4,
      url: 'img_upperclothing/tops.avif',
      alt: 'Tops',
    },
]
  
export const bottoms: Images[] = [
    {
        id: 1,
        url: 'img_bottoms/pantalon.avif',
        alt: 'Pantalon',
    },
    {
        id: 2,
        url: 'img_bottoms/bermuda.avif',
        alt: 'Bermuda',
    },
    {
        id: 3,
        url: 'img_bottoms/short.avif',
        alt: 'Short',
    },
    {
        id: 4,
        url: 'img_bottoms/pollera.avif',
        alt: 'Pollera',
    },
]

export const completeLook: Images[] = [
    {
      id: 1,
      url: 'img_completelook/vestido.avif',
      alt: 'Vestido',
    },
    {
      id: 2,
      url: 'img_completelook/conjunto.avif',
      alt: 'Conjunto',
    },
    {
      id: 3,
      url: 'img_completelook/cartera.avif',
      alt: 'Cartera',
    },
    {
      id: 4,
      url: 'img_completelook/zapatilla.avif',
      alt: 'Zapatilla',
    },
]

// ---