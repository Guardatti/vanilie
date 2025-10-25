import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import './search.css'
import { FormData } from '../../utils/interfaceSearchProducts/interfaceSearchProducts';
import { useNavigate } from 'react-router-dom';

interface ContactProps {
    isOpen: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
}

const Search: React.FC <ContactProps> = ({isOpen, setIsOpen}) => {
    
    const [searchTerm, setSearchTerm] = useState('');

    const { handleSubmit } = useForm<FormData>();
    
    const navigate = useNavigate();

    const onSubmit = () => {
        
        if (searchTerm.trim()) {
            navigate(`/productos/search?q=${searchTerm.trim()}`);
            setSearchTerm('')
        }

        setIsOpen(false);

    }

    return (
        <form className={`search-poducts-form ${isOpen ? "open" : "close"}`} onSubmit={handleSubmit(onSubmit)}>
            <input
            type="text"
            name="search"
            placeholder='...'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type='submit'>Buscar</button>
        </form>
    )
}

export default Search
