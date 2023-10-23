import {Router} from "express";
import {Purchase} from "../models/purchase.js";


const router = Router();


router.get('/getPurchases', async (req, res) => {
    const purchase = await Purchase.find().populate("client product")
    res.status(200).send(purchase);
});


router.post('/createPurchase', async (req, res) => {
    const newPurchase = new Purchase(req.body)
    await newPurchase.save()
    return res.status(201).send(newPurchase)
});


export default router
