import {Task} from '../Models/taskModel.js'

//add
export const task = async (req, res) => {
    const {name, description} = req.body
    const task =  new Task({name, description})
    await task.save()
    res.json({ok: 'new Task added'})
}

//find all
export const findAll =   async (req, res) => {
  try {
        const tasks = await Task.find() 
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
          return res.json({task})
  
    } catch (error) {
       console.log(error)
       return res.status(500).json({error: "id no encontrado"})
    }
  };

//Update task
export const upadteTask=   async (req, res) => {
    const {_id, name, description} = req.body
    try {
          const task = await Task.findByIdAndUpdate(_id, {name, description})  
          task.save()
          return res.json({task})
  
    } catch (error) {
       console.log(error)
       return res.status(500).json({error: "id no encontrado"})
    }
  };

//delete task
export const deleteTask=   async (req, res) => {
    const {_id} = req.body
    try {
          await Task.findByIdAndRemove(_id)   

          return res.json({ok: 'delete task'})
  
    } catch (error) {
       console.log(error)
       return res.status(500).json({error: "id no encontrado"})
    }
  };

  
//delete all task
export const deleteAll =   async (req, res) => { 
    try {
          await Task.deleteMany()   

          return res.json({ok: 'deleted all'})
  
    } catch (error) {
       console.log(error)
       return res.status(500).json({error: "no hay registros"})
    }
  };