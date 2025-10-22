import { Router } from "express";
import { createOrder, getOrders } from "../controllers/orders";
import { validatorJWT } from "../middlewares/validatorJWT";
import { collectionErrors } from "../middlewares/collectionErrors";
import { check } from "express-validator";




const router = Router();


router.get(
    '/',
    [
        validatorJWT,
        collectionErrors,
    ],
    getOrders
)

router.post(
    '/',
    [
        validatorJWT,
        check("total", "El total es obligatorio").not().isEmpty(),
        check("items", "El array de productos es obligatorio").not().isEmpty(),
        collectionErrors,
    ],
    createOrder
)

export default router;