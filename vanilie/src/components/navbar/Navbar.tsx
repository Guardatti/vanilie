import React, { useState } from 'react'
import { FiMenu } from "react-icons/fi";
import './navbar.css'
import { Link, useNavigate } from 'react-router-dom';
import { GrSearch } from "react-icons/gr";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import ModalCart from '../cart/ModalCart';
import Search from '../search/Search';
import { SlHandbag } from "react-icons/sl";
import { LuUserRound } from "react-icons/lu";
import { setCurrentUser } from '../../redux/user/userSlice';



const Navbar: React.FC = () => {

  const { currentUser } = useAppSelector(state => state.user);

  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const [cartOpen, setCartOpen] = useState<boolean>(false)

  const [searchOpen, setSearchOpen] = useState<boolean>(false)

  const [menuProducts, setMenuProducts] = useState<boolean>(false)

  const cart = useAppSelector(state => state.cart.cart)

  const dispatch = useAppDispatch()

  const totalQuantity = cart.reduce((total, quantity) => {
    return total += quantity.quantity
  }, 0)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setCartOpen(false);
    setSearchOpen(false);
    setMenuProducts(false);
  }

  const toggleCart = () => {
    setCartOpen(!cartOpen);
    setMenuOpen(false);
    setSearchOpen(false);
    setMenuProducts(false);
  }

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
    setMenuOpen(false);
    setCartOpen(false);
    setMenuProducts(false);
  }

  const toggleDropdownMenu = () => {
    setMenuProducts(!menuProducts)
  }

  const closeMenus = () => {
    setMenuOpen(false);
    setCartOpen(false);
    setSearchOpen(false);
    setMenuProducts(false);
  }

  const handleUser = () => {

    if (currentUser) {
      navigate('/cuenta/perfil/datos-personales')
    } else {
      navigate('/cuenta/inicio-de-sesion')
    }

  }

  return (
    <header className='header'>
      <FiMenu className='menuicon' onClick={toggleMenu}/>
      <a href='/' className='title' onClick={closeMenus}>VANILIE.</a>
      <nav className={`navbar ${menuOpen ? "close" : "open"}`}>
        <Link to='/' className='link' onClick={closeMenus}>INICIO</Link>
        <div className='container-navbar'>
          <div className='container-link-and-arrow'>
            <Link to='/productos' className='link' onClick={closeMenus}>PRODUCTOS</Link>
            <MdKeyboardArrowDown className='mdkeyboardarrowdown' onClick={toggleDropdownMenu}/>
          </div>
          <div className={`dropdownmenu ${menuProducts ? "open" : ""}`}>
            <Link to='/productos/marca/bvlgari' className='link_dropdownmenu' onClick={closeMenus}>Bvlgari</Link>
            <Link to='/productos/marca/carolina-herrera' className='link_dropdownmenu' onClick={closeMenus}>Carolina Herrera</Link>
            <Link to='/productos/marca/chanel' className='link_dropdownmenu' onClick={closeMenus}>Chanel</Link>
            <Link to='/productos/marca/creed' className='link_dropdownmenu' onClick={closeMenus}>Creed</Link>
            <Link to='/productos/marca/dior' className='link_dropdownmenu' onClick={closeMenus}>Dior</Link>
            <Link to='/productos/marca/giorgio-armani' className='link_dropdownmenu' onClick={closeMenus}>Giorgio Armani</Link>
            <Link to='/productos/marca/givenchy' className='link_dropdownmenu' onClick={closeMenus}>Givenchy</Link>
            <Link to='/productos/marca/jean-paul-gaultier' className='link_dropdownmenu' onClick={closeMenus}>Jean Paul Gaultier</Link>
            <Link to='/productos/marca/ralph-lauren' className='link_dropdownmenu' onClick={closeMenus}>Ralph Lauren</Link>
            <Link to='/productos/marca/tom-ford' className='link_dropdownmenu' onClick={closeMenus}>Tom Ford</Link>
            <Link to='/productos/marca/versace' className='link_dropdownmenu' onClick={closeMenus}>Versace</Link>
            <Link to='/productos/marca/victoria-secret' className='link_dropdownmenu' onClick={closeMenus}>Victoria's Secret</Link>
            <Link to='/productos/marca/yves-saint-laurent' className='link_dropdownmenu' onClick={closeMenus}>Yves Saint Laurent</Link>
          </div>
        </div>
        <Link to='/productos/genero/hombre' className='link' onClick={closeMenus}>HOMBRE</Link>  
        <Link to='/productos/genero/mujer' className='link' onClick={closeMenus}>MUJER</Link>
        <Link to='/contacto' className='link' onClick={closeMenus}>CONTACTO</Link>
        <Link to='/sobre-nosotros' className='link' onClick={closeMenus}>SOBRE NOSOTROS</Link>
        
        <span className='link - link_search' style={{cursor: 'pointer'}} onClick={toggleSearch}>BUSCAR</span>
        {
          currentUser ?
          <>
            <Link to='/cuenta/perfil/datos-personales' className='link - link_perfil' onClick={closeMenus}>PERFIL</Link>
            <Link to='/cuenta/perfil/pedidos' className='link - link_pedidos' onClick={closeMenus}>MIS PEDIDOS</Link>
            <span className='link - link_user' style={{cursor: 'pointer'}}  onClick={() => {closeMenus() ; dispatch(setCurrentUser(null)) ; navigate('/cuenta/inicio-de-sesion')}}>CERRAR SESION</span>
          </>
          :
          <Link to='/cuenta/inicio-de-sesion' className='link - link_user' onClick={closeMenus}>INICIAR SESION</Link>
        }

      </nav>
      <div className='container-icons'>
        <GrSearch className='searchicon' onClick={toggleSearch}/>
        <LuUserRound className='usericon' onClick={handleUser}/>
        <SlHandbag className='bagicon' onClick={toggleCart}/>
        {
          totalQuantity > 0 && (
            <span className='cart-bubble' style={{cursor: 'pointer'}} onClick={toggleCart}>{totalQuantity}</span>
          )
        }
      </div>


      <ModalCart isOpen={cartOpen} setIsOpen={setCartOpen}/>

      <Search isOpen={searchOpen} setIsOpen={setSearchOpen}/>

      {((menuOpen) || (cartOpen) || (searchOpen)) && <div className='overlay' onClick={closeMenus}/>}

    </header>
  )
}

export default Navbar
