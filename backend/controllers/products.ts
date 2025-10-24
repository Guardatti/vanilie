import { Request, RequestHandler, Response } from "express";
import { Product } from "../models/products";




/* export const createProduct: RequestHandler = async (req: Request, res: Response) => {
    try {
        const { products } = req.body;

        if (!products || !Array.isArray(products) || products.length === 0) {
            res.status(400).json({
                msg: "Debe enviar un array de productos en la propiedad 'products'",
            });
            return
        }

        const createdProducts = await Product.insertMany(products);

        return res.status(201).json({
            msg: "Productos creados exitosamente",
            createdProducts
        });

    } catch (error) {

        console.error("Error al crear productos:", error);

    }
}; */


export const getProducts = async (req: Request, res: Response) => {

    try {

        const products = await Product.find();

        if (!products) {

            res.status(404).json({
                msg: "No hay productos cargados"
            });
    
            return

        }

        res.status(200).json({
            msg: "Productos obtenidos correctamente",
            products,
        });

    } catch (error) {

        console.error("Error al obtener productos:", error);
        
    }

};

export const getProductsByBrand = async (req: Request, res: Response) => {

    try {

        const { brand } = req.params

        const products = await Product.find({brand});

        if (!products) {

            res.status(404).json({
                msg: `No hay productos cargados de la marca ${brand}`
            });
    
            return

        }

        res.status(200).json({
            msg: "Productos obtenidos correctamente",
            products,
        });

    } catch (error) {

        console.error("Error al obtener productos:", error);
        
    }

};

export const getProductsBySex = async (req: Request, res: Response) => {

    try {

        const { sex } = req.params

        const products = await Product.find({sex});

        if (!products) {

            res.status(404).json({
                msg: 'No hay productos cargados'
            });
    
            return

        }

        res.status(200).json({
            msg: "Productos obtenidos correctamente",
            products,
        });

    } catch (error) {

        console.error("Error al obtener productos:", error);
        
    }

};

export const getProductsById = async (req: Request, res: Response) => {

    try {

        const { id } = req.params

        const product = await Product.findById(id);

        if (!product) {

            res.status(404).json({
                msg: 'El producto no está cargado'
            });
    
            return

        }

        res.status(200).json({
            msg: "Producto obtenido correctamente",
            product,
        });

    } catch (error) {

        console.error("Error al obtener el producto:", error);
        
    }

};