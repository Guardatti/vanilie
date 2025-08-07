import { BrowserRouter, Routes as ReactRoutes, Route } from "react-router-dom"
import Layout from "../components/layout/Layout"
import Home from "../pages/home/Home"
import PageNotFound from "../pages/error/PageNotFound"
import Return from "../pages/policy/return/Return"
import Privacy from "../pages/policy/privacy/Privacy"
import Aboutus from "../pages/aboutus/Aboutus"
import Tshirts from "../pages/products/tshirts/Tshirts"
import Allproducts from "../pages/products/allproducts/Allproducts"
import Login from "../pages/login/Login"
import Register from "../pages/register/Register"
import Contact from "../pages/contact/Contact"


const Routes = () => {
  return (
    <BrowserRouter>
        <Layout>
            <ReactRoutes>
                <Route path="/" element={<Home />}/>

                <Route path="/productos">
                  <Route index element={<Allproducts />} />
                  <Route path="remeras" element={<Tshirts />} />
                  <Route path=":producto" element={<Home />} />
                </Route>

                <Route path="/hombre" element={<Home />}/>
                <Route path="/mujer" element={<Home />}/>
                <Route path="/contacto" element={<Contact />}/>
                <Route path="/sobre-nosotros" element={<Aboutus />}/>
                <Route path="/politica-de-devolucion" element={<Return />}/>
                <Route path="/politica-de-privacidad" element={<Privacy />}/>
                
                <Route path="/inicio-de-sesion" element={<Login />} />
                <Route path="/registro"  element={<Register />}/>

                <Route path="*" element={<PageNotFound />} />
            </ReactRoutes>
        </Layout>
    </BrowserRouter>
  )
}

export default Routes
