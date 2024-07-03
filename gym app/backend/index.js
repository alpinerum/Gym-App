const express = require('express');
const sequelize = require('./configurations/config');
const cors = require('cors');
const app = express();
const products_router = require('./routes/products');
const services_router = require('./routes/gymServices');
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

sequelize.sync().then((result)=>{}).catch((err)=>{console.log(err);});

app.get('/', function(req,res) {
    //res.sendFile(path.join(__dirname+'/dist/front-end/index.html'));
});

app.use('/products', products_router);

app.use('/services', services_router);

app.listen(3000, ()=>{console.log('listening to port 3000')});