interface HomeImages {
    id: number,
    url: string,
    alt: string,
    path: string,
}

export const homeImages: HomeImages[] = [
    {
        id: 1,
        url: 'img_home/1.webp',
        alt: 'Camisas',
        path: '/productos/camisas',
    },
    {
        id: 2,
        url: 'img_home/2.webp',
        alt: 'Pantalones',
        path: '/productos/pantalones',
    },
    {
        id: 3,
        url: 'img_home/3.webp',
        alt: 'Zapatillas',
        path: '/productos/zapatillas',
    },
    {
        id: 4,
        url: 'img_home/4.webp',
        alt: 'Carteras',
        path: 'productos/carteras',
    }
]