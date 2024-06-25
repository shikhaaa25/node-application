const express=require("express")
const app=express()
const PORT =3000
require('dotenv').config()
console.log(process.env)

app.get("/", (req,res)=>{
    res.send("hello node")
})
app.get("/login", (req,res)=>{
   res.send('<h1>Please login first<h1>')
})

app.get("/twitter",(req,res)=>{
    res.send('twit@123')
})
app.get("/youtube",(req,res)=>{
    res.send()
})
 app.listen(process.env.PORT,()=>{
    console.log(`app is listening on port ${PORT}`)
 })