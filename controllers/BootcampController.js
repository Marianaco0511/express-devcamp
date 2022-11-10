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
    try{
        //traer usuarios
     const bootcamp = await User.findAll();
     //responde con los datos 
    res
    .status(200)
    .json({
        "success": true,
        "data" : bootcamp
    })
    }catch (error){
        res 
        .status(400)
        .json({
            "success": false,
            "errors": "error de servidor desconocido"
    })  
    }

     
}

//Listar bootcamp pi Id
exports.getSinglebootcamp = async (req , res) =>{
    try{
        const Singlebootcamp = await User.findByPk(req.params.id);
        if(Singlebootcamp){
    res
    .status(200)
    .json({
        "success": true,
        "data" : Singlebootcamp
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

//Actualizar bootcamp
exports.updatebootcamp = async (req , res) =>{
    try{
        const updatebootcamp = await User.findByPk(req.params.id);
        if(!updatebootcamp){
            res
            .status(200)
            .json({
            "success": true,
            "data" : "bootcamp no existente"
    }) 
        }else{
            await User.update( req.body, {
                where: {
                  id: req.params.id 
                }
            })
            const updatebootcamp = await User.findByPk(req.params.id)

            res
            .status(200)
            .json({
                "success": false,
                "data" : updatebootcamp
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

//Eliminar bootcamp
exports.deletebootcamp = async (req , res) =>{
    try{
         const deletebootcamp = await User.findByPk(req.params.id);
         if(!deletebootcamp){
                  res
            .status(200)
            .json({
                "success": true,
                "data" : "Bootcamp no existente"
            })
         }else{
            await User.destroy({
                where: {
                    id: req.params.id
                }
              });
         }
      
    }catch (error) {
        res
        .status(400)
        .json({
            "success": false,
            "errors": " Error de servidor desconocido"
        })
    }
}

//Crear nuevo bootcamp
exports.createbootcamp = async (req , res) =>{
    try{
        const newBootcamp = await User.create(req.body);
         res
            .status(200)
            .json({
                "success": true,
                "data" : newBootcamp
            })
    }catch (error){
        if(error instanceof ValidationError){
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
