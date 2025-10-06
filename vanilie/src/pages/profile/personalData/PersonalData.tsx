import React from 'react'
import './personaldata.css'


const PersonalData: React.FC = () => {
    return (
        <div className='container-personaldata-1'>
            <div className='container-personaldata-2'>
                <h2>PERFIL</h2>
            </div>
            <div className='container-personaldata-3'>
                <div className='container-personaldata-4'>
                    <label htmlFor="">Nombre</label>
                    <span>Nicolás</span>
                </div>
                <div className='container-personaldata-4'>
                    <label htmlFor="">Apellido</label>
                    <span>Guardatti</span>
                </div>
                <div className='container-personaldata-4'>
                    <label htmlFor="">Email</label>
                    <span>asdasd123123@gmail.com</span>
                </div>
                <div className='container-personaldata-4'>
                    <button>EDITAR</button>
                </div>
            </div>
        </div>
    )
}

export default PersonalData
