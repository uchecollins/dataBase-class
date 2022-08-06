
const express = require("express")
const connectDB = require("./db")
const Student = require("./model/student")

const app = express()

app.use(express.json())

app.listen(5000, ()=>{console.log("server is listening Now")})

connectDB()



app.get("/",(req, res)=>{res.send("Welcome to our backend.")})

app.post("/student", (req, res)=>{
console.log(req.body);
    const { name, email } = req.body
    res.send(`${name} with ${email},you have been registered  this email`)
})

app.get("/students", async(req, res)=>{
     const classList = ["ifeanyi","nelly","collins","wisdom","jude","adebayo"]
     const allstudents = await Student.find()
    res.send(allstudents)})
   

    app.post("/worker", async(req, res)=>{console.log(req.body);
    const {name, email, password, role} = req.body

    const newStudent = new 
     Student({name, email, password, role})
    await newStudent.save()
    res.json(`Hello, ${name} with email address ${email}, Congratulation!!`)
    })