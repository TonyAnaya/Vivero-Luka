const sql = require("../db/conexion");

module.exports.getUser = async (datosUser) => {
  try {
    let res = await sql.query(
      `SELECT id, correo_electronico, nombre, telefono, mensaje, fecha FROM prospectos`
    );
    let res0 = res[0]
    console.log(res0)
    return res0
  } catch (error) {
    console.log(error);
  }
};
