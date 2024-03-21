require('dotenv').config()
const express = require('express')

//const app has all the functionalities of express package
const app = express()

//we can give any port number there are 65500 virtual ports available
const port = 3000

//request is received on the route '/'
app.get('/' , (req,res) =>{
    res.send("Hello World!")
})

app.get('/login' , (req , res)=>{
    res.send('<h1> Please login to your account </h1>')
})

//there need to be someone to listen to the request on the port, hence we write app.listen
app.listen(process.env.PORT , ()=>{
    console.log(`Example is listening on port ${port}`)
})