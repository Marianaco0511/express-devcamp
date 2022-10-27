//Dependencias:
//el objero de conexion:
const sequelize = require('../config/seq')
//Datatypes de sequelize
const { DataTypes } = require('sequelize')
//el modelo
const UserModel =  require('../models/user')

//crear la cantidad
const User = UserModel(sequelize, DataTypes)
//listar todos los users
exports.getAllusers = async ( req , res) =>{
    //traer usuarios
    const users = await User.findAll();
    //responde con los datos 
    res
    .status(200)
    .json({
        "success": true,
        "data" : users
    })
}

//Listar users pi Id
exports.getSingleUser = async (req , res) =>{
    //console.log(req.params.id)
    const SingleUser = await User.findByPk(req.params.id);
    res
    .status(200)
    .json({
        "success": true,
        "data" : SingleUser
    })
}

//Actualizar users
exports.updateUser = async (req , res) =>{

    await User.update( req.body, {
        where: {
          id: req.params.id 
        }
      });
      const SingleUser = await User.findByPk(req.params.id);

    //console.log(req.params.id)
    res
    .status(200)
    .json({
        "success": true,
        "data" : SingleUser
    })
}

//Eliminar users
exports.deleteUser = async (req , res) =>{
    const SingleUser = await User.findByPk(req.params.id);
    await User.destroy({
        where: {
          id: req.params.id
        }
      });

    //console.log(req.params.id)
    res
    .status(200)
    .json({
        "success": true,
        "data" : SingleUser
    })
}

//Crear nuevo users
exports.createUser = async (req , res) =>{

    const newUser = await User.create(req.body);
    res
    .status(200)
    .json({
        "success": true,
        "data" : newUser
    })
}

