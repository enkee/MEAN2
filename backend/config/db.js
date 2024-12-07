import mongoose from "mongoose";

//mongoose.set("strictQuery",false)


//Conecta a la Base de Datos de MongoDB
export const connectDB = (uri)=>{
    return mongoose.connect(uri)
}