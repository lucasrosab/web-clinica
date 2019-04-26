const express = require('express')
const bodyParse = require('body-parser')

const app = express()

/*const path = require('path')
const route = express.Router()
__dirname = path.resolve()*/

app.use(bodyParse.json())
app.use(bodyParse.urlencoded({extented:false}))

//app.engine('html', require('ejs'). renderFile)



app.listen(process.env.port || 2000)

console.log('Running at Port 2000')