const sql = require("../../src/index");

const UsuarioEmpresarial = function UsuarioEmpresarial(usuarioEmpresarial) {
	this.Correo = usuarioEmpresarial.Correo;
	this.Contraseña = usuarioEmpresarial.Contraseña;
	this.Nombre = usuarioEmpresarial.Nombre;
	this.Direccion = usuarioEmpresarial.Direccion;
	this.NumeroTelefonico = usuarioEmpresarial.NumeroTelefonico;
	this.RNC = usuarioEmpresarial.RNC;
};

UsuarioEmpresarial.crear = (nuevousuario, result) => {
	const request = sql.request();
	request.input("Correo", nuevousuario.Correo);
	request.input("Contraseña", nuevousuario.Contraseña);
	request.input("Nombre", nuevousuario.Nombre);
	request.input("Direccion", nuevousuario.Direccion);
	request.input("NumeroTelefonico", nuevousuario.NumeroTelefonico);
	request.input("RNC", nuevousuario.RNC);

	request.execute("CrearUsuarioEmpresarial", (err, res) => {
		if (err) {
			console.log("error: ", err);
			result(err, null);
			return;
		}
		console.log("UsuarioEmpresarial creado: ", { ...nuevousuario });
		result(null, { ...nuevousuario });
	});
};

module.exports = UsuarioEmpresarial;
