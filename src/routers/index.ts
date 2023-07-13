import express, {Router} from 'express'
import categoriesRouter from './categoriesRouter'

const router = Router();

router.use(express.json());
router.use(categoriesRouter);

export default router;