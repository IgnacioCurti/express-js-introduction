import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import clients from "./src/routes/clients.js";
import products from "./src/routes/products.js";
import purchases from "./src/routes/purchase.js";
import users from "./src/routes/users.js";
import login from "./src/routes/login.js";


const PORT = 8000;

const app = express();

app.use(express.json());
app.use(cors());
app.use("/clients", clients)
app.use("/products", products)
app.use("/purchases", purchases)
app.use("/users", users)
app.use("/login", login)


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
