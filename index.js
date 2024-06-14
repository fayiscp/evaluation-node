let express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')

app.use(express.json())
app.use(cors())


mongoose.connect('mongodb://localhost:27017/items').then((res)=>{

    console.log('database connected')
})
    .catch((err)=>{
    console.log(err);
    })

let itemRouter = require("./routes/itemRoute")

app.use('/item',itemRouter)

app.listen(3000,()=>{
    console.log('port 3000 is connected');
})
