const Sequelize=require('sequelize');

const sequelize=new Sequelize('product-user','root','Lkpo098!@#',{dialect:'mysql',host:'localhost'});

module.exports=sequelize;