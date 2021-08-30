const mongoose = require('mongoose')

const dbConnection=async()=>{

    try {
        await mongoose.connect(process.env.URL_MONGODB,{
            useNewUrlParser:true,
            useUnifiedTopology: true,
            useCreateIndex:true,
            useFindAndModify:false
        })  
        console.log('DATABASE CONNECTED SUCCESFULLY')
        
    } catch (error) {
        console.log(error)
        throw new Error('Error en base de datos')
    }
}

module.exports ={
    dbConnection
}