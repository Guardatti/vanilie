import { Request, Response } from "express";
import { IProducts, Product } from "../models/products";


export const newProduct = async (req: Request, res: Response) => {

    try {
        
        const data: IProducts = req.body;

        const product = new Product<IProducts>(data);

        await product.save();

        if (!data.category || !data.img || !data.price || !data.sex || !data.title) {

            res.status(400).json({
                msg: 'Solicitud inválida: asegúrese de completar todos los campos obligatorios.'
            })

            return

        }

        res.status(201).json({
            msg: '¡Producto creado con éxito!',
            product,
        });

    } catch (error) {

        res.status(500).json(error)

    }

}

export const getProducts = async (req: Request, res: Response) => {

    try {

        const products = await Product.find();

        if (!products) {

            res.status(404).json({
                msg: '¡Los productos no se han encontrado!'
            })

            return

        }

        res.status(200).json({
            msg: 'Productos encontrados',
            products,
        })
        
    } catch (error) {
        
        res.status(500).json(error)

    }

}