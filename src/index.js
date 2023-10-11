import express from "express";
import ejs from "ejs";
import {router} from "./routes/index.js"

import {dirname} from "path";     //->usados para obtener ruta absoluta de forma dinamica de las vistas
import {fileURLToPath} from "url";//--^

const __dirname = dirname(fileURLToPath(import.meta.url)) //ruta absoluta de src 
//console.log(__dirname,'/views')

const app = express()

app.set("views", __dirname +"/views");//indico donde esta la carpeta de las vistas
app.set("view engine","ejs")
app.use(router)

app.use(express.static(__dirname + '/public'))

app.listen(3000)
console.log("server is listening on port", 3000)
