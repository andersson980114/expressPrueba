//archivo principal
import "dotenv/config" //valiables de entorno
import "./DataBase/conectDb.js"//conectar db
import express from 'express'//express
import cors from 'cors' //cors para ejecutar backend y frontend al tiempo
import taskRouter from './Routes/task.route.js' //rutas

const app = express();//instanciar express

const whiteList = ['http://localhost:8080', '*']//definir rutas permitidas(frontend)

//usar las rutas en cors
app.use(cors({
    origin: (origin, callback) => {
        if (whiteList.includes(origin)) {
          return callback(null, origin)
        } else {
          return callback("error cors origin: " + origin + " no autorizado")
        }
      }
}))
//habilitar formato json
app.use(express.json())

//ruta principal de task
app.use('/api/tasks/v1', taskRouter)

 
//puertos
const PORT = process.env.PORT || 5000 
//lanzar el servidor => npm run dev 
app.listen(PORT, () => console.log("😎😎😉 http://localhost:" + PORT))
 