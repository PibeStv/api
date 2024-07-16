//ARCHIVO QUE CONTIENE LAS URL Y CUANDO SE EJECUTEN ESTAS RUTAS, SE LLAMARAN A LAS FUNCIONES DEL ARCHIVO personal.controller

//#region Importaciones
import { Router } from "express"; //Importamos express y llamamos a su funcion Rourter, esta funcion nos permite crear urls
import {
  getPersonal,
  createNewPersonal,
  getPersonalById,
  getPersonalByCodigo,
  deletePersonalByCodigo,
  deletePersonalById,
} from "../controllers/personal.controller"; // desde la carpeta controllers en el archivo personal.controller busca estas funciones e importalas aqui.
//#endregion

//#region Instancia router
const router = Router(); //instanciamos la funcion router
//#endregion

//#region Rutas
router.get("/personal1", getPersonal);

router.post("/personal1", createNewPersonal);

router.get("/personal1/:id", getPersonalById);

router.get("/personal1/codigo/:codigo", getPersonalByCodigo);

router.delete("/personal1/codigo/:codigo", deletePersonalByCodigo);

router.delete("/personal1/:id", deletePersonalById);
//#endregion

//#region Exporta router
export default router;
//#endregion
