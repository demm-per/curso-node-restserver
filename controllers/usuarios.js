const { request, response } = require('express');

const usuariosGET = ( req = request, res = response ) => {
    const {nombre,edad,ape} = req.query;
    res.json({
        msg:'get Api - controlador',
        nombre,
        ape,
        edad
    });
}

const usuariosPut = ( req, res ) => {
    // const {id} = req.params; es lo mismo que abajo
    const id = req.params.id;
    res.json({
        msg:'put Api  - controlador',
        id
    });
}

const usuariosPost = ( req, res ) => {
    const body = req.body;
    res.json({
        msg:'post Api  - controlador',
        body
    });
}

const usuariosDelete = ( req, res ) => {
    res.json({
        msg:'delete Api  - controlador'
    });
}

module.exports = {
    usuariosGET,
    usuariosPut,
    usuariosPost,
    usuariosDelete
}