// imports
const express = require('express');
const dotenv = require('dotenv');
const router = require('./routes/indexRoutes')

const app = express();

const PORT = 5959 || process.env.PORT;

// middlewares 
app.use(express.json());

// routes

app.use('/api',router);

app.listen(PORT ,()=>{
    console.log(`server is running on http://localhost:${PORT}`);
    // console.log(' yeah in the server');
})
