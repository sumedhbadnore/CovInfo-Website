const express = require ('express')
const app = express()
const hbs = require('hbs')
const path  = require('path')
const cors = require('cors')

const port = process.env.PORT || 8000



const partial_path = path.join(__dirname,'../partials') 
const public_path = path.join(__dirname,'../public')
console.log(public_path)
app.use(express.static(public_path))
hbs.registerPartials(partial_path)
app.set('view engine', 'ejs')
app.set('view engine', 'hbs')


app.use(cors())
app.listen(port,()=>{
    console.log(`listening to port ${port} `)
})

app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/about',(req,res)=>{
    res.render('about')
})

app.get('/precautions',(req,res)=>{
    res.render('safetymeasures')
})

app.get('/statewise',(req,res)=>{
    res.render('statewise')
})

app.get('/active-case',(req,res)=>{
    res.render('active')
})

app.get('/vaccinated',(req,res)=>{
    res.render('vaccinated')
})