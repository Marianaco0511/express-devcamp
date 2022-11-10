const express = require('express')

const {
    getAllreviews,
    getSinglereviews,
    updatereviews,
    deletereviews,
    createreviews
} = require('../controllers/ReviewsController')

//definir onjeto ruteo
const router = express.Router()

//Crear rutas sin parametros
router.route('/')
    .get(getAllreviews)
    .post(createreviews)

//Creat rutas con parametros 
router.route('/:id')

    .get(getSinglereviews)
    .put(updatereviews)
    .delete(deletereviews)

module.exports = router