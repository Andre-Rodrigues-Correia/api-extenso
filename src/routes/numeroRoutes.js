import {Router} from "express";
import {numeroPorExtenso} from "../controllers/numeroController.js";

const numeroRouter = Router();

numeroRouter.post('/extenso', numeroPorExtenso);

export default numeroRouter;