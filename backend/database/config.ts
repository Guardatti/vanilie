import mongoose from "mongoose"

export const connectDB = async (): Promise<void> => {

    try {
        await mongoose.connect("mongodb+srv://Guardatti:qI0zaHc4kkdeZZau@vanilie.a4kftd5.mongodb.net/");
        console.log("Base de datos conectada con éxito");
    } catch (error) {
        console.log(error);
        throw new Error("Error al iniciar la base de datos")
    }

}