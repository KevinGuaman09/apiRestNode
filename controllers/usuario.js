const { response } = require('express')
const bcryptjs =require('bcryptjs');
const Usuario = require('../models/usuario'); 

const userGet=(req,res=response)=>{
    const {id,apiKey,limit} = req.query;
    res.json({
        msg: 'GET API',
        id,apiKey,limit
    })
}
const userPost=async(req,res=response)=>{
    //retorno de errores
 
    const {nombre,correo,password,rol} = req.body;
    const usuario = new Usuario({nombre,correo,password,rol});
    //verificar si correo existe
    const emailExists = await Usuario.findOne({correo});
    if(emailExists){
        return res.status(400).json({
            msg:'Email ya existe,intente otravez'
        })
    }
    //encriptar password
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password,salt);
    //guardar BDD
    await usuario.save();
    res.json({
        usuario
    })
}
const userPut=(req,res=response)=>{
    
    const {id} = req.params.id;
    
    res.json({
        msg: 'PUT API',
        id
        
    })
}
const userDelete=(req,res=response)=>{
    res.json({
        msg: 'DELETE API'
    })
}
module.exports = {
    userGet,
    userPost,
    userPut,
    userDelete
}