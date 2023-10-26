import express from "express";
import cors from "cors";
import clients from "./src/routes/clients.js";
import product from "./src/routes/products.js";


const PORT = 8000;

const app = express();

app.use(express.json());
app.use(cors());
app.use("/clients", clients)
app.use("/products", product)


app.listen(PORT, () => {
    console.log(`Corriendo en el puerto ${PORT}` );
});
