//Dependencias:
//el objero de conexion:
const sequelize = require('../config/seq')
//Datatypes de sequelize
const { DataTypes,ValidationError } = require('sequelize')
//el modelo
const UserModel =  require('../models/Bootcamp')

//crear la cantidad
const User = UserModel(sequelize, DataTypes)
//listar todos los bootcamp
exports.getAllbootcamp = async ( req , res) =>{
     //traer usuarios
     const users = await User.findAll();
     //responde con los datos 
    res
    .status(200)
    .json({
        "success": true,
        "data" : "aqui va a salir todos los bootcamp"
    })
}

//Listar bootcamp pi Id
exports.getSinglebootcamp = (req , res) =>{
    console.log(req.params.id)
    res
    .status(200)
    .json({
        "success": true,
        "data" : `aqui va a salir el bootcamp cuyo id es ${req.params.id}`
    })
}

//Actualizar bootcamp
exports.updatebootcamp = (req , res) =>{
    console.log(req.params.id)
    res
    .status(200)
    .json({
        "success": true,
        "data" : `aqui va actualizarse el bootcamp cuyo id es ${req.params.id}`
    })
}

//Eliminar bootcamp
exports.deletebootcamp = (req , res) =>{
    console.log(req.params.id)
    res
    .status(200)
    .json({
        "success": true,
        "data" : `aqui va a eliminar el bootcamp cuyo id es ${req.params.id}`
    })
}

//Crear nuevo bootcamp
exports.createbootcamp = (req , res) =>{
    res
    .status(200)
    .json({
        "success": true,
        "data" : "aqui vamos a registrar bootcamp"
    })
}
