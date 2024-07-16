//ARCHIVO QUE CONTIENE LAS CONSULTAS DE LA BASE DE DATOS

//#region Exporta todas las queries (consultas)
export const queries = {
  //exporta la constante queries para ser usada por otros archivos
  getAllPersonal: "SELECT * FROM Personal1",

  addNewPersonal:
    "INSERT INTO Personal1(Nombre, Cargo, Codigo, Imagen)VALUES (@Nombre, @Cargo, @Codigo, @Imagen)",

  getPersonalById: "SELECT * FROM Personal1 where Id = @Id",

  getPersonalByCodigo: "SELECT * FROM Personal1 where Codigo = @Codigo",

  deletePersonalByCodigo:'DELETE FROM Personal1 where Codigo = @Codigo',

  deletePersonalById:'DELETE FROM Personal1 where Id = @Id',


};
//#endregion
