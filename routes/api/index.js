import express from 'express';

const router = express.Router();

import carsRouter from './cars.js'
import usersRouter from './users.js'

router.use('/cars', carsRouter)
router.use('/users', usersRouter)

router.get('/', (req, res) => res.send("Welcome to the API"))












export default router;