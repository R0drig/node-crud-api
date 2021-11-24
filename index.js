const express = require("express");
const app = express();

const PORT  = process.env.PORT || 8000

app.get("/", (req,res)=>{
    res.send("Text")
})

app.listen(PORT,'localhost',()=>{
   console.log(`Runnning on port ${PORT}`)
})
