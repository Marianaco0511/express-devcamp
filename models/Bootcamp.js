const mongoose = require('mongoose')

//Modelo de bootcamps 
const bootcampsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [
            true,
            "Por favor, ingresa nombre"
        ],
        unique: true,
        maxlength:[
            30,
            "No se admiten bootcamps > 30"
        ]
    },
    description : {
        type: String,
        required:[
            true,
            "por favor, ingrese descripción"
        ],
        maxlength:[
            500,
            "no se admiten descripciones > 500"
        ]
    },
    phone:{
        type: String,
        maxlength: [
            20,
            "telefonos no mayores a 20"
        ]
    },
    email:{
        type: String,
        match:[
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'por favor, infrese  email valido'
        ]
    },
    averageCost: Number,
    averageRating: {
        type: Number,
        min:[1, 'calificacióm minima : 1'],
        max:[10, 'Calificación maxima: 10']
    }
})

module.exports = mongoose.model('bootcamp', bootcampsSchema)