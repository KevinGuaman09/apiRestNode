
const express = require('express')
const cors = require('cors')
class Server{
    constructor(){
        this.app = express()
        this.port  = process.env.PORT
        this.userPath = '/api/users';
        this.middlewares()
        this.routes()


    }
    middlewares(){
        this.app.use(express.static('public'));
        this.app.use(express.json());
        this.app.use(cors());
    }
    routes(){
        this.app.use(this.userPath,require('../routes/user'));
    }
    listen(){
        this.app.listen(this.port,(req,res)=>{
            console.log(`Server running on port : ${this.port}`)
        })
    }
}
module.exports = Server;