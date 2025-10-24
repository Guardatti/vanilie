import axios from "axios";


export const getProducts = async () => {

    try {
        
        const response = await axios.get("http://localhost:8080/products")

        return response.data.products

    } catch (error) {
        console.log(error);
    }

}

export const getProductsBybrand = async (brand: string) => {

    try {
        
        const response = await axios.get(`http://localhost:8080/products/brand/${brand}`)

        return response.data.products

    } catch (error) {
        console.log(error);
    }

}

export const getProductsBySex = async (sex: string) => {

    try {
        
        const response = await axios.get(`http://localhost:8080/products/sex/${sex}`)

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