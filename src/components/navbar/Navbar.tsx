import React, { useState } from 'react'
import { FiMenu } from "react-icons/fi";
import './navbar.css'
import { Link } from 'react-router-dom';
import { FaShoppingBag } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { GrSearch } from "react-icons/gr";
import { MdKeyboardArrowDown } from "react-icons/md";


const Navbar: React.FC = () => {
 
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  const closeMenus = () => {
    setMenuOpen(false);
  }

  return (
    <header className='header'>
      <FiMenu className='menuicon' onClick={toggleMenu}/>
      <Link to='/' className='title' onClick={closeMenus}>VANILIE.</Link>
      <nav className={`navbar ${menuOpen ? "close" : "open"}`}>
        <div className='container_products'>
          <Link to='/productos' className='link' onClick={closeMenus}>Productos <MdKeyboardArrowDown /></Link>
          <div className='dropdownmenu'>
            <Link to='/' className='link_dropdownmenu' onClick={closeMenus}>Remeras</Link>
            <Link to='/' className='link_dropdownmenu' onClick={closeMenus}>Pantalones</Link>
            <Link to='/' className='link_dropdownmenu' onClick={closeMenus}>Bermudas</Link>
            <Link to='/' className='link_dropdownmenu' onClick={closeMenus}>Zapatillas</Link>
            <Link to='/' className='link_dropdownmenu' onClick={closeMenus}>Buzos</Link>
            <Link to='/' className='link_dropdownmenu' onClick={closeMenus}>Camperas</Link>
            <Link to='/' className='link_dropdownmenu' onClick={closeMenus}>Camisas</Link>
            <Link to='/' className='link_dropdownmenu' onClick={closeMenus}>Tops y bodies</Link>
            <Link to='/' className='link_dropdownmenu' onClick={closeMenus}>Polleras</Link>
            <Link to='/' className='link_dropdownmenu' onClick={closeMenus}>Shorts</Link>
            <Link to='/' className='link_dropdownmenu' onClick={closeMenus}>Vestidos</Link>
            <Link to='/' className='link_dropdownmenu' onClick={closeMenus}>Conjuntos</Link>
            <Link to='/' className='link_dropdownmenu' onClick={closeMenus}>Carteras</Link>
          </div>
        </div>
        <Link to='/hombre' className='link' onClick={closeMenus}>Hombre</Link>
        <Link to='/mujer' className='link' onClick={closeMenus}>Mujer</Link>
        <Link to='sobrenosotros' className='link' onClick={closeMenus}>Sobre nosotros</Link>
        <Link to='contacto' className='link' onClick={closeMenus}>Contacto</Link>
        <Link to='contacto' className='link - link_user' onClick={closeMenus}>Iniciar sesión</Link>
        <Link to='contacto' className='link - link_search' onClick={closeMenus}>Buscar</Link>

      </nav>
      <div className='container_icons'>
        <GrSearch className='searchicon'/>
        <FaUser className='usericon'/>
        <FaShoppingBag className='bagicon'/>
      </div>

      {menuOpen && <div className='overlay' onClick={closeMenus}/>}
      
    </header>
  )
}

export default Navbar
