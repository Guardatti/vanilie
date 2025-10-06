import React, { useEffect, useState } from 'react';
import '../products.css';
import { products } from '../../../components/data/products';
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/effect-fade';
import { Autoplay, EffectFade } from 'swiper/modules';
import { useNavigate, useParams } from 'react-router-dom';
import { imgByGender } from '../../../utils/interfaceCategoryProducts/interfaceCategoryProducts';
import Pagination from '@mui/material/Pagination';
import ScrollReveal from 'scrollreveal';


const CategorySex: React.FC = () => {

    const navigate = useNavigate();

    const { gender } = useParams();

    const slugify = (text: string) => {
        return text
            .toLowerCase()
            .replace(/[\s]+/g, '-')
            .replace(/[^a-z0-9-]/g, '');
    };

    const filteredProducts = products.filter((x) => x.sex === gender);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 30;

    const offset = (currentPage - 1) * itemsPerPage;
    const currentItems = filteredProducts.slice(offset, offset + itemsPerPage);
    const pageCount = Math.ceil(filteredProducts.length / itemsPerPage);

    const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
        setCurrentPage(value);

        const productsContainer = document.querySelector('.container-general-title-filter');
        if (productsContainer) {
            productsContainer.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        setCurrentPage(1);
    }, [gender]);

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
                    {imgByGender
                        .filter((z) => slugify(z.gender) === gender)
                        .map((x) => (
                            <SwiperSlide key={x.id}>
                                <img src={x.img} alt={x.alt} className='img-slider-products' />
                            </SwiperSlide>
                        ))}
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
                {currentItems.map((product) => (
                    <div className='container-product-img-info' key={product.id}>
                        <div className='container-product-img'>
                            <img
                                className='img-product'
                                src={product.img}
                                onClick={() => navigate(`/productos/genero/${gender}/id/${product.id}`)}
                            />
                        </div>
                    </div>
                ))}
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: '30px' }}>
                <Pagination
                    count={pageCount}
                    page={currentPage}
                    onChange={handlePageChange}
                    color="primary"
                    siblingCount={1}
                    boundaryCount={1}
                    sx={{
                        "& .MuiPaginationItem-root.Mui-selected": {
                            backgroundColor: "#000000",
                            color: "white",
                        },
                    }}
                />
            </div>
        </div>
    );
};

export default CategorySex;
