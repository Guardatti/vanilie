"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = require("mongoose");
const productsSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    category: {
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
});
exports.Product = (0, mongoose_1.model)("Productos", productsSchema);
