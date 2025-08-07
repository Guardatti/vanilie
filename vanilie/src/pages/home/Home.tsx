import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, EffectFade } from 'swiper/modules';
import { sliderImages } from '../../utils/interfaceHome/interfaceSlider';
import './home.css'
import { homeImages } from '../../utils/interfaceHome/interfaceHome';
import { Link, useNavigate } from 'react-router-dom';



const Home: React.FC = () => {

  const navigate = useNavigate();

  return (
    <div className='container-home'>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        allowTouchMove={false}
        modules={[EffectFade, Autoplay]}
        className="mySwiper"
      >
        {
          sliderImages.map((x) => {
            return(
              <SwiperSlide key={x.id}>
                <img src={x.url} alt={x.alt} />
              </SwiperSlide>
            )
          })
        }
      </Swiper>
      <div className='container-home-1'>
        <div className='container-home-2'>
          <h2>SELECCIÓN EXCLUSIVA DE LA CASA</h2>
        </div>
        <div className='container-home-3'>
          {
            homeImages.map((x) => {
              return(
                <div className='container-home-4' key={x.id}>
                  <img src={x.url} alt={x.alt} onClick={() => navigate(x.path)}/>
                  <div className='container-home-5'>
                    <Link to={x.path} className='container-home-link'>{x.alt}</Link>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className='container-home-6'>
          <div className='container-home-7'>
            <h2>REGISTRATE PARA LAS ACTUALIZACIONES DE VANILLIE</h2>
          </div>
          <div className='container-home-8'>
            <p>Sé parte del universo Vanillie y accedé a un espacio pensado para quienes valoran lo único. Al registrarte, recibirás actualizaciones anticipadas sobre nuestras próximas colecciones, lanzamientos limitados, noticias especiales y experiencias diseñadas especialmente para vos. Disfrutá de contenido curado, recomendaciones personalizadas y la posibilidad de descubrir antes que nadie las novedades que la casa tiene preparadas. Mantenete siempre cerca del estilo y la inspiración que te definen.</p>
          </div>
          <Link to='/registro' className='container-home-link-1'>+ Registrarse</Link>
      </div>
    </div>
  );
};

export default Home;