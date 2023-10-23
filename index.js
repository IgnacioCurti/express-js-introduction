import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import clients from "./src/routes/clients.js";
import product from "./src/routes/products.js";
import purchase from "./src/routes/purchase.js";


const PORT = 8000;

const app = express();

app.use(express.json());
app.use(cors());
app.use("/clients", clients)
app.use("/products", product)
app.use("/purchase", purchase)


const connection = mongoose.connect("mongodb://127.0.0.1:27017/express")

connection
    .then(
        () => console.log("Connected to database")
    )
    .catch(
        (err) => {
            console.error(err)
            process.exit(1);
        } 
    )

app.listen(PORT, () => {
    console.log(`Corriendo en el puerto ${PORT}`);
});
