import jwt from 'jsonwebtoken'

const secret='myLittleSecretKey'

const token = jwt.sign({ message: "hi from andrea"}, secret)
console.log(token)


console.log(jwt.verify(token, secret))

//async way:
jwt.verify(token, secret,(err, data) =>{
    if(err){
        console.log(err.message)
        console.log(data)
    }
})

