import {Router} from "express";
import {Product} from "../models/product.js";


const router = Router();


router.get('/getProducts', async (req, res) => {
    const products = await Product.find();
    res.status(200).send(products);
});


router.get('/getProductById/:id', async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).send("The product with the given ID was not found.");
    return res.status(200).send(product);
});


router.post('/addProduct', async (req, res) => {
    const newProduct = new Product(req.body)
    await newProduct.save()
    return res.status(201).send(newProduct)
});


export default router
