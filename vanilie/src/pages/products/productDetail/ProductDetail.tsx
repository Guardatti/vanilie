import React from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../../../components/data/products';
import '../productDetail.css'
import { useAppDispatch } from '../../../redux/hooks';
import { addToCart } from '../../../redux/cart/cartSlice';
import { formatPrice } from '../../../utils/formatPrice';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';


const ProductDetail: React.FC = () => {

    const {id} = useParams();

    const dispatch = useAppDispatch();

    const item = products.find((y) => y.id === parseInt(id || '')); 

    const handleAddToCart = () => {
        if (item) {
            dispatch(addToCart({
                id: item.id,
                title: item.title,
                description: item.description,
                img: item.img,
                brand: item.brand,
                price: item.price,
                sex: item.sex,
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
    
    return (
        <div className='container-product-detail-1'>
            {
                item ?
                <div className='container-product-detail-2' key={item.id}>
                    <div className='container-product-detail-3'>
                        <img src={item.img} alt={item.title} />
                    </div>
                    <div className='container-product-detail-4'>
                        <h2>{item.title}</h2>
                        <span style={{fontSize: '1.3rem', fontFamily: 'none'}}>{formatPrice(item.price)}</span>
                        <p>Sumérgete en el mundo de la perfumería de alta calidad con nuestra exclusiva selección de fragancias. Cada perfume ha sido cuidadosamente elaborado combinando notas clásicas y modernas, creando aromas que despiertan emociones y dejan una huella inolvidable. Desde esencias frescas y ligeras hasta fragancias intensas y sofisticadas, cada botella refleja elegancia, estilo y personalidad. Perfectos para cualquier ocasión, nuestros perfumes se adaptan a tu carácter y te acompañan a lo largo del día, ofreciendo una experiencia sensorial única que resalta tu presencia y distinción. Déjate envolver por la armonía de cada aroma y convierte cada momento en un recuerdo inolvidable.</p>
                        <button onClick={handleAddToCart}>Añadir a la cesta</button>
                        <div className='container-product-detail-5'>
                            <h3>Características</h3>
                            <div>
                                <span>Marca</span>
                                <span>{item.brand}</span>
                            </div>
                        </div>
                        <div className='container-product-detail-6'>
                            <h3>Descripción</h3>
                            <p>{item.description}</p>
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
