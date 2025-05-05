const express = require('express');
const app = express(); //Initialize express
const bodyParser = require('body-parser'); //To fetch body from client to server
const cors = require('cors')
const authRouter = require('./Routes/authRouter');
const productRouter = require('./Routes/productRouter');
require('dotenv').config();
require('./Models/db')

const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(cors());
app.use('/auth',authRouter)
app.use('/products',productRouter)

app.listen(PORT, ()=>{
    console.log(`server is running on ${PORT}`)
})