import mongoose from "mongoose";


const purchaseSchema = new mongoose.Schema({

    client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client'
    },

    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }
});


const purchase = mongoose.model('Purchase', purchaseSchema);


export {purchase as Purchase};
