const express = require('express');
const api_routes = require('./routes/api');
const web_routes = require('./routes/web');
const ejs = require('ejs');
const cookieParser = require('cookie-parser');
const sequelize = require('sequelize');
const mysql2 = require('mysql2');



const app = express();
const port = process.env.PORT || 5000;
app
.set('view engine', 'ejs')
.use(express.static('assets'))
.use(express.json())
.use(web_routes)
.use('/api/', api_routes)

 
app.listen(port, () => {
    console.log(`Server is deployed at port: ${port}`)
});