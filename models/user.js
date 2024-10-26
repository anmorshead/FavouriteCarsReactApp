import mongoose from "mongoose";
import { passwordStrength } from "check-password-strength";

const {Schema, model} = mongoose;

//define cars schema
const userSchema = new Schema({

    firstName: {
        type: String,
        required: true,
        maxlength:100
    },
    lastName: {
        type: String,
        required: true,
        maxlength:100
    },
   email: {
        type: String,
        required: true,
        unique: true, 
        validate: {
            validator: function(value) {
                return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
            },
            message: 'Please enter a valid email address'
        }
   },
   password: {
        type:String,
        required: true,
        maxlength:255,
        validate: {
            validator: v => {
            const result = passwordStrength(v);

            return (result.value ==="Medium" || result.value ==="Strong")
            }, message: "Password too weak. Must be at least 8 characters and contain uppercase, lowercase, number, and symbol"
        }
   }
}, {collection: 'users'});


export default model('User', userSchema)