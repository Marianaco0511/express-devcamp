//Dependencias:
//el objero de conexion:
const sequelize = require('../config/seq')
//Datatypes de sequelize
const { DataTypes, ValidationError } = require('sequelize')
//el modelo
const UserModel =  require('../models/courses')

//crear la cantidad
const User = UserModel(sequelize, DataTypes)
//listar todos los users
exports.getAllcourses = async ( req , res) =>{
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
exports.getSinglecourses = async (req , res) =>{
    try{ 

     //console.log(req.params.id)
        const Singlecourses = await User.findByPk(req.params.id);
        if(Singlecourses){
        res
            .status(200)
            .json({
                 "success": true,
                 "data" : Singlecourses
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
exports.updatecourses = async (req , res) =>{
    
    try{   
        const updatecourses = await User.findByPk(req.params.id);
    if(!updatecourses){
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
        const updatecourses = await User.findByPk(req.params.id)

    //console.log(req.params.id)
    res
    .status(200)
    .json({
        "success": false,
        "data" : updatecourses
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
exports.deletecourses = async (req , res) =>{
    try {
        const deletecourses = await User.findByPk(req.params.id);
        if (!deletecourses) {
            res
            .status(200)
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
exports.createcourses = async (req , res) =>{
    try{
        const newCourses = await User.create(req.body);
        res
            .status(200)
            .json({
              "success": true,
              "data" : newCourses
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