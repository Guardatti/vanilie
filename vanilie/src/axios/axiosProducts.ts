import axios from "axios";


interface IData {
    sex?: string,
    brand?: string,
}


export const getProducts = async (data: IData = {}) => {

    try {
        
        const response = await axios.get(`http://localhost:8080/products`, {
            params: data
        })

        return response.data.products

    } catch (error) {
        console.log(error);
    }

}

export const getProductsBybrand = async (brand: string, data: IData = {}) => {

    try {      

        const response = await axios.get(`http://localhost:8080/products/brand/${brand}`, {
            params: data
        })

        return response.data.products

    } catch (error) {
        console.log(error);
    }

}

export const getProductsBySex = async (sex: string, data: IData = {}) => {

    try {
        
        const response = await axios.get(`http://localhost:8080/products/sex/${sex}`, {
            params: data
        })

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