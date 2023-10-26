import mongoose from "mongoose";


const productSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    stock: {
        type: String,
        default: 0
    }
});


const product = mongoose.model('Product', productSchema);


export {product as Product};
