const express = require('express');
const { nanoid } = require('nanoid');
const socketIo = require('socket.io');
const model_consumer = require('../models/consumer');
const model_admin = require('../models/admin');
const { Op } = require('sequelize');




const api_routes = express.Router()

.post('/data/consumer', async (req, res) => {
    const {options, id} = req.body;
    if(options == "all") {
        const data = await model_consumer.findAll();
        res.status(200).json({ status: "success", message: "Request success!", data: data});
    }
})

.get('/check-localstorage', (req, res) => {
    res.session
    const session = req.session;
    session.name = "test";
    res.json({message: session.name});
})

.post('/register', async (req, res) => {
    // const {options} = req.query;
    const {options, name, email, no_hp, nik, username, password} = req.body;
    if(options == "consumer"){
        // Cari Data Kosong, Ada atau Tidak
        const find_data_consumer = await model_consumer.findOne({
            where: {
                email: email
            }
        });
        // Kondisi Data ada atau tidak
        if(find_data_consumer !== null){
            res.status(404).json({status: "failed", message: "Data is already exist!"});
        }else{
            const data_customer = await model_consumer.create({
                name: name,
                no_hp: no_hp,
                nik: nik,
                email: email,
                username: username,
                password: password
            });
            res.status(200).json({status: "success", message: "Consumer data is created!", data: data_customer});
        }
    }
})

.post('/login', async (req, res) => {
    // const {options, method} = req.query;
    const {options, method, username, email, password} = req.body;

    // Cek Kondisi Method
    if(method == "email" || method == "username") {
        if(options == "consumer") {
            const data_clients = await model_consumer.findOne({
                where: {
                    [Op.or]: [
                        { email: email, password: password },
                        { username: username, password: password }
                    ]
                }
            });
            if(data_clients === null) {
                res.status(404).json({ status: "failed", message: "Signin failed, Data is not found!" });
                return;
            }

            res.status(200).json({ status: "success", message: "Signin success!", data: data_clients});
            return;
        }
    }

    res.status(404).json({ status: "failed", message: "Signin failed, method or options is not valid!", method: method, options: options });
})

.get('/get-data', (req, res) => {
    res.send({ message: "This is bla bla" })
})


module.exports = api_routes;