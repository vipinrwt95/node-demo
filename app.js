const path = require('path');
const sequelize=require('./util/database');
const express = require('express');
const bodyParser = require('body-parser');
const cors=require('cors')

const errorController = require('./controllers/error');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(cors());
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const userRoutes =require('./routes/user')


app.use(bodyParser.json({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(userRoutes);

app.use(errorController.get404);
sequelize.sync().then(result=>{
   
    app.listen(3000);
})
.catch(err=>{console.log(err)})

