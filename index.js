
const express = require('express')
const app = express()

const bicycles = require('./data/data.json')

app.use(express.static('public'))

app.set("view engine", "ejs")

app.get("/", (req, res)=>{    
    console.log(req.Url)
    // return res.send(bicycles);
    return res.render('bicycles');
})


app.get("/bicycle", (req, res)=>{
    // console.log(req.url)
    
    console.log(req.query.id)
    // console.log(req.query.name)
    
    const bicycle = bicycles.find(b => b.id === req.query.id)
    console.log(bicycle)
    return res.render('overview',{bicycle});
})

app.listen(3000, ()=>{
    console.log("Alhamdulillah Started With Express @3000") 
})