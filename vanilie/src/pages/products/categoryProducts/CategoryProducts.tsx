import React, { useEffect, useState } from 'react'
import '../products.css'
import { IProducts } from '../../../components/data/products'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/effect-fade';
import { Autoplay, EffectFade } from 'swiper/modules';
import { useNavigate, useParams } from 'react-router-dom';
import { imgByGender } from '../../../utils/interfaceCategoryProducts/interfaceCategoryProducts';
import ScrollReveal from 'scrollreveal';
import { getProductsBybrand } from '../../../axios/axiosProducts';
import { GrSearch } from 'react-icons/gr';
import { useForm } from 'react-hook-form';
import { IData } from '../../../utils/interfaceData/interfaceData';


const CategoryProducts: React.FC = () => {

    const navigate = useNavigate();

    const { brand } = useParams();

    const { handleSubmit } = useForm()

    const [filterSex, setFilterSex] = useState('')

    const [productsByBrand, setProductsByBrand] = useState<IProducts[]>([])

    const onSubmit = async () => {

        const data: IData = {
            sex: filterSex || undefined,
        };

        const response: IProducts[] = await getProductsBybrand(brand, data);
        setProductsByBrand(response);
        
    }

    useEffect(() => {
        
        if (!brand) {
            navigate('/')
            return
        }

        if (brand !== "bvlgari" && brand !== "carolina-herrera" && brand !== "chanel" && brand !== "creed" && brand !== "dior" && brand !== "giorgio-armani" && brand !== "givenchy" && brand !== "jean-paul-gaultier" && brand !== "ralph-lauren" && brand !== "tom-ford" && brand !== "versace" && brand !== "victoria-secret" && brand !== "yves-saint-laurent") {
            navigate('/')
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
                <div className='container-filter'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <select value={filterSex} onChange={(e) => setFilterSex(e.target.value)}>
                            <option value="">Genero</option>
                            <option value="hombre" >Hombre</option>
                            <option value="mujer" >Mujer</option>
                        </select>
                        <button type='submit' className='button-filter-search'><GrSearch className='filter-search'/></button>
                    </form>
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
