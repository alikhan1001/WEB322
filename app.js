const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/public/index.html'));
  //__dirname : It will resolve to your project folder.
});

router.get('/plans',function(req,res){
  res.sendFile(path.join(__dirname+'/plans.html'));
});

router.get('/sign-up',function(req,res){
  res.sendFile(path.join(__dirname+'/sign_up.html'));
});

router.get('/sign-in',function(req,res){
    res.sendFile(path.join(__dirname+'/sign_in.html'));
  });

//add the router
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');