const express = require('express')
const {
    getAllusers,
    getSingleUser,
    updateUser,
    deleteUser,
    createUser
} = require('../controllers/UserController')


//definir objeto ruteo
const router = express.Router()

//Crear rutas sin parametros
router.route('/')
        .get(getAllusers)
        .post(createUser)


//crear rutas con parametros
router.route('/:id')
        .get(getSingleUser)
        .put(updateUser)
        .delete(deleteUser)


module.exports = router