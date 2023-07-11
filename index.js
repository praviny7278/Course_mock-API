const express = require('express')
const connection = require('./db')
const courseRout = require('./routes/course')
const app = express()
require('dotenv').config();

app.use(express.json())

app.use("/courses", courseRout)





app.listen(process.env.PORT, async ()=>{
    try {
        await connection
        console.log("connected successfully to db!");        
    } catch (error) {
        
    }
    console.log("Server is running on port: "+process.env.PORT)
})
