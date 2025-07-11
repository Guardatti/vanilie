// ---

interface loginForm {
    email: string,
    password: string,
}

export const initialValueLogin: loginForm= {
    email: '',
    password: ''
}

// ---

interface registerForm {
    name: string,
    surname: string,
    email: string,
    password: string,
}

export const initialValueRegiter: registerForm = {
    name: '',
    surname: '',
    email: '',
    password: '',
}
