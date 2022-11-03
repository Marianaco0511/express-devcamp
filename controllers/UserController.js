//Dependencias:
//el objero de conexion:
const sequelize = require('../config/seq')
//Datatypes de sequelize
const { DataTypes, ValidationError } = require('sequelize')
//el modelo
const UserModel =  require('../models/user')

//crear la cantidad
const User = UserModel(sequelize, DataTypes)
//listar todos los users
exports.getAllusers = async ( req , res) =>{
    try{
        //traer usuarios
        const users = await User.findAll();
        //responde con los datos 
    res
    .status(200)
    .json({
        "success": true,
        "data" : users
    })
    } catch (error){
        res 
            .status(400)
            .json({
                "success": false,
                "errors": "error de servidor desconocido"
        })
    }
    
    
}

//Listar users pi Id
exports.getSingleUser = async (req , res) =>{
    try{ 

     //console.log(req.params.id)
        const SingleUser = await User.findByPk(req.params.id);
        if(SingleUser){
        res
            .status(400)
            .json({
                 "success": true,
                 "data" : SingleUser
        })
    }else{
        res
            .status(400)
            .json({
                 "success": false,
                 "data" : "Usuario no exitente"
        })
    }
    }catch (error){
        res 
            .status(400)
            .json({
                "success": false,
                "errors": "error de servidor desconocido"
        })
    }

}

//Actualizar users
exports.updateUser = async (req , res) =>{
    
    try{   
        const SingleUser = await User.findByPk(req.params.id);
    if(!SingleUser){
        res
            .status(400)
            .json({
                 "success": false,
                 "data" : "Usuario no exitente"
        })
    }else{

        //Actualizar usuario
        await User.update( req.body, {
            where: {
              id: req.params.id 
            }
        })
        const updateUser = await User.findByPk(req.params.id)

    //console.log(req.params.id)
    res
    .status(200)
    .json({
        "success": false,
        "data" : updateUser
    })
          
    }
    

}catch (error){
    res 
    .status(400)
    .json({
        "success": false,
        "errors": "error de servidor desconocido"
    })
}

 
}

//Eliminar users
exports.deleteUser = async (req , res) =>{
    try {
        const SingleUser = await User.findByPk(req.params.id);
        if (!SingleUser) {
            res
            .status(400)
            .json({
                "success": false,
                "errors": "Usuario no existente"
        })
    } else {
        await User.destroy({
            where: {
                id: req.params.id
            }
          });
        }
        } catch (error) {
            res
            .status(400)
            .json({
                "success": false,
                "errors": " Error de servidor desconocido"
            })
        }
        
}


//Crear nuevo users
exports.createUser = async (req , res) =>{
    try{
        const newUser = await User.create(req.body);
        res
            .status(200)
            .json({
              "success": true,
              "data" : newUser
             })
    }catch (error){
        if(error instanceof ValidationError){
            
            //Recorramos el arreglo de errores
            //Foreach
            //map
            const errores= error.errors.map((elemento)=>{return elemento.message})
            
            res 
            .status(400)
            .json({
                "success": false,
                "errors": errores
            })
        }else{
            res 
            .status(400)
            .json({
                "success": false,
                "errors": "error de servidor desconocido"
        })
    }
}

}

