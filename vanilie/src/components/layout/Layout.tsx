import React, { ReactNode, useEffect } from 'react'
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
        <Navbar />
        <div style={{marginTop: 80}}>
          {children}
        </div>
        <Footer />
    </>
  )
}

export default Layout
