import { productModel } from "../models/ProductModel.js";

export const getProducts = async (req, res) => {
    try {
        const products = await productModel.find()
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const getProduct = async (req, res) => {
    try {
        const { id } = req.params
        const product = await productModel.findById(id)

        if (!product) {
            return res.status(404).json(`Producto con id ${id} no encontrado`)
        }

        res.status(200).json(product)

    } catch (error) {
        res.status(500).json({ message: error.message })
    }

}

export const createProduct = async (req, res) => {
    try {
        const product = await productModel.create(req.body)
        res.status(201).json(product)
    } catch (error) {
        res.status(500).json({ message: "A ocurrido un error." })
    }
}

export const updateProduct = async(req, res) => {
    try {
        const {id} = req.params
        const product = await productModel.findByIdAndUpdate(
            {_id: id},
            req.body,
            {new:true}
        )
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const deleteProduct = async(req, res) => {
    try {
        const { id } = req.params
        const product = await productModel.findByIdAndDelete(id)

        if (!product) {
            return res.status(404).json(`Producto con id ${id} no encontrado`)
        }

        res.status(200).json("Producto eliminado correctamente")

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}