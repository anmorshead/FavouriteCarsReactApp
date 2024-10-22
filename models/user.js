import mongoose from "mongoose";
const {Schema, model} = mongoose;

//define cars schema
const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        max:100
    },
    lastName: {
        type: String,
        required: true,
        max:100
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
        required: true,
   }
})


export default model('User', userSchema)