const express = require('express')
const app = express()
const path = require('path')
const route = express.Router()
__dirname = path.resolve()

var bodyParse = require('body-parser')
app.use(bodyParse.urlencoded({extented:false}))

app.engine('html', require('ejs'). renderFile)

app.get('/', (req,res) =>{
    res.render(__dirname+'/index.html')
})














app.listen(process.env.port || 2000)

console.log('Running at Port 2000')