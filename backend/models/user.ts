import { model, Model, Schema } from "mongoose";
import { ROLES } from "../helpers/constants";

export interface IUser {
    name: string;
    surname: string;
    email: string;
    password: string;
    rol?: string;
}

const UserSchema = new Schema<IUser>({
    name: {
        type: String,
        required: [true, "El nombre es obligatorio"]
    },
    surname: {
        type: String,
        required: [true, "El apellido es obligatorio"]
    },
    email: {
        type: String,
        required: [true, "El email es obligatorio"]
    },
    password: {
        type: String,
        required: [true, "La contraseña es obligatoria"]      
    },
    rol: {
        type: String,
        default: ROLES.user
    }
})

UserSchema.methods.toJSON = function() {
    const {__v, password, _id, ...user} = this.toObject();
    
    return user;
}

export const User: Model<IUser> = model<IUser>("Usuarios", UserSchema)