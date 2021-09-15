const mongoose = require('mongoose');

const dbConnection=async()=>{

    try {
        await mongoose.connect(process.env.URL_MONGODB,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            
        })  
        console.log('DATABASE CONNECTED SUCCESFULLY')
        
    } catch (error) {
        console.log(error)
        throw new Error('DATABASE NOT CONNECTED')
    }
}

module.exports ={
    dbConnection
}