import jwt from 'jsonwebtoken'

export default (req, res, next) => {
    //intercept the request
  
    //CHECK TO SEE IF COOKIE CALLED JWT, IS IT VALID?

    //check request headers for header called x-auth-token
      console.log("PASSING THROUGH CHECK TOKEN CHECKER")
  
    //no header? or value isnt token redirect with a 401
    const token = req.header('x-auth-token')
    const secret = process.env.JWT_SECRET;
    console.log("Token received:", token); // Logs the token for debugging
     

      if(!token){
          return res.status(401).send("Access Denied") //401 - unauthorized
      }
    //check validity of token   
    try{
        jwt.verify(token, secret)
        next()  //allow the request to proceed only if token is valid
        
    }catch(err){
        res.status(401).send("Invalid Token");
    }
  
  }
  
