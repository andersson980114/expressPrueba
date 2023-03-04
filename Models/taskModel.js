import mongoose from "mongoose";

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