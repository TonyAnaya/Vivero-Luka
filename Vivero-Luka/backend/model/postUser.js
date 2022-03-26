const sql = require("../db/conexion");

module.exports.postUser = async (datosUser) => {
  try {
    let res = await sql.query(
      `INSERT INTO prospectos (correo_electronico, nombre, telefono, mensaje) VALUES ('${datosUser.correo_electronico}', '${datosUser.nombre}', '${datosUser.telefono}', '${datosUser.mensaje}')`
    );
    return res
  } catch (error) {
    console.log(error);
  }
};
