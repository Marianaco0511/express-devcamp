const sequelize = require('./seq')
const colors =require('colors')

const connectDB = async ()=> {
    try{
    //conectarse a la bd
    await sequelize.authenticate()
    console.log('Conectado a mysql' .bgBlack.magenta)
}catch (error){
    console.log(error)
}

}

module.exports = connectDB