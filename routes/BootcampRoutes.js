const express = require('express')

const {
    getAllbootcamp,
    getSinglebootcamp,
    updatebootcamp,
    deletebootcamp,
    createbootcamp
} = require('../controllers/BootcampController')


//definir objeto ruteo
const router = express.Router()

//Crear rutas sin parametros
router.route('/')
        .get(getAllbootcamp)
        .post(createbootcamp)


//crear rutas con parametros
router.route('/:id')
        .get(getSinglebootcamp)
        .put(updatebootcamp)
        .delete(deletebootcamp)



module.exports = router