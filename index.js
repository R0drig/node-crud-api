const express = require("express");
const router = require('./routes/person')
const mongoose = require('mongoose')
const constants  = require('./constants')
const app = express();
const PORT  = process.env.PORT || 8000

app.get("/", (req,res)=>{
    res.send("Text")
})

app.use('/api/v1', router)

mongoose.connect(constants.uri,{useNewUrlParser:true, useUnifiedTopology:true})
mongoose.connection.once('open',()=>{
    console.log('connected to database')
}).on('error',(err)=>{
    console.log("Err" + err)
})


app.listen(PORT,'localhost',()=>{
   console.log(`Runnning on port ${PORT}`)
})
