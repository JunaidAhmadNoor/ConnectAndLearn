require('dotenv').config()
const express = require('express')

// app
const app = express()

const getRoutes = require('./routes/get');



// middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// Routes
app.use('/', getRoutes);

// listen 
app.listen(process.env.PORT, () => {
    console.log('Port is ', process.env.PORT)
})