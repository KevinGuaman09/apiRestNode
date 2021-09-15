const { Router } = require('express');
const { check } = require('express-validator');
const { esRolValid } = require('../helpers/db-validators');
const { validarCampos } = require('../middlewares/validar-campos');

const { userGet, userPost, userPut, userDelete } = require('../controllers/usuario');

const router = Router();

router.get('/', userGet);
router.post('/', [
    check('nombre', 'nombre es obligatorio').not().isEmpty(),
    check('password', 'Password debe tener mas de 6 caracteres').isLength({ min: 6 }),
    check('correo', 'Correo no es válido').isEmail(),
    // check('rol','Rol inválido').isIn(['ADMIN_ROLE','USER_ROLE']),
    check('rol').custom(esRolValid),
    validarCampos
], userPost);
router.put('/:id', userPut);
router.delete('/', userDelete);

module.exports = router;