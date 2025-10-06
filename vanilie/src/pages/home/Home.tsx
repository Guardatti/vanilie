import React, { useEffect } from 'react';
import './home.css'
import { Link, useNavigate } from 'react-router-dom';
import { principalHome } from '../../utils/interfaceHome/interfaceHome';
import { brands } from '../../utils/interfaceHome/interfaceBrands';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import ScrollReveal from "scrollreveal";


const Home: React.FC = () => {

  const navigate = useNavigate();

  useEffect(() => {
    ScrollReveal().reveal(".container-home-3", {
      origin: "right",
      distance: "100px",
      duration: 1000,
      easing: "ease-in-out",
      reset: false,
    });
    ScrollReveal().reveal(".container-home-6", {
      origin: "bottom",
      distance: "100px",
      duration: 1000,
      easing: "ease-in-out",
      reset: false,
    });
  },[])

  return (
    <div className='container-home'>
      {
        principalHome.map((x) => {
          return(
            <div className='container-home-1' key={x.id}>
              <video autoPlay loop muted playsInline title={x.alt}>
                <source src={x.video_src} type="video/mp4" />
              </video>
            </div>
          )
        })
      }
      <div className='container-home-2' style={{overflow: 'hidden'}}>
        <h2>MARCA DE PERFUMES</h2>
        <div className='container-home-3'>
          <Swiper
          modules={[ Autoplay ]}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          loop={true}
          speed={5000}
          freeMode={true}
          allowTouchMove={false}
          breakpoints={{
            320:{
                slidesPerView: 1,
                spaceBetween: 10,
            },
            576:{
                slidesPerView: 2,
                spaceBetween: 10,
            },
            768:{
                slidesPerView: 3,
                spaceBetween: 10,
            },
            1200:{
                slidesPerView: 5,
                spaceBetween: 10,
            }
          }}
          className='container-slide-brand-home'
          >
            {
              brands.map((x) => (
                <SwiperSlide key={x.id}>
                  <img src={x.img} alt={x.alt} className='img-slider-home' onClick={() => navigate(x.navigate)}/>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
      </div>
      <div className='container-home-6' style={{overflow: 'hidden'}}>
          <div className='container-home-7'>
            <h2>REGISTRATE PARA LAS ACTUALIZACIONES DE VANILLIE</h2>
          </div>
          <div className='container-home-8'>
            <p>Sé parte del universo Vanillie y accedé a un espacio creado para los amantes de la alta perfumería. Al registrarte, recibirás actualizaciones anticipadas sobre nuestras próximas colecciones, lanzamientos exclusivos, ediciones limitadas y experiencias diseñadas especialmente para vos. Disfrutá de contenido curado, recomendaciones personalizadas y descubrí antes que nadie las novedades que las mejores casas de perfumería del mundo tienen preparadas para vos. Mantenete siempre cerca del estilo, la elegancia y la inspiración que te definen.</p>
          </div>
          <Link to='/cuenta/registro' className='container-home-link-1'>+ Registrarse</Link>
      </div>
    </div>
  );
};

export default Home;