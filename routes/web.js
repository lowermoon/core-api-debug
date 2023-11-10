const express = require('express');
const cookieParser = require('cookie-parser');
const model_admin = require('../models/admin');
// const db_connect = require('../config/database');
// const model_admin = require('./models/admin');
const model_consumer = require('./models/consumer');

const web_routes = express.Router()
.get('/control', (req, res) => {
    res
    .render('controlpanel');
})

.get('/control/data/freelancer', (req, res) => {
    res
    .render('data_freelancer');
})

.get('/control/data/consumer', (req, res) => {
    res
    .render('data_consumer');
})

module.exports = web_routes;