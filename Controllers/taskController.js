import {Task} from '../Models/taskModel.js'

//
export const task = async (req, res) => {
    const {name, description} = req.body
    const task =  new Task({name, description})
    await task.save()
    res.json({ok: 'new Task added'})
}

export const findAll =   async (req, res) => {
  try {
        const tasks = await Task.find() 
        return res.json({tasks})

  } catch (error) {
     console.log(error)
     return res.status(500).json({error: "error de servidor"})
  }
};