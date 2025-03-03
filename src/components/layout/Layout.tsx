import React, { ReactNode, useEffect } from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import { useLocation } from 'react-router-dom'
import { AnimatePresence, easeInOut, motion } from 'framer-motion'

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
        <AnimatePresence mode='wait'>
          <motion.div style={{marginTop: 80}} initial={{opacity: 0, y: '-100vh'}} animate={{opacity: 1, y: 0}} transition={{duration: 1, ease: easeInOut}} exit={{opacity: 0, x: '100vw'}} key={pathname} layout>
            {children}
          </motion.div>
        </AnimatePresence>
        <Footer />
    </>
  )
}

export default Layout
