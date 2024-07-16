//ARCHIVO PARA LA CONFIGURACION DE VARIABLES 

//#region importa el modulo dotenv
import { config } from "dotenv";//importa el modulo dotenv que sirve para configurar variables de entorno, y de ese modulo llamamos a su funcion config.
//#endregion

//#region Funcion config
config(); //busca las variables de entonrno que estan definidas en el computador
//#endregion

//#region Exporta la variable port
export default {//port = contiene el valor de la variable de entorno en el archivo. env
  port: process.env.PORT || 4000,//process.env.PORT busca las variables de entorno llamada PORT en el archivo .env y guarada su valor en la variable port que se usara en el archivo app.
  //en caso no exista esa variable le dice q tome el valor de 3000
};
//#endregion



