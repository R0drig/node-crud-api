const express = require("express");
const app = express();
const router = require('./routes/person')
const PORT  = process.env.PORT || 8000

app.use('/api/v1', router)

app.get("/", (req,res)=>{
    res.send("Text")
})

app.listen(PORT,'localhost',()=>{
   console.log(`Runnning on port ${PORT}`)
})
