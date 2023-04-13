import express from "express";
import cursoRoute from "./routes/curso.route.js";
import estudianteRoute from "./routes/estudiante.route.js";
import estudianteCursoRoute from "./routes/estudianteCurso.route.js";
import  "./database.js";
const app=express()

//routes
app.use("/curso",cursoRoute)
app.use("/estudiante",estudianteRoute)
app.use("/curso",estudianteCursoRoute)

app.listen(3000,()=>{console.log("server on port 30000")})