import express, { Express } from "express";
import { connectDB } from "../database/config";
import cors from "cors";
import authRoutes from "../routes/auth"



export class Server {

    app: Express;
    port: string | number | undefined;
    authPath: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.authPath = '/auth';
        this.connectionToDB();
        this.middelwares();
        this.routes();
    }

    async connectionToDB(): Promise<void> {
        await connectDB()
    }

    middelwares(): void {
        this.app.use(express.json());
        this.app.use(cors());
    }

    routes(): void {
        this.app.use(this.authPath, authRoutes)
    }

    listen(): void {
        this.app.listen(this.port, () => {

            console.log(`Servidor corriendo en el puerto ${this.port}`);
            
        })
    }

}