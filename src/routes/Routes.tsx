import { BrowserRouter, Routes as ReactRoutes, Route } from "react-router-dom"
import Layout from "../components/layout/Layout"


const Routes = () => {
  return (
    <BrowserRouter>
        <Layout>
            <ReactRoutes>
                <Route />
                <Route />
            </ReactRoutes>
        </Layout>
    </BrowserRouter>
  )
}

export default Routes
