import express  from "express";
import { body } from "express-validator";
import { findAll, task } from "../Controllers/taskController.js";
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

export default router;