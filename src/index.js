//ARCHIVO QUE ARRANCA LA APLICACION

//#region Importa el obejeto app
import app from "./app"; //importamos la variable y/o objeto app del archivo llamado app
//#endregion

//#region Corre la aplicacion
app.listen(app.get('port'));//le decimos a la app en q puerto correra
//#endregion

//#region Mensaje por consola
console.log("server on port", app.get('port'));//mensaje de confirmacion del puerto
//#endregion