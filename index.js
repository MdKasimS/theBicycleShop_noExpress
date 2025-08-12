
const express = require('express')
const app = express()

const bicycles = require('./data/data.json')

app.get("/", (req, res)=>{    
    console.log(req.Url)
    return res.send(bicycles);
})

app.get("/bicycle", (req, res)=>{
    
    // console.log(req.url)
    
    console.log(req.query.id)
    // console.log(req.query.name)
    
    const bicycle = bicycles.find(b => b.id === req.query.id)

    return res.send(bicycle);
})

app.listen(3000, ()=>{
    console.log("Alhamdulillah Started With Express @3000") 
})