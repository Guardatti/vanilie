import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IProducts } from '../../../components/data/products';
import '../productDetail.css'
import { useAppDispatch } from '../../../redux/hooks';
import { addToCart } from '../../../redux/cart/cartSlice';
import { formatPrice } from '../../../utils/formatPrice';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { getProductsById } from '../../../axios/axiosProducts';


const ProductDetail: React.FC = () => {

    const { id } = useParams();

    const [product, setProduct] = useState<IProducts>()

    const [loading, setLoading] = useState<boolean>(false)

    const dispatch = useAppDispatch();

    const unslugify = (text: string) => {
        return text
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };

    const handleAddToCart = () => {
        if (product) {
            dispatch(addToCart({
                id: product._id,
                title: product.title,
                description: product.description,
                img: product.img,
                brand: product.brand,
                price: product.price,
                sex: product.sex,
                quantity: 1
            }));

            toast.success("Producto agregado a la cesta", {
                position: "bottom-right",
                autoClose: 1500,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
            })
        }
    }
    
    useEffect(() => {

        if (!id) {
            return
        }

        const findProducts = async (): Promise<void> => {

            try {
                
                setLoading(true)

                const response: IProducts = await getProductsById(id);

                setProduct(response)


            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false)
            }

        }

        findProducts();
        
    }, [id]);

    return (
        <div className='container-product-detail-1'>
            {
                loading ? 
                <div className='spinner' />
                :
                product ?
                <div className='container-product-detail-2' key={product._id}>
                    <div className='container-product-detail-3'>
                        <img src={product.img} alt={product.title} />
                    </div>
                    <div className='container-product-detail-4'>
                        <h2>{product.title}</h2>
                        <span style={{fontSize: '1.3rem', fontFamily: 'none'}}>{formatPrice(product.price)}</span>
                        <p>Sumérgete en el mundo de la perfumería de alta calidad con nuestra exclusiva selección de fragancias. Cada perfume ha sido cuidadosamente elaborado combinando notas clásicas y modernas, creando aromas que despiertan emociones y dejan una huella inolvidable. Desde esencias frescas y ligeras hasta fragancias intensas y sofisticadas, cada botella refleja elegancia, estilo y personalidad. Perfectos para cualquier ocasión, nuestros perfumes se adaptan a tu carácter y te acompañan a lo largo del día, ofreciendo una experiencia sensorial única que resalta tu presencia y distinción. Déjate envolver por la armonía de cada aroma y convierte cada momento en un recuerdo inolvidable.</p>
                        <button onClick={handleAddToCart}>Añadir a la cesta</button>
                        <div className='container-product-detail-5'>
                            <h3>Características</h3>
                            <div>
                                <span>Marca</span>
                                <span>{unslugify(product.brand)}</span>
                            </div>
                        </div>
                        <div className='container-product-detail-6'>
                            <h3>Descripción</h3>
                            <p>{product.description}</p>
                        </div>
                        <div className='container-product-detail-7'>
                            <h3>Opciones de entrega</h3>
                            <div className='container-product-detail-8'>
                                <p>Retiro en tienda</p>
                                <p>
                                    Podés retirar tu compra de manera gratuita
                                    en nuestra sucursal ubicada en José Antonio de Sucre <span style={{fontFamily: 'none', fontSize: '15px'}}>2247</span>.
                                    Los horarios de atención son de lunes a viernes de <span style={{fontFamily: 'none', fontSize: '15px'}}>10</span> a <span style={{fontFamily: 'none', fontSize: '15px'}}>21</span> hs.
                                </p>
                            </div>
                            <div className='container-product-detail-9'>
                                <p>Envío a domicilio</p>
                                <p>
                                    Recibí tu compra directamente en la puerta de tu casa con un costo 
                                    de <span style={{fontFamily: 'none', fontSize: '15px'}}>$4000</span>. El tiempo estimado 
                                    de entrega es entre <span style={{fontFamily: 'none', fontSize: '15px'}}>48</span> y <span style={{fontFamily: 'none', fontSize: '15px'}}>72</span> horas hábiles,
                                    dependiendo de tu ubicación. Te notificaremos por correo electrónico 
                                    cuando el pedido esté en camino para que puedas hacer el seguimiento.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                :
                <div className='error-container-product'>
                    <p>Error, el producto que busca no existe.</p>
                </div>
            }
            <ToastContainer />
        </div>
    )
}

export default ProductDetail;
