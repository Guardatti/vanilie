import React from 'react'
import './personaldata.css'
import { useAppSelector } from '../../../redux/hooks'


const PersonalData: React.FC = () => {

    const { currentUser } = useAppSelector(state => state.user)

    return (
        <div className='container-personaldata-1'>
            <div className='container-personaldata-2'>
                <h2>PERFIL</h2>
            </div>
            <div className='container-personaldata-3'>
                <div className='container-personaldata-4'>
                    <label htmlFor="">Nombre</label>
                    <span>{currentUser?.name}</span>
                </div>
                <div className='container-personaldata-4'>
                    <label htmlFor="">Apellido</label>
                    <span>{currentUser?.surname}</span>
                </div>
                <div className='container-personaldata-4'>
                    <label htmlFor="">Email</label>
                    <span>{currentUser?.email}</span>
                </div>
                <div className='container-personaldata-4'>
                    <button>EDITAR</button>
                </div>
            </div>
        </div>
    )
}

export default PersonalData
