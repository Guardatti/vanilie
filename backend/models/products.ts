import { model, Model, Schema } from "mongoose";

export interface IProducts {
    title: string,
    img: string,
    category: string,
    price: number,
    sex: string,
}

const productsSchema = new Schema<IProducts>({

    title:{
        type: String,
        required: true,
    },

    img:{
        type: String,
        required: true,
    },

    category:{
        type: String,
        required: true,
    },

    price: {
        type: Number,
        required: true,
    },

    sex: {
        type: String,
        required: true,
    }

})

export const Product: Model<IProducts> = model<IProducts>("Productos", productsSchema)

