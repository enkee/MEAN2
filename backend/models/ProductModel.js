import mongoose from "mongoose";

//crear schema
const productSchema = new mongoose.Schema(
    {
        description:{
            type: String,
            required: [true, "Por favor complete el campo"]
        },
        stock:{
            type: Number,
            required: [true, "Por favor complete el campo"]
        },
        price:{
            type: Number,
            required: [true, "Por favor complete el campo"]
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

//creamos el modelo a partir del schema
export const productModel = mongoose.model("Product", productSchema)