const sql = require("../../src/index");

const CrearSeguroVidaPersonal = function CrearSeguroVidaPersonal(
  crearseguroVidaPersonal
) {
  this.idAsegurador = crearseguroVidaPersonal.idAsegurador;
  this.idUsuario = crearseguroTransporte.idUsuario;
  this.idTipoSeguro = crearseguroVidaPersonal.idTipoSeguro;
  this.idMoneda = crearseguroVidaPersonal.idMoneda;
  this.idTipoCliente = crearseguroVidaPersonal.idTipoCliente;
  this.Poliza = crearseguroVidaPersonal.Poliza;
  this.intermediario = crearseguroVidaPersonal.intermediario;
  this.precio = crearseguroVidaPersonal.precio;
  this.fechaPago = crearseguroVidaPersonal.fechaPago;
  this.fechaVencido = crearseguroVidaPersonal.fechaVencido;
  this.Profesion = crearseguroVidaPersonal.Profesion;
  this.RazonCompra = crearseguroVidaPersonal.RazonCompra;
};

CrearSeguroVidaPersonal.crear = (nuevoseguroVidaPersonal, result) => {
  const request = sql.request();
  request.input("idAsegurador", nuevoseguroVidaPersonal.idAsegurador);
  request.input("idUsuario", nuevoseguroVidaPersonal.idUsuario);
  request.input("idTipoSeguro", nuevoseguroVidaPersonal.idTipoCliente);
  request.input("idMoneda", nuevoseguroVidaPersonal.idMoneda);
  request.input("TipoCliente", nuevoseguroVidaPersonal.idTipoCliente);
  request.input("Poliza", nuevoseguroVidaPersonal.Poliza);
  request.input("intermediario", nuevoseguroVidaPersonal.intermediario);
  request.input("Precio", nuevoseguroVidaPersonal.precio);
  request.input("FechaPago", nuevoseguroVidaPersonal.fechaPago);
  request.input("FechaVencimiento", nuevoseguroVidaPersonal.fechaVencido);
  request.input("Profesion", nuevoseguroVidaPersonal.Profesion);
  request.input("RazonCompra".nuevoseguroVidaPersonal.RazonCompra);
  request.execute("CrearSeguroVidaPersonal", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    }

    result(null, {
      ...nuevoseguroVidaPersonal,
    });

    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
  });
};

module.exports = CrearSeguroVidaPersonal;
