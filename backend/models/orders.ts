import { model, Model, Schema, Types } from "mongoose";

interface IItem {
    id: number,
    title: string,
    description: string,
    img: string,
    brand: string,
    price: number,
    sex: string,
    quantity: number,
}

export interface IOrder {
    createdAt: Date;
    user: Types.ObjectId;
    price: number;
    items: IItem[];
    total: number;
}

const OrderSchema = new Schema<IOrder> ({
    createdAt: {
        type: Date,
        default: Date.now
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Usuarios',
        required: true
    },
    items: [
        {
            id: {
                type: Number, required: true
            },
            title: {
                type: String, required: true
            },
            description: {
                type: String, required: true
            },
            img: {
                type: String,
                required: true
            },
            brand:
            {
                type: String, required: true
            },
            price: {
                type: Number, required: true
            },
            sex: {
                type: String, required: true
            },
            quantity: {
                type: Number, required: true
            }
        }
    ],
    total: {
        type: Number,
        required: true
    }
})

export const Order: Model<IOrder> = model<IOrder>("Ordenes", OrderSchema)