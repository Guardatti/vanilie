"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProducts = exports.newProduct = void 0;
const products_1 = require("../models/products");
const newProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        if (!data.category || !data.img || !data.price || !data.sex || !data.title) {
            res.status(400).json({
                msg: 'Solicitud inválida: asegúrese de completar todos los campos obligatorios.'
            });
            return;
        }
        const product = new products_1.Product(data);
        yield product.save();
        res.status(201).json({
            msg: '¡Producto creado con éxito!',
            product,
        });
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.newProduct = newProduct;
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield products_1.Product.find();
        if (!products) {
            res.status(404).json({
                msg: '¡Los productos no se han encontrado!'
            });
            return;
        }
        res.status(200).json({
            msg: '¡Productos encontrado!',
            products,
        });
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.getProducts = getProducts;
