
const express = require('express')
const app = express()

const bicycles = require('./data/data.json')

app.get("/", (req, res)=>{
    console.log(req.Url)

    return res.send("Assalamualaikum! Bicycles data is loaded");
})


app.get("/bicycle", (req, res)=>{
    
    // console.log(req.url)
    
    console.log(req.query.id)
    // console.log(req.query.name)
    
    return res.send("/bicycle page");
})

app.listen(3000, ()=>{
    console.log("Alhamdulillah Started With Express @3000") 
})