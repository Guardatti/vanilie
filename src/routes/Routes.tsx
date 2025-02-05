import { BrowserRouter, Routes as ReactRoutes, Route } from "react-router-dom"
import Layout from "../components/layout/Layout"
import Home from "../pages/home/Home"


const Routes = () => {
  return (
    <BrowserRouter>
        <Layout>
            <ReactRoutes>
                <Route path="/" element={<Home />}/>
            </ReactRoutes>
        </Layout>
    </BrowserRouter>
  )
}

export default Routes
