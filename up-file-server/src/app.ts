import * as express from "express";
import morgan from 'morgan';
const app = express.default();
import { createProxyMiddleware } from 'http-proxy-middleware';
import { default as fileRouter } from "./controllers/file.controller";
app.use(express.json())

app.use(morgan('combined'))


app.use('/api/file', fileRouter)
app.use('/api/get', createProxyMiddleware({
    target: 'https://drive.google.com',
    changeOrigin: true, // needed for virtual hosted sites
    ws: true, // proxy websockets
    pathRewrite: {
        '^/api/get': '', // rewrite path
    },
    router: () => {
        return "https://drive.google.com/uc?id=18OHnxAyv9DPhoapL-6rtAMXUvE8B9sbr&export=download";
    }
}))
export default app;