import express from 'express'
import Car from '../models/car.js'
//creates new room in our building to handle cars endpoints
const router = express.Router();

//moved our endpoints into the router

//GET ALL CARS
router.get('/', async (req, res) => {
    //old way
    // Car.find()
    //     .exec()
    //     .then(data => res.send(data))//all good
    //     .catch(err => res.statusCode(500).send())//server problem
    try{
        const data = await Car.find().exec(); //can only use await if it returns a promise(exec)
        res.json(data)
    }catch(err){
        res.status(500).send()
    }
})

//GET CAR BY ID
router.get('/:id', async (req, res) => {
   
    try{
        const data = await Car.findById(req.params.id).exec()
        if(!data){
            return res.status(404).send()
        }
        res.json(data)
    }catch(err){
        res.status(500).send()
    }
})

//CREATE CAR -- NEEDS VALIDATION
router.post('/', async (req, res) => {

    try{
        const newCar = new Car(req.body)
        const document = await newCar.save()
        res.status(201).json(document)
    }catch(err){
        if(err.name === "ValidationError"){
            res.status(422).send(err)
        }else{
            res.status(500).send()
        }
    }
})

//UPDATE CAR -- NEEDS VALIDATION
router.put('/:id', async (req, res) => {

    try{
        const updatedCar = await Car.findByIdAndUpdate(
            req.params.id, 
            req.body,
            {new:true, runValidators:true}
            ).exec()
        if(!updatedCar){
            return res.status(404).send() //id not found
        }
        res.status(200).send(updatedCar) //update successful, return car
    }catch(err){
        res.status(500).send() 
    }
})

//DELETE CAR BY ID 
router.delete('/:id', async (req, res) => {

    try{
        const deletedCar = await Car.findByIdAndDelete(req.params.id).exec()
        console.log(deletedCar)
        res.send()
        if(!deletedCar){
            return res.status(404).send() //id not found
        }
        res.status(204).send() //delete successful
    } catch(err){
        res.status(500).send()
    }

})






export default router;
