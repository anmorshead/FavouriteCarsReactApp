import express from "express";
const router = express.Router();
import User from '../../models/user.js'
import login from "../../models/login.js";

//register endpoint
router.post('/register', async (req, res) => {

  try{
    const newUser = new User(req.body);
    //validate and save our req.body
    await newUser.save();
    console.log("New user registered successfully");
    res.status(201).send("New user registered successfully")
  }catch(err){
    console.log(err)
    return res.status(422).send(err)
  }

  res.send("Register")
});

//login endpoint
router.post('/login', async (req, res) => {
  res.setHeader('x-foo', 'bar')//store token here
  res.send("login")
});

// module.exports = router;
export default router