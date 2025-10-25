import { Router } from "express";
import { collectionErrors } from "../middlewares/collectionErrors";
import { getProducts, getProductsByBrand, getProductsById, getProductsBySearch, getProductsBySex } from "../controllers/products";
// import { createProduct } from "../controllers/products";




const router = Router();

/* router.post(
    '/',
    [
        collectionErrors
    ],
    createProduct
) */

router.get(
    '/',
    [
        collectionErrors
    ],
    getProducts
)

router.get(
    '/brand/:brand',
    [
        collectionErrors
    ],
    getProductsByBrand
)

router.get(
    '/sex/:sex',
    [
        collectionErrors
    ],
    getProductsBySex
)

router.get(
    '/id/:id',
    [
        collectionErrors
    ],
    getProductsById
)

router.get(
    '/search',
    [
        collectionErrors
    ],
    getProductsBySearch
)

export default router