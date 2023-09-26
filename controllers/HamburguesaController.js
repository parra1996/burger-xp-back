const { Hamburguesas } = require('../models/index');
const { Op } = require('sequelize');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');
const auth = require('../config/auth');

const HamburguesaController = {};

HamburguesaController.bringAll = (req,res) => {
    Hamburguesas.findAll()
    .then( data =>
        res.send(data)
    )
}

HamburguesaController.createBurger = (req,res) => {2

    const {
        name,
        ingredients,
        preparation,
        comments,
        price,
        image
    } = req.body

    try {

        Hamburguesas.findOne({
            where : {
                name : name
            }
        })
        .then(burger => {
            if(!burger){
                Hamburguesas.create({
                    name,
                    ingredients,
                    preparation,
                    comments,
                    price,
                    image
                })
                .then((burger) => {
                    res.send(`La hamburguesa ${burger.name}, ha sido registrado con exito`);
                })
               
            } else {
                res.send("esta hambuguesa ya esta en nuestra base de datos")
            }
        })
    
       
    }catch(error){
        res.status(500).send(error)
    }
}

module.exports = HamburguesaController;