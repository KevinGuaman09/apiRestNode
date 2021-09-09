
const express = require('express')
const cors = require('cors');
const { dbConnection } = require('../database/config');
class Server{
    constructor(){
        this.app = express()
        this.port  = process.env.PORT
        this.userPath = '/api/usuarios';
        //CONECTED DATABASE
        this.conBdd()
        this.middlewares()
        this.routes()


    }
    async conBdd(){
        await dbConnection()
    }
    middlewares(){
        this.app.use(express.static('public'));
        this.app.use(express.json());
        this.app.use(cors());
    }
    routes(){
        this.app.use(this.userPath,require('../routes/usuario'));
    }
    listen(){
        this.app.listen(this.port,(req,res)=>{
            console.log(`Server running on port : ${this.port}`)
        })
    }
}
module.exports = Server;