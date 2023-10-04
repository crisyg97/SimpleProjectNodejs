import express from "express";
import ejs from "ejs";

const app = express()
app.get("/",(req, res) => res.send("hello server"))

app.listen(3000)
console.log("server is listening on port", 3000)
