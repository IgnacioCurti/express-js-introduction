import {Router} from "express";
import {Client} from "../models/client.js"; 
import { auth } from "../middleware/auth.js";
import { isAdmin } from "../middleware/isAdmin.js";


const router = Router();


router.get('/getClients', async (req, res) => {
    const clients = await Client.find()
    res.status(200).send(clients);
});


router.get('/getClientById/:id', async (req, res) => {
    const client = await Client.findById(req.params.id);
    if (!client) return res.status(404).send("The client with the given ID was not found.");
    return res.status(200).send(client);
});


router.post('/addClient', async (req, res) => {
    const newClient = new Client(req.body)
    await newClient.save()
    return res.status(201).send(newClient)
});


router.delete('/deleteClient/:id', [auth, isAdmin], async (req, res) => {
    const user = await Client.findById(req.params.id);
    if (!user) return res.status(404).send("The client with the given ID was not found.")
    res.send(user)
})


export default router
