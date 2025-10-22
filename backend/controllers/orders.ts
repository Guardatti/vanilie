import { Request, Response } from "express";
import { ObjectId } from "mongoose";
import { IOrder, Order } from "../models/orders";



export const getOrders = async (req: Request, res: Response) => {

    const userID: ObjectId = req.body.userConfirmated._id;

    const condition = {user: userID}

    const orders = await Order.find(condition)

    res.status(200).json({
        data: [
            ...orders
        ]
    })

}

export const createOrder = async (req: Request, res: Response) => {

    const orderData: IOrder = req.body;

    const userID: ObjectId = req.body.userConfirmated._id;

    const data = {
        ...orderData,
        createdAt: new Date(),
        user: userID,
    }

    const order = new Order(data);

    await order.save();

    res.status(201).json({
        order
    })

}