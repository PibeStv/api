//ARCHIVO DE CONEXION CON LA BASE DE DATOS SQL SERVER

//#region Importa mssql
import sql from "mssql"; //importa el modulo de conexion mssql y llamamos a sql como indica la documentacion
//#endregion

//#region Parametros para la conexion
const dbSettings = {
  // estos parametros se guardan en la constante dbSettings
  user: "pibe", //nombre del usuario con el que se conecta la BD
  password: "pibe2266", //contraseña de la autentificacion sql server
  server: "localhost", //nombre del servidor donde correra la aplicacion
  database: "BD_QR", //nombre de la base de datos a conectar en sql server
  options: {
    //propiedad que engloba encrypt y trustServerCertificate
    encrypt: true, //true si se desplegara en azure
    trustServerCertificate: true, //para un desarrollo local
  },
};
//#endregion

//#region Funcion de conexion
export async function getConnection() {
  //funcion asincrona de conexion a la base de datos
  try {
    const pool = await sql.connect(dbSettings); //sql.connect es una funcion asincrona, una vez termine de conectarse se guardara en un pool desde donde puedo hacer queris o consultas
    return pool; //la funcion de conexion devuelve el pool
  } catch (error) {
    //en caso no se logre la conexion
    console.error(error); //se manda un mensaje de error
  }
}
//#endregion

//#region Exporta sql
export { sql };//para q otros modulos tambien los usen
//#endregion