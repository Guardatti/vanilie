import React, { useState } from 'react'
import { FiMenu } from "react-icons/fi";
import './navbar.css'
import { Link } from 'react-router-dom';
import { FaShoppingBag } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { GrSearch } from "react-icons/gr";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useAppSelector } from '../../redux/hooks';
import ModalCart from '../cart/ModalCart';
import Search from '../search/Search';



const Navbar: React.FC = () => {

  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const [cartOpen, setCartOpen] = useState<boolean>(false)

  const [searchOpen, setSearchOpen] = useState<boolean>(false)

  const cart = useAppSelector(state => state.cart.cart)

  const totalQuantity = cart.reduce((total, quantity) => {
    return total += quantity.quantity
  }, 0)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setCartOpen(false);
    setSearchOpen(false);
  }

  const toggleCart = () => {
    setCartOpen(!cartOpen);
    setMenuOpen(false);
    setSearchOpen(false);
  }

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
    setMenuOpen(false);
    setCartOpen(false);
  }

  const closeMenus = () => {
    setMenuOpen(false);
    setCartOpen(false);
    setSearchOpen(false);
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
        <Link to='/contacto' className='link' onClick={closeMenus}>CONTACTO</Link>
        <Link to='/sobre-nosotros' className='link' onClick={closeMenus}>SOBRE NOSOTROS</Link>
        
        <Link to='/inicio-de-sesion' className='link - link_user' onClick={closeMenus}>INICIAR SESION</Link>
        <span className='link - link_search' style={{cursor: 'pointer'}} onClick={toggleSearch}>BUSCAR</span>

      </nav>
      <div className='container-icons'>
        <GrSearch className='searchicon' onClick={toggleSearch}/>
        <FaUser className='usericon'/>
        <FaShoppingBag className='bagicon' onClick={toggleCart}/>
        {/*Poner máximo de compra 9 productos ya que el número 10 descentraliza el numero de la bolsa*/}
        <span className='cart-bubble' style={{cursor: 'pointer'}} onClick={toggleCart}>{totalQuantity}</span>
      </div>


      <ModalCart isOpen={cartOpen} setIsOpen={setCartOpen}/>

      <Search isOpen={searchOpen} setIsOpen={setSearchOpen}/>

      {((menuOpen) || (cartOpen) || (searchOpen)) && <div className='overlay' onClick={closeMenus}/>}

    </header>
  )
}

export default Navbar
