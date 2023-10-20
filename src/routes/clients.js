import {Router} from "express";
import fs from "fs";
import {getNewId} from "../../utils/utils.js";


const data = fs.readFileSync('./database/clients.json');
const clients = JSON.parse(data);

const router = Router();


router.get('/getClients', (req, res) => {
    res.status(200).send(clients);
});


router.get('/getClientsById/:id', (req, res) => {
    const client = clients.filter((client) => client.id == req.params.id);
    if (client.length == 0) return res.status(404).send("The client with the given ID was not found.");
    return res.status(200).send(client);
});


router.post('/addClient', (req, res) => {
    const newClient = {
        "id": getNewId(clients),
        "name": req.body?.name,
        "lastName": req.body?.lastName,
        "address": req.body?.address,
        "friends": req.body?.friends
    }
    clients.push(newClient)
    fs.writeFileSync('./database/clients.json', JSON.stringify(clients));
    return res.status(201).send(newClient)
});


export default router
