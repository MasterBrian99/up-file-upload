import * as express from "express";
import morgan from 'morgan';
const app = express.default();

import { default as fileRouter } from "./controllers/file.controller";
app.use(express.json())

app.use(morgan('combined'))

app.use('/file', fileRouter)
export default app;