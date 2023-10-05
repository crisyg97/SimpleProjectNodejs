import express from "express";
import ejs from "ejs";

import {dirname} from "path";     //->usados para obtener ruta absoluta de forma dinamica de las vistas
import {fileURLToPath} from "url";//--^

const __dirname = dirname(fileURLToPath(import.meta.url)) //ruta absoluta
console.log(__dirname,'/views')

const app = express()

app.set(__dirname,"/views",) //indico donde esta la carpeta de las vistas
app.set("view engine","ejs")

app.get("/",(req, res) => res.render("index.ejs"))
app.get("/about",(req, res) => res.render("about"))
app.get("/contact",(req, res) => res.render("contact"))

app.listen(3000)
console.log("server is listening on port", 3000)
