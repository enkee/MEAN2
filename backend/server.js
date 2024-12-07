import express, { urlencoded } from 'express'  // importa express que es el servidor
import dotenv from 'dotenv'  // importa dotenv para trabajar con variables de entorno
import { connectDB } from './config/db.js'
import router from './routes/routes.js'

const app = express()   //asigna el objeto de express una variable

dotenv.config()

app.use(express.json()) //express utiliza o entiende json
app.use(urlencoded({extended:true}))
app.use("/api/products", router) //Utiliza las rutas definidas


//CONSTANTES DE ENTORNO
const PORT = process.env.PORT
const MONGO_URI = process.env.MONGO_URI

// Express esta escuchando el puerto 8000 para responder 
/*
app.listen(PORT, ()=>{
    connectDB(MONGO_URI)
    console.log("MongoDB Connected!")
    console.log( `server running http://localhost:${PORT}`);
})
*/
const start = async()=>{
    try {
        await connectDB(MONGO_URI)
        console.log("MongoDB Connected")
        app.listen(PORT, ()=>{
            console.log(`Server running http://localhost:${PORT}`);
        })
    } catch (error) {
        console.log(error);
    }
}

start()