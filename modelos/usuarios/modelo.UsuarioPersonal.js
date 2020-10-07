const sql = require("../../src/index");

const UsuarioPersonal = function UsuarioPersonal(usuarioPersonal) {
	this.Correo = usuarioPersonal.Correo;
	this.Contraseña = usuarioPersonal.Contraseña;
	this.Nombre = usuarioPersonal.Nombre;
	this.Apellido = usuarioPersonal.Apellido;
	this.Direccion = usuarioPersonal.Direccion;
	this.NumeroTelefonico = usuarioPersonal.NumeroTelefonico;
	this.Cedula = usuarioPersonal.Cedula;
	this.FechaNacimiento = usuarioPersonal.FechaNacimiento;
};

UsuarioPersonal.crear = (nuevousuario, result) => {
	const request = sql.request();
	request.input("Correo", nuevousuario.Correo);
	request.input("Contraseña", nuevousuario.Contraseña);
	request.input("Nombre", nuevousuario.Nombre);
	request.input("Direccion", nuevousuario.Direccion);
	request.input("NumeroTelefonico", nuevousuario.NumeroTelefonico);
	request.input("Apellido", nuevousuario.Apellido);
	request.input("Cedula", nuevousuario.Cedula);
	request.input("FechaNacimiento", nuevousuario.FechaNacimiento);

	request.execute("CrearUsuarioPersonal", (err) => {
		if (err) {
			console.log("error: ", err);
			result(err, null);
			return;
		}
		request.query(
			"SELECT IDENT_CURRENT('Usuario') As idUsuario; SELECT IDENT_CURRENT('UsuarioPersonal') As idUsuarioPersonal",
			(error, res) => {
				if (err) {
					console.log("error: ", err);
					result(err, null);
					return;
				}
				console.dir(res.recordset[0].idUsuario);
				console.log("UsuarioPersonal creado: ", {
					idUsuario: res.recordsets[0][0].idUsuario,
					...nuevousuario,
					idUsuarioPersonal: res.recordsets[1][0].idUsuarioPersonal,
				});
				result(null, {
					idUsuario: res.recordset[0].idUsuario,
					...nuevousuario,
					idUsuarioPersonal: res.recordsets[1][0].idUsuarioPersonal,
				});
			}
		);
	});
};

module.exports = UsuarioPersonal;
