import { Router} from "express";
import numeroRouter from "./routes/numeroRoutes.js";


const router = Router();

router.use('/numero', numeroRouter);

router.all('/*', (req, res) => {
    return res.status(404).json({
        message: 'Route not found!'
    })
})

export default router;