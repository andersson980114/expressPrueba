import mongoose from "mongoose";
//crear modelos
//es recomendable un modelo por archivo
const taskSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true,
        index: {unique:true}
    },
    description:{
        type: String,
        required: true,
        trim: true,
    }
})

export const Task = mongoose.model('task', taskSchema)