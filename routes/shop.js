const express=require('express');
const path=require('path');
const rootDir=require('../utility/path');
const router=express.Router();

router.get('/',(req,res,next)=>{
  res.sendFile(path.join(rootDir,'views','shop.html'));
})
router.get('/contactus',(req,res,next)=>{
  res.sendFile(path.join(rootDir,'views','contact.html'));
})
router.post('/success',(req,res,next)=>{
    if(req.body.emailId.includes('@'))
    {
      res.send('<h1>Form Successfully filled</h1>');
    }
    else
    {
      res.redirect('/contactus')
    }
  })
module.exports=router;