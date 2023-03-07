import {Task} from '../Models/taskModel.js'

//add
export const task = async (req, res) => {
    try {
        const {name, description} = req.body
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
        const tasks = await Task.find() 
        //no hay tareas
        if(!tasks)
            return res.status(400).json({error: "No hay tareas registradas"})
        
        //tareas obtenidas
        return res.json({tasks})

    } catch (error) {
        console.log(error)
        return res.status(500).json({error: "error de servidor"})
  }
};

//findOne
export const findOne =   async (req, res) => {
    const {_id} = req.body
    try {
        const task = await Task.findById(_id)  
        //tarea no encontrada
        if(!task)
            return res.status(400).json({error: "Tarea  no encontrada"}) 
        //tarea encontrada
        return res.json({task})
  
    } catch (error) {
        console.log(error)
        return res.status(500).json({error: "error de servidor"})
    }
  };

//Update task
export const upadteTask=   async (req, res) => {
    const {_id, name, description} = req.body
    try {
        const task = await Task.findById(_id)  
        //tarea no encontrada
        if(!task)
            return res.status(400).json({error: "Tarea  no encontrada, no se pudo modificar"}) 
        
        //tarea modificada
        await Task.findByIdAndUpdate(_id, {name, description})  
        task.save()
        return res.json({ok:'tarea modificada'})
  
    } catch (error) {
        console.log(error)
        return res.status(500).json({error: "error de servidor"})
    }
  };

//delete task
export const deleteTask=   async (req, res) => {
    const _id = req.params.id;
    try {
        const task = await Task.findById(_id)  
        //tarea no encontrada
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
        const tasks = await Task.find() 
        //no hay tareas
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