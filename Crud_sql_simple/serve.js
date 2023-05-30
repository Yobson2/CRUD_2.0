const express=require('express');
const port=3020
const myRouters=require('./routes/router');
const bodyParser=require('body-parser')
/*initialisation de mon server */
const app = express();

// View engine setup
app.set('view engine', 'ejs');

/* */
app.use('/static', express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))


/* Without middleware */


/*utilisateur des routes */
app.use('/',myRouters);

app.listen( port,(err)=>{
    if (err) console.log(err);
    console.log(`listen on port ${port}`)
})
