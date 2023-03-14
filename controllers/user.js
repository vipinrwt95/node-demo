const User = require('../models/user')

exports.postAddUser=(req,res,next)=>{
    console.log(req);
    console.log(res);
    const username = req.body.username;
    const phone = req.body.phone;
    const email = req.body.email;
   User.create({
     username:username,
     phone:phone,
     email:email 
    })
    .then(result=>{})
    .catch(err=>{console.log(err)})
};
exports.getAllusers=(req,res,next)=>{
    User.findAll()
    .then(users=>{
        res.send(users)
    })
    .catch(err=>{console.log(err)})
}

exports.Delete=(req,res,next)=>{
  User.destroy({where : {id:req.params.id}})
  .then(data=>console.log(`${data} is deleted`));
}
exports.Deleteuser=(req,res,next)=>{
    console.log(req.body);
    res.redirect(`/users/delete/${req.body.id}`)
}
