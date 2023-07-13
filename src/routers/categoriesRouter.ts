import Controler from "../controller/categoriaController"
import { Router } from "express";

const router = Router()

router.post('/categories', Controler.create)


export default router;
