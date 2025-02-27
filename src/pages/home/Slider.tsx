import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './slider.css'
import { sliderImages } from '../../utils/interfaceHome/interfaceSlider';


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
                    <SwiperSlide key={img.id}><img src={img.url} alt={img.alt} className='img-slider'/></SwiperSlide>
                ))
            }
        </Swiper>
    </>
  )
}

export default Slider