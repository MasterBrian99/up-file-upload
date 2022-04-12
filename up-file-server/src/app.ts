
import * as express from "express";
const app = express.default();
import { Request, Response } from "express";

app.get('/', (_req: Request, res: Response) => {
    res.send('Hello')
})

export default app;