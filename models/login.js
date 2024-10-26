import mongoose from "mongoose";

const {Schema, model} = mongoose;

const loginSchema = new Schema({
    email: {
        type: String,
        required: true,
        validate: {
            validator: function(value) {
                return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
            },
            message: 'Please enter a valid email address'
        }
    },
    password: {
        type: String,
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




export default model('Login', loginSchema)