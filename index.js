import "dotenv/config" 
import "./DataBase/conectDb.js"
import express from 'express'//
import cors from 'cors'
import taskRouter from './Routes/task.route.js'
const app = express();

const whiteList = ['http://localhost:8080', '*']

app.use(cors({
    origin: (origin, callback) => {
        if (whiteList.includes(origin)) {
          return callback(null, origin)
        } else {
          return callback("error cors origin: " + origin + " no autorizado")
        }
      }
}))

app.use(express.json())

app.use('/api/tasks/v1', taskRouter)

 

const PORT = process.env.PORT || 5000 
app.listen(PORT, () => console.log("😎😎😉 http://localhost:" + PORT))
 