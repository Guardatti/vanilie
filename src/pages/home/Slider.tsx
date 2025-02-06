import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './slider.css'

interface SliderImages {
    id: number,
    url: string,
    alt: string,
}


const sliderImages: SliderImages[]= [
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

const Slider: React.FC = () => {
  return (
    <>
        <Swiper     
        modules={[EffectFade, Pagination, Autoplay]}
        autoplay={{
        delay: 3500,
        }}
        effect="fade"
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        pagination={{clickable: true, dynamicBullets: true}}
        >
            {
                sliderImages.map((img) => (
                    <SwiperSlide key={img.id}><img src={img.url} alt={img.alt}/></SwiperSlide>
                ))
            }
        </Swiper>
    </>
  )
}

export default Slider