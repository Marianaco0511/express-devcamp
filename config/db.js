const mongoose = require('mongoose')

//const uri = 'mongodb+srv://mariana:Mariana200515@cluster0.zudkxrt.mongodb.net/bootcamps-sena?retryWrites=true&w=majority'
const uri = 'mongodb://localhost:27017/bootcamps-sena'

//Componente de conexion de BD
//tipo:funcional

const connectDB = async() => {
    const conn = await mongoose.connect(uri , {
        useNewUrlParser : true,
        useUnifiedTopology: true 
    })

    console.log(`MongoDB Conectado: ${conn.connection.host}`)
}

connectDB()