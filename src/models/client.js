import mongoose from "mongoose";


const clientSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    lastName: {
        type: String,
        required: true
    },

    phoneNumber: {
        type: String
    }
});


const client = mongoose.model('Client', clientSchema);


export {client as Client};
