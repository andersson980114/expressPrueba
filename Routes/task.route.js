import express  from "express";
import { body } from "express-validator";
import { deleteAll, deleteTask, findAll, findOne, task, upadteTask } from "../Controllers/taskController.js";
import { validationResults } from "../Middlewares/valTask.js";

const router = express.Router()

router.post('/add', [
        body('name', 'Formato incorrecto')
            .trim()
            .isLength({min:5}),
        
        body('description', 'Formato incorrecto')
            .trim()
            .isLength({min:10}),

    ],
    validationResults,
    task
)

router.get('/findall', findAll)

router.get('/findone', findOne)

router.put('/updatetask', upadteTask)

router.delete('/deletetask/:id', deleteTask)

router.delete('/deleteall', deleteAll)

export default router;