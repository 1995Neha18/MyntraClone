const express = require('express');

const app = express();
require('dotenv').config()

app.use(express.json())


app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log("Connected to DB")
    } catch (error) {
        console.log(error.message)       
    }
   
    console.log(`server runnning on port ${process.env.port} `)
})