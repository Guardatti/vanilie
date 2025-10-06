import React from 'react'
import './navbarprofile.css';
import { NavLink, Outlet } from "react-router-dom"




const NavbarProfile: React.FC = () => {

    return (
        <div className='container-profile-1'>
            <div className='container-profile-2'>
                <div className='container-profile-3'>
                    <img src="/user_icon.webp"/>
                    <span>Nicolás</span>
                </div>
                <nav className='container-navbarProfile-1'>
                    <NavLink to='datos-personales' className='navlink-profile'>Datos personales</NavLink>
                    <NavLink to='pedidos' className='navlink-profile'>Pedidos</NavLink>
                    <span className='navlink-profile'>Cerrar sesión</span>
                </nav>
            </div>
            <div className='container-profile-4'>
                <Outlet /> 
            </div>
        </div>
    )
}

export default NavbarProfile