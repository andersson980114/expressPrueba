import express  from "express";
import { body } from "express-validator";
import { deleteAll, deleteTask, findAll, findOne, task, upadteTask } from "../Controllers/taskController.js";
import { validationResults } from "../Middlewares/valTask.js";

//definir endPoints


const router = express.Router()

//ruta estilo formulario:
// en esta rutas se debe establecer los campos que se llenara, las validaciones y el modelo 
router.post('/add', [
        //campo name del modelo task
        body('name', 'Formato incorrecto')
            .trim()//validacion
            .isLength({min:5}),//validacion
        //campo description del modelo tasj
        body('description', 'Formato incorrecto')
            .trim()//validacion
            .isLength({min:10}),//validacion

    ],
    validationResults,//validacion
    task//modelo
)
//rutas para el crud
router.get('/findall', findAll)

router.get('/findone:id', findOne)

router.put('/updatetask', upadteTask)

router.delete('/deletetask/:id', deleteTask)

router.delete('/deleteall', deleteAll)

export default router;