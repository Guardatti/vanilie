import React, { useEffect } from 'react'
import '../products.css'
import { products } from '../../../components/data/products'
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/effect-fade';
import { Autoplay, EffectFade } from 'swiper/modules';
import { useNavigate, useParams } from 'react-router-dom';
import { imgByGender } from '../../../utils/interfaceCategoryProducts/interfaceCategoryProducts';
import ScrollReveal from 'scrollreveal';


const CategoryProducts: React.FC = () => {

    const navigate = useNavigate();

    const {brand} = useParams();

    const slugify = (text: string) => {
        return text
            .toLowerCase()
            .replace(/[\s]+/g, '-')
            .replace(/[^a-z0-9-]/g, '');
    };

    useEffect(() => {
        ScrollReveal().reveal(".container-products", {
        origin: "bottom",
        distance: "100px",
        duration: 1000,
        easing: "ease-in-out",
        reset: false,
        });
    }, [])

    return (
        <div className='container-product-general'>
            <div className='container-product-general-1'>
                <Swiper
                    effect={'fade'}
                    modules={[EffectFade, Autoplay]}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    className="container-slide-img"
                >
                    {
                        imgByGender.filter((z) => slugify(z.brand) === brand).map((x) => {
                            return(
                                <SwiperSlide key={x.id}>
                                    <img src={x.img} alt={x.alt} className='img-slider-products'/>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
            <div className='container-product-general-2'>
                <p>
                    En Vanilie creemos que cada perfume es un reflejo de estilo y personalidad. Nuestras fragancias, para hombre y mujer, acompañan cada momento de la vida: desde la audacia y luminosidad femenina hasta la elegancia y distinción masculina. Cada aroma despierta emociones y se prolonga en una experiencia de belleza completa, diseñada para quienes buscan dejar huella.
                </p>
            </div>
            <div className='container-general-title-filter'>
                <h1>PRODUCTOS</h1>
                <div className='container-icon-filter'>
                    <span>Filtrar</span>
                    <HiAdjustmentsHorizontal className='icon-adjustments'/>
                </div>
            </div>
            <div className='container-products'>
                {
                    products.filter((x) => slugify(x.brand) === brand).map((product) => (
                        <div className='container-product-img-info' key={product.id}>
                            <div className='container-product-img'>
                                <img className='img-product' src={product.img} onClick={() => navigate(`/productos/marca/${brand}/id/${product.id}`)}/>
                            </div>
                        </div>
                        ))
                }
            </div>
        </div>
    )
}

export default CategoryProducts;
