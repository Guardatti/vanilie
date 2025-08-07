import React from 'react'
import { useForm } from 'react-hook-form'
import './search.css'
import { FormData } from '../../utils/interfaceSearchProducts/interfaceSearchProducts';

interface ContactProps {
    isOpen: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
}

const Search: React.FC <ContactProps> = ({isOpen, setIsOpen}) => {
    
    const { register, handleSubmit } = useForm<FormData>();
    
    const onSubmit = () => {
        
        setIsOpen(false);

    }

    return (
        <form className={`search-poducts-form ${isOpen ? "open" : "close"}`} onSubmit={handleSubmit(onSubmit)}>
            <input type="text" {...register('search')} name="search" placeholder='...'/>
            <button type='submit'>Buscar</button>
        </form>
    )
}

export default Search
