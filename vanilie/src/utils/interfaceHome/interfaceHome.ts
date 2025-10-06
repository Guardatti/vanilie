interface IHome {
    id: number,
    video_src: string,
    alt: string
}

export const principalHome: IHome[] = [
    {
        id: 1,
        video_src: '/img_home/miss_dior.mp4',
        alt: 'Perfume Miss de Dior'
    },
    {
        id: 2,
        video_src: '/img_home/blue_chanel.mp4',
        alt: 'Perfume Blue de Chanel'
    },
    {
        id: 3,
        video_src: '/img_home/carolina_herrera_good_girl.mp4',
        alt: 'Perfume Good Girl de Carolina Herrera'
    }
]