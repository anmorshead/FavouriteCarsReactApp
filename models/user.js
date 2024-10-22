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

   },
   password: {

   }
})

export default model('User', userSchema)