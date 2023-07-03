const express=require('express');
const mongoose=require('mongoose');
const session=require('express-session');
require('dotenv').config()

const port=process.env.PORT || 7000;


// console.log('mooooo',session)
// console.log(process.env.PORT) 

/*initialisation de mon server */
const app=express();

app.get('/',(req,res)=>{
    res.send('bonjour')
})





//listen on port

app.listen(port,()=>{
    console.log(`server started at http://localhost/:${port}`);
    
})