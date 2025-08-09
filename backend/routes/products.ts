import { Router } from 'express';
import { getProducts, newProduct } from '../controllers/products';


const router = Router();

router.post('/', newProduct)
router.get('/', getProducts)
router.get('/remeras', () => {})
router.get('/musculosas', () => {})
router.get('/pantalones', () => {})
router.get('/bermudas', () => {})
router.get('/zapatillas', () => {})
router.get('/camisas', () => {})
router.get('/tops', () => {}) 
router.get('/polleras', () => {})
router.get('/shorts', () => {})
router.get('/vestidos', () => {})
router.get('/conjuntos', () => {})
router.get('/carteras', () => {})

export default router;