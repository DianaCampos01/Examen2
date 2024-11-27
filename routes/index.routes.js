import ejemplo from "./ejemplo.js"; 
import { Router } from "express";
import cursos from "./cursos.routes.js";

const indexRouter = Router();

indexRouter.use('/ejemplo', ejemplo);
indexRouter.use('/Cursos', cursos)

export default indexRouter;
