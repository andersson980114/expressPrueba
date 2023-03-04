import "dotenv/config" 
import "./DataBase/conectDb.js"
import express from 'express'//
import taskRouter from './Routes/task.route.js'
const app = express();

app.use(express.json())

app.use('/api/tasks/v1', taskRouter)

const PORT = process.env.PORT || 5000 
app.listen(PORT, () => console.log("😎😎😉 http://localhost:" + PORT))