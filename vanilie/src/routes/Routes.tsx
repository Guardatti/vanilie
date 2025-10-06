import { BrowserRouter, Navigate, Routes as ReactRoutes, Route } from "react-router-dom"
import Layout from "../components/layout/Layout"
import Home from "../pages/home/Home"
import PageNotFound from "../pages/error/PageNotFound"
import Return from "../pages/policy/return/Return"
import Privacy from "../pages/policy/privacy/Privacy"
import Aboutus from "../pages/aboutus/Aboutus"
import Allproducts from "../pages/products/allproducts/Allproducts"
import Login from "../pages/login/Login"
import Register from "../pages/register/Register"
import Contact from "../pages/contact/Contact"
import ProductoDetail from "../pages/products/productDetail/ProductDetail"
import ProductDetail from "../pages/products/productDetail/ProductDetail"
import CategoryProducts from "../pages/products/categoryProducts/CategoryProducts"
import CategorySex from "../pages/products/categorySex/CategorySex"
import NavbarProfile from "../components/navbarProfile/NavbarProfile"
import Orders from "../pages/profile/orders/Orders"
import PersonalData from "../pages/profile/personalData/PersonalData"
import Checkout from "../pages/checkout/Checkout"


const Routes = () => {
  return (
    <BrowserRouter>
        <Layout>
            <ReactRoutes>
                <Route path="/" element={<Home />}/>

                <Route path="/productos">

                  <Route index element={<Allproducts />} />
                  <Route path="id/:id" element={<ProductoDetail />} />

                  <Route path="marca">
                    <Route index element={<Navigate to="/productos" replace />} />
                    <Route path=":brand">
                      <Route index element={<CategoryProducts />} />
                      <Route path="id/:id" element={<ProductDetail />} />
                    </Route>
                  </Route>

                  <Route path="genero">
                    <Route index element={<Navigate to="/productos" replace />} />
                    <Route path=":gender">
                      <Route index element={<CategorySex />} />
                      <Route path="id/:id" element={<ProductoDetail />} />
                    </Route>
                  </Route>

                </Route>

                <Route path="/contacto" element={<Contact />}/>
                <Route path="/sobre-nosotros" element={<Aboutus />}/>
                <Route path="/politica-de-devolucion" element={<Return />}/>
                <Route path="/politica-de-privacidad" element={<Privacy />}/>
                
                <Route path="cuenta">
                  <Route index element={<Navigate to="inicio-de-sesion" replace />} />
                  <Route path="inicio-de-sesion" element={<Login />} />
                  <Route path="registro" element={<Register />} />
                  <Route path="perfil" element={<NavbarProfile />}>
                    <Route index element={<Navigate to="datos-personales" replace />} />
                    <Route path="datos-personales" element={<PersonalData />} />
                    <Route path="pedidos" element={<Orders />} />
                  </Route>
                </Route>

                <Route path="/pago" element={<Checkout />} />

                <Route path="*" element={<PageNotFound />} />
            </ReactRoutes>
        </Layout>
    </BrowserRouter>
  )
}

export default Routes
