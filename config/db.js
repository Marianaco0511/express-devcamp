const sequelize = require('./seq')
const colors =require('colors')
const { DataTypes } = require('sequelize')

//Crear una instancia de el modelo User
const UserModel = require('../models/user')
const User =  UserModel(sequelize, DataTypes)

//definir la funcion de conexion a la base de datos 


const connectDB = async ()=> {
    try{
    //conectarse a la bd
    await sequelize.authenticate()
    console.log('Conectado a mysql' .bgBlack.magenta)
    const jane = await User.create({ username: "Mariana", email: "Maria@misena.edu.co", password:"2468" });
    console.log("Jane's auto-generated ID:", jane.id);
}catch (error){
    console.log(error)
}

}

connectDB()