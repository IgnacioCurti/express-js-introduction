import express from "express";
import cors from "cors";
import users from "./src/routes/clients.js";
import product from "./src/routes/products.js";


const PORT = 8000;

const app = express();

app.use(express.json());
app.use(cors());
app.use("/users", users)
app.use("/product", product)


app.listen(PORT, () => {
    console.log(`Corriendo en el puerto ${PORT}` );
});
