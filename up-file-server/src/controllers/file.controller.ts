import { Request, Response } from "express";
import { Router } from "express";
const router = Router();

router.get("/add", (_req: Request, res: Response) => {
    res.send('Hello')
});


export default router;