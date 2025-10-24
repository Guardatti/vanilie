import React, { useEffect, useState } from 'react'
import '../products.css'
import { IProducts } from '../../../components/data/products'
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/effect-fade';
import { Autoplay, EffectFade } from 'swiper/modules';
import { useNavigate, useParams } from 'react-router-dom';
import { imgByGender } from '../../../utils/interfaceCategoryProducts/interfaceCategoryProducts';
import ScrollReveal from 'scrollreveal';
import { getProductsBybrand } from '../../../axios/axiosProducts';


const CategoryProducts: React.FC = () => {

    const navigate = useNavigate();

    const {brand} = useParams();

    const [productsByBrand, setProductsByBrand] = useState<IProducts[]>([])

    useEffect(() => {
        
        if (!brand) {
            return
        }

        const findProducts = async (): Promise<void> => {
        
            const response: IProducts[] = await getProductsBybrand(brand);
        
                setProductsByBrand(response)
        
            }
        
        findProducts();

        ScrollReveal().reveal(".container-products", {
        origin: "bottom",
        distance: "100px",
        duration: 1000,
        easing: "ease-in-out",
        reset: false,
        });
    }, [brand])

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
                        imgByGender.filter((z) => z.brand === brand).map((x) => {
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
                    productsByBrand.filter((x) => x.brand === brand).map((product) => (
                        <div className='container-product-img-info' key={product._id}>
                            <div className='container-product-img'>
                                <img className='img-product' src={product.img} onClick={() => navigate(`/productos/marca/${brand}/id/${product._id}`)}/>
                            </div>
                        </div>
                        ))
                }
            </div>
        </div>
    )
}

export default CategoryProducts;
