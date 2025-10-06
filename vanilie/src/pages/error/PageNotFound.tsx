import React from 'react'
import './pagenotfound.css'
import { MdError } from "react-icons/md";


const PageNotFound: React.FC = () => {
  return (
    <div className='container-notfound'>
      <MdError style={{color: 'red', fontSize: '5rem'}}/>
    </div>
  )
}

export default PageNotFound
