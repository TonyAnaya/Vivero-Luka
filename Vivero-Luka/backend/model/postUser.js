const sql = require("../db/conexion");

module.exports.postUser = async (datosUser) => {
  try {
    let res = await sql.query(
      `INSERT INTO prospectos (correo_electronico, nombre) VALUES ('${datosUser.correo_electronico}', '${datosUser.nombre}')`
    );
    return res
  } catch (error) {
    console.log(error);
  }
};
