import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 8000

app.get('/hola', (req, res) => {
    res.status(200).send("Esto es un endpoint");
});


app.get('/params/:id', (req, res) => {
    console.log(`El id enviado por parametro es ${req.params.id}.`)
    console.log(req)
    res.status(200).send({"id": req.params.id});
});


app.post('/json', (req, res) => {
    console.log(req.body.name);
    res.send(req.body.name);
});


app.listen(PORT, () => {
    console.log(`Corriendo en el puerto ${PORT}` );
    console.log("Hello Frontend Community");
});
