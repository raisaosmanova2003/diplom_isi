// const express = require('express')
// const app = express()
// const port = 3000
// const cors =require("cors")
// const mongoose =require("mongoose")
// app.use(cors())
// app.use(express.json())

// mongoose.connect('mongodb+srv://tu4f7prwu:raisa2003@cluster0.o5czmrn.mongodb.net/')
//   .then(() => console.log('Connected!'));

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

const express = require('express')
const app = express()
require('dotenv').config()
const port = 3000
const cors = require('cors')
const mongoose = require("mongoose")
const userModel=require("./models/User.model")
const router = require("./routes/Book.routes.js")
const categoryRouter = require("./routes/Category.routes.js")
app.use(express.json())
app.use(cors())


app.post("/register",(req,res)=>{ 
    userModel.create({...req.body})
    .then(user=>res.json(user))
    .catch(err=>res.json(err))
})
app.post("/login",(req,res)=>{
    const {email,password}=req.body;
    userModel.findOne({email,password})
    .then((user)=>{
      if (user){
        if(user.password===password){
          if(user.email===email){
            res.json("Success")
          } else{
            res.json("email not correct")
          }
         
        }
        else {
          res.json("is not correct")
        }
        // else {
        //   res.json("user not exsit")
        // }
      }
    })
})

app.use("/api/books",router)
app.use("/api/categories",categoryRouter)

app.listen(process.env.PORT ,() => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})

mongoose.connect(process.env.CONNECTION_STRING)
  .then(() => console.log('Connected!'));