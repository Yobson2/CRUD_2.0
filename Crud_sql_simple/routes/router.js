const express=require('express');
const db=require('../bd/config')

const routers=express.Router();

// rooters pages
routers.get('/sign',(req,res)=>res.render('sign'))
// routers.get('/vue',(req,res)=>res.render('vue'))
routers.get('/',(req,res)=>{res.render('index')})


//crud operations
routers.post('/sign',(req,res)=>{
  console.log(req.body)
  const sql='INSERT INTO users SET ?'
    db.query(sql,req.body,(err,rs)=>{
        if (err) {
            return console.error('error: ' + err.message);
          }     
          console.log('Succed ');
          res.redirect('/')
    })
})

routers.get('/vue',(req,res)=>{
    const sql='SELECT * FROM users';
    db.query(sql,[],(err,rs)=>{
        // console.log(rs,'reponse')
        if (err) {
            return console.error('error: ' + err.message);
          }     
          console.log('all data returned');
          res.render('vue',{ data:rs});
    })
})



routers.get('/vue/delete', (req, res) => {
    const reqSql = 'DELETE FROM users WHERE id = ?';
    const userId = req.query.id;
    
    console.log(userId, 'id data');
    
    db.query(reqSql, [userId], (err, result) => {
      if (err) {
        console.error('Error: ' + err.message);
      } else {
        console.log('Data deleted successfully');
        console.log(result, 'result data');
         res.redirect('/vue');
      }
    });
  });

  routers.get('/sign/edite', (req, res) => {
    const reqSql = 'UPDATE FROM users WHERE id = ?';
    const userId = req.query.id;
    
    console.log(userId, 'id data');
    res.send('update success')
    
    // db.query(reqSql, [userId], (err, result) => {
    //   if (err) {
    //     console.error('Error: ' + err.message);
    //   } else {
    //     console.log('Data deleted successfully');
    //     console.log(result, 'result data');
    //      res.redirect('/vue');
    //   }
    // });
  });


  

module.exports=routers