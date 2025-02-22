import React, { useState } from 'react'
import { FiMenu } from "react-icons/fi";
import './navbar.css'
import { Link } from 'react-router-dom';
import { FaShoppingBag } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { GrSearch } from "react-icons/gr";
import { MdKeyboardArrowDown } from "react-icons/md";
import Contact from '../contact/Contact';



const Navbar: React.FC = () => {
 
  const [menuOpen, setMenuOpen] = useState(false);

  const [contactOpen, setContactOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setContactOpen(false);
  }

  const toggleContact = () => {
    setContactOpen(!contactOpen);
    setMenuOpen(false);
  }

  const closeMenus = () => {
    setMenuOpen(false);
    setContactOpen(false);
  }

  return (
    <header className='header'>
      <FiMenu className='menuicon' onClick={toggleMenu}/>
      <Link to='/' className='title' onClick={closeMenus}>VANILIE.</Link>
      <nav className={`navbar ${menuOpen ? "close" : "open"}`}>
        <div className='container-navbar'>
          <Link to='/productos' className='link' onClick={closeMenus}>PRODUCTOS <MdKeyboardArrowDown /></Link>
          <div className='dropdownmenu'>
            <Link to='/productos/remeras' className='link_dropdownmenu' onClick={closeMenus}>Remeras</Link>
            <Link to='/productos/musculosas' className='link_dropdownmenu' onClick={closeMenus}>Musculosas</Link>
            <Link to='/productos/pantalones' className='link_dropdownmenu' onClick={closeMenus}>Pantalones</Link>
            <Link to='/productos/bermudas' className='link_dropdownmenu' onClick={closeMenus}>Bermudas</Link>
            <Link to='/productos/zapatillas' className='link_dropdownmenu' onClick={closeMenus}>Zapatillas</Link>
            <Link to='/productos/camisas' className='link_dropdownmenu' onClick={closeMenus}>Camisas</Link>
            <Link to='/productos/tops' className='link_dropdownmenu' onClick={closeMenus}>Tops</Link>
            <Link to='/productos/polleras' className='link_dropdownmenu' onClick={closeMenus}>Polleras</Link>
            <Link to='/productos/shorts' className='link_dropdownmenu' onClick={closeMenus}>Shorts</Link>
            <Link to='/productos/vestidos' className='link_dropdownmenu' onClick={closeMenus}>Vestidos</Link>
            <Link to='/productos/conjuntos' className='link_dropdownmenu' onClick={closeMenus}>Conjuntos</Link>
            <Link to='/productos/carteras' className='link_dropdownmenu' onClick={closeMenus}>Carteras</Link>
          </div>
        </div>
        <Link to='/hombre' className='link' onClick={closeMenus}>HOMBRE</Link>
        <Link to='/mujer' className='link' onClick={closeMenus}>MUJER</Link>
        <Link to='/sobre-nosotros' className='link' onClick={closeMenus}>SOBRE NOSOTROS</Link>
        <span className='link' style={{cursor: 'pointer'}} onClick={toggleContact}>CONTACTO</span>
        <Link to='/iniciar-sesion' className='link - link_user' onClick={closeMenus}>INICIAR SESION</Link>
        <Link to='/buscar' className='link - link_search' onClick={closeMenus}>BUSCAR</Link>

      </nav>
      <div className='container-icons'>
        <GrSearch className='searchicon'/>
        <FaUser className='usericon'/>
        <FaShoppingBag className='bagicon'/>
        {/*Poner máximo de compra 9 productos ya que el número 10 descentraliza el numero de la bolsa*/}
        <span className='cart-bubble'>0</span>
      </div>

      <Contact isOpen={contactOpen} setIsOpen={setContactOpen}/>

      {((menuOpen) || (contactOpen)) && <div className='overlay' onClick={closeMenus}/>}

    </header>
  )
}

export default Navbar
