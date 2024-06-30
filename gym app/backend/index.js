const express = require('express');
const sequelize = require('./configurations/config');
const app = express();

sequelize.authenticate().
then(()=>{console.log('connection has been established successfully');})
.catch((err)=>{console.log(err);});

app.listen(3000, ()=>{console.log('listening to port 3000')});