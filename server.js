const express = require("express")
const dotenv = require('dotenv')

//load env vars
dotenv.config({path: './config/config.env'})

//connect to mongodb
const connectDB = require('./config/db')
connectDB();

const app = express();

const PORT = process.env.PORT || 8000;

const server = app.listen(PORT,console.log(`Server listening on ${PORT}`))