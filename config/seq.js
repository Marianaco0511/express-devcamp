const Sequelize = require('sequelize')
const dotenv = require('dotenv')

//configurar la ruta de config env
dotenv.config({path: './config_env/config.env'})

//Definir un objeto de conexión 
const sequelize = new Sequelize(
    process.env.DATABASE_NAME,
    process.env.DATABASE_USER,
    process.env.DATABASE_PASSWORD,
    {
        host: process.env.DATABASE_HOST,
        dialect: 'mysql',
    }
)
//console.log(sequelize)

module.exports = sequelize