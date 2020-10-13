module.exports = app => {
    const crearSeguroIncendio = require("../../../controladores/seguro/crearseguroincendio.controlador")
    const aut = require('../../Checkautentification')
    const infoseguro = require('../../../controladores/seguro/infoseguro.comtrolador')


    app.post("/Registrar/Seguro/Incendio", crearSeguroIncendio.crear);

    app.get('/Registrar/Seguro/Incendio', aut.checkAuthenticated, (req, res) =>{
        infoseguro.getInfo( (req, data) =>{
            console.log("Data: ", data)
            res.render('registroSeguroIncendio.ejs', {info: data})
        })
    } )
}