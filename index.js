const express = require("express")
const {connection} = require("./db")
const {userRouter} = require("./routes/user.routes")
const {postRouter} = require("./routes/post.routes")
const {auth} =require("./middleware/auth.middleware")
const cors = require("cors")
require("dotenv").config()
const app = express()
app.use(express.json())
app.use(cors())
app.use("/users",userRouter)
app.use(auth)
app.use("/posts",postRouter)


app.get("/",(req,res)=>{
    res.send("HOME PAGE")
})
// 
app.listen(process.env.port,async()=>{
    try{
        await connection
        console.log("connected to the database")
    } catch (err) {
         console.log(err.message)  
       console.log('not connected to the db')
    }
    console.log(`server is running at port ${process.env.port}`)
   
})
