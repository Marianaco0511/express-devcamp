//Dependencias:
//el objero de conexion:
const sequelize = require('../config/seq')
//Datatypes de sequelize
const { DataTypes, ValidationError } = require('sequelize')
//el modelo
const UserModel =  require('../models/reviews')

//crear la cantidad
const User = UserModel(sequelize, DataTypes)
//listar todos los users
exports.getAllreviews = async ( req , res) =>{
    try{
        //traer usuarios
        const courses = await User.findAll();
        //responde con los datos 
    res
    .status(200)
    .json({
        "success": true,
        "data" : courses
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
exports.getSinglereviews = async (req , res) =>{
    try{ 

     //console.log(req.params.id)
        const Singlereviews = await User.findByPk(req.params.id);
        if(Singlereviews){
        res
            .status(400)
            .json({
                 "success": true,
                 "data" : Singlereviews
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
exports.updatereviews = async (req , res) =>{
    
    try{   
        const updatereviews = await User.findByPk(req.params.id);
    if(!updatereviews){
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
        const updatereviews = await User.findByPk(req.params.id)

    //console.log(req.params.id)
    res
    .status(200)
    .json({
        "success": false,
        "data" : updatereviews
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
exports.deletereviews = async (req , res) =>{
    try {
        const deletereviews = await User.findByPk(req.params.id);
        if (!deletereviews) {
            res
            .status(400)
            .json({
                "success": false,
                "errors": "Courses no existente"
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
exports.createreviews = async (req , res) =>{
    try{
        const newreviews = await User.create(req.body);
        res
            .status(200)
            .json({
              "success": true,
              "data" : newreviews
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