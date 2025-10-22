import axios from "axios";
import { FormDataRegister, ILoginData } from "../utils/interfaceFormDataLogin_Register/interfaceFormData";



export const createUser = async (data: FormDataRegister) => {

    try {
        
        const response = await axios.post("http://localhost:8080/auth/register", {
            name: data.name,
            surname: data.surname,
            email: data.email,
            password: data.password
        })

        return response.data

    } catch (error) {
        console.log(error);
    }

}

export const loginUser = async (data: ILoginData) => {

    try {
        
        const response = await axios.post("http://localhost:8080/auth/login", {
            email: data.email,
            password: data.password
        })

        return response.data
        

    } catch (error) {
        console.log(error);
    }

}