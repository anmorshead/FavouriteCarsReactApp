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
        horsepower: {
            type: Number,
            min: [10, 'Is this an actual horse?'],
            max:[5000, 'Impossible']
        },
        torque: Number,
        engineType: String,
        driveTrain: {
            type: String,
            enum: ['AWD', 'RWD', 'FWD']
        },
        transmissionOptions: [String]

    },
    productionYears:{
        start: {
            type: Number,
            min:[1900, 'That car is way too old'],
            max:[new Date().getFullYear(), "They haven't even made that yet"]
        },
        end: {
            type: Number,
            min:[1900, 'That car is way too old'],
            max:[new Date().getFullYear(), "They haven't even made that yet"],
            validate: {
                validator: function(value) {
                    return value >= this.start;
                },
                message: 'End year ({VALUE}) should be greater than or equal to the start year'
            }
        }
    }
}, {collection: 'favourite_cars'})

export default model('Car', carSchema)





