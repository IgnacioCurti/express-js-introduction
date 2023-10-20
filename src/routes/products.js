import {Router} from "express";
import fs from "fs";
import {getNewId} from "./utils/utils.js";


const data = fs.readFileSync('./database/products.json');
const products = JSON.parse(data);

const router = Router();


router.get('/getProducts', (req, res) => {
    res.status(200).send(products);
});


router.get('/getProducts/:id', (req, res) => {
    const product = products.filter((product) => product.id == req.params.id);
    if (product.length == 0) return res.status(404).send("The product with the given ID was not found.");
    return res.status(200).send(product);
});


router.post('/addProduct', (req, res) => {
    const newProduct = {
        "id": getNewId(products),
        "name": req.body?.name,
        "price": req.body?.price,
        "stock": req.body?.stock
    }
    products.push(newProduct)
    fs.writeFileSync('./database/products.json', JSON.stringify(products));
    return res.status(201).send(newProduct)
});


export default router
