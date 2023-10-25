import mongoose from "mongoose";
import jwt from'jsonwebtoken';


const jwtPrivateKey = "secretWord";

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    lastName: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function (v){
                if (!v) return false;
                let username, domain, rest
                [username, domain, ...rest] = v.split("@");
                if (rest.length) return false;
                if (domain !== "company.com") return false;
                return true;
            },
            message: (props) => `${props.value} is not a valid company email.`
        }
    },

    password: {
        type: String,
        required: true
    },

    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    }
});


userSchema.methods.generateAuthToken = function() {
    return jwt.sign({_id: this._id, email: this.email, isAdmin: this.isAdmin}, jwtPrivateKey);
}


const user = mongoose.model('User', userSchema);


export {user as User};
