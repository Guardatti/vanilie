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

  return (
    <header className='header'>
      <FiMenu className='menuicon' onClick={toggleMenu}/>
      <Link to='/' className='title'>VANILIE.</Link>
      <nav data-menu-open={menuOpen} className='navbar'>
        <div className='container_products'>
          <Link to='/productos' className='link'>Productos <MdKeyboardArrowDown /></Link>
          <div className='dropdownmenu'>
            <Link to='/' className='link_dropdownmenu'>Remeras</Link>
            <Link to='/' className='link_dropdownmenu'>Pantalones</Link>
            <Link to='/' className='link_dropdownmenu'>Bermudas</Link>
            <Link to='/' className='link_dropdownmenu'>Zapatillas</Link>
            <Link to='/' className='link_dropdownmenu'>Buzos</Link>
            <Link to='/' className='link_dropdownmenu'>Camperas</Link>
            <Link to='/' className='link_dropdownmenu'>Camisas</Link>
            <Link to='/' className='link_dropdownmenu'>Tops y bodies</Link>
            <Link to='/' className='link_dropdownmenu'>Polleras</Link>
            <Link to='/' className='link_dropdownmenu'>Shorts</Link>
            <Link to='/' className='link_dropdownmenu'>Vestidos</Link>
          </div>
        </div>
        <Link to='/hombre' className='link'>Hombre</Link>
        <Link to='/mujer' className='link'>Mujer</Link>
        <Link to='sobrenosotros' className='link'>Sobre nosotros</Link>
        <Link to='contacto' className='link'>Contacto</Link>
        <Link to='contacto' className='link - link_user'>Iniciar sesión</Link>
        <Link to='contacto' className='link - link_search'>Buscar</Link>

      </nav>
      <div className='container_icons'>
        <GrSearch className='searchicon'/>
        <FaUser className='usericon'/>
        <FaShoppingBag className='bagicon'/>
      </div>
    </header>
  )
}

export default Navbar
