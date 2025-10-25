import axios from "axios";


interface IData {
    sex?: string,
    brand?: string,
}


export const getProducts = async (data: IData = {}) => {

    const params: Record<string, string> = {};
    
    if (data.sex) {
        params.sex = data.sex;
    }
    if (data.brand) {
        params.brand = data.brand;
    }
    
    const queryString = new URLSearchParams(params).toString();

    try {

        const response = await axios.get(`http://localhost:8080/products?${queryString}`);
        return response.data.products;

    } catch (error) {
        console.log(error);
    }

}

export const getProductsBybrand = async (brand?: string, data?: IData) => {

    const params: Record<string, string> = {};
    
    if (data?.sex) {
        params.sex = data.sex;
    }
    
    const queryString = new URLSearchParams(params).toString();

    try {      

        const response = await axios.get(`http://localhost:8080/products/brand/${brand}?${queryString}`);
        return response.data.products

    } catch (error) {
        console.log(error);
    }

}

export const getProductsBySex = async (sex?: string, data?: IData) => {

    const params: Record<string, string> = {};

    if (data?.brand) {
        params.brand = data.brand;
    }

    const queryString = new URLSearchParams(params).toString();

    try {
        
        const response = await axios.get(`http://localhost:8080/products/sex/${sex}?${queryString}`)
        
        return response.data.products

    } catch (error) {
        console.log(error);
    }

}

export const getProductsById = async (_id: string) => {

    try {
        
        const response = await axios.get(`http://localhost:8080/products/id/${_id}`)
        
        return response.data.product

    } catch (error) {

        console.log(error);
        
    }

}

export const getProductsBySearch = async (data: string) => {

    try {
        
        const queryString = new URLSearchParams({q: data}).toString()

        const response = await axios.get(`http://localhost:8080/products/search?${queryString}`)

        return response.data.products

    } catch (error) {

        console.log(error);
        
    }
    
}