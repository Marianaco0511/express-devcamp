const express = require('express')

const {
    getAllcourses,
    getSinglecourses,
    updatecourses,
    deletecourses,
    createcourses
} = require('../controllers/CoursesController')

//definir onjeto ruteo
const router = express.Router()

//Crear rutas sin parametros
router.route('/')
    .get(getAllcourses)
    .post(createcourses)

//Creat rutas con parametros 
router.route('/:id')

    .get(getSinglecourses)
    .put(updatecourses)
    .delete(deletecourses)

module.exports = router