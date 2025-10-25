import React, { useEffect, useState } from 'react'
import '../products.css'
import { IProducts } from '../../../components/data/products'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/effect-fade';
import { Autoplay, EffectFade } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
import { imgByGender } from '../../../utils/interfaceCategoryProducts/interfaceCategoryProducts';
import Pagination from '@mui/material/Pagination';
import ScrollReveal from 'scrollreveal';
import { getProducts } from '../../../axios/axiosProducts';
import { GrSearch } from "react-icons/gr";
import { useForm } from 'react-hook-form';
import { IData } from '../../../utils/interfaceData/interfaceData';


const Allproducts: React.FC = () => {

    const navigate = useNavigate();

    const [allProducts, setProducts] = useState<IProducts[]>([])

    const {handleSubmit} = useForm()

    const [filterBrand, setFilterBrand] = useState('')
    const [filterSex, setFilterSex] = useState('')
    const [loading, setLoading] = useState<boolean>(false)

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 30;

    const offset = (currentPage - 1) * itemsPerPage;
    const currentItems = allProducts.slice(offset, offset + itemsPerPage);
    const pageCount = Math.ceil(allProducts.length / itemsPerPage);

    const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
        setCurrentPage(value);

        const productsContainer = document.querySelector('.container-general-title-filter');
        if (productsContainer) {
            productsContainer.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const onSubmit = async () => {

        const data: IData = {
            sex: filterSex || undefined,
            brand: filterBrand || undefined
        };

        try {
            setLoading(true)
            const response: IProducts[] = await getProducts(data);
            setProducts(response);
            setCurrentPage(1);
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }

    }

    useEffect(() => {

        const findProducts = async (): Promise<void> => {

            try {

                setLoading(true);
                const response: IProducts[] = await getProducts();
                setProducts(response);

            } catch (error) {
                console.error('Error al cargar productos:', error);
            } finally {
                setLoading(false);
            }

        }

        findProducts();

        setCurrentPage(1);

        ScrollReveal().reveal(".container-products", {
        origin: "bottom",
        distance: "100px",
        duration: 1000,
        easing: "ease-in-out",
        reset: false,
        });
        
    }, []);

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
                    {imgByGender.map((x) => (
                        <SwiperSlide key={x.id}>
                            <img src={x.img} alt={x.alt} className='img-slider-products'/>
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
                <div className='container-filter'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <select value={filterBrand} onChange={(e) => setFilterBrand(e.target.value)}>
                            <option value="">Marca</option>
                            <option value="bvlgari">Bvlgari</option>
                            <option value="carolina-herrera">Carolina Herrera</option>
                            <option value="chanel">Chanel</option>
                            <option value="creed">Creed</option>
                            <option value="dior">Dior</option>
                            <option value="giorgio-armani">Giorgio Armani</option>
                            <option value="givenchy">Givenchy</option>
                            <option value="jean-paul-gaultier">Jean Paul Gaultier</option>
                            <option value="ralph-lauren">Ralph Lauren</option>
                            <option value="tom-ford">Tom Ford</option>
                            <option value="versace">Versace</option>
                            <option value="victoria-secret">Victoria Secret</option>
                            <option value="yves-saint-laurent">Yves Saint Laurent</option>
                        </select>
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
                    loading ?
                    <div className="spinner" />
                    :
                    currentItems.map((product) => (
                        <div className='container-product-img-info' key={product._id}>
                            <div className='container-product-img'>
                                <img
                                    className='img-product'
                                    src={product.img}
                                    onClick={() => navigate(`/productos/id/${product._id}`)}
                                />
                            </div>
                        </div>
                    ))
                }
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: '30px'}}>
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
    )
}

export default Allproducts