import React from 'react'
import './navbarprofile.css';
import { NavLink, Outlet, useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setCurrentUser } from '../../redux/user/userSlice';




const NavbarProfile: React.FC = () => {

    const navigate = useNavigate()

    const { currentUser } = useAppSelector(state => state.user);

    const dispatch = useAppDispatch();

    return (
        <div className='container-profile-1'>
            <div className='container-profile-2'>
                <div className='container-profile-3'>
                    <img src="/user_icon.webp"/>
                    <span>{currentUser?.name?.slice(0, 10)}</span>
                </div>
                <nav className='container-navbarProfile-1'>
                    <NavLink to='datos-personales' className='navlink-profile'>Datos personales</NavLink>
                    <NavLink to='pedidos' className='navlink-profile'>Pedidos</NavLink>
                    <span className='navlink-profile' onClick={() => {dispatch(setCurrentUser(null)) ; navigate('/cuenta/inicio-de-sesion')}}>Cerrar sesión</span>
                </nav>
            </div>
            <div className='container-profile-4'>
                <Outlet /> 
            </div>
        </div>
    )
}

export default NavbarProfile