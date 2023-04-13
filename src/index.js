import express from "express";
import cursoRoute from "./routes/curso.route.js";
import estudianteRoute from "./routes/estudiante.route.js";
import estudianteCursoRoute from "./routes/estudianteCurso.route.js";
import  db from "./database.js";
const app=express()

//Setings
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = process.env.PORT || 3000;
//routes
app.use("/curso",cursoRoute)
app.use("/estudiante",estudianteRoute)
app.use("/curso",estudianteCursoRoute)

db.sequelize.sync();

app.listen(PORT,()=>{console.log(`server on port ${PORT}`)})