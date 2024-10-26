import express from "express";
const router = express.Router();
import User from '../../models/user.js'
import Login from "../../models/login.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

//register endpoint
router.post('/register', async (req, res) => {

  try{
    const newUser = new User(req.body);
    //validate our req.body
    await newUser.validate();
    //encrypt password if it validates
    const hash = await bcrypt.hash(newUser.password, 10)
    newUser.password = hash
    //save new user with encrypted password
    await newUser.save()
    
    console.log("New user registered successfully");
    res.status(201).json({ _id: newUser._id, email: newUser.email });
    
  }catch(err){
    console.log(err)
    return res.status(422).send(err)
  }
});

//login endpoint
router.post('/login', async (req, res) => {

const secret = process.env.JWT_SECRET; 

try {
  //get req.body of login
  const {email, password} = req.body
  //find user by email
  const user = await User.findOne({email}).exec();
  if (!user) {
    return res.status(400).send("Invalid email or password.");
  }
  //compare password entered with bcrypt password stored
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).send("Invalid email or password.");
  }
  //if login is successful, generate token
  const token = jwt.sign({ userId: user._id}, secret)
  res.setHeader('x-auth-token', token);

  //if successful return token in response
  res.status(200).json({ message: "Login successful", token });

} catch (err) {
  console.log(err);
  res.status(500).send("Server error");
}
  
});

// module.exports = router;
export default router