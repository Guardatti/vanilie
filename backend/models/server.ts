import express, {Express} from "express";
import { connectDB } from "../database/config";
import cors from "cors";
import productsRoutes from "../routes/products"
import manRoute from "../routes/products"
import womanRoute from "../routes/products"


export class Server {

    app: Express;

    constructor() {
        this.app = express();
        this.connectionToDB();
        this.middelwares();
        this.enableCors();
        this.routes();
    }

    async connectionToDB(): Promise<void> {
        await connectDB()
    }

    middelwares(): void {
        this.app.use(express.json());
    }

    enableCors(): void {
        this.app.use(cors());
    }

    routes(): void {
        this.app.use('/productos', productsRoutes)
        this.app.use('/', manRoute)
        this.app.use('/', womanRoute)
    }

    listen(): void {
        this.app.listen(8080, () => {

            console.log('Servidor corriendo en el puerto 8080');
            
        })
    }

}