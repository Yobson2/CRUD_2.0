const express=require('express');
const mongoose=require('mongoose');
const session=require('express-session');
require('dotenv').config()
const PORT=4100;
const connectDB = require('./db/config');
connectDB();


/*initialisation de mon server */
const app=express();


app.get('/',(req,res)=>{
    res.send('bonjour')
})





//listen on port

app.listen(PORT,()=>{
    console.log(`server started at http://localhost/:${PORT}`);
    
})