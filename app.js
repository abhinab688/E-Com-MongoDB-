const path = require('path');
const mongoose=require('mongoose');

const dotenv=require('dotenv');
dotenv.config();

const express = require('express');
const bodyParser = require('body-parser');
// const mongoConnect=require('./models/database').MongoConnect;
const User=require('./models/user');

const errorController = require('./controllers/error');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  User.findById('639d673f630fde097b5372a6')
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => console.log(err));
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

mongoose.connect()
.then(result=>{
  User.findOne().then(user=>{
    if(!user){
      const user= new User({
        name:'Abhinab',
        email:'abhinab@gmail.com',
        cart:{
          items:[]
        }
      });
      user.save()
    }
  })
  app.listen(3000)
}).catch(err=>console.log(err))