
const Role = require('../models/role');
 
const esRolValid = async(rol = '') => {
    const existeRol = await Role.findOne({rol})
    if(!existeRol){
        throw new Error(`El rol ${rol} no es válido `) 
    }
   }

   module.exports = {
       esRolValid
   }