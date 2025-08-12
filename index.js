
const express = require('express')

const app = express()

app.get("/", (req, res)=>{
    console.log(req.baseUrl)
    return res.send("Assalamualaikum");
})


app.get("/bicycle", (req, res)=>{
    console.log(req.query.id)
    // console.log(req.query.name)
    console.log(req.url)
    return res.send("/bicycle page");
})

app.listen(3000, ()=>{
    console.log("Alhamdulillah Started With Express @3000") 
})