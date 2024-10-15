import express from 'express'
//creates new room in our building to handle cars endpoints
const router = express.Router();

//add our endpoints

//moved our endpoints into the router
//GET ALL CARS
router.get('/', (req, res) => {
    res.send('GET ALL CARS')
})
//GET car BY ID
router.get('/:id', (req, res) => {
    res.send(`GET CAR WITIH ID ${req.params.id}`)
})
//CREATE CAR
router.post('/', (req, res) => {
    res.send('CREATE CAR')
})
//UPDATE CAR
router.put('/:id', (req, res) => {
    res.send(`UPDATE CAR ID ${req.params.id}`)
})
//DELETE CAR BY ID
router.delete('/:id', (req, res) => {
    res.send(`DELETE CAR ID ${req.params.id}`)
})






export default router;
