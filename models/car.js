import mongoose from "mongoose";
const {Schema, model} = mongoose;

//define cars schema
const carSchema = new Schema({
    model: {
        type: String,
        required: true
    },
    manufacturer: {
        type: String,
        required: true
    },
    basePriceUSD: Number,
    generation: String,
    image: String,
    performance: {
        horsepower: Number,
        torque: Number,
        engineType: String,
        driveTrain: String,
        transmissionOptions: [String]

    },
    productionYears:{
        start: Number,
        end: Number
    }
}, {collection: 'favourite_cars'})

export default model('Car', carSchema)





