const Sequelize=require('sequelize');

const sequelize=new Sequelize('node-complete','root','Lkpo098!@#',{dialect:'mysql',host:'localhost'});

module.exports=sequelize;