import React, { ReactNode, useEffect } from 'react'
import './layout.css'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import { useLocation } from 'react-router-dom'


interface LayoutProps {
    children: ReactNode,
}

const Layout: React.FC<LayoutProps> = ({children}) => {

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

  return (
    <>
        <Navbar/>
        <div className='container'>
            {children}
        </div>
        <Footer />
    </>
  )
}

export default Layout
