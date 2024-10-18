import express from 'express'
import Car from '../models/car.js'
//creates new room in our building to handle cars endpoints
const router = express.Router();

//add our endpoints

//moved our endpoints into the router
//GET ALL CARS
router.get('/', (req, res) => {
    // res.json(cars)
    res.send('GET ALL CARS')
    //exec executes promise
    Car.find()
        .exec()
        .then(data => console.log(data))
        .catch()
})
//GET car BY ID
router.get('/:id', (req, res) => {
    res.send(`GET CAR WITH ID ${req.params.id}`)
    // let foundCar;
    // //iterate over all cars in array
    // cars.forEach(car => {
    //     if(car.id === req.params['id']){
    //         foundCar=car
    //     }
    // })
    // //if there is a car thats been found...
    // if(foundCar){
    //     res.json(foundCar)
    // }else{
    //     res.status(404).send()
    // }
})
//CREATE CAR -- NEEDS VALIDATION
router.post('/', (req, res) => {
    res.send('CREATE CAR')
    // const { error } = validateData().validate(req.body, {abortEarly: false})
    // if(error){
    //     //we know validation failed
    //     res.status(422).send({
    //         errorType: "Validation Error",
    //         errorDetails: error.details
    //     })
    // }else{
    //     //generate a random string for our id
    //     req.body.id=Randomstring.generate(12)
    //     //get the payload (data) and save to out db
    //     cars.push(req.body)
    //     //send back the created status code
    //     res.status(201).send()
    // }
})
//UPDATE CAR -- NEEDS VALIDATION
router.put('/:id', (req, res) => {
    res.send(`UPDATE CAR ID ${req.params.id}`)
    // const { error } = validateData().validate(req.body, {abortEarly: false})
    // if(error){
    //     //we know validation failed
    //     res.status(422).send({
    //         errorType: "Validation Error",
    //         errorDetails: error.details
    //     })
    // }else{

    //     let foundCar = cars.find(function(car){
    //         return car.id === req.params.id
    //     })
    //     if(foundCar){
    //         //update person
    //         cars = cars.map(car => {
    //             if(car.id === req.params.id){//if car im looking at is car i wanna modify
    //                 //add modified instead of original
    //                 req.body.id = req.params.id
    //                 return req.body
    //             }else{
    //                 return car;
    //             }
    //         })  
    //         res.status(204).send()
    //     }else{
    //         res.status(404).send()
    //     }
    // }
})

//DELETE CAR BY ID 
router.delete('/:id', (req, res) => {
    res.send(`DELETE CAR ID ${req.params.id}`)
    // let foundCar = cars.find(function(car){
    //     return car.id === req.params.id
    // })
    // if(foundPerson){
    //     //remove it from the data
    //     cars = car.filter(function(car){
    //         return car.id !== req.params.id
    //     })
    //     //delete successful
    //     res.status(204).send()
    // } else {
    //     //person not found - send a 404 back to the client.
    //     res.status(404).send()
    // }

})






export default router;
