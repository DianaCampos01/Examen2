import { Router } from "express";
import { deleteCurso, getAllCursos, getIdCurso, postCurso, putCurso } from "../controllers/cursos.controllers.js";


const cursos = Router();

cursos.get('/', getAllCursos)
cursos.get('/:id', getIdCurso)
cursos.post('/', postCurso)
cursos.put('/:id', putCurso)
cursos.delete('/:id', deleteCurso)

export default cursos