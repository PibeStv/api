//ARCHIVO DEDICADO A GUARDAR EL CODIGO DE LAS FUNCIONES CRUD A LA BASE DE DATOS.

//#region Importacion
import { getConnection, sql, queries } from "../database"; //importamos getConecction sql y queries de la carpeta database
//#endregion

//#region getPersonal
export const getPersonal = async (req, res) => {
  //funcion asincrona que obtiene toda la data de la tabla personal1 de la base de datos, y se exporta esta funcion para q pueda ser usada por otros archivos
  try {
    const pool = await getConnection(); //llamamos a la conexion y esta retorna un pool.
    const result = await pool.request().query(queries.getAllPersonal); //metodo .request y .query para hacer las consultas. le hacemos un request y un query al pool y el resultado es guardado en result.
    //con el pool le hacemos peticion, y la peticion es hacer una consulta, la consulta es lo q esta dentro del query, pero como esto tomara tiempo, le digo await y guarda el resultado en la variable result
    console.log(result); //mensaje por consola
    res.json(result.recordset); //muestra el resultado en el navegador su propiedad recordset(es un arreglo que trae la respuesta)
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
//#endregion

//#region createNewPersonal
export const createNewPersonal = async (req, res) => {
  //funcion asincrona que crea una nueva columna en la tabla personal1
  const { nombre, cargo, imagen } = req.body; // en req.body se recibe los datos que el cliente le envia, los datos q seran enviados seran el nombre y cargo.
  let { codigo } = req.body;
  try {
    const pool = await getConnection(); //llamamos a la conexion y esta retorna un pool.
    await pool //.input permite agregar informacion  a la base de datos
      .request()
      .input("nombre", sql.VarChar, nombre)
      .input("cargo", sql.VarChar, cargo)
      .input("codigo", sql.Int, codigo)
      .input("imagen", sql.Text, imagen)
      .query(queries.addNewPersonal);
    res.json({ nombre, cargo, codigo, imagen }); //muestra esas 4 variables
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
//#endregion

//#region getPersonalById
export const getPersonalById = async (req, res) => {
  const { id } = req.params; //Desde reuest. params se recibira ese id

  const pool = await getConnection();
  const result = await pool
    .request()
    .input("Id", id)
    .query(queries.getPersonalById);
  console.log(result);
  res.send(result.recordset[0]); //para que me dee el primer objeto
};
//#endregion

//#region getPersonalByCodigo
export const getPersonalByCodigo = async (req, res) => {
  const { codigo } = req.params;

  const pool = await getConnection();
  const result = await pool
    .request()
    .input("Codigo", codigo)
    .query(queries.getPersonalByCodigo);
  console.log(result);
  res.send(result.recordset[0]);
};
//#endregion

//#region deletePersonal por CODIGO
export const deletePersonalByCodigo = async (req, res) => {
  const { codigo } = req.params;
  const pool = await getConnection();
  const result = await pool
    .request()
    .input("Codigo", codigo)
    .query(queries.deletePersonalByCodigo);
  console.log(result);
  res.send(result);
};
//#endregion

//#region deletePersonal por ID
export const deletePersonalById = async (req, res) => {
  const { id } = req.params;
  const pool = await getConnection();
  const result = await pool
    .request()
    .input("Id", id)
    .query(queries.deletePersonalById);
  console.log(result);
  res.send(result);
};
//#endregion
