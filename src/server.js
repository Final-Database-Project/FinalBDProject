if(process.env.NODE_ENV !== 'prduction'){
	require('dotenv').config()
}

const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const session = require("express-session");
const flash = require('express-flash')
const passport = require('passport')
const sql = require('./index')
const render  = require('ejs');
const aut = require('./Checkautentification')
const methodOverride = require('method-override')




const app = express();
const port = 3000;





app.set('view-engine', 'ejs')

//parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(flash())
app.use(session({
	secret: process.env.SESSION_SECRET,
	resave: false,
	saveUninitialized: false
}));
app.use(function (req, res, next){
	res.locals.success_mg = req.flash('success_msg');
	res.locals.error_msg = req.flash('error_msg');
	res.locals.error = req.flash('error');
	res.locals.user = req.user || null;
	next();
})

app.use(passport.initialize())
app.use(passport.session())
app.use(methodOverride('_method'))
require('./passport-config')(passport)



require("./routes/login/rutaLogin")(app)
require("./routes/register/rutaRegisterType")(app)
require("./routes/register/rutaRegisterEmpresarial")(app)
require("./routes/register/rutaRegisterPersonal")(app)
require("./routes/usuarios/rutasUsuarioEmpresarial")(app);
require("./routes/seguros/rutaCrearSeguro")(app);
require("./routes/usuarios/rutasUsuarioPersonal")(app);
require("./routes/perfil/rutasPerfil")(app);


app.get("/", aut.checkAuthenticated, (req, res) => {
	res.render('index.ejs', {name: req.user.Nombre})
});

app.get('/logout', aut.checkAuthenticated, (req,res) =>{
	req.logOut()
	res.redirect('/login')
})

// set port, listen for requests
app.listen(port, () => {
	console.log("Server is running on port " + port);
});
