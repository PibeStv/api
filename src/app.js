//ARCHIVO PARA CONFIGUARAR EXPRESS

//#region Importacion
import express from "express"; //importando modulo express
import config from "./config"; //importa la funcion llamada config del archivo config
const cors = require("cors");

import personalRoutes from "./routes/personal.routes"; //desde la carpeta routes importa el archivo personal.routes con el nombre personalRoutes
//#endregion

//#region Ejecucion de express
const app = express(); //ejecuta el modulo express y lo guarda en una constante "app" que en realidad es un objeto.
//#endregion

//#region Ajustes
app.set("port", config.port); //usa el puerto que esta definido en la variable 'port' del archivo config
//#endregion

//#region Middlewares: programa intermedio
//como el servidor no esta configurado para aceptar datos en json, lo tengo q configurar
app.use(express.json()); //antes de que lleguen las rutas quiero q uses express.json()
app.use(express.urlencoded({ extended: false })); //para q tmb recibas datos desde formularios html
//#endregion

//#region Cors
//esta linea cors ayudo a que se pueda leer correctamente el fetch
app.use(cors());
//#endregion

//#region Rutas
app.use(personalRoutes); //app usa personalRoutes
//#endregion

//#region Exporta app
export default app; //exporta app para us uso en otros archivos
//#endregion
