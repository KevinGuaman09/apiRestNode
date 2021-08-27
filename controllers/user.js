const { response } = require('express')

const userGet=(req,res=response)=>{
    const {id,apiKey,limit} = req.query;
    res.json({
        msg: 'GET API',
        id,apiKey,limit
    })
}
const userPost=(req,res=response)=>{
    const {nombre , apellido} = req.body
    res.json({
        msg: 'POST API',
        nombre,apellido
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