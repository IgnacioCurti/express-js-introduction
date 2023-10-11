import express from "express";
import cors from "cors";
import fs from "fs";
import { getNewId } from "./utils/utils.js";


const PORT = 8000;

const data = fs.readFileSync('./database/clients.json');
const clients = JSON.parse(data);


const app = express();
app.use(express.json());
app.use(cors());


app.get('/getClients', (req, res) => {
    res.status(200).send(clients);
});


app.get('/getClientsById/:id', (req, res) => {
    const client = clients.filter((client) => client.id == req.params.id);
    if (client.length == 0) return res.status(404).send("The client with the given ID was not found.");
    return res.status(200).send({client});
});


app.post('/addClient', (req, res) => {
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


app.listen(PORT, () => {
    console.log(`Corriendo en el puerto ${PORT}` );
});
