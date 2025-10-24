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
        res.status(500).json({
            msg: "Error en el servidor"
        })

    }
}; */


export const getProducts = async (req: Request, res: Response) => {

    try {

        const { brand, sex } = req.query

        const filter: any = {};

        if (brand) {
            filter.brand = brand;
        }

        if (sex) {
            filter.sex = sex;
        }

        const products = await Product.find(filter)
        
        if (!products || products.length === 0) {

            res.status(404).json({
                msg: "No hay productos cargados"
            });
    
            return
        
        }

        res.status(200).json({
            products
        })

    } catch (error) {

        console.error("Error al obtener productos:", error);
        res.status(500).json({
            msg: "Error en el servidor"
        })
    }

};

export const getProductsByBrand = async (req: Request, res: Response) => {

    try {

        const { brand } = req.params
        const { sex } = req.query

        const filter: any = { brand };
        
        if (sex) {
            filter.sex = sex;
        }

        const products = await Product.find(filter);

        if (!products || products.length === 0) {

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
        res.status(500).json({
            msg: "Error en el servidor"
        })
    }

};

export const getProductsBySex = async (req: Request, res: Response) => {

    try {

        const { sex } = req.params
        const { brand } = req.query

        const filter: any = { sex };
        
        if (brand) {
            filter.brand = brand;
        }

        const products = await Product.find(filter);

        if (!products || products.length === 0) {

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
        res.status(500).json({
            msg: "Error en el servidor"
        })
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
        res.status(500).json({
            msg: "Error en el servidor"
        })
    }

};