export default (req, res, next) => {
  //intercept the request

  //check request headers for header called x-marco
    console.log("PASSING THROUGH CHECK MARCO POLO")
    console.log(req.header('x-marco'))

  //no header? or value isnt 'polo' redirect with a 401
  const marco = req.header('x-marco')
    if(!marco || marco !== 'polo'){
        res.status(401).send() //401 - unauthorized
    }
  //if header => check that value is 'polo' 
  next()  //allow the request to proceed

}

