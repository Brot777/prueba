import { Router } from "express";
import { createCurso} from "../controlles/curso.js";
const router=Router()

router.post("/",createCurso)
router.get("/",createCurso)

export default router