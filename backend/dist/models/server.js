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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const config_1 = require("../database/config");
const cors_1 = __importDefault(require("cors"));
const products_1 = __importDefault(require("../routes/products"));
const products_2 = __importDefault(require("../routes/products"));
const products_3 = __importDefault(require("../routes/products"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.connectionToDB();
        this.middelwares();
        this.enableCors();
        this.routes();
    }
    connectionToDB() {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, config_1.connectDB)();
        });
    }
    middelwares() {
        this.app.use(express_1.default.json());
    }
    enableCors() {
        this.app.use((0, cors_1.default)());
    }
    routes() {
        this.app.use('/productos', products_1.default);
        this.app.use('/', products_2.default);
        this.app.use('/', products_3.default);
    }
    listen() {
        this.app.listen(8080, () => {
            console.log('Servidor corriendo en el puerto 8080');
        });
    }
}
exports.Server = Server;
