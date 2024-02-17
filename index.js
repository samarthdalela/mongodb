import express, { urlencoded } from "express"
import bodyparser from"body-parser"
import mongoose from "mongoose"
import {dirname} from "path"
import { fileURLToPath } from "url"
import { error } from "console"
const app= express()
const __dirname=dirname(fileURLToPath(import.meta.url))
const port =3000
// app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))
app.use(express.static("public"))
mongoose.connect("mongodb+srv://samarthdalela12345:samarthdalela@cluster0.1nzpvrf.mongodb.net/")
var db = mongoose.connection
// db.on("error",()=>console.log("error in connecting to database"))
// db.once("open",()=>console.log("connected to the data base"))
app.get("/",(req, res)=>{
    res.render(__dirname+"/index.ejs")
})
app.post("/signup",(req,res)=>{
    const Data ={"name": req.body.name,
    "email":req.body.email,
    "password":req.body.password
    }
    db.collection("users").insertOne(Data,(err,collection)=>{
        if(err){
            console.log(err)
    
        }
        else{
            console.log("record os entered successfully")
        }
    })
    return res.redirect("https://shripriti.in/")
})


app.listen(port,()=>{console.log("you are listening to the po9rt ", port )})