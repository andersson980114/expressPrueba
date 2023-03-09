//controladores se encarga de las querys en la db
import {Task} from '../Models/taskModel.js'

//add
export const task = async (req, res) => {
    try {
        //destructurar el body
        const {name, description} = req.body
        //crear y guardar la tarea
        const task =  new Task({name, description})
        await task.save()
        return res.status(200).json({ok: 'Nueva tarea agregada'})
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({error: "error de servidor"})
    }
}

//find all
export const findAll =   async (req, res) => {
    try {
        //traer todo con find() o findall()
        const tasks = await Task.find() 
        //si no hay tareas se notifica por consola
        if(!tasks)
            return res.status(400).json({error: "No hay tareas registradas"})
        
        //tareas obtenidas
        return res.status(200).json({tasks})

    } catch (error) {
        console.log(error)
        return res.status(500).json({error: "error de servidor"})
  }
};

//findOne
export const findOne =   async (req, res) => {
    //obtener el id por ruta
    const _id = req.params.id;
    try {
        //buscar la tarea por id
        const task = await Task.findById(_id)  
       //si no hay tareas se notifica por consola
        if(!task)
            return res.status(400).json({error: "Tarea  no encontrada"}) 
        //tarea encontrada
        return res.status(200).json({task})
  
    } catch (error) {
        console.log(error)
        return res.status(500).json({error: "error de servidor"})
    }
  };

//Update task
export const upadteTask=   async (req, res) => {
    //destructurar el body
    const {_id, name, description} = req.body
    try {
        //verificar que exista la tarea
        const task = await Task.findById(_id)  
        //si no hay tareas se notifica por consola
        if(!task)
            return res.status(400).json({error: "Tarea  no encontrada, no se pudo modificar"}) 
        
        //tarea modificada
        await Task.findByIdAndUpdate(_id, {name, description})  
        task.save()
        return res.status(200).json({ok:'tarea modificada'})
  
    } catch (error) {
        console.log(error)
        return res.status(500).json({error: "error de servidor"})
    }
  };

//delete task
export const deleteTask=   async (req, res) => {
    const _id = req.params.id;
    try {
        //verificar que la tarea existe
        const task = await Task.findById(_id)  
       //si no hay tareas se notifica por consola
        if(!task) 
            return res.status(400).json({error: "Tarea "+_id+"  no encontrada, no se pudo eliminar "}) 
        
        //tarea eliminada
        await Task.findByIdAndRemove(_id)    
        return res.json({ok: 'deleted task'})
  
    } catch (error) {
        console.log(error)
        return res.status(500).json({error: "error de servidor"})
    }
  };

  
//delete all task
export const deleteAll =   async (req, res) => { 
    try {
        //verificar que existan tareas
        const tasks = await Task.find() 
       //si no hay tareas se notifica por consola
        if(!tasks)
            return res.status(400).json({error: "No hay tareas registradas"})
        
        //Eliminar tareas obtenidas
        await Task.deleteMany()   
        return res.json({ok: 'deleted all'})
  
    } catch (error) {
        console.log(error)
        return res.status(500).json({error: "error de servidor"})
    }
  };