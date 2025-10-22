export interface ILoginData {
    email: string,
    password: string,
}

export interface IUser {
    name: string,
    surname: string,
    email: string,
    rol: string,
    token: string;
}

export interface FormDataRegister {
    name: string
    surname: string
    email: string
    password: string
}