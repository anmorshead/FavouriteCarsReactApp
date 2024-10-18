import mongoose from "mongoose";
const {Schema, model} = mongoose;

//define cars schema
const carSchema = new Schema({
    model: String,
    manufacturer: String,
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





